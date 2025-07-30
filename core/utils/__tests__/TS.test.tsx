import * as React from 'react';
import * as DS from '../../index';
import { render } from '@testing-library/react';

const noop = () => {};
const string = 'Hello World!';
const dummyComp = <DS.Text>{string}</DS.Text>;

export const TS = () => {
  return (
    <>
      <DS.Avatar />
      <DS.AvatarGroup list={[]} />
      <DS.Backdrop open={false} />
      <DS.Badge>Badge</DS.Badge>
      <DS.Breadcrumbs list={[]} onClick={noop} />
      <DS.Button />
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
      <DS.Icon name={string} />
      <DS.Input />
      <DS.InputMask mask={[]} />
      <DS.Label>{string}</DS.Label>
      <DS.Caption>{string}</DS.Caption>
      <DS.Legend>{string}</DS.Legend>
      <DS.Link>{string}</DS.Link>
      <DS.Message>{string}</DS.Message>
      <DS.MetaList list={[]} />
      <DS.OutsideClick onOutsideClick={noop}>{dummyComp}</DS.OutsideClick>
      <DS.Paragraph appearance="default">{string}</DS.Paragraph>
      <DS.ProgressBar value={0} />
      <DS.Radio name={string} value={string} />
      <DS.Row />
      <DS.StatusHint>{string}</DS.StatusHint>
      <DS.Pills>{string}</DS.Pills>
      <DS.Spinner />
      <DS.Slider />
      <DS.RangeSlider />
      <DS.Subheading appearance="default">{string}</DS.Subheading>
      <DS.Switch />
      <DS.Text>{string}</DS.Text>
      <DS.Textarea />
      <DS.Toast title={string} />
      <DS.Tooltip tooltip={string}>{dummyComp}</DS.Tooltip>
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
      <DS.Popover trigger={dummyComp}>{dummyComp}</DS.Popover>
      <DS.Stepper steps={[]} />
      <DS.DateRangePicker />
      <DS.TabsWrapper>{dummyComp}</DS.TabsWrapper>
      <DS.Tab label={dummyComp} />
      <DS.Grid totalRecords={50} />
      <DS.List />
      <DS.Table />
      <DS.Navigation menus={[]} />
      <DS.PageHeader title={string} />
      <DS.EditableChipInput placeholder="" />
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
