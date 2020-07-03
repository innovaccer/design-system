export type BaseProps = {
  className?: string,
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
