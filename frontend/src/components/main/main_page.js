import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './main_page.css'; 
import img0 from './slack-img0.jpg';
import { login } from "../../actions/session_actions";
import { openModalForm, closeModalForm } from "../../actions/modal_form_actions";

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleDemoUser = this.handleDemoUser.bind(this);
    }

    handleDemoUser(e) {
        e.preventDefault();
        const user = { email: "demo@abc.com", password: "password" }
        this.props.processForm(user).then((res) => {
          this.props.closeModalForm();
          this.props.history.push(`/channels`);
        });
    }
    
    componentDidMount(){
        document.getElementById("rollingball").play()
    }
    render() {
        return (
            <div>
                <div className="header">
                    <div className="header-left">
                        <img className="logo" src={img0} alt="Slack Logo"/>
                        <h2>Why Slack? </h2>
                        <h2>Solutions </h2>
                        <h2>Resources </h2>
                        <h3>Enterprise </h3>
                        <h3>Pricing </h3>
                    </div>
                    <div className="signup-login">
                    <div className="log-in">
                        <Link to={'/login'}>Sign In</Link>
                    </div>
                    <div className="sign-up" >
                        <Link to={'/signup'}>Get Started</Link>
                    </div>
                    </div>
                </div>
                <div className="homepage-whole-div">
                    <div className="homepage-first-div" >  
                        <video
                            autoPlay
                            loop
                            src="https://a.slack-edge.com/085e3/marketing/img/homepage/video/brand-campaign_hero-video.mp4" type="video/mp4" 
                            id="rollingball" 
                            muted
                        />

                        <h1 className="homepage-main-text">
                        Slack replaces email inside your company
                        </h1>
                        <p className="homepage-p-text">
                        Keep conversations organized in Slack, the smart alternative to email
                        </p>
                        <ul className="homepage-link">
                            <Link className="try-c-link" to={'/signup'}>TRY SLACK</Link>
                            
                            <a className="try-demo-link" onClick={this.handleDemoUser}>TRY DEMO</a>
                        </ul>
                        <p className="already-signup-text">
                        
                        Already using Slack? <Link className="already-signup" to={'/login'}>Sign In</Link>
                        </p>
                    </div>
                </div>
  
                <footer>
                    <center>Copyright &copy; 2020 </center>
                    
                </footer>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        processForm: user => dispatch(login(user)),
        closeModalForm: () => dispatch(closeModalForm()),
    };
};

export default connect(null, mapDispatchToProps)(MainPage);

// export default MainPage;