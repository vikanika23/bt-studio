import { Container, Typography } from '@mui/material'

const title = {
  fontWeight: 500,
  fontSize: "40px",
  lineHeight: "52px",
  letterSpacing: "-0.01em",
  marginBottom: "40px",
}


function Page404() {
  return (
    <div sx={{padding: "60px 0",}}>
      <Container>
        <Typography sx={title}>Страница не найдена!</Typography>
      </Container>
    </div>
  )
}

export default Page404

// const fetcher = url => fetch(url).then(r => r.json())

// export async function getStaticProps() {
//   const headerLinks = await fetcher(process.env.NEXT_PUBLIC_API_URL + '/header-links')
//   const settings = await fetcher(process.env.NEXT_PUBLIC_API_URL + '/settings')
//   const headerProjects = await fetcher(process.env.NEXT_PUBLIC_API_URL + `/projects`)

//   return {
//     props: {
//       headerLinks,
//       settings,
//       headerProjects
//     },
//     revalidate: 60
//   }
// }