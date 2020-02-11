
const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateChannelInput(data) {
    let errors = {};

    data.name = validText(data.name) ? data.name : '';
    data.description = validText(data.description) ? data.description : '';
    data.accessType = validText(data.accessType) ? data.accessType : '';

    if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
        errors.name = 'Channel name must be between 2 and 30 characters';
    }

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Channel name field is required';
    }
        
    if (!Validator.isLength(data.description, { min: 5, max: 140 })) {
        errors.description = 'Channel description must be between 5 and 140 characters';
    }

    if (Validator.isEmpty(data.accessType)) {
        errors.accessType = 'Channel access type field is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};

