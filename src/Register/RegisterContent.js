import React, { Component } from 'react';
import styles from './RegisterContent.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

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
        gender: '',
        errors: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            year: ''
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
        const MAX_AGE = 150;

        for (let year = currentYear; year >= currentYear - MAX_AGE; year--) {
            years.push(<option key={`year${year}`} value={year}>{year}</option>);
        }

        this.setState({ ...this.state, days, months, years });
    }

    onChange = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    };

    validate = () => {
        let errors = {};

        if (this.state.firstName.length < 3) {
            errors.firstName = 'Your name must be more than 3 symbols length!';
        }

        console.log(this.state.lastName, this.state.lastName.length);
        if (this.state.lastName.length < 3) {
            errors.lastName = 'Your lastname must be more than 3 symbols length!';
        }

        const emailRegex = new RegExp("^[(a-zA-Z-0-9-\\_\\+\\.)]+@[(a-z-A-z)]+\\.[(a-zA-z)]{2,5}$");

        if (!emailRegex.test(this.state.email)) {
            errors.email = 'Invalid email!';
        }

        const passRegex = new RegExp("^[a-zA-Z0-9]{8,30}$");

        if (passRegex.test(this.state.password)) {
            errors.password = 'Invalid password!';
        }

        if (this.state.password !== this.state.confirmPassword) {
            errors.confirmPassword = 'Different passwords!';
        }

        let currentYear = new Date().getFullYear();

        const MIN_AGE = 13;

        if (this.state.year > currentYear - MIN_AGE) {
            errors.year = 'Invalid year!';
        }

        this.setState({ ...this.state, errors });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.validate();
    }

    render() {
        // const { classes } = this.props;
        return (
            <div className={styles.RegisterContent}>
                <form>
                    <h2>Create a New Account</h2>
                    <div className={styles.namesContainer}>
                        <div className={styles.firstNameContainer}>
                            <Input type="text" id="first-name" name="firstName" placeholder="First Name" onChange={this.onChange} />
                            {this.state.errors.firstName !== '' && this.state.errors.firstName}
                        </div>
                        <div className={styles.lastNameContainer}>
                            <Input type="text" id="last-name" name="lastName" placeholder="Last Name" onChange={this.onChange} />
                            {this.state.errors.lastName !== '' && this.state.errors.lastName}
                        </div>
                    </div>
                    <div>
                        <Input required type="email" id="reg-email" name="email" placeholder="Email" onChange={this.onChange} />
                        {this.state.errors.email !== '' && this.state.errors.email}
                    </div>
                    <div>
                        <Input required type="password" id="reg-password" name="password" placeholder="New Password" onChange={this.onChange} />
                        {this.state.errors.password !== '' && this.state.errors.password}
                    </div>
                    <div>
                        <Input required type="password" id="confirm-password" name="confirmPassword" placeholder="Confirm Password" onChange={this.onChange} />
                        {this.state.errors.confirmPassword !== '' && this.state.errors.confirmPassword}
                    </div>

                    <div>
                        <label className={styles.birthday}>Birthday</label>
                        <select required name="month" onChange={this.onChange}>
                            <option defaultValue value="">Month</option>
                            {this.state.months}
                        </select>
                        <select required name="day" onChange={this.onChange}>
                            <option defaultValue value="">Day</option>
                            {this.state.days}
                        </select>
                        <select required name="year" onChange={this.onChange}>
                            <option defaultValue value="">Year</option>
                            {this.state.years}
                        </select>
                    </div>
                    {this.state.errors.confirmPassword !== '' && <div>{this.state.errors.confirmPassword}</div>}
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
                    <Button className="GreenBtn" onClick={this.onSubmit}>Sign up</Button>
                </form>
            </div>
        );
    }
}

export default RegisterContent;

