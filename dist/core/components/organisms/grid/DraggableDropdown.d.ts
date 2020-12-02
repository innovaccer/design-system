import { DropdownProps } from "../../../index.type";
interface DraggableDropdownProps {
    options: DropdownProps['options'];
    onChange: (options: DropdownProps['options']) => void;
}
export declare const DraggableDropdown: (props: DraggableDropdownProps) => JSX.Element;
export {};
