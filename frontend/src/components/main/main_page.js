import React from 'react';
import { Link } from 'react-router-dom';
import './main_page.css'; 
import img0 from './slack-img0.jpg';
import img1 from './slack-img1.jpg';
import img2 from './slack-img2.jpg';
import img3 from './slack-img3.jpg';
import vid1 from './slack-video.mp4';

class MainPage extends React.Component {

    render() {
        return (
            <div className="mainpage">
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
                        <Link to={'/signup'}>GET STARTED</Link>
                    </div>
                    </div>
                </div>
                <div className="body">
                    <h2>Slack replaces email inside your company</h2>
                    <h3>Discuss, collaborate, share — work is better without the inbox.</h3>
                    <h4>See how Slack can help your team:</h4>
                    <div className="images">
                        <div className="img1"> 
                            <img src={img1} alt=""/>
                            {/* <div classname="text1">TEXT ! </div> */}
                        </div>
                        <div className="img2">
                        <img src={img3} alt=""/>
                        </div>
                        <div className="img3">
                        <img src={img2} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="body2">
                    <h2>Break out of the inbox</h2>
                    <h3>Working in channels gives everyone on your team a shared view of progress and purpose.</h3>
                    <video width="520" height="490" controls autoPlay>
                        <source src={vid1} type="video/mp4"/>
                    </video>
                    <h5> See demo &rarr;</h5>
                </div>
                    
                    <footer>
                        Copyright &copy; 2020 
                    </footer>
            </div>
        );
    }
}

export default MainPage;