
  /**
   * Generated on: 1649422158940 
   *      Package: @innovaccer/design-system
   *      Version: v3.0.0-2
   *      License: MIT
   *         Docs: https://innovaccer.github.io/design-system
   */

    
import * as React from 'react';

var colorToHex = function colorToHex(color) {
  return getComputedStyle(document.documentElement).getPropertyValue("--".concat(color));
};

var css = /*#__PURE__*/Object.freeze({
  __proto__: null,
  colorToHex: colorToHex
});

// export * as masks from './masks';

var index = /*#__PURE__*/Object.freeze({
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

var _excluded$3 = ["size", "className", "appearance", "icon", "text", "tooltip", "image"];
var Avatar = function Avatar(props) {
  var _classNames, _classNames2;

  var size = props.size,
      className = props.className,
      appearance = props.appearance,
      icon = props.icon,
      text = props.text,
      tooltip = props.tooltip,
      image = props.image,
      rest = _objectWithoutProperties(props, _excluded$3); // To check if the image src loads a valid image


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
  var classes = classnames((_classNames = {
    Avatar: true
  }, _defineProperty(_classNames, "Avatar--".concat(size), size), _defineProperty(_classNames, "Avatar--".concat(avatarAppearance), avatarAppearance), _defineProperty(_classNames, 'Avatar--disabled', !text || !(image !== null && image !== void 0 && image.src) || !icon), _defineProperty(_classNames, 'overflow-hidden', !text), _classNames), className);
  var contentClass = classnames((_classNames2 = {}, _defineProperty(_classNames2, "Avatar-content--".concat(size), size), _defineProperty(_classNames2, "Avatar-content--".concat(avatarAppearance), avatarAppearance), _classNames2));
  var iconClass = classnames(_defineProperty({}, "Avatar-content--".concat(avatarAppearance), avatarAppearance));
  var imageDimensions = {
    width: "".concat(size === 'regular' ? 32 : 24, "px"),
    height: "".concat(size === 'regular' ? 32 : 24, "px")
  };
  return /*#__PURE__*/React.createElement("span", _extends({
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
  }), image && isValidImage ? /*#__PURE__*/React.createElement("img", _extends({
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

var _excluded$2 = ["children", "componentType", "className"];

var GenericText = function GenericText(_ref) {
  var children = _ref.children,
      _ref$componentType = _ref.componentType,
      componentType = _ref$componentType === void 0 ? 'span' : _ref$componentType,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded$2);

  return /*#__PURE__*/React.createElement(componentType, _objectSpread2(_objectSpread2({}, props), {}, {
    className: className
  }), children);
};

var _excluded$1 = ["appearance", "size", "children", "weight", "small", "className"];
var Text = function Text(props) {
  var _classNames;

  var appearance = props.appearance,
      size = props.size,
      children = props.children,
      weight = props.weight,
      small = props.small,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$1);

  var classes = classnames((_classNames = {
    Text: true
  }, _defineProperty(_classNames, "Text--".concat(appearance), appearance), _defineProperty(_classNames, "Text--".concat(weight), weight), _defineProperty(_classNames, "Text--".concat(size), size), _defineProperty(_classNames, 'Text--small', size === 'small' || small), _classNames), className);
  return /*#__PURE__*/React.createElement(GenericText, _extends({
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

var _excluded = ["onClick", "onKeyDown", "role"];
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
      rest = _objectWithoutProperties(_ref, _excluded);

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
    return /*#__PURE__*/React.createElement("span", _extends({}, baseProps, {
      className: className
    }), children);
  }

  return /*#__PURE__*/React.createElement("i", _extends({}, baseProps, {
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
  var classes = classnames((_classNames = {
    Pills: true
  }, _defineProperty(_classNames, "Badge--".concat(appearance), appearance && !subtle), _defineProperty(_classNames, "Badge--subtle-".concat(appearance), subtle), _classNames), className);
  return /*#__PURE__*/React.createElement("span", _extends({
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
  var classes = classnames((_classNames = {
    Badge: true
  }, _defineProperty(_classNames, "Badge--".concat(appearance), appearance && !subtle), _defineProperty(_classNames, "Badge--subtle-".concat(appearance), subtle), _classNames), className);
  return /*#__PURE__*/React.createElement("span", _extends({
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

var version = "3.0.0-2";

export { Avatar, Badge, Icon, Pills, Text, index as Utils, version };
