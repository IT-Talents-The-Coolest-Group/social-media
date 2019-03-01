import React, { Component } from 'react';
<<<<<<< HEAD
// import { Button, Input } from 'reactstrap';
=======
import Button from '@material-ui/core/Button';
>>>>>>> b45d67f47d3bef445ef89d86ccd67043c484427d
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
<<<<<<< HEAD
                    <span>Log into Facebook</span>
                    {/* <Input placeholder="Email" type="text" /> */}
                    {/* <Input placeholder="Password" type="password" /> */}
                    {/* <Button color="primary">Log in</Button> */}
=======
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
                    />
                    <Button color="primary">Log in</Button>
>>>>>>> b45d67f47d3bef445ef89d86ccd67043c484427d
                    <span>or</span>
                    {/* <Button color="success">Create New Account</Button> */}
                </form>
            </div>
        )
    }
}

export default withStyles(themeStyles)(Main);

