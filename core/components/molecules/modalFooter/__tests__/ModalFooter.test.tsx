import * as React from 'react';
import { shallow } from 'enzyme';
import ModalFooter from '../ModalFooter';
import Button from '@/components/atoms/button';

describe('ModalFooter component', () => {
  it('should match the snapshot when Modal Footer is with two action buttons', () => {
    const tree = shallow(
      <ModalFooter>
        <Button appearance="basic" onClick={() => null}>Basic</Button>
        <Button appearance="primary" onClick={() => null}>Primary</Button>
      </ModalFooter>
    );
    expect(tree).toMatchSnapshot();
  });
});
