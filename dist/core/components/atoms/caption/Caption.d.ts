import * as React from 'react';
export interface CaptionProps {
    children: React.ReactNode;
    error?: boolean;
    hide?: boolean;
    withInput?: boolean;
}
export declare const Caption: {
    (props: CaptionProps): JSX.Element;
    displayName: string;
};
export default Caption;
