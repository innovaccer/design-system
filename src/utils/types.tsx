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

export type BaseHtmlProps<T> = Omit<React.HTMLProps<T>, 'ref' | 'size' | 'className'>;
export type OmitNativeProps<T, K extends keyof any> = Omit<BaseHtmlProps<T>, K>;

export const extractBaseProps = (props: Record<string, any>) => {
  const baseProps = ['className', 'data-test'];
  const basePropsObj = baseProps.reduce((acc, curr) => {
    return props[curr] ? { ...acc, [curr]: props[curr] } : { ...acc };
  }, {});

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
