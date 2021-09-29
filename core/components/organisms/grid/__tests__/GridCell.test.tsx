import * as React from 'react';
import { render } from '@testing-library/react';
import { GridCell } from '@/index';

describe('renders GridCell with no cellType ', () => {
  it('renders Grid with  no cellType , loading true ', () => {
    const { queryByTestId } = render(
      <GridCell
        schema={{
          displayName: 'Name',
          name: 'name',
        }}
        data={{ name: 'Zara' }}
        loading={true}
      />
    );
    expect(queryByTestId('DesignSystem-GridCell-placeHolder')).toBeInTheDocument();
  });
  it('renders Grid with  no cellType , loading false ', () => {
    const { queryByTestId } = render(
      <GridCell
        schema={{
          displayName: 'Name',
          name: 'name',
        }}
        data={{ name: 'Zara' }}
      />
    );
    expect(queryByTestId('DesignSystem-Text')).toBeInTheDocument();
  });
});

describe('renders GridCell with cellType WITH_META_LIST', () => {
  it('renders Grid with loading true ', () => {
    const { getByTestId } = render(
      <GridCell
        schema={{
          displayName: 'Name',
          name: 'name',
          cellType: 'WITH_META_LIST',
        }}
        data={{ name: 'Zara' }}
        loading={true}
      />
    );
    expect(getByTestId('DesignSystem-GridCell-withMetaList')).toBeInTheDocument();
  });

  it('renders Grid with loading false', () => {
    const { queryByTestId } = render(
      <GridCell
        schema={{
          cellType: 'WITH_META_LIST',
          displayName: 'Name',
          name: 'name',
        }}
        data={{ name: { metaList: ['Meta Item 1'] } }}
      />
    );
    expect(queryByTestId('DesignSystem-GridCell-metaList')).toBeInTheDocument();
  });
});

describe('renders GridCell with cellType AVATAR', () => {
  it('renders Grid with loading true ', () => {
    const { queryByTestId } = render(
      <GridCell
        schema={{
          displayName: 'Name',
          name: 'name',
          cellType: 'AVATAR',
          align: 'right',
        }}
        data={{ name: 'Zara' }}
        loading={true}
      />
    );
    expect(queryByTestId('DesignSystem-Placeholder')).toBeInTheDocument();
    expect(queryByTestId('DesignSystem-Placeholder')).toHaveClass('GridCell--align-right');
  });

  it('renders Grid with loading false', () => {
    const { queryByTestId } = render(
      <GridCell
        schema={{
          cellType: 'AVATAR',
          displayName: 'Name',
          name: 'name',
        }}
        data={{ name: 'Zara' }}
      />
    );
    expect(queryByTestId('DesignSystem-GridCell-avatar')).toBeInTheDocument();
    expect(queryByTestId('DesignSystem-GridCell-avatar')).toHaveClass('GridCell--avatar');
  });
});

describe('renders GridCell with cellType AVATAR_WITH_TEXT', () => {
  it('renders Grid with loading true ', () => {
    const { queryByTestId } = render(
      <GridCell
        schema={{
          displayName: 'Name',
          name: 'name',
          cellType: 'AVATAR_WITH_TEXT',
        }}
        data={{ name: 'Zara' }}
        loading={true}
      />
    );
    expect(queryByTestId('DesignSystem-Placeholder')).toBeInTheDocument();
  });

  it('renders Grid with loading false', () => {
    const { queryByTestId } = render(
      <GridCell
        schema={{
          cellType: 'AVATAR_WITH_TEXT',
          displayName: 'Name',
          name: 'name',
        }}
        data={{ name: 'Zara' }}
      />
    );
    expect(queryByTestId('DesignSystem-GridCell-avatarWithText')).toBeInTheDocument();
  });
});
describe('renders GridCell with cellType AVATAR_WITH_META_LIST', () => {
  it('renders Grid with loading true ', () => {
    const { queryByTestId } = render(
      <GridCell
        schema={{
          displayName: 'Name',
          name: 'name',
          cellType: 'AVATAR_WITH_META_LIST',
        }}
        data={{ name: 'Zara' }}
        loading={true}
      />
    );
    expect(queryByTestId('DesignSystem-Placeholder')).toBeInTheDocument();
  });

  it('renders Grid with loading false', () => {
    const { queryByTestId } = render(
      <GridCell
        schema={{
          cellType: 'AVATAR_WITH_META_LIST',
          displayName: 'Name',
          name: 'name',
        }}
        data={{ name: 'Zara' }}
      />
    );
    expect(queryByTestId('DesignSystem-GridCell-avatarWithMetaList')).toBeInTheDocument();
    expect(queryByTestId('DesignSystem-GridCell-avatarWithMetaList')).toHaveClass('GridCell--avatarWithText');
  });
});
describe('renders GridCell with cellType ICON', () => {
  it('renders Grid with loading true ', () => {
    const { queryByTestId } = render(
      <GridCell
        schema={{
          displayName: 'Name',
          name: 'name',
          cellType: 'ICON',
        }}
        data={{ name: 'Zara' }}
        loading={true}
      />
    );
    expect(queryByTestId('DesignSystem-Placeholder')).toBeInTheDocument();
  });

  it('renders Grid with loading false', () => {
    const { queryByTestId } = render(
      <GridCell
        schema={{
          cellType: 'ICON',
          displayName: 'Name',
          name: 'name',
        }}
        data={{ name: 'Zara' }}
      />
    );
    expect(queryByTestId('DesignSystem-GridCell-icon')).toHaveClass('GridCell--icon');
  });
});
describe('renders GridCell with cellType STATUS_HINT', () => {
  it('renders Grid with loading true ', () => {
    const { queryByTestId } = render(
      <GridCell
        schema={{
          displayName: 'Name',
          name: 'name',
          cellType: 'STATUS_HINT',
        }}
        data={{ name: 'Zara' }}
        loading={true}
      />
    );
    expect(queryByTestId('DesignSystem-Placeholder')).toBeInTheDocument();
  });

  it('renders Grid with loading false', () => {
    const { queryByTestId } = render(
      <GridCell
        schema={{
          cellType: 'STATUS_HINT',
          displayName: 'Name',
          name: 'name',
        }}
        data={{ name: { statusAppearance: 'info', title: 'title' } }}
      />
    );
    expect(queryByTestId('DesignSystem-StatusHint')).toBeInTheDocument();
  });
});
