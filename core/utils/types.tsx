export type SingleOrArray<T> = T | T[];

export type MakeOptional<T extends {}, K extends keyof any> = Omit<T, K> & {
  [OK in keyof T & K]?: T[OK]
};

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

const baseProps = [
  'className',
  'data-test'
];

export const extractBaseProps = (props: Record<string, any>) => {
  const basePropsObj = baseProps.reduce((acc, curr) => {
    return (
      props[curr] ? { ...acc, [curr]: props[curr] } : { ...acc }
    );
  }, {});

  return basePropsObj;
};
