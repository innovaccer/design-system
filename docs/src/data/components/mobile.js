
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
    image: () => (
      <StaticImage
        src="./images/mobile/ActionSheet.png"
        alt="Action Sheet"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'badge/usage',
    design: 'Available',
    name: 'Badge',
    code: 'Available',
    image: () => (
      <StaticImage
        src="./images/mobile/Badge.png"
        alt="Badge"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'bottomNavigation/usage',
    design: 'Available',
    name: 'Bottom navigation',
    code: 'Available',
    image: () => (
      <StaticImage
        src="./images/mobile/BottomNavigation.png"
        alt="Bottom navigation"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'bottomSheet/usage',
    design: 'Available',
    name: 'Bottom sheet',
    code: 'Available',
    image: () => (
      <StaticImage
        src="./images/mobile/BottomSheet.png"
        alt="Bottom sheet"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'button/usage',
    design: 'Available',
    name: 'Buttons',
    code: 'Available',
    image: () => (
      <StaticImage
        src="./images/mobile/Buttons.png"
        alt="Buttons"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'card/usage',
    design: 'Available',
    name: 'Cards',
    code: 'Available',
    image: () => (
      <StaticImage
        src="./images/mobile/Card.png"
        alt="Cards"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'checkbox/usage',
    design: 'Available',
    name: 'Checkbox',
    code: 'Available',
    image: () => (
      <StaticImage
        src="./images/mobile/Checkbox.png"
        alt="Checkbox"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'chips/usage',
    design: 'Available',
    name: 'Chips',
    code: 'Available',
    image: () => (
      <StaticImage
        src="./images/mobile/Chips.png"
        alt="Chips"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'dialogs/usage',
    design: 'Available',
    name: 'Dialogs',
    code: 'Available',
    image: () => (
      <StaticImage
        src="./images/mobile/Dialog.png"
        alt="Dialogs"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'dropdown/usage',
    design: 'Available',
    name: 'Dropdowns',
    code: 'Available',
    image: () => (
      <StaticImage
        src="./images/mobile/Dropdown.png"
        alt="Dropdowns"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'inputs/usage',
    design: 'Available',
    name: 'Inputs',
    code: 'Available',
    image: () => (
      <StaticImage
        src="./images/mobile/Input.png"
        alt="Inputs"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'list/usage',
    design: 'Available',
    name: 'List',
    code: 'Available',
    image: () => (
      <StaticImage
        src="./images/mobile/List.png"
        alt="List"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'metaList/usage',
    design: 'Available',
    name: 'Meta list',
    code: 'Available',
    image: () => (
      <StaticImage
        src="./images/mobile/MetaList.png"
        alt="<Meta list>"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'message/usage',
    design: 'Available',
    name: 'Messages',
    code: 'Available',
    image: () => (
      <StaticImage
        src="./images/mobile/Message.png"
        alt="Messages"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'pageHeaders/usage',
    design: 'Available',
    name: 'Page headers',
    code: 'Available',
    image: () => (
      <StaticImage
        src="./images/mobile/PageHeader.png"
        alt="Page headers"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'radio/usage',
    design: 'Available',
    name: 'Radio',
    code: 'Available',
    image: () => (
      <StaticImage
        src="./images/mobile/Radio.png"
        alt="Radio"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'slider/usage',
    design: 'Available',
    name: 'Slider',
    code: 'Available',
    image: () => (
      <StaticImage
        src="./images/mobile/Slider.png"
        alt="Slider"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'statusHint/usage',
    design: 'Available',
    name: 'Status hint',
    code: 'Available',
    image: () => (
      <StaticImage
        src="./images/mobile/StatusHint.png"
        alt="Status hint"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'stepper/usage',
    design: 'Available',
    name: 'Stepper',
    code: 'Available',
    image: () => (
      <StaticImage
        src="./images/mobile/Stepper.png"
        alt="Stepper"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'switch/usage',
    design: 'Available',
    name: 'Switch',
    code: 'Available',
    image: () => (
      <StaticImage
        src="./images/mobile/Switch.png"
        alt="Switch"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'tabs/usage',
    design: 'Available',
    name: 'Tabs',
    code: 'Available',
    image: () => (
      <StaticImage
        src="./images/mobile/Tabs.png"
        alt="Tabs"
        imgStyle={imgStyle}
      />)
  },
  {
    link: 'toast/usage',
    design: 'Available',
    name: 'Toast',
    code: 'Available',
    image: () => (
      <StaticImage
        src="./images/mobile/Toast.png"
        alt="Toast"
        imgStyle={imgStyle}
      />)
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

