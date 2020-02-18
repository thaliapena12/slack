import React from 'react';
import './message_form.css';
import { 
    FaPaperclip, 
    FaBold, 
    FaItalic, 
    FaStrikethrough, 
    FaCode, 
    FaListOl,
    FaListUl,
    FaFont,
    FaRegLaugh
} from "react-icons/fa";
import { IoIosAt } from "react-icons/io";
import { IconContext } from "react-icons";

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
            <IconContext.Provider value={{ color: "grey", className: "global-class-name" }}>
            <div className="message-form-container">
                <div className="message-form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text"
                            value={this.state.text}
                            onChange={this.update('text')}
                            placeholder={`Message #${ currentChannel.name }`}
                        />  
                    </form>
                    <nav className="message-form-nav">
                        <ul className="message-form-list-one">
                            <li><FaPaperclip /></li>
                            <li><FaBold /></li>
                            <li><FaItalic /></li>
                            <li><FaStrikethrough /></li>
                            <li><FaCode /></li>
                            <li><FaListOl /></li>
                            <li><FaListUl /></li>
                        </ul>
                        <ul className="message-form-list-two">
                            <li><FaFont /></li>
                            <li>@</li>
                            <li><FaRegLaugh /></li>
                        </ul>
                    </nav>
                </div>
            </div>
            </IconContext.Provider>
        )
    }
}

export default MessageForm;