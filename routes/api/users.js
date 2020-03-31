const express = require("express");
const router = express.Router();
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const Channel = require('../../models/Channel');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

router.get("/test", (req, res) => res.json({ msg: "This is a Test" }));

router.post("/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ username: req.body.username }).then(user => {
        if (user) {
            errors.username = "User already exists";
            return res.status(400).json(errors);
        } else {
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => {
                            const payload = { id: user.id, username: user.username };

                            jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer " + token
                                });
                            });
                        })
                        .catch(err => console.log(err));
                });
            });
        }
    });
});

router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email }).then(user => {
        if (!user) {
            errors.email = "This user does not exist";
            return res.status(400).json(errors);
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                const payload = { id: user.id, email: user.email, username: user.username };

                jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                    res.json({
                        success: true,
                        token: "Bearer " + token
                    });
                });
            } else {
                errors.password = "Incorrect password";
                return res.status(400).json(errors);
            }
        });
    });
});

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err =>
            res.status(404).json({ notuserfound: 'No information found for the current user' })
        );
})

// Lists of the users and their info in a request array. If no array present, lists all users
router.post('/userlist', (req, res) => {
    if (req.body.userArray)
        User.find({'_id': { $in: req.body.userArray }},
                          { password: 0,
                            channels: 0,
                            dmgroups: 0,
                            updatedAt: 0,
                            __v: 0 }).then(users => res.json(users));
    else
        User.find({},{ password: 0,
                       updatedAt: 0,
                       __v: 0 }).then(users => res.json(users));    
});

// user's channels
router.get('/:id/channels', (req, res) => {
    User.findById(req.params.id)
        .populate({path: "channels" , 
                   select: "name description accessType createdAt channelMessages channelMembers", 
                   populate: {path: "channelMessages", select: "text authoredBy createdAt",
                   populate: {path: "authoredBy", select: "username email createdAt"}}})
        .then(user => res.json(user.channels))
        .catch(err =>
            res.status(404).json({ notuserfound: 'No channels found for this user' })
        );
});

// user's dm(direct messages) groups
router.get('/:id/dmgroups', (req, res) => {
    User.findById(req.params.id)
        .populate({path: "dmgroups", select: "dmMessages createdAt", populate: {path: "dmMessages", select: "text authoredBy createdAt", populate:{path: "authoredBy", select: "username email createdAt"}}}) 
        .populate({path: "dmgroups", select: "dmMembers createdAt", populate: {path: "dmMembers", select: "username email createdAt"}})
        .then(user => res.json(user.dmgroups))
        .catch(err =>
            res.status(404).json({ notuserfound: 'No dm groups found for this user' })
        );
})

router.get('/username/:username', (req, res) => {
    req.params.username = req.params.username.toLowerCase()
    User.findOne(
        { 'username': req.params.username },
        (err, user) => {
            if (err){
                return res.status(500).json({ error: true})
            }
            return res.json({alreadyInUse: !! user})
        }
    )
})

module.exports = router;