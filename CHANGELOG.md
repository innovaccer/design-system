
## 2.6.0-1  (2021-11-25)
### Highlights
NA

### Breaking changes
NA

### Migration guide
NA

### Deprecations
NA

### Features
* Datepicker has example for date presets for date selections  (d1a0f30c)
* Switch and Button components are new accessible (AA) (1b64c361)

### Fixes
* Navigation center alignment bug is fixed in Pageheader component (c6c08ba4)
* Chip component's pointer style is fixed for hovering (01f2f9fc)
* Design of Calendar component is improved (e4ea85df)

### Improvements
NA

### Documentation
NA


-------------------

## 2.6.0-0  (2021-11-16) 
### Highlights
* Calender exposes onHover events on date month and year values (bcaa4aed)
* New component Divider is added (7dc6034d)

### Breaking changes
NA

### Migration guide
NA

### Deprecations
NA

### Features
* Calender exposes onHover events on date month and year values (bcaa4aed)
* New component Divider is added (7dc6034d)


### Fixes
* Options with checkbox in dropdown can have truncated text now. (c4e8f3a3)
* Text height of InlineMessage is corrected. (00bbd7e6)
* Table search results going blank is now fixed. (d2a96002)
* Table cell can render and position the dropdown inside properly. (3dea79b4)

### Improvements
* Library is now compatible with Node version 14.x LTS (33c736fd)
* Accessibility linting plugin is added. (6fbb5883)

### Documentation

-------------------

## 2.5.0  (2021-10-25) 

### Highlights
* A now component ChoiceList is added to use group of check box or radio inputs to work as a choice selector (2d9bb1ed)
* Calendar and DatePicker has new design and features for today date selection now. (7c3df346)
* All existing contributors are added to Readme, an option to create request for getting added as contributor and documentation for the same is added. (07db26e9)

### Breaking changes
NA

### Migration guide
NA

### Deprecations
NA

### Features
* A now component ChoiceList is added to use group of check box or radio inputs to work as a choice selector (2d9bb1ed)
* New helper classes for applying border or removing border of an element are added. (7675c8b3)
* Calendar and DatePicker has new design and features for today date selection now. (7c3df346)
* EmptyState component now supports inline SVG image. (863d69b0)
* Added previous and next month dates in current month's date in Calendar Component (4fe810bf)

### Fixes
* fix(button.css): fix active state in transparent button (1c499f0d)
* fix(nestedtable): fix expand and collapse button issue (be69d5e5)
* Issue in scrolling horizontally on a Table body not scrolled table header is resolved. (e71ea1c2)
* Icons on Table header and column menu to sort the table are now pointed in correct directions. (718a1a37)
* DateRangePicker pattern example now uses selection cheap in stead of radios for pre defined date range selections. (a1d0ee53)
* Table/Grid horizontal scrolling issue is fixed. (a6949715)
* Modal is now vertically centered and can have flexible heights. (ef6072a7)
* Dropzone icon is visible now when we bring mouse to drop file over it. (5ba93be9)
* Fixes the table header scroll when table body scroll (502cb1d1)
* Fixes the Tabs Component rendering issue with checking children component type (8525a4e7)
* Fixes the Datepicker snapshot which was getting updated as date changes (c001e925)

### Improvements
* Improved test coverage to cover more than 92% of the code base.

### Documentation
* FileUploader component example is now more interactive (509a9053)
* Navigation is more structured on story book for css and other utilities (56999d6b)
* Message component example improved for versatile use-cases. (16fe6be6)
* Readme is structured and updated for easy to access the required information (7d9c262d)
* All existing contributors are added to Readme, an option to create request for getting added as contributor and documentation for the same is added. (07db26e9)
* Guideline for branch naming convention added. (1ef3cd96)

-------------------
## 2.4.0  (2021-09-22) 

### Highlights
NA

### Breaking changes
NA

### Migration guide
NA

### Deprecations
NA

