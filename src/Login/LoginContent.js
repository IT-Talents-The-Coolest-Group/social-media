import React, { Component } from 'react';
import styles from './LoginContent.module.css';
import Link from '../UI/Link/Link';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

class LoginContent extends Component {
    state = {
        email: "",
        password: "",
    };

    componentDidMount() {
        this.onEmailChange.bind(this);
        this.onPasswordChange.bind(this);
    }

    onEmailChange(e) {
        // this.setState({email: e.target.value});
        // console.log(e.target.value, e.target.name);
    }

    onPasswordChange(e) {
        // this.setState({password: e.target.value});
        // console.log(e.target.value, e.target.name);
    }

    render() {
        // const { classes } = this.props;

        return (
            <div className={styles.LoginContainer}>
                <form>
                    <h2>Log into Facebook</h2>
                    <Input type="text" id="email" name="email" placeholder="Email" onChange={this.onEmailChange} />
                    <Input type="password" id="password" name="password" placeholder="Password" onChange={this.onPasswordChange} />
                    <Button className="BlueBtn" onClick={() => console.log('login')}>Log in</Button>
                    <span>or</span>
                    <Link className="GreenLink" to="/register">Create New Account</Link>
                </form>
            </div>
        )
    }
}

export default LoginContent;

