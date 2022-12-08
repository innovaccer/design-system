
## 2.13.6 (2022-12-07)

### Highlights

NA

### Breaking changes

NA

### Migration guide

NA

### Deprecations

NA

### Features

NA

### Fixes

- fix(Table): nested row alignment on column drag (1f44df89)
- fix(dropdown): update height of dropdown on search event (75ef2b3b)
- feat(table): add option for custom label on row selection (fa1d31a5)

### Improvements

NA

### Documentation

- docs(docs): update documentation in breadcrumb component (cca763a9)
- docs(docs): update documentation in tabs component (3259d2d3)

---

## 2.13.5 (2022-11-16)

### Highlights

NA

### Breaking changes

NA

### Migration guide

NA

### Deprecations

NA

### Features

NA

### Fixes

- fix(dropdown): prevention of callback for already selected option item (a06279ba)
- fix(Table): nested row alignment on column drag (daa8a88a)
- fix(stepper): update styles and animation (ff2fe73c)

### Improvements

NA

### Documentation

- docs(docs): add states in foundation tab (589f95fd)
- fix(docs): fix release notes section on homepage (cda32ab7)

---

## 2.13.4 (2022-11-08)

### Highlights

NA

### Breaking changes

NA

### Migration guide

NA

### Deprecations

NA

### Features

- feat(Radio): radio input states (9a35fb28)
- feat(timepicker): add timepicker component with fuzzy search (9cf46dd8)
- feat(dropzone): add support for csv, xlss & xls, file (2d5826a4)
- feat(horizontalNav): add transition in horizontal navigation (8463c621)
- feat(inlineMessage): add size prop in inline message component (22f73895)
- feat(progressIndicator): add transition in progress bar and ring (b80cbfd8)
- feat(link): update link state (322150d2)
- feat(text): add color support in text component (d5a984a4)

### Fixes

- fix(radio): state related issues (ae618687)
- fix(tabs): update states for tabs component (7cc5d5ea)
- fix(fileList): use transition token in css files (a79aab09)
- fix(backdrop): use transition token in css files (b084fc5a)
- fix(story): replace style with className (1ea50d39)
- fix(daterangepicker): add spacing in withinput story (7742b09e)
- fix(dropdown): option list default state (0c396270)
- fix(breadcrumb): replace style tag with classname in stories (82f030c7)
- fix(verticalNav): replace style tag with classname in stories (e681256d)
- fix(verticalNav): update state for vertical nav component (b88842d8)
- fix(caption): replace caption component with helptext (d1b85b4c)
- fix: tsx files linter (22ca254b)
- fix(verticalNav): pills color (6beadf3c)
- fix(chip): update chip state (db27e9ab)
- fix(dropdown): update state (501f81e6)
- fix(input): style changes in input states (80a6bf8e)
- fix(button): update button states (94e5af0c)
- fix(table): increase height of table in story (5b172710)
- fix(horizontalNav): update state for horizontal nav component (2a4915f3)
- fix(pageheader): pageheader spacing and badge shrink (a9f8acdd)
- fix(calendar): story break on Show code (48b8f654)
- fix(metricInput): suffix spacing when enabled (97524726)
- fix(DropdownList): react hooks error with checkbox (79d38d53)
- fix(button): icon button group story tooltip issue (2703f5b0)
- fix(breadcrumb): update state of icon button (eca7beb3)
- fix(table): fix drag and drop of pinned column (df7a262d)
- fix(metricInput): update states for actions (183113e0)
- fix(dropzone): update icons to svg (60d722c9)
- fix(dropdown): pointer on disabled option (013b006e)
- fix(DropdownList): selection behaviour outside label (18960408)
- fix(datepicker): fast typing input issue (dd5aa1ab)
- fix(dropzone): add support for audio-video file types (af9dda9a)
- fix(dropdown): invisible subtext in menu dropdown after click (9c8b4839)
- fix(verificationCodeInput): add type prop for input component (c60759f1)
- fix(materialIcons): update material icon fonts file (4a312228)
- fix(toast): change warning icon (54764a45)
- fix(table): fix border and spacing for nested rows in table (6909cef4)
- fix(dropdown): fix typescript warning in dropdown test file (4a778925)
- fix(Table): cell overflow on cell type status hint (66d3ad93)
- fix(datepicker): update children as optional prop (10897cab)
- fix(verticalNav): wrap menuitem in anchor tag (1a7c7bdc)
- fix(story): fix linter issues for javascript files (235223ed)
- test(timepicker): remove invalid test case (eab2c1d7)
- style(timepicker): add transition class for active options (529cfff9)
- fix(tooltip): set tooltip open state to false in story (debf4ad4)
- fix(checkbox): checkbox alignment story (a44ef41d)
- fix(dropdown): add dropdown label story (05a1b2b9)
- fix(calendar): story structure in date view (77d7e88d)
- fix(horizontalnav): update css for the header of left aligned story (9a3f745f)
- fix(pageheader): fix padding class for header seperator of pageheader story (401254eb)
- fix(table): fix multiline content of button in description list story (b681759d)
- fix(metricinput): update focus state (0f28d36f)
- fix(sidesheet): two step outside click issue fix (5f40ec16)
- fix(pageheader): remove dot seperator from level1 stepper story (21b66a3e)
- fix(datepicker): set story at open state for popover (55e4500a)
- fix(dropdown): remove animation from dropdown option items (fae62d93)
- fix(sidesheet): set story to open from page one for multistep variant (3cd6691f)
- fix(dropdown): update css of search tab (7a6e444d)
- fix(icon): update src for image variant (d2991717)
- fix(loaders): fixes placeholder image loaders (b72afc4c)

