import { Box, Container, Link, Typography } from '@mui/material'
import useSWR from 'swr'
import BlogMarckdown from '../BlogMarckdown'

const BlogDynamicZone = ({ data }) => {
  const article = data?.article
  const title = article?.attributes?.title

  const blog_dynamic_zone = article?.attributes?.blog_dynamic_zone


  console.log({ blog_dynamic_zone })
  console.log({ data })
  return (
    <>
      <Box>
        <Container>
      
          <Typography>{title}</Typography>

        </Container>
        <Box>
          {/* Динамическая зона */}
          {blog_dynamic_zone?.map((data, i) => {
            if (data.__component === 'sections.blog-markdown') {
              return <BlogMarckdown key={i} data={data} />
            } else {
              return null
            }
          })}
        </Box>

      </Box >
    </>
  )
}

export default BlogDynamicZone