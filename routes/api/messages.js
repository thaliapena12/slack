const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const User = require('../../models/User');
const Channel = require('../../models/Channel');
const Message = require('../../models/Message');
const jwt = require("jsonwebtoken");

// GET

router.get('/channels/:id', (req, res) => {
    Message.find({ channel: req.params.id })
        .then(messages => res.json(messages))
        .catch(error => console.log(error))
})

// get an specific message
router.get('/:id', (req, res) => {
    Message.findById(req.params.id)
        .then(message => res.json(message))
        .catch(error => console.log(error)) 
})

// POST

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    // const { errors, isValid } = validateChannelInput(req.body);

    // if (!isValid) {
    //   return res.status(400).json(errors);
    // }
    
    const newMessage = new Message({
      text: req.body.text,
      authorBy: req.user.id,
      channel: req.body.channel
    });
    
    newMessage.save().then(message => res.json(message));
  }
)

// DELETE

router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {

    Message.findById(req.params.id)
        .then(message => {          
            if (message.authorBy.toString() === req.user.id){
                message.delete().then(res.json("Your message was deleted"))
                .catch(err => res.status(300).json({ erroroccurred: "Something went wrong while deleting message"}));                    
            } else {
                res.statusMessage = "You are not the creator";
                return res.status(401).json({message: "You are not the author and you can't delete it"})
            }
        })     
        .catch(err =>
            res.status(404).json({ notmessagefound: 'No message found with that ID' })
        );  
});


// // messages under specifc channel
// // messages under a user channel
// router.get('/channels/:id/messages', (req, res) =>{
//   if (!req.user) return res.status(401).end()

//   User.findOne({
//     'username': req.user,
//     'channels': req.params.id,
//   })
//     .exec()
//     .then(user => {
//       if (user) {
//         return Message.find({ channel: req.params.id }).exec()
//       }
//       throw 'Not joined to channel.'
//     })
//     .then(messages => res.json(messages))
//     .then(null, error => {
//       res.status(401).json({ error })
//     })
// })


module.exports = router;