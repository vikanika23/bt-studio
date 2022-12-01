import { Box, Container, Grid, Typography, Button } from '@mui/material'
import { COLOR_MIDDLE_BLUE, buttonBlueWhiteOutlinedStyle, HEDING_H2 } from "../../styles/style"
import getPaddings from "../../utils/getPaddings"
import ArticleCard from './ArticleCard'
import NextLink from 'next/link'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

const textStyle = {
  fontWeight: 400,
  fontSize: { xs: "16px", sm: "18px", md: "18px" },
  lineHeight: { xs: "28px", sm: "28px", md: "28px" },
  letterSpacing: { xs: "0.05em", sm: "0.05em", md: "0.05em" },
  color: COLOR_MIDDLE_BLUE,
  paddingRight: { xs: "0", sm: "0", md: "80px" },
  marginBottom: { xs: "10px", md: "30px" }
}

const buttonStyle = {
  ...buttonBlueWhiteOutlinedStyle,
  marginBottom: { xs: "20px", md: "0" }
}

export default function BpArticle({ data }) {

  const title = data?.title
  const text = data?.text
  const button = data?.button
  const label = button?.label
  const href = button?.link?.data?.attributes?.href

  const articles = data?.articles?.data

  const paddings = data?.Paddings
  const paddingBottom = paddings?.padding_bottom
  const paddingTop = paddings?.padding_top

  const sectionStyle = {
    ...getPaddings(paddingTop, paddingBottom, { xs: "10px", md: "15px" }, { xs: "10px", md: "15px" })
  }

  return (
    <Box component="section" sx={sectionStyle} >

      <Container>
        <Grid container >
          <Grid item xs={12} sm={12} md={9}>
            <Typography sx={{ ...HEDING_H2 }}>{title}</Typography>
            <Typography sx={textStyle}>{text}</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            {button && (
              <Box sx={{ textAlign: { xs: "center", md: "end" } }}>
                <NextLink href={href} passHref>
                  <Button sx={buttonStyle} endIcon={<ArrowRightAltIcon />} disableRipple>
                    {label}
                  </Button>
                </NextLink>
              </Box>
            )}
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          {articles.map(article => (
            <Grid key={article.id} item xs={12} sm={6} md={4}>
              <ArticleCard data={article} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
