// Test away!
import React from 'react';
// import renderer from 'react-test-renderer';
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Display from './Display'

test('displays if gate is open/closed and if it is locked/unlocked', () => {
  render(<Display />)
})

// import App from './App';

// describe('<App />', () => {
//   it('should match snapshot', () => {
//     const tree = renderer.create(<App />).toJSON();

//     expect(tree).toMatchSnapshot();
//   });
// });