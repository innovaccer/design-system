const generateImports = (str = '', lib: Record<string, unknown> = {}, libName: string): string => {
  console.log('str:', str, 'lib:', lib, 'libName:', libName);
  const regexp = /<[A-Z]\w*/g;
  const matchedArray = str.match(regexp) || [];

  const componentsMap = matchedArray
    .map((item) => item.replace('<', ''))
    .reduce((finalMap: Record<string, boolean>, currentElement: string) => {
      if (lib[currentElement]) {
        return { ...finalMap, [currentElement]: true };
      }
      return finalMap;
    }, {});

  return `// import { ${Object.keys(componentsMap).join(', ')} } from '${libName}';`;
};

export default generateImports;