### Improvements

- docs(docs): update alt text in components (3ac2b5c8)
- docs(docs): add caption in toast compoent (b775fc88)
- docs(docs): add caption in timepicker component (d08149db)
- docs(docs): update alt text in table component (92bfee43)
- docs(docs): update alt text in rich text editor component (10444d71)
- docs(docs): update caption in avatar component (775fcc96)
- test(docs): add cypress test for patterns page (8bcac84b)
- fix(docs): update font size of toc (fd9c503c)
- test(docs): integrate cypress setup and test (a60f058f)
- fix(docs): fix css padding for footer component (bd304ad9)


### Documentation



---

## 2.13.1 (2022-06-24)

### Highlights

NA

### Breaking changes

NA

### Migration guide

NA

### Deprecations

NA

### Features

NA

### Fixes

- fix(daterangepicker): fix error state on blur event (fcc00594)
- fix(daterangepicker): fix dateRangePicker input freeze (c98352c0)
- fix(popover): fix boundary element story (ca351ed5)
- fix(metricInput): fix default metric input story (0eb7e111)

### Improvements

NA

### Documentation

- fix(docs): update distribution id for docs-dev (6e21010d)
- fix(docs): update distribution id for docs-dev (6c23c6ed)
- feat(docs): add component images (3f9e1fc4)
- feat(docs): add helptext component (4601c1e0)

---

## 2.13.0 (2022-06-21)

### Highlights

NA

### Breaking changes

NA

### Migration guide

NA

### Deprecations

NA

### Features

NA

### Fixes

- fix(timepicker): fix placeholder value getting disappear (1ac69560)
- fix(modal): fix modal closing animation (d0236cfe)
- fix(popover): fix popover animation flickering issue (3c01529b)
- fix(inputMask): fix cursor position on input mask (cbd7f31a)
- fix(grid): fix grid loading state (aa3672bb)
- fix(grid): fix loading state in grid (0a8719d5)
- fix(datepicker): reset to default on blur state (d5565fd2)
- fix(docs): remove checkbox from mobile nav (3d4aa0f1)
- fix(datePicker): fix event handlers for datepicker (f79e3c29)
- fix(docs): fix links on mobile overview page (17e621ba)
- fix(docs): add missing images (17483411)

### Improvements

NA

### Documentation

- docs(docs): add checkbox in mobile (929861d6)
- docs(docs): add help text in web components (c5e9fd8a)

---

## 2.13.0-0 (2022-06-20)

### Highlights

NA

### Breaking changes

NA

### Migration guide

NA

### Deprecations

NA

### Features

NA

### Fixes

- fix(timepicker): fix placeholder value getting disappear (1ac69560)
- fix(modal): fix modal closing animation (d0236cfe)
- fix(popover): fix popover animation flickering issue (3c01529b)
- fix(inputMask): fix cursor position on input mask (cbd7f31a)
- fix(grid): fix grid loading state (aa3672bb)
- fix(grid): fix loading state in grid (0a8719d5)
- fix(datepicker): reset to default on blur state (d5565fd2)
- fix(docs): remove checkbox from mobile nav (3d4aa0f1)
- fix(datePicker): fix event handlers for datepicker (f79e3c29)
- fix(docs): fix links on mobile overview page (17e621ba)
- fix(docs): add missing images (17483411)

### Improvements

NA

### Documentation

