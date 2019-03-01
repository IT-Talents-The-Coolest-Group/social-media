import React, { Component } from 'react';
import styles from './Main.module.css';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core';
import Link from '../UI/Link/Link';
import Button from '../UI/Button/Button';

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
  })

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
                    <Button className="BlueBtn" onClick={() => console.log('login')}>Log in</Button>
                    <span>or</span>
                    <Link className="GreenLink" to="/register">Create New Account</Link>
                </form>
            </div>
        )
    }
}

export default withStyles(themeStyles)(Main);

