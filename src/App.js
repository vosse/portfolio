import React from 'react';
import  { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Landing } from './Components/Landing'
import { About } from './Components/About'
import { Contact } from './Components/Contact'
import { Slava } from './Components/Slava'
import BackButton from './Components/BackButton'

export const App = () => {



    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <BackButton />
            <Switch>
                <Route exact path='/' component={ Landing } />
                <Route exact path='/about' component={ About } />
                <Route exact path='/contact' component={ Contact } />
                <Route exact path='/srecna_slava' component= { Slava } />
                <Route render={() => <Landing /> } />
            </Switch>
        </BrowserRouter>
    )
}