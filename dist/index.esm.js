
  /**
   * Generated on: 1653402154070 
   *      Package: @innovaccer/design-system
   *      Version: v3.0.0-10
   *      License: MIT
   *         Docs: https://innovaccer.github.io/design-system
   */

    
import * as React from 'react';
import { useMemo, useRef, useState, useCallback, useLayoutEffect, useEffect } from 'react';
import { flushSync, createPortal } from 'react-dom';

var colorToHex = function colorToHex(color) {
  return getComputedStyle(document.documentElement).getPropertyValue("--".concat(color));
};

var css = /*#__PURE__*/Object.freeze({
  __proto__: null,
  colorToHex: colorToHex
});

// export * as masks from './masks';

var index$2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  css: css
});

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$1.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

// export type DefaultProps<T> = T extends { defaultProps: any }
//   ? T['defaultProps']
//   : {};
// export type Props<T, U> = Omit<T, keyof U> & {
//   [P in keyof T & keyof U]?: T[P];
// };
var extractBaseProps = function extractBaseProps(props) {
  var baseProps = ['className', 'data-test'];
  var basePropsObj = baseProps.reduce(function (acc, curr) {
    return props[curr] ? _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty({}, curr, props[curr])) : _objectSpread2({}, acc);
  }, {});
  return basePropsObj;
};

// import { Validators } from '@/utils/types';
// import { getTimeObjFromStr, isFormat12hour } from '@/components/organisms/timePicker/utils';
// export const isValid = (validators: Validators, ...value: any[]) => {
//   const iterator = Array.isArray(validators) ? validators : [validators];
//   return iterator.every((validator) => validator(...value));
// };
// export const date = (val: string, format: string): boolean => {
//   const validate = (date: number, month: number, year: number): boolean => {
//     const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     // Adjust for leap years
//     if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) monthLength[1] = 29;
//     // Check the range of the day
//     return month <= 12 && date <= monthLength[month - 1];
//   };
//   switch (format) {
//     case 'dd/mm/yyyy': {
//       const p = val.split('/');
//       const date = +p[0] || 1;
//       const month = +p[1] || 1;
//       const year = +p[2] || 1900;
//       return validate(date, month, year);
//     }
//     case 'mm/dd/yyyy': {
//       const p = val.split('/');
//       const date = +p[1] || 1;
//       const month = +p[0] || 1;
//       const year = +p[2] || 1900;
//       return validate(date, month, year);
//     }
//     case 'yyyy/mm/dd': {
//       const p = val.split('/');
//       const date = +p[2] || 1;
//       const month = +p[1] || 1;
//       const year = +p[0] || 1900;
//       return validate(date, month, year);
//     }
//     case 'dd-mm-yyyy': {
//       const p = val.split('-');
//       const date = +p[0] || 1;
//       const month = +p[1] || 1;
//       const year = +p[2] || 1900;
//       return validate(date, month, year);
//     }
//     case 'mm-dd-yyyy': {
//       const p = val.split('-');
//       const date = +p[1] || 1;
//       const month = +p[0] || 1;
//       const year = +p[2] || 1900;
//       return validate(date, month, year);
//     }
//     case 'yyyy-mm-dd': {
//       const p = val.split('-');
//       const date = +p[2] || 1;
//       const month = +p[1] || 1;
//       const year = +p[0] || 1900;
//       return validate(date, month, year);
//     }
//     default:
//       return false;
//   }
// };
// export const time = (val: string, format: string): boolean => {
//   const { hours, minutes } = getTimeObjFromStr(format, val);
//   const hoursCond = isFormat12hour(format) ? hours <= 12 : hours < 24;
//   return hoursCond && minutes <= 60;
// };
var checkIfImageExists = function checkIfImageExists(url, callback) {
  var img = new Image();
  img.src = url;

  if (img.complete) {
    callback(true);
  } else {
    img.onload = function () {
      callback(true);
    };

    img.onerror = function () {
      callback(false);
    };
  }
};

var _excluded$8 = ["size", "className", "appearance", "icon", "text", "tooltip", "image"];
var Avatar = function Avatar(props) {
  var _classNames, _classNames2;

  var size = props.size,
      className = props.className,
      appearance = props.appearance,
      icon = props.icon,
      text = props.text,
      tooltip = props.tooltip,
      image = props.image,
      rest = _objectWithoutProperties(props, _excluded$8); // To check if the image src loads a valid image


  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isValidImage = _React$useState2[0],
      setValidImage = _React$useState2[1];

  React.useEffect(function () {
    return checkIfImageExists(image !== null && image !== void 0 && image.src ? image.src : '', setValidImage);
  }, [image]);
  var baseProps = extractBaseProps(props);
  var defaultAppearance = 'secondary';
  var colors = ['accent4', 'primary', 'accent3', 'alert', 'accent2', 'warning', 'accent1', 'success'];
  var avatarAppearance = appearance || text && colors[(text.charCodeAt(0) + (text.charCodeAt(1) || 0)) % 8] || defaultAppearance;
  var classes = classnames((_classNames = {}, _defineProperty(_classNames, "Next-Avatar", true), _defineProperty(_classNames, "Next-Avatar--".concat(size), size), _defineProperty(_classNames, "Next-Avatar--".concat(avatarAppearance), avatarAppearance), _defineProperty(_classNames, 'Next-Avatar--disabled', !text || !(image !== null && image !== void 0 && image.src) || !icon), _defineProperty(_classNames, 'Next-overflow-hidden', !text), _classNames), className);
  var contentClass = classnames((_classNames2 = {}, _defineProperty(_classNames2, "Next-Avatar-content--".concat(size), size), _defineProperty(_classNames2, "Next-Avatar-content--".concat(avatarAppearance), avatarAppearance), _classNames2));
  var iconClass = classnames(_defineProperty({}, "Next-Avatar-content--".concat(avatarAppearance), avatarAppearance));
  var imageDimensions = {
    width: "".concat(size === 'regular' ? 32 : 24, "px"),
    height: "".concat(size === 'regular' ? 32 : 24, "px")
  };
  return /*#__PURE__*/React.createElement("span", _extends$1({
    title: tooltip,
    "data-test": "DesignSystem-Avatar"
  }, baseProps, rest, {
    className: classes
  }), text && /*#__PURE__*/React.createElement(Text, {
    weight: "medium",
    appearance: 'white',
    className: contentClass
  }, text), icon && /*#__PURE__*/React.createElement(Icon, {
    "data-test": "DesignSystem-Avatar--Icon",
    name: icon,
    size: size === 'regular' ? 16 : 12,
    appearance: 'white',
    className: iconClass
  }), image && isValidImage ? /*#__PURE__*/React.createElement("img", _extends$1({
    "data-test": "DesignSystem-Avatar--Image",
    src: image === null || image === void 0 ? void 0 : image.src,
    alt: image.altText
  }, imageDimensions)) : image === null || image === void 0 ? void 0 : image.altText.charAt(0), !text && !isValidImage && !(image !== null && image !== void 0 && image.altText) && !icon && /*#__PURE__*/React.createElement(Icon, {
    "data-test": "DesignSystem-Avatar--Icon",
    name: "person",
    size: size === 'regular' ? 16 : 12,
    appearance: 'white',
    className: iconClass
  }));
};
Avatar.displayName = 'Avatar';
Avatar.defaultProps = {
  size: 'regular'
};

var _excluded$7 = ["children", "componentType", "className"];

var GenericText = function GenericText(_ref) {
  var children = _ref.children,
      _ref$componentType = _ref.componentType,
      componentType = _ref$componentType === void 0 ? 'span' : _ref$componentType,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$7);

  return /*#__PURE__*/React.createElement(componentType, _objectSpread2(_objectSpread2({}, props), {}, {
    className: className
  }), children);
};

var _excluded$6 = ["appearance", "size", "children", "weight", "className"];
var Text = function Text(props) {
  var _classNames;

  var appearance = props.appearance,
      size = props.size,
      children = props.children,
      weight = props.weight,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$6);

  var classes = classnames((_classNames = {}, _defineProperty(_classNames, "Next-Text", true), _defineProperty(_classNames, "Next-Text--".concat(appearance), appearance), _defineProperty(_classNames, "Next-Text--".concat(weight), weight), _defineProperty(_classNames, "Next-Text--".concat(size), size), _classNames), className);
  return /*#__PURE__*/React.createElement(GenericText, _extends$1({
    "data-test": "DesignSystem-Text"
  }, rest, {
    className: classes,
    componentType: "span"
  }), children);
};
Text.displayName = 'Text';
Text.defaultProps = {
  appearance: 'default',
  size: 'regular'
};

var _excluded$5 = ["onClick", "onKeyDown", "role"];
var allowed = {
  button: new Set(['Enter', 'Space', 'Spacebar', ' ']),
  link: new Set(['Enter']),
  // onChange handles everything, no need for extra keyboard interaction
  checkbox: new Set([]),
  radio: new Set([])
}; // Refer for keyboard interactions: https://webaim.org/techniques/keyboard/#testing

var isKeyboardInteractionAllowed = function isKeyboardInteractionAllowed(role, key) {
  if (!allowed[role]) {
    return false;
  }

  var allowedKeys = allowed[role];
  return allowedKeys.has(key);
};

