import React, { Component } from 'react';
import style from './FriendsList.module.css';
import homeStyle from '../UserProfile/UserProfile.module.css';
import { connect } from 'react-redux';
import { deleteFriend } from '../Actions/users';
import HomeHeader from '../HomeHeader/HomeHeader';
import FriendsItem from './FriendsItem';
import UserCover from '../UserProfile/UserCover/UserCover';
import UserIntro from '../UserProfile/UserIntro/UserIntro';

class FriendsList extends Component {
    state = {
        userToShow: null,
        friendsComponents: null,
    }

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

    loadFriendsHtml = () => {
        const { users } = this.props;
        const { userToShow } = this.state;

        if (typeof userToShow.friends === "undefined") {
            return;
        }
        const html = [];
        for (let i = 0; i < userToShow.friends.length; i++) {
            let friendUserId = userToShow.friends[i];
            let friend = users.filter(u => u.id === friendUserId);
            if (friend.length === 1) {
                html.push(<FriendsItem 
                    key={`friend-item-${friendUserId}`}
                    friend={friend[0]}
                    deleteFriend={this.deleteFriend}
                />);
            }
        }

        return html;
    };

    deleteFriend = (e, friendId) => {
        e.preventDefault();
        if (window.confirm("Are you sure you want to delete your friend?")) {
            this.props.deleteFriend(friendId);
        }
    };

    loadUserToShow = () => {
        if (this.state.userToShow === null || Number(this.props.route.match.params.userId) !== this.state.userToShow.id) {
            const userToShow = this.props.users.filter(u => u.id === Number(this.props.route.match.params.userId));
            if (userToShow && userToShow.length > 0) {
                this.setState({
                    ...this.state,
                    userToShow: userToShow[0]
                }
                );
            }
        }
    };

    render() {
        if (this.state.userToShow === null) {
            return (<>
                <HomeHeader route={this.props.route} />
                <div>Loading...</div>
            </>);
        }

        const friendsComponents = this.loadFriendsHtml();

        return(<>
            <HomeHeader route={this.props.route} />
            <div className={homeStyle.Main}>
                    <UserCover userToShow={this.state.userToShow} route={this.props.route} />
                    <UserIntro route={this.props.route} />
                    <div className={style.FriendListContainer}>
                        {friendsComponents}
                    </div>
                </div>
            </>);
    }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteFriend: (userId) => dispatch(deleteFriend(userId))
  }
}

const mapStateToProps = state => {
    return {
      users: state.users,
      currentUser: state.currentUser,
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);