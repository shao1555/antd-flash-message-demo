import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/page1"><Page1 /></Route>
        <Route exact path="/page2"><Page2 /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
