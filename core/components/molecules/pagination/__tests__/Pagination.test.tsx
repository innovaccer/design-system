import * as React from 'react';
import { shallow } from 'enzyme';
import Pagination, { IPaginationProps as IProps } from '../Pagination';
import { TestHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/TestHelper';

const PageNumber = [1, 5, 10, 15];
const TotalPages = 50;
const PaginationType = ['basic', 'jump'];
const FunctionValue = jest.fn();

const Mapper: Record<string, any> = {
  type: valueHelper(PaginationType, { iterate: true }),
  page: valueHelper(PageNumber, { iterate: true }),
  totalPages: valueHelper(TotalPages, { required: true }),
  onPageChange: valueHelper(FunctionValue, { required: true }),
};

describe('Pagination component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as IProps;

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

  TestHelper(Mapper, testFunc);
});
