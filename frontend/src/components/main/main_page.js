import React from 'react';
import { Link } from 'react-router-dom';
import './main_page.css'; 

class MainPage extends React.Component {

    render() {
        return (
            <div className="mainpage">
                <div className="header">
                    <h1>slack clone
                    </h1>
                    <div className="signup-login">
                    <div className="log-in">
                        <Link to={'/login'}>Sign In</Link>
                    </div>
                    <div className="sign-up" >
                        <Link to={'/signup'}>GET STARTED</Link>
                    </div>
                    </div>
                </div>
                <div className="body">
                    <h2>Slack replaces email inside your company</h2>
                    <h3>Discuss, collaborate, share — work is better without the inbox.</h3>
                    <h4>See how Slack can help your team:</h4>
                </div>
                    
                    <footer>
                        Copyright &copy; 2020 
                    </footer>
            </div>
        );
    }
}

export default MainPage;