- docs(docs): add checkbox in mobile (929861d6)
- docs(docs): add help text in web components (c5e9fd8a)

---

## 2.10.0-0 (2022-03-30)

### Highlights

NA

### Breaking changes

NA

### Migration guide

NA

### Deprecations

NA

### Features

- (docs): add design for no results in components search (5594cb28)
- (docs): add design for 404 page (4dfef4de)
- (docs) : add copy to clipboard for codeblocks and headings (78cb4501)

### Fixes

- (DateRangePicker): popover not closing on range selection (b5597056)
- (doc): fix tooltip message while copying code on introduction page (58a7c313)
- (docs): fix page layout overflow scroll to auto (93176391)
- (chips): fix input chips hover and selection and active chips border (e64d8e85)
- (docs) fix actionsheet navigation issue (1ab2ed4f)
- (toast): fix toast close button width (ee95e19f)
- (docs): fix description in container (9f826bcc)
- (docs): fix font family for react tab in show code (3933bb9f)
- (docs): fix scroll jump in right nav bar (549ce214)
- (input): update input icon appearance (1b1e1e1a)
- (docs): add separate navigation for mobile and web components (97632861)
- (docs): fix leftnav highlight on tab changes (4bee0cfb)

### Improvements

NA

### Documentation

- (docs): updated images in web overview (7292d892)
- (docs): update front-matter for components and patterns (24fabc67)
- (docs): add content for lists in mobile (7952a33b)
- (docs): add documentation for dialogs in mobile (addeef3e)
- (docs): add documentation for inputs in mobile (d7267f29)
- (docs): add content for page headers in mobile (4a1e4898)
- (docs): add documentation for chips in mobile (dc6deb57)
- (docs): add documentation for cards in mobile (de6766c4)
- (docs): add content for radio in mobile (067fd7b7)
- (docs): add content for switch in mobile (02e91667)
- (docs): add content for tabs in mobile (c5b7ab5b)
- (docs): add content for toast in mobile (6e756ddd)
- (docs): update empty state for description (9fffbe8a)
- (docs): update email-guidlines md files (a358874e)
- (docs) add documentation for bottom sheet in mobile (8ad96de9)
- (docs): update error-messages md file (3b77abe1)
- (docs): update placeholder-text md file (25f8dbbb)
- (docs): add content for layouts (285bb162)
- (docs): add alt text in an image in forms (d01d33a8)
- (docs):Added content for Patterns - Forms (22077e0c)
- (docs): add content for page headers (d9ffab58)
- (docs): Added content for UI states (4344340d)
- (docs) add documentation for buttons in mobile (59bbfea1)
- (docs) add documentation of action sheet (6587a47e)
- (docs): update email guidelines content (c6220015)
- (docs): update error messages content (b2dd0586)
- (docs): update empty states content (2b7156d4)
- (docs): add documentation for navigation, meta list, pagination (2a9cb91f)
- (docs): added content for file uploader (ec8ffca3)

---

## 2.9.0-0 (2022-02-01)

### Highlights

- feat: adds docs site (44ab33d3)
- feat(verticalNav): add custom item renderer option (810a099f)

### Breaking changes

NA

### Migration guide

NA

### Deprecations

NA

### Features

- feat: adds docs site (44ab33d3)
- feat(verticalNav): add custom item renderer option (810a099f)

### Fixes

- fix(verticalnav): fix verticalnav active hover state shadow (1b341516)
- fix(button): fix button hover background color (1e696743)
- fix(button): fix button hover and focus style (795ae48b)
- fix(dropdown): fix dropdown items closing animation (dc8c6102)
- fix(tabs): fix tabs conflict in selected focused state style (fa4ff904)
- fix(toast): add message to discription story (1cac895d)
- fix(button): props table not showing (70ac3e39)
- fix(leftNav): fix left navbar highlighting on tab changes (d836a42e)
- fix(table): add border in table for mdx and fix overflow behaviour (233293ed)
- fix(table): make scrollbar width consistent (af5da8f6)
- fix(table): fix table data issue when rows are more than 27 (b33aafc1)

### Improvements

NA

### Documentation

- Adds documentations for components.

---

## 2.8.0-0 (2022-01-12)

### Highlights

### Breaking changes

NA

### Migration guide

NA

### Deprecations

NA

### Features

NA

### Fixes

- Fix chip inline alignment problem (253ba672)
- Fix progressbar background color (938be99b)
- Fix disabled slider knob shadow (aff1ddb6)
- Fix broken alignment due to inlineLabel in Dropdown (d7b51053)
- Resolve tooltip close issue on disabled button (cc0c693d)

