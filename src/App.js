import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      side1: null,
      side2: null,
      side3: null
    }
  }

  onChange = (field) => {
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  submitEnabled = (side1, side2, side3) => {
    return [side1,side2,side3].every((side) => !isNaN(side) && side > 0)
  }

  render() {

    const {side1, side2, side3} = this.state
    const isEnabled = this.submitEnabled(side1,side2,side3)

    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>side1</label>
            <input maxLength={1} onChange={this.onChange("side1")} type="text" />
          <label>side2</label>
            <input maxLength={1} onChange={this.onChange("side2")} type="text" />
          <label>side3</label>
            <input maxLength={1} onChange={this.onChange("side3")} type="text" />
          <button disabled={!isEnabled} type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
