import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      side1: "",
      side2: "",
      side3: "",
      results: ""
    }
  }

  // Update the component state with the user input
  onChange = (field) => {
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  // Calculates the type of triangle on submit and sets the results in the component state to be rendered on the Dom
  handleSubmit = (e) => {
    e.preventDefault()
    const {side1, side2, side3 } = this.state
    let results

    if(side1 !== side2 && side2 !== side3 & side3 !== side1){
      results = "Scalene"
    }else if(side1 === side2 && side2 === side3 && side3 === side1){
      results = "Equilateral"
    }else{
      results = "Isoceles"
    }

    this.setState({results: results})
  }

  // Allows submit button to be enabled only if side is greater than 0 and is a numeric value
  submitEnabled = (side1, side2, side3) => {
    return [side1,side2,side3].every((side) => !isNaN(side) && side > 0)
  }

  // renders errors based on user input and returns a html elment to be rendered on the Dom
  renderErrors = (side) => {
    let errors = []
    let renderError

    if(side === ""){
      return
    } else if(isNaN(side)){
      errors.push("Must Enter In a Numeric Value")
    } else if(side <= 0){
      errors.push("Must enter a Value Greater Than 0")
    }

    if(errors.length !== 0){
      renderError = errors.map((error, idx) => (
        <p key={idx}>{error}</p>
      ))
    }

    return renderError
  }

  render() {

    const {side1, side2, side3, results} = this.state
    const isEnabled = this.submitEnabled(side1,side2,side3)
    const side1Error = this.renderErrors(side1)
    const side2Error = this.renderErrors(side2)
    const side3Error = this.renderErrors(side3)

    console.log(this.state.results)
  
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>side1</label>
            <input onChange={this.onChange("side1")} type="text" />
            {side1Error}
          <label>side2</label>
            <input onChange={this.onChange("side2")} type="text" />
            {side2Error}
          <label>side3</label>
            <input onChange={this.onChange("side3")} type="text" />
            {side3Error}
          <button disabled={!isEnabled} type="submit">Submit</button>
        </form>
        <h1>{results}</h1>
      </div>
    );
  }
}

export default App;
