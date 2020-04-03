import React from "react";
import './channel_nav.css';
import { IconContext } from "react-icons";
import {
  FaUserCircle,
  FaPhoneSquare,
  FaInfoCircle,
  FaCog,
  FaSearch,
  FaBars,
  FaGift,
} from 'react-icons/fa';

class ChannelNav extends React.Component {
  constructor(props) {
    super(props);
    this.displayNames = this.displayNames.bind(this);
    this.renderNavSearch = this.renderNavSearch.bind(this);
    this.renderChannels = this.renderChannels.bind(this);
    this.renderDmgroups = this.renderDmgroups.bind(this);
    this.state = { openDropdown: false };
    this.openDropdown = this.openDropdown.bind(this);
  }

  componentDidMount () {
    this.props.fetchUserChannels(this.props.currentUser.id);
    this.props.fetchUserDmgroups(this.props.currentUser.id);
  }

  openDropdown (e) {
    e.preventDefault();
    this.setState({ openDropdown: !this.state.openDropdown });
  }

  renderChannels(){
    let currentChannel = this.props.currentChannel; ;
    return (
      <IconContext.Provider value={{ color: "grey", className: "global-class-name" }}>
      <nav className="channel-navbar">
        <div className="channel-info">
          <h1 className="channel-navbar-name">
            # {currentChannel.name}
          </h1>
          <ul className="channel-navbar-details">
              <li><FaUserCircle /> <span>{currentChannel.channelMembers.length}</span></li>
              <li><span>{currentChannel.description}</span></li>
          </ul>
        </div>
        {this.renderNavSearch()}
        </nav>
      </IconContext.Provider>
    )

  }

  displayNames(members){
    let string = "";
    let array = [];
    for (let i = 0; i < members.length; i++) {
      array.push(members[i].username) 
    }
    string = array.join(', ');

    return string
  }

  renderDmgroups(){
    let currentDmgroup = this.props.currentDmgroup;
    return(
      <IconContext.Provider value={{ color: "grey", className: "global-class-name" }}>
      <nav className="channel-navbar">
      <div className="channel-info">
        <h1 className="channel-navbar-name">
            {this.displayNames(currentDmgroup.dmMembers)}
        </h1>
        <ul className="channel-navbar-details">
          <li><FaUserCircle />{currentDmgroup.dmMembers.length}</li>
        </ul>
      </div>
      {this.renderNavSearch()}
      </nav>
      </IconContext.Provider>
    )
  }

  renderNavSearch(){
    return(
      <IconContext.Provider value={{ color: "grey", className: "global-class-name" }}>
        <ul className="channel-navbar-list">
          <li onClick={this.props.handleSidebar}><FaInfoCircle /></li>
          {
            this.props.currentChannel && <li onClick={this.openDropdown}><FaCog /></li>
          }
          {
            this.state.openDropdown &&
            <ul className="gear-dropdown">
              <li onClick={() => this.props.openModalForm("add people to channel")}>Add people to channel</li>
            </ul>
          }
          
        </ul>
      </IconContext.Provider>
    )

  }

  render() {
    if (this.props.currentChannel) {
      return this.renderChannels()
      
    } else if(this.props.currentDmgroup) {
      return this.renderDmgroups()
    }else{
      this.props.fetchUserChannels(this.props.currentUser.id);
      return (
        <h1>Loading...</h1>
      );
    }

  }
}

export default ChannelNav;
