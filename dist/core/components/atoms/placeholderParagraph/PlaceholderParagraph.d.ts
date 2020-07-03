/// <reference types="react" />
export declare type Length = 'small' | 'medium' | 'large';
export declare type Size = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';
export interface PlaceholderParagraphProps {
    length?: Length;
    size?: Size;
}
export declare const PlaceholderParagraph: {
    (props: PlaceholderParagraphProps): JSX.Element;
    defaultProps: {
        length: string;
    };
    displayName: string;
};
export default PlaceholderParagraph;
