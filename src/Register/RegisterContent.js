import React, { Component } from 'react';
import styles from './RegisterContent.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import { connect } from 'react-redux';
import { userRegister } from "../Actions/users";

class RegisterContent extends Component {

    state = {
        days: [],
        months: [],
        years: [],
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        year: '',
        month: '',
        day: '',
        gender: 'unspecified',
        errors: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            year: '',
            register: ''
        }
    };

    componentDidMount() {
        let days = [];

        for (let day = 1; day <= 31; day++) {
            days.push(<option key={`day-${day}`} value={day}>{day}</option>);
        }

        const allMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let months = [];

        for (let month = 0; month < allMonths.length; month++) {
            months.push(<option key={`month-${month}`} value={month + 1}>{allMonths[month]}</option>);
        }

        let years = [];
        let currentYear = new Date().getFullYear();
        const MAX_AGE = 120;

        for (let year = currentYear; year >= currentYear - MAX_AGE; year--) {
            years.push(<option key={`year${year}`} value={year}>{year}</option>);
        }

        this.setState({ ...this.state, days, months, years });
    }

    onChange = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    };

    validate = () => {
        let errors = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            year: ''
        };

        let hasErrors = false;

        if (this.state.firstName.length < 3) {
            hasErrors = true;
            errors.firstName = 'Your name must be more than 3 symbols length!';
        }

        if (this.state.lastName.length < 3) {
            hasErrors = true;
            errors.lastName = 'Your lastname must be more than 3 symbols length!';
        }

        if (!isEmailValid(this.state.email)) {
            hasErrors = true;
            errors.email = 'Invalid email!';
        } 

        if (emailExists(this.state.email)) {
            hasErrors = true;
            errors.email = 'The email is already taken!';
        }

        const passRegex = new RegExp("^[a-zA-Z0-9]{8,30}$");

        if (!passRegex.test(this.state.password)) {
            hasErrors = true;
            errors.password = 'Invalid password!';
        }

        if (this.state.password !== this.state.confirmPassword) {
            hasErrors = true;
            errors.confirmPassword = 'Different passwords!';
        }

        let currentYear = new Date().getFullYear();

        const MIN_AGE = 13;

        if (this.state.year > currentYear - MIN_AGE) {
            hasErrors = true;
            errors.year = 'Invalid year!';
        }

        this.setState({ ...this.state, errors });

        return hasErrors;
    }

    onSubmit = (e) => {
        e.preventDefault();
        const hasErrors = this.validate();
        if (!hasErrors) {
            const day = +this.state.day <= 9 ? `0${this.state.day}` : this.state.day;
            const month = +this.state.month <= 9 ? `0${this.state.month}` : this.state.month;
            const data = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                passwordConfirmation: this.state.confirmPassword,
                birthday: `${this.state.year}-${month}-${day}`,
                gender: this.state.gender,
            };

            this.props.userRegister(data);

            this.props.route.history.push("/home");
        }
    }

    render() {

        let classes = {
            firstName: [styles.regCont, styles.firstNameContainer],
            lastName: [styles.regCont, styles.lastNameContainer],
            email: [styles.regCont],
            password: [styles.regCont],
            confirmPassword: [styles.regCont],
            year: ['']
        };

        if (this.state.errors.firstName !== '') {
            classes.firstName.push(styles.error);
        }

        if (this.state.errors.lastName !== '') {
            classes.lastName.push(styles.error);
        }

        if (this.state.errors.email !== '') {
            classes.email.push(styles.error);
        }

        if (this.state.errors.password !== '') {
            classes.password.push(styles.error);
        }

        if (this.state.errors.confirmPassword !== '') {
            classes.confirmPassword.push(styles.error);
        }

        if (this.state.errors.year !== '') {
            classes.year.push(styles.dropdownErr);
        }

        return (
            <div className={styles.RegisterContent}>
                <form method="POST">
                    <h2 className={styles.H2} >Create a New Account</h2>
                    <div className={styles.namesContainer}>
                        <div className={classes.firstName.join(' ')}>
                            <Input type="text" id="first-name" name="firstName" placeholder="First Name" maxLength={10} onChange={this.onChange} />
                            {this.state.errors.firstName !== '' && this.state.errors.firstName}
                        </div>
                        <div className={classes.lastName.join(' ')}>
                            <Input type="text" id="last-name" name="lastName" placeholder="Last Name" onChange={this.onChange} />
                            {this.state.errors.lastName !== '' && this.state.errors.lastName}
                        </div>
                    </div>
                    <div className={classes.email.join(' ')}>
                        <Input type="email" id="reg-email" name="email" placeholder="Email" onChange={this.onChange} />
                        {this.state.errors.email !== '' && this.state.errors.email}
                    </div>
                    <div className={classes.password.join(' ')}>
                        <Input type="password" id="reg-password" name="password" placeholder="New Password" onChange={this.onChange} />
                        {this.state.errors.password !== '' && this.state.errors.password}
                    </div>
                    <div className={classes.confirmPassword.join(' ')}>
                        <Input type="password" id="confirm-password" name="confirmPassword" placeholder="Confirm Password" onChange={this.onChange} />
                        {this.state.errors.confirmPassword !== '' && this.state.errors.confirmPassword}
                    </div>

                    <div>
                        <label className={styles.birthday}>Birthday</label>
                        <select name="month" onChange={this.onChange}>
                            <option defaultValue value="">Month</option>
                            {this.state.months}
                        </select>
                        <select name="day" onChange={this.onChange}>
                            <option defaultValue value="">Day</option>
                            {this.state.days}
                        </select>
                        <select name="year" onChange={this.onChange} className={classes.year.join(' ')} >
                            <option defaultValue value="">Year</option>
                            {this.state.years}
                        </select>
                    </div>
                    {this.state.errors.year !== '' && <div className={styles.error + ' ' + styles.yearErr}>{this.state.errors.year}</div>}
                    <div>
                        <div>
                            <Input type="radio" id="female" value="female" name="gender" onChange={this.onChange} />
                            <label htmlFor="female">Female</label>
                        </div>
                        <div>
                            <Input type="radio" id="male" value="male" name="gender" onChange={this.onChange} />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div>
                            <Input type="radio" id="unspecified" value="unspecified" name="gender" onChange={this.onChange} />
                            <label htmlFor="unspecified">Unspecified</label>
                        </div>
                    </div>
                    <div className={styles.error}>
                        {this.state.errors.register}
                    </div>
                    <Button className="GreenBtn" onClick={this.onSubmit}>Sign up</Button>
                </form>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        userRegister: (user) => dispatch(userRegister(user)),
    }
}

const mapStateToProps = state => {
    return {
        users: state.users,
        currentUser: state.currentUser,
    };
};

function isEmailValid(email) {
    const regex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

function emailExists(email) {
    let users = JSON.parse(localStorage.getItem('userList'));

    if (typeof users === "undefined" || users === null) {
        return false;
    }

    let index = users.findIndex(u => u.email === email);
    return index !== -1;
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContent);

