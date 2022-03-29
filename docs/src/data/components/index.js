
import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import { Link } from 'gatsby';

const imgStyle = {
  height: 'auto'
}

export const data = [
  {
    link: 'avatar/usage',
    design: 'Available',
    name: 'Avatars',
    code: 'Available',
    image: () => (
      <StaticImage
        src="./images/Avatar.png"
        alt="Avatars"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'badges/usage',
    name: 'Badges',
    design: "Available",
    code: "Available",
    image: () => (
      <StaticImage
        src="./images/Badge.png"
        alt="Badges"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'breadcrumbs/usage',
    name: 'Breadcrumb',
    design: "Available",
    code: "Available",
    image: () => (
      <StaticImage
        src="./images/Breadcrumb.png"
        alt="Breadcrumbs"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'button/usage',
    name: 'Buttons',
    design: "Available",
    code: "Available",
    image: () => (
      <StaticImage
        src="./images/Buttons.png"
        alt="Button"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'card/usage',
    name: 'Card',
    design: "Available",
    code: "Available",
    image: () => (
      <StaticImage
        src="./images/Cards.png"
        alt="Card"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'checkbox/usage',
    name: 'Checkbox',
    design: "Available",
    code: "Available",
    image: () => (
      <StaticImage
        src="./images/Checkbox.png"
        alt="Checkbox"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'chips/usage',
    name: 'Chips',
    design: "Available",
    code: "Available",
    image: () => (
      <StaticImage
        src="./images/Chips.png"
        alt="Chip"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'datePicker/usage',
    name: 'Date & Time Picker',
    design: "Available",
    code: "Available",
    image: () => (
      <StaticImage
        src="./images/Date&TimePicker.png"
        alt="Date and Time picker"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'dividers/usage',
    name: 'Dividers',
    design: "Available",
    code: "Available",
    image: () => (
      <StaticImage
        src="./images/Dividers.png"
        alt="Dividers"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'dropdowns/usage',
    name: 'Dropdown',
    design: "Available",
    code: "Available",
    image: () => (
      <StaticImage
        src="./images/Dropdowns.png"
        alt="Dropdown"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'icons/usage',
    name: 'Icons',
    design: "Available",
    code: "Available",
    image: () => (
      <StaticImage
        src="./images/Icons.png"
        alt="Icons"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'inputs/usage',
    name: 'Inputs',
    design: "Available",
    code: "Available",
    image: () => (
      <StaticImage
        src="./images/Inputs.png"
        alt="Inputs"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'inlineEditableFields',
    name: 'Inline editable fields',
    design: "Available",
    code: "Available",
    image: () => (
      <StaticImage
        src="./images/InlineEditableField.png"
        alt="Inline editable fields"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'links/usage',
    name: 'Links',
    design: "Available",
    code: "Available",
    image: () => (
      <StaticImage
        src="./images/Link.png"
        alt="Link"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'message/usage',
    name: 'Message',
    design: "Available",
    code: "Available",
    image: () => (
      <StaticImage
        src="./images/Message.png"
        alt="Message"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'modals/usage',
    name: 'Modal',
    design: "Available",
    code: "Available",
    image: () => (
      <StaticImage
        src="./images/Modal.png"
        alt="Modals"
        imgStyle={imgStyle}
      />)
  },
  {

    link: 'navigationHorizontal/usage',
    name: 'Navigation - Horizontal',
    design: "Available",
    code: "Available",
    image: () => (
      <StaticImage
        src="./images/NavigationHorizontal.png"
        alt="Navigation - Horizontal"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'navigationVertical/usage',
    name: 'Navigation - Vertical',
    design: "Available",
    code: "Available",
    image: () => (
      <StaticImage
        src="./images/NavigationVertical.png"
        alt="Navigation - Vertical"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'pagination/usage',
    name: 'Pagination',
    design: "Available",
    code: "Available",
    image: () => (
      <StaticImage
        src="./images/Pagination.png"
        alt="Pagination"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'pills/usage',
    name: 'Pills',
    design: "Available",
    code: "Available",
    image: () => (
      <StaticImage
        src="./images/Pill.png"
        alt="Pill"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'popover/usage',
    name: 'Popover',
    design: "Available",
    code: "Available",
    image: () => (
      <StaticImage
        src="./images/Popover.png"
        alt="Popover"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'progressIndicators/usage',
    name: 'Progress indicators',
    design: "Available",
    code: "Available",
    image: () => (
      <StaticImage
        src="./images/ProgressIndicators.png"
        alt="Progress indicators"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'radio/usage',
    name: 'Radio',
    design: "Available",
    code: "Available",
    image: () => (
      <StaticImage
        src="./images/Radio.png"
        alt="Radio"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'richTextEditor/usage',
    name: 'Rich text editor',
    design: "Available",
    code: "Available",
    image: () => (
      <StaticImage
        src="./images/RichTextEditor.png"
        alt="Rich text editor"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'sidesheet/usage',
    name: 'Sidesheet',
    design: "Available",
    code: "Available",
    image: () => (
      <StaticImage
        src="./images/Sidesheet.png"
        alt="SideSheet"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'slider/usage',
    name: 'Slider',
    design: "Available",
    code: "Available",
    image: () => (
      <StaticImage
        src="./images/Slider.png"
        alt="Slider"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'statusHint/usage',
    name: 'Status hints',
    design: "Available",
    code: "Available",
    image: () => (
      <StaticImage
        src="./images/Status.png"
        alt="Status hint"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'steppers/usage',
    name: 'Steppers',
    design: "Available",
    code: "Available",
    image: () => (
      <StaticImage
        src="./images/Steppers.png"
        alt="Steppers"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'switch/usage',
    name: 'Switch',
    design: "Available",
    code: "Available",
    image: () => (
      <StaticImage
        src="./images/Switch.png"
        alt="Switch"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'table/usage',
    name: 'Table',
    design: "Available",
    code: "Available",
    image: () => (
      <StaticImage
        src="./images/Table.png"
        alt="Table"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'tabs/usage',
    name: 'Tabs',
    design: "Available",
    code: "Available",
    image: () => (
      <StaticImage
        src="./images/Tabs.png"
        alt="Tabs"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'toast/usage',
    name: 'Toast',
    design: "Available",
    code: "Available",
    image: () => (
      <StaticImage
        src="./images/Toast.png"
        alt="Toast"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'tooltip/usage',
    name: 'Tooltip',
    design: "Available",
    code: "Available",
    image: () => (
      <StaticImage
        src="./images/Tooltip.png"
        alt="Tooltip"
        imgStyle={imgStyle}
      />)
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

