import * as React from 'react';
import { BaseProps } from "../../../utils/types";
export interface CardHeaderProps extends BaseProps {
    children: React.ReactNode;
}
export declare const CardHeader: {
    (props: CardHeaderProps): JSX.Element;
    displayName: string;
};
export default CardHeader;
