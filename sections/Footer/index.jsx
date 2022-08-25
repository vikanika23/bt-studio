import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { COLOR_WHITE, buttonBlueOutlinedStyle, COLOR_PURPUR } from "../../styles/style"
import { useContext } from "react"
import { PageContext } from "../../utils/contexts"


const rootStyle = {
  backgroundColor: "#1D2A3C",
  padding: { sm: "33px 0 39px", md: "58px 0 48px" },
  display: { xs: "none", sm: "block" },
}
const phoneLinkStyle = {
  fontWeight: 300,
  fontSize: "15px",
  lineHeight: "23px",
  letterSpacing: "0.025em",
  color: COLOR_WHITE,
  paddingTop: "4px",
  paddingBottom: "4px",
  transition: "all .25s ease",
  "&:hover": {
    color: COLOR_PURPUR,
  },
}

const mailLinkStyle = {
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  marginTop: "18px",
}

const Footer = () => {

  const { setCallbackPopupProps } = useContext(PageContext)

  return (
    <>
      <Box component="footer" sx={rootStyle}>
        <Container>
          <Box sx={{ display: "flex" }}>
            {/* Первая колонка  */}
            <Box sx={{ width: "calc(100% / 3)", paddingRight: "32px" }}>
              <Box sx={{ display: "flex" }}>
                <Box sx={{ paddingRight: "56px" }}>
                  <NextLink href="/" passHref>
                    <Link sx={{ position: 'relative', width: '163px', height: '28px', display: 'block' }}>
                      BottiniStudio
                    </Link>
                  </NextLink>

                  <List disablePadding sx={{ marginTop: "21px" }}>
                    <ListItem component="a" disableGutters href="/" sx={phoneLinkStyle}>
                      +7-905-399-11-12
                    </ListItem>

                    <Link href="/" sx={mailLinkStyle}>
                      {icon && <Box sx={{ width: "16px", display: "inline-flex", marginRight: "7px" }} dangerouslySetInnerHTML={{ __html: icon_texted }} />}
                      <Typography sx={mailLinkTextStyle}>Пункт</Typography>
                    </Link>


                    <Box  sx={{ marginTop: "28px", display: { xs: "none", md: "block" } }}>
                      <Button
                        sx={buttonBlueOutlinedStyle}
                        startIcon={<Box sx={{ display: 'flex' }} dangerouslySetInnerHTML={{ __html: icon_texted }} />}
                        onClick={() => setCallbackPopupProps({ from: "desktop-footer" })}
                      >
                        {label}
                      </Button>
                    </Box>
                  </List>
                </Box>
              </Box>
            </Box>

            {/* Первая колонка  */}
            <Box sx={{ width: "calc(100% / 3)", paddingRight: "32px" }}>
              <Box sx={{ display: "flex" }}>

              </Box>
            </Box>
            {/* Первая колонка  */}
            <Box sx={{ width: "calc(100% / 3)", paddingRight: "32px" }}>
              <Box sx={{ display: "flex" }}>

              </Box>
            </Box>

          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Footer
