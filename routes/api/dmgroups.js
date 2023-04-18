const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Dmgroup = require('../../models/Dmgroup');
const User = require('../../models/User');
const Channel = require('../../models/Channel');
const Message = require('../../models/Message');


// GET

// individual dmgroup
router.get('/:id', (req, res) => {
    Dmgroup.findById(req.params.id)
        .then(dmgroup => res.json(dmgroup))
        .catch(err =>
            res.status(404).json({ notdmfound: 'No dm group was found with that ID' })
        );
});

// all dmgroups
router.get('/', (req, res) => {
    Dmgroup.find()
        .sort({ date: -1 })
        .then(dmgroups => res.json(dmgroups))
        .catch(err => res.status(404).json({ nodmgroupsfound: 'No dm groups found' }));
});

// POST
// create dmgroup under current user

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    console.log(req.body.members);
    const newDmgroup = new Dmgroup({
        dmMembers: req.body.members.concat(req.user.id)
    });

    newDmgroup.save()
        .then(dmgroup => {
            dmgroup.dmMembers.map( memberId => {
                User.findById(memberId).then(user => {
                    //console.log(user);
                    console.log(dmgroup._id);
                    user.dmgroups.push(dmgroup._id);
                    user.save(); 
                });
            });
            dmgroup.populate("dmMembers")
                .execPopulate()
                .then(dmgroup => res.json(dmgroup));            
        })
        .catch(error => console.log(error));

  }
);

// DELETE
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {

    Dmgroup.findById(req.params.id)
        .then(dmgroup => dmgroup.delete().then(res.json("DM group deleted")))
        .catch(error => res.status(300).json({ erroroccurred: "Something went wrong while deleting dm group" }))
});




module.exports = router;