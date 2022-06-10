import { fetchBlogs } from "../src/services/contentful.ts";
import EditorialStory from "../src/components/EditorialSection/EditorialStory";
import { BlogCard } from "../src/components/Blogcard/BlogCard";
import { BrowseAll } from "../src/components/BrowseAll/BrowseAll";

export default function BlogHome({ blog }) {
  return (
    <div className="row">
      <EditorialStory blog={blog} />
      <h2 className="section-title">
        <span>Most Popular Section</span>
      </h2>
      <div className="popular-section row row-cols-3">
        {blog.slice(3, 9).map((blogs) => (
          <div key={""} className="mb-4">
            <BlogCard key={""} blogs={blogs} />
          </div>
        ))}
      </div>
      <div className="browse-section">
        <h2 className="section-title">
          <span>Browse All Section</span>
        </h2>
        <div>
          <BrowseAll blogs={blog} />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  let items;
  items = await fetchBlogs();
  return { props: { blog: items || null } };
}
