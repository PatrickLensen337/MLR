import React, { Component, Suspense } from 'react'
import './App.css'
import './i18n'
import ThankYou from './components/thanks/thanks'
import Navbar from './components/nav/navbar'
import Logo from './logo.svg'
import Home from './pages/home/home'

import { Route, Switch } from 'react-router-dom';



const App = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <img className="TBSLogo" src={Logo} />
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/thanks' component={ThankYou} />
        </Switch>
      </Suspense>
    </div>
  )
}

export default App