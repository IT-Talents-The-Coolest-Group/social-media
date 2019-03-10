import React, { Component } from 'react';
import style from './FriendsItem.module.css';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';

class FriendsItem extends Component {
    render() {
        const { friend, deleteFriend, acceptFriend, title } = this.props;
        return (
            <div key={`friend-${friend && friend.id}`} className={style.FriendItem}>
                {title && title}
                {friend && <Link to={`/profile-home/${friend.id}/`} onClick={this.visitFriend}>{friend.firstName} {friend.lastName}</Link>}
                <div>
                    {acceptFriend && <Button className="GreenBtn" onClick={(e) => { acceptFriend(e, friend.id) }}>Accept</Button>}

                    {deleteFriend && <Button className="LinkBtn" onClick={(e) => { deleteFriend(e, friend.id) }}>Delete</Button>}
                </div>
            </div>
        );
    }
}

export default FriendsItem;