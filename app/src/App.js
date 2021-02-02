import './App.css';
import Index from './Pages/Index';
import { Route, Switch, BrowserRouter} from 'react-router-dom';
import React, { Component } from 'react';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path = "/" component = {Index}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
