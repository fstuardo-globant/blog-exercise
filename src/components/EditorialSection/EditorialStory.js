import { fetchBlogs } from '../../services/contentful.ts';
import { BlogCard } from '../Blogcard/BlogCard';
import { BlogList } from '../BlogList';

export default function EditorialStory({ blog }) {
  return (
    <div className="editorial-section">
      <h2 className="section-title">
        <span>Editorial Section</span>
      </h2>
      <div className="popular-section parent-grid">
        {blog.slice(0, 4).map((blogs, index) => (
          <div key={blogs.slug} className={`post-${index}`}>
            {index === 0 ? (
              <BlogCard blogs={blogs} />
            ) : (
              <BlogList blogs={blogs} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  let items;
  items = await fetchBlogs();
  return { props: { blog: items || null } };
}
