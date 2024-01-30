import { PlanetsNameType } from '@/types/planets.type'
import { getDateNow } from '@/utils/getDateNow'
import { getPlanetId } from '@/utils/getPlanetId'

export async function getPlanetData(planet: PlanetsNameType): Promise<string> {
  try {
    const url = process.env.APP_URL_PLANET as string
    const date = getDateNow()

    const res = await fetch(
      `${url}?format=json&COMMAND=${getPlanetId(
        planet,
      )}&OBJ_DATA='YES'&MAKE_EPHEM='YES'&EPHEM_TYPE='OBSERVER'&CENTER='geo'&START_TIME='${date}T00:00'&STOP_TIME='${date}T00:01'&STEP_SIZE='1%20d'&QUANTITIES='6,29'&TIME_ZONE='+01:00'`,
      {
        method: 'GET',
      },
    )

    const data = await res.json()
    return data.result.replace(/\\n/g, '\n') as string

  } catch (error) {
    console.error('Error fetching planet data:', error)
    throw error // Rethrow the error for the caller to handle
  }
}
