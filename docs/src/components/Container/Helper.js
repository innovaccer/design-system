export function onScrollHandler() {
    var element = document.getElementById('tab-container');
    var header = document.getElementById('mainHeader');
    var headerDimension = header?.getBoundingClientRect()
    var tabsDimension = element?.getBoundingClientRect();
    const isPinnedToTop =  tabsDimension?.top <= headerDimension?.height ? true : false;
    return isPinnedToTop;
}