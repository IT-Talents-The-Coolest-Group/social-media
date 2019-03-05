import React, { Component } from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

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
        let url = 'http://bacefookapi.herokuapp.com:8090/login';

        const data = {
            email: this.state.email,
            password: this.state.password
        };

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(res => {
                if (res.error) {
                    this.props.onError();
                }
                console.log(res);
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

export default LoginForm;