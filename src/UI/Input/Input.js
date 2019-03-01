import React from 'react';
import styles from './Input.module.css';

const input = props => {
    return (<input 
        className={styles.Input} 
        {...props} />);
}

export default input;