### Features
* Automated the process of types bundling (21f435b0)
* A new InlineMessage Component has been added (f852b2a8)
* Added the events indicator on given date in Calendar Component (4714efa2)
* A Chip has been added to Datepicker Component to select today's date (ee9e47e0)
* Tooltip in Icon Button Component has been added (f9f14233)
### Fixes
* Removes the events type Array from Calendar Component (41abf4ef)
* zIndex for Backdrop Component has been fixed (055edb09)
* Border radius of Card Component has been fixed (c113a568)
* New Stories has been added to EmptyState Component and updated the existing story (af83ea74)
* Height of the Input field has been fixed when focus in EditableChipInput Component (bbb4f256)
### Improvements
* Added test cases for InputMask Component (e0f37b99)
* Added test cases for FileList Component (b36a44f1)
* Added test cases for Dropdown Component options and loading state (1cb98e93)
### Documentation
NA

-------------------

## 2.3.0  (2021-09-10) 

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
* Improve padding of close button in overlays header  (4d4965b9) 
* Fixes nested rows losing their open state in grid (aed5b032)
### Improvements
* Adds test cases for FileUploaderComponent (5604656c)
* Adds test cases for TimePicker component (4e776a46)
* Adds test cases for ChatMessage Component (0443446c)
* Adds test cases for slider component (fa82992a)
* Adds test cases for DateRangePicker component (8c5abb26)
### Documentation
* Embeds rich text editor storybook (f3a469da)

-------------------

## 2.3.0-2  (2021-25-10) 

### Highlights
NA

### Breaking changes
NA

### Migration guide
NA

### Deprecations
NA

### Features
* Adds Close on Escape Keypress feature in Overlays (c2904387)

### Fixes
* Fixes arrow click event argument in MetricInput (e4cf0bc5)
* Adds default state delete functionality in EditableChipInput (3a8415f7)
* Fixes done button and adds support for uncontrolled EditableChipInput (16a844be)
* Fixes done button and adds support for uncontrolled EditableInput (f0de36cd)
* Fixes onChange callback in InputMask (I18e111ce)
* Removes margin bottom from modal body when there is no footer (7470a273)
* Fixes nested row card border in Grid (132d0903)
### Improvements
* feat(Checkbox): Adds helptext in checkbox (1d41c6cc)
* feat(Radio): Adds helptext in radio (fc886989)
* Test(MetaList): Adds test cases for MetaList component (5023743f)
### Documentation
* Adds more content to scrolling modal story (c43c8fea)

-------------------
## 2.3.0-1  (2021-08-10) 

### Highlights
NA

### Breaking changes
NA

### Migration guide
NA

### Deprecations
NA

### Features
* Improves Tabs API for custom tab (8018e724)

### Fixes
* Adds type `button` to all components using Button component (7be54df8)
* Removes action Icon when input field is disabled (deeb1e1c)

### Improvements
* Adds not-allowed cursor in stepper for disabled step (a11a3dce)

### Documentation
NA

-------------------

## 2.3.0-0  (2021-08-10) 

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
* Fixes missing file icon in FileList (920e5c42)
* Fixes disabled state in DatePicker (1826c560)

### Improvements
* Adds radio's css for hover and active state (a025c7d4)

### Documentation
* Adds stepper stories (7274e111)

-------------------
## 2.2.0-2  (2021-07-14) 

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
* Fixed table last page navigation and remember last page feature (e74cd502)

### Improvements
NA

### Documentation
NA

-------------------

## 2.2.0-1  (2021-07-12) 

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
* updates material icons font files. (4f5fd6b7)
* fixes % width issue in overlays. (c1a4997d)
* adds support for string for cellType: ICON (c153e3e6)
* fixes width percent issue on initial render (fe12266d)
* fixes hover state for disabled tabs. (85117ede)

