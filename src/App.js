import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/Homepage/HomePage';
import ShopPage from './pages/Shop/ShopPage';
import SignInSignUp from './pages/SignInSignUp/SignInSignUp';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  );
};

export default App;
