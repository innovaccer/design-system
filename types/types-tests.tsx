import * as React from 'react';
import {
  Avatar,
  AvatarGroup,
  Backdrop,
  Badge,
  Breadcrumbs,
  Button,
  Calendar,
  Caption,
  Card,
  CardSubdued,
  CardHeader,
  CardBody,
  CardFooter,
  Chip,
  Checkbox,
  Column,
  DatePicker,
  Dropdown,
  EditableDropdown,
  TimePicker,
  MultiSlider,
  Heading,
  Icon,
  Input,
  InputMask,
  Label,
  Link,
  Legend,
  MetaList,
  MetricInput,
  Message,
  Paragraph,
  Radio,
  Row,
  Text,
  OutsideClick,
  ProgressBar,
  StatusHint,
  Pills,
  Spinner,
  Slider,
  RangeSlider,
  Subheading,
  Switch,
  Textarea,
  Toast,
  Popover,
  ChipInput,
  VerticalNav,
  HorizontalNav,
  Tooltip,
  Dialog,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalDescription,
  FullscreenModal,
  Sidesheet,
  Collapsible,
  ChatMessage,
  EmptyState,
  Pagination,
  PlaceholderParagraph,
  Placeholder,
  EditableInput,
  ProgressRing,
  Stepper,
  DateRangePicker,
  TabsWrapper,
  Tab,
  Dropzone,
  FileUploader,
  FileUploaderList,
  Grid,
  GridCell,
  Table,
  List,
  InlineMessage,
  ChoiceList,
} from './index';

// $ExpectType Element
<Avatar className="mr-5" firstName="firstName" lastName="lastName" />;

// $ExpectError Property 'age' does not exist on type
<Avatar className="mr-5" firstName="firstName" lastName="lastName" age="d" />;

// $ExpectType Element
<AvatarGroup
  list={[
    {
      firstName: 'John',
      lastName: 'Doe',
    },
  ]}
  max={1}
  popoverOptions={{ on: 'click', dark: false }}
/>;

// $ExpectType Element
<Backdrop className="BackdropClass" open={false} zIndex={1000} />;

// $ExpectType Element
<Badge appearance="alert" subtle={false}>
  {'Failed'}
</Badge>;

// $ExpectError Type 'string' is not assignable to type 'boolean | undefined'.
<Badge appearance="alert" subtle={''}>
  {'Failed'}
</Badge>;

// $ExpectType Element
<Breadcrumbs list={[]} onClick={() => console.log('')} className="My-custom-style" />;

// $ExpectError Type '{}' is missing the following properties from type 'Breadcrumb': label, link
<Breadcrumbs list={[{}]} className="My-custom-style" />;

// $ExpectType Element
<Button appearance="primary" icon="get_app" iconAlign="left" size="regular" className="mr-2">
  Download
</Button>;

// $ExpectError Type '"small"' is not assignable to type '"regular" | "tiny" | "large" | undefined'.
<Button appearance="primary" icon="get_app" iconAlign="left" size="small" className="mr-2">
  Download
</Button>;

// $ExpectType Element
<Calendar
  date={new Date(2020, 2, 15)}
  disabledBefore={new Date(2020, 2, 10)}
  disabledAfter={new Date(2021, 2, 20)}
  size={'large'}
  view="year"
  events={{ '09/12/2021': true }}
  onDateChange={() => {}}
  rangePicker={true}
  jumpView={true}
/>;

<Calendar
  // $ExpectError Type 'string' is not assignable to type 'Date | undefined'.
  date={''}
  disabledBefore={new Date(2020, 2, 10)}
  size={'large'}
  view="year"
  events={{ '09/12/2021': true }}
  onDateChange={() => {}}
/>;

