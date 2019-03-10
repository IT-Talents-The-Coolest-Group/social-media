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

        if (!this.props.route.match.params.userId) {
            this.props.route.history.push(`/home/${this.props.currentUser.user.id}/`);
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
                <HomeHeader route={this.props.route} />
                <div className={homeStyle.Container}>
                {/* <img alt="Profile" draggable="false" src={image} className={homeStyle.avatar} /> */}
                <PostForm/>
                <PostList/>
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

export default connect(mapStateToProps, null)(HomePage);