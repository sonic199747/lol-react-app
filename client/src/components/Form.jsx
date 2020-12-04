import React, { Component } from "react";
import Input from "./Input";
import axios from "axios";

class Form extends Component {
  //type onchange defaultvalue classname id name
  state = {
    type: "",
    value: "Input Summoner Name Here",
    id: "",
  };

  // async componentDidMount() {

  // }

  handleChange = (e) => {
    var value = e.target.value;
    this.setState({ value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted!", this.state.value);
    const name = this.state.value;
    const result = await axios.post("http://localhost:4000/users", {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      data: {
        name,
      },
    });
    console.log(result.data);
    const { id } = result.data;
    this.setState({ id });
  };

  render() {
    const { value, id } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            value={value}
            id={id}
            name="SummonerName"
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-primary">
            Confirm
          </button>
        </form>
        <ul>{id}</ul>
      </div>
    );
  }
}

export default Form;
