import React, { useState } from 'react';
import {
  Avatar,
  AvatarGroup,
  Backdrop,
  Badge,
  Breadcrumbs,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardSubdued,
  Chip,
  Caption,
  ChipGroup,
  PlaceholderImage,
  OutsideClick,
  Checkbox,
  Heading,
  Icon,
  Input,
  ProgressRing,
  Label,
  Legend,
  Link,
  Message,
  MetaList,
  MetricInput,
  Paragraph,
  ProgressBar,
  Radio,
  Spinner,
  Text,
  Textarea,
  Toast,
  Divider,
  LinkButton,
  Menu,
  InlineMessage,
  ActionCard,
  AvatarSelection,
  Collapsible,
  DatePicker,
  VerticalNav,
  Row,
  Column,
  Dropdown,
  Subheading,
  HelpText,
  StatusHint,
  Meter,
  Pills,
  Placeholder,
  PlaceholderParagraph,
  RangeSlider,
  SelectionCard,
  Slider,
  Switch,
  Chat,
  ChipInput,
  EditableDropdown,
  Dialog,
  Dropzone,
  EditableChipInput,
  EditableInput,
  EmptyState,
  FileList,
  FileUploader,
  FullscreenModal,
  Modal,
  Utils,
  InputMask,
  KeyValuePair,
  ModalDescription,
  Pagination,
  Popover,
  Sidesheet,
  Stepper,
  Tabs,
  Tab,
  Tooltip,
  VerificationCodeInput,
  Calendar,
  ChoiceList,
  DateRangePicker,
  HorizontalNav,
  Listbox,
  PageHeader,
  Select,
  TimePicker,
  TextField,
  Table,
  AIButton,
  Sara,
  SaraSparkle,
  AIIconButton,
  AIChip,
  AIResponse,
  FileUploaderList,
  List,
  Grid,
  GridProps
} from '@innovaccer/design-system';

