import * as React from 'react';
import { BaseProps } from '@/utils/types';
export interface EditableProps extends BaseProps {
    editing?: boolean;
    children: React.ReactNode;
    onChange: (eventType: string) => void;
}
export declare const Editable: {
    (props: EditableProps): React.JSX.Element;
    displayName: string;
};
export default Editable;
