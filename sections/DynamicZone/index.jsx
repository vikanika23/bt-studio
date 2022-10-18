import { Box, Container, Typography } from '@mui/material'
import SectionAllArticle from '../SectionAllArticle'
import SectionBpArticle from '../SectionBpArticle'
import SectionBpMarckdown from '../SectionBpMarckdown'
import SectionMainMarckdown from '../SectionMainMarckdown'
import SectionBp01 from '../SectionBp01'

const DynamicZone = ({ data }) => {

  const dynamic_zone = data?.page?.attributes?.dynamic_zone
  
  console.log("ДИНАМЧЕСКАЯ ДЛЯ PAgE", { dynamic_zone })

  return (
    <>
      <Box style={{ margin: "0" }}>
        {/* Динамическая зона */}
        {dynamic_zone?.map((data, i) => {
          if (data.__component === 'sections.all-article') {
            return <SectionAllArticle key={i} data={data} />
          } else if (data.__component === 'sections.bp-article') {
            return <SectionBpArticle key={i} data={data} />
          } else if (data.__component === 'sections.bp-article') {
            return <SectionBpMarckdown key={i} data={data} />
          } else if (data.__component === 'sections.bp-main-marckdown') {
            return <SectionMainMarckdown key={i} data={data} />
          } else if (data.__component === 'sections.bp-01-section') {
            return <SectionBp01 key={i} data={data} />
          }else {
            return null
          }
        })}
      </Box>
    </>
  )
}

export default DynamicZone