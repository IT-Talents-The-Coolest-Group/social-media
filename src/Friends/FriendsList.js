import React, { Component } from 'react';
import style from './FriendsList.module.css';
import homeStyle from '../UserProfile/UserProfile.module.css';
import { connect } from 'react-redux';
import { deleteFriend, manageFriendRequest } from '../Actions/users';
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
        const { users, currentUser } = this.props;
        const { userToShow } = this.state;

        if (typeof userToShow.friends === "undefined") {
            return;
        }

        const isCurrentUser = currentUser.user.id === userToShow.id;

        const html = [];
        html.push(<h1 key="friends-list">Friends</h1>);
        if (userToShow.friends.length === 0) {
            html.push(<FriendsItem 
                key={`friend-item-no-friends`}
                title="No friends yet"
            />);
        } else {
            for (let i = 0; i < userToShow.friends.length; i++) {
                let friendUserId = userToShow.friends[i];
                let friend = users.filter(u => u.id === friendUserId);
                if (friend.length === 1) {
                    html.push(<FriendsItem 
                        key={`friend-item-${friendUserId}`}
                        friend={friend[0]}
                        deleteFriend={isCurrentUser && this.deleteFriend}
                    />);
                }
            }
        }

        if (isCurrentUser && userToShow.pendingFriends) {
            html.push(<h1 key="pending-requests-list">Pending Requests</h1>);

            let hasPanding = false;
            Object.entries(userToShow.pendingFriends).forEach(([friendId, requestStatus]) => {
                if (requestStatus !== 'pending') {
                    return;
                }
                hasPanding = true;
                let friend = users.filter(u => u.id === Number(friendId));
                if (friend.length === 1) {
                    html.push(<FriendsItem 
                        key={`friend-item-${friendId}`}
                        friend={friend[0]}
                        deleteFriend={this.deleteFriendRequest} 
                        acceptFriend={this.acceptFriendRequest}
                    />);
                }
            });

            if (!hasPanding) {
                html.push(<FriendsItem 
                    key={`friend-item-no-pending-friend-requests`}
                    title="No pending friend requests"
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

    acceptFriendRequest = (e, friendId) => {
        e.preventDefault();
        this.setState({ ...this.state, showFriendRequests: false });
        this.props.manageFriendRequest(friendId, 'accept');
    };
    
    deleteFriendRequest = (e, friendId) => {
        e.preventDefault();
        this.setState({ ...this.state, showFriendRequests: false });
        this.props.manageFriendRequest(friendId, 'delete');
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
    deleteFriend: (userId) => dispatch(deleteFriend(userId)),
    manageFriendRequest: (userId, status) => dispatch(manageFriendRequest(userId, status))
  }
}

const mapStateToProps = state => {
    return {
      users: state.users,
      currentUser: state.currentUser,
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);