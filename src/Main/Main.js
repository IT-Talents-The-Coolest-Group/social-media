import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import styles from './Main.module.css';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core';

const themeStyles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      borderColor: 'green'
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
  });

class Main extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={styles.LoginContainer}>
                <form>
                    <h2>Log into Facebook</h2>
                    <TextField
                        id="outlined-email-input"
                        label="Email"
                        className={classes.textField}
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                        // border-color="green[500]"
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        className={classes.textField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                        color="green"
                    />
                    <Button color="primary">Log in</Button>
                    <span>or</span>
                    {/* <Button color="success">Create New Account</Button> */}
                </form>
            </div>
        )
    }
}

export default withStyles(themeStyles)(Main);

