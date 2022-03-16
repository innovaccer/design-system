export const removeDuplicate = (arr) => {
  const result = arr.reduce((unique, o) => {
    if (!unique.some(obj => obj.title === o.title && obj.description === o.description)) {
      unique.push(o);
    }
    return unique;
  }, []);
  return result;
}

export const getHeadingUrl = (pageURL, heading) => {
  const url = pageURL + '/#' + heading.toLowerCase().replace(/ /g, '-');
  return url;
}
