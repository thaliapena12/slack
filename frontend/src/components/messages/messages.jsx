import React from "react";
import "./messages.css";
import MessageItem from "./message_item";

class Messages extends React.Component {


    render() {
        if(this.props.currentChannel){
            console.log(this.props.currentChannel);
            const messages  = this.props.currentChannel.channelMessages;
            
            console.log(messages);
            return (
                <div className="messages-container">
                    {messages[0] === undefined ?
                        "No messages here" :
                        messages.map(message => (
                        <MessageItem key={message._id} message={message} />
                    ))}               
                </div>
            ); 
        }else{
            //this.updateState.bind(this);
            return (
                <div className="messages-container">
                    Loading...
                </div>
            );             
        }
               
    }
}

export default Messages;