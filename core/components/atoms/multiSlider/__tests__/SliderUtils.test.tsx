import { countDecimalPlaces, argMin, arraysEqual, fillValues } from '../SliderUtils';

test('function countDecimalPlaces with respective value', () => {
  const value = 5.2;
  expect(countDecimalPlaces(value)).not.toBe(value);
});

test('function arrayEqual with respective args', () => {
  const oldValue = [1, 2, 3];
  const newValue = [4, 5, 6];
  expect(arraysEqual(oldValue, newValue));
});

test('function argMin with respective args', () => {
  const value = [1, 2, 3];
  expect(
    argMin(value, (a) => {
      return a;
    })
  );
});

test('function fillValues with respective args', () => {
  const value = [1, 2, 3];
  const startIndex = 1;
  const endIndex = 5;
  const fillValue = 3;
  expect(fillValues(value, startIndex, endIndex, fillValue));
});
