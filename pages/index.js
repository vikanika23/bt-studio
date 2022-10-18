import { Link, Typography } from '@mui/material'
import { NextPage } from 'next'
import NextLink from 'next/link'
import Header from '../sections/Header'
import Footer from '../sections/Footer'
import Sectin01FirstScreen from '../sections/Sectin01FirstScreen'
import { fetcher } from "../utils/fetchers"
import qs from 'qs'
import { getGlobalData } from "../utils/queries"
import DynamicZone from '../sections/DynamicZone'

const HomePage = (props) => {
  return (
    <>
      <DynamicZone data={props} />
      <Sectin01FirstScreen data={props} />
    </>
  )
}

export default HomePage


// export async function getStaticPaths() {
//   const pages = await fetcher(process.env.NEXT_PUBLIC_API_URL + `/api/pages?${qs.stringify({
//     populate: [
//       "pages",
//       "pages.data",
//       "pages.data.blog_dynamic_zone"
//     ]
//   })}`)

//   const paths = pages?.data?.map(page => ({
//     params: {
//       attrs: page.attributes?.fullslug?.substring(1)?.split("/"),
//     },
//   }))

//   console.log({ pages })
//   console.log({ paths })

//   return {
//     paths,
//     fallback: "blocking",
//   }
// }

export async function getStaticProps({ params }) {
  // const data = await getPageData(params)
  // const attrs = params?.attrs
  // console.log(params)
  // let filters = {}
  // filters.slug = { $eq: attrs[0] }


  const pages = await fetcher(process.env.NEXT_PUBLIC_API_URL + `/api/pages?${qs.stringify({
    // filters,
    populate: [
      "dynamic_zone",
      "dynamic_zone.articles",
      "dynamic_zone.articles.preview_image",
      "dynamic_zone.articles.category",
      "dynamic_zone.button",
      "dynamic_zone.button.link",
      "dynamic_zone.Paddings",
      "Paddings"
      
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
