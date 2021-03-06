import React, { Component } from 'react';
import UserIntro from './UserIntro/UserIntro';
import PostForm from '../Post/PostForm';
import UserCover from './UserCover/UserCover';
import homeStyle from './UserProfile.module.css';
import { connect } from 'react-redux';
import HomeHeader from '../HomeHeader/HomeHeader';
import PostList from "../Post/PostList";

class UserProfile extends Component {
    state = {
        userToShow: this.props.currentUser.user,
    };

    componentDidMount() {
        if (this.props.currentUser.isLogged === false) {
            this.props.route.history.push('/');
            return;
        }
        if (!this.props.route.match.params.userId || this.props.users.findIndex(u => u.id === Number(this.props.route.match.params.userId)) === -1) {
            this.props.route.history.push("/");
            return;
        }
        this.loadUserToShow();
    }

    componentDidUpdate() {
        if (this.props.currentUser.isLogged === false) {
            this.props.route.history.push('/');
            return;
        }

        if (!this.props.route.match.params.userId || this.props.users.findIndex(u => u.id === Number(this.props.route.match.params.userId)) === -1) {
            this.props.route.history.push("/");
            return;
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
                <HomeHeader route={this.props.route} /> 
                <div className={homeStyle.Main}>
                    <UserCover userToShow={this.state.userToShow} route={this.props.route} />
                    <UserIntro route={this.props.route} />
                    <PostForm />
                <PostList/>
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