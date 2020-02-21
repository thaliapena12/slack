import React from "react";
import '../../components/channels/modal_form.css';
import { getUserList } from '../../util/user_api_util';
import './dmgroup_form.css';
import userPlaceHolder from'./user_placeholder.png';

class DmgroupsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { usersList: [], selectedUsers: []};
    this.handleClick = this.handleClick.bind(this);
    this.handleGo = this.handleGo.bind(this);
    this.handleClickX = this.handleClickX.bind(this);
  }

  componentDidMount(){
    getUserList().then(users =>{
      let userArray = users.data;
      let pos = userArray.map(user => user.username).indexOf(this.props.currentUser.username);
      
      userArray.splice(pos, 1);
      this.setState({usersList: userArray})
    });
  }

  handleClick(index){
    let user = this.state.usersList.splice(index, 1);
    this.state.selectedUsers.push(user);
    this.forceUpdate();
  }

  handleClickX(index){
    let user = this.state.selectedUsers.splice(index, 1);
    user = user[0];
    this.state.usersList.unshift(user[0]);
    this.forceUpdate();
  }

  handleGo(){

    let userIdArray = [];

    this.state.selectedUsers.forEach(user => {
      //console.log(user);
      userIdArray.push(user[0]._id);
      //onsole.log(userIdArray);
    })

    this.props.generateDmgroup(userIdArray)
      .then(() => this.props.selectDmgroup(this.props.dmgroups[-1]).bind(this));

    

  }
  
  render() {

    const {usersList, selectedUsers} = this.state;

    if(usersList.length > 0){
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
                    <ul>
                      {selectedUsers.map((user, index) => (
                      <li key={index} onClick={() => this.handleClickX(index)}>
                        <SelectedUserItem user={user} />
                      </li>
                      ))}
                    </ul>
                  </div>
              </div>
              <button onClick = {() => this.handleGo()}>Go</button>
            </div>
            <div className="newdm-users-list">
              <ul>
                {usersList.map((user, index) => (
                  <li key={index} onClick={() => this.handleClick(index)}>
                    <UserListItem user={user}/>
                  </li>
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

const SelectedUserItem = ({user}) => (
  <div className="user-tag">
    <div className="avatar">
      <img src={userPlaceHolder} alt="User Image" />
    </div>
    <div className="tag-name">{user[0].username}</div>
    <div className="close-tag">x</div>
  </div>
)