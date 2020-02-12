const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const User = require('../../models/User');
const Channel = require('../../models/Channel');
const Message = require('../../models/Message');
const validateChannelInput = require('../../validation/channels');

// GET

router.get('/', (req, res) => {
    Channel.find()
        .sort({ date: -1 })
        .then(channels => res.json(channels))
        .catch(err => res.status(404).json({ nochannelsfound: 'No channels found' }));
});

// Channels for a specif user
router.get('/user/:user_id', (req, res) => {
    Channel.find({user: req.params.user_id})
        .then(channels => res.json(channels))
        .catch(err =>
            res.status(404).json({ nochannelsfound: 'No channels found from that user' }
        )
    );
});

// individual channel
router.get('/:id', (req, res) => {
    Channel.findById(req.params.id)
        .then(channel => res.json(channel))
        .catch(err =>
            res.status(404).json({ notchannelfound: 'No channel found with that ID' })
        );
});

// POST
// adds a channel under user ownership

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
      const { errors, isValid } = validateChannelInput(req.body);
  
      if (!isValid) {
        return res.status(400).json(errors);
      }
      
      const newChannel = new Channel({
        name: req.body.name,
        description: req.body.description,
        accessType: req.body.accessType,
        createdBy: req.user.id,
        channelMembers: [req.user.id]
      });
      
    Channel.exists({name: newChannel.name}).then(resp => {
        if (resp) {
            res.status(400).json({ channelexists: "Channel already exist in database"});
        } else {
            newChannel.save().then(channel => res.json(channel));
        }
    });
    }
);



// Right now is only deleting the channel, need to come back and delte messages too!

router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {

    Channel.findById(req.params.id)
        .then(channel => {          
            if (channel.createdBy.toString() === req.user.id){
                channel.delete().then(res.json("Channel deleted"))
                .catch(err => res.status(300).json({ erroroccurred: "Something went wrong while deleting channel"}));                    
            } else {
                res.statusMessage = "You are not the creator";
                return res.status(401).json({message: "You are not the creator and you can't delete it"})
            }
        })     
        .catch(err =>
            res.status(404).json({ notchannelfound: 'No channel found with that ID' })
        );  
});



module.exports = router;