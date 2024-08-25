import { PlanetsNameType } from '@/types/planets.type'
import getPlanetId from '@/utils/actions/getPlanetId'
import getDateNow from '@/utils/actions/getDateNow'
import parseHorizonsData from '@/utils/actions/parseHorizonsData'
import convertRaDecToEcliptic from './actions/convertRaDecToEcliptic'

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

    //return rawData

    const celestialCoordinates = parseHorizonsData(rawData)

    return convertRaDecToEcliptic(
      celestialCoordinates.ra,
      celestialCoordinates.dec,
    )
  } catch (error) {
    console.error('Error fetching planet data:', error)
    throw error // Rethrow the error for the caller to handle
  }
}
