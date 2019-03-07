import React from 'react';
import styles from './LoginContainer.module.css';
import Header from '../Header/Header';
import LoginContent from './LoginContent';
import Link from '../UI/Link/Link';

const loginContainer = props =>
    <div className={styles.LoginContainer}>
        <Header> <Link className="GreenLink" to="/register">Sign up</Link></Header>
        <LoginContent route={props.route} />
    </div>

export default loginContainer;