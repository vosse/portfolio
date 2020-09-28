import React from 'react';
import  { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { Landing } from './Components/Landing'
import { About } from './Components/About'

export const App = () => {



    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path='/' component={ Landing } />
                <Route exact path='/about' component={ About } />
            </Switch>
        </BrowserRouter>
    )
}