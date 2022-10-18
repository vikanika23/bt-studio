import { Link, Typography } from '@mui/material'
import { NextPage } from 'next'
import NextLink from 'next/link'
import DynamicZone from '../../sections/DynamicZone'
import { fetcher } from "../../utils/fetchers"
import qs from 'qs'
import { getGlobalData } from "../../utils/queries"

const Page = (props) => {
  return (
    <>
      <DynamicZone data={props} />
    </>
  )
}

export default Page

export async function getStaticPaths() {
  const pages = await fetcher(process.env.NEXT_PUBLIC_API_URL + `/api/pages?${qs.stringify({
    populate: [
      "pages",
      "pages.dynamic_zone"
    ]
  })}`)

  const paths = pages?.data?.map(page => {
    const slug = page?.attributes?.slug

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


  const pages = await fetcher(process.env.NEXT_PUBLIC_API_URL + `/api/pages?${qs.stringify({
    filters,
    populate: [
      "page",
      "dynamic_zone",
      "dynamic_zone.articles",
      "dynamic_zone.articles.preview_image",
      "dynamic_zone.articles.category",
      "dynamic_zone.button",
      "dynamic_zone.button.link",
      "dynamic_zone.Paddings",
      "Paddings",
      "dynamic_zone.page_menu",
      "dynamic_zone.page_menu.link"
      
      
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

  const global = await getGlobalData()

  return {
    props: {
      page,
      breadcrumbLinks,
      ...global,
    },
    revalidate: 60
  }
}