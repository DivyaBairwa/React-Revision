//Class Component
import React, { Component } from "react";
import Man from "./Man";

class Person extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      name: "Divya",
      age: "22",
    };
  }

  render() {
    return (
      <div>
        <h3>Name:{this.state.name}</h3>
        <h3>Age: {this.state.age}</h3>
        {/* <h3>Gender: Female</h3>
        <Man></Man> */}
      </div>
    );
  }
}

export default Person;

// import React from "react";

// const Person = () => {
//   return React.createElement(
//     "div",
//     { class: "App-header" },
//     React.createElement(
//       "h1",
//       null,
//       React.createElement("i", null, "Hello Divya Bairwa")
//     )
//   );
// };

// export default Person;
