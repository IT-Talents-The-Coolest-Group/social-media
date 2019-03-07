import React, { Component } from 'react';
import styles from './RegisterContainer.module.css';
import Header from '../Header/Header';
import RegisterContent from './RegisterContent';
import LoginForm from '../Login/LoginForm';
// import { withRouter } from 'react-router-dom';

class RegisterContainer extends Component {
    state = {
        email: "",
        password: "",
    };

    setError = () => {
        this.props.route.history.push('/');
        return;
    }

    render() {
        return (<div className={styles.RegisterContainer}>
            <Header className={styles.RegisterHeadContainer}> <LoginForm route={this.props.route} onError={this.setError} /></Header>
            <RegisterContent route={this.props.route} />
        </div>);
    }
}

export default RegisterContainer;
// export default withRouter(RegisterContainer);