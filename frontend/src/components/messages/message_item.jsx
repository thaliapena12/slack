import React from "react";
import userPlaceholder from "./user_placeholder.png";


const getMessageTime = (timestamp) => {
    return(timestamp.substring(11,16));
};


const MessageItem = ({message}) => (
    <div className="message-item">
        <div className="message-avatar">
            <img src={userPlaceholder} alt="User Avatar" />
            <div className="user-popup">
                <div className="user-card">
                    <div className="avatar">
                        <img src={userPlaceholder} alt="User Image" />
                    </div>
                    <div className="user-info">
                        <div className="user-name">
                            Name here
                        </div>
                        <div className="user-contact">
                            <button>Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="message-details">
            <span className="message-author">{message.authoredBy.username}</span>
            <span className="message-time">{getMessageTime(message.createdAt)}</span>
            <div className="message-text">{message.text}</div>
        </div>
    </div>
);

export default MessageItem;