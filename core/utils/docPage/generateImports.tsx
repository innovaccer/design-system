const generateImports = (str = '', lib: Record<string, unknown> = {}, libName: string) => {
  const regexp = /<[A-Z]\w*/g;
  const matchedArray = Array.from(str.matchAll(regexp));

  const componentsMap = matchedArray
    .flatMap((item) => item[0].replace('<', ''))
    .reduce((finalMap, currentElement) => {
      if (lib[currentElement]) {
        return { ...finalMap, [currentElement]: true };
      }
      return finalMap;
    }, {});

  return `// import { ${Object.keys(componentsMap).join(', ')} } from '${libName}';`;
};

export default generateImports;