// $ExpectType Element
<Card shadow="none" className="w-50" style={{ height: '250px' }}>
  <CardHeader className="CardHeaderClass">
    <Heading size="s" appearance={'disabled'} className="mb-7">
      Daily progress
    </Heading>
  </CardHeader>
  <CardBody className="CardBodyClass">
    <Paragraph>campaign starts</Paragraph>
    <Row>
      <Column size="12" className="pt-4">
        <Radio label="Send now" name="gender" value="Checkbox" defaultChecked={true} />
        <Text weight="strong" small={true} appearance="disabled" className="ml-7">
          Campaign will start immediately
        </Text>
      </Column>
      <Column size="12" className="py-4" sizeXS={'12'} sizeXL="4" sizeM="4">
        <Radio label="Schedule for later" name="gender" value="Checkbox" />
        <Text small={true} appearance="disabled" className="ml-7">
          Campaign will not start immediately
        </Text>
      </Column>
    </Row>
  </CardBody>
  <CardSubdued border="top" className="ml-7">
    Subdued section.
  </CardSubdued>
  <CardFooter withSeperator={false} className="justify-content-end">
    <Button appearance="primary" className="ml-4">
      Submit
    </Button>
  </CardFooter>
</Card>;

// $ExpectError Type '"red"' is not assignable to type '"dark" | "default" | "none" | "light" | "medium" | undefined'.
<Card shadow="red" className="w-50" style={{ height: '250px' }}>
  <div className="p-8" />
</Card>;

// $ExpectError Type 'string' is not assignable to type 'boolean | undefined'.
<CardFooter withSeperator={''} className="justify-content-end">
  Card footer
</CardFooter>;

// $ExpectType Element
<Chip
  icon="icon"
  label="First Name"
  clearButton={false}
  disabled={false}
  type="action"
  name={'chip'}
  onClick={() => {}}
  onClose={() => {}}
  selected={false}
/>;

<Chip
  icon="icon"
  label="First Name"
  clearButton={false}
  disabled={false}
  type="action"
  // $ExpectError Type 'null' is not assignable to type 'ReactText'.
  name={null}
  onClick={() => {}}
  onClose={() => {}}
  selected={false}
/>;

// $ExpectType Element
<Checkbox
  defaultChecked={true}
  helpText={'help text'}
  indeterminate={true}
  label="Innovaccer"
  value="Innovaccer"
  className="mt-5"
  onChange={() => {}}
/>;

// $ExpectError Type 'number' is not assignable to type 'string | undefined'.
<Checkbox helpText={1} indeterminate={true} label="Innovaccer" value="Innovaccer" onChange={() => {}} />;

// $ExpectError Type '"20"' is not assignable to type '1 | 8 | 2 | 10 | "auto" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | 3 | 4 | 5 | 6 | 7 | 9 | 11 | 12 | undefined'.
<Column size="20" className="py-4" sizeXS={'12'} sizeXL="4" sizeM="4"></Column>;

// $ExpectType Element
<DatePicker
  date={new Date(2020, 2, 1)}
  view="date"
  withInput={true}
  closeOnSelect={true}
  inputFormat="dd/mm/yyyy"
  outputFormat="dd/mm/yyyy"
  jumpView={true}
  onDateChange={() => console.log('date')}
  firstDayOfWeek="monday"
  inputOptions={{
    required: true,
  }}
/>;

// $ExpectError Type '""' is not assignable to type '"dd/mm/yyyy" | "mm/dd/yyyy" | "yyyy/mm/dd" | "mm-dd-yyyy" | "dd-mm-yyyy" | "yyyy-mm-dd" | undefined'.
<DatePicker date={new Date(2020, 2, 1)} outputFormat="" />;

// $ExpectType Element
<TimePicker
  inputFormat="hh:mm AM"
  outputFormat="hh:mm AM"
  onTimeChange={() => {}}
  time="3:30 AM"
  inputOptions={{
    placeholderChar: '*',
  }}
/>;

// $ExpectType Element
<Dropdown
  menu={true}
  icon="expand_more"
  options={[
    {
      label: 'Download All',
      value: 'Download All',
    },
  ]}
  withCheckbox={true}
  className="w-25"
  placeholder="Select"
  optionType="WITH_ICON"
  staticLimit={100}
  inlineLabel="Status"
  maxWidth={130}
  align="right"
  withSearch={true}
  onChange={() => {}}
  onClose={() => {}}
  loading={true}
