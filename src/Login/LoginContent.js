import React, { Component } from 'react';
import styles from './LoginContent.module.css';
import Link from '../UI/Link/Link';
import LoginForm from './LoginForm';

class LoginContent extends Component {
    state = {
        email: "",
        password: "",
    };

    componentDidMount() {
        this.onChange.bind(this);
    }

    onChange(e) {
        // this.setState({email: e.target.value});
        // console.log(e.target.value, e.target.name);
    }

    render() {
        // const { classes } = this.props;

        return (
            <div className={styles.LoginContainer}>
                <h2>Log into Facebook</h2>
                <LoginForm onChange={this.onChange} />
                <span>or</span>
                <Link className="GreenLink" to="/register">Create New Account</Link>
            </div>
        )
    }
}

export default LoginContent;

