import React from 'react';
import { BaseProps } from '@/utils/types';
export type EmptyActionProps = {
    children: React.ReactNode;
} & BaseProps;
declare const EmptyStateActions: (props: EmptyActionProps) => React.JSX.Element;
export default EmptyStateActions;
