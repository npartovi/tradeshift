import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {inputCheck, validateSides} from './util/validation'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('input check', () => {
   it("errors when number is less than zero", () => {
    const error1 = inputCheck(0)
    expect(error1).toEqual(["Must enter a Value Greater Than 0"])
   })

   it("errors when no numeric value is inputted", () => {
    const error2 = inputCheck("a")
    expect(error2).toEqual(["Must Enter In a Numeric Value"])
   })
})

describe('determine type of triangle', () => {

  it('it returns "Impossible" if triangle lengths dont make a triangle', () => {
    let side1 = 40
    let side2 = 1
    let side3 = 1

    const results = validateSides(side1, side2, side3)
    expect(results).toEqual("Impossible")
  })

  it('it returns "Equilateral" triangle', () => {
    let side1 = 3
    let side2 = 3
    let side3 = 3

    const results = validateSides(side1, side2, side3)
    expect(results).toEqual("Equilateral")
  })

  it('it returns "Scalene" triangle', () => {
    let side1 = 1
    let side2 = 2
    let side3 = 3

    const results = validateSides(side1, side2, side3)
    expect(results).toEqual("Scalene")
    
  })

  it('it returns "Isoceles" triangle', () => {
    let side1 = 1
    let side2 = 2
    let side3 = 2

    const results = validateSides(side1, side2, side3)
    expect(results).toEqual("Isoceles")
    
  })
})



