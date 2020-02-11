import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './signup.css' 

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            // password2: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/login');
        }

        this.setState({ errors: nextProps.errors })
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
            password: this.state.password,
            // password2: this.state.password2
        };

        this.props.signup(user, this.props.history);
    }

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
            <div className="signup">
                <nav className="signup-nav"><Link to='/'>slack</Link></nav>
                <div className="signup-form-container">
                    {this.renderErrors()}
                    <div className="signup-form">
                        <form onSubmit={this.handleSubmit}>
                            <div className="signup-form-contents">
                                <h2>Let's get started!</h2>
                                <p>Please enter your email, username, and password.</p>
                                    <input type="text"
                                        value={this.state.email}
                                        onChange={this.update('email')}
                                        placeholder="name@example.com"
                                        className={`input ${errorsClass}`}
                                    />
                                    <input type="text"
                                        value={this.state.handle}
                                        onChange={this.update('username')}
                                        placeholder="Username"
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