import React, { Suspense } from 'react'
import './App.css'
import './i18n'
import Navbar from './components/nav/navbar'
import Home from './pages/home/home'
import Collabs from './pages/collabs/collabs'
import Service from './pages/service/service'
import PrivateLabel from './pages/privateLabel/privateLabel'
import AboutUs from './pages/about/about'
import Careers from './pages/career/career'
import Contact from './pages/contact/contact'
import Play from './pages/play/play'
import { Route, Switch, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { ReactComponent as TBSLogo } from './logo.svg'

const App = () => {
  const location = useLocation();


  return (
    <Suspense fallback={null}>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/service' component={Service} />
        <Route exact path='/collabs' component={Collabs} />
        <Route exact path='/privatelabel' component={PrivateLabel} />
        <Route exact path='/about' component={AboutUs} />
        <Route exact path='/career' component={Careers} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/play' component={Play} />
      </Switch>
    </Suspense>
  )
}

export default App