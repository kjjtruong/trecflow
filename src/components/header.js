import { Link, useStaticQuery, graphql } from "gatsby";
import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="sticky top-0 z-40">      
      <div className="flex bg-black flex-wrap items-center justify-between w-screen mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link className="no-underline" to="/">        
          <span className="text-2xl text-white font-bold tracking-wide border-4 p-2">{data.site.siteMetadata.title}</span>
        </Link>

        <button
          className="flex items-center block px-3 py-2 text-black border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto text-center`}
        >
          {[            
            {
              route: `/#mystory`,
              title: `My Story`,
            },
            {
              route: `/#podcasts`,
              title: `Podcasts`,
            },           
            {
              route: `/#speaking`,
              title: `Speaking`,
            },             
          ].map((link) => (
            <Link
              className="uppercase block mt-4 no-underline md:inline-block md:mt-0 md:ml-6 rounded-full px-3 py-1 text-gray-100 transition-colors delay-150 hover:text-gray-900 hover:bg-gray-100 hover:delay-[0ms]"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
          <a
            className="uppercase block md:inline-block mt-4 md:mt-0 md:ml-6 no-underline py-1 px-3 rounded-full font-semibold outline-2 outline-offset-2 transition-colors text-zinc-900 bg-white hover:bg-zinc-600 active:bg-white-800 active:text-zinc-100"
            href="mailto:drjan@trecflow.com"    
          >
            Contact Me
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
