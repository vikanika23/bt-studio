import NextLink from "next/link"
import { Box, Container, Link, Typography } from '@mui/material'
import { COLOR_DARK, COLOR_MIDDLE_BLUE, COLOR_WHITE, COLOR_GRAY_LINE } from '../../styles/style.js'
import useSWR from "swr"
import { useMeasure } from 'react-use'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Slide from '@mui/material/Slide'
import useScrollTrigger from '@mui/material/useScrollTrigger'

const appBarStyle = {
  borderBottom: `1px solid #D3D3D3`,
  backgroundColor: "rgba(0, 0, 0, 0.82)",
}


const rootStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.82)",
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

function HideOnScroll({ children, window }) {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export default function Header({ data }) {
  const [ref, { height }] = useMeasure()

  const menu = data?.attributes?.menu
  console.log({ data })
  console.log({ menu })

  return (
    <>
      <HideOnScroll>
        <AppBar position="static" color="transparent" elevation={0} sx={appBarStyle} id="header">

          {/* <Box sx={rootStyle}> */}
          <Toolbar disableGutters>
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
          </Toolbar>
          {/* </Box > */}

        </AppBar>
      </HideOnScroll>
      {/* <Box sx={{ height }} /> */}
    </>
  )
}


