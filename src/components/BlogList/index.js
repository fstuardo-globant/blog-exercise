import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const BlogList = ({ blogs }) => {
  const { title, slugs, thumbnail, blogDates, topic } = blogs;

  return (
    <Link href={'/blog/' + slugs} passHref>
      <a href="!#" className="card-link-editorial">
        <div className="card d-flex flex-row align-items-center p-1">
          <div className="thumbnail-editorial">
            <Image
              src={'https:' + thumbnail.fields.file.url}
              width={150}
              height={100}
              alt=""
              layout="responsive"
            />
          </div>
          <div className="content">
            <div className="info">
              <p className="category">{topic}</p>
              <h4 className="title">{title}</h4>
            </div>
            <div className="blog-dates">
              <p>{blogDates} | Author</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};
