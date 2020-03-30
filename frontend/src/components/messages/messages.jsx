import React from "react";
import ReactDOM from 'react-dom';
import "./messages.css";
import MessageItem from "./message_item";
import socketIOClient from 'socket.io-client';

class Messages extends React.Component {

    componentWillUpdate() {
        const node = ReactDOM.findDOMNode(this);
        this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight;
    }

    componentDidUpdate() {
        if (this.shouldScrollToBottom){
            const node = ReactDOM.findDOMNode(this);
            node.scrollTop = node.scrollHeight;
        }

        // set up chat
        const { currentUser } = this.props;
        this.socket = socketIOClient();

        // tell chat server which user this is
        this.socket.emit('identify_user', currentUser);

        // how to handle a new message from the server
        this.socket.on('receive_message', message => {
            this.props.receiveMessage(message);
        });
    }

    render() {
        if(this.props.currentChannel){
            const messages  = this.props.currentChannel.channelMessages;
            
            return (
                <div className="messages-container">
                    {messages[0] === undefined ?
                        "No messages here" :
                        messages.map(message => (
                        <MessageItem key={message._id} message={message} />
                    ))}               
                </div>
            ); 

        } else if(this.props.currentDmgroup) {
            const messages  = this.props.currentDmgroup.dmMessages;
            return (
                <div className="messages-container">
                    {messages[0] === undefined ?
                        "No messages here" :
                        messages.map(message => (
                        <MessageItem key={message._id} message={message} />
                    ))}               
                </div>
            ); 
        } else{          

            return (
                <div className="messages-container">
                    Loading...
                </div>
            );             
        }
               
    }
}

export default Messages;