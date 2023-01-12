import React, { useEffect } from 'react';
import useSatisMeter from './useSatismeter';

const SatisMeter = (user) => {
  const satismeter = useSatisMeter(user);

  const { installed, instance } = satismeter;

  useEffect(() => {
    // if (satismeter.installed && satismeter.instance) {
    //   instance('track', { event: 'visitAfterDevHome' });
    // }
  }, [installed]);

  return null; // Just return empty renderer
};

export default React.memo(SatisMeter);
