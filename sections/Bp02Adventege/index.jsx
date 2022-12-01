import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Grid from '@mui/material/Grid'
import NextLink from 'next/link'
import { HEDING_H2, COLOR_PURPUR, COLOR_WHITE, COLOR_GRAY_LINE, buttonPurpurContainedStyle } from '../../styles/style.js'
import getPaddings from "../../utils/getPaddings"
import NextImage from 'next/image'


const flexBoxImgStule = {
  marginBottom: '25px',
  display: 'flex',
  justifyContent: { xs: 'center', sm: 'flex-start' }
}

const boxImgStyle = {
  height: '100px',
  width: '100px',
  position: 'relative'
}

const adventegeTitleStyle = {
  fontSize: { xs: '18px', sm: '20px' },
  marginBottom: '10px',
  fontWeight: 700,
  textAlign: { xs: 'center', sm: 'left' }
}

const adventegeDescriptionStyle = {
  fontSize: '16px',
  lineHeight: { xs: '24px', sm: '28px' },
  textAlign: { xs: 'center', sm: 'left' }
}

export default function Bp02Adventege({ data }) {
  const title = data?.title
  const adventege = data?.adventege

  const paddings = data?.Paddings
  const paddingBottom = paddings?.padding_bottom
  const paddingTop = paddings?.padding_top

  const sectionStyle = {
    ...getPaddings(paddingTop, paddingBottom, { xs: "10px", md: "15px" }, { xs: "10px", md: "15px" })
  }

  return (
    <>
      <Box component="section" sx={sectionStyle}>
        <Container>

          <Typography sx={{ ...HEDING_H2 }}>{title}</Typography>

          <Grid container spacing={{ xs: 2, sm: 4, md: 7 }}>

            {adventege.map(advent => (
              <Grid key={advent.id} item xs={12} sm={6} md={4}>
                <Box sx={flexBoxImgStule}>

                  <Box sx={boxImgStyle}>
                    {advent?.image?.data && (
                      <NextImage src={process.env.NEXT_PUBLIC_API_URL + advent?.image?.data?.attributes?.url} layout="fill" objectFit="contain" objectPosition="center" />
                    )}
                  </Box>
                </Box>
                <Typography component="h3" sx={adventegeTitleStyle}>{advent.title_adventege}</Typography>
                <Typography sx={adventegeDescriptionStyle}>{advent.text_adventege}</Typography>
              </Grid>
            ))}
          </Grid>
        </Container>

      </Box >
    </>
  )
}
