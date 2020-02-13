import React from "react";
import './modal_form.css'

class ChannelsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.channel;

    this.handleSubmit = this.handleSubmit.bind(this);
  
  }

  handleSubmit(e) {
    e.preventDefault();
    const channel = Object.assign({}, this.state);
    this.props.action(channel).then(this.props.closeModal);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <div className="channel-form-container">
        <form onSubmit={this.handleSubmit} className="channel-form-box">
          <nav className="channel-form-header">
            <div className="newchannel-label">
              <h3>Create a channel</h3>
            </div>
            <div onClick={this.props.closeModalForm} className="close">
              X
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
            {/* <h2>Make private</h2> */}
            <label className="switch">
              <input
                type="checkbox"
                value={this.state.private}
                onChange={this.update("private")}
                // className="channel-input"
              />
              <span className="slider round"></span>
            </label>
            <br />
            <small>
              When a channel is set to private, it can only be viewed or joined
              by invitation
            </small>
            <br />
            <input
              className="channel-submit"
              type="submit"
              // value={this.props.formType}
              value="Create"
            />
            <small>Learn more</small>
          </div>
        </form>
      </div>
    );
  }
}

export default ChannelsForm;
