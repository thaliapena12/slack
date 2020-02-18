import React from 'react';
import './message_form.css';

class MessageForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = { 
            text: "",
            authoredBy: "",
            channel: "",
            dmgroup: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchUserChannels(this.props.currentUser.id);
        this.props.fetchUserDmgroups(this.props.currentUser.id);
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
            channel: "",
            dmgroup: ""
        };
        let currentChannelId;
        let currentDmgroupId;
        
        if (this.props.currentChannel) {
            if (this.props.currentChannel._id) {
                currentChannelId = this.props.currentChannel._id;
            }else{
                currentChannelId = this.props.userChannels[0]._id;
            };            
            message["channel"] = currentChannelId
        } else if (this.props.currentDmgroup) {
            if (this.props.currentDmgroup._id){
                currentDmgroupId = this.props.currentDmgroup._id;
            }else {
                currentDmgroupId = this.props.userDmgroups[0]._id;
            };           
            message["dmgroup"] = currentDmgroupId;

        } 
        
        message["authoredBy"] = this.props.currentUser.id;
        this.props.createMessage(message);
        this.setState({text: ""});    
    }

    render () {

        return (
            <div className="message-form-container">
                <div className="message-form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text"
                            value={this.state.text}
                            onChange={this.update('text')}
                            placeholder={`Message enter here`}
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