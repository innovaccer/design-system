import * as React from 'react';
import { shallow } from 'enzyme';
import ModalBody from '../ModalBody';

describe('ModalBody component', () => {
  it('should match the snapshot for Modal Body without scroll', () => {
    const tree = shallow(
      <ModalBody>
        <p>Modal Body</p>
      </ModalBody>
    );

    expect(tree).toMatchSnapshot();
  });

  it('should match the snapshot for Modal Body with scroll', () => {
    const tree = shallow(
      <ModalBody>
        <div style={{ height: '500px' }}>
          <p>Modal Body</p>
        </div>
      </ModalBody>
    );

    expect(tree).toMatchSnapshot();
  });
});
