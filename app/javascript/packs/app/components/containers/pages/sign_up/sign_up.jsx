import React, { Component } from 'react';

import Button from 'components/core/button/button';
import Input from 'components/core/input/input';

import { createUser } from 'middleware/user_api';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: '',
                password_confirmation: '',
            },
        };
    }

    handleSubmit = () => {
        // const { user } = this.state;

        createUser(this.state.user).then(console.log("created user"))
    }

    handleChange(val) {
        this.setState({
            user: Object.assign({}, this.state.user, val)
        });
        console.log(this.state);
    }

    render() {
        let inputProps = {
            email: {
                label: 'Email',
                type: 'email',
                placeholder: 'email@email.com',
                inputChange: (event) => {this.handleChange({email: event.target.value})},
            },
            password: {
                label: 'Password',
                type: 'password',
                placeholder: 'password',
                inputChange: (event) => {this.handleChange({password: event.target.value})},
            },
            confirmPassword: {
                label: 'Confirm Password',
                type: 'password',
                placeholder: 'confirm password',
                inputChange: (event) => {this.handleChange({password_confirmation: event.target.value})},
            },
            button: {
                buttonText: 'Sign Up',
                classNames: '',
                onClick: this.handleSubmit,
            },
        };

        return (
            <div>
                <Input {...inputProps.email}/>
                <Input {...inputProps.password}/>
                <Input {...inputProps.confirmPassword}/>
                <Button {...inputProps.button}/>
            </div>
        )
    }
}
