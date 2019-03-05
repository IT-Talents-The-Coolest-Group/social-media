import React, { Component } from 'react';
import aboutStyle from './About.module.css';
import UserCover from '../UserCover/UserCover';
import HomeHeader from '../../HomeHeader/HomeHeader';
import homeStyle from '../UserProfile.module.css';

class About extends Component {
    render() {
        return (
            <>
                <HomeHeader />
                    <div className={homeStyle.Main}>
                    <UserCover />
                    <div className={aboutStyle.Container}>
                    </div>
                </div>
            </>
        )
    }
}

export default About;