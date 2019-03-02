import React from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const loginForm = props =>
    <form>
        <Input type="text" id="email" name="email" placeholder="Email" onChange={props.onChange} />
        <Input type="password" id="password" name="password" placeholder="Password" onChange={props.onChange} />
        <Button className="BlueBtn" onClick={() => console.log('login')}>Log in</Button>
    </form>

export default loginForm;