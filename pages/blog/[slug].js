import { fetchBlogs } from "../../src/services/contentful.ts";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export async function getStaticPaths() {
  let items;
  items = await fetchBlogs();

  const paths = items.map((item) => {
    return {
      params: { slug: item.slugs },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slugs = params.slug;
  let items = await fetchBlogs(slugs);
  return { props: { blog: items[0] } };
}

export default function BlogDetails({ blog }) {
  const { featureImage, title } = blog;
  const { content } = blog.textDescription;
  return (
    <div>
      <div className="banner">
        <Image
          src={"https:" + featureImage.fields.file.url}
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
