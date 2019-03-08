import React, { Component } from 'react';
import aboutStyle from './About.module.css';
import UserCover from '../UserCover/UserCover';
import HomeHeader from '../../HomeHeader/HomeHeader';
import homeStyle from '../UserProfile.module.css';
// import Input from '../../UI/Input/Input';
import Input from '@material-ui/core/Input';
import ChangePassword from "./ChangePassword";
import { connect } from 'react-redux';


class About extends Component {
    state = {
        nickname: {
            nickname: 'Simona'
        },
        currentCity: {
            city: 'Sofia'
        },
        workplace: {
            work: 'Programmer'
        },
        school: {
            school: 'НПМГ "Акад. Л. Чакалов" '
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
                <HomeHeader />
                <div className={homeStyle.Main}>
                    <UserCover />
                    <div className={aboutStyle.Container}>
                        <h2>About</h2>
                        <hr className={aboutStyle.Hr} />
                        <div className={aboutStyle.DetailContainer}>
                            <span className={aboutStyle.Span}>Nickname</span>
                            <p>{this.state.nickname.nickname}</p>
                        </div>

                        <div className={aboutStyle.DetailContainer}>
                            <span className={aboutStyle.Span}>Current City</span>
                            <p>{this.state.currentCity.city}</p>
                        </div>
                        <div className={aboutStyle.DetailContainer}>
                            <span className={aboutStyle.Span}>Workplace</span>
                            <p>{this.state.workplace.work}</p>
                        </div>
                        <div className={aboutStyle.DetailContainer}>
                            <span className={aboutStyle.Span}>School</span>
                            <p>{this.state.school.school}</p>
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

export default connect(mapStateToProps, null)(About);