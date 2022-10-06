//import getAnotherData from './getAnotherData'
import getPage from './getPage'
//import getQuickLinks from './getQuickLinks'
//import getSimpleBreadcrumbLinks from './getSimpleBreadcrumbLinks'

const getPageData = async (params) => {
  const page = await getPage(params)
  //const anotherData = await getAnotherData(page)
  //const { breadcrumbLinks, breadcrumbShow, breadcrumbBackground } = getSimpleBreadcrumbLinks(page)
 // const quickLinks = getQuickLinks(page)
  
  return {
    page,
    // breadcrumbLinks,
    // breadcrumbBackground,
    // breadcrumbShow,
    // quickLinks,
    // ...anotherData
  }
}

export default getPageData