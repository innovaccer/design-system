import * as React from 'react';
import { MessageAppearance } from '@/common.type';
export interface Props {
    appearance?: MessageAppearance;
    label: string;
    onClick?: (e: React.MouseEvent) => void;
}
declare const ActionButton: {
    (props: Props): React.JSX.Element;
    displayName: string;
};
export default ActionButton;
