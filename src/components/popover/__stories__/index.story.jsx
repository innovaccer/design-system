import * as React from 'react';
import { Text, Button, Popover, Avatar } from '@/index';

export const Basic = () => {
  return (
    <div id="basic-parent" className="mb-11">
      <Popover placement="bottom-start" trigger={<Button appearance="basic">Open Popup</Button>}>
        <div style={{ width: 100 }} className="mx-6 my-6">
          <Text>Popup</Text>
          <Button appearance="primary" className="mt-4">
            Click
          </Button>
        </div>
      </Popover>
    </div>
  );
};

export const Offset = () => {
  return (
    <div id="basic-parent" className="mb-11 w-50 d-flex flex-row justify-content-between">
      <Popover placement="bottom-start" trigger={<Button appearance="basic">Small</Button>} offset="small">
        <div style={{ width: 100 }} className="mx-6 my-6">
          <Text>Popup</Text>
          <Button appearance="primary" className="mt-4">
            Click
          </Button>
        </div>
      </Popover>
      <Popover placement="bottom-start" trigger={<Button appearance="basic">Medium</Button>} offset="medium">
        <div style={{ width: 100 }} className="mx-6 my-6">
          <Text>Popup</Text>
          <Button appearance="primary" className="mt-4">
            Click
          </Button>
        </div>
      </Popover>
      <Popover placement="bottom-start" trigger={<Button appearance="basic">Large</Button>} offset="large">
        <div style={{ width: 100 }} className="mx-6 my-6">
          <Text>Popup</Text>
          <Button appearance="primary" className="mt-4">
            Click
          </Button>
        </div>
      </Popover>
    </div>
  );
};

export const Dark = () => {
  return (
    <div className="mb-12">
      <Popover placement="bottom" trigger={<Button appearance="basic">Open Popup</Button>} dark={true}>
        <div style={{ width: 'var(--spacing-7)', height: 'var(--spacing-7)' }} />
      </Popover>
    </div>
  );
};

export const onToggle = () => {
  return (
    <div className="mb-12">
      <Popover
        placement="bottom"
        trigger={<Button appearance="basic">Open Popup</Button>}
        onToggle={(context) => console.log('Popover context', context)}
      >
        <div style={{ width: 100 }} className="mx-6 my-6">
          <Text>Popup</Text>
          <Button appearance="primary" className="mt-4">
            Click
          </Button>
        </div>
      </Popover>
    </div>
  );
};

export const Hoverable = () => {
  return (
    <div className="mb-12">
      <Popover placement="bottom" trigger={<Button appearance="basic">Open Popup</Button>} hoverable={true}>
        <div style={{ width: 100 }} className="mx-6 my-6">
          <Text>Popup</Text>
          <Button appearance="primary" className="mt-4">
            Click
          </Button>
        </div>
      </Popover>
    </div>
  );
};

export const Light = () => {
  return (
    <div className="mb-12">
      <Popover placement="bottom" trigger={<Button appearance="basic">Open Popup</Button>}>
        <div style={{ width: 'var(--spacing-7)', height: 'var(--spacing-7)' }} />
      </Popover>
    </div>
  );
};

export const Controlled = () => {
  const [open, setOpen] = React.useState(true);

  return (
    <div className="mb-12">
      <Button appearance="basic" onClick={() => setOpen(!open)}>
        Open Popup
      </Button>
      <Popover placement="bottom">
        <div style={{ width: 100 }} className="mx-6 my-6">
          <Text>Popup</Text>
          <Button appearance="primary" className="mt-4">
            Click
          </Button>
        </div>
      </Popover>
    </div>
  );
};

export const BoundaryElement = () => {
  const ref = React.useRef(null);

  return (
    <div ref={ref} style={{ height: 150, padding: 20, border: '1px dashed', overflow: 'auto' }}>
      <Popover
        placement="bottom-start"
        trigger={<Button appearance="basic">Open Popup</Button>}
        boundaryElement={ref}
        dismissOptions={{ ancestorScroll: true }}
      >
        <div style={{ width: 100 }} className="mx-6 my-6">
          <Text>Popup</Text>
          <Button appearance="primary" className="mt-4">
            Click
          </Button>
        </div>
      </Popover>
      <div style={{ height: 300 }} />
    </div>
  );
};

