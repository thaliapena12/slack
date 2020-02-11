const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Channel = require('../../models/Channel');
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

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateChannelInput(req.body);
  
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newChannel = new Channel({
        name: req.body.name,
        accessType: req.body.accessType,
        createdBy: req.user.id
      });
  
      newChannel.save().then(channel => res.json(channel));
    }
  );

module.exports = router;