import * as React from 'react';
import { BaseProps } from "../../../utils/types";
import { IconProps } from "../../../index.type";
export interface ModalHeaderProps extends BaseProps {
    icon?: IconProps['name'];
    iconAppearance: IconProps['appearance'];
    heading?: string;
    onClose: (event?: React.MouseEvent<HTMLElement, MouseEvent>, reason?: string) => void;
    subHeading?: string;
}
export declare const ModalHeader: {
    (props: ModalHeaderProps): JSX.Element;
    displayName: string;
    defaultProps: {
        iconAppearance: string;
    };
};
export default ModalHeader;
