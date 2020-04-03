import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import img0 from '../../components/main/slack-img1.jpg';
import './signup.css' 

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        };

        this.props.signup(user, this.props.history);
    }

    renderErrors() {
        if (Object.keys(this.props.errors).length) {
            setTimeout(this.props.resetSessionErrors, 5000);
        }
        return (
            <ul className="errors-list">
                {Object.keys(this.props.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        <span>&#9888;</span>
                        {`${this.props.errors[error]}.`}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        let errorsClass = "";
        if (this.props.errors.length) errorsClass = "errors";
        return (
            <div className="signup">
                <nav className="signup-nav"><Link to='/'><img className="logo-login" src={img0} alt="Logo"/></Link></nav>
                <div className="signup-form-container">
                    {this.renderErrors()}
                    <div className="signup-form">
                        <form onSubmit={this.handleSubmit}>
                            <div className="signup-form-contents">
                                <h2>Let's get started!</h2>
                                <p>Please enter your email, display name, and password.</p>
                                    <input type="text"
                                        value={this.state.email}
                                        onChange={this.update('email')}
                                        placeholder="name@example.com"
                                        className={`input ${errorsClass}`}
                                    />
                                    <input type="text"
                                        value={this.state.handle}
                                        onChange={this.update('username')}
                                        placeholder="Display name"
                                        className={`input ${errorsClass}`}
                                    />
                                    <input type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                        placeholder="Password"
                                        className={`input ${errorsClass}`}
                                    />
                                    {/* <input type="password"
                                        value={this.state.password2}
                                        onChange={this.update('password2')}
                                        placeholder="Confirm Password"
                                    />
                                    <br /> */}
                                    <input type="submit" value="Connect" />
                            </div>
                        </form>
                    </div>    
                </div>
            </div>
            );
        }

}

export default withRouter(SignupForm);