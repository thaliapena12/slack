import NavBarContainer from "../nav/navbar_container";
import React from 'react';
import './workspace.css';
import ModalForm from '../nav/modal_form'
import ChannelNav from "../channels/channel_nav_container";

const Workspace = () => {
    return (
      <div className="workspace">
        <NavBarContainer />
        <ModalForm />
        <ChannelNav />
      </div>
    );
    
}

export default Workspace;