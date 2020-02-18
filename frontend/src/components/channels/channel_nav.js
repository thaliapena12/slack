import React from "react";
import './channel_nav.css';
import { IconContext } from "react-icons";
import {
  FaRegStar,
  FaUserCircle,
  FaPhoneSquare,
  FaInfoCircle,
  FaCog,
  FaSearch,
  FaBars,
  FaGift,
  FaThumbtack
} from 'react-icons/fa';

class ChannelNav extends React.Component {
  constructor(props) {
    super(props);
    this.displayNames = this.displayNames.bind(this);
    this.renderNavSearch = this.renderNavSearch.bind(this);
    this.renderChannels = this.renderChannels.bind(this);
    this.renderDmgroups = this.renderDmgroups.bind(this)
  }

  componentDidMount () {
    this.props.fetchUserChannels(this.props.currentUser.id);
    this.props.fetchUserDmgroups(this.props.currentUser.id);
  }

  renderChannels(){
    let currentChannel = this.props.currentChannel; ;
    return (
      <IconContext.Provider value={{ color: "grey", className: "global-class-name" }}>
      <nav className="channel-navbar">
        <div className="channel-info">
          <h1 className="channel-navbar-name">
            #{currentChannel.name}
          </h1>
          <ul className="channel-navbar-details">
            <li><FaRegStar /></li>
            <li><FaUserCircle /> {currentChannel.channelMembers.length}</li>
            <li><FaThumbtack /></li>
            <li>{currentChannel.description}</li>
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
          <li><FaRegStar /></li>
          <li><FaUserCircle />{currentDmgroup.dmMembers.length}</li>
          <li><FaThumbtack /></li>
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
          <li><FaPhoneSquare /></li>
          <li><FaInfoCircle /></li>
          <li><FaCog /></li>
          <li><div className="search"><input type="text" placeholder='Search' /></div></li>
          <li><div className="at">@</div></li>
          <li><FaRegStar /></li>
          <li><FaBars /></li>
          <li><FaGift /></li>
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
      return <h1>Loading..</h1>
    }

  }
}

export default ChannelNav;
