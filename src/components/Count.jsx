import React, { Component } from "react";
import Clock from "./Clock";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { deadline: props.date };
  }
  render() {
    return (
      <Clock STRINGS={this.props.STRINGS} deadline={this.state.deadline} />
    );
  }
}
export default App;
