import * as React from 'react';

interface IValueHelper {
  required?: boolean;
  iterate?: boolean;
  maxLen?: number;
}

const isMapper = (value: any) => typeof value === 'object' && !Array.isArray(value) && !React.isValidElement(value);

const filterRequired = (props: Record<string, any>) =>
  Object.keys(props).reduce(
    (out, curr) => {
      if (props[curr].required) out.required[curr] = props[curr];
      else {
        out.optional[curr] = props[curr];
      }
      return out;
    },
    { required: {}, optional: {} } as Record<string, any>
  );

const iterateComb = (
  requiredComb: Record<string, any>[],
  optionalComb: Record<string, any>[],
  testFunc?: (props: Record<string, any>) => void
): Record<string, any>[] => {
  const combinations: Record<string, any>[] = [];

  requiredComb.forEach((reqProps) => {
    optionalComb.forEach((optProps) => {
      const allProps = { ...reqProps, ...optProps };
      if (testFunc) testFunc(allProps);
      else combinations.push(allProps);
    });
  });

  return combinations;
};

const getCombinations = (Props: Record<string, any>): Record<string, any>[] => {
  const combinations: Record<string, any>[] = [];
  const propNames = Object.keys(Props);

  const iterateProps = (curr: Record<string, any> = {}, propIndex = 0): void => {
    const iterateValues = (propValues: any[]) => {
      for (const propValue of propValues) {
        if (isMapper(propValue)) {
          const propComb = iterateMapper(propValue);
          for (const propVal of propComb as Record<string, any>[]) {
            currProps[propName] = propVal;
            iterateProps(currProps, propIndex + 1);
          }
        } else {
          currProps[propName] = propValue;
          iterateProps(currProps, propIndex + 1);
        }
      }
    };

    const currProps = { ...curr };

    if (propIndex === propNames.length) {
      combinations.push(currProps);
      return;
    }

    const propName = propNames[propIndex];
    const propValue = Props[propName].value;
    if (Props[propName].iterate) {
      iterateValues(propValue);
    } else {
      currProps[propName] = propValue;
      iterateProps(currProps, propIndex + 1);
    }
  };

  if (propNames.length) iterateProps(Props);
  return combinations.length ? combinations : [{}];
};

const iterateMapper = (
  Mapper: Record<string, any>,
  testFunc?: (props: Record<string, any>) => void
): Record<string, any>[] | void => {
  Mapper = filterRequired(Mapper);
  const requiredComb = getCombinations(Mapper.required);
  const optionalComb = getCombinations(Mapper.optional);
  if (!testFunc) {
    const allComb = iterateComb(requiredComb, optionalComb);
    return allComb;
  } else {
    iterateComb(requiredComb, optionalComb, testFunc);
  }
};

export const testHelper = (Mapper: Record<string, any>, testFunc: (props: Record<string, any>) => void): void => {
  iterateMapper(Mapper, testFunc);
};

export const filterUndefined = (props: Record<string, any>) =>
  Object.keys(props)
    .filter((prop) => props[prop] !== undefined)
    .reduce((out: Record<string, any>, curr) => {
      out[curr] = props[curr];
      return out;
    }, {});

export const valueHelper = (props: any, options: IValueHelper = {}): Record<string, any> => {
  const { required, iterate } = options;
  if (!required) props = [undefined, ...props];
  return { required, iterate, value: props };
};

export const arrayHelper = (props: any[], options: IValueHelper = {}) => {
  const { maxLen = props.length } = options;

  const generateComb = () => {
    const combinations: any[] = [];
    const iterate = (i: number, curr: any[] = []) => {
      if (isMapper(props[i])) {
        const propValues = iterateMapper(props[i]) as Record<string, any>[];
        propValues.forEach((propValue) => {
          const newCurr = [...curr, propValue];
          combinations.push(newCurr);
          if (i < maxLen - 1) iterate(i + 1, newCurr);
        });
      } else {
        const newCurr = [...curr, props[i]];
        combinations.push(newCurr);
        if (i < maxLen - 1) iterate(i + 1, newCurr);
      }
    };
    for (let i = 0; i < props.length; i++) {
      iterate(i);
    }
    return combinations;
  };

  return valueHelper(generateComb(), { iterate: true });
};

export const testMessageHelper = (attr: Record<string, any>) => `
  ${Object.keys(attr)
    .map((k) => `${k}: ${JSON.stringify(attr[k], JSONStringifyHelper)}`)
    .join(', ')}
`;

export const JSONStringifyHelper = (_key: string, value: any) => {
  if (typeof value === 'function') return '[Function]';
  if (React.isValidElement(value)) return '[ReactNode]';
  return value;
};
