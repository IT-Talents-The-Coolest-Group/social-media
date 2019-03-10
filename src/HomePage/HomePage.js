import React, { Component } from 'react';
import HomeHeader from '../HomeHeader/HomeHeader';
// import Post from '../Post/Post';
import homeStyle from './HomePage.module.css';
// import image from '../assets/images/girl.jpg';
import { connect } from 'react-redux';
import PostList from '../Post/PostList';
import PostForm from '../Post/PostForm';

class HomePage extends Component {
    componentDidMount() {
        if (this.props.currentUser.isLogged === false) {
            this.props.route.history.push('/');
        }

        if (!this.props.route.match.params.userId || this.props.users.findIndex(u => u.id === Number(this.props.route.match.params.userId)) === -1) {
            this.props.route.history.push(`/home/${this.props.currentUser.user.id}/`);
        }
    }

    componentDidUpdate() {
        if (this.props.currentUser.isLogged === false) {
            this.props.route.history.push('/');
        }
        
        if (!this.props.route.match.params.userId || this.props.users.findIndex(u => u.id === Number(this.props.route.match.params.userId)) === -1) {
            this.props.route.history.push(`/home/${this.props.currentUser.user.id}/`);
        }
    }

    render() {
        return (
            <React.Fragment>
                <HomeHeader route={this.props.route} />
                <div className={homeStyle.Container}>
                <PostForm/>
                <PostList title="News feed"/>
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

export default connect(mapStateToProps, null)(HomePage);