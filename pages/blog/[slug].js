import { createClient } from 'contentful';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'blog',
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slugs },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'blog',
    'fields.slugs': params.slug,
  });
  return {
    props: { blog: items[0] },
  };
};

export default function BlogDetails({ blog }) {
  const { featureImage, title } = blog.fields;
  const { content } = blog.fields.textDescription;
  return (
    <div>
      <div className="banner">
        <Image
          src={'https:' + featureImage.fields.file.url}
          width={featureImage.fields.file.details.image.width}
          height={featureImage.fields.file.details.image.height}
          alt=""
        />
        <h2>{title}</h2>
      </div>
      <div className="card-info">{documentToReactComponents({ content })}</div>
    </div>
  );
}
