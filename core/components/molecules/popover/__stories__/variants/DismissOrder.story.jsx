import * as React from 'react';
import { Text, Button, Popover, Tooltip, Sidesheet } from '@/index';
import Modal from '@/components/molecules/modal';
import '../style.css';

/**
 * **Dismiss order (Overlay Manager)**
 * When several overlays are open, the most recently opened closes first on Escape.
 */
export const DismissOrderOverlayManager = () => {
  const [sidesheetOpen, setSidesheetOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);

  const onSidesheetClose = () => setSidesheetOpen(false);
  const onModalClose = () => setModalOpen(false);

  const headerOptions = {
    heading: 'Popover Dismiss Order',
    subHeading: 'Test overlay stacking and Escape/backdrop behavior.',
  };

  const dismissOrderContent = (
    <>
      <span className="mr-4">
        <Popover
          position="bottom"
          on="click"
          trigger={<Button appearance="basic">1. Click here</Button>}
          closeOnBackdropClick
        >
          <div className="p-5 pb-6 pr-10">
            <Text weight="strong">3. Press escape</Text>
            <br />
            <Tooltip
              position="right"
              tooltip="Hover me for tooltip text that appears in the tooltip when the line is truncated."
            >
              <Text className="mt-4 d-block ellipsis--noWrap" style={{ maxWidth: 180 }}>
                Hover me for tooltip text that appears in the tooltip when the line is truncated.
              </Text>
            </Tooltip>
            <Popover
              position="right"
              on="click"
              trigger={
                <Button appearance="basic" className="mt-4">
                  Open inner popover
                </Button>
              }
              closeOnBackdropClick
            >
              <div className="p-5 pb-6 pr-10">
                <Text weight="strong">Inner (higher z)</Text>
                <Text className="mt-4 d-block">Escape closes this first, then the parent.</Text>
              </div>
            </Popover>
          </div>
        </Popover>
      </span>

      <Popover position="bottom" on="hover" trigger={<Button appearance="basic">2. Hover here</Button>} hoverable>
        <div className="p-5 pb-6 pr-10">
          <Text weight="strong">2. Hover here</Text>
          <Text className="mt-4 d-block">Opened by hover. Closes on Escape or mouse leave.</Text>
        </div>
      </Popover>
    </>
  );

  const contentWrapper = 'p-6 d-flex align-items-center flex-nowrap';

  return (
    <div className={contentWrapper}>
      <span className="d-flex align-items-center flex-nowrap flex-shrink-0">{dismissOrderContent}</span>
      <Button appearance="primary" className="ml-4 flex-shrink-0" onClick={() => setSidesheetOpen(true)}>
        Open Sidesheet
      </Button>

      <Sidesheet
        open={sidesheetOpen}
        onClose={onSidesheetClose}
        headerOptions={headerOptions}
        dimension="regular"
        closeOnEscape={true}
        backdropClose={true}
      >
        <div className={contentWrapper}>
          <span className="d-flex align-items-center flex-nowrap flex-shrink-0">{dismissOrderContent}</span>
          <Button appearance="primary" className="ml-4 flex-shrink-0" onClick={() => setModalOpen(true)}>
            Open Modal
          </Button>
        </div>
      </Sidesheet>

      <Modal
        open={modalOpen}
        onClose={onModalClose}
        dimension="medium"
        closeOnEscape={true}
        backdropClose={true}
        headerOptions={{
          heading: 'Popover Dismiss Order',
          subHeading: 'Same content as sidesheet. Test overlay stacking.',
        }}
      >
        <div className={contentWrapper}>
          <span className="d-flex align-items-center flex-nowrap flex-shrink-0">{dismissOrderContent}</span>
        </div>
      </Modal>
    </div>
  );
};

DismissOrderOverlayManager.storyName = 'Popover Dismiss Order';

const customCode = `() => {
  const [sidesheetOpen, setSidesheetOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);

  const onSidesheetClose = () => setSidesheetOpen(false);
  const onModalClose = () => setModalOpen(false);

  const headerOptions = {
    heading: 'Popover Dismiss Order',
    subHeading: 'Test overlay stacking and Escape/backdrop behavior.',
  };

  const dismissOrderContent = (
    <>
      <span className="mr-4">
        <Popover position="bottom" on="click" trigger={<Button appearance="basic">1. Click here</Button>} closeOnBackdropClick>
          <div className="p-5 pb-6 pr-10">
            <Text weight="strong">3. Press escape</Text>
            <br />
            <Tooltip position="right" tooltip="Hover me for tooltip text that appears in the tooltip when the line is truncated.">
              <Text className="mt-4 d-block ellipsis--noWrap" style={{ maxWidth: 180 }}>
                Hover me for tooltip text that appears in the tooltip when the line is truncated.
              </Text>
            </Tooltip>
            <Popover position="right" on="click" trigger={<Button appearance="basic" className="mt-4">Open inner popover</Button>} closeOnBackdropClick>
              <div className="p-5 pb-6 pr-10">
                <Text weight="strong">Inner (higher z)</Text>
                <Text className="mt-4 d-block">Escape closes this first, then the parent.</Text>
              </div>
            </Popover>
          </div>
        </Popover>
      </span>
      <Popover position="bottom" on="hover" trigger={<Button appearance="basic">2. Hover here</Button>} hoverable>
        <div className="p-5 pb-6 pr-10">
          <Text weight="strong">2. Hover here</Text>
          <Text className="mt-4 d-block">Opened by hover. Closes on Escape or mouse leave.</Text>
        </div>
      </Popover>
    </>
  );

  const contentWrapper = 'p-6 d-flex align-items-center flex-nowrap';

  return (
    <div className={contentWrapper}>
      <span className="d-flex align-items-center flex-nowrap flex-shrink-0">
        {dismissOrderContent}
      </span>
      <Button appearance="primary" className="ml-4 flex-shrink-0" onClick={() => setSidesheetOpen(true)}>
        Open Sidesheet
      </Button>
      <Sidesheet open={sidesheetOpen} onClose={onSidesheetClose} headerOptions={headerOptions} dimension="regular" closeOnEscape={true} backdropClose={true}>
        <div className={contentWrapper}>
          <span className="d-flex align-items-center flex-nowrap flex-shrink-0">
            {dismissOrderContent}
          </span>
          <Button appearance="primary" className="ml-4 flex-shrink-0" onClick={() => setModalOpen(true)}>
            Open Modal
          </Button>
        </div>
      </Sidesheet>
      <Modal open={modalOpen} onClose={onModalClose} dimension="medium" closeOnEscape={true} backdropClose={true} headerOptions={{ heading: 'Popover Dismiss Order', subHeading: 'Same content as sidesheet. Test overlay stacking.' }}>
        <div className={contentWrapper}>
          <span className="d-flex align-items-center flex-nowrap flex-shrink-0">
            {dismissOrderContent}
          </span>
        </div>
      </Modal>
    </div>
  );
};`;

export default {
  title: 'Components/Popover/Popover Dismiss Order',
  component: Popover,
  parameters: {
    docs: {
      docPage: {
        title: 'Popover Dismiss Order',
        description: 'When several overlays are open, the most recently opened closes first on Escape.',
        customCode,
        noHtml: true,
        props: {
          exclude: ['offset'],
        },
      },
    },
  },
};
