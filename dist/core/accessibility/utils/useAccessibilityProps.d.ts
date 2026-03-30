import * as React from 'react';
declare type AriaRoleType = React.AriaRole;
interface IProps {
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
    role?: AriaRoleType;
    tabIndex?: number;
    'aria-label'?: React.AriaAttributes['aria-label'];
    'aria-labelledby'?: React.AriaAttributes['aria-labelledby'];
    'aria-describedby'?: React.AriaAttributes['aria-describedby'];
    'aria-hidden'?: React.AriaAttributes['aria-hidden'];
}
declare const useAccessibilityProps: ({ onClick, onKeyDown, role, tabIndex, ...rest }: IProps) => {
    'aria-hidden'?: boolean | "false" | "true";
    'aria-describedby'?: string;
    'aria-labelledby'?: string;
    'aria-label'?: string;
    onClick?: undefined;
    role?: undefined;
    tabIndex?: undefined;
    onKeyDown?: undefined;
} | {
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    role: React.AriaRole;
    tabIndex: number;
    'aria-label': string | undefined;
    onKeyDown: (e: React.SyntheticEvent<HTMLElement>) => void;
};
export default useAccessibilityProps;
