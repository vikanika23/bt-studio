import NextLink from 'next/link'
import ReactMarkdown from 'react-markdown'
import { Box, Container, Grid, Link } from '@mui/material'
import { COLOR_DARK_BLUE, COLOR_MIDDLE_BLUE, COLOR_GRAY_LINE, COLOR_WHITE, COLOR_DARK, COLOR_RED } from "../../styles/style"
import IconRed from "./IconRed.svg"
import getPaddings from "../../utils/getPaddings"

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
    fontWeight: 400,
    fontSize: { xs: "15px", sm: "16px", md: "16px" },
    lineHeight: { xs: "22px", sm: "24px", md: "24px" },
    letterSpacing: { xs: "0.005em", sm: "0", md: "0" },
    color: COLOR_DARK,
    margin: "0",
    '&:not(:last-child)': { paddingBottom: { xs: '15px', sm: '15px', md: '15px' } },
  },
  "& strong": {
    fontWeight: 600,
    fontSize: { xs: "12px", sm: "14px", md: "14px" },
    lineHeight: { xs: "16px", sm: "24px", md: "24px" },
    letterSpacing: { xs: "-0.005em", sm: "-0.005em", md: "-0.005em" },
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
    color: COLOR_DARK_BLUE,
    marginTop: { xs: "32px 0 ", sm: "32px" },
    marginBottom: { xs: "15px 0 ", sm: "15px" },
    "&:nth-child(1)": {
      marginTop: { xs: "5px", sm: "17px" },
    },
  },
  "& h2": {
    fontWeight: 600,
    fontSize: { xs: "32px", sm: "36px", md: "36px" },
    lineHeight: { xs: "32px", sm: "36px", md: "36px" },
    letterSpacing: { xs: "-0.015em", sm: "-0.035em", md: "-0.035em" },
    color: COLOR_DARK_BLUE,
    marginTop: { xs: "25px 0 ", sm: "26px" },
    marginBottom: { xs: "15px 0 ", sm: "15px" },
    "&:nth-child(1)": {
      marginTop: { xs: "5px", sm: "11px" },
    },
  },
  "& h3": {
    fontWeight: 600,
    fontSize: { xs: "19px", sm: "20px", md: "20px" },
    lineHeight: { xs: "25px", sm: "25px", md: "25px" },
    letterSpacing: { xs: "-0.01em", sm: "-0.015em", md: "-0.015em" },
    color: COLOR_DARK_BLUE,
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
    lineHeight: { xs: '22px', sm: '24px', md: '24px' },
    letterSpacing: { xs: '0', sm: '0', md: '0' },
    color: COLOR_DARK,
    margin: 0,
  },
  "& hr": {
    marginTop: "0",
    color: COLOR_DARK,
    '&:not(:last-child)': { marginBottom: { xs: '15px', sm: '15px', md: '15px' } },
  },

  // дополнительные стили
  "& h4": {
    fontWeight: 600,
    fontSize: { xs: "16px", sm: "18px", md: "18px" },
    lineHeight: { xs: "20px", sm: "20px", md: "20px" },
    letterSpacing: { xs: "-0.01em", sm: "-0.015em", md: "-0.015em" },
    color: COLOR_DARK_BLUE,
    marginTop: { xs: "25px 0 ", sm: "20px" },
    marginBottom: { xs: "15px 0 ", sm: "13px" },
    "&:nth-child(1)": {
      marginTop: { xs: "5px", sm: "5px" },
    }
  },
  "& h5": {
    fontWeight: 600,
    fontSize: { xs: "16px", sm: "16px", md: "16px" },
    lineHeight: { xs: "18px", sm: "18px", md: "18px" },
    letterSpacing: { xs: "-0.01em", sm: "-0.015em", md: "-0.015em" },
    color: COLOR_DARK_BLUE,
    marginTop: { xs: "25px 0 ", sm: "20px" },
    marginBottom: { xs: "15px 0 ", sm: "13px" },
    "&:nth-child(1)": {
      marginTop: { xs: "5px", sm: "5px" },
    },
  },
  "& h6": {
    fontWeight: 600,
    fontSize: { xs: "14px", sm: "14px", md: "14px" },
    lineHeight: { xs: "18px", sm: "18px", md: "18px" },
    letterSpacing: { xs: "-0.01em", sm: "-0.015em", md: "-0.015em" },
    color: COLOR_DARK_BLUE,
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
    color: COLOR_DARK,
  },
  "& code": {
    fontWeight: 400,
    fontSize: { xs: "15px", sm: "16px", md: "16px" },
    lineHeight: { xs: "22px", sm: "24px", md: "24px" },
    letterSpacing: { xs: "0.005em", sm: "0", md: "0" },
    color: COLOR_DARK_BLUE,
  },
  "& em": {
    fontWeight: 400,
    fontSize: { xs: "15px", sm: "16px", md: "16px" },
    lineHeight: { xs: "22px", sm: "24px", md: "24px" },
    letterSpacing: { xs: "-0.01em", sm: "-0.015em", md: "-0.015em" },
    color: COLOR_DARK,
  },
  "& del": {
    fontWeight: 400,
    fontSize: { xs: "15px", sm: "16px", md: "16px" },
    lineHeight: { xs: "22px", sm: "24px", md: "24px" },
    letterSpacing: { xs: "-0.01em", sm: "-0.015em", md: "-0.015em" },
    color: COLOR_DARK,
  },
  "& input": {
    fontWeight: 400,
    fontSize: { xs: "15px", sm: "16px", md: "16px" },
    lineHeight: { xs: "22px", sm: "24px", md: "24px" },
    letterSpacing: { xs: "-0.01em", sm: "-0.015em", md: "-0.015em" },
    color: COLOR_DARK,
  },
  "& table": {
    fontWeight: 400,
    fontSize: { xs: "15px", sm: "16px", md: "16px" },
    lineHeight: { xs: "20px", sm: "20px", md: "20px" },
    letterSpacing: { xs: "-0.01em", sm: "-0.015em", md: "-0.015em" },
    color: COLOR_DARK,
  },
  "& .markdownBlockquote": {
    padding: "30px 20px",
    background: COLOR_GRAY_LINE,
    borderRadius: "15px"
  }
}

