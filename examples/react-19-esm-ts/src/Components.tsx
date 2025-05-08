import { useState } from 'react';
import {
  // Atoms Components
  Avatar,
  AvatarGroup,
  Badge,
  Breadcrumbs,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardSubdued,
  Chip,
  ChipGroup,
  Checkbox,
  Heading,
  Icon,
  Input,
  MetricInput,
  Label,
  Caption,
  Legend,
  Paragraph,
  ProgressBar,
  Radio,
  Switch,
  Text,
  Textarea,
  Subheading,
  Divider,
  HelpText,
  LinkButton,
  ActionCard,
  SelectionCard,
  PlaceholderParagraph,
  Spinner,
  PlaceholderImage,
  ProgressRing,
  Meter,
  Tab,
  // Molecules Components
  ChipInput,
  Placeholder,
  EditableChipInput,
  Stepper,
  // Organisms Components
  Dropdown,
  EditableDropdown,
  ChoiceList,
  TextField,
  AvatarSelection,
  Select,
  // AI Components
  AIButton,
  AIIconButton,
  AIChip,
  VerticalNav,
  HorizontalNav,
  Tabs,
  TabsWrapper,
} from '@innovaccer/design-system';
import '@innovaccer/design-system/css';

function Components() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [radioValue, setRadioValue] = useState('');
  const [switchValue, setSwitchValue] = useState(false);

  const [meterValue] = useState(75);
  const [progressValue] = useState(65);
  const [progressRingValue] = useState(45);
  const [stepperValue, setStepperValue] = useState(1);
  const [chipInputValue, setChipInputValue] = useState([]);
  const [editableChipInputValue, setEditableChipInputValue] = useState([]);
  const [textareaValue, setTextareaValue] = useState('');
  const [choiceListValue, setChoiceListValue] = useState([]);
  const [textFieldValue, setTextFieldValue] = useState('');

  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler',
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
      icon: <Avatar.Icon name="person" />,
    },
    {
      firstName: 'Anuradha',
      lastName: 'Aggarwal',
      image: <Avatar.Image src="https://design.innovaccer.com/images/avatar2.jpeg" />,
    },
    {
      firstName: 'Monica',
      lastName: 'Geller',
    },
    {
      firstName: 'Arya',
      lastName: 'Stark',
    },
  ];

  const list1 = [
    {
      label: 'Level 0',
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

  const verticalNavItems = [
    {
      name: 'menu_1',
      label: 'Menu 1',
      icon: 'home',
      link: '/menu1',
    },
    {
      name: 'menu_2',
      label: 'Menu 2',
      icon: 'person',
      link: '/menu2',
    },
  ];

  const horizontalNavItems = [
    {
      name: 'tab_1',
      label: 'Tab 1',
      link: '/tab1',
    },
    {
      name: 'tab_2',
      label: 'Tab 2',
      link: '/tab2',
    },
  ];

  const tabsData = [
    {
      label: 'Tab 1',
      count: 5,
    },
    {
      label: 'Tab 2',
      count: 10,
    },
    {
      label: 'Tab 3',
      count: 15,
    },
  ];

  const stepperData = [
    {
      label: 'Step 1',
      value: 1,
    },
    {
      label: 'Step 2',
      value: 2,
    },
    {
      label: 'Step 3',
      value: 3,
    },
  ];

  const dropdownOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  const choiceListOptions = [
    { label: 'Choice 1', value: 'choice1' },
    { label: 'Choice 2', value: 'choice2' },
    { label: 'Choice 3', value: 'choice3' },
  ];

  const avatarOptions = [
    { label: 'Avatar 1', value: 'avatar1', icon: 'person' },
    { label: 'Avatar 2', value: 'avatar2', icon: 'person' },
    { label: 'Avatar 3', value: 'avatar3', icon: 'person' },
  ];

  return (
    <div className="p-8 w-100 bg-secondary-lighter">
      <Heading size="xl">Design System React 19 Compatibility Test</Heading>

      {/* Basic Components */}
      <div className="mb-8">
        <Heading size="l">Basic Components</Heading>

        {/* Text Components */}
        <div className="mb-4">
          <Text size="small" weight="medium">
            Small Medium Text
          </Text>
          <Text size="regular" weight="medium">
            Regular Medium Text
          </Text>
          <Text size="large" weight="strong">
            Large Strong Text
          </Text>
          <Text appearance="subtle">Subtle Text</Text>
          <Text appearance="disabled">Disabled Text</Text>
        </div>

        {/* Heading */}
        <div className="mb-4">
          <Heading size="s">Small Heading</Heading>
          <Heading size="m">Medium Heading</Heading>
          <Heading size="l">Large Heading</Heading>
          <Heading size="xl">Extra Large Heading</Heading>
          <Heading appearance="subtle">Subtle Heading</Heading>
        </div>

        {/* Subheading */}
        <div className="mb-4">
          <Subheading>Subheading Text</Subheading>
        </div>

        {/* Paragraph */}
        <div className="mb-4">
          <Paragraph>This is a paragraph with regular text.</Paragraph>
          <Paragraph appearance="subtle">This is a subtle paragraph.</Paragraph>
        </div>

        {/* Caption */}
        <div className="mb-4">
          <Caption>This is a caption text</Caption>
        </div>

        {/* Legend */}
        <div className="mb-4">
          <Legend>This is a legend text</Legend>
        </div>

        {/* HelpText */}
        <div className="mb-4">
          <HelpText error={true}>This is error help text</HelpText>
        </div>

        {/* Divider */}
        <div className="mb-4">
          <Divider />
        </div>

        {/* Icon */}
        <div className="mb-4">
          <Icon name="home" size={16} />
          <Icon name="person" size={20} />
          <Icon name="settings" size={24} />
          <Icon name="assessment" appearance="primary" />
          <Icon name="event" appearance="primary" />
        </div>

        {/* Badge */}
        <div className="mb-4">
          <Badge>Default Badge</Badge>
          <Badge appearance="primary">Primary Badge</Badge>
          <Badge appearance="secondary">Secondary Badge</Badge>
          <Badge appearance="success">Success Badge</Badge>
          <Badge appearance="alert">Alert Badge</Badge>
          <Badge appearance="warning">Warning Badge</Badge>
          <Badge appearance="accent1">Accent1 Badge</Badge>
          <Badge appearance="accent2">Accent2 Badge</Badge>
          <Badge appearance="accent3">Accent3 Badge</Badge>
          <Badge appearance="accent4">Accent4 Badge</Badge>
          <Badge subtle={true}>Subtle Badge</Badge>
        </div>

        {/* Spinner */}
        <div className="mb-4">
          <Spinner size="xsmall" />
          <Spinner size="small" />
          <Spinner size="large" />
          <Spinner appearance="primary" />
          <Spinner appearance="secondary" />
        </div>

        {/* Meter */}
        <div className="mb-4">
          <Meter value={meterValue} max={100} />
        </div>

        {/* ProgressBar */}
        <div className="mb-4">
          <ProgressBar value={progressValue} />
          <ProgressBar value={50} size="small" />
          <ProgressBar value={75} size="regular" />
        </div>

        {/* ProgressRing */}
        <div className="mb-4">
          <ProgressRing value={progressRingValue} />
          <ProgressRing value={75} size="small" />
          <ProgressRing value={50} size="large" />
        </div>

        {/* PlaceholderParagraph */}
        <div className="mb-4">
          <PlaceholderParagraph length="small" />
          <PlaceholderParagraph length="medium" />
          <PlaceholderParagraph length="large" />
        </div>

        {/* PlaceholderImage */}
        <div className="mb-4">
          <PlaceholderImage size="small" />
          <PlaceholderImage size="medium" />
          <PlaceholderImage size="large" />
        </div>

        {/* Placeholder */}
        <div className="mb-4">
          <Placeholder />
        </div>
      </div>

      {/* Button Components */}
      <div className="mb-8">
        <Heading size="l">Button Components</Heading>

        {/* Button */}
        <div className="mb-4">
          <Button appearance="basic" size="tiny">
            Tiny Basic
          </Button>
          <Button appearance="basic" size="regular">
            Regular Basic
          </Button>
          <Button appearance="basic" size="large">
            Large Basic
          </Button>
          <Button appearance="primary" size="regular">
            Primary Button
          </Button>
          <Button appearance="alert" size="regular">
            Alert Button
          </Button>
          <Button appearance="transparent" size="regular">
            Transparent Button
          </Button>
          <Button disabled={true}>Disabled Button</Button>
          <Button loading={true}>Loading Button</Button>
          <Button selected={true}>Selected Button</Button>
          <Button expanded={true}>Expanded Button</Button>
          <Button icon="home">Icon Button</Button>
          <Button icon="arrow_right" iconAlign="right">
            Right Icon
          </Button>
          <Button tooltip="Tooltip text" icon="help">
            Tooltip Button
          </Button>
        </div>

        {/* LinkButton */}
        <div className="mb-4">
          <LinkButton>Link Button</LinkButton>
          <LinkButton size="tiny">Tiny Link Button</LinkButton>
          <LinkButton size="regular">Regular Link Button</LinkButton>
          <LinkButton disabled={true}>Disabled Link Button</LinkButton>
          <LinkButton icon="arrow_right" iconAlign="right">
            Right Icon Link
          </LinkButton>
          <LinkButton subtle={true}>Subtle Link Button</LinkButton>
        </div>

        {/* AIButton */}
        <div className="mb-4">
          <AIButton>AI Button</AIButton>
          <AIButton withSparkle={true}>AI Button with Sparkle</AIButton>
          <AIButton disabled={true}>Disabled AI Button</AIButton>
        </div>

        {/* AIIconButton */}
        <div className="mb-4">
          <AIIconButton icon="home" />
          <AIIconButton icon="settings" disabled={true} />
        </div>
      </div>

      {/* Input Components */}
      <div className="mb-8">
        <Heading size="l">Input Components</Heading>

        {/* Input */}
        <div className="mb-4">
          <Input
            name="input"
            placeholder="Enter text"
            value={inputValue}
            onChange={(e: any) => setInputValue(e.target.value)}
            size="regular"
            icon="search"
            error={false}
            disabled={false}
            readOnly={false}
            required={true}
            autoFocus={false}
            autoComplete="off"
          />
        </div>

        {/* MetricInput */}
        <div className="mb-4">
          <MetricInput
            name="metric"
            placeholder="Enter metric"
            size="regular"
            icon="assessment"
            error={false}
            disabled={false}
            readOnly={false}
            onChange={(e: any) => console.log(e)}
            onClick={(e: any) => console.log(e)}
          />
        </div>

        {/* Textarea */}
        <div className="mb-4">
          <Textarea
            name="textarea"
            placeholder="Enter text"
            value={textareaValue}
            onChange={(e: any) => setTextareaValue(e.target.value)}
            error={false}
            disabled={false}
            readOnly={false}
            required={true}
            autoFocus={false}
            rows={4}
            cols={50}
          />
        </div>

        {/* TextField */}
        <div className="mb-4">
          <TextField
            name="textfield"
            placeholder="Enter text"
            value={textFieldValue}
            onChange={(e: any) => setTextFieldValue(e.target.value)}
            size="regular"
            error={false}
            disabled={false}
            readOnly={false}
            required={true}
            autoFocus={false}
          />
        </div>
      </div>

      {/* Form Components */}
      <div className="mb-8">
        <Heading size="l">Form Components</Heading>

        {/* Checkbox */}
        <div className="mb-4">
          <Checkbox
            label="Checkbox Label"
            checked={checkboxValue}
            onChange={(checked: boolean) => setCheckboxValue(checked)}
            disabled={false}
            size="regular"
          />
        </div>

        {/* Radio */}
        <div className="mb-4">
          <Radio
            label="Radio Option 1"
            name="radio-group"
            value="option1"
            checked={radioValue === 'option1'}
            onChange={(value: string) => setRadioValue(value)}
            disabled={false}
            size="regular"
          />
          <Radio
            label="Radio Option 2"
            name="radio-group"
            value="option2"
            checked={radioValue === 'option2'}
            onChange={(value: string) => setRadioValue(value)}
            disabled={false}
            size="regular"
          />
        </div>

        {/* Switch */}
        <div className="mb-4">
          <Switch
            checked={switchValue}
            onChange={(checked: boolean) => setSwitchValue(checked)}
            disabled={false}
            size="regular"
          />
        </div>

        {/* Label */}
        <div className="mb-4">
          <Label>Form Label</Label>
          <Label disabled={true}>Disabled Label</Label>
        </div>
      </div>

      {/* Selection Components */}
      <div className="mb-8">
        <Heading size="l">Selection Components</Heading>

        {/* Dropdown */}
        <div className="mb-4">
          <Dropdown options={dropdownOptions} placeholder="Select option" disabled={false} error={false} />
        </div>

        {/* Select */}
        <div className="mb-4">
          <Select
            placeholder="Select option"
            size="regular"
            disabled={false}
            readOnly={false}
            required={true}
            error={false}
            search={true}
            multiple={false}
          />
        </div>

        {/* EditableDropdown */}
        <div className="mb-4">
          <EditableDropdown
            placeholder="Select or type"
            size="regular"
            disabled={false}
            readOnly={false}
            required={true}
            error={false}
            search={true}
          />
        </div>

        {/* ChoiceList */}
        <div className="mb-4">
          <ChoiceList
            choices={choiceListOptions}
            selected={choiceListValue}
            onChange={(value: any) => setChoiceListValue(value)}
            size="regular"
            disabled={false}
            readOnly={false}
            required={true}
            error={false}
            allowMultiple={true}
          />
        </div>

        {/* AvatarSelection */}
        <div className="mb-4">
          <AvatarSelection list={avatarOptions} size="regular" />
        </div>
      </div>

      {/* Chip Components */}
      <div className="mb-8">
        <Heading size="l">Chip Components</Heading>

        {/* Chip */}
        <div className="mb-4">
          <Chip
            label="Chip Label"
            clearButton={true}
            icon="assessment"
            name="chip"
            onClick={() => console.log('clicked')}
            onClose={() => console.log('closed')}
            type="selection"
            selected={false}
            disabled={false}
          />
          <Chip label="Selected Chip" name="selected-chip" selected={true} type="selection" />
        </div>

        {/* ChipGroup */}
        <div className="mb-4">
          <ChipGroup
            list={[
              {
                icon: 'assessment',
                label: 'Letter.pdf',
                name: '1',
                type: 'action',
              },
              {
                clearButton: true,
                icon: 'assessment',
                label: 'Mail.pdf',
                name: '2',
                type: 'action',
              },
              {
                clearButton: true,
                icon: 'assessment',
                label: 'Draft.pdf',
                name: '3',
                selected: true,
                type: 'action',
              },
            ]}
            onClick={() => console.log('clicked')}
          />
        </div>

        {/* ChipInput */}
        <div className="mb-4">
          <ChipInput
            value={chipInputValue}
            onChange={(value: any) => setChipInputValue(value)}
            placeholder="Add chips"
            disabled={false}
            readOnly={false}
            required={true}
            error={false}
            allowDuplicates={false}
            max={10}
          />
        </div>

        {/* EditableChipInput */}
        <div className="mb-4">
          <EditableChipInput
            value={editableChipInputValue}
            onChange={(value: any) => setEditableChipInputValue(value)}
            placeholder="Add editable chips"
            disabled={false}
            readOnly={false}
            required={true}
            error={false}
            allowDuplicates={false}
            max={10}
          />
        </div>

        {/* AIChip */}
        <div className="mb-4">
          <AIChip label="AI Chip" icon="home" onClick={() => console.log('AI chip clicked')} />
        </div>
      </div>

      {/* Avatar Components */}
      <div className="mb-8">
        <Heading size="l">Avatar Components</Heading>

        {/* Avatar */}
        <div className="mb-4">
          <Avatar
            appearance="primary"
            firstName="John"
            lastName="Doe"
            size="tiny"
            withTooltip={true}
            tooltipPosition="top"
          />
          <Avatar appearance="secondary" firstName="Jane" lastName="Smith" size="regular" />
          <Avatar appearance="success" firstName="Bob" lastName="Johnson" size="large" />
        </div>

        {/* AvatarGroup */}
        <div className="mb-4">
          <AvatarGroup
            list={list}
            popoverOptions={{
              position: 'bottom',
              withSearch: true,
              on: 'click',
              searchPlaceholder: 'Search User',
            }}
          />
        </div>
      </div>

      {/* Card Components */}
      <div className="mb-8">
        <Heading size="l">Card Components</Heading>

        {/* Card */}
        <div className="mb-4">
          <Card>
            <CardHeader>
              <Text weight="strong" size="large">
                Card Heading
              </Text>
            </CardHeader>
            <CardBody>
              <div>Card Body Content</div>
            </CardBody>
            <CardFooter withSeperator={false}>
              <>
                <Button appearance="basic">Cancel</Button>
                <Button appearance="primary">Submit</Button>
              </>
            </CardFooter>
          </Card>
        </div>

        {/* CardSubdued */}
        <div className="mb-4">
          <Card>
            <CardHeader>
              <Text weight="strong" size="large">
                Card Heading
              </Text>
            </CardHeader>
            <CardBody>
              <div>Card Body Content</div>
            </CardBody>
            <CardSubdued>Subdued section content.</CardSubdued>
          </Card>
        </div>

        {/* ActionCard */}
        <div className="mb-4">
          <ActionCard onClick={() => console.log('action card clicked')} disabled={false} selected={false}>
            <div>Action Card Content</div>
          </ActionCard>
        </div>

        {/* SelectionCard */}
        <div className="mb-4">
          <SelectionCard selected={false} onClick={() => console.log('selection card clicked')} disabled={false}>
            <div>Selection Card Content</div>
          </SelectionCard>
        </div>
      </div>

      {/* Navigation Components */}
      <div className="mb-8">
        <Heading size="l">Navigation Components</Heading>

        {/* Breadcrumbs */}
        <div className="mb-4">
          <Breadcrumbs list={list1} onClick={(link: string) => console.log(`on-click: ${link}`)} />
        </div>

        {/* VerticalNav */}
        <div className="mb-4">
          <VerticalNav
            menus={verticalNavItems}
            active={verticalNavItems[0]}
            onClick={(item: any) => console.log('vertical nav clicked:', item)}
          />
        </div>

        {/* HorizontalNav */}
        <div className="mb-4">
          <HorizontalNav
            menus={horizontalNavItems}
            active={horizontalNavItems[0]}
            onClick={(item: any) => console.log('horizontal nav clicked:', item)}
          />
        </div>

        {/* Tabs */}
        <div className="mb-4">
          <Tabs activeIndex={selectedTab} onTabChange={(index: number) => setSelectedTab(index)} tabs={tabsData}>
            <Tab label="Tab 1">Tab 1 Content</Tab>
            <Tab label="Tab 2">Tab 2 Content</Tab>
            <Tab label="Tab 3">Tab 3 Content</Tab>
          </Tabs>
        </div>

        {/* TabsWrapper */}
        <div className="mb-4">
          <TabsWrapper active={selectedTab} onTabChange={(index: number) => setSelectedTab(index)}>
            <div>Tab Content</div>
          </TabsWrapper>
        </div>

        {/* Stepper */}
        <div className="mb-4">
          <Stepper
            steps={stepperData}
            active={stepperValue}
            completed={0}
            onChange={(step: any) => setStepperValue(step)}
          />
        </div>
      </div>

      {/* Data Display Components */}
      <div className="mb-8">
        <Heading size="l">Data Display Components</Heading>
      </div>
    </div>
  );
}

export default Components;
