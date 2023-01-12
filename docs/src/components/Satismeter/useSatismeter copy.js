import React, { useEffect, useState } from 'react';

/**
 *
 * @param user
 */
const useSatisMeter = (user) => {
  const { id, email, date_joined, full_name } = user;

  const [satismeter, setSatismeter] = useState({
    installed: false,
    instance: null,
  });

  useEffect(() => {
    if (user) {
      (() => {
        // define satis meter
        window.satismeter =
          window.satismeter ||
          function () {
            (window.satismeter.q = window.satismeter.q || []).push(arguments);
          };

        window.satismeter.l = 1 * new Date();

        const script = document.createElement('script');

        const headElement = document.getElementsByTagName('head')[0];

        script.async = 1;

        script.src = 'https://app.satismeter.com/satismeter.js';

        // Append satis meter script
        headElement.appendChild(script);
      })();

      window.satismeter({
        writeKey: 'xU7oxpdyw55qdUSv',
        userId: id,
        traits: {
          name: full_name,
          email: email,
          createdAt: date_joined,
        },
      });
      setSatismeter({
        installed: true,
        instance: window.satismeter,
      });
    }

    return () => {
      setSatismeter({
        installed: false,
        instance: null,
      });
    };
  }, [user]);

  return satismeter;
};

export default useSatisMeter;
