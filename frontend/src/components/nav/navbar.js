
import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  render() {
    if (this.props.loggedIn) {
      return (
        <nav className="slack-bar">
          <div className="slack-bar-workspace-menu">
              <div className="slack-bar-workspace">
                Workspace
              </div>
              <div className="slack-bar-currentUser">
                Username
              </div>
            <ul className="slack-bar-dropdown">
              <button onClick={this.logoutUser}>Logout</button>
            </ul>
          </div>
        </nav>
      )
    } else {
      return <Redirect to='/' />;
    }
  }
}

export default NavBar;
