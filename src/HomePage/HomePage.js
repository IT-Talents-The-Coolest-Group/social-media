import React, { Component } from 'react';
import HomeHeader from '../HomeHeader/HomeHeader';
// import PostCreator from '../PostCreator/PostCreator';
import homeStyle from './HomePage.module.css';
import Post from '../Post/Post';
import image from '../assets/images/girl.jpg';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import postList from '../Post/PostList';

const themeStyle = {
    bigAvatar: {
        width: '8vh',
        position: 'fixed',
        left:'24%',
        top:'18.8%',
        height: '8vh',
        zIndex: 3,
        border: '0.3vh solid white',
        
    },
};
class HomePage extends Component {
    componentDidMount() {
        if (this.props.currentUser.isLogged === false) {
            this.props.route.history.push('/');
        }
    }

    componentDidUpdate() {
        if (this.props.currentUser.isLogged === false) {
            this.props.route.history.push('/');
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <HomeHeader />
                <div className={homeStyle.Container}>
                <Avatar alt="Profile Photo" src={image} className={classes.bigAvatar} />
                <postList/>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
    };
};

export default connect(mapStateToProps, null)(withStyles(themeStyle)(HomePage));