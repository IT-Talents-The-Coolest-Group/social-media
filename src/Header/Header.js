import React from 'react';
import styles from './Header.module.css';
import Link from '../UI/Link/Link'

const header = props =>
    (<header>
        <div className={styles.HeadContainer}>
            <h2 className={styles.HeadH3}>facebook</h2>
                <Link className="GreenLink" to="/register">Sign up</Link>
        </div>
    </header>);

export default header;