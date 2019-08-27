import React, { Component } from 'react';

import Button from 'components/core/button/button';
import Input from 'components/core/input/input';

import { logIn } from 'middleware/user_api';

export default class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: '',
            },
        };
    }

    handleSubmit = () => {
        // const { user } = this.state;

        logIn(this.state.user)
            .then((response) => {
                console.log(`response ${JSON.stringify(response)}`)
                this.setState({
                    user: response.data
                });

            }).then(console.log(this.state))

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
                name: 'email',
                placeholder: 'email@email.com',
                inputChange: (event) => {this.handleChange({email: event.target.value})},
            },
            password: {
                label: 'Password',
                type: 'password',
                placeholder: 'password',
                inputChange: (event) => {this.handleChange({password: event.target.value})},
            },
            button: {
                buttonText: 'Log In',
                classNames: '',
                onClick: this.handleSubmit,
            },
        };

        return (
            <div>
                <Input {...inputProps.email}/>
                <Input {...inputProps.password}/>
                <Button {...inputProps.button}/>
            </div>
        )
    }
}
