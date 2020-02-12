
import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.state = { dropdown: false };
    this.handleDropdown = this.handleDropdown.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  handleDropdown (e) {
    e.preventDefault();
    this.setState({ dropdown: !this.state.dropdown });
  }
  
 
  render() {
    if (this.props.loggedIn) {

      const titleCase = (string) => {
        let words = string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1))
        return words.join(' ');
      };
      return (
        <nav className="slack-bar">
          <div className="slack-bar-header">
            <div className="slack-bar-workspace-menu" onClick={this.handleDropdown}>
                <div className="slack-bar-workspace">
                  Workspace <i className="arrow down"></i>
                </div>
                <div className="slack-bar-currentUser">
                <span className="dot"></span><span>{titleCase(this.props.user.username)}</span>
                </div>
            </div>
            <div className="slack-bar-notifications">
              <span>&#x1f514;</span>
            </div>
            {
              this.state.dropdown && 
              <ul className="slack-bar-dropdown">
                <li>{titleCase(this.props.user.username)}</li>
                <li><button onClick={this.logoutUser}>Logout</button></li>
                
              </ul>
            }
          </div>
        </nav>
      )
    } else {
      return <Redirect to='/' />;
    }
  }
}

export default NavBar;
