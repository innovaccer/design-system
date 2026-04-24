# A11y Component Tracker

One row per component. Snapshot of the **current** state of
`componentA11yRegistry` in `core/utils/docPage/accessibilityProps.ts` at the
start of the audit, and the **target** after reconciliation.

## Columns

- **Component** — displayName as used by Storybook / the registry key.
- **Folder** — path under `core/components/`.
- **Current Status** — `✅ registered`, `🚫 excluded` (explicitly "NOT INCLUDED"), `❔ missing`.
- **Current Element Type** — what the registry says today.
- **Target Element Type** — what the registry *should* say after the audit.
- **Tabs** — root + nested tab names (for the a11y prop table).
- **Notes / Action** — e.g. "add `aria-errormessage`", "move to preset", "add `Select.Option` tab", "confirm `extractBaseProps` forwards `aria-*`".

Legend for Action column: `keep` · `update` · `add` · `remove` · `verify`.

---

## Atoms

| # | Component | Folder | Current | Current Type | Target Type | Tabs | Action |
|---|-----------|--------|---------|--------------|-------------|------|--------|
| 1 | Button | atoms/button | ✅ | button | button | — | ✅ verified |
| 2 | LinkButton | atoms/linkButton | ✅ | button | button | — | ✅ verified |
| 3 | AIButton | (AI bundle) | ✅ | button | button | — | ✅ verified |
| 4 | AIChip | (AI bundle) | ✅ | button | button | — | ✅ verified |
| 5 | AIIconButton | (AI bundle) | ✅ | button | button | — | ✅ verified |
| 6 | Checkbox | atoms/checkbox | ✅ | checkbox | checkbox | — | ✅ verified |
| 7 | Switch | atoms/switchInput | ✅ | checkbox | checkbox | — | ✅ verified |
| 8 | SelectionCard | atoms/selectionCard | ✅ | checkbox | checkbox | — | ✅ verified |
| 9 | Radio | atoms/radio | ✅ | radio | radio | — | ✅ verified |
| 10 | Input | atoms/input | ✅ | textbox | textbox | — | ✅ verified — preset updated to include tabIndex natively |
| 11 | Textarea | atoms/textarea | ✅ | textbox (+tabIndex) | textbox | — | ✅ verified — removed customProps, now uses native textbox tabIndex |
| 12 | MetricInput | atoms/metricInput | ✅ | textbox (+tabIndex) | textbox | — | ✅ verified — removed customProps, now uses native textbox tabIndex |
| 13 | Link | atoms/link | ✅ | link | link | — | ✅ verified |
| 14 | ActionCard | atoms/actionCard | ✅ | link | link | — | ✅ verified |
| 15 | Avatar | atoms/avatar | ✅ | custom | custom | — | ✅ verified |
| 16 | AvatarGroup | atoms/avatarGroup | ✅ | custom | custom | — | ✅ verified |
| 17 | AvatarSelection | atoms/avatarSelection | ✅ | custom | custom | — | ✅ verified |
| 18 | Badge | atoms/badge | ✅ | generic | generic | — | ✅ verified |
| 19 | Icon | atoms/icon | ✅ | custom | custom | — | ✅ verified |
| 20 | Spinner | atoms/spinner | ✅ | custom | custom | — | ✅ fixed — removed stray `label` prop copied from Slider |
| 21 | Chip | atoms/chip | ✅ | custom | custom | — | ✅ verified |
| 22 | ChipGroup | atoms/chipGroup | 🚫 | — | excluded | — | ✅ documented — `BaseProps` + `extractBaseProps`, no passable a11y props |
| 23 | _chip | atoms/_chip | — | internal | — | — | skip (internal) |
| 24 | Card | atoms/card | ✅ | generic | generic | — | ✅ verified |
| 25 | CardSubdued | atoms/cardSubdued | ✅ | generic | generic | — | ✅ verified |
| 26 | CardHeader | atoms/cardHeader | 🚫 | — | excluded | — | ✅ documented — `BaseProps` + `extractBaseProps` |
| 27 | CardBody | atoms/cardBody | 🚫 | — | excluded | — | ✅ documented — `BaseProps` + `extractBaseProps` |
| 28 | CardFooter | atoms/cardFooter | 🚫 | — | excluded | — | ✅ documented — `BaseProps` + `extractBaseProps` |
| 29 | Heading | atoms/heading | ✅ | generic | generic | — | ✅ verified |
| 30 | Subheading | atoms/subheading | ✅ | generic | generic | — | ✅ verified |
| 31 | Paragraph | atoms/paragraph | ✅ | generic | generic | — | ✅ verified |
| 32 | Text | atoms/text | ✅ | generic | generic | — | ✅ verified |
| 33 | Caption | atoms/caption | ✅ | generic | generic | — | ✅ added — extends `BaseHtmlProps<HTMLDivElement>` |
| 34 | _text | atoms/_text | — | internal | — | — | skip (internal) |
| 35 | Label | atoms/label | ✅ | generic | generic | — | ✅ verified |
| 36 | Legend | atoms/legend | 🚫 | — | excluded | — | ✅ documented — `BaseProps` + `extractBaseProps` |
| 37 | Column | atoms/column | ✅ | generic | generic | — | ✅ verified |
| 38 | Flex | atoms/flex | ✅ | generic | generic | — | ✅ verified |
| 39 | Row | atoms/row | ✅ | generic | generic | — | ✅ verified |
| 40 | MdsGrid | atoms/mdsGrid | ✅ | generic | generic | — | ✅ verified |
| 41 | Meter | atoms/meter | ✅ | range | range | — | ✅ verified |
| 42 | ProgressBar | atoms/progressBar | 🚫 | — | excluded | — | ✅ confirmed exclusion |
| 43 | ProgressRing | atoms/progressRing | 🚫 | — | excluded | — | ✅ confirmed exclusion |
| 44 | Slider | atoms/slider | ✅ | custom | custom | — | ✅ added — `label` prop wires to handle `aria-label` |
| 45 | RangeSlider | atoms/rangeSlider | ✅ | custom | custom | — | ✅ added — `label` prop wires to handle `aria-label` |
| 46 | MultiSlider | atoms/multiSlider | ✅ | custom | custom | — | ✅ added — `label` prop wires to handle `aria-label` |
| 47 | Breadcrumbs | atoms/breadcrumbs | 🚫 | — | excluded | — | ✅ documented — `<nav aria-label="Breadcrumb">` hardcoded |
| 48 | Divider | atoms/divider | 🚫 | — | excluded | — | ✅ documented — decorative, no passable a11y props |
| 49 | Dropdown | atoms/dropdown | ✅ | custom | custom | — | ✅ verified |
| 50 | Editable | atoms/editable | 🚫 | — | excluded | — | ✅ documented — primitive wrapper |
| 51 | HelpText | atoms/helpText | 🚫 | — | excluded | — | ✅ confirmed |
| 52 | Message | atoms/message | 🚫 | — | excluded | — | ✅ confirmed |
| 53 | StatusHint | atoms/statusHint | ✅ | generic | generic | — | ✅ added — extends `BaseHtmlProps<HTMLDivElement>` |
| 54 | Toast | atoms/toast | 🚫 | — | excluded | — | ✅ confirmed |
| 55 | MetaList | atoms/metaList | 🚫 | — | excluded | — | ✅ documented — `BaseProps` + `extractBaseProps` |
| 56 | Pills | atoms/pills | ✅ | custom | custom | — | ✅ verified |
| 57 | OutsideClick | atoms/outsideClick | ✅ | generic | generic | — | ✅ verified — extends BaseHtmlProps |
| 58 | PopperWrapper | atoms/popperWrapper | — | internal | — | — | skip (internal) |
| 59 | Backdrop | atoms/backdrop | 🚫 | — | excluded | — | ✅ documented — `BaseProps` + `extractBaseProps` |
| 60 | PlaceholderImage | atoms/placeholderImage | 🚫 | — | excluded | — | ✅ documented — `aria-hidden` hardcoded |
| 61 | PlaceholderParagraph | atoms/placeholderParagraph | 🚫 | — | excluded | — | ✅ documented — `aria-hidden` hardcoded |
| 62 | SegmentedControl | atoms/segmentedControl | ✅ | custom (+Item tab) | custom (+Item tab) | Component · Item | ✅ verified — added parent aria props |
| 63 | Sara | (AI bundle) | ✅ | generic | generic | — | ✅ verified |
| 64 | SaraSparkle | (AI bundle) | ✅ | generic | generic | — | ✅ verified |
| 65 | AIResponse | (AI bundle) | ✅ | generic | generic | — | ✅ verified |

