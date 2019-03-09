import React, { Component } from 'react';
// import cover from '../assets/images/default_cover.jpg';
import UserIntro from './UserIntro/UserIntro';
import Post from '../Post/Post';
import UserCover from './UserCover/UserCover';
import homeStyle from './UserProfile.module.css';
// import image from '../assets/images/girl.jpg';
import { connect } from 'react-redux';


class UserProfile extends Component {
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

        return (
            <React.Fragment>
                <div className={homeStyle.Main}>
                    <UserCover />
                    <UserIntro />
                    {/* <img alt="Profile" src={image} className={homeStyle.avatar} /> */}
                    <Post />
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

export default connect(mapStateToProps, null)(UserProfile);