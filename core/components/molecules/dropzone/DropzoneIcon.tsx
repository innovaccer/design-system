import React from 'react';

type SVGIconProps = {
  /**
   * Name of the icon to be used in dropzone
   */
  name: 'default' | 'active' | 'error';
  /**
   * Variant for the dropzone
   */
  type: 'standard' | 'compressed' | 'tight';
  /**
   * If true, dropzone icon appears disabled
   */
  disabled?: boolean;
};

const svgCode = {
  active:
    'M49 41v8H17v-8h-5.375v8c0 2.875 2.5 5.375 5.375 5.375h32c2.875 0 5.375-2.5 5.375-5.375v-8H49zM19.625 25l3.75 3.75 7-6.875v21.75h5.25v-21.75l7 6.875 3.75-3.75L33 11.625 19.625 25z',
  default:
    'M48.875 40.375v8h-32v-8H11.5v8c0 2.875 2.5 5.375 5.375 5.375h32c2.875 0 5.375-2.5 5.375-5.375v-8h-5.375zM46.25 29.75L42.5 26l-7 6.875V11h-5.25v21.875l-7-6.875-3.75 3.75L32.875 43 46.25 29.75z',
  error:
    'M31.625 5C16.875 5 5 16.875 5 31.625C5 46.375 16.875 58.25 31.625 58.25C46.375 58.25 58.25 46.375 58.25 31.625C58.25 16.875 46.375 5 31.625 5ZM34.25 45H29V39.625H34.25V45ZM34.25 34.25H29V18.25H34.25V34.25Z',
};

const DropzoneIcon = (props: SVGIconProps) => {
  const IconStyle = {
    height: 'calc(var(--spacing-5))',
    width: 'calc(var(--spacing-5))',
  };

  return (
    <svg style={IconStyle} className={`Dropzone-icon--${props.type}`} fill="none">
      <path
        d={svgCode[props.name]}
        className={props.disabled ? 'Dropzone-icon--disabled' : `Dropzone-icon--${props.name}`}
      />
    </svg>
  );
};

export default DropzoneIcon;
