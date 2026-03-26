# Accessibility Props Audit

| Component | Has Passable A11y Props | A11y API Type | Passable Props / Pattern | Applied To | Example from Code | Notes |
|---|---|---|---|---|---|---|
| ActionCard | Yes | Extended native props, Custom a11y props | Extends BaseHtmlProps<HTMLDivElement>; `label` custom props | Root + internal | `interface ActionCardProps extends BaseHtmlProps<HTMLDivElement>` |  |
| AIButton | Yes | Extended native props, Custom a11y props | Extends BaseHtmlProps<HTMLButtonElement>; `label` custom props | Root + internal | `interface AIButtonProps extends BaseHtmlProps<HTMLButtonElement>` |  |
| AIChip | Yes | Extended native props, Custom a11y props | Extends React.ComponentProps<'button'>; `label` custom props | Root + internal | `interface AIChipProps extends React.ComponentProps<'button'>` |  |
| AIIconButton | Yes | Extended native props, Custom a11y props | Extends BaseHtmlProps<HTMLButtonElement>; `label` custom props | Root + internal | `interface AIIconButtonProps extends BaseHtmlProps<HTMLButtonElement>` |  |
| AIResponse | Yes | Extended native props, Custom a11y props | Extends BaseHtmlProps<HTMLDivElement>; `label` custom props | Root + internal | `interface AIResponseProps extends BaseHtmlProps<HTMLDivElement>` |  |
| Avatar | Yes | Custom a11y props | `role`, `tabIndex`, `aria-label`, `aria-hidden` custom props | Internal element | `role` custom prop |  |
| AvatarGroup | Yes | Custom a11y props | `aria-label`, `aria-labelledby` custom props | Internal element | `aria-label` custom prop |  |
| AvatarSelection | Yes | Custom a11y props | `aria-label`, `aria-labelledby` custom props | Internal element | `aria-label` custom prop |  |
| Backdrop | No | No passable a11y props | None | None | N/A |  |
| Badge | Yes | Extended native props, Custom a11y props | Extends BaseHtmlProps<HTMLSpanElement>; `label` custom props | Root + internal | `interface BadgeProps extends BaseHtmlProps<HTMLSpanElement>` |  |
| Breadcrumbs | No | No passable a11y props | None | None | N/A |  |
| Button | Yes | Extended native props, Custom a11y props | Extends BaseHtmlProps<HTMLButtonElement>; `label` custom props | Root + internal | `interface ButtonProps extends BaseHtmlProps<HTMLButtonElement>` |  |
| Calendar | Yes | Custom a11y props | `aria-label`, `aria-labelledby` custom props | Internal element | `aria-label` custom prop |  |
| Caption | No | No passable a11y props | None | None | N/A |  |
| Card | Yes | Extended native props, Custom a11y props | Extends BaseHtmlProps<HTMLDivElement>; `label` custom props | Root + internal | `interface CardProps extends BaseHtmlProps<HTMLDivElement>` |  |
| CardBody | No | No passable a11y props | None | None | N/A |  |
| CardFooter | No | No passable a11y props | None | None | N/A |  |
| CardHeader | No | No passable a11y props | None | None | N/A |  |
| CardSubdued | Yes | Extended native props, Custom a11y props | Extends BaseHtmlProps<HTMLDivElement>; `label` custom props | Root + internal | `interface CardSubduedProps extends BaseHtmlProps<HTMLDivElement>` |  |
| Chat | No | No passable a11y props | None | None | N/A |  |
| ChatMessage | No | No passable a11y props | None | None | N/A |  |
| Checkbox | Yes | Custom a11y props | `label`, `tabIndex`, `id`, `role`, `aria-activedescendant`... custom props | Internal element | `label` custom prop |  |
| Chip | Yes | Custom a11y props | `label`, `role`, `aria-label`, `aria-labelledby` custom props | Internal element | `label` custom prop |  |
| ChipGroup | No | No passable a11y props | None | None | N/A |  |
| ChipInput | Yes | Custom a11y props, Nested a11y props | `aria-label`, `aria-labelledby`, `aria-describedby` custom props; `chipOptions` nested props | Internal element | `aria-label` custom prop |  |
| ChoiceList | Yes | Custom a11y props | `aria-label`, `aria-labelledby` custom props | Internal element | `aria-label` custom prop |  |
| Collapsible | No | No passable a11y props | None | None | N/A |  |
| Column | Yes | Extended native props, Custom a11y props | Extends BaseHtmlProps<HTMLDivElement>; `label` custom props | Root + internal | `interface ColumnProps extends BaseHtmlProps<HTMLDivElement>` |  |
| Combobox | Yes | Custom a11y props | `aria-label`, `aria-labelledby` custom props | Internal element | `aria-label` custom prop |  |
| DatePicker | Yes | Custom a11y props, Nested a11y props | `aria-label`, `aria-labelledby` custom props; `inputOptions` nested props | Internal element | `aria-label` custom prop |  |
| DateRangePicker | Yes | Custom a11y props, Nested a11y props | `aria-label`, `aria-labelledby` custom props; `inputOptions`, `startInputOptions`, `endInputOptions` nested props | Internal element | `aria-label` custom prop |  |
| Dialog | Yes | Custom a11y props | `description` custom props | Internal element | `description` custom prop |  |
| Divider | No | No passable a11y props | None | None | N/A |  |
| Dropdown | Yes | Custom a11y props, Nested a11y props | `tabIndex`, `aria-label`, `aria-labelledby` custom props; `totalOptions`, `triggerOptions`, `fetchOptions` nested props | Internal element | `tabIndex` custom prop |  |
| Dropzone | No | No passable a11y props | None | None | N/A |  |
| EditableChipInput | Yes | Nested a11y props | `chipInputOptions` nested props | Internal element | `chipInputOptions` nested prop |  |
| EditableDropdown | Yes | Nested a11y props | `dropdownOptions` nested props | Internal element | `dropdownOptions` nested prop |  |
| EditableInput | Yes | Custom a11y props, Nested a11y props | `errorMessage` custom props; `inputOptions` nested props | Internal element | `errorMessage` custom prop |  |
| EmptyState | Yes | Custom a11y props | `description` custom props | Internal element | `description` custom prop |  |
| FileList | No | No passable a11y props | None | None | N/A |  |
| FileUploader | Yes | Custom a11y props | `id` custom props | Internal element | `id` custom prop |  |
| FileUploaderList | No | No passable a11y props | None | None | N/A |  |
| Flex | Yes | Extended native props, Custom a11y props | Extends BaseHtmlProps<HTMLDivElement>; `label` custom props | Root + internal | `interface FlexProps extends BaseHtmlProps<HTMLDivElement>` |  |
| FullscreenModal | Yes | Custom a11y props, Nested a11y props | `aria-labelledby`, `aria-label`, `aria-describedby` custom props; `headerOptions`, `footerOptions` nested props | Internal element | `aria-labelledby` custom prop |  |
| Grid | Yes | Custom a11y props, Nested a11y props | `aria-label`, `aria-labelledby` custom props; `virtualRowOptions`, `infiniteScrollOptions` nested props | Internal element | `aria-label` custom prop |  |
| GridCell | No | No passable a11y props | None | None | N/A |  |
| Heading | Yes | Extended native props, Custom a11y props | Extends BaseHtmlProps<HTMLHeadingElement>; `label` custom props | Root + internal | `interface HeadingProps extends BaseHtmlProps<HTMLHeadingElement>` |  |
| HelpText | No | No passable a11y props | None | None | N/A |  |
| HorizontalNav | Yes | Custom a11y props | `aria-label` custom props | Internal element | `aria-label` custom prop |  |
| Icon | Yes | Custom a11y props | `tabIndex`, `aria-hidden` custom props | Internal element | `tabIndex` custom prop |  |
| InlineMessage | Yes | Custom a11y props | `description` custom props | Internal element | `description` custom prop |  |
| Input | Yes | Extended native props, Custom a11y props | Extends BaseHtmlProps<HTMLInputElement>; `label` custom props | Root + internal | `interface InputProps extends BaseHtmlProps<HTMLInputElement>` |  |
| InputMask | Yes | Custom a11y props | `label`, `id`, `tabIndex`, `role`, `aria-activedescendant`... custom props | Internal element | `label` custom prop |  |
| KeyValuePair | No | No passable a11y props | None | None | N/A |  |
| Label | Yes | Extended native props, Custom a11y props | Extends BaseHtmlProps<HTMLLabelElement>; `label` custom props | Root + internal | `interface LabelProps extends BaseHtmlProps<HTMLLabelElement>` |  |
| Legend | No | No passable a11y props | None | None | N/A |  |
| Link | Yes | Custom a11y props | `id`, `label`, `tabIndex`, `role`, `aria-activedescendant`... custom props | Internal element | `id` custom prop |  |
| LinkButton | Yes | Extended native props, Custom a11y props | Extends BaseHtmlProps<HTMLButtonElement>; `label` custom props | Root + internal | `interface LinkButtonProps extends BaseHtmlProps<HTMLButtonElement>` |  |
| List | Yes | Custom a11y props, Nested a11y props | `aria-label`, `aria-labelledby` custom props; `headerOptions`, `virtualRowOptions`, `infiniteScrollOptions` nested props | Internal element | `aria-label` custom prop |  |
| Listbox | Yes | Extended native props, Custom a11y props | Extends BaseHtmlProps<HTMLUListElement | HTMLDivElement>; `label` custom props | Root + internal | `interface ListboxProps extends BaseHtmlProps<HTMLUListElement | HTMLDivElement>` |  |
| MdsGrid | Yes | Extended native props, Custom a11y props | Extends BaseHtmlProps<HTMLDivElement>; `label` custom props | Root + internal | `interface MdsGridProps extends BaseHtmlProps<HTMLDivElement>` |  |
| Menu | Yes | Custom a11y props | `aria-label`, `aria-labelledby` custom props | Internal element | `aria-label` custom prop |  |
| Message | Yes | Custom a11y props | `description` custom props | Internal element | `description` custom prop |  |
| MetaList | No | No passable a11y props | None | None | N/A |  |
| Meter | Yes | Custom a11y props | `ariaLabel`, `id`, `tabIndex`, `role`, `aria-activedescendant`... custom props | Internal element | `ariaLabel` custom prop |  |
| MetricInput | Yes | Extended native props, Custom a11y props | Extends BaseHtmlProps<HTMLInputElement>; `label` custom props | Root + internal | `interface MetricInputProps extends BaseHtmlProps<HTMLInputElement>` |  |
| Modal | Yes | Custom a11y props, Nested a11y props | `aria-labelledby` custom props; `headerOptions`, `footerOptions` nested props | Internal element | `aria-labelledby` custom prop |  |
| ModalBody | No | No passable a11y props | None | None | N/A |  |
| ModalDescription | Yes | Custom a11y props | `description` custom props | Internal element | `description` custom prop |  |
| ModalFooter | No | No passable a11y props | None | None | N/A |  |
| ModalHeader | No | No passable a11y props | None | None | N/A |  |
| MultiSlider | Yes | Custom a11y props | `label` custom props | Internal element | `label` custom prop |  |
| Navigation | Yes | Custom a11y props | `aria-label` custom props | Internal element | `aria-label` custom prop |  |
| OutsideClick | Yes | Extended native props, Custom a11y props | Extends BaseHtmlProps<HTMLDivElement>; `label` custom props | Root + internal | `interface OutsideClickProps extends BaseHtmlProps<HTMLDivElement>` |  |
| PageHeader | Yes | Custom a11y props | `aria-label` custom props | Internal element | `aria-label` custom prop |  |
| Pagination | No | No passable a11y props | None | None | N/A |  |
| Paragraph | Yes | Extended native props, Custom a11y props | Extends BaseHtmlProps<HTMLParagraphElement>; `label` custom props | Root + internal | `interface ParagraphProps extends BaseHtmlProps<HTMLParagraphElement>` |  |
| Pills | Yes | Custom a11y props | `aria-label` custom props | Internal element | `aria-label` custom prop |  |
| Placeholder | No | No passable a11y props | None | None | N/A |  |
| PlaceholderImage | No | No passable a11y props | None | None | N/A |  |
| PlaceholderParagraph | No | No passable a11y props | None | None | N/A |  |
| Popover | No | No passable a11y props | None | None | N/A |  |
| ProgressBar | No | No passable a11y props | None | None | N/A |  |
| ProgressRing | No | No passable a11y props | None | None | N/A |  |
| Radio | Yes | Custom a11y props | `label`, `id`, `tabIndex`, `role`, `aria-activedescendant`... custom props | Internal element | `label` custom prop |  |
| RangeSlider | Yes | Custom a11y props | `label` custom props | Internal element | `label` custom prop |  |
| Row | Yes | Extended native props, Custom a11y props | Extends BaseHtmlProps<HTMLDivElement>; `label` custom props | Root + internal | `interface RowProps extends BaseHtmlProps<HTMLDivElement>` |  |
| Sara | Yes | Extended native props, Custom a11y props | Extends BaseHtmlProps<HTMLDivElement>; `label` custom props | Root + internal | `interface SaraProps extends BaseHtmlProps<HTMLDivElement>` |  |
| SaraSparkle | Yes | Extended native props, Custom a11y props | Extends BaseHtmlProps<HTMLDivElement>; `label` custom props | Root + internal | `interface SaraSparkleProps extends BaseHtmlProps<HTMLDivElement>` |  |
| SegmentedControl | No | No passable a11y props | None | None | N/A |  |
| Select | Yes | Nested a11y props | `triggerOptions` nested props | Internal element | `triggerOptions` nested prop |  |
| SelectionCard | Yes | Extended native props, Custom a11y props | Extends BaseHtmlProps<HTMLDivElement>; `label` custom props | Root + internal | `interface SelectionCardProps extends BaseHtmlProps<HTMLDivElement>` |  |
| Sidesheet | Yes | Custom a11y props, Nested a11y props | `aria-labelledby` custom props; `headerOptions`, `footerOptions` nested props | Internal element | `aria-labelledby` custom prop |  |
| Slider | Yes | Custom a11y props | `label` custom props | Internal element | `label` custom prop |  |
| Spinner | Yes | Custom a11y props | `aria-label` custom props | Internal element | `aria-label` custom prop |  |
| StatusHint | No | No passable a11y props | None | None | N/A |  |
| Stepper | No | No passable a11y props | None | None | N/A |  |
| Subheading | Yes | Extended native props, Custom a11y props | Extends BaseHtmlProps<HTMLHeadingElement>; `label` custom props | Root + internal | `interface SubheadingProps extends BaseHtmlProps<HTMLHeadingElement>` |  |
| Switch | Yes | Custom a11y props | `label`, `id`, `tabIndex`, `role`, `aria-activedescendant`... custom props | Internal element | `label` custom prop |  |
| Tab | Yes | Custom a11y props | `label` custom props | Internal element | `label` custom prop |  |
| Table | Yes | Custom a11y props, Nested a11y props | `aria-label`, `aria-labelledby` custom props; `headerOptions`, `virtualRowOptions`, `infiniteScrollOptions` nested props | Internal element | `aria-label` custom prop |  |
| Tabs | Yes | Custom a11y props | `aria-labelledby` custom props | Internal element | `aria-labelledby` custom prop |  |
| TabsWrapper | No | No passable a11y props | None | None | N/A |  |
| Text | Yes | Extended native props, Custom a11y props | Extends BaseHtmlProps<HTMLSpanElement>; `label` custom props | Root + internal | `interface TextProps extends BaseHtmlProps<HTMLSpanElement>` |  |
| Textarea | Yes | Extended native props, Custom a11y props | Extends BaseHtmlProps<HTMLTextAreaElement>; `label` custom props | Root + internal | `interface TextareaProps extends BaseHtmlProps<HTMLTextAreaElement>` |  |
| TextField | Yes | Custom a11y props | `label`, `id`, `tabIndex`, `role`, `aria-activedescendant`... custom props | Internal element | `label` custom prop |  |
| TimePicker | Yes | Custom a11y props, Nested a11y props | `aria-label`, `id` custom props; `inputOptions`, `fetchTimeOptions` nested props | Internal element | `aria-label` custom prop |  |
| Toast | No | No passable a11y props | None | None | N/A |  |
| Tooltip | No | No passable a11y props | None | None | N/A |  |
| VerificationCodeInput | Yes | Custom a11y props | `label`, `id`, `tabIndex`, `role`, `aria-activedescendant`... custom props | Internal element | `label` custom prop |  |
| VerticalNav | No | No passable a11y props | None | None | N/A |  |
