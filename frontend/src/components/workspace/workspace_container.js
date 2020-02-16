import { connect } from "react-redux";
import { fetchUserList } from "../../actions/user_actions";
import Workspace from "./workspace";

const mapDispatchToProps = dispatch => {

    return {
        fetchUserList: userList => dispatch(fetchUserList(userList))
    };
};

export default connect(mapDispatchToProps)(Workspace);