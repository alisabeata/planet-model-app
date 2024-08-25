import { PlanetsNameType } from '@/types/planets.type'
import { getDateNow } from '@/utils/getDateNow'
import { getPlanetId } from '@/utils/getPlanetId'

// Define the types for the parsed data
interface HorizonsData {
  ra?: string
  dec?: string
  distance?: number
  apparentMagnitude?: number
  angularDiameter?: number
}

function parseHorizonsData(rawData: any): HorizonsData {
  const parsedData: HorizonsData = {}

  // Extract Right Ascension and Declination
  const raDecRegex = /(\d{2} \d{2} \d{2}\.\d+) \+(\d{2} \d{2} \d+\.\d+)/
  const raDecMatch = rawData.match(raDecRegex)
  if (raDecMatch) {
    parsedData.ra = raDecMatch[1]
    parsedData.dec = raDecMatch[2]
  }

  // Extract distance (delta)
  const deltaRegex = /delta\s+(\d+\.\d+)/
  const deltaMatch = rawData.match(deltaRegex)
  if (deltaMatch) {
    parsedData.distance = parseFloat(deltaMatch[1])
  }

  // Extract apparent magnitude
  const apMagRegex = /APmag\s+(\d+\.\d+)/
  const apMagMatch = rawData.match(apMagRegex)
  if (apMagMatch) {
    parsedData.apparentMagnitude = parseFloat(apMagMatch[1])
  }

  // Extract angular diameter
  const angDiamRegex = /Ang-diam\s+(\d+\.\d+)/
  const angDiamMatch = rawData.match(angDiamRegex)
  if (angDiamMatch) {
    parsedData.angularDiameter = parseFloat(angDiamMatch[1])
  }

  return parsedData
}

export async function getPlanetData(planet: PlanetsNameType): Promise<any> {
  try {
    const url = 'https://ssd.jpl.nasa.gov/horizons_batch.cgi'
    const date = getDateNow()

    const queryString =
      `&OBJ_DATA=YES` +
      `&MAKE_EPHEM=YES` +
      `&EPHEM_TYPE=OBSERVER` +
      `&CENTER=500@399` +
      `&START_TIME=${date}T00:00` +
      `&STOP_TIME=${date}T00:01` +
      `&STEP_SIZE=1m` +
      `&TIME_ZONE=+01:00`

    const res = await fetch(
      `${url}?batch=1&COMMAND=${getPlanetId(planet)}${queryString}`,
      {
        method: 'GET',
      },
    )

    const rawData = await res.text() // Get raw response as text

    return parseHorizonsData(rawData)
  } catch (error) {
    console.error('Error fetching planet data:', error)
    throw error // Rethrow the error for the caller to handle
  }
}
