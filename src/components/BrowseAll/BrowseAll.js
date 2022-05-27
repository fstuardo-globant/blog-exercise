import React, { useState } from 'react';
import { BlogCard } from '../Blogcard/BlogCard';

export const BrowseAll = ({ blogs }) => {
  const filterTopics = blogs.map((blog) => blog.fields.topic);
  const removeTopicDuplicates = [...new Set(filterTopics)];
  const [blogsList, setBlogsList] = useState(blogs);

  const handleOnChange = (e) => {
    const filter = e.target.value;
    const filterBlogList = blogs.filter((blog) => blog.fields.topic === filter);
    setBlogsList(filterBlogList);
  };

  return (
    <div>
      <select name="category-list" id="category-list" onChange={handleOnChange}>
        <option value="">Select a category</option>
        {removeTopicDuplicates.map((topic, index) => (
          <option key={index} value={topic}>
            {topic}
          </option>
        ))}
      </select>
      <div className="row">
        {blogsList.map((item, index) => (
          <div className="col-md-4" key={index}>
            <BlogCard blogs={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
