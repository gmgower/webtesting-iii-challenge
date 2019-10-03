// Test away
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Dashboard from './Dashboard'
import '@testing-library/jest-dom/extend-expect'

test('Dashboard renders correctly', () => {
    render (<Dashboard />)
  })