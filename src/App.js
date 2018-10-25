import React, { Component } from "react";
import { inputCheck, validateSides } from "./util/validation";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      side1: "",
      side2: "",
      side3: "",
      results: ""
    };
  }

  // Update the component state with the user input
  onChange = field => {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  };

  // Calculates the type of triangle on submit and sets the results in the component state to be rendered on the Dom
  handleSubmit = () => {
    const { side1, side2, side3 } = this.state;
    let results = validateSides(parseFloat(side1), parseFloat(side2), parseFloat(side3));

    this.setState({ results: results });
  };

  // Allows submit button to be enabled only if side is greater than 0 and is a numeric value
  submitEnabled = (side1, side2, side3) => {
    return [side1, side2, side3].every(side => !isNaN(side) && side > 0);
  };

  // renders errors based on user input and returns a html element to be rendered on the Dom.
  renderErrors = side => {
    let errors = inputCheck(side);
    let renderError;

    if (errors.length !== 0) {
      renderError = errors.map((error, idx) => <p key={idx}>{error}</p>);
    }

    return renderError;
  };

  render() {
    const { side1, side2, side3, results } = this.state;
    const isEnabled = this.submitEnabled(side1, side2, side3);
    const side1Error = this.renderErrors(side1);
    const side2Error = this.renderErrors(side2);
    const side3Error = this.renderErrors(side3);

    console.log(this.state.results);

    return (
      <div className="App">
        <div className="input-container">
          <div className="input-item">
            <h3>Side 1</h3>
            <input onChange={this.onChange("side1")} type="text" />
            <span className="error-display">{side1Error}</span>
          </div>

          <div className="input-item">
            <h3>Side 2</h3>
            <input onChange={this.onChange("side2")} type="text" />
            <span className="error-display">{side2Error}</span>
          </div>

          <div className="input-item">
            <h3>Side 3</h3>
            <input onChange={this.onChange("side3")} type="text" />
            <span style={side3Error ? {display:"block"} : {display:"hidden"}} className="error-display">{side3Error}</span>
          </div>
        </div>
        <div className="button-container">
        <button disabled={!isEnabled} onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
        <div className="results-container">
            <div class="full header txt-red">
            <div class="header-title">
              <h2>Type of Triangle</h2>
              <h1>{results}</h1>
            </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
