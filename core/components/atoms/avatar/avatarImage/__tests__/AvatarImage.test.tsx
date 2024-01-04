import * as React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { Avatar } from '@/index';
import { AvatarProps as Props } from '@/index.type';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const imgSrc = 'https://design.innovaccer.com/images/withoutType.png';
const svg = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px">
    <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

describe('Avatar Image component', () => {
  const mapper = {
    src: valueHelper(imgSrc, { required: true, iterate: false }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = render(
        <Avatar>
          <Avatar.Image {...attr} />
        </Avatar>
      );
      expect(tree).toMatchSnapshot();
    });
  };
  testHelper(mapper, testFunc);
});

describe('Avatar Image component with svg', () => {
  const mapper = {
    svg: valueHelper(svg, { required: true, iterate: false }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = render(
        <Avatar>
          <Avatar.Image>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px">
              <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </Avatar.Image>
        </Avatar>
      );
      expect(tree).toMatchSnapshot();
    });
  };
  testHelper(mapper, testFunc);
});

describe('Avatar Image component with fallback', () => {
  it('check for fallback text', async () => {
    const { getByTestId } = render(
      <Avatar firstName="John" lastName="Doe">
        <Avatar.Image src="https://design.innovaccer.com/images/witType.png" />
      </Avatar>
    );
    const imgEle = getByTestId('DesignSystem-Image');
    fireEvent.error(imgEle, { target: imgEle });
    await waitFor(() => {
      expect(getByTestId('DesignSystem-Text')).toHaveTextContent('JD');
    });
  });

  it('check for fallback icon', async () => {
    const { getByTestId } = render(
      <Avatar>
        <Avatar.Image src="https://design.innovaccer.com/images/witType.png" />
      </Avatar>
    );
    const imgEle = getByTestId('DesignSystem-Image');
    fireEvent.error(imgEle, { target: imgEle });
    await waitFor(() => {
      expect(getByTestId('DesignSystem-Avatar--Icon')).toBeInTheDocument();
    });
  });
});

describe('Avatar Image component with prop:src', () => {
  const { getByTestId } = render(
    <Avatar firstName="John" lastName="Doe">
      <Avatar.Image src={imgSrc} />
    </Avatar>
  );
  const imgEle = getByTestId('DesignSystem-Image');
  expect(imgEle).toBeInTheDocument();
});

describe('Avatar Image component with avatar sizes', () => {
  it('image should have height and width of 32px for regular avatar', () => {
    const { getByTestId } = render(
      <Avatar firstName="John" lastName="Doe">
        <Avatar.Image src={imgSrc} />
      </Avatar>
    );
    const imgEle = getByTestId('DesignSystem-Image');
    expect(imgEle).toHaveAttribute('height', '32');
    expect(imgEle).toHaveAttribute('width', '32');
  });

  it('image should have height and width of 24px for tiny avatar', () => {
    const { getByTestId } = render(
      <Avatar firstName="John" lastName="Doe" size="tiny">
        <Avatar.Image src={imgSrc} />
      </Avatar>
    );
    const imgEle = getByTestId('DesignSystem-Image');
    expect(imgEle).toHaveAttribute('height', '24');
    expect(imgEle).toHaveAttribute('width', '24');
  });
});