var useAccessibilityProps = function useAccessibilityProps(_ref) {
  var onClick = _ref.onClick,
      _onKeyDown = _ref.onKeyDown,
      _ref$role = _ref.role,
      role = _ref$role === void 0 ? 'button' : _ref$role,
      rest = _objectWithoutProperties(_ref, _excluded$5);

  return _objectSpread2({}, onClick ? {
    onClick: onClick,
    role: role,
    tabIndex: 0,
    'aria-label': rest['aria-label'],
    onKeyDown: function onKeyDown(e) {
      if (_onKeyDown) {
        _onKeyDown(e);

        return;
      }

      var key = e.key;

      if (isKeyboardInteractionAllowed(role, key)) {
        if (onClick) {
          e.preventDefault();
          onClick(e);
        }
      }
    }
  } : {
    role: role,
    'aria-label': rest['aria-label']
  });
};

var Icon = function Icon(props) {
  var _classNames;

  var appearance = props.appearance,
      className = props.className,
      name = props.name,
      size = props.size,
      children = props.children;
  var accessibilityProps = useAccessibilityProps(props);
  var baseProps = extractBaseProps(props);

  var mapper = function mapper(val) {
    if (val === 'outline') return 'outlined';
    if (val === 'rounded') return 'round';
    return val;
  };

  var type = mapper(props.type);

  var getIconAppearance = function getIconAppearance(iconColor) {
    var x = iconColor.indexOf('_');
    return iconColor.slice(0, x) + iconColor.charAt(x + 1).toUpperCase() + iconColor.slice(x + 2);
  };

  var color = appearance && appearance.includes('_') ? getIconAppearance(appearance) : appearance;
  var iconClass = classnames((_classNames = {}, _defineProperty(_classNames, 'material-icons', true), _defineProperty(_classNames, "material-icons-".concat(mapper(type)), type && type !== 'filled'), _defineProperty(_classNames, 'Icon', true), _defineProperty(_classNames, "Icon--".concat(color), appearance), _defineProperty(_classNames, "".concat(className), className), _classNames));
  var styles = {
    fontSize: "".concat(size, "px"),
    width: "".concat(size, "px")
  }; // change `children` to {name} after migration

  if (children && /*#__PURE__*/React.isValidElement(children)) {
    return /*#__PURE__*/React.createElement("span", _extends$1({}, baseProps, {
      className: className
    }), children);
  }

  return /*#__PURE__*/React.createElement("i", _extends$1({}, baseProps, {
    className: iconClass,
    style: styles
  }, accessibilityProps), type ? "".concat(name, "_").concat(type) : name);
};
Icon.displayName = 'Icon';
Icon.defaultProps = {
  size: 16,
  type: 'round'
};

var Pills = function Pills(props) {
  var _classNames;

  var appearance = props.appearance,
      children = props.children,
      subtle = props.subtle,
      className = props.className,
      ariaLabel = props.ariaLabel;
  var baseProps = extractBaseProps(props);
  var classes = classnames((_classNames = {}, _defineProperty(_classNames, "Next-Pills", true), _defineProperty(_classNames, "Next-Badge--".concat(appearance), appearance && !subtle), _defineProperty(_classNames, "Next-Badge--subtle-".concat(appearance), subtle), _classNames), className);
  return /*#__PURE__*/React.createElement("span", _extends$1({
    role: "status",
    "aria-label": ariaLabel,
    "data-test": "DesignSystem-Pills"
  }, baseProps, {
    className: classes
  }), children);
};
Pills.displayName = 'Pills';
Pills.defaultProps = {
  appearance: 'secondary'
};

var Badge = function Badge(props) {
  var _classNames;

  var appearance = props.appearance,
      children = props.children,
      subtle = props.subtle,
      className = props.className,
      ariaLabel = props.ariaLabel;
  var baseProps = extractBaseProps(props);
  var classes = classnames((_classNames = {}, _defineProperty(_classNames, "Next-Badge", true), _defineProperty(_classNames, "Next-Badge--".concat(appearance), appearance && !subtle), _defineProperty(_classNames, "Next-Badge--subtle-".concat(appearance), subtle), _classNames), className);
  return /*#__PURE__*/React.createElement("span", _extends$1({
    role: "status",
    "aria-label": ariaLabel,
    "data-test": "DesignSystem-Badge"
  }, baseProps, {
    className: classes
  }), children);
};
Badge.displayName = 'Badge';
Badge.defaultProps = {
  appearance: 'secondary'
};

var _excluded$4 = ["size", "appearance", "tabIndex", "type", "children", "iconOptions", "expanded", "selected", "loading", "disabled", "className"];
var sizeMapping = {
  tiny: 12,
  regular: 16,
  large: 20
};
var ButtonElement = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames, _classNames2;

  var _props$size = props.size,
      size = _props$size === void 0 ? 'regular' : _props$size,
      _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'basic' : _props$appearance,
      _props$tabIndex = props.tabIndex,
      tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex,
      type = props.type,
      children = props.children,
      iconOptions = props.iconOptions,
      expanded = props.expanded,
      selected = props.selected,
      loading = props.loading,
      disabled = props.disabled,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$4);

  var iconAlignment = (iconOptions === null || iconOptions === void 0 ? void 0 : iconOptions.align) || 'left';
  var buttonClass = classnames((_classNames = {}, _defineProperty(_classNames, 'Next-Button', true), _defineProperty(_classNames, 'Next-Button--expanded', expanded), _defineProperty(_classNames, "Next-Button--".concat(size), size), _defineProperty(_classNames, "Next-Button--".concat(size, "Square"), !children), _defineProperty(_classNames, "Next-Button--".concat(appearance), appearance), _defineProperty(_classNames, 'Next-Button--selected', selected && (appearance === 'basic' || appearance === 'transparent')), _defineProperty(_classNames, "Next-Button--iconAlign-".concat(iconAlignment), children && iconAlignment), _defineProperty(_classNames, "".concat(className), className), _classNames));
  var iconClass = classnames((_classNames2 = {}, _defineProperty(_classNames2, 'Next-Button-icon', true), _defineProperty(_classNames2, "Next-Button-icon--".concat(iconAlignment), children && iconAlignment), _classNames2));
  return /*#__PURE__*/React.createElement("button", _extends$1({
    "data-test": "DesignSystem-Button",
    ref: ref,
    type: type,
    className: buttonClass,
    disabled: disabled || loading,
    tabIndex: tabIndex
  }, rest), loading ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Spinner, {
    size: "small",
    appearance: appearance === 'basic' || appearance === 'transparent' ? 'secondary' : 'white',
    "data-test": "DesignSystem-Button--Spinner",
    className: "Next-Button-spinner"
  }), /*#__PURE__*/React.createElement(Text, {
    className: "Next-Button-text Next-Button-text--hidden"
  }, children || '')) : /*#__PURE__*/React.createElement(React.Fragment, null, iconOptions && (iconOptions === null || iconOptions === void 0 ? void 0 : iconOptions.name) && /*#__PURE__*/React.createElement("div", {
    className: iconClass
  }, /*#__PURE__*/React.createElement(Icon, {
    "data-test": "DesignSystem-Button--Icon",
    name: iconOptions === null || iconOptions === void 0 ? void 0 : iconOptions.name,
    appearance: disabled ? 'disabled' : appearance === 'basic' || appearance === 'transparent' ? selected ? 'info' : 'default' : 'white',
    size: iconOptions !== null && iconOptions !== void 0 && iconOptions.isLarge && !children ? sizeMapping[size] + 4 : sizeMapping[size]
  })), children));
});
ButtonElement.displayName = '';
var Button = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var iconOptions = props.iconOptions,
      children = props.children;
  return iconOptions !== null && iconOptions !== void 0 && iconOptions.name && iconOptions !== null && iconOptions !== void 0 && iconOptions.tooltip && !children ? /*#__PURE__*/React.createElement(Tooltip, {
    tooltip: iconOptions === null || iconOptions === void 0 ? void 0 : iconOptions.tooltip
  }, /*#__PURE__*/React.createElement(ButtonElement, _extends$1({}, props, {
    ref: ref
  }))) : /*#__PURE__*/React.createElement(ButtonElement, _extends$1({}, props, {
    ref: ref
  }));
});
Button.displayName = 'Button';

var Spinner = function Spinner(props) {
  var appearance = props.appearance,
      size = props.size,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var wrapperClasses = classnames(_defineProperty({
    Spinner: true
  }, "Spinner--".concat(size), size), className);
  var circleClasses = classnames(_defineProperty({
    Circle: true
  }, "Circle--".concat(appearance), appearance));
  var svgProps = {
    viewBox: '0 0 50 50'
  };
  var circleProps = {
    cx: 25,
    cy: 25,
    r: 20,
    fill: 'none',
    strokeMiterlimit: '10',
    strokeWidth: '4'
  };
  return /*#__PURE__*/React.createElement("svg", _extends$1({}, baseProps, {
    className: wrapperClasses
  }, svgProps), /*#__PURE__*/React.createElement("circle", _extends$1({
    className: circleClasses
  }, circleProps)));
};
Spinner.displayName = 'Spinner';
Spinner.defaultProps = {
  appearance: 'primary',
  size: 'medium'
};

function getSide(placement) {
  return placement.split('-')[0];
}

function getAlignment(placement) {
  return placement.split('-')[1];
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].includes(getSide(placement)) ? 'x' : 'y';
}

function getLengthFromAxis(axis) {
  return axis === 'y' ? 'height' : 'width';
}

