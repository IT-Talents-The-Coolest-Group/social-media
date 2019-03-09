import React, { Component } from 'react';
// import cover from '../assets/images/default_cover.jpg';
import UserIntro from './UserIntro/UserIntro';
import Post from '../Post/Post';
import UserCover from './UserCover/UserCover';
import homeStyle from './UserProfile.module.css';
// import image from '../assets/images/girl.jpg';
import { connect } from 'react-redux';

class UserProfile extends Component {
    state = {
        userToShow: this.props.currentUser.user,
    };

    componentDidMount() {
        if (this.props.currentUser.isLogged === false) {
            this.props.route.history.push('/');
        }
        this.loadUserToShow();
    }

    componentDidUpdate() {
        if (this.props.currentUser.isLogged === false) {
            this.props.route.history.push('/');
        }
        this.loadUserToShow();
    }

    loadUserToShow = () => {
        if (typeof this.props.route.match.params.userId !== 'undefined' && Number(this.props.route.match.params.userId) !== this.state.userToShow.id) {
            const userToShow = this.props.users.filter(u => u.id === Number(this.props.route.match.params.userId));
            if (userToShow && userToShow.length > 0) {
                this.setState({
                    ...this.state, 
                    userToShow: userToShow[0]}
                );
            }
        } else {
            if (typeof this.props.route.match.params.userId === 'undefined' && this.state.userToShow.id !== this.props.currentUser.user.id) {
                this.setState({userToShow: this.props.currentUser.user});
            }
        }
    };

    render() {

        return (
            <React.Fragment>
                <div className={homeStyle.Main}>
                    <UserCover userToShow={this.state.userToShow} route={this.props.route} />
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
        users: state.users,
        currentUser: state.currentUser,
    };
};

export default connect(mapStateToProps, null)(UserProfile);