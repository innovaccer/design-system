import * as React from 'react';
import { BaseProps } from "../../../utils/types";
export interface CardFooterProps extends BaseProps {
    children: React.ReactNode;
    withSeperator: boolean;
}
export declare const CardFooter: {
    (props: CardFooterProps): JSX.Element;
    displayName: string;
    defaultProps: {
        withSeperator: boolean;
    };
};
export default CardFooter;
