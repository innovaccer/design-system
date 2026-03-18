export interface AccessibilityPropDef {
  name: string;
  type: string;
  description: string;
  defaultValue?: string;
}

export type HtmlElementType =
  | 'button'
  | 'checkbox'
  | 'radio'
  | 'textbox'
  | 'link'
  | 'range'
  | 'listbox'
  | 'generic'
  | 'custom';

export interface A11yPropTableConfig {
  htmlElement: HtmlElementType;
  customProps?: AccessibilityPropDef[];
}

/**
 * Curated accessibility props per element type.
 * Each list contains ONLY the props relevant to that component category,
 * based on actual component code, ARIA spec roles, and real-world usage.
 */
const curatedElementProps: Record<HtmlElementType, AccessibilityPropDef[]> = {
  /**
   * button: Button, LinkButton
   * Interactive elements that trigger actions.
   */
  button: [
    {
      name: 'aria-label',
      type: 'string',
      description: 'Defines a label for the button. Essential for icon-only buttons.',
    },
    { name: 'aria-labelledby', type: 'string', description: 'References the ID of element(s) that label the button.' },
    {
      name: 'aria-describedby',
      type: 'string',
      description: 'References the ID of element(s) providing additional description.',
    },
    { name: 'aria-disabled', type: 'boolean', description: 'Indicates the button is perceivable but not operable.' },
    {
      name: 'aria-pressed',
      type: '"false" | "true" | "mixed"',
      description: 'Indicates the current "pressed" state of a toggle button.',
    },
    {
      name: 'aria-expanded',
      type: 'boolean',
      description: 'Indicates whether a controlled element (menu, dialog, section) is expanded or collapsed.',
    },
    {
      name: 'aria-haspopup',
      type: '"false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog"',
      description: 'Indicates the button triggers an interactive popup element.',
    },
    {
      name: 'aria-controls',
      type: 'string',
      description: 'Identifies the element whose contents are controlled by this button.',
    },
    { name: 'aria-busy', type: 'boolean', description: 'Indicates the button is in a loading state.' },
    { name: 'aria-hidden', type: 'boolean', description: 'Hides the button from assistive technologies.' },
    { name: 'role', type: 'string', description: 'Overrides the implicit button role.' },
    {
      name: 'tabIndex',
      type: 'number',
      description: 'Controls focus order. Use -1 to remove from tab sequence, 0 for natural order.',
    },
  ],

  /**
   * checkbox: Checkbox, Switch, SelectionCard
   * Form controls with checked/unchecked state.
   */
  checkbox: [
    {
      name: 'aria-label',
      type: 'string',
      description: 'Defines a label for the element. Use when no visible label is present.',
    },
    { name: 'aria-labelledby', type: 'string', description: 'References the ID of element(s) that label the element.' },
    { name: 'aria-describedby', type: 'string', description: 'References help text or additional description.' },
    { name: 'aria-disabled', type: 'boolean', description: 'Indicates the element is perceivable but not operable.' },
    {
      name: 'aria-checked',
      type: '"false" | "true" | "mixed"',
      description: 'Indicates the checked state. Set to "mixed" for indeterminate state.',
    },
    { name: 'aria-required', type: 'boolean', description: 'Indicates selection is required before form submission.' },
    { name: 'aria-invalid', type: '"false" | "true"', description: 'Indicates a validation error.' },
    {
      name: 'aria-errormessage',
      type: 'string',
      description: 'References the element containing the error message when aria-invalid is true.',
    },
    { name: 'aria-hidden', type: 'boolean', description: 'Hides the element from assistive technologies.' },
    { name: 'role', type: 'string', description: 'Overrides the implicit role (e.g., "switch" or "checkbox").' },
    { name: 'tabIndex', type: 'number', description: 'Controls focus order. Use -1 to remove from tab sequence.' },
  ],

  /**
   * radio: Radio
   * Form controls within a group. Only one can be selected at a time.
   */
  radio: [
    { name: 'aria-label', type: 'string', description: 'Defines a label for the radio button.' },
    { name: 'aria-labelledby', type: 'string', description: 'References the ID of element(s) that label the radio.' },
    { name: 'aria-describedby', type: 'string', description: 'References help text or additional description.' },
    { name: 'aria-disabled', type: 'boolean', description: 'Indicates the radio is perceivable but not operable.' },
    { name: 'aria-checked', type: '"false" | "true"', description: 'Indicates whether the radio button is selected.' },
    { name: 'aria-required', type: 'boolean', description: 'Indicates selection is required before form submission.' },
    { name: 'aria-invalid', type: '"false" | "true"', description: 'Indicates a validation error on the radio group.' },
    { name: 'aria-errormessage', type: 'string', description: 'References the element containing the error message.' },
    { name: 'aria-hidden', type: 'boolean', description: 'Hides the element from assistive technologies.' },
    { name: 'role', type: 'string', description: 'Overrides the implicit radio role if needed.' },
    { name: 'tabIndex', type: 'number', description: 'Controls focus order within the radio group.' },
  ],

  /**
   * textbox: Input, Textarea, MetricInput, InputMask, VerificationCodeInput
   * Text entry form controls.
   */
  textbox: [
    {
      name: 'aria-label',
      type: 'string',
      description: 'Defines a label for the input. Essential when no visible label element is present.',
    },
    { name: 'aria-labelledby', type: 'string', description: 'References the ID of element(s) that label the input.' },
    { name: 'aria-describedby', type: 'string', description: 'References help text or additional description.' },
    { name: 'aria-disabled', type: 'boolean', description: 'Indicates the input is perceivable but not operable.' },
    { name: 'aria-required', type: 'boolean', description: 'Indicates input is required before form submission.' },
    { name: 'aria-invalid', type: '"false" | "true"', description: 'Indicates a validation error.' },
    { name: 'aria-errormessage', type: 'string', description: 'References the element containing the error message.' },
    {
      name: 'aria-readonly',
      type: 'boolean',
      description: 'Indicates the input value cannot be edited but is still readable.',
    },
    {
      name: 'aria-placeholder',
      type: 'string',
      description: 'Provides an accessible hint when the input is empty (prefer visible placeholder).',
    },
    {
      name: 'aria-autocomplete',
      type: '"none" | "inline" | "list" | "both"',
      description: 'Indicates whether typing triggers prediction suggestions.',
    },
    { name: 'aria-multiline', type: 'boolean', description: 'Indicates the text input accepts multiple lines.' },
    { name: 'aria-hidden', type: 'boolean', description: 'Hides the element from assistive technologies.' },
    { name: 'role', type: 'string', description: 'Overrides the implicit textbox role.' },
  ],

  /**
   * link: Link, ActionCard
   * Navigation elements.
   */
  link: [
    {
      name: 'aria-label',
      type: 'string',
      description: 'Defines an accessible name. Use when link text alone is not descriptive.',
    },
    { name: 'aria-labelledby', type: 'string', description: 'References the ID of element(s) that label the link.' },
    {
      name: 'aria-describedby',
      type: 'string',
      description: 'References element(s) providing additional context for the link destination.',
    },
    { name: 'aria-disabled', type: 'boolean', description: 'Indicates the link is perceivable but not operable.' },
    {
      name: 'aria-expanded',
      type: 'boolean',
      description: 'Indicates whether a section controlled by this link is expanded or collapsed.',
    },
    {
      name: 'aria-current',
      type: '"page" | "step" | "location" | "date" | "time" | "true" | "false"',
      description: 'Indicates the link represents the current item (e.g., current page in navigation).',
    },
    { name: 'aria-hidden', type: 'boolean', description: 'Hides the element from assistive technologies.' },
    { name: 'role', type: 'string', description: 'Overrides the implicit link role.' },
    { name: 'tabIndex', type: 'number', description: 'Controls focus order. Use -1 when disabled, 0 otherwise.' },
  ],

  /**
   * range: Meter
   * Value display components that expose aria-value* attributes.
   */
  range: [
    { name: 'aria-label', type: 'string', description: 'Defines a label describing what the value represents.' },
    {
      name: 'aria-labelledby',
      type: 'string',
      description: 'References the ID of element(s) that label the range widget.',
    },
    {
      name: 'aria-describedby',
      type: 'string',
      description: 'References element(s) providing context about the value.',
    },
    { name: 'aria-valuemax', type: 'number', description: 'Maximum allowed value.' },
    { name: 'aria-valuemin', type: 'number', description: 'Minimum allowed value. Typically 0.' },
    { name: 'aria-valuenow', type: 'number', description: 'Current value.' },
    {
      name: 'aria-valuetext',
      type: 'string',
      description: 'Human-readable text for the current value (e.g., "50% complete").',
    },
    { name: 'aria-disabled', type: 'boolean', description: 'Indicates the element is perceivable but not operable.' },
    { name: 'aria-hidden', type: 'boolean', description: 'Hides the element from assistive technologies.' },
    { name: 'role', type: 'string', description: 'Defines the ARIA role for the element.' },
  ],

  /**
   * listbox: Listbox
   * Selectable list of options.
   */
  listbox: [
    { name: 'aria-label', type: 'string', description: 'Defines an accessible name for the listbox.' },
    { name: 'aria-labelledby', type: 'string', description: 'References the element that labels the listbox.' },
    { name: 'aria-describedby', type: 'string', description: 'References element(s) providing additional context.' },
    { name: 'aria-disabled', type: 'boolean', description: 'Indicates the listbox is not operable.' },
    {
      name: 'aria-multiselectable',
      type: 'boolean',
      description: 'Indicates multiple options can be selected simultaneously.',
    },
    { name: 'aria-required', type: 'boolean', description: 'Indicates selection is required before form submission.' },
    { name: 'aria-orientation', type: '"horizontal" | "vertical"', description: 'Indicates the listbox orientation.' },
    { name: 'aria-hidden', type: 'boolean', description: 'Hides the listbox from assistive technologies.' },
    { name: 'role', type: 'string', description: 'Defines the listbox role for the container element.' },
    { name: 'tabIndex', type: 'number', description: 'Controls focus order of the listbox container.' },
  ],

  /**
   * generic: Card, Collapsible, AvatarGroup, Pills, HelpText,
   *          Tooltip, Popover, Dropzone, Calendar
   * Structural/container components with minimal a11y semantics.
   */
  generic: [
    { name: 'aria-label', type: 'string', description: 'Defines an accessible name for the element.' },
    {
      name: 'aria-labelledby',
      type: 'string',
      description: 'References the ID of element(s) that label this element.',
    },
    {
      name: 'aria-describedby',
      type: 'string',
      description: 'References element(s) providing additional description.',
    },
    { name: 'aria-hidden', type: 'boolean', description: 'Hides the element from assistive technologies.' },
    { name: 'role', type: 'string', description: 'Defines an ARIA role for semantic meaning.' },
    { name: 'tabIndex', type: 'number', description: 'Controls whether the element is focusable and its tab order.' },
  ],

  /**
   * custom: For components that extend only BaseProps (not BaseHtmlProps).
   * These components do NOT accept arbitrary aria-* attributes — only explicitly
   * defined props are passable. The customProps field on the registry entry
   * lists exactly what's available.
   */
  custom: [],
};

