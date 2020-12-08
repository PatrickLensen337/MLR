import React, { Suspense } from 'react'
import './App.css'
import './i18n'
import Navbar from './components/nav/navbar'
import Home from './pages/home/home'
import { Route, Switch, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { ReactComponent as TBSLogo } from './logo.svg'

const App = () => {
  const location = useLocation();
  const controls = useAnimation();

  controls.start({
    y: "0",
    backgroundColor: "#fff",
    height: '100vh',
    width: '100vw',
    transition: { duration: 1 }
  })



  return (
    <Suspense fallback={null}>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <motion.div
          location={location}
          key={location.pathname}
          style={{ y: "-100vh", backgroundColor: 'white', zIndex: '9999', position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh' }}
          initial={{ y: '-150vh' }}
          animate={{ y: '150vh' }}
          transition={{ duration: 3, ease: 'easeIn' }}
          className="entry"

        >
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <TBSLogo style={{ width: '50vw', opacity: '0.4' }} />
          </div>

        </motion.div>
      </AnimatePresence>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Suspense>
  )
}





export const pageVariants = {
  initial: {
    opacity: 0,
    y: "-100vh",
  },
  in: {
    opacity: 1,
    y: 0,
    height: '100vh',
    width: '100vw',
    position: 'absolute'
  },
  out: {
    opacity: 0,
    y: "300vh",
    height: '0'
  }
};

export const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 2.5
};

export default App