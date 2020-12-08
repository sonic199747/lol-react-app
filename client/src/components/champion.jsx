import React, { Component } from "react";
import Table from "./Table";
import axios from "axios";
class Champion extends Component {
  state = {
    champions: [],
  };

  //   async componentDidMount() {
  //       const result= await axios()
  //   }

  handleClick = async () => {
    const result = await axios.get("http://localhost:4000/list", {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    var championlist = result.data.data;
    this.setState({ champions: championlist });
  };

  render() {
    return (
      <div>
        <Table champions={this.state.champions} />
        <button onClick={this.handleClick}>Click</button>
        {/* {console.log(this.state.champions)} */}
      </div>
    );
  }
}

export default Champion;
