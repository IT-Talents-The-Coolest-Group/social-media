import React, { Component } from 'react';
import coverStyle from './UserCover.module.css';
// import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { uploadPhoto, addFriend } from '../../Actions/users';
// import { EventEmitter } from 'events';

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
        console.log(this.state.selectedFileCover.src)
        console.log(this.props.currentUser.isLogged)

// sessionStorage.setItem('cover',JSON.stringify({cover:selectedFileCover.src}))
// let v=JSON.parse(sessionStorage.getItem('cover'));
// console.log(this.props)

    }

    fileSelectedHandler2=event=>{
        event.preventDefault();
        let selectedFileAvatar = this.state.selectedFileAvatar
        selectedFileAvatar.src = event.target.files[0].name;
        this.setState({selectedFileAvatar})
        
    }

    addFriend = (e) => {
        e.preventDefault();
        this.props.addFriend(this.props.userToShow.id);
    }

    render() {
      if (this.props.currentUser.user === null) {
        return(<>Loading...</>);
      }

        const userId = this.props.route.match.params.userId;

        let myProfile = false;
        if (typeof this.props.route.match.params.userId === "undefined" || this.props.currentUser.user.id === Number(this.props.route.match.params.userId)) {
            myProfile = true;
        }

        let friendStatus = 'none';

        // todo move in componentDidMount
        if (typeof this.props.currentUser.user.pendingFriends !== "undefined" && typeof this.props.currentUser.user.pendingFriends[this.props.userToShow.id] !== "undefined") {
            friendStatus = this.props.currentUser.user.pendingFriends[this.props.userToShow.id];
        }

        if (this.props.currentUser.user.friends && this.props.currentUser.user.friends.indexOf(this.props.userToShow.id) !== -1) {
            friendStatus = 'friends';
        }

        return (
            <React.Fragment>

                <input id="myuniqueid" className={coverStyle.Upload} type="file" onChange={this.fileSelectedHandler}/>

                {this.props.userToShow.id === this.props.currentUser.user.id && 
                <label className = {coverStyle.Label} htmlFor="myuniqueid">Change Your Cover</label>}

                <img src={require('../../assets/images/'+ this.state.selectedFileCover.src)} alt="Cover" className={coverStyle.Cover} />
                <img alt="Avatar" src={require('../../assets/images/'+ this.state.selectedFileAvatar.src)} className={coverStyle.bigAvatar} />

                <input id="myuniqueid2" className={coverStyle.Upload} type="file"  onChange={this.fileSelectedHandler2}/>

                {this.props.userToShow.id === this.props.currentUser.user.id && 
                <label className = {coverStyle.Label+' '+ coverStyle.ProfilePhoto} htmlFor="myuniqueid2">Change avatar</label>}

                <Link to={`/profile-home/${userId}/`} className={coverStyle.Nickname}>{this.props.userToShow.firstName} {this.props.userToShow.lastName}</Link>

                {this.props.userToShow.id === this.props.currentUser.user.id && 
                <Link className={coverStyle.Edit} to="/profile-home/account-details-Edit"></Link>}

                <div className={coverStyle.ToolbarProfile}>
                    <Link to={`/profile-home/account-details/${userId}/`} className={coverStyle.TollbarInfo}>About</Link>
                    <Link to={`/friends-list/${userId}/`} className={coverStyle.TollbarInfo}>Friends</Link>
                    <Link to="a" className={coverStyle.TollbarInfo}>Photos</Link>
                    
                    {!myProfile && friendStatus === 'none' &&
                    <Link to="#" className={coverStyle.TollbarInfo} onClick={this.addFriend}>Add friend</Link>}
                    
                    {!myProfile && friendStatus === 'sent' &&
                    <Link to="#" className={coverStyle.TollbarInfo}>Request sent</Link>}
                    
                    {!myProfile && friendStatus === 'friends' &&
                    <Link to="#" className={coverStyle.TollbarInfo}>Already Friends</Link>}
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
        // fileSelectedHandler: (selectedFileCover) => dispatch(uploadPhoto(selectedFileCover))
        addFriend: (friendId) => dispatch(addFriend(friendId))
    }
}
   
  export default connect(mapStateToProps, mapDispatchToProps)(UserCover);
// export default (UserCover);