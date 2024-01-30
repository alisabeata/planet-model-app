import { PlanetsNameType } from '@/types/planets.type'

export const getPlanetId = (planetName: PlanetsNameType): number => {
  switch (planetName) {
    case 'Sun':
      return 10
    case 'Moon':
      return 301
    case 'Mercury':
      return 199
    case 'Venus':
      return 299
    case 'Earth':
      return 399
    case 'Mars':
      return 499
    case 'Jupiter':
      return 599
    case 'Saturn':
      return 699
    case 'Neptune':
      return 799
    case 'Uranus':
      return 899
    case 'Pluto':
      return 999
    default:
      return 0
  }
}
