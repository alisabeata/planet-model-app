import { PlanetsType } from '@/types/planets.type'

export async function getData(): Promise<PlanetsType[]> {
  const url = process.env.APP_URL as string

  try {
    const res = await fetch(url, {
      method: 'GET',
    })

    const data = await res.json()
    return data as PlanetsType[]
    
  } catch (error) {
    // Handle errors
    console.error('Error fetching data:', error)
    throw error
  }
}
