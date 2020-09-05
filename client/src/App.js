import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Rockets from './components/Rockets/Rockets';
import './App.css';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import LaunchDetails from './components/LaunchDetails/LaunchDetails';
import Launches from './pages/Launches/Launches';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/rockets' component={Rockets} />
        <Route path='/mission/:flight' component={LaunchDetails} />
        <Route path='/launches' component={Launches} />
        <Route exact path='/' component={Home} />
        <Route render={() => <h1>Not Found</h1>} />
      </Switch>
    </div>
  );
}

export default App;
