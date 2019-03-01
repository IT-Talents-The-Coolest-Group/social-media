import React from 'react';
import styles from './Link.module.css';
import { Link } from 'react-router-dom';

const link = props =>
    <Link to={props.to} className={`${styles[props.className]} ${styles.Link}`}>{props.children}</Link>

export default link;