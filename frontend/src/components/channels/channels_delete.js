import React from "react";
import "./delete_channel.css";
import { generateChannel } from "../../actions/channel_actions";

class ChannelsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.channel;
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    let currentChannel = this.props.currentChannel; 
    this.props.action(currentChannel._id).then(this.props.closeModalForm());
    // this.props.push.history(channels);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  //   renderErrors() {
  //     return (
  //       <ul className="channels-delete-errors">
  //         <div className="error-list">
  //           {this.props.errors.map((error, i) => (
  //             <li className="p-error" key={`error-${i}`}>
  //               {error}
  //             </li>
  //           ))}
  //         </div>
  //       </ul>
  //     );
  //   }
// if currentuser === as channel created by Id the you get the option to delete
  render() {
    return (
      <div className="channel-delete-container">
        <form onSubmit={this.handleSubmit} className="channel-delete-box">
          {/* {this.renderErrors()} */}
          <nav className="channel-delete-header">
            <div className="delete-channel-label">
              <h3>Are you sure you want to delete this channel?</h3>
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

export default ChannelsForm;
