import React, { Component } from 'react';
import aboutStyle from './About.module.css';
import UserCover from '../UserCover/UserCover';
import HomeHeader from '../../HomeHeader/HomeHeader';
import homeStyle from '../UserProfile.module.css';
import Input from '@material-ui/core/Input';
import ChangePassword from "./ChangePassword";
import { connect } from 'react-redux';
import Button from "../../UI/Button/Button";
import { updateUserInfo } from '../../Actions/users';

class AboutEdit extends Component {
    state = {
        info: null,
    };

    componentDidMount() {
        const { currentUser } = this.props;
        if (currentUser.isLogged === false) {
            this.props.route.history.push('/');
        }

        this.setState({
            info: {
                firstName: currentUser.user.firstName,
                lastName: currentUser.user.lastName,
                city: currentUser.user.city,
                workplace: currentUser.user.workplace,
                school: currentUser.user.school,
            }
        });
    }

    componentDidUpdate() {
        if (this.props.currentUser.isLogged === false) {
            this.props.route.history.push('/');
        }
    }

    onChange = (e) => {
        let info = this.state.info;
        info[e.target.name] = e.target.value;
        this.setState({...this.state, info});
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.updateUserInfo(this.state.info);
        this.props.route.history.push(`/profile-home/account-details/${this.props.currentUser.user.id}/`);
    };

    render() {
        if (this.state.info === null) {
            return(<>Loading...</>);
        }
        return (
            <>
                <HomeHeader route={this.props.route} />
                <div className={homeStyle.Main}>
                    <UserCover userToShow={this.props.currentUser.user} route={this.props.route} />
                    <div className={aboutStyle.Container}>
                        <h2>About</h2>
                        <hr className={aboutStyle.Hr} />
                        <div className={aboutStyle.DetailContainer}>
                            <span className={aboutStyle.Span}>First name</span>
                            <Input name="firstName" value={this.state.info.firstName} placeholder="Enter your first name..." onChange={this.onChange} />
                        </div>

                        <div className={aboutStyle.DetailContainer}>
                            <span className={aboutStyle.Span}>Lastname</span>
                            <Input name="lastName" value={this.state.info.lastName} placeholder="Enter your lastname..." onChange={this.onChange} />
                        </div>

                        <div className={aboutStyle.DetailContainer}>
                            <span className={aboutStyle.Span}>Current City</span>
                            <Input name="city" value={this.state.info.city} placeholder="Enter Current City..." onChange={this.onChange} />
                        </div>

                        <div className={aboutStyle.DetailContainer}>
                            <span className={aboutStyle.Span}>Workplace</span>
                            <Input name="workplace" value={this.state.info.workplace} placeholder="Enter Your Workplace..." onChange={this.onChange} />
                        </div>

                        <div className={aboutStyle.DetailContainer}>
                            <span className={aboutStyle.Span}>School</span>
                            <Input name="school" value={this.state.info.school} placeholder="Enter Your School..." onChange={this.onChange} />
                        </div>

                        <div className={aboutStyle.DetailContainer}>
                            <Button onClick={this.onSubmit}>Save</Button>
                        </div>

                        <ChangePassword route={this.props.route} />
                    </div>
                </div>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateUserInfo: (info) => dispatch(updateUserInfo(info)),
    }
  }

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutEdit);