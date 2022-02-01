
import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import { Link } from 'gatsby';

const imgStyle = {
  height: 'auto'
}

export const data = [
  {
    link: 'avatar/usage',
    design: 'Unavailable',
    name: 'Avatars',
    code: 'Unavailable',
    image: () => (
      <StaticImage
        src="./images/Avatars.png"
        alt="Avatars"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'badges/usage',
    name: 'Badges',
    design: "Available",
    code: "Unavailable"
  },
  {
    link: 'breadcrumbs/usage',
    name: 'Breadcrumb',
    design: "Available",
    code: "Available",
  },
  {
    link: 'button/usage',
    name: 'Buttons',
    design: "Available",
    code: "Available",
  },
  {
    link: 'card/usage',
    name: 'Card',
    design: "Available",
    code: "Available",
  },
  {
    link: 'checkbox/usage',
    name: 'Checkbox',
    design: "Available",
    code: "Available",
  },
  {
    link: '',
    name: 'Chips',
    design: "Unavailable",
    code: "Unavailable",
  },
  {
    link: 'datepicker/usage',
    name: 'Date & Time Picker',
    design: "Unavailable",
    code: "Available",
    image: () => (
      <StaticImage
        src="./images/Datepicker.png"
        alt="Avatars"
        imgStyle={imgStyle}
      />)
  },
  {
    link: '',
    name: 'Dividers',
    design: "Unavailable",
    code: "Unavailable",
  },
  {
    link: '',
    name: 'Dropdown',
    design: "Unavailable",
    code: "Unavailable",
  },
  {
    link: '',
    name: 'Icons',
    design: "Unavailable",
    code: "Unavailable",
  },
  {
    link: '',
    name: 'Inputs',
    design: "Unavailable",
    code: "Unavailable",
  },
  {
    link: '',
    name: 'Inline editable fields',
    design: "Unavailable",
    code: "Unavailable",
  },
  {
    link: '',
    name: 'Links',
    design: "Unavailable",
    code: "Unavailable",
  },
  {
    link: 'message/usage',
    name: 'Message',
    design: "Unavailable",
    code: "Unavailable",
  },
  {
    link: '',
    name: 'Modal',
    design: "Unavailable",
    code: "Unavailable",
  },
  {

    link: '',
    name: 'Navigation - Horizontal',
    design: "Unavailable",
    code: "Unavailable",
  },
  {
    link: '',
    name: 'Navigation - Vertical',
    design: "Unavailable",
    code: "Unavailable",
  },
  {
    link: '',
    name: 'Pagination',
    design: "Unavailable",
    code: "Unavailable",
  },
  {
    link: '',
    name: 'Pills',
    design: "Unavailable",
    code: "Unavailable",
  },
  {
    link: '',
    name: 'Popover',
    design: "Unavailable",
    code: "Unavailable",
  },
  {
    link: '',
    name: 'Progress indicators',
    design: "Unavailable",
    code: "Unavailable",
  },
  {
    link: '',
    name: 'Radio',
    design: "Unavailable",
    code: "Unavailable",
  },
  {
    link: '',
    name: 'Scrollbar',
    design: "Unavailable",
    code: "Unavailable",
  },
  {
    link: '',
    name: 'Sidesheet',
    design: "Unavailable",
    code: "Unavailable",
  },
  {
    link: '',
    name: 'Slider',
    design: "Unavailable",
    code: "Unavailable",
  },
  {
    link: '',
    name: 'Status hints',
    design: "Unavailable",
    code: "Unavailable",
  },
  {
    link: '',
    name: 'Steppers',
    design: "Unavailable",
    code: "Unavailable",
  },
  {
    link: '',
    name: 'Switch',
    design: "Unavailable",
    code: "Unavailable",
  },
  {
    link: '',
    name: 'Table',
    design: "Unavailable",
    code: "Unavailable",
    image: () => (
      <StaticImage
        src="./images/Table.png"
        alt="Avatars"
        imgStyle={imgStyle}
      />)
  },
  {
    link: '',
    name: 'Tabs',
    design: "Unavailable",
    code: "Unavailable",
  },
  {
    link: '',
    name: 'Toast',
    design: "Unavailable",
    code: "Unavailable",
  },
  {
    link: '',
    name: 'Tooltip',
    design: "Unavailable",
    code: "Unavailable",
  }
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
      to={`/components/${data.link.toLowerCase()}`}
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

