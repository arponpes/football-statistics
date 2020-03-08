import React, { Component } from "react";
import { render } from "react-dom";
import DateComparator from "./DateComparator";
import TeamComarator from "./TeamComparator";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }
  render() {
    return (
    <div>
          <DateComparator />
          <TeamComarator />
    </div>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);