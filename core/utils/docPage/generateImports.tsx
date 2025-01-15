const generateImports = (str = '', lib: Record<string, unknown> = {}, libName: string): string => {
  // const generateImports = (): string => {

  console.log('str:', str, 'lib:', lib, 'libName:', libName);
  // const regexp = /<[A-Z]\w*/g;
  // const matchedArray = Array.from(str.matchAll(regexp));

  // const componentsMap = matchedArray
  //   .map((item) => item[0].replace('<', ''))
  //   .flat()
  //   .reduce((finalMap: Record<string, boolean>, currentElement: string) => {
  //     if (lib[currentElement]) {
  //       return { ...finalMap, [currentElement]: true };
  //     }
  //     return finalMap;
  //   }, {});

  // return `// import { ${Object.keys(componentsMap).join(', ')} } from '${libName}';`;
  return '';
};

export default generateImports;
