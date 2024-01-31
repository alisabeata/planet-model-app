import { getPlanetId } from './getPlanetId'

describe('getPlanetId function', () => {
  it('returns the correct ID for Sun', () => {
    expect(getPlanetId('Sun')).toBe(10)
  })

  it('returns the correct ID for Moon', () => {
    expect(getPlanetId('Moon')).toBe(301)
  })

  it('returns the correct ID for Mercury', () => {
    expect(getPlanetId('Mercury')).toBe(199)
  })

  it('returns the correct ID for Venus', () => {
    expect(getPlanetId('Venus')).toBe(299)
  })

  it('returns the correct ID for Earth', () => {
    expect(getPlanetId('Earth')).toBe(399)
  })

  it('returns the correct ID for Mars', () => {
    expect(getPlanetId('Mars')).toBe(499)
  })

  it('returns the correct ID for Jupiter', () => {
    expect(getPlanetId('Jupiter')).toBe(599)
  })

  it('returns the correct ID for Saturn', () => {
    expect(getPlanetId('Saturn')).toBe(699)
  })

  it('returns the correct ID for Neptune', () => {
    expect(getPlanetId('Neptune')).toBe(799)
  })

  it('returns the correct ID for Uranus', () => {
    expect(getPlanetId('Uranus')).toBe(899)
  })

  it('returns the correct ID for Pluto', () => {
    expect(getPlanetId('Pluto')).toBe(999)
  })
})