### Improvements
* adds test for chip and chipGroup components (5f4e4e8c)
* removes extra wrappers. (ab105189)
* adds button type to dropdown with apply button. (28aa3fda)
* adds focus state for tabs. (2365dc2e)
* sets Tabs withSeparator default to true. (27e22655)
* Uglify, brotli and gzip compression added. (101d71a6)
* adds Date.now mock. (2644524c)
* adds context api (ec94884f)
### Documentation
* adds stories to modal component (c12a633a)
* fixes responsiveness story of pageheader component. (912a2246)
* update guidelines for writing stories and patterns of components. (96159ad2)

-------------------
## 2.2.0-0  (2021-07-01) 

### Highlights
* New component EditableChipInput added. (18d702a7)


### Breaking changes
NA

### Migration guide
NA

### Deprecations
NA

### Features
* New component EditableChipInput added. (18d702a7)


### Fixes
* Adds width and height property to checkbox in unchecked state. (c2561f34)
* fixes GridBody scrollTop issue on unmount. (766b5686)
* updates pagination component according to design. (601c3a47)
* fixes expanded state on initial render of Collapsible component. (e2967a7b)
* fixes single line case for width<240px in ChipInput. (92a37b6f)
* fixes slider tooltip to move with pointer in Slider component. (f1698ff3)
* fixes label onClick handling of MultiSlider component (ff4af117)
* Updates DS-* to Design-System-* as data-test attribute value in components. (6956653e)
* fixes label inside tooltip to show custom label in Slider component (5ff6f838)
* Layout patterns styling and layout fixed. (e3b52908)
* Button Spinner loading state fixed. (bd8d9436)
* Show More button added in code preview panel. (134ef48a)


### Improvements
* skip feature for a step is addded in Stepper component (d4b775db)
* now Modal, Sidesheet and FullScreenModal components have uniform APIs (2c25d036)
* updated test cases for overlayheader, modal, sidesheet, EmptyState, Row, Column components.
* removes width: 100% and updates flex in Row component. (875564e7)
* adds box-shadow to focus state of Input component. (93b6356d)
* adds width 100% to MetricInput component. (267b2ad7)
* Bottom border radius added for tabs. (905e09b0) 
* Cursor not allowed added for disabled tab component state. (716ed6c5)


### Documentation
* Updates stories of Table, PageHeader, Input components.
* adds placeholder story for Loaders component. (c8622a2e)
* updates the appearance variant story of Icon component. (42f654d9)
* adds pattern, disabled and error state stories for VerificationInput component. (bb8ea8cd)

-------------------

## 2.1.3  (2021-06-10) 

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
* Adds width and height to checkbox in unchecked state. (c2561f34)

### Improvements
NA

### Documentation
NA

-------------------

## 2.1.2  (2021-05-26) 

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
* downgrades js-beautify to v1.10.3 for supporting node 8.x  (d0c0206b)

### Improvements
NA

### Documentation
* Fixes Alignment and Group stories for Checkbox component. (37d2412e)
* Fixes width of overflow story for Radio component. (5c632a2d)


-------------------
## 2.1.1  (2021-05-26) 

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
* downgrades js-beautify to v1.10.3 for supporting node 8.x  (a540fb95)

### Improvements
NA

### Documentation
NA


-------------------
## 2.1.0  (2021-05-26) 

### Highlights
* New component for tag based input is added as `ChipInput`. (dddcefb0)
* Atomic components support all native HTML attributes as props now. (917918b9)

### Breaking changes
NA

### Migration guide
NA

### Deprecations
NA

### Features
* Grid component can now preserve previous page scroll position. (98aa9085)
* Atomic components support all native HTML attributes as props now. (917918b9)
* New component for tag based input is added as `ChipInput`. (dddcefb0)

### Fixes
* Click event on disabled options of Dropdown component is fixed. (8e58516b)
* Row component includes flex-grow in its style properties. (20645578)
* Scrolling on body is now restored after un-mounting of Backdrop component. (60274751)
* Next button in forms pattern is fixed. (93947e39)
* upgrades @actions/core version from 1.2.6 to 1.2.7 (55bbe718)
* upgrades js-beautify version from 1.10.3 to 1.13.13 (a9d2413d)
* Loading state is fixed for searching in Dropdown. (7543c883)
* Loading state is fixed for searching in Table. (715c0483)
* Fixed story path for Dialog. (4785c838)



