import * as React from 'react';
export interface Example {
    title: string;
    description?: string;
    imports: string[];
    component: React.ReactNode;
}
export declare const docPage: () => React.JSX.Element;
export default docPage;
