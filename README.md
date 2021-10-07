<p align="center">
  <a href="#">
    <img alt="" src="https://innovaccer.com/static/image/site-logo/innovaccer-logo-black.svg" width="20%" />
  </a>
</p>
<h1 align="center">
  Masala Design System
</h1>

> Masala Design System (MDS) is an open-source design system built at Innovaccer.
> This repo consists of React components based on the guidelines and principles of 
> Masala Design System.

<br/>

<div align="center">

[![codecov](https://codecov.io/gh/innovaccer/design-system/branch/master/graph/badge.svg?token=2LY7JLZGX0)](https://codecov.io/gh/innovaccer/design-system) ![GitHub](https://img.shields.io/github/license/innovaccer/design-system) ![GitHub top language](https://img.shields.io/github/languages/top/innovaccer/design-system) ![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/innovaccer/design-system)

</div>
<br/>

### 🚀 Get Up and Running
---
> 💡 If your app runs on `Innovaccer UI engine` you don't need following two steps, please see _Using Components_ section bellow.

There are two main steps to use a component in your project:

1. Installing component library using npm or yarn.
2. Loading stylesheet.

**Installing component library:**

Run the following command using [npm](https://www.npmjs.com/) to add the component library to your project:

```bash
npm install @innovaccer/design-system
```

**Adding style:**

As this component library is part of a framework-agnostic design system used at Innovaccer the styling is done with CSS using CSS variables for theming and BEM methodology for reusable and modular styling. So it requires you to include CSS in your project by either importing or serving it as a static file. The complete stylesheet is published as part of the component library at path `@innovaccer/design-system/css`.

Import style at your app's root.

```js
import '@innovaccer/design-system/css';
```

**Using design system font:**

The css sets the font family as `'Nunito Sans'` for the body. To add this font in your project you need to load this font. The recommended way to do it is by adding the following google font cdn link to your app's head.

```html
<link
  href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,300i,400,400i,600,600i,700,700i,800,800i,900,900i&display=swap"
  rel="stylesheet"
/>
```

**Updating Font:**

If you don't add the font described above font family will not be affected by css. However, if you want to update the font family update it via the following css variable.

```css
--font-family
```

**Reset Styles**

As BEM is used reset.css is not used and no style reset is done.

**Polyfill for IE**

For css variables to work on IE we use a polyfill at runtime to achieve dynamic theming through variables. Please add the following polyfill in your page.

```html
<script src="https://cdn.jsdelivr.net/npm/css-vars-ponyfill@2"></script>
<script>
  cssVars({
    onlyLegacy: true,
  });
</script>
```

**Using Components**

Available components along with live code editor and API documentation can be found [here](https://innovaccer.github.io/design-system).
Components can be imported as mentioned below:

```js
{
  ...
  Avatar,
  Backdrop,
  Badge,
  BreadcrumbsWrapper,
  Breadcrumb,
  ...
} from '@innovaccer/design-system'

```

## Tutorial

We have created a tutorial to guide you in creating an awesome app with Innovaccer Design System components. Please find it [here](/docs/AppTutorial.md).

## How to run locally?

```bash
#clone repository
git clone https://github.com/innovaccer/design-system.git

#install dependencies
npm install

#start development server
npm run dev
```

## Documentation

**[Design](http://design.innovaccer.com)**

**[Components](https://innovaccer.github.io/design-system)**

## ❗ Code of Conduct

We expect everyone participating in the community to abide by our [**Code of Conduct**](https://github.com/innovaccer/design-system/blob/master/CODE_OF_CONDUCT.md). Please read it. Please follow it. We work hard to build each other up and create amazing things together. 💪💜

## 🤝 How to Contribute

Whether you're helping us fix bugs, improve the docs, or spread the word, we'd love to have you as part of the community! :muscle::purple_heart:

Check out our [**Contributing Guide**](https://github.com/innovaccer/design-system/blob/master/CONTRIBUTING.md) for ideas on contributing and setup steps for getting our repositories up and running on your local machine.

### A note on how this repository is organized

This repository is codebase for all and we publish it to NPM as package.

### Contributing

We are currently only accepting bug fixes.

## :memo: License

Licensed under the [MIT License](https://github.com/innovaccer/design-system/blob/master/LICENSE).


## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/aditya-kumawat"><img src="https://avatars.githubusercontent.com/u/12715487?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Aditya Kumawat</b></sub></a><br /><a href="https://github.com/innovaccer/design-system/commits?author=aditya-kumawat" title="Code">💻</a></td>
    <td align="center"><a href="https://riyalohia.github.io/portfolio/"><img src="https://avatars.githubusercontent.com/u/31706090?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Riya Lohia</b></sub></a><br /><a href="https://github.com/innovaccer/design-system/commits?author=riyalohia" title="Code">💻</a></td>
    <td align="center"><a href="http://satyamyadav.info/"><img src="https://avatars.githubusercontent.com/u/3583587?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Satyam Yadav</b></sub></a><br /><a href="https://github.com/innovaccer/design-system/commits?author=satyamyadav" title="Code">💻</a> <a href="https://github.com/innovaccer/design-system/commits?author=satyamyadav" title="Documentation">📖</a> <a href="https://github.com/innovaccer/design-system/pulls?q=is%3Apr+reviewed-by%3Asatyamyadav" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/sandeshchoudhary"><img src="https://avatars.githubusercontent.com/u/11272274?v=4?s=100" width="100px;" alt=""/><br /><sub><b>sandeshchoudhary</b></sub></a><br /><a href="https://github.com/innovaccer/design-system/commits?author=sandeshchoudhary" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/adityajhajharia"><img src="https://avatars.githubusercontent.com/u/42600089?v=4?s=100" width="100px;" alt=""/><br /><sub><b>adityajhajharia</b></sub></a><br /><a href="https://github.com/innovaccer/design-system/commits?author=adityajhajharia" title="Code">💻</a></td>
    <td align="center"><a href="https://sourcerer.io/anuradha9712"><img src="https://avatars.githubusercontent.com/u/46045493?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Anuradha Aggarwal</b></sub></a><br /><a href="https://github.com/innovaccer/design-system/commits?author=anuradha9712" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/xlreon"><img src="https://avatars.githubusercontent.com/u/26788670?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sidharth</b></sub></a><br /><a href="https://github.com/innovaccer/design-system/commits?author=xlreon" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/stuti1090"><img src="https://avatars.githubusercontent.com/u/65341865?v=4?s=100" width="100px;" alt=""/><br /><sub><b>stuti1090</b></sub></a><br /><a href="https://github.com/innovaccer/design-system/commits?author=stuti1090" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/veekays"><img src="https://avatars.githubusercontent.com/u/6420348?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Vikas Singh</b></sub></a><br /><a href="https://github.com/innovaccer/design-system/commits?author=veekays" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/SaniyaGupta"><img src="https://avatars.githubusercontent.com/u/15903031?v=4?s=100" width="100px;" alt=""/><br /><sub><b>SaniyaGupta</b></sub></a><br /><a href="https://github.com/innovaccer/design-system/commits?author=SaniyaGupta" title="Code">💻</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/parth-chauhan-984624193/"><img src="https://avatars.githubusercontent.com/u/35137224?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Parth Chauhan</b></sub></a><br /><a href="https://github.com/innovaccer/design-system/commits?author=chauhanparth210" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/stutirao"><img src="https://avatars.githubusercontent.com/u/45294592?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Stuti Pandey</b></sub></a><br /><a href="https://github.com/innovaccer/design-system/commits?author=stutirao" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Shib00"><img src="https://avatars.githubusercontent.com/u/33096446?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Shivam Dwivedi</b></sub></a><br /><a href="https://github.com/innovaccer/design-system/commits?author=Shib00" title="Code">💻</a></td>
    <td align="center"><a href="http://www.rahulgaur.info/"><img src="https://avatars.githubusercontent.com/u/760474?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Rahul Gaur</b></sub></a><br /><a href="https://github.com/innovaccer/design-system/commits?author=aregee" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/atifzaidi92"><img src="https://avatars.githubusercontent.com/u/54103064?v=4?s=100" width="100px;" alt=""/><br /><sub><b>atifzaidi92</b></sub></a><br /><a href="https://github.com/innovaccer/design-system/commits?author=atifzaidi92" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Sumit2399"><img src="https://avatars.githubusercontent.com/u/66456021?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sumit Dhyani</b></sub></a><br /><a href="https://github.com/innovaccer/design-system/commits?author=Sumit2399" title="Code">💻</a></td>
    <td align="center"><a href="https://tanmay-portfolio.herokuapp.com/"><img src="https://avatars.githubusercontent.com/u/36269283?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tanmay Sharma</b></sub></a><br /><a href="https://github.com/innovaccer/design-system/commits?author=927tanmay" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
