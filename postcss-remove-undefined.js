export default () => {
  return {
    postcssPlugin: 'postcss-remove-undefined',
    Once(root) {
      root.walkRules((rule) => {
        rule.walkDecls((decl) => {
          if (decl.value.includes('undefined')) {
            decl.remove();
          }
        });
        rule.selectors = rule.selectors.filter((selector) => !selector.includes('undefined'));
        if (rule.nodes.length === 0 || rule.selectors.length === 0) {
          rule.remove();
        }
      });
    },
  };
};

export const postcss = true;
