import { Box, Container, Grid, Typography } from '@mui/material'
import { COLOR_MIDDLE_BLUE } from "../../../styles/style"
import NextImage from "next/image"
import getPaddings from "../../../utils/getPaddings"

const boxImageStyle = {
  height: { xs: "280px", sm: "220px", md: "380px" },
  width: "100%",
  position: "relative",
}
const textImgStyle = {
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

const BlogImage1 = ({ data }) => {
  const images = data?.images
  const image = images?.image?.data
  const image_url = process.env.NEXT_PUBLIC_API_URL + image?.attributes?.url
  const caption = images?.caption

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
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Container>
          <Grid container spacing={{ xs: 4, sm: 4, md: 4 }}>
            <Grid item xs={12} sm={3} md={2}></Grid>
            <Grid item xs={12} sm={9} md={8}>
              <Grid container spacing={{ xs: 3, sm: 4, md: 4 }}>
                <Grid item xs={12} sm={12} md={12} >
                  <Box sx={boxImageStyle} >
                    <NextImage
                      src={image_url}
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                    />
                  </Box>
                  {caption !== "" && (
                    <Typography sx={textImgStyle}>{caption}</Typography>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <Grid container spacing={{ xs: 3, sm: 4, md: 4 }}>
          <Grid item xs={12} sm={6} md={6} >
            <Box sx={boxImageStyle} >
              <NextImage
                src={image_url}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </Box>
            {caption !== "" && (
              <Typography sx={textImgStyle}>{caption}</Typography>
            )}
          </Grid>
        </Grid>
      </Box>
    </Box >
  )
}

export default BlogImage1