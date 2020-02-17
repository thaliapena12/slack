import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import './app.css';
import WorkspaceContainer from "./workspace/workspace_container";

const App = () => (
    <div className="main-workspace">
        {/* <NavBarContainer /> */}
        <Switch>
            <AuthRoute exact path="/" component={MainPage} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/channels" component={WorkspaceContainer}/>
        </Switch>
    </div>
);

export default App;