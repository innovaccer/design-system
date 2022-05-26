import * as React from 'react';
import Button from '../Button';
import Text from '../../text';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        a11yProps: "**aria-label:** name accordingly which describe the action of button",
      },
    },
  },
};

export const DefaultButton = () => {
  return (
    <Button
      onClick={() => {}}
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
      type={'button'}
      appearance={'basic'}
      size={'regular'}
      expanded={false}
      disabled={false}
      loading={false}
      icon={''}
      iconAlign={'left'}
      aria-label="Open"
    >
      {'Button'}
    </Button>
  );
};

export const AlertButton = () => (
  <Button appearance="alert" aria-label="Delete">
    Delete
  </Button>
);

export const BasicButton = () => (
  <Button appearance="basic" size="regular" aria-label="Cancel">
    Cancel
  </Button>
);

export const PrimaryButton = () => (
  <Button appearance="primary" size="regular" aria-label="Submit your response">
    Submit your response
  </Button>
);

export const TransparentButton = () => (
  <Button appearance="transparent" aria-label="Re-evaluate">
    Re-evaluate
  </Button>
);

export const ExpandedButton = () => (
  <Button appearance="primary" size="large" expanded={true} aria-label="Login">
    Login
  </Button>
);

export const IconLeftButton = () => (
  <Button iconOptions={{ name: 'get_app', align: 'left' }} aria-label="Download">
    Download
  </Button>
);

export const IconRightButton = () => (
  <Button iconOptions={{ name: 'arrow_forward', align: 'right' }} aria-label="Next in rank">
    Next in rank
  </Button>
);

export const IconButton = () => (
  <Button
    appearance="basic"
    iconOptions={{ name: 'keyboard_arrow_right', align: 'left', tooltip: 'Next in Rank' }}
    aria-label="Next in rank"
  />
);

export const TransparentIconButton = () => (
  <Button appearance="transparent" iconOptions={{ name: 'more_horiz' }} aria-label="Menu" />
);

export const IconButtonGroup = () => (
  <div className="d-inline-flex">
    <Button size="tiny" iconOptions={{ name: 'content_copy', tooltip: 'Copy' }} aria-label="Copy" className="mr-4" />
    <Button size="tiny" iconOptions={{ name: 'content_paste', tooltip: 'Paste' }} aria-label="Paste" className="mr-4" />
    <Button size="tiny" iconOptions={{ name: 'delete', tooltip: 'Delete' }} aria-label="Delete" />
  </div>
);

export const LabelButtonGroup = () => (
  <div className="d-flex">
    <Button size="tiny" className="mr-4" aria-label="Copy">
      Copy
    </Button>
    <Button size="tiny" className="mr-4" aria-label="Paste">
      Paste
    </Button>
    <Button size="tiny" aria-label="Delete">
      Delete
    </Button>
  </div>
);

export const LoaderInButton = () => <Button appearance="primary" loading={true} aria-label="loading" />;

export const SplitButton = () => {
  // const options = [
  //   {
  //     label: 'Download All',
  //     value: 'Download All',
  //   },
  //   {
  //     label: 'Download Selected',
  //     value: 'Download Selected',
  //   },
  // ];
  return (
    <div className="d-flex">
      <Button className="mr-2" aria-label="Request review">
        Request review
      </Button>
      <div className="mb-10" style={{ width: '150px' }}>
        {/* <Dropdown menu={true} icon="expand_more" options={options} /> */}
      </div>
    </div>
  );
};

export const Icon = () => {
  return (
    <div>
      <div className="mb-7">
        <Text weight="medium" size="large">
          Tiny
        </Text>
        <div className="d-flex align-items-center mt-4">
          <Button
            onClick={() => {}}
            onMouseEnter={() => {}}
            onMouseLeave={() => {}}
            className="mr-7"
            iconOptions={{ name: 'add', isLarge: false }}
            size="tiny"
            aria-label="Add document"
          />
          <Button
            onClick={() => {}}
            onMouseEnter={() => {}}
            onMouseLeave={() => {}}
            className=""
            iconOptions={{ name: 'add', isLarge: true }}
            size="tiny"
            aria-label="Add document"
          />
        </div>
      </div>
      <div className="mb-7">
        <Text weight="medium" size="large">
          Regular
        </Text>
        <div className="d-flex align-items-center mt-4">
          <Button
            onClick={() => {}}
            onMouseEnter={() => {}}
            onMouseLeave={() => {}}
            className="mr-7"
            iconOptions={{ name: 'print', isLarge: false }}
            size="regular"
            aria-label="Print"
          />
          <Button
            onClick={() => {}}
            onMouseEnter={() => {}}
            onMouseLeave={() => {}}
            className=""
            iconOptions={{ name: 'print', isLarge: true }}
            size="regular"
            aria-label="Print"
          />
        </div>
      </div>
      <div className="mb-7">
        <Text weight="medium" size="large">
          Large
        </Text>
        <div className="d-flex align-items-center mt-4">
          <Button
            onClick={() => {}}
            onMouseEnter={() => {}}
            onMouseLeave={() => {}}
            className="mr-7"
            iconOptions={{ name: 'more_horiz', isLarge: false }}
            size="large"
            aria-label="Menu"
          />
          <Button
            onClick={() => {}}
            onMouseEnter={() => {}}
            onMouseLeave={() => {}}
            className=""
            iconOptions={{ name: 'more_horiz', isLarge: true }}
            size="large"
            aria-label="Menu"
          />
        </div>
      </div>
    </div>
  );
};