function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  const commonAlign = reference[length] / 2 - floating[length] / 2;
  const side = getSide(placement);
  const isVertical = mainAxis === 'x';
  let coords;

  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;

    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;

    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }

  switch (getAlignment(placement)) {
    case 'start':
      coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;

    case 'end':
      coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }

  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain positioning strategy.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */

const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));

  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};

  for (let i = 0; i < middleware.length; i++) {

    const {
      name,
      fn
    } = middleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = { ...middlewareData,
      [name]: { ...middlewareData[name],
        ...data
      }
    };

    if (reset) {
      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }

        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }

        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }

      i = -1;
      continue;
    }
  }

  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};

function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}

function getSideObjectFromPadding(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}

function rectToClientRect(rect) {
  return { ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
async function detectOverflow(middlewareArguments, options) {
  var _await$platform$isEle;

  if (options === void 0) {
    options = {};
  }

  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = middlewareArguments;
  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0
  } = options;
  const paddingObject = getSideObjectFromPadding(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: elementContext === 'floating' ? { ...rects.floating,
      x,
      y
    } : rects.reference,
    offsetParent: await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating)),
    strategy
  }) : rects[elementContext]); // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  return {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
}

const min$1 = Math.min;
const max$1 = Math.max;

function within(min$1$1, value, max$1$1) {
  return max$1(min$1$1, min$1(value, max$1$1));
}

const hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, matched => hash$1[matched]);
}

function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }

  const alignment = getAlignment(placement);
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  let mainAlignmentSide = mainAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';

  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }

  return {
    main: mainAlignmentSide,
    cross: getOppositePlacement(mainAlignmentSide)
  };
}

const hash = {
  start: 'end',
  end: 'start'
};
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, matched => hash[matched]);
}

function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}

/**
 * Changes the placement of the floating element to one that will fit if the
 * initially specified `placement` does not.
 * @see https://floating-ui.com/docs/flip
 */
const flip = function (options) {
  if (options === void 0) {
    options = {};
  }

  return {
    name: 'flip',
    options,

    async fn(middlewareArguments) {
      var _middlewareData$flip;

      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = middlewareArguments;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = 'bestFit',
        flipAlignment = true,
        ...detectOverflowOptions
      } = options;
      const side = getSide(placement);
      const isBasePlacement = side === initialPlacement;
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];

      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }

      if (checkCrossAxis) {
        const {
          main,
          cross
        } = getAlignmentSides(placement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));
        overflows.push(overflow[main], overflow[cross]);
      }

      overflowsData = [...overflowsData, {
        placement,
        overflows
      }]; // One or more sides is overflowing

      if (!overflows.every(side => side <= 0)) {
        var _middlewareData$flip$, _middlewareData$flip2;

        const nextIndex = ((_middlewareData$flip$ = (_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) != null ? _middlewareData$flip$ : 0) + 1;
        const nextPlacement = placements[nextIndex];

        if (nextPlacement) {
          // Try next placement and re-run the lifecycle
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }

        let resetPlacement = 'bottom';

        switch (fallbackStrategy) {
          case 'bestFit':
            {
              var _overflowsData$map$so;

              const placement = (_overflowsData$map$so = overflowsData.map(d => [d, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0].placement;

              if (placement) {
                resetPlacement = placement;
              }

              break;
            }

          case 'initialPlacement':
            resetPlacement = initialPlacement;
            break;
        }

        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }

      return {};
    }

  };
};

function convertValueToCoords(placement, rects, value, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }

  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getMainAxisFromPlacement(placement) === 'x';
  const mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = typeof value === 'function' ? value({ ...rects,
    placement
  }) : value; // eslint-disable-next-line prefer-const

  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === 'number' ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };

  if (alignment && typeof alignmentAxis === 'number') {
    crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
  }

  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
/**
 * Displaces the floating element from its reference element.
 * @see https://floating-ui.com/docs/offset
 */

const offset = function (value) {
  if (value === void 0) {
    value = 0;
  }

  return {
    name: 'offset',
    options: value,

    async fn(middlewareArguments) {
      const {
        x,
        y,
        placement,
        rects,
        platform,
        elements
      } = middlewareArguments;
      const diffCoords = convertValueToCoords(placement, rects, value, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: diffCoords
      };
    }

  };
};

function getCrossAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

/**
 * Shifts the floating element in order to keep it in view when it will overflow
 * a clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = function (options) {
  if (options === void 0) {
    options = {};
  }

  return {
    name: 'shift',
    options,

    async fn(middlewareArguments) {
      const {
        x,
        y,
        placement
      } = middlewareArguments;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: _ref => {
            let {
              x,
              y
            } = _ref;
            return {
              x,
              y
            };
          }
        },
        ...detectOverflowOptions
      } = options;
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const mainAxis = getMainAxisFromPlacement(getSide(placement));
      const crossAxis = getCrossAxis(mainAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];

      if (checkMainAxis) {
        const minSide = mainAxis === 'y' ? 'top' : 'left';
        const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
        const min = mainAxisCoord + overflow[minSide];
        const max = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = within(min, mainAxisCoord, max);
      }

      if (checkCrossAxis) {
        const minSide = crossAxis === 'y' ? 'top' : 'left';
        const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
        const min = crossAxisCoord + overflow[minSide];
        const max = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = within(min, crossAxisCoord, max);
      }

      const limitedCoords = limiter.fn({ ...middlewareArguments,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return { ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }

  };
};

function isWindow(value) {
  return value && value.document && value.location && value.alert && value.setInterval;
}
function getWindow$1(node) {
  if (node == null) {
    return window;
  }

  if (!isWindow(node)) {
    const ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function getComputedStyle$1(element) {
  return getWindow$1(element).getComputedStyle(element);
}

function getNodeName(node) {
  return isWindow(node) ? '' : node ? (node.nodeName || '').toLowerCase() : '';
}

function isHTMLElement$1(value) {
  return value instanceof getWindow$1(value).HTMLElement;
}
function isElement$1(value) {
  return value instanceof getWindow$1(value).Element;
}
function isNode(value) {
  return value instanceof getWindow$1(value).Node;
}
function isShadowRoot(node) {
  // Browsers without `ShadowRoot` support
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  const OwnElement = getWindow$1(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function isOverflowElement(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  const {
    overflow,
    overflowX,
    overflowY
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function isTableElement(element) {
  return ['table', 'td', 'th'].includes(getNodeName(element));
}
function isContainingBlock(element) {
  // TODO: Try and use feature detection here instead
  const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');
  const css = getComputedStyle$1(element); // This is non-exhaustive but covers the most common CSS properties that
  // create a containing block.
  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

  return css.transform !== 'none' || css.perspective !== 'none' || // @ts-ignore (TS 4.1 compat)
  css.contain === 'paint' || ['transform', 'perspective'].includes(css.willChange) || isFirefox && css.willChange === 'filter' || isFirefox && (css.filter ? css.filter !== 'none' : false);
}
function isLayoutViewport() {
  // Not Safari
  return !/^((?!chrome|android).)*safari/i.test(navigator.userAgent); // Feature detection for this fails in various ways
  // • Always-visible scrollbar or not
  // • Width of <html>, etc.
  // const vV = win.visualViewport;
  // return vV ? Math.abs(win.innerWidth / vV.scale - vV.width) < 0.5 : true;
}

const min = Math.min;
const max = Math.max;
const round = Math.round;

function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  var _win$visualViewport$o, _win$visualViewport, _win$visualViewport$o2, _win$visualViewport2;

  if (includeScale === void 0) {
    includeScale = false;
  }

  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }

  const clientRect = element.getBoundingClientRect();
  let scaleX = 1;
  let scaleY = 1;

  if (includeScale && isHTMLElement$1(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }

  const win = isElement$1(element) ? getWindow$1(element) : window;
  const addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  const x = (clientRect.left + (addVisualOffsets ? (_win$visualViewport$o = (_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) != null ? _win$visualViewport$o : 0 : 0)) / scaleX;
  const y = (clientRect.top + (addVisualOffsets ? (_win$visualViewport$o2 = (_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) != null ? _win$visualViewport$o2 : 0 : 0)) / scaleY;
  const width = clientRect.width / scaleX;
  const height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}

function getDocumentElement(node) {
  return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
}

function getNodeScroll(element) {
  if (isElement$1(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }

  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}

function isScaled(element) {
  const rect = getBoundingClientRect(element);
  return round(rect.width) !== element.offsetWidth || round(rect.height) !== element.offsetHeight;
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement$1(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const rect = getBoundingClientRect(element, // @ts-ignore - checked above (TS 4.1 compat)
  isOffsetParentAnElement && isScaled(offsetParent), strategy === 'fixed');
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement$1(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // @ts-ignore
    node.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    node.parentNode || ( // DOM Element detected
    isShadowRoot(node) ? node.host : null) || // ShadowRoot detected
    getDocumentElement(node) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement$1(element) || getComputedStyle(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
}

function getContainingBlock(element) {
  let currentNode = getParentNode(element);

  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }

  while (isHTMLElement$1(currentNode) && !['html', 'body'].includes(getNodeName(currentNode))) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  const window = getWindow$1(element);
  let offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static' && !isContainingBlock(offsetParent))) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getDimensions(element) {
  if (isHTMLElement$1(element)) {
    return {
      width: element.offsetWidth,
      height: element.offsetHeight
    };
  }

  const rect = getBoundingClientRect(element);
  return {
    width: rect.width,
    height: rect.height
  };
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement$1(offsetParent);
  const documentElement = getDocumentElement(offsetParent);

  if (offsetParent === documentElement) {
    return rect;
  }

  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement$1(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } // This doesn't appear to be need to be negated.
    // else if (documentElement) {
    //   offsets.x = getWindowScrollBarX(documentElement);
    // }

  }

  return { ...rect,
    x: rect.x - scroll.scrollLeft + offsets.x,
    y: rect.y - scroll.scrollTop + offsets.y
  };
}

function getViewportRect(element, strategy) {
  const win = getWindow$1(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const layoutViewport = isLayoutViewport();

    if (layoutViewport || !layoutViewport && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width,
    height,
    x,
    y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  const width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  const height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;

  if (getComputedStyle$1(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width,
    height,
    x,
    y
  };
}

function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);

  if (['html', 'body', '#document'].includes(getNodeName(parentNode))) {
    // @ts-ignore assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement$1(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }

  return getNearestOverflowAncestor(parentNode);
}

function getOverflowAncestors(node, list) {
  var _node$ownerDocument;

  if (list === void 0) {
    list = [];
  }

  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
  const win = getWindow$1(scrollableAncestor);
  const target = isBody ? [win].concat(win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []) : scrollableAncestor;
  const updatedList = list.concat(target);
  return isBody ? updatedList : // @ts-ignore: isBody tells us target will be an HTMLElement here
  updatedList.concat(getOverflowAncestors(target));
}

function contains(parent, child) {
  const rootNode = child == null ? void 0 : child.getRootNode == null ? void 0 : child.getRootNode(); // First, attempt with faster native method

  if (parent != null && parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
    let next = child;

    do {
      // use `===` replace node.isSameNode()
      if (next && parent === next) {
        return true;
      } // @ts-ignore: need a better way to handle this...


      next = next.parentNode || next.host;
    } while (next);
  }

  return false;
}

function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, false, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  return {
    top,
    left,
    x: left,
    y: top,
    right: left + element.clientWidth,
    bottom: top + element.clientHeight,
    width: element.clientWidth,
    height: element.clientHeight
  };
}

function getClientRectFromClippingAncestor(element, clippingParent, strategy) {
  if (clippingParent === 'viewport') {
    return rectToClientRect(getViewportRect(element, strategy));
  }

  if (isElement$1(clippingParent)) {
    return getInnerBoundingClientRect(clippingParent, strategy);
  }

  return rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping ancestor" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingAncestors(element) {
  const clippingAncestors = getOverflowAncestors(element);
  const canEscapeClipping = ['absolute', 'fixed'].includes(getComputedStyle$1(element).position);
  const clipperElement = canEscapeClipping && isHTMLElement$1(element) ? getOffsetParent(element) : element;

  if (!isElement$1(clipperElement)) {
    return [];
  } // @ts-ignore isElement check ensures we return Array<Element>


  return clippingAncestors.filter(clippingAncestors => isElement$1(clippingAncestors) && contains(clippingAncestors, clipperElement) && getNodeName(clippingAncestors) !== 'body');
} // Gets the maximum area that the element is visible in due to any number of
// clipping ancestors


function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const mainClippingAncestors = boundary === 'clippingAncestors' ? getClippingAncestors(element) : [].concat(boundary);
  const clippingAncestors = [...mainClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}

const platform = {
  getClippingRect,
  convertOffsetParentRelativeRectToViewportRelativeRect,
  isElement: isElement$1,
  getDimensions,
  getOffsetParent,
  getDocumentElement,
  getElementRects: _ref => {
    let {
      reference,
      floating,
      strategy
    } = _ref;
    return {
      reference: getRectRelativeToOffsetParent(reference, getOffsetParent(floating), strategy),
      floating: { ...getDimensions(floating),
        x: 0,
        y: 0
      }
    };
  },
  getClientRects: element => Array.from(element.getClientRects()),
  isRTL: element => getComputedStyle$1(element).direction === 'rtl'
};

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain CSS positioning
 * strategy.
 */