---

## Molecules

| # | Component | Folder | Current | Current Type | Target Type | Tabs | Action |
|---|-----------|--------|---------|--------------|-------------|------|--------|
| 1 | Chat | molecules/chat | ✅ | custom (+incoming/outgoing tabs) | same | Component · incomingOptions · outgoingOptions | ✅ verified |
| 2 | ChatBubble | molecules/chat | ✅ | custom | same | Component · incomingOptions · outgoingOptions | ✅ verified |
| 3 | ChatInput | molecules/chat | ✅ | custom | same | — | ✅ verified |
| 4 | Chat.DateSeparator | molecules/chat | 🚫 | — | excluded | — | ✅ confirmed exclusion |
| 5 | Chat.NewMessage | molecules/chat | 🚫 | — | excluded | — | ✅ confirmed exclusion |
| 6 | Chat.TypingIndicator | molecules/chat | 🚫 | — | excluded | — | ✅ confirmed exclusion |
| 7 | UnreadMessage | molecules/chat | ✅ | custom (onClick/onKey*) | same | — | ✅ verified |
| 8 | ChatMessage | molecules/chatMessage | 🚫 | — | excluded | — | ✅ documented — all sub-parts use `extractBaseProps` |
| 9 | ChipInput | molecules/chipInput | ✅ | custom (+chipOptions tab) | same | Component · chipOptions | ✅ verified |
| 10 | Dialog | molecules/dialog | 🚫 | — | excluded | — | ✅ confirmed exclusion |
| 11 | Modal | molecules/modal | ✅ | custom | same | — | ✅ verified |
| 12 | ModalDescription | molecules/modalDescription | 🚫 | — | excluded | — | ✅ documented — `BaseProps` + `extractBaseProps` |
| 13 | FullscreenModal | molecules/fullscreenModal | ✅ | custom | same | — | ✅ verified |
| 14 | Sidesheet | molecules/sidesheet | ✅ | custom | same | — | ✅ verified |
| 15 | Dropzone | molecules/dropzone | 🚫 | — | excluded | — | ✅ confirmed exclusion |
| 16 | EditableChipInput | molecules/editableChipInput | ✅ | custom (+chipInputOptions tab) | same | Component · chipInputOptions | ✅ verified |
| 17 | EditableDropdown | molecules/editableDropdown | ✅ | custom (+dropdownOptions tab) | same | Component · dropdownOptions | ✅ verified |
| 18 | EditableInput | molecules/editableInput | ✅ | custom (+inputOptions tab) | same | Component · inputOptions | ✅ verified |
| 19 | EmptyState | molecules/emptyState | 🚫 | — | excluded | — | ✅ documented — all sub-parts use `extractBaseProps` |
| 20 | FileList | molecules/fileList | 🚫 | — | excluded | — | ✅ documented — `extractBaseProps` |
| 21 | FileUploader | molecules/fileUploader | 🚫 | — | excluded | — | ✅ documented — all sub-parts use `extractBaseProps` |
| 22 | InputMask | molecules/inputMask | ✅ | textbox | textbox | — | ✅ verified |
| 23 | VerificationCodeInput | molecules/verificationCodeInput | ✅ | textbox | textbox | — | ✅ verified |
| 24 | KeyValuePair | molecules/keyValuePair | 🚫 | — | excluded | — | ✅ documented — `extractBaseProps` |
| 25 | OverlayHeader | molecules/overlayHeader | 🚫 | — | excluded | — | ✅ documented — `extractBaseProps` |
| 26 | OverlayBody | molecules/overlayBody | 🚫 | — | excluded | — | ✅ documented — `extractBaseProps` |
| 27 | OverlayFooter | molecules/overlayFooter | 🚫 | — | excluded | — | ✅ documented — `extractBaseProps` |
| 28 | Pagination | molecules/pagination | 🚫 | — | excluded | — | ✅ documented — page-button aria handled internally |
| 29 | Placeholder | molecules/placeholder | 🚫 | — | excluded | — | ✅ documented — `aria-hidden` hardcoded |
| 30 | Popover | molecules/popover | 🚫 | — | excluded | — | ✅ confirmed exclusion |
| 31 | Tooltip | molecules/tooltip | 🚫 | — | excluded | — | ✅ confirmed exclusion |
| 32 | Stepper | molecules/stepper | 🚫 | — | excluded | — | ✅ confirmed exclusion |
| 33 | Tabs | molecules/tabs | ✅ | custom | same | — | ✅ verified |

