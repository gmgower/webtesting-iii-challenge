// Test away!
import React from 'react'
import { render, fireEvent, getByTestId, getByText } from '@testing-library/react'
import Controls from './Controls'
import '@testing-library/jest-dom/extend-expect'

test('Display render correctly', () => {
    render(<Controls />)
})

test('Buttons rendering properly', () => {
    const {getByText} = render(<Controls />)
    getByText(/close gate/i)
    getByText(/lock gate/i)
})

test('Button text for gate closed & gate locked', () => {
    const {getByText} = render(<Controls closed={true}  locked={true} />)
    getByText(/unlock gate/i)
    getByText(/open gate/i)
})

test('Button text for gate open & gate open', () => {
    const {getByText} = render(<Controls open={true} unlocked={true} />)
    getByText(/lock gate/i)
    getByText(/close gate/i)
})

test('Closed toggle button disabled if gate locked', () => {
    const {queryByText} = render(<Controls closed={true} locked={true}/>)
    const closedButton = queryByText(/open gate/i)
    expect(closedButton).toHaveAttribute('disabled') 
  })

test('The locked toggle button is disabled if the gate is open', () => {
    const {queryByText} = render(<Controls open={true} unlocked={true}/>)
    const lockButton = queryByText(/lock gate/i)
    expect(lockButton).toHaveAttribute('disabled')
})

  test("Gate cannot be closed or opened if it is locked", () => {
    const mock = jest.fn()
    const { getByTestId } = render(<Controls locked={true} toggleClosed={mock}/>)

    const openButton = getByTestId('toggle-locked')
    fireEvent.click(openButton)
    expect(mock).not.toBeCalled()
}) 

test("Gate can be closed or opened if it is not locked", () => {
    const mock = jest.fn()
    const { getByTestId } = render(<Controls locked={false} toggleClosed={mock}/>)

    const openButton = getByTestId('toggle-closed')
    fireEvent.click(openButton)
    expect(mock).toBeCalled()
}) 