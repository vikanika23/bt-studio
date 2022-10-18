import NextLink from 'next/link'
import NextImage from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import { COLOR_DARK, COLOR_WHITE, COLOR_BLUE, COLOR_MIDDLE_BLUE, COLOR_GRAY_LINE, COLOR_BACKGROUND, buttonBlueWhiteOutlinedStyle } from '../../styles/style'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

const cardStyle = {
  display: 'flex',
  borderRadius: '0',
  flexDirection: 'column',
  border: `1px solid ${COLOR_GRAY_LINE}`,
  boxShadow: 'none',
  height: '100%',
}

const cardImageBoxStyle = {
  position: 'relative',
  minHeight: { xs: '168px', sm: '200px', md: '200px' },
  height: { xs: '168px', sm: '200px', md: '200px'  },
  width: { xs: '100%', sm: '100%', md: '100%' },
  backgroundColor: COLOR_BACKGROUND,
  //cursor: "pointer",
  borderBottom: `1px solid ${COLOR_GRAY_LINE}`
}

const cardContentStyle = {
  padding: '15px 15px 15px 15px',
  position: 'relative',
  height: '100%',
  flex: 1
}

const boxFlexTagStyle = {
  display: 'flex',
  position: 'absolute',
  flexWrap: 'wrap',
  left: { xs: '10px', sm: '10px' },
  bottom: { xs: '10px', sm: '10px' }
}

const boxTextTagStyle = {
  padding: '10px 10px',
  background: COLOR_BLUE,
}

const textTagStyle = {
  fontWeight: 600,
  fontSize: { xs: '10px', sm: '12px', md: '12px' },
  lineHeight: { xs: '10px', sm: '12px', md: '12px' },
  letterSpacing: { xs: '0.02em', sm: '0.02em', md: '0.02em' },
  textTransform: 'uppercase',
  color: COLOR_WHITE
}


const cardTitleStyle = {
  fontWeight: '500',
  fontSize: { xs: '20px', sm: '20px', md: '20px' },
  lineHeight: { xs: '24px', sm: '26px', md: '26px' },
  letterSpacing: { xs: '0.015em', sm: '0.015em', md: '0.015em' },
  color: COLOR_DARK,
  marginBottom: { xs: '15px', sm: '21px', md: '21px' },
  transition: 'all .25s ease',
  '&:hover': {
    color: COLOR_MIDDLE_BLUE
  }
}

const cardTextStyle = {
  fontWeight: '400',
  fontSize: { xs: '14px', sm: '16px', md: '16px' },
  lineHeight: { xs: '20px', sm: '24px', md: '24px' },
  letterSpacing: { xs: '0', sm: '0', md: '0' },
  color: COLOR_MIDDLE_BLUE,
  marginBottom: { xs: '15px', sm: '35px', md: '35px' },
}

const buttonStyle = {
  ...buttonBlueWhiteOutlinedStyle,
  border: 'none',
  padding: 0,
  fontSize: '13px'
}

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: '#3E5F8A',
  opacity: 0.46,

}

export default function ArticleCard({ data }) {
  const article_title = data?.attributes?.title
  const preview_image = data?.attributes?.preview_image?.data
  const category = data?.attributes?.category?.data
  
  const slug = data?.attributes?.slug
  const fullslug = `/blog/${slug}`

  return (
    <Box component="section" sx={cardStyle}>
      <Box sx={cardImageBoxStyle}>
        {preview_image && (
          <NextLink href={fullslug} passHref>
            <Link underline="none">
              <NextImage src={process.env.NEXT_PUBLIC_API_URL + preview_image?.attributes?.url} layout="fill" objectFit="cover" objectPosition="center" quality={100} />
            </Link>
          </NextLink>
        )}
        <Box sx={overlayStyle}></Box>

        {/* сделать стрнаицу блог-тег-категория */}
        {category && (
          <Box sx={boxFlexTagStyle}>
            <Box sx={boxTextTagStyle}>
              <NextLink href={`/blog/tag/${category.slug}`} passHref>
                <Link underline="none">
                  <Typography sx={textTagStyle}>{category.attributes?.name}</Typography>
                </Link>
              </NextLink>
            </Box>
          </Box>
        )}
      </Box>

      <Box sx={cardContentStyle}>


        <NextLink href={fullslug} passHref>
          <Link underline="none">
            <Typography component='h3' sx={cardTitleStyle}>{article_title}</Typography>
          </Link>
        </NextLink>

        {/* <Box sx={{ position: 'absolute', paddingBottom: "0", display: 'flex', flexWrap: 'wrap', left: { xs: '16px', sm: '30px' }, bottom: { xs: "20px", sm: "30px" } }}>
          <NextLink href={fullslug} passHref>
            <Button sx={buttonStyle} endIcon={<ArrowRightAltIcon />} disableRipple>
              Читать полностью
            </Button>
          </NextLink>
        </Box> */}
      </Box>
    </Box>
  )
}