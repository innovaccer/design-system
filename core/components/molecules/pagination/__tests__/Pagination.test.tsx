import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Pagination, { PaginationProps as Props } from '../Pagination';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const pageNumber = 10;
const totalPages = 50;
const pageJumpDebounceDuration = 750;
const paginationType = ['basic', 'jump'];
const FunctionValue = jest.fn();

const inputTestId = 'DesignSystem-Pagination--Input';
jest.useFakeTimers();

describe('Pagination component', () => {
  const mapper: Record<string, any> = {
    type: valueHelper(paginationType, { required: true, iterate: true }),
    page: valueHelper(pageNumber, { required: true }),
    totalPages: valueHelper(totalPages, { required: true }),
    onPageChange: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { asFragment } = render(<Pagination {...attr} />);
      expect(asFragment()).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Pagination component with props: page and onPageChange', () => {
  it('should render currentPage initially', () => {
    const { getByTestId } = render(
      <Pagination totalPages={totalPages} onPageChange={FunctionValue} type="jump" page={pageNumber} />
    );

    expect(getByTestId(inputTestId)).toHaveValue(pageNumber);
  });

  it('should render correct total page count', () => {
    const { getByTestId } = render(
      <Pagination page={pageNumber} totalPages={totalPages} type="jump" onPageChange={FunctionValue} />
    );

    expect(getByTestId('DesignSystem-Pagination').textContent).toMatch(`${totalPages}`);
  });

  it('render page due to Input change', () => {
    const updatedPage = 15;
    const { getByTestId } = render(
      <Pagination
        page={pageNumber}
        totalPages={totalPages}
        type="jump"
        pageJumpDebounceDuration={pageJumpDebounceDuration}
        onPageChange={FunctionValue}
      />
    );

    const input = getByTestId(inputTestId);

    fireEvent.change(input, { target: { value: updatedPage } });
    jest.advanceTimersByTime(pageJumpDebounceDuration);
    expect(getByTestId(inputTestId)).toHaveValue(updatedPage);
    expect(FunctionValue).toHaveBeenCalledWith(updatedPage);

    fireEvent.change(input, { target: { value: 0 } });
    jest.advanceTimersByTime(pageJumpDebounceDuration);
    expect(getByTestId(inputTestId)).not.toHaveValue(0);

    fireEvent.change(input, { target: { value: 0.1 } });
    expect(getByTestId(inputTestId)).toHaveValue(null);

    fireEvent.change(input, { target: { value: totalPages + 1 } });
    jest.advanceTimersByTime(pageJumpDebounceDuration);
    expect(getByTestId(inputTestId)).not.toHaveValue(totalPages + 1);
  });

  it('current page should be incremented on click of next button', () => {
    const { getByTestId } = render(
      <Pagination page={pageNumber} totalPages={totalPages} type="jump" onPageChange={FunctionValue} />
    );

    const nextButton = getByTestId('DesignSystem-Pagination--NextButton');
    fireEvent.click(nextButton);
    jest.advanceTimersByTime(pageJumpDebounceDuration);
    expect(getByTestId(inputTestId)).toHaveValue(pageNumber + 1);
    expect(FunctionValue).toHaveBeenCalledWith(pageNumber + 1);
  });

  it('current page should be decremented on click of previous button', () => {
    const { getByTestId } = render(
      <Pagination page={pageNumber} totalPages={totalPages} type="jump" onPageChange={FunctionValue} />
    );

    const prevButton = getByTestId('DesignSystem-Pagination--PrevButton');
    fireEvent.click(prevButton);
    jest.advanceTimersByTime(pageJumpDebounceDuration);
    expect(getByTestId(inputTestId)).toHaveValue(pageNumber - 1);
    expect(FunctionValue).toHaveBeenCalledWith(pageNumber - 1);
  });

  it('current page should be last page number when clicked on last page icon', () => {
    const { getByTestId } = render(
      <Pagination page={pageNumber} totalPages={totalPages} type="jump" onPageChange={FunctionValue} />
    );

    const lastButton = getByTestId('DesignSystem-Pagination--LastButton');
    fireEvent.click(lastButton);
    jest.advanceTimersByTime(pageJumpDebounceDuration);
    expect(getByTestId(inputTestId)).toHaveValue(totalPages);
    expect(FunctionValue).toHaveBeenCalledWith(totalPages);
  });

  it('current page should be first page when clicked on first page icon', () => {
    const { getByTestId } = render(
      <Pagination page={pageNumber} totalPages={totalPages} type="jump" onPageChange={FunctionValue} />
    );

    const firstButton = getByTestId('DesignSystem-Pagination--FirstButton');
    fireEvent.click(firstButton);
    jest.advanceTimersByTime(pageJumpDebounceDuration);
    expect(getByTestId(inputTestId)).toHaveValue(1);
    expect(FunctionValue).toHaveBeenCalledWith(1);
  });

  it('current page should be first page if page no. is 1 and previous button is clicked', () => {
    const pageValue = 1;

    const { getByTestId } = render(
      <Pagination page={pageValue} totalPages={totalPages} type="jump" onPageChange={FunctionValue} />
    );

    const prevButton = getByTestId('DesignSystem-Pagination--PrevButton');
    fireEvent.click(prevButton);
    jest.advanceTimersByTime(pageJumpDebounceDuration);
    expect(getByTestId(inputTestId)).toHaveValue(pageValue);
    expect(getByTestId('DesignSystem-Pagination--FirstButton')).toHaveAttribute('disabled');
    expect(getByTestId('DesignSystem-Pagination--PrevButton')).toHaveAttribute('disabled');
  });

  it('current page should be last page even if page >= totalPage', () => {
    const pageValue = totalPages;

    const { getByTestId } = render(
      <Pagination page={pageValue} totalPages={totalPages} type="jump" onPageChange={FunctionValue} />
    );

    const nextButton = getByTestId('DesignSystem-Pagination--NextButton');
    fireEvent.click(nextButton);

    expect(getByTestId(inputTestId)).toHaveValue(pageValue);
    expect(getByTestId('DesignSystem-Pagination--LastButton')).toHaveAttribute('disabled');
    expect(getByTestId('DesignSystem-Pagination--NextButton')).toHaveAttribute('disabled');
  });

  it('should update current page on change of prop: page', () => {
    const updatedPage = 20;

    const { getByTestId, rerender } = render(
      <Pagination page={pageNumber} totalPages={totalPages} type="jump" onPageChange={FunctionValue} />
    );

    expect(getByTestId(inputTestId)).toHaveValue(pageNumber);

    rerender(<Pagination page={updatedPage} totalPages={totalPages} type="jump" onPageChange={FunctionValue} />);

    expect(getByTestId(inputTestId)).toHaveValue(updatedPage);
  });
});

describe('Pagination component with prop: type', () => {
  it('renders default prop: type', () => {
    const { getByTestId } = render(<Pagination totalPages={totalPages} onPageChange={FunctionValue} />);

    expect(getByTestId('DesignSystem-Pagination')).toHaveClass('Pagination--basic');
    expect(getByTestId('DesignSystem-Pagination--PrevButton')).toHaveClass('ml-4 mr-3');
    expect(getByTestId('DesignSystem-Pagination').textContent).not.toMatch(`${totalPages}`);
  });

  it('renders default prop: type', () => {
    const { getByTestId } = render(<Pagination totalPages={totalPages} onPageChange={FunctionValue} type="jump" />);

    expect(getByTestId('DesignSystem-Pagination')).toHaveClass('Pagination--jump');
    expect(getByTestId('DesignSystem-Pagination--NextButton')).toHaveClass('mr-4 ml-3');
  });
});

describe('Pagination Component with overwrite class', () => {
  const className = 'DS-Pagination';

  it('overwrite Pagination class', () => {
    const { getByTestId } = render(
      <Pagination className={className} totalPages={totalPages} onPageChange={FunctionValue} />
    );
    expect(getByTestId('DesignSystem-Pagination')).toHaveClass(className);
  });
});
