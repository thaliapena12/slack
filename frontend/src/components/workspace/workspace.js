import NavBarContainer from "../nav/navbar_container";
import ChannelsContainer from "../channels/channels_container";
import React from 'react';
import './workspace.css';
import ModalForm from '../nav/modal_form'

const Workspace = () => {
    return (
      <div className="workspace">
        <NavBarContainer />
        <ModalForm />
        <ChannelsContainer />
      </div>
    );
    
}

export default Workspace;