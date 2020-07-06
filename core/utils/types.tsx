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
