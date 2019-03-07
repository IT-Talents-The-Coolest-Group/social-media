import React, { Component } from 'react';
// import cover from '../assets/images/default_cover.jpg';
import UserIntro from './UserIntro/UserIntro';
import Post from '../Post/Post';
import UserCover from './UserCover/UserCover';
import homeStyle from './UserProfile.module.css';
import { withStyles } from '@material-ui/core/styles';
import image from '../assets/images/girl.jpg';
import Avatar from '@material-ui/core/Avatar';



const themeStyle = {
    bigAvatar: {
        width: '8vh',
        position: 'fixed',
        left:'37%',
        top:'64%',
        height: '8vh',
        zIndex: 3,
        border: '0.3vh solid white',
        
    },
};

class UserProfile extends Component {
    render() {
const {classes} = this.props;
        return (
            <React.Fragment>
                <div className={homeStyle.Main}>
                    <UserCover />
                    <UserIntro />
                    <Avatar alt="Profile Photo" src={image} className={classes.bigAvatar} />
                    <Post />
                </div>
            </React.Fragment>
        )
    }
}



export default withStyles(themeStyle)(UserProfile);