### Improvements

- Add popover transitions (f1873f65)
- Add support for three characters in Avatar component (ba6bc35b)

### Documentation

NA

---

## 2.7.0 (2021-12-23)

### Highlights

### Breaking changes

NA

### Migration guide

NA

### Deprecations

- Button: appearance "success" is deprecated, please use "primary" (375c9aef)
- Fileuploader component is deprecated, please use Dropzone type="tight" (c5d8ef43)
- Toast: appearance "default" is deprecated, please use "info" (d589cf6f)
- Message: appearance "default" is deprecated, please use "info" (3cd54421)

### Features

- Option to use custom search placeholder in Dropdown search input (9fcb2b65)
- Adds keyboard interactions in Dropzone component. (8541a26d)
- Adds subinfo option when checkbox is true Dropdown (96a581a3)
- Adds transition to switch component (f8cbba79)
- Transition in sidesheet component added (8c61ef05)

### Fixes

- fix: updates docpage for stories without components exported (d5138109)
- fix(storybook): update package json file to fix storybook docs page (149f8ec8)
- fix(InputMask): fixes issue with fast input (4d1f8330)
- fix(switch): add styling for hover and active state (3a54a934)
- Button re-rendering issue is fixed, which was sometimes causing button to be clicked twice. (6b46d66f)
- FileList truncates long file names now. (0c2a07b6)
- Breadcrumbs separator color updated. (5b88f5c5)
- Fixed loader issue when Table has nested rows. (f41f7f96)

### Improvements

- Added transitions to fullscreenModal component (98cac857)
- Selected state for a disabled chips is now visible (c619c571)

### Documentation

- Example for custom header in sidesheet added (edc300cc)
- Input examples (stories) are interactive now (ead16746)
- add npm ci command to use package.lock freezed versions on CI environments on github actions (621d0934)
- updates versions of dev dependencies for security issues (3c3d5288)
- adds manual release workflow (e31559d3)

---

## 2.6.0 (2021-12-09)

### Highlights

- Calender exposes onHover events on date month and year values (bcaa4aed)
- New component Divider is added (7dc6034d)
- Library is now compatible with Node version 14.x LTS (33c736fd)

### Breaking changes

NA

### Migration guide

NA

### Deprecations

NA

### Features

- Datepicker has example for date presets for date selections (d1a0f30c)
- Switch and Button components are new accessible (AA) (1b64c361)
- Calender exposes onHover events on date month and year values (bcaa4aed)
- New component Divider is added (7dc6034d)

### Fixes

- Navigation center alignment bug is fixed in Pageheader component (c6c08ba4)
- Chip component's pointer style is fixed for hovering (01f2f9fc)
- Design of Calendar component is improved (e4ea85df)
- Options with checkbox in dropdown can have truncated text now. (c4e8f3a3)
- Text height of InlineMessage is corrected. (00bbd7e6)
- Table search results going blank is now fixed. (d2a96002)
- Table cell can render and position the dropdown inside properly. (3dea79b4)

### Improvements

- Library is now compatible with Node version 14.x LTS (33c736fd)
- Accessibility linting plugin is added. (6fbb5883)

### Documentation

NA

---

## 2.5.0 (2021-10-25)

### Highlights

- A now component ChoiceList is added to use group of check box or radio inputs to work as a choice selector (2d9bb1ed)
- Calendar and DatePicker has new design and features for today date selection now. (7c3df346)
- All existing contributors are added to Readme, an option to create request for getting added as contributor and documentation for the same is added. (07db26e9)

### Breaking changes

NA

### Migration guide

NA

### Deprecations

NA

### Features

- A now component ChoiceList is added to use group of check box or radio inputs to work as a choice selector (2d9bb1ed)
- New helper classes for applying border or removing border of an element are added. (7675c8b3)
- Calendar and DatePicker has new design and features for today date selection now. (7c3df346)
- EmptyState component now supports inline SVG image. (863d69b0)
- Added previous and next month dates in current month's date in Calendar Component (4fe810bf)

### Fixes

