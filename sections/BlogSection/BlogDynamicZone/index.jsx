import { Box } from '@mui/material'
import BlogMarckdown from '../BlogMarckdown'
import BlogImage2 from '../BlogImage2'
import BlogImage1 from '../BlogImage1'
import Advice from '../Advice'

const BlogDynamicZone = ({ data }) => {

  const blog_dynamic_zone = data?.attributes?.blog_dynamic_zone
  // console.log("ДИНАМЧЕСКАЯ ДЛЯ BLOG", { blog_dynamic_zone })
  
  return (
    <>
      <Box style={{ margin: "0" }}>
        {/* Динамическая зона */}
        {blog_dynamic_zone?.map((data, i) => {
          if (data.__component === 'sections.blog-markdown') {
            return <BlogMarckdown key={i} data={data} />
          } else if (data.__component === 'sections.blog-image') {
            return <BlogImage1 key={i} data={data} />
          } else if (data.__component === 'sections.blog-2image') {
            return <BlogImage2 key={i} data={data} />
          } else if (data.__component === 'sections.advice') {
            return <Advice key={i} data={data} />
          } else {
            return null
          }
        })}
      </Box>


    </>
  )
}

export default BlogDynamicZone