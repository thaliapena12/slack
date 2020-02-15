import React from "react";
import '../../components/channels/modal_form.css';

class DmgroupsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.dmgroup;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let dmgroup = this.props.dmgroup;
    this.props.action(dmgroup).then(()=> {
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
              <h3> Direct Messages</h3>
            </div>
            <div onClick={this.props.closeModalForm} className="close">
              &times;
            </div>
          </nav>
          <div className="add-channel-form">
            <label>
              <input
                type="text"
                placeholder="Find or start a conversation"
                className="channel-input"
              />
            </label>           
            <div className="bottom">
              <small>Learn more</small>
            </div>
            <input
              className="channel-submit"
              type="submit"
              value="Create"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default DmgroupsForm;