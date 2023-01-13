import React, { useEffect } from 'react';
import useSatisMeter from './useSatismeter';
import './style.css';

const SatisMeter = (user) => {
  const satismeter = useSatisMeter(user);

  const { installed, instance } = satismeter;
  console.log('sssinstalled-> ', installed, 'instance-> ', instance);

  useEffect(() => {
    if (satismeter.installed && satismeter.instance) {
      console.log('ssssinside if condition-->', satismeter);
      instance('track', { event: 'site-feedback' });
    }
  }, [installed]);

  return null; // Just return empty renderer
};

export default React.memo(SatisMeter);
