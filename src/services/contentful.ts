import { createClient, CreateClientParams, Entry } from 'contentful';

export interface IBlog {
  title: string;
  topic: string;
  blogDates: string;
  thumbnail: string;
  slugs?: string;
  featureImage: string;
  textDescription: string;
}

const params = {
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
} as CreateClientParams;

export const fetchBlogs = async (slugs = null) => {
  const client = createClient(params);
  const { items } = await client.getEntries({
    content_type: 'blog',
    'fields.slugs': slugs ? slugs : null,
  });
  const blogs: Array<Object> = items.map((blog: Entry<any>): IBlog => {
    const { fields } = blog;
    return {
      title: fields.title,
      topic: fields.topic,
      blogDates: fields.blogDates,
      thumbnail: fields.thumbnail,
      slugs: fields.slugs,
      featureImage: fields.featureImage,
      textDescription: fields.textDescription,
    };
  });
  return blogs || null;
};
