import React from 'react';
import p from './Post.module.css';
import { deletePost } from '../Actions/CreatePost';
import { connect } from 'react-redux';
import { format } from 'date-fns';


class Post extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.time !== this.props.time ||
            nextProps.info !== this.props.info ||
            nextProps.id !== this.props.id ||
            nextProps.onDelete !== this.props.onDelete) {
            return true;
        } else {
            return false;
        }
    }

    deletePost = () => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            this.props.deletePost(this.props.id);
        }
    };

    render() {
        const posterUser = this.props.users.find(u => u.id === this.props.posterId);
        const posterName = posterUser ? `${posterUser.firstName} ${posterUser.lastName}` : '';
        return (
            <div className={p.Container}>
                <div>
                    <h4 style={{ color: 'black' }}>{posterName}</h4>
                </div>
                <div style={{ width: 200 }}>
                    <p>{this.props.info}</p></div>
                <div>
                    <p className={p.Size}>Posted in : {format(this.props.createdDate, 'HH:mm DD.MM.YYYY')}</p></div>
                <br />
                {this.props.posterId === this.props.currentUser.user.id && <button onClick={() => this.deletePost()} className={p.Upload}>Delete</button>}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deletePost: id => dispatch(deletePost(id))
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);