export const Appearance = () => {
  const disabled = false;
  const expanded = false;
  const loading = false;

  const appearances = ['basic', 'primary', 'alert', 'transparent'];

  return (
    <div className="d-flex">
      {appearances.map((appear, ind) => {
        return (
          <div key={ind} className="mr-9">
            <Button
              onClick={() => {}}
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
              appearance={appear}
              size={'regular'}
              expanded={expanded}
              disabled={disabled}
              loading={loading}
              aria-label={`${appear}`}
            >
              {'Button'}
            </Button>
            <br />
            <Text weight="strong">{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
};

export const Expanded = () => {
  const disabled = false;
  const ButtonExpanded = true;
  const loading = false;

  const appearances = ['basic', 'primary', 'alert'];
  return (
    <div className="Row">
      {appearances.map((appear, ind) => {
        return (
          <div key={ind} className="mr-9 mb-4 w-50">
            <Button
              onClick={() => {}}
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
              appearance={appear}
              size={'regular'}
              expanded={ButtonExpanded}
              disabled={disabled}
              loading={loading}
              aria-label={`${appear}`}
            >
              {'Button'}
            </Button>
            <br />
            <Text weight="strong">{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
};

export const Size = () => {
  const disabled = false;
  const expanded = false;
  const loading = false;

  const sizes = ['tiny', 'regular', 'large'];
  return (
    <div className="d-flex w-25">
      {sizes.map((ButtonSize, ind) => {
        return (
          <div key={ind} className="mr-5">
            <div className="h-50">
              <Button
                onClick={() => {}}
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                appearance={'primary'}
                size={ButtonSize}
                expanded={expanded}
                disabled={disabled}
                loading={loading}
                aria-label={`${ButtonSize}`}
              >
                {'Button'}
              </Button>
            </div>
            <br />
            <Text weight="strong">{ButtonSize.charAt(0).toUpperCase() + ButtonSize.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
};

export const IconLeftButtonWithSize = () => {
  const disabled = false;
  const expanded = false;
  const loading = false;
  const iconAlign = 'left';

  const size = ['tiny', 'regular', 'large'];
  return (
    <div className="d-flex w-25">
      {size.map((IconSize, ind) => {
        return (
          <div key={ind} className="mr-5">
            <div className="h-50">
              <Button
                onClick={() => {}}
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                appearance={'basic'}
                size={IconSize}
                expanded={expanded}
                disabled={disabled}
                loading={loading}
                iconOptions={{ name: 'refresh', align: iconAlign }}
                aria-label="Refresh"
              >
                {'Button'}
              </Button>
            </div>
            <br />
            <Text weight="strong">{IconSize.charAt(0).toUpperCase() + IconSize.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
};

export const IconRightButtonWithSize = () => {
  const disabled = false;
  const expanded = false;
  const loading = false;
  const iconAlign = 'right';

  const size = ['tiny', 'regular', 'large'];
  return (
    <div className="d-flex w-25">
      {size.map((IconSize, ind) => {
        return (
          <div key={ind} className="mr-5">
            <div className="h-50">
              <Button
                onClick={() => {}}
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                appearance={'basic'}
                size={IconSize}
                expanded={expanded}
                disabled={disabled}
                loading={loading}
                iconOptions={{ name: 'refresh', align: iconAlign }}
                aria-label="Refresh"
              >
                {'Button'}
              </Button>
            </div>
            <br />
            <Text weight="strong">{IconSize.charAt(0).toUpperCase() + IconSize.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
};

export const AlertButtonState = () => {
  const disabled = false;
  const expanded = false;
  const loading = false;

  const style = {
    justifyContent: 'space-between',
  };

  return (
    <div className="d-flex w-25" style={style}>
      <div className="mr-9">
        <Button
          onClick={() => {}}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
          appearance={'alert'}
          size={'regular'}
          expanded={expanded}
          disabled={disabled}
          loading={loading}
          aria-label="Delete"
        >
          {'Delete'}
        </Button>
        <br />
        <Text weight="strong">Default</Text>
      </div>
      <div className="mr-9">
        <Button
          onClick={() => {}}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
          appearance={'alert'}
          size={'regular'}
          expanded={expanded}
          disabled={true}
          loading={loading}
          aria-label="Delete"
        >
          {'Delete'}
        </Button>
        <br />
        <Text weight="strong">Disabled</Text>
      </div>
      <div className="mr-9">
        <Button
          onClick={() => {}}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
          appearance={'alert'}
          size={'regular'}
          expanded={expanded}
          disabled={disabled}
          loading={true}
          aria-label="Loading"
        >
          {''}
        </Button>
        <br />
        <Text weight="strong">Loading</Text>
      </div>
    </div>
  );
};

export const BasicButtonState = () => {
  const disabled = false;
  const expanded = false;
  const loading = false;
  const style = {
    justifyContent: 'space-between',
  };

  return (
    <div className="d-flex w-25" style={style}>
      <div className="mr-9">
        <Button
          onClick={() => {}}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
          appearance={'basic'}
          size={'regular'}
          expanded={expanded}
          disabled={disabled}
          loading={loading}
          aria-label="Open"
        >
          {'Open'}
        </Button>
        <br />
        <Text weight="strong">Default</Text>
      </div>
      <div className="mr-9">
        <Button
          onClick={() => {}}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
          appearance={'basic'}
          size={'regular'}
          expanded={expanded}
          disabled={true}
          loading={loading}
          aria-label="Open"
        >
          {'Open'}
        </Button>
        <br />
        <Text weight="strong">Disabled</Text>
      </div>
      <div className="mr-9">
        <Button
          onClick={() => {}}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
          appearance={'basic'}
          size={'regular'}
          expanded={expanded}
          disabled={disabled}
          loading={true}
          aria-label="Loading"
        >
          {''}
        </Button>
        <br />
        <Text weight="strong">Loading</Text>
      </div>
      <div className="mr-9">
        <Button
          onClick={() => {}}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
          appearance={'basic'}
          size={'regular'}
          selected={true}
          aria-label="Selected"
        >
          {'Open'}
        </Button>
        <br />
        <Text weight="strong">Selected</Text>
      </div>
      <div className="mr-9">
        <Button
          onClick={() => {}}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
          appearance={'basic'}
          size={'regular'}
          selected={true}
          iconOptions={{ name: 'events' }}
          aria-label="Selected"
        />
        <br />
        <Text weight="strong">Selected Icon</Text>
      </div>
    </div>
  );
};

export const PrimaryButtonWithState = () => {
  const disabled = false;
  const expanded = false;
  const loading = false;
  const style = {
    justifyContent: 'space-between',
  };
  return (
    <div className="d-flex w-25" style={style}>
      <div className="mr-9">
        <Button
          onClick={() => {}}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
          appearance={'primary'}
          size={'regular'}
          expanded={expanded}
          disabled={disabled}
          loading={loading}
          aria-label="Login"
        >
          {'Login'}
        </Button>
        <br />
        <Text weight="strong">Default</Text>
      </div>
      <div className="mr-9">
        <Button
          onClick={() => {}}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
          appearance={'primary'}
          size={'regular'}
          expanded={expanded}
          disabled={true}
          loading={loading}
          aria-label="Login"
        >
          {'Login'}
        </Button>
        <br />
        <Text weight="strong">Disabled</Text>
      </div>
      <div className="mr-9">
        <Button
          onClick={() => {}}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
          appearance={'primary'}
          size={'regular'}
          expanded={expanded}
          disabled={disabled}
          loading={true}
          aria-label="Loading"
        >
          {''}
        </Button>
        <br />
        <Text weight="strong">Loading</Text>
      </div>
    </div>
  );
};

export const TransparentButtonWithState = () => {
  const disabled = false;
  const expanded = false;
  const loading = false;
  const style = {
    justifyContent: 'space-between',
  };
  return (
    <div className="d-flex w-25" style={style}>
      <div className="mr-9">
        <Button
          onClick={() => {}}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
          appearance={'transparent'}
          size={'regular'}
          expanded={expanded}
          disabled={disabled}
          loading={loading}
          aria-label="Open"
        >
          {'Open'}
        </Button>
        <br />
        <Text weight="strong">Default</Text>
      </div>
      <div className="mr-9">
        <Button
          onClick={() => {}}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
          appearance={'transparent'}
          size={'regular'}
          expanded={expanded}
          disabled={true}
          loading={loading}
          aria-label="Open"
        >
          {'Open'}
        </Button>
        <br />
        <Text weight="strong">Disabled</Text>
      </div>
      <div className="mr-9">
        <Button
          onClick={() => {}}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
          appearance={'transparent'}
          size={'regular'}
          expanded={expanded}
          disabled={disabled}
          loading={true}
          aria-label="loading"
        >
          {''}
        </Button>
        <br />
        <Text weight="strong">Loading</Text>
      </div>
      <div className="mr-9">
        <Button
          onClick={() => {}}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
          appearance={'transparent'}
          size={'regular'}
          selected={true}
          aria-label="Open"
        >
          {'Open'}
        </Button>
        <br />
        <Text weight="strong">Selected</Text>
      </div>
      <div className="mr-9">
        <Button
          onClick={() => {}}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
          appearance={'transparent'}
          size={'regular'}
          selected={true}
          iconOptions={{ name: 'events' }}
          aria-label="Events"
        />
        <br />
        <Text weight="strong">Selected Icon</Text>
      </div>
    </div>
  );
};
