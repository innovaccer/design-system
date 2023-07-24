declare type SVGIconProps = {
    name: 'default' | 'active' | 'error';
    type: 'standard' | 'compressed' | 'tight';
    disabled?: boolean;
};
declare const DropzoneIcon: (props: SVGIconProps) => JSX.Element;
export default DropzoneIcon;
