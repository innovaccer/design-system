import * as React from 'react';
import { BaseProps } from "../../../../utils/types";
export declare type ItemTagType = 'li' | 'div';
export interface SelectionOptionProps extends BaseProps {
    children: React.ReactNode;
    value?: any;
    disabled?: boolean;
    tagName: ItemTagType;
    onFocus?: (event: React.FocusEvent) => void;
    onBlur?: (event: React.FocusEvent) => void;
}
export declare const AvatarSelectionOption: {
    (props: SelectionOptionProps): JSX.Element;
    defaultProps: {
        tagName: string;
    };
};
export default AvatarSelectionOption;
