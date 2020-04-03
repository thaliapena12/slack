import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './main_page.css'; 
import img0 from './slack-img1.jpg';
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
                        <img className="logo" src={img0} alt="Logo"/>
                        <span class="slackers">Slackers</span>                       
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
                        Slackers replaces email inside your company
                        </h1>
                        <p className="homepage-p-text">
                        Keep conversations organized in Slackers, the smart alternative to email
                        </p>
                        <ul className="homepage-link">
                            <Link className="try-c-link" to={'/signup'}>TRY SLACKERS</Link>
                            
                            <a className="try-demo-link" onClick={this.handleDemoUser}>TRY DEMO</a>
                        </ul>
                        <p className="already-signup-text">
                        
                        Already using Slackers? <Link className="already-signup" to={'/login'}>Sign In</Link>
                        </p>
                    </div>
                </div>
  
                <footer className="container">
                    <div className="inner-container">
                        <div className="footer-links">
                            <h3>David Odio</h3>
                            <div className="github-img">
                            <i className="fab fa-github"></i>
                            <a href="https://github.com/nordov" target="_blank"> Github</a>
                            </div>
                            <div className="linkedin-img">
                            <i className="fab fa-linkedin"></i>
                            <a href="https://www.linkedin.com/in/nordov/" target="_blank"> LinkedIn</a>
                            </div>
                        </div>
                        <div className="footer-links">
                            <h3>Javier Ortiz</h3>
                            <div className="github-img">
                            <i className="fab fa-github"></i>
                            <a href="https://github.com/javiermortiz" target="_blank"> Github</a>
                            </div>
                            <div className="linkedin-img">
                            <i className="fab fa-linkedin"></i>
                            <a href="https://www.linkedin.com/in/javiermortiz/" target="_blank"> LinkedIn</a>
                            </div>
                        </div>
                        <div className="footer-links">
                            <h3>Thalia Pena</h3>
                            <div className="github-img">
                            <i className="fab fa-github"></i>
                            <a href="https://github.com/thaliapena12" target="_blank"> Github</a>
                            </div>
                            <div className="linkedin-img">
                            <i className="fab fa-linkedin"></i>
                            <a href="#"> LinkedIn</a>
                            </div>
                        </div>
                        <div className="footer-links">
                            <h3>Yenisbel Valle</h3>
                            <div className="github-img">
                            <i className="fab fa-github"></i>
                            <a href="https://github.com/yenisbel" target="_blank"> Github</a>
                            </div>
                            <div className="linkedin-img">
                            <i className="fab fa-linkedin"></i>
                            <a href="https://www.linkedin.com/in/yenisbelv/" target="_blank"> LinkedIn</a>
                            </div>
                        </div>
                    </div>     
                </footer>
                <div><center>Copyright &copy; 2020 </center> </div> 
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