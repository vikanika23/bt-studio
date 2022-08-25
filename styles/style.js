export const FONT1 = "Montserrat"

export const COLOR_MIDDLE_BLUE = "#5C718D"
export const COLOR_DARK_BLUE = "#373832"
export const COLOR_LIGHT_BLUE = "#F4F8FC"
export const COLOR_GRAY_LINE = "#DDE8EF"
export const COLOR_WHITE = "#ffffff"
export const COLOR_PURPUR = "#D01C69"
export const COLOR_RED = "#D90A12"
export const COLOR_GREEN = "#50AD35"
export const COLOR_LIGHTER_GREY = "#91A3BC"
export const COLOR_BACKGROUND = "#F4F8FC"
export const COLOR_FORM_BORDER_LINE = "#CAD1DB"
export const COLOR_HOVER_LINK = "#5C718D"

// Голубая кнопка для футера
export const buttonBlueOutlinedStyle = {
  border: `1px solid ${COLOR_PURPUR}`,
  borderRadius: 0,
  padding: "16.5px 17px",
  fontWeight: 500,
  fontSize: "11px",
  lineHeight: "100%",
  letterSpacing: "0.065em",
  fontFeatureSettings: "'pnum' on, 'lnum' on",
  color: COLOR_WHITE,
  "&:hover": {
    backgroundColor: COLOR_PURPUR,
    transition: "all .25s ease",
  },
}

// Голубая кнопка c залитым фоном и белым текстом
export const buttonBlueContainedStyle = {
  backgroundColor: COLOR_PURPUR,
  border: `2px solid ${COLOR_PURPUR}`,
  color: COLOR_WHITE,
  fontSize: { xs: "14px", md: "15px" },
  // lineHeight: '100%',
  lineHeight: { xs: "18px", md: "19px" },
  letterSpacing: "0.015em",
  fontWeight: { xs: 500, md: 600 },
  borderRadius: 0,
  padding: { xs: "13px 20px", sm: "13px 30px", md: "16.5px 30px" },
  transition: "all .25s ease",
  "&:hover": {
    backgroundColor: COLOR_RED,
    borderColor: COLOR_RED,
  },
  "&.Mui-disabled": {
    color: "rgba(255, 255, 255, 0.26)",
  },
}

// Голубая кнопка с обводкой и белым текстом
export const buttonBlueWhiteOutlinedStyle = {
  border: `2px solid ${COLOR_GRAY_LINE}`,
  color: COLOR_PURPUR,
  fontSize: { xs: "14px", md: "15px" },
  lineHeight: { xs: "18px", md: "19px" },
  letterSpacing: "0.015em",
  fontWeight: { xs: 500, md: 600 },
  borderRadius: 0,
  padding: { xs: "13px 20px", sm: "13px 30px", md: "16.5px 30px" },
  transition: "all .25s ease",
  "&:hover": {
    backgroundColor: "transparent",
    color: COLOR_RED,
  }
}
