import React, { Component } from 'react';
import coverStyle from './UserCover.module.css';
// import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { uploadPhoto } from '../../Actions/users';
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

    render() {
        return (
            <React.Fragment>
                {/* <div style={{backgroundImage: `url(require('../../assets/images/'+ ${this.state.selectedFileCover.src}))`}} className={coverStyle.Cover}> */}
                <input id="myuniqueid" className={coverStyle.Upload} type="file" onChange={this.fileSelectedHandler}/>
                <label className = {coverStyle.Label} htmlFor="myuniqueid">Change Your Cover</label>
                <img src={require('../../assets/images/'+ this.state.selectedFileCover.src)} alt="Cover" className={coverStyle.Cover} />
                <img alt="Avatar" src={require('../../assets/images/'+ this.state.selectedFileAvatar.src)} className={coverStyle.bigAvatar} />
                <input id="myuniqueid2" className={coverStyle.Upload} type="file"  onChange={this.fileSelectedHandler2}/>
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

//   const mapDispatchToProps = dispatch => {
//     return {
//         fileSelectedHandler: (selectedFileCover) => dispatch(uploadPhoto(selectedFileCover))
//     }
// }
   
  export default connect(mapStateToProps, null)(UserCover);
// export default (UserCover);