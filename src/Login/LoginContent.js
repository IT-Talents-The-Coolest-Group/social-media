import React, { Component } from 'react';
import styles from './LoginContent.module.css';
import Link from '../UI/Link/Link';
import LoginForm from './LoginForm';

class LoginContent extends Component {
    state = {
        error: ''
    }

    setError = () => {
        this.setState({...this.state, error: 'Invalid data!'});
    }

    render() {
        // const { classes } = this.props;

        return (
            <div className={styles.LoginContent}>
                <h2>Log into Facebook</h2>
                {this.state.error !== '' && <div className={styles.LoginError}>{this.state.error}</div>}
                <LoginForm onError={this.setError} onChange={this.onChange} />
                <span>or</span>
                <Link className="GreenLink" to="/register">Create New Account</Link>
            </div>
        )
    }
}

export default LoginContent;

