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



  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>side1</label>
            <input onChange={this.onChange("side1")} type="text" />
          <label>side2</label>
            <input onChange={this.onChange("side2")} type="text" />
          <label>side3</label>
            <input onChange={this.onChange("side3")} type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
