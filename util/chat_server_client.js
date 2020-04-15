const socketIOClient = require("socket.io-client");
const Channel = require('../models/Channel');
const CHAT_SERVER_ENDPOINT = require("../config/keys").CHAT_SERVER_ENDPOINT;

// to be set dynamically in production with process.env.CHAT_SERVER_URL
const endpoint = CHAT_SERVER_ENDPOINT;

class ChatServerClient {
    constructor() {
        this.socket = socketIOClient(endpoint);
    }

    dispatchReceiveMessage(messageChannel, message, authorId) {
        // fetch the conversation in order to get its participants
        Channel.findOne(messageChannel).exec((err, channel) => {
            if (err) throw err;
            // tell the chat server what message was sent between which people
            let payload = {
                participants: channel.channelMembers,
                message,
                authorId
            }
            this.socket.emit('broadcast_message', payload);
        })
    }
}

module.exports = ChatServerClient;