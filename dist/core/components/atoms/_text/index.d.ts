import * as React from 'react';
interface Props {
    children: React.ReactNode;
    componentType: string;
    className?: string;
}
declare const GenericText: ({ children, componentType, className, ...props }: Props) => React.ReactElement<{
    className: string | undefined;
}, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
export default GenericText;
