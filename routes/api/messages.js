const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const User = require('../../models/User');
const Channel = require('../../models/Channel');
const Message = require('../../models/Message');
const Dmgroup = require('../../models/Dmgroup');
const jwt = require("jsonwebtoken");
const ChatServerClient = require('../../util/chat_server_client');

// GET
// messages under specific channel
router.get('/channels/:id', (req, res) => {
    Message.find({ channel: req.params.id })
        .populate("authoredBy", "username email createdAt")
        .then(messages => res.json(messages))
        .catch(error => res.status(404).json({ noChannelMessage: 'No message found with matching channel id' }))
})

// messages under specific dmgroup
router.get('/dmgroups/:id', (req, res) => {
    Message.find({ dmgroup: req.params.id })
        .populate("authoredBy", "username email createdAt")
        .then(messages => res.json(messages))
        .catch(error => res.status(404).json({ noDmGroupMessage: 'No message found with matching dm group id' }))
})

// get an specific message
router.get('/:id', (req, res) => {
    Message.findById(req.params.id)
        .populate("authoredBy", "username email createdAt")
        .then(message => res.json(message))
        .catch(error => console.log(error)) 
})

// POST
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {

    if (req.body.channel !== '') {
        Channel.findById(req.body.channel)
            .then(channel => {
                const newMessage = new Message({
                    text: req.body.text,
                    authoredBy: req.user.id,
                    channel: channel.id
                });

                newMessage.save()
                    .then(message => {
                        channel.addMessage(message.id);
                        User.findById(message.authoredBy)
                            .then(user => {
                                const resMessage = new Object({
                                    text: req.body.text,
                                    authoredBy: { username: user.username },
                                    createdAt: new Date()
                                })
                                const chat = new ChatServerClient();
                                chat.dispatchReceiveMessage(newMessage.channel, resMessage, newMessage.authoredBy);
                                res.json(resMessage)
                            })
                    }).catch(error => console.log(error));
            }).catch(err => res.status(404).json({ notchannelfound: 'No channel found with that ID' }));

    } else {
        Dmgroup.findById(req.body.dmgroup)
            .then(dmgroup => {
                const newMessage = new Message({
                    text: req.body.text,
                    authoredBy: req.user.id,
                    dmgroup: dmgroup.id

                });
                newMessage.save()
                    .then(message => {
                        dmgroup.addMessage(message.id);
                        User.findById(message.authoredBy)
                            .then(user => {
                                const resMessage = new Object({
                                    text: req.body.text,
                                    authoredBy: { username: user.username },
                                    createdAt: new Date()
                                })
                                res.json(resMessage)
                            })
                        // res.json({messageSuccess: 'The message was succesful added under the dm group'}) 
                    })
                    .catch(error => console.log(error));

            }).catch(err => res.status(404).json({ notdmgroupfound: 'No dm group found with that ID' }));

    }
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