export function debounce(func, delay = 100) {
  let timerId;
  return function () {
    clearTimeout(timerId)
    timerId = setTimeout(() => func.apply(this, arguments), delay)
  };
};

export function getActiveNavItem(pathName, navItems, newFrontmatter) {
  if (pathName && newFrontmatter && newFrontmatter.tabs) {
    const url = pathName.split('/');
    const componentName = pathName.includes('mobile') ? url[2] + '/' + url[3] : url[1] + '/' + url[2];
    const activeMenu = navItems.filter(({ link }) => {
      return link && link.includes(componentName);
    });
    return { link: activeMenu[0]?.link };
  }
  return { link: pathName };
}

export function getTabSlug(tabIndex, tabsList) {
  const tabName = tabsList[tabIndex];
  let tabSlug = '';
  if (tabName.length) {
    tabSlug = tabName.toLowerCase().replace(/\s/g, '-');
  }
  return tabSlug;
};

export function getActiveTab(relativePagePath, title, newFrontmatter, tabs) {
  const isSiblingTab = relativePagePath.split('.')[0] === '/' + title.replace(/\s/g, '');
  const tabsList = isSiblingTab ? newFrontmatter?.tabs : tabs;
  const page = relativePagePath.split('/');
  const pageName = page[page.length - 1].split('.')[0];

  const activeTab =
    tabsList && tabsList.length
      ? tabsList.findIndex(
        (tab, index) =>
          getTabSlug(index, tabsList) === pageName.toLowerCase()
      )
      : 0;

  return activeTab;
}

export function getIds(items) {
  return items.reduce((acc, item) => {
    if (item.url) {
      // url has a # as first character, remove it to get the raw Id
      acc.push(item.url.slice(1));
    }
    if (item.items) {
      acc.push(...getIds(item.items));
    }
    return acc;
  }, []);
}

export function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  let flag = (rect.top-60)>= 0 && rect.bottom+25 <= (window.innerHeight || document.documentElement.clientHeight);
  if (flag) return "inViewPort";
  else if(rect.bottom+25 > (window.innerHeight || document.documentElement.clientHeight)) return "belowViewPort";
  else return "aboveViewPort";
}
