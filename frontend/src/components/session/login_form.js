import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './login.css';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    // Once the user has been authenticated, redirect to the Channels page
    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/channels');
        }

        // Set or clear errors
        this.setState({ errors: nextProps.errors })
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
        return (
            <ul className="errors-list">
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        <span>&#9888;</span>
                        {`${this.state.errors[error]}.`}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        let errorsClass = "";
        if (Object.values(this.state.errors).length) errorsClass = "errors";
        return (
            <div className="login">
                <nav className="login-nav"><Link to='/'>slack</Link></nav>
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