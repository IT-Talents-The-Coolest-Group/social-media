import React, { Component } from 'react';
import coverStyle from './UserCover.module.css';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { uploadPhoto } from '../../Actions/users';
import { EventEmitter } from 'events';

const themeStyles = {
    bigAvatar: {
        width: '28vh',
        top:'17%',
        left:'11%',
        position: 'absolute',
        height: '28vh',
        // zIndex: 3,
        border: '1vh solid white'
    },
};

class UserCover extends Component {

    state={
        selectedFileCover:{
            src:'12.jpg'
        },
        selectedFileAvatar:{
            src:'girl.jpg'
        }
    }
   
    fileSelectedHandler=event=>{
        event.preventDefault();
        let selectedFileCover = this.state.selectedFileCover
        selectedFileCover.src = event.target.files[0].name;
        this.setState({selectedFileCover})
        
    }

    fileSelectedHandler2=event=>{
        event.preventDefault();
        let selectedFileAvatar = this.state.selectedFileAvatar
        selectedFileAvatar.src = event.target.files[0].name;
        this.setState({selectedFileAvatar})
        
    }

    render() {
        const { classes } = this.props;
        
        return (
            <React.Fragment>
                
                <input id="myuniqueid" className={coverStyle.Upload} type="file" className={coverStyle.Upload} onChange={this.fileSelectedHandler}/>
                <label className = {coverStyle.Label} htmlFor="myuniqueid">Change Your Cover</label>
                <img src={require('../../assets/images/'+ this.state.selectedFileCover.src)} alt="Cover" className={coverStyle.Cover} />
                <Avatar alt="Profile Photo" src={require('../../assets/images/'+ this.state.selectedFileAvatar.src)} className={classes.bigAvatar} />
                <input id="myuniqueid2" className={coverStyle.Upload} type="file" className={coverStyle.Upload} onChange={this.fileSelectedHandler2}/>
                <label className = {coverStyle.Label+' '+ coverStyle.ProfilePhoto} htmlFor="myuniqueid2">Change Profile Photo</label>
                <Link to="/profile-home" className={coverStyle.Nickname}>{this.props.currentUser.user.firstName} {this.props.currentUser.user.lastName}</Link>
                <Link className={coverStyle.Edit} to="/profile-home/account-details-Edit"></Link>
                <div className={coverStyle.ToolbarProfile}>
                    <Link to="/profile-home/account-details" className={coverStyle.TollbarInfo}>About</Link>
                    <Link to="a" className={coverStyle.TollbarInfo}>Friends</Link>
                    <Link to="a" className={coverStyle.TollbarInfo}>Photos</Link>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users,
        currentUser: state.currentUser,
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
        fileSelectedHandler: (selectedFileCover,selectedFileAvatar) => 
        dispatch(uploadPhoto(selectedFileCover,selectedFileAvatar))
    }
}
   
  export default connect(mapStateToProps, mapDispatchToProps)(withStyles(themeStyles)(UserCover));
// export default withStyles(themeStyle)(UserCover);