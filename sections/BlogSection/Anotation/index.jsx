import useSWR from 'swr'
import NextLink from 'next/link'
import NextImage from "next/image"
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import ReactMarkdown from "react-markdown"
import { COLOR_DARK_BLUE, COLOR_MIDDLE_BLUE, COLOR_GRAY_LINE, COLOR_BACKGROUND, COLOR_LIGHT_BLUE, COLOR_DARK, COLOR_RED } from "../../../styles/style"
import getPaddings from "../../../utils/getPaddings"
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates'

const deFlexBoxStyle = {
  position: { xs: "relative", sm: "absolute" },
  display: "flex",
  maxWidth: { xs: "auto", sm: "160px", md: "200px" },
  flexDirection: { xs: "row", sm: "column" },
  alignItems: { xs: "center", sm: "start" }
}

const boxFotoStule = {
  display: "block",
  overflow: "hidden",
  position: "relative",
  height: { xs: "50px", sm: "110px" },
  width: { xs: "50px", sm: "110px" },
  minHeight: { xs: "50px", sm: "110px" },
  minWidth: { xs: "50px", sm: "110px" },
  backgroundColor: COLOR_BACKGROUND,
  borderRadius: "50%"
}

const boxNameStyle = {
  marginTop: { xs: "0", sm: "19px" },
  marginLeft: { xs: "19px", sm: "0" }
}

const nameAuthorStyle = {
  fontWeight: 400,
  fontSize: { xs: "14px", sm: "17px", md: "17px" },
  lineHeight: { xs: "21px", sm: "24px", md: "24px" },
  letterSpacing: { xs: "-0.005em", sm: "-0.005em", md: "-0.005em" },
  color: COLOR_DARK_BLUE,
  paddingBottom: { xs: "5px", sm: "8px" }
}

const positionAuthorStyle = {
  fontWeight: 400,
  fontSize: { xs: "14px", sm: "14px", md: "14px" },
  lineHeight: { xs: "20px", sm: "20px", md: "20px" },
  letterSpacing: { xs: "0.005em", sm: "0.005em", md: "0.005em" },
  color: COLOR_MIDDLE_BLUE,
  paddingRight: { xs: "0", sm: "0", md: "20px" }
}

const components = {
  "p": ({ node, ...props }) => <p {...props} />,
  "strong": ({ node, ...props }) => <strong {...props} />,
  "a": ({ node, href, ...props }) =>
    <NextLink href={href} passHref>
      <a {...props} />
    </NextLink>,
  "blockquote": ({ node, ...props }) =>
    <div className="markdownBlockquote">
      <blockquote {...props} />
    </div>,
  "h1": ({ node, ...props }) => <h1 {...props} />,
  "h2": ({ node, ...props }) => <h2 {...props} />,
  "h3": ({ node, ...props }) => <h3 {...props} />,
  "h4": ({ node, ...props }) => <h4 {...props} />,
  "h5": ({ node, ...props }) => <h5 {...props} />,
  "h6": ({ node, ...props }) => <h6 {...props} />,
  "ul": ({ node, ...props }) => <ul {...props} />,
  "li": ({ node, ...props }) => <li {...props} />,
  "ol": ({ node, ...props }) => <ol {...props} />,
  "pre": ({ node, ...props }) => <pre {...props} />,
  "code": ({ node, ...props }) => <code {...props} />,
  "em": ({ node, ...props }) => <em {...props} />,
  "del": ({ node, ...props }) => <del {...props} />,
  "input": ({ node, ...props }) => <input {...props} />,
  "table": ({ node, ...props }) => <table {...props} />,
}

