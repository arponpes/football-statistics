import React, { Component } from "react";
import { render } from "react-dom";
import DateComparator from "./DateComparator";

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
    <div className='columns is-mobile'>
        <div className='column'>
          <DateComparator />
        </div>
    </div>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);