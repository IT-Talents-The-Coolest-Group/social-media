import React, { Component } from 'react';
import style from './FriendsItem.module.css';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';

class FriendsItem extends Component {
    render() {
        const { friend } = this.props;
        return (
            <div key={`friend-${friend.id}`} className={style.FriendRequest}>
                <Link to={`/profile-home/${friend.id}/`} onClick={this.visitFriend}>{friend.firstName} {friend.lastName}</Link>
                <div>
                    {typeof this.props.acceptFriend !== "undefined" && <Button className="GreenBtn" onClick={(e) => { this.props.acceptFriend(e, friend.id) }}>Accept</Button>}

                    {typeof this.props.deleteFriend !== "undefined" && <Button className="LinkBtn" onClick={(e) => { this.props.deleteFriend(e, friend.id) }}>Delete</Button>}
                </div>
            </div>
        );
    }
}

export default FriendsItem;