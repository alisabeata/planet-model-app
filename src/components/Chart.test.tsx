// Chart.test.tsx

import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Chart from './Chart'
import { PlanetsType } from '@/types/planets.type'

describe('Chart Component', () => {
  const mockData = [
    { id: 1, name: 'Earth', symbol: 'ⴲ' },
    { id: 2, name: 'Mars', symbol: '♂️' },
  ]

  it('renders properly with mock data', () => {
    const { getByText } = render(<Chart data={mockData as PlanetsType[]} />)
    const earthElement = getByText('ⴲ')
    const marsElement = getByText('♂️')

    expect(earthElement).toBeInTheDocument()
    expect(marsElement).toBeInTheDocument()
  })

  it('updates ratio when ZoomButton is clicked', () => {
    const { getByText } = render(
      <Chart data={mockData as PlanetsType[]} />,
    )
    const addButton = getByText('+')
    const subtractButton = getByText('-')

    fireEvent.click(addButton)
    fireEvent.click(subtractButton)
  })
})
