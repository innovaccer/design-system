import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Breadcrumbs from '../Breadcrumbs';

const list = [
  {
    label: 'Level 0 check for truncate after 160px',
    link: '/level0',
  },
  {
    label: 'Level 1',
    link: '/level1',
  },
  {
    label: 'Level 2',
    link: '/level2',
  },
  {
    label: 'Level 3',
    link: '/level3',
  },
];

const onClick = jest.fn();

describe('Breadcrumbs component', () => {
  it('renders empty breadcrumbs', () => {
    const { getByTestId, baseElement } = render(<Breadcrumbs list={[]} onClick={onClick} />);
    expect(getByTestId('DesignSystem-Breadcrumbs')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Breadcrumbs')).toBeEmptyDOMElement();
    expect(baseElement).toMatchSnapshot();
  });
});

describe('Breadcrumbs component', () => {
  it('renders four links', () => {
    const { getAllByTestId, baseElement } = render(<Breadcrumbs list={list} onClick={onClick} />);
    expect(getAllByTestId('DesignSystem-Breadcrumbs-item').length).toEqual(4);
    expect(baseElement).toMatchSnapshot();
  });
});

describe('Breadcrumbs component', () => {
  it('renders more than four links', () => {
    const { getAllByTestId, getByTestId } = render(
      <Breadcrumbs
        list={[
          ...list,
          {
            label: 'Level 4',
            link: '/level4',
          },
        ]}
        onClick={onClick}
      />
    );
    expect(getAllByTestId('DesignSystem-Breadcrumbs-item').length).toEqual(2);
    expect(getByTestId('DesignSystem-Breadcrumbs--Button')).toBeInTheDocument();
    fireEvent.click(getByTestId('DesignSystem-Breadcrumbs--Button'));
    expect(getAllByTestId('DesignSystem-DropdownOption--DEFAULT').length).toEqual(3);
  });
});

describe('Breadcrumbs component', () => {
  it('on click is fired with current link', () => {
    const { getAllByTestId } = render(<Breadcrumbs list={list} onClick={onClick} />);
    const links = getAllByTestId('DesignSystem-Breadcrumbs-link');

    links.forEach((link, index) => {
      fireEvent.click(link);
      expect(onClick).toBeCalledWith(list[index].link);
    });
  });
});

describe('Breadcrumbs component', () => {
  it('renders with custom className', () => {
    const { getByTestId, baseElement } = render(
      <Breadcrumbs list={[]} onClick={onClick} className="My-custom-style" />
    );
    expect(getByTestId('DesignSystem-Breadcrumbs')).toHaveClass('My-custom-style');
    expect(baseElement).toMatchSnapshot();
  });
});

describe('Breadcrumbs component', () => {
  it('renders with truncate after 160px', () => {
    const { getAllByTestId } = render(<Breadcrumbs list={list} onClick={onClick} />);
    expect(getAllByTestId('DesignSystem-Breadcrumbs-link')[0]).toHaveClass('ellipsis--noWrap');
  });
});

describe('Breadcrumbs component with Tooltip', () => {
  it('check for prop showTooltip:true', () => {
    const { getAllByTestId } = render(<Breadcrumbs list={list} onClick={onClick} showTooltip={true} />);

    fireEvent.mouseEnter(getAllByTestId('DesignSystem-Breadcrumbs-link')[0]);
    const tooltip = getAllByTestId('DesignSystem-Popover')[0].firstChild;
    expect(tooltip).toHaveClass('Tooltip');
  });
});
