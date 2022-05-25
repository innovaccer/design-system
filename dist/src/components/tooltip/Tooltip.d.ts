import { PopoverProps } from "../../index.type";
import { BaseProps } from "../../utils/types";
export interface TooltipProps extends BaseProps {
    tooltip: string;
    children: PopoverProps['trigger'];
}
export declare const Tooltip: (props: TooltipProps) => JSX.Element;
export default Tooltip;