const navStyle = {
  display: "flex",
  flexDirection: "column",
  marginTop: "30px"
}
const linkStyle = {
  fontWeight: 300,
  color: COLOR_MIDDLE_BLUE,
  textDecoration: "none",
  fontSize: "16px",
  lineHeight: "24px",
  transition: "all .25s ease",
  "&:not(:last-of-type)": {
    marginBottom: "15px",
  },
  "&:hover": {
    textDecoration: "none",
    color: COLOR_RED,
  },
}

const SectionMainMarckdown = ({ data }) => {
  const markdown = data?.description
  const page_menu = data?.page_menu

  const paddings = data?.Paddings
  const paddingBottom = paddings?.padding_bottom
  const paddingTop = paddings?.padding_top

  const sectionStyle = {
    paddingRight: { xs: '20px', sm: '0', md: '0' },
    paddingLeft: { xs: '20px', sm: '0', md: '0 ' },
    ...getPaddings(paddingTop, paddingBottom, { xs: "10px", md: "15px" }, { xs: "10px", md: "15px" })
  }

  return (
    <Box component="section" sx={sectionStyle} >
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Container>
          <Grid container spacing={{ xs: 4, sm: 4, md: 4 }}>

            <Grid item xs={12} sm={3} md={3}>

              <Box component="nav" sx={navStyle}>
                {page_menu.map(pm => {
                  const href = pm?.link?.data?.attributes?.href
                  const label = pm?.label
                  return (
                    <>
                      {href && (
                        <NextLink key={pm.id} href={href} passHref >
                          <Link sx={linkStyle}>{label}</Link >
                        </NextLink>
                      )}
                    </>
                  )
                })}

              </Box>


            </Grid>

            <Grid item xs={12} sm={9} md={9}>
              <Box sx={markdownStyle} >
                <ReactMarkdown components={components}>{markdown}</ReactMarkdown>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <Box sx={markdownStyle} >
          <ReactMarkdown components={components}>{markdown}</ReactMarkdown>
        </Box>
      </Box>
    </Box >
  )
}

export default SectionMainMarckdown