import React, { Component } from 'react';
// import cover from '../assets/images/default_cover.jpg';
import UserIntro from './UserIntro/UserIntro';
import PostCreator from '../PostCreator/PostCreator';
import UserCover from './UserCover/UserCover';
import homeStyle from './UserProfile.module.css';



class UserProfile extends Component {
    render() {

        return (
            <React.Fragment>
                <div className={homeStyle.Main}>
                    <UserCover />
                    <UserIntro />
                    <PostCreator />
                </div>
            </React.Fragment>
        )
    }
}



export default UserProfile;