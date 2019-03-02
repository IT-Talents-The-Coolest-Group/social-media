import React, { Component } from 'react';
import styles from './RegisterContent.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

class RegisterContent extends Component {

    render() {
        // const { classes } = this.props;

        return (
            <div className={styles.RegisterContainer}>
                <form>
                    <h2>Create a New Account</h2>
                    <div>
                        <Input type="text" id="first-name" name="first-name" placeholder="First Name" onChange={this.onChange} />
                        <Input type="text" id="last-name" name="last-name" placeholder="Last Name" onChange={this.onChange} />
                    </div>
                    <Input type="text" id="reg-email" name="email" placeholder="Email" onChange={this.onChange} />
                    <Input type="password" id="reg-password" name="password" placeholder="New Password" onChange={this.onChange} />
                    <Input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm Password" onChange={this.onChange} />

                    <div>
                        <label className={styles.birthday}>Birthday</label>
                        <select required>
                            <option selected disabled value="">Month</option>
                        </select>
                        <select required>
                            <option selected disabled value="">Day</option>
                        </select>
                        <select required>
                            <option selected disabled value="">Year</option>
                        </select>
                    </div>

                    <div>
                        <div>
                            <Input type="radio" id="female" name="gender" onChange={this.onChange} />
                            <label for="female">Female</label>
                        </div>
                        <div>
                            <Input type="radio" id="male" name="gender" onChange={this.onChange} />
                            <label for="male">Male</label>
                        </div>
                        <div>
                            <Input type="radio" id="unspecified" name="gender" onChange={this.onChange} />
                            <label for="unspecified">Unspecified</label>
                        </div>
                    </div>
                    <Button className="GreenBtn" onClick={() => console.log('register')}>Sign up</Button>
                </form>
            </div>
        );
    }
}

export default RegisterContent;

