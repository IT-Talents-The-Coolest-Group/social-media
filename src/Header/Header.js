import React from 'react';
import styles from './Header.module.css';
import Button from '../UI/Button/Button';

const header = props =>
    (<header>
        <div className={styles.HeadContainer}>
            <h3 className={styles.HeadH3}>facebook</h3>
            <Button title="Registration" />
        </div>
    </header>);

export default header;