import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const imgStyle = {
  height: 'auto',
};

export const data = [
  {
    link: 'avatar/usage',
    design: 'Available',
    name: 'Avatar',
    code: 'Available',
    image: () => <StaticImage src="./images/Avatar.png" alt="Avatar" imgStyle={imgStyle} />,
  },
  {
    link: 'badges/usage',
    name: 'Badge',
    design: 'Available',
    code: 'Available',
    image: () => <StaticImage src="./images/Badge.png" alt="Badge" imgStyle={imgStyle} />,
  },
  {
    link: 'breadcrumbs/usage',
    name: 'Breadcrumb',
    design: 'Available',
    code: 'Available',
    image: () => <StaticImage src="./images/Breadcrumb.png" alt="Breadcrumb" imgStyle={imgStyle} />,
  },
  {
    link: 'button/usage',
    name: 'Buttons',
    design: 'Available',
    code: 'Available',
    image: () => <StaticImage src="./images/Buttons.png" alt="Buttons" imgStyle={imgStyle} />,
  },
  {
    link: 'calendar/usage',
    name: 'Calendar',
    design: 'Available',
    code: 'Available',
    image: () => <StaticImage src="./images/Calendar.png" alt="Card" imgStyle={imgStyle} />,
  },
  {
    link: 'card/usage',
    name: 'Cards',
    design: 'Available',
    code: 'Available',
    image: () => <StaticImage src="./images/Cards.png" alt="Card" imgStyle={imgStyle} />,
  },
  {
    link: 'checkbox/usage',
    name: 'Checkbox',
    design: 'Available',
    code: 'Available',
    image: () => <StaticImage src="./images/Checkbox.png" alt="Checkbox" imgStyle={imgStyle} />,
  },
  {
    link: 'chips/usage',
    name: 'Chips',
    design: 'Available',
    code: 'Available',
    image: () => <StaticImage src="./images/Chips.png" alt="Chips" imgStyle={imgStyle} />,
  },
  {
    link: 'datePicker/usage',
    name: 'Date pickers',
    design: 'Available',
    code: 'Available',
    image: () => <StaticImage src="./images/Date&TimePicker.png" alt="Date picker" imgStyle={imgStyle} />,
  },
  {
    link: 'dividers/usage',
    name: 'Dividers',
    design: 'Available',
    code: 'Available',
    image: () => <StaticImage src="./images/Dividers.png" alt="Dividers" imgStyle={imgStyle} />,
  },
  {
    link: 'dropdowns/usage',
    name: 'Dropdowns',
    design: 'Available',
    code: 'Available',
    image: () => <StaticImage src="./images/Dropdowns.png" alt="Dropdowns" imgStyle={imgStyle} />,
  },
  {
    link: 'helpText/usage',
    name: 'Help text',
    design: 'Available',
    code: 'Unavailable',
    image: () => <StaticImage src="./images/Helptext2.png" alt="Help text" imgStyle={imgStyle} />,
  },
  {
    link: 'icons/usage',
    name: 'Icon',
    design: 'Available',
    code: 'Available',
    image: () => <StaticImage src="./images/Icons.png" alt="Icons" imgStyle={imgStyle} />,
  },
  {
    link: 'inlineEditableFields',
    name: 'Inline editable fields',
    design: 'Available',
    code: 'Available',
    image: () => (
      <StaticImage src="./images/InlineEditableField.png" alt="Inline editable fields" imgStyle={imgStyle} />
    ),
  },
  {
    link: 'inputs/usage',
    name: 'Inputs',
    design: 'Available',
    code: 'Available',
    image: () => <StaticImage src="./images/Inputs.png" alt="Inputs" imgStyle={imgStyle} />,
  },
  {
    link: 'links/usage',
    name: 'Link',
    design: 'Available',
    code: 'Available',
    image: () => <StaticImage src="./images/Link.png" alt="Link" imgStyle={imgStyle} />,
  },
  {
    link: 'message/usage',
    name: 'Messages',
    design: 'Available',
    code: 'Available',
    image: () => <StaticImage src="./images/Message.png" alt="Messages" imgStyle={imgStyle} />,
  },
  {
    link: 'metaList/usage',
    name: 'Meta list',
    design: 'Available',
    code: 'Available',
    image: () => <StaticImage src="./images/MetaList.png" alt="Meta list" imgStyle={imgStyle} />,
  },
  {
    link: 'modals/usage',
    name: 'Modals',
    design: 'Available',
    code: 'Available',
    image: () => <StaticImage src="./images/Modal.png" alt="Modals" imgStyle={imgStyle} />,
  },
  {
    link: 'navigationHorizontal/usage',
    name: 'Navigation - Horizontal',
    design: 'Available',
    code: 'Available',
    image: () => (
      <StaticImage src="./images/NavigationHorizontal.png" alt="Navigation - Horizontal" imgStyle={imgStyle} />
    ),
  },
  {
    link: 'navigationVertical/usage',
    name: 'Navigation - Vertical',
    design: 'Available',
    code: 'Available',
    image: () => <StaticImage src="./images/NavigationVertical.png" alt="Navigation - Vertical" imgStyle={imgStyle} />,
  },
  {
    link: 'pageHeaders/usage',
    name: 'Page Headers',
    design: 'Available',
    code: 'Available',
    image: () => <StaticImage src="./images/PageHeader.png" alt="Page Headers" imgStyle={imgStyle} />,
  },
  {
    link: 'pagination/usage',
    name: 'Pagination',
    design: 'Available',
    code: 'Available',
    image: () => <StaticImage src="./images/Pagination.png" alt="Pagination" imgStyle={imgStyle} />,
  },
  {
    link: 'pills/usage',
    name: 'Pill',
    design: 'Available',
    code: 'Available',
    image: () => <StaticImage src="./images/Pill.png" alt="Pill" imgStyle={imgStyle} />,
  },
  {
    link: 'popover/usage',
    name: 'Popover',
    design: 'Available',
    code: 'Available',
    image: () => <StaticImage src="./images/Popover.png" alt="Popover" imgStyle={imgStyle} />,
  },
  {
    link: 'progressIndicators/usage',
    name: 'Progress indicators',
    design: 'Available',
    code: 'Available',
    image: () => <StaticImage src="./images/ProgressIndicators.png" alt="Progress indicators" imgStyle={imgStyle} />,
  },
  {
    link: 'radio/usage',
    name: 'Radio',
    design: 'Available',
    code: 'Available',
    image: () => <StaticImage src="./images/Radio.png" alt="Radio" imgStyle={imgStyle} />,
  },
  {
    link: 'richTextEditor/usage',
    name: 'Rich text editor',
    design: 'Available',
    code: 'Available',
    image: () => <StaticImage src="./images/RichTextEditor.png" alt="Rich text editor" imgStyle={imgStyle} />,
  },
  {
    link: 'sidesheet/usage',
    name: 'Sidesheet',
    design: 'Available',
    code: 'Available',
    image: () => <StaticImage src="./images/Sidesheet.png" alt="Sidesheet" imgStyle={imgStyle} />,
  },
  {
    link: 'slider/usage',
    name: 'Sliders',
    design: 'Available',
    code: 'Available',
    image: () => <StaticImage src="./images/Slider.png" alt="Sliders" imgStyle={imgStyle} />,
  },
  {
    link: 'statusHint/usage',
    name: 'Status hint',
    design: 'Available',
    code: 'Available',
    image: () => <StaticImage src="./images/Status.png" alt="Status hint" imgStyle={imgStyle} />,
  },
  {
    link: 'steppers/usage',
    name: 'Stepper',
    design: 'Available',
    code: 'Available',
    image: () => <StaticImage src="./images/Steppers.png" alt="Stepper" imgStyle={imgStyle} />,
  },
  {
    link: 'switch/usage',
    name: 'Switch',
    design: 'Available',
    code: 'Available',
    image: () => <StaticImage src="./images/Switch.png" alt="Switch" imgStyle={imgStyle} />,
  },
  {
    link: 'table/usage',
    name: 'Tables',
    design: 'Available',
    code: 'Available',
    image: () => <StaticImage src="./images/Table.png" alt="Tables" imgStyle={imgStyle} />,
  },
  {
    link: 'tabs/usage',
    name: 'Tabs',
    design: 'Available',
    code: 'Available',
    image: () => <StaticImage src="./images/Tabs.png" alt="Tabs" imgStyle={imgStyle} />,
  },
  {
    link: 'timePicker/usage',
    name: 'Time picker',
    design: 'Available',
    code: 'Available',
    image: () => <StaticImage src="./images/TimePicker.png" alt="Time Picker" imgStyle={imgStyle} />,
  },
  {
    link: 'toast/usage',
    name: 'Toast',
    design: 'Available',
    code: 'Available',
    image: () => <StaticImage src="./images/Toast.png" alt="Toast" imgStyle={imgStyle} />,
  },
  {
    link: 'tooltip/usage',
    name: 'Tooltip',
    design: 'Available',
    code: 'Available',
    image: () => <StaticImage src="./images/Tooltip.png" alt="Tooltip" imgStyle={imgStyle} />,
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
        <Link className="Text--link card-link" to={`/components/${data.link}`}>
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