const markdownStyle = {
  "& p": {
    fontWeight: 500,
    fontSize: { xs: "18px", sm: "18px", md: "18px" },
    lineHeight: { xs: "23px", sm: "25px", md: "25px" },
    letterSpacing: { xs: "0.03em", sm: "0.05em", md: "0.05em" },
    color: COLOR_MIDDLE_BLUE,
    margin: "0",
    '&:not(:last-child)': { paddingBottom: { xs: '15px', sm: '15px', md: '15px' } },
  },
  "& strong": {
    fontWeight: 400,
    fontSize: { xs: "18px", sm: "18px", md: "18px" },
    lineHeight: { xs: "23px", sm: "25px", md: "25px" },
    letterSpacing: { xs: "0.03em", sm: "0.05em", md: "0.05em" },
    color: COLOR_DARK,
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
  "& blockquote": {
    margin: "0",
  },
  "& blockquote p": {
    fontWeight: 400,
    fontSize: { xs: "17px", sm: "18px", md: "18px" },
    lineHeight: { xs: "24px", sm: "26px", md: "26px" },
    letterSpacing: { xs: "0.005em", sm: "0.005em", md: "0.005em" },
    color: COLOR_DARK,
    "&:nth-child(1)": {
      marginTop: { xs: "0", sm: "0" },
    },
    '&:not(:last-child)': {
      paddingBottom: { xs: '12px', sm: '12px', md: '12px' }
    }
  },
  "& h1": {
    fontWeight: 600,
    fontSize: { xs: "30px", sm: "38px", md: "38px" },
    lineHeight: { xs: "34px", sm: "40px", md: "40px" },
    letterSpacing: { xs: "-0.015em", sm: "-0.035em", md: "-0.035em" },
    color: COLOR_DARK,
    marginTop: { xs: "32px 0 ", sm: "32px" },
    marginBottom: { xs: "15px 0 ", sm: "15px" },
    "&:nth-child(1)": {
      marginTop: { xs: "5px", sm: "17px" },
    },
  },
  "& h2": {
    fontWeight: 500,
    fontSize: { xs: "24px", sm: "29px", md: "29px" },
    lineHeight: { xs: "29px", sm: "32px", md: "32px" },
    letterSpacing: { xs: "-0.015em", sm: "-0.035em", md: "-0.035em" },
    color: COLOR_DARK,
    marginTop: { xs: "25px 0 ", sm: "26px" },
    marginBottom: { xs: "15px 0 ", sm: "15px" },
    "&:nth-child(1)": {
      marginTop: { xs: "5px", sm: "11px" },
    },
  },
  "& h3": {
    fontWeight: 500,
    fontSize: { xs: "19px", sm: "20px", md: "20px" },
    lineHeight: { xs: "25px", sm: "25px", md: "25px" },
    letterSpacing: { xs: "-0.01em", sm: "-0.015em", md: "-0.015em" },
    color: COLOR_DARK,
    marginTop: { xs: "25px 0 ", sm: "20px" },
    marginBottom: { xs: "15px 0 ", sm: "13px" },
    "&:nth-child(1)": {
      marginTop: { xs: "5px", sm: "5px" },
    },
  },
  "& ul": {
    margin: "0",
    padding: "0 0 16px 20px",
    '&:last-child': {
      paddingBottom: { xs: '0', sm: '0', md: '0' }
    }
  },
  "& li": {
    fontWeight: 400,
    fontSize: { xs: '15px', sm: '16px', md: '16px' },
    lineHeight: { xs: '22px', sm: '32px', md: '32px' },
    letterSpacing: { xs: '0', sm: '0', md: '0' },
    color: COLOR_MIDDLE_BLUE,
    margin: 0,
  },
  "& hr": {
    marginTop: "0",
    color: COLOR_MIDDLE_BLUE,
    '&:not(:last-child)': { marginBottom: { xs: '15px', sm: '15px', md: '15px' } },
  },

  // дополнительные стили
  "& h4": {
    fontWeight: 500,
    fontSize: { xs: "16px", sm: "18px", md: "18px" },
    lineHeight: { xs: "20px", sm: "20px", md: "20px" },
    letterSpacing: { xs: "-0.01em", sm: "-0.015em", md: "-0.015em" },
    color: COLOR_DARK,
    marginTop: { xs: "25px 0 ", sm: "20px" },
    marginBottom: { xs: "15px 0 ", sm: "13px" },
    "&:nth-child(1)": {
      marginTop: { xs: "5px", sm: "5px" },
    }
  },
  "& h5": {
    fontWeight: 500,
    fontSize: { xs: "16px", sm: "16px", md: "16px" },
    lineHeight: { xs: "18px", sm: "18px", md: "18px" },
    letterSpacing: { xs: "-0.01em", sm: "-0.015em", md: "-0.015em" },
    color: COLOR_DARK,
    marginTop: { xs: "25px 0 ", sm: "20px" },
    marginBottom: { xs: "15px 0 ", sm: "13px" },
    "&:nth-child(1)": {
      marginTop: { xs: "5px", sm: "5px" },
    },
  },
  "& h6": {
    fontWeight: 500,
    fontSize: { xs: "14px", sm: "14px", md: "14px" },
    lineHeight: { xs: "18px", sm: "18px", md: "18px" },
    letterSpacing: { xs: "-0.01em", sm: "-0.015em", md: "-0.015em" },
    color: COLOR_DARK,
    marginTop: { xs: "25px 0 ", sm: "20px" },
    marginBottom: { xs: "15px 0 ", sm: "13px" },
    "&:nth-child(1)": {
      marginTop: { xs: "5px", sm: "5px" },
    },
  },
  "& ol": {
    margin: "0",
    padding: "0 0 16px 20px",
  },
  "& pre": {
    fontWeight: 400,
    fontSize: { xs: "15px", sm: "16px", md: "16px" },
    lineHeight: { xs: "20px", sm: "20px", md: "20px" },
    letterSpacing: { xs: "-0.01em", sm: "-0.015em", md: "-0.015em" },
    color: COLOR_MIDDLE_BLUE,
  },
  "& code": {
    fontWeight: 400,
    fontSize: { xs: "15px", sm: "16px", md: "16px" },
    lineHeight: { xs: "22px", sm: "24px", md: "24px" },
    letterSpacing: { xs: "0.005em", sm: "0", md: "0" },
    color: COLOR_DARK,

  },
  "& em": {
    fontWeight: 400,
    fontSize: { xs: "15px", sm: "16px", md: "16px" },
    lineHeight: { xs: "20px", sm: "20px", md: "20px" },
    letterSpacing: { xs: "-0.01em", sm: "-0.015em", md: "-0.015em" },
    color: COLOR_DARK,
  },
  "& del": {
    fontWeight: 400,
    fontSize: { xs: "15px", sm: "16px", md: "16px" },
    lineHeight: { xs: "20px", sm: "20px", md: "20px" },
    letterSpacing: { xs: "-0.01em", sm: "-0.015em", md: "-0.015em" },
    color: COLOR_DARK,
  },
  "& input": {
    fontWeight: 400,
    fontSize: { xs: "15px", sm: "16px", md: "16px" },
    lineHeight: { xs: "20px", sm: "20px", md: "20px" },
    letterSpacing: { xs: "-0.01em", sm: "-0.015em", md: "-0.015em" },
    color: COLOR_MIDDLE_BLUE,
  },
  "& table": {
    fontWeight: 400,
    fontSize: { xs: "15px", sm: "16px", md: "16px" },
    lineHeight: { xs: "20px", sm: "20px", md: "20px" },
    letterSpacing: { xs: "-0.01em", sm: "-0.015em", md: "-0.015em" },
    color: COLOR_MIDDLE_BLUE,
  },
  "& .markdownBlockquote": {
    padding: "30px 20px",
    background: COLOR_GRAY_LINE,
    borderRadius: "15px"
  }

}
const deFlexBoxFactStyle = {
  position: { xs: "relative", md: "absolute" },
  display: "flex",
  maxWidth: { xs: "auto", sm: "auto", md: "250px" },
  flexDirection: { xs: "row", sm: "column" },
  alignItems: { xs: "center", sm: "start" },
  margin: { xs: "20px 0", md: 0 }
}
const boxFactStyle = {
  padding: "30px 20px",
  borderRadius: "15px"
}
const titleFactStyle = {
  fontWeight: 600,
  fontSize: { xs: "20px", sm: "24px", md: "20px" },
  lineHeight: { xs: "26px", sm: "30px", md: "26px" },
  letterSpacing: { xs: "0.005em", sm: "0.005em", md: "0.005em" },
  paddingBottom: { xs: "5px", sm: "8px" },
  borderBottom: `0.5px solid ${COLOR_MIDDLE_BLUE}`,
  marginBottom:"10px",
}
const textFactStyle = {
  fontWeight: 400,
  fontSize: { xs: "14px", sm: "18px", md: "14px" },
  lineHeight: { xs: "24px", sm: "30px", md: "24px" },
  letterSpacing: { xs: "0.05em", sm: "0.05em", md: "0.05em" },
}

const Anotation = ({ data }) => {
  const author = data?.attributes?.author?.data
  const author_name = author?.attributes?.name
  const author_position = author?.attributes?.author_status
  const author_foto = author?.attributes?.picture?.data
  const url = author_foto?.attributes?.url

  const content = data?.attributes?.content
  const advice = data?.attributes?.Advice
  const advice_title = advice?.title
  const advice_text = advice?.text
  const layout = advice?.layout


  const sectionStyle = {
    marginTop: { xs: '20px', sm: '20px', md: '60px' },
  }

  return (
    <Box component="section" sx={sectionStyle}>
      <Container>
        <Grid container spacing={{ xs: 4, sm: 4, md: 4 }}>
          <Grid item xs={12} sm={3} md={2}>
            {author && (
              <Box sx={deFlexBoxStyle}>
                <Box sx={boxFotoStule}>
                  {author_foto && (
                    <NextImage
                      src={process.env.NEXT_PUBLIC_API_URL + url}
                      layout="fill"
                      quality={100}
                      objectFit="cover"
                      objectPosition="center"
                    />
                  )}
                </Box>
                <Box sx={boxNameStyle} >
                  <Typography sx={nameAuthorStyle}>{author_name}</Typography>
                  <Typography sx={positionAuthorStyle}>{author_position}</Typography>
                </Box>
              </Box>
            )}
          </Grid>

          <Grid item xs={12} sm={9} md={8}>

            <Box sx={markdownStyle} >
              <ReactMarkdown components={components}>{content}</ReactMarkdown>
            </Box>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              {advice && (
                <Box sx={deFlexBoxFactStyle}>
                  <Box sx={{ ...boxFactStyle, background: layout === "primary" ? COLOR_GRAY_LINE : COLOR_DARK, color: layout === "primary" ? COLOR_DARK_BLUE : COLOR_LIGHT_BLUE }} >
                    <Typography sx={titleFactStyle}>{advice_title}</Typography>
                    <Typography sx={textFactStyle}>{advice_text}</Typography>
                  </Box>
                </Box>
              )}
            </Box>
          </Grid>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Grid item xs={12} sm={12} md={2}>
              {advice && (
                <Box sx={deFlexBoxFactStyle}>
                  <Box sx={{ ...boxFactStyle, background: layout === "primary" ? COLOR_GRAY_LINE : COLOR_DARK, color: layout === "primary" ? COLOR_DARK_BLUE : COLOR_LIGHT_BLUE }} >
                    <Typography sx={titleFactStyle}>{advice_title}</Typography>
                    <Typography sx={textFactStyle}>{advice_text}</Typography>
                  </Box>
                </Box>
              )}
            </Grid>
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}

export default Anotation