import * as React from 'react';
import { navigationPositionType } from './PageHeader';
export declare const Status: (props: {
    status: React.ReactNode;
    meta: React.ReactNode;
}) => React.JSX.Element;
export declare const Action: (props: {
    actions: React.ReactNode;
    navigation: React.ReactNode;
    stepper: React.ReactNode;
    stacked?: boolean;
    level1Responsive?: boolean;
}) => React.JSX.Element;
export declare const CenterNav: (props: {
    navigationPosition: navigationPositionType;
    navigation: React.ReactNode;
    stepper: React.ReactNode;
    ghost?: boolean;
}) => React.JSX.Element;
export declare const Nav: (props: {
    navigation: React.ReactNode;
    stepper: React.ReactNode;
    noMargin?: boolean;
    responsiveNoMargin?: boolean;
}) => React.JSX.Element | null;
export declare const BackButton: (props: {
    button: React.ReactNode;
}) => React.JSX.Element;
export declare const Title: (props: {
    badge: React.ReactNode;
    title: string;
}) => React.JSX.Element;
