import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './login.css';
import img0 from '../../components/main/slack-img0.jpg';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    // Handle field updates (called in the render method)
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user);
    }

    // Render the session errors if there are any
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
        if (Object.values(this.props.errors).length) errorsClass = "errors";
        return (
            <div className="login">
                <nav className="login-nav"><Link to='/'><img className="logo-login" src={img0} alt="Logo"/></Link></nav>
                <div className="login-form-container">
                    {this.renderErrors()}
                    <div className="login-form">
                        <form onSubmit={this.handleSubmit}>
                            <div className="login-form-contents">
                                <h2>Connect to your workspace.</h2>
                                <p>Please enter your email and password.</p>
                                <input type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    placeholder="name@example.com"
                                    className={`input ${errorsClass}`}
                                />

                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    placeholder="Password"
                                    className={`input ${errorsClass}`}
                                />
 
                                <input type="submit" value="Connect" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(LoginForm);