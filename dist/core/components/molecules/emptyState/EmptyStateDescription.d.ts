import React from 'react';
import { BaseProps } from '@/utils/types';
export type EmptyDescriptionProps = {
    children: string | number;
} & BaseProps;
declare const EmptyStateDescription: (props: EmptyDescriptionProps) => React.JSX.Element;
export default EmptyStateDescription;