- fix(button.css): fix active state in transparent button (1c499f0d)
- fix(nestedtable): fix expand and collapse button issue (be69d5e5)
- Issue in scrolling horizontally on a Table body not scrolled table header is resolved. (e71ea1c2)
- Icons on Table header and column menu to sort the table are now pointed in correct directions. (718a1a37)
- DateRangePicker pattern example now uses selection cheap in stead of radios for pre defined date range selections. (a1d0ee53)
- Table/Grid horizontal scrolling issue is fixed. (a6949715)
- Modal is now vertically centered and can have flexible heights. (ef6072a7)
- Dropzone icon is visible now when we bring mouse to drop file over it. (5ba93be9)
- Fixes the table header scroll when table body scroll (502cb1d1)
- Fixes the Tabs Component rendering issue with checking children component type (8525a4e7)
- Fixes the Datepicker snapshot which was getting updated as date changes (c001e925)

### Improvements

- Improved test coverage to cover more than 92% of the code base.

### Documentation

- FileUploader component example is now more interactive (509a9053)
- Navigation is more structured on story book for css and other utilities (56999d6b)
- Message component example improved for versatile use-cases. (16fe6be6)
- Readme is structured and updated for easy to access the required information (7d9c262d)
- All existing contributors are added to Readme, an option to create request for getting added as contributor and documentation for the same is added. (07db26e9)
- Guideline for branch naming convention added. (1ef3cd96)

---

## 2.4.0 (2021-09-22)

### Highlights

NA

### Breaking changes

NA

### Migration guide

NA

### Deprecations

NA

### Features

- Automated the process of types bundling (21f435b0)
- A new InlineMessage Component has been added (f852b2a8)
- Added the events indicator on given date in Calendar Component (4714efa2)
- A Chip has been added to Datepicker Component to select today's date (ee9e47e0)
- Tooltip in Icon Button Component has been added (f9f14233)

### Fixes

- Removes the events type Array from Calendar Component (41abf4ef)
- zIndex for Backdrop Component has been fixed (055edb09)
- Border radius of Card Component has been fixed (c113a568)
- New Stories has been added to EmptyState Component and updated the existing story (af83ea74)
- Height of the Input field has been fixed when focus in EditableChipInput Component (bbb4f256)

### Improvements

- Added test cases for InputMask Component (e0f37b99)
- Added test cases for FileList Component (b36a44f1)
- Added test cases for Dropdown Component options and loading state (1cb98e93)

### Documentation

NA

---

## 2.3.0 (2021-09-10)

### Highlights

NA

### Breaking changes

NA

### Migration guide

NA

### Deprecations

NA

### Features

NA

### Fixes

- Improve padding of close button in overlays header (4d4965b9)
- Fixes nested rows losing their open state in grid (aed5b032)

### Improvements

- Adds test cases for FileUploaderComponent (5604656c)
- Adds test cases for TimePicker component (4e776a46)
- Adds test cases for ChatMessage Component (0443446c)
- Adds test cases for slider component (fa82992a)
- Adds test cases for DateRangePicker component (8c5abb26)

### Documentation

- Embeds rich text editor storybook (f3a469da)

---

## 2.3.0-2 (2021-25-10)

### Highlights

NA

### Breaking changes

NA

### Migration guide

NA

### Deprecations

NA

### Features

- Adds Close on Escape Keypress feature in Overlays (c2904387)

### Fixes

- Fixes arrow click event argument in MetricInput (e4cf0bc5)
- Adds default state delete functionality in EditableChipInput (3a8415f7)
- Fixes done button and adds support for uncontrolled EditableChipInput (16a844be)
- Fixes done button and adds support for uncontrolled EditableInput (f0de36cd)
- Fixes onChange callback in InputMask (I18e111ce)
- Removes margin bottom from modal body when there is no footer (7470a273)
- Fixes nested row card border in Grid (132d0903)

### Improvements

- feat(Checkbox): Adds helptext in checkbox (1d41c6cc)
- feat(Radio): Adds helptext in radio (fc886989)
- Test(MetaList): Adds test cases for MetaList component (5023743f)

### Documentation

- Adds more content to scrolling modal story (c43c8fea)

---

## 2.3.0-1 (2021-08-10)

### Highlights

NA

### Breaking changes

NA

### Migration guide

NA

### Deprecations

NA

### Features

- Improves Tabs API for custom tab (8018e724)

### Fixes

- Adds type `button` to all components using Button component (7be54df8)
- Removes action Icon when input field is disabled (deeb1e1c)

### Improvements

- Adds not-allowed cursor in stepper for disabled step (a11a3dce)

### Documentation

NA

---

## 2.3.0-0 (2021-08-10)

### Highlights

NA

### Breaking changes

NA

### Migration guide

NA

### Deprecations

NA

### Features

NA

### Fixes

- Fixes missing file icon in FileList (920e5c42)
- Fixes disabled state in DatePicker (1826c560)

