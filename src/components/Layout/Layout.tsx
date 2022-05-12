import Link from 'next/link';
import React from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="container">
      <header>
        <Link href="/">
          <a>
            <h1>Blog Home</h1>
          </a>
        </Link>
      </header>
      <div className="page-content">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
