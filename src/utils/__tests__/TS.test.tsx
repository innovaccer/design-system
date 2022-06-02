import * as React from 'react';
import * as DS from '../../index';
import { render } from '@testing-library/react';

// const noop = () => {};
const string = 'Hello World!';
const dummyComp = <DS.Text>{string}</DS.Text>;

export const TS = () => {
  return (
    <>
      <DS.Avatar />
      <DS.Badge>Badge</DS.Badge>
      <DS.Bold>{string}</DS.Bold>
      <DS.Button />
      <DS.Italic>{string}</DS.Italic>
      <DS.Link>{string}</DS.Link>
      <DS.Paragraph>{string}</DS.Paragraph>
      <DS.Pills>{string}</DS.Pills>
      <DS.Popover trigger={dummyComp}>{dummyComp}</DS.Popover>
      <DS.Strikethrough>{string}</DS.Strikethrough>
      <DS.Underline>{string}</DS.Underline>
      <DS.Tooltip text={string}>{dummyComp}</DS.Tooltip>
      <DS.Icon>{string}</DS.Icon>
      {/* <DS.AvatarGroup list={[]} />
      <DS.Backdrop open={false} />
      <DS.Breadcrumbs list={[]} onClick={noop} />
      <DS.Card>{dummyComp}</DS.Card>
      <DS.Chip name={string} label={string} />
      <DS.ChipGroup list={[]} />
      <DS.Checkbox />
      <DS.Column />
      <DS.DatePicker />
      <DS.Dropdown />
      <DS.EditableDropdown />
      <DS.EditableInput />
      <DS.Heading>{string}</DS.Heading>
      <DS.Input />
      <DS.InputMask mask={[]} />
      <DS.Label>{string}</DS.Label>
      <DS.Caption>{string}</DS.Caption>
      <DS.Legend>{string}</DS.Legend>
      <DS.Link>{string}</DS.Link>
      <DS.Message>{string}</DS.Message>
      <DS.MetaList list={[]} />
      <DS.OutsideClick onOutsideClick={noop}>{dummyComp}</DS.OutsideClick>
      <DS.ProgressBar value={0} />
      <DS.Radio name={string} value={string} />
      <DS.Row />
      <DS.StatusHint>{string}</DS.StatusHint>
      <DS.Spinner />
      <DS.Slider />
      <DS.RangeSlider />
      <DS.Subheading>{string}</DS.Subheading>
      <DS.Switch />
      <DS.Text>{string}</DS.Text>
      <DS.Textarea />
      <DS.Toast title={string} />
      <DS.Dialog
        open={false}
        onClose={noop}
        heading={string}
        primaryButtonLabel={string}
        primaryButtonCallback={noop}
        secondaryButtonLabel={string}
        secondaryButtonCallback={noop}
      />
      <DS.Modal open={false} />
      <DS.ModalHeader heading={string} onClose={noop} />
      <DS.ModalFooter>{dummyComp}</DS.ModalFooter>
      <DS.ModalBody>{dummyComp}</DS.ModalBody>
      <DS.ModalDescription />
      <DS.Pagination onPageChange={noop} />
      <DS.Placeholder />
      <DS.PlaceholderParagraph />
      <DS.ProgressRing value={0} />
      <DS.Stepper steps={[]} />
      <DS.DateRangePicker />
      <DS.TabsWrapper>{dummyComp}</DS.TabsWrapper>
      <DS.Tab label={dummyComp} />
      <DS.Grid totalRecords={50} />
      <DS.List />
      <DS.Table />
      <DS.Navigation menus={[]} />
      <DS.PageHeader title={string} />
      <DS.EditableChipInput placeholder="" /> */}
    </>
  );
};

beforeAll(() => {
  Date.now = () => new Date('2021-06-14').getTime();
});

describe('TS', () => {
  it('renders children', () => {
    const { asFragment } = render(TS());
    expect(asFragment()).toMatchSnapshot();
  });
});
