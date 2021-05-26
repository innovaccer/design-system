
## Unreleased  (yyyy-mm-dd) 

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
NA

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