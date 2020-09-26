import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Appbar from './components/Appbar';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Appbar} />
        </Switch>
    )
}

export default Routes;
