// About.test.tsx

import React from 'react'
import { render } from '@testing-library/react'
import About from './About'

describe('About Component', () => {
  it('renders properly with provided data', () => {
    const testData = 'This is some test data.'
    const { getByText, container } = render(<About data={testData} />)

    const preElement = container.querySelector('pre')
    expect(preElement).toBeInTheDocument()

    const contentElement = getByText(testData)
    expect(contentElement).toBeInTheDocument()
  })

  it('applies correct CSS class to the container', () => {
    const testData = 'This is some test data.'
    const { container } = render(<About data={testData} />)

    const preElement = container.querySelector('pre')
    expect(preElement).toHaveClass('container')
  })
})
