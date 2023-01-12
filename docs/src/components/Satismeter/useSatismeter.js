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
    // (() => {
    //   // define satis meter
    //   window.satismeter =
    //     window.satismeter ||
    //     function () {
    //       (window.satismeter.q = window.satismeter.q || []).push(arguments);
    //     };

    //   window.satismeter.l = 1 * new Date();

    //   const script = document.createElement('script');

    //   const headElement = document.getElementsByTagName('head')[0];

    //   script.async = 1;

    //   script.src = 'https://app.satismeter.com/satismeter.js';

    //   // Append satis meter script
    //   headElement.appendChild(script);
    // })();

    // <script>
    (function () {
      window.satismeter =
        window.satismeter ||
        function () {
          (window.satismeter.q = window.satismeter.q || []).push(arguments);
        };
      window.satismeter.l = 1 * new Date();
      var script = document.createElement('script');
      var parent = document.getElementsByTagName('script')[0].parentNode;
      script.async = 1;
      script.src = 'https://app.satismeter.com/js';
      parent.appendChild(script);
    })();

    window.satismeter({
      writeKey: 'QfCL4sgRc7xP72x1',
    });
    // </script>
    
    setSatismeter({
      installed: true,
      instance: window.satismeter,
    });

    return () => {
      setSatismeter({
        installed: false,
        instance: null,
      });
    };
  }, []);

  return satismeter;
};

export default useSatisMeter;
