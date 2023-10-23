import { PopoverProps } from "../../../index.type";
import { BaseProps } from "../../../utils/types";
declare const tooltipPropsList: readonly ["trigger", "on", "open", "offset", "onToggle", "dark", "customStyle", "closeOnBackdropClick", "hideOnReferenceEscape", "closeOnScroll"];
declare type TooltipPopperProps = typeof tooltipPropsList[number];
export interface TooltipProps extends Omit<PopoverProps, TooltipPopperProps>, BaseProps {
    tooltip: string;
    children: PopoverProps['trigger'];
}
export declare const Tooltip: {
    (props: TooltipProps): JSX.Element;
    defaultProps: Record<string, any> & {
        hoverable: boolean;
    };
};
export default Tooltip;
