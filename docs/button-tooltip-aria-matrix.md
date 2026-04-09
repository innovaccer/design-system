# Button Tooltip & Accessibility

This document explains how we handle tooltips, accessible names, and descriptions for the `Button` component to ensure a seamless, non-repetitive experience for screen reader users.

## The Core Rule: Tooltip Poppers are Hidden

The floating tooltip UI (the popper) must **always** be hidden from assistive technology using `aria-hidden="true"`.

Instead of relying on the visual popper, we programmatically associate the tooltip's text directly with the `<button>` element itself. This guarantees the screen reader announces the text immediately when the button receives focus, without double-reading the text if the user later explores the DOM.

## How the Text is Associated

Depending on the button's content, the tooltip text acts as either the button's primary **name** or its supplementary **description**.

### 1. Icon-Only Buttons
For buttons without visible text, the tooltip string typically serves as the button's name.
*   **Default behavior:** The tooltip text is used as the button's `aria-label`. We do not add a description.
*   **When only an `aria-label` is provided:** If an icon-only button has an `aria-label` but no explicit `tooltip` prop, we automatically display the `aria-label` visually inside a tooltip.
*   **When a custom `aria-label` is provided alongside a tooltip:** If the app provides a label that is *different* from the tooltip, we use their label for the name. We then generate a visually hidden node containing the tooltip text and link it as a description using `aria-describedby`.
*   **When the label and tooltip match:** If the provided `aria-label` and the tooltip text are identical, we omit the description entirely. This prevents the screen reader from stuttering (e.g., announcing "Save, Save").

### 2. Text Buttons
For buttons with visible text, the tooltip always provides supplementary information, so it acts as a description.
*   **Default behavior:** We generate a visually hidden node containing the tooltip text and link it to the button using `aria-describedby`.
*   **When an app description exists:** If the app already provides an `aria-describedby` ID, we concatenate our generated tooltip ID with theirs (e.g., `aria-describedby="app-id mds-tooltip-id"`), ensuring both descriptions are read.