export const Position = () => {
  const positions = [
    'top',
    'top-start',
    'top-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'left',
    'right',
    'left-start',
    'right-start',
    'left-end',
    'right-end',
  ];

  const getTrigger = (pos) => <Button appearance="basic">{pos}</Button>;

  return (
    <div className="d-flex flex-wrap">
      {positions.map((pos, ind) => {
        return (
          <div key={ind} className={ind < 3 ? 'mt-11 mr-13' : 'mt-5 mb-11 mr-13'}>
            <Popover trigger={getTrigger(pos)} placement={pos}>
              <div style={{ width: 100 }} className="mx-6 my-6">
                <Text>Popup</Text>
                <Button appearance="primary" className="mt-4">
                  Click
                </Button>
              </div>
            </Popover>
          </div>
        );
      })}
    </div>
  );
};

export const DismissOptions = () => {
  const dissmissOptions = {
    enabled: true,
    escapeKey: false,
    referencePointerDown: false,
    outsidePointerDown: false,
    ancestorScroll: false,
    bubbles: false,
  };

  const trigger = (text) => <Button>{text}</Button>;

  return (
    <div className="d-flex flex-wrap">
      {Object.keys(dissmissOptions).map((opt, ind) => {
        return (
          <div key={ind} className={ind < 3 ? 'mt-11 mr-13' : 'mt-5 mb-11 mr-13'}>
            <Popover
              trigger={trigger(opt)}
              placement="bottom-start"
              dismissOptions={{ ...dissmissOptions, [opt]: true }}
            >
              <div style={{ width: 100 }} className="mx-6 my-6">
                <Text>Popup</Text>
                <Button appearance="primary" className="mt-4">
                  Click
                </Button>
              </div>
            </Popover>
          </div>
        );
      })}
    </div>
  );
};

export const Theme = () => {
  const trigger = <Button appearance="basic">Light Theme</Button>;
  const triggerDark = <Button appearance="basic">Dark Theme</Button>;

  return (
    <div className="d-flex">
      <div className="mb-11" style={{ marginRight: '40%' }}>
        <Popover placement="bottom-start" trigger={triggerDark} dark={true}>
          <div style={{ width: 100 }} className="mx-6 my-6">
            <Text appearance={'white'}>Popup</Text>
            <Button appearance="primary" className="mt-4">
              Click
            </Button>
          </div>
        </Popover>
      </div>
      <div>
        <Popover placement="bottom-start" trigger={trigger} dark={false}>
          <div style={{ width: 100 }} className="mx-6 my-6">
            <Text>Popup</Text>
            <Button appearance="primary" className="mt-4">
              Click
            </Button>
          </div>
        </Popover>
      </div>
    </div>
  );
};

export const Actions = () => {
  return (
    <div className="mb-12">
      <Popover placement="bottom-start" trigger={<Button appearance="basic">Unpublished Changes</Button>}>
        <div style={{ width: 'var(--spacing-9)' }} className="mx-6 my-6">
          <Text>You have some edits saved in draft state.You can resume editing or discard those changes.</Text>
          <div className="d-flex">
            <Button className="mt-4" appearance="primary">
              Edit Registry
            </Button>
            <Button className="mt-4 ml-5" appearance="basic">
              Discard Changes
            </Button>
          </div>
        </div>
      </Popover>
    </div>
  );
};

export const Menu = () => {
  const trigger = (
    <div className="d-flex">
      <Avatar text="JD" />
      <Text className="ml-4 mt-4" size="large">
        Hi James
      </Text>
      <Button appearance="transparent" iconOptions={{ name: 'arrow_drop_down' }} />
    </div>
  );

  return (
    <div className="mb-12">
      <Popover placement="bottom-start" trigger={trigger}>
        <div style={{ width: 'var(--spacing-9)' }} className=" mx-6 my-6">
          <div className="d-flex">
            <Avatar text="JD" />
            <div className="Option-label">
              <Text className="ml-4">James Donovan</Text>
              <Text className="ml-4" appearance="subtle">
                jdonovan @two.health
              </Text>
            </div>
          </div>
          <div className="Dropdown-wrapper">
            <div className="Option OptionWrapper">Account Overview</div>
            <div className="Option OptionWrapper">Sign Out</div>
          </div>
        </div>
      </Popover>
    </div>
  );
};

export default {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    docs: {
      docPage: {
        description: 'Popover',
      },
    },
  },
};
