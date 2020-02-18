import React from "react";
import './channel_nav.css';

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
      <nav className="channel-navbar">
        <div className="channel-info">
          <h1 className="channel-navbar-name">
            #{currentChannel.name}
          </h1>
          <ul className="channel-navbar-details">
            <li>&#9734;</li>
            <li><span>&#x263A;</span>{currentChannel.channelMembers.length}</li>
            <li>&#x26B2;</li>
            <li>{currentChannel.description}</li>
          </ul>
        </div>
        {this.renderNavSearch()}
        </nav>
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
      <nav className="channel-navbar">
      <div className="channel-info">
        <h1 className="channel-navbar-name">
            {this.displayNames(currentDmgroup.dmMembers)}
        </h1>
        <ul className="channel-navbar-details">
          <li>&#9734;</li>
          <li><span>&#x263A;</span>{currentDmgroup.dmMembers.length}</li>
          <li>&#x26B2;</li>
        </ul>
      </div>
      {this.renderNavSearch()}
      </nav>
    )
  }

  renderNavSearch(){
    return(
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
