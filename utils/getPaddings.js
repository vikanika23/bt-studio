const getPaddings = (paddingTop, paddingBottom, defaultPaddingTop, defaultPaddingBottom) => {
  return {
    ...(!paddingTop ? { paddingTop: defaultPaddingTop } : {}),
    ...(paddingTop === 'auto' ? { paddingTop: defaultPaddingTop } : {}),
    ...(paddingTop === 'px60' ? { paddingTop: { xs: '36px', sm: '40px', md: '60px' } } : {}),
    ...(paddingTop === 'px40' ? { paddingTop: { xs: '34px', md: '40px' } } : {}),
    ...(paddingTop === 'px20' ? { paddingTop: { xs: '14px', md: '20px' } } : {}),
    ...(paddingTop === 'px0' ? { paddingTop: { xs: 0 } } : {}),
    ...(!paddingBottom ? { paddingBottom: defaultPaddingBottom } : {}),
    ...(paddingBottom === 'auto' ? { paddingBottom: defaultPaddingBottom } : {}),
    ...(paddingBottom === 'px60' ? { paddingBottom: { xs: '36px', sm: '40px', md: '60px' } } : {}),
    ...(paddingBottom === 'px40' ? { paddingBottom: { xs: '34px', md: '40px' } } : {}),
    ...(paddingBottom === 'px20' ? { paddingBottom: { xs: '14px', md: '20px' } } : {}),
    ...(paddingBottom === 'px0' ? { paddingBottom: { xs: 0 } } : {}),
  }
}

export default getPaddings