/**
 * Central registry mapping component displayNames to their a11y element types.
 * This ensures the a11y prop table appears on ALL story pages for a component,
 * not just the index/All story.
 */
export const componentA11yRegistry: Record<string, A11yPropTableConfig> = {
  // ========================================================================
  // FULL: extends BaseHtmlProps / OmitNativeProps — all curated props passable
  // ========================================================================

  // Button-like (BaseHtmlProps<HTMLButtonElement>)
  Button: { htmlElement: 'button' },
  LinkButton: { htmlElement: 'button' },

  // Checkbox-like (OmitNativeProps<HTMLInputElement>)
  Checkbox: { htmlElement: 'checkbox' },
  Switch: { htmlElement: 'checkbox' },

  // SelectionCard (BaseHtmlProps<HTMLDivElement>) — uses role="checkbox"
  SelectionCard: { htmlElement: 'checkbox' },

  // Radio (OmitNativeProps<HTMLInputElement>)
  Radio: { htmlElement: 'radio' },

  // Textbox-like (BaseHtmlProps<HTMLInputElement/HTMLTextAreaElement>)
  // Note: Input overrides tabIndex internally (readOnly ? -1 : undefined), so consumers cannot customise it.
  Input: { htmlElement: 'textbox' },
  Textarea: {
    htmlElement: 'textbox',
    customProps: [{ name: 'tabIndex', type: 'number', description: 'Controls focus order.' }],
  },
  MetricInput: {
    htmlElement: 'textbox',
    customProps: [{ name: 'tabIndex', type: 'number', description: 'Controls focus order.' }],
  },

  // Link-like (OmitNativeProps<HTMLLinkElement> / BaseHtmlProps<HTMLDivElement>)
  Link: { htmlElement: 'link' },
  ActionCard: { htmlElement: 'link' },

  // Card (BaseHtmlProps<HTMLDivElement>)
  Card: { htmlElement: 'generic' },

  // Meter (BaseProps + React.HTMLAttributes<HTMLDivElement>)
  Meter: { htmlElement: 'range' },

  // Listbox (BaseHtmlProps<HTMLUListElement | HTMLDivElement>)
  Listbox: { htmlElement: 'listbox' },

  // InputMask (extends InputProps — inherits Input's tabIndex override)
  InputMask: { htmlElement: 'textbox' },

  // VerificationCodeInput (extends InputProps — inherits Input's tabIndex override)
  VerificationCodeInput: { htmlElement: 'textbox' },

  // ========================================================================
  // CUSTOM: extends only BaseProps — ONLY explicitly defined props are passable.
  // These components use extractBaseProps() which does NOT spread aria-* attributes.
  // ========================================================================

  // Chip: accepts role, aria-label, aria-labelledby
  Chip: {
    htmlElement: 'custom',
    customProps: [
      { name: 'aria-label', type: 'string', description: 'Defines an accessible name for the chip.' },
      { name: 'aria-labelledby', type: 'string', description: 'References the ID of element(s) that label the chip.' },
      {
        name: 'role',
        type: 'string',
        description: 'Overrides the implicit role (e.g., "option" for selection chips).',
      },
    ],
  },

  // Spinner: only accepts aria-label (role="status" and aria-live="polite" are hardcoded internally)
  Spinner: {
    htmlElement: 'custom',
    customProps: [
      {
        name: 'aria-label',
        type: 'string',
        description: 'Describes the loading action for screen readers.',
        defaultValue: '"Loading"',
      },
    ],
  },

  // Avatar: accepts aria-label, role, tabIndex
  Avatar: {
    htmlElement: 'custom',
    customProps: [
      { name: 'aria-label', type: 'string', description: 'Provides an accessible name for the avatar.' },
      {
        name: 'role',
        type: 'string',
        description: 'Set to "img" by default, or "button" when interactive (tabIndex is set).',
      },
      {
        name: 'tabIndex',
        type: 'number',
        description: 'Makes the avatar focusable. When set, role changes to "button".',
      },
    ],
  },

  // Icon: useAccessibilityProps forwards different props based on onClick presence.
  // With onClick: role, tabIndex, aria-label, onKeyDown.
  // Without onClick: aria-label, aria-labelledby, aria-describedby, aria-hidden.
  Icon: {
    htmlElement: 'custom',
    customProps: [
      {
        name: 'aria-label',
        type: 'string',
        description:
          'Provides an accessible name for the icon. Forwarded for both interactive (onClick) and non-interactive icons.',
      },
      {
        name: 'aria-hidden',
        type: 'boolean',
        description:
          'Hides the icon from assistive technologies. Use on decorative, non-interactive icons. Only effective when onClick is not provided.',
      },
      {
        name: 'tabIndex',
        type: 'number',
        description:
          'Makes the icon focusable. Only effective when onClick is also provided; ignored on non-interactive icons.',
      },
    ],
  },

  // ProgressBar: aria-value* attributes are computed internally from `value` and `max` props.
  // Consumers should NOT pass aria-valuemin, aria-valuemax, aria-valuenow, or aria-valuetext
  // directly — ProgressBarProps does not declare them and extractBaseProps does not forward them.

  // Pills: accepts aria-label
  Pills: {
    htmlElement: 'custom',
    customProps: [
      {
        name: 'aria-label',
        type: 'string',
        description: 'Provides an accessible name for the pill (e.g., "3 unread notifications").',
      },
    ],
  },

  // Modal: accepts aria-labelledby (role="dialog" and aria-modal are hardcoded)
  Modal: {
    htmlElement: 'custom',
    customProps: [
      {
        name: 'aria-labelledby',
        type: 'string',
        description: 'References the modal heading. Use headerOptions.headingId to auto-set.',
      },
    ],
  },

  // Sidesheet: accepts aria-labelledby (role="dialog" and aria-modal are hardcoded)
  Sidesheet: {
    htmlElement: 'custom',
    customProps: [
      {
        name: 'aria-labelledby',
        type: 'string',
        description: 'References the sidesheet heading. Use headerOptions.headingId to auto-set.',
      },
    ],
  },

  // FullscreenModal: accepts aria-labelledby, aria-label, aria-describedby
  FullscreenModal: {
    htmlElement: 'custom',
    customProps: [
      {
        name: 'aria-labelledby',
        type: 'string',
        description: 'References the fullscreen modal heading. Use headerOptions.headingId to auto-set.',
      },
      {
        name: 'aria-label',
        type: 'string',
        description:
          'Accessible label for the dialog when no heading ID is available. Used as fallback when aria-labelledby is not set.',
      },
      {
        name: 'aria-describedby',
        type: 'string',
        description: 'References the element(s) providing an accessible description for the dialog.',
      },
    ],
  },

  // Tabs: accepts aria-labelledby
  Tabs: {
    htmlElement: 'custom',
    customProps: [
      {
        name: 'aria-labelledby',
        type: 'string',
        description: 'References an external element that labels the tab list.',
      },
    ],
  },

  // ChipInput: accepts aria-label, aria-labelledby, aria-describedby
  ChipInput: {
    htmlElement: 'custom',
    customProps: [
      { name: 'aria-label', type: 'string', description: 'Defines an accessible name for the chip input.' },
      {
        name: 'aria-labelledby',
        type: 'string',
        description: 'References the ID of element(s) that label the chip input.',
      },
      { name: 'aria-describedby', type: 'string', description: 'References help text or additional description.' },
    ],
  },

  // HorizontalNav: accepts aria-label
  HorizontalNav: {
    htmlElement: 'custom',
    customProps: [
      {
        name: 'aria-label',
        type: 'string',
        description: 'Names the navigation landmark. Essential when multiple navs exist on a page.',
        defaultValue: '"Horizontal Navigation"',
      },
    ],
  },

  // ChoiceList: accepts aria-label and aria-labelledby on the component
  ChoiceList: {
    htmlElement: 'custom',
    customProps: [
      { name: 'aria-label', type: 'string', description: 'Provides an accessible name for the choice list group.' },
      {
        name: 'aria-labelledby',
        type: 'string',
        description:
          'References the ID of element(s) that label the choice list group. Use when the group is labelled by another element on the page.',
      },
    ],
  },

  // Dropdown: accepts aria-label, aria-labelledby (forwarded to built-in trigger only), optionsAriaLabel
  Dropdown: {
    htmlElement: 'custom',
    customProps: [
      {
        name: 'aria-label',
        type: 'string',
        description:
          'Defines an accessible name for the dropdown trigger. Applied to the built-in trigger only; not forwarded when using customTrigger.',
      },
      {
        name: 'aria-labelledby',
        type: 'string',
        description:
          'References the ID of element(s) that label the dropdown trigger. Applied to the built-in trigger only; not forwarded when using customTrigger.',
      },
      {
        name: 'optionsAriaLabel',
        type: 'string',
        description: 'Accessible name for the options list container. Defaults to "{aria-label} options" or "Options".',
      },
    ],
  },

  // ========================================================================
  // NOT INCLUDED (BaseProps only, NO passable a11y props):
  // SegmentedControl, AvatarSelection, ProgressBar, ProgressRing, Toast,
  // Message, Collapsible, AvatarGroup, HelpText, Dialog, Tooltip, Popover,
  // Dropzone, EditableInput, EditableChipInput, EditableDropdown, Stepper,
  // VerticalNav, Navigation, DatePicker, DateRangePicker, Calendar,
  // InlineMessage
  // These components manage a11y internally and do not expose configurable
  // aria-* props to consumers.
  // ========================================================================
};

/**
 * Resolves the a11y prop table config for a story.
 * Priority: per-story config > central registry by component displayName.
 */
export function resolveA11yConfig(
  storyConfig?: A11yPropTableConfig,
  componentDisplayName?: string
): A11yPropTableConfig | undefined {
  if (storyConfig) return storyConfig;
  if (componentDisplayName && componentA11yRegistry[componentDisplayName]) {
    return componentA11yRegistry[componentDisplayName];
  }
  return undefined;
}

/**
 * Returns the curated accessibility props for a given element type.
 * Only includes props that are genuinely relevant to the component category.
 * Custom props (if any) are appended and take priority on name collision.
 */
export function getAccessibilityProps(config: A11yPropTableConfig): AccessibilityPropDef[] {
  const { htmlElement, customProps = [] } = config;

  const baseProps = curatedElementProps[htmlElement] || [];

  if (!customProps.length) return baseProps;

  // Merge: base props + custom props (custom overrides base on name collision)
  const propMap = new Map<string, AccessibilityPropDef>();
  baseProps.forEach((prop) => propMap.set(prop.name, prop));
  customProps.forEach((prop) => propMap.set(prop.name, prop));

  return Array.from(propMap.values());
}
