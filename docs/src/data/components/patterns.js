import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const imgStyle = {
  height: 'auto',
};

export const data = [
  {
    link: 'fileUploader/usage',
    design: 'Available',
    name: 'File uploader',
    code: 'Available',
    image: () => <StaticImage src="./images/patterns/fileUploader.png" alt="File uploader" imgStyle={imgStyle} />,
  },
  {
    link: 'forms/usage',
    design: 'Available',
    name: 'Forms',
    code: 'Available',
    image: () => <StaticImage src="./images/patterns/Forms.png" alt="Forms" imgStyle={imgStyle} />,
  },
  {
    link: 'layouts/usage',
    design: 'Available',
    name: 'Layouts',
    code: 'Available',
    image: () => <StaticImage src="./images/patterns/Layout.png" alt="Layout" imgStyle={imgStyle} />,
  },
  {
    link: 'uiStates/usage',
    design: 'Available',
    name: 'UI states',
    code: 'Available',
    image: () => <StaticImage src="./images/patterns/UIStates.png" alt="UI states" imgStyle={imgStyle} />,
  },
];

export const schema = [
  {
    name: 'name',
    displayName: 'Component Name',
    width: '40%',
    sorting: false,
    cellRenderer: ({ data }) => {
      return (
        <Link className="Text--link card-link" to={`/patterns/${data.link}`}>
          {data.name}
        </Link>
      );
    },
  },
  {
    name: 'design',
    displayName: 'Design',
    width: '30%',
    cellType: 'STATUS_HINT',
    sorting: false,
    translate: (a) => {
      const design = a.design;
      return {
        title: design,
        statusAppearance: design === 'Available' ? 'success' : design === 'Unavailable' ? 'alert' : 'info',
      };
    },
  },
  {
    name: 'code',
    displayName: 'Code',
    width: '30%',
    cellType: 'STATUS_HINT',
    sorting: false,
    translate: (a) => {
      const code = a.code;
      return {
        title: code,
        statusAppearance: code === 'Available' ? 'success' : code === 'Unavailable' ? 'alert' : 'info',
      };
    },
  },
];
