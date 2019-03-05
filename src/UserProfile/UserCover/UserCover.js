import React, { Component } from 'react';
import coverStyle from './UserCover.module.css';
// import cover from '../assets/images/default_cover.jpg';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import img from '../../assets/images/girl.jpg';
import { Link } from 'react-router-dom';

const themeStyle = {
    bigAvatar: {
        marginTop: '-25vh',
        marginLeft: 20,
        width: '28vh',
        position: 'absolute',
        height: '28vh',
        zIndex: 3,
        border: '1vh solid white'
    },
};

class UserCover extends Component {
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <div className={coverStyle.Cover} />
                <Avatar alt="Profile Photo" src={img} className={classes.bigAvatar} />
                <Link to="/profile-home" className={coverStyle.Nickname}>Nickname</Link>
                <div className={coverStyle.ToolbarProfile}>
                    <Link to="/profile-home/account-details" className={coverStyle.TollbarInfo}>About</Link>
                    <Link to="a" className={coverStyle.TollbarInfo}>Friends</Link>
                    <Link to="a" className={coverStyle.TollbarInfo}>Photos</Link>
                </div>
            </React.Fragment>
        )
    }
}

// UserProfile.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };

export default withStyles(themeStyle)(UserCover);