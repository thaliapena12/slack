import React from "react";
import './modal_form.css';
import { getUserList } from '../../util/user_api_util';
import './people_to_channel_form.css';
import userPlaceHolder from '../dmgroups/user_placeholder.png';

class PeopleToChannel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { usersList: {}, selectedUsers: [], errors: "" };
        this.addPeople = this.addPeople.bind(this);
        this.closeError = this.closeError.bind(this);
    }

    componentDidMount() {
        getUserList().then(users => {
            this.setState({ usersList: users.data })
        });
    }

    selectUser (user) {
        return (e) => {
            e.preventDefault(e);
            const newState = this.state.selectedUsers;
            if (this.props.currentChannel.channelMembers.includes(user._id)) {
                this.setState({ errors: "This user is already a member of the channel."})
            } else if (!newState.includes(user)) {
                newState.push(user);
                this.setState({ errors: "" });
            }
            this.setState({ selectedUsers: newState });
        }
        
    }

    unselect(user) {
        return (e) => {
            e.preventDefault(e);
            let newState = this.state.selectedUsers;
            newState = newState.filter(selectedUser => selectedUser.username !== user.username);
            this.setState({ selectedUsers: newState });
        }

    }

    addPeople (e) {
        let data = { channelId: this.props.currentChannel._id, users: [] };
        this.state.selectedUsers.forEach(user => {
            data["users"].push(user);
        });
        this.props.addUserToChannel(data);
        this.props.closeModalForm();
    }

    closeError (e) {
        e.preventDefault();
        this.setState({ errors: "" });
    }

    render() {
        const { usersList, selectedUsers } = this.state;

        if (usersList.length > 0) {
            console.log(`In the form: ${usersList[0].username}`);
            return (
                <div className="channel-form-container">
                    <div className="newdm">
                        { 
                            Object.values(this.state.errors).length !== 0 &&
                            <ul className="people-to-channel-errors">
                                <li><span>&#9888;</span>{this.state.errors}<button onClick={this.closeError}>x</button></li>    
                            </ul>
                        }
                        <div className="newdm-header">
                            <div onClick={this.props.closeModalForm} className="close">&times;</div>
                            <h3> Add people to channel</h3>
                        </div>
                        <div className="newdm-selected">
                            <div className="newdm-input-area">
                                <div className="newdm-input">
                                    <ul className="selected-list">
                                        {this.state.selectedUsers.map(user => {
                                            return (
                                                <li>
                                                    <img src={userPlaceHolder} alt="User Image" />
                                                    <div className="selected-list-username">
                                                        {user.username}
                                                    </div>
                                                    <button onClick={this.unselect(user)}>x</button>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <button 
                                onClick={this.addPeople} 
                                disabled={this.state.selectedUsers.length === 0}
                                id={this.state.selectedUsers.length === 0 ? "disabled" : ""}
                                >Go</button>
                        </div>
                        <div className="newdm-users-list">
                            <ul>
                                {usersList.map(user => (
                                    <li>
                                        <div onClick={this.selectUser(user)} className="user-item">
                                            <div className="avatar">
                                                <img src={userPlaceHolder} alt="User Image" />
                                            </div>
                                            <div className="user-name">{user.username}</div>
                                        </div>
                                        {/* <UserListItem  user={user} /> */}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="channel-form-container">
                    <div className="newdm">
                        <div className="newdm-header">
                            <div onClick={this.props.closeModalForm} className="close">&times;</div>
                            <h3>Loading users to add...</h3>
                        </div>
                        <div className="newdm-selected">
                            <div className="newdm-input-box"></div>
                        </div>
                        <div className="loading">
                            <div class="fa-3x">
                                <i class="fas fa-cog fa-spin"></i>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default PeopleToChannel;

// const UserListItem = ({ user }) => (
//     <div className="user-item">
//         <div className="avatar">
//             <img src={userPlaceHolder} alt="User Image" />
//         </div>
//         <div className="user-name">{user.username}</div>
//     </div>
// )

