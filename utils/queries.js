// Страницы
//export const PAGE = `${process.env.NEXT_PUBLIC_API_URL}/page`


// Коллекции  - добавить категории услуг, услуги, цены

import qs from "qs"
import { fetcher } from "./fetchers"

export const getGlobalData = async () => {
  const headerQuery = qs.stringify({
    populate: [
      "menu",
      "menu.link",
      
      "menu_top_partitions",
      "menu_top_partitions.link_to",
      "menu_top_pages",
      "menu_top_pages.icon",
      "menu_top_pages.link_to",
      "contact_links_phones",
      "contact_links_phones.link_to",
      "contact_links",
      "contact_links.icon",
      "contact_links.link_to",
    ],
  })

  const footerQuery = qs.stringify({
    populate: [
      "menu",
      "menu.link",

      "footer_logo",
      "footer_menu",
      "footer_menu.links",
      "footer_menu.links.link_to",
      "contact_links_phones",
      "contact_links_phones.link_to",
      "contact_links",
      "contact_links.link_to",
      "contact_links.icon",
      "social_links",
      "social_links.link_to",
      "social_links.icon",
      "contact_buttons",
      "contact_buttons.link_to",
      "contact_buttons.icon",
      "policy_links",
      "policy_links.link_to",
    ],
  })

  const headerData = await fetcher(process.env.NEXT_PUBLIC_API_URL + `/api/header?${headerQuery}`)
  const footerData = await fetcher(process.env.NEXT_PUBLIC_API_URL + `/api/footer?${footerQuery}`)

  return {
    header: headerData,
    footer: footerData,
  }
}

