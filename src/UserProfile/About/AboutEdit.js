import React, { Component } from 'react';
import aboutStyle from './About.module.css';
import UserCover from '../UserCover/UserCover';
import HomeHeader from '../../HomeHeader/HomeHeader';
import homeStyle from '../UserProfile.module.css';
// import Input from '../../UI/Input/Input';
import Input from '@material-ui/core/Input';
import ChangePassword from "./ChangePassword";
import { connect } from 'react-redux';


class AboutEdit extends Component {
    componentDidMount() {
        if (this.props.currentUser.isLogged === false) {
            this.props.route.history.push('/');
        }
    }

    componentDidUpdate() {
        if (this.props.currentUser.isLogged === false) {
            this.props.route.history.push('/');
        }
    }
    render() {
        return (
            <>
                <HomeHeader route={this.props.route} />
                <div className={homeStyle.Main}>
                    <UserCover userToShow={this.props.currentUser} route={this.props.route} />
                    <div className={aboutStyle.Container}>
                        <h2>About</h2>
                        <hr className={aboutStyle.Hr} />
                        <div className={aboutStyle.DetailContainer}>
                            <span className={aboutStyle.Span}>Nickname</span>
                            <Input placeholder=" Enter your Nickname..."></Input>
                            <p className={aboutStyle.Edit}>Edit Nickname</p>
                        </div>

                        <ChangePassword />

                        <div className={aboutStyle.DetailContainer}>
                            <span className={aboutStyle.Span}>Current City</span>
                            <Input placeholder="  Enter Current City..."></Input>
                            <p className={aboutStyle.Edit}>Edit Current City</p>
                        </div>
                        <div className={aboutStyle.DetailContainer}>
                            <span className={aboutStyle.Span}>Workplace</span>
                            <Input placeholder="Enter Your Workplace..."></Input>
                            <p className={aboutStyle.Edit}>Edit Workplace</p>
                        </div>
                        <div className={aboutStyle.DetailContainer}>
                            <span className={aboutStyle.Span}>School</span>
                            <Input placeholder="  Enter Your School..."></Input>
                            <p className={aboutStyle.Edit}>Edit School</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
    };
};

export default connect(mapStateToProps, null)(AboutEdit);