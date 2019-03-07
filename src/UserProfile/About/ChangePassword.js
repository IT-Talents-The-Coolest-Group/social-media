import React, { Component } from 'react';
import aboutStyle from './About.module.css';
import Input from '@material-ui/core/Input';
import Button from '../../UI/Button/Button';

export default class ChangePassword extends Component {
    state = {
        oldPassword: '',
        newPassword: '',
        newPasswordConfirm: '',
    };

    onChange = (event) => {
        this.setState({ ...this.state, [event.target.name]: event.target.value });
    };

    onSubmit = (event) => {
        event.preventDefault();

        let url = `https://bacefookapi.herokuapp.com/users/tbd----123/changepassword`;
        const data = {
            oldPassword: this.state.oldPassword,
            newPassword: this.state.newPassword,
            confirmPassword: this.state.newPasswordConfirm,
        };

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // redirect: "follow",
            // referrer: "no-referrer", 
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(res => {
                console.log(res);
            })
            .catch(error => console.log(error));
    };

    render() {
        return (
            <div className={aboutStyle.DetailContainer}>
                <span className={aboutStyle.Span}>Change Password</span>
                <Input onChange={this.onChange} name="oldPassword" type="password" placeholder=" Your Old Password..." />
                <Input onChange={this.onChange} name="newPassword" type="password" placeholder=" Your New Password..." />
                <Input onChange={this.onChange} name="newPasswordConfirm" type="password" placeholder="Confirm New Password" />
                <Button className={aboutStyle.Edit} onClick={this.onSubmit}>Change Password</Button>
            </div>
        );
    }
}