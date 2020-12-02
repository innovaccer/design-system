import { BaseProps } from "../../../utils/types";
export declare type Length = 'small' | 'medium' | 'large';
export declare type Size = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';
export interface PlaceholderParagraphProps extends BaseProps {
    length: Length;
    size?: Size;
}
export declare const PlaceholderParagraph: {
    (props: PlaceholderParagraphProps): JSX.Element;
    displayName: string;
    defaultProps: {
        length: string;
    };
};
export default PlaceholderParagraph;
