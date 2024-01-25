import { toSentenceCase } from '@/utils/toSentenceCase'

type Params = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Params) {
  return { title: `About ${toSentenceCase(params.slug)}` }
}

export default function Page({ params }: Params) {
  return (
    <section>
      <h1>{toSentenceCase(params.slug)}</h1>
    </section>
  )
}
