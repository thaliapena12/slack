
import React from 'react';
import { //Link, 
         Redirect } from 'react-router-dom'
import './navbar.css';
import userPlaceHolder from './user_placeholder.png';
import { FaRegBell } from "react-icons/fa";
import { IconContext } from "react-icons";


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.state = { dropdown: false };
    this.handleDropdown = this.handleDropdown.bind(this);
    this.displayNames = this.displayNames.bind(this);
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
    this.props.fetchUserDmgroups(this.props.user.id);
  }

  displayNames(members){
    let array = [];
    
    for (let i = 0; i < members.length; i++)
      if (members[i].username !== this.props.user.username)
        array.push(members[i].username) 
  
    return array.join(', ');

  }

  render() {
    if (this.props.loggedIn) {
      const titleCase = (string) => {
        let words = string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1))
        return words.join(' ');
      };
      let currentChannel = { name: "" };
      let currentDmgroup = { _id: "" };
      if (this.props.currentChannel) {
        currentChannel = this.props.currentChannel;
      } else if (this.props.currentDmgroup) {
        currentDmgroup = this.props.currentDmgroup;
      } else {
        currentChannel = this.props.userChannels[0];
      }
      return (
        <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
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
              {/* <span role="img" aria-label="">&#x1f514;</span> */}
              <FaRegBell />
            </div>
            {this.state.dropdown && (
              <ul className="slack-bar-dropdown">
                <li>
                  <img src={userPlaceHolder} alt="User Image" />
                  {titleCase(this.props.user.username)}
                </li>
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

             
              {this.props.userChannels.map((channel, key) => (
                <li 
                key={key} 
                onClick={() => this.props.selectChannel(channel)}
                id={`${channel.name === currentChannel.name ? "selected" : ""}`}
                >
                  {`# ${channel.name}`}{" "}
                  {
                    channel.createdBy === this.props.user.id &&
                    <button
                      className="navbar-delete-button"
                      onClick={() => this.props.openModalForm("delete channel")}
                    >
                      &times;{" "}
                    </button>
                  }
                </li>

              ))}
            </ul>
          </div>
          <div className="navbar-channels">
            <div className="navbar-channels-header">
              <h2 className="navbar-channels-h2">Direct Messages</h2>
              <div className="navbar-add-channel">
                <button onClick={() => this.props.openModalForm("new dmgroup")}>
                  &#8853;
                </button>
              </div>
            </div>
            <ul className="navbar-channels-list">
              {this.props.userDmgroups.map(dmgroup => (
                <li 
                onClick={() => this.props.selectDmgroup(dmgroup)}
                id={`${dmgroup._id === currentDmgroup._id ? "selected" : ""}`}>
                  {this.displayNames(dmgroup.dmMembers)}
                  
                  <button className="navbar-delete-button" onClick={() => this.props.openModalForm("delete dmgroup")}>
                    &times;{" "}
                  </button>
                </li>
              ))}
            </ul>
            {/* <ul className="navbar-channels-list">
              {this.props.userDmgroups.map((dmgroup, key) => (
                  <li key={key} onClick={() => this.props.selectDmgroup(dmgroup)}>
                    {`# ${dmgroup.dmMembers}`}{" "}
                      <button className="navbar-delete-button" onClick={() => this.props.openModalForm("delete dmgroup")}>
                        &times;{" "}
                      </button> 
                  </li>
                ))}
            </ul> */}
          </div>
        </nav>
        </IconContext.Provider>
      );
    } else {
      return <Redirect to='/' />;
    }
  }
}

export default NavBar;
