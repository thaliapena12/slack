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

// messages under a user channel
// router.get('/channel/:name/messages', (req, res) =>{
//     if (!req.user) return res.status(401).end()

//   req.params.name = req.params.name.toLowerCase()

//   User.findOne({
//     'username': req.user,
//     // 'channels': req.params.name,
//   })
//     .exec()
//     .then(user => {
//       if (user) {
//         return Message.find({ channel: req.params.name }).exec()
//       }
//       throw 'Not joined to channel.'
//     })
//     .then(messages => res.json(messages))
//     .then(null, error => {
//       res.status(401).json({ error })
//     })
// })


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
            if (1 === 1){
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

//******************************* 
//CHANNEL - USER INTERACTIONS:
//  - Add User
//  - Remove user
//*******************************     

// router.post('/:channel/addUser', passport.authenticate('jwt', { session: false }), (req, res) => {

//     Channel.find({name: req.body.name}).then(channel => res.json(channel));

// });


router.post('/:channelName/addUser', passport.authenticate('jwt', { session: false }), (req, res) => {

    Channel.findOne({name: req.params.channelName})
        .then(channel => {   
            //res.json(channel.channelMembers);  
            if (channel.channelMembers.includes(req.user.id))
                res.status(404).json({ alreadyExists: `${req.user.id} already exists in ${channel.name}` })
            else{
                channel.addUser(req.user.id);
                res.json({success: `${req.user.id} added to ${channel.name}`});  
            }
        })     
        .catch(err => {
            console.log(err);
            res.status(404).json({ notchannelfound: 'No channel found with that name' });
        }); 
});

router.post('/:channelName/removeUser', passport.authenticate('jwt', { session: false }), (req, res) => {

    Channel.findOneAndUpdate(
        { name: req.params.channelName },
        { $pull:{ channelMembers: req.user.id }},
        { new: true }
    ).then(channel => {    
        User.findOneAndUpdate(
            { _id: req.user.id },
            { $pull:{ channels: channel.id }},
            { new: true }
        ).then(user => res.json({success: "User removed from channel"}));            
    }).catch(err => {
            console.log(err);
            res.status(404).json({ notchannelfound: 'User not found with that channel' });
    }); 
});

module.exports = router;