import * as React from 'react';
import { shallow } from 'enzyme';
import Pagination, { PaginationProps as Props } from '../Pagination';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const pageNumber = [-1, 0, 1, 5, 10, 11];
const totalPages = 10;
const paginationType = ['basic', 'jump'];
const FunctionValue = jest.fn();

const mapper: Record<string, any> = {
  type: valueHelper(paginationType, { required: true, iterate: true }),
  page: valueHelper(pageNumber, { required: true, iterate: true }),
  totalPages: valueHelper(totalPages, { required: true }),
  onPageChange: valueHelper(FunctionValue, { required: true }),
};

describe('Pagination component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Pagination
          {...attr}
          totalPages={10}
          onPageChange={jest.fn()}
        />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
