import * as React from 'react';
import { BaseProps } from '@/utils/types';
export interface CardBodyProps extends BaseProps {
    children: React.ReactNode;
}
export declare const CardBody: {
    (props: CardBodyProps): React.JSX.Element;
    displayName: string;
};
export default CardBody;
