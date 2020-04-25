/// <reference types="react" />
export declare type Length = 'small' | 'medium' | 'large';
export interface PlaceholderParagraphProps {
    length?: Length;
}
export declare const PlaceholderParagraph: {
    (props: PlaceholderParagraphProps): JSX.Element;
    displayName: string;
};
export default PlaceholderParagraph;
