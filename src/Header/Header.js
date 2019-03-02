import React from 'react';
import styles from './Header.module.css';

const header = props =>
    (<header>
        <div className={`${styles.HeadContainer} ${props.className}`}>
            <h2 className={styles.HeadH3}>facebook</h2>
               {props.children}
        </div>
    </header>);

export default header;