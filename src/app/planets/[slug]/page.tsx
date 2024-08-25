import About from '@/components/About'
import { toSentenceCase } from '@/utils/toSentenceCase'
import { getPlanetData } from '@/utils/getPlanetData'
import { PlanetsType, PlanetsNameType } from '@/types/planets.type'
import { getData } from '@/utils/getData'

type Params = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Params) {
  return { title: `About ${toSentenceCase(params.slug)}` }
}

export async function generateStaticParams() {
  const data = (await getData()) as PlanetsType[]

  return data.map((planet: PlanetsType) => ({
    slug: planet.name.toLocaleLowerCase(),
  }))
}

export default async function Page({ params }: Params) {
  const planet = toSentenceCase(params.slug) as PlanetsNameType
  const data = await getPlanetData(planet)

  return (
    <section>
      <h1>{toSentenceCase(params.slug)}</h1>
      <About data={data} />
    </section>
  )
}
