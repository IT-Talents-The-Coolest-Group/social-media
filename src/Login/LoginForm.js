import React, { Component } from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import { connect } from 'react-redux';
import { userLogin } from '../Actions/users';

class LoginForm extends Component {
    state = {
        email: "",
        password: "",
    };

    componentDidMount() {
        if (this.props.currentUser.isLogged === true) {
            this.props.route.history.push(`/home/${this.props.currentUser.user.id}/`);
        }
    }

    componentDidUpdate() {
        if (this.props.currentUser.isLogged === true) {
            this.props.route.history.push(`/home/${this.props.currentUser.user.id}/`);
        } else {
            if (this.props.loginErr === true) {
                this.props.onError();
            }
        }
    }

    onChange = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.userLogin(this.state.email, this.state.password);
    }

    render() {
        return (
            <form method="POST">
                <Input type="text" id="email" name="email" placeholder="Email" onChange={this.onChange} />
                <Input type="password" id="password" name="password" placeholder="Password" onChange={this.onChange} />
                <Button className="BlueBtn" onClick={this.onSubmit}>Log in</Button>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userLogin: (email, password) => dispatch(userLogin(email, password))
    };
}

const mapStateToProps = state => {
    return {
        users: state.users,
        currentUser: state.currentUser,
        loginErr: state.loginErr,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);