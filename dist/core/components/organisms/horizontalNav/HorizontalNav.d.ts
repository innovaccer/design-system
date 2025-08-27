import * as React from 'react';
import { VerticalNavProps } from '@/index.type';
import { BaseProps } from '@/utils/types';
export type HorizontalNavProps = BaseProps & Pick<VerticalNavProps, 'menus' | 'active' | 'onClick'>;
export type Align = 'left' | 'center';
export declare const HorizontalNav: (props: HorizontalNavProps) => React.JSX.Element;
export default HorizontalNav;
