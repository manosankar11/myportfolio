import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/Navbar/Navbar'
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import Logo from './components/Logo'


const App = () => {
  return (
    <>
    <Home />
    </>
    // <Router>
    //   <NavBar />
    //   <Logo />
    //   <Switch>
    //     <Route path="/" exact component={Home} />
    //     <Route path="/about" exact component={About} />
    //     <Route path="/project" exact component={Projects} />
    //     <Route path="/resume" exact component={Resume} />
    //     <Route path="/contact" exact component={Contact} />
    //   </Switch>
    // </Router>
  )
}

export default App
