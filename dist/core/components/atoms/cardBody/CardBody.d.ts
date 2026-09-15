import * as React from 'react';
import { BaseProps } from '@/utils/types';
export type CardBodyProps = {
    children: React.ReactNode;
} & BaseProps;
export declare const CardBody: {
    (props: CardBodyProps): React.JSX.Element;
    displayName: string;
};
export default CardBody;
