import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import NotFound from "./components/notFound";
import { Route, Redirect, Switch } from "react-router-dom";
import Champion from "./components/champion";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <Switch>
            <Route path="/summoner" component={Form} />
            <Route path="/champions" component={Champion} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/summoner" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
