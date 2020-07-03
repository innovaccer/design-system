/// <reference types="react" />
import Grid, { Schema } from './Grid';
import { BaseProps } from '@/utils/types';
interface MainGridProps extends BaseProps {
    _this: Grid;
    schema: Schema;
}
export declare const MainGrid: (props: MainGridProps) => JSX.Element;
export default MainGrid;
