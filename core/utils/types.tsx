export type SingleOrArray<T> = T | T[];

export type MakeRequired<T> = Exclude<T, null | undefined>;

export type MakeOptional<T extends object, K extends keyof any> = Omit<T, K> & {
  [OK in keyof T & K]?: T[OK];
};

type ValidatorFn<K extends any[] = any[]> = (...values: K) => boolean;
export type Validators = SingleOrArray<ValidatorFn>;

export type Mask = (string | RegExp)[];

// export type DefaultProps<T> = T extends { defaultProps: any }
//   ? T['defaultProps']
//   : {};
// export type Props<T, U> = Omit<T, keyof U> & {
//   [P in keyof T & keyof U]?: T[P];
// };

export type BaseProps = {
  /**
   * Adds custom class
   */
  className?: string;
  /**
   * Stores custom testing data private to the component.
   */
  'data-test'?: string;
};

export type DecorativeProps = BaseProps & {
  /**
   * Set `true` to hide the element from assistive technology.
   * Use for decorative or redundant content.
   */
  'aria-hidden'?: boolean | 'true' | 'false';
  /**
   * ARIA role for the element. Use `"none"` or `"presentation"`
   * to mark decorative elements.
   */
  role?: string;
};

export type BaseHtmlProps<T> = Omit<React.HTMLProps<T>, 'ref' | 'size' | 'className'>;
export type OmitNativeProps<T, K extends keyof any> = Omit<BaseHtmlProps<T>, K>;

export const extractBaseProps = (props: Record<string, any>) => {
  const basePropsObj: Record<string, any> = {};

  // Original base props — preserve truthiness check for backward compatibility
  if (props.className) basePropsObj.className = props.className;
  if (props['data-test']) basePropsObj['data-test'] = props['data-test'];

  // Decorative props — use null check so explicit `false` (aria-hidden={false}) is forwarded
  if (props['aria-hidden'] != null) basePropsObj['aria-hidden'] = props['aria-hidden'];
  if (props.role != null) basePropsObj.role = props.role;

  return basePropsObj;
};

export const filterProps = (
  props: Record<string, any>,
  propsList: ReadonlyArray<string>,
  include?: boolean
): Record<string, any> =>
  Object.entries(props)
    .filter((obj) => (include ? propsList.includes(obj[0]) : !propsList.includes(obj[0])))
    .reduce((acc: Record<string, any>, curr) => {
      acc[curr[0]] = curr[1];
      return acc;
    }, {});
