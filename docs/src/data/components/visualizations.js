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
    image: () => <StaticImage src="./images/patterns/email.png" alt="Email" imgStyle={imgStyle} />,
  },
  {
    link: 'lineChart/usage',
    design: 'Available',
    name: 'Line chart',
    code: 'Available',
    image: () => <StaticImage src="./images/patterns/email.png" alt="Email" imgStyle={imgStyle} />,
  }
];
