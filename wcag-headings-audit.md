# WCAG 2.2 AA Headings Audit Report

## Summary
This report details the findings from an audit of the Masala Design System (MDS) components against WCAG 2.2 AA guidelines for headings (specifically SC 1.3.1: Info and Relationships). 

The primary issues found revolve around:
1. Coupling visual size with semantic heading levels.
2. Hardcoding heading levels deep within components, leading to out-of-order hierarchies.
3. Using heading tags for text that does not function as a heading for other content.

---

## Success Criteria Audit

### SC 1.3.1 Info and Relationships (Headings)

#### 1. `Heading` (core/components/atoms/heading/Heading.tsx)
- **Status**: Fail
- **Problem**: The `size` prop directly maps to heading levels (`s` -> `h5`, `m` -> `h4`, `l` -> `h3`, `xl` -> `h2`, `xxl` -> `h1`).
- **Why it violates**: WCAG requires that heading levels properly convey the structural hierarchy of the content. By coupling the semantic level to the visual size, developers are forced to choose heading levels based on appearance rather than document structure, leading to skipped levels.
- **Fix**: Decouple the `size` prop from the semantic heading level. Introduce an `as` or `level` prop (e.g., `level={2}`) to allow developers to specify the semantic level independently of the visual size.
- **Code Example**:
  ```tsx
  export interface HeadingProps extends BaseProps, BaseHtmlProps<HTMLHeadingElement> {
    size?: HeadingSize;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'; // New prop
  }
  // ...
  const Component = as || sizeMap[size];
  return <GenericText componentType={Component}>{children}</GenericText>;
  ```

#### 2. `Subheading` (core/components/atoms/subheading/Subheading.tsx)
- **Status**: Fail
- **Problem**: Hardcodes `componentType={'h4'}` and `aria-level={4}`.
- **Why it violates**: A subheading's level depends entirely on the heading it follows (e.g., it should be an `h3` if it follows an `h2`). Hardcoding it to `h4` will cause skipped heading levels in most contexts.
- **Fix**: Remove the hardcoded `h4` and `aria-level={4}`. Add an `as` or `level` prop to allow the developer to pass the appropriate heading level.

#### 3. `OverlayHeader` (core/components/molecules/overlayHeader/OverlayHeader.tsx)
- **Status**: Fail
- **Problem**: Uses the `Heading` component without specifying a `size`, which defaults to `size="m"` and renders an `h4`.
- **Why it violates**: `OverlayHeader` is used in `Modal`, `Sidesheet`, and `FullscreenModal`. These are separate dialog contexts, and their primary title should typically be an `h1` or `h2`. Hardcoding it to `h4` misrepresents the dialog's hierarchy.
- **Fix**: Update `OverlayHeader` to allow passing a semantic heading level, or default it to `h2` (or `h1`) depending on the dialog context.

#### 4. `PageHeader` (core/components/organisms/pageHeader/utils.tsx)
- **Status**: Fail
- **Problem**: The `Title` utility uses the `Heading` component without specifying a `size`, defaulting to `size="m"` which renders an `h4`.
- **Why it violates**: A page header represents the main heading of the page and should almost always be an `h1`. Rendering it as an `h4` severely misrepresents the page hierarchy.
- **Fix**: Update the `Title` utility in `PageHeader` to render as an `h1` by default, or allow the developer to specify the level.

#### 5. `EmptyStateTitle` (core/components/molecules/emptyState/EmptyStateTitle.tsx)
- **Status**: Fail
- **Problem**: Renders a `Heading` (defaulting to `h4`) when `size === 'standard'`, and a `Text` component (rendering a `span`) otherwise.
- **Why it violates**: Inconsistent semantic structure based on visual size. If it functions as a heading, it should be marked as one regardless of size. Hardcoding it to `h4` also risks skipping levels depending on where the empty state is rendered.
- **Fix**: Allow the developer to specify the heading level via a prop, and ensure it consistently renders as a heading if it functions as one.

#### 6. `Message` (core/components/atoms/message/Message.tsx)
- **Status**: Fail
- **Problem**: Uses `Heading` with `size="s"`, which renders an `h5`.
- **Why it violates**: Messages can appear anywhere in the document flow. Hardcoding their title to `h5` will likely result in skipped heading levels (e.g., an `h5` following an `h2`).
- **Fix**: Allow the heading level to be configurable, or use a semantically neutral element (like `strong` inside a `div` or `span`) if the title doesn't truly function as a heading for subsequent content.

#### 7. `Toast` (core/components/atoms/toast/Toast.tsx)
- **Status**: Fail
- **Problem**: Uses `Heading` with `size="s"`, which renders an `h5`.
- **Why it violates**: Toasts are floating notifications that are not part of the page's structural hierarchy. They do not function as headings for other content. Marking them as headings clutters the document outline.
- **Fix**: Replace the `Heading` component with a `Text` component or a `span` with appropriate styling.

#### 8. `Calendar` (core/components/organisms/calendar/Calendar.tsx)
- **Status**: Fail
- **Problem**: Uses `Heading` with `size="s"` (rendering an `h5`) for the month/year title inside a navigation button.
- **Why it violates**: A calendar month name inside a navigation button does not function as a heading for other content in the document flow. Using a heading tag here is semantically incorrect, and `h5` is arbitrary.
- **Fix**: Replace the `Heading` component with a `Text` component or a `span` with appropriate styling.

#### 9. `SelectEmptyTemplate` (core/components/organisms/select/SelectEmptyTemplate.tsx)
- **Status**: Fail
- **Problem**: Uses `role="heading" aria-level={2}` for the empty state title.
- **Why it violates**: An empty state message inside a dropdown/select component is not a top-level section of the page. Hardcoding `aria-level={2}` will likely misrepresent the hierarchy and skip levels.
- **Fix**: Remove `role="heading"` and `aria-level={2}`, or make the level configurable if it truly needs to be a heading.

---

## Required Refactors
1. **Decouple Visuals from Semantics**: The `Heading` component must be refactored to accept an `as` or `level` prop so developers can choose the correct semantic tag (`h1`-`h6`) independently of the `size` prop.
2. **Remove Hardcoded Levels**: Components like `Subheading`, `OverlayHeader`, `PageHeader`, `EmptyStateTitle`, and `Message` must stop hardcoding heading levels (`h4`, `h5`) and instead allow the consumer to pass the appropriate level based on the page context.
3. **Remove Invalid Headings**: Components like `Toast` and `Calendar` must stop using heading tags for text that does not function as a heading for other content.