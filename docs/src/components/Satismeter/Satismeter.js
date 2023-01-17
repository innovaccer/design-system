import React, { useEffect, useState } from 'react';
import useSatisMeter from './useSatismeter';
import './style.css';
import { Backdrop, Button, Divider, Text } from '@innovaccer/design-system';
import axios from 'axios';

const SatisMeter = (user) => {
  const satismeter = useSatisMeter(user);
  const { installed, instance } = satismeter;
  console.log('sssinstalled-> ', installed, 'instance-> ', instance);

  const [showForm, setShowForm] = useState(false);

  // useEffect(() => {
  //   if (satismeter.installed && satismeter.instance) {
  //     console.log('ssssinside if condition-->', satismeter);
  //     instance('track', { event: 'site-feedback' });
  //   }
  // }, [installed]);

  // useEffect(() => {
  //   if (satismeter.installed && satismeter.instance && showForm) {
  //     console.log('ssssinside if condition-->', satismeter);
  //     instance('track', { event: 'site-feedback' });
  //   }
  // });

  const onClickHandler = () => {
    if (satismeter.installed && satismeter.instance) {
      console.log('ssssinside if condition-->', satismeter);
      instance('track', {
        event: 'site-feedback',
        answers: [
          {
            id: '79593580-95a7-11ed-8974-9b5d06700b8d',
            label: 'Do you have any feedback for us?',
            value: 'Yes',
          },
        ],
      });
      // setShowForm(true);
    }

    // if (satismeter.installed && satismeter.instance) {
    //   var config = {
    //     method: 'get',
    //     url: 'https://app.satismeter.com/api/v3/projects/638ef80e4e355e8542548f50/responses',
    //     // url: 'https://app.satismeter.com/api/responses',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     // mode: 'no-cors',
    //   };

    //   axios(config)
    //     .then(function (response) {
    //       console.log('satismeter api response', JSON.stringify(response.data));
    //     })
    //     .catch(function (error) {
    //       console.log('api error', error);
    //     });
    // }
  };

  return (
    <div>
      {/* {showForm && <Backdrop />}
      {showForm && <Button>showForm</Button>} */}
      <Divider className="mt-9 mb-7" />
      <div className="d-flex align-items-center">
        <Text size="large" weight="strong" className="mr-7">
          Was this page helpful?
        </Text>
        <Button icon="thumb_up" className="mr-4" onClick={onClickHandler}>
          Yes
        </Button>
        <Button icon="thumb_down" onClick={onClickHandler}>
          No
        </Button>
      </div>
    </div>
  );
};

export default React.memo(SatisMeter);
