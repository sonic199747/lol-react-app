import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Table extends Component {
  state = {
    list: [],
  };

  // handleImage = async (champion) => {
  //   const url =
  //     "http://ddragon.leagueoflegends.com/cdn/10.24.1/img/champion/" + champion;
  //   const image = await axios.get(url, {
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //   });
  //   console.log(image);
  // };

  render() {
    var { list } = this.state;
    const { champions } = this.props;
    // console.log(champions);
    const name_list = Object.keys(champions).map((name) => {
      return name;
    });
    const entries = Object.entries(champions);
    const image_list = entries.map((champion) => {
      return champion[1].image.full;
    });
    const role_list = entries.map((champion) => {
      return champion[1].tags;
    });
    const length = name_list.length;

    for (var i = 0; i < length; i++) {
      list.push({
        name: name_list[i],
        image: image_list[i],
        role: role_list[i],
      });
    }
    console.log(list);

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Champion</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {list.map((champion) => (
            <tr>
              <td>{champion.image}</td>
              <Link to="/">
                <td>{champion.name}</td>
              </Link>
              <td>{champion.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
