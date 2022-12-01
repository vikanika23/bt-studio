import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Grid from '@mui/material/Grid'
import NextLink from 'next/link'
import { COLOR_DARK_BLUE, COLOR_PURPUR, COLOR_DARK, COLOR_MIDDLE_BLUE, COLOR_BLUE, COLOR_RED, buttonPurpurContainedStyle } from "../../styles/style"
import IconRed from "./IconRed.svg"
import ReactMarkdown from 'react-markdown'
import NextImage from 'next/image'

const rootStyle = {
  height: '100vh',
  overflow: "hidden",
  position: 'relative'
}

const boxImgStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  overflow: 'hidden'
}
const bgStyle = {
  // backgroundColor: "#1a2b4933",
  backgroundColor: "rgba(0, 0, 0, 0.82)",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
}
const contentStyle = {
  position: "relative",
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign:'center',
  height: '100%'
}

const subText = {
  fontWeight: 600,
  color: COLOR_MIDDLE_BLUE,
  fontSize: { xs: "12px", md: "16px" },
  lineHeight: { xs: "18px", md: "24px" },
  marginBottom: "5px",
  textTransform: "uppercase"
}
const titleStyle = {
  fontWeight: 600,
  color: '#fff',
  fontSize: { xs: "24px", md: "32px" },
  lineHeight: { xs: "30px", md: "38px" },
  marginBottom: { xs: "20px", md: "50px" },
  textTransform: "uppercase"
}


const components = {
  "p": ({ node, ...props }) => <p {...props} />,
  "strong": ({ node, ...props }) => <strong {...props} />,
  "a": ({ node, href, ...props }) => (
    <NextLink href={href} passHref>
      <a {...props} />
    </NextLink>
  ),
}

const markdownStyle = {
  "& p": {
    fontWeight: 400,
    fontSize: { xs: "15px", sm: "18px", md: "18px" },
    lineHeight: { xs: "22px", sm: "34px", md: "34px" },
    letterSpacing: { xs: "0.005em", sm: "0.05em", md: "0.05em" },
    // color: COLOR_DARK,
    color: '#fff',
    margin: "0",
    '&:not(:last-child)': { paddingBottom: { xs: '15px', sm: '15px', md: '15px' } },
  },
  "& strong": {
    fontWeight: 600,
    fontSize: { xs: "15px", sm: "20px", md: "20px" },
    lineHeight: { xs: "22px", sm: "34px", md: "34px" },
    letterSpacing: { xs: "0.005em", sm: "0", md: "0" },
    color: '#fff',
    margin: "0",
    '&:not(:last-of-type)': { marginBottom: { xs: '15px', sm: '15px', md: '15px' } },
  },
  "& a": {
    color: COLOR_MIDDLE_BLUE,
    fontWeight: 400,
    '&:hover': {
      color: COLOR_RED
    }
  },

}

// const boxImgStyle = {
//   height: { xs: "250px", sm: "150px", md: "450px" },
//   // width: '100%',
//   position: 'relative',
//   display: { xs: "none", sm: "block" }
// }


export default function Bp01BigImage({ data }) {
  const title = data?.heading
  const subtext = data?.subtext

  const discription = data?.discription
  const bigImage = data?.big_image
  console.log({ data })
  return (
    <>
      <Box component="section" sx={{ ...rootStyle, }}>

        <Box sx={boxImgStyle}>
          {bigImage && <NextImage src={process.env.NEXT_PUBLIC_API_URL + bigImage?.data?.attributes?.url} layout="fill" objectPosition="center" objectFit="cover" quality={100} />}
        </Box>
        <Box sx={bgStyle}></Box>
      
        <Box sx={contentStyle}>
          <Container>
            <Typography sx={subText}>{subtext}</Typography>
            <Typography component="h1" sx={titleStyle}>{title}</Typography>
            <Box sx={markdownStyle} >
              <ReactMarkdown components={components}>{discription}</ReactMarkdown>
            </Box>
            <Box sx={{ marginTop: { xs: "30px", md: "80px" } }}>
              <Button sx={buttonPurpurContainedStyle}>Консультация</Button>
            </Box>
          </Container>
        </Box>
        {/* 
        <Container>
          <Grid container spacing={{ xs: 4 }}>

            <Grid item xs={12} sm={9} md={6}>
              <Typography sx={subText}>{subtext}</Typography>
              <Typography component="h1" sx={titleStyle}>{title}</Typography>
              <Box sx={markdownStyle} >
                <ReactMarkdown components={components}>{discription}</ReactMarkdown>
              </Box>
              <Box sx={{ marginTop: { xs: "30px", md: "80px" } }}>
                <Button sx={buttonPurpurContainedStyle}>Консультация</Button>
              </Box>
            </Grid>

            <Grid item xs={12} sm={3} md={6}>
              <Box sx={boxImgStyle}>
                {bigImage && (
                  <NextImage src={process.env.NEXT_PUBLIC_API_URL + bigImage?.data?.attributes?.url} layout="fill" objectFit="contain" objectPosition="center" />
                )}
              </Box>
            </Grid>
          </Grid>
        </Container> */}
      </Box >


    </>
  )
}
