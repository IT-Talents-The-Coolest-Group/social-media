import React from 'react';
import styles from './LoginContainer.module.css';
import Header from '../Header/Header';
import LoginContent from './LoginContent';

const loginContainer = props =>
    <div className={styles.LoginContainer}>
        <Header />
        <LoginContent onClick={props.onClick} className={`${styles[props.className]} ${styles.Btn}`}>{props.children}</LoginContent>
    </div>

export default loginContainer;