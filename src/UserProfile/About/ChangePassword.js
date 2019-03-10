import React, { Component } from 'react';
import aboutStyle from './About.module.css';
import Input from '@material-ui/core/Input';
import Button from '../../UI/Button/Button';
import { connect } from 'react-redux';
import { userChangePassword } from '../../Actions/users';

class ChangePassword extends Component {
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
        const { newPassword, newPasswordConfirm, oldPassword } = this.state;
        this.props.userChangePassword(newPassword, newPasswordConfirm, oldPassword);
    }

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

const mapDispatchToProps = dispatch => {
    return {
        userChangePassword: (newPassword, newPasswordConfirm, oldPassword) => dispatch(userChangePassword(newPassword, newPasswordConfirm, oldPassword))
    }
  }

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);