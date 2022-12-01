import { Box, Container, Typography } from '@mui/material'
import BpArticle from '../BpArticle'
import SectionBpMarckdown from '../SectionBpMarckdown'
import SectionMainMarckdown from '../SectionMainMarckdown'
import Bp01 from '../Bp01'
import Bp01BigImage from '../Bp01BigImage'
import Bp02Adventege from '../Bp02Adventege'

const DynamicZone = ({ data }) => {

  const dynamic_zone = data?.page?.attributes?.dynamic_zone

  console.log("ДИНАМЧЕСКАЯ ДЛЯ PAgE", { dynamic_zone })

  return (
    <>
      <Box style={{ margin: "0" }}>
        {/* Динамическая зона */}
        {dynamic_zone?.map((data, i) => {
          if (data.__component === 'sections.bp-article') {
            return <BpArticle key={i} data={data} />
          } else if (data.__component === 'sections.bp-main-marckdown') {
            return <SectionMainMarckdown key={i} data={data} />
          } else if (data.__component === 'sections.bp-01-section') {
            return <Bp01 key={i} data={data} />
          } else if (data.__component === 'sections.bp-01-big-image') {
            return <Bp01BigImage key={i} data={data} />
          } else if (data.__component === 'sections.bp-02-adventege') {
            return <Bp02Adventege key={i} data={data} />
          } else {
            return null
          }
        })}
      </Box>
    </>
  )
}

export default DynamicZone

// else if (data.__component === 'sections.bp-article') {
//   return <SectionBpMarckdown key={i} data={data} />
// } 