import React, { Component } from 'react';
import styles from './RegisterContainer.module.css';
import Header from '../Header/Header';
import RegisterContent from './RegisterContent';
import LoginForm from '../Login/LoginForm';
import { withRouter } from 'react-router-dom';

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

    setError = () => {
        this.props.history.push('/');
        return;
    }

    render() {
        return (<div className={styles.RegisterContainer}>
            <Header className={styles.RegisterHeadContainer}> <LoginForm onError={this.setError} onChange={this.onChange} /></Header>
            <RegisterContent />
        </div>);
    }
}

export default withRouter(RegisterContainer);