/>;

// $ExpectError JSX attributes must only be assigned a non-empty 'expression'.
<Dropdown menu={} icon="expand_more" loading={true} />;

// $ExpectType Element
<Icon className="mr-5" name="events" appearance="subtle" onClick={() => {}} size={24} />;

// $ExpectType Element
<Input
  name="input"
  className="mb-4"
  placeholder="Enter password"
  type={'password'}
  value={'value'}
  onChange={() => {}}
  onClear={() => {}}
  disabled={true}
/>;

// $ExpectError Type '"submit"' is not assignable to type '"number" | "text" | "password" | "email" | "tel" | "url" | undefined'.
<Input name="input" className="mb-4" placeholder="Enter password" type={'submit'} />;

// $ExpectType Element
<MetricInput
  size="regular"
  value="val"
  onChange={() => {}}
  name="input"
  disabled={false}
  readOnly={false}
  onClick={() => {}}
  placeholder="placeholder"
  prefix="#"
  suffix="$"
  icon="icon"
  error={false}
/>;

// $ExpectError Type 'null' is not assignable to type 'string | undefined'.
<MetricInput name="input" className="mb-4" placeholder="Enter password" type={'submit'} prefix={null} />;

// $ExpectType Element
<InputMask
  name="input"
  type="text"
  value="value"
  defaultValue="defaultValue"
  disabled={false}
  onChange={() => {}}
  placeholder="placeholder"
  inlineLabel="inlineLabel"
  size="tiny"
  icon="icon"
  required={true}
  error={false}
  caption="caption"
  info="info"
  mask={[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
/>;

// $ExpectError Type 'string' is not assignable to type 'Mask'.
<InputMask name="input" className="mb-4" placeholder="Enter password" mask="" />;

// $ExpectType Element
<Label required={true} className="mt-6" withInput={true}>
  Gender
</Label>;

// $ExpectType Element
<Caption error={false} withInput={true} className={'FileItem-error'}>
  With Error
</Caption>;

// $ExpectType Element
<Legend iconAppearance="secondary" labelAppearance="destructive">
  Legend
</Legend>;

// $ExpectError Type '"none"' is not assignable to type '"link" | "subtle" | "success" | "default" | "disabled" | "destructive" | "white" | undefined'.
<Legend iconAppearance="secondary" labelAppearance="none">
  Legend
</Legend>;

// $ExpectType Element
<EditableDropdown
  placeholder="placeholder"
  dropdownOptions={{
    onChange: () => {},
    options: [{ label: 'label1', value: 'value1' }],
  }}
/>;

// $ExpectType Element
<Link href="http://innovaccer.com" onClick={() => {}} appearance="subtle" size="tiny">
  Link
</Link>;

// $ExpectType Element
<Message
  title="title"
  actions={<div>action</div>}
  appearance="alert"
  description="Could not start verification. Please try again later."
/>;

// $ExpectType Element
<Message
  title="title"
  actions={<div>action</div>}
  appearance="alert"
  description="Could not start verification. Please try again later."
/>;

// $ExpectType Element
<MetaList seperator={true} list={[{ icon: 'assessment', label: 'Meta data' }]} />;

// $ExpectType Element
<MultiSlider onRangeChange={() => {}}>
  <MultiSlider.Handle value={0} fillAfter={true} />
  <MultiSlider.Handle value={1} />
</MultiSlider>;

// $ExpectType Element
<OutsideClick className="d-inline-block" onOutsideClick={() => {}}>
  <Card className="d-flex align-items-center justify-content-center" style={{ height: 200, width: 200 }}>
    <Heading>Card</Heading>
  </Card>
</OutsideClick>;

// $ExpectType Element
<ProgressBar value={50} max={100} />;

// $ExpectType Element
<StatusHint appearance="success">437 wil receive the message.</StatusHint>;

// $ExpectType Element
<Pills appearance="alert" subtle={false}>
  {'Pills'}
</Pills>;

// $ExpectType Element
<Spinner size="small" appearance={'secondary'} data-test="DesignSystem-Button--Spinner" className="Button-spinner" />;

// $ExpectType Element
<Slider
  min={1}
  max={10}
  label="Controlled Slider"
  stepSize={0.1}
  labelStepSize={1}
  value={10}
  onChange={() => {}}
  className="mt-2"
/>;

// $ExpectType Element
<RangeSlider
  min={1}
  max={10}
  label="Controlled Slider"
  stepSize={0.1}
  labelStepSize={1}
  value={[2, 4]}
  onChange={() => {}}
  className="mt-2"
/>;

// $ExpectType Element
<Subheading appearance="subtle">Subheading</Subheading>;

// $ExpectType Element
<Switch defaultChecked={true} size="regular" disabled={false} checked={true} onChange={() => {}} />;

// $ExpectType Element
<Textarea
  name="comments"
  id="comments"
  className="w-25"
  placeholder="Enter your comments here"
  value="value"
  onChange={(e) => {
    console.log(e);
  }}
  rows={3}
/>;

// $ExpectType Element
<Toast
  appearance="alert"
  title="Campaign failed to run"
  message="Try to run again. If it continues to fail, please raise a ticket."
  actions={[
    {
      label: 'Need Prior Auth',
      onClick: () => {},
    },
  ]}
/>;

// $ExpectType Element
<Popover position="bottom" on="click" trigger={<Button appearance="basic">Open Popup</Button>} dark={true} open={true}>
  <div style={{ width: 'var(--spacing-7)', height: 'var(--spacing-7)' }} />
</Popover>;

// $ExpectType Element
<ChipInput
  allowDuplicates={false}
  placeholder="placeholder"
  disabled={false}
  chipOptions={{ clearButton: true }}
  value={['1024', '80']}
  className="w-50"
  onChange={() => {}}
/>;

// $ExpectType Element
<VerticalNav
  menus={[
    {
      name: 'received',
      label: 'Received',
      icon: 'call_received',
      subMenu: [
        {
          name: 'to_dos.due',
          label: 'Due',
          count: 10,
        },
      ],
    },
  ]}
  expanded={true}
  active={{
    name: 'data_exchange.reports',
  }}
  onClick={() => {}}
  autoCollapse={true}
/>;

// $ExpectType Element
<HorizontalNav
  className="w-100 justify-content-center"
  menus={[
    {
      name: 'received',
      label: 'Received',
      icon: 'call_received',
      subMenu: [
        {
          name: 'to_dos.due',
          label: 'Due',
          count: 10,
        },
      ],
    },
  ]}
  active={{
    name: 'data_exchange.reports',
  }}
  onClick={() => {}}
/>;

// $ExpectType Element
<Tooltip tooltip="tooltip" position="top" appendToBody={true} triggerClass="w-100 overflow-hidden">
  <Button>Button</Button>
</Tooltip>;

// $ExpectType Element
<Dialog
  open={true}
  onClose={() => {}}
  dimension="small"
  primaryButtonAppearance="primary"
  secondaryButtonAppearance="success"
  heading="Heading"
  title="Description Title"
  description="Adding a subheading clearly indicates the hierarchy of the information."
  primaryButtonLabel="Primary"
  secondaryButtonLabel="Basic"
  primaryButtonCallback={() => {}}
  secondaryButtonCallback={() => {}}
/>;

// $ExpectType Element
<Modal open={true} dimension="small" backdropClose={true}>
  <ModalHeader onClose={() => {}} heading="Heading" subHeading="Subheading" />
  <ModalBody>
    <Text>Modal Body</Text>
    <ModalDescription
      title="Description Title"
      description="Adding a subheading clearly indicates the hierarchy of the information."
    />
    <ModalDescription description="Card Sections include supporting text like an article summary or a restaurant description." />
  </ModalBody>
  <ModalFooter open={true}>
    <Button appearance="basic" onClick={() => {}}>
      Basic
    </Button>
    <Button appearance="primary" className="ml-4" onClick={() => {}}>
      Primary
    </Button>
  </ModalFooter>
</Modal>;

// $ExpectType Element
<Modal open={true} dimension="small" backdropClose={true}>
  <ModalHeader onClose={() => {}} heading="Heading" subHeading="Subheading" />
  <ModalBody>
    <Text>Modal Body</Text>
    <ModalDescription
      title="Description Title"
      description="Adding a subheading clearly indicates the hierarchy of the information."
    />
    <ModalDescription description="Card Sections include supporting text like an article summary or a restaurant description." />
  </ModalBody>
  <ModalFooter open={true}>
    <Button appearance="basic" onClick={() => {}}>
      Basic
    </Button>
    <Button appearance="primary" className="ml-4" onClick={() => {}}>
      Primary
    </Button>
  </ModalFooter>
</Modal>;

// $ExpectType Element
<FullscreenModal
  open={true}
  dimension="large"
  onClose={() => {}}
  headerOptions={{
    heading: 'This is modal Heading',
    subHeading: 'This is modal subheading',
  }}
  footerOptions={{
    actions: [
      {
        children: 'Primary',
        appearance: 'primary',
        className: 'ml-4',
        onClick: () => {},
      },
    ],
  }}
>
  <Text>Fullscreen Modal Body</Text>
</FullscreenModal>;

// $ExpectType Element
<Sidesheet
  dimension="large"
  headerOptions={{
    backIcon: false,
    heading: 'Heading',
    subHeading: 'Subheading',
  }}
  open={true}
  footerOptions={{ actions: [] }}
/>;

// $ExpectType Element
<Collapsible height="500px" expandedWidth={240} onToggle={() => {}} hoverable={false} expanded={true}>
  <div className="d-flex pt-4">
    <Icon name="events" data-test="DesignSystem-Collapsible--Icon" />
  </div>
</Collapsible>;

// $ExpectType Element
<ChatMessage
  text="Message Text"
  type="incoming"
  typingText="Typing Text"
  statusOptions={{
    type: 'sending',
    sendingText: 'Sending Text',
  }}
/>;

// $ExpectType Element
<EmptyState
  title="Unable to fetch data"
  description="Sorry there was a technical issue while getting this data. Please try again."
  imageSrc="/image"
  size="small"
  className="pb-6"
>
  <Button icon="refresh" iconAlign="left" className="mt-3">
    Reload
  </Button>
</EmptyState>;

// $ExpectType Element
<Pagination type="basic" page={1} totalPages={50} onPageChange={(pageNo) => console.log(pageNo)} />;

// $ExpectType Element
<Placeholder withImage={false} round={true}>
  <PlaceholderParagraph className="ml-3" length="large" size="m" />
</Placeholder>;

// $ExpectType Element
<EditableInput
  placeholder="First Name"
  value="value"
  onChange={() => {}}
  error={true}
  errorMessage={'Error Message'}
/>;

// $ExpectType Element
<ProgressRing value={30} size="regular" max={100} />;

// $ExpectType Element
<Stepper
  steps={[
    {
      label: 'Step',
      value: 'Step1',
    },
    {
      label: 'Step',
      value: 'Step2',
    },
  ]}
  active={1}
  completed={2}
  onChange={() => {}}
/>;

// $ExpectType Element
<DateRangePicker
  monthsInView={3}
  startDate={new Date(2019, 11, 3)}
  endDate={new Date(2020, 1, 11)}
  startInputOptions={{ caption: 'caption', error: true, required: true }}
  yearNav={2019}
  monthNav={11}
  withInput={true}
  onRangeChange={() => {}}
  inputOptions={{ placeholderChar: '#' }}
/>;

// $ExpectType Element
<TabsWrapper active={0} onTabChange={() => {}}>
  <Tab label="label" count={10} icon="icon" disabled={true}>
    Tab 1
  </Tab>
</TabsWrapper>;

// $ExpectType Element
<Dropzone
  formatLabel="Accepted formats: PDF, jpg"
  sizeLabel="Maximum size: 25 MB"
  onDrop={() => {}}
  disabled={false}
  className="mb-3"
  type="tight"
  sampleFileLink={
    <Link
      href="http://www.adobe.com/content/dam/Adobe/en/accessibility/pdfs/accessing-pdf-sr.pdf"
      download="Test.pdf"
      target="_blank"
    >
      Download sample file
    </Link>
  }
/>;

// $ExpectType Element
<Dropzone
  formatLabel="Accepted formats: PDF, jpg"
  sizeLabel="Maximum size: 25 MB"
  onDrop={() => {}}
  disabled={false}
  className="mb-3"
  type="tight"
  sampleFileLink={
    <Link
      href="http://www.adobe.com/content/dam/Adobe/en/accessibility/pdfs/accessing-pdf-sr.pdf"
      download="Test.pdf"
      target="_blank"
    >
      Download sample file
    </Link>
  }
/>;

// $ExpectType Element
<FileUploader
  sizeLabel="Maximum size: 25 MB"
  disabled={false}
  className="mb-3"
  multiple={true}
  title="title"
  sampleFileLink={
    <Link
      href="http://www.adobe.com/content/dam/Adobe/en/accessibility/pdfs/accessing-pdf-sr.pdf"
      download="Test.pdf"
      target="_blank"
    >
      Download sample file
    </Link>
  }
  formatLabel="Accepted formats: PDF, jpg, png"
/>;

// $ExpectType Element
<FileUploaderList
  onDelete={() => {}}
  onRetry={() => {}}
  fileList={[
    {
      file: (File = {
        name: 'Audio File.mp3',
        size: '3 MB',
        type: 'audio',
      } as any),
      status: 'uploading',
      progress: 45,
      id: 1,
    },
  ]}
  className="mt-4"
/>;

// $ExpectType Element
<Grid
  schema={[
    {
      name: 'name',
      displayName: 'Name',
      width: '50%',
    },
  ]}
  data={[
    {
      name: 'Zara',
      gender: 'f',
    },
  ]}
  withCheckbox={true}
  withPagination={true}
  updateSortingList={() => {}}
  sortingList={[{ name: 'name', type: 'desc' }]}
/>;

// $ExpectType Element
<GridCell
  schema={{
    displayName: 'Name',
    name: 'name',
    cellType: 'WITH_META_LIST',
  }}
  data={{ name: 'Zara' }}
  loading={true}
  size="comfortable"
  rowIndex={1}
  colIndex={1}
/>;

// $ExpectType Element
<Table
  data={[
    {
      className: 'align-baseline',
      properties: 'vertical-align: baseline ;',
    },
  ]}
  schema={[
    {
      name: 'className',
      displayName: 'ClassName',
      width: '50%',
      resizable: true,
      align: 'left',
      cellRenderer: (props: any) => {
        return (
          <>
            <GridCell {...props} />
            <Button
              title="Copy className to clipboard"
              appearance="transparent"
              icon="content_copy"
              onClick={() => {}}
            />
          </>
        );
      },
    },
  ]}
  size={'standard'}
  headerOptions={{
    withSearch: true,
  }}
  showMenu={false}
/>;

// $ExpectType Element
<List
  data={[
    {
      data: {
        title: 'Reminder for due lab tests',
        subTitle: 'ENG. +1 Hi [recipient.name]! Your (test) is overdue. Please get in touch with [recipient.PCPI...',
      },
    },
  ]}
  schema={[
    {
      width: '100%',
      name: 'data',
      displayName: '',
      cellRenderer: () => {
        return (
          <>
            <Paragraph>
              <Text weight="strong">title</Text>
            </Paragraph>
          </>
        );
      },
    },
  ]}
  withHeader={true}
  headerOptions={{
    withSearch: true,
    dynamicColumn: false,
  }}
  withPagination={true}
  pageSize={5}
/>;

// $ExpectType Element
<ChoiceList
  choices={[
    { label: 'Male', name: 'gender', value: 'Male' },
    { label: 'Female', name: 'gender', value: 'Female' },
    { label: 'Other', name: 'gender', value: 'Other' },
  ]}
  title="title"
  onChange={() => {}}
/>;

// $ExpectType Element
<InlineMessage appearance="info" description="Patient profile updated." />;
