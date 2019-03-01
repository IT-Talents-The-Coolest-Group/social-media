import React, { Component } from 'react';
import styles from './RegisterContainer.module.css';
import Header from '../Header/Header';
import RegisterContent from './RegisterContent';
import LoginForm from '../Login/LoginForm';

class RegisterContainer extends Component {
    state = {
        email: "",
        password: "",
    };

    componentDidMount() {
        this.onChange.bind(this);
    }

    onChange(e) {
        // this.setState({email: e.target.value});
        // console.log(e.target.value, e.target.name);
    }

    render() {
        return (<div className={styles.RegisterContainer}>
            <Header className={styles.RegisterHeadContainer}> <LoginForm onChange={this.onChange} /></Header>
            <RegisterContent />
        </div>);
    }
}

export default RegisterContainer;