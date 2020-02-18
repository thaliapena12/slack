import React from 'react'
// import ChannelNav from './channel_nav_container'
import MessageFormContainer from '../messages/message_form_container';
import MessagesContainer from '../messages/messages_container';
import '../channels/channel.css';


const Dmgroup = () => {
    return (
        <div className="workspace-channel">
            {/* <ChannelNav /> */}
            <MessagesContainer />
            <MessageFormContainer />
        </div>
    )
}

export default Dmgroup;