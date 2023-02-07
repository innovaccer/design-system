import React from 'react';

type CheckboxIconProp = {
  name: string;
};

const CheckboxIcon = (props: CheckboxIconProp) => {
  switch (props.name) {
    case 'checked--regular':
      return (
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.66667 5.56L8.72667 0.5L9.66667 1.44667L3.66667 7.44667L0.333333 4.11333L1.27333 3.17333L3.66667 5.56Z"
            fill="white"
          />
        </svg>
      );

    case 'checked--tiny':
      return (
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.333344 4L1.27334 3.06L3.66668 5.44667L8.72668 0.386665L9.66668 1.33333L3.66668 7.33333L0.333344 4Z"
            fill="white"
          />
        </svg>
      );

    case 'indeterminate--regular':
      return (
        <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H10V2H0V0Z" fill="white" />
        </svg>
      );

    case 'indeterminate--tiny':
      return (
        <svg width="8" height="2" viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M8 0H0V2H8V0Z" fill="white" />
        </svg>
      );

    default:
      return null;
  }
};

export default CheckboxIcon;
