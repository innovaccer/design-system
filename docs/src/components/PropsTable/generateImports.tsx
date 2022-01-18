// @ts-nocheck
const generateImports = (str = '', lib = {}, libName: string) => {
  const regexp = /<[A-Z]\w*/g;
  const matchedArray = [...str.matchAll(regexp)];

  const componentsMap = matchedArray
    .flatMap((item) => item[0].replace('<', ''))
    .reduce((finalMap, currentElement) => {
      if (lib[currentElement]) {
        return { ...finalMap, [currentElement]: true };
      }
      return finalMap;
    }, {});

  return `// import { ${Object.keys(componentsMap).join(
    ', '
  )} } from '${libName}';`;
};

export default generateImports;
