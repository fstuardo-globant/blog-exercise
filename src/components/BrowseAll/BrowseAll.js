import React, { useState } from 'react';
import { BlogCard } from '../Blogcard/BlogCard';

export const BrowseAll = ({ blogs }) => {
  const filterTopics = blogs.map((blog) => blog.topic);
  const removeTopicDuplicates = [...new Set(filterTopics)];
  const [originalBlogsList] = useState(blogs);
  const [blogsList, setBlogsList] = useState(blogs);

  const [postNum, setPostNum] = useState(6);

  function handleClick() {
    setPostNum((prevPostNum) => prevPostNum + 3);
  }

  const handleOnChange = (e) => {
    const filter = e.target.value;
    if (filter !== '') {
      const filterBlogList = blogs.filter((blog) => blog.topic === filter);
      setBlogsList(filterBlogList);
    } else {
      setBlogsList(originalBlogsList);
    }
  };

  return (
    <div>
      <div className="selector-box">
        <select className="category-selector" onChange={handleOnChange}>
          <option value="">Select a category</option>
          {removeTopicDuplicates.map((topic, index) => (
            <option key={index} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>

      <div className="row row-cols-3">
        {blogsList.slice(0, postNum).map((item, index) => (
          <div className="mb-4" key={index}>
            <BlogCard blogs={item} />
          </div>
        ))}
      </div>
      <div className="button-box">
        <button className="button-loadMore" onClick={handleClick}>
          Load more
        </button>
      </div>
    </div>
  );
};
