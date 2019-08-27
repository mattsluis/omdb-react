import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import {
    Home,
    Details,
    SignUp,
    LogIn,
    Profile,
    ResetPassword,
} from 'components/containers/pages/index';

export default class Router extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return(
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/:movieId' component={Details} />
                <Route exact path='/sign_up' component={SignUp} />
                <Route exact path='/log_in' component={LogIn} />
                <Route exact path='/profile' component={Profile} />
                <Route exact path='/reset_password' component={ResetPassword} />
            </Switch>
        )
    }
}
