import * as React from 'react';
import { Button, Popover, Label, Textarea, Link , Input } from '@/index';

// CSF format story
export const popoverWithInput = () => (
  <div className="mb-14">
    <Popover
      position="bottom-start"
      on="click"
      trigger={<Link>Save as filter view</Link>}
      open={true}
    >
      <div style={{ width: 'var(--spacing-9)' , height: 'var(--spacing-8)+var(--spacing-xl)' }} className="mx-6 my-6">
        <Label required={true} withInput={true}>
            Name
        </Label>
        <Input name="input" required={true} placeholder="Name"/>
        <Label className="mt-4" withInput={true}>
        Description
        </Label>
        <Textarea  name="Textarea" placeholder="Write a description" />
        <div  className="d-flex justify-content-end" >
          <Button className="mt-5" appearance="primary">Save Filter</Button>
        </div>
      </div>
    </Popover>
  </div>
);

export default {
  title: 'Components/Popover/Popover With Input',
  component: Popover,
  parameters: {
    docs: {
      docPage: {
        noHtml: true
      }
    }
  }
};
