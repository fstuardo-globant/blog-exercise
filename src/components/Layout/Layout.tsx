import Link from "next/link";
import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="container">
      <header>
        <h1>
          <Link href="/">
            <a>Blog Home</a>
          </Link>
        </h1>
      </header>
      <div className="page-content">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
