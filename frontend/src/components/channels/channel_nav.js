import React from "react";
import './channel_nav.css';

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
      <nav className="channel-navbar">
        <div className="channel-info">
          <h1 className="channel-navbar-name">
            #{currentChannel.name}
          </h1>
          <ul className="channel-navbar-details">
            <li><span className="icon">&#9734;</span>  |  </li>
            <li><span className="icon">&#x263A;</span>{currentChannel.channelMembers.length}  |   </li>
            <li><span className="icon">&#x26B2;</span>  |    </li>
            <li>{currentChannel.description}</li>
          </ul>
        </div>

        <ul className="channel-navbar-list">
          <li>&#x260F;</li>
          <li><div className="info-circle">i</div></li>
          <li>&#9881;</li>
          <li><input className="search-bar" type="text" placeholder="Search" /></li>
          <li>@</li>
          <li>&#9734;</li>
          <li><div className="three-dots"><span>.</span><span>.</span><span>.</span></div></li>
          <li><span role="img" aria-label="">&#127873;</span></li>
        </ul>
        
      </nav>
    );
  }
}

export default ChannelNav;
