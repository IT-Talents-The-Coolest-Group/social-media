import React, { Component } from 'react';
import styles from './RegisterContent.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

class RegisterContent extends Component {

    state = {
        days: [],
        months: [],
        years: []
    };

    componentDidMount() {
        let days = [];

        for (let day = 1; day <= 31; day++) {
            days.push(<option key={`day-${day}`} value={day}>{day}</option>);
        }

        const allMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let months = [];

        for (let month = 0; month < allMonths.length; month++) {
            months.push(<option key={`month-${month}`} value={month}>{allMonths[month]}</option>);
        }

        let years = [];
        let currentYear = new Date().getFullYear();
        const MAX_AGE = 150;

        for (let year = currentYear; year >= currentYear - MAX_AGE; year--) {
            years.push(<option key={`year${year}`} value={year}>{year}</option>);
        }

        this.setState({...this.state, days, months, years});
    }

    render() {
        // const { classes } = this.props;
        console.log(this.state);

        return (
            <div className={styles.RegisterContainer}>
                <form>
                    <h2>Create a New Account</h2>
                    <div>
                        <Input type="text" id="first-name" name="first-name" placeholder="First Name" onChange={this.onChange} />
                        <Input type="text" id="last-name" name="last-name" placeholder="Last Name" onChange={this.onChange} />
                    </div>
                    <Input required type="email" id="reg-email" name="email" placeholder="Email" onChange={this.onChange} />
                    <Input required type="password" id="reg-password" name="password" placeholder="New Password" onChange={this.onChange} />
                    <Input required type="password" id="confirm-password" name="confirm-password" placeholder="Confirm Password" onChange={this.onChange} />

                    <div>
                        <label className={styles.birthday}>Birthday</label>
                        <select required>
                            <option defaultValue value="">Month</option>
                            {this.state.months}
                        </select>
                        <select required>
                            <option defaultValue value="">Day</option>
                            {this.state.days}
                        </select>
                        <select required>
                            <option defaultValue value="">Year</option>
                            {this.state.years}
                        </select>
                    </div>

                    <div>
                        <div>
                            <Input type="radio" id="female" name="gender" onChange={this.onChange} />
                            <label htmlFor="female">Female</label>
                        </div>
                        <div>
                            <Input type="radio" id="male" name="gender" onChange={this.onChange} />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div>
                            <Input type="radio" id="unspecified" name="gender" onChange={this.onChange} />
                            <label htmlFor="unspecified">Unspecified</label>
                        </div>
                    </div>
                    <Button className="GreenBtn" onClick={() => console.log('register')}>Sign up</Button>
                </form>
            </div>
        );
    }
}

export default RegisterContent;

