import qs from 'qs'
import { PAGE_SECTIONS } from "../sections/PAGE_SECTIONS"
import { fetcher } from './fetchers'

const getAllPopulateFields = page => {
  let populate = []

  const dynamic_zone = page?.attributes?.dynamic_zone

  dynamic_zone?.forEach(zone => {
    const component = zone.__component

    const item = PAGE_SECTIONS.filter(section => section.component === component)[0]
    if (item) {
      populate = [...populate, ...item.populate]
    }
  })

  return Array.from(new Set(populate))
}

const getPage = async (params) => {
  const index = params?.index

  let pagesQuery = qs.stringify({
    filters: {
      fullslug: {
        $eq: index ? `/${index?.join("/")}` : ``,
      },
    },
    populate: [
      "dynamic_zone",
    ],
  })

  let pagesData = await fetcher(process.env.NEXT_PUBLIC_API_URL + `/api/pages?${pagesQuery}`)

  // Если запись не найдена, перенаправление на страницу 404
  let page = pagesData?.data[0]

  // Получаем все поля
  const populateFields = getAllPopulateFields(page)
  
  pagesQuery = qs.stringify({
    filters: {
      fullslug: {
        $eq: index ? `/${index?.join("/")}` : ``,
      },
    },
    populate: [
      "child_pages",
      "dynamic_zone",
      "parent_page",
      "seo",
      "seo.metaImage",
      ...populateFields
    ]
  })

  pagesData = await fetcher(process.env.NEXT_PUBLIC_API_URL + `/api/pages?${pagesQuery}`)
  page = pagesData?.data?.[0]

  return page
}

export default getPage