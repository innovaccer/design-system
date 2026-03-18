import * as React from 'react';
import { navigationPositionType } from "./PageHeader";
export declare const Status: (props: {
    status: React.ReactNode;
    meta: React.ReactNode;
    navigationPosition: navigationPositionType;
    navigation: React.ReactNode;
    tabs: React.ReactNode;
}) => React.JSX.Element;
export declare const Action: (props: {
    actions: React.ReactNode;
    navigation: React.ReactNode;
    stepper: React.ReactNode;
}) => React.JSX.Element;
export declare const Nav: (props: {
    navigation: React.ReactNode;
    stepper: React.ReactNode;
}) => React.JSX.Element | null;
export declare const CenterNav: (props: {
    colSize: string;
    breadcrumbs: React.ReactNode;
    navigationPosition: navigationPositionType;
    navigation: React.ReactNode;
    stepper: React.ReactNode;
}) => React.JSX.Element;
export declare const BackButton: (props: {
    button: React.ReactNode;
}) => React.JSX.Element;
export declare const Title: (props: {
    badge: React.ReactNode;
    title: string;
}) => React.JSX.Element;
