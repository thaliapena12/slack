
import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import './navbar.css';



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
  
  componentDidMount () {
    this.props.fetchUserCreatedChannels(this.props.user.id);
    this.props.fetchUserChannels(this.props.user.id);
  }

  render() {
    // if (Object.values(this.props.userChannels).length === 0) return <h1>"fetching channels"</h1>;
    if (this.props.loggedIn) {

      const titleCase = (string) => {
        let words = string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1))
        return words.join(' ');
      };
      return (
        <nav className="slack-bar">
          <div className="slack-bar-header">
            <div
              className="slack-bar-workspace-menu"
              onClick={this.handleDropdown}
            >
              <div className="slack-bar-workspace">
                Workspace <i className="arrow down"></i>
              </div>
              <div className="slack-bar-currentUser">
                <span className="dot"></span>
                <span>{titleCase(this.props.user.username)}</span>
              </div>
            </div>
            <div className="slack-bar-notifications">
              <span>&#x1f514;</span>
            </div>
            {this.state.dropdown && (
              <ul className="slack-bar-dropdown">
                <li>{titleCase(this.props.user.username)}</li>
                <li>
                  <button onClick={this.logoutUser}>Logout</button>
                </li>
              </ul>
            )}
          </div>
          <div className="navbar-channels">
            <div className="navbar-channels-header">
              <h2 className="navbar-channels-h2">Channels</h2>
              <div className="navbar-add-channel">
                <button onClick={() => this.props.openModalForm("new channel")}>
                  &#8853;
                </button>
              </div>
              <div className="navbar-delete-channel">
                {/* <button
                  onClick={() => this.props.openModalForm("delete channel")}
                >
                  &#8853;
                </button> */}
              </div>
            </div>
            <ul className="navbar-channels-list">
              {this.props.userChannels.map(channel => (
                <div>
                  <li onClick={() => this.props.selectChannel(channel)}>
                    {`# ${channel.name}`}{" "}
                  </li>
                  <li>
                    <button className="navbar-delete-button"
                      onClick={() => this.props.openModalForm("delete channel")}
                    >
                      &times;{" "}
                    </button>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </nav>
      );
    } else {
      return <Redirect to='/' />;
    }
  }
}

export default NavBar;
