import NavBarContainer from "../nav/navbar_container";
import React from 'react';
import './workspace.css';
import ModalForm from '../nav/modal_form'
import Channel from "../channels/channel";

const Workspace = () => {
    return (
      <div className="workspace">
        <NavBarContainer />
        <ModalForm />
        <Channel />
      </div>
    );
    
}

export default Workspace;