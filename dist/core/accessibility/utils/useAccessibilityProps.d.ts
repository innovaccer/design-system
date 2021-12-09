import * as React from 'react';
interface IProps {
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
    role?: React.AriaRole;
    'aria-label'?: React.AriaAttributes['aria-label'];
}
declare const useAccessibilityProps: ({ onClick, onKeyDown, role, ...rest }: IProps) => {
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    role: string & {};
    tabIndex: number;
    'aria-label': string | undefined;
    onKeyDown: (e: React.SyntheticEvent<HTMLElement>) => void;
} | {
    role: "search" | "link" | "form" | "list" | "alert" | "article" | "button" | "dialog" | "figure" | "img" | "main" | "menu" | "menuitem" | "option" | "table" | "switch" | "tooltip" | (string & {}) | "none" | "alertdialog" | "application" | "banner" | "cell" | "checkbox" | "columnheader" | "combobox" | "complementary" | "contentinfo" | "definition" | "directory" | "document" | "feed" | "grid" | "gridcell" | "group" | "heading" | "listbox" | "listitem" | "log" | "marquee" | "math" | "menubar" | "menuitemcheckbox" | "menuitemradio" | "navigation" | "note" | "presentation" | "progressbar" | "radio" | "radiogroup" | "region" | "row" | "rowgroup" | "rowheader" | "scrollbar" | "searchbox" | "separator" | "slider" | "spinbutton" | "status" | "tab" | "tablist" | "tabpanel" | "term" | "textbox" | "timer" | "toolbar" | "tree" | "treegrid" | "treeitem" | undefined;
    'aria-label': string | undefined;
};
export default useAccessibilityProps;
