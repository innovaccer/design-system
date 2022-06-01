import * as React from 'react';
import Icon from '../index';
import { Text } from '@/index';

export const Default = () => {
  return <Icon size={50}>info</Icon>;
};

export const TabIndex = () => (
  <Icon tabIndex={0} size={50}>
    info
  </Icon>
);

export const Appearance = () => {
  const appearances = [
    'destructive',
    'white',
    'subtle',
    'disabled',
    'alert',
    'success',
    'warning',
    'primary',
    'primary_dark',
    'primary_lighter',
    'alert_dark',
    'alert_lighter',
    'success_dark',
    'success_lighter',
    'warning_dark',
    'warning_lighter',
    'accent1',
    'accent1_dark',
    'accent1_lighter',
    'accent2',
    'accent2_dark',
    'accent2_lighter',
    'accent3',
    'accent3_dark',
    'accent3_lighter',
    'accent4',
    'accent4_dark',
    'accent4_lighter',
    'inverse',
  ];

  return (
    <div className="d-flex flex-wrap">
      {appearances.map((appearance, ind) => {
        return (
          <div key={ind} className="d-flex flex-column mr-8 mt-8 justify-content-center">
            <Icon appearance={appearance} size={50}>
              info
            </Icon>
            <Text weight="strong">{appearance}</Text>
          </div>
        );
      })}
    </div>
  );
};

export const Type = () => {
  const iconTypes = ['filled', 'outlined', 'round', 'two-tone', 'sharp'];

  return (
    <div className="d-flex flex-wrap">
      {iconTypes.map((type, ind) => {
        return (
          <div key={ind} className="d-flex flex-column mr-13 mt-8 justify-content-center">
            <Icon type={type} size={50}>
              info
            </Icon>
            <Text weight="strong">{type}</Text>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Icon',
  component: Icon,
};
