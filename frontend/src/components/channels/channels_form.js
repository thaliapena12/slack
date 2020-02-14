import React from "react";
import './modal_form.css';
import { generateChannel } from "../../actions/channel_actions";

class ChannelsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.channel;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // const channel = Object.assign({}, this.state);
    let accessType = this.state.accessType ? "private" : "public";
    let channel = {
      name: this.state.name,
      description: this.state.description,
      accessType: accessType,
      createdBy: this.props.currentUser.id
    };
    //  console.log(channel.accessType)

    this.props.action(channel).then(()=> {
      if (!this.props.errors.length) {
        this.props.closeModalForm();
      }    
    })
  };

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  renderErrors() {
    return (
      <ul className="channels-form-errors">
        <div className="error-container">
          {this.props.errors.map((error, i) => (
            <li className="p-error" key={`error-${i}`}>
              {error}
            </li>
          ))}
        </div>
      </ul>
    );
  }
  
  render() {
    return (
      <div className="channel-form-container">
        <form onSubmit={this.handleSubmit} className="channel-form-box">
          {this.renderErrors()}
          <nav className="channel-form-header">
            <div className="newchannel-label">
              <h3>Create a channel</h3>
            </div>
            <div onClick={this.props.closeModalForm} className="close">
              &times;
            </div>
            <small>
              Channels are where your team communicates. They're best when
              organized around a topic - #marketing. for example
            </small>
          </nav>
          <div className="add-channel-form">
            <label>
              <h2>Name</h2>
              <br />
              <input
                type="text"
                value={this.state.name}
                placeholder="# e.g.plan-budget "
                onChange={this.update("name")}
                className="channel-input"
              />
            </label>
            <br />
            <label>
              <h2>Description(optional)</h2>
              <br />
              <input
                type="text"
                value={this.state.description}
                onChange={this.update("description")}
                className="channel-input"
              />
            </label>
            <br />
            <div className="description">
              <small>What is the channel about?</small>
            </div>
            <br />
            {/* <label className="switch-wrap">
              <input
                type="checkbox"
                value={this.state.private}
                onChange={this.update("private")}
                // className="channel-input"
              />
              <span className="switch"></span>
            </label> */}
            <div className="private">
              <h2>Make private</h2>
            </div>
            <div className="toggle-button-cover">
              <div className="button-cover">
                <div className="button r" id="button-1">
                  <input
                    type="checkbox"
                    className="checkbox"
                    value={this.state.private}
                    onChange={this.update("private")}
                  />
                  <div className="knobs"></div>
                  <div className="layer"></div>
                </div>
              </div>
            </div>
            <br />
            <small>
              When a channel is set to private, it can only be <br /> viewed or
              joined by invitation
            </small>
            <br />
            <br />
            <div className="bottom">
              <small>Learn more</small>
            </div>
            <input
              className="channel-submit"
              type="submit"
              // value={this.props.formType}
              value="Create"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default ChannelsForm;
