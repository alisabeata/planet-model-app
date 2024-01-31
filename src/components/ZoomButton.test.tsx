// ZoomButton.test.tsx

import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ZoomButton from './ZoomButton'

describe('ZoomButton Component', () => {
  it('renders properly', () => {
    const { getByText } = render(<ZoomButton ratio={100} setRatio={() => {}} />)

    const addButton = getByText('+')
    const subtractButton = getByText('-')

    expect(addButton).toBeInTheDocument()
    expect(subtractButton).toBeInTheDocument()
  })

  it('increases the ratio when the "+" button is clicked', () => {
    const setRatio = jest.fn()
    const { getByText } = render(<ZoomButton ratio={100} setRatio={setRatio} />)

    const addButton = getByText('+')
    fireEvent.click(addButton)

    expect(setRatio).toHaveBeenCalledWith(150)
  })

  it('decreases the ratio when the "-" button is clicked', () => {
    const setRatio = jest.fn()
    const { getByText } = render(<ZoomButton ratio={100} setRatio={setRatio} />)

    const subtractButton = getByText('-')
    fireEvent.click(subtractButton)

    expect(setRatio).toHaveBeenCalledWith(50)
  })

  it('does not increase the ratio beyond 600 when the "+" button is clicked', () => {
    const setRatio = jest.fn()
    const { getByText } = render(<ZoomButton ratio={600} setRatio={setRatio} />)

    const addButton = getByText('+')
    fireEvent.click(addButton)

    expect(setRatio).toHaveBeenCalledWith(600)
  })

  it('does not decrease the ratio below 10 when the "-" button is clicked', () => {
    const setRatio = jest.fn()
    const { getByText } = render(<ZoomButton ratio={10} setRatio={setRatio} />)

    const subtractButton = getByText('-')
    fireEvent.click(subtractButton)

    expect(setRatio).toHaveBeenCalledWith(10)
  })
})
