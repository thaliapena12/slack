import React from 'react'
import ChannelNav from './channel_nav_container'
import MessageFormContainer from '../messages/message_form_container';
import './channel.css';

const Channel = () => {
    return (
        <div className="workspace-channel">
            <ChannelNav />
            <MessageFormContainer />
        </div>
    )
}

export default Channel;