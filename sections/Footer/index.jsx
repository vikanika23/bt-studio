import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Link from "@mui/material/Link"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { COLOR_DARK_BLUE, COLOR_WHITE, buttonPurpurOutlinedStyle, COLOR_PURPUR, COLOR_LIGHTER_GREY, COLOR_GRAY_LINE } from "../../styles/style"
import NextLink from "next/link"
import { useContext } from "react"
import { PageContext } from "../../utils/contexts"
import PhoneIcon from '@mui/icons-material/Phone'


const rootStyle = {
  backgroundColor: COLOR_DARK_BLUE,
  padding: { sm: "33px 0 39px", md: "58px 0 48px" },
}

const logoName = {
  fontWeight: 600,
  color: COLOR_GRAY_LINE,
  textDecoration: "none",
  fontSize: "25px",
  lineHeight: "25px",
  letterSpacing: "0.05em",
  transition: "all .25s ease",
  "&:hover": {
    textDecoration: "none",
    color: COLOR_WHITE,
  }
}

const columnTextStyle = {
  fontWeight: 300,
  fontSize: "13px",
  lineHeight: "15px",
  letterSpacing: "0.05em",
  color: COLOR_WHITE,
  paddingTop: "25px",
}
const boxFlexIcon = {
  display: "flex",
  alignItems: "center",
  marginBottom: "24px"
}
const boxIcon = {
  marginRight: "7px",
  width: "20px",
  height: "20px",
  "& svg": {
    width: "100%",
    height: "100%",
    color: COLOR_PURPUR
  }
}
const phoneLinkStyle = {
  fontWeight: 600,
  color: COLOR_GRAY_LINE,
  textDecoration: "none",
  fontSize: "20px",
  lineHeight: "20px",
  letterSpacing: "0.05em",
  transition: "all .25s ease",
  "&:hover": {
    textDecoration: "none",
    color: COLOR_WHITE,
  }
}
const subText = {
  fontWeight: 400,
  color: COLOR_WHITE,
  fontSize: "12px",
  lineHeight: "20px",
  letterSpacing: "0.1em",
}

const Footer = () => {
  return (
    <>
      <Box component="footer" sx={rootStyle}>
        <Container>
          <Box sx={{ display: "flex" }}>
            {/* Первая колонка  */}
            <Box sx={{ width: "calc(100% / 3)", paddingRight: "32px" }}>
              <Box sx={{ display: "flex" }}>
                <Box >
                  <NextLink href="/" passHref>
                    <Link sx={logoName}>BottiniStudio</Link>
                  </NextLink>
                  <Typography sx={columnTextStyle}>
                    © 2019-2022. Все права защищены
                  </Typography>
                  <Typography sx={columnTextStyle}>
                    ИП Мальцев Сергей Викторович,<br />ОГРНИП 320344300015840, ИНН 343534717940
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* 2 колонка  */}
            <Box sx={{ width: "calc(100% / 3)", paddingRight: "32px" }}>
              <Box sx={{ display: "flex" }}>

              </Box>
            </Box>

            {/* 3 колонка  */}
            <Box sx={{ width: "calc(100% / 3)" }}>
              <Box sx={{ display: "flex", flexDirection: "column", }}>
                <Box sx={boxFlexIcon}>
                  <Box sx={boxIcon}> <PhoneIcon /></Box>
                  <NextLink href="/" passHref>
                    <Link sx={phoneLinkStyle}>+7(905)399-11-12</Link>
                  </NextLink>
                </Box>

                <Typography sx={subText}>
                  Режим работы с 09.00 до 21.00 <br />
                  Онлайн консультация с 09.00 до 23.00
                </Typography>

                <Box sx={{ marginTop: "28px" }}>
                  <Button sx={buttonPurpurOutlinedStyle}>Консультация</Button>
                </Box>

              </Box>
            </Box>

          </Box>
        </Container>
      </Box >
    </>
  )
}

export default Footer
