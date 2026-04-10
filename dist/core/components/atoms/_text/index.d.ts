import * as React from 'react';
interface Props {
    children: React.ReactNode;
    componentType: string;
    className?: string;
    [key: string]: any;
}
declare const _default: React.ForwardRefExoticComponent<Pick<Props, React.ReactText> & React.RefAttributes<HTMLElement>>;
export default _default;
