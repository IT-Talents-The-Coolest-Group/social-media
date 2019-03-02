import React, { Component } from 'react';
import homeStyle from './UserProfile.module.css';
// import cover from '../assets/images/default_cover.jpg';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import img from '../assets/images/girl.jpg';
import UserProfileHome from '../UserProfileHome/UserProfileHome';
import PostCreator from '../PostCreator/PostCreator';
import { Link } from 'react-router-dom';

const themeStyle = {
    bigAvatar: {
        marginTop: '-25vh',
        marginLeft: 20,
        width: '28vh',
        position: 'absolute',
        height: '28vh',
        zIndex: 3,
        border:'1vh solid white'
    },
};

class UserProfile extends Component {
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <div className={homeStyle.Main}>
                    <div className={homeStyle.Cover} />
                    <Avatar alt="Profile Photo" src={img} className={classes.bigAvatar} />
                    <div className={homeStyle.ToolbarProfile}>
                        <Link to="a" className={homeStyle.TollbarInfo}>About</Link>
                        <Link to="a" className={homeStyle.TollbarInfo}>Friends</Link>
                        <Link to="a" className={homeStyle.TollbarInfo}>Photos</Link>
                    </div>
                    <UserProfileHome />
                    <PostCreator/>
                </div>
            </React.Fragment>
        )
    }
}

// UserProfile.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };

export default withStyles(themeStyle)(UserProfile);