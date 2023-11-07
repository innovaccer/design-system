import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const imgStyle = {
  height: 'auto',
};

export const data = [
  {
    link: 'color/usage',
    design: 'Available',
    name: 'Colors',
    code: 'Available',
    image: () => <StaticImage src="./images/visualizations/color.png" alt="Bar chart" imgStyle={imgStyle} />,
  },
  {
    link: 'barChart/usage',
    design: 'Available',
    name: 'Bar charts',
    code: 'Available',
    image: () => <StaticImage src="./images/visualizations/barchart.png" alt="Bar chart" imgStyle={imgStyle} />,
  },
  {
    link: 'donutChart/usage',
    design: 'Available',
    name: 'Donut chart',
    code: 'Available',
    image: () => <StaticImage src="./images/visualizations/donutchart.png" alt="Donut chart" imgStyle={imgStyle} />,
  },
  {
    link: 'lineChart/usage',
    design: 'Available',
    name: 'Line chart',
    code: 'Available',
    image: () => <StaticImage src="./images/visualizations/linechart.png" alt="Line chart" imgStyle={imgStyle} />,
  }
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
