import { Link, Typography } from '@mui/material'
import { NextPage } from 'next'
import NextLink from 'next/link'
import Sectin01FirstScreen from '../../sections/Sectin01FirstScreen'
import { fetcher } from "../../utils/fetchers"
import qs from 'qs'
import { getGlobalData } from "../../utils/queries"

const Page = () => {
  return (
    <>
      <Sectin01FirstScreen />
    </>
  )
}

export default Page

export async function getStaticPaths() {
  const pages = await fetcher(process.env.NEXT_PUBLIC_API_URL + `/api/pages?${qs.stringify({
    populate: [
      "pages",
      "pages.data",
      "pages.data.blog_dynamic_zone"
    ]
  })}`)

  const paths = pages?.data?.map(page => {
    const slug = page?.attributes?.slug

    console.log({ pages })

    console.log({ slug })

    return ({
      params: {
        attrs: [slug]
      }
    })
  })
  console.log({ paths })

  return {
    paths,
    fallback: 'blocking'
  }
}

export async function getStaticProps({ params }) {
  const attrs = params?.attrs
  console.log(params)
  let filters = {}
  filters.slug = { $eq: attrs[0] }


  const pages = await fetcher(process.env.NEXT_PUBLIC_API_URL + `/api/pages?${qs.stringify({
    filters,
    populate: [
      "blog_dynamic_zone"
    ]
  })}`)

  const page = pages?.data?.[0]

  if (!page) {
    return {
      notFound: true
    }
  }

  const name = page?.attributes?.title

  const breadcrumbLinks = [{
    id: 1,
    label: 'Главная',
    href: '/'
  }, {
    id: 2,
    label: "name",
    href: '/blog'
  }]

  console.log(pages)
  console.log(page)
  console.log(breadcrumbLinks)

  const global = await getGlobalData()

  return {
    props: {
      page,
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