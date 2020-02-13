import React from "react";

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
      <div className="board-form-container">
        <form onSubmit={this.handleSubmit} className="board-form-box">
          <nav className="board-form-header">
            <div className="newboard-label">
              <h3>{this.props.formType}</h3>
            </div>
            <div onClick={this.props.closeModalForm} className="close">
              <img src={window.cancelURL} />
            </div>
          </nav>
          <div className="board-form">
            <label>
              Name:
              <input
                type="text"
                value={this.state.title}
                placeholder="Like 'Places to go' "
                onChange={this.update("title")}
                className="board-input"
              />
            </label>
            <br />
            <label>
              Visibility:
              <input
                type="checkbox"
                value={this.state.private}
                onChange={this.update("private")}
                className="board-input"
              />
            </label>
            <br />
            <input
              className="board-submit"
              type="submit"
              value={this.props.formType}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default BoardForm;
