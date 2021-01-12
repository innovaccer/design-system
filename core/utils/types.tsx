export type SingleOrArray<T> = T | T[];

export type MakeOptional<T extends {}, K extends keyof any> = Omit<T, K> & {
  [OK in keyof T & K]?: T[OK]
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
  className?: string,
  /**
   * Stores custom testing data private to the component.
   */
  'data-test'?: string,
};

export type BaseHtmlProps<T> = Omit<React.HTMLProps<T>, 'ref' | 'size'>;

export const extractBaseProps = (props: Record<string, any>) => {
  const baseProps = ['className', 'data-test'];
  const basePropsObj = baseProps.reduce((acc, curr) => {
    return (
      props[curr] ? { ...acc, [curr]: props[curr] } : { ...acc }
    );
  }, {});

  return basePropsObj;
};
