import React from "react";
import './modal_form.css'

class BoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.board;
    // this.formType = this.props.formType;

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleFile = this.handleFile.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const board = Object.assign({}, this.state);
    this.props.action(board).then(this.props.closeModal);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  // handleFile(e){
  //     debugger;
  //     this.setState({ photoFile: e.currentTarget.files[0] })
  // }

  render() {
    return (
      <div className="channel-form-container">
        <form onSubmit={this.handleSubmit} className="channel-form-box">
          <nav className="channel-form-header">
            <div className="newchannel-label">
              <h3>{this.props.formType}</h3>
            </div>
            <div onClick={this.props.closeModalForm} className="close">X
            </div>
          </nav>
          <div className="add-channel-form">
            <label>
              Name:
              <input
                type="text"
                value={this.state.title}
                // placeholder="Like 'Places to go' "
                onChange={this.update("title")}
                className="channel-input"
              />
            </label>
            <br />
            <label>
              Private:
              <input
                type="checkbox"
                value={this.state.private}
                onChange={this.update("private")}
                className="channel-input"
              />
            </label>
            <br />
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

export default BoardForm;
