export const submitFormToSatismeter = async (answersList, hostUrl) => {
  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  let raw = JSON.stringify({
    writeKey: 'DFlIliFEvDAYfaOh',
    anonymousId: '01d3b381-d077-462a-a67e-1fc61ab5055d',
    campaign: '63ca335d3e692eea35f03c40',
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
