export const formatPercentage = (ratio: number) => {
  return `${(ratio * 100).toFixed(2)}%`;
};

export const countDecimalPlaces = (value: number) => {
  if (!isFinite(value)) return 0;

  if (Math.floor(value) !== value) {
    const valueArray = value.toString().split('.');
    return valueArray[1].length || 0;
  }

  return 0;
};

export const approxEqual = (a: number, b: number) => {
  const tolerance = 0.00001;
  return Math.abs(a - b) <= tolerance;
};

export const clamp = (value: number, min: number, max: number) => {
  if (value == null) {
    return value;
  }

  return Math.min(Math.max(value, min), max);
};

export const arraysEqual = (oldValues: number[], newValues: number[]) => {
  if (oldValues.length !== oldValues.length) return;

  return newValues.every((value, index) => value === oldValues[index]);
};

export function argMin<T>(values: T[], argFn: (value: T) => any): T | undefined {
  if (values.length === 0) {
    return undefined;
  }

  let minValue = values[0];
  let minArg = argFn(minValue);

  for (let index = 1; index < values.length; index++) {
    const value = values[index];
    const arg = argFn(value);
    if (arg < minArg) {
      minValue = value;
      minArg = arg;
    }
  }

  return minValue;
}

export function fillValues<T>(values: T[], startIndex: number, endIndex: number, fillValue: T) {
  const inc = startIndex < endIndex ? 1 : -1;
  for (let index = startIndex; index !== endIndex + inc; index += inc) {
    values[index] = fillValue;
  }
}

export function isElementOfType(element: React.ReactElement) {
  return element != null && element.type != null;
}