---

## Organisms

| # | Component | Folder | Current | Current Type | Target Type | Tabs | Action |
|---|-----------|--------|---------|--------------|-------------|------|--------|
| 1 | Calendar | organisms/calendar | ✅ | custom | same | — | ✅ verified |
| 2 | ChoiceList | organisms/choiceList | ✅ | custom (+choices tab) | same | Component · choices | ✅ verified |
| 3 | Combobox | organisms/combobox | ✅ | custom | same | — | ✅ verified |
| 4 | DatePicker | organisms/datePicker | ✅ | custom (+inputOptions tab) | same | Component · inputOptions | ✅ verified |
| 5 | DateRangePicker | organisms/dateRangePicker | ✅ | custom (+3 nested tabs) | same | Component · inputOptions · startInputOptions · endInputOptions | ✅ verified |
| 6 | Grid | organisms/grid | ✅ | custom | same | — | ✅ verified |
| 7 | Table | organisms/table | ✅ | custom | same | — | ✅ verified |
| 8 | HorizontalNav | organisms/horizontalNav | ✅ | custom | same | — | ✅ verified |
| 9 | Navigation | organisms/navigation | ✅ | custom | same | — | ✅ verified |
| 10 | VerticalNav | organisms/verticalNav | 🚫 | — | excluded | — | ✅ confirmed exclusion |
| 11 | InlineMessage | organisms/inlineMessage | 🚫 | — | excluded | — | ✅ confirmed exclusion |
| 12 | List | organisms/list | ✅ | custom | same | — | ✅ verified |
| 13 | Listbox | organisms/listbox | ✅ | listbox | listbox | — | ✅ verified |
| 14 | Menu | organisms/menu | ✅ | custom | same | — | ✅ verified |
| 15 | PageHeader | organisms/pageHeader | ✅ | custom | same | — | ✅ verified |
| 16 | Select | organisms/select | ✅ | custom (+3 nested tabs) | same | Component · triggerOptions · Select.List · Select.Option | ✅ verified |
| 17 | TextField | organisms/textField | ✅ | textbox | textbox | — | ✅ verified |
| 18 | TimePicker | organisms/timePicker | ✅ | custom (+inputOptions tab) | same | Component · inputOptions | ✅ verified |

