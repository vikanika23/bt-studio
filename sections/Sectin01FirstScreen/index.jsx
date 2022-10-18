import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Grid from '@mui/material/Grid'
import NextLink from 'next/link'
import { COLOR_PURPUR, COLOR_WHITE, COLOR_GRAY_LINE, buttonPurpurContainedStyle } from '../../styles/style.js'

const rootStyle = {
  padding: { xs: "15px 0 35px", sm: "15px 0 0", md: "30px 0 0" },
  height: { xs: "auto", sm: "300px", md: "450px" },
  overflow: "hidden",
  position: "relative",
}
const subText = {
  fontWeight: 600,
  color: COLOR_PURPUR,
  fontSize: { xs: "12px", md: "16px" },
  lineHeight: { xs: "18px", md: "24px" },
  marginBottom: "10px",
  textTransform: "uppercase"
}
const titleStyle = {
  fontWeight: 600,
  fontSize: { xs: "24px", md: "36px" },
  lineHeight: { xs: "30px", md: "38px" },
  marginBottom: { xs: "20px", md: "30px" },
  textTransform: "uppercase"
}
const textStyle = {
  fontWeight: 400,
  fontSize: { xs: "14px", md: "20px" },
  lineHeight: { xs: "22px", md: "34px" },
}
const boxPosition = {
  position: "absolute",
  right: { sm: "-100px", md: "30px" },
  top: { sm: "30px", md: "45px" },
  display: { xs: "none", sm: "block" }
}

const boxImg = {
  height: { xs: "250px", sm: "300px", md: "450px" },
  "& img": {
    height: "100%",
  }
}

const Sectin01FirstScreen = ({data}) => {
  
  return (
    <>
      <Box component="section" sx={rootStyle}>
        <Container>
          <Box sx={{ width: { md: "60%" }, paddingTop: { xs: "20px", md: "50px" } }}>
            <Typography sx={subText}>студия с доставкой</Typography>
            <Typography component="h1" sx={titleStyle}>Ремонт  обуви сумок чемоданов</Typography>
            <Typography sx={textStyle}>Бесплатная доставкой до и после ремонта <br />
              Напиште нам и воспользуйтесь нашей <br />
              доставкой уже сегодня</Typography>
            <Box sx={{ marginTop: { xs: "20px", md: "50px" } }}>
              <Button sx={buttonPurpurContainedStyle}>Консультация</Button>
            </Box>
          </Box>
        </Container>

        <Box sx={boxPosition}>
          <Box sx={boxImg}>
            <img
              loading="lazy"
              src={"/../../static/img/bg.png"}
              alt="Ремонт обуви, сумок, чемоданов"
            />
          </Box>
        </Box>
      </Box >
    </>
  )
}

export default Sectin01FirstScreen
