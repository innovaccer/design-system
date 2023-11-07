export const submitFormToSatismeter = async (answersList, hostUrl) => {
  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  let raw = JSON.stringify({
    writeKey: 'OhGeSHvGwegxkoqhZBM2JQ7qkCDRHII8',
    anonymousId: 'ffaca7d1-6620-44f8-8089-93e6812190d0',
    campaign: '6542399d10a6312d44fe8a69',
    method: 'In-App',
    answers: answersList,
    referrer: hostUrl,
    forceSurvey: true,
  });

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  const result = await fetch('https://app.satismeter.com/api/responses', requestOptions)
    .then((response) => {
      return response?.ok;
    })
    .catch((error) => console.log('error in api call', error));

  return result;
};
