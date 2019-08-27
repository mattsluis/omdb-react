import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { validateUser,logOutUser } from 'middleware/user_api';

import Style from './style'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                isLoggedIn: false,
            },
        };
    }

    componentDidMount() {

    }

    handleLogOut() {
        logOutUser()
            // .then(this.props.history.replace('/'))
            // .fail()
    }

    renderLinks() {
        const { user } = this.state;
        validateUser()
            .then((response) => {
                console.log(`response: ${JSON.stringify(response)}`);
                // need to set a variable or constant so links render according to token status
                this.setState({
                    user: {
                        isloggedIn: response.signedIn,
                    },
                });


            })
            .fail(() => {
                console.log("no valid token");
            })

        return (
            <div>
                {user.isLoggedIn ?
                    <div>
                        <Link to="/sign_up">Sign Up</Link>
                        <Link to="/log_in">Log In</Link>
                    </div>
                    :
                    <div>
                        <span onClick={this.handleLogOut}>Log Out</span>
                        <Link to="/profile">Profile</Link>
                    </div>
                }
            </div>

        )

    }

    render() {
        let { user } = this.state;
        console.log(user)
        console.log(`header.jsx, render: ${JSON.stringify(user)}`)
        return (
            <header className={Style.header}>
                {this.renderLinks()}
                {/* {user.isLoggedIn ?
                    <div>
                        <Link to="/sign_up">Sign Up</Link>
                        <Link to="/log_in">Log In</Link>
                    </div>
                    :
                    <div>
                        <span onClick={this.handleLogOut}>Log Out</span>
                        <Link to="/profile">Profile</Link>
                    </div>
                } */}
            </header>


        )
    }
}
