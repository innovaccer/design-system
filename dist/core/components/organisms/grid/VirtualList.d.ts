import React from 'react';
import { BaseProps } from '@/utils/types';
export declare const isElementInView: (container: HTMLElement, element: Element) => boolean;
interface VirtualScrollProps extends BaseProps {
    buffer?: number;
    length?: number;
    offset?: number;
    minItemHeight: number;
    totalLength: number;
    renderItem: (index: number, item?: object) => React.ReactElement;
    onScroll?: (event: Event, element: HTMLElement) => void;
}
declare const VirtualList: (props: VirtualScrollProps) => React.JSX.Element;
export default VirtualList;
