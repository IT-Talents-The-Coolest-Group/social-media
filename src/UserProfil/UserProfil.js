import React, { Component } from 'react';
import homeStyle from './UserProfile.module.css';
// import cover from '../assets/images/default_cover.jpg';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import img from '../assets/images/girl.jpg';

const themeStyle = {
    bigAvatar: {
        marginTop: '-20vh',
        marginLeft: 50,
        width: '25vh',
        position:'fixed',
        height: '25vh',
        zIndex: 9,
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
                        <div className={homeStyle.TollbarInfo}><a href="a">About</a></div>
                        <div className={homeStyle.TollbarInfo}><a href="a">Friends</a></div>
                        <div className={homeStyle.TollbarInfo}><a href="a">Photos</a></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

// UserProfile.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };

export default withStyles(themeStyle)(UserProfile);