### Improvements
* FileUploaderItem component now uses icon button in stead of Icon component for actions. (12cff689)
* Tabs component now have some more states for hovering over. (ac05ee66)
* Margin between inputs of VerificationCodeInput component is updated. (c835e770)
* Opacity in Message component as design improvement is added. (1b707bef)


### Documentation
* Updates Pagination component stories. (e132ebfc)
* Updates Tabs component stories. (4774231e)
* Updates Popover component stories. (24db67d9)
* Updates Checkbox component stories. (24753996)
* Updates Radio component stories. (8b30b313)
* Updates highlight story of Card component. (c8a2fd84)


-------------------


## 2.1.0-0  (2021-05-07) 

### Highlights
* New components added to library for metric values input and verification code input, namely `VerificationCodeInput` and `MetricInput`.
* `Enzyme` testing library is removed from project, now our test cases are using react-testing-library and jest only.

### Breaking changes
NA

### Migration guide
NA

### Deprecations
NA

### Features
* Adds new component VerificationCodeInput for verification code input. (6ec9218a)
* Adds new component MetricInput for verification code input. (5632589d)

### Fixes
* Radio component css issue fixed. (b9049771)
* Checkbox component css issue fixed. (d5036517)
* Sorting of story titles in left navigation menu on storybook fixed for parent level menus. (d10d451e)
* Enzyme is completely removed from library and snapshots are updated accordingly. (d511f73c)

### Improvements
* Text component's subtle variant color updated. (32d2fe9c)
* Button component's button size for large icons updated. (65b100c2)


### Documentation
* Stories of `VerticalNav` component updated according to updated documentation and features. (87c5955e)
* Stories of `Dropdown` component updated according to updated documentation and features. (70329569)
* Stories of `Toast` component updated according to updated documentation and features. (b9e20b78)
* Stories of `Switch` component updated according to updated documentation and features. (c66e5e55)


-------------------

## 2.0.0  (2021-04-28)

### Highlights
* Released 2.x of design system components.
* Support for storybook 6.
* Ability to edit component usage example on code sandbox on one click.
* Embed mode for minimal story embedding.
* New components introduced like Collapsible, CardHeader, CardBody, CardSubdued, CardFooter.
* Improved api design and features of navigation components.
* Calendar supports different sizes now.
* Manual changelog creation and review process.
* Separate library for charts, removed charts from components library.


### Breaking changes
* Recharts is removed from dependency and DonutChart component is removed from library. (adef7f46)

### Migration guide
* For DonutChart (if you are using) install the library `@innovaccer/charts` and import the component from it like `import { DonutChart } from @innovaccer/charts`.

### Features
* Adds HorizontalNav and VerticalNav as new components. (a5c02f61)
* New components to support Card component, CardHeader, CardBody, CardFooter and CardSubdued are added. (1dbae2f1)

### Fixes
* Fixes scroll issue in List component. (c7f11e5f)
* Fixes Label component's line-height. (4e33460b)
* Removes redundant wrapper div from Textarea component. (18d60c48)

### Improvements
* Removes automatic changelog generation. (fb27f302)

### Documentation
* Updates Card component stories. (5ce568f8)
* Updates Message component stories. (fa5a70fe)
* Updates HorizontalNav component stories. (19b6f28b)
* Improved css utilities documentation with ability to copy tokens and class names on a single click. (3afc8d05)

-------------------
## v2.0.0-6  (2021-04-22) 

### Highlights
NA

### Breaking changes
NA

### Migration guide
NA

### Deprecations
* Description as a children in Message component is now deprecated, Please use description prop.

### Features
* Adds support for Icon sizes in Button component. (69f0d1a7)

