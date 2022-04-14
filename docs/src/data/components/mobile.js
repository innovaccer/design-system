
import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import { Link } from 'gatsby';

const imgStyle = {
  height: 'auto'
}

export const data = [
  {
    link: 'actionSheet/usage',
    design: 'Available',
    name: 'Action Sheet',
    code: 'Available',
    // image: () => (
    //   <StaticImage
    //     src="/images/Avatars.png"
    //     alt="Avatars"
    //     imgStyle={imgStyle}
    //   />)
  },
];


export const schema = [
  {
    name: "name",
    displayName: "Component Name",
    width: "40%",
    sorting: false,
    cellRenderer: ({ data }) => {
      return <Link 
      className='Text--link card-link'
      to={`/mobile/components/${data.link}`}
      >
        {data.name}
      </Link>;
    },
  },
  {
    name: "design",
    displayName: "Design",
    width: "30%",
    cellType: "STATUS_HINT",
    sorting: false,
    translate: (a) => {
      const design = a.design;
      return {
        title: design,
        statusAppearance:
          design === "Available"
            ? "success"
            : design === "Unavailable"
              ? "alert"
              : "info",
      };
    },
  },
  {
    name: "code",
    displayName: "Code",
    width: "30%",
    cellType: "STATUS_HINT",
    sorting: false,
    translate: (a) => {
      const code = a.code;
      return {
        title: code,
        statusAppearance:
          code === "Available"
            ? "success"
            : code === "Unavailable"
              ? "alert"
              : "info",
      };
    },
  },
];

