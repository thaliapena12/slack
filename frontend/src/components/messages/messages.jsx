import React from "react";
import "./messages.css";
import MessageItem from "./message_item";

class Messages extends React.Component {

    componentDidUpdate(prevProps) {  
        if (this.props.currentChannel 
            && prevProps.currentChannel !== this.props.currentChannel){
            this.props.requestAllMessages(this.props.currentChannel._id);
        }
    }

    render() {

        const { messages } = this.props;

        return (
            <div className="messages-container">
                {messages[0] === undefined ?
                    "No messages here" :
                    messages.map(message => (
                    <MessageItem key={message._id} message={message} />
                ))}               
            </div>
        );        
    }
}

export default Messages;