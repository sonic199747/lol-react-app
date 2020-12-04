import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Form />
      </React.Fragment>
    );
  }
}

export default App;
