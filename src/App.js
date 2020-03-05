import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Homepage/HomePage';
import ShopPage from './pages/Shop/ShopPage';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;
