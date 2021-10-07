# Contribution Guidelines

We are happy that you wish to contribute to this project. For that reason, we
present you with this guide.

## How Do I Contribute?

There are different ways to contribute, each with a different level
of involvement and technical knowledge required, such as:

* [Reporting Bugs](#reporting-bugs)
* [Request Features](#request-features)
* [Development](#development)

**Please read this document carefully. It will help maintainers and readers
in solving your issue(s), evaluating your feature request, etc.**


## Reporting Bugs

We welcome clear, detailed bug reports.

**Bugs are considered features that are not working as described in
documentation.**

If you've found a bug, please file a report in our [issue tracker](https://github.com/innovaccer/design-system/issues).


### Issue Search

Search to see if it has already been reported via the *issue search*.
If so, up-vote it (using GitHub reactions) or add additional helpful details to
the existing issue to show that it's affecting multiple people.

### Check If It's Been Fixed

Check if the issue has been fixed — try to reproduce it using the latest
`master` or development branch in the repository.

## Request Features

New feature requests are welcomed. Analyze whether the idea fits within the scope of the project. Then, detail your request, ensuring context and use case is provided.

Please provide:

* A detailed description of the advantages of your request
* A potential implementation or design
* Whatever else you have in your mind 🤓

## Development

### Setting up the environment
1. Fork the repository on Github.

2. Run the environment locally:
	```bash
   #clone repository
   git clone https://github.com/[GITHUB_USERNAME]/design-system.git
   
   #change directory to the cloned repository
   cd design-system

   #create new branch
   git checkout -b [BRANCH_NAME]

   #install dependencies
   npm install

   #start development server
   npm run dev
   ```

The server runs on port 5000 and url is opened automaticaly in browser as the project uses storybook for component developement and documentation.

### Coding guidelines for a component

#### Folder structure

```bash
#change directory according to component type
#ELEMENT_TYPE = atoms | molecules | organisms
cd core/[ELEMENT_TYPE]

#make component directory
mkdir [COMPONENT_NAME(in camel case)]

#change directory to component
cd [COMPONENT_NAME]

#make directories for stories and tests
mkdir __tests__
mkdir __stories__
mkdir __stories__/variants
```

#### Typescript Types

- Component *types* names must be uppercase, e.g. Appearance, Size, etc.
- Component Props interface should be named as `[COMPONENT_NAME]Props`, e.g. AvatarProps, HeadingProps.
- Every component props interface should extend **BaseProps** (e.g className, data-test). Properties inside BaseProps  interface are defined in `@/utils/types`.

#### Exports

- Export Component as named export, e.g. export Avatar from `./core/index.tsx`.
- Export Component Props from `./core/index.type.tsx`

#### Testing

- Jest and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) is used for unit testing and coverage.
- Snapshots and unit tests are written in `[COMPONENT_NAME].test.tsx` file inside `__tests__` folder, e.g. Avatar.test.tsx.

#### DocPage

- [jsdoc](https://jsdoc.app/) is used for prop description
- Custom props can be passed to docPage from corresponding story as follows:
- Metadata is as follows:
  - `title `: Determines where story will show up in the navigation UI story hierarchy. Read more [here](https://storybook.js.org/docs/riot/writing-stories/naming-components-and-hierarchy).
    - **title**: The title of the component you export in the default export controls the name shown in the sidebar. `Components` in below example is the title.
    - **Grouping**: It is also possible to group related components in an expandable interface in order to help with Storybook organization. `Avatar` in this example is the group.
    - **Single Story**: Last part of title will be hoisted up to replace their parent component in the sidebar. Example: `All`
  - `component`: Used by addons for automatic prop table generation and display of other component metadata
  - `parameters`: Used to control the behavior of Storybook features and addons.
  - `subcomponents`: Used to include subcomponents in prop table.
```tsx
// Storybook CSF Format
export default {
  title: 'Components/Avatar/All',
  component: Avatar,
  subcomponent: Avatar,
  parameters: {
    docs: {
      docPage: {
        noHtml: true, // Includes Html in docPage
        noStory:true, // Includes Story in docPage
        noProps: true, // Includes props table in docPage,
        noSandbox: true, // Includes code sandbox button in docPage,
        title: 'Avatar', // Custom title
        description: 'Dummy description', // Custom description
        customCode: '() => <Avatar>JD</Avatar>' // Custom code for live code editor,
      }
    }
  }
};
```
### Example Component

  Let's assume we want to add *Avatar* component in *Atoms* category.

##### Create folder structure

 ```bash
cd core/atoms
mkdir avatar
cd avatar
mkdir __tests__
mkdir __stories__
mkdir __stories__/variants
```
 
##### [./core/components/atoms/avatar/Avatar.tsx](https://github.com/innovaccer/design-system/blob/master/core/components/atoms/avatar/Avatar.tsx)

Now we will add *Avatar* component logic.

###### Imports

- Import Design System components from `@index`.
- Import Design System component props from `@/index.type`.
- Import BaseProps from `@/utils/type`;

```tsx
import * as React from 'react';
import classNames from 'classnames';
import { Text, Tooltip, Icon } from '@/index';
import { TooltipProps } from '@/index.type';
import { BaseProps, extractBaseProps } from '@/utils/types';
```

###### Component types

```tsx
export type Appearance = 'secondary' | 'primary' | 'alert' | 'warning' | 'success' | 'accent1' | 'accent2' | 'accent3' | 'accent4';

export type Size = 'regular' | 'tiny';
```
###### Component interface
- Component props interface should extend BaseProps.
- Additional information of a prop is written in `/** */` block.
```tsx
export interface AvatarProps extends BaseProps {
  /**
   * Color of the `Avatar`
   */
  appearance?: Appearance;
  /**
   * **Only first 2 characters are rendered (SOON TO BE DEPRECATED)**
   */
  children?: string;
  /**
   * First Name
   */
  firstName?: string;
  /**
   * Last Name
   */
  lastName?: string;
  /**
   * Determines if tooltip is visible
   */
  withTooltip: boolean;
  /**
   * Position to place the tooltip
   */
  tooltipPosition: TooltipProps['position'];
  /**
   * Determines size of `Avatar`
   */
  size: Size;
}
```
###### Component Logic
 - Props are destructured *(Note that Avatar is a Function Component)*.

```jsx
export const Avatar = (props: AvatarProps) => {
  const {
    withTooltip,
    tooltipPosition,
    size,
    children,
    firstName,
    lastName,
    className,
    appearance,
  } = props;
```
- BaseProps are extracted via `extractBaseProps` function;
```jsx
  const baseProps = extractBaseProps(props);

  const initials = children
    ? children.trim().slice(0, initialsLength)
    : `${firstName ? firstName.trim()[0] : ''}${lastName ? lastName.trim()[0] : ''}`;

  const tooltip = children || `${firstName || ''} ${lastName || ''}` || '';
  const DefaultAppearance = 'secondary';

  const colors = ['accent4', 'primary', 'accent3', 'alert','accent2', 'warning', 'accent1', 'success'];
  
  const AvatarAppearance = appearance 
  || colors[(initials.charCodeAt(0) + (initials.charCodeAt(1) || 0)) % 8] 
  || DefaultAppearance;
```
- [ClassNames](https://www.npmjs.com/package/classnames) is a utility for conditionally joining CSS classNames together.
- CSS is added according to [BEM Convention](http://getbem.com/naming/).
```jsx
  const classes = classNames({
    Avatar: true,
    [`Avatar--${size}`]: size,
    [`Avatar--${AvatarAppearance}`]: AvatarAppearance,
    ['Avatar--disabled']: !initials || !withTooltip,
  }, className);

  const ContentClass = classNames({
    [`Avatar-content--${size}`]: size,
    [`Avatar-content--${AvatarAppearance}`]: AvatarAppearance
  });

  const IconClass = classNames({
    [`Avatar-content--${AvatarAppearance}`]: AvatarAppearance
  });
```
- Add rendering logic and `data-test` attribute.
- Convention for adding data-test id is `DesignSystem-[COMPONENT_NAME]` and it is used for testing.
```jsx
  const renderAvatar = () => {
    return (
      <span data-test="DesignSystem-Avatar" {...baseProps} className={classes} >
        {initials && (
          <Text
            weight="medium"
            appearance={'white'}
            className={ContentClass}
          >
            {initials}
          </Text>
        )}
        {!initials && (
          <Icon
            data-test="DesignSystem-AvatarIcon"
            name="person"
            size={size === 'regular' ? 16 : 12}
            appearance={'white'}
            className={IconClass}
          />
        )}
      </span>
    );
  };

  const renderTooltip = () => {
    if (withTooltip && initials) {
      return (
        <Tooltip tooltip={tooltip} position={tooltipPosition} triggerClass={'flex-grow-0'}>
          {renderAvatar()}
        </Tooltip>
      );
    }

    return renderAvatar();
  };

  return renderTooltip();
};
```
- Export Avatar component
```jsx
Avatar.displayName = 'Avatar';

export default Avatar;
```

##### [./core/components/atoms/avatar/index.tsx](https://github.com/innovaccer/design-system/blob/master/core/components/atoms/avatar/index.tsx)

```tsx
export { default } from './Avatar';
export * from './Avatar';
```
#### Component Stories
A [story](https://storybook.js.org/docs/react/get-started/whats-a-story) captures the rendered state of a UI component. We write multiple stories per component that describe all the interesting states a component can support.

 ##### Default Story
 ###### [/core/components/atoms/avatar/\_\_stories\_\_/index.story.tsx](https://github.com/innovaccer/design-system/blob/master/core/components/atoms/avatar/__stories__/index.story.tsx).
 - Import component and story knobs.
```tsx
import * as React from 'react';
import { select, text } from '@storybook/addon-knobs';
import { Avatar } from '@/index';
```
- Every named export in the file represents the name of the story, in this case `All`.
- Storybook knobs (e.g. select, text, boolean) allows to edit props dynamically using the Storybook UI.
```tsx
export const all = () => {
  const appearance = select(
    'appearance',
    ['primary', 'alert', 'warning', 'success', 'accent1', 'accent2', 'accent3', 'accent4', 'secondary'],
    undefined
  );
  
  const size = select('size', ['regular', 'tiny'], undefined);
  const withTooltip = boolean('withTooltip', true);

  const children = text('children', 'JD');

  return (
    <Avatar
      appearance={appearance}
      size={size}
      withTooltip={withTooltip}
    >
      {children}
    </Avatar>
  );
};
```
- The default export defines metadata about component.
- Title `Avatar/All` will show up in the navigation UI story hierarchy.
```jsx
export default {
  title: 'Components/Avatar/All'',
  component: Avatar
};
```
##### Variant Story
   
   We write stories corresponding to each prop in the variants folder. For example: `size` and `appearance` are props of Avatar component. Let us look at an example of `size` variant story.
 ###### [./core/components/atoms/avatar/\_\_stories\_\_/variants/size.story.tsx](https://github.com/innovaccer/design-system/blob/master/core/components/atoms/avatar/__stories__/variants/Size.story.tsx)
 - Import the required components.
```tsx
import * as React from 'react';
import { Avatar, Text} from '@/index';
```
- Name of the story in this case will be `Size`.
- JSX corresponding to this story will look like this:
```tsx
export const size = () => (
  <div className="d-flex">
    <div className="mr-9 d-flex flex-column">
      <Text weight="strong">Regular</Text> <br />
      <Avatar firstName="John" lastName="Doe" />
    </div>
    <div className="d-flex flex-column">
      <Text weight="strong">Tiny</Text> <br />
      <Avatar firstName="John" lastName="Doe" size="tiny"/>
    </div>
  </div>
);
```
- The default export defines metadata about component.
```jsx
export default {
  title: 'Components/Avatar/Variants/Appearance',
  component: Avatar,
};
```

#### Component Testing
##### [./core/components/atoms/avatar/\_\_tests\_\_/Avatar.test.tsx](https://github.com/innovaccer/design-system/blob/master/core/components/atoms/avatar/__tests__/Avatar.test.tsx)
Now we will add snapshot and unit testing.
###### Imports
```tsx
import * as React from 'react';
import { render } from '@testing-library/react';
import { Avatar } from '@/index';
import { AvatarProps as Props } from '@/index.type';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
```
##### Snapshot Testing
- [Snapshot tests](https://jestjs.io/docs/en/snapshot-testing) are a very useful tool whenever you want to make sure your UI does not change unexpectedly.
- Create a mapper object which includes required/iterable props.
```tsx
const sizes: AvatarProps['size'][] = ['regular', 'tiny'];

describe('Avatar component', () => {
  const mapper = {
    size: valueHelper(sizes, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { asFragment } = render(
        <Avatar
          {...attr}
        >
          JD
        </Avatar>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
```
### DocPage Story
   When our component has state or callbacks, we need to write custom code to render the story on docs page. Let us consider an example of `Controlled Checkbox` story.
 ###### [./core/components/atoms/checkbox/\_\_stories\_\_/variants/controlledCheckbox.story.tsx](https://github.com/innovaccer/design-system/blob/master/core/components/atoms/checkbox/__stories__/variants/Uncontrolled.story.tsx)
 - Import the required components.
```tsx
import * as React from 'react';
import { Checkbox } from '@/index';
```
- Name of the story in this case will be `Controlled Checkbox`.
- We will create a state `checked` which will be false initially (showing that checkbox is not selected) and will update it when checkbox is clicked.
```tsx
export const controlledCheckbox = () => {
  const [checked, setChecked] = React.useState(false);

  const handleParentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
      <Checkbox
        label="Innovaccer"
        value="Innovaccer"
        checked={checked}
        onChange={handleParentChange}
      />
  );
};
```
- At this point, we will only see JSX in our live code editor. To fix this, we will write cutsom code for docs page.
```
const customCode = `() => {
  const [checked, setChecked] = React.useState(false);

  const handleParentChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
      <Checkbox
        label="Innovaccer"
        value="Innovaccer"
        checked={checked}
        onChange={handleParentChange}
      />
  );
}`;
```
- Now we will export metadata of our story. 
```jsx
export default {
  title: 'Components/Checkbox/Variants/Controlled Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      docPage: {
        customCode
      }
    }
  }
};
```
### Creating Patterns
Patterns are best practice solutions for how a user achieves a goal. They show reusable combinations of components and templates that address common user objectives with sequences and flows.
Note: Patterns are only shown in `docs tab`.

Let us create a pattern for SideNav.
 - Name of the pattern will be `Side Nav`.
 - As patterns are shown only in docs tab, canvas tab will not render any element..
```tsx
import * as React from 'react';
export const sideNav = () => <></>;
```
-  We will write custom code for docs tab.
```
const customCode = `() => {
  const menus = [
    {
      name: 'patient_360',
      label: 'Patient 360',
      icon: 'assignment_ind',
      link: '/patient360',
    },
    {
      name: 'care_management',
      label: 'Care Management and Resources',
      icon: 'forum',
      subMenu: [
        {
          name: 'care_management.timeline',
          label: 'Timeline',
          icon: 'events'
        },
        {
          name: 'care_management.care_plans',
          label: 'Care Plans',
          icon: 'events'
        }
      ]
    },
    {
      name: 'episodes',
      label: 'Episodes',
      disabled: true,
      icon: 'airline_seat_flat_angled'
    },
    {
      name: 'risk',
      label: 'Risk',
      icon: 'favorite',
      subMenu: [
        {
          name: 'risk.timeline',
          label: 'Timeline',
          icon: 'events'
        },
        {
          name: 'risk.care_plans',
          label: 'Care Plans',
          icon: 'events'
        }
      ]
    },
    {
      name: 'claims',
      label: 'Claims',
      icon: 'receipt'
    },
  ];

  const [expanded, setExpanded] = React.useState(false);
  const [active, setActive] = React.useState({
    name: 'care_management.timeline'
  });

  const onClickHandler = (menu) => {
    console.log('menu-clicked: ', menu);
    setActive(menu);
  };

  return (
    <div style={{ height: 'calc(80vh)', background: 'var(--secondary-lightest)' }}>
      <Collapsible expanded={expanded} onToggle={setExpanded}>
        <VerticalNav
          menus={menus}
          expanded={expanded}
          active={active}
          onClick={onClickHandler}
          hoverable={false}
        />
      </Collapsible>
    </div>
  );
}`;
```
- We have created a mock data for side nav menus.
- We then need `expanded` and `active` state to manage VerticalNav component props.
- We will then return JSX from our sideNav component.
- Now we will export metadata of our pattern. As we do not need props table for patterns, so we will add `noProps: true` in our metadata.
```
export default {
  title: 'Patterns/VerticalNavigation/Side Nav',
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Side Nav',
        noProps: true
      }
    }
  }
};

```
### Submitting a Pull Request

The following are the steps you should follow when creating a pull request.
Subsequent pull requests only need to follow step 3 and beyond.

1. Fork the repository on GitHub
2. Clone the forked repository to your machine
3. Create a new branch as per the branch naming conventions provided below.
4. Make your changes and commit them to your local repository
5. Rebase and push your commits to your GitHub remote fork/repository
6. Issue a Pull Request to the official repository
7. Your Pull Request is reviewed by a committer and merged into the repository

**NOTE**: While there are other ways to accomplish the steps using other tools, the examples here will assume most actions will be performed via `git` on command line.

For more information on maintaining a fork, please see the GitHub Help article titled [Fork a Repo](https://help.github.com/articles/fork-a-repo/), and
information on [rebasing](https://git-scm.com/book/en/v2/Git-Branching-Rebasing).

### Make Changes and Commit

#### Before Commit

Before committing, **you must ensure there are no linting, formatting errors and all tests pass.**

To ensure the above conditions, run:


For checking prettier issues:

```bash
npm run prettier:check
```

For formating prettier issues:

```bash
npm run prettier
```
For lint:

```bash
npm run lint
```

For tests:

  ```bash
npm run test
  ```

Then, and only then, you can create your pull request.

#### Branch Naming Conventions

The following are the steps you should follow when creating a new branch.

- Start the branch name with prefixes like fix-, feat-, test-  as mentioned in [conventional commit messages](https://conventionalcommits.org/)
- Add a short description of the task. This makes the branch name recognizable and distinct.
- Use hyphens as separators

For example:

* `feat-add-billing-module`
* `fix-modal-height`

#### Commit Guidelines

We follow the [conventional commit messages](https://conventionalcommits.org/)
convention in order to automate CHANGELOG generation and to automate
semantic versioning.

For example:

* `feat: A new feature`
* `fix: A bug fix`

A commit of the type **feat** introduces a new feature to the codebase
(this correlates with MINOR in semantic versioning).

e.g.:

```
feat: xxxxxxxxxx
```

A commit of the type **fix** patches a bug in your codebase (this correlates with PATCH in semantic versioning).

e.g.:

```
fix: xxxxxxxxxx
```

Commits types such as as `docs:`,`style:`,`refactor:`,`perf:`,`test:`
and `chore:` are valid but have no effect on versioning. **It would be great if you use them.**


**PRs that do not follow the commit message guidelines will not be merged.**

## Update Tests

**Any change in source code must include test updates**.


## Update Stories

**For any change in source code of components that changes the API or functioning of the component corresponding story should be updated or a new story should be included**.


## Add yourself to the contributor list

We want to make sure everyone is recognized for their contributions !
To add yourself to the `all-contributors` table in the README, you'll need to
run the following commands from the root of the repo:

```sh
# Add new contributor <username>, who made a contribution of type <contribution>
./node_modules/.bin/all-contributors add <username> <contribution>
# Example:
./node_modules/.bin/all-contributors add satyamyadav code,doc
```

Then, you'll need to generate the updated `all-contributors` table by running

```sh
all-contributors generate 
OR
./node_modules/.bin/all-contributors generate

```

