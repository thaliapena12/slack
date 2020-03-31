import React from "react";
import '../channels/channel_nav.css';

class DmgroupNav extends React.Component {

  componentDidMount () {
    this.props.fetchUserChannels(this.props.currentUser.id);
  }

  render() {
    // sets current channel to the one selected, if none has been selected,
    // sets it to the first channel on userChannels array
    let currentDmgroup;
    if (this.props.currentDmgroup) {
      currentDmgroup = this.props.currentDmgroup;
    } else if (this.props.userDmgroups.length === 0){
      return <h1>No direct messages yet.</h1>
    } else {
      currentDmgroup = this.props.userDmgroups[0];
    }
    return (
      <nav className="channel-navbar">
        <div className="channel-info">
          <h1 className="channel-navbar-name">
            #{currentDmgroup.dmMembers}
          </h1>
          <ul className="channel-navbar-details">
            <li>&#9734;</li>
            <li><span>&#x263A;</span>{currentDmgroup.dmMembers.length}</li>
            <li>&#x26B2;</li>
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

export default DmgroupNav;