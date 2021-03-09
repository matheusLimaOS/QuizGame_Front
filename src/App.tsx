import React from 'react';
import './CSS/App.css';
import Home from "./Pages/Home";
import {Switch, BrowserRouter, Route} from "react-router-dom";
import Question from "./Pages/Question";
import Reply from "./Pages/Reply";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/question" component={Question}/>
              <Route exact path="/reply" component={Reply}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
