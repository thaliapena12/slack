import React from "react";
import ReactDOM from 'react-dom';
import "./messages.css";
import MessageItem from "./message_item";

class Messages extends React.Component {

    constructor(props){
        super(props);
        this.messageUser = this.messageUser.bind(this);
    }

    messageUser(user){
        console.log(user);
        this.props.generateDmgroup([user])
        .then(dmgroup => {
            window.dm=dmgroup;
            //this.props.selectDmgroup(dmgroup);
        });        
    }

    componentWillUpdate() {
        const node = ReactDOM.findDOMNode(this);
        this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight;
    }

    componentDidUpdate() {
        if (this.shouldScrollToBottom){
            const node = ReactDOM.findDOMNode(this);
            node.scrollTop = node.scrollHeight;
        }
    }

    render() {
        if(this.props.currentChannel){
            const messages  = this.props.currentChannel.channelMessages;
            
            return (
                <div className="messages-container">
                    {messages[0] === undefined ?
                        "No messages here" :
                        messages.map(message => (
                            <MessageItem 
                                key={message._id} 
                                message={message} 
                                messageUser={this.messageUser}/>
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
                            <MessageItem
                                key={message._id}
                                message={message}
                                messageUser={this.messageUser} />

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