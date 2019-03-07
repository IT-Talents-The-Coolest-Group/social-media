import React, { Component } from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import { withRouter } from 'react-router-dom';

class LoginForm extends Component {
    state = {
        email: "",
        password: "",
    };

    onChange = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        let url = 'https://bacefookapi.herokuapp.com/login';
        const data = {
            email: this.state.email,
            password: this.state.password
        };

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            body: JSON.stringify(data),
        })
            .then(res => {
                sessionStorage.setItem('loggedUserId', res);
                this.props.history.push("/home");

                if (res.error) {
                    this.props.onError();
                }
            })
            .catch(error => console.error(error));
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

export default withRouter(LoginForm);