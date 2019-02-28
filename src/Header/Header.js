import React from 'react';
import styles from './Header.module.css';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const themeStyles = theme => ({
    cssRoot: {
        color: 'rgb(255, 255, 255)'
    }
});

const theme = createMuiTheme({
    palette: {
        primary: green,
    }
});


const header = props =>
    (<header>
        <div className={styles.HeadContainer}>
            <h2 className={styles.HeadH3}>facebook</h2>
            <MuiThemeProvider theme={theme}>
                <Button variant="contained" color="primary" className={props.classes.cssRoot}>Sign up</Button>
            </MuiThemeProvider>
        </div>
    </header>);

export default withStyles(themeStyles)(header);