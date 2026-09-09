import React from 'react';
import { BaseProps } from "../../../utils/types";
export interface EmptyDescriptionProps extends BaseProps {
    children: React.ReactText;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
declare const EmptyStateTitle: (props: EmptyDescriptionProps) => React.JSX.Element;
export default EmptyStateTitle;
