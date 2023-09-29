//Class Component
import React, { Component } from "react";
import Man from "./Man";

class Person extends Component {
  //   constructor(props) {
  //     super(props);
  //     // You can initialize state or perform other setup here if needed.
  //   }

  render() {
    return (
      <div>
        <h3>Name: Divya Bairwa</h3>
        <h3>Age: 22</h3>
        <h3>Gender: Female</h3>
        <Man></Man>
      </div>
    );
  }
}

export default Person;
