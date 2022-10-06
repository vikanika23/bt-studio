export const PAGE_SECTIONS = [{
  component: "blocks-articles.b-blog-articles-manual",
  populate: [
    'dynamic_zone.blog_articles',
    'dynamic_zone.blog_articles.preview_image',
    'dynamic_zone.blog_articles.blog_tags',
    'dynamic_zone.blog_categories',
    "dynamic_zone.blog_categories.blog_articles",
    "dynamic_zone.blog_categories.blog_articles.preview_image",
    "dynamic_zone.blog_categories.blog_articles.blog_tags",
    "dynamic_zone.blog_tags",
    "dynamic_zone.blog_tags.blog_articles",
    'dynamic_zone.button_top_right',
    'dynamic_zone.button_top_right.link_to',
    'dynamic_zone.quick_link',
    "dynamic_zone.Paddings"
  ],
}, {
  component: "blocks-articles.b-38-blog-articles-2",
  populate: [
    'dynamic_zone.blog_articles',
    'dynamic_zone.blog_articles.preview_image',
    'dynamic_zone.blog_articles.blog_tags',
    'dynamic_zone.blog_articles.publish_time',
    'dynamic_zone.blog_articles.blog_category',
    "dynamic_zone.Paddings"
  ]
}]