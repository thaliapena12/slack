import React from 'react'
import ChannelNav from './channel_nav_container'
import MessageFormContainer from '../messages/message_form_container';
import MessagesContainer from '../messages/messages_container';
import './channel.css';
import InfoSidebar from '../workspace/info_sidebar';


class Channel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { toggleSidebar: false };
        this.handleSidebar = this.handleSidebar.bind(this);
    }

    handleSidebar(e) {
        e.preventDefault();
        this.setState({ toggleSidebar: !this.state.toggleSidebar });
    }

    render() {
        return (
            <div className="workspace-channel">
                <ChannelNav handleSidebar={this.handleSidebar} />
                <div className="workspace-contents">
                    <div className="workspace-messages">
                        <MessagesContainer />
                        <MessageFormContainer />
                    </div>
                    {
                        this.state.toggleSidebar && <InfoSidebar handleSidebar={this.handleSidebar} />
                    }
                </div>
                
            </div>
        )
    } 
}

export default Channel;