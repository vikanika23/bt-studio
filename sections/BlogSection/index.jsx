import { Box, Container, Link, Typography } from '@mui/material'
import { COLOR_DARK_BLUE, HEDING_H2 } from "../../styles/style"
import BlogDynamicZone from './BlogDynamicZone'
import Anotation from './Anotation'
import getPaddings from "../../utils/getPaddings"

const BlogSection = ({ data }) => {
  const article = data?.article
  const title = article?.attributes?.title

  const paddings = article?.attributes?.Paddings
  const paddingBottom = paddings?.padding_bottom
  const paddingTop = paddings?.padding_top

  const sectionStyle = {
    ...getPaddings(paddingTop, paddingBottom, { xs: "10px", md: "15px" }, { xs: "10px", md: "15px" })
  }

  return (
    <>
      <Box sx={sectionStyle}>
        <Container>
          <Typography sx={{ ...HEDING_H2 }}>{title}</Typography>
        </Container>
        <Anotation data={article} />
        <BlogDynamicZone data={article} />
      </Box >
    </>
  )
}

export default BlogSection