import React, { Component } from 'react';
import homeUserStyle from './UserIntro.module.css';
import { Link } from 'react-router-dom';

class UserIntro extends Component {
    render() {
        // const { classes } = this.props;
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
                        <Link className={homeUserStyle.Links} to="/profile-home/account-details">Current City</Link>
                    </div>
                    <div className={homeUserStyle.ContainerBox}>
                        <div className={homeUserStyle.Icon + ' ' + homeUserStyle.Workplace}> </div>
                        <Link className={homeUserStyle.Links} to="/profile-home/account-details">Workplace</Link>
                    </div> 
                    <div className={homeUserStyle.ContainerBox}>
                        <div className={homeUserStyle.Icon + ' ' + homeUserStyle.School}> </div>
                        <Link className={homeUserStyle.Links} to="/profile-home/account-details">School</Link>
                    </div>
                    {/* <div className={homeUserStyle.ContainerBox}>
                        <div className={homeUserStyle.Icon + ' ' + homeUserStyle.Hometown}> </div>
                        <Link className={homeUserStyle.Links} to="/profile-home/account-details">Hometown</Link>
                    </div>
                    <div className={homeUserStyle.ContainerBox}>
                        <div className={homeUserStyle.Icon + ' ' + homeUserStyle.RelationshipStatus}> </div>
                        <Link className={homeUserStyle.Links} to="/profile-home/account-details">Relationship Status</Link>
                    </div> */}
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}

export default UserIntro;