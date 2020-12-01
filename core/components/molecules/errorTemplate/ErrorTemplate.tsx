import * as React from 'react';
import classNames from 'classnames';
import { HeadingProps, TextProps } from '@/index.type';
import { Heading, Text } from '@/index';
import { BaseProps, extractBaseProps } from '@/utils/types';

type Template = 'NO_CONTENT' | 'NO_SEARCH' | 'ERROR';

interface Image {
  height?: string;
  className?: string;
  src: string;
}

export interface ErrorTemplateProps extends BaseProps {
  /**
   *  Illustration to be shown
   *
   * <pre className="DocPage-codeBlock">
   *
   *  Image: {
   *    src: string;
   *    height?: string;
   *    className?: string;
   *  }
   * </pre>
   *
   * | Name | Description | Default |
   * | --- | --- | --- |
   * | src | Image source | |
   * | className | CSS class applied to Image | |
   * | height | Height of image | NO_CONTENT: `256px` <br/> ERROR: `256px` <br/> NO_SEARCH: `128px`|
   */
  image: Image;
  /**
   * Heading of template
   */
  title: string;
  /**
   * Description of template
   */
  description: string;
  /**
   * Type of template
   *
   * Template: 'NO_CONTENT' | 'NO_SEARCH' | 'ERROR'
   */
  templateType: Template;
  /**
   * Button / ButtonGroups to be added inside template
   */
  children?: React.ReactNode;
}

export const defaultImageHeight = {
  NO_CONTENT: '256px',
  NO_SEARCH: '128px',
  ERROR: '256px',
};

export const HeadingSize: Record<Template, HeadingProps['size']> = {
  NO_CONTENT: 'l',
  NO_SEARCH: 'm',
  ERROR: 'l',
};

export const textSize: Record<Template, TextProps['size']> = {
  NO_CONTENT: 'large',
  NO_SEARCH: 'regular',
  ERROR: 'large',
};

export const ErrorTemplate = (props: ErrorTemplateProps) => {
  const {
    image,
    title,
    description,
    templateType,
    children,
    className,
  } = props;

  const {
    height = defaultImageHeight[templateType],
    className: imageClassName,
    src
  } = image;

  const baseProps = extractBaseProps(props);

  const WrapperClass = classNames({
    ['ErrorTemplate']: true,
  }, className);

  const HeadingClass = classNames({
    ['ErrorTemplate-title']: true,
    [`ErrorTemplate-title--${templateType}`]: true
  });

  const TextClass = classNames({
    ['ErrorTemplate-description']: true,
    [`ErrorTemplate-description--${templateType}`]: children !== undefined
  });

  return (
    <div {...baseProps} className={WrapperClass}>
      <img
        src={src}
        height={height}
        className={imageClassName}
      />
      <Heading
        size={HeadingSize[templateType]}
        className={HeadingClass}
      >
        {title}
      </Heading>
      <Text
        size={textSize[templateType]}
        className={TextClass}
        appearance="subtle"
      >
        {description}
      </Text>
      {children && children}
    </div>
  );
};

ErrorTemplate.displayName = 'ErrorTemplate';

export default ErrorTemplate;
