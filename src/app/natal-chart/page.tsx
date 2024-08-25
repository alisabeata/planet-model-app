import NatalChart from '@/components/NatalChart'
import { getPlanetData } from '@/utils/getPlanetData'
import getPlanetId from '@/utils/actions/getPlanetId'
import { PlanetsNameType, PlanetPosition } from '@/types/planets.type'

export const metadata = {
  title: 'Natal Chart',
}

export default async function Page() {
  const planets: PlanetsNameType[] = [
    'Sun',
    'Moon',
    'Mercury',
    'Venus',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune',
    'Pluto',
  ]

  // Fetch the data for all planets
  const planetData: PlanetPosition[] = await Promise.all(
    planets.map(async (planetName) => {
      const data = await getPlanetData(planetName)
      return {
        name: planetName,
        eclipticLongitude: data.eclipticLongitude, // Adjust based on actual data structure
        eclipticLatitude: data.eclipticLatitude || 0, // Use 0 if latitude is not provided
      }
    }),
  )

  return <NatalChart planetData={planetData} />
}
