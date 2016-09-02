import React from 'react'
import { Route } from 'react-router'

import Application from './Application'
import Home from './Home'
import Music from './Music'
import Shows from './Shows'
import Press from './Press'
import Contact from './Contact'

export default (
  <Route component={Application}>
    <Route component={Home} path='/' />
    <Route component={Music} path='/music' />
    <Route component={Shows} path='/shows' />
    <Route component={Press} path='/press' />
    <Route component={Contact} path='/contact' />
  </Route>
)