---

## Per-Component Worksheet Template

Use this template when filling in details as each component is audited. Paste
the filled worksheet **below this line** under a heading
`### Worksheet — {ComponentName}`.

```
### Worksheet — {ComponentName}

- Source: `core/components/{path}/{Component}.tsx`
- displayName: `{Component.displayName}` (line X)
- Props interface extends: `BaseHtmlProps<HTML*>` | `OmitNativeProps<HTML*>` | `BaseProps`
- Spread strategy: `{...baseProps}` / `{...rest}` / `useAccessibilityProps` / `extractBaseProps`
- A11y-related option bags: `triggerOptions`, `inputOptions`, ...
- Curated bucket: `button` | `checkbox` | `radio` | `textbox` | `link` | `range` | `listbox` | `generic` | `custom`
- Props effectively passable (proven in code):
  - `aria-label` ✅ — forwarded via `{...rest}` at line X
  - ...
- Registry entry (before):
  ```ts
  { htmlElement: '...', customProps: [...] }
  ```
- Registry entry (after):
  ```ts
  { htmlElement: '...', customProps: [...] }
  ```
- Diff rationale: ...
```

---

## Open Questions (resolve during Phase 1)

1. **Sub-primitives** (`_chip`, `_text`, `popperWrapper`) — should be skipped; they are not surfaced as standalone Storybook components.
2. **Layout primitives** (`Divider`, `Placeholder*`, `Backdrop`) — decide whether they accept `aria-*` at all. If they extend `BaseHtmlProps<HTMLDivElement>`, they likely warrant a `generic` entry.
3. **`CardHeader` / `CardBody` / `CardFooter`** — confirm if surfaced separately in Storybook; if so add as `generic`.
4. **Slider family** (`Slider`, `RangeSlider`, `MultiSlider`) — decide single-handle vs multi-handle ARIA story. Likely `range` bucket but with compound nested tabs for multi-handle.
5. **Pagination** — if it renders a `<nav>` landmark it should accept `aria-label`.
6. **Tabs** — is there a per-Tab nested bag (`aria-label` on a tab panel/trigger) that warrants a `Tabs.Tab` tab in the a11y table?
7. **Spinner's stray `label` prop** — the current registry entry has a `label` definition copy-pasted from Slider text. Needs removal.
