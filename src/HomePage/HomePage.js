import React, { Component } from 'react';
import HomeHeader from '../HomeHeader/HomeHeader';
import PostCreator from '../PostCreator/PostCreator';
import homeStyle from './HomePage.module.css';
import Post from '../Post/Post';

class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                <HomeHeader />
                <div className={homeStyle.Container}>
                <Post/>
                </div>
            </React.Fragment>
        )
    }
}

export default HomePage;