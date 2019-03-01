import React, { Component } from 'react';
import homeUserStyle from './UserProfileHome.module.css';

class UserProfileHome extends Component {
    render() {
        // const { classes } = this.props;
        return (
            <React.Fragment>

                <div className={homeUserStyle.Container}>
                    <div className={homeUserStyle.ContainerBox + ' ' + homeUserStyle.Span}>
                        <div className={homeUserStyle.IntroIcon + ' ' + homeUserStyle.Icon}></div>
                        <span>Intro</span>
                    </div>
                    <hr />
                    <div className={homeUserStyle.ContainerBox}>
                        <div className={homeUserStyle.Icon + ' ' + homeUserStyle.CurrentCity}> </div>
                        <a href="a">Current City</a>
                    </div>
                    <div className={homeUserStyle.ContainerBox}>
                        <div className={homeUserStyle.Icon + ' ' + homeUserStyle.Workplace}> </div>
                        <a href="a">Workplace</a>
                    </div> 
                    <div className={homeUserStyle.ContainerBox}>
                        <div className={homeUserStyle.Icon + ' ' + homeUserStyle.School}> </div>
                        <a href="a">School</a>
                    </div>
                    <div className={homeUserStyle.ContainerBox}>
                        <div className={homeUserStyle.Icon + ' ' + homeUserStyle.Hometown}> </div>
                        <a href="a">Hometown</a>
                    </div>
                    <div className={homeUserStyle.ContainerBox}>
                        <div className={homeUserStyle.Icon + ' ' + homeUserStyle.RelationshipStatus}> </div>
                        <a href="a">Relationship Status</a>
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}

export default UserProfileHome;