import React, { Component } from 'react';
import aboutStyle from './About.module.css';
import UserCover from '../UserCover/UserCover';
import HomeHeader from '../../HomeHeader/HomeHeader';
import homeStyle from '../UserProfile.module.css';
// import Input from '../../UI/Input/Input';
import { connect } from 'react-redux';

class About extends Component {
    state = {
        nickname:'',
        currentCity:'Sofia',
        workplace: 'Programmer',
        school: 'НПМГ "Акад. Л. Чакалов" ',

        userToShow: this.props.currentUser.user
    }

    componentDidMount() {
        if (this.props.currentUser.isLogged === false) {
            this.props.route.history.push('/');
        }

        this.loadUserToShow();
    }

    componentDidUpdate() {
        if (this.props.currentUser.isLogged === false) {
            this.props.route.history.push('/');
        }

        this.loadUserToShow();
        }

        loadUserToShow = () => {
            if (typeof this.props.route.match.params.userId !== 'undefined' && Number(this.props.route.match.params.userId) !== this.state.userToShow.id) {
                const userToShow = this.props.users.filter(u => u.id === Number(this.props.route.match.params.userId));
                if (userToShow && userToShow.length > 0) {
                    this.setState({
                        ...this.state,
                        userToShow: userToShow[0]}
                    );
                }
            } else {
                if (typeof this.props.route.match.params.userId === 'undefined' && this.state.userToShow.id !== this.props.currentUser.user.id) {
                    this.setState({userToShow: this.props.currentUser.user});
                }
            }
        };

    render() {
        return (
            <>
                <HomeHeader route={this.props.route} />
                <div className={homeStyle.Main}>
                    <UserCover userToShow={this.state.userToShow} route={this.props.route} />
                    <div className={aboutStyle.Container}>
                        <h2>About</h2>
                        <hr className={aboutStyle.Hr} />
                        <div className={aboutStyle.DetailContainer}>
                            <span className={aboutStyle.Span}>Nickname</span>
                            <p>{this.state.userToShow.firstName}</p>
                        </div>

                        <div className={aboutStyle.DetailContainer}>
                            <span className={aboutStyle.Span}>Current City</span>
                            <p>{this.state.currentCity}</p>
                        </div>
                        <div className={aboutStyle.DetailContainer}>
                            <span className={aboutStyle.Span}>Workplace</span>
                            <p>{this.state.workplace}</p>
                        </div>
                        <div className={aboutStyle.DetailContainer}>
                            <span className={aboutStyle.Span}>School</span>
                            <p>{this.state.school}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users,
        currentUser: state.currentUser,
    };
};

export default connect(mapStateToProps, null)(About);