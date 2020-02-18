import React from "react";
import '../../components/channels/modal_form.css';
import { getUserList } from '../../util/user_api_util';
import './dmgroup_form.css';
import userPlaceHolder from'./user_placeholder.png';

class DmgroupsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { usersList: {}, selectedUsers: []};
  }

  componentDidMount(){
    getUserList().then(users =>{
      this.setState({usersList: users.data})
      window.users = this.state.usersList;
    });
  }
  
  render() {

    const {usersList, selectedUsers} = this.state;

    if(usersList.length > 0){
      console.log(`In the form: ${usersList[0].username}`);
      return(
        <div className="channel-form-container">  
          <div className="newdm">
            <div className="newdm-header">
              <div onClick={this.props.closeModalForm} className="close">&times;</div>
              <h3> Direct Messages</h3>
            </div>
            <div className="newdm-selected">
              <div className="newdm-input-area">
                  <div className="newdm-input">

                  </div>
              </div>
              <button>Go</button>
            </div>
            <div className="newdm-users-list">
              <ul>
                {usersList.map(user => (
                  <li><UserListItem user={user}/></li>
                ))}
              </ul>
            </div>
          </div>    
        </div>
      )
    } else {
      return(
        <div className="channel-form-container">  
          <div className="newdm">
            <div className="newdm-header">
              <div onClick={this.props.closeModalForm} className="close">&times;</div>
              <h3> Direct Messages</h3>
            </div>
            <div className="newdm-selected">
              <div className="newdm-input-box"></div>
            </div>
            <div className="newdm-users-list">
              Loading...
            </div>
          </div>    
        </div>
      )     
    }

    // return (
    //   <div className="channel-form-container">
    //     <form onSubmit={this.handleSubmit} className="channel-form-box">
    //       {this.renderErrors()}
    //       <nav className="channel-form-header">
    //         <div className="newchannel-label">
    //           <h3> Direct Messages</h3>
    //         </div>
    //         <div onClick={this.props.closeModalForm} className="close">
    //           &times;
    //         </div>
    //       </nav>
    //       <div className="add-channel-form">
    //         <label>
    //           <input
    //             type="text"
    //             placeholder="Find or start a conversation"
    //             className="channel-input"
    //           />
    //         </label>           
    //         <div className="bottom">
    //           <small>Learn more</small>
    //         </div>
    //         <input
    //           className="channel-submit"
    //           type="submit"
    //           value="Create"
    //         />
    //       </div>
    //     </form>
    //   </div>
    // );
  }
}

export default DmgroupsForm;

const UserListItem = ({user}) => (
  <div className="user-item">
    <div className="avatar">
      <img src={userPlaceHolder} alt="User Image" />
    </div>
    <div className="user-name">{user.username}</div>
  </div>
)