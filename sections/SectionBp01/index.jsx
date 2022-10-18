import { Box, Container, Link, Typography } from '@mui/material'
import { COLOR_MIDDLE_BLUE, HEDING_H2 } from "../../styles/style"
import getPaddings from "../../utils/getPaddings"

const textStyle = {
  fontWeight: 400,
  fontSize: { xs: "16px", sm: "18px", md: "18px" },
  lineHeight: { xs: "28px", sm: "28px", md: "28px" },
  letterSpacing: { xs: "0.05em", sm: "0.05em", md: "0.05em" },
  color: COLOR_MIDDLE_BLUE,
  paddingRight: { xs: "0", sm: "0", md: "300px" },
}

const SectionBp01 = ({ data }) => {
  const title = data?.title
  const subtext = data?.subtext

  const paddings = data?.Paddings
  const paddingBottom = paddings?.padding_bottom
  const paddingTop = paddings?.padding_top

  const sectionStyle = {
    ...getPaddings(paddingTop, paddingBottom, { xs: "10px", md: "15px" }, { xs: "10px", md: "15px" })
  }

  return (
    <>
      <Box sx={sectionStyle}>
        <Container>
          <Typography sx={{ ...HEDING_H2 }}>{title}</Typography>
          <Typography sx={textStyle}>{subtext}</Typography>
        </Container>
      </Box>
    </>
  )
}

export default SectionBp01