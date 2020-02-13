const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const User = require('../../models/User');
const Channel = require('../../models/Channel');
const Message = require('../../models/Message');
const jwt = require("jsonwebtoken");

// GET
// messages under specific channel
router.get('/channels/:id', (req, res) => {
    Message.find({ channel: req.params.id })
        .then(messages => res.json(messages))
        .catch(error => res.status(404).json({ noChannelMessage: 'No message found with matching channel id' }))
})

// messages under specific dmgroup
router.get('/dmgroups/:id', (req, res) => {
    Message.find({ dmgroup: req.params.id })
        .then(messages => res.json(messages))
        .catch(error => res.status(404).json({ noDmGroupMessage: 'No message found with matching dm group id' }))
})

// get an specific message
router.get('/:id', (req, res) => {
    Message.findById(req.params.id)
        .then(message => res.json(message))
        .catch(error => console.log(error)) 
})

// POST

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const newMessage = new Message({
      text: req.body.text,
      authoredBy: req.user.id,
      channel: req.body.channel
    });
    
    newMessage.save()
        .then(message => res.json(message))
        .catch(error => console.log(error));
  }
)

// DELETE

router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {

    Message.findById(req.params.id)
        .then(message => {          
            if (message.authoredBy.toString() === req.user.id){
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



module.exports = router;