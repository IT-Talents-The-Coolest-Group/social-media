import React, { Component } from 'react';
import HomeHeader from '../HomeHeader/HomeHeader';
// import PostCreator from '../PostCreator/PostCreator';
import homeStyle from './HomePage.module.css';
import Post from '../Post/Post';
import image from '../assets/images/girl.jpg';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';


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
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <HomeHeader />
                <div className={homeStyle.Container}>
                <Avatar alt="Profile Photo" src={image} className={classes.bigAvatar} />
                <Post/>
                </div>
            </React.Fragment>
        )
    }
}

export default withStyles(themeStyle)(HomePage);