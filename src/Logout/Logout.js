import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/images/hands.gif';
import styles from '../Login/LoginContainer.module.css';
import logoutStyle from './Logout.module.css';
import { connect } from 'react-redux';
import { userLogout } from "../Actions/users";

class Logout extends Component {
    componentDidMount() {
        this.props.userLogout();
    }

    render() {
        return (
            <div className={styles.LoginContainer}>
            <h1 className={logoutStyle.H1}>Thanks For Visiting!</h1>
            <img className={logoutStyle.Image} src={img} alt="Thanks for visited us!"/>
            <Link to="/" className={logoutStyle.GoBack}>Go Back to Facebook</Link>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userLogout: () => dispatch(userLogout()),
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);