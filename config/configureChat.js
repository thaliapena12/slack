// configure how the server will respond to chat actions
const configureChat = (io) => {

    // store which socket belongs to which user
    let userLookup = {};

    // what to do when a client/socket connects to the chat server
    io.on("connection", socket => {

        // sockets will identify which user they are
        socket.on("identify_user", user => {
            socket.userID = user.id;
            userLookup[socket.userID] = socket;
        });

        // when the api receives a new message, it notifies the chat server
        socket.on("broadcast_message", payload => {
            console.log(payload)
            let { participants, message, authorId } = payload;
            // notify all participants but the author
            otherParticipants = participants.filter(p => p !== authorId)
            otherParticipants.forEach(participant => {
                
                if (userLookup[participant]) {
                    userLookup[participant].emit('receive_message', message);
                }
            });
        });
    });
};

module.exports = configureChat;