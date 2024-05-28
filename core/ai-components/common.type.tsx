/* Button Component Types */
export type TButtonAppearance = 'primary' | 'basic';
export type TButtonType = 'button' | 'submit' | 'reset';

/* Icon Button Component Types */
export type TIconPosition = 'top' | 'bottom';

/* Sizes Types */
export type TSize2Hierarchy = 'regular' | 'large';
export type TSize3Hierarchy = 'regular' | 'medium' | 'large';
export type TSize4Hierarchy = 'tiny' | 'regular' | 'medium' | 'large';

/* Layout Types */
export type TArrangement = 'horizontal' | 'vertical';

/* Animation States */
export type TSaraStates = 'default' | 'resting';
export type TSaraSparkleStates = 'default' | 'listening' | 'short-processing' | 'long-processing';
export type TProgressIndicatorStates = 'listening' | 'short-processing' | 'long-processing';

/* Generic Type */
export type TBaseHtmlProps<T> = Omit<React.HTMLProps<T>, ''>;
