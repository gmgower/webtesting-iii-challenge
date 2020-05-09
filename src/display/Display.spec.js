// Test away!
import React from 'react';
// import renderer from 'react-test-renderer';
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Display from './Display'

test('displays if gate is open/closed and if it is locked/unlocked', () => {
  render(<Display />)
})

test('The app defaults to unlocked and open', () => {
  const {getByText} = render (<Display />)
  getByText(/unlocked/i);
  getByText(/open/i);
})

test('Open and unlocked', () => {
  const {getByText} = render(<Display locked={false} closed={false} />)
  getByText(/unlocked/i);
  getByText(/open/i);
})

test('Closed & locked', () => {
  const {getByText} = render(<Display locked={true} closed={true} />)
  getByText(/locked/i);
  getByText(/closed/i)
})

// import App from './App';

// describe('<App />', () => {
//   it('should match snapshot', () => {
//     const tree = renderer.create(<App />).toJSON();

//     expect(tree).toMatchSnapshot();
//   });
// });