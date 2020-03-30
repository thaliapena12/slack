import React from "react";
import "../../components/channels/delete_channel.css";

class DmgroupsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.dmgroup;
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    let currentDmgroup = this.props.currentDmgroup; 
    this.props.action(currentDmgroup._id).then(this.props.closeModalForm());
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <div className="channel-delete-container">
        <form onSubmit={this.handleSubmit} className="channel-delete-box">
          <nav className="channel-delete-header">
            <div className="delete-channel-label">
              <h3>Are you sure you want to delete this direct messages group?</h3>
            </div>
            <div>
              <input className="channel-delete" type="submit" value="Yes" />
              <button onClick={this.props.closeModalForm}>No</button>
            </div>
          </nav>
        </form>
      </div>
    );
  }
}

export default DmgroupsForm;