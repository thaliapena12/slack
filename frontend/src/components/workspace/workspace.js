import NavBarContainer from "../nav/navbar_container";
import React from 'react';
import './workspace.css';
import ModalForm from '../nav/modal_form'
import Channel from "../channels/channel";

class Workspace extends React.Component {
    
  render() {
    //debugger;
    return (
      <div className="workspace">
        <NavBarContainer />
        <ModalForm />
        <Channel />
      </div>
    );
  };
    
}

export default Workspace;