### Improvements

- Adds radio's css for hover and active state (a025c7d4)

### Documentation

- Adds stepper stories (7274e111)

---

## 2.2.0-2 (2021-07-14)

### Highlights

NA

### Breaking changes

NA

### Migration guide

NA

### Deprecations

NA

### Features

NA

### Fixes

- Fixed table last page navigation and remember last page feature (e74cd502)

### Improvements

NA

### Documentation

NA

---

## 2.2.0-1 (2021-07-12)

### Highlights

NA

### Breaking changes

NA

### Migration guide

NA

### Deprecations

NA

### Features

NA

### Fixes

- updates material icons font files. (4f5fd6b7)
- fixes % width issue in overlays. (c1a4997d)
- adds support for string for cellType: ICON (c153e3e6)
- fixes width percent issue on initial render (fe12266d)
- fixes hover state for disabled tabs. (85117ede)

### Improvements

- adds test for chip and chipGroup components (5f4e4e8c)
- removes extra wrappers. (ab105189)
- adds button type to dropdown with apply button. (28aa3fda)
- adds focus state for tabs. (2365dc2e)
- sets Tabs withSeparator default to true. (27e22655)
- Uglify, brotli and gzip compression added. (101d71a6)
- adds Date.now mock. (2644524c)
- adds context api (ec94884f)

### Documentation

- adds stories to modal component (c12a633a)
- fixes responsiveness story of pageheader component. (912a2246)
- update guidelines for writing stories and patterns of components. (96159ad2)

---

## 2.2.0-0 (2021-07-01)

### Highlights

- New component EditableChipInput added. (18d702a7)

### Breaking changes

NA

### Migration guide

NA

### Deprecations

NA

### Features

- New component EditableChipInput added. (18d702a7)

### Fixes

- Adds width and height property to checkbox in unchecked state. (c2561f34)
- fixes GridBody scrollTop issue on unmount. (766b5686)
- updates pagination component according to design. (601c3a47)
- fixes expanded state on initial render of Collapsible component. (e2967a7b)
- fixes single line case for width<240px in ChipInput. (92a37b6f)
- fixes slider tooltip to move with pointer in Slider component. (f1698ff3)
- fixes label onClick handling of MultiSlider component (ff4af117)
- Updates DS-_ to Design-System-_ as data-test attribute value in components. (6956653e)
- fixes label inside tooltip to show custom label in Slider component (5ff6f838)
- Layout patterns styling and layout fixed. (e3b52908)
- Button Spinner loading state fixed. (bd8d9436)
- Show More button added in code preview panel. (134ef48a)

### Improvements

- skip feature for a step is addded in Stepper component (d4b775db)
- now Modal, Sidesheet and FullScreenModal components have uniform APIs (2c25d036)
- updated test cases for overlayheader, modal, sidesheet, EmptyState, Row, Column components.
- removes width: 100% and updates flex in Row component. (875564e7)
- adds box-shadow to focus state of Input component. (93b6356d)
- adds width 100% to MetricInput component. (267b2ad7)
- Bottom border radius added for tabs. (905e09b0)
- Cursor not allowed added for disabled tab component state. (716ed6c5)

### Documentation

- Updates stories of Table, PageHeader, Input components.
- adds placeholder story for Loaders component. (c8622a2e)
- updates the appearance variant story of Icon component. (42f654d9)
- adds pattern, disabled and error state stories for VerificationInput component. (bb8ea8cd)

---

## 2.1.3 (2021-06-10)

### Highlights

NA

### Breaking changes

NA

### Migration guide

NA

### Deprecations

NA

### Features

NA

### Fixes

- Adds width and height to checkbox in unchecked state. (c2561f34)

### Improvements

NA

### Documentation

NA

---

## 2.1.2 (2021-05-26)

### Highlights

NA

### Breaking changes

NA

### Migration guide

NA

### Deprecations

NA

### Features

NA

### Fixes

- downgrades js-beautify to v1.10.3 for supporting node 8.x (d0c0206b)

### Improvements

NA

### Documentation

- Fixes Alignment and Group stories for Checkbox component. (37d2412e)
- Fixes width of overflow story for Radio component. (5c632a2d)

---

## 2.1.1 (2021-05-26)

### Highlights

NA

### Breaking changes

NA

### Migration guide

NA

### Deprecations

NA

### Features

NA

### Fixes

- downgrades js-beautify to v1.10.3 for supporting node 8.x (a540fb95)

### Improvements

NA

