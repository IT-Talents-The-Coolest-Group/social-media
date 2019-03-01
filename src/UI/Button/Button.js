import React from 'react';
import styles from './Button.module.css';

const button = props =>
    <button onClick={props.onClick} className={`${styles[props.className]} ${styles.Btn}`}>{props.children}</button>

export default button;