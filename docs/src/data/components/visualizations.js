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
    showOverview: true,
  },
  {
    link: 'barChart/usage',
    design: 'Available',
    name: 'Bar charts',
    code: 'Available',
    image: () => <StaticImage src="./images/visualizations/barchart.png" alt="Bar chart" imgStyle={imgStyle} />,
    showOverview: true,
  },
  {
    link: 'donutChart/usage',
    design: 'Available',
    name: 'Donut chart',
    code: 'Available',
    image: () => <StaticImage src="./images/visualizations/donutchart.png" alt="Donut chart" imgStyle={imgStyle} />,
    showOverview: true,
  },
  {
    link: 'lineChart/usage',
    design: 'Available',
    name: 'Line chart',
    code: 'Available',
    image: () => <StaticImage src="./images/visualizations/linechart.png" alt="Line chart" imgStyle={imgStyle} />,
    showOverview: true,
  },
  {
    link: 'overview/status/',
    design: 'Review Pending',
    name: 'KPI',
    code: 'Review Pending',
    showOverview: false,
  },
  {
    link: 'overview/status/',
    design: 'Available',
    name: 'Combination Chart',
    code: "Q1 '24",
    showOverview: false,
  },
  {
    link: 'overview/status/',
    design: 'Available',
    name: 'Heatmap',
    code: "Q1 '24",
    showOverview: false,
  },
  {
    link: 'overview/status/',
    design: 'Available',
    name: 'Maps',
    code: "Q1 '24",
    showOverview: false,
  },
  {
    link: 'overview/status/',
    design: 'Available',
    name: 'Table',
    code: "Q1 '24",
    showOverview: false,
  },
  {
    link: 'overview/status/',
    design: 'Available',
    name: 'Waterfall',
    code: "Q1 '24",
    showOverview: false,
  },
  {
    link: 'overview/status/',
    design: 'Available',
    name: 'Area Chart',
    code: 'Later',
    showOverview: false,
  },
  {
    link: 'overview/status/',
    design: 'Available',
    name: 'Bar (Lollipop)',
    code: 'Later',
    showOverview: false,
  },
  {
    link: 'overview/status/',
    design: 'Available',
    name: 'Barbell',
    code: 'Later',
    showOverview: false,
  },
  {
    link: 'overview/status/',
    design: 'Available',
    name: 'Boxplot',
    code: 'Later',
    showOverview: false,
  },
  {
    link: 'overview/status/',
    design: 'Available',
    name: 'Bullet',
    code: 'Later',
    showOverview: false,
  },
  {
    link: 'overview/status/',
    design: 'Available',
    name: 'Diverging',
    code: 'Later',
    showOverview: false,
  },
  {
    link: 'overview/status/',
    design: 'Available',
    name: 'Dot Strip',
    code: 'Later',
    showOverview: false,
  },
  {
    link: 'overview/status/',
    design: 'Available',
    name: 'Gantt',
    code: 'Later',
    showOverview: false,
  },
  {
    link: 'overview/status/',
    design: 'Available',
    name: 'Line (Stepped)',
    code: 'Later',
    showOverview: false,
  },
  {
    link: 'overview/status/',
    design: 'Available',
    name: 'Scatter Plot',
    code: 'Later',
    showOverview: false,
  },
  {
    link: 'overview/status/',
    design: 'Available',
    name: 'Slope',
    code: 'Later',
    showOverview: false,
  },
  {
    link: 'overview/status/',
    design: 'Available',
    name: 'Treemap',
    code: 'Later',
    showOverview: false,
  },
];

const statusMapper = {
  Available: 'success',
  Unavailable: 'alert',
  'Review Pending': 'warning',
  Later: 'default',
  "Q1 '24": 'default',
};

export const schema = [
  {
    name: 'name',
    displayName: 'Visualization',
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
    displayName: 'Component',
    width: '30%',
    cellType: 'STATUS_HINT',
    sorting: false,
    translate: (a) => {
      const design = a.design;
      return {
        title: design,
        statusAppearance: statusMapper[design] || 'info',
      };
    },
  },
  {
    name: 'code',
    displayName: 'Guidelines',
    width: '30%',
    cellType: 'STATUS_HINT',
    sorting: false,
    translate: (a) => {
      const code = a.code;
      return {
        title: code,
        statusAppearance: statusMapper[code] || 'info',
      };
    },
  },
];
