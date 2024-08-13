import React from 'react';
import { BaseProps } from "../../../utils/types";
export interface EmptyDescriptionProps extends BaseProps {
    children: React.ReactText;
}
declare const EmptyStateTitle: (props: EmptyDescriptionProps) => JSX.Element;
export default EmptyStateTitle;
