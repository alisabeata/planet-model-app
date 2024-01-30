import About from '@/components/About'
import { toSentenceCase } from '@/utils/toSentenceCase'
import { getPlanetData } from '@/utils/getPlanetData'
import { PlanetsNameType } from '@/types/planets.type'
import { getDateNow } from '@/utils/getDateNow'

type Params = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Params) {
  return { title: `About ${toSentenceCase(params.slug)}` }
}

export default async function Page({ params }: Params) {
  const planet = toSentenceCase(params.slug) as PlanetsNameType
  const data = (await getPlanetData(planet)) as string

  return (
    <section>
      <h1>{toSentenceCase(params.slug)}</h1>
      <About data={data as string} />
    </section>
  )
}
