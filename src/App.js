import React from "react";
import './App.css';
import UserLists from "./components/UserLists";
import UserInfo from "./components/UserInfo";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={UserLists}/>
        <Route exact path="/:id" component={UserInfo}/>
      </Switch>
    </Router>
  );
}

export default App;
