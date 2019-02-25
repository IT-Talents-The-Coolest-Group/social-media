import React from 'react';
import styles from './Button.module.css';

const button = props => 
(<button 
    className={styles.Button}>
        {props.title}
</button>)

export default button;