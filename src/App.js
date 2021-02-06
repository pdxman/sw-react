import './App.css';
import './index.css';
import People from './pages/people.js'
import Planets from './pages/planets.js'
import Films from './pages/films.js'
import Starships from './pages/starships.js'
import Vehicles from './pages/vehicles.js'
import Species from './pages/species.js'
import HomePage from './pages/home.js'

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
  } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <h1>Star Wars stuff</h1>
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
