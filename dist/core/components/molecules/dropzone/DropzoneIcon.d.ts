import React from 'react';
declare type SVGIconProps = {
    name: 'default' | 'active' | 'error';
    type: 'standard' | 'compressed' | 'tight';
    disabled?: boolean;
};
declare const DropzoneIcon: (props: SVGIconProps) => React.JSX.Element;
export default DropzoneIcon;
