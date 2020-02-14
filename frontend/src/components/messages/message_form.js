import React from 'react';
import './message_form.css';

class MessageForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = { 
            text: "",
            authoredBy: "",
            channel: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchUserChannels(this.props.currentUser.id);
    }
    
    update (field) {
        return e => { 
            e.preventDefault();
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    handleSubmit (e) {
        e.preventDefault();
        let message = {
            text: this.state.text,
            authoredBy: "",
            channel: ""
        };
        let currentChannelId;
        this.props.currentChannel ? 
            currentChannelId = this.props.currentChannel._id :
            currentChannelId = this.props.userChannels[0]._id;
        message["channel"] = currentChannelId;
        message["authoredBy"] = this.props.currentUser.id;
        this.props.createMessage(message);

        this.setState({text: ""});    
    }

    render () {
        let currentChannel;
        if (this.props.currentChannel) {
            currentChannel = this.props.currentChannel;
        } else if (this.props.userChannels.length === 0) {
            return null;
        } else {
            currentChannel = this.props.userChannels[0];
        }
        return (
            <div className="message-form-container">
                <div className="message-form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text"
                            value={this.state.text}
                            onChange={this.update('text')}
                            placeholder={`Message ${ currentChannel.name }`}
                        />  
                    </form>
                    <nav>
                        <ul>

                        </ul>

                        <ul>

                        </ul>
                    </nav>
                </div>
            </div>
            
        )
    }
}

export default MessageForm;