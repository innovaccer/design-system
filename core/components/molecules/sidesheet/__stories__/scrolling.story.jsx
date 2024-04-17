import * as React from 'react';
import { Sidesheet, Button, Label, Input, InputMask, Utils, Radio, Textarea, Slider } from '@/index';

export const Scrolling = () => {
  const [open, setOpen] = React.useState(false);
  const dateMask = Utils.masks.date['mm/dd/yyyy'];
  const dateValidator = (val) => Utils.validators.date(val, 'mm/dd/yyyy');

  const onClose = () => {
    setOpen(!open);
  };

  const headerOptions = {
    heading: 'Goal details',
    subHeading: 'Comorbidities (e.g obesity, chronic rhinosinusitis, food allergy)',
  };

  const options = {
    onClose,
    open,
    headerOptions,
    seperator: true,
    footer: (
      <>
        <Button appearance="primary" className="mr-4">
          Add goal
        </Button>
        <Button appearance="basic">Cancel</Button>
      </>
    ),
  };

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>
        Open Sidesheet
      </Button>
      <Sidesheet {...options}>
        <div className="py-7">
          <div className="w-100">
            <Label required={true} withInput={true}>
              Goal
            </Label>
            <Input placeholder="Placeholder" />
          </div>
          <div className="d-flex mt-6">
            <div>
              <Label required={true} withInput={true}>
                Achieve by
              </Label>
              <InputMask icon="event" mask={dateMask} validators={dateValidator} placeholder="mm/dd/yyyy" />
            </div>
            <div className="ml-6">
              <Label required={true} withInput={true}>
                Priority
              </Label>
              <div className="d-flex py-3">
                <Radio className="mr-4" label="High" name="Priority" size="regular" value="High" />
                <Radio
                  defaultChecked={true}
                  className="mr-4"
                  label="Medium"
                  name="Priority"
                  size="regular"
                  value="Medium"
                />
                <Radio label="Low" name="Priority" size="regular" value="Low" />
              </div>
            </div>
          </div>
          <div className="mt-7">
            <Label withInput={true} required={true}>
              Care team interventions
            </Label>
            <Textarea
              className="mt-4"
              aria-labelledby="Textarea"
              name="Textarea"
              placeholder="Define intervention"
              resize={true}
              rows={5}
            />
            <Button className="mt-4" size="tiny" icon="refresh" iconAlign="left" appearance="transparent">
              Add intervention
            </Button>
          </div>
          <div className="mt-7">
            <Label className="d-block w-100" withInput={true}>
              Patient actions
            </Label>
            <Button className="mt-4" size="tiny" icon="refresh" iconAlign="left" appearance="transparent">
              Add patient action
            </Button>
          </div>
          <div className="pr-7 mt-7">
            <Label withInput={true}>Motivational score</Label>
            <Slider className="mt-6" defaultValue={2} label="Confidence" stepSize={1} />
            <Slider className="mt-8" defaultValue={2} label="Readiness" stepSize={1} />
            <Slider className="mt-8" defaultValue={2} label="Importance" stepSize={1} />
            <Slider className="mt-8" defaultValue={2} label="Punctuality" stepSize={1} />
            <Slider className="mt-8 mb-8" defaultValue={2} label="Clarity" stepSize={1} />
          </div>
        </div>
      </Sidesheet>
    </div>
  );
};

const customCode = `() => {
  const [open, setOpen] = React.useState(false);
  const dateMask = Utils.masks.date['mm/dd/yyyy'];
  const dateValidator = (val) => Utils.validators.date(val, 'mm/dd/yyyy');

  const onClose = () => {
    setOpen(!open);
  };

  const headerOptions = {
    heading: 'Goal details',
    subHeading: 'Comorbidities (e.g obesity, chronic rhinosinusitis, food allergy)',
  };

  const options = {
    onClose,
    open,
    headerOptions,
    seperator: true,
    footer: (
      <>
        <Button appearance="primary" className="mr-4">
          Add goal
        </Button>
        <Button appearance="basic">Cancel</Button>
      </>
    ),
  };

  return (
    <div>
      <Button appearance="primary" onClick={() => setOpen(true)}>
        Open Sidesheet
      </Button>
      <Sidesheet {...options}>
        <div className="py-7">
          <div className="w-100">
            <Label required={true} withInput={true}>
              Goal
            </Label>
            <Input placeholder="Placeholder" />
          </div>
          <div className="d-flex mt-6">
            <div>
              <Label required={true} withInput={true}>
                Achieve by
              </Label>
              <InputMask icon="event" mask={dateMask} validators={dateValidator} placeholder="mm/dd/yyyy" />
            </div>
            <div className="ml-6">
              <Label required={true} withInput={true}>
                Priority
              </Label>
              <div className="d-flex py-3">
                <Radio className="mr-4" label="High" name="Priority" size="regular" value="High" />
                <Radio
                  defaultChecked={true}
                  className="mr-4"
                  label="Medium"
                  name="Priority"
                  size="regular"
                  value="Medium"
                />
                <Radio label="Low" name="Priority" size="regular" value="Low" />
              </div>
            </div>
          </div>
          <div className="mt-7">
            <Label withInput={true} required={true}>
              Care team interventions
            </Label>
            <Textarea
              className="mt-4"
              aria-labelledby="Textarea"
              name="Textarea"
              placeholder="Define intervention"
              resize={true}
              rows={5}
            />
            <Button className="mt-4" size="tiny" icon="refresh" iconAlign="left" appearance="transparent">
              Add intervention
            </Button>
          </div>
          <div className="mt-7">
            <Label className="d-block w-100" withInput={true}>
              Patient actions
            </Label>
            <Button className="mt-4" size="tiny" icon="refresh" iconAlign="left" appearance="transparent">
              Add patient action
            </Button>
          </div>
          <div className="pr-7 mt-7">
            <Label withInput={true}>Motivational score</Label>
            <Slider className="mt-6" defaultValue={2} label="Confidence" stepSize={1} />
            <Slider className="mt-8" defaultValue={2} label="Readiness" stepSize={1} />
            <Slider className="mt-8" defaultValue={2} label="Importance" stepSize={1} />
            <Slider className="mt-8" defaultValue={2} label="Punctuality" stepSize={1} />
            <Slider className="mt-8 mb-8" defaultValue={2} label="Clarity" stepSize={1} />
          </div>
        </div>
      </Sidesheet>
    </div>
  );
};`;

export default {
  title: 'Components/Sidesheet/Scrolling',
  component: Sidesheet,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Sidesheet',
        noHtml: true,
      },
    },
  },
};
