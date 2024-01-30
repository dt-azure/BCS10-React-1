import React, { Component } from "react";
import Banner from "./Banner";
import Item from "./Item";

export default class Body extends Component {
  render() {
    return (
      <div className="container mt-5">
        <Banner />
        <div className="row mt-3">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    );
  }
}
