import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { validateUser } from 'middleware/user_api';

import Header from 'components/layouts/header/header';

import Router from 'components/containers/router/router';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                isLoggedIn: false,
            },
        };
    }

    // componentDidMount() {
    //     validateUser()
    //         .then((response) => {
    //             console.log(`response: ${JSON.stringify(response)}`);
    //             this.setState({
    //                 user: {
    //                     isloggedIn: response.signedIn,
    //                 },
    //             });
    //         })
    //         .fail(() => {
    //             console.log("no valid token");
    //         })
    // }

    isLoggedIn() {
        validateUser()
            .then((response) => {
                console.log(`response: ${JSON.stringify(response)}`);
                this.setState({
                    user: {
                        isloggedIn: response.signedIn,
                    },
                });
            })
            .fail(() => {
                console.log("no valid token");
            })
    }



    render() {
        return (
            <BrowserRouter>
                <div>
                    {/*<Header />*/}
                    <Router />
                </div>
            </BrowserRouter>
        )
    }
}
