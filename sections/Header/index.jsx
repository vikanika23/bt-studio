import NextLink from "next/link"
import { Box, Container, Link, Typography } from '@mui/material'
import { COLOR_DARK, COLOR_MIDDLE_BLUE, COLOR_WHITE, COLOR_GRAY_LINE } from '../../styles/style.js'
import useSWR from "swr"

const rootStyle = {
  backgroundColor: COLOR_DARK,
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
    color: COLOR_MIDDLE_BLUE,
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
  letterSpacing: "0.05em",
  transition: "all .25s ease",
  "&:hover": {
    textDecoration: "none",
    color: COLOR_WHITE,
  }
}

const Header = ({ data }) => {

  const menu = data?.attributes?.menu
  console.log({ data })
  console.log({ menu })

  return (
    <>
      <Box sx={rootStyle}>
        <Container>
          <Box sx={innerStyle}>


            <NextLink href="/" passHref>
              <Link sx={logoName}>BottiniStudio</Link>
            </NextLink>

            <Box component="nav" sx={{ display: { xs: "none", md: "block" } }}>

              {menu?.map((item, i) => {
                const href = item?.link?.data?.attributes?.href

                return (
                  <>
                    {href && (
                      <NextLink key={i} href={href} passHref >
                        <Link sx={linkStyle}>{item?.label}</Link >
                      </NextLink>
                    )}
                  </>
                )
              })}
            </Box>
          </Box>
        </Container>
      </Box >


    </>
  )
}

export default Header
