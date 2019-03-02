import React, { Component } from 'react';
import homeUserStyle from './UserProfileHome.module.css';
import { Link } from 'react-router-dom';

class UserProfileHome extends Component {
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
                        <Link className={homeUserStyle.Links} to="a">Current City</Link>
                    </div>
                    <div className={homeUserStyle.ContainerBox}>
                        <div className={homeUserStyle.Icon + ' ' + homeUserStyle.Workplace}> </div>
                        <Link className={homeUserStyle.Links} to="a">Workplace</Link>
                    </div> 
                    <div className={homeUserStyle.ContainerBox}>
                        <div className={homeUserStyle.Icon + ' ' + homeUserStyle.School}> </div>
                        <Link className={homeUserStyle.Links} to="a">School</Link>
                    </div>
                    <div className={homeUserStyle.ContainerBox}>
                        <div className={homeUserStyle.Icon + ' ' + homeUserStyle.Hometown}> </div>
                        <Link className={homeUserStyle.Links} to="a">Hometown</Link>
                    </div>
                    <div className={homeUserStyle.ContainerBox}>
                        <div className={homeUserStyle.Icon + ' ' + homeUserStyle.RelationshipStatus}> </div>
                        <Link className={homeUserStyle.Links} to="a">Relationship Status</Link>
                    </div>
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}

export default UserProfileHome;