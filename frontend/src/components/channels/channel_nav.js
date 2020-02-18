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

  componentDidMount () {
    this.props.fetchUserChannels(this.props.currentUser.id);
  }

  render() {
    // sets current channel to the one selected, if none has been selected,
    // sets it to the first channel on userChannels array
    let currentChannel;
    if (this.props.currentChannel) {
      currentChannel = this.props.currentChannel;
    } else if (this.props.userChannels.length === 0){
      return <h1>No channels yet. Go ahead and create one.</h1>
    } else {
      currentChannel = this.props.userChannels[0];
    }
    return (
      <IconContext.Provider value={{ color: "grey", className: "global-class-name" }}>
      <nav className="channel-navbar">
        <div className="channel-info">
          <h1 className="channel-navbar-name">
            #{currentChannel.name}
          </h1>
          <ul className="channel-navbar-details">
            <li><FaRegStar /></li>
              <li><span><FaUserCircle /></span>{currentChannel.channelMembers.length}</li>
              <li><FaThumbtack /></li>
            <li>{currentChannel.description}</li>
          </ul>
        </div>

        <ul className="channel-navbar-list">
          <li><FaPhoneSquare /></li>
          <li><FaInfoCircle /></li>
          <li><FaCog /></li>
          <li><FaSearch /><input className="search-bar" type="text" placeholder='Search' /></li>
          <li>@</li>
          <li><FaRegStar /></li>
          <li><FaBars /></li>
          <li><FaGift /></li>
        </ul>
        
      </nav>
      </IconContext.Provider >
    );
  }
}

export default ChannelNav;
