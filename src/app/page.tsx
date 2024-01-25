import Chart from '@/components/Chart'
import { getData } from '@/utils/getData'
import { PlanetsType } from '@/types/planets.type'

export const metadata = {
  title: 'Planets App',
}

export default async function Page() {
  const data = await getData() as PlanetsType[]

  return <Chart data={data as PlanetsType[]} />
}