function Test() {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = useState('');
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [radioValue, setRadioValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const onClose = () => {
    setOpen(!open);
  };

  const openModalFn = () => {
    setOpenModal(true);
  };

  const stepCount = 5;

  const { selectedCardIds, selectedCardValues, isCardSelected, updateCardSelection } = SelectionCard.useSingleSelect();

  const cardList = [
    {
      id: 'item1',
      iconName: 'key',
      title: 'Manual drop w/ SFTP user',
      description: 'Give access to data asset using SSH keys',
    },
    {
      id: 'item2',
      iconName: 'adjust',
      title: 'Manual drop on SFTP disk',
      description: 'Give access to a separate SFTP disk image',
    },
  ];

  React.useEffect(() => {
    console.log(selectedCardIds, selectedCardValues);
  }, [selectedCardIds]);

  const onClickHandler = (e: React.MouseEvent<HTMLElement>, id: string, value: object) => {
    console.log('onClick handler', e, id, value);
    updateCardSelection(id, value);
  };

  const dropdownOptions: any[] = [];
  for (let i = 1; i <= 100; i++) {
    dropdownOptions.push({
      label: `Option ${i}`,
      value: `Option ${i}`,
      group: i >= 1 && i <= 40 ? 'Group 1' : 'Group 2',
      icon: 'event',
      subInfo: 'subInfo',
    });
  }

  const getSearchedOptions = (options: any[], searchTerm: string) => {
    const result = options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
    return result;
  };

  const fetchOptions = (searchTerm: string): Promise<{ searchTerm?: string; count: number; options: any[] }> => {
    const searchedOptions = searchTerm ? getSearchedOptions(dropdownOptions, searchTerm) : dropdownOptions;
    return new Promise<{ searchTerm?: string; count: number; options: any[] }>((resolve) => {
      window.setTimeout(() => {
        resolve({
          searchTerm,
          options: searchedOptions,
          count: searchedOptions.length,
        });
      }, 1000);
    });
  };

  const data = [
    {
      name: 'to_dos',
      label: 'To-dos',
      icon: 'check_circle_outline',
      subMenu: [
        {
          name: 'to_dos.due',
          label: 'Due',
          count: 10,
        },
        {
          name: 'to_dos.completed',
          label: 'Completed',
          count: 7,
        },
      ],
    },
    {
      name: 'received',
      label: 'Received',
      icon: 'call_received',
    },
    {
      name: 'sent',
      label: 'Sent',
      icon: 'call_made',
    },
  ];

  const [expanded, setExpanded] = React.useState(true);
  const [active, setActive] = React.useState({
    name: 'data_exchange.reports',
  });

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      setOpen(false);
    }
  };

  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      firstName: 'Steven John',
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
      firstName: 'Monica Johnny lever',
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
    {
      label: 'Level 4',
      link: '/level3',
    },
  ];

  const outsideClickHandler = () => console.log('outside click');
  const insideClickHandler = () => console.log('inside click');

  const options = {
    open,
    onClose,
    icon: 'pan_tool',
    heading: 'Heading',
    title: 'Description Title',
    description: 'Adding a subheading clearly indicates the hierarchy of the information.',
    primaryButtonLabel: 'Primary',
    secondaryButtonLabel: 'Basic',
  };

  const avatarList = [
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

  const actionBar = () => {
    return (
      <div className="d-flex">
        <Button appearance="transparent" icon="edit" tooltip="Edit" className="mr-3" size="tiny" largeIcon={true} />
        <Button
          appearance="transparent"
          icon="forward"
          tooltip="Forward"
          className="mr-3"
          size="tiny"
          largeIcon={true}
        />
        <Button appearance="transparent" icon="more_vert" tooltip="More Options" size="tiny" largeIcon={true} />
      </div>
    );
  };

  const incomingOptions = {
    time: '1:00 AM',
    metaData: 'Meta Data',
    avatarData: {
      firstName: 'Anuradha',
      lastName: 'Aggarwal',
      image: <Avatar.Image src="https://design.innovaccer.com/images/avatar2.jpeg" />,
    },
    showAvatar: true,
    actionBar,
    urgentMessage: () => {
      return (
        <div className="d-flex align-items-center">
          <Icon name="notifications" size={14} appearance="alert" />
          <Text size="small" appearance="destructive" className="ml-2" weight="medium">
            Urgent
          </Text>
        </div>
      );
    },
  };

  const onDrop = (event: React.DragEvent<HTMLElement>, acceptedFiles: any[], rejectedFiles: any[]) => {
    console.log(acceptedFiles, rejectedFiles);
  };

  const handleDownloadClick = () => {
    const link = document.createElement('a');
    link.href = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
    link.download = 'Test.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [value, setValue] = React.useState();

  const onChange = (updatedValue: any) => {
    setValue(updatedValue);
  };
  const onClick = (item: any) => console.log(item);

  const placeholder = 'Add Value';
  const chipOptions = {
    onClick,
    clearButton: true,
    maxWidth: 'var(--spacing-440)',
  };
  const chipInputOptions = {
    chipOptions,
    allowDuplicates: false,
    defaultValue: [],
    autoFocus: true,
  };

  const options11 = {
    placeholder,
    value,
    onChange,
    chipInputOptions,
  };

  const [value22, setValue22] = React.useState('');

  const onChange22 = (updatedValue: any) => {
    setValue22(updatedValue);
  };

  const options22 = {
    placeholder: 'First Name',
    onChange: onChange22,
    value: value22,
  };

  const fileList = [
    {
      file: {
        name: 'Audio File.mp3',
        size: '3 MB',
        type: 'audio',
      },
      status: 'uploading',
      progress: 45,
      id: 1,
    },
    {
      file: {
        name: 'Video File.mp4',
        size: '3 MB',
        type: 'video',
      },
      status: 'completed',
      id: 2,
    },
    {
      file: {
        name: 'Image file name can be some times very long in size so it will get truncated File.jpeg',
        size: '3 MB',
        type: 'image',
      },
      status: 'error',
      errorMessage: 'Network failure',
      id: 3,
    },
    {
      file: {
        name: 'Document File.pdf',
        size: '3 MB',
        type: 'application',
      },
      status: 'completed',
      id: 4,
    },
    {
      file: {
        name: 'Other File',
        size: '3 MB',
        type: 'others',
      },
      status: 'completed',
      id: 5,
    },
  ];

  const onClick111 = (file: any) => {
    console.log(`Clicked: ${file}`);
  };

  const dateMask = Utils.masks.date['mm/dd/yyyy'];
  const dateValidator = (val: string) => Utils.validators.date(val, 'mm/dd/yyyy');

  // const [open, setOpen] = React.useState(false);
  const dimension = 'medium';
  const backdropClose = true;

  const onCloseModal = () => {
    setOpenModal(!openModal);
  };

  const [open3, setOpen3] = React.useState(false);

  const onClose3 = () => {
    setOpen3(false);
  };

  const headerOptions = {
    heading: 'Heading',
    subHeading: 'Subheading',
  };

  const options3 = {
    onClose: onClose3,
    open: open3,
    headerOptions,
    footer: (
      <>
        <Button appearance="primary" className="mr-4">
          Primary
        </Button>
        <Button appearance="basic">Cancel</Button>
      </>
    ),
  };

  const SidesheetDescription = (params: { label?: string; description: string }) => {
    const { label, description } = params;
    return (
      <div className="py-4">
        {label && <Label withInput={!!description}>{label}</Label>}
        {label && description && <br />}
        {description && <Text>{description}</Text>}
      </div>
    );
  };

  const sidesheetDescriptionOptions = {
    label: 'Description Title',
    description: 'Adding a subheading clearly indicates the hierarchy of the information.',
  };

  const optionsWithoutLabel = {
    description: 'Card Sections include supporting text like an article summary or a healthcare service description.',
  };

  const [active5, setActive5] = React.useState(2);

  const steps = [
    {
      label: 'Step',
      value: 'Step1',
    },
    {
      label: 'Step',
      value: 'Step2',
    },
    {
      label: 'Step',
      value: 'Step3',
    },
    {
      label: 'Step',
      value: 'Step4',
    },
  ];

  const onChange5 = (index: number) => {
    setActive5(index);
  };

  const [activeIndex6, setActiveIndex6] = React.useState(0);

  const onTabChangeHandler = (tabIndex: number) => {
    setActiveIndex6(tabIndex);
  };

  const data6 = [
    {
      name: 'menu_1',
      label: 'Menu 1',
      count: 20,
    },
    {
      name: 'menu_2',
      label: 'Menu 2',
      count: 10,
    },
    {
      name: 'menu_3',
      label: 'Menu 3',
      disabled: true,
      count: 5,
    },
  ];

  const [active6, setActive6] = React.useState({
    name: 'menu_1',
  });

  const onClickHandler6 = (menu: { name: string }) => {
    console.log('menu-clicked: ', menu);
    setActive6(menu);
  };

  const data9 = [
    {
      assessment: 'Alcohol Usage Disorders Identification Test - C (Audit C)',
    },
    {
      assessment: 'Functional Assessment - Initial',
    },
    {
      assessment: 'Functional Assessment - Discharge',
    },
    {
      assessment: 'Hypertension - Diabetes Symptoms Identification Test',
    },
    {
      assessment: 'Patient Health Question',
    },
  ];

  const navigationData = [
    {
      name: 'menu_1',
      label: 'Virtual Visits',
    },
    {
      name: 'menu_2',
      label: 'Assesments',
    },
  ];

  const [active7, setActive7] = React.useState({
    name: 'menu_1',
  });

  const onClickHandler7 = (menu: { name: string }) => {
    setActive7(menu);
  };

  const navigation = <HorizontalNav menus={navigationData} onClick={onClickHandler7} active={active7} />;
  const actions = (
    <div className="d-flex justify-content-end align-items-center">
      <Button className="mr-4">Reorganize</Button>
      <Button icon="get_app">Export to PDF</Button>
    </div>
  );

  const medicineList = [
    { label: 'Aspirin', value: 'Aspirin' },
    { label: 'Paracetamol', value: 'Paracetamol' },
    { label: 'Lisinopril', value: 'Lisinopril' },
    { label: 'Simvastatin', value: 'Simvastatin' },
    { label: 'Amoxicillin', value: 'Amoxicillin' },
    { label: 'Ciprofloxacin', value: 'Ciprofloxacin' },
    { label: 'Metformin', value: 'Metformin' },
    { label: 'Omeprazole', value: 'Omeprazole' },
    { label: 'Diazepam', value: 'Diazepam' },
    { label: 'Levothyroxine', value: 'Levothyroxine' },
  ];

  const onSelectHandler = (selectedOption: string) => {
    console.log('selectedOption', selectedOption);
  };

  const data8 = [
    {
      name: 'home',
      label: 'Home',
      icon: 'home',
      link: '/home',
      count: 10,
    },
    {
      name: 'profile',
      label: 'Profile',
      icon: 'event',
      link: '/profile',
    },
    {
      name: 'medical_records',
      label: 'Medical Records',
      icon: 'local_hospital',
      link: '/medical_records',
      subMenu: [
        {
          name: 'medical_records.allergies',
          label: 'Allergies',
        },
        {
          name: 'medical_records.conditions',
          label: 'Conditions',
        },
        {
          name: 'medical_records.diabetes',
          label: 'Medical records diabetes history',
        },
        {
          name: 'medical_records.devices',
          label: 'Devices',
        },
      ],
    },
    {
      name: 'formulary',
      label: 'Formulary',
      icon: 'list',
      link: '/formulary',
    },
  ];

  const [active8, setActive8] = React.useState({
    name: 'medical_records.allergies',
  });

  const onClickHandler8 = (menu: { name: string }) => {
    console.log('menu-clicked: ', menu);
    setActive8(menu);
  };

  const [inputText, setInputText] = React.useState('');
  const [helpText] = React.useState('');

  const maxLimit = 50;

  // React.useEffect(() => {
  //   if (inputText.length > maxLimit) {
  //     setHelpText('Character limit exceeded');
  //   } else {
  //     setHelpText('Pick a unique username');
  //   }
  // }, [inputText]);

  const tableData = [
    {
      firstName: 'Brooke',
      lastName: 'Heeran',
      email: 'bheeran0@altervista.org',
      gender: 'Female',
      status: 'Failed',
    },
    {
      firstName: 'Frazer',
      lastName: 'Cathro',
      email: 'fcathro1@ucla.edu',
      gender: 'Male',
      status: 'Failed',
    },
    {
      firstName: 'Lemmie',
      lastName: 'Ciric',
      email: {
        title: 'lciric2@dmoz.org',
        metaList: ['First', 'Second'],
      },
      gender: 'Male',
      status: 'Completed',
    },
    {
      firstName: 'Randy',
      lastName: 'Boatwright',
      email: 'rboatwright3@arstechnica.com',
      status: 'Completed',
      gender: 'Male',
    },
    {
      firstName: 'Rolando',
      lastName: 'Cyples',
      email: 'rcyples4@biglobe.ne.jp',
      gender: 'Male',
      status: 'Failed',
    },
    {
      firstName: 'Lem',
      lastName: 'Males',
      email: 'lmales5@admin.ch',
      gender: 'Male',
      status: 'Failed',
    },
    {
      firstName: 'Sayres',
      lastName: 'Adelberg',
      email: 'sadelberg6@uol.com.br',
      gender: 'Male',
      status: 'Completed',
    },
    {
      firstName: 'Murray',
      lastName: 'Bravington',
      email: 'mbravington7@drupal.org',
      gender: 'Male',
      status: 'Failed',
    },
    {
      firstName: 'Jena',
      lastName: 'Swatheridge',
      email: 'jswatheridge8@npr.org',
      gender: 'Female',
      status: 'Failed',
    },
    {
      firstName: 'Annabel',
      lastName: 'Nelsey',
      email: 'anelsey9@google.com',
      gender: 'Female',
      status: 'Completed',
    },
  ];

  const schema1 = [
    {
      name: 'firstName',
      displayName: 'Name',
      cellType: 'AVATAR_WITH_TEXT',
      width: '25%',
      translate: (a: any) => ({
        title: `${a.firstName} ${a.lastName}`,
        firstName: a.firstName,
        lastName: a.lastName,
      }),
    },
    {
      name: 'email',
      displayName: 'Email',
      width: '25%',
    },
    {
      name: 'gender',
      displayName: 'Gender',
      width: '25%',
    },
    {
      name: 'status',
      displayName: 'Status',
      width: '25%',
    },
  ];

  const [selectedList, setSelectedList] = React.useState({
    pin: false,
    like: false,
    dislike: false,
  });

  const metaDataRenderer = () => {
    return (
      <Text appearance="subtle" size="small" weight="medium">
        1:00 PM
      </Text>
    );
  };


  return (
    <div className="p-8 w-100 bg-secondary-lighter">
      <div>
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

          {/* Paragraph */}
          <div className="mb-4">
            <Paragraph>This is a paragraph with regular text.</Paragraph>
            <Paragraph appearance="subtle">This is a subtle paragraph.</Paragraph>
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

          {/* ProgressBar */}
          <div className="mb-4">
            <ProgressBar value={65} />
            <ProgressBar value={50} size="small" />
            <ProgressBar value={75} size="regular" />
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
              size="regular"
              icon="search"
              error={false}
              disabled={false}
              readOnly={false}
              required={true}
              autoComplete="off"
            />
          </div>

          {/* Textarea */}
          <div className="mb-4">
            <Textarea
              name="textarea"
              placeholder="Enter text"
              value={textareaValue}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setTextareaValue(e.target.value)}
              error={false}
              disabled={false}
              readOnly={false}
              required={true}
              rows={4}
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

          {/* Label */}
          <div className="mb-4">
            <Label>Form Label</Label>
            <Label disabled={true}>Disabled Label</Label>
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
        </div>

        {/* Avatar Components */}
        <div className="mb-8">
          <Heading size="l">Avatar Components</Heading>

          {/* Avatar */}
          <div className="mb-4">
            <Avatar appearance="primary" firstName="John" lastName="Doe" withTooltip={true} tooltipPosition="top" />
            <Avatar appearance="secondary" firstName="Jane" lastName="Smith" />
          </div>

          {/* AvatarGroup */}

          <AvatarGroup
            className="mb-4"
            list={avatarList}
            popoverOptions={{
              position: 'bottom',
              withSearch: true,
              on: 'click',
              searchPlaceholder: 'Search User',
            }}
          />
          <div className="mb-4">
            <AvatarGroup
              className="mb-4"
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
            <div>
              <Card className="w-50 vh-25">
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
          </div>

          {/* CardSubdued */}
          <div className="mb-4">
            <div className="w-50">
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
          </div>
        </div>

        {/* Navigation Components */}
        <div className="mb-8">
          <Heading size="l">Navigation Components</Heading>

          {/* Breadcrumbs */}
          <div className="mb-4">
            <Breadcrumbs list={list1} onClick={(link: string) => console.log(`on-click: ${link}`)} />
          </div>

          {/* Menu */}
          <div className="mb-4">
            <Menu trigger={<Menu.Trigger />}>
              <Menu.List>
                <Menu.Item>Edit</Menu.Item>
                <Menu.Item>Export</Menu.Item>
                <Menu.Item>Copy</Menu.Item>
              </Menu.List>
            </Menu>
          </div>
        </div>

        {/* Message Components */}
        <div className="mb-8">
          <Heading size="l">Message Components</Heading>

          {/* Message */}
          <div className="mb-4">
            <Message
              className="mb-4"
              appearance="alert"
              data-test="message"
              description="Could not start verification. Please try again later."
            />
          </div>

          {/* InlineMessage */}
          <div className="mb-4">
            <InlineMessage className="mb-4" appearance="alert" description="There are two new referral requests." />
          </div>
        </div>

        {/* Meta Components */}
        <div className="mb-8">
          <Heading size="l" className="mb-4">
            Meta Components
          </Heading>

          {/* MetaList */}
          <div className="mb-4">
            <MetaList
              list={[
                {
                  label: 'Meta data',
                  icon: 'assessment',
                },
                {
                  label: 'Meta data',
                  icon: 'assessment',
                },
              ]}
            />
          </div>
        </div>

        {/* Backdrop */}
        <div className="mb-8">
          <Heading size="l">Backdrop Component</Heading>

          <div onKeyDown={onKeyDown}>
            <Button onClick={() => setOpen(true)} appearance="primary">
              Trigger Backdrop
            </Button>
            <div onClick={() => setOpen(false)}>
              <Backdrop className="m-2" open={open} />
            </div>
          </div>
        </div>

        {/* Toast */}
        <div className="mb-8">
          <Heading size="l">Toast Component</Heading>

          <Toast
            title="Toast Title"
            message="This is a toast message"
            actions={[
              { label: 'Action 1', onClick: () => console.log('Action 1') },
              { label: 'Action 2', onClick: () => console.log('Action 2') },
            ]}
          />
        </div>
      </div>

      <h1>Individual Components</h1>

      <ActionCard className="w-25" disabled>
        <div className="d-flex flex-column align-items-center justify-content-center p-6 text-align-center">
          <Icon className="mb-4" name="store" size={24} />
          <Text className="mb-2" weight="strong">
            Marketplace
          </Text>
          <Text appearance="subtle">Explore and purchase apps and add-ons</Text>
        </div>
      </ActionCard>

      <div>
        <Avatar
          // appearance="primary"
          className="m-2"
          firstName="John"
          lastName="Doe"
          size="tiny"
        />
      </div>
      <AvatarGroup
        className="m-2"
        list={list}
        popoverOptions={{ position: 'bottom', withSearch: true, on: 'click', searchPlaceholder: 'Search User' }}
      />

      <AvatarSelection
        list={list}
        withSearch={true}
        size="tiny"
        className="m-2"
        // onSelect={onSelectHandler}
        searchPlaceholder="Search User"
        // searchComparator={searchComparator}
      />

      <Badge subtle appearance="success" className="m-2">
        Approved
      </Badge>

      <Breadcrumbs list={list1} onClick={(link: string) => console.log(`on-click: ${link}`)} className="m-2" />

      <Button appearance="alert" size="tiny" className="m-2">
        Tiny Basic
      </Button>

      <Button appearance="alert" size="regular">
        Regular Basic
      </Button>

      <Button appearance="alert" size="large" icon="arrow_right" tooltip="Next in rank" />

      <Caption className="m-2">Caption</Caption>

      <>
        <Card shadow="shadow10" className="m-2">
          <CardHeader className="m-2">
            <Text weight="strong" size="large">
              Card Heading
            </Text>
          </CardHeader>
          <CardBody className="m-2">
            <div>Card Body</div>
          </CardBody>
          <CardFooter className="justify-content-end" withSeperator={false}>
            <>
              <Button appearance="basic">Cancel</Button>
              <Button appearance="primary" className="ml-4">
                Submit
              </Button>
            </>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Text weight="strong" size="large">
              Card Heading
            </Text>
          </CardHeader>
          <CardBody>
            <div>Card Body</div>
          </CardBody>
          <CardSubdued className="mt-5">Subdued section.</CardSubdued>
        </Card>
      </>

      <Checkbox
        label="Checkbox"
        onChange={function () {}}
        className="m-2"
        // size="tiny"
      />

      <Chip
        className="m-2"
        clearButton={true}
        icon="assessment"
        label="Chip Label"
        name="chip"
        selected={true}
        onClick={function () {}}
        onClose={function () {}}
        type="selection"
      />

      <ChipGroup
        className="m-2"
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
        onClick={function () {}}
      />

      <div className="bg-secondary-lightest vh-75">
        <Collapsible className="m-2" expanded={expanded} onToggle={setExpanded} hoverable={false}>
          <>
            {expanded && (
              <div className="mt-5 d-flex justify-content-center border-bottom">
                <DatePicker date={new Date()} size="small" />
              </div>
            )}
            <VerticalNav
              className="p-6 border bg-secondary-lightest"
              menus={data}
              expanded={expanded}
              active={active}
              onClick={setActive}
            />
          </>
        </Collapsible>
      </div>

      <Row className="p-6 border bg-secondary-lightest">
        <Column className="p-6 border bg-secondary-lightest">Column 1</Column>
        <Column className="p-6 border bg-secondary-lightest">Column 2</Column>
        <Column className="p-6 border bg-secondary-lightest">Column 3</Column>
        <Column className="p-6 border bg-secondary-lightest">Column 4</Column>
        <Column className="p-6 border bg-secondary-lightest">Column 5</Column>
      </Row>

      <Row>
        <Column size="10">
          <Card shadow="none">
            <CardBody className="p-0">
              <Row className="py-4 px-6">
                <Heading>Assessment Report</Heading>
              </Row>
              <Divider appearance="header" className="m-2" />
              <Row>
                <Column>
                  <div className="p-6">
                    <Heading size="s">Select Assessment</Heading>
                  </div>
                  <Divider />
                  <div className="pl-6">
                    <div className="py-4">
                      <Text>Functional Assessment - Initial</Text>
                    </div>
                    <Divider />
                    <div className="py-4">
                      <Text>Social Influence of Health</Text>
                    </div>
                    <Divider />
                    <div className="py-4">
                      <Text>Social Determinants of Health</Text>
                    </div>
                    <Divider />
                    <div className="py-4">
                      <Text>Functional Assessment - Discharge</Text>
                    </div>
                  </div>
                </Column>
                <Divider vertical={true} />
                <Column>
                  <div className="p-6">
                    <Text appearance="disabled">MSSP - Track 3</Text>
                    <br />
                    <Text small={true}>Medicare</Text>
                    <br />
                    <div className="pt-6">
                      <Text appearance="disabled" small={true}>
                        Subscriber
                      </Text>
                      <br />
                      <Text appearance="disabled">LAWSON, JOY (Self)</Text>
                      <br />
                      <Text weight="medium">ZGP123456789</Text>
                    </div>
                  </div>
                  <Divider />
                  <Row className="p-6">
                    <Column>
                      <Text appearance="disabled" small={true}>
                        Last attr:
                      </Text>
                      <Text className="ml-3" small={true}>
                        04/19
                      </Text>
                    </Column>
                    <Column>
                      <Text appearance="disabled" small={true}>
                        Plan ID:
                      </Text>
                      <Text className="ml-3" small={true}>
                        040
                      </Text>
                    </Column>
                  </Row>
                </Column>
              </Row>
            </CardBody>
          </Card>
        </Column>
      </Row>

      <Dropdown className="m-2" fetchOptions={fetchOptions} />

      <Heading className="m-2" appearance="disabled">
        Heading component have different variants, look for options in knobs tab.
      </Heading>

      <Paragraph className="m-2">Paragraph component have different variants, look for options in knobs tab.</Paragraph>

      <Subheading className="m-2">
        Subheading component have different variants, look for options in knobs tab.
      </Subheading>

      <Text className="m-2">Text component have different variants, look for options in knobs tab.</Text>

      <HelpText
        className="m-2"
        message={'If the number with this code is not available, we will use the next best match'}
      />
      <Icon className="m-2" name="place" />

      <Input
        className="w-25"
        info="sample info tooltip"
        max={30}
        maxLength={30}
        min={1}
        minLength={1}
        name="input"
        onChange={function () {}}
        placeholder="Placeholder"
        type="url"
      />

      <Label className="m-2">Label</Label>

      <Legend iconAppearance="inverse" iconSize={14} className="m-2">
        Legend
      </Legend>

      <Link href="http://innovaccer.com" onClick={function () {}} target="_blank" className="m-2">
        Read more
      </Link>

      <LinkButton
        aria-label="Open"
        icon="keyboard_arrow_down_round"
        iconAlign="right"
        onClick={function () {}}
        className="m-2"
      >
        more details
      </LinkButton>

      <Message
        className="m-2"
        actions={
          <>
            <LinkButton>Action 1</LinkButton>
            <LinkButton className="ml-5">Action 2</LinkButton>
          </>
        }
        description="Design System is a library of reusable components"
        title="Design System"
      />

      <MetaList
        className="m-2"
        list={[
          {
            icon: 'assessment',
            label: 'Meta data',
          },
          {
            icon: 'assessment',
            label: 'Meta data',
          },
        ]}
      />

      <Meter
        className="m-2"
        value={40}
        max={100}
        stepCount={stepCount}
        renderLabel={({ filledSteps, stepCount }: { filledSteps: number; stepCount: number }) =>
          `${filledSteps} out of ${stepCount}`
        }
      />

      <MetricInput
        className="m-2"
        aria-label="Metric input example"
        name="input"
        onChange={function () {}}
        onClick={function () {}}
        placeholder="Placeholder"
        size="regular"
      />

      <OutsideClick className="d-inline-block" onOutsideClick={outsideClickHandler}>
        <Card className="d-flex align-items-center justify-content-center p-10" onClick={insideClickHandler}>
          <Heading>Card</Heading>
        </Card>
      </OutsideClick>

      <Pills className="m-2" appearance="primary">
        10
      </Pills>

      <Placeholder imageSize="large" className="m-2">
        <PlaceholderImage className="m-2" />

        <PlaceholderParagraph className="m-2" />
        <PlaceholderParagraph />
      </Placeholder>

      <div className="w-50">
        <ProgressBar value={10} className="m-2 bg-secondary" />

        <ProgressRing className="m-2" value={50} />
      </div>

      <Radio className="m-2" label="Radio" name="gender" onChange={function () {}} value="Radio" />

      <RangeSlider
        className="my-8"
        defaultValue={[2, 4]}
        label="Slider Label"
        onChange={function () {}}
        stepSize={0.1}
      />

      <Row>
        {cardList.map((cardItem, key) => {
          const { id, iconName, title, description } = cardItem;
          return (
            <Column key={key} size={6}>
              <SelectionCard
                id={id}
                cardValue={cardItem}
                className="p-6 d-flex mr-6"
                onClick={onClickHandler}
                selected={isCardSelected(id)}
              >
                <Icon size={20} name={iconName} />
                <div className="ml-5">
                  <Text weight="strong">{title}</Text>
                  <br />
                  <Text className="pt-2" appearance="subtle">
                    {description}
                  </Text>
                </div>
              </SelectionCard>
            </Column>
          );
        })}
      </Row>

      <Slider key="4" className="my-8" defaultValue={4} label="Slider Label" onChange={function () {}} stepSize={0.1} />

      <Spinner className="m-2" />
      <StatusHint className="m-2" appearance="success">
        Status Hint
      </StatusHint>

      <Switch className="m-2" aria-label="Default Checked Switch" defaultChecked={true} size="regular" />

      <Textarea
        aria-labelledby="Textarea"
        name="Textarea"
        className="m-2"
        onChange={function () {}}
        onClick={function () {}}
        placeholder="Placeholder"
        resize={true}
        rows={3}
      />

      <Toast className="m-2" actions={[]} onClose={function () {}} title="Sample toast" />

      <Chat className="m-2">
        <Chat.ChatBubble className="m-2" type="incoming" incomingOptions={incomingOptions}>
          <Text>Hello, I'd like to schedule an appointment with my cardiologist. Can you help me with that ? </Text>
        </Chat.ChatBubble>

        <Chat.ChatInput className="m-2" />
        <Chat.DateSeparator className="m-2" date="May 21, 2024" />
        <Chat.NewMessage className="m-2" text="2 New Messages" />
        <Chat.UnreadMessage className="m-2" text="2 Unread Messages" />
        <Chat.TypingIndicator className="m-2" text="Joy, Jeff and Thomas are typing..." />
      </Chat>

      <ChipInput
        chipOptions={{
          clearButton: true,
        }}
        placeholder="Add value"
        className="m-2"
      />

      <Button appearance="primary" onClick={() => setOpen(true)}>
        Open
      </Button>
      <Dialog {...options} className="m-2" />

      <Dropzone
        accept="image/jpeg, image/png"
        formatLabel="Accepted formats: jpeg, png"
        onDrop={onDrop}
        className="mb-3"
        sampleFileLink={<LinkButton onClick={handleDownloadClick}>Download sample file</LinkButton>}
      />

      <EditableChipInput className="m-2" {...options11} />

      <EditableDropdown
        className="m-2"
        placeholder="Select Option"
        dropdownOptions={{
          fetchOptions,
          onChange,
        }}
      />

      <EditableInput className="m-2" {...options22} />

      <EmptyState className="m-2">
        <EmptyState.Image
          className="m-2"
          src="https://mds.innovaccer.com/static/media/no-files-empty-files.442ee36a.svg"
        />
        {/* Replace image path used above with imported image file name
      <EmptyState.Image src={noFilesEmptyFiles} /> */}

        <EmptyState.Title>Title goes here</EmptyState.Title>
        <EmptyState.Description>Description goes here</EmptyState.Description>
        <EmptyState.Actions>
          <Button className="mr-4">Secondary action</Button>
          <Button appearance="primary">Primary action</Button>
        </EmptyState.Actions>
      </EmptyState>

      <div className="pt-6 w-50">
        <FileList
          onClick={onClick111}
          fileList={fileList}
          className="m-2"
          actionRenderer={(fileItem: any) => {
            if (fileItem.id === 3) {
              return (
                <>
                  <Button
                    appearance="transparent"
                    icon="refresh"
                    size="regular"
                    onClick={() => onClick111(fileItem)}
                    className={'cursor-pointer'}
                  />
                  <Button
                    appearance="transparent"
                    icon="close"
                    size="regular"
                    onClick={() => onClick111(fileItem)}
                    className={'cursor-pointer ml-2'}
                  />
                </>
              );
            }
            return (
              <Button
                appearance="transparent"
                icon="close"
                size="regular"
                onClick={() => {}}
                className={'cursor-pointer'}
              />
            );
          }}
        />
      </div>

      <FileUploader
        className="m-2"
        // fileList={fileList}
        // onClick={onClick111}
      />

      <div>
        <Button className="m-8" appearance="primary" onClick={openModal}>
          Open Full screen modal
        </Button>

        <FullscreenModal
          open={open}
          onClose={onClose}
          className="m-2"
          headerOptions={{
            heading: 'Heading',
            subHeading: 'Subheading',
          }}
          footerOptions={{
            actions: [
              {
                children: 'Cancel',
                appearance: 'basic',
                onClick: (ev: React.MouseEvent<HTMLElement>) => console.log('Basic button click', ev),
              },
              {
                children: 'Done',
                appearance: 'primary',
                className: 'ml-4',
                onClick: (ev: React.MouseEvent<HTMLElement>) => console.log('Primary button click', ev),
              },
            ],
          }}
        >
          <div className="pb-6">
            <Heading className="pb-3" size="s">
              Description Title
            </Heading>
            <Paragraph>Adding a subheading clearly indicates the hierarchy of the information.</Paragraph>
          </div>
          <div className="pt-6">
            <Paragraph>
              Card Sections include supporting text like an article summary or a healthcare service description.
            </Paragraph>
          </div>
        </FullscreenModal>
      </div>

      <div className="w-25">
        <InputMask className="m-2" icon="calendar_month" mask={dateMask} validators={dateValidator} placeholder="mm/dd/yyyy" />
      </div>

      <KeyValuePair className="d-flex mt-8">
        <KeyValuePair.Key className="mr-7" icon="call" label="Phone" />
        <KeyValuePair.Value className="m-2" value="(555) 555-5555" />
      </KeyValuePair>

      <div>
        <Button appearance="primary" onClick={openModalFn}>
          Open Modal
        </Button>
        <Modal
          open={openModal}
          dimension={dimension}
          backdropClose={backdropClose}
          className="m-2"
          onClose={onCloseModal}
          headerOptions={{
            heading: 'Heading',
            subHeading: 'Subheading',
          }}
          footer={
            <>
              <Button appearance="basic" onClick={() => console.log('Basic button click')}>
                Basic
              </Button>
              <Button appearance="primary" className="ml-4" onClick={() => console.log('Primary button click')}>
                Primary
              </Button>
            </>
          }
        >
          <Text>Modal Body</Text>
          <ModalDescription
            className="m-2"
            title="Description Title"
            description="Adding a subheading clearly indicates the hierarchy of the information."
          />
          <ModalDescription description="Card Sections include supporting text like an article summary or a healthcare service description." />
        </Modal>
      </div>

      <Pagination
        type="basic"
        page={1}
        className="m-2"
        totalPages={50}
        onPageChange={(pageNo: number) => console.log(pageNo)}
      />

      <div className="mb-11">
        <Popover
          position="bottom-start"
          on="click"
          className="m-2"
          trigger={<Button appearance="basic">Open Popover</Button>}
        >
          <div className="p-5">
            <Text>
              I am a popover, you can use me to display links,
              <br />
              interactive elements, avatars, text formatting, meta data etc.
            </Text>
          </div>
        </Popover>
      </div>

      <div>
        <Button appearance="primary" onClick={() => setOpen3(true)}>
          Open Sidesheet
        </Button>
        <Sidesheet {...options3} className="m-2">
          <SidesheetDescription {...sidesheetDescriptionOptions} />
          <SidesheetDescription {...optionsWithoutLabel} />
        </Sidesheet>
      </div>

      <Stepper className="m-2" steps={steps} active={active5} completed={1} onChange={onChange5} />

      <Tabs activeIndex={activeIndex6} onTabChange={onTabChangeHandler} className="mb-6" headerClassName="pl-3">
        <Tab label="All" count={15} className="pl-6">
          <div>All</div>
        </Tab>
        <Tab label="Pending" count={5} className="pl-6">
          <div>Pending</div>
        </Tab>
        <Tab label="Transferred" count={3} className="pl-6">
          <div>Transferred</div>
        </Tab>
        <Tab label="Successful" count={2} className="pl-6">
          <div>Successful</div>
        </Tab>
        <Tab label="Declined" disabled={true} count={5}>
          <div>Declined</div>
        </Tab>
      </Tabs>

      <div className="mb-8 ml-14">
        <Tooltip className="m-2" tooltip="An awesome tooltip">
          <Button>Hover over me</Button>
        </Tooltip>
      </div>

      <VerificationCodeInput
        autoFocus={true}
        onBlur={function () {}}
        onChange={function () {}}
        onComplete={function () {}}
        onFocus={function () {}}
        placeholder="-"
        className="m-2"
        value="6543"
      />

      <Calendar
        date={new Date('2023-01-10T18:30:00.000Z')}
        disabledAfter={new Date('2028-01-19T18:30:00.000Z')}
        disabledBefore={new Date('2015-01-19T18:30:00.000Z')}
        events={{
          '01/12/2023': true,
        }}
        firstDayOfWeek="saturday"
        className="m-2"
        onDateChange={function () {}}
        onRangeChange={function () {}}
      />

      <ChoiceList
        choices={[
          {
            label: 'Male',
            name: 'gender',
            value: 'Male',
          },
          {
            label: 'Female',
            name: 'gender',
            value: 'Female',
          },
          {
            label: 'Other',
            name: 'gender',
            value: 'Other',
          },
        ]}
        onChange={function () {}}
        title="Gender"
        className="m-2"
      />

      <Card className="d-inline-flex" shadow="light">
        <DatePicker
          className="m-2"
          disabledAfter={new Date('2028-01-19T18:30:00.000Z')}
          disabledBefore={new Date('2015-01-19T18:30:00.000Z')}
          inputFormat="dd-mm-yyyy"
          onDateChange={function () {}}
          outputFormat="yyyy-mm-dd"
          view="month"
        />
      </Card>

      <Card className="d-inline-flex" shadow="light">
        <DateRangePicker
          className="m-2"
          disabledAfter={new Date('2028-01-19T18:30:00.000Z')}
          disabledBefore={new Date('2015-01-19T18:30:00.000Z')}
          endDate={new Date('2023-06-26T18:30:00.000Z')}
          firstDayOfWeek="thursday"
          monthsInView={1}
          onRangeChange={function () {}}
          startDate={new Date('2023-06-19T18:30:00.000Z')}
          view="month"
        >
          <React.Fragment key=".0" />
        </DateRangePicker>
      </Card>

      <div className="bg-secondary-lightest py-6">
        <HorizontalNav
          className="w-100 justify-content-center"
          menus={data6}
          active={active6}
          onClick={onClickHandler6}
        />
      </div>

      <InlineMessage className="m-2" appearance="info" description="There are two new referral requests." />

      <Card shadow="none">
        <CardHeader>
          <Heading size="s">Select Assessment</Heading>
        </CardHeader>

        <Listbox draggable={true} className="m-2">
          {data9.map((item, key) => {
            return <Listbox.Item key={key}>{item.assessment}</Listbox.Item>;
          })}
        </Listbox>
      </Card>

      <Row>
        <Column size={11}>
          <div className="bg-secondary-lightest">
            <PageHeader className="m-2" title="Dashboard" separator={false} navigation={navigation} actions={actions} />
          </div>
        </Column>
      </Row>

      <Select onSelect={onSelectHandler} className="m-2">
        <Select.List>
          {medicineList.map((item, key) => {
            return (
              <Select.Option key={key} option={{ label: item.label, value: item.value }}>
                {item.label}
              </Select.Option>
            );
          })}
        </Select.List>
      </Select>

      <div className="bg-secondary-lightest vh-75">
        <VerticalNav menus={data8} expanded={true} active={active8} onClick={onClickHandler8} className="m-2" />
      </div>

      <TimePicker className="m-2" withSearch={true} disabledSlotList={['12:45 AM', '01:00 AM']} id="12-hour" />

      <TimePicker
        inputFormat={'hh:mm AM'}
        outputFormat={'hh:mm AM'}
        className="m-2"
      />

      <div className="w-25">
        <TextField
          max={maxLimit}
          value={inputText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setInputText(e.target.value);
          }}
          label="Username"
          helpText={helpText}
          className="m-2 bg-primary"
          data-test="test"
        />
      </div>

      <Heading>Table Component</Heading>

      <div className="vh-50">
        <Card className="h-100 overflow-hidden">
          <Table
            page={1}
            data={tableData}
            schema={schema1 as GridProps['schema']}
            showMenu={true}
            className="m-2"
            withHeader={true}
            withPagination={true}
            pageSize={4}
            headerOptions={{
              withSearch: true,
            }}
          />
        </Card>
      </div>

      <Heading>Grid Component</Heading>

      <div className="vh-50">
        <Card className="h-100 overflow-hidden">
          <Grid
            page={1}
            data={tableData}
            schema={schema1 as GridProps['schema']}
            showMenu={true}
            className="m-2"
            withHeader={true}
            withPagination={true}
            pageSize={4}
            headerOptions={{
              withSearch: true,
            }}
          />
        </Card>
      </div>
      
      <Heading>List Component</Heading>

      <div className="vh-50">
        <Card className="h-100 overflow-hidden">
          <List
            page={1}
            data={tableData}
            schema={schema1}
            showMenu={true}
            className="m-2"
            withHeader={true}
            withPagination={true}
            pageSize={4}
            headerOptions={{
              withSearch: true,
            }}
          />
        </Card>
      </div>

      <Heading>AI Components</Heading>

      {/* AI Components */}
      <AIButton className="m-2">
        AI Button
      </AIButton>
      
      <AIButton withSparkle={false}>No Sparkle</AIButton>

      <Sara state="resting" className="m-2" />
      <Sara className="m-2" />

      <SaraSparkle className="m-2" />

      <SaraSparkle
        size={64}
        state="listening"
      />

      <SaraSparkle
        size={64}
        state="short-processing"
      />

      <SaraSparkle
        size={64}
        state="long-processing"
      />

      <AIChip
        className="m-2"
        icon="edit_note"
        label="AI chip"
      />

      <AIIconButton
        className="m-2"
        icon="import_contacts"
        tooltip="Import Contacts"
      />      

      <AIResponse showAvatar={true} metaData={metaDataRenderer} className="m-2">
        <AIResponse.Body>
          <Text>Hello, would you like to book an appointment with your cardiologist?</Text>
        </AIResponse.Body>

        <AIResponse.ActionBar>
          <div className="d-flex">
            <AIResponse.Button
              icon="push_pin"
              className="mr-3"
              selected={selectedList.pin}
              onClick={() => setSelectedList({ ...selectedList, pin: !selectedList.pin })}
            >
              Pin
            </AIResponse.Button>
            <AIResponse.Button icon="content_copy" iconType="rounded">Copy</AIResponse.Button>
          </div>

          <div className="d-flex align-items-center">
            <AIResponse.Button icon="sync" className="mr-3" tooltip="Regenerate" />
            <AIResponse.Button
              icon="thumb_up"
              iconType="outlined"
              className="mr-3"
              tooltip="Good Response"
              selected={selectedList.like && !selectedList.dislike}
              onClick={() => setSelectedList({ ...selectedList, like: !selectedList.like, dislike: false })}
            />
            <AIResponse.Button
              icon="thumb_down"
              iconType="outlined"
              className="mr-3"
              tooltip="Bad Response"
              selected={selectedList.dislike && !selectedList.like}
              onClick={() => setSelectedList({ ...selectedList, dislike: !selectedList.dislike, like: false })}
            />

            <Menu className="m-2 p-4 bg-primary" trigger={<Menu.Trigger className="AIResponse-menu-button" appearance="transparent" size="tiny" />}>
              <Menu.List>
                <Menu.Item>Share</Menu.Item>
                <Menu.Item>View source</Menu.Item>
                <Menu.Item>Report a problem</Menu.Item>
              </Menu.List>
            </Menu>
          </div>
        </AIResponse.ActionBar>
      </AIResponse>

      <FileUploaderList className="m-2" fileList={fileList} />

      <Tabs activeIndex={1} onTabChange={onTabChangeHandler} className="mb-6" headerClassName="pl-3">
        <Tab label="All" count={15} className="pl-6">
          <div>All</div>
        </Tab>
        <Tab label="Pending" count={5} className="pl-6">
          <div>Pending</div>
        </Tab>
        <Tab label="Transferred" count={3} className="pl-6">
          <div>Transferred</div>
        </Tab>
        <Tab label="Successful" count={2} className="pl-6">
          <div>Successful</div>
        </Tab>
        <Tab label="Declined" disabled={true} count={5}>
          <div>Declined</div>
        </Tab>
      </Tabs>

    </div>
  );
}

export default Test;
