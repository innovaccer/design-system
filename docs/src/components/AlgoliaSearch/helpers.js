export const getHeadingUrl = (pageURL, heading) => {
  const url = pageURL + '/#' + heading.toLowerCase().replace(/ /g, '-').replace(/[.'?,/()&+]/g,"");
  return url;
};

export const getPlatformPrefix = () => {
  const isBrowser = typeof window !== 'undefined';

  let platformPrefix = 'ctrl';
  if (isBrowser) {
    let platform = navigator.userAgentData?.platform.toLowerCase() || 'linux';
    if (platform.includes('mac')) {
      platformPrefix = 'cmd';
    }
  }
  return platformPrefix;
};
