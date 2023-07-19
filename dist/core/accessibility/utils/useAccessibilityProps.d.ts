import * as React from 'react';
declare type AriaRoleType = React.AriaRole;
interface IProps {
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
    role?: AriaRoleType;
    'aria-label'?: React.AriaAttributes['aria-label'];
}
declare const useAccessibilityProps: ({ onClick, onKeyDown, role, ...rest }: IProps) => {
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    role: React.AriaRole;
    tabIndex: number;
    'aria-label': string | undefined;
    onKeyDown: (e: React.SyntheticEvent<HTMLElement>) => void;
} | {
    role: React.AriaRole;
    'aria-label': string | undefined;
};
export default useAccessibilityProps;
