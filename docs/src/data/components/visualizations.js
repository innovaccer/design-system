import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const imgStyle = {
  height: 'auto',
};

export const data = [
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
