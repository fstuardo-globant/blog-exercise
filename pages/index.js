import { createClient } from 'contentful';
import { BlogCard } from '../src/components/Blogcard/BlogCard';

export default function BlogHome({ blog }) {
  return (
    <div className="row">
      <h2>Most Popular</h2>
      <div className="popular-section row row-cols-3">
        {blog.slice(0, 6).map((blogs) => (
          <div key={''} className="mb-4">
            <BlogCard key={blogs.sys.id} blogs={blogs} />
          </div>
        ))}
      </div>
      <div className="browse-section">
        <h2>Browse All Section</h2>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({
    content_type: 'blog',
  });

  return {
    props: {
      blog: res.items,
    },
  };
};
