<p align="center">
  <a href="#">
    <img alt="" src="https://innovaccer.com/static/image/site-logo/innovaccer-logo-black.svg" width="20%" />
  </a>
</p>
<h1 align="center">
  Innovaccer Design System
</h1>
<h3 align="center">
  A React-based UI toolkit for building Web Applications.
</h3>


## 🚀 Get Up and Running

There are two main steps to use a component in your project:
- Installing component library using npm or yarn
- Importing stylesheet


**Installing component library:**


Run the following command using [npm](https://www.npmjs.com/)  to add the component library to your project:

```bash
npm install design-system
```

**Adding style:**

As this component library is part of a framework-agnostic design system used at Innovaccer the styling is done with CSS using CSS variables for theming and BEM methodology for reusable and modular styling. So it requires you to include CSS in your project by either importing or serving it as a static file. The complete stylesheet is published as part of the component library at path `design-system/css`.

Import style at your app's root.

```js
import 'design-system/css';
```

**Using design system font:**

The css sets the font family as `'Nunito Sans'` for the body. To add this font in your project you need to load this font. The recommended way to do it is by adding the following google font cdn link to your app's head.

```html
<link href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,300i,400,400i,600,600i,700,700i,800,800i,900,900i&display=swap" rel="stylesheet">

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
    onlyLegacy: true
  });
</script>

```

**Using Components**

Available components along with live code editor and API documentation can be found [here](https://aregee.github.io/design-system).
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
} from 'design-system'

```

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

## 💜 Thanks

Thanks to our many contributors.
