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
  it("errors when wrong input is given", () => {
    const error1 = inputCheck(0)
    const error2 = inputCheck("a")

    expect(error1).toEqual("Must Enter In a Numeric Value")
    expect(error2).toEqual("Must enter a Value Greater Than 0")
  })
})