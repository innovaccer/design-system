require('@fontsource/nunito-sans');
require('@fontsource/roboto-mono');
require('@fontsource/nunito-sans/600.css');
require('@fontsource/nunito-sans/700.css');
require('@fontsource/nunito-sans/800.css');
require('@fontsource/nunito-sans/900.css');
require("@innovaccer/design-system/css");
require("./src/components/css/prism.css");
require("prismjs/themes/prism-solarizedlight.css");
require('./src/components/css/global.css');

const React = require("react")
const Layout = require("./src/components/Layout").default;
const Home = require("./src/pages/index").default;

exports.onRouteUpdate = ({ location, prevLocation }) => {
  console.log("new pathname", location.pathname)
  console.log("old pathname", prevLocation ? prevLocation.pathname : null);
  // let element = document.getElementById("main-container");
  //   element.addEventListener('scroll', (e) => console.log('im scrolling'));
  // window.scrollTo(0,0);
}

exports.wrapPageElement = ({ element, props }) => {
  console.log('updated props', props);
  
  if(props.path === '/'){
    return <Home>{element}</Home>
  }
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>
}
