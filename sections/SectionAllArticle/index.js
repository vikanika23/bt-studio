import useSWR from "swr"
import { Box, Container, Grid, Typography } from '@mui/material'
import { COLOR_MIDDLE_BLUE } from "../../styles/style"
//import NextImage from "next/image"
import getPaddings from "../../utils/getPaddings"
import ArticleCard from './ArticleCard'


const boxImageStyle = {
  height: { xs: "280px", sm: "220px", md: "280px" },
  width: "100%",
  position: "relative",
}
const subTextStyle = {
  fontWeight: 400,
  fontSize: { xs: "12px", sm: "14px", md: "14px" },
  lineHeight: { xs: "16px", sm: "20px", md: "20px" },
  letterSpacing: { xs: "0.005em", sm: "0.005em", md: "0.005em" },
  color: COLOR_MIDDLE_BLUE,
  paddingTop: { xs: "16px", sm: "17px" },
  paddingLeft: { xs: "20px", sm: "0", md: "0" },
  paddingRight: { xs: "20px", sm: "0", md: "0" },
  textAlign: { xs: "center", sm: "start", md: "start" }
}

const SectionAllArticle = ({ data }) => {
  const subtext = data?.subtext
  const articles = data?.articles?.data

  const paddings = data?.Paddings
  const paddingBottom = paddings?.padding_bottom
  const paddingTop = paddings?.padding_top

  const sectionStyle = {
    paddingRight: { xs: '20px', sm: '0', md: '0' },
    paddingLeft: { xs: '20px', sm: '0', md: '0 ' },
    ...getPaddings(paddingTop, paddingBottom, { xs: "10px", md: "15px" }, { xs: "10px", md: "15px" })
  }

  return (
    <Box component="section" sx={sectionStyle} >

      <Container>
        <Typography sx={subTextStyle}>{subtext}</Typography>
        <Grid container spacing={4}>
          {articles.map(article => (
            <Grid key={article.id} item xs={12} sm={6} md={6}>
              <ArticleCard data={article}/>
            </Grid>
          ))}

        </Grid>
      </Container>
    </Box>


  )
}

export default SectionAllArticle