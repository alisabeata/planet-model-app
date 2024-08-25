interface ElementsType {
  argOfPeriapsis: number
  period: number
  ascendingNode: number
  eccentricity: number
  periapsisDistance: number
  timeOfPeriapsis: number
  semiMajorAxis: number
  apoapsisDistance: number
  meanAnomalyAtEpoch: number
  epoch: number
  inclination: number
}

interface RotationType {
  argOfPeriapsis: number
  period: number
  ascendingNode: number
  eccentricity: number
  periapsisDistance: number
  timeOfPeriapsis: number
  semiMajorAxis: number
  apoapsisDistance: number
  meanAnomalyAtEpoch: number
  epoch: number
  inclination: number
}

export type PlanetsNameType =
  | 'Sun'
  | 'Moon'
  | 'Mercury'
  | 'Venus'
  | 'Earth'
  | 'Mars'
  | 'Jupiter'
  | 'Saturn'
  | 'Uranus'
  | 'Neptune'
  | 'Pluto'

export interface PlanetsType {
  search: string
  elements: ElementsType
  rotation: RotationType
  name: PlanetsNameType
  symbol: string
  customOrbit: string
  texture: string
  flattening: number
  radius: number
  orbitColor: string
  type: string
  id: number
  fetchElements: true
  center: string
}

export interface PlanetPosition {
  name: string
  eclipticLongitude: number
  eclipticLatitude?: number
}