### Documentation

NA

---

## 2.1.0 (2021-05-26)

### Highlights

- New component for tag based input is added as `ChipInput`. (dddcefb0)
- Atomic components support all native HTML attributes as props now. (917918b9)

### Breaking changes

NA

### Migration guide

NA

### Deprecations

NA

### Features

- Grid component can now preserve previous page scroll position. (98aa9085)
- Atomic components support all native HTML attributes as props now. (917918b9)
- New component for tag based input is added as `ChipInput`. (dddcefb0)

### Fixes

- Click event on disabled options of Dropdown component is fixed. (8e58516b)
- Row component includes flex-grow in its style properties. (20645578)
- Scrolling on body is now restored after un-mounting of Backdrop component. (60274751)
- Next button in forms pattern is fixed. (93947e39)
- upgrades @actions/core version from 1.2.6 to 1.2.7 (55bbe718)
- upgrades js-beautify version from 1.10.3 to 1.13.13 (a9d2413d)
- Loading state is fixed for searching in Dropdown. (7543c883)
- Loading state is fixed for searching in Table. (715c0483)
- Fixed story path for Dialog. (4785c838)

### Improvements

- FileUploaderItem component now uses icon button in stead of Icon component for actions. (12cff689)
- Tabs component now have some more states for hovering over. (ac05ee66)
- Margin between inputs of VerificationCodeInput component is updated. (c835e770)
- Opacity in Message component as design improvement is added. (1b707bef)

### Documentation

- Updates Pagination component stories. (e132ebfc)
- Updates Tabs component stories. (4774231e)
- Updates Popover component stories. (24db67d9)
- Updates Checkbox component stories. (24753996)
- Updates Radio component stories. (8b30b313)
- Updates highlight story of Card component. (c8a2fd84)

---

## 2.1.0-0 (2021-05-07)

### Highlights

- New components added to library for metric values input and verification code input, namely `VerificationCodeInput` and `MetricInput`.
- `Enzyme` testing library is removed from project, now our test cases are using react-testing-library and jest only.

### Breaking changes

NA

### Migration guide

NA

### Deprecations

NA

### Features

- Adds new component VerificationCodeInput for verification code input. (6ec9218a)
- Adds new component MetricInput for verification code input. (5632589d)

### Fixes

- Radio component css issue fixed. (b9049771)
- Checkbox component css issue fixed. (d5036517)
- Sorting of story titles in left navigation menu on storybook fixed for parent level menus. (d10d451e)
- Enzyme is completely removed from library and snapshots are updated accordingly. (d511f73c)

### Improvements

- Text component's subtle variant color updated. (32d2fe9c)
- Button component's button size for large icons updated. (65b100c2)

### Documentation

- Stories of `VerticalNav` component updated according to updated documentation and features. (87c5955e)
- Stories of `Dropdown` component updated according to updated documentation and features. (70329569)
- Stories of `Toast` component updated according to updated documentation and features. (b9e20b78)
- Stories of `Switch` component updated according to updated documentation and features. (c66e5e55)

---

## 2.0.0 (2021-04-28)

### Highlights

- Released 2.x of design system components.
- Support for storybook 6.
- Ability to edit component usage example on code sandbox on one click.
- Embed mode for minimal story embedding.
- New components introduced like Collapsible, CardHeader, CardBody, CardSubdued, CardFooter.
- Improved api design and features of navigation components.
- Calendar supports different sizes now.
- Manual changelog creation and review process.
- Separate library for charts, removed charts from components library.

### Breaking changes

- Recharts is removed from dependency and DonutChart component is removed from library. (adef7f46)

### Migration guide

- For DonutChart (if you are using) install the library `@innovaccer/charts` and import the component from it like `import { DonutChart } from @innovaccer/charts`.

### Features

- Adds HorizontalNav and VerticalNav as new components. (a5c02f61)
- New components to support Card component, CardHeader, CardBody, CardFooter and CardSubdued are added. (1dbae2f1)

### Fixes

- Fixes scroll issue in List component. (c7f11e5f)
- Fixes Label component's line-height. (4e33460b)
- Removes redundant wrapper div from Textarea component. (18d60c48)

### Improvements

- Removes automatic changelog generation. (fb27f302)

### Documentation

- Updates Card component stories. (5ce568f8)
- Updates Message component stories. (fa5a70fe)
- Updates HorizontalNav component stories. (19b6f28b)
- Improved css utilities documentation with ability to copy tokens and class names on a single click. (3afc8d05)

---

## v2.0.0-6 (2021-04-22)

### Highlights

NA

### Breaking changes

NA

### Migration guide

NA

### Deprecations

- Description as a children in Message component is now deprecated, Please use description prop.

### Features

- Adds support for Icon sizes in Button component. (69f0d1a7)

### Fixes

- Fixes column size 3 issues. (71d608f1)
- Removes @types/classnames library, to use updated version of classnames library. (41809fa2)
- Fixes layering of multiple overlays. (a86eb33b)
- Fix controlled Dropdown search functionality issue. (e3e162ba)

### Improvements

- In Message component support for actions is added and component is redesigned according to new design. Also support for description prop is added and children is deprecated. (63c22d1e)
- In Label component ability to show optional hint as 'Optional' is added. (38ef846b)

### Documentation

- Updates Button component stories. (91920acd)

---

## v2.0.0-5 (2021-04-14)

### Highlights

NA

### Breaking changes

NA

### Migration guide

NA

### Deprecations

NA

### Features

NA

### Fixes

- Minor issues with liveEditor in DocPage are fixed. (007486c3)
- Updates sizing for small variant of Calendar component. (67f00da9)

### Improvements

NA

### Documentation

NA

---

## v2.0.0-4 (2021-04-08)

### Highlights

NA

### Breaking changes

NA

### Migration guide

NA

### Deprecations

NA

### Features

NA

### Fixes

- Fixes issue in updating horizontal scroll of Grid (Table). (35f44c96)

### Improvements

- Updates header label of Table component. (9d42ab1a)
- Adds react-dynamic-virtual-scroll library in table to improve scrolling. (1b721f6d)

### Documentation

NA

---

## v2.0.0-3 (2021-04-02)

### Highlights

- Calendar available in different sizes.

### Breaking changes

NA

### Migration guide

NA

### Deprecations

NA

### Features

- Introduced different sizes in Calendar component, now Calendar component sizes can be controlled by prop exposed for the same. (55f4207e)
- In DocPage ability to hide and show code on button click is added and feature to keep code panel expanded by default in embed mode is added. (ded41856)

### Fixes

- In Breadcrumbs component Link component is used and removed old local subtleLink component. (e866178f)
- Scroll inside Collapsible panel component is fixed. (ded41856)
- classnames library version 2.2.6 is frozen to avoid unwanted updates and breaks. (ded41856)

### Improvements

NA

### Documentation

NA

---

## v2.0.0-2 (2021-03-31)

### Highlights

- New component: Collapsible
- Ability to edit and preview components directly in codeSandbox on single click.

### Breaking changes

NA

### Migration guide

NA

### Deprecations

NA

### Features

- Introduced noSandbox prop in story's docPage parameter to disable edit in code sandbox feature for specific story. (073dc0e8)
- new component Collapsible is added. (90c3a954)
- adds codeSandbox integration in docs page story preview. (0cdcbb33)

### Fixes

- Calendar component added to library build. (e3bb7dab)
- Fixes FullscreenModal's header for close button alignment. (7d269b8a)
- Updates html code indentation used in code sandbox. (eedd4bd6)
- Adds import generator to generate component imports for show code and edit in codeSandbox source codes. (becf40a3)
- Updates configs to support Story book version 6. (be41707e)
- updates titles of all stories to support SB6. (dd072353)
- update title of page to be as of story title, enables args table tab. (c3ce929d)
- Support for month nav is fixed in Calendar component. (7cacd5bd)

### Improvements

NA

### Documentation

- Updates Button component stories. (5f8b8a9f)

---

## v2.0.0-1 (2021-03-24)

### Highlights

NA

### Breaking changes

NA

### Migration guide

NA

### Deprecations

NA

### Features

NA

### Fixes

- Fixes Layout (ROW, Column) components styling according to bootstrap css. (6fa16085)

### Improvements

- Removes all stories rendering from doc page of a single component and adds show and hide feature for source code of story on docPage. (9d4d216d)

### Documentation

NA

---

## v2.0.0-0 (2021-03-19)

### Highlights

- Support for storybook 6 added.

### Breaking changes

NA

### Migration guide

NA

### Deprecations

NA

### Features

- upgrades storybook to 6.x, and all its dependencies to supported versions. (de09643a)
- Fixes Badge component styling. (4d77d53f)

### Fixes

NA

### Improvements

- Updates default style for Column component. (2c0b07c8)
- Adds size and appearance support in Link component. (3b6eee89)
- Adds support for count in horizontal navigation. (5a930857)

### Documentation

NA

---