### Fixes
* Fixes column size 3 issues. (71d608f1)
* Removes @types/classnames library, to use updated version of classnames library. (41809fa2)
* Fixes layering of multiple overlays. (a86eb33b)
* Fix controlled Dropdown search functionality issue. (e3e162ba)

### Improvements
* In Message component support for actions is added and component is redesigned according to new design. Also support for description prop is added and children is deprecated. (63c22d1e)
* In Label component ability to show optional hint as 'Optional' is added. (38ef846b)

### Documentation
* Updates Button component stories. (91920acd)

-------------------
## v2.0.0-5  (2021-04-14) 

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
* Minor issues with liveEditor in DocPage are fixed. (007486c3)
* Updates sizing for small variant of Calendar component. (67f00da9)

### Improvements
NA

### Documentation
NA

-------------------
## v2.0.0-4  (2021-04-08) 

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
* Fixes issue in updating horizontal scroll of Grid (Table). (35f44c96)

### Improvements
* Updates header label of Table component. (9d42ab1a)
* Adds react-dynamic-virtual-scroll library in table to improve scrolling. (1b721f6d)

### Documentation
NA

-------------------
## v2.0.0-3  (2021-04-02) 

### Highlights
* Calendar available in different sizes.

### Breaking changes
NA

### Migration guide
NA

### Deprecations
NA

### Features
* Introduced different sizes in Calendar component, now Calendar component sizes can be controlled by prop exposed for the same. (55f4207e)
* In DocPage ability to hide and show code on button click is added and feature to keep code panel expanded by default in embed mode is added. (ded41856) 

### Fixes
* In Breadcrumbs component Link component is used and removed old local subtleLink component. (e866178f)
* Scroll inside Collapsible panel component is fixed. (ded41856)
* classnames library version 2.2.6 is frozen to avoid unwanted updates and breaks. (ded41856)

### Improvements
NA

### Documentation
NA

-------------------
## v2.0.0-2  (2021-03-31) 

### Highlights
* New component: Collapsible
* Ability to edit and preview components directly in codeSandbox on single click.

### Breaking changes
NA

### Migration guide
NA

### Deprecations
NA

### Features
* Introduced noSandbox prop in story's docPage parameter to disable edit in code sandbox feature for specific story. (073dc0e8)
* new component Collapsible is added. (90c3a954)
* adds codeSandbox integration in docs page story preview. (0cdcbb33)

### Fixes
* Calendar component added to library build. (e3bb7dab)
* Fixes FullscreenModal's header for close button alignment. (7d269b8a)
* Updates html code indentation used in code sandbox. (eedd4bd6)
* Adds import generator to generate component imports for show code and edit in codeSandbox source codes. (becf40a3)
* Updates configs to support Story book version 6. (be41707e)
* updates titles of all stories to support SB6.  (dd072353)
* update title of page to be as of story title, enables args table tab. (c3ce929d)
* Support for month nav is fixed in Calendar component. (7cacd5bd)

### Improvements
NA

### Documentation
* Updates Button component stories. (5f8b8a9f)


-------------------
## v2.0.0-1  (2021-03-24) 

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
* Fixes Layout (ROW, Column) components styling according to bootstrap css. (6fa16085)

### Improvements
* Removes all stories rendering from doc page of a single component and adds show and hide feature for source code of story on docPage. (9d4d216d)

### Documentation
NA

-------------------
## v2.0.0-0  (2021-03-19) 

### Highlights
* Support for storybook 6 added.

### Breaking changes
NA

### Migration guide
NA

### Deprecations
NA

### Features
* upgrades storybook to 6.x, and all its dependencies to supported versions. (de09643a)
* Fixes Badge component styling. (4d77d53f)

### Fixes
NA

### Improvements
* Updates default style for Column component. (2c0b07c8)
* Adds size and appearance support in Link component. (3b6eee89)
* Adds support for count in horizontal navigation. (5a930857)

### Documentation
NA

-------------------