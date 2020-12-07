import React, { Suspense } from 'react'
import './App.css'
import './i18n'
import Navbar from './components/nav/navbar'
import Home from './pages/home/home'

import { Route, Switch } from 'react-router-dom';



const App = () => {
  return (
    <Suspense fallback={null}>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Suspense>
  )
}

export default App