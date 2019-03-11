import React, { Component } from 'react';
import homeUserStyle from './UserIntro.module.css';
import { Link } from 'react-router-dom';

class UserIntro extends Component {
    render() {
        
        const userId = this.props.route.match.params.userId;
        return (
            <React.Fragment>
                <div className={homeUserStyle.Container}>
                    <div className={homeUserStyle.ContainerBox + ' ' + homeUserStyle.Span}>
                        <div className={homeUserStyle.IntroIcon + ' ' + homeUserStyle.Icon}></div>
                        <span className={homeUserStyle.SpanStyle}>Intro</span>
                    </div>
                    <hr />
                    <div className={homeUserStyle.Active}>
                    <div className={homeUserStyle.ContainerBox}>
                        <div className={homeUserStyle.Icon + ' ' + homeUserStyle.CurrentCity}> </div>
                        <Link className={homeUserStyle.Links} to={`/profile-home/account-details/${userId}/`}>Current City</Link>
                    </div>
                    <div className={homeUserStyle.ContainerBox}>
                        <div className={homeUserStyle.Icon + ' ' + homeUserStyle.Workplace}> </div>
                        <Link className={homeUserStyle.Links} to={`/profile-home/account-details/${userId}/`}>Workplace</Link>
                    </div> 
                    <div className={homeUserStyle.ContainerBox}>
                        <div className={homeUserStyle.Icon + ' ' + homeUserStyle.School}> </div>
                        <Link className={homeUserStyle.Links} to={`/profile-home/account-details/${userId}/`}>School</Link>
                    </div>
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}

export default UserIntro;