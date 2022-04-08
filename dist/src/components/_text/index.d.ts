import * as React from 'react';
interface Props {
    children: React.ReactNode;
    componentType: string;
    className?: string;
}
declare const GenericText: ({ children, componentType, className, ...props }: Props) => React.ReactElement<{
    className: string | undefined;
}, string | React.JSXElementConstructor<any>>;
export default GenericText;
