import React, { useRef, useEffect } from 'react'
import './App.css';
import './index.css';
import People from './pages/people.js'
import Planets from './pages/planets.js'
import Films from './pages/films.js'
import Starships from './pages/starships.js'
import Vehicles from './pages/vehicles.js'
import Species from './pages/species.js'
import HomePage from './pages/home.js'
import { gsap } from "gsap";

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
  } from "react-router-dom";


function App() {
  useEffect(() => {
    gsap.from(headerRef.current, {
      autoAlpha: 0,
      ease: 'none',
      delay: 1
    })
  })

  const headerRef = useRef(null)

  return (
    <div className="App">
      <h1 ref={headerRef}>Star Wars stuff</h1>
      <Router>
          {<Route exact path="/" component={HomePage} />}
          <Route exact path="/people" component={People} />
          <Route exact path="/planets" component={Planets} />
          <Route exact path="/films" component={Films} />
          <Route exact path="/starships" component={Starships} />
          <Route exact path="/vehicles" component={Vehicles} />
          <Route exact path="/species" component={Species} />
        </Router>
    </div>
  );
}

export default App;
