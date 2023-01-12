import React, { useEffect, useState } from 'react';

const useSatisMeter = () => {

  const [satismeter, setSatismeter] = useState({
    installed: false,
    instance: null,
  });

  useEffect(() => {
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
      writeKey: 'DFlIliFEvDAYfaOh',
    });
    
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