const computePosition = (reference, floating, options) => computePosition$1(reference, floating, {
  platform,
  ...options
});

var index$1 = typeof document !== 'undefined' ? useLayoutEffect : useEffect;

// Fork of `fast-deep-equal` that only does the comparisons we need and compares
// functions
// @ts-nocheck
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (typeof a !== typeof b) {
    return false;
  }

  if (typeof a === 'function' && a.toString() === b.toString()) {
    return true;
  }

  let length, i, keys;

  if (a && b && typeof a == 'object') {
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }

      return true;
    }

    keys = Object.keys(a);
    length = keys.length;

    if (length !== Object.keys(b).length) {
      return false;
    }

    for (i = length; i-- !== 0;) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }

    for (i = length; i-- !== 0;) {
      const key = keys[i];

      if (key === '_owner' && a.$$typeof) {
        continue;
      }

      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }

    return true;
  }

  return a !== a && b !== b;
}

function useFloating$1(_temp) {
  let {
    middleware,
    placement = 'bottom',
    strategy = 'absolute'
  } = _temp === void 0 ? {} : _temp;
  const reference = useRef(null);
  const floating = useRef(null);
  const [data, setData] = useState({
    // Setting these to `null` will allow the consumer to determine if
    // `computePosition()` has run yet
    x: null,
    y: null,
    strategy,
    placement,
    middlewareData: {}
  });
  const [latestMiddleware, setLatestMiddleware] = useState(middleware);

  if (!deepEqual(latestMiddleware == null ? void 0 : latestMiddleware.map(_ref => {
    let {
      options
    } = _ref;
    return options;
  }), middleware == null ? void 0 : middleware.map(_ref2 => {
    let {
      options
    } = _ref2;
    return options;
  }))) {
    setLatestMiddleware(middleware);
  }

  const isMountedRef = useRef(true);
  index$1(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  const update = useCallback(() => {
    if (!reference.current || !floating.current) {
      return;
    }

    computePosition(reference.current, floating.current, {
      middleware: latestMiddleware,
      placement,
      strategy
    }).then(data => {
      if (isMountedRef.current) {
        flushSync(() => {
          setData(data);
        });
      }
    });
  }, [latestMiddleware, placement, strategy]);
  index$1(update, [update]);
  const setReference = useCallback(node => {
    reference.current = node;
    update();
  }, [update]);
  const setFloating = useCallback(node => {
    floating.current = node;
    update();
  }, [update]);
  const refs = useMemo(() => ({
    reference,
    floating
  }), []);
  return useMemo(() => ({ ...data,
    update,
    refs,
    reference: setReference,
    floating: setFloating
  }), [data, update, refs, setReference, setFloating]);
}

var getDefaultParent = function (originalTarget) {
    if (typeof document === 'undefined') {
        return null;
    }
    var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
    return sampleTarget.ownerDocument.body;
};
var counterMap = new WeakMap();
var uncontrolledNodes = new WeakMap();
var markerMap = {};
var lockCount = 0;
var hideOthers = function (originalTarget, parentNode, markerName) {
    if (parentNode === void 0) { parentNode = getDefaultParent(originalTarget); }
    if (markerName === void 0) { markerName = "data-aria-hidden"; }
    var targets = Array.isArray(originalTarget) ? originalTarget : [originalTarget];
    if (!markerMap[markerName]) {
        markerMap[markerName] = new WeakMap();
    }
    var markerCounter = markerMap[markerName];
    var hiddenNodes = [];
    var elementsToKeep = new Set();
    var keep = (function (el) {
        if (!el || elementsToKeep.has(el)) {
            return;
        }
        elementsToKeep.add(el);
        keep(el.parentNode);
    });
    targets.forEach(keep);
    var deep = function (parent) {
        if (!parent || targets.indexOf(parent) >= 0) {
            return;
        }
        Array.prototype.forEach.call(parent.children, function (node) {
            if (elementsToKeep.has(node)) {
                deep(node);
            }
            else {
                var attr = node.getAttribute('aria-hidden');
                var alreadyHidden = attr !== null && attr !== 'false';
                var counterValue = (counterMap.get(node) || 0) + 1;
                var markerValue = (markerCounter.get(node) || 0) + 1;
                counterMap.set(node, counterValue);
                markerCounter.set(node, markerValue);
                hiddenNodes.push(node);
                if (counterValue === 1 && alreadyHidden) {
                    uncontrolledNodes.set(node, true);
                }
                if (markerValue === 1) {
                    node.setAttribute(markerName, 'true');
                }
                if (!alreadyHidden) {
                    node.setAttribute('aria-hidden', 'true');
                }
            }
        });
    };
    deep(parentNode);
    elementsToKeep.clear();
    lockCount++;
    return function () {
        hiddenNodes.forEach(function (node) {
            var counterValue = counterMap.get(node) - 1;
            var markerValue = markerCounter.get(node) - 1;
            counterMap.set(node, counterValue);
            markerCounter.set(node, markerValue);
            if (!counterValue) {
                if (!uncontrolledNodes.has(node)) {
                    node.removeAttribute('aria-hidden');
                }
                uncontrolledNodes.delete(node);
            }
            if (!markerValue) {
                node.removeAttribute(markerName);
            }
        });
        lockCount--;
        if (!lockCount) {
            counterMap = new WeakMap();
            counterMap = new WeakMap();
            uncontrolledNodes = new WeakMap();
            markerMap = {};
        }
    };
};

var index = typeof document !== 'undefined' ? useLayoutEffect : useEffect;

function createPubSub() {
  const map = new Map();
  return {
    emit(event, data) {
      var _map$get;

      (_map$get = map.get(event)) == null ? void 0 : _map$get.forEach(handler => handler(data));
    },

    on(event, listener) {
      map.set(event, [...(map.get(event) || []), listener]);
    },

    off(event, listener) {
      map.set(event, (map.get(event) || []).filter(l => l !== listener));
    }

  };
}

let serverHandoffComplete = false;
let count = 0;

const genId = () => "floating-ui-" + count++;

function useFloatingId() {
  const [id, setId] = React.useState(() => serverHandoffComplete ? genId() : undefined);
  index(() => {
    if (id == null) {
      setId(genId());
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  React.useEffect(() => {
    if (!serverHandoffComplete) {
      serverHandoffComplete = true;
    }
  }, []);
  return id;
} // `toString()` prevents bundlers from trying to `import { useId } from 'react'`


const useReactId = React[/*#__PURE__*/'useId'.toString()];
/**
 * Uses React 18's built-in `useId()` when available, or falls back to a
 * slightly less performant (requiring a double render) implementation for
 * earlier React versions.
 * @see https://floating-ui.com/docs/useId
 */

const useId = useReactId != null ? useReactId : useFloatingId;
const FloatingTreeContext = /*#__PURE__*/React.createContext(null);
const useFloatingTree = () => React.useContext(FloatingTreeContext);

function mergeProps(userProps, propsList, elementKey) {
  const fnsMap = {};
  return { ...(elementKey === 'floating' && {
      tabIndex: -1
    }),
    ...userProps,
    ...propsList.map(value => value ? value[elementKey] : null).concat(userProps).reduce((acc, props) => {
      if (!props) {
        return acc;
      }

      Object.entries(props).forEach(_ref => {
        let [key, value] = _ref;

        if (key.indexOf('on') === 0) {
          if (!fnsMap[key]) {
            fnsMap[key] = [];
          }

          if (typeof value === 'function') {
            fnsMap[key].push(value);
          }

          acc[key] = function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            fnsMap[key].forEach(fn => fn(...args));
          };
        } else {
          acc[key] = value;
        }
      });
      return acc;
    }, {})
  };
}

const useInteractions = function (propsList) {
  if (propsList === void 0) {
    propsList = [];
  }

  return {
    getReferenceProps: userProps => mergeProps(userProps, propsList, 'reference'),
    getFloatingProps: userProps => mergeProps(userProps, propsList, 'floating'),
    getItemProps: userProps => mergeProps(userProps, propsList, 'item')
  };
};

function getDocument(floating) {
  var _floating$ownerDocume;

  return (_floating$ownerDocume = floating == null ? void 0 : floating.ownerDocument) != null ? _floating$ownerDocume : document;
}

function getWindow(value) {
  var _getDocument$defaultV;

  return (_getDocument$defaultV = getDocument(value).defaultView) != null ? _getDocument$defaultV : window;
}

function isElement(value) {
  return value ? value instanceof getWindow(value).Element : false;
}
function isHTMLElement(value) {
  return value ? value instanceof getWindow(value).HTMLElement : false;
}

function getChildren(tree, id) {
  var _tree$nodesRef$curren;

  let allChildren = (_tree$nodesRef$curren = tree == null ? void 0 : tree.nodesRef.current.filter(node => {
    var _node$context;

    return node.parentId === id && ((_node$context = node.context) == null ? void 0 : _node$context.open);
  })) != null ? _tree$nodesRef$curren : [];
  let currentChildren = allChildren;

  while (currentChildren.length) {
    var _tree$nodesRef$curren2;

    currentChildren = (_tree$nodesRef$curren2 = tree == null ? void 0 : tree.nodesRef.current.filter(node => {
      var _currentChildren;

      return (_currentChildren = currentChildren) == null ? void 0 : _currentChildren.some(n => {
        var _node$context2;

        return node.parentId === n.id && ((_node$context2 = node.context) == null ? void 0 : _node$context2.open);
      });
    })) != null ? _tree$nodesRef$curren2 : [];
    allChildren = allChildren.concat(currentChildren);
  }

  return allChildren;
}

const DEFAULT_ID = 'floating-ui-root';
/**
 * Portals your floating element outside of the main app node.
 * @see https://floating-ui.com/docs/FloatingPortal
 */

const FloatingPortal = _ref => {
  let {
    children,
    id = DEFAULT_ID,
    root = null
  } = _ref;
  const [mounted, setMounted] = React.useState(false);
  const portalRef = React.useRef(null);
  index(() => {
    if (root) {
      return;
    }

    const rootNode = document.getElementById(id);

    if (rootNode) {
      portalRef.current = rootNode;
    } else {
      portalRef.current = document.createElement('div');
      portalRef.current.id = id;
    }

    if (!document.body.contains(portalRef.current)) {
      document.body.appendChild(portalRef.current);
    }

    setMounted(true);
  }, [id, root]);

  if (root) {
    return /*#__PURE__*/createPortal(children, root);
  }

  if (mounted && portalRef.current) {
    return /*#__PURE__*/createPortal(children, portalRef.current);
  }

  return null;
};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/**
 * Find the real active element. Traverses into shadowRoots.
 */
function activeElement(doc) {
  let activeElement = doc.activeElement;

  while (((_activeElement = activeElement) == null ? void 0 : (_activeElement$shadow = _activeElement.shadowRoot) == null ? void 0 : _activeElement$shadow.activeElement) != null) {
    var _activeElement, _activeElement$shadow;

    activeElement = activeElement.shadowRoot.activeElement;
  }

  return activeElement;
}

function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}

function useLatestRef(value) {
  const ref = useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}

function focus(el) {
  requestAnimationFrame(() => {
    el == null ? void 0 : el.focus();
  });
}

const SELECTOR = "input:not([type='hidden']):not([disabled]),select:not([disabled])," + 'textarea:not([disabled]),a[href],button:not([disabled]),[tabindex],' + 'iframe,object,embed,area[href],audio[controls],video[controls],' + "[contenteditable]:not([contenteditable='false'])";
const FocusGuard = /*#__PURE__*/React.forwardRef(function FocusGuard(props, ref) {
  return /*#__PURE__*/React.createElement("span", _extends({}, props, {
    ref: ref,
    tabIndex: 0,
    style: {
      position: 'fixed',
      opacity: '0',
      pointerEvents: 'none',
      outline: '0'
    }
  }));
});

/**
 * Provides focus management for the floating element.
 * @see https://floating-ui.com/docs/FloatingFocusManager
 */
function FloatingFocusManager(_ref) {
  let {
    context: {
      refs,
      nodeId,
      onOpenChange
    },
    children,
    order = ['content'],
    endGuard = true,
    preventTabbing = false,
    initialFocus = 0,
    returnFocus = true,
    modal = true
  } = _ref;
  const orderRef = useLatestRef(order);
  const onOpenChangeRef = useLatestRef(onOpenChange);
  const tree = useFloatingTree();
  const getTabbableElements = React.useCallback(() => {
    return orderRef.current.map(type => {
      if (isHTMLElement(refs.reference.current) && type === 'reference') {
        return refs.reference.current;
      }

      if (refs.floating.current && type === 'floating') {
        return refs.floating.current;
      }

      if (type === 'content') {
        var _refs$floating$curren, _refs$floating$curren2;

        return Array.from((_refs$floating$curren = (_refs$floating$curren2 = refs.floating.current) == null ? void 0 : _refs$floating$curren2.querySelectorAll(SELECTOR)) != null ? _refs$floating$curren : []);
      }

      return null;
    }).flat().filter(el => {
      if (el === refs.floating.current || el === refs.reference.current) {
        return true;
      }

      if (isHTMLElement(el)) {
        var _el$getAttribute;

        const tabIndex = (_el$getAttribute = el.getAttribute('tabindex')) != null ? _el$getAttribute : '0';
        return tabIndex[0].trim() !== '-';
      }
    });
  }, [orderRef, refs.floating, refs.reference]);
  React.useEffect(() => {
    // If the floating element has no focusable elements inside it, fallback
    // to focusing the floating element and preventing tab navigation
    const noTabbableContentElements = getTabbableElements().filter(el => el !== refs.floating.current && // @ts-expect-error
    el !== refs.reference.current).length === 0;

    function onKeyDown(event) {
      if (event.key === 'Tab') {
        if (preventTabbing || noTabbableContentElements) {
          stopEvent(event);
        }

        const els = getTabbableElements();
        const target = 'composedPath' in event ? event.composedPath()[0] : // TS thinks `event` is of type never as it assumes all browsers support composedPath, but browsers without shadow dom don't
        event.target;

        if (orderRef.current[0] === 'reference' && target === refs.reference.current) {
          stopEvent(event);

          if (event.shiftKey) {
            focus(els[els.length - 1]);
          } else {
            focus(els[1]);
          }
        }

        if (orderRef.current[1] === 'floating' && target === refs.floating.current && event.shiftKey) {
          stopEvent(event);
          focus(els[0]);
        }
      }
    }

    const doc = getDocument(refs.floating.current);
    doc.addEventListener('keydown', onKeyDown);
    return () => {
      doc.removeEventListener('keydown', onKeyDown);
    };
  }, [preventTabbing, getTabbableElements, orderRef, refs.floating, refs.reference]);
  React.useEffect(() => {
    function onFloatingFocusOut(event) {
      var _refs$floating$curren3;

      const target = event.relatedTarget;

      if (!((_refs$floating$curren3 = refs.floating.current) != null && _refs$floating$curren3.contains(target)) && isElement(refs.reference.current) && !refs.reference.current.contains(target) && !(tree && getChildren(tree, nodeId).some(child => {
        var _child$context, _child$context$refs$f;

        return (_child$context = child.context) == null ? void 0 : (_child$context$refs$f = _child$context.refs.floating.current) == null ? void 0 : _child$context$refs$f.contains(target);
      }))) {
        onOpenChangeRef.current(false);
      }
    }

    const floating = refs.floating.current;
    const reference = refs.reference.current;

    if (floating && isHTMLElement(reference)) {
      !modal && floating.addEventListener('focusout', onFloatingFocusOut);
      const cleanup = modal ? hideOthers(floating) : null;
      return () => {
        !modal && floating.removeEventListener('focusout', onFloatingFocusOut);
        cleanup == null ? void 0 : cleanup();
      };
    }
  }, [nodeId, tree, modal, onOpenChangeRef, getTabbableElements, initialFocus, refs.floating, refs.reference]);
  React.useEffect(() => {
    var _activeElement;

    if (preventTabbing) {
      return;
    }

    const floating = refs.floating.current;
    const previouslyFocusedElement = (_activeElement = activeElement(getDocument(floating))) != null ? _activeElement : activeElement(document);

    if (typeof initialFocus === 'number') {
      var _getTabbableElements$;

      focus((_getTabbableElements$ = getTabbableElements()[initialFocus]) != null ? _getTabbableElements$ : floating);
    } else if (isHTMLElement(initialFocus == null ? void 0 : initialFocus.current)) {
      var _initialFocus$current;

      focus((_initialFocus$current = initialFocus.current) != null ? _initialFocus$current : floating);
    }

    return () => {
      if (returnFocus && isHTMLElement(previouslyFocusedElement)) {
        focus(previouslyFocusedElement);
      }
    };
  }, [preventTabbing, getTabbableElements, initialFocus, modal, returnFocus, refs.floating]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, modal && /*#__PURE__*/React.createElement(FocusGuard, {
    onFocus: event => {
      stopEvent(event);
      const els = getTabbableElements();

      if (order[0] === 'reference') {
        focus(els[0]);
      } else {
        focus(els[els.length - 1]);
      }
    }
  }), /*#__PURE__*/React.cloneElement(children, order.includes('floating') ? {
    tabIndex: 0
  } : {}), modal && endGuard && /*#__PURE__*/React.createElement(FocusGuard, {
    onFocus: event => {
      stopEvent(event);
      focus(getTabbableElements()[0]);
    }
  }));
}

function getDelay(value, prop, pointerType) {
  if (pointerType && pointerType !== 'mouse') {
    return 0;
  }

  if (typeof value === 'number') {
    return value;
  }

  return value == null ? void 0 : value[prop];
}

/**
 * Adds hover event listeners that change the open state, like CSS :hover.
 * @see https://floating-ui.com/docs/useHover
 */
const useHover = function (context, _temp) {
  let {
    enabled = true,
    delay = 0,
    handleClose = null,
    mouseOnly = false,
    restMs = 0
  } = _temp === void 0 ? {} : _temp;
  const {
    open,
    onOpenChange,
    dataRef,
    events,
    refs
  } = context;
  const tree = useFloatingTree();
  const onOpenChangeRef = useLatestRef(onOpenChange);
  const handleCloseRef = useLatestRef(handleClose);
  const pointerTypeRef = React.useRef();
  const timeoutRef = React.useRef();
  const handlerRef = React.useRef();
  const restTimeoutRef = React.useRef();
  const blockMouseMoveRef = React.useRef(true);
  index(() => {
    if (!enabled) {
      return;
    }

    if (!open) {
      pointerTypeRef.current = undefined;
    }
  });
  React.useEffect(() => {
    if (!enabled) {
      return;
    }

    function onDismiss() {
      clearTimeout(timeoutRef.current);
      clearTimeout(restTimeoutRef.current);
      blockMouseMoveRef.current = true;
    }

    events.on('dismiss', onDismiss);
    return () => {
      events.off('dismiss', onDismiss);
    };
  }, [enabled, events, refs.floating]);
  React.useEffect(() => {
    if (!enabled || !handleCloseRef.current) {
      return;
    }

    function onLeave() {
      var _dataRef$current$open;

      if ((_dataRef$current$open = dataRef.current.openEvent) != null && _dataRef$current$open.type.includes('mouse')) {
        onOpenChangeRef.current(false);
      }
    }

    const html = getDocument(refs.floating.current).documentElement;
    html.addEventListener('mouseleave', onLeave);
    return () => {
      html.removeEventListener('mouseleave', onLeave);
    };
  }, [refs.floating, onOpenChangeRef, enabled, handleCloseRef, dataRef]);
  const closeWithDelay = React.useCallback(function (runElseBranch) {
    if (runElseBranch === void 0) {
      runElseBranch = true;
    }

    if (delay && !handlerRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => onOpenChangeRef.current(false), getDelay(delay, 'close', pointerTypeRef.current));
    } else if (runElseBranch) {
      onOpenChangeRef.current(false);
    }
  }, [delay, onOpenChangeRef]);
  const cleanupPointerMoveHandler = React.useCallback(() => {
    if (handlerRef.current) {
      getDocument(refs.floating.current).removeEventListener('pointermove', handlerRef.current);
      handlerRef.current = undefined;
    }
  }, [refs.floating]);
  React.useEffect(() => {
    if (!open) {
      cleanupPointerMoveHandler();
    }
  }, [open, enabled, cleanupPointerMoveHandler]); // Registering the mouse events on the reference directly to bypass React's
  // delegation system. If the cursor was on a disabled element and then entered
  // the reference (no gap), `mouseenter` doesn't fire in the delegation system.

  React.useEffect(() => {
    if (!enabled) {
      return;
    }

    function onMouseEnter(event) {
      clearTimeout(timeoutRef.current);
      blockMouseMoveRef.current = false;

      if (open || mouseOnly && pointerTypeRef.current !== 'mouse' || restMs > 0 && getDelay(delay, 'open') === 0) {
        return;
      }

      dataRef.current.openEvent = event;

      if (delay) {
        timeoutRef.current = setTimeout(() => {
          onOpenChangeRef.current(true);
        }, getDelay(delay, 'open', pointerTypeRef.current));
      } else {
        onOpenChangeRef.current(true);
      }
    }

    function onMouseLeave(event) {
      var _dataRef$current$open2, _dataRef$current$open3;

      if (((_dataRef$current$open2 = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open2.type) === 'click' || ((_dataRef$current$open3 = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open3.type) === 'pointerdown') {
        return;
      }

      const doc = getDocument(refs.floating.current);
      clearTimeout(restTimeoutRef.current);

      if (handleCloseRef.current) {
        clearTimeout(timeoutRef.current);
        handlerRef.current && doc.removeEventListener('pointermove', handlerRef.current);
        handlerRef.current = handleCloseRef.current({ ...context,
          tree,
          x: event.clientX,
          y: event.clientY,

          onClose() {
            cleanupPointerMoveHandler();
            closeWithDelay();
          }

        });
        doc.addEventListener('pointermove', handlerRef.current);
        return;
      }

      closeWithDelay();
    }

    const reference = refs.reference.current;

    if (isElement(reference)) {
      reference.addEventListener('mousemove', onMouseEnter, {
        once: true
      });
      reference.addEventListener('mouseenter', onMouseEnter);
      reference.addEventListener('mouseleave', onMouseLeave);
      return () => {
        reference.removeEventListener('mousemove', onMouseEnter);
        reference.removeEventListener('mouseenter', onMouseEnter);
        reference.removeEventListener('mouseleave', onMouseLeave);
      };
    }
  }, [enabled, closeWithDelay, context, delay, handleCloseRef, dataRef, mouseOnly, onOpenChangeRef, open, tree, restMs, cleanupPointerMoveHandler, refs.reference, refs.floating]);

  if (!enabled) {
    return {};
  }

  function setPointerRef(event) {
    pointerTypeRef.current = event.pointerType;
  }

  return {
    reference: {
      onPointerDown: setPointerRef,
      onPointerEnter: setPointerRef,

      onMouseMove() {
        if (open || restMs === 0) {
          return;
        }

        clearTimeout(restTimeoutRef.current);
        restTimeoutRef.current = setTimeout(() => {
          if (!blockMouseMoveRef.current) {
            onOpenChange(true);
          }
        }, restMs);
      }

    },
    floating: {
      onMouseEnter() {
        clearTimeout(timeoutRef.current);
      },

      onMouseLeave: () => closeWithDelay(false)
    }
  };
};

/**
 * Adds relevant screen reader props for a given element `role`.
 * @see https://floating-ui.com/docs/useRole
 */
const useRole = function (_ref, _temp) {
  let {
    open
  } = _ref;
  let {
    enabled = true,
    role = 'dialog'
  } = _temp === void 0 ? {} : _temp;
  const rootId = useId();
  const referenceId = useId();
  const floatingProps = {
    id: rootId,
    role
  };

  if (!enabled) {
    return {};
  }

  if (role === 'tooltip') {
    return {
      reference: {
        'aria-describedby': open ? rootId : undefined
      },
      floating: floatingProps
    };
  }

  return {
    reference: {
      'aria-expanded': open ? 'true' : 'false',
      'aria-haspopup': role,
      'aria-controls': open ? rootId : undefined,
      ...(role === 'listbox' && {
        role: 'combobox'
      }),
      ...(role === 'menu' && {
        id: referenceId
      })
    },
    floating: { ...floatingProps,
      ...(role === 'menu' && {
        'aria-labelledby': referenceId
      })
    }
  };
};

/**
 * Adds click event listeners that change the open state (toggle behavior).
 * @see https://floating-ui.com/docs/useClick
 */
const useClick = function (_ref, _temp) {
  let {
    open,
    onOpenChange,
    dataRef,
    refs
  } = _ref;
  let {
    enabled = true,
    pointerDown = false,
    toggle = true,
    ignoreMouse = false
  } = _temp === void 0 ? {} : _temp;
  const pointerTypeRef = React.useRef();

  function isButton() {
    return isHTMLElement(refs.reference.current) && refs.reference.current.tagName === 'BUTTON';
  }

  if (!enabled) {
    return {};
  }

  return {
    reference: {
      onPointerDown(event) {
        pointerTypeRef.current = event.pointerType;

        if (pointerTypeRef.current === 'mouse' && ignoreMouse) {
          return;
        }

        if (!pointerDown) {
          return;
        }

        if (open) {
          var _dataRef$current$open;

          if (toggle && ((_dataRef$current$open = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open.type) === 'pointerdown') {
            onOpenChange(false);
          }
        } else {
          onOpenChange(true);
        }

        dataRef.current.openEvent = event.nativeEvent;
      },

      onClick(event) {
        if (pointerDown && pointerTypeRef.current) {
          pointerTypeRef.current = undefined;
          return;
        }

        if (pointerTypeRef.current === 'mouse' && ignoreMouse) {
          return;
        }

        if (open) {
          var _dataRef$current$open2;

          if (toggle && ((_dataRef$current$open2 = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open2.type) === 'click') {
            onOpenChange(false);
          }
        } else {
          onOpenChange(true);
        }

        dataRef.current.openEvent = event.nativeEvent;
      },

      onKeyDown(event) {
        if (isButton()) {
          return;
        }

        if (event.key === ' ') {
          // Prvent scrolling
          event.preventDefault();
        }

        if (event.key === 'Enter') {
          if (open) {
            if (toggle) {
              onOpenChange(false);
            }
          } else {
            onOpenChange(true);
          }
        }
      },

      onKeyUp(event) {
        if (isButton()) {
          return;
        }

        if (event.key === ' ') {
          if (open) {
            if (toggle) {
              onOpenChange(false);
            }
          } else {
            onOpenChange(true);
          }
        }
      }

    }
  };
};

/**
 * Check whether the event.target is within the provided node. Uses event.composedPath if available for custom element support.
 *
 * @param event The event whose target/composedPath to check
 * @param node The node to check against
 * @returns Whether the event.target/composedPath is within the node.
 */
function isEventTargetWithin(event, node) {
  if (node == null) {
    return false;
  }

  if ('composedPath' in event) {
    return event.composedPath().includes(node);
  } // TS thinks `event` is of type never as it assumes all browsers support composedPath, but browsers without shadow dom don't


  const e = event;
  return e.target != null && node.contains(e.target);
}

/**
 * Adds listeners that dismiss (close) the floating element.
 * @see https://floating-ui.com/docs/useDismiss
 */
const useDismiss = function (_ref, _temp) {
  let {
    open,
    onOpenChange,
    refs,
    events,
    nodeId
  } = _ref;
  let {
    enabled = true,
    escapeKey = true,
    outsidePointerDown = true,
    referencePointerDown = false,
    ancestorScroll = false,
    bubbles = true
  } = _temp === void 0 ? {} : _temp;
  const tree = useFloatingTree();
  const onOpenChangeRef = useLatestRef(onOpenChange);
  const isFocusInsideFloating = React.useCallback(() => {
    var _refs$floating$curren;

    return (_refs$floating$curren = refs.floating.current) == null ? void 0 : _refs$floating$curren.contains(activeElement(getDocument(refs.floating.current)));
  }, [refs.floating]);
  const focusReference = React.useCallback(() => {
    if (isHTMLElement(refs.reference.current)) {
      refs.reference.current.focus();
    }
  }, [refs.reference]);
  React.useEffect(() => {
    if (!open || !enabled) {
      return;
    }

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        if (!bubbles && !isFocusInsideFloating()) {
          return;
        }

        events.emit('dismiss');
        onOpenChangeRef.current(false);
        focusReference();
      }
    }

    function onPointerDown(event) {
      const targetIsInsideChildren = tree && getChildren(tree, nodeId).some(node => {
        var _node$context;

        return isEventTargetWithin(event, (_node$context = node.context) == null ? void 0 : _node$context.refs.floating.current);
      });

      if (isEventTargetWithin(event, refs.floating.current) || isElement(refs.reference.current) && isEventTargetWithin(event, refs.reference.current) || targetIsInsideChildren) {
        return;
      }

      if (!bubbles && !isFocusInsideFloating()) {
        return;
      }

      events.emit('dismiss');
      onOpenChangeRef.current(false);
      focusReference();
    }

    function onScroll() {
      onOpenChangeRef.current(false);
    }

    const doc = getDocument(refs.floating.current);
    escapeKey && doc.addEventListener('keydown', onKeyDown); // Use `mousedown` instead of `pointerdown` as it acts more like a click
    // on touch devices than a `touchstart` (which can result in accidental
    // dismissals too easily.)

    outsidePointerDown && doc.addEventListener('mousedown', onPointerDown);
    const ancestors = (ancestorScroll ? [...(isElement(refs.reference.current) ? getOverflowAncestors(refs.reference.current) : []), ...(isElement(refs.floating.current) ? getOverflowAncestors(refs.floating.current) : [])] : []).filter(ancestor => {
      var _doc$defaultView;

      return (// Ignore the visual viewport for scrolling dismissal (allow pinch-zoom)
        ancestor !== ((_doc$defaultView = doc.defaultView) == null ? void 0 : _doc$defaultView.visualViewport)
      );
    });
    ancestors.forEach(ancestor => ancestor.addEventListener('scroll', onScroll, {
      passive: true
    }));
    return () => {
      escapeKey && doc.removeEventListener('keydown', onKeyDown);
      outsidePointerDown && doc.removeEventListener('mousedown', onPointerDown);
      ancestors.forEach(ancestor => ancestor.removeEventListener('scroll', onScroll));
    };
  }, [escapeKey, outsidePointerDown, events, tree, nodeId, open, onOpenChangeRef, focusReference, ancestorScroll, enabled, bubbles, isFocusInsideFloating, refs.floating, refs.reference]);

  if (!enabled) {
    return {};
  }

  return {
    reference: {
      onPointerDown() {
        if (referencePointerDown) {
          events.emit('dismiss');
          onOpenChange(false);
        }
      }

    }
  };
};

function useFloating(_temp) {
  let {
    open = false,
    onOpenChange = () => {},
    placement,
    middleware,
    strategy,
    nodeId
  } = _temp === void 0 ? {} : _temp;
  const tree = useFloatingTree();
  const dataRef = React.useRef({});
  const events = React.useState(() => createPubSub())[0];
  const floating = useFloating$1({
    placement,
    middleware,
    strategy
  });
  const context = React.useMemo(() => ({ ...floating,
    dataRef,
    nodeId,
    events,
    open,
    onOpenChange
  }), [floating, dataRef, nodeId, events, open, onOpenChange]);
  index(() => {
    const node = tree == null ? void 0 : tree.nodesRef.current.find(node => node.id === nodeId);

    if (node) {
      node.context = context;
    }
  });
  return React.useMemo(() => ({
    context,
    ...floating
  }), [floating, context]);
}

/**
 * @description Find DOM node from ref
 * @param {ref} ref React ref
 */

/**
 * Popup display additional information on click or hover event
 * @class Popup
 * @extends {React.Component<IProps, IState>}
 */
var Popover = function Popover(props) {
  var _classNames;

  var children = props.children,
      trigger = props.trigger,
      open = props.open,
      componentStyles = props.style,
      placement = props.placement,
      hoverable = props.hoverable,
      componentOffset = props.offset,
      dismissOptions = props.dismissOptions,
      onToggle = props.onToggle,
      className = props.className,
      dark = props.dark,
      boundaryElement = props.boundaryElement;

  var _React$useState = React.useState(open !== null && open !== void 0 ? open : false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isOpen = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _React$useState3 = React.useState(''),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      animationKeyframe = _React$useState4[0],
      setKeyframe = _React$useState4[1];

  var _React$useState5 = React.useState(''),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      animation = _React$useState6[0],
      setAnimation = _React$useState6[1];

  var _React$useState7 = React.useState(0),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      maxHeight = _React$useState8[0],
      setMaxHeight = _React$useState8[1];

  var id = useId();
  var labelId = "".concat(id, "-label");
  var descriptionId = "".concat(id, "-description");
  var animationId = "".concat(id, "-animation");
  var animationDelayTimer = null;
  var offsetNumber = 2;

  if (componentOffset === 'small') {
    offsetNumber = 2;
  }

  if (componentOffset === 'medium') {
    offsetNumber = 4;
  }

  if (componentOffset === 'large') {
    offsetNumber = 8;
  }

  var onOpenChange = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(open) {
      var isTop, animationFrame;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              isTop = currentPlacement.includes('top');
              animationFrame = "\n      @keyframes popper-open-".concat(animationId, " {\n        from {\n          max-height: 0;\n          ").concat(isTop ? "margin-top: 0px" : '', ";\n        }\n        to {\n          max-height: ").concat(maxHeight, "px;\n          ").concat(isTop ? "margin-top: -".concat(maxHeight, "px") : '', ";\n        }\n      }\n      @keyframes popper-close-").concat(animationId, " {\n        from {\n          max-height: ").concat(maxHeight, "px;\n          ").concat(isTop ? "margin-top: -".concat(maxHeight, "px") : '', ";\n        }\n        to {\n          max-height: 0;\n          ").concat(isTop ? "margin-top: 0px" : '', ";\n        }\n      }\n      ");

              if (!maxHeight) {
                _context.next = 13;
                break;
              }

              _context.next = 5;
              return setKeyframe(animationFrame);

            case 5:
              if (!open) {
                _context.next = 10;
                break;
              }

              _context.next = 8;
              return setAnimation("popper-open-".concat(animationId, " 120ms cubic-bezier(0, 0, 0.38, 0.9), popper-fade-in 120ms"));

            case 8:
              _context.next = 12;
              break;

            case 10:
              _context.next = 12;
              return setAnimation("popper-close-".concat(animationId, " 120ms cubic-bezier(0.2, 0, 1, 0.9), fadeOut 120ms "));

            case 12:
              animationDelayTimer = setTimeout(function () {
                return setOpen(open);
              }, 120);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onOpenChange(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var _useFloating = useFloating({
    open: isOpen,
    onOpenChange: trigger ? onOpenChange : undefined,
    middleware: [offset(offsetNumber), flip({
      boundary: boundaryElement,
      altBoundary: true
    }), shift()],
    placement: placement
  }),
      x = _useFloating.x,
      y = _useFloating.y,
      reference = _useFloating.reference,
      floating = _useFloating.floating,
      strategy = _useFloating.strategy,
      refs = _useFloating.refs,
      context = _useFloating.context,
      currentPlacement = _useFloating.placement;

  React.useEffect(function () {
    if (!maxHeight) {
      var fn = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var _refs$floating$curren;

          var offsetHeight;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return setOpen(true);

                case 2:
                  offsetHeight = (_refs$floating$curren = refs.floating.current) === null || _refs$floating$curren === void 0 ? void 0 : _refs$floating$curren.offsetHeight;

                  if (offsetHeight) {
                    setMaxHeight(offsetHeight);
                  }

                  setOpen(isOpen);

                case 5:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function fn() {
          return _ref2.apply(this, arguments);
        };
      }();

      fn();
    }

    return function () {
      clearTimeout(Number(animationDelayTimer));
    };
  }, []);
  var interactions = [useClick(context, {
    pointerDown: false
  }), useRole(context), useDismiss(context, _objectSpread2({}, dismissOptions))];

  var _useInteractions = useInteractions(hoverable ? [].concat(interactions, [useHover(context)]) : interactions),
      getReferenceProps = _useInteractions.getReferenceProps,
      getFloatingProps = _useInteractions.getFloatingProps;

  React.useEffect(function () {
    onToggle && onToggle(context);
  }, [context]);
  var classes = classnames((_classNames = {}, _defineProperty(_classNames, 'Next-Popover--dark', dark), _defineProperty(_classNames, "".concat(className), className), _classNames), "Next-Popover");
  var positionOffset = {
    'auto-start': 'top left',
    auto: 'top',
    'auto-end': 'top right',
    'top-start': 'bottom left',
    top: 'bottom left',
    'top-end': 'bottom right',
    'right-start': 'top right',
    right: 'top right',
    'right-end': 'top right',
    'bottom-end': 'top right',
    bottom: 'top',
    'bottom-start': 'top left',
    'left-end': 'top left',
    left: 'top left',
    'left-start': 'top left'
  };
  var popover = /*#__PURE__*/React.createElement(FloatingFocusManager, {
    context: context
  }, /*#__PURE__*/React.createElement("div", _extends$1({
    "data-test": "DesignSystem-Popover"
  }, getFloatingProps({
    className: classes,
    ref: floating,
    style: _objectSpread2({
      left: x !== null && x !== void 0 ? x : '',
      top: y !== null && y !== void 0 ? y : '',
      position: strategy,
      animation: animation,
      overflow: 'clip',
      transformOrigin: positionOffset[currentPlacement]
    }, componentStyles),
    'aria-labelledby': labelId,
    'aria-describedby': descriptionId,
    onAnimationEnd: function onAnimationEnd() {
      if (currentPlacement.includes('top')) {
        var _refs$floating$curren2;

        Object.assign((_refs$floating$curren2 = refs.floating.current) === null || _refs$floating$curren2 === void 0 ? void 0 : _refs$floating$curren2.style, {
          marginTop: "-".concat(maxHeight, "px")
        });
      }
    }
  })), children));

  var referenceProps = _objectSpread2({}, getReferenceProps({
    ref: reference
  }));

  return /*#__PURE__*/React.createElement(React.Fragment, null, trigger ? /*#__PURE__*/React.cloneElement(trigger, _objectSpread2(_objectSpread2({}, referenceProps), {}, {
    onClick: open ? function () {
      return onOpenChange(!isOpen);
    } : referenceProps === null || referenceProps === void 0 ? void 0 : referenceProps.onClick
  })) : null, /*#__PURE__*/React.createElement("style", null, animationKeyframe), isOpen && trigger && /*#__PURE__*/React.createElement(FloatingPortal, null, popover), isOpen && !trigger && popover);
};
Popover.defaultProps = {
  placement: 'bottom-start',
  offset: 'medium'
};

var _excluded$3 = ["children", "tooltip"];
var Tooltip = function Tooltip(props) {
  var children = props.children,
      tooltip = props.tooltip,
      rest = _objectWithoutProperties(props, _excluded$3);

  var tooltipWrapper = /*#__PURE__*/React.createElement("div", {
    className: "Tooltip"
  }, /*#__PURE__*/React.createElement(Text, {
    className: "Tooltip-text",
    appearance: "white"
  }, tooltip));
  return /*#__PURE__*/React.createElement(Popover, _extends$1({
    trigger: children,
    offset: 'medium'
  }, rest), tooltipWrapper);
}; // Tooltip.defaultProps = filterProps({

var _excluded$2 = ["children", "className", "onOutsideClick"];
var OutsideClick = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
      className = props.className,
      onOutsideClick = props.onOutsideClick,
      rest = _objectWithoutProperties(props, _excluded$2);

  var innerRef = React.useRef(null);
  React.useImperativeHandle(ref, function () {
    return innerRef.current;
  }, [innerRef]);
  React.useEffect(function () {
    document.addEventListener('click', handleOutsideClick, true);
    return function () {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);
  var handleOutsideClick = React.useCallback(function (event) {
    var element = innerRef;

    if (!event.target || !element.current) {
      return;
    }

    if (!element.current.contains(event.target)) {
      onOutsideClick(event);
    }
  }, []);
  var classes = classnames(_defineProperty({}, 'OutsideClick', true), className);
  return /*#__PURE__*/React.createElement("div", _extends$1({
    ref: innerRef
  }, rest, {
    className: classes
  }), children);
});
OutsideClick.displayName = 'OutsideClick';

var _excluded$1 = ["appearance", "children", "className"];
var Paragraph = function Paragraph(props) {
  var appearance = props.appearance,
      children = props.children,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$1);

  var classes = classnames(_defineProperty({
    Text: true
  }, "Text--".concat(appearance), appearance), className);
  return /*#__PURE__*/React.createElement(GenericText, _extends$1({
    "data-test": "DesignSystem-Paragraph"
  }, rest, {
    className: classes,
    componentType: "p"
  }), children);
};
Paragraph.displayName = 'Paragraph';
Paragraph.defaultProps = {
  appearance: 'default'
};

var _excluded = ["children"],
    _excluded2 = ["children"],
    _excluded3 = ["children"],
    _excluded4 = ["children"];
var Bold = function Bold(props) {
  var children = props.children,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement(GenericText, _extends$1({
    "data-test": "DesignSystem-Bold"
  }, rest, {
    componentType: "b"
  }), children);
};
var Italic = function Italic(props) {
  var children = props.children,
      rest = _objectWithoutProperties(props, _excluded2);

  return /*#__PURE__*/React.createElement(GenericText, _extends$1({
    "data-test": "DesignSystem-Italic"
  }, rest, {
    componentType: "i"
  }), children);
};
var Underline = function Underline(props) {
  var children = props.children,
      rest = _objectWithoutProperties(props, _excluded3);

  return /*#__PURE__*/React.createElement(GenericText, _extends$1({
    "data-test": "DesignSystem-Underline"
  }, rest, {
    componentType: "u"
  }), children);
};
var Strikethrough = function Strikethrough(props) {
  var children = props.children,
      rest = _objectWithoutProperties(props, _excluded4);

  return /*#__PURE__*/React.createElement(GenericText, _extends$1({
    "data-test": "DesignSystem-Strikethrough"
  }, rest, {
    componentType: "s"
  }), children);
};

var version = "3.0.0-10";

export { Avatar, Badge, Bold, Button, Icon, Italic, OutsideClick, Paragraph, Pills, Popover, Spinner, Strikethrough, Text, Tooltip, Underline, index$2 as Utils, version };
