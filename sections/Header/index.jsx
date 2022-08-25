
import { COLOR_DARK_BLUE, COLOR_PURPUR, COLOR_WHITE, COLOR_GRAY_LINE } from '../../styles/style.js'
import NextLink from "next/link"
import { Box, Container, Link, Typography } from '@mui/material'

const rootStyle = {
  backgroundColor: COLOR_DARK_BLUE,
  padding: { xs: "15px 0", md: "20px 0" },
}

const linkStyle = {
  fontWeight: 300,
  color: COLOR_WHITE,
  textDecoration: "none",
  fontSize: "15px",
  lineHeight: "19px",
  transition: "all .25s ease",
  "&:not(:last-of-type)": {
    marginRight: "37px",
  },
  "&:hover": {

    textDecoration: "none",
    color: COLOR_PURPUR,
  },
}

const innerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}
const logoName = {
  fontWeight: 600,
  color: COLOR_GRAY_LINE,
  textDecoration: "none",
  fontSize: "25px",
  lineHeight: "25px",
  transition: "all .25s ease",
  "&:hover": {
    textDecoration: "none",
    color: COLOR_WHITE,
  }
}

const Header = () => {
  return (
    <>
      <Box sx={rootStyle}>
        <Container>
          <Box sx={innerStyle}>
            
            <NextLink href="/" passHref>
              <Link sx={logoName}>BottiniStudio</Link>
            </NextLink>

            <Box component="nav">
              <NextLink href="/" passHref>
                <Link sx={linkStyle}>Главная</Link>
              </NextLink>

              <NextLink href="/about" passHref>
                <Link sx={linkStyle}>Доставка и оплата</Link>
              </NextLink>

              <NextLink href="/about" passHref>
                <Link sx={linkStyle}>О нас</Link>
              </NextLink>

              <NextLink href="/users" passHref>
                <Link sx={linkStyle}>Стоимость</Link>
              </NextLink>

              <NextLink href="/api/users" passHref>
                <Link sx={linkStyle}>Контакты</Link>
              </NextLink>
            </Box>
          </Box>
        </Container>
      </Box>


    </>
  )
}

export default Header
