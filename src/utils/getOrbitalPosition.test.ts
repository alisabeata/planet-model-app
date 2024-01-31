import { getOrbitalPosition } from './getOrbitalPosition'
import { PlanetsType } from '@/types/planets.type'

describe('getOrbitalPosition function', () => {
  it('calculates the orbital position for a planet', () => {
    // Mock input planet with orbital elements for testing
    const planet = {
      elements: {
        period: 365.25, // Example period in days
        meanAnomalyAtEpoch: 0, // Example mean anomaly
        epoch: 0, // Example epoch
        eccentricity: 0, // Example eccentricity
        semiMajorAxis: 1, // Example semi-major axis
      },
    }

    // Calculate expected orbital position based on the provided orbital elements
    const expectedPosition = {
      x: 1, // Example x-coordinate
      y: 0, // Example y-coordinate
      r: 1, // Example distance from the center
      v: 0, // Example true anomaly
    }

    // Call the function to get the actual orbital position
    const actualPosition = getOrbitalPosition(planet as PlanetsType)

    // Compare the actual position with the expected position
    expect(actualPosition).toEqual(expectedPosition)
  })
})
