import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const BlogCard = ({ blogs }) => {
  const { title, slugs, thumbnail, blogDates, topic } = blogs.fields;

  return (
    <div className="card">
      <div className="thumbnail">
        <Image
          src={'https:' + thumbnail.fields.file.url}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
          alt=""
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
        <div className="more-info"></div>
        <Link href={'/blog/' + slugs} passHref>
          <a className="card-link" />
        </Link>
      </div>
    </div>
  );
};
