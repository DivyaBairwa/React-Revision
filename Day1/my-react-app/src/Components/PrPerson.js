//Class Component
import React, { Component } from "react";
import Man from "./Man";

class PrPerson extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        <h1> Dear {this.props.name}, I hope you have a great day ahead.</h1>
      </div>
    );
  }
}

export default PrPerson;
