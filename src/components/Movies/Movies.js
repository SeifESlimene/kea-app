import "./styles.scss";
import React, { Component } from "react";

export default class Movies extends Component {
  render() {
    return (
      <div>
        <h1>List Of Movies</h1>
        <ul>
          <li>Movie 1</li>
          <li>Movie 2</li>
          <li>Movie 3</li>
          <li>Movie 4</li>
          <li>Movie 5</li>
        </ul>
      </div>
    );
  }
}