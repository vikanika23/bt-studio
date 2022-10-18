import { Box, Container, Grid, Typography } from '@mui/material'
import { COLOR_DARK, COLOR_GREEN, COLOR_DARK_BLUE, COLOR_LIGHT_BLUE, COLOR_MIDDLE_BLUE, COLOR_GRAY_LINE } from "../../../styles/style"
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates'

const titleStyle = {
  fontWeight: 600,
  fontSize: { xs: "20px", sm: "24px", md: "24px" },
  lineHeight: { xs: "26px", sm: "30px", md: "30px" },
  letterSpacing: { xs: "0.005em", sm: "0.005em", md: "0.005em" },
  paddingBottom: { xs: "5px", sm: "8px" },
  marginBottom: "20px",
  borderBottom: `0.5px solid ${COLOR_MIDDLE_BLUE}`
}
const textStyle = {
  fontWeight: 400,
  fontSize: { xs: "14px", sm: "18px", md: "18px" },
  lineHeight: { xs: "20px", sm: "30px", md: "30px" },
  letterSpacing: { xs: "0.05em", sm: "0.05em", md: "0.05em" },
}

const sectionStyle = {
  paddingTop: { xs: '20px', sm: '20px', md: '20px ' },
  paddingBottom: { xs: '20px', sm: '20px', md: '20px' }
}
const iconStyle = {
  width: "100%",
  height: "70px",
  "& svg": {
    width: "100%",
    height: "100%",
    color: COLOR_DARK
  }
}
const boxContetnStyle = {
  padding: "30px 20px",
  borderRadius: "15px"
}

const boxIconStyle = {
  position: "relative",
}
const boxIcon = {
  position: "absolute",
  display: "flex",
  alignItems: "flex-start",
  top: { xs: "-25px", sm: "0px" },
  left: { xs: "0", sm: "-50px" },
  transform: { xs: "translate(0, -50%)", sm: "translate(0, -50%)" },
  width: { xs: "auto", sm: "100%" },
  height: { xs: "50px", sm: "70px" },
  "& svg": {
    width: "100%",
    height: "100%",
    color: COLOR_DARK
  }
}
const Advice = ({ data }) => {
  const title = data?.title
  const text = data?.text
  const layout = data?.layout

  return (
    <>
      <Box component="section" sx={sectionStyle}>
        <Container>
          <Grid container spacing={{ xs: 4, sm: 4, md: 4 }}>
            <Grid item xs={12} sm={3} md={2}>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Box sx={iconStyle}>
                  <TipsAndUpdatesIcon />
                </Box>
              </Box>

            </Grid>
            <Grid item xs={12} sm={9} md={8}>
              <Box sx={{ display: { xs: "block", sm: "none" } }}>
                <Box sx={boxIconStyle}>
                  <Box sx={boxIcon}><TipsAndUpdatesIcon /></Box>
                </Box>
              </Box>

              <Box sx={{ ...boxContetnStyle, background: layout === "primary" ? COLOR_GRAY_LINE : COLOR_DARK, color: layout === "primary" ? COLOR_DARK_BLUE : COLOR_LIGHT_BLUE }}>
                <Typography sx={titleStyle}>{title}</Typography>
                <Typography sx={textStyle}>{text}</Typography>
              </Box>

            </Grid>
          </Grid>
        </Container>
      </Box >
    </>
  )
}

export default Advice