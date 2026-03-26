# Storybook Accessibility Props Audit

This document tracks the implementation of accessibility prop tables in Storybook for all components, cross-referenced against `a11y-props-audit-gemini.md` and verified against actual component source code.

## Checklist Criteria
1. **Table Exists**: Whether a table already exists in the storybook or not. If not, create one.
2. **Relevant Props**: Only the a11y props related & relevant to that component are shown.
3. **Availability**: How are the props available (via extending, custom props, etc.).
4. **False Display**: Are there any false display of props which are just displayed but not available.
5. **Nested Components**: If the component has any nested component which also has its own a11y props by any method - are they being displayed separately in a tab of the table.
6. **Fixed/Calculated Props**: Whether any component has table and shows a11y prop available to dev, but in reality it either has a fixed a11y label/attribute or directly calculates without ability for dev to pass.

## Gemini Audit Corrections

The gemini audit (`a11y-props-audit-gemini.md`) incorrectly classified several UI content props as accessibility props. These are **not** a11y props:
- `label` (on MultiSlider, Slider, RangeSlider, Tab) — visible UI text, not an aria attribute
- `description` (on EmptyState, InlineMessage, Message, ModalDescription, Dialog) — visible content text
- `id` (on FileUploader) — standard HTML attribute passed to internal `<input>`, not an a11y prop
- `aria-label` (on Navigation) — component is deprecated; does manual pass-through to children

Similarly, `virtualRowOptions`, `infiniteScrollOptions`, and `headerOptions` (on Grid, List, Table) are **numeric/config objects** with no a11y attribute support.

## Component Audit Status

| Component | 1. Table Exists | 2. Relevant Props | 3. Availability | 4. False Display | 5. Nested Components | 6. Fixed/Calculated | Status / Notes |
|---|---|---|---|---|---|---|---|
| ActionCard | Yes | Yes | Extended native props (BaseHtmlProps\<HTMLDivElement\>) | No | N/A | `role` and `tabIndex` are calculated but overridable | Done |
| AIButton | Yes | Yes | Extended native props (BaseHtmlProps\<HTMLButtonElement\>) | No | N/A | No | Added to registry |
| AIChip | Yes | Yes | Extended native props (React.ComponentProps\<'button'\>) | No | N/A | No | Added to registry |
| AIIconButton | Yes | Yes | Extended native props (BaseHtmlProps\<HTMLButtonElement\>) | No | N/A | No | Added to registry |
| AIResponse | Yes | Yes | Extended native props (BaseHtmlProps\<HTMLDivElement\>) | No | N/A | No | Added to registry |
| Avatar | Yes | Yes | Custom props (role, tabIndex, aria-label) | No | N/A | No | Done |
| AvatarGroup | Yes | Yes | Custom props (aria-label, aria-labelledby) | No | N/A | No | Added to registry |
| AvatarSelection | Yes | Yes | Custom props (aria-label, aria-labelledby) | No | N/A | No | Added to registry |
| Backdrop | N/A | N/A | N/A | N/A | N/A | N/A | No passable a11y props |
| Badge | Yes | Yes | Extended native props (BaseHtmlProps\<HTMLSpanElement\>) | No | N/A | No | Added to registry |
| Breadcrumbs | N/A | N/A | N/A | N/A | N/A | N/A | No passable a11y props (BaseProps only) |
| Button | Yes | Yes | Extended native props (BaseHtmlProps\<HTMLButtonElement\>) | No | N/A | No | Done |
| Calendar | Yes | Yes | Custom props (aria-label, aria-labelledby) | No | N/A | No | Added to registry |
| Caption | N/A | N/A | N/A | N/A | N/A | N/A | No passable a11y props |
| Card | Yes | Yes | Extended native props (BaseHtmlProps\<HTMLDivElement\>) | No | N/A | No | Done |
| CardBody | N/A | N/A | N/A | N/A | N/A | N/A | No passable a11y props |
| CardFooter | N/A | N/A | N/A | N/A | N/A | N/A | No passable a11y props |
| CardHeader | N/A | N/A | N/A | N/A | N/A | N/A | No passable a11y props |
| CardSubdued | Yes | Yes | Extended native props (BaseHtmlProps\<HTMLDivElement\>) | No | N/A | No | Added to registry |
| Chat | N/A | N/A | N/A | N/A | N/A | N/A | No passable a11y props |
| ChatMessage | N/A | N/A | N/A | N/A | N/A | N/A | No passable a11y props |
| Checkbox | Yes | Yes | Custom props (OmitNativeProps\<HTMLInputElement\>) | No | N/A | No | Done |
| Chip | Yes | Yes | Custom props (role, aria-label, aria-labelledby) | No | N/A | No | Done |
| ChipGroup | N/A | N/A | N/A | N/A | N/A | N/A | No passable a11y props |
| ChipInput | Yes | Yes | Custom props (aria-label, aria-labelledby, aria-describedby) | No | Yes — chipOptions tab (role) | No | Updated: added nested chipOptions tab |
| ChoiceList | Yes | Yes | Custom props (aria-label, aria-labelledby) | No | N/A | No | Done |
| Collapsible | N/A | N/A | N/A | N/A | N/A | N/A | No passable a11y props |
| Column | Yes | Yes | Extended native props (BaseHtmlProps\<HTMLDivElement\>) | No | N/A | No | Added to registry |
| Combobox | Yes | Yes | Custom props (aria-label, aria-labelledby) | No | N/A | No | Added to registry |
| DatePicker | Yes | Yes | Custom props (aria-label, aria-labelledby) | No | Yes — inputOptions tab (textbox props) | No | Added to registry with nested tabs |
| DateRangePicker | Yes | Yes | Custom props (aria-label, aria-labelledby) | No | Yes — inputOptions, startInputOptions, endInputOptions tabs | No | Added to registry with nested tabs |
| Dialog | N/A | N/A | N/A | N/A | N/A | N/A | Deprecated; `description` is visible text, not a11y prop |
| Divider | N/A | N/A | N/A | N/A | N/A | N/A | No passable a11y props |
| Dropdown | Yes | Yes | Custom props (aria-label, aria-labelledby, optionsAriaLabel, tabIndex) | No | N/A | No | Added to registry |
| Dropzone | N/A | N/A | N/A | N/A | N/A | N/A | No passable a11y props |
| EditableChipInput | Yes | Yes | Nested props only | No | Yes — chipInputOptions tab (aria-label, aria-labelledby, aria-describedby) | No | Added to registry with nested tabs |
| EditableDropdown | Yes | Yes | Nested props only | No | Yes — dropdownOptions tab (aria-label, aria-labelledby, optionsAriaLabel, tabIndex) | No | Added to registry with nested tabs |
| EditableInput | Yes | Yes | Nested props only | No | Yes — inputOptions tab (textbox props) | No | Added to registry with nested tabs |
| EmptyState | N/A | N/A | N/A | N/A | N/A | N/A | `description` is visible text, not a11y prop (BaseProps only) |
| FileList | N/A | N/A | N/A | N/A | N/A | N/A | No passable a11y props |
| FileUploader | N/A | N/A | N/A | N/A | N/A | N/A | `id` is a standard HTML attr for input, not a11y prop |
| FileUploaderList | N/A | N/A | N/A | N/A | N/A | N/A | No passable a11y props |
| Flex | Yes | Yes | Extended native props (BaseHtmlProps\<HTMLDivElement\>) | No | N/A | No | Added to registry |
| FullscreenModal | Yes | Yes | Custom props (aria-labelledby, aria-label, aria-describedby) | No | N/A — footerOptions.actions[] is ButtonProps[] constructed by dev (full control) | `role="dialog"`, `aria-modal` are hardcoded | Done |
| Grid | Yes | Yes | Custom props (aria-label, aria-labelledby) | No | N/A | No | virtualRowOptions/infiniteScrollOptions are numeric config, no a11y |
| GridCell | N/A | N/A | N/A | N/A | N/A | N/A | No passable a11y props |
| Heading | Yes | Yes | Extended native props (BaseHtmlProps\<HTMLHeadingElement\>) | No | N/A | No | Added to registry; renders semantic h1-h5 |
| HelpText | N/A | N/A | N/A | N/A | N/A | N/A | No passable a11y props |
| HorizontalNav | Yes | Yes | Custom props (aria-label) | No | N/A | No | Done |
| Icon | Yes | Yes | Custom props (aria-label, aria-hidden, tabIndex) | No | N/A | `aria-hidden` only effective without onClick; `tabIndex` only with onClick | Done |
| InlineMessage | N/A | N/A | N/A | N/A | N/A | N/A | `description` is visible text, not a11y prop (BaseProps only) |
| Input | Yes | Yes | Extended native props (BaseHtmlProps\<HTMLInputElement\>) | No | N/A | `tabIndex` overridden internally (readOnly ? -1 : undefined) | Done |
| InputMask | Yes | Yes | Extended native props (inherits InputProps) | No | N/A | Inherits Input's tabIndex override | Done |
| KeyValuePair | N/A | N/A | N/A | N/A | N/A | N/A | No passable a11y props |
| Label | Yes | Yes | Extended native props (BaseHtmlProps\<HTMLLabelElement\>) | No | N/A | No | Added to registry; aria-* reaches inner \<label\> via rest spread |
| Legend | N/A | N/A | N/A | N/A | N/A | N/A | No passable a11y props |
| Link | Yes | Yes | Extended native props (OmitNativeProps\<HTMLLinkElement\>) | No | N/A | No | Done |
| LinkButton | Yes | Yes | Extended native props (BaseHtmlProps\<HTMLButtonElement\>) | No | N/A | No | Done |
| List | Yes | Yes | Custom props (aria-label, aria-labelledby) | No | N/A | No | headerOptions/virtualRowOptions/infiniteScrollOptions are config, no a11y |
| Listbox | Yes | Yes | Extended native props (BaseHtmlProps\<HTMLUListElement\>) | No | N/A | No | Done |
| MdsGrid | Yes | Yes | Extended native props (BaseHtmlProps\<HTMLDivElement\>) | No | N/A | No | Added to registry |
| Menu | Yes | Yes | Custom props (aria-label, aria-labelledby) | No | N/A | No | Added to registry |
| Message | N/A | N/A | N/A | N/A | N/A | N/A | `description` is visible text; `role` is hardcoded internally |
| MetaList | N/A | N/A | N/A | N/A | N/A | N/A | No passable a11y props |
| Meter | Yes | Yes | Custom props (BaseProps + HTMLAttributes) | No | N/A | No | Done |
| MetricInput | Yes | Yes | Extended native props (BaseHtmlProps\<HTMLInputElement\>) | No | N/A | No | Done |
| Modal | Yes | Yes | Custom props (aria-labelledby) | No | N/A — footerOptions.actions[] is ButtonProps[] constructed by dev (full control) | `role="dialog"`, `aria-modal` are hardcoded | Done |
| ModalBody | N/A | N/A | N/A | N/A | N/A | N/A | No passable a11y props |
| ModalDescription | N/A | N/A | N/A | N/A | N/A | N/A | `description` is visible text, not a11y prop |
| ModalFooter | N/A | N/A | N/A | N/A | N/A | N/A | No passable a11y props |
| ModalHeader | N/A | N/A | N/A | N/A | N/A | N/A | No passable a11y props |
| MultiSlider | N/A | N/A | N/A | N/A | N/A | N/A | `label` is visible text, not a11y prop; `aria-disabled` hardcoded internally |
| Navigation | N/A | N/A | N/A | N/A | N/A | N/A | Deprecated; does manual `aria-label` pass-through to children |
| OutsideClick | Yes | Yes | Extended native props (BaseHtmlProps\<HTMLDivElement\>) | No | N/A | No | Added to registry |
| PageHeader | Yes | Yes | Custom props (aria-label) | No | N/A | No | Added to registry |
| Pagination | N/A | N/A | N/A | N/A | N/A | N/A | No passable a11y props |
| Paragraph | Yes | Yes | Extended native props (BaseHtmlProps\<HTMLParagraphElement\>) | No | N/A | No | Added to registry |
| Pills | Yes | Yes | Custom props (aria-label) | No | N/A | No | Done |
| Placeholder | N/A | N/A | N/A | N/A | N/A | N/A | No passable a11y props |
| PlaceholderImage | N/A | N/A | N/A | N/A | N/A | N/A | No passable a11y props |
| PlaceholderParagraph | N/A | N/A | N/A | N/A | N/A | N/A | No passable a11y props |
| Popover | N/A | N/A | N/A | N/A | N/A | N/A | No passable a11y props |
| ProgressBar | N/A | N/A | N/A | N/A | N/A | N/A | aria-value* computed internally from `value`/`max` props |
| ProgressRing | N/A | N/A | N/A | N/A | N/A | N/A | No passable a11y props |
| Radio | Yes | Yes | Custom props (OmitNativeProps\<HTMLInputElement\>) | No | N/A | No | Done |
| RangeSlider | N/A | N/A | N/A | N/A | N/A | N/A | `label` is visible text, not a11y prop (extends MultiSliderProps) |
| Row | Yes | Yes | Extended native props (BaseHtmlProps\<HTMLDivElement\>) | No | N/A | No | Added to registry |
| Sara | Yes | Yes | Extended native props (BaseHtmlProps\<HTMLDivElement\>) | No | N/A | No | Added to registry |
| SaraSparkle | Yes | Yes | Extended native props (BaseHtmlProps\<HTMLDivElement\>) | No | N/A | No | Added to registry |
| SegmentedControl | N/A | N/A | N/A | N/A | N/A | N/A | No passable a11y props |
| Select | Yes | Yes | Nested props only | No | Yes — triggerOptions tab (aria-label) | No | Added to registry with nested tabs |
| SelectionCard | Yes | Yes | Extended native props (BaseHtmlProps\<HTMLDivElement\>) | No | N/A | No | Done |
| Sidesheet | Yes | Yes | Custom props (aria-labelledby) | No | N/A — footerOptions.actions[] is ButtonProps[] constructed by dev (full control) | `role="dialog"`, `aria-modal` are hardcoded | Done |
| Slider | N/A | N/A | N/A | N/A | N/A | N/A | `label` is visible text, not a11y prop (extends MultiSliderProps) |
| Spinner | Yes | Yes | Custom props (aria-label) | No | N/A | `role="status"`, `aria-live="polite"` are hardcoded | Done |
| StatusHint | N/A | N/A | N/A | N/A | N/A | N/A | No passable a11y props |
| Stepper | N/A | N/A | N/A | N/A | N/A | N/A | No passable a11y props |
| Subheading | Yes | Yes | Extended native props (BaseHtmlProps\<HTMLHeadingElement\>) | No | N/A | No | Added to registry; renders semantic heading |
| Switch | Yes | Yes | Custom props (OmitNativeProps\<HTMLInputElement\>) | No | N/A | No | Done |
| Tab | N/A | N/A | N/A | N/A | N/A | N/A | `label` is visible tab text, not a11y prop |
| Table | Yes | Yes | Custom props (aria-label, aria-labelledby) | No | N/A | No | virtualRowOptions/infiniteScrollOptions are numeric config, no a11y |
| Tabs | Yes | Yes | Custom props (aria-labelledby) | No | N/A | No | Done |
| TabsWrapper | N/A | N/A | N/A | N/A | N/A | N/A | No passable a11y props |
| Text | Yes | Yes | Extended native props (BaseHtmlProps\<HTMLSpanElement\>) | No | N/A | No | Added to registry |
| Textarea | Yes | Yes | Extended native props (BaseHtmlProps\<HTMLTextAreaElement\>) | No | N/A | No | Done |
| TextField | Yes | Yes | Extended native props (inherits Input/Textarea BaseHtmlProps) | No | N/A | Inherits Input's tabIndex override when in input mode | Added to registry |
| TimePicker | Yes | Yes | Custom props (aria-label, id) | No | Yes — inputOptions tab (textbox props) | No | Added to registry with nested tabs |
| Toast | N/A | N/A | N/A | N/A | N/A | N/A | No passable a11y props |
| Tooltip | N/A | N/A | N/A | N/A | N/A | N/A | No passable a11y props |
| VerificationCodeInput | Yes | Yes | Custom props (inherits InputProps) | No | N/A | Inherits Input's tabIndex override | Done |
| VerticalNav | N/A | N/A | N/A | N/A | N/A | N/A | No passable a11y props |
