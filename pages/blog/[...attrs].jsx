import qs from 'qs'
import { fetcher } from '../../utils/fetchers'
import BlogSection from '../../sections/BlogSection'
import { getGlobalData } from "../../utils/queries"

export default function ArticlePage(props) {
  return (
    <>
      <BlogSection data={props} />
    </>
  )
}

export async function getStaticPaths() {
  const articls = await fetcher(process.env.NEXT_PUBLIC_API_URL + `/api/articles?${qs.stringify({
    populate: [
     
    ]
  })}`)

  const paths = articls?.data?.map(article => {
    const slug = article?.attributes?.slug

    return ({
      params: {
        attrs: [slug]
      }
    })
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export async function getStaticProps({ params }) {
  const attrs = params?.attrs

  let filters = {}
  filters.slug = { $eq: attrs[0] }


  const articls = await fetcher(process.env.NEXT_PUBLIC_API_URL + `/api/articles?${qs.stringify({
    filters,
    populate: [
      "blog_dynamic_zone",
      "blog_dynamic_zone.images",
      "blog_dynamic_zone.images.image",
      "blog_dynamic_zone.Paddings",
      "preview_image",
      "Paddings",
      "Advice",
      "author",
      "author.picture",
      "writer",
      
    ]
  })}`)

  const article = articls?.data?.[0]

  if (!article) {
    return {
      notFound: true
    }
  }

  const name = article?.attributes?.title

  const breadcrumbLinks = [{
    id: 1,
    label: 'Главная',
    href: '/'
  }, {
    id: 2,
    label: 'Blog',
    href: '/blog'
  }, {
    id: 3,
    label: `Тема: ${name}`,
  }]

  const global = await getGlobalData()

  return {
    props: {
      article,
      breadcrumbLinks,
      ...global,
      // fallback: {
      //   article,
      //   breadcrumbLinks,
      // }
    },
    revalidate: 60
  }
}