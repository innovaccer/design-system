
  /**
   * Generated on: 1622025389178 
   *      Package: @innovaccer/design-system
   *      Version: v2.1.0
   *      License: MIT
   *         Docs: https://innovaccer.github.io/design-system
   */

    
import * as React from 'react';
import React__default, { useRef, useReducer, useCallback, useEffect as useEffect$2, useMemo, useState as useState$3 } from 'react';
import * as ReactDOM from 'react-dom';

var colorToHex = function colorToHex(color) {
  return getComputedStyle(document.documentElement).getPropertyValue("--".concat(color));
};

var css = /*#__PURE__*/Object.freeze({
  __proto__: null,
  colorToHex: colorToHex
});

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty$2(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
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

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
}

function _defineProperty$2(obj, key, value) {
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

function _extends$3() {
  _extends$3 = Object.assign || function (target) {
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

  return _extends$3.apply(this, arguments);
}

function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf$1(subClass, superClass);
}

function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$1(o);
}

function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf$1(o, p);
}

function _isNativeReflectConstruct$1() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose$2(source, excluded) {
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

function _objectWithoutProperties$1(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$2(source, excluded);

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

function _assertThisInitialized$2(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn$1(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized$2(self);
}

function _createSuper$1(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$1();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf$1(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$1(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn$1(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

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

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var _placeholders;

var placeholders = (_placeholders = {}, _defineProperty$2(_placeholders, 'hh:mm', '--:--'), _defineProperty$2(_placeholders, 'hh:mm AM', '--:-- AM'), _placeholders);
var isPlaceholderPresent = function isPlaceholderPresent(placeholderChar, time) {
  return time && time.includes(placeholderChar);
};
var isFormat12hour = function isFormat12hour(format) {
  return format === 'hh:mm AM';
};

var get12hourFormat = function get12hourFormat(hours) {
  var AMPM = hours < 12 ? 'AM' : 'PM';
  var hrs = hours % 12 || 12;
  return {
    hrs: hrs,
    AMPM: AMPM
  };
};

var get24hourFormat = function get24hourFormat(hours, am_pm) {
  var convertedHours = hours;

  if (am_pm) {
    if (am_pm === 'PM' && hours < 12) {
      convertedHours = hours + 12;
    } else if (am_pm === 'AM' && hours === 12) {
      convertedHours = hours - 12;
    }

    return convertedHours;
  }

  return hours;
};

var translateToTime = function translateToTime(format, time) {
  if (!time) return '';

  if (typeof time === 'number') {
    var timeObj = getTimeObjectFromNumber(format, time);
    return translateToString$1(format, timeObj);
  }

  return time;
};

var getTimeObjectFromNumber = function getTimeObjectFromNumber(format, time) {
  var d = new Date(time);
  var hrs = d.getHours();
  var hours = isFormat12hour(format) ? get12hourFormat(hrs).hrs : hrs;
  var am_pm = isFormat12hour(format) ? get12hourFormat(hrs).AMPM : '';
  var minutes = d.getMinutes();
  var seconds = d.getSeconds();
  return {
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    am_pm: am_pm
  };
};

var getTimeObjFromStr = function getTimeObjFromStr(format, time) {
  var separator = ':';
  var hours = 0;
  var minutes = 0;
  var len = format.length;
  var timeLength = time.length;
  var lastChars = format.substring(len - 2, len);
  var is12hrFormat = lastChars === 'AM' || lastChars === 'PM';
  var am_pm = is12hrFormat ? time.substring(timeLength - 2, timeLength) : '';
  var timeFormat = is12hrFormat ? time.substring(0, timeLength - 3) : time;
  var inputFormat = is12hrFormat ? format.substring(0, len - 3) : format;
  var v = timeFormat.split(separator);
  inputFormat.split(separator).forEach(function (f, i) {
    switch (f) {
      case 'hh':
        hours = +v[i] || 0;
        break;

      case 'mm':
        minutes = +v[i] || 0;
        break;
    }
  });
  return {
    hours: hours,
    minutes: minutes,
    am_pm: am_pm
  };
};
var getOutputTimeString = function getOutputTimeString(inputFormat, outputFormat, time) {
  if (inputFormat === outputFormat) return time;

  var _getTimeObjFromStr = getTimeObjFromStr(inputFormat, time),
      hours = _getTimeObjFromStr.hours,
      minutes = _getTimeObjFromStr.minutes,
      am_pm = _getTimeObjFromStr.am_pm;

  var AMPM = isFormat12hour(outputFormat) ? get12hourFormat(hours).AMPM : '';
  var hrs = isFormat12hour(outputFormat) ? get12hourFormat(hours).hrs : get24hourFormat(hours, am_pm);
  var timeStr = translateToString$1(outputFormat, {
    minutes: minutes,
    hours: hrs,
    am_pm: AMPM
  });
  return timeStr;
};

var translateToString$1 = function translateToString(format, time) {
  var hours = time.hours,
      minutes = time.minutes,
      am_pm = time.am_pm;
  var separator = ':';
  var timeFormat = format.split(' ');
  var v = timeFormat[0].split(separator);
  var val = '';
  v.forEach(function (f, i) {
    switch (f) {
      case 'hh':
        val += hours < 10 ? "0".concat(hours) : hours;
        break;

      case 'mm':
        val += minutes < 10 ? "0".concat(minutes) : minutes;
        break;
    }

    if (i !== f.length - 1) val += separator;
  });
  val += isFormat12hour(format) && am_pm ? " ".concat(am_pm) : '';
  return val;
};

var isValid = function isValid(validators) {
  for (var _len = arguments.length, value = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    value[_key - 1] = arguments[_key];
  }

  var iterator = Array.isArray(validators) ? validators : [validators];
  return iterator.every(function (validator) {
    return validator.apply(void 0, value);
  });
};
var date$1 = function date(val, format) {
  var validate = function validate(date, month, year) {
    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // Adjust for leap years

    if (year % 400 == 0 || year % 100 != 0 && year % 4 == 0) monthLength[1] = 29; // Check the range of the day

    return month <= 12 && date <= monthLength[month - 1];
  };

  switch (format) {
    case 'dd/mm/yyyy':
      var p = val.split('/');
      var date = +p[0] || 1;
      var month = +p[1] || 1;
      var year = +p[2] || 1900;
      return validate(date, month, year);

    case 'mm/dd/yyyy':
      var p = val.split('/');
      var date = +p[1] || 1;
      var month = +p[0] || 1;
      var year = +p[2] || 1900;
      return validate(date, month, year);

    case 'yyyy/mm/dd':
      var p = val.split('/');
      var date = +p[2] || 1;
      var month = +p[1] || 1;
      var year = +p[0] || 1900;
      return validate(date, month, year);

    case 'dd-mm-yyyy':
      var p = val.split('-');
      var date = +p[0] || 1;
      var month = +p[1] || 1;
      var year = +p[2] || 1900;
      return validate(date, month, year);

    case 'mm-dd-yyyy':
      var p = val.split('-');
      var date = +p[1] || 1;
      var month = +p[0] || 1;
      var year = +p[2] || 1900;
      return validate(date, month, year);

    case 'yyyy-mm-dd':
      var p = val.split('-');
      var date = +p[2] || 1;
      var month = +p[1] || 1;
      var year = +p[0] || 1900;
      return validate(date, month, year);

    default:
      return false;
  }
};
var time$1 = function time(val, format) {
  var _getTimeObjFromStr = getTimeObjFromStr(format, val),
      hours = _getTimeObjFromStr.hours,
      minutes = _getTimeObjFromStr.minutes;

  var hoursCond = isFormat12hour(format) ? hours <= 12 : hours < 24;
  return hoursCond && minutes <= 60;
};

var validators = /*#__PURE__*/Object.freeze({
  __proto__: null,
  isValid: isValid,
  date: date$1,
  time: time$1
});

var _time;

var date = {
  'dd/mm/yyyy': [/[0123]/, /\d/, '/', /\[01]/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
  'mm/dd/yyyy': [/[01]/, /\d/, '/', /[0123]/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
  'yyyy/mm/dd': [/\d/, /\d/, /\d/, /\d/, '/', /[01]/, /\d/, '/', /[0123]/, /\d/],
  'dd-mm-yyyy': [/[0123]/, /\d/, '-', /[01]/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  'mm-dd-yyyy': [/[01]/, /\d/, '-', /[0123]/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  'yyyy-mm-dd': [/\d/, /\d/, /\d/, /\d/, '-', /[01]/, /\d/, '-', /[0123]/, /\d/]
};
var rangeDate = {
  'dd/mm/yyyy': [/[0123]/, /\d/, '/', /\[01]/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, ' ', '-', ' ', /[0123]/, /\d/, '/', /\[01]/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
  'mm/dd/yyyy': [/[01]/, /\d/, '/', /[0123]/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, ' ', '-', ' ', /[01]/, /\d/, '/', /[0123]/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
  'yyyy/mm/dd': [/\d/, /\d/, /\d/, /\d/, '/', /[01]/, /\d/, '/', /[0123]/, /\d/, ' ', '-', ' ', /\d/, /\d/, /\d/, /\d/, '/', /[01]/, /\d/, '/', /[0123]/, /\d/],
  'dd-mm-yyyy': [/[0123]/, /\d/, '-', /[01]/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, ' ', '-', ' ', /[0123]/, /\d/, '-', /[01]/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  'mm-dd-yyyy': [/[01]/, /\d/, '-', /[0123]/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, ' ', '-', ' ', /[01]/, /\d/, '-', /[0123]/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  'yyyy-mm-dd': [/\d/, /\d/, /\d/, /\d/, '-', /[01]/, /\d/, '-', /[0123]/, /\d/, ' ', '-', ' ', /\d/, /\d/, /\d/, /\d/, '-', /[01]/, /\d/, '-', /[0123]/, /\d/]
};
var time = (_time = {}, _defineProperty$2(_time, 'hh:mm', [/[0-1-2]/, /\d/, ':', /[0-5]/, /\d/]), _defineProperty$2(_time, 'hh:mm AM', [/[0-1]/, /\d/, ':', /[0-5]/, /\d/, ' ', /[APap]/, 'M']), _time);

var masks = /*#__PURE__*/Object.freeze({
  __proto__: null,
  date: date,
  rangeDate: rangeDate,
  time: time
});

var index$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  css: css,
  validators: validators,
  masks: masks
});

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
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
    return props[curr] ? _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty$2({}, curr, props[curr])) : _objectSpread2({}, acc);
  }, {});
  return basePropsObj;
};
var filterProps = function filterProps(props, propsList, include) {
  return Object.entries(props).filter(function (obj) {
    return include ? propsList.includes(obj[0]) : !propsList.includes(obj[0]);
  }).reduce(function (acc, curr) {
    acc[curr[0]] = curr[1];
    return acc;
  }, {});
};

var initialsLength = 2;
var Avatar = function Avatar(props) {
  var _classNames, _classNames2;

  var withTooltip = props.withTooltip,
      tooltipPosition = props.tooltipPosition,
      size = props.size,
      children = props.children,
      firstName = props.firstName,
      lastName = props.lastName,
      className = props.className,
      appearance = props.appearance;
  var baseProps = extractBaseProps(props);
  var initials = children ? children.trim().slice(0, initialsLength) : "".concat(firstName ? firstName.trim()[0] : '').concat(lastName ? lastName.trim()[0] : '');
  var tooltip = children || "".concat(firstName || '', " ").concat(lastName || '') || '';
  var DefaultAppearance = 'secondary';
  var colors = ['accent4', 'primary', 'accent3', 'alert', 'accent2', 'warning', 'accent1', 'success'];
  var AvatarAppearance = appearance || colors[(initials.charCodeAt(0) + (initials.charCodeAt(1) || 0)) % 8] || DefaultAppearance;
  var classes = classnames((_classNames = {
    Avatar: true
  }, _defineProperty$2(_classNames, "Avatar--".concat(size), size), _defineProperty$2(_classNames, "Avatar--".concat(AvatarAppearance), AvatarAppearance), _defineProperty$2(_classNames, 'Avatar--disabled', !initials || !withTooltip), _classNames), className);
  var ContentClass = classnames((_classNames2 = {}, _defineProperty$2(_classNames2, "Avatar-content--".concat(size), size), _defineProperty$2(_classNames2, "Avatar-content--".concat(AvatarAppearance), AvatarAppearance), _classNames2));
  var IconClass = classnames(_defineProperty$2({}, "Avatar-content--".concat(AvatarAppearance), AvatarAppearance));

  var renderAvatar = function renderAvatar() {
    return /*#__PURE__*/React.createElement("span", _extends$3({
      "data-test": "DesignSystem-Avatar"
    }, baseProps, {
      className: classes
    }), initials && /*#__PURE__*/React.createElement(Text, {
      weight: "medium",
      appearance: 'white',
      className: ContentClass
    }, initials), !initials && /*#__PURE__*/React.createElement(Icon, {
      "data-test": "DesignSystem-AvatarIcon",
      name: "person",
      size: size === 'regular' ? 16 : 12,
      appearance: 'white',
      className: IconClass
    }));
  };

  var renderTooltip = function renderTooltip() {
    if (withTooltip && initials) {
      return /*#__PURE__*/React.createElement(Tooltip, {
        tooltip: tooltip,
        position: tooltipPosition,
        triggerClass: 'flex-grow-0'
      }, renderAvatar());
    }

    return renderAvatar();
  };

  return renderTooltip();
};
Avatar.displayName = 'Avatar';
Avatar.defaultProps = {
  tooltipPosition: 'bottom',
  withTooltip: true,
  size: 'regular'
};

var AvatarGroup = function AvatarGroup(props) {
  var max = props.max,
      borderColor = props.borderColor,
      popoverOptions = props.popoverOptions,
      tooltipPosition = props.tooltipPosition,
      list = props.list,
      className = props.className;
  var popperRenderer = popoverOptions.popperRenderer,
      _popoverOptions$maxHe = popoverOptions.maxHeight,
      maxHeight = _popoverOptions$maxHe === void 0 ? 150 : _popoverOptions$maxHe,
      _popoverOptions$posit = popoverOptions.position,
      position = _popoverOptions$posit === void 0 ? 'bottom' : _popoverOptions$posit,
      _popoverOptions$on = popoverOptions.on,
      on = _popoverOptions$on === void 0 ? 'hover' : _popoverOptions$on,
      _popoverOptions$dark = popoverOptions.dark,
      dark = _popoverOptions$dark === void 0 ? true : _popoverOptions$dark,
      _popoverOptions$appen = popoverOptions.appendToBody,
      appendToBody = _popoverOptions$appen === void 0 ? true : _popoverOptions$appen,
      _popoverOptions$poppe = popoverOptions.popperClassName,
      popperClassName = _popoverOptions$poppe === void 0 ? '' : _popoverOptions$poppe;
  var baseProps = extractBaseProps(props);
  var extraAvatars = list.length > max ? list.length - max > 9 ? 9 : list.length - max : 0;
  var style = {
    borderRadius: '50%',
    backgroundColor: "".concat(borderColor),
    border: "var(--spacing-xs) solid ".concat(borderColor),
    boxShadow: "0 0 0 var(--spacing-xs) ".concat(borderColor)
  };
  var AvatarGroupClass = classnames(_defineProperty$2({}, 'AvatarGroup', true), className);
  var popperClass = classnames(_defineProperty$2({}, 'AvatarGroup-Popper', true), popperClassName);
  var trigger = /*#__PURE__*/React.createElement("div", {
    "data-test": "DesignSystem-AvatarGroup--TriggerAvatar",
    style: style
  }, /*#__PURE__*/React.createElement(Avatar, {
    appearance: "secondary",
    firstName: "+",
    lastName: "".concat(extraAvatars),
    withTooltip: false
  }));

  var renderPopper = function renderPopper() {
    var extraAvatarsList = list.slice(max, list.length);

    if (popperRenderer && typeof renderPopper === 'function') {
      return popperRenderer(extraAvatarsList);
    }

    return /*#__PURE__*/React.createElement("div", {
      className: "py-6 pr-4 pl-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "AvatarGroup-TextWrapper",
      style: {
        maxHeight: maxHeight
      }
    }, extraAvatarsList.map(function (item, ind) {
      var _item$firstName = item.firstName,
          firstName = _item$firstName === void 0 ? '' : _item$firstName,
          _item$lastName = item.lastName,
          lastName = _item$lastName === void 0 ? '' : _item$lastName;
      var name = "".concat(firstName, " ").concat(lastName);
      return /*#__PURE__*/React.createElement(Text, {
        key: ind,
        appearance: dark ? 'white' : 'default',
        className: ind < extraAvatars - 1 ? 'mb-5' : '',
        "data-test": "DesignSystem-AvatarGroup--Text"
      }, name);
    })));
  };

  var renderAvatars = function renderAvatars() {
    var avatars = list.slice(0, max).map(function (item, index) {
      var appearance = item.appearance,
          firstName = item.firstName,
          lastName = item.lastName;
      return /*#__PURE__*/React.createElement("div", {
        "data-test": "DesignSystem-AvatarGroup--Avatar",
        className: "AvatarGroup-item",
        style: style,
        key: index
      }, /*#__PURE__*/React.createElement(Avatar, {
        appearance: appearance,
        firstName: firstName,
        lastName: lastName,
        withTooltip: true,
        tooltipPosition: tooltipPosition
      }));
    });
    return avatars;
  };

  return /*#__PURE__*/React.createElement("div", _extends$3({
    "data-test": "DesignSystem-AvatarGroup"
  }, baseProps, {
    className: "".concat(AvatarGroupClass, " d-inline-flex")
  }), renderAvatars(), list.length - max > 0 && /*#__PURE__*/React.createElement(Popover, {
    on: on,
    dark: dark,
    trigger: trigger,
    position: position,
    appendToBody: appendToBody,
    className: popperClass
  }, renderPopper()));
};
AvatarGroup.displayName = 'AvatarGroup';
AvatarGroup.defaultProps = {
  max: 2,
  borderColor: 'var(--white)',
  tooltipPosition: 'bottom',
  popoverOptions: {}
};

var useEffect$1 = React.useEffect,
    useState$2 = React.useState;
var Backdrop = function Backdrop(props) {
  var className = props.className;
  var baseProps = extractBaseProps(props);

  var _useState = useState$2(null),
      _useState2 = _slicedToArray(_useState, 2),
      savedBodyOverflow = _useState2[0],
      setBodyOverflow = _useState2[1];

  var _React$useState = React.useState(props.open),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _React$useState3 = React.useState(props.open),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      animate = _React$useState4[0],
      setAnimate = _React$useState4[1];

  var classes = classnames({
    Backdrop: true,
    'Backdrop--open': open,
    'Backdrop-animation--open': animate,
    'Backdrop-animation--close': !animate
  }, className);

  var disableBodyScroll = function disableBodyScroll() {
    document.body.style.setProperty('overflow', 'hidden', 'important');
  };

  var enableBodyScroll = function enableBodyScroll() {
    document.body.style.overflow = savedBodyOverflow || '';
    setBodyOverflow(null);
  };

  useEffect$1(function () {
    if (props.open) {
      setBodyOverflow(document.body.style.overflow);
      disableBodyScroll();
      setOpen(true);
      setAnimate(true);
    }

    if (!props.open) {
      window.setTimeout(function () {
        setOpen(false);
      }, 120);
      setAnimate(false);
      enableBodyScroll();
    }

    return function () {
      enableBodyScroll();
    };
  }, [props.open]);
  var BackdropElement = /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement("div", _extends$3({
    "data-test": "DesignSystem-Backdrop",
    "data-layer": true
  }, baseProps, {
    className: classes
  })), document.body);
  return BackdropElement;
};
Backdrop.displayName = 'Backdrop';

var Badge = function Badge(props) {
  var _classNames;

  var appearance = props.appearance,
      children = props.children,
      subtle = props.subtle,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var classes = classnames((_classNames = {
    Badge: true
  }, _defineProperty$2(_classNames, "Badge--".concat(appearance), appearance && !subtle), _defineProperty$2(_classNames, "Badge--subtle-".concat(appearance), subtle), _classNames), className);
  return /*#__PURE__*/React.createElement("span", _extends$3({
    "data-test": "DesignSystem-Badge"
  }, baseProps, {
    className: classes
  }), children);
};
Badge.displayName = 'Badge';
Badge.defaultProps = {
  appearance: 'secondary'
};

/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param  {number}    delay -          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {boolean}   [noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
 *                                    the internal counter is reset).
 * @param  {Function}  callback -       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param  {boolean}   [debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
 *                                    schedule `callback` to execute after `delay` ms.
 *
 * @returns {Function}  A new, throttled, function.
 */
function throttle (delay, noTrailing, callback, debounceMode) {
  /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */
  var timeoutID;
  var cancelled = false; // Keep track of the last time `callback` was executed.

  var lastExec = 0; // Function to clear existing timeout

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  } // Function to cancel next exec


  function cancel() {
    clearExistingTimeout();
    cancelled = true;
  } // `noTrailing` defaults to falsy.


  if (typeof noTrailing !== 'boolean') {
    debounceMode = callback;
    callback = noTrailing;
    noTrailing = undefined;
  }
  /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */


  function wrapper() {
    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
      arguments_[_key] = arguments[_key];
    }

    var self = this;
    var elapsed = Date.now() - lastExec;

    if (cancelled) {
      return;
    } // Execute `callback` and update the `lastExec` timestamp.


    function exec() {
      lastExec = Date.now();
      callback.apply(self, arguments_);
    }
    /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */


    function clear() {
      timeoutID = undefined;
    }

    if (debounceMode && !timeoutID) {
      /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`.
       */
      exec();
    }

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      /*
       * In throttle mode, if `delay` time has been exceeded, execute
       * `callback`.
       */
      exec();
    } else if (noTrailing !== true) {
      /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }

  wrapper.cancel = cancel; // Return the wrapper function.

  return wrapper;
}

/* eslint-disable no-undefined */
/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param  {number}   delay -         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {boolean}  [atBegin] -     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 * @param  {Function} callback -      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                  to `callback` when the debounced-function is executed.
 *
 * @returns {Function} A new, debounced function.
 */

function debounce$1 (delay, atBegin, callback) {
  return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
}

var getSearchedOptions = function getSearchedOptions(options, searchTerm) {
  var result = options.filter(function (option) {
    return option.label.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return result;
};
var _isEqual = function _isEqual(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every(function (option, index) {
    return option.value === arr2[index].value || option.label === arr2[index].label;
  });
};
var _isControlled = function _isControlled(selected) {
  return selected !== undefined;
};
var _isOpenControlled = function _isOpenControlled(open) {
  return open !== undefined;
};
var _showSelectedItems = function _showSelectedItems(bulk, searchTerm, withCheckbox) {
  return bulk && withCheckbox && searchTerm === '';
};
var _isSelectAllPresent = function _isSelectAllPresent(searchTerm, bulkOptions, withSelectAll, withCheckbox) {
  return withCheckbox && withSelectAll && bulkOptions === 0 && searchTerm === '';
};
var scrollTo = function scrollTo(element, top) {
  element.scrollTo(0, top);
};
var scrollIntoView = function scrollIntoView(menuElement, focusedElement) {
  var menuRect = menuElement === null || menuElement === void 0 ? void 0 : menuElement.getBoundingClientRect();
  var focusedRect = focusedElement.getBoundingClientRect();
  var overscroll = focusedElement.offsetHeight;

  if (focusedRect.bottom > menuRect.bottom && menuElement) {
    scrollTo(menuElement, focusedElement.offsetTop - menuRect.height + overscroll);
  } else if (focusedRect.top < menuRect.top && menuElement) {
    scrollTo(menuElement, focusedElement.offsetTop - overscroll);
  }
};
var getSelectAll$1 = function getSelectAll(selected, optionsLength, disabledOptionsLength) {
  if (selected.length) {
    if (selected.length > 0 && disabledOptionsLength > 0 && selected.length === optionsLength - disabledOptionsLength) {
      return {
        indeterminate: true,
        checked: true
      }; //
    }

    var indeterminate = selected.length > 0 && selected.length !== optionsLength;
    var checked = selected.length > 0 && selected.length === optionsLength;
    var obj = {
      checked: checked,
      indeterminate: indeterminate
    };
    return obj;
  }

  return {
    indeterminate: false,
    checked: false
  };
};

var DropdownButton = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames, _classNames2;

  var _props$triggerSize = props.triggerSize,
      triggerSize = _props$triggerSize === void 0 ? 'regular' : _props$triggerSize,
      _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? 'Select' : _props$placeholder,
      _props$menu = props.menu,
      menu = _props$menu === void 0 ? false : _props$menu,
      children = props.children,
      icon = props.icon,
      disabled = props.disabled,
      open = props.open,
      inlineLabel = props.inlineLabel,
      error = props.error,
      rest = _objectWithoutProperties$1(props, ["triggerSize", "placeholder", "menu", "children", "icon", "disabled", "open", "inlineLabel", "error"]);

  var buttonDisabled = disabled ? 'disabled' : 'default';
  var trimmedPlaceholder = placeholder.trim();
  var value = children ? children : trimmedPlaceholder;
  var iconName = !menu ? 'keyboard_arrow_down' : icon ? icon : 'more_horiz';
  var buttonClass = classnames((_classNames = {}, _defineProperty$2(_classNames, 'Button', true), _defineProperty$2(_classNames, 'DropdownButton', true), _defineProperty$2(_classNames, "DropdownButton--".concat(triggerSize), triggerSize), _defineProperty$2(_classNames, "DropdownButton--".concat(triggerSize, "Square"), menu), _defineProperty$2(_classNames, 'DropdownButton--placeholder', !children && !menu), _defineProperty$2(_classNames, 'DropdownButton--icon', icon), _defineProperty$2(_classNames, 'DropdownButton--open', open), _defineProperty$2(_classNames, 'DropdownButton--error', error), _classNames));
  var textClass = classnames((_classNames2 = {}, _defineProperty$2(_classNames2, 'Text', true), _defineProperty$2(_classNames2, 'Text--regular', true), _defineProperty$2(_classNames2, 'DropdownButton-text', true), _classNames2));
  return /*#__PURE__*/React.createElement("button", _extends$3({
    ref: ref,
    type: "button",
    value: children,
    className: buttonClass,
    disabled: disabled,
    tabIndex: 0,
    "data-test": "DesignSystem-DropdownTrigger"
  }, rest), !menu && /*#__PURE__*/React.createElement("div", {
    className: "DropdownButton-wrapper"
  }, inlineLabel && /*#__PURE__*/React.createElement(Text, {
    appearance: "subtle",
    className: "mr-4"
  }, "".concat(inlineLabel.trim().charAt(0).toUpperCase()).concat(inlineLabel.trim().slice(1))), icon && !inlineLabel && /*#__PURE__*/React.createElement(Icon, {
    appearance: buttonDisabled,
    className: "d-flex align-items-center mr-4",
    name: icon
  }), value && /*#__PURE__*/React.createElement("span", {
    className: textClass
  }, value)), /*#__PURE__*/React.createElement(Icon, {
    appearance: buttonDisabled,
    name: iconName
  }));
});
DropdownButton.displayName = 'DropdownButton';

var GenericText = function GenericText(_ref) {
  var children = _ref.children,
      _ref$componentType = _ref.componentType,
      componentType = _ref$componentType === void 0 ? 'span' : _ref$componentType,
      className = _ref.className,
      props = _objectWithoutProperties$1(_ref, ["children", "componentType", "className"]);

  return /*#__PURE__*/React.createElement(componentType, _objectSpread2(_objectSpread2({}, props), {}, {
    className: className
  }), children);
};

var Text = function Text(props) {
  var _classNames;

  var appearance = props.appearance,
      size = props.size,
      children = props.children,
      weight = props.weight,
      small = props.small,
      className = props.className,
      rest = _objectWithoutProperties$1(props, ["appearance", "size", "children", "weight", "small", "className"]);

  var classes = classnames((_classNames = {
    Text: true
  }, _defineProperty$2(_classNames, "Text--".concat(appearance), appearance), _defineProperty$2(_classNames, "Text--".concat(weight), weight), _defineProperty$2(_classNames, "Text--".concat(size), size), _defineProperty$2(_classNames, 'Text--small', size === 'small' || small), _classNames), className);
  return /*#__PURE__*/React.createElement(GenericText, _extends$3({
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

var Icon = function Icon(props) {
  var _classNames;

  var appearance = props.appearance,
      className = props.className,
      name = props.name,
      size = props.size,
      onClick = props.onClick,
      children = props.children;
  var baseProps = extractBaseProps(props);

  var mapper = function mapper(val) {
    if (val === 'outline') return 'outlined';
    if (val === 'rounded') return 'round';
    return val;
  };

  var type = mapper(props.type);
  var iconClass = classnames((_classNames = {}, _defineProperty$2(_classNames, 'material-icons', true), _defineProperty$2(_classNames, "material-icons-".concat(mapper(type)), type && type !== 'filled'), _defineProperty$2(_classNames, 'Icon', true), _defineProperty$2(_classNames, "Icon--".concat(appearance), appearance), _defineProperty$2(_classNames, "".concat(className), className), _classNames));
  var styles = {
    fontSize: "".concat(size, "px"),
    width: "".concat(size, "px")
  }; // change `children` to {name} after migration

  if (children && /*#__PURE__*/React.isValidElement(children)) {
    return /*#__PURE__*/React.createElement("span", _extends$3({}, baseProps, {
      className: className
    }), children);
  }

  return /*#__PURE__*/React.createElement("i", _extends$3({}, baseProps, {
    className: iconClass,
    style: styles,
    onClick: onClick
  }), type ? "".concat(name, "_").concat(type) : name);
};
Icon.displayName = 'Icon';
Icon.defaultProps = {
  size: 16
};

var uidGenerator = function uidGenerator() {
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    var s = (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
    return s;
  });
  return uuid;
};

/**
 * ######Checkbox has two types:
 *  - [Controlled Checkbox](https://reactjs.org/docs/forms.html#controlled-components)
 *  - [Uncontrolled Checkbox](https://reactjs.org/docs/uncontrolled-components.html)
 */
var Checkbox = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  var _classNames, _classNames2, _classNames4;

  var _props$size = props.size,
      size = _props$size === void 0 ? 'regular' : _props$size,
      _props$tabIndex = props.tabIndex,
      tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex,
      defaultChecked = props.defaultChecked,
      indeterminate = props.indeterminate,
      label = props.label,
      disabled = props.disabled,
      onChange = props.onChange,
      name = props.name,
      value = props.value,
      className = props.className;
      props.checked;
      var rest = _objectWithoutProperties$1(props, ["size", "tabIndex", "defaultChecked", "indeterminate", "label", "disabled", "onChange", "name", "value", "className", "checked"]);

  var ref = React.useRef(null);
  React.useImperativeHandle(forwardedRef, function () {
    return ref.current;
  });

  var _React$useState = React.useState(props.checked === undefined ? defaultChecked : props.checked),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      checked = _React$useState2[0],
      setChecked = _React$useState2[1];

  React.useEffect(function () {
    setIndeterminate(indeterminate);
  }, [indeterminate]);
  React.useEffect(function () {
    if (props.checked !== undefined) {
      setChecked(props.checked);
    }
  }, [props.checked]);
  var CheckboxClass = classnames((_classNames = {}, _defineProperty$2(_classNames, 'Checkbox', true), _defineProperty$2(_classNames, 'Checkbox--disabled', disabled), _classNames), className);
  var CheckboxOuterWrapper = classnames((_classNames2 = {}, _defineProperty$2(_classNames2, 'Checkbox-outerWrapper', true), _defineProperty$2(_classNames2, "Checkbox-outerWrapper--".concat(size), size), _classNames2));
  var CheckboxTextClass = classnames(_defineProperty$2({}, 'Checkbox-label', true));
  var CheckboxInputWrapper = classnames((_classNames4 = {}, _defineProperty$2(_classNames4, 'Checkbox-input', true), _defineProperty$2(_classNames4, 'Checkbox-input--checked', checked), _defineProperty$2(_classNames4, 'Checkbox-input--indeterminate', props.indeterminate), _classNames4));
  var CheckboxWrapper = classnames(_defineProperty$2({}, 'Checkbox-wrapper', true));

  var setIndeterminate = function setIndeterminate(indeterminateValue) {
    ref.current.indeterminate = indeterminateValue;
  };

  var onChangeHandler = function onChangeHandler(e) {
    if (props.checked === undefined) {
      setChecked(e.target.checked);
      setIndeterminate(e.target.indeterminate);
    }

    if (onChange) onChange(e);
  };

  var id = "".concat(name, "-").concat(label, "-").concat(uidGenerator());
  var IconName = indeterminate ? 'remove' : checked ? 'check' : '';
  var IconSize = size === 'tiny' ? 12 : 16;
  return /*#__PURE__*/React.createElement("div", {
    className: CheckboxClass
  }, /*#__PURE__*/React.createElement("div", {
    className: CheckboxOuterWrapper
  }, /*#__PURE__*/React.createElement("input", _extends$3({}, rest, {
    type: "checkbox",
    defaultChecked: defaultChecked,
    onChange: onChangeHandler,
    checked: checked,
    disabled: disabled,
    ref: ref,
    name: name,
    value: value,
    className: CheckboxInputWrapper,
    tabIndex: tabIndex,
    id: id
  })), /*#__PURE__*/React.createElement("span", {
    className: CheckboxWrapper
  }, IconName && /*#__PURE__*/React.createElement(Icon, {
    name: IconName,
    size: IconSize,
    appearance: 'white'
  }))), label && label.trim() && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    className: CheckboxTextClass
  }, /*#__PURE__*/React.createElement(Text, {
    size: size === 'tiny' ? 'small' : 'regular',
    appearance: disabled ? 'disabled' : 'default'
  }, label.trim())));
});
Checkbox.displayName = 'Checkbox';

var CheckboxOption = function CheckboxOption(props) {
  var className = props.className,
      selected = props.selected,
      optionData = props.optionData,
      onChangeHandler = props.onChangeHandler,
      onUpdateActiveOption = props.onUpdateActiveOption,
      dataTest = props.dataTest;
  var label = optionData.label,
      disabled = optionData.disabled;
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    onMouseEnter: onUpdateActiveOption,
    "data-test": dataTest,
    "data-disabled": disabled
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: label,
    disabled: disabled,
    checked: selected,
    onChange: onChangeHandler,
    tabIndex: -1,
    className: "OptionCheckbox"
  }));
};

var DefaultOption = function DefaultOption(props) {
  var className = props.className,
      textClassName = props.textClassName,
      onClickHandler = props.onClickHandler,
      optionData = props.optionData,
      appearance = props.appearance,
      onUpdateActiveOption = props.onUpdateActiveOption,
      dataTest = props.dataTest;
  var label = optionData.label,
      disabled = optionData.disabled;
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    onClick: onClickHandler,
    onMouseEnter: onUpdateActiveOption,
    "data-test": dataTest,
    "data-disabled": disabled
  }, /*#__PURE__*/React.createElement("div", {
    className: 'Option-label'
  }, /*#__PURE__*/React.createElement(Text, {
    className: textClassName,
    appearance: appearance
  }, label)));
};

var MetaOption = function MetaOption(props) {
  var className = props.className,
      textClassName = props.textClassName,
      onClickHandler = props.onClickHandler,
      optionData = props.optionData,
      onUpdateActiveOption = props.onUpdateActiveOption,
      renderSubInfo = props.renderSubInfo,
      appearance = props.appearance,
      dataTest = props.dataTest;
  var subInfo = optionData.subInfo,
      label = optionData.label,
      disabled = optionData.disabled;
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    onClick: onClickHandler,
    onMouseEnter: onUpdateActiveOption,
    "data-test": dataTest,
    "data-disabled": disabled
  }, /*#__PURE__*/React.createElement("div", {
    className: 'Option-label'
  }, /*#__PURE__*/React.createElement(Text, {
    className: textClassName,
    appearance: appearance
  }, label), subInfo && renderSubInfo(subInfo)));
};

var IconOption = function IconOption(props) {
  var _classNames;

  var className = props.className,
      textClassName = props.textClassName,
      onClickHandler = props.onClickHandler,
      optionData = props.optionData,
      onUpdateActiveOption = props.onUpdateActiveOption,
      appearance = props.appearance,
      dataTest = props.dataTest;
  var label = optionData.label,
      icon = optionData.icon,
      disabled = optionData.disabled;
  var OptionClass = classnames((_classNames = {}, _defineProperty$2(_classNames, "".concat(className), true), _defineProperty$2(_classNames, 'Option--icon', icon), _classNames));
  return /*#__PURE__*/React.createElement("div", {
    className: OptionClass,
    onClick: onClickHandler,
    onMouseEnter: onUpdateActiveOption,
    "data-test": dataTest,
    "data-disabled": disabled
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    className: "Option-icon mr-4",
    name: icon,
    appearance: appearance
  }), /*#__PURE__*/React.createElement("div", {
    className: 'Option-label'
  }, /*#__PURE__*/React.createElement(Text, {
    className: textClassName,
    appearance: appearance
  }, label)));
};

var IconWithMetaOption = function IconWithMetaOption(props) {
  var _classNames;

  var className = props.className,
      textClassName = props.textClassName,
      renderSubInfo = props.renderSubInfo,
      onClickHandler = props.onClickHandler,
      optionData = props.optionData,
      onUpdateActiveOption = props.onUpdateActiveOption,
      appearance = props.appearance,
      dataTest = props.dataTest;
  var subInfo = optionData.subInfo,
      label = optionData.label,
      icon = optionData.icon,
      disabled = optionData.disabled;
  var OptionClass = classnames((_classNames = {}, _defineProperty$2(_classNames, "".concat(className), true), _defineProperty$2(_classNames, 'Option--icon', icon), _classNames));
  return /*#__PURE__*/React.createElement("div", {
    className: OptionClass,
    onClick: onClickHandler,
    onMouseEnter: onUpdateActiveOption,
    "data-test": dataTest,
    "data-disabled": disabled
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    className: "Option-icon mr-4",
    name: icon,
    appearance: appearance
  }), /*#__PURE__*/React.createElement("div", {
    className: 'Option-label'
  }, /*#__PURE__*/React.createElement(Text, {
    className: textClassName,
    appearance: appearance
  }, label), subInfo && renderSubInfo(subInfo)));
};

var _OptionTypeMapping;
var OptionTypeMapping = (_OptionTypeMapping = {}, _defineProperty$2(_OptionTypeMapping, 'DEFAULT', DefaultOption), _defineProperty$2(_OptionTypeMapping, 'WITH_ICON', IconOption), _defineProperty$2(_OptionTypeMapping, 'WITH_META', MetaOption), _defineProperty$2(_OptionTypeMapping, 'WITH_CHECKBOX', CheckboxOption), _defineProperty$2(_OptionTypeMapping, 'ICON_WITH_META', IconWithMetaOption), _OptionTypeMapping);

var Option = function Option(props) {
  var _classNames, _classNames2, _classNames3, _classNames4;

  var optionData = props.optionData,
      selected = props.selected,
      onClick = props.onClick,
      updateActiveOption = props.updateActiveOption,
      onChange = props.onChange,
      active = props.active,
      index = props.index,
      checkboxes = props.checkboxes,
      menu = props.menu;

  var _ref = optionData.optionType ? optionData : props,
      _ref$optionType = _ref.optionType,
      optionType = _ref$optionType === void 0 ? 'DEFAULT' : _ref$optionType;

  var disabled = optionData.disabled;
  var OptionClassName = classnames((_classNames = {}, _defineProperty$2(_classNames, 'Option', true), _defineProperty$2(_classNames, 'Option--active', active), _defineProperty$2(_classNames, 'Option--selected', selected && !menu), _defineProperty$2(_classNames, 'Option--disabled', disabled), _defineProperty$2(_classNames, 'OptionWrapper', true), _classNames));
  var CheckboxClassName = classnames((_classNames2 = {}, _defineProperty$2(_classNames2, 'Option-checkbox', true), _defineProperty$2(_classNames2, 'Option-checkbox--active', active), _defineProperty$2(_classNames2, 'OptionWrapper', true), _classNames2));
  var textClassName = classnames((_classNames3 = {}, _defineProperty$2(_classNames3, 'Option-text', true), _defineProperty$2(_classNames3, 'Option-text--wrap', !props.truncateOption), _classNames3));
  var customOptionClass = classnames((_classNames4 = {}, _defineProperty$2(_classNames4, 'OptionWrapper', true), _defineProperty$2(_classNames4, 'OptionWrapper--disabled', disabled), _classNames4));

  var onUpdateActiveOption = function onUpdateActiveOption() {
    if (disabled) return;
    if (updateActiveOption) updateActiveOption(index);
  };

  var onClickHandler = function onClickHandler(e) {
    e.stopPropagation();
    if (disabled) return;
    if (onClick) onClick();
  };

  var onChangeHandler = function onChangeHandler(e) {
    e.stopPropagation();
    if (disabled) return;
    if (onChange) onChange(e);
  };

  if (props.optionRenderer) {
    return /*#__PURE__*/React.createElement("div", _extends$3({
      className: customOptionClass,
      "data-disabled": disabled,
      onMouseEnter: onUpdateActiveOption
    }, !checkboxes && {
      onClick: onClick
    }), props.optionRenderer({
      optionData: optionData,
      selected: selected,
      onChange: onChange,
      active: active,
      index: index
    }));
  }

  var renderSubInfo = function renderSubInfo(subInfo) {
    var labelAppearance = disabled ? 'disabled' : selected ? 'white' : 'subtle';
    var iconAppearance = selected ? 'white' : 'disabled';

    if (typeof subInfo === 'string') {
      return /*#__PURE__*/React.createElement(Text, {
        appearance: labelAppearance
      }, subInfo);
    }

    var _subInfo$list = subInfo.list,
        list = _subInfo$list === void 0 ? [] : _subInfo$list,
        seperator = subInfo.seperator;
    return /*#__PURE__*/React.createElement(MetaList, {
      list: list,
      seperator: seperator,
      iconAppearance: iconAppearance,
      labelAppearance: labelAppearance,
      seperatorAppearance: iconAppearance
    });
  };

  var appearance = disabled ? 'disabled' : selected && !menu ? 'white' : 'default';
  var type = checkboxes ? 'WITH_CHECKBOX' : optionType;
  var component = OptionTypeMapping[type];
  return component({
    selected: selected,
    index: index,
    renderSubInfo: renderSubInfo,
    optionData: optionData,
    textClassName: textClassName,
    appearance: appearance,
    onClickHandler: onClickHandler,
    onChangeHandler: onChangeHandler,
    onUpdateActiveOption: onUpdateActiveOption,
    dataTest: "DesignSystem-DropdownOption--".concat(type),
    className: checkboxes ? CheckboxClassName : OptionClassName
  });
};

var PlaceholderParagraph = function PlaceholderParagraph(props) {
  var _classNames2;

  var length = props.length,
      size = props.size,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var classes = classnames(_defineProperty$2({
    'Placeholder--animation': true,
    PlaceholderParagraph: true
  }, "PlaceholderParagraph--".concat(size), size));
  var wrapperClass = classnames((_classNames2 = {
    'PlaceholderParagraph-wrapper': true
  }, _defineProperty$2(_classNames2, "PlaceholderParagraph-wrapper--length-".concat(length), length), _defineProperty$2(_classNames2, "PlaceholderParagraph-wrapper--size-".concat(size), size), _classNames2), className);
  return /*#__PURE__*/React.createElement("div", _extends$3({}, baseProps, {
    className: wrapperClass
  }), /*#__PURE__*/React.createElement("span", {
    className: classes
  }));
};
PlaceholderParagraph.displayName = 'PlaceholderParagraph';
PlaceholderParagraph.defaultProps = {
  length: 'medium'
};

var PlaceholderImage = function PlaceholderImage(props) {
  var _classNames;

  var _props$size = props.size,
      size = _props$size === void 0 ? 'small' : _props$size,
      round = props.round,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var classes = classnames((_classNames = {
    PlaceholderImage: true,
    'Placeholder--animation': true
  }, _defineProperty$2(_classNames, 'PlaceholderImage--round', round), _defineProperty$2(_classNames, "PlaceholderImage--".concat(size), size), _classNames), className);
  return /*#__PURE__*/React.createElement("span", _extends$3({}, baseProps, {
    className: classes
  }));
};
PlaceholderImage.displayName = 'PlaceholderImage';
PlaceholderImage.defaultProps = {
  size: 'small'
};

var Placeholder = function Placeholder(props) {
  var imageSize = props.imageSize,
      withImage = props.withImage,
      round = props.round,
      children = props.children,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var paragraphClasses = classnames(_defineProperty$2({
    'Placeholder-paragraph': true
  }, 'Placeholder-paragraph--withImage', withImage));
  var classes = classnames(_defineProperty$2({}, 'Placeholder', true), className);
  return /*#__PURE__*/React.createElement("div", _extends$3({
    "data-test": "DesignSystem-Placeholder"
  }, baseProps, {
    className: classes
  }), withImage && /*#__PURE__*/React.createElement(PlaceholderImage, {
    round: round,
    size: imageSize,
    "data-test": "DesignSystem-Placeholder--Image"
  }), children && /*#__PURE__*/React.createElement("div", {
    className: paragraphClasses,
    "data-test": "DesignSystem-Placeholder--Paragraph"
  }, children));
};
Placeholder.displayName = 'Placeholder';
Placeholder.defaultProps = {
  withImage: true,
  imageSize: 'small'
};

var Loading = function Loading(props) {
  var loadingType = props.loadingType;

  switch (loadingType) {
    case 'DEFAULT':
      return /*#__PURE__*/React__default.createElement(PlaceholderParagraph, {
        length: 'large'
      });

    case 'WITH_ICON':
      return /*#__PURE__*/React__default.createElement(Placeholder, {
        withImage: true,
        round: true
      }, /*#__PURE__*/React__default.createElement(PlaceholderParagraph, {
        length: "large"
      }));

    case 'WITH_META':
      return /*#__PURE__*/React__default.createElement(Placeholder, {
        withImage: false
      }, /*#__PURE__*/React__default.createElement(PlaceholderParagraph, {
        length: "large"
      }), /*#__PURE__*/React__default.createElement(PlaceholderParagraph, {
        length: "medium",
        size: "xxs"
      }));

    case 'WITH_CHECKBOX':
      return /*#__PURE__*/React__default.createElement(Placeholder, {
        withImage: true
      }, /*#__PURE__*/React__default.createElement(PlaceholderParagraph, {
        length: "large"
      }));

    case 'ICON_WITH_META':
      return /*#__PURE__*/React__default.createElement(Placeholder, {
        withImage: true,
        round: true,
        imageSize: 'medium'
      }, /*#__PURE__*/React__default.createElement(PlaceholderParagraph, {
        length: "large"
      }), /*#__PURE__*/React__default.createElement(PlaceholderParagraph, {
        length: "medium",
        size: "xxs"
      }));
  }

  return null;
};

var alignmentMapping = {
  right: 'bottom-start',
  left: 'bottom-end'
};

var DropdownList = function DropdownList(props) {
  var _classNames4, _classNames5;

  var _props$listOptions = props.listOptions,
      listOptions = _props$listOptions === void 0 ? [] : _props$listOptions,
      inputRef = props.inputRef,
      _props$align = props.align,
      align = _props$align === void 0 ? 'right' : _props$align,
      _props$optionType = props.optionType,
      optionType = _props$optionType === void 0 ? 'DEFAULT' : _props$optionType,
      _props$applyButtonLab = props.applyButtonLabel,
      applyButtonLabel = _props$applyButtonLab === void 0 ? 'Apply' : _props$applyButtonLab,
      _props$cancelButtonLa = props.cancelButtonLabel,
      cancelButtonLabel = _props$cancelButtonLa === void 0 ? 'Cancel' : _props$cancelButtonLa,
      _props$truncateOption = props.truncateOption,
      truncateOption = _props$truncateOption === void 0 ? true : _props$truncateOption,
      _props$withSelectAll = props.withSelectAll,
      withSelectAll = _props$withSelectAll === void 0 ? true : _props$withSelectAll,
      _props$maxHeight = props.maxHeight,
      maxHeight = _props$maxHeight === void 0 ? 200 : _props$maxHeight,
      customTrigger = props.customTrigger,
      selected = props.selected,
      tempSelected = props.tempSelected,
      previousSelected = props.previousSelected,
      remainingOptions = props.remainingOptions,
      firstEnabledOption = props.firstEnabledOption,
      dropdownOpen = props.dropdownOpen,
      menu = props.menu,
      searchTerm = props.searchTerm,
      showApplyButton = props.showApplyButton,
      withCheckbox = props.withCheckbox,
      withSearch = props.withSearch,
      popoverOptions = props.popoverOptions,
      onSearchChange = props.onSearchChange,
      optionRenderer = props.optionRenderer,
      applyOptions = props.applyOptions,
      cancelOptions = props.cancelOptions,
      toggleDropdown = props.toggleDropdown,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var dropdownRef = /*#__PURE__*/React.createRef();
  var triggerRef = /*#__PURE__*/React.createRef();
  var dropdownTriggerRef = /*#__PURE__*/React.createRef();
  var dropdownCancelButtonRef = /*#__PURE__*/React.createRef();
  var dropdownApplyButtonRef = /*#__PURE__*/React.createRef();

  var _React$useState = React.useState(),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      popoverStyle = _React$useState2[0],
      setPopoverStyle = _React$useState2[1];

  var _React$useState3 = React.useState(firstEnabledOption),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      cursor = _React$useState4[0],
      setCursor = _React$useState4[1];

  React.useEffect(function () {
    if (dropdownOpen) {
      var _triggerRef$current;

      var width = props.width,
          minWidth = props.minWidth,
          maxWidth = props.maxWidth;
      var popperWidth = (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 ? void 0 : _triggerRef$current.clientWidth;
      var popperMinWidth = showApplyButton ? 176 : menu ? 128 : popperWidth;
      var popperWrapperStyle = {
        width: width ? width : popperWidth,
        minWidth: minWidth ? minWidth : popperMinWidth,
        maxWidth: maxWidth ? maxWidth : '100%'
      };
      setPopoverStyle(popperWrapperStyle);
    }
  }, [dropdownOpen]);
  React.useEffect(function () {
    if (firstEnabledOption !== cursor) setCursor(firstEnabledOption);
  }, [firstEnabledOption]);
  var _props$triggerSize = props.triggerSize,
      triggerSize = _props$triggerSize === void 0 ? 'regular' : _props$triggerSize,
      _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? 'Select' : _props$placeholder,
      icon = props.icon,
      error = props.error,
      disabled = props.disabled,
      inlineLabel = props.inlineLabel,
      triggerLabel = props.triggerLabel;
  var CustomTrigger = customTrigger ? customTrigger(triggerLabel ? triggerLabel : placeholder) : /*#__PURE__*/React.createElement(React.Fragment, null);
  var NewCustomTrigger = /*#__PURE__*/React.cloneElement(CustomTrigger, {
    tabIndex: 0,
    ref: dropdownTriggerRef
  });
  var trigger = customTrigger ? NewCustomTrigger : /*#__PURE__*/React.createElement(DropdownButton, {
    placeholder: placeholder,
    triggerSize: triggerSize,
    open: dropdownOpen,
    icon: icon,
    disabled: disabled,
    inlineLabel: inlineLabel,
    menu: menu,
    error: error,
    ref: dropdownTriggerRef
  }, triggerLabel);
  var dropdownStyle = {
    maxHeight: maxHeight,
    overflowY: 'auto',
    overflowX: 'hidden'
  };

  var getDropdownClass = function getDropdownClass(index, isGroup) {
    var Dropdown = classnames(_defineProperty$2({}, 'Dropdown--border', isGroup && index !== 0));
    return Dropdown;
  };

  var getDropdownSectionClass = function getDropdownSectionClass(showClearButton) {
    var _classNames2;

    return classnames((_classNames2 = {}, _defineProperty$2(_classNames2, 'Dropdown-section', true), _defineProperty$2(_classNames2, 'Dropdown-section--withClear', showClearButton), _classNames2));
  };

  var dropdownClass = classnames(_defineProperty$2({}, 'Dropdown', true), className);
  var dropdownWrapperClass = classnames((_classNames4 = {}, _defineProperty$2(_classNames4, 'Dropdown-wrapper', true), _defineProperty$2(_classNames4, 'Dropdown-wrapper--wrap', !truncateOption), _classNames4));
  var SelectAllClass = classnames((_classNames5 = {}, _defineProperty$2(_classNames5, 'Option-checkbox', true), _defineProperty$2(_classNames5, 'Option-checkbox--active', cursor === 0), _defineProperty$2(_classNames5, 'OptionWrapper', true), _classNames5));

  var onToggleDropdown = function onToggleDropdown(open, type) {
    var _dropdownTriggerRef$c;

    toggleDropdown(open, type);
    if (!disabled) (_dropdownTriggerRef$c = dropdownTriggerRef.current) === null || _dropdownTriggerRef$c === void 0 ? void 0 : _dropdownTriggerRef$c.focus();
    setCursor(firstEnabledOption);
  };

  var onCancelOptions = function onCancelOptions() {
    var _dropdownTriggerRef$c2;

    cancelOptions();
    (_dropdownTriggerRef$c2 = dropdownTriggerRef.current) === null || _dropdownTriggerRef$c2 === void 0 ? void 0 : _dropdownTriggerRef$c2.focus();
  };

  var onApplyOptions = function onApplyOptions() {
    var _dropdownTriggerRef$c3;

    applyOptions();
    (_dropdownTriggerRef$c3 = dropdownTriggerRef.current) === null || _dropdownTriggerRef$c3 === void 0 ? void 0 : _dropdownTriggerRef$c3.focus();
  };

  var optionClickHandler = function optionClickHandler(item) {
    var _dropdownTriggerRef$c4;

    props.onOptionSelect(item);
    (_dropdownTriggerRef$c4 = dropdownTriggerRef.current) === null || _dropdownTriggerRef$c4 === void 0 ? void 0 : _dropdownTriggerRef$c4.focus();
  };

  var searchClearHandler = function searchClearHandler() {
    setCursor(firstEnabledOption);
    if (onSearchChange && searchTerm) onSearchChange('');
  };

  var searchHandler = function searchHandler(event) {
    setCursor(firstEnabledOption);
    if (onSearchChange) onSearchChange(event.target.value);
  };

  var updateActiveOption = function updateActiveOption(index, parentCheckbox) {
    var updatedIndex = withCheckbox && withSelectAll && !props.async && !parentCheckbox ? index + 1 : index;
    setCursor(updatedIndex);
  };

  var renderFooter = function renderFooter() {
    var _props$footerLabel = props.footerLabel,
        footerLabel = _props$footerLabel === void 0 ? 'Search for more options' : _props$footerLabel;
    return /*#__PURE__*/React.createElement("div", {
      className: 'Dropdown-footer'
    }, /*#__PURE__*/React.createElement(Text, {
      size: "small",
      appearance: 'subtle'
    }, footerLabel));
  };

  var renderGroups = function renderGroups(group, selectedGroup) {
    var onClearOptions = props.onClearOptions;
    var isClearDisabled = selected.every(function (option) {
      return option.disabled;
    });
    return /*#__PURE__*/React.createElement("div", {
      className: getDropdownSectionClass(selectedGroup)
    }, /*#__PURE__*/React.createElement(Text, {
      size: "small",
      appearance: 'subtle'
    }, group), selectedGroup && /*#__PURE__*/React.createElement(Button, {
      onClick: onClearOptions,
      disabled: isClearDisabled,
      appearance: "transparent",
      size: "tiny"
    }, "Clear"));
  };

  var renderApplyButton = function renderApplyButton() {
    var disable = _isEqual(previousSelected, tempSelected);

    return /*#__PURE__*/React.createElement("div", {
      className: 'Dropdown-buttonWrapper'
    }, /*#__PURE__*/React.createElement(Button, {
      ref: dropdownCancelButtonRef,
      className: "mr-4",
      appearance: 'basic',
      onClick: onCancelOptions,
      size: 'tiny',
      tabIndex: -1
    }, cancelButtonLabel), /*#__PURE__*/React.createElement(Button, {
      ref: dropdownApplyButtonRef,
      appearance: 'primary',
      disabled: disable,
      size: 'tiny',
      onClick: onApplyOptions
    }, applyButtonLabel));
  };

  var renderSearch = function renderSearch() {
    return /*#__PURE__*/React.createElement("div", {
      className: 'Dropdown-inputWrapper'
    }, /*#__PURE__*/React.createElement(Input, {
      name: "Dropdown-search",
      icon: 'search',
      value: searchTerm,
      placeholder: 'Search..',
      autoFocus: true,
      onChange: searchHandler,
      onClear: searchClearHandler,
      ref: inputRef,
      autoComplete: 'off',
      className: "Dropdown-input"
    }));
  };

  var renderLoading = function renderLoading(loadersLength) {
    var arr = Array(loadersLength).fill('Loading');
    var type = withCheckbox ? 'WITH_CHECKBOX' : optionType;
    return arr.map(function (option, ind) {
      return /*#__PURE__*/React.createElement("div", {
        className: "Option-loading",
        key: "".concat(option, "-").concat(ind)
      }, /*#__PURE__*/React.createElement(Loading, {
        loadingType: type
      }));
    });
  };

  var renderSelectAll = function renderSelectAll() {
    var _props$selectAllLabel = props.selectAllLabel,
        selectAllLabel = _props$selectAllLabel === void 0 ? 'Select All' : _props$selectAllLabel,
        selectAll = props.selectAll,
        onSelectAll = props.onSelectAll;
    var label = selectAllLabel.trim() ? selectAllLabel.trim() : 'Select All';
    return /*#__PURE__*/React.createElement("div", {
      className: SelectAllClass,
      onMouseEnter: function onMouseEnter(_e) {
        return updateActiveOption(0, true);
      }
    }, /*#__PURE__*/React.createElement(Checkbox, {
      label: label,
      onChange: onSelectAll,
      checked: selectAll.checked,
      indeterminate: selectAll.indeterminate,
      tabIndex: -1,
      className: "OptionCheckbox"
    }));
  };

  var renderOptions = function renderOptions(item, index) {
    // const selectAllPresent = withCheckbox
    //   && remainingOptions === 0
    //   && searchTerm === ''
    //   && withSelectAll;
    var selectAllPresent = _isSelectAllPresent(searchTerm, remainingOptions, withSelectAll, withCheckbox);

    var active = selectAllPresent ? index + 1 === cursor : index === cursor;
    var optionIsSelected = tempSelected.findIndex(function (option) {
      return option.value === item.value;
    }) !== -1;
    return /*#__PURE__*/React.createElement(Option, {
      optionData: item,
      truncateOption: truncateOption,
      selected: optionIsSelected,
      index: index,
      updateActiveOption: updateActiveOption,
      optionRenderer: optionRenderer,
      active: active,
      checkboxes: withCheckbox,
      menu: menu,
      onClick: function onClick() {
        return optionClickHandler(item);
      },
      onChange: function onChange(e) {
        return props.onSelect(item, e.target.checked);
      },
      optionType: props.optionType
    });
  };

  var renderDropdownSection = function renderDropdownSection() {
    var _props$selectedSectio = props.selectedSectionLabel,
        selectedSectionLabel = _props$selectedSectio === void 0 ? 'Selected Items' : _props$selectedSectio,
        _props$loadersCount = props.loadersCount,
        loadersCount = _props$loadersCount === void 0 ? 10 : _props$loadersCount,
        loadingOptions = props.loadingOptions;

    var selectAllPresent = _isSelectAllPresent(searchTerm, remainingOptions, withSelectAll, withCheckbox);

    if (loadersCount && loadingOptions) {
      return /*#__PURE__*/React.createElement("div", {
        className: 'Dropdown-loading'
      }, /*#__PURE__*/React.createElement("div", {
        className: "Dropdown-wrapper",
        style: dropdownStyle
      }, renderLoading(loadersCount)));
    }

    if (listOptions.length === 0 && !loadingOptions) {
      var _props$noResultMessag = props.noResultMessage,
          noResultMessage = _props$noResultMessag === void 0 ? 'No result found' : _props$noResultMessag;
      return /*#__PURE__*/React.createElement("div", {
        className: 'Dropdown-errorWrapper'
      }, /*#__PURE__*/React.createElement("div", {
        className: 'Option'
      }, /*#__PURE__*/React.createElement("div", {
        className: 'Option-subinfo'
      }, noResultMessage)));
    }

    return /*#__PURE__*/React.createElement("div", {
      className: dropdownWrapperClass,
      style: dropdownStyle,
      ref: dropdownRef
    }, selectAllPresent && renderSelectAll(), selected.length > 0 && renderGroups(selectedSectionLabel, true), selected.map(function (option, index) {
      return renderOptions(option, index);
    }), listOptions.map(function (option, index) {
      var prevGroup = index > 0 ? listOptions[index - 1].group : selected.length ? selectedSectionLabel : undefined;
      var currentGroup = option.group;
      var isGroup = prevGroup !== currentGroup;
      var updatedIndex = index + selected.length;
      return /*#__PURE__*/React.createElement("div", {
        className: getDropdownClass(updatedIndex, isGroup),
        key: index
      }, isGroup && currentGroup && renderGroups(currentGroup), renderOptions(option, updatedIndex));
    }), props.async && remainingOptions > 0 && renderFooter());
  };

  var focusOption = function focusOption(direction, classes) {
    var elements = document.querySelectorAll(classes);
    var updatedCursor = direction === 'down' ? cursor + 1 : cursor - 1;
    var startIndex = updatedCursor;
    var endIndex = direction === 'down' ? elements.length : -1;

    while (startIndex !== endIndex) {
      var node = elements[startIndex];

      if (node.getAttribute('data-disabled') !== 'true') {
        var element = elements[startIndex];
        if (element) scrollIntoView(dropdownRef.current, element);
        if (element !== undefined) setCursor(startIndex);
        break;
      }

      if (direction === 'down') {
        startIndex++;
      } else {
        startIndex--;
      }
    }
  };

  var onkeydown = function onkeydown(event) {
    var _dropdownApplyButtonR;

    var optionClass = '.OptionWrapper';

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        dropdownOpen ? focusOption('down', optionClass) : onToggleDropdown(!dropdownOpen);
        break;

      case 'ArrowUp':
        event.preventDefault();
        dropdownOpen ? focusOption('up', optionClass) : onToggleDropdown(!dropdownOpen);
        break;

      case 'Enter':
        var activeElement = document.activeElement;

        if (dropdownOpen && (inputRef.current === activeElement || dropdownTriggerRef.current === activeElement)) {
          event.preventDefault();
          var classes = withCheckbox ? "".concat(optionClass, " .Checkbox-input") : optionClass;
          var elements = document.querySelectorAll(classes);
          var element = elements[cursor];
          if (element) element.click();
        }

        if (!dropdownOpen) onToggleDropdown(!dropdownOpen);
        break;

      case 'Tab':
        if (!showApplyButton && dropdownOpen) {
          event.preventDefault();
          onToggleDropdown(false, 'onClick');
          return;
        }

        var currentElement = document.activeElement;
        var disabledApplyButton = (_dropdownApplyButtonR = dropdownApplyButtonRef.current) === null || _dropdownApplyButtonR === void 0 ? void 0 : _dropdownApplyButtonR.disabled;

        if ((currentElement === dropdownCancelButtonRef.current && disabledApplyButton || currentElement === dropdownApplyButtonRef.current) && dropdownOpen) {
          event.preventDefault();
          onToggleDropdown(false, 'onClick');
          return;
        }

        if (showApplyButton && dropdownOpen) {
          event.preventDefault();

          if (currentElement === dropdownCancelButtonRef.current) {
            var _dropdownApplyButtonR2;

            (_dropdownApplyButtonR2 = dropdownApplyButtonRef.current) === null || _dropdownApplyButtonR2 === void 0 ? void 0 : _dropdownApplyButtonR2.focus();
          } else {
            var _dropdownCancelButton;

            (_dropdownCancelButton = dropdownCancelButtonRef.current) === null || _dropdownCancelButton === void 0 ? void 0 : _dropdownCancelButton.focus();
          }
        }

        break;
    }
  };

  return /*#__PURE__*/React.createElement("div", _extends$3({}, baseProps, {
    className: dropdownClass,
    ref: triggerRef,
    onKeyDown: onkeydown
  }), /*#__PURE__*/React.createElement(Popover, _extends$3({
    onToggle: onToggleDropdown,
    trigger: trigger,
    triggerClass: !menu ? 'w-100' : '',
    open: dropdownOpen,
    customStyle: popoverStyle,
    position: alignmentMapping[align]
  }, popoverOptions), (withSearch || props.async) && renderSearch(), renderDropdownSection(), showApplyButton && withCheckbox && renderApplyButton()));
};

DropdownList.displayName = 'DropdownList';

var inputRef = /*#__PURE__*/React.createRef();

/**
 * ###Note:
 * 1. Dropdown props types:
 *  - async: fetchOptions
 *  - sync: options, loading
 * 2. Sync Dropdown:
 *  - Manually toggle loading state to update options (Options <= staticLimit).
 * 3. Callback Functions
 *  - Controlled Dropdown:
 *    * onUpdate: Called when user `clicks on option` / `clicks on Clear, Cancel or Apply button`.
 *    * onChange: Called when selected options are updated.
 *  - Uncontrolled Dropdown:
 *    * onChange: Called when user `clicks on option` / `clicks on Clear, or Apply button`.
 */
var Dropdown = /*#__PURE__*/function (_React$Component) {
  _inherits$1(Dropdown, _React$Component);

  var _super = _createSuper$1(Dropdown);

  function Dropdown(props) {
    var _this;

    _classCallCheck$1(this, Dropdown);

    _this = _super.call(this, props);

    _defineProperty$2(_assertThisInitialized$2(_this), "staticLimit", void 0);

    _defineProperty$2(_assertThisInitialized$2(_this), "getDisabledOptions", function () {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return options.filter(function (option) {
        return option.disabled;
      });
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "fetchOptionsFunction", function (searchTerm) {
      var options = _this.props.options;
      var filteredOptions = searchTerm ? getSearchedOptions(options, searchTerm) : options;
      return new Promise(function (resolve) {
        resolve({
          searchTerm: searchTerm,
          options: filteredOptions,
          count: filteredOptions.length
        });
      });
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "getUnSelectedOptions", function (options, init) {
      if (options.length) {
        if (!init) {
          return options.filter(function (option) {
            return _this.state.tempSelected.findIndex(function (item) {
              return item.value === option.value;
            }) === -1;
          });
        }

        var _this$props$selected = _this.props.selected,
            _selected2 = _this$props$selected === void 0 ? [] : _this$props$selected;

        var unSelectedGroup = options.filter(function (option) {
          return _isControlled(_this.props.selected) ? _selected2.findIndex(function (item) {
            return item.value === option.value;
          }) === -1 : !option.selected;
        });
        return unSelectedGroup;
      }

      return options;
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "getSelectedOptions", function (options, init) {
      var _this$props$selected2 = _this.props.selected,
          selected = _this$props$selected2 === void 0 ? [] : _this$props$selected2;

      if (options.length) {
        if (!init) return _this.state.tempSelected;
        var selectedGroup = _isControlled(_this.props.selected) ? selected : options.filter(function (option) {
          return option.selected;
        });
        return selectedGroup;
      }

      return [];
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "updateOptions", function (init, async) {
      var _this$state = _this.state,
          searchTerm = _this$state.searchTerm,
          selectAll = _this$state.selectAll,
          tempSelected = _this$state.tempSelected,
          previousSelected = _this$state.previousSelected;
      var updatedAsync = async === undefined ? _this.state.async : async;
      var _this$props = _this.props,
          fetchOptions = _this$props.fetchOptions,
          withCheckbox = _this$props.withCheckbox,
          withSearch = _this$props.withSearch;
      var fetchFunction = fetchOptions ? fetchOptions : _this.fetchOptionsFunction;
      fetchFunction(searchTerm).then(function (res) {
        var options = res.options,
            count = res.count;

        if (!res.searchTerm || res.searchTerm && res.searchTerm === _this.state.searchTerm) {
          var _inputRef$current;

          updatedAsync = searchTerm === '' ? count > _this.staticLimit : updatedAsync;
          var unSelectedGroup = _showSelectedItems(updatedAsync, searchTerm, withCheckbox) ? _this.getUnSelectedOptions(options, init) : options;
          var selectedGroup = searchTerm === '' ? _this.getSelectedOptions(options, init) : [];
          var optionsLength = searchTerm === '' ? count : _this.state.optionsLength;

          var disabledOptions = _this.getDisabledOptions(unSelectedGroup.slice(0, _this.staticLimit));

          _this.setState(_objectSpread2(_objectSpread2({}, _this.state), {}, {
            optionsLength: optionsLength,
            loading: false,
            async: updatedAsync,
            searchedOptionsLength: count,
            options: unSelectedGroup.slice(0, _this.staticLimit),
            tempSelected: init ? selectedGroup : tempSelected,
            previousSelected: init ? selectedGroup : previousSelected,
            selected: _showSelectedItems(updatedAsync, searchTerm, withCheckbox) ? selectedGroup : [],
            triggerLabel: _this.updateTriggerLabel(init ? selectedGroup : tempSelected),
            selectAll: !updatedAsync && init ? getSelectAll$1(selectedGroup, optionsLength, disabledOptions.length) : selectAll
          }));

          if (updatedAsync || withSearch) (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
        }
      });
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "updateSearchTerm", function (search) {
      _this.setState(_objectSpread2(_objectSpread2({}, _this.state), {}, {
        loading: true,
        searchInit: true,
        searchTerm: search
      }));
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "updateOnPopperToggle", function () {
      var _this$props2 = _this.props,
          withCheckbox = _this$props2.withCheckbox,
          showApplyButton = _this$props2.showApplyButton,
          onClose = _this$props2.onClose,
          name = _this$props2.name,
          _this$props2$selected = _this$props2.selected,
          selected = _this$props2$selected === void 0 ? [] : _this$props2$selected;
      var _this$state2 = _this.state,
          previousSelected = _this$state2.previousSelected,
          tempSelected = _this$state2.tempSelected,
          optionsLength = _this$state2.optionsLength,
          async = _this$state2.async,
          loading = _this$state2.loading,
          searchTerm = _this$state2.searchTerm,
          options = _this$state2.options;
      var popperIsOpen = _isOpenControlled(_this.props.open) ? _this.props.open : _this.state.open;

      var disabledOptionsCount = _this.getDisabledOptions(options).length;

      if (withCheckbox && showApplyButton) {
        var temporarySelected = _isControlled(_this.props.selected) ? selected : previousSelected;

        _this.setState({
          tempSelected: temporarySelected,
          selectAll: getSelectAll$1(temporarySelected, optionsLength, disabledOptionsCount),
          triggerLabel: _this.updateTriggerLabel(temporarySelected)
        });
      }

      if (_isOpenControlled(_this.props.open)) {
        _this.setState({
          open: popperIsOpen
        });
      }

      if (popperIsOpen) {
        var moveSelectedGroup = _showSelectedItems(async, searchTerm, withCheckbox) && !_isEqual(_this.state.selected, tempSelected);

        _this.setState({
          loading: moveSelectedGroup || loading || searchTerm !== '',
          searchInit: searchTerm !== '',
          searchTerm: ''
        });

        if (moveSelectedGroup) _this.updateOptions(false);
      }

      if (onClose && !popperIsOpen) {
        var arr = withCheckbox && showApplyButton ? _isControlled(_this.props.selected) ? selected : previousSelected : _this.state.tempSelected;
        var values = arr.map(function (option) {
          return option.value;
        });
        onClose(values, name);
      }
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "updateTriggerLabel", function () {
      var selectedArray = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var totalOptions = arguments.length > 1 ? arguments[1] : undefined;
      var selectedLength = selectedArray.length;
      if (selectedLength === 0) return '';
      var _this$props3 = _this.props,
          _this$props3$triggerO = _this$props3.triggerOptions,
          triggerOptions = _this$props3$triggerO === void 0 ? {} : _this$props3$triggerO,
          getLabel = _this$props3.getLabel;
      var customLabel = triggerOptions.customLabel,
          _triggerOptions$label = triggerOptions.labelLimit,
          labelLimit = _triggerOptions$label === void 0 ? 2 : _triggerOptions$label;
      var optionsLength = _this.state ? _this.state.optionsLength : totalOptions;
      var label = '';

      if (selectedLength <= labelLimit) {
        label = selectedArray.map(function (option) {
          return option.label;
        }).join(', ');
      } else {
        label = customLabel ? customLabel(selectedLength, optionsLength, selectedArray) : "".concat(selectedLength, " selected");
      }

      if (getLabel) getLabel(label);
      return label;
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "updateSelectedOptions", function (selectedArray, isSingleSelect, isControlled) {
      var _this$state3 = _this.state,
          optionsLength = _this$state3.optionsLength,
          previousSelected = _this$state3.previousSelected,
          selected = _this$state3.selected,
          loading = _this$state3.loading,
          open = _this$state3.open;
      var _this$props4 = _this.props,
          onChange = _this$props4.onChange,
          withCheckbox = _this$props4.withCheckbox,
          showApplyButton = _this$props4.showApplyButton,
          closeOnSelect = _this$props4.closeOnSelect,
          name = _this$props4.name,
          onPopperToggle = _this$props4.onPopperToggle;
      var updatePreviousSelected = withCheckbox && showApplyButton && isControlled;

      var disabledOptions = _this.getDisabledOptions(_this.state.options);

      var isClearClicked = selectedArray.length === 0 && selected.length > 0 || selectedArray.every(function (option) {
        return option.disabled;
      }) && !selected.every(function (option) {
        return option.disabled;
      });

      _this.setState(_objectSpread2(_objectSpread2({}, _this.state), {}, {
        tempSelected: selectedArray,
        triggerLabel: _this.updateTriggerLabel(selectedArray),
        selectAll: getSelectAll$1(selectedArray, optionsLength, disabledOptions.length),
        open: _isOpenControlled(_this.props.open) || withCheckbox ? open : !closeOnSelect,
        previousSelected: updatePreviousSelected ? selectedArray : previousSelected,
        selected: isClearClicked ? selectedArray : selected,
        loading: isClearClicked ? true : loading
      }));

      if (isClearClicked) _this.debounceClear();

      if (onChange && (!showApplyButton || isControlled)) {
        var values = selectedArray.map(function (item) {
          return item.value;
        });
        var selectedValues = isSingleSelect ? values[0] : values;
        onChange(selectedValues, name);
      }

      if (!withCheckbox && closeOnSelect && onPopperToggle && _isOpenControlled(_this.props.open)) {
        onPopperToggle(false, 'optionClick');
      }
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "onOptionSelect", function (option) {
      var _this$props5 = _this.props,
          onUpdate = _this$props5.onUpdate,
          selected = _this$props5.selected;

      if (_isControlled(selected)) {
        if (onUpdate) onUpdate('select-option', option);
        return;
      }

      _this.updateSelectedOptions([option], true);
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "onSelect", function (option, checked) {
      var _this$props6 = _this.props,
          onUpdate = _this$props6.onUpdate,
          selected = _this$props6.selected,
          showApplyButton = _this$props6.showApplyButton;

      if (_isControlled(selected) && !showApplyButton) {
        if (onUpdate) onUpdate(checked ? 'select-option' : 'deselect-option', option);
        return;
      }

      var tempSelected = _this.state.tempSelected;
      var selectedArray = tempSelected.slice();

      if (!checked) {
        var index = selectedArray.findIndex(function (item) {
          return item.value === option.value;
        });
        selectedArray.splice(index, 1);
      }

      selectedArray = checked ? selectedArray.concat(option) : selectedArray;

      _this.updateSelectedOptions(selectedArray, false);
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "onSelectAll", function (event) {
      var _this$props7 = _this.props,
          onUpdate = _this$props7.onUpdate,
          selected = _this$props7.selected,
          showApplyButton = _this$props7.showApplyButton;
      var _this$state4 = _this.state,
          tempSelected = _this$state4.tempSelected,
          options = _this$state4.options;

      if (_isControlled(selected) && !showApplyButton) {
        if (onUpdate) onUpdate(event.target.checked ? 'select-all' : 'deselect-all');
        return;
      }

      var selectedArr = tempSelected.slice();
      var selectedDisabledArray = selectedArr.filter(function (option) {
        return option.disabled;
      });
      var selectedArray = event.target.checked ? [].concat(_toConsumableArray(options.filter(function (option) {
        return !option.disabled;
      })), _toConsumableArray(selectedDisabledArray)) : selectedDisabledArray;

      _this.updateSelectedOptions(selectedArray, false);
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "debounceSearch", debounce$1(_this.props.searchDebounceDuration, function () {
      _this.setState({
        searchInit: false
      }, function () {
        _this.updateOptions(false);
      });
    }));

    _defineProperty$2(_assertThisInitialized$2(_this), "debounceClear", debounce$1(250, function () {
      return _this.updateOptions(false);
    }));

    _defineProperty$2(_assertThisInitialized$2(_this), "onClearOptions", function () {
      var _this$props8 = _this.props,
          selected = _this$props8.selected,
          name = _this$props8.name,
          onUpdate = _this$props8.onUpdate,
          showApplyButton = _this$props8.showApplyButton,
          onChange = _this$props8.onChange;
      var tempSelected = _this.state.tempSelected;
      var selectedArray = tempSelected.filter(function (option) {
        return option.disabled;
      });

      if (_isControlled(selected) && !showApplyButton) {
        if (onUpdate) onUpdate('clear-all');
        return;
      }

      _this.setState({
        selected: selectedArray,
        tempSelected: selectedArray,
        triggerLabel: '',
        loading: true
      });

      _this.debounceClear();

      if (onChange && !showApplyButton) onChange(selectedArray, name);
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "onTogglePopper", function (type) {
      var onPopperToggle = _this.props.onPopperToggle;

      if (onPopperToggle && _isOpenControlled(_this.props.open)) {
        onPopperToggle(false, type);
      }
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "onCancelOptions", function () {
      var _this$state5 = _this.state,
          previousSelected = _this$state5.previousSelected,
          tempSelected = _this$state5.tempSelected,
          optionsLength = _this$state5.optionsLength;
      var _this$props9 = _this.props,
          selected = _this$props9.selected,
          onUpdate = _this$props9.onUpdate,
          onClose = _this$props9.onClose,
          name = _this$props9.name;
      var popperIsOpen = _isOpenControlled(_this.props.open) ? _this.state.open : false;
      var values = previousSelected.map(function (option) {
        return option.value;
      });

      if (_isControlled(selected)) {
        if (onUpdate) onUpdate('cancel-selected', previousSelected, tempSelected);

        _this.onTogglePopper('cancelClick');

        return;
      }

      var label = _this.updateTriggerLabel(previousSelected);

      var disabledOptions = _this.getDisabledOptions(_this.state.options);

      _this.setState(_objectSpread2(_objectSpread2({}, _this.state), {}, {
        tempSelected: previousSelected,
        selectAll: getSelectAll$1(previousSelected, optionsLength, disabledOptions.length),
        triggerLabel: label,
        open: popperIsOpen
      }));

      if (onClose && !popperIsOpen) {
        onClose(values, name);
      }

      _this.onTogglePopper('cancelClick');
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "onApplyOptions", function () {
      var _this$state6 = _this.state,
          tempSelected = _this$state6.tempSelected,
          previousSelected = _this$state6.previousSelected;
      var _this$props10 = _this.props,
          onChange = _this$props10.onChange,
          selected = _this$props10.selected,
          onUpdate = _this$props10.onUpdate,
          onClose = _this$props10.onClose,
          name = _this$props10.name;
      var popperIsOpen = _isOpenControlled(_this.props.open) ? _this.state.open : false;
      var values = tempSelected.map(function (option) {
        return option.value;
      });

      if (_isControlled(selected)) {
        if (onUpdate) onUpdate('apply-selected', previousSelected, tempSelected);

        _this.onTogglePopper('applyClick');

        return;
      }

      _this.setState(_objectSpread2(_objectSpread2({}, _this.state), {}, {
        previousSelected: tempSelected,
        optionsApplied: true,
        open: popperIsOpen
      }));

      if (onChange) {
        onChange(values, name);
      }

      if (onClose && !popperIsOpen) {
        onClose(values, name);
      }

      _this.onTogglePopper('applyClick');
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "onToggleDropdown", function (updatedOpen, type) {
      if (_this.props.disabled) {
        return;
      }

      var onPopperToggle = _this.props.onPopperToggle;

      if (onPopperToggle && _isOpenControlled(_this.props.open)) {
        onPopperToggle(updatedOpen, type);
        return;
      }

      _this.setState({
        open: updatedOpen
      });
    });

    var _props$selected = props.selected,
        _selected = _props$selected === void 0 ? [] : _props$selected,
        _totalOptions = props.totalOptions,
        _withCheckbox = props.withCheckbox,
        _loading = props.loading,
        _open = props.open,
        _options = props.options;

    _this.staticLimit = Math.min(100, props.staticLimit);

    var _optionsLength = _totalOptions ? _totalOptions : _options.length;

    var _async = 'fetchOptions' in _this.props || _optionsLength > _this.staticLimit;

    var _selectedGroup = !_async ? _this.getSelectedOptions(_options, true) : [];

    var _disabledOptions = _this.getDisabledOptions(_options);

    _this.state = {
      async: _async,
      optionsLength: _optionsLength,
      open: _open,
      searchInit: false,
      searchedOptionsLength: _optionsLength,
      optionsApplied: false,
      options: _options || [],
      loading: _async ? true : _loading,
      searchTerm: '',
      tempSelected: _selectedGroup,
      previousSelected: _selectedGroup,
      selected: _showSelectedItems(_async, '', _withCheckbox) ? _selected : [],
      triggerLabel: _this.updateTriggerLabel(_selectedGroup, _optionsLength),
      selectAll: getSelectAll$1(_selectedGroup, _optionsLength, _disabledOptions.length)
    };
    return _this;
  }

  _createClass$1(Dropdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var async = this.state.async;
      if (async) this.updateOptions(true);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (!this.state.async) {
        var _this$props11 = this.props,
            loading = _this$props11.loading,
            fetchOptions = _this$props11.fetchOptions,
            _this$props11$options = _this$props11.options,
            _options2 = _this$props11$options === void 0 ? [] : _this$props11$options,
            withSearch = _this$props11.withSearch;

        var disabledOptionsCount = this.getDisabledOptions(_options2).length;

        if (prevProps.loading !== loading && !fetchOptions) {
          if (_options2.length > this.staticLimit) {
            this.updateOptions(true, true);
          } else {
            var _inputRef$current2;

            var selectedGroup = this.getSelectedOptions(_options2, true);
            this.setState(_objectSpread2(_objectSpread2({}, this.state), {}, {
              options: _options2,
              loading: loading,
              tempSelected: selectedGroup,
              previousSelected: selectedGroup,
              optionsLength: _options2.length,
              searchedOptionsLength: _options2.length,
              triggerLabel: this.updateTriggerLabel(selectedGroup),
              selectAll: getSelectAll$1(selectedGroup, this.state.optionsLength, disabledOptionsCount)
            }));
            if (withSearch) (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.focus();
          }
        }
      }

      if (this.props.selected !== undefined && prevProps.selected !== this.props.selected && prevProps.loading === this.props.loading) {
        var isSingleSelect = !this.props.withCheckbox;
        this.updateSelectedOptions(this.props.selected, isSingleSelect, true);
      }

      if (prevState.searchTerm !== this.state.searchTerm) {
        this.debounceSearch();
      }

      if (prevProps.open !== this.props.open || prevState.open !== this.state.open) {
        if (_isOpenControlled(this.props.open) && this.props.open === this.state.open) return;
        this.updateOnPopperToggle();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state7 = this.state,
          options = _this$state7.options,
          async = _this$state7.async,
          open = _this$state7.open,
          searchTerm = _this$state7.searchTerm,
          searchInit = _this$state7.searchInit,
          loading = _this$state7.loading,
          searchedOptionsLength = _this$state7.searchedOptionsLength,
          tempSelected = _this$state7.tempSelected,
          selectAll = _this$state7.selectAll,
          triggerLabel = _this$state7.triggerLabel,
          previousSelected = _this$state7.previousSelected;
      var _this$props12 = this.props,
          _this$props12$withSel = _this$props12.withSelectAll,
          withSelectAll = _this$props12$withSel === void 0 ? true : _this$props12$withSel,
          withCheckbox = _this$props12.withCheckbox;

      var _this$props13 = this.props,
          _this$props13$trigger = _this$props13.triggerOptions,
          triggerOptions = _this$props13$trigger === void 0 ? {} : _this$props13$trigger;
          _this$props13.selected;
          var rest = _objectWithoutProperties$1(_this$props13, ["triggerOptions", "selected"]);

      var remainingOptionsLen = searchedOptionsLength - options.length;
      var firstEnabledOption = _isSelectAllPresent(searchTerm, remainingOptionsLen, withSelectAll, withCheckbox) ? 0 : options.findIndex(function (option) {
        return !option.disabled;
      });
      return /*#__PURE__*/React.createElement(DropdownList, _extends$3({
        listOptions: options,
        inputRef: inputRef,
        remainingOptions: remainingOptionsLen,
        firstEnabledOption: firstEnabledOption,
        loadingOptions: loading,
        async: async,
        searchInit: searchInit,
        dropdownOpen: open,
        searchTerm: searchTerm,
        triggerLabel: triggerLabel,
        tempSelected: tempSelected,
        previousSelected: previousSelected,
        selected: this.state.selected,
        applyOptions: this.onApplyOptions,
        cancelOptions: this.onCancelOptions,
        toggleDropdown: this.onToggleDropdown,
        onClearOptions: this.onClearOptions,
        onSelect: this.onSelect,
        selectAll: selectAll,
        onSearchChange: this.updateSearchTerm,
        onOptionSelect: this.onOptionSelect,
        onSelectAll: this.onSelectAll,
        customTrigger: triggerOptions.customTrigger
      }, rest));
    }
  }]);

  return Dropdown;
}(React.Component);

_defineProperty$2(Dropdown, "defaultProps", {
  triggerOptions: {},
  options: [],
  closeOnSelect: true,
  staticLimit: 50,
  searchDebounceDuration: 300
});

var renderLink = function renderLink(item, _onClick) {
  return /*#__PURE__*/React.createElement(Link, {
    href: item.link,
    onClick: function onClick(ev) {
      if (_onClick) {
        ev.preventDefault();

        _onClick(item.link);
      }
    },
    appearance: "subtle",
    size: "tiny"
  }, item.label);
};

var renderDropdown = function renderDropdown(list, onClick) {
  var options = list.map(function (item) {
    return {
      label: item.label,
      value: item.link
    };
  });

  var customTrigger = function customTrigger() {
    return /*#__PURE__*/React.createElement(Button, {
      size: "tiny",
      appearance: "transparent",
      icon: "more_horiz_filled",
      "data-test": "DesignSystem-Breadcrumbs-more"
    });
  };

  return /*#__PURE__*/React.createElement(Dropdown, {
    triggerSize: 'tiny',
    triggerOptions: {
      customTrigger: customTrigger
    },
    options: options,
    menu: true,
    onChange: function onChange(selected) {
      if (onClick) {
        onClick(selected);
      }
    }
  });
};

var Breadcrumbs = function Breadcrumbs(props) {
  var list = props.list,
      onClick = props.onClick,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var BreadcrumbClass = classnames(_defineProperty$2({}, 'Breadcrumbs', true), className);
  return /*#__PURE__*/React.createElement("div", _extends$3({
    "data-test": "DesignSystem-Breadcrumbs"
  }, baseProps, {
    className: BreadcrumbClass
  }), list.length <= 4 ? list.map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: "Breadcrumbs-item",
      "data-test": "DesignSystem-Breadcrumbs-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "Breadcrumbs-link"
    }, renderLink(item, onClick)), /*#__PURE__*/React.createElement("span", {
      className: "Breadcrumbs-itemSeparator"
    }, "/"));
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "Breadcrumbs-item",
    "data-test": "DesignSystem-Breadcrumbs-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "Breadcrumbs-link"
  }, renderLink(list[0], onClick)), /*#__PURE__*/React.createElement("span", {
    className: "Breadcrumbs-itemSeparator"
  }, "/")), /*#__PURE__*/React.createElement("div", {
    className: "Breadcrumbs-dropdown"
  }, renderDropdown(list.slice(1, list.length - 1), onClick), /*#__PURE__*/React.createElement("span", {
    className: "Breadcrumbs-itemSeparator"
  }, "/")), /*#__PURE__*/React.createElement("div", {
    className: "Breadcrumbs-item",
    "data-test": "DesignSystem-Breadcrumbs-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "Breadcrumbs-link"
  }, renderLink(list[list.length - 1], onClick)), /*#__PURE__*/React.createElement("span", {
    className: "Breadcrumbs-itemSeparator"
  }, "/"))));
};

var Spinner = function Spinner(props) {
  var appearance = props.appearance,
      size = props.size,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var wrapperClasses = classnames(_defineProperty$2({
    Spinner: true
  }, "Spinner--".concat(size), size), className);
  var circleClasses = classnames(_defineProperty$2({
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
  return /*#__PURE__*/React.createElement("svg", _extends$3({}, baseProps, {
    className: wrapperClasses
  }, svgProps), /*#__PURE__*/React.createElement("circle", _extends$3({
    className: circleClasses
  }, circleProps)));
};
Spinner.displayName = 'Spinner';
Spinner.defaultProps = {
  appearance: 'primary',
  size: 'medium'
};

var sizeMapping$2 = {
  tiny: 12,
  regular: 16,
  large: 20
};
var Button = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames, _classNames2, _classNames3;

  var _props$size = props.size,
      size = _props$size === void 0 ? 'regular' : _props$size,
      _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'basic' : _props$appearance,
      _props$iconAlign = props.iconAlign,
      iconAlign = _props$iconAlign === void 0 ? 'left' : _props$iconAlign,
      _props$tabIndex = props.tabIndex,
      tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex,
      largeIcon = props.largeIcon,
      type = props.type,
      children = props.children,
      icon = props.icon,
      expanded = props.expanded,
      selected = props.selected,
      loading = props.loading,
      disabled = props.disabled,
      className = props.className,
      rest = _objectWithoutProperties$1(props, ["size", "appearance", "iconAlign", "tabIndex", "largeIcon", "type", "children", "icon", "expanded", "selected", "loading", "disabled", "className"]);

  var buttonClass = classnames((_classNames = {}, _defineProperty$2(_classNames, 'Button', true), _defineProperty$2(_classNames, 'Button--expanded', expanded), _defineProperty$2(_classNames, "Button--".concat(size), size), _defineProperty$2(_classNames, "Button--".concat(size, "Square"), !children), _defineProperty$2(_classNames, "Button--".concat(appearance), appearance), _defineProperty$2(_classNames, 'Button--selected', selected && (appearance === 'basic' || appearance === 'transparent')), _defineProperty$2(_classNames, "Button--iconAlign-".concat(iconAlign), children && iconAlign), _defineProperty$2(_classNames, "".concat(className), className), _classNames));
  var iconClass = classnames((_classNames2 = {}, _defineProperty$2(_classNames2, 'Button-icon', true), _defineProperty$2(_classNames2, "Button-icon--".concat(iconAlign), children && iconAlign), _classNames2));
  var spinnerClass = classnames((_classNames3 = {}, _defineProperty$2(_classNames3, 'Button-spinner', true), _defineProperty$2(_classNames3, "Button-spinner--".concat(iconAlign), children && iconAlign), _classNames3));
  return /*#__PURE__*/React.createElement("button", _extends$3({
    "data-test": "DesignSystem-Button",
    ref: ref,
    type: type,
    className: buttonClass,
    disabled: disabled || loading,
    tabIndex: tabIndex
  }, rest), loading && /*#__PURE__*/React.createElement("span", {
    className: spinnerClass
  }, /*#__PURE__*/React.createElement(Spinner, {
    size: "small",
    appearance: appearance === 'basic' || appearance === 'transparent' ? 'secondary' : 'white'
  })), icon && !loading && /*#__PURE__*/React.createElement("div", {
    className: iconClass
  }, /*#__PURE__*/React.createElement(Icon, {
    "data-test": "DesignSystem-Button--Icon",
    name: icon,
    appearance: disabled ? 'disabled' : appearance === 'basic' || appearance === 'transparent' ? selected ? 'info' : 'default' : 'white',
    size: largeIcon && !children ? sizeMapping$2[size] + 4 : sizeMapping$2[size]
  })), children);
});
Button.displayName = 'Button';

var config = {
  yearBlockRange: 12,
  yearsInRow: 3,
  monthBlock: 12,
  monthsInRow: 3,
  daysInRow: 7,
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  days: {
    small: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    large: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  }
};

var yearBlockRange = config.yearBlockRange;
var getIndexOfDay = function getIndexOfDay(day) {
  return ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'].indexOf(day);
};
var getYearBlock = function getYearBlock(year) {
  return year - year % yearBlockRange;
};
var getDaysInMonth = function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
};
var getFirstDayOfMonth = function getFirstDayOfMonth(year, month) {
  return new Date(year, month).getDay();
};
var getDateInfo = function getDateInfo(d) {
  if (d) {
    var dateVal = convertToDate(d);

    if (dateVal) {
      var year = dateVal.getFullYear();
      var month = dateVal.getMonth();
      var day = dateVal.getDay();
      var date = dateVal.getDate();
      var decadeYear = getYearBlock(year);
      return {
        decadeYear: decadeYear,
        year: year,
        month: month,
        day: day,
        date: date
      };
    } else {
      return {};
    }
  }

  return {};
};
var convertToDate = function convertToDate(d, format, validators) {
  var dateVal;

  if (d) {
    if (typeof d === 'number') {
      dateVal = new Date(d);
    } else if (typeof d === 'string') {
      return format ? translateToDate(format, d, validators) : undefined;
    } else if (!(d instanceof Date)) {
      var _ref = d,
          year = _ref.year,
          month = _ref.month,
          date = _ref.date;
      dateVal = new Date(year, month, date, 0, 0, 0);
    } else {
      dateVal = d;
    }
  }

  return dateVal;
};
var compareDecade = function compareDecade(d, operator, currDecade) {
  if (d) {
    var _getDateInfo = getDateInfo(d),
        limitDecade = _getDateInfo.decadeYear;

    switch (operator) {
      case 'less':
        if (limitDecade < currDecade) return true;
        break;

      case 'more':
        if (limitDecade > currDecade) return true;
        break;

      case 'equal':
        if (limitDecade === currDecade) return true;
        break;
    }
  }

  return false;
};
var compareDate = function compareDate(d, operator, currYear, currMonth, currDate) {
  if (d) {
    var _getDateInfo2 = getDateInfo(d),
        limitYear = _getDateInfo2.year,
        limitMonth = _getDateInfo2.month,
        limitDate = _getDateInfo2.date;

    switch (operator) {
      case 'less':
        if (limitYear < currYear) return true;
        if (limitYear > currYear) return false;

        if (currMonth !== undefined) {
          if (limitMonth < currMonth) return true;
          if (limitMonth > currMonth) return false;
        }

        if (currDate !== undefined && limitDate < currDate) return true;
        break;

      case 'more':
        if (limitYear > currYear) return true;
        if (limitYear < currYear) return false;

        if (currMonth !== undefined) {
          if (limitMonth > currMonth) return true;
          if (limitMonth < currMonth) return false;
        }

        if (currDate !== undefined && limitDate > currDate) return true;
        break;

      case 'equal':
        if (currDate !== undefined) {
          if (limitYear === currYear && limitMonth === currMonth && limitDate === currDate) return true;
        } else if (currMonth !== undefined) {
          if (limitYear === currYear && limitMonth === currMonth) return true;
        } else if (limitYear === currYear) return true;

    }
  }

  return false;
};
var translateToString = function translateToString(format, d) {
  if (format && d) {
    var _getDateInfo3 = getDateInfo(d),
        year = _getDateInfo3.year,
        month = _getDateInfo3.month,
        date = _getDateInfo3.date;

    var separator = format.includes('/') ? '/' : '-';
    var f = format.split(separator);
    var val = f.reduce(function (out, curr, i) {
      switch (curr) {
        case 'mm':
          out += (month < 9 && '0') + (month + 1);
          break;

        case 'yyyy':
          out += year;
          break;

        case 'dd':
          out += (date < 10 && '0') + date;
          break;
      }

      if (i !== f.length - 1) out += separator;
      return out;
    }, '');
    return val;
  }

  return '';
};
var translateToDate = function translateToDate(format, val) {
  var validators = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (isValid(validators, val, format)) {
    var separator = format.includes('/') ? '/' : '-';
    var year = -1,
        month = -1,
        date = -1;
    var v = val.split(separator);
    format.split(separator).forEach(function (f, i) {
      switch (f) {
        case 'mm':
          month = +v[i] - 1;
          break;

        case 'yyyy':
          year = +v[i];
          break;

        case 'dd':
          date = +v[i];
          break;
      }
    });
    var d = convertToDate({
      year: year,
      month: month,
      date: date
    });
    return d;
  } else {
    return undefined;
  }
};

var Calendar = /*#__PURE__*/function (_React$Component) {
  _inherits$1(Calendar, _React$Component);

  var _super = _createSuper$1(Calendar);

  function Calendar(props) {
    var _this;

    _classCallCheck$1(this, Calendar);

    _this = _super.call(this, props);

    _defineProperty$2(_assertThisInitialized$2(_this), "updateState", function (year, month, date) {
      _this.setState({
        year: year,
        month: month,
        date: date
      });
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "getDateValue", function (year, month, date) {
      var _this$props = _this.props,
          disabledBefore = _this$props.disabledBefore,
          disabledAfter = _this$props.disabledAfter;
      var d = new Date(year, month, date);

      if (compareDate(disabledBefore, 'more', year, month, date) || compareDate(disabledAfter, 'less', year, month, date)) {
        return undefined;
      }

      return d;
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "getNavDateInfo", function (index) {
      var _this$state = _this.state,
          yearBlockNav = _this$state.yearBlockNav,
          yearNav = _this$state.yearNav,
          monthNav = _this$state.monthNav;
      var monthBlock = config.monthBlock;
      var yearBlock = yearBlockNav;
      var month = (monthNav + index) % monthBlock;
      var year = yearNav + (index !== 0 && month < monthNav ? 1 : 0);
      return {
        yearBlock: yearBlock,
        year: year,
        month: month
      };
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "getInRangeError", function () {
      var _this$props2 = _this.props,
          rangePicker = _this$props2.rangePicker,
          rangeLimit = _this$props2.rangeLimit;
      var _this$state2 = _this.state,
          startDateState = _this$state2.startDate,
          endDateState = _this$state2.endDate,
          hoverDateState = _this$state2.hoverDate;

      if (rangePicker && rangeLimit) {
        var _getDateInfo = getDateInfo(startDateState),
            startYear = _getDateInfo.year,
            startMonth = _getDateInfo.month,
            _startDate2 = _getDateInfo.date;

        var _getDateInfo2 = getDateInfo(endDateState),
            endYear = _getDateInfo2.year,
            endMonth = _getDateInfo2.month,
            _endDate2 = _getDateInfo2.date;

        var _getDateInfo3 = getDateInfo(hoverDateState),
            hoverYear = _getDateInfo3.year,
            hoverMonth = _getDateInfo3.month,
            hoverDate = _getDateInfo3.date;

        var limitDate;

        if (startDateState) {
          limitDate = new Date(startDateState);
          limitDate.setDate(_startDate2 + rangeLimit);
          return compareDate(limitDate, 'less', hoverYear, hoverMonth, hoverDate + 1) || compareDate(limitDate, 'less', endYear, endMonth, _endDate2 + 1);
        }

        if (endDateState) {
          limitDate = new Date(endDateState);
          limitDate.setDate(_endDate2 - rangeLimit);
          return compareDate(limitDate, 'more', hoverYear, hoverMonth, hoverDate - 1) || compareDate(limitDate, 'more', startYear, startMonth, _startDate2 - 1);
        }
      }

      return false;
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "selectYear", function (year) {
      return function () {
        _this.updateState(year);

        _this.setState({
          view: 'month'
        });
      };
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "selectMonth", function (month) {
      return function () {
        _this.updateState(_this.state.yearNav, month);

        _this.setState({
          view: 'date'
        });
      };
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "selectDate", function (index, date) {
      var _this$getNavDateInfo = _this.getNavDateInfo(index),
          year = _this$getNavDateInfo.year,
          month = _this$getNavDateInfo.month;

      _this.updateState(year, month, date);

      var d = _this.getDateValue(year, month, date);

      _this.setState({
        currDate: d
      });
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "onNavIconClickHandler", function (type) {
      return function () {
        var _this$state3 = _this.state,
            view = _this$state3.view,
            yearBlockNav = _this$state3.yearBlockNav,
            yearNav = _this$state3.yearNav,
            monthNav = _this$state3.monthNav;
        var yearBlockRange = config.yearBlockRange,
            monthBlock = config.monthBlock;

        switch (view) {
          case 'year':
            if (type === 'prev') _this.setState({
              yearBlockNav: yearBlockNav - yearBlockRange
            });
            if (type === 'next') _this.setState({
              yearBlockNav: yearBlockNav + yearBlockRange
            });
            break;

          case 'month':
            if (type === 'prev') _this.setState({
              yearNav: yearNav - 1
            });
            if (type === 'next') _this.setState({
              yearNav: yearNav + 1
            });
            break;

          case 'date':
            if (type === 'prev') {
              if (monthNav === 0) _this.setState({
                yearNav: yearNav - 1
              });

              _this.setState({
                monthNav: (monthBlock + monthNav - 1) % monthBlock
              });
            }

            if (type === 'next') {
              if (monthNav === monthBlock - 1) _this.setState({
                yearNav: yearNav + 1
              });

              _this.setState({
                monthNav: (monthNav + 1) % monthBlock
              });
            }

            break;
        }
      };
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "renderJumpButton", function (type) {
      var _this$props3 = _this.props,
          disabledBefore = _this$props3.disabledBefore,
          disabledAfter = _this$props3.disabledAfter;
      var _this$state4 = _this.state,
          view = _this$state4.view,
          yearBlockNav = _this$state4.yearBlockNav,
          yearNav = _this$state4.yearNav,
          monthNav = _this$state4.monthNav;
      var disabled = false;

      switch (view) {
        case 'year':
          if (type === 'prev') {
            disabled = compareDecade(disabledBefore, 'more', yearBlockNav) || compareDecade(disabledBefore, 'equal', yearBlockNav);
          }

          if (type === 'next') {
            disabled = compareDecade(disabledAfter, 'less', yearBlockNav) || compareDecade(disabledAfter, 'equal', yearBlockNav);
          }

          break;

        case 'month':
          if (type === 'prev') {
            disabled = compareDate(disabledBefore, 'more', yearNav - 1);
          }

          if (type === 'next') {
            disabled = compareDate(disabledAfter, 'less', yearNav + 1);
          }

          break;

        case 'date':
          if (type === 'prev') {
            disabled = compareDate(disabledBefore, 'more', yearNav, monthNav - 1);
          }

          if (type === 'next') {
            disabled = compareDate(disabledAfter, 'less', yearNav, monthNav + 1);
          }

          break;
      }

      var headerIconClass = classnames(_defineProperty$2({
        'Calendar-headerIcon': true
      }, "Calendar-headerIcon--".concat(type), type));
      return /*#__PURE__*/React.createElement(Button, {
        className: headerIconClass,
        appearance: "transparent",
        icon: "arrow_".concat(type === 'next' ? 'forward' : 'back'),
        disabled: disabled,
        onClick: _this.onNavIconClickHandler(type)
      });
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "onNavHeadingClickHandler", function (currView) {
      return function () {
        var monthsInView = _this.props.monthsInView;
        var jumpView = _this.props.jumpView;

        if (jumpView) {
          if (monthsInView > 1) jumpView = false;
        }

        if (jumpView) {
          if (currView === 'year') _this.setState({
            view: 'date'
          });
          if (currView === 'month') _this.setState({
            view: 'year'
          });
          if (currView === 'date') _this.setState({
            view: 'month'
          });
        }
      };
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "renderHeaderContent", function (index) {
      var _this$props4 = _this.props,
          size = _this$props4.size,
          monthsInView = _this$props4.monthsInView;
      var _this$state5 = _this.state,
          view = _this$state5.view,
          yearBlockNav = _this$state5.yearBlockNav;
      var yearBlockRange = config.yearBlockRange,
          months = config.months;

      var _this$getNavDateInfo2 = _this.getNavDateInfo(index),
          yearNavVal = _this$getNavDateInfo2.year,
          monthNavVal = _this$getNavDateInfo2.month;

      var headerContentClass = classnames({
        'Calendar-headerContent': true,
        'Calendar-headerContent--noIcon-left': index === monthsInView - 1,
        'Calendar-headerContent--noIcon-right': index === 0
      });
      var headerContent = '';
      if (view === 'year') headerContent = "".concat(yearBlockNav, " - ").concat(yearBlockNav + (yearBlockRange - 1));
      if (view === 'month') headerContent = "".concat(yearNavVal);

      var renderHeading = function renderHeading(content) {
        if (size === 'small') {
          return /*#__PURE__*/React.createElement(Text, {
            weight: "strong"
          }, content);
        }

        return /*#__PURE__*/React.createElement(Heading, {
          size: "s"
        }, content);
      };

      return /*#__PURE__*/React.createElement("div", {
        className: headerContentClass
      }, view !== 'date' && /*#__PURE__*/React.createElement("span", {
        onClick: _this.onNavHeadingClickHandler(view)
      }, renderHeading(headerContent)), view === 'date' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
        onClick: _this.onNavHeadingClickHandler(view)
      }, renderHeading(months[monthNavVal])), /*#__PURE__*/React.createElement("span", {
        className: "ml-4",
        onClick: _this.onNavHeadingClickHandler('month')
      }, renderHeading(yearNavVal))));
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "renderBodyYear", function () {
      var yearBlockRange = config.yearBlockRange,
          yearsInRow = config.yearsInRow;
      var _this$props5 = _this.props,
          size = _this$props5.size,
          rangePicker = _this$props5.rangePicker,
          disabledBefore = _this$props5.disabledBefore,
          disabledAfter = _this$props5.disabledAfter;
      var _this$state6 = _this.state,
          yearBlockNav = _this$state6.yearBlockNav,
          yearNav = _this$state6.yearNav;
      var noOfRows = Math.ceil(yearBlockRange / yearsInRow);
      return Array.from({
        length: noOfRows
      }, function (_y, row) {
        return /*#__PURE__*/React.createElement("div", {
          key: row,
          className: "Calendar-valueRow"
        }, Array.from({
          length: yearsInRow
        }, function (_x, col) {
          var offset = yearsInRow * row + col;
          if (offset === yearBlockNav) return undefined;
          var year = yearBlockNav + offset;
          var disabled = compareDate(disabledBefore, 'more', year) || compareDate(disabledAfter, 'less', year);
          var active = !disabled && !rangePicker && yearNav === year && year === _this.state.year;
          var valueClass = classnames(_defineProperty$2({
            'Calendar-value': true,
            'Calendar-value--active': active,
            'Calendar-value--disabled': disabled,
            'Calendar-yearValue': true
          }, "Calendar-yearValue--".concat(size), size));
          return /*#__PURE__*/React.createElement("div", {
            key: "".concat(row, "-").concat(col),
            "data-test": "DesignSystem-Calendar--yearValue",
            className: valueClass,
            onClick: _this.selectYear(year)
          }, /*#__PURE__*/React.createElement(Text, {
            size: size === 'small' ? 'small' : 'regular',
            appearance: active ? 'white' : disabled ? 'disabled' : 'default'
          }, year));
        }));
      });
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "renderBodyMonth", function () {
      var monthBlock = config.monthBlock,
          monthsInRow = config.monthsInRow,
          months = config.months;
      var _this$props6 = _this.props,
          size = _this$props6.size,
          disabledBefore = _this$props6.disabledBefore,
          disabledAfter = _this$props6.disabledAfter;
      var _this$state7 = _this.state,
          yearNav = _this$state7.yearNav,
          monthNav = _this$state7.monthNav,
          year = _this$state7.year;
      var noOfRows = Math.ceil(monthBlock / monthsInRow);
      return Array.from({
        length: noOfRows
      }, function (_y, row) {
        return /*#__PURE__*/React.createElement("div", {
          key: row,
          className: "Calendar-valueRow"
        }, Array.from({
          length: monthsInRow
        }, function (_x, col) {
          var month = monthsInRow * row + col;
          var disabled = compareDate(disabledBefore, 'more', yearNav, month) || compareDate(disabledAfter, 'less', yearNav, month);
          var active = !disabled && year === yearNav && monthNav === month;
          var valueClass = classnames(_defineProperty$2({
            'Calendar-value': true,
            'Calendar-value--active': active,
            'Calendar-value--dummy': disabled,
            'Calendar-monthValue': true
          }, "Calendar-monthValue--".concat(size), size));
          return /*#__PURE__*/React.createElement("div", {
            key: "".concat(row, "-").concat(col),
            "data-test": "DesignSystem-Calendar--monthValue",
            className: valueClass,
            onClick: _this.selectMonth(month)
          }, /*#__PURE__*/React.createElement(Text, {
            size: size === 'small' ? 'small' : 'regular',
            appearance: active ? 'white' : disabled ? 'disabled' : 'default'
          }, months[month]));
        }));
      });
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "onDateRowMouseLeaveHandler", function () {
      var rangePicker = _this.props.rangePicker;

      if (rangePicker) {
        _this.setState({
          hoverDate: undefined
        });
      }
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "renderBodyDate", function (index) {
      var daysInRow = config.daysInRow,
          days = config.days;
      var _this$props7 = _this.props,
          size = _this$props7.size,
          firstDayOfWeek = _this$props7.firstDayOfWeek;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "Calendar-dayValues"
      }, Array.from({
        length: 7
      }, function (_x, day) {
        var valueClass = classnames({
          'Calendar-valueWrapper': true
        });
        var dayValue = (day + daysInRow + getIndexOfDay(firstDayOfWeek)) % daysInRow;
        return /*#__PURE__*/React.createElement(Subheading, {
          key: day,
          className: valueClass,
          appearance: "disabled"
        }, days[size][dayValue]);
      })), /*#__PURE__*/React.createElement("div", {
        className: "Calendar-dateValues",
        onMouseLeave: _this.onDateRowMouseLeaveHandler
      }, _this.renderDateValues(index)));
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "renderDateValues", function (index) {
      var daysInRow = config.daysInRow;
      var _this$props8 = _this.props,
          size = _this$props8.size,
          rangePicker = _this$props8.rangePicker,
          firstDayOfWeek = _this$props8.firstDayOfWeek,
          disabledBefore = _this$props8.disabledBefore,
          disabledAfter = _this$props8.disabledAfter;
      var _this$state8 = _this.state,
          startDate = _this$state8.startDate,
          endDate = _this$state8.endDate,
          hoverDate = _this$state8.hoverDate;
      var _this$state9 = _this.state,
          yearState = _this$state9.year,
          monthState = _this$state9.month,
          dateState = _this$state9.date;

      var _this$getNavDateInfo3 = _this.getNavDateInfo(index),
          yearNavVal = _this$getNavDateInfo3.year,
          monthNavVal = _this$getNavDateInfo3.month;

      var dayRange = getDaysInMonth(yearNavVal, monthNavVal);
      var dayDiff = getFirstDayOfMonth(yearNavVal, monthNavVal) - getIndexOfDay(firstDayOfWeek);
      var dummyDays = (dayDiff + daysInRow) % daysInRow;
      var noOfRows = Math.ceil((dayRange + dummyDays) / daysInRow);

      var inRangeError = _this.getInRangeError();

      var onClickHandler = function onClickHandler(date) {
        return function () {
          if (rangePicker) {
            if (startDate && endDate) {
              _this.selectDate(index, date);
            } else {
              if (!inRangeError) _this.selectDate(index, date);
            }
          } else {
            _this.selectDate(index, date);
          }
        };
      };

      var onMouseOverHandler = function onMouseOverHandler(date) {
        return function () {
          if (rangePicker) {
            var d = _this.getDateValue(yearNavVal, monthNavVal, date);

            if (!(startDate && endDate)) {
              _this.setState({
                hoverDate: d
              });
            }
          }
        };
      };

      return Array.from({
        length: noOfRows
      }, function (_y, row) {
        if (dummyDays < daysInRow) {
          return /*#__PURE__*/React.createElement("div", {
            key: row,
            className: "Calendar-valueRow"
          }, Array.from({
            length: daysInRow
          }, function (_x, col) {
            var date = daysInRow * row + col - dummyDays + 1;
            var dummy = date <= 0 || date > dayRange;
            var disabled = !dummy && (compareDate(disabledBefore, 'more', yearNavVal, monthNavVal, date) || compareDate(disabledAfter, 'less', yearNavVal, monthNavVal, date));
            var active = !disabled && yearState === yearNavVal && monthState === monthNavVal && dateState === date;
            var startActive = false;
            var endActive = false;
            var inRange = false;
            var inRangeLast = false;

            if (rangePicker) {
              startActive = compareDate(startDate, 'equal', yearNavVal, monthNavVal, date);
              endActive = compareDate(endDate, 'equal', yearNavVal, monthNavVal, date);
              inRangeLast = compareDate(hoverDate, 'equal', yearNavVal, monthNavVal, date);
              active = !disabled && (startActive || endActive);

              if (startDate && endDate) {
                inRange = !disabled && (compareDate(startDate, 'less', yearNavVal, monthNavVal, date) || startActive) && (compareDate(endDate, 'more', yearNavVal, monthNavVal, date) || endActive);
              } else if (startDate) {
                inRange = !disabled && (compareDate(hoverDate, 'more', yearNavVal, monthNavVal, date) || inRangeLast) && compareDate(startDate, 'less', yearNavVal, monthNavVal, date);
              } else if (endDate) {
                inRange = !disabled && (compareDate(hoverDate, 'less', yearNavVal, monthNavVal, date) || inRangeLast) && compareDate(endDate, 'more', yearNavVal, monthNavVal, date);
              }
            }

            var _getDateInfo4 = getDateInfo(startDate),
                sYear = _getDateInfo4.year,
                sMonth = _getDateInfo4.month,
                sDate = _getDateInfo4.date;

            var _getDateInfo5 = getDateInfo(endDate),
                eYear = _getDateInfo5.year,
                eMonth = _getDateInfo5.month,
                eDate = _getDateInfo5.date;

            var isStart = startActive || endDate && inRangeLast && compareDate(hoverDate, 'less', eYear, eMonth, eDate);
            var isEnd = endActive || startDate && inRangeLast && compareDate(hoverDate, 'more', sYear, sMonth, sDate);
            var isRangeError = inRange && inRangeError;
            var wrapperClass = classnames({
              'Calendar-valueWrapper': true,
              'Calendar-valueWrapper--inRange': inRange || rangePicker && active,
              'Calendar-valueWrapper--inRangeError': isRangeError,
              'Calendar-valueWrapper--start': isStart && !isEnd,
              'Calendar-valueWrapper--end': isEnd && !isStart,
              'Calendar-valueWrapper--startError': isStart && isRangeError,
              'Calendar-valueWrapper--endError': isEnd && isRangeError
            });
            var valueClass = classnames(_defineProperty$2({
              'Calendar-value': true,
              'Calendar-value--start': isStart && !isEnd,
              'Calendar-value--end': isEnd && !isStart,
              'Calendar-value--startError': isStart && isRangeError,
              'Calendar-value--endError': isEnd && isRangeError,
              'Calendar-value--active': active,
              'Calendar-value--dummy': dummy || disabled,
              'Calendar-value--disabled': disabled,
              'Calendar-dateValue': true
            }, "Calendar-dateValue--".concat(size), size));
            return /*#__PURE__*/React.createElement("div", {
              key: "".concat(row, "-").concat(col),
              className: wrapperClass
            }, /*#__PURE__*/React.createElement("span", {
              "data-test": "DesignSystem-Calendar--dateValue",
              className: valueClass,
              onClick: onClickHandler(date),
              onMouseOver: onMouseOverHandler(date)
            }, !dummy && /*#__PURE__*/React.createElement(Text, {
              appearance: active ? 'white' : disabled ? 'disabled' : 'default',
              size: size === 'small' ? 'small' : 'regular'
            }, date)));
          }));
        }

        return null;
      });
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "renderCalendar", function (index) {
      var _classNames5;

      var _this$props9 = _this.props,
          size = _this$props9.size,
          monthsInView = _this$props9.monthsInView;
      var view = _this.state.view;
      var containerClass = classnames((_classNames5 = {}, _defineProperty$2(_classNames5, 'Calendar', true), _defineProperty$2(_classNames5, "Calendar--".concat(view), view), _defineProperty$2(_classNames5, "Calendar--".concat(size), size), _classNames5));
      var headerClass = classnames({
        'Calendar-header': true
      });
      var bodyClass = classnames({
        'Calendar-body': true
      });
      return /*#__PURE__*/React.createElement("div", {
        key: index,
        "data-test": "DesignSystem-Calendar",
        className: containerClass
      }, /*#__PURE__*/React.createElement("div", {
        className: headerClass
      }, index === 0 && _this.renderJumpButton('prev'), _this.renderHeaderContent(index), index === monthsInView - 1 && _this.renderJumpButton('next')), /*#__PURE__*/React.createElement("div", {
        className: bodyClass
      }, view === 'year' && _this.renderBodyYear(), view === 'month' && _this.renderBodyMonth(), view === 'date' && _this.renderBodyDate(index)));
    });

    var _this$props10 = _this.props,
        _rangePicker = _this$props10.rangePicker,
        _startDate = _this$props10.startDate,
        _endDate = _this$props10.endDate,
        _monthsInView = _this$props10.monthsInView,
        _view = _this$props10.view;
    var currDate = _rangePicker ? _endDate || _startDate : props.date;

    var _yearNav = props.yearNav !== undefined ? props.yearNav : getDateInfo(currDate || Date.now()).year;

    var _monthNav = props.monthNav !== undefined ? props.monthNav : getDateInfo(currDate || Date.now()).month;

    var _getDateInfo6 = getDateInfo(currDate),
        _year = _getDateInfo6.year,
        _month = _getDateInfo6.month,
        _date = _getDateInfo6.date;

    _this.state = {
      currDate: currDate,
      startDate: _startDate,
      endDate: _endDate,
      yearNav: _yearNav,
      monthNav: _monthNav,
      year: _year,
      month: _month,
      date: _date,
      view: _monthsInView > 1 ? 'date' : _view,
      yearBlockNav: getYearBlock(_yearNav)
    };
    return _this;
  }

  _createClass$1(Calendar, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var monthsInView = this.props.monthsInView;

      if (prevProps.date !== this.props.date) {
        var _getDateInfo7 = getDateInfo(this.props.date),
            year = _getDateInfo7.year,
            month = _getDateInfo7.month,
            _date2 = _getDateInfo7.date;

        this.updateState(year, month, _date2);
        var d = convertToDate(this.props.date);
        this.setState({
          currDate: d
        });
      }

      if (prevProps.startDate !== this.props.startDate) {
        var _d = convertToDate(this.props.startDate);

        this.setState({
          startDate: _d
        });
      }

      if (prevProps.endDate !== this.props.endDate) {
        var _d2 = convertToDate(this.props.endDate);

        this.setState({
          endDate: _d2
        });
      }

      if (prevProps.view !== this.props.view) {
        if (this.props.monthsInView === 1) {
          this.setState({
            view: this.props.view
          });
        }
      }

      if (prevProps.yearNav !== this.props.yearNav) {
        var yearNav = this.props.yearNav;

        if (yearNav) {
          this.setState({
            yearNav: yearNav,
            yearBlockNav: getYearBlock(yearNav)
          });
        }
      }

      if (prevProps.monthNav !== this.props.monthNav) {
        var monthNav = this.props.monthNav;

        if (monthNav) {
          this.setState({
            monthNav: monthNav
          });
        }
      }

      if (prevState.currDate !== this.state.currDate) {
        var _this$props11 = this.props,
            rangePicker = _this$props11.rangePicker,
            onDateChange = _this$props11.onDateChange;
        var _this$state10 = this.state,
            currDate = _this$state10.currDate,
            _startDate3 = _this$state10.startDate,
            _endDate3 = _this$state10.endDate;

        if (currDate) {
          if (onDateChange) onDateChange(currDate);

          if (rangePicker) {
            this.setState({
              hoverDate: undefined
            });

            if (_startDate3 && _endDate3) {
              this.setState({
                startDate: currDate,
                endDate: undefined
              });
            } else {
              var _getDateInfo8 = getDateInfo(currDate),
                  _year2 = _getDateInfo8.year,
                  _month2 = _getDateInfo8.month,
                  _date3 = _getDateInfo8.date;

              if (_startDate3) {
                if (compareDate(_startDate3, 'more', _year2, _month2, _date3)) {
                  this.setState({
                    startDate: currDate
                  });
                } else {
                  this.setState({
                    endDate: currDate
                  });
                }
              } else if (_endDate3) {
                if (compareDate(_endDate3, 'less', _year2, _month2, _date3)) {
                  this.setState({
                    endDate: currDate
                  });
                } else {
                  this.setState({
                    startDate: currDate
                  });
                }
              } else {
                this.setState({
                  startDate: currDate
                });
              }
            }
          } else {
            this.setState({
              startDate: currDate
            });
          }
        }
      }

      if (prevState.startDate !== this.state.startDate || prevState.endDate !== this.state.endDate) {
        var onRangeChange = this.props.onRangeChange;
        var _this$state11 = this.state,
            _startDate4 = _this$state11.startDate,
            _endDate4 = _this$state11.endDate;
        if (onRangeChange) onRangeChange(_startDate4, _endDate4);
      }

      if (prevState.year !== this.state.year) {
        var _year3 = this.state.year;

        if (_year3 !== undefined && monthsInView === 1) {
          this.setState({
            year: _year3,
            yearBlockNav: getYearBlock(_year3),
            yearNav: _year3
          });
        }
      }

      if (prevState.month !== this.state.month) {
        var _month3 = this.state.month;

        if (_month3 !== undefined && monthsInView === 1) {
          this.setState({
            monthNav: _month3
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props12 = this.props,
          monthsInView = _this$props12.monthsInView,
          className = _this$props12.className;
      var baseProps = extractBaseProps(this.props);
      var classes = classnames({
        'Calendar-wrapper': true
      }, className);
      return /*#__PURE__*/React.createElement("div", _extends$3({}, baseProps, {
        className: classes
      }), Array.from({
        length: monthsInView
      }, function (_x, index) {
        return _this2.renderCalendar(index);
      }));
    }
  }]);

  return Calendar;
}(React.Component);

_defineProperty$2(Calendar, "defaultProps", {
  size: 'large',
  monthsInView: 1,
  view: 'date',
  firstDayOfWeek: 'sunday',
  jumpView: true
});

var Card = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames;

  var _props$shadow = props.shadow,
      shadow = _props$shadow === void 0 ? 'default' : _props$shadow,
      children = props.children,
      className = props.className,
      rest = _objectWithoutProperties$1(props, ["shadow", "children", "className"]);

  var classes = classnames((_classNames = {
    Card: true
  }, _defineProperty$2(_classNames, "Card--shadow-".concat(shadow), shadow), _defineProperty$2(_classNames, "".concat(className), className), _classNames));
  return /*#__PURE__*/React.createElement("div", _extends$3({
    ref: ref
  }, rest, {
    className: classes
  }), children);
});
Card.displayName = 'Card';

var CardSubdued = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var border = props.border,
      children = props.children,
      className = props.className,
      rest = _objectWithoutProperties$1(props, ["border", "children", "className"]);

  var classes = classnames(_defineProperty$2({
    CardSubdued: true
  }, "CardSubdued--".concat(border), border), className);
  return /*#__PURE__*/React.createElement("div", _extends$3({
    "data-test": "DesignSystem-CardSubdued",
    ref: ref
  }, rest, {
    className: classes
  }), children);
});
CardSubdued.displayName = 'CardSubdued';

var CardHeader = function CardHeader(props) {
  var className = props.className,
      children = props.children;
  var baseProps = extractBaseProps(props);
  var classes = classnames({
    'Card-header': true
  }, className);
  return /*#__PURE__*/React.createElement("div", _extends$3({
    "data-test": "DesignSystem-CardHeader"
  }, baseProps, {
    className: classes
  }), children);
};
CardHeader.displayName = 'CardHeader';

var CardBody = function CardBody(props) {
  var className = props.className,
      children = props.children;
  var baseProps = extractBaseProps(props);
  var classes = classnames({
    'Card-body': true
  }, className);
  return /*#__PURE__*/React.createElement("div", _extends$3({
    "data-test": "DesignSystem-CardBody"
  }, baseProps, {
    className: classes
  }), children);
};
CardBody.displayName = 'CardBody';

var CardFooter = function CardFooter(props) {
  var className = props.className,
      children = props.children,
      withSeperator = props.withSeperator;
  var baseProps = extractBaseProps(props);
  var classes = classnames(_defineProperty$2({
    'Card-footer': true
  }, 'Card-footer--withSeperator', withSeperator), className);
  return /*#__PURE__*/React.createElement("div", _extends$3({
    "data-test": "DesignSystem-CardFooter"
  }, baseProps, {
    className: classes
  }), children);
};
CardFooter.displayName = 'CardFooter';
CardFooter.defaultProps = {
  withSeperator: true
};

var GenericChip = function GenericChip(props) {
  var label = props.label,
      icon = props.icon,
      clearButton = props.clearButton,
      disabled = props.disabled,
      className = props.className,
      selected = props.selected,
      onClose = props.onClose,
      onClick = props.onClick;
  var baseProps = extractBaseProps(props);

  var iconClass = function iconClass(align) {
    var _classNames;

    return classnames((_classNames = {}, _defineProperty$2(_classNames, 'Chip-icon', true), _defineProperty$2(_classNames, "Chip-icon--".concat(align), align), _defineProperty$2(_classNames, 'cursor-pointer', align === 'right' && !disabled), _classNames));
  };

  var onCloseHandler = function onCloseHandler(e) {
    e.stopPropagation();
    if (onClose) onClose();
  };

  var onClickHandler = function onClickHandler() {
    if (onClick) onClick();
  };

  return /*#__PURE__*/React.createElement("div", _extends$3({}, baseProps, {
    className: "Chip-wrapper ".concat(className),
    onClick: onClickHandler
  }), icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    appearance: disabled ? 'disabled' : selected ? 'info' : 'default',
    className: iconClass('left')
  }), /*#__PURE__*/React.createElement(Text, {
    appearance: disabled ? 'disabled' : 'default'
  }, label), clearButton && /*#__PURE__*/React.createElement(Icon, {
    name: "clear",
    appearance: disabled ? 'disabled' : selected ? 'info' : 'subtle',
    className: iconClass('right'),
    onClick: onCloseHandler
  }));
};
GenericChip.displayName = 'GenericChip';

var Chip = function Chip(props) {
  var _classNames;

  var label = props.label,
      icon = props.icon,
      clearButton = props.clearButton,
      type = props.type,
      disabled = props.disabled,
      selected = props.selected,
      onClose = props.onClose,
      onClick = props.onClick,
      name = props.name,
      className = props.className;
  var baseProps = extractBaseProps(props);

  var onCloseHandler = function onCloseHandler() {
    if (!disabled && onClose) onClose(name);
  };

  var onClickHandler = function onClickHandler() {
    if (!disabled && onClick) onClick(name);
  };

  var chipClass = classnames((_classNames = {
    Chip: true
  }, _defineProperty$2(_classNames, "Chip-".concat(type, "--disabled"), disabled), _defineProperty$2(_classNames, "Chip--".concat(type), type && !disabled), _defineProperty$2(_classNames, "Chip-".concat(type, "--selected"), selected && !disabled), _classNames), className);
  var clearbutton = type === 'action' ? false : clearButton;
  var select = type === 'selection' && selected ? true : false;
  return /*#__PURE__*/React.createElement(GenericChip, _extends$3({}, baseProps, {
    label: label,
    selected: select,
    icon: icon,
    clearButton: clearbutton,
    disabled: disabled,
    className: chipClass,
    onClose: onCloseHandler,
    onClick: onClickHandler,
    name: name
  }));
};
Chip.displayName = 'Chip';
Chip.defaultProps = {
  type: 'input'
};

var ChipGroup = function ChipGroup(props) {
  var list = props.list,
      onClick = props.onClick,
      onClose = props.onClose,
      className = props.className;
  var baseProps = extractBaseProps(props);

  var onClickHandler = function onClickHandler(item) {
    if (onClick) onClick(item);
  };

  var onCloseHandler = function onCloseHandler(item) {
    if (onClose) onClose(item);
  };

  var ChipGroupClass = classnames(_defineProperty$2({}, 'ChipGroup', true), className);
  return /*#__PURE__*/React.createElement("div", _extends$3({}, baseProps, {
    className: ChipGroupClass
  }), list.map(function (item, ind) {
    var _item$label = item.label,
        label = _item$label === void 0 ? '' : _item$label,
        icon = item.icon,
        type = item.type,
        disabled = item.disabled,
        selected = item.selected,
        clearButton = item.clearButton,
        name = item.name;
    return /*#__PURE__*/React.createElement("span", {
      key: ind,
      className: "ChipGroup-item"
    }, /*#__PURE__*/React.createElement(Chip, {
      name: name,
      label: label,
      selected: selected,
      icon: icon,
      disabled: disabled,
      clearButton: clearButton,
      type: type,
      onClick: function onClick() {
        return onClickHandler(item);
      },
      onClose: function onClose() {
        return onCloseHandler(item);
      }
    }));
  }));
};
ChipGroup.displayName = 'ChipGroup';

var Column = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames;

  var size = props.size,
      sizeXS = props.sizeXS,
      sizeS = props.sizeS,
      sizeM = props.sizeM,
      sizeL = props.sizeL,
      sizeXL = props.sizeXL,
      className = props.className,
      children = props.children,
      rest = _objectWithoutProperties$1(props, ["size", "sizeXS", "sizeS", "sizeM", "sizeL", "sizeXL", "className", "children"]);

  var classes = classnames((_classNames = {}, _defineProperty$2(_classNames, 'Col', true), _defineProperty$2(_classNames, "Col--".concat(size), size), _defineProperty$2(_classNames, "Col--xs-".concat(sizeXS), sizeXS), _defineProperty$2(_classNames, "Col--s-".concat(sizeS), sizeS), _defineProperty$2(_classNames, "Col--m-".concat(sizeM), sizeM), _defineProperty$2(_classNames, "Col--l-".concat(sizeL), sizeL), _defineProperty$2(_classNames, "Col--xl-".concat(sizeXL), sizeXL), _defineProperty$2(_classNames, "".concat(className), className), _classNames));
  return /*#__PURE__*/React.createElement("div", _extends$3({
    ref: ref
  }, rest, {
    className: classes
  }), children);
});
Column.displayName = 'Column';

var Trigger$1 = function Trigger(props) {
  var inputFormat = props.inputFormat,
      inputOptions = props.inputOptions,
      validators = props.validators,
      state = props.state,
      setState = props.setState;
  var init = state.init,
      date$1 = state.date,
      error = state.error;
  var _inputOptions$placeho = inputOptions.placeholderChar,
      placeholderChar = _inputOptions$placeho === void 0 ? '_' : _inputOptions$placeho;

  var onChangeHandler = function onChangeHandler(_e, val) {
    setState({
      open: true
    });

    if (val && !val.includes(placeholderChar)) {
      var d = translateToDate(inputFormat, val, validators);
      setState({
        date: d
      });
    }
  };

  var onBlurHandler = function onBlurHandler(_e, val) {
    setState({
      init: true
    });

    if (!val || val.includes(placeholderChar)) {
      setState({
        date: undefined
      });
    }
  };

  var onClearHandler = function onClearHandler() {
    setState({
      init: true,
      date: undefined
    });
  };

  var showError = inputOptions.error || inputOptions.required && error && init;
  var errorMessage = inputOptions.caption === undefined ? 'Invalid value' : inputOptions.caption;

  var inputValidator = function inputValidator(val) {
    return isValid(validators, val, inputFormat);
  };

  var mask = date[inputFormat];
  return /*#__PURE__*/React.createElement(InputMask, _extends$3({
    icon: "events",
    placeholder: inputFormat
  }, inputOptions, {
    error: showError,
    mask: mask,
    value: date$1 ? translateToString(inputFormat, date$1) // @ts-ignore
    : init ? InputMask.utils.getDefaultValue(mask, placeholderChar) : '',
    onChange: onChangeHandler,
    onBlur: onBlurHandler,
    onClear: onClearHandler,
    caption: showError ? errorMessage : '',
    validators: [inputValidator],
    clearOnEmptyBlur: false
  }));
};

var DatePicker = /*#__PURE__*/function (_React$Component) {
  _inherits$1(DatePicker, _React$Component);

  var _super = _createSuper$1(DatePicker);

  function DatePicker(props) {
    var _this;

    _classCallCheck$1(this, DatePicker);

    _this = _super.call(this, props);

    _defineProperty$2(_assertThisInitialized$2(_this), "getError", function (date) {
      var _this$props = _this.props,
          disabledBefore = _this$props.disabledBefore,
          disabledAfter = _this$props.disabledAfter;

      var _getDateInfo = getDateInfo(disabledBefore),
          dbYear = _getDateInfo.year,
          dbMonth = _getDateInfo.month,
          dbDate = _getDateInfo.date;

      var _getDateInfo2 = getDateInfo(disabledAfter),
          daYear = _getDateInfo2.year,
          daMonth = _getDateInfo2.month,
          daDate = _getDateInfo2.date;

      return !date ? true : compareDate(date, 'less', dbYear, dbMonth, dbDate) || compareDate(date, 'more', daYear, daMonth, daDate);
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "onDateChangeHandler", function (d) {
      _this.setState({
        init: true,
        date: d
      });

      var closeOnSelect = _this.props.closeOnSelect;
      if (closeOnSelect) _this.setState({
        open: false
      });
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "onToggleHandler", function (o, type) {
      switch (type) {
        case 'outsideClick':
          _this.setState({
            open: o
          });

          break;

        case 'onClick':
          _this.setState({
            open: true
          });

          break;
      }
    });

    var inputFormat = props.inputFormat,
        validators = props.validators;

    var _date = convertToDate(props.date, inputFormat, validators);

    var error = _this.getError(_date);

    _this.state = {
      date: _date,
      error: error,
      init: false,
      open: props.open || false
    };
    return _this;
  }

  _createClass$1(DatePicker, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.date !== this.props.date) {
        var _this$props2 = this.props,
            inputFormat = _this$props2.inputFormat,
            validators = _this$props2.validators;
        var d = convertToDate(this.props.date, inputFormat, validators);
        this.setState({
          date: d
        });
      }

      if (prevProps.open !== this.props.open) {
        this.setState({
          open: this.props.open || false
        });
      }

      if (prevState.date !== this.state.date) {
        var _this$props3 = this.props,
            onDateChange = _this$props3.onDateChange,
            outputFormat = _this$props3.outputFormat;
        var _date2 = this.state.date;
        var newError = this.getError(_date2);
        this.setState({
          error: newError
        });

        if (onDateChange) {
          if (!newError) {
            var dVal = translateToString(outputFormat, _date2);
            onDateChange(_date2, dVal);
          } else {
            onDateChange(undefined, '');
          }
        }
      }
    }
  }, {
    key: "renderCalendar",
    value: function renderCalendar() {
      var _this$props4 = this.props;
          _this$props4.date;
          _this$props4.open;
          _this$props4.position;
          var inputFormat = _this$props4.inputFormat;
          _this$props4.outputFormat;
          _this$props4.inputOptions;
          var validators = _this$props4.validators;
          _this$props4.withInput;
          var disabledBefore = _this$props4.disabledBefore,
          disabledAfter = _this$props4.disabledAfter;
          _this$props4.onDateChange;
          _this$props4.closeOnSelect;
          var rest = _objectWithoutProperties$1(_this$props4, ["date", "open", "position", "inputFormat", "outputFormat", "inputOptions", "validators", "withInput", "disabledBefore", "disabledAfter", "onDateChange", "closeOnSelect"]);

      var date = this.state.date;
      return /*#__PURE__*/React.createElement(Calendar, _extends$3({}, rest, {
        date: convertToDate(date, inputFormat, validators),
        disabledBefore: convertToDate(disabledBefore, inputFormat, validators),
        disabledAfter: convertToDate(disabledAfter, inputFormat, validators),
        onDateChange: this.onDateChangeHandler
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          position = _this$props5.position,
          withInput = _this$props5.withInput,
          inputFormat = _this$props5.inputFormat,
          inputOptions = _this$props5.inputOptions,
          validators = _this$props5.validators;
      var open = this.state.open;

      if (withInput) {
        return /*#__PURE__*/React.createElement(Popover, {
          trigger: /*#__PURE__*/React.createElement(Trigger$1, {
            inputFormat: inputFormat,
            inputOptions: inputOptions,
            validators: validators,
            state: this.state,
            setState: this.setState.bind(this)
          }),
          triggerClass: "w-100",
          position: position,
          appendToBody: true,
          open: open,
          onToggle: this.onToggleHandler
        }, this.renderCalendar());
      }

      return this.renderCalendar();
    }
  }]);

  return DatePicker;
}(React.Component);

_defineProperty$2(DatePicker, "defaultProps", _objectSpread2(_objectSpread2({}, Calendar.defaultProps), {}, {
  position: 'bottom-start',
  inputFormat: 'mm/dd/yyyy',
  outputFormat: 'mm/dd/yyyy',
  validators: [date$1],
  inputOptions: {},
  closeOnSelect: true
}));

var TimePicker = function TimePicker(props) {
  var validators = props.validators,
      inputOptions = props.inputOptions,
      inputFormat = props.inputFormat,
      outputFormat = props.outputFormat,
      onTimeChange = props.onTimeChange,
      timeProp = props.time;

  var _React$useState = React.useState(timeProp),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      time$1 = _React$useState2[0],
      setTime = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      init = _React$useState4[0],
      setInit = _React$useState4[1];

  var _inputOptions$placeho = inputOptions.placeholderChar,
      placeholderChar = _inputOptions$placeho === void 0 ? '_' : _inputOptions$placeho;
  React.useEffect(function () {
    var timeStr = translateToTime(inputFormat, time$1);
    var updatedTime = timeProp === undefined && timeStr.includes(placeholderChar) ? time$1 : timeProp;
    setTime(updatedTime);
  }, [timeProp]);

  var onChangeHandler = function onChangeHandler(e) {
    var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var updatedTime = val === null || val === void 0 ? void 0 : val.toUpperCase();
    setTime(updatedTime);

    if (inputOptions.onChange) {
      inputOptions.onChange(e, val);
    }
  };

  var onBlurHandler = function onBlurHandler(e) {
    var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var updatedTime = translateToTime(inputFormat, time$1);
    setInit(true);

    if (onTimeChange) {
      var outputTimeStr = updatedTime && !isPlaceholderPresent(placeholderChar, updatedTime) ? getOutputTimeString(inputFormat, outputFormat, updatedTime) : undefined;
      onTimeChange(outputTimeStr);
    }

    if (inputOptions.onBlur) inputOptions.onBlur(e, val);
  };

  var onClearHandler = function onClearHandler(e) {
    var updatedTime = '';
    setInit(true);
    if (onTimeChange) onTimeChange(updatedTime);
    if (inputOptions.onClear) inputOptions.onClear(e);
  };

  var inputValidator = function inputValidator(val) {
    return isValid(validators, val, inputFormat);
  };

  var mask = time[inputFormat];
  return /*#__PURE__*/React.createElement(InputMask, _extends$3({
    placeholder: placeholders[inputFormat],
    placeholderChar: placeholderChar
  }, inputOptions, {
    mask: mask,
    value: time$1 ? translateToTime(inputFormat, time$1) // @ts-ignore
    : init ? InputMask.utils.getDefaultValue(mask, placeholderChar) : '',
    validators: inputValidator,
    onChange: onChangeHandler,
    onClear: onClearHandler,
    onBlur: onBlurHandler
  }));
};
TimePicker.defaultProps = {
  inputFormat: 'hh:mm AM',
  outputFormat: 'hh:mm AM',
  inputOptions: {},
  validators: [time$1]
};
TimePicker.displayName = 'TimePicker';

var sizeMap = {
  s: 'h5',
  m: 'h4',
  l: 'h3',
  xl: 'h2',
  xxl: 'h1'
};
var Heading = function Heading(props) {
  var _classNames;

  var appearance = props.appearance,
      size = props.size,
      children = props.children,
      className = props.className,
      rest = _objectWithoutProperties$1(props, ["appearance", "size", "children", "className"]);

  var classes = classnames((_classNames = {
    Heading: true
  }, _defineProperty$2(_classNames, "Heading--".concat(size), size), _defineProperty$2(_classNames, "Heading--".concat(appearance), appearance), _classNames), className);
  return /*#__PURE__*/React.createElement(GenericText, _extends$3({
    "data-test": "DesignSystem-Heading"
  }, rest, {
    className: classes,
    componentType: sizeMap[size]
  }), children);
};
Heading.displayName = 'Heading';
Heading.defaultProps = {
  appearance: 'default',
  size: 'm'
};

var sizeMapping$1 = {
  tiny: 12,
  regular: 16,
  large: 20
};
/**
 * ###### Input has two types:
 *  - [Controlled Input](https://reactjs.org/docs/forms.html#controlled-components)
 *  - [Uncontrolled Input](https://reactjs.org/docs/uncontrolled-components.html)
 */

var Input = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  var _classNames, _classNames2, _classNames3, _classNames4;

  var _props$size = props.size,
      size = _props$size === void 0 ? 'regular' : _props$size,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      _props$minWidth = props.minWidth,
      minWidth = _props$minWidth === void 0 ? type !== 'number' ? 256 : undefined : _props$minWidth,
      defaultValue = props.defaultValue,
      name = props.name,
      placeholder = props.placeholder,
      value = props.value,
      icon = props.icon,
      inlineLabel = props.inlineLabel,
      required = props.required,
      error = props.error,
      info = props.info,
      onChange = props.onChange,
      onClick = props.onClick,
      onClear = props.onClear,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      actionIcon = props.actionIcon,
      className = props.className,
      autoFocus = props.autoFocus,
      disabled = props.disabled,
      readOnly = props.readOnly,
      rest = _objectWithoutProperties$1(props, ["size", "type", "minWidth", "defaultValue", "name", "placeholder", "value", "icon", "inlineLabel", "required", "error", "info", "onChange", "onClick", "onClear", "onBlur", "onFocus", "actionIcon", "className", "autoFocus", "disabled", "readOnly"]);

  var ref = React.useRef(null);
  React.useImperativeHandle(forwardedRef, function () {
    return ref.current;
  });
  React.useEffect(function () {
    var _ref$current;

    if (autoFocus) (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.focus({
      preventScroll: true
    });
  }, []);
  var baseProps = extractBaseProps(props);
  var classes = classnames((_classNames = {}, _defineProperty$2(_classNames, 'Input', true), _defineProperty$2(_classNames, "Input--".concat(size), size), _defineProperty$2(_classNames, 'Input--disabled', disabled || readOnly), _defineProperty$2(_classNames, 'Input--error', error), _classNames), className);
  var inputClass = classnames((_classNames2 = {}, _defineProperty$2(_classNames2, 'Input-input', true), _defineProperty$2(_classNames2, "Input-input--".concat(size), size), _classNames2));
  var leftIconClass = classnames((_classNames3 = {}, _defineProperty$2(_classNames3, 'Input-icon', true), _defineProperty$2(_classNames3, 'Input-icon--left', true), _defineProperty$2(_classNames3, 'Input-icon--disabled', !value), _classNames3));
  var rightIconClass = classnames((_classNames4 = {}, _defineProperty$2(_classNames4, 'Input-icon', true), _defineProperty$2(_classNames4, 'Input-icon--right', true), _classNames4));
  var trigger = /*#__PURE__*/React.createElement("div", {
    className: rightIconClass
  }, /*#__PURE__*/React.createElement(Icon, {
    name: 'info',
    size: sizeMapping$1[size]
  }));
  return /*#__PURE__*/React.createElement("div", {
    "data-test": "DesignSystem-InputWrapper",
    className: classes,
    style: {
      minWidth: minWidth
    },
    onClick: function onClick() {
      var _ref$current2;

      return (_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : _ref$current2.focus();
    }
  }, inlineLabel && /*#__PURE__*/React.createElement("div", {
    className: "Input-inlineLabel"
  }, /*#__PURE__*/React.createElement(Text, {
    appearance: "subtle"
  }, inlineLabel)), size !== 'tiny' && icon && /*#__PURE__*/React.createElement("div", {
    className: leftIconClass
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: sizeMapping$1[size]
  })), /*#__PURE__*/React.createElement("input", _extends$3({
    "data-test": "DesignSystem-Input"
  }, baseProps, rest, {
    ref: ref,
    name: name,
    type: type,
    defaultValue: defaultValue,
    placeholder: placeholder,
    className: inputClass,
    value: value,
    required: required,
    disabled: disabled,
    readOnly: readOnly,
    onChange: onChange,
    onBlur: onBlur,
    onClick: onClick,
    onFocus: onFocus
  })), !value && !disabled || value && disabled || defaultValue && disabled ? info && /*#__PURE__*/React.createElement(Tooltip, {
    position: "top",
    tooltip: info
  }, trigger) : actionIcon ? actionIcon : onClear && value && !disabled && /*#__PURE__*/React.createElement("div", {
    className: rightIconClass,
    onClick: function onClick(e) {
      return onClear(e);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: 'close',
    size: sizeMapping$1[size]
  })));
});
Input.displayName = 'Input';

var sizeMapping = {
  regular: 16,
  large: 20
};

var capMin = function capMin() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -Infinity;
  var value = arguments.length > 1 ? arguments[1] : undefined;
  return isNaN(min) || !min && min !== 0 || isNaN(value) || !value && value !== 0 ? value : Math.max(min, value);
};

var capMax = function capMax() {
  var max = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : +Infinity;
  var value = arguments.length > 1 ? arguments[1] : undefined;
  return isNaN(max) || !max && max !== 0 || isNaN(value) || !value && value !== 0 ? value : Math.min(max, value);
};
/**
 * ###### MetricInput has two types:
 *  - [Controlled MetricInput](https://reactjs.org/docs/forms.html#controlled-components)
 *  - [Uncontrolled MetricInput](https://reactjs.org/docs/uncontrolled-components.html)
 */


var MetricInput = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  var _classNames, _classNames2, _classNames3;

  var _props$size = props.size,
      size = _props$size === void 0 ? 'regular' : _props$size,
      defaultValue = props.defaultValue,
      name = props.name,
      placeholder = props.placeholder,
      icon = props.icon,
      prefix = props.prefix,
      suffix = props.suffix,
      error = props.error,
      min = props.min,
      max = props.max,
      onChange = props.onChange,
      onClick = props.onClick,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      className = props.className,
      autoFocus = props.autoFocus,
      disabled = props.disabled,
      readOnly = props.readOnly,
      valueProp = props.value,
      rest = _objectWithoutProperties$1(props, ["size", "defaultValue", "name", "placeholder", "icon", "prefix", "suffix", "error", "min", "max", "onChange", "onClick", "onBlur", "onFocus", "className", "autoFocus", "disabled", "readOnly", "value"]);

  var ref = React.useRef(null);
  var isUncontrolled = valueProp === undefined;

  var _React$useState = React.useState(valueProp || defaultValue),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  React.useImperativeHandle(forwardedRef, function () {
    return ref.current;
  });
  React.useEffect(function () {
    var _ref$current;

    if (autoFocus) (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.focus({
      preventScroll: true
    });
  }, []);
  React.useEffect(function () {
    if (valueProp !== undefined) {
      setValue(valueProp);
    }
  }, [valueProp]);
  var baseProps = extractBaseProps(props);
  var classes = classnames((_classNames = {}, _defineProperty$2(_classNames, 'MetricInput', true), _defineProperty$2(_classNames, "MetricInput--".concat(size), size), _defineProperty$2(_classNames, 'MetricInput--disabled', disabled || readOnly), _defineProperty$2(_classNames, 'MetricInput--error', error), _classNames), className);
  var inputClass = classnames((_classNames2 = {}, _defineProperty$2(_classNames2, 'MetricInput-input', true), _defineProperty$2(_classNames2, "MetricInput-input--".concat(size), size), _classNames2));
  var iconClass = classnames((_classNames3 = {}, _defineProperty$2(_classNames3, 'MetricInput-icon', true), _defineProperty$2(_classNames3, "MetricInput-icon--".concat(size), size), _classNames3));

  var getArrowClass = function getArrowClass(direction) {
    var _classNames4;

    return classnames((_classNames4 = {}, _defineProperty$2(_classNames4, 'MetricInput-arrowIcon', true), _defineProperty$2(_classNames4, "MetricInput-arrowIcon--".concat(size), size), _defineProperty$2(_classNames4, "MetricInput-arrowIcon--".concat(direction), direction), _classNames4));
  };

  var onChangeHandler = function onChangeHandler(e) {
    if (isUncontrolled) {
      setValue(e.target.value);
    }

    if (onChange) onChange(e);
  };

  var onArrowClick = function onArrowClick(e, direction) {
    var newValue = Number(value || 0);
    var isValid = direction === 'down' ? min !== undefined && newValue > min || min === undefined : max !== undefined && newValue < max || max === undefined;
    if (disabled || readOnly || !isValid) return;
    newValue = direction === 'down' ? newValue - 1 : newValue + 1;
    newValue = capMax(max, capMin(min, newValue));
    if (isUncontrolled) setValue(newValue);

    if (onChange) {
      var syntheticEvent = Object.create(e, {
        target: {
          value: newValue
        }
      });
      onChange(syntheticEvent);
    }
  };

  var onKeyDown = function onKeyDown(e) {
    switch (e.key) {
      case 'e':
      case 'E':
        e.preventDefault();
        return;

      case 'ArrowDown':
        e.preventDefault();
        onArrowClick(e, 'down');
        return;

      case 'ArrowUp':
        e.preventDefault();
        onArrowClick(e, 'up');
        return;
    }
  };

  var iconSize = size === 'regular' ? 12 : 16;
  return /*#__PURE__*/React.createElement("div", {
    "data-test": "DesignSystem-MetricInputWrapper",
    className: classes,
    onClick: function onClick() {
      var _ref$current2;

      return (_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : _ref$current2.focus();
    }
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    "data-test": "DesignSystem-MetricInput--icon",
    name: icon,
    size: sizeMapping[size],
    appearance: !value ? 'disabled' : 'subtle',
    className: iconClass
  }), prefix && /*#__PURE__*/React.createElement(Text, {
    "data-test": "DesignSystem-MetricInput--prefix",
    className: size === 'regular' ? 'mr-4' : 'mr-5',
    size: size,
    appearance: "subtle"
  }, prefix), /*#__PURE__*/React.createElement("input", _extends$3({
    "data-test": "DesignSystem-MetricInput"
  }, baseProps, rest, {
    type: "number",
    ref: ref,
    name: name,
    defaultValue: defaultValue,
    placeholder: placeholder,
    className: inputClass,
    value: value,
    disabled: disabled,
    readOnly: readOnly,
    onChange: onChangeHandler,
    onBlur: onBlur,
    onClick: onClick,
    onFocus: onFocus,
    onKeyDown: onKeyDown
  })), suffix && /*#__PURE__*/React.createElement(Text, {
    "data-test": "DesignSystem-MetricInput--suffix",
    className: size === 'regular' ? 'ml-4' : 'ml-5',
    size: size,
    appearance: "subtle"
  }, suffix), /*#__PURE__*/React.createElement("div", {
    className: "MetricInput-arrowIcons",
    tabIndex: 0
  }, /*#__PURE__*/React.createElement(Icon, {
    className: getArrowClass('up'),
    size: iconSize,
    name: "keyboard_arrow_up",
    onClick: function onClick(e) {
      return onArrowClick(e, 'up');
    },
    "data-test": "DesignSystem-MetricInput--upIcon"
  }), /*#__PURE__*/React.createElement(Icon, {
    className: getArrowClass('down'),
    size: iconSize,
    name: "keyboard_arrow_down",
    onClick: function onClick(e) {
      return onArrowClick(e, 'down');
    },
    "data-test": "DesignSystem-MetricInput--downIcon"
  })));
});
MetricInput.displayName = 'MetricInput';

var isEditable = function isEditable(mask, pos) {
  return _typeof(mask[pos]) === 'object';
};
var getDefaultValue = function getDefaultValue(mask, placeholderChar) {
  var val = '';

  for (var i = 0; i < mask.length; i++) {
    val += isEditable(mask, i) ? placeholderChar : mask[i];
  }

  return val;
};

/**
 * It works as Uncontrolled Input
 *
 * **Updated value can be passed**
 */
var InputMask = /*#__PURE__*/React.forwardRef(function (props, forwardRef) {
  props.mask;
      var valueProp = props.value,
      _props$placeholderCha = props.placeholderChar,
      placeholderChar = _props$placeholderCha === void 0 ? '_' : _props$placeholderCha,
      _props$validators = props.validators,
      validators = _props$validators === void 0 ? [] : _props$validators,
      _props$clearOnEmptyBl = props.clearOnEmptyBlur,
      clearOnEmptyBlur = _props$clearOnEmptyBl === void 0 ? true : _props$clearOnEmptyBl,
      defaultValue = props.defaultValue,
      mask = props.mask,
      error = props.error,
      caption = props.caption,
      required = props.required,
      onChange = props.onChange,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      onClear = props.onClear,
      className = props.className,
      rest = _objectWithoutProperties$1(props, ["mask", "value", "placeholderChar", "validators", "clearOnEmptyBlur", "defaultValue", "mask", "error", "caption", "required", "onChange", "onBlur", "onFocus", "onClear", "className"]);

  var getNewCursorPosition = function getNewCursorPosition(type, position) {
    if (type === 'right') {
      for (var i = position; i < mask.length; i++) {
        if (isEditable(i)) return i;
      }

      return mask.length;
    }

    if (type === 'left') {
      for (var _i = position; _i >= 0; _i--) {
        if (isEditable(_i - 1)) return _i;
      }

      return 0;
    }

    return position;
  };

  var getDefaultSelection = function getDefaultSelection() {
    var pos = getNewCursorPosition('right', 0);
    return {
      start: pos,
      end: pos
    };
  };

  var getPlaceholderValue = function getPlaceholderValue() {
    var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : mask.length - 1;
    return getDefaultValue(mask, placeholderChar).slice(start, end + 1);
  };

  var getSelectionLength = function getSelectionLength(val) {
    return Math.abs(val.end - val.start);
  };

  var isEditable = function isEditable(pos) {
    return _typeof(mask[pos]) === 'object';
  };

  var deferId = React.useRef();
  var selectionRef = React.useRef(0);

  var _React$useState = React.useState(defaultValue || valueProp || ''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var _React$useState3 = React.useState(getDefaultSelection()),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      selection = _React$useState4[0],
      setSelection = _React$useState4[1];

  var ref = React.useRef(null);
  React.useImperativeHandle(forwardRef, function () {
    return ref.current;
  });
  React.useEffect(function () {
    setValue(valueProp || '');
  }, [valueProp]);

  var setCursorPosition = function setCursorPosition(val) {
    return setSelectionPos({
      start: val,
      end: val
    });
  };

  var getCurrSelection = function getCurrSelection() {
    return {
      start: ref.current.selectionStart || 0,
      end: ref.current.selectionEnd || 0
    };
  };

  var setSelectionPos = function setSelectionPos(pos) {
    if (ref.current) {
      var el = ref.current;
      var start = Math.min(pos.start, pos.end);
      var end = Math.max(pos.start, pos.end);
      el.setSelectionRange(start, end);
    }
  };

  var updateSelection = function updateSelection() {
    setSelection(getCurrSelection());
    deferId.current = window.requestAnimationFrame(updateSelection);
  };

  var insertAtIndex = function insertAtIndex(currValue, index) {
    var iterator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var newValue = '';
    var newIndex = index + 1;
    var newIterator = iterator;

    if (index >= mask.length) {
      return newValue;
    }

    if (iterator >= currValue.length) {
      selectionRef.current = index;
      return newValue;
    }

    var m = mask[index];

    if (isEditable(index)) {
      if (currValue[iterator].match(m)) {
        newValue += currValue[iterator];
      } else {
        newValue += placeholderChar;
      }

      newIterator++;
    } else {
      newValue += m;
    }

    newValue += insertAtIndex(currValue, newIndex, newIterator);
    return newValue;
  };

  var onChangeHandler = function onChangeHandler(e) {
    var inputVal = e.currentTarget.value;
    var currSelection = getCurrSelection();
    var start = Math.min(selection.start, currSelection.start);
    var end = currSelection.end;
    var cursorPosition = start;
    var enteredVal = '';
    var updatedVal = '';
    var removedLength = 0;
    var insertedStringLength = 0;
    enteredVal = inputVal.slice(start, end);
    updatedVal = insertAtIndex(enteredVal, start);
    insertedStringLength = updatedVal.length;

    if (currSelection.end > selection.end) {
      removedLength = insertedStringLength ? getSelectionLength(selection) : 0;
    } else if (inputVal.length < value.length) {
      removedLength = value.length - inputVal.length;
    }

    cursorPosition += insertedStringLength;
    var maskedVal = value.split('');

    for (var i = 0; i < insertedStringLength; i++) {
      maskedVal[start + i] = updatedVal[i];
    }

    for (var _i2 = 0; _i2 < removedLength; _i2++) {
      var index = start + insertedStringLength + _i2;
      maskedVal[index] = getPlaceholderValue(index, index);
    }

    var newCursorPosition = getNewCursorPosition(removedLength ? 'left' : 'right', cursorPosition);

    if (removedLength === 1 && !updatedVal.length && !isEditable(cursorPosition) && newCursorPosition > 0) {
      cursorPosition = newCursorPosition;
      cursorPosition--;
      maskedVal[cursorPosition] = placeholderChar;
    } else if (removedLength !== 1) {
      cursorPosition = newCursorPosition;
    }

    var newValue = maskedVal.slice(0, mask.length).join('');
    window.requestAnimationFrame(function () {
      return setCursorPosition(cursorPosition);
    });

    if (isValid(validators, newValue)) {
      setValue(newValue);
      if (onChange) onChange(e, newValue);
    }
  };

  var onBlurHandler = function onBlurHandler(e) {
    var inputVal = e.currentTarget.value;

    if (clearOnEmptyBlur) {
      if (inputVal === getPlaceholderValue()) {
        setValue('');
        inputVal = '';
      }
    }

    if (onBlur) onBlur(e, inputVal);
    if (deferId.current) window.cancelAnimationFrame(deferId.current);
  };

  var onClearHandler = function onClearHandler(e) {
    // setValue('');
    // window.requestAnimationFrame(() => ref.current!.blur());
    setValue(getPlaceholderValue());
    window.requestAnimationFrame(function () {
      return setCursorPosition(getDefaultSelection().start);
    });
    if (onClear) onClear(e);
  };

  var onFocusHandler = function onFocusHandler(e) {
    deferId.current = window.requestAnimationFrame(updateSelection);

    if (!value) {
      setValue(getPlaceholderValue());
      window.requestAnimationFrame(function () {
        return setSelectionPos(getDefaultSelection());
      });
    }

    if (onFocus) onFocus(e);
  };

  var classes = classnames({
    'd-flex flex-column flex-grow-1': true
  }, className);
  return /*#__PURE__*/React.createElement("div", {
    className: classes
  }, /*#__PURE__*/React.createElement(Input, _extends$3({}, rest, {
    value: value,
    error: error,
    required: required,
    onFocus: onFocusHandler,
    onChange: onChangeHandler,
    onClear: onClearHandler,
    onBlur: onBlurHandler,
    autoComplete: 'off',
    ref: ref
  })), /*#__PURE__*/React.createElement(Caption, {
    error: error,
    withInput: true,
    hide: !caption
  }, caption));
});
InputMask.displayName = 'InputMask'; // @ts-ignore

InputMask.utils = {
  getDefaultValue: getDefaultValue
};

/**
 * *NOTE: Extends props with HTMLProps<HTMLLabelElement>*
 */
var Label = function Label(props) {
  var _classNames;

  var required = props.required,
      optional = props.optional,
      withInput = props.withInput,
      disabled = props.disabled,
      children = props.children,
      className = props.className,
      rest = _objectWithoutProperties$1(props, ["required", "optional", "withInput", "disabled", "children", "className"]);

  var baseProps = extractBaseProps(props);
  var LabelClass = classnames((_classNames = {
    Label: true
  }, _defineProperty$2(_classNames, 'Label--withInput', withInput), _defineProperty$2(_classNames, 'Label--optional', optional), _classNames), className);
  var classes = classnames({
    'Label-text': true,
    'Label--disabled': disabled
  });

  var renderInfo = function renderInfo() {
    var isRequired = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var isOptional = arguments.length > 1 ? arguments[1] : undefined;

    if (isRequired) {
      return /*#__PURE__*/React.createElement("span", {
        className: "Label-requiredIndicator",
        "data-test": "DesignSystem-Label--RequiredIndicator"
      });
    }

    if (isOptional) {
      return /*#__PURE__*/React.createElement(Text, {
        "data-test": "DesignSystem-Label--OptionalText",
        appearance: "subtle",
        className: "Label-optionalText"
      }, "(optional)");
    }

    return null;
  };

  return /*#__PURE__*/React.createElement("div", _extends$3({
    "data-test": "DesignSystem-Label"
  }, baseProps, {
    className: LabelClass
  }), /*#__PURE__*/React.createElement(GenericText, _extends$3({
    "data-test": "DesignSystem-Label--Text",
    className: classes,
    componentType: "label"
  }, rest), children), renderInfo(required, optional));
};
Label.displayName = 'Label';

var Caption = function Caption(props) {
  var _classNames;

  var error = props.error,
      hide = props.hide,
      withInput = props.withInput,
      children = props.children,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var classes = classnames((_classNames = {
    Caption: true
  }, _defineProperty$2(_classNames, 'Caption--hidden', hide), _defineProperty$2(_classNames, 'Caption--withInput', withInput), _classNames), className);
  var errorIconClass = classnames(_defineProperty$2({}, 'Caption-icon', true));
  return /*#__PURE__*/React.createElement("div", _extends$3({}, baseProps, {
    className: classes
  }), error && /*#__PURE__*/React.createElement("div", {
    className: errorIconClass
  }, /*#__PURE__*/React.createElement(Icon, {
    size: 14,
    name: 'error',
    appearance: 'alert'
  })), /*#__PURE__*/React.createElement(Text, {
    appearance: error ? 'destructive' : 'subtle',
    size: "small",
    weight: "medium"
  }, "".concat(children)));
};
Caption.displayName = 'Caption';

var Legend = function Legend(props) {
  var iconAppearance = props.iconAppearance,
      iconSize = props.iconSize,
      labelAppearance = props.labelAppearance,
      children = props.children,
      labelWeight = props.labelWeight,
      _onMouseEnter = props.onMouseEnter,
      _onMouseLeave = props.onMouseLeave,
      _onClick = props.onClick,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var legendClass = classnames(_defineProperty$2({}, 'Legend', true), className);
  var styles = {
    background: "var(--".concat(iconAppearance, ")"),
    height: "".concat(iconSize, "px"),
    width: "".concat(iconSize, "px")
  };
  return /*#__PURE__*/React.createElement("div", _extends$3({}, baseProps, {
    className: legendClass,
    onClick: function onClick(e) {
      return _onClick && _onClick(e);
    },
    onMouseEnter: function onMouseEnter(e) {
      return _onMouseEnter && _onMouseEnter(e);
    },
    onMouseLeave: function onMouseLeave(e) {
      return _onMouseLeave && _onMouseLeave(e);
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "Legend-icon",
    style: styles
  }), /*#__PURE__*/React.createElement(Text, {
    appearance: labelAppearance,
    weight: labelWeight
  }, children));
};
Legend.displayName = 'Legend';
Legend.defaultProps = {
  iconAppearance: 'inverse',
  iconSize: 16
};

var Editable = function Editable(props) {
  var className = props.className,
      onChange = props.onChange,
      editing = props.editing,
      children = props.children;
  var baseProps = extractBaseProps(props);
  var EditableClass = classnames(_defineProperty$2({}, 'Editable', true), className);
  return /*#__PURE__*/React.createElement("div", _extends$3({
    "data-test": "DesignSystem-Editable"
  }, baseProps, {
    className: EditableClass
  }), /*#__PURE__*/React.createElement("div", {
    "data-test": "DesignSystem-EditableWrapper",
    onClick: function onClick() {
      return onChange('edit');
    },
    onMouseEnter: function onMouseEnter() {
      return !editing && onChange('hover');
    },
    onMouseLeave: function onMouseLeave() {
      return !editing && onChange('default');
    }
  }, children));
};
Editable.displayName = 'Editable';

var EditableDropdown = function EditableDropdown(props) {
  var _classNames2;

  var placeholder = props.placeholder,
      dropdownOptions = props.dropdownOptions,
      className = props.className,
      customTriggerRenderer = props.customTriggerRenderer;

  var onDropdownChange = dropdownOptions.onChange,
      onDropdownClose = dropdownOptions.onClose,
      rest = _objectWithoutProperties$1(dropdownOptions, ["onChange", "onClose"]);

  var _React$useState = React.useState(placeholder),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      label = _React$useState2[0],
      setLabel = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      editing = _React$useState4[0],
      setEditing = _React$useState4[1];

  var _React$useState5 = React.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      showComponent = _React$useState6[0],
      setShowComponent = _React$useState6[1];

  var CompClass = classnames(_defineProperty$2({}, 'EditableDropdown', true), className);
  var DefaultCompClass = classnames((_classNames2 = {}, _defineProperty$2(_classNames2, 'EditableDropdown-default', true), _defineProperty$2(_classNames2, 'd-none', showComponent), _classNames2));
  var EditableDropdownClass = classnames(_defineProperty$2({}, 'd-none', !showComponent));
  var baseProps = extractBaseProps(props);

  var getLabel = function getLabel(updatedLabel) {
    setLabel(updatedLabel);
  };

  var onChangeHandler = function onChangeHandler(eventType) {
    switch (eventType) {
      case 'edit':
        setEditing(true);

      case 'hover':
        setShowComponent(true);
        return;

      case 'default':
        setShowComponent(false);
        return;
    }
  };

  var onChange = function onChange(value) {
    setEditing(false);
    setShowComponent(false);
    if (onDropdownChange) onDropdownChange(value);
  };

  var onClose = function onClose(selected) {
    setEditing(false);
    setShowComponent(false);
    if (onDropdownClose) onDropdownClose(selected);
  };

  var renderComponent = function renderComponent(componentLabel) {
    if (customTriggerRenderer) return customTriggerRenderer(componentLabel);
    return componentLabel;
  };

  return /*#__PURE__*/React.createElement("div", _extends$3({
    "data-test": "DesignSystem-EditableDropdown"
  }, baseProps, {
    className: CompClass
  }), /*#__PURE__*/React.createElement(Editable, {
    onChange: onChangeHandler,
    editing: editing
  }, /*#__PURE__*/React.createElement(Dropdown, _extends$3({
    placeholder: placeholder,
    onChange: onChange,
    getLabel: getLabel,
    onClose: onClose,
    className: EditableDropdownClass,
    "data-test": "DesignSystem-EditableDropdown--Dropdown"
  }, rest)), /*#__PURE__*/React.createElement("div", {
    className: DefaultCompClass,
    "data-test": "DesignSystem-EditableDropdown--Default"
  }, renderComponent(label || placeholder))));
};
EditableDropdown.defaultProps = {
  placeholder: '',
  dropdownOptions: {}
};

var Link = function Link(props) {
  var _classNames;

  var children = props.children,
      className = props.className,
      appearance = props.appearance,
      size = props.size,
      disabled = props.disabled,
      rest = _objectWithoutProperties$1(props, ["children", "className", "appearance", "size", "disabled"]);

  var classes = classnames((_classNames = {
    Link: true
  }, _defineProperty$2(_classNames, 'Link--disabled', disabled), _defineProperty$2(_classNames, "Link--".concat(size), size), _defineProperty$2(_classNames, "Link--".concat(appearance), appearance), _classNames), className);
  return /*#__PURE__*/React.createElement(GenericText, _extends$3({
    "data-test": "DesignSystem-Link",
    className: classes,
    componentType: "a"
  }, rest), children);
};
Link.displayName = 'Link';
Link.defaultProps = {
  appearance: 'default',
  size: 'regular',
  disabled: false
};

var IconMapping$1 = {
  success: 'check_circle',
  info: 'info',
  warning: 'warning',
  alert: 'error'
};
var Message = function Message(props) {
  var _classNames, _classNames2, _classNames3, _classNames4;

  var appearance = props.appearance,
      actions = props.actions,
      title = props.title,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var MessageClass = classnames((_classNames = {}, _defineProperty$2(_classNames, 'Message', true), _defineProperty$2(_classNames, "Message--".concat(appearance), appearance), _classNames), className);
  var IconClass = classnames((_classNames2 = {}, _defineProperty$2(_classNames2, 'Message-icon', true), _defineProperty$2(_classNames2, "Message-icon--".concat(appearance), appearance), _defineProperty$2(_classNames2, 'Message-icon--withTitle', title), _classNames2));
  var TitleClass = classnames((_classNames3 = {}, _defineProperty$2(_classNames3, 'Message-heading', true), _defineProperty$2(_classNames3, "Message-heading--".concat(appearance), appearance), _classNames3));
  var DescriptionClass = classnames((_classNames4 = {}, _defineProperty$2(_classNames4, 'Message-text', true), _defineProperty$2(_classNames4, "Message-text--".concat(appearance), appearance), _classNames4));

  var renderDescription = function renderDescription(description, children) {
    if (description || typeof children === 'string') {
      return /*#__PURE__*/React.createElement(Text, {
        "data-test": "DesignSystem-Message--Description",
        className: DescriptionClass
      }, description || (typeof children === 'string' ? children : ''));
    }

    if (children) {
      return /*#__PURE__*/React.createElement("div", {
        "data-test": "DesignSystem-Message--Description",
        className: "Message-description"
      }, children);
    }

    return null;
  };

  return /*#__PURE__*/React.createElement("div", _extends$3({
    "data-test": "DesignSystem-Message"
  }, baseProps, {
    className: MessageClass
  }), appearance !== 'default' && /*#__PURE__*/React.createElement(Icon, {
    "data-test": "DesignSystem-Message--Icon",
    name: IconMapping$1[appearance],
    appearance: appearance,
    className: IconClass
  }), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement(Heading, {
    "data-test": "DesignSystem-Message--Title",
    size: "s",
    className: TitleClass
  }, title), renderDescription(props.description, props.children), actions && /*#__PURE__*/React.createElement("div", {
    "data-test": "DesignSystem-Message--actions",
    className: "Message-actions"
  }, actions)));
};
Message.displayName = 'Message';
Message.defaultProps = {
  appearance: 'default',
  description: ''
};

var Meta = function Meta(props) {
  var label = props.label,
      icon = props.icon,
      iconAppearance = props.iconAppearance,
      labelAppearance = props.labelAppearance;
  return /*#__PURE__*/React.createElement("span", {
    className: 'Meta'
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    appearance: iconAppearance,
    className: 'Meta-icon'
  }), /*#__PURE__*/React.createElement(Text, {
    appearance: labelAppearance
  }, label));
};
Meta.displayName = 'Meta';

var MetaList = function MetaList(props) {
  var _classNames3;

  var list = props.list,
      seperator = props.seperator,
      seperatorAppearance = props.seperatorAppearance,
      iconAppearance = props.iconAppearance,
      labelAppearance = props.labelAppearance,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var MetaClass = classnames(_defineProperty$2({}, 'MetaList', true), className);
  var SeperatorClass = classnames(_defineProperty$2({}, 'MetaList-seperator', true));
  var LeftSeperatorClass = classnames((_classNames3 = {}, _defineProperty$2(_classNames3, 'MetaList-seperator', true), _defineProperty$2(_classNames3, 'MetaList-seperator--left', true), _classNames3));
  return /*#__PURE__*/React.createElement("div", _extends$3({}, baseProps, {
    className: MetaClass
  }), seperator && /*#__PURE__*/React.createElement(Icon, {
    name: "fiber_manual_record",
    size: 8,
    className: LeftSeperatorClass,
    appearance: seperatorAppearance
  }), list.map(function (item, ind) {
    var _item$label = item.label,
        label = _item$label === void 0 ? '' : _item$label,
        icon = item.icon;
    var rightSeperator = ind !== list.length - 1;
    return /*#__PURE__*/React.createElement("span", {
      key: ind,
      className: "MetaList-item"
    }, /*#__PURE__*/React.createElement(Meta, {
      label: label,
      icon: icon,
      iconAppearance: iconAppearance,
      labelAppearance: labelAppearance
    }), rightSeperator && /*#__PURE__*/React.createElement(Icon, {
      name: "fiber_manual_record",
      size: 8,
      className: SeperatorClass,
      appearance: seperatorAppearance
    }));
  }));
};
MetaList.displayName = 'MetaList';
MetaList.defaultProps = {
  seperatorAppearance: 'disabled',
  iconAppearance: 'disabled',
  labelAppearance: 'subtle'
};

var OutsideClick = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
      className = props.className,
      onOutsideClick = props.onOutsideClick,
      rest = _objectWithoutProperties$1(props, ["children", "className", "onOutsideClick"]);

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

    if (!ReactDOM.findDOMNode(element.current).contains(event.target)) {
      onOutsideClick(event);
    }
  }, []);
  var classes = classnames(_defineProperty$2({}, 'OutsideClick', true), className);
  return /*#__PURE__*/React.createElement("div", _extends$3({
    ref: innerRef
  }, rest, {
    className: classes
  }), children);
});
OutsideClick.displayName = 'OutsideClick';

var Paragraph = function Paragraph(props) {
  var appearance = props.appearance,
      children = props.children,
      className = props.className,
      rest = _objectWithoutProperties$1(props, ["appearance", "children", "className"]);

  var classes = classnames(_defineProperty$2({
    Text: true
  }, "Text--".concat(appearance), appearance), className);
  return /*#__PURE__*/React.createElement(GenericText, _extends$3({
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

var ProgressBar = function ProgressBar(props) {
  var max = props.max,
      value = props.value,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var style = {
    width: value > 0 ? "".concat(Math.min(value, max) * 100 / max, "%") : '0'
  };
  var ProgressBarClass = classnames({
    ProgressBar: true
  }, className);
  return /*#__PURE__*/React.createElement("div", _extends$3({
    "data-test": "DesignSystem-ProgressBar"
  }, baseProps, {
    className: ProgressBarClass
  }), /*#__PURE__*/React.createElement("div", {
    className: 'ProgressBar-indicator',
    style: style
  }));
};
ProgressBar.displayName = 'ProgressBar';
ProgressBar.defaultProps = {
  max: 100
};

var Radio = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  var _classNames, _classNames2, _classNames3;

  var _props$size = props.size,
      size = _props$size === void 0 ? 'regular' : _props$size,
      label = props.label,
      disabled = props.disabled,
      onChange = props.onChange,
      name = props.name,
      value = props.value,
      checked = props.checked,
      defaultChecked = props.defaultChecked,
      className = props.className,
      rest = _objectWithoutProperties$1(props, ["size", "label", "disabled", "onChange", "name", "value", "checked", "defaultChecked", "className"]);

  var ref = React.useRef(null);
  React.useImperativeHandle(forwardedRef, function () {
    return ref.current;
  });
  var RadioClass = classnames((_classNames = {}, _defineProperty$2(_classNames, 'Radio', true), _defineProperty$2(_classNames, 'Radio--disabled', disabled), _classNames), className);
  var RadioWrapper = classnames((_classNames2 = {}, _defineProperty$2(_classNames2, 'Radio-wrapper', true), _defineProperty$2(_classNames2, "Radio-wrapper--".concat(size), size), _classNames2));
  var RadioOuterWrapper = classnames((_classNames3 = {}, _defineProperty$2(_classNames3, 'Radio-outerWrapper', true), _defineProperty$2(_classNames3, "Radio-outerWrapper--".concat(size), size), _classNames3));
  var id = "".concat(name, "-").concat(label, "-").concat(uidGenerator());
  return /*#__PURE__*/React.createElement("div", {
    className: RadioClass
  }, /*#__PURE__*/React.createElement("div", {
    className: RadioOuterWrapper
  }, /*#__PURE__*/React.createElement("input", _extends$3({}, rest, {
    type: "radio",
    disabled: disabled,
    checked: checked,
    defaultChecked: defaultChecked,
    ref: ref,
    name: name,
    value: value,
    onChange: onChange,
    className: "Radio-input",
    id: id
  })), /*#__PURE__*/React.createElement("span", {
    className: RadioWrapper
  })), label && /*#__PURE__*/React.createElement("label", {
    className: "Radio-label",
    htmlFor: id
  }, /*#__PURE__*/React.createElement(Text, {
    size: size === 'tiny' ? 'small' : 'regular',
    appearance: disabled ? 'disabled' : 'default'
  }, label)));
});
Radio.displayName = 'Radio';

var Row = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
      children = props.children,
      rest = _objectWithoutProperties$1(props, ["className", "children"]);

  var classes = classnames(_defineProperty$2({
    Row: true
  }, "".concat(className), className));
  return /*#__PURE__*/React.createElement("div", _extends$3({
    "data-test": "DesignSystem-Row",
    ref: ref
  }, rest, {
    className: classes
  }), children);
});
Row.displayName = 'Row';

var StatusHint = function StatusHint(props) {
  var _classNames2;

  var appearance = props.appearance,
      children = props.children,
      _onMouseEnter = props.onMouseEnter,
      _onMouseLeave = props.onMouseLeave,
      _onClick = props.onClick,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var StatusHintClass = classnames(_defineProperty$2({}, 'StatusHint', true), className);
  var StatusHintIconClass = classnames((_classNames2 = {}, _defineProperty$2(_classNames2, 'StatusHint-icon', true), _defineProperty$2(_classNames2, "StatusHint--".concat(appearance), appearance), _classNames2));
  return /*#__PURE__*/React.createElement("div", _extends$3({
    "data-test": "DesignSystem-StatusHint"
  }, baseProps, {
    className: StatusHintClass,
    onClick: function onClick(e) {
      return _onClick && _onClick(e);
    },
    onMouseEnter: function onMouseEnter(e) {
      return _onMouseEnter && _onMouseEnter(e);
    },
    onMouseLeave: function onMouseLeave(e) {
      return _onMouseLeave && _onMouseLeave(e);
    }
  }), /*#__PURE__*/React.createElement("span", {
    "data-test": "DesignSystem-StatusHint--Icon",
    className: StatusHintIconClass
  }), /*#__PURE__*/React.createElement(Text, {
    "data-test": "DesignSystem-StatusHint--Text",
    weight: 'medium'
  }, children));
};
StatusHint.displayName = 'StatusHint';
StatusHint.defaultProps = {
  appearance: 'default'
};

var Pills = function Pills(props) {
  var _classNames;

  var appearance = props.appearance,
      children = props.children,
      subtle = props.subtle,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var classes = classnames((_classNames = {
    Pills: true
  }, _defineProperty$2(_classNames, "Badge--".concat(appearance), appearance && !subtle), _defineProperty$2(_classNames, "Badge--subtle-".concat(appearance), subtle), _classNames), className);
  return /*#__PURE__*/React.createElement("span", _extends$3({
    "data-test": "DesignSystem-Pills"
  }, baseProps, {
    className: classes
  }), children);
};
Pills.displayName = 'Pills';
Pills.defaultProps = {
  appearance: 'secondary'
};

var ARROW_LEFT = 37;
var ARROW_RIGHT = 39;

var formatPercentage = function formatPercentage(ratio) {
  return "".concat((ratio * 100).toFixed(2), "%");
};
var countDecimalPlaces = function countDecimalPlaces(value) {
  if (!isFinite(value)) return 0;

  if (Math.floor(value) !== value) {
    var valueArray = value.toString().split('.');
    return valueArray[1].length || 0;
  }

  return 0;
};
var approxEqual = function approxEqual(a, b) {
  var tolerance = 0.00001;
  return Math.abs(a - b) <= tolerance;
};
var clamp = function clamp(value, min, max) {
  if (value == null) {
    return value;
  }

  return Math.min(Math.max(value, min), max);
};
var arraysEqual = function arraysEqual(oldValues, newValues) {
  if (oldValues.length !== oldValues.length) return;
  return newValues.every(function (value, index) {
    return value === oldValues[index];
  });
};
function argMin(values, argFn) {
  if (values.length === 0) {
    return undefined;
  }

  var minValue = values[0];
  var minArg = argFn(minValue);

  for (var index = 1; index < values.length; index++) {
    var _value = values[index];
    var arg = argFn(_value);

    if (arg < minArg) {
      minValue = _value;
      minArg = arg;
    }
  }

  return minValue;
}
function fillValues(values, startIndex, endIndex, fillValue) {
  var inc = startIndex < endIndex ? 1 : -1;

  for (var index = startIndex; index !== endIndex + inc; index += inc) {
    values[index] = fillValue;
  }
}
function isElementOfType(element, _ComponentType) {
  return element != null && element.type != null;
}

var Handle = /*#__PURE__*/function (_React$Component) {
  _inherits$1(Handle, _React$Component);

  var _super = _createSuper$1(Handle);

  function Handle() {
    var _this;

    _classCallCheck$1(this, Handle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$2(_assertThisInitialized$2(_this), "state", {
      isMoving: false
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "handleElement", null);

    _defineProperty$2(_assertThisInitialized$2(_this), "refHandlers", {
      handle: function handle(el) {
        return _this.handleElement = el;
      }
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "mouseEventClientOffset", function (event) {
      return event.clientX;
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "clientToValue", function (clientPixel) {
      var _this$props = _this.props,
          stepSize = _this$props.stepSize,
          tickSize = _this$props.tickSize,
          value = _this$props.value;

      if (_this.handleElement == null) {
        return value;
      }

      var clientPixelNormalized = clientPixel;

      var _this$getHandleMidpoi = _this.getHandleMidpointAndOffset(_this.handleElement),
          handleMidpoint = _this$getHandleMidpoi.handleMidpoint,
          handleOffset = _this$getHandleMidpoi.handleOffset;

      var handleCenterPixel = handleMidpoint + handleOffset;
      var pixelDelta = clientPixelNormalized - handleCenterPixel;

      if (isNaN(pixelDelta)) {
        return value;
      }

      return value + Math.round(pixelDelta / (tickSize * stepSize)) * stepSize;
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "changeValue", function (newValue) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.props.onChange;
      var updatedValue = clamp(newValue, _this.props.min, _this.props.max);

      if (!isNaN(updatedValue) && _this.props.value !== updatedValue) {
        if (callback) callback(updatedValue);
      }

      return updatedValue;
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "endHandleMovement", function (event) {
      var clientPixel = _this.mouseEventClientOffset(event);

      var onRelease = _this.props.onRelease;

      _this.removeDocumentEventListeners();

      _this.setState({
        isMoving: false
      });

      var finalValue = _this.changeValue(_this.clientToValue(clientPixel));

      if (onRelease) onRelease(finalValue);
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "continueHandleMovement", function (event) {
      var clientPixel = _this.mouseEventClientOffset(event);

      if (_this.state.isMoving && !_this.props.disabled) {
        var value = _this.clientToValue(clientPixel);

        _this.changeValue(value);
      }
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "beginHandleMovement", function (event) {
      if (_this.props.disabled) return;
      document.addEventListener('mousemove', _this.continueHandleMovement);
      document.addEventListener('mouseup', _this.endHandleMovement);

      _this.setState({
        isMoving: true
      });

      var value = _this.clientToValue(event.clientX);

      _this.changeValue(value);
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "handleKeyDown", function (event) {
      if (_this.props.disabled) return;
      var _this$props2 = _this.props,
          stepSize = _this$props2.stepSize,
          value = _this$props2.value;
      var which = event.which;

      if (which === ARROW_LEFT) {
        _this.changeValue(value - stepSize);

        event.preventDefault();
      } else if (which === ARROW_RIGHT) {
        _this.changeValue(value + stepSize);

        event.preventDefault();
      }
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "handleKeyUp", function (event) {
      if (_this.props.disabled) return;

      if ([ARROW_LEFT, ARROW_RIGHT].indexOf(event.which) >= 0) {
        var onRelease = _this.props.onRelease;
        if (onRelease) onRelease(_this.props.value);
      }
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "getHandleMidpointAndOffset", function (handleElement) {
      var useOppositeDimension = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (handleElement == null) {
        return {
          handleMidpoint: 0,
          handleOffset: 0
        };
      }

      var handleRect = handleElement.getBoundingClientRect();
      var sizeKey = useOppositeDimension ? 'height' : 'width';
      var handleOffset = handleRect.left;
      return {
        handleOffset: handleOffset,
        handleMidpoint: handleRect[sizeKey] / 2
      };
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "removeDocumentEventListeners", function () {
      document.removeEventListener('mousemove', _this.continueHandleMovement);
      document.removeEventListener('mouseup', _this.endHandleMovement);
    });

    return _this;
  }

  _createClass$1(Handle, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeDocumentEventListeners();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_prevProps, prevState) {
      if (prevState.isMoving !== this.state.isMoving) {
        if (this.handleElement) this.handleElement.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props3 = this.props,
          min = _this$props3.min,
          tickSizeRatio = _this$props3.tickSizeRatio,
          value = _this$props3.value,
          disabled = _this$props3.disabled,
          label = _this$props3.label;

      var _this$getHandleMidpoi2 = this.getHandleMidpointAndOffset(this.handleElement, true),
          handleMidpoint = _this$getHandleMidpoi2.handleMidpoint;

      var offsetRatio = (value - min) * tickSizeRatio;
      var offsetCalc = "calc(".concat(formatPercentage(offsetRatio), " - ").concat(handleMidpoint, "px)");
      var style = {
        left: offsetCalc
      };
      var className = classnames((_classNames = {}, _defineProperty$2(_classNames, 'Slider-handle', true), _defineProperty$2(_classNames, 'Slider-handle--disabled', disabled), _defineProperty$2(_classNames, 'Slider-handle--active', this.state.isMoving), _classNames));
      return /*#__PURE__*/React.createElement("div", {
        className: className,
        onMouseDown: this.beginHandleMovement,
        onKeyDown: this.handleKeyDown,
        onKeyUp: this.handleKeyUp,
        ref: this.refHandlers.handle,
        style: style,
        tabIndex: 1
      }, !this.state.isMoving && /*#__PURE__*/React.createElement(Tooltip, {
        tooltip: label,
        position: "top",
        triggerClass: 'Slider-tooltip'
      }, /*#__PURE__*/React.createElement("span", {
        className: "h-100 w-100"
      })));
    }
  }]);

  return Handle;
}(React.Component);

var MultiSliderHandle = function MultiSliderHandle() {
  return null;
};

var MultiSlider = /*#__PURE__*/function (_React$Component) {
  _inherits$1(MultiSlider, _React$Component);

  var _super = _createSuper$1(MultiSlider);

  function MultiSlider(_props) {
    var _this;

    _classCallCheck$1(this, MultiSlider);

    _this = _super.call(this, _props);

    _defineProperty$2(_assertThisInitialized$2(_this), "handleElements", []);

    _defineProperty$2(_assertThisInitialized$2(_this), "trackElement", null);

    _defineProperty$2(_assertThisInitialized$2(_this), "getLabelPrecision", function (_ref) {
      var labelPrecision = _ref.labelPrecision,
          stepSize = _ref.stepSize;
      return labelPrecision == null ? countDecimalPlaces(stepSize) : labelPrecision;
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "getOffsetRatio", function (value) {
      return clamp((value - _this.props.min) * _this.state.tickSizeRatio, 0, 1);
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "addHandleRef", function (ref) {
      if (ref != null) {
        _this.handleElements.push(ref);
      }
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "getHandleValues", function (props) {
      var maybeHandles = React.Children.map(props.children, function (child) {
        return isElementOfType(child) ? child.props : null;
      });
      var handles = maybeHandles != null ? maybeHandles : [];
      handles = handles.filter(function (handle) {
        return handle !== null;
      });
      handles.sort(function (left, right) {
        return left.value - right.value;
      });
      return handles;
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "updateTickSize", function () {
      if (_this.trackElement != null) {
        var trackSize = _this.trackElement.clientWidth;
        var tickSizeRatio = 1 / (_this.props.max - _this.props.min);
        var tickSize = trackSize * tickSizeRatio;

        _this.setState({
          tickSize: tickSize,
          tickSizeRatio: tickSizeRatio
        });
      }
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "getTrackFill", function (start, end) {
      if (start.fillAfter !== undefined) {
        return start.fillAfter;
      }

      if (end !== undefined && end.fillBefore !== undefined) {
        return end.fillBefore;
      }

      return false;
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "maybeHandleTrackClick", function (event) {
      var target = event.target;
      var canHandleTrackEvent = !_this.props.disabled && target.closest('.Slider-handle') == null;

      if (canHandleTrackEvent) {
        var foundHandle = _this.nearestHandleForValue(_this.handleElements, function (handle) {
          return handle.mouseEventClientOffset(event);
        });

        if (foundHandle) {
          foundHandle.beginHandleMovement(event);
        }
      }
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "getLockedHandleIndex", function (startIndex, endIndex) {
      var inc = startIndex < endIndex ? 1 : -1;

      for (var index = startIndex + inc; index !== endIndex + inc; index += inc) {
        return index;
      }

      return -1;
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "getNewHandleValues", function (newValue, oldIndex) {
      var handleProps = _this.getHandleValues(_this.props);

      var oldValues = handleProps.map(function (handle) {
        return handle.value;
      });
      var newValues = oldValues.slice();
      newValues[oldIndex] = newValue;
      if (newValues.length > 1) newValues.sort(function (left, right) {
        return left - right;
      });
      var newIndex = newValues.indexOf(newValue);

      var lockIndex = _this.getLockedHandleIndex(oldIndex, newIndex);

      if (lockIndex === -1) {
        fillValues(newValues, oldIndex, newIndex, newValue);
      } else {
        var lockValue = oldValues[lockIndex];
        fillValues(oldValues, oldIndex, lockIndex, lockValue);
        return oldValues;
      }

      return newValues;
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "onReleaseHandler", function (newValue, index) {
      var onRangeRelease = _this.props.onRangeRelease;

      var handleProps = _this.getHandleValues(_this.props);

      var newValues = _this.getNewHandleValues(newValue, index); // Range Slider callback


      if (onRangeRelease) {
        var range = newValues;
        onRangeRelease(range);
      } // Slider callback


      handleProps.forEach(function (handle, i) {
        if (handle.onRelease) handle.onRelease(newValues[i]);
      });
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "onChangeHandler", function (newValue, index) {
      var onRangeChange = _this.props.onRangeChange;

      var handleProps = _this.getHandleValues(_this.props);

      var oldValues = handleProps.map(function (handle) {
        return handle.value;
      });

      var newValues = _this.getNewHandleValues(newValue, index);

      if (!arraysEqual(newValues, oldValues)) {
        // Range Slider Callback
        if (onRangeChange) {
          var range = newValues;
          onRangeChange(range);
        } // Slider callback


        handleProps.forEach(function (handle, i) {
          if (handle.onChange) handle.onChange(newValues[i]);
        });
      }
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "renderHandles", function () {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          max = _this$props.max,
          min = _this$props.min,
          stepSize = _this$props.stepSize;

      var handleProps = _this.getHandleValues(_this.props);

      if (handleProps.length === 0) {
        return null;
      }

      return handleProps.map(function (_ref2, index) {
        var value = _ref2.value;
        return /*#__PURE__*/React.createElement(Handle, {
          disabled: disabled,
          key: "".concat(index, "-").concat(handleProps.length),
          max: max,
          min: min,
          onRelease: function onRelease(newValue) {
            return _this.onReleaseHandler(newValue, index);
          },
          onChange: function onChange(newValue) {
            return _this.onChangeHandler(newValue, index);
          },
          label: value.toFixed(_this.state.labelPrecision),
          ref: _this.addHandleRef,
          stepSize: stepSize,
          tickSize: _this.state.tickSize,
          tickSizeRatio: _this.state.tickSizeRatio,
          value: value
        });
      });
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "formatLabel", function (value) {
      var labelRenderer = _this.props.labelRenderer;

      if (typeof labelRenderer === 'function') {
        return labelRenderer(value);
      }

      return value.toFixed(_this.state.labelPrecision);
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "renderLabels", function () {
      var _this$props2 = _this.props,
          labelStepSize = _this$props2.labelStepSize,
          max = _this$props2.max,
          min = _this$props2.min,
          labelRenderer = _this$props2.labelRenderer,
          disabled = _this$props2.disabled;
      var labels = [];
      var stepSizeRatio = _this.state.tickSizeRatio * labelStepSize;

      var handles = _this.getHandleValues(_this.props);

      var activeLabels = handles.map(function (handle) {
        return handle.value.toFixed(_this.state.labelPrecision);
      });

      for (var i = min, offsetRatio = 0; i < max || approxEqual(i, max); i += labelStepSize, offsetRatio += stepSizeRatio) {
        var offsetPercentage = formatPercentage(offsetRatio);
        var style = {
          left: offsetPercentage
        };
        var active = !disabled && activeLabels.indexOf(i.toFixed(_this.state.labelPrecision)) !== -1;
        labels.push( /*#__PURE__*/React.createElement("div", {
          className: 'Slider-label',
          key: i,
          style: style
        }, /*#__PURE__*/React.createElement("span", {
          className: 'Slider-ticks'
        }), labelRenderer !== false && /*#__PURE__*/React.createElement(Text, {
          size: "small",
          appearance: active ? 'default' : 'disabled'
        }, _this.formatLabel(i))));
      }

      return labels;
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "renderTrackFill", function (index, start, end) {
      var _classNames;

      var _sort = [_this.getOffsetRatio(start.value), _this.getOffsetRatio(end.value)].sort(function (left, right) {
        return left - right;
      }),
          _sort2 = _slicedToArray(_sort, 2),
          startRatio = _sort2[0],
          endRatio = _sort2[1];

      var startOffset = Number((startRatio * 100).toFixed(2));
      var endOffset = Number(((1 - endRatio) * 100).toFixed(2));
      var width = "".concat(100 - endOffset - startOffset, "%");
      var orientationStyle = {
        width: width
      };

      var style = _objectSpread2({}, orientationStyle);

      var fillTrack = _this.getTrackFill(start, end);

      var classes = classnames((_classNames = {}, _defineProperty$2(_classNames, 'Slider-progress', true), _defineProperty$2(_classNames, 'Slider-progress--disabled', _this.props.disabled), _defineProperty$2(_classNames, 'Slider-progress--inRange', fillTrack), _defineProperty$2(_classNames, 'Slider-progress--inRangeDisabled', fillTrack && _this.props.disabled), _classNames));
      return /*#__PURE__*/React.createElement("div", {
        key: "track-".concat(index),
        className: classes,
        style: style
      });
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "renderTracks", function () {
      var trackStops = _this.getHandleValues(_this.props);

      trackStops.push({
        value: _this.props.max
      });
      var previous = {
        value: _this.props.min || 0
      };
      var handles = [];
      trackStops.forEach(function (track, index) {
        var current = track;
        handles.push(_this.renderTrackFill(index, previous, current));
        previous = current;
      });
      return handles;
    });

    _this.state = {
      labelPrecision: _this.getLabelPrecision(_this.props),
      tickSize: 0,
      tickSizeRatio: 0
    };
    return _this;
  }

  _createClass$1(MultiSlider, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props) {
      return {
        labelPrecision: this.getLabelPrecision(props)
      };
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(prevProps) {
      var prevHandleProps = this.getHandleValues(prevProps);
      var newHandleProps = this.getHandleValues(this.props);

      if (newHandleProps.length !== prevHandleProps.length) {
        this.handleElements = [];
      }

      return null;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateTickSize();
    }
  }, {
    key: "nearestHandleForValue",
    value: function nearestHandleForValue(handles, getOffset) {
      return argMin(handles, function (handle) {
        var offset = getOffset(handle);
        var offsetValue = handle.clientToValue(offset);
        var handleValue = handle.props.value;
        return Math.abs(offsetValue - handleValue);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames3,
          _this2 = this;

      var _this$props3 = this.props,
          label = _this$props3.label,
          className = _this$props3.className;
      var baseProps = extractBaseProps(this.props);
      var SliderClass = classnames(_defineProperty$2({}, 'Slider', true), className);
      var WrapperClass = classnames((_classNames3 = {}, _defineProperty$2(_classNames3, 'Slider-wrapper', true), _defineProperty$2(_classNames3, 'Slider-wrapper--disabled', this.props.disabled), _classNames3));
      return /*#__PURE__*/React.createElement("div", _extends$3({}, baseProps, {
        className: SliderClass
      }), label && /*#__PURE__*/React.createElement(Label, {
        withInput: true
      }, label), /*#__PURE__*/React.createElement("div", {
        className: WrapperClass,
        onMouseDown: this.maybeHandleTrackClick
      }, /*#__PURE__*/React.createElement("div", {
        className: "Slider-track",
        ref: function ref(_ref3) {
          return _this2.trackElement = _ref3;
        }
      }, this.renderTracks()), /*#__PURE__*/React.createElement("div", {
        className: "Slider-axis'"
      }, this.renderLabels()), this.renderHandles()));
    }
  }]);

  return MultiSlider;
}(React.Component);

_defineProperty$2(MultiSlider, "defaultProps", {
  labelStepSize: 1,
  max: 10,
  min: 0,
  stepSize: 1,
  labelRenderer: true
});

_defineProperty$2(MultiSlider, "Handle", MultiSliderHandle);

var Slider = function Slider(props) {
  var valueProp = props.value,
      defaultValue = props.defaultValue,
      onRelease = props.onRelease,
      onChange = props.onChange,
      rest = _objectWithoutProperties$1(props, ["value", "defaultValue", "onRelease", "onChange"]);

  var _React$useState = React.useState(valueProp === undefined ? defaultValue : valueProp),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  React.useEffect(function () {
    if (valueProp !== undefined) {
      setValue(valueProp);
    }
  }, [valueProp]);

  var onChangeHandler = function onChangeHandler(newValue) {
    if (valueProp === undefined) {
      setValue(newValue);
    }

    if (onChange) onChange(newValue);
  };

  return /*#__PURE__*/React.createElement(MultiSlider, rest, /*#__PURE__*/React.createElement(MultiSlider.Handle, {
    value: value,
    onChange: onChangeHandler,
    onRelease: onRelease,
    fillBefore: true
  }));
};
Slider.displayName = 'Slider';
Slider.defaultProps = _objectSpread2(_objectSpread2({}, MultiSlider.defaultProps), {}, {
  defaultValue: 0
});

var RangeIndex;

(function (RangeIndex) {
  RangeIndex[RangeIndex["START"] = 0] = "START";
  RangeIndex[RangeIndex["END"] = 1] = "END";
})(RangeIndex || (RangeIndex = {}));

var RangeSlider = function RangeSlider(props) {
  var valueProp = props.value,
      defaultValue = props.defaultValue,
      onChange = props.onChange,
      onRelease = props.onRelease,
      rest = _objectWithoutProperties$1(props, ["value", "defaultValue", "onChange", "onRelease"]);

  var _React$useState = React.useState(valueProp === undefined ? defaultValue : valueProp),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  React.useEffect(function () {
    if (valueProp !== undefined) {
      setValue(valueProp);
    }
  }, [valueProp]);

  var onChangeHandler = function onChangeHandler(range) {
    if (valueProp === undefined) {
      setValue(range);
    }

    if (onChange) onChange(range);
  };

  return /*#__PURE__*/React.createElement(MultiSlider, _extends$3({
    onRangeChange: onChangeHandler,
    onRangeRelease: onRelease
  }, rest), /*#__PURE__*/React.createElement(MultiSlider.Handle, {
    value: value[RangeIndex.START],
    fillAfter: true
  }), /*#__PURE__*/React.createElement(MultiSlider.Handle, {
    value: value[RangeIndex.END]
  }));
};
RangeSlider.displayName = 'RangeSlider';
RangeSlider.defaultProps = _objectSpread2(_objectSpread2({}, MultiSlider.defaultProps), {}, {
  defaultValue: [0, 10]
});

var Subheading = function Subheading(props) {
  var appearance = props.appearance,
      children = props.children,
      className = props.className,
      rest = _objectWithoutProperties$1(props, ["appearance", "children", "className"]);

  var classes = classnames(_defineProperty$2({
    Subheading: true
  }, "Subheading--".concat(appearance), appearance), className);
  return /*#__PURE__*/React.createElement(GenericText, _extends$3({
    "data-test": "DesignSystem-Subheading"
  }, rest, {
    className: classes,
    componentType: 'h4'
  }), children);
};
Subheading.displayName = 'Subheading';
Subheading.defaultProps = {
  appearance: 'default'
};

/**
 * ######Switch has two types:
 *  - [Controlled Switch](https://reactjs.org/docs/forms.html#controlled-components)
 *  - [Uncontrolled Switch](https://reactjs.org/docs/uncontrolled-components.html)
 */
var Switch = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames, _classNames2;

  var _props$size = props.size,
      size = _props$size === void 0 ? 'regular' : _props$size,
      defaultChecked = props.defaultChecked,
      disabled = props.disabled,
      onChange = props.onChange,
      name = props.name,
      value = props.value,
      className = props.className;
      props.appearance;
      var checkedProp = props.checked,
      rest = _objectWithoutProperties$1(props, ["size", "defaultChecked", "disabled", "onChange", "name", "value", "className", "appearance", "checked"]);

  var _React$useState = React.useState(checkedProp === undefined ? defaultChecked : checkedProp),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      checked = _React$useState2[0],
      setChecked = _React$useState2[1];

  React.useEffect(function () {
    if (checkedProp !== undefined) setChecked(checkedProp);
  }, [checkedProp]);
  var SwitchClass = classnames((_classNames = {}, _defineProperty$2(_classNames, 'Switch', true), _defineProperty$2(_classNames, 'Switch--disabled', disabled), _defineProperty$2(_classNames, "Switch--".concat(size), size), _classNames), className);
  var SwitchWrapper = classnames((_classNames2 = {}, _defineProperty$2(_classNames2, 'Switch-wrapper', true), _defineProperty$2(_classNames2, 'Switch-wrapper--disabled', disabled), _defineProperty$2(_classNames2, "Switch-wrapper--".concat(size), size), _defineProperty$2(_classNames2, 'Switch-wrapper--checked', checked), _defineProperty$2(_classNames2, 'Switch-wrapper--checkedDisabled', checked && disabled), _classNames2));

  var onChangeHandler = function onChangeHandler(event) {
    if (checkedProp === undefined) setChecked(!checked);
    if (onChange) onChange(event, !checked);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: SwitchClass
  }, /*#__PURE__*/React.createElement("input", _extends$3({}, rest, {
    type: "checkbox",
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChangeHandler,
    checked: checked,
    ref: ref,
    name: name,
    value: value,
    className: "Switch-input"
  })), /*#__PURE__*/React.createElement("span", {
    className: SwitchWrapper
  }));
});
Switch.displayName = 'Switch';

var Textarea = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames;

  var _props$rows = props.rows,
      rows = _props$rows === void 0 ? 3 : _props$rows,
      _props$resize = props.resize,
      resize = _props$resize === void 0 ? true : _props$resize,
      disabled = props.disabled,
      name = props.name,
      placeholder = props.placeholder,
      value = props.value,
      defaultValue = props.defaultValue,
      required = props.required,
      error = props.error,
      onChange = props.onChange,
      onClick = props.onClick,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      className = props.className,
      rest = _objectWithoutProperties$1(props, ["rows", "resize", "disabled", "name", "placeholder", "value", "defaultValue", "required", "error", "onChange", "onClick", "onBlur", "onFocus", "className"]);

  var classes = classnames((_classNames = {}, _defineProperty$2(_classNames, 'Textarea', true), _defineProperty$2(_classNames, 'Textarea--resize', resize), _defineProperty$2(_classNames, 'Textarea--error', error), _classNames), className);
  return /*#__PURE__*/React.createElement("textarea", _extends$3({
    "data-test": "DesignSystem-Textarea"
  }, rest, {
    ref: ref,
    name: name,
    rows: rows,
    placeholder: placeholder,
    className: classes,
    value: value,
    defaultValue: defaultValue,
    required: required,
    disabled: disabled,
    onChange: onChange,
    onBlur: onBlur,
    onClick: onClick,
    onFocus: onFocus
  }));
});
Textarea.displayName = 'Textarea';

var ActionButton = function ActionButton(props) {
  var _classNames;

  var appearance = props.appearance,
      label = props.label,
      onClick = props.onClick;
  var buttonClass = classnames((_classNames = {}, _defineProperty$2(_classNames, 'Button', true), _defineProperty$2(_classNames, 'Button--tiny', true), _defineProperty$2(_classNames, 'Toast-actionButton', true), _defineProperty$2(_classNames, "Toast-actionButton--".concat(appearance), appearance), _classNames));

  var onClickHandler = function onClickHandler(e) {
    e.preventDefault();
    if (onClick) onClick(e);
  };

  return /*#__PURE__*/React.createElement("button", {
    className: buttonClass,
    onClick: onClickHandler
  }, /*#__PURE__*/React.createElement(Text, {
    appearance: "white"
  }, label));
};

ActionButton.displayName = 'ActionButton';
ActionButton.defaultProps = {
  appearance: 'default'
};

var Toast = function Toast(props) {
  var _classNames, _classNames2, _classNames4, _classNames5;

  var appearance = props.appearance,
      title = props.title,
      message = props.message,
      actions = props.actions,
      onClose = props.onClose,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var wrapperClass = classnames((_classNames = {}, _defineProperty$2(_classNames, 'Toast', true), _defineProperty$2(_classNames, 'Toast--withMessage', message), _defineProperty$2(_classNames, "Toast--".concat(appearance), appearance), _classNames), className);
  var IconMapping = {
    info: 'info',
    success: 'check_circle',
    alert: 'error',
    warning: 'error'
  };
  var icon = IconMapping[appearance];
  var titleClass = classnames((_classNames2 = {}, _defineProperty$2(_classNames2, 'Toast-title', true), _defineProperty$2(_classNames2, 'Toast-title--withMessage', message), _classNames2));

  var iconClass = function iconClass(align) {
    var _classNames3;

    return classnames((_classNames3 = {}, _defineProperty$2(_classNames3, 'Toast-icon', true), _defineProperty$2(_classNames3, "Toast-icon--".concat(align), align), _defineProperty$2(_classNames3, "Toast-icon--".concat(appearance), appearance), _classNames3));
  };

  var textClass = classnames((_classNames4 = {}, _defineProperty$2(_classNames4, 'Toast-text', true), _defineProperty$2(_classNames4, "Toast-text--".concat(appearance), appearance), _classNames4));
  var headingClass = classnames((_classNames5 = {}, _defineProperty$2(_classNames5, 'Toast-heading', true), _defineProperty$2(_classNames5, "Toast-heading--".concat(appearance), appearance), _classNames5));

  var onCloseHandler = function onCloseHandler() {
    if (onClose) onClose();
  };

  return /*#__PURE__*/React.createElement("div", _extends$3({}, baseProps, {
    className: wrapperClass
  }), icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    className: iconClass('left')
  }), /*#__PURE__*/React.createElement("div", {
    className: "Toast-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: titleClass
  }, /*#__PURE__*/React.createElement(Heading, {
    size: "s",
    className: headingClass,
    appearance: appearance !== 'warning' ? 'white' : 'default'
  }, title), /*#__PURE__*/React.createElement(Icon, {
    name: 'close',
    className: iconClass('right'),
    onClick: onCloseHandler,
    appearance: appearance !== 'warning' ? 'white' : 'default'
  })), message && /*#__PURE__*/React.createElement(Text, {
    appearance: appearance !== 'warning' ? 'white' : 'default',
    className: textClass
  }, message), !!(actions !== null && actions !== void 0 && actions.length) && /*#__PURE__*/React.createElement("div", {
    className: "Toast-actions"
  }, actions.slice(0, 2).map(function (action, index) {
    return /*#__PURE__*/React.createElement(ActionButton, {
      key: index,
      label: action.label,
      appearance: appearance,
      onClick: action.onClick
    });
  }))));
};
Toast.displayName = 'Toast';
Toast.defaultProps = {
  appearance: 'default'
};

var objectWithoutPropertiesLoose = createCommonjsModule(function (module) {
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

module.exports = _objectWithoutPropertiesLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _objectWithoutPropertiesLoose$1 = unwrapExports(objectWithoutPropertiesLoose);

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
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

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _extends$2 = unwrapExports(_extends_1);

var setPrototypeOf = createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(setPrototypeOf);

var inheritsLoose = createCommonjsModule(function (module) {
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  setPrototypeOf(subClass, superClass);
}

module.exports = _inheritsLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _inheritsLoose = unwrapExports(inheritsLoose);

var assertThisInitialized = createCommonjsModule(function (module) {
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _assertThisInitialized$1 = unwrapExports(assertThisInitialized);

var defineProperty$3 = createCommonjsModule(function (module) {
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

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _defineProperty$1 = unwrapExports(defineProperty$3);

var toStr$4 = Object.prototype.toString;

var isArguments$1 = function isArguments(value) {
	var str = toStr$4.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr$4.call(value.callee) === '[object Function]';
	}
	return isArgs;
};

var keysShim$1;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has$1 = Object.prototype.hasOwnProperty;
	var toStr$3 = Object.prototype.toString;
	var isArgs = isArguments$1; // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has$1.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim$1 = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr$3.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr$3.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has$1.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has$1.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has$1.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
var implementation$4 = keysShim$1;

var slice$1 = Array.prototype.slice;


var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : implementation$4;

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArguments$1(object)) {
					return originalKeys(slice$1.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

var objectKeys = keysShim;

/* eslint complexity: [2, 18], max-statements: [2, 33] */
var shams = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};

var origSymbol = typeof Symbol !== 'undefined' && Symbol;


var hasSymbols$3 = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return shams();
};

/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr$2 = Object.prototype.toString;
var funcType = '[object Function]';

var implementation$3 = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr$2.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};

var functionBind = Function.prototype.bind || implementation$3;

var src = functionBind.call(Function.call, Object.prototype.hasOwnProperty);

var undefined$1;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError$2 = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD$1 = Object.getOwnPropertyDescriptor;
if ($gOPD$1) {
	try {
		$gOPD$1({}, '');
	} catch (e) {
		$gOPD$1 = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () {
	throw new $TypeError$2();
};
var ThrowTypeError = $gOPD$1
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD$1(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols$2 = hasSymbols$3();

var getProto$1 = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' ? undefined$1 : getProto$1(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined$1 : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined$1 : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols$2 ? getProto$1([][Symbol.iterator]()) : undefined$1,
	'%AsyncFromSyncIteratorPrototype%': undefined$1,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined$1 : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined$1 : BigInt,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined$1 : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined$1 : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined$1 : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined$1 : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined$1 : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined$1 : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined$1 : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols$2 ? getProto$1(getProto$1([][Symbol.iterator]())) : undefined$1,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined$1,
	'%Map%': typeof Map === 'undefined' ? undefined$1 : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols$2 ? undefined$1 : getProto$1(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined$1 : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined$1 : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined$1 : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined$1 : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols$2 ? undefined$1 : getProto$1(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined$1 : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols$2 ? getProto$1(''[Symbol.iterator]()) : undefined$1,
	'%Symbol%': hasSymbols$2 ? Symbol : undefined$1,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError$2,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined$1 : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined$1 : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined$1 : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined$1 : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined$1 : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined$1 : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined$1 : WeakSet
};

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen) {
			value = getProto$1(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};



var $concat = functionBind.call(Function.call, Array.prototype.concat);
var $spliceApply = functionBind.call(Function.apply, Array.prototype.splice);
var $replace = functionBind.call(Function.call, String.prototype.replace);
var $strSlice = functionBind.call(Function.call, String.prototype.slice);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (src(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (src(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError$2('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

var getIntrinsic = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError$2('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError$2('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (src(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError$2('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined$1;
			}
			if ($gOPD$1 && (i + 1) >= parts.length) {
				var desc = $gOPD$1(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = src(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};

var callBind = createCommonjsModule(function (module) {




var $apply = getIntrinsic('%Function.prototype.apply%');
var $call = getIntrinsic('%Function.prototype.call%');
var $reflectApply = getIntrinsic('%Reflect.apply%', true) || functionBind.call($call, $apply);

var $gOPD = getIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = getIntrinsic('%Object.defineProperty%', true);
var $max = getIntrinsic('%Math.max%');

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind(originalFunction) {
	var func = $reflectApply(functionBind, $call, arguments);
	if ($gOPD && $defineProperty) {
		var desc = $gOPD(func, 'length');
		if (desc.configurable) {
			// original length, plus the receiver, minus any additional arguments (after the receiver)
			$defineProperty(
				func,
				'length',
				{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
			);
		}
	}
	return func;
};

var applyBind = function applyBind() {
	return $reflectApply(functionBind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}
});
callBind.apply;

var $indexOf = callBind(getIntrinsic('String.prototype.indexOf'));

var callBound = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = getIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};

var hasToStringTag$2 = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';


var $toString$1 = callBound('Object.prototype.toString');

var isStandardArguments = function isArguments(value) {
	if (hasToStringTag$2 && value && typeof value === 'object' && Symbol.toStringTag in value) {
		return false;
	}
	return $toString$1(value) === '[object Arguments]';
};

var isLegacyArguments = function isArguments(value) {
	if (isStandardArguments(value)) {
		return true;
	}
	return value !== null &&
		typeof value === 'object' &&
		typeof value.length === 'number' &&
		value.length >= 0 &&
		$toString$1(value) !== '[object Array]' &&
		$toString$1(value.callee) === '[object Function]';
};

var supportsStandardArguments = (function () {
	return isStandardArguments(arguments);
}());

isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

var isArguments = supportsStandardArguments ? isStandardArguments : isLegacyArguments;

var hasSymbols$1 = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr$1 = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction$1 = function (fn) {
	return typeof fn === 'function' && toStr$1.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
			return false;
		}
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors$2 = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty$2 = function (object, name, value, predicate) {
	if (name in object && (!isFunction$1(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors$2) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = objectKeys(map);
	if (hasSymbols$1) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty$2(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors$2;

var defineProperties_1 = defineProperties;

var numberIsNaN = function (value) {
	return value !== value;
};

var implementation$2 = function is(a, b) {
	if (a === 0 && b === 0) {
		return 1 / a === 1 / b;
	}
	if (a === b) {
		return true;
	}
	if (numberIsNaN(a) && numberIsNaN(b)) {
		return true;
	}
	return false;
};

var polyfill$2 = function getPolyfill() {
	return typeof Object.is === 'function' ? Object.is : implementation$2;
};

var shim$1 = function shimObjectIs() {
	var polyfill = polyfill$2();
	defineProperties_1(Object, { is: polyfill }, {
		is: function testObjectIs() {
			return Object.is !== polyfill;
		}
	});
	return polyfill;
};

var polyfill$1 = callBind(polyfill$2(), Object);

defineProperties_1(polyfill$1, {
	getPolyfill: polyfill$2,
	implementation: implementation$2,
	shim: shim$1
});

var objectIs = polyfill$1;

var hasSymbols = shams();
var hasToStringTag$1 = hasSymbols && !!Symbol.toStringTag;
var has;
var $exec;
var isRegexMarker;
var badStringifier;

if (hasToStringTag$1) {
	has = callBound('Object.prototype.hasOwnProperty');
	$exec = callBound('RegExp.prototype.exec');
	isRegexMarker = {};

	var throwRegexMarker = function () {
		throw isRegexMarker;
	};
	badStringifier = {
		toString: throwRegexMarker,
		valueOf: throwRegexMarker
	};

	if (typeof Symbol.toPrimitive === 'symbol') {
		badStringifier[Symbol.toPrimitive] = throwRegexMarker;
	}
}

var $toString = callBound('Object.prototype.toString');
var gOPD$1 = Object.getOwnPropertyDescriptor;
var regexClass = '[object RegExp]';

var isRegex = hasToStringTag$1
	// eslint-disable-next-line consistent-return
	? function isRegex(value) {
		if (!value || typeof value !== 'object') {
			return false;
		}

		var descriptor = gOPD$1(value, 'lastIndex');
		var hasLastIndexDataProperty = descriptor && has(descriptor, 'value');
		if (!hasLastIndexDataProperty) {
			return false;
		}

		try {
			$exec(value, badStringifier);
		} catch (e) {
			return e === isRegexMarker;
		}
	}
	: function isRegex(value) {
		// In older browsers, typeof regex incorrectly returns 'function'
		if (!value || (typeof value !== 'object' && typeof value !== 'function')) {
			return false;
		}

		return $toString(value) === regexClass;
	};

var $Object = Object;
var $TypeError$1 = TypeError;

var implementation$1 = function flags() {
	if (this != null && this !== $Object(this)) {
		throw new $TypeError$1('RegExp.prototype.flags getter called on non-object');
	}
	var result = '';
	if (this.global) {
		result += 'g';
	}
	if (this.ignoreCase) {
		result += 'i';
	}
	if (this.multiline) {
		result += 'm';
	}
	if (this.dotAll) {
		result += 's';
	}
	if (this.unicode) {
		result += 'u';
	}
	if (this.sticky) {
		result += 'y';
	}
	return result;
};

var supportsDescriptors$1 = defineProperties_1.supportsDescriptors;
var $gOPD = Object.getOwnPropertyDescriptor;
var $TypeError = TypeError;

var polyfill = function getPolyfill() {
	if (!supportsDescriptors$1) {
		throw new $TypeError('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
	}
	if ((/a/mig).flags === 'gim') {
		var descriptor = $gOPD(RegExp.prototype, 'flags');
		if (descriptor && typeof descriptor.get === 'function' && typeof (/a/).dotAll === 'boolean') {
			return descriptor.get;
		}
	}
	return implementation$1;
};

var supportsDescriptors = defineProperties_1.supportsDescriptors;

var gOPD = Object.getOwnPropertyDescriptor;
var defineProperty$1 = Object.defineProperty;
var TypeErr = TypeError;
var getProto = Object.getPrototypeOf;
var regex = /a/;

var shim = function shimFlags() {
	if (!supportsDescriptors || !getProto) {
		throw new TypeErr('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
	}
	var polyfill$1 = polyfill();
	var proto = getProto(regex);
	var descriptor = gOPD(proto, 'flags');
	if (!descriptor || descriptor.get !== polyfill$1) {
		defineProperty$1(proto, 'flags', {
			configurable: true,
			enumerable: false,
			get: polyfill$1
		});
	}
	return polyfill$1;
};

var flagsBound = callBind(implementation$1);

defineProperties_1(flagsBound, {
	getPolyfill: polyfill,
	implementation: implementation$1,
	shim: shim
});

var regexp_prototype_flags = flagsBound;

var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateGetDayCall(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && !!Symbol.toStringTag;

var isDateObject = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) {
		return false;
	}
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};

var getTime = Date.prototype.getTime;

function deepEqual(actual, expected, options) {
  var opts = options || {};

  // 7.1. All identical values are equivalent, as determined by ===.
  if (opts.strict ? objectIs(actual, expected) : actual === expected) {
    return true;
  }

  // 7.3. Other pairs that do not both pass typeof value == 'object', equivalence is determined by ==.
  if (!actual || !expected || (typeof actual !== 'object' && typeof expected !== 'object')) {
    return opts.strict ? objectIs(actual, expected) : actual == expected;
  }

  /*
   * 7.4. For all other Object pairs, including Array objects, equivalence is
   * determined by having the same number of owned properties (as verified
   * with Object.prototype.hasOwnProperty.call), the same set of keys
   * (although not necessarily the same order), equivalent values for every
   * corresponding key, and an identical 'prototype' property. Note: this
   * accounts for both named and indexed properties on Arrays.
   */
  // eslint-disable-next-line no-use-before-define
  return objEquiv(actual, expected, opts);
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer(x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') {
    return false;
  }
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') {
    return false;
  }
  return true;
}

function objEquiv(a, b, opts) {
  /* eslint max-statements: [2, 50] */
  var i, key;
  if (typeof a !== typeof b) { return false; }
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b)) { return false; }

  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) { return false; }

  if (isArguments(a) !== isArguments(b)) { return false; }

  var aIsRegex = isRegex(a);
  var bIsRegex = isRegex(b);
  if (aIsRegex !== bIsRegex) { return false; }
  if (aIsRegex || bIsRegex) {
    return a.source === b.source && regexp_prototype_flags(a) === regexp_prototype_flags(b);
  }

  if (isDateObject(a) && isDateObject(b)) {
    return getTime.call(a) === getTime.call(b);
  }

  var aIsBuffer = isBuffer(a);
  var bIsBuffer = isBuffer(b);
  if (aIsBuffer !== bIsBuffer) { return false; }
  if (aIsBuffer || bIsBuffer) { // && would work too, because both are true or both false here
    if (a.length !== b.length) { return false; }
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) { return false; }
    }
    return true;
  }

  if (typeof a !== typeof b) { return false; }

  try {
    var ka = objectKeys(a);
    var kb = objectKeys(b);
  } catch (e) { // happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates hasOwnProperty)
  if (ka.length !== kb.length) { return false; }

  // the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  // ~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i]) { return false; }
  }
  // equivalent values for every corresponding key, and ~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) { return false; }
  }

  return true;
}

var deepEqual_1 = deepEqual;

/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
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
};

var _extends$1 = Object.assign || function (target) {
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

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends$1({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends$1({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends$1({}, attributes, data.attributes);
  data.styles = _extends$1({}, styles, data.styles);
  data.arrowStyles = _extends$1({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends$1({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends$1({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends$1({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper$1 = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends$1({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends$1({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends$1({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends$1({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper$1.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper$1.placements = placements;
Popper$1.Defaults = Defaults;

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {
});
reactIs_development.AsyncMode;
reactIs_development.ConcurrentMode;
reactIs_development.ContextConsumer;
reactIs_development.ContextProvider;
reactIs_development.Element;
reactIs_development.ForwardRef;
reactIs_development.Fragment;
reactIs_development.Lazy;
reactIs_development.Memo;
reactIs_development.Portal;
reactIs_development.Profiler;
reactIs_development.StrictMode;
reactIs_development.Suspense;
reactIs_development.isAsyncMode;
reactIs_development.isConcurrentMode;
reactIs_development.isContextConsumer;
reactIs_development.isContextProvider;
reactIs_development.isElement;
reactIs_development.isForwardRef;
reactIs_development.isFragment;
reactIs_development.isLazy;
reactIs_development.isMemo;
reactIs_development.isPortal;
reactIs_development.isProfiler;
reactIs_development.isStrictMode;
reactIs_development.isSuspense;
reactIs_development.isValidElementType;
reactIs_development.typeOf;

createCommonjsModule(function (module) {

{
  module.exports = reactIs_production_min;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

Function.call.bind(Object.prototype.hasOwnProperty);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var key = '__global_unique_id__';

var gud = function() {
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
};

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var warning = function() {};

var warning_1 = warning;

var implementation = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



_interopRequireDefault(React__default);



var _propTypes2 = _interopRequireDefault(propTypes);



var _gud2 = _interopRequireDefault(gud);



_interopRequireDefault(warning_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_SIGNED_31_BIT_INT = 1073741823;

// Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    function Provider() {
      var _temp, _this, _ret;

      _classCallCheck(this, Provider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
    }

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits = void 0;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0; // No change
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    Provider.prototype.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(React__default.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

  var Consumer = function (_Component2) {
    _inherits(Consumer, _Component2);

    function Consumer() {
      var _temp2, _this2, _ret2;

      _classCallCheck(this, Consumer);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
        value: _this2.getValue()
      }, _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;
        if ((observedBits & changedBits) !== 0) {
          _this2.setState({ value: _this2.getValue() });
        }
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }
      var observedBits = this.props.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    Consumer.prototype.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    Consumer.prototype.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(React__default.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);


  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

exports.default = createReactContext;
module.exports = exports['default'];
});

unwrapExports(implementation);

var lib = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _react2 = _interopRequireDefault(React__default);



var _implementation2 = _interopRequireDefault(implementation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createContext || _implementation2.default;
module.exports = exports['default'];
});

var createContext = unwrapExports(lib);

var ManagerReferenceNodeContext = createContext();
var ManagerReferenceNodeSetterContext = createContext();

var Manager =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Manager, _React$Component);

  function Manager() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "referenceNode", void 0);

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "setReferenceNode", function (newReferenceNode) {
      if (newReferenceNode && _this.referenceNode !== newReferenceNode) {
        _this.referenceNode = newReferenceNode;

        _this.forceUpdate();
      }
    });

    return _this;
  }

  var _proto = Manager.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.referenceNode = null;
  };

  _proto.render = function render() {
    return React.createElement(ManagerReferenceNodeContext.Provider, {
      value: this.referenceNode
    }, React.createElement(ManagerReferenceNodeSetterContext.Provider, {
      value: this.setReferenceNode
    }, this.props.children));
  };

  return Manager;
}(React.Component);

/**
 * Takes an argument and if it's an array, returns the first item in the array,
 * otherwise returns the argument. Used for Preact compatibility.
 */
var unwrapArray = function unwrapArray(arg) {
  return Array.isArray(arg) ? arg[0] : arg;
};
/**
 * Takes a maybe-undefined function and arbitrary args and invokes the function
 * only if it is defined.
 */

var safeInvoke = function safeInvoke(fn) {
  if (typeof fn === "function") {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return fn.apply(void 0, args);
  }
};
/**
 * Sets a ref using either a ref callback or a ref object
 */

var setRef = function setRef(ref, node) {
  // if its a function call it
  if (typeof ref === "function") {
    return safeInvoke(ref, node);
  } // otherwise we should treat it as a ref object
  else if (ref != null) {
      ref.current = node;
    }
};

var initialStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  opacity: 0,
  pointerEvents: 'none'
};
var initialArrowStyle = {};
var InnerPopper =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(InnerPopper, _React$Component);

  function InnerPopper() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "state", {
      data: undefined,
      placement: undefined
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "popperInstance", void 0);

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "popperNode", null);

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "arrowNode", null);

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "setPopperNode", function (popperNode) {
      if (!popperNode || _this.popperNode === popperNode) return;
      setRef(_this.props.innerRef, popperNode);
      _this.popperNode = popperNode;

      _this.updatePopperInstance();
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "setArrowNode", function (arrowNode) {
      _this.arrowNode = arrowNode;
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "updateStateModifier", {
      enabled: true,
      order: 900,
      fn: function fn(data) {
        var placement = data.placement;

        _this.setState({
          data: data,
          placement: placement
        });

        return data;
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "getOptions", function () {
      return {
        placement: _this.props.placement,
        eventsEnabled: _this.props.eventsEnabled,
        positionFixed: _this.props.positionFixed,
        modifiers: _extends$2({}, _this.props.modifiers, {
          arrow: _extends$2({}, _this.props.modifiers && _this.props.modifiers.arrow, {
            enabled: !!_this.arrowNode,
            element: _this.arrowNode
          }),
          applyStyle: {
            enabled: false
          },
          updateStateModifier: _this.updateStateModifier
        })
      };
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "getPopperStyle", function () {
      return !_this.popperNode || !_this.state.data ? initialStyle : _extends$2({
        position: _this.state.data.offsets.popper.position
      }, _this.state.data.styles);
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "getPopperPlacement", function () {
      return !_this.state.data ? undefined : _this.state.placement;
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "getArrowStyle", function () {
      return !_this.arrowNode || !_this.state.data ? initialArrowStyle : _this.state.data.arrowStyles;
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "getOutOfBoundariesState", function () {
      return _this.state.data ? _this.state.data.hide : undefined;
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "destroyPopperInstance", function () {
      if (!_this.popperInstance) return;

      _this.popperInstance.destroy();

      _this.popperInstance = null;
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "updatePopperInstance", function () {
      _this.destroyPopperInstance();

      var _assertThisInitialize = _assertThisInitialized$1(_assertThisInitialized$1(_this)),
          popperNode = _assertThisInitialize.popperNode;

      var referenceElement = _this.props.referenceElement;
      if (!referenceElement || !popperNode) return;
      _this.popperInstance = new Popper$1(referenceElement, popperNode, _this.getOptions());
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "scheduleUpdate", function () {
      if (_this.popperInstance) {
        _this.popperInstance.scheduleUpdate();
      }
    });

    return _this;
  }

  var _proto = InnerPopper.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // If the Popper.js options have changed, update the instance (destroy + create)
    if (this.props.placement !== prevProps.placement || this.props.referenceElement !== prevProps.referenceElement || this.props.positionFixed !== prevProps.positionFixed || !deepEqual_1(this.props.modifiers, prevProps.modifiers, {
      strict: true
    })) {

      this.updatePopperInstance();
    } else if (this.props.eventsEnabled !== prevProps.eventsEnabled && this.popperInstance) {
      this.props.eventsEnabled ? this.popperInstance.enableEventListeners() : this.popperInstance.disableEventListeners();
    } // A placement difference in state means popper determined a new placement
    // apart from the props value. By the time the popper element is rendered with
    // the new position Popper has already measured it, if the place change triggers
    // a size change it will result in a misaligned popper. So we schedule an update to be sure.


    if (prevState.placement !== this.state.placement) {
      this.scheduleUpdate();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    setRef(this.props.innerRef, null);
    this.destroyPopperInstance();
  };

  _proto.render = function render() {
    return unwrapArray(this.props.children)({
      ref: this.setPopperNode,
      style: this.getPopperStyle(),
      placement: this.getPopperPlacement(),
      outOfBoundaries: this.getOutOfBoundariesState(),
      scheduleUpdate: this.scheduleUpdate,
      arrowProps: {
        ref: this.setArrowNode,
        style: this.getArrowStyle()
      }
    });
  };

  return InnerPopper;
}(React.Component);

_defineProperty$1(InnerPopper, "defaultProps", {
  placement: 'bottom',
  eventsEnabled: true,
  referenceElement: undefined,
  positionFixed: false
});
function Popper(_ref) {
  var referenceElement = _ref.referenceElement,
      props = _objectWithoutPropertiesLoose$1(_ref, ["referenceElement"]);

  return React.createElement(ManagerReferenceNodeContext.Consumer, null, function (referenceNode) {
    return React.createElement(InnerPopper, _extends$2({
      referenceElement: referenceElement !== undefined ? referenceElement : referenceNode
    }, props));
  });
}

var InnerReference =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(InnerReference, _React$Component);

  function InnerReference() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "refHandler", function (node) {
      setRef(_this.props.innerRef, node);
      safeInvoke(_this.props.setReferenceNode, node);
    });

    return _this;
  }

  var _proto = InnerReference.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    setRef(this.props.innerRef, null);
  };

  _proto.render = function render() {
    warning_1(Boolean(this.props.setReferenceNode));
    return unwrapArray(this.props.children)({
      ref: this.refHandler
    });
  };

  return InnerReference;
}(React.Component);

function Reference(props) {
  return React.createElement(ManagerReferenceNodeSetterContext.Consumer, null, function (setReferenceNode) {
    return React.createElement(InnerReference, _extends$2({
      setReferenceNode: setReferenceNode
    }, props));
  });
}

var PopperWrapper = /*#__PURE__*/function (_React$Component) {
  _inherits$1(PopperWrapper, _React$Component);

  var _super = _createSuper$1(PopperWrapper);

  function PopperWrapper(props) {
    var _this;

    _classCallCheck$1(this, PopperWrapper);

    _this = _super.call(this, props);

    _defineProperty$2(_assertThisInitialized$2(_this), "triggerRef", void 0);

    _defineProperty$2(_assertThisInitialized$2(_this), "popupRef", void 0);

    _defineProperty$2(_assertThisInitialized$2(_this), "hoverableDelay", void 0);

    _defineProperty$2(_assertThisInitialized$2(_this), "_timer", void 0);

    _defineProperty$2(_assertThisInitialized$2(_this), "_throttleWait", void 0);

    _defineProperty$2(_assertThisInitialized$2(_this), "offsetMapping", void 0);

    _defineProperty$2(_assertThisInitialized$2(_this), "togglePopper", function (type, newValue) {
      var _this$props = _this.props,
          open = _this$props.open,
          onToggle = _this$props.onToggle;
      onToggle(newValue === undefined ? !open : newValue, type);
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "findDOMNode", function (ref) {
      return ReactDOM.findDOMNode(ref.current);
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "doesEventContainsElement", function (event, ref) {
      var el = _this.findDOMNode(ref);

      return el && el.contains(event.target);
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "getUpdatedStyle", function (oldStyle, placement, offset) {
      var style = _this.props.style;

      var newStyle = _objectSpread2(_objectSpread2({}, style), oldStyle);

      var position = placement ? placement.split('-')[0] : placement;

      switch (position) {
        case 'top':
          newStyle.marginBottom = _this.offsetMapping[offset];
          break;

        case 'bottom':
          newStyle.marginTop = _this.offsetMapping[offset];
          break;

        case 'left':
          newStyle.marginRight = _this.offsetMapping[offset];
          break;

        case 'right':
          newStyle.marginLeft = _this.offsetMapping[offset];
          break;
      }

      return newStyle;
    });

    _this.state = {};
    _this.hoverableDelay = 100;
    _this.offsetMapping = {
      small: '2px',
      medium: '4px',
      large: '8px'
    };
    _this.triggerRef = /*#__PURE__*/React.createRef();
    _this.popupRef = /*#__PURE__*/React.createRef();
    _this.getPopperChildren = _this.getPopperChildren.bind(_assertThisInitialized$2(_this));
    _this.mouseMoveHandler = _this.mouseMoveHandler.bind(_assertThisInitialized$2(_this));
    _this.handleMouseEnter = _this.handleMouseEnter.bind(_assertThisInitialized$2(_this));
    _this.handleMouseLeave = _this.handleMouseLeave.bind(_assertThisInitialized$2(_this));
    _this.boundaryScrollHandler = _this.boundaryScrollHandler.bind(_assertThisInitialized$2(_this));
    return _this;
  }

  _createClass$1(PopperWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.addBoundaryScrollHandler();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.boundaryElement && this.props.boundaryElement) {
        this.removeBoundaryScrollHandler();
        this.addBoundaryScrollHandler();
      }

      if (prevProps.open !== this.props.open) {
        this._throttleWait = false;

        if (this.props.open) {
          var triggerElement = this.findDOMNode(this.triggerRef);
          var zIndex = this.getZIndexForLayer(triggerElement);
          this.setState({
            zIndex: zIndex === undefined ? zIndex : zIndex + 1
          });
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeBoundaryScrollHandler();
    }
  }, {
    key: "boundaryScrollHandler",
    value: function boundaryScrollHandler() {
      var _this$props2 = this.props,
          open = _this$props2.open,
          on = _this$props2.on,
          closeOnScroll = _this$props2.closeOnScroll;

      if (on === 'click' && closeOnScroll) {
        if (open) {
          if (!this._throttleWait) {
            this.togglePopper('onScroll', false);
            this._throttleWait = true;
          }
        }
      }
    }
  }, {
    key: "addBoundaryScrollHandler",
    value: function addBoundaryScrollHandler() {
      if (this.props.boundaryElement) {
        this.props.boundaryElement.addEventListener('scroll', this.boundaryScrollHandler);
      }
    }
  }, {
    key: "removeBoundaryScrollHandler",
    value: function removeBoundaryScrollHandler() {
      if (this.props.boundaryElement) {
        this.props.boundaryElement.removeEventListener('scroll', this.boundaryScrollHandler);
      }
    }
  }, {
    key: "mouseMoveHandler",
    value: function mouseMoveHandler() {
      var _this2 = this;

      if (this._timer) clearTimeout(this._timer);
      this._timer = window.setTimeout(function () {
        var onToggle = _this2.props.onToggle;
        onToggle(false, 'mouseLeave');
      }, this.hoverableDelay);
    }
  }, {
    key: "handleMouseEnter",
    value: function handleMouseEnter() {
      var on = this.props.on;

      if (on === 'hover') {
        if (this._timer) clearTimeout(this._timer);
        var onToggle = this.props.onToggle;
        onToggle(true, 'mouseEnter');
      }
    }
  }, {
    key: "handleMouseLeave",
    value: function handleMouseLeave() {
      var on = this.props.on;

      if (on === 'hover') {
        var _this$props3 = this.props,
            hoverable = _this$props3.hoverable,
            onToggle = _this$props3.onToggle;

        if (hoverable) {
          this.mouseMoveHandler();
        } else {
          onToggle(false, 'mouseLeave');
        }
      }
    }
  }, {
    key: "getZIndexForLayer",
    value: function getZIndexForLayer(node) {
      if (node === null) {
        return;
      }

      var layerNode = node.closest('[data-layer]') || document.body;
      var zIndex = layerNode === document.body ? 'auto' : parseInt(window.getComputedStyle(layerNode).zIndex || '0', 10);
      return zIndex === 'auto' || isNaN(zIndex) ? undefined : zIndex;
    }
  }, {
    key: "getTriggerElement",
    value: function getTriggerElement(ref) {
      var _this3 = this;

      var _this$props4 = this.props,
          trigger = _this$props4.trigger,
          on = _this$props4.on,
          triggerClass = _this$props4.triggerClass;
      var options = on === 'hover' ? {
        ref: ref,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      } : {
        ref: ref,
        onClick: function onClick(ev) {
          ev.stopPropagation();

          _this3.togglePopper('onClick');
        }
      };
      var classes = classnames('PopperWrapper-trigger', triggerClass);

      var onOutsideClickHandler = function onOutsideClickHandler(event) {
        var _this3$props = _this3.props,
            open = _this3$props.open,
            closeOnBackdropClick = _this3$props.closeOnBackdropClick;

        if (open && closeOnBackdropClick) {
          if (!_this3.doesEventContainsElement(event, _this3.popupRef)) {
            _this3.togglePopper('outsideClick');
          }
        }
      };

      return /*#__PURE__*/React.createElement(OutsideClick, _extends$3({
        className: classes,
        onOutsideClick: onOutsideClickHandler
      }, options), trigger);
    }
  }, {
    key: "getPopperChildren",
    value: function getPopperChildren(_ref) {
      var ref = _ref.ref,
          style = _ref.style,
          placement = _ref.placement,
          outOfBoundaries = _ref.outOfBoundaries;
      var _this$props5 = this.props,
          offset = _this$props5.offset,
          children = _this$props5.children;
      var zIndex = this.state.zIndex;
      var newStyle = offset ? this.getUpdatedStyle(style, placement, offset) : style;
      var element = /*#__PURE__*/React.cloneElement(children, {
        ref: ref,
        style: _objectSpread2(_objectSpread2({}, newStyle), {}, {
          zIndex: zIndex
        }),
        'data-placement': placement,
        'data-hide': outOfBoundaries,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      });
      return element;
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props6 = this.props,
          placement = _this$props6.placement,
          appendToBody = _this$props6.appendToBody,
          open = _this$props6.open,
          hide = _this$props6.hide,
          boundaryElement = _this$props6.boundaryElement;
      return /*#__PURE__*/React.createElement(Manager, null, /*#__PURE__*/React.createElement(Reference, {
        innerRef: this.triggerRef
      }, function (_ref2) {
        var ref = _ref2.ref;
        return _this4.getTriggerElement(ref);
      }), open && appendToBody && /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement(Popper, {
        placement: placement,
        innerRef: this.popupRef,
        modifiers: {
          preventOverflow: {
            boundariesElement: boundaryElement || document.body
          },
          hide: {
            enabled: hide
          }
        }
      }, this.getPopperChildren), document.body), open && !appendToBody && /*#__PURE__*/React.createElement(Popper, {
        placement: placement,
        innerRef: this.popupRef
      }, this.getPopperChildren));
    }
  }]);

  return PopperWrapper;
}(React.Component);

_defineProperty$2(PopperWrapper, "defaultProps", {
  on: 'click',
  offset: 'medium',
  closeOnBackdropClick: true,
  hoverable: true,
  appendToBody: true,
  style: {}
});

var propsList$1 = ['appendToBody', 'trigger', 'hoverable', 'on', 'open', 'closeOnBackdropClick', 'offset', 'closeOnScroll'];
var Popover = function Popover(props) {
  var position = props.position,
      customStyle = props.customStyle,
      dark = props.dark,
      children = props.children,
      onToggle = props.onToggle,
      className = props.className,
      hideOnReferenceEscape = props.hideOnReferenceEscape,
      boundaryElement = props.boundaryElement,
      rest = _objectWithoutProperties$1(props, ["position", "customStyle", "dark", "children", "onToggle", "className", "hideOnReferenceEscape", "boundaryElement"]);

  var _React$useState = React.useState(!!props.open),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      init = _React$useState4[0],
      setInit = _React$useState4[1];

  React.useEffect(function () {
    if (props.open !== undefined) setOpen(props.open);
  }, [props.open]);
  var defaultOnToggle = React.useCallback(function (newOpen) {
    setOpen(newOpen);
  }, []);
  React.useEffect(function () {
    if (!init) {
      if ('current' in boundaryElement && boundaryElement.current) {
        setInit(true);
      }
    }
  }, [boundaryElement]);
  var classes = classnames(_defineProperty$2({
    Popover: true
  }, 'Popover--dark', dark), className);
  var PopoverWrapper = /*#__PURE__*/React.createElement("div", {
    "data-test": "DesignSystem-Popover",
    className: classes,
    "data-layer": true
  }, children);
  return /*#__PURE__*/React.createElement(PopperWrapper, _extends$3({}, rest, {
    init: init,
    boundaryElement: 'current' in boundaryElement ? boundaryElement.current : boundaryElement,
    open: open,
    hide: hideOnReferenceEscape,
    style: customStyle,
    onToggle: onToggle || defaultOnToggle,
    placement: position
  }), PopoverWrapper);
};
Popover.displayName = 'Popover'; // Popover.defaultProps = {
//   ...filterProps(PopperWrapper.defaultProps, propsList, true),
//   offset: 'large',
//   position: 'bottom',
//   hideOnReferenceEscape: true,
//   customStyle: {},
// }

Popover.defaultProps = Object.assign({}, filterProps(PopperWrapper.defaultProps, propsList$1, true), {
  offset: 'large',
  position: 'bottom',
  hideOnReferenceEscape: true,
  customStyle: {},
  boundaryElement: document.body
});

var keyCodes = {
  BACKSPACE: 'Backspace',
  DELETE: 'Delete',
  ENTER: 'Enter'
};
var ChipInput = function ChipInput(props) {
  var _classNames;

  var chipOptions = props.chipOptions,
      allowDuplicates = props.allowDuplicates,
      disabled = props.disabled,
      placeholder = props.placeholder,
      defaultValue = props.defaultValue,
      value = props.value,
      className = props.className,
      autoFocus = props.autoFocus,
      onChange = props.onChange,
      onBlur = props.onBlur,
      onFocus = props.onFocus;
  var inputRef = /*#__PURE__*/React.createRef();

  var _React$useState = React.useState(value || defaultValue),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      chips = _React$useState2[0],
      setChips = _React$useState2[1];

  var _React$useState3 = React.useState(''),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      inputValue = _React$useState4[0],
      setInputValue = _React$useState4[1];

  var baseProps = extractBaseProps(props);
  React.useEffect(function () {
    if (value !== undefined) {
      setChips(value);
    }
  }, [value]);
  var ChipInputClass = classnames((_classNames = {
    ChipInput: true
  }, _defineProperty$2(_classNames, 'ChipInput--disabled', disabled), _defineProperty$2(_classNames, 'ChipInput--withChips', chips.length > 0), _classNames), className);

  var onUpdateChips = function onUpdateChips(updatedChips) {
    if (onChange) onChange(updatedChips);
  };

  var onChipDeleteHandler = function onChipDeleteHandler(index) {
    var updatedChips = _toConsumableArray(chips);

    updatedChips.splice(index, 1);

    if (!value) {
      setChips(updatedChips);
    }

    onUpdateChips(updatedChips);
  };

  var onChipAddHandler = function onChipAddHandler() {
    if (!inputValue) return;
    var chip = inputValue.trim().toLowerCase();

    if ((allowDuplicates || chips.indexOf(chip) === -1) && chip) {
      var updatedChips = [].concat(_toConsumableArray(chips), [chip]);

      if (!value) {
        setChips(updatedChips);
      }

      onUpdateChips(updatedChips);
      setInputValue('');
    }
  };

  var onDeleteAllHandler = function onDeleteAllHandler() {
    var updatedChips = [];

    if (!value) {
      setChips(updatedChips);
    }

    onUpdateChips(updatedChips);
  };

  var onKeyDownHandler = function onKeyDownHandler(event) {
    var chipsLength = chips.length;

    switch (event.key) {
      case keyCodes.DELETE:
      case keyCodes.BACKSPACE:
        if (inputValue === '' && chipsLength > 0) {
          onChipDeleteHandler(chipsLength - 1);
        }

        break;

      case keyCodes.ENTER:
        event.preventDefault();
        onChipAddHandler();
        break;
    }
  };

  var onInputChangeHandler = function onInputChangeHandler(e) {
    setInputValue(e.target.value);
  };

  var onClickHandler = function onClickHandler() {
    var _inputRef$current;

    (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
  };

  var chipComponents = chips.map(function (chip, index) {
    var _chipOptions$type = chipOptions.type,
        type = _chipOptions$type === void 0 ? 'input' : _chipOptions$type,
        _onClick = chipOptions.onClick,
        rest = _objectWithoutProperties$1(chipOptions, ["type", "onClick"]);

    return /*#__PURE__*/React.createElement(Chip, _extends$3({
      "data-test": "DesignSystem-ChipInput--Chip",
      label: chip,
      name: chip,
      type: type,
      disabled: disabled,
      key: index,
      className: "my-2 mx-2",
      onClick: function onClick() {
        return _onClick && _onClick(chip, index);
      },
      onClose: function onClose() {
        return onChipDeleteHandler(index);
      }
    }, rest));
  });
  return /*#__PURE__*/React.createElement("div", _extends$3({
    "data-test": "DesignSystem-ChipInput"
  }, baseProps, {
    className: ChipInputClass,
    onClick: onClickHandler
  }), /*#__PURE__*/React.createElement("div", {
    className: "ChipInput-wrapper"
  }, chips && chips.length > 0 && chipComponents, /*#__PURE__*/React.createElement("input", {
    "data-test": "DesignSystem-ChipInput--Input",
    ref: inputRef,
    className: "ChipInput-input",
    autoFocus: autoFocus,
    placeholder: placeholder,
    disabled: disabled,
    value: inputValue,
    onBlur: onBlur,
    onFocus: onFocus,
    onChange: onInputChangeHandler,
    onKeyDown: onKeyDownHandler
  })), chips.length > 0 && /*#__PURE__*/React.createElement(Icon, {
    "data-test": "DesignSystem-ChipInput--Icon",
    name: "close",
    appearance: "subtle",
    className: "ChipInput-icon",
    onClick: onDeleteAllHandler
  }));
};
ChipInput.displayName = 'ChipInput';
ChipInput.defaultProps = {
  chipOptions: {},
  defaultValue: [],
  allowDuplicates: false,
  autoFocus: false
};

var getTextAppearance = function getTextAppearance(isActive, disabled) {
  return disabled ? 'disabled' : isActive ? 'link' : 'default';
};
var getIconAppearance = function getIconAppearance(isActive, disabled) {
  return disabled ? 'disabled' : isActive ? 'info' : 'default';
};
var getPillsAppearance = function getPillsAppearance(isActive) {
  return isActive ? 'primary' : 'secondary';
};
var getMenu = function getMenu(menus, active) {
  var _iterator = _createForOfIteratorHelper(menus),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var menu = _step.value;

      if (active.name && menu.name === active.name || active.link && menu.link === active.link) {
        return menu;
      }

      if (menu.subMenu) {
        var activeMenu = menu.subMenu.find(function (submenu) {
          return active.name && submenu.name === active.name || active.link && submenu.link === active.link;
        });
        if (activeMenu) return activeMenu;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return null;
};
var isMenuActive = function isMenuActive(menus, menu, active) {
  if (active) {
    var currActiveMenu = getMenu(menus, active);
    return !!currActiveMenu && (currActiveMenu === menu || currActiveMenu.name.split('.')[0] === menu.name || currActiveMenu.name === menu.name || !!currActiveMenu.link && currActiveMenu.link === menu.link);
  }

  return false;
};

var MenuItem = function MenuItem(props) {
  var _classNames;

  var menu = props.menu,
      isActive = props.isActive,
      expanded = props.expanded,
      rounded = props.rounded,
      hasSubmenu = props.hasSubmenu,
      isChildren = props.isChildren,
      isChildrenVisible = props.isChildrenVisible,
      onClick = props.onClick;
  var baseProps = extractBaseProps(props);

  var onClickHandler = function onClickHandler() {
    if (onClick) onClick(menu);
  };

  var ItemClass = classnames((_classNames = {}, _defineProperty$2(_classNames, 'MenuItem', true), _defineProperty$2(_classNames, 'MenuItem--vertical', true), _defineProperty$2(_classNames, 'MenuItem--collapsed', !expanded), _defineProperty$2(_classNames, 'MenuItem--expanded', expanded), _defineProperty$2(_classNames, 'MenuItem--active', isActive), _defineProperty$2(_classNames, 'MenuItem--disabled', menu.disabled), _defineProperty$2(_classNames, 'MenuItem--subMenu', isChildren && expanded), _defineProperty$2(_classNames, 'MenuItem--rounded', rounded && expanded), _classNames));

  var renderSubMenu = function renderSubMenu() {
    if (hasSubmenu) {
      return /*#__PURE__*/React.createElement(Icon, {
        className: "mx-4",
        name: isChildrenVisible ? 'keyboard_arrow_up' : 'keyboard_arrow_down',
        appearance: "subtle"
      });
    }

    if (menu.count !== undefined) {
      var _classNames2;

      var count = menu.count > 99 ? '99+' : menu.count;
      var PillsClass = classnames((_classNames2 = {}, _defineProperty$2(_classNames2, 'MenuItem-count', true), _defineProperty$2(_classNames2, 'MenuItem-count--disabled', menu.disabled), _classNames2));
      return /*#__PURE__*/React.createElement(Pills, {
        subtle: menu.disabled,
        className: PillsClass,
        appearance: getPillsAppearance(isActive),
        "data-test": "DesignSystem-VerticalNav--Pills"
      }, count);
    }

    return null;
  };

  if (!expanded && !menu.icon) return null;
  return /*#__PURE__*/React.createElement("div", _extends$3({
    className: ItemClass
  }, baseProps, {
    onClick: onClickHandler
  }), /*#__PURE__*/React.createElement("div", {
    className: "d-flex align-items-center overflow-hidden"
  }, menu.icon && /*#__PURE__*/React.createElement(Icon, {
    "data-test": "DesignSystem-VerticalNav--Icon",
    className: expanded ? 'mr-4' : '',
    name: menu.icon,
    appearance: getIconAppearance(isActive, menu.disabled)
  }), expanded && /*#__PURE__*/React.createElement(Text, {
    "data-test": "DesignSystem-VerticalNav--Text",
    appearance: getTextAppearance(isActive, menu.disabled)
  }, menu.label)), expanded && renderSubMenu());
};
MenuItem.defaultProps = {
  isActive: false
};

/**
 * ####NOTE: VerticalNav sets first subMenu(if present) active if the Navigation is collapsed.
 */
var VerticalNav = function VerticalNav(props) {
  var menus = props.menus,
      active = props.active,
      onClick = props.onClick,
      expanded = props.expanded,
      rounded = props.rounded,
      autoCollapse = props.autoCollapse,
      className = props.className;

  var _React$useState = React.useState({}),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      menuState = _React$useState2[0],
      setMenuState = _React$useState2[1];

  var baseProps = extractBaseProps(props);
  React.useEffect(function () {
    if (props.active) {
      var currMenu = getMenu(menus, props.active);
      if (currMenu) updateMenuState(currMenu, true);
    }
  }, [props.active]);

  var updateMenuState = function updateMenuState(menu, val) {
    var currMenu = getMenu(menus, menu);

    if (currMenu) {
      var nameSplit = currMenu.name.split('.');

      if (nameSplit.length > 1 || currMenu.subMenu) {
        var name = nameSplit[0];

        if (autoCollapse) {
          setMenuState(_defineProperty$2({}, name, val || !menuState[name]));
        } else {
          var menuData = _objectSpread2({}, menuState);

          menuData[name] = val !== undefined ? val : !menuData[name];
          setMenuState(menuData);
        }
      } else {
        if (autoCollapse) {
          if (!expanded) setMenuState({});
        }
      }
    }
  };

  var onClickHandler = function onClickHandler(menu) {
    if (menu.subMenu) {
      if (!expanded) {
        if (onClick) onClick(menu.subMenu[0]);
      } else {
        updateMenuState(menu);
      }
    } else {
      if (onClick) onClick(menu);
    }
  };

  var renderList = function renderList() {
    var list = menus.map(function (menu, index) {
      var _classNames;

      var isActive = !menuState[menu.name] && isMenuActive(menus, menu, active);
      var hasSubmenu = menu.subMenu && menu.subMenu.length > 0;
      var isChildrenVisible = hasSubmenu && menuState[menu.name];
      var hasGroup = index === 0 || menus[index - 1].group !== menu.group;
      var sectionClass = classnames((_classNames = {}, _defineProperty$2(_classNames, 'VerticalNav-section', true), _defineProperty$2(_classNames, 'VerticalNav-section--border', index !== 0), _classNames));
      return /*#__PURE__*/React.createElement(React.Fragment, null, hasGroup && menu.group && expanded && /*#__PURE__*/React.createElement("div", {
        className: sectionClass
      }, /*#__PURE__*/React.createElement(Text, {
        "data-test": "DesignSystem-VerticalNav--Section",
        size: "small",
        weight: "strong",
        appearance: "subtle"
      }, menu.group)), /*#__PURE__*/React.createElement(MenuItem, {
        "data-test": "DesignSystem-VerticalNav--Item",
        menu: menu,
        expanded: expanded,
        isActive: isActive,
        hasSubmenu: hasSubmenu,
        isChildren: false,
        rounded: rounded,
        isChildrenVisible: isChildrenVisible,
        onClick: onClickHandler
      }), menuState[menu.name] && menu.subMenu && menu.subMenu.map(function (subMenu, id) {
        return /*#__PURE__*/React.createElement(MenuItem, {
          key: id,
          menu: subMenu,
          expanded: expanded,
          hasSubmenu: false,
          isChildren: true,
          rounded: rounded,
          onClick: onClickHandler,
          isActive: isMenuActive(menus, subMenu, active)
        });
      }));
    });
    return /*#__PURE__*/React.createElement(React.Fragment, null, list);
  };

  var classes = classnames(_defineProperty$2({
    VerticalNav: true
  }, 'VerticalNav--expanded', expanded), className);
  return /*#__PURE__*/React.createElement("div", _extends$3({}, baseProps, {
    className: classes
  }), renderList());
};
VerticalNav.defaultProps = {
  expanded: true,
  autoCollapse: true,
  rounded: false
};

var HorizontalNav = function HorizontalNav(props) {
  var menus = props.menus,
      active = props.active,
      onClick = props.onClick,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var classes = classnames(_defineProperty$2({}, 'HorizontalNav', true), className);

  var onClickHandler = function onClickHandler(menu) {
    return function () {
      if (onClick) onClick(menu);
    };
  };

  var getPillsClass = function getPillsClass(disabled) {
    var _classNames2;

    return classnames((_classNames2 = {}, _defineProperty$2(_classNames2, 'HorizontalNav-pills', true), _defineProperty$2(_classNames2, 'HorizontalNav-pills--disabled', disabled), _classNames2));
  };

  var renderIcon = function renderIcon(menu, isActive) {
    if (menu.count !== undefined) {
      var count = menu.count > 99 ? '99+' : menu.count;
      return /*#__PURE__*/React.createElement(Pills, {
        subtle: menu.disabled,
        className: getPillsClass(menu.disabled),
        appearance: getPillsAppearance(isActive),
        "data-test": "DesignSystem-HorizontalNav--Pills"
      }, count);
    }

    if (menu.icon) {
      return /*#__PURE__*/React.createElement(Icon, {
        className: "mr-3",
        name: menu.icon,
        appearance: getIconAppearance(isActive, menu.disabled),
        "data-test": "DesignSystem-HorizontalNav--Icon"
      });
    }

    return null;
  };

  var list = menus.map(function (menu, index) {
    var _classNames3;

    var isActive = isMenuActive(menus, menu, active);
    var menuClasses = classnames((_classNames3 = {
      'HorizontalNav-menu': true
    }, _defineProperty$2(_classNames3, 'HorizontalNav-menu--active', isActive), _defineProperty$2(_classNames3, 'HorizontalNav-menu--disabled', menu.disabled), _classNames3));
    return /*#__PURE__*/React.createElement("div", {
      "data-test": "DesignSystem-HorizontalNav",
      key: index,
      className: menuClasses,
      onClick: onClickHandler(menu)
    }, renderIcon(menu, isActive), /*#__PURE__*/React.createElement(Text, {
      appearance: getTextAppearance(isActive, menu.disabled),
      "data-test": "DesignSystem-HorizontalNav--Text",
      className: "HorizontalNav-menuText"
    }, menu.label));
  });
  return /*#__PURE__*/React.createElement("div", _extends$3({}, baseProps, {
    className: classes
  }), list);
};

var propsList = ['trigger', 'on', 'open', 'offset', 'onToggle', 'dark', 'customStyle', 'closeOnBackdropClick', 'hideOnReferenceEscape', 'closeOnScroll'];
var Tooltip = function Tooltip(props) {
  var children = props.children,
      tooltip = props.tooltip,
      rest = _objectWithoutProperties$1(props, ["children", "tooltip"]);

  var tooltipWrapper = /*#__PURE__*/React.createElement("div", {
    className: "Tooltip"
  }, /*#__PURE__*/React.createElement(Text, {
    className: "Tooltip-text",
    appearance: "white"
  }, tooltip));
  return /*#__PURE__*/React.createElement(Popover, _extends$3({
    trigger: children,
    on: 'hover',
    offset: 'medium'
  }, rest), tooltipWrapper);
}; // Tooltip.defaultProps = filterProps({
//   ...Popover.defaultProps,
//   hoverable: false
// }, propsList);

Tooltip.defaultProps = Object.assign({}, filterProps(Popover.defaultProps, propsList), {
  hoverable: false
});

var Dialog = function Dialog(props) {
  var dimension = props.dimension,
      primaryButtonAppearance = props.primaryButtonAppearance,
      secondaryButtonAppearance = props.secondaryButtonAppearance,
      open = props.open,
      onClose = props.onClose,
      heading = props.heading,
      title = props.title,
      description = props.description,
      primaryButtonLabel = props.primaryButtonLabel,
      primaryButtonCallback = props.primaryButtonCallback,
      secondaryButtonLabel = props.secondaryButtonLabel,
      secondaryButtonCallback = props.secondaryButtonCallback;
  var baseProps = extractBaseProps(props);
  return /*#__PURE__*/React.createElement(Modal, _extends$3({
    "data-test": "DesignSystem-Dialog"
  }, baseProps, {
    open: open,
    dimension: dimension,
    onClose: onClose,
    headerOptions: {
      heading: heading
    },
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      "data-test": "DesignSystem-Dialog--SecondaryButton",
      appearance: secondaryButtonAppearance,
      onClick: secondaryButtonCallback
    }, secondaryButtonLabel), /*#__PURE__*/React.createElement(Button, {
      className: "ml-4",
      "data-test": "DesignSystem-Dialog--PrimaryButton",
      appearance: primaryButtonAppearance,
      onClick: primaryButtonCallback
    }, primaryButtonLabel))
  }), /*#__PURE__*/React.createElement(ModalDescription, {
    title: title,
    description: description
  }));
};

Dialog.displayName = 'Dialog';
Dialog.defaultProps = {
  dimension: 'small',
  primaryButtonAppearance: 'primary',
  secondaryButtonAppearance: 'basic'
};

var getWrapperElement = function getWrapperElement() {
  var element = document.querySelector('.Overlay-wrapper');

  if (element === null) {
    element = document.createElement('div');
    element.classList.add('Overlay-wrapper');
    document.body.appendChild(element);
  }

  return element;
};
var getUpdatedZIndex = function getUpdatedZIndex(ele) {
  var containerClassName = ele.containerClassName,
      elementRef = ele.elementRef,
      element = ele.element;
  if (element === null) return;
  var elements = element.querySelectorAll(containerClassName);
  if (elements.length < 1) return;
  var siblings = Array.from(elements).filter(function (el) {
    return el !== elementRef.current;
  });
  var zIndex = -1;
  siblings.forEach(function (element) {
    var prevZIndex = parseInt(window.getComputedStyle(element).zIndex || '0', 10);
    zIndex = Math.max(zIndex, prevZIndex + 10);
  });
  return zIndex > 0 ? zIndex : undefined;
};

/**
 * ** NOTE: Use `headerOptions`, `footer`, `onClose` and `backdropClose`(boolean). **
 * ** Support for composition using `ModalHeader`, `ModalBody` and `ModalFooter` will be deprecated soon. **
 *
 * ** NOT RECOMMENDED: Only use composition of `ModalHeader`, `ModalBody` and `ModalFooter` **
 * ** when you are not using `headerOptions` or `footer` **
 */
var Modal = /*#__PURE__*/function (_React$Component) {
  _inherits$1(Modal, _React$Component);

  var _super = _createSuper$1(Modal);

  function Modal(props) {
    var _this;

    _classCallCheck$1(this, Modal);

    _this = _super.call(this, props);

    _defineProperty$2(_assertThisInitialized$2(_this), "modalRef", /*#__PURE__*/React.createRef());

    _defineProperty$2(_assertThisInitialized$2(_this), "element", void 0);

    _this.element = getWrapperElement();
    _this.state = {
      open: props.open,
      animate: props.open
    };
    _this.onOutsideClickHandler = _this.onOutsideClickHandler.bind(_assertThisInitialized$2(_this));
    return _this;
  }

  _createClass$1(Modal, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (prevProps.open !== this.props.open) {
        if (this.props.open) {
          var zIndex = getUpdatedZIndex({
            element: this.element,
            containerClassName: '.Overlay-container--open',
            elementRef: this.modalRef
          });
          this.setState({
            zIndex: zIndex,
            open: true,
            animate: true
          });
        } else {
          this.setState({
            animate: false
          }, function () {
            window.setTimeout(function () {
              _this2.setState({
                open: false
              });
            }, 120);
          });
        }
      }
    }
  }, {
    key: "onOutsideClickHandler",
    value: function onOutsideClickHandler(event) {
      var _this$props = this.props,
          backdropClose = _this$props.backdropClose,
          onClose = _this$props.onClose;
      var open = this.state.open;

      if (open) {
        if (onClose) onClose(event, 'OutsideClick');else if (typeof backdropClose === 'function') backdropClose(event, 'OutsideClick');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$state = this.state,
          animate = _this$state.animate,
          open = _this$state.open,
          zIndex = _this$state.zIndex;
      var _this$props2 = this.props,
          className = _this$props2.className,
          backdropClose = _this$props2.backdropClose,
          dimension = _this$props2.dimension,
          children = _this$props2.children,
          headerOptions = _this$props2.headerOptions,
          footer = _this$props2.footer,
          _onClose = _this$props2.onClose;
      var classes = classnames({
        Modal: true,
        'Modal--open': open,
        'Modal-animation--open': animate,
        'Modal-animation--close': !animate
      }, className);
      var ContainerClass = classnames((_classNames = {}, _defineProperty$2(_classNames, 'Row', true), _defineProperty$2(_classNames, 'Overlay-container', true), _defineProperty$2(_classNames, 'Overlay-container--open', open), _classNames));
      var baseProps = extractBaseProps(this.props);
      var sizeMap = {
        small: {
          size: '3',
          sizeL: '4',
          sizeM: '4',
          sizeXS: '10'
        },
        medium: {
          size: '4',
          sizeL: '6',
          sizeM: '6',
          sizeXS: '10'
        },
        large: {
          size: '6',
          sizeL: '8',
          sizeM: '8',
          sizeXS: '10'
        }
      };
      var ModalContainer = /*#__PURE__*/React.createElement(Row, {
        "data-test": "DesignSystem-ModalContainer",
        className: ContainerClass,
        "data-layer": true,
        style: {
          zIndex: zIndex
        }
      }, /*#__PURE__*/React.createElement(Column, _extends$3({
        "data-test": "DesignSystem-Modal"
      }, baseProps, {
        className: classes
      }, sizeMap[dimension], {
        ref: this.modalRef
      }), headerOptions && /*#__PURE__*/React.createElement(ModalHeader, _extends$3({
        onClose: function onClose(event, reason) {
          if (_onClose) _onClose(event, reason);
        }
      }, headerOptions)), children && /*#__PURE__*/React.createElement(React.Fragment, null, headerOptions || footer ? /*#__PURE__*/React.createElement(ModalBody, {
        withFooter: !!footer
      }, children) : children), footer && /*#__PURE__*/React.createElement(ModalFooter, {
        open: open
      }, footer)));
      var ModalWrapper = backdropClose ? /*#__PURE__*/React.createElement(OutsideClick, {
        "data-test": "DesignSystem-Modal--OutsideClick",
        onOutsideClick: this.onOutsideClickHandler
      }, ModalContainer) : ModalContainer;
      var WrapperElement = /*#__PURE__*/ReactDOM.createPortal(ModalWrapper, this.element);
      return /*#__PURE__*/React.createElement(React.Fragment, null, WrapperElement, /*#__PURE__*/React.createElement(Backdrop, {
        open: this.state.animate
      }));
    }
  }]);

  return Modal;
}(React.Component);

_defineProperty$2(Modal, "defaultProps", {
  dimension: 'medium'
});

var ModalHeader$1 = function ModalHeader(props) {
  var className = props.className,
      heading = props.heading,
      subHeading = props.subHeading,
      backButton = props.backButton,
      backButtonCallback = props.backButtonCallback;
  var baseProps = extractBaseProps(props);
  var classes = classnames(_defineProperty$2({
    'FullscreenModal-header': true
  }, 'FullscreenModal-header--backButton', backButton), className);
  return /*#__PURE__*/React.createElement("div", _extends$3({
    "data-test": "DesignSystem-ModalHeader"
  }, baseProps, {
    className: classes
  }), /*#__PURE__*/React.createElement("div", {
    className: "FullscreenModal-headerWrapper"
  }, backButton && /*#__PURE__*/React.createElement(Icon, {
    name: "keyboard_backspace",
    size: 20,
    className: "mr-5 cursor-pointer",
    onClick: backButtonCallback
  }), heading && /*#__PURE__*/React.createElement(Heading, null, heading)), subHeading && /*#__PURE__*/React.createElement(Text, {
    "data-test": "DesignSystem-ModalHeader--Subheading",
    appearance: "subtle",
    className: "mt-2"
  }, subHeading));
};
ModalHeader$1.displayName = 'ModalHeader';

var ModalFooter$1 = function ModalFooter(props) {
  var open = props.open,
      actions = props.actions;
  var baseProps = extractBaseProps(props);
  var wrapperRef = /*#__PURE__*/React.createRef();
  React.useEffect(function () {
    if (open) {
      if (wrapperRef.current) {
        var _wrapperRef$current;

        var secondaryBtns = (_wrapperRef$current = wrapperRef.current) === null || _wrapperRef$current === void 0 ? void 0 : _wrapperRef$current.querySelectorAll('.Button--basic');
        var secondaryBtn = secondaryBtns[secondaryBtns.length - 1];

        if (secondaryBtn) {
          window.requestAnimationFrame(function () {
            return secondaryBtn.focus({
              preventScroll: true
            });
          });
        }
      }
    }
  }, [open]);
  return /*#__PURE__*/React.createElement("div", _extends$3({
    ref: wrapperRef
  }, baseProps, {
    className: "d-flex"
  }), actions.map(function (_ref, index) {
    _ref.label;
        var options = _objectWithoutProperties$1(_ref, ["label"]);

    return /*#__PURE__*/React.createElement(Button, _extends$3({}, options, {
      key: index
    }));
  }));
};
ModalFooter$1.defaultProps = {
  actions: []
};
ModalFooter$1.displayName = 'ModalFooter';

var FullscreenModal = /*#__PURE__*/function (_React$Component) {
  _inherits$1(FullscreenModal, _React$Component);

  var _super = _createSuper$1(FullscreenModal);

  function FullscreenModal(props) {
    var _this;

    _classCallCheck$1(this, FullscreenModal);

    _this = _super.call(this, props);

    _defineProperty$2(_assertThisInitialized$2(_this), "modalRef", /*#__PURE__*/React.createRef());

    _defineProperty$2(_assertThisInitialized$2(_this), "element", void 0);

    _this.element = getWrapperElement();
    _this.state = {
      open: props.open,
      animate: props.open
    };
    return _this;
  }

  _createClass$1(FullscreenModal, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (prevProps.open !== this.props.open) {
        if (this.props.open) {
          var zIndex = getUpdatedZIndex({
            element: this.element,
            containerClassName: '.Overlay-container--open',
            elementRef: this.modalRef
          });
          this.setState({
            zIndex: zIndex,
            open: true,
            animate: true
          });
        } else {
          this.setState({
            animate: false
          }, function () {
            window.setTimeout(function () {
              _this2.setState({
                open: false
              });
            }, 120);
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$state = this.state,
          animate = _this$state.animate,
          open = _this$state.open,
          zIndex = _this$state.zIndex;
      var _this$props = this.props,
          className = _this$props.className,
          dimension = _this$props.dimension,
          children = _this$props.children,
          header = _this$props.header,
          headerOptions = _this$props.headerOptions,
          footer = _this$props.footer,
          footerOptions = _this$props.footerOptions,
          onClose = _this$props.onClose;
      var classes = classnames({
        FullscreenModal: true,
        'FullscreenModal--open': open,
        'FullscreenModal-animation--open': animate,
        'FullscreenModal-animation--close': !animate
      }, className);
      var ContainerClass = classnames((_classNames = {}, _defineProperty$2(_classNames, 'Overlay-container', true), _defineProperty$2(_classNames, 'Overlay-container--open', open), _classNames));
      var baseProps = extractBaseProps(this.props);
      var sizeMap = {
        medium: {
          size: '4',
          sizeL: '6',
          sizeM: '6',
          sizeXS: '12'
        },
        large: {
          size: '6',
          sizeL: '8',
          sizeM: '8',
          sizeXS: '12'
        }
      };
      var ModalContainer = /*#__PURE__*/React.createElement("div", {
        "data-test": "DesignSystem-FullscreenModalContainer",
        className: ContainerClass,
        "data-layer": true,
        style: {
          zIndex: zIndex
        }
      }, /*#__PURE__*/React.createElement("div", _extends$3({
        "data-test": "DesignSystem-FullscreenModal"
      }, baseProps, {
        className: classes,
        ref: this.modalRef
      }), /*#__PURE__*/React.createElement(Row, {
        className: "justify-content-center"
      }, /*#__PURE__*/React.createElement(Column, sizeMap[dimension], /*#__PURE__*/React.createElement(Row, {
        className: "justify-content-between pt-6 pr-6 pb-5 pl-7"
      }, /*#__PURE__*/React.createElement(Column, null, !header && /*#__PURE__*/React.createElement(ModalHeader$1, headerOptions), !!header && header), /*#__PURE__*/React.createElement(Column, {
        className: "pr-2 flex-grow-0"
      }, /*#__PURE__*/React.createElement(Icon, {
        size: 20,
        name: 'close',
        className: "cursor-pointer pt-3",
        "data-test": "DesignSystem-ModalHeader--CloseIcon",
        onClick: function onClick(event) {
          if (onClose) onClose(event, 'IconClick');
        }
      }))), /*#__PURE__*/React.createElement("div", {
        "data-test": "DesignSystem-ModalBody",
        className: "FullscreenModal-body"
      }, children), (!!footer || !!footerOptions) && /*#__PURE__*/React.createElement("div", {
        "data-test": "DesignSystem-ModalFooter",
        className: "d-flex justify-content-end p-7"
      }, !footer && /*#__PURE__*/React.createElement(ModalFooter$1, _extends$3({}, footerOptions, {
        open: open
      })), !!footer && footer)))));
      var WrapperElement = /*#__PURE__*/ReactDOM.createPortal(ModalContainer, this.element);
      return /*#__PURE__*/React.createElement(React.Fragment, null, WrapperElement);
    }
  }]);

  return FullscreenModal;
}(React.Component);

_defineProperty$2(FullscreenModal, "defaultProps", {
  dimension: 'medium'
});

var sidesheetWidth = {
  regular: '6',
  large: '10'
};

var Sidesheet = /*#__PURE__*/function (_React$Component) {
  _inherits$1(Sidesheet, _React$Component);

  var _super = _createSuper$1(Sidesheet);

  function Sidesheet(props) {
    var _this;

    _classCallCheck$1(this, Sidesheet);

    _this = _super.call(this, props);

    _defineProperty$2(_assertThisInitialized$2(_this), "sidesheetRef", /*#__PURE__*/React.createRef());

    _defineProperty$2(_assertThisInitialized$2(_this), "element", void 0);

    _this.element = getWrapperElement();
    _this.state = {
      open: props.open,
      animate: props.open
    };
    _this.onOutsideClickHandler = _this.onOutsideClickHandler.bind(_assertThisInitialized$2(_this));
    return _this;
  }

  _createClass$1(Sidesheet, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (prevProps.open !== this.props.open) {
        if (this.props.open) {
          var zIndex = getUpdatedZIndex({
            element: this.element,
            containerClassName: '.Overlay-container--open',
            elementRef: this.sidesheetRef
          });
          this.setState({
            zIndex: zIndex,
            open: true,
            animate: true
          });
        } else {
          this.setState({
            animate: false
          }, function () {
            window.setTimeout(function () {
              _this2.setState({
                open: false
              });
            }, 120);
          });
        }
      }
    }
  }, {
    key: "onOutsideClickHandler",
    value: function onOutsideClickHandler(event) {
      var onClose = this.props.onClose;
      var open = this.state.open;

      if (open) {
        if (onClose) onClose(event, 'OutsideClick');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$state = this.state,
          animate = _this$state.animate,
          open = _this$state.open,
          zIndex = _this$state.zIndex;
      var _this$props = this.props,
          className = _this$props.className,
          backdropClose = _this$props.backdropClose,
          dimension = _this$props.dimension,
          footer = _this$props.footer,
          seperator = _this$props.seperator,
          stickFooter = _this$props.stickFooter,
          headerOptions = _this$props.headerOptions,
          _onClose = _this$props.onClose;
      var classes = classnames({
        Sidesheet: true,
        'Sidesheet--open': open,
        'Sidesheet-animation--open': animate,
        'Sidesheet-animation--close': !animate
      }, className);
      var ContainerClass = classnames((_classNames = {}, _defineProperty$2(_classNames, 'Overlay-container', true), _defineProperty$2(_classNames, 'Overlay-container--open', open), _classNames));
      var baseProps = extractBaseProps(this.props);

      var headerObj = _objectSpread2(_objectSpread2({}, headerOptions), {}, {
        seperator: seperator
      });

      var SidesheetContainer = /*#__PURE__*/React.createElement(Row, {
        "data-test": "DesignSystem-SidesheetContainer",
        className: ContainerClass,
        "data-layer": true,
        style: {
          zIndex: zIndex
        },
        ref: this.sidesheetRef
      }, /*#__PURE__*/React.createElement(Column, _extends$3({
        "data-test": "DesignSystem-Sidesheet"
      }, baseProps, {
        className: classes,
        size: sidesheetWidth[dimension]
      }), /*#__PURE__*/React.createElement(ModalHeader, _extends$3({
        onClose: function onClose(event, reason) {
          if (_onClose) _onClose(event, reason);
        }
      }, headerObj)), /*#__PURE__*/React.createElement(ModalBody, {
        stickFooter: stickFooter,
        withFooter: !!footer
      }, this.props.children), footer && /*#__PURE__*/React.createElement(ModalFooter, {
        inSidesheet: true,
        stickToBottom: stickFooter,
        seperator: seperator
      }, footer)));
      var SidesheetWrapper = backdropClose ? /*#__PURE__*/React.createElement(OutsideClick, {
        "data-test": "DesignSystem-Sidesheet--OutsideClick",
        onOutsideClick: this.onOutsideClickHandler
      }, SidesheetContainer) : SidesheetContainer;
      var WrapperElement = /*#__PURE__*/ReactDOM.createPortal(SidesheetWrapper, this.element);
      return /*#__PURE__*/React.createElement(React.Fragment, null, WrapperElement, /*#__PURE__*/React.createElement(Backdrop, {
        open: this.state.animate
      }));
    }
  }]);

  return Sidesheet;
}(React.Component);

_defineProperty$2(Sidesheet, "defaultProps", {
  dimension: 'regular',
  stickFooter: false,
  headerOptions: {}
});

var Collapsible = function Collapsible(props) {
  var _classNames, _classNames4;

  var expanded = props.expanded,
      hoverable = props.hoverable,
      expandedWidth = props.expandedWidth,
      height = props.height,
      children = props.children,
      className = props.className,
      onToggle = props.onToggle;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isClicked = _React$useState2[0],
      setIsClicked = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      seperator = _React$useState4[0],
      setSeperator = _React$useState4[1];

  var ref = /*#__PURE__*/React.createRef();
  var baseProps = extractBaseProps(props);
  React.useEffect(function () {
    if (ref.current) {
      setSeperator(ref.current.scrollHeight > ref.current.clientHeight);
    }
  });
  var WrapperClass = classnames((_classNames = {}, _defineProperty$2(_classNames, 'Collapsible-wrapper', true), _defineProperty$2(_classNames, 'Collapsible-wrapper--overlay', !isClicked), _classNames));
  var BodyClass = classnames(_defineProperty$2({}, 'Collapsible-body', true));
  var classes = classnames(_defineProperty$2({
    Collapsible: true
  }, 'Collapsible--overlay', !isClicked), className);
  var FooterClass = classnames((_classNames4 = {}, _defineProperty$2(_classNames4, 'Collapsible-footer', true), _defineProperty$2(_classNames4, 'Collapsible-footer--seperator', seperator), _classNames4));

  var onToggleHandler = function onToggleHandler(newExpanded, type) {
    return function () {
      if (onToggle) {
        if (type === 'mouseenter' || type === 'mouseleave') {
          if (isClicked && expanded || !hoverable) return;
          setIsClicked(false);
        }

        if (type === 'click') {
          setIsClicked(true);
        }

        onToggle(newExpanded);
      }
    };
  };

  var width = expanded ? expandedWidth : undefined;
  return /*#__PURE__*/React.createElement("div", {
    "data-test": "DesignSystem-CollapsibleWrapper",
    className: WrapperClass,
    style: {
      height: height
    }
  }, /*#__PURE__*/React.createElement("div", _extends$3({
    "data-test": "DesignSystem-Collapsible"
  }, baseProps, {
    "data-layer": true,
    className: classes,
    style: {
      width: width
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: BodyClass,
    "data-test": "DesignSystem-CollapsibleBody",
    onMouseEnter: onToggleHandler(true, 'mouseenter'),
    onMouseLeave: onToggleHandler(false, 'mouseleave'),
    ref: ref
  }, children), /*#__PURE__*/React.createElement("div", {
    "data-test": "DesignSystem-Collapsible--Footer",
    className: FooterClass
  }, /*#__PURE__*/React.createElement(Icon, {
    name: expanded ? 'keyboard_arrow_left' : 'keyboard_arrow_right',
    "data-test": "DesignSystem-Collapsible--FooterIcon",
    className: "px-5 py-4 my-2 cursor-pointer",
    onClick: onToggleHandler(!expanded, 'click'),
    size: 16
  }))));
};
Collapsible.displayName = 'Collapsible';
Collapsible.defaultProps = {
  expanded: false,
  hoverable: true,
  height: '100%',
  expandedWidth: 'var(--spacing-9)'
};

var Status = function Status(props) {
  var type = props.type,
      time = props.time,
      className = props.className,
      _props$readText = props.readText,
      readText = _props$readText === void 0 ? 'Read' : _props$readText,
      _props$failedText = props.failedText,
      failedText = _props$failedText === void 0 ? 'Click to retry' : _props$failedText,
      _props$sendingText = props.sendingText,
      sendingText = _props$sendingText === void 0 ? 'Sending..' : _props$sendingText;
  var baseProps = extractBaseProps(props);
  var StatusClass = classnames(_defineProperty$2({}, 'd-flex align-items-center mt-3', true), className);
  var TextClass = classnames(_defineProperty$2({}, 'ChatMessage-status', true), className);

  var getTime = function getTime(t) {
    if (typeof t === 'number') {
      var d = new Date(t);
      var hours = d.getHours();
      var minutes = d.getMinutes();
      var AMPM = hours < 12 ? 'AM' : 'PM';
      var hrs = hours % 12 || 12;
      return "".concat(hrs, ":").concat(minutes, " ").concat(AMPM);
    }

    return t;
  };

  switch (type) {
    case 'failed':
      return /*#__PURE__*/React.createElement("div", _extends$3({}, baseProps, {
        className: StatusClass
      }), /*#__PURE__*/React.createElement(Icon, {
        name: "error",
        type: "outlined",
        appearance: "destructive"
      }), /*#__PURE__*/React.createElement(Text, {
        appearance: "destructive",
        size: "small",
        className: "ml-1"
      }, "Failed"), /*#__PURE__*/React.createElement(MetaList, {
        list: [{
          label: failedText
        }],
        seperator: true
      }));

    case 'urgent':
      return /*#__PURE__*/React.createElement("div", _extends$3({}, baseProps, {
        className: StatusClass
      }), /*#__PURE__*/React.createElement(Icon, {
        name: "notification_important",
        type: "outlined",
        appearance: "destructive"
      }), /*#__PURE__*/React.createElement(Text, {
        appearance: "destructive",
        size: "small",
        className: "ml-1"
      }, "Urgent"), time && /*#__PURE__*/React.createElement(MetaList, {
        list: [{
          label: getTime(time)
        }],
        seperator: true
      }));

    case 'read':
      return /*#__PURE__*/React.createElement("div", _extends$3({}, baseProps, {
        className: StatusClass
      }), time && /*#__PURE__*/React.createElement(Text, {
        appearance: "subtle",
        size: "small"
      }, getTime(time)), /*#__PURE__*/React.createElement(MetaList, {
        list: [{
          label: readText
        }],
        seperator: true
      }));

    case 'sending':
      return /*#__PURE__*/React.createElement(Text, _extends$3({}, baseProps, {
        appearance: "subtle",
        size: "small",
        className: TextClass
      }), sendingText);

    case 'sent':
      return /*#__PURE__*/React.createElement(React.Fragment, null, time && /*#__PURE__*/React.createElement(Text, _extends$3({}, baseProps, {
        appearance: "subtle",
        size: "small",
        className: TextClass
      }), getTime(time)));

    default:
      return null;
  }
};
Status.displayName = 'Status';

var Box = function Box(props) {
  var _classNames;

  var children = props.children,
      type = props.type,
      isTyping = props.isTyping,
      statusType = props.statusType,
      withStatus = props.withStatus,
      onClick = props.onClick,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var MessageClass = classnames((_classNames = {}, _defineProperty$2(_classNames, 'Box', true), _defineProperty$2(_classNames, "Box--".concat(type), type), _defineProperty$2(_classNames, 'Box--typing', isTyping), _defineProperty$2(_classNames, 'Box--urgent', statusType === 'urgent'), _defineProperty$2(_classNames, "Box-".concat(type, "--withStatus"), withStatus || isTyping), _classNames), className);
  return /*#__PURE__*/React.createElement("div", _extends$3({}, baseProps, {
    className: MessageClass,
    onClick: onClick
  }), children);
};
Box.displayName = 'Box';

var MessageText = function MessageText(props) {
  var text = props.text,
      type = props.type,
      isTyping = props.isTyping,
      typingText = props.typingText,
      statusType = props.statusType,
      className = props.className;
  var baseProps = extractBaseProps(props);

  if (isTyping && type === 'incoming') {
    return /*#__PURE__*/React.createElement(Text, _extends$3({}, baseProps, {
      appearance: 'subtle',
      size: 'small',
      className: className
    }), typingText);
  }

  return /*#__PURE__*/React.createElement(Text, _extends$3({}, baseProps, {
    className: className,
    appearance: statusType === 'sending' ? 'subtle' : 'default'
  }), text);
};
MessageText.defaultProps = {
  text: '',
  typingText: 'Typing..'
};
MessageText.displayName = 'MessageText';

var ChatMessage = function ChatMessage(props) {
  var type = props.type,
      text = props.text,
      isTyping = props.isTyping,
      typingText = props.typingText,
      statusOptions = props.statusOptions,
      onClick = props.onClick,
      className = props.className;
  var baseProps = extractBaseProps(props);

  var _ref = statusOptions || {},
      statusType = _ref.type;

  return /*#__PURE__*/React.createElement(Box, _extends$3({}, baseProps, {
    type: type,
    className: className,
    onClick: onClick,
    isTyping: isTyping,
    statusType: statusType,
    withStatus: statusOptions !== undefined
  }), /*#__PURE__*/React.createElement(MessageText, {
    type: type,
    text: text,
    typingText: typingText,
    isTyping: isTyping,
    statusType: statusType
  }), !isTyping && statusOptions && /*#__PURE__*/React.createElement(Status, statusOptions));
};
ChatMessage.displayName = 'ChatMessage';

var imageHeight = {
  large: '256px',
  small: '128px'
};
var HeadingSize = {
  large: 'l',
  small: 'm'
};
var textSize = {
  large: 'large',
  small: 'regular'
};
var EmptyState = function EmptyState(props) {
  var _classNames2, _classNames3;

  var imageSrc = props.imageSrc,
      title = props.title,
      description = props.description,
      size = props.size,
      children = props.children,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var WrapperClass = classnames(_defineProperty$2({}, 'EmptyState', true), className);
  var HeadingClass = classnames((_classNames2 = {}, _defineProperty$2(_classNames2, 'EmptyState-title', true), _defineProperty$2(_classNames2, "EmptyState-title--".concat(size), true), _classNames2));
  var TextClass = classnames((_classNames3 = {}, _defineProperty$2(_classNames3, 'EmptyState-description', true), _defineProperty$2(_classNames3, "EmptyState-description--".concat(size), children !== undefined), _classNames3));
  return /*#__PURE__*/React.createElement("div", _extends$3({}, baseProps, {
    className: WrapperClass
  }), /*#__PURE__*/React.createElement("img", {
    src: imageSrc,
    height: imageHeight[size]
  }), /*#__PURE__*/React.createElement(Heading, {
    size: HeadingSize[size],
    className: HeadingClass
  }, title), /*#__PURE__*/React.createElement(Text, {
    size: textSize[size],
    className: TextClass,
    appearance: "subtle"
  }, description), children && children);
};
EmptyState.displayName = 'EmptyState';

var ModalHeader = function ModalHeader(props) {
  var _classNames;

  var className = props.className,
      heading = props.heading,
      subHeading = props.subHeading,
      onClose = props.onClose,
      seperator = props.seperator,
      backIcon = props.backIcon,
      backIconCallback = props.backIconCallback;
  var baseProps = extractBaseProps(props);
  var classes = classnames((_classNames = {
    'Modal-header': true
  }, _defineProperty$2(_classNames, 'Modal-header--backIcon', backIcon), _defineProperty$2(_classNames, 'Modal-header--seperator', seperator), _classNames), className);
  var wrapperClass = classnames(_defineProperty$2({
    'Modal-headerWrapper': true
  }, 'Modal-headerWrapper--backIcon', backIcon));
  return /*#__PURE__*/React.createElement("div", _extends$3({
    "data-test": "DesignSystem-ModalHeader"
  }, baseProps, {
    className: classes
  }), /*#__PURE__*/React.createElement("div", {
    className: wrapperClass
  }, backIcon && /*#__PURE__*/React.createElement(Icon, {
    name: "keyboard_backspace",
    size: 20,
    className: "ml-3 mr-5 my-3 px-2 py-2 cursor-pointer",
    onClick: backIconCallback
  }), /*#__PURE__*/React.createElement("div", {
    className: "Modal-headerHeading"
  }, /*#__PURE__*/React.createElement(Heading, null, heading), /*#__PURE__*/React.createElement(Icon, {
    size: 20,
    name: 'close',
    className: 'mx-2 cursor-pointer',
    "data-test": "DesignSystem-ModalHeader--CloseIcon",
    onClick: function onClick(event) {
      return onClose(event, 'IconClick');
    }
  }))), subHeading && /*#__PURE__*/React.createElement(Text, {
    "data-test": "DesignSystem-ModalHeader--Subheading",
    appearance: "subtle",
    className: "mt-2 ml-7"
  }, subHeading));
};
ModalHeader.displayName = 'ModalHeader';

var ModalFooter = function ModalFooter(props) {
  var _classNames;

  var open = props.open,
      children = props.children,
      className = props.className,
      stickToBottom = props.stickToBottom,
      seperator = props.seperator,
      inSidesheet = props.inSidesheet;
  var baseProps = extractBaseProps(props);
  var classes = classnames((_classNames = {
    'Modal-footer': true
  }, _defineProperty$2(_classNames, 'Modal-footer--inModal', !inSidesheet), _defineProperty$2(_classNames, 'Modal-footer--seperator', seperator), _defineProperty$2(_classNames, 'Modal-footer--stickToBottom', stickToBottom), _classNames), className);
  var wrapperRef = /*#__PURE__*/React.createRef();
  React.useEffect(function () {
    if (open) {
      if (wrapperRef.current) {
        var _wrapperRef$current;

        var secondaryBtns = (_wrapperRef$current = wrapperRef.current) === null || _wrapperRef$current === void 0 ? void 0 : _wrapperRef$current.querySelectorAll('.Button--basic');
        var secondaryBtn = secondaryBtns[secondaryBtns.length - 1];

        if (secondaryBtn) {
          window.requestAnimationFrame(function () {
            return secondaryBtn.focus({
              preventScroll: true
            });
          });
        }
      }
    }
  }, [open]);
  return /*#__PURE__*/React.createElement("div", _extends$3({
    "data-test": "DesignSystem-ModalFooter",
    ref: wrapperRef
  }, baseProps, {
    className: classes
  }), children);
};
ModalFooter.defaultProps = {
  stickToBottom: true,
  inSidesheet: false
};
ModalFooter.displayName = 'ModalFooter';

var ModalBody = function ModalBody(props) {
  var children = props.children,
      className = props.className,
      stickFooter = props.stickFooter,
      withFooter = props.withFooter;
  var baseProps = extractBaseProps(props);
  var classes = classnames(_defineProperty$2({
    'Modal-body': true
  }, 'Modal-body--stickFooter', withFooter && stickFooter), className);
  return /*#__PURE__*/React.createElement("div", _extends$3({
    "data-test": "DesignSystem-ModalBody"
  }, baseProps, {
    className: classes
  }), children);
};
ModalBody.defaultProps = {
  stickFooter: true,
  withFooter: true
};
ModalBody.displayName = 'ModalBody';

var ModalDescription = function ModalDescription(props) {
  var title = props.title,
      description = props.description,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var classes = classnames({
    'Modal-description': true
  }, className);
  return /*#__PURE__*/React.createElement("div", _extends$3({
    "data-test": "DesignSystem-ModalDescription"
  }, baseProps, {
    className: classes
  }), title && /*#__PURE__*/React.createElement(Text, {
    weight: "strong",
    "data-test": "DesignSystem-ModalDescription--Title"
  }, title), title && description && /*#__PURE__*/React.createElement("br", null), description && /*#__PURE__*/React.createElement(Text, {
    "data-test": "DesignSystem-ModalDescription--Description"
  }, description));
};
ModalDescription.displayName = 'ModalDescription';

var Pagination = function Pagination(props) {
  var _classNames, _classNames2, _classNames3;

  var type = props.type,
      totalPages = props.totalPages,
      onPageChange = props.onPageChange,
      className = props.className;
  var baseProps = extractBaseProps(props);

  var _React$useState = React.useState(props.page),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      page = _React$useState2[0],
      setPage = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      init = _React$useState4[0],
      setInit = _React$useState4[1];

  React.useEffect(function () {
    setPage(props.page);
  }, [props.page]);
  var wrapperClass = classnames((_classNames = {}, _defineProperty$2(_classNames, 'Pagination', true), _defineProperty$2(_classNames, "Pagination--".concat(type), type), _classNames), className);
  var nextButtonWrapperClass = classnames((_classNames2 = {}, _defineProperty$2(_classNames2, 'Pagination-buttonWrapper', true), _defineProperty$2(_classNames2, 'Pagination-buttonWrapper--next', true), _classNames2));
  var prevButtonWrapperClass = classnames((_classNames3 = {}, _defineProperty$2(_classNames3, 'Pagination-buttonWrapper', true), _defineProperty$2(_classNames3, 'Pagination-buttonWrapper--previous', true), _classNames3));
  React.useEffect(function () {
    if (init) {
      if (page >= 1 && page <= totalPages) onPageChange(page);
    }
  }, [page]);

  var inputChangeHandler = function inputChangeHandler(e) {
    e.preventDefault();
    var val = +e.target.value.trim();

    if (val >= 0 && val <= totalPages) {
      if (!init) setInit(true);
      setPage(val);
    }
  };

  var onClickHandler = function onClickHandler(buttonType) {
    setInit(true);

    switch (buttonType) {
      case 'first':
        setPage(1);
        break;

      case 'last':
        setPage(totalPages);
        break;

      case 'prev':
        if (page > 1) setPage(page - 1);
        break;

      case 'next':
        if (page < totalPages) setPage(page + 1);
        break;
    }
  };

  var buttonHelper = [];
  if (type === 'basic') buttonHelper.push('mx-3');else buttonHelper.push('mx-4');
  return /*#__PURE__*/React.createElement("div", _extends$3({
    "data-test": "DesignSystem-Pagination"
  }, baseProps, {
    className: wrapperClass
  }), /*#__PURE__*/React.createElement("div", {
    className: prevButtonWrapperClass
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return onClickHandler('first');
    },
    disabled: page <= 1,
    appearance: "transparent",
    size: "large",
    icon: "first_page",
    "data-test": "DesignSystem-Pagination--FirstButton"
  }), /*#__PURE__*/React.createElement("div", {
    "data-test": "DesignSystem-Pagination--Prev",
    className: ['ml-4'].concat(buttonHelper).join(' ')
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return onClickHandler('prev');
    },
    disabled: page <= 1,
    size: "large",
    icon: "navigate_before",
    "data-test": "DesignSystem-Pagination--PrevButton"
  }))), type === 'jump' && /*#__PURE__*/React.createElement("div", {
    className: "Pagination-pageIndex"
  }, /*#__PURE__*/React.createElement(Input, {
    name: "page",
    type: "number",
    size: "large",
    onChange: inputChangeHandler,
    value: "".concat(page === 0 ? '' : page),
    "data-test": "DesignSystem-Pagination--Input"
  }), /*#__PURE__*/React.createElement(Text, null, " of ".concat(totalPages, " pages"))), /*#__PURE__*/React.createElement("div", {
    className: nextButtonWrapperClass
  }, /*#__PURE__*/React.createElement("div", {
    className: ['mr-4'].concat(buttonHelper).join(' ')
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return onClickHandler('next');
    },
    disabled: page >= totalPages,
    size: "large",
    icon: "navigate_next",
    "data-test": "DesignSystem-Pagination--NextButton"
  })), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return onClickHandler('last');
    },
    disabled: page >= totalPages,
    appearance: "transparent",
    size: "large",
    icon: "last_page",
    "data-test": "DesignSystem-Pagination--LastButton"
  })));
};
Pagination.displayName = 'Pagination';
Pagination.defaultProps = {
  type: 'basic',
  page: 1,
  totalPages: 1
};

var EditableInput = function EditableInput(props) {
  var _classNames2, _classNames4;

  var value = props.value,
      error = props.error,
      size = props.size,
      errorMessage = props.errorMessage,
      placeholder = props.placeholder,
      inputOptions = props.inputOptions,
      disableSaveAction = props.disableSaveAction,
      onChange = props.onChange,
      className = props.className;

  var onInputChange = inputOptions.onChange,
      rest = _objectWithoutProperties$1(inputOptions, ["onChange"]);

  var _React$useState = React.useState(value),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      inputValue = _React$useState2[0],
      setInputValue = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      editing = _React$useState4[0],
      setEditing = _React$useState4[1];

  var _React$useState5 = React.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      showComponent = _React$useState6[0],
      setShowComponent = _React$useState6[1];

  var inputRef = /*#__PURE__*/React.createRef();
  var baseProps = extractBaseProps(props);
  var EditableInputClass = classnames(_defineProperty$2({}, 'EditableInput', true), className);
  var EditableDefaultClass = classnames((_classNames2 = {}, _defineProperty$2(_classNames2, 'EditableInput-default', true), _defineProperty$2(_classNames2, "EditableInput-default--".concat(size), size), _classNames2));
  var InputClass = classnames(_defineProperty$2({}, 'EditableInput-Input--tiny', size === 'tiny'));
  var ActionClass = classnames((_classNames4 = {}, _defineProperty$2(_classNames4, 'EditableInput-actions', true), _defineProperty$2(_classNames4, "EditableInput-actions--".concat(size), size), _classNames4));
  React.useEffect(function () {
    setDefaultComponent();
  }, [value]);

  var setDefaultComponent = function setDefaultComponent() {
    setInputValue(value);
    setEditing(false);
    setShowComponent(false);
  };

  var onSaveChanges = function onSaveChanges() {
    if (onChange) onChange(inputValue);
  };

  var onInputChangeHandler = function onInputChangeHandler(e) {
    setInputValue(e.target.value);
    if (onInputChange) onInputChange(e);
  };

  var onChangeHandler = function onChangeHandler(eventType) {
    var _inputRef$current;

    switch (eventType) {
      case 'edit':
        (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
        setEditing(true);

      case 'hover':
        setShowComponent(true);
        return;

      case 'default':
        setShowComponent(false);
    }
  };

  var inputComponent = /*#__PURE__*/React.createElement(Input, _extends$3({
    defaultValue: inputValue,
    placeholder: placeholder,
    className: InputClass,
    autoFocus: editing,
    size: size,
    onChange: onInputChangeHandler,
    error: error && editing,
    ref: inputRef,
    "data-test": "DesignSystem-EditableInput--Input"
  }, rest));

  var onKeyDown = function onKeyDown(event) {
    if (document.activeElement === inputRef.current) {
      switch (event.key) {
        case 'Enter':
          onSaveChanges();
          break;

        case 'Escape':
          setDefaultComponent();
          break;
      }
    }
  };

  var renderChildren = function renderChildren() {
    if (showComponent) {
      return error && errorMessage && editing ? /*#__PURE__*/React.createElement(Popover, {
        trigger: inputComponent,
        position: "right",
        className: "px-6 py-6 d-flex align-items-center",
        on: "hover"
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "error",
        appearance: 'alert',
        className: "mr-4"
      }), /*#__PURE__*/React.createElement(Text, {
        "data-test": "DesignSystem-EditableInput--ErrorPopper",
        appearance: "destructive",
        weight: "medium"
      }, errorMessage)) : inputComponent;
    }

    return /*#__PURE__*/React.createElement("div", {
      className: EditableDefaultClass,
      "data-test": "DesignSystem-EditableInput--Default"
    }, value || placeholder);
  };

  return /*#__PURE__*/React.createElement("div", _extends$3({
    "data-test": "DesignSystem-EditableInput"
  }, baseProps, {
    className: EditableInputClass,
    onKeyDown: onKeyDown
  }), /*#__PURE__*/React.createElement(Editable, {
    onChange: onChangeHandler,
    editing: editing
  }, renderChildren()), editing && /*#__PURE__*/React.createElement("div", {
    className: ActionClass,
    "data-test": "DesignSystem-EditableInput--Actions"
  }, /*#__PURE__*/React.createElement(Button, {
    icon: "clear",
    className: "mr-3",
    size: "tiny",
    onClick: setDefaultComponent,
    "data-test": "DesignSystem-EditableInput--Discard"
  }), /*#__PURE__*/React.createElement(Button, {
    icon: "check",
    appearance: "primary",
    size: "tiny",
    disabled: disableSaveAction,
    onClick: onSaveChanges,
    "data-test": "DesignSystem-EditableInput--Save"
  })));
};
EditableInput.defaultProps = {
  size: 'regular',
  placeholder: '',
  value: '',
  inputOptions: {}
};

var ProgressRing = function ProgressRing(props) {
  var size = props.size,
      max = props.max,
      value = props.value,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var radius = 20;
  var circumference = 2 * Math.PI * radius;
  var ProgressRingClass = classnames(_defineProperty$2({
    Ring: true
  }, "Ring--".concat(size), size), className);
  var svgProps = {
    viewBox: '0 0 50 50'
  };
  var updatedValue = value > 0 ? Math.min(value, max) * 100 / max : 0;
  var circleProps = {
    cx: 25,
    cy: 25,
    r: radius,
    fill: 'none',
    strokeWidth: '8',
    strokeDasharray: "".concat(circumference, " ").concat(circumference)
  };
  return /*#__PURE__*/React.createElement("svg", _extends$3({
    "data-test": "DesignSystem-ProgressRing"
  }, baseProps, {
    className: ProgressRingClass
  }, svgProps), /*#__PURE__*/React.createElement("circle", _extends$3({
    className: "Ring-background"
  }, circleProps)), /*#__PURE__*/React.createElement("circle", _extends$3({
    className: "Ring-indicator",
    strokeDashoffset: circumference - updatedValue / 100 * circumference
  }, circleProps, {
    "data-test": "DesignSystem-ProgressRing--Circle"
  })));
};
ProgressRing.displayName = 'ProgressRing';
ProgressRing.defaultProps = {
  size: 'regular',
  max: 100
};

var Step = function Step(props) {
  var _classNames;

  var label = props.label,
      value = props.value,
      disabled = props.disabled,
      active = props.active,
      completed = props.completed,
      onChange = props.onChange;
  var StepClass = classnames((_classNames = {}, _defineProperty$2(_classNames, 'Step', true), _defineProperty$2(_classNames, 'Step--active', active), _defineProperty$2(_classNames, 'Step--disabled', disabled), _classNames));

  var onClickHandle = function onClickHandle() {
    if (disabled) return;
    if (onChange) onChange(label, value);
  };

  var iconAppearance = completed ? 'info' : disabled ? 'disabled' : 'default';
  return /*#__PURE__*/React.createElement("div", {
    "data-test": "DesignSystem-Step",
    className: StepClass,
    onClick: onClickHandle
  }, /*#__PURE__*/React.createElement(Icon, {
    "data-test": "DesignSystem-StepIcon",
    name: completed ? 'check_circle' : 'radio_button_unchecked',
    appearance: iconAppearance,
    className: "mr-3 my-4"
  }), label && /*#__PURE__*/React.createElement(Text, {
    weight: "medium",
    appearance: disabled ? 'disabled' : 'default'
  }, label));
};
Step.displayName = 'Step';

var Stepper = function Stepper(props) {
  var steps = props.steps,
      active = props.active,
      completed = props.completed,
      onChange = props.onChange,
      className = props.className;
  var baseProps = extractBaseProps(props);

  var onChangeHandler = function onChangeHandler(index, stepLabel, stepValue) {
    if (onChange) onChange(index, completed, stepLabel, stepValue);
  };

  var StepperClass = classnames(_defineProperty$2({}, 'Stepper', true), className);
  return /*#__PURE__*/React.createElement("div", _extends$3({
    "data-test": "DesignSystem-Stepper"
  }, baseProps, {
    className: StepperClass
  }), steps.map(function (step, index) {
    var label = step.label,
        value = step.value;
    var activeStep = active === index;
    var completedStep = completed >= index;
    var disabled = completed + 1 < index;
    return /*#__PURE__*/React.createElement(Step, {
      key: index,
      label: label,
      value: value,
      active: activeStep,
      completed: completedStep,
      disabled: disabled,
      onChange: function onChange(steplabel, stepvalue) {
        return onChangeHandler(index, steplabel, stepvalue);
      }
    });
  }));
};
Stepper.displayName = 'Stepper';
Stepper.defaultProps = {
  completed: -1,
  active: 0
};

var Trigger = function Trigger(props) {
  var inputFormat = props.inputFormat,
      startInputOptions = props.startInputOptions,
      endInputOptions = props.endInputOptions,
      validators = props.validators,
      state = props.state,
      setState = props.setState;
  var init = state.init,
      startDate = state.startDate,
      endDate = state.endDate,
      startError = state.startError,
      endError = state.endError;

  var updateNav = function updateNav(type) {
    if (type === 'start') {
      var _getDateInfo = getDateInfo(startDate),
          year = _getDateInfo.year,
          month = _getDateInfo.month;

      setState({
        yearNav: year,
        monthNav: month
      });
    }

    if (type === 'end') {
      var _getDateInfo2 = getDateInfo(endDate),
          _year = _getDateInfo2.year,
          _month = _getDateInfo2.month;

      setState({
        yearNav: _year,
        monthNav: _month
      });
    }
  };

  var onChangeHandler = function onChangeHandler(_e, val, type) {
    setState({
      open: true
    });

    if (type === 'start') {
      var placeholderChar = startInputOptions.placeholderChar || '_';

      if (val && !val.includes(placeholderChar)) {
        var d = translateToDate(inputFormat, val, validators);

        if (d) {
          setState({
            startDate: d
          });

          if (endDate) {
            var _getDateInfo3 = getDateInfo(endDate),
                eYear = _getDateInfo3.year,
                eMonth = _getDateInfo3.month,
                eDate = _getDateInfo3.date;

            if (compareDate(startDate, 'more', eYear, eMonth, eDate)) {
              setState({
                endDate: undefined
              });
            }
          }
        }
      }
    }

    if (type === 'end') {
      var _placeholderChar = endInputOptions.placeholderChar ? endInputOptions.placeholderChar : '_';

      if (val && !val.includes(_placeholderChar)) {
        var _d = translateToDate(inputFormat, val, validators);

        if (_d) setState({
          endDate: _d
        });
      }
    }
  };

  var onBlurHandler = function onBlurHandler(_e, val, type) {
    setState({
      init: true
    });

    if (type === 'start') {
      var _startInputOptions$pl = startInputOptions.placeholderChar,
          placeholderChar = _startInputOptions$pl === void 0 ? '_' : _startInputOptions$pl;
      if (!val || val.includes(placeholderChar)) setState({
        startDate: undefined
      });
    }

    if (type === 'end') {
      var _endInputOptions$plac = endInputOptions.placeholderChar,
          _placeholderChar2 = _endInputOptions$plac === void 0 ? '_' : _endInputOptions$plac;

      if (!val || val.includes(_placeholderChar2)) setState({
        endDate: undefined
      });
    }
  };

  var onClearHandler = function onClearHandler(type) {
    setState({
      init: true
    });

    if (type === 'start') {
      setState({
        startDate: undefined
      });
      updateNav('end');
    }

    if (type === 'end') {
      setState({
        endDate: undefined
      });
      updateNav('start');
    }
  };

  var onClickHandler = function onClickHandler(type) {
    var open = state.open;

    if (!open) {
      updateNav(type);
    }
  };

  var mask = date[inputFormat];
  var startPlaceholderChar = startInputOptions.placeholderChar || '_';
  var endPlaceholderChar = endInputOptions.placeholderChar || '_';
  var showStartError = startInputOptions.error || startInputOptions.required && startError && init;
  var showEndError = endInputOptions.error || endInputOptions.required && endError && init;
  var startErrorMessage = startInputOptions.caption === undefined ? 'Invalid value' : startInputOptions.caption;
  var endErrorMessage = endInputOptions.caption === undefined ? 'Invalid value' : endInputOptions.caption;
  var startLabel = startInputOptions.label;
  var endLabel = endInputOptions.label;

  var inputValidator = function inputValidator(val) {
    return isValid(validators, val, inputFormat);
  };

  return /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Column, {
    size: '6',
    sizeXS: '12',
    className: "DateRangePicker-input DateRangePicker-input--startDate"
  }, startLabel && /*#__PURE__*/React.createElement(Label, {
    required: startInputOptions.required,
    withInput: true
  }, startLabel), /*#__PURE__*/React.createElement(InputMask, _extends$3({
    icon: "events",
    placeholder: inputFormat
  }, startInputOptions, {
    mask: mask,
    value: startDate ? translateToString(inputFormat, startDate) // @ts-ignore
    : init ? InputMask.utils.getDefaultValue(mask, startPlaceholderChar) : '',
    onChange: function onChange(e, val) {
      onChangeHandler(e, val || '', 'start');
    },
    onBlur: function onBlur(e, val) {
      onBlurHandler(e, val || '', 'start');
    },
    onClear: function onClear() {
      return onClearHandler('start');
    },
    onClick: function onClick() {
      return onClickHandler('start');
    },
    error: showStartError,
    caption: showStartError ? startErrorMessage : '',
    validators: [inputValidator],
    clearOnEmptyBlur: false
  }))), /*#__PURE__*/React.createElement(Column, {
    size: '6',
    sizeXS: '12',
    className: "DateRangePicker-input DateRangePicker-input--endDate"
  }, endLabel && /*#__PURE__*/React.createElement(Label, {
    required: endInputOptions.required,
    withInput: true
  }, endLabel), /*#__PURE__*/React.createElement(InputMask, _extends$3({
    icon: "events",
    placeholder: inputFormat
  }, endInputOptions, {
    mask: mask,
    value: endDate ? translateToString(inputFormat, endDate) // @ts-ignore
    : init ? InputMask.utils.getDefaultValue(mask, endPlaceholderChar) : '',
    onChange: function onChange(e, val) {
      onChangeHandler(e, val || '', 'end');
    },
    onBlur: function onBlur(e, val) {
      onBlurHandler(e, val || '', 'end');
    },
    onClear: function onClear() {
      return onClearHandler('end');
    },
    onClick: function onClick() {
      return onClickHandler('end');
    },
    error: showEndError,
    caption: showEndError ? endErrorMessage : '',
    validators: [inputValidator],
    clearOnEmptyBlur: false
  }))));
};

var SingleInputTrigger = function SingleInputTrigger(props) {
  var inputFormat = props.inputFormat,
      inputOptions = props.inputOptions,
      validators = props.validators,
      state = props.state,
      setState = props.setState;
  var init = state.init,
      startDate = state.startDate,
      endDate = state.endDate,
      startValue = state.startValue,
      endValue = state.endValue,
      startError = state.startError,
      endError = state.endError;
  var mask = rangeDate[inputFormat];
  var showError = inputOptions.error || inputOptions.required && (startError || endError) && init;
  var errorMessage = inputOptions.caption === undefined ? 'Invalid value' : inputOptions.caption;
  var label = inputOptions.label;
  var _inputOptions$placeho = inputOptions.placeholderChar,
      placeholderChar = _inputOptions$placeho === void 0 ? '_' : _inputOptions$placeho; // @ts-ignore

  var defaultValue = InputMask.utils.getDefaultValue(mask, placeholderChar).split(' - ');
  var sValue = startValue || defaultValue[0];
  var eValue = endValue || defaultValue[1];

  var inputValidator = function inputValidator(val) {
    var _val$split = val.split(' - '),
        _val$split2 = _slicedToArray(_val$split, 2),
        startVal = _val$split2[0],
        endVal = _val$split2[1];

    return isValid(validators, startVal, inputFormat) && isValid(validators, endVal, inputFormat);
  };

  var onChangeHandler = function onChangeHandler(_e, val) {
    var date = val.split(' - ');
    var startVal = date[0];
    var endVal = date[1];

    if (startValue !== startVal && startVal && !startVal.includes(placeholderChar)) {
      var startD = translateToDate(inputFormat, startVal, validators);

      if (startD) {
        var isEndDateValid = endValue && !endValue.includes(placeholderChar);
        setState({
          startDate: startD,
          endDate: isEndDateValid ? endDate : undefined
        });

        if (endDate) {
          var _getDateInfo = getDateInfo(endDate),
              eYear = _getDateInfo.year,
              eMonth = _getDateInfo.month,
              eDate = _getDateInfo.date;

          if (compareDate(startDate, 'more', eYear, eMonth, eDate)) {
            setState({
              endDate: undefined
            });
          }
        }
      }
    }

    if (endValue !== endVal && endVal && !endVal.includes(placeholderChar)) {
      var endD = translateToDate(inputFormat, endVal, validators);
      var isStartDateValid = startValue && !startValue.includes(placeholderChar);

      if (endD) {
        setState({
          endDate: endD,
          startDate: isStartDateValid ? startDate : undefined
        });
      }
    }

    setState({
      startValue: startVal,
      endValue: endVal
    });
  };

  var onBlurHandler = function onBlurHandler(_e, val) {
    setState({
      init: true
    });
    var date = val.split(' - ');
    var startVal = date[0];
    var endVal = date[1];
    if (!startVal || startVal.includes(placeholderChar)) setState({
      startDate: undefined
    });
    if (!endVal || endVal.includes(placeholderChar)) setState({
      endDate: undefined
    });
  };

  var onClearHandler = function onClearHandler() {
    setState({
      init: true,
      startDate: undefined,
      endDate: undefined,
      yearNav: undefined,
      monthNav: undefined
    });
  };

  return /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Column, null, label && /*#__PURE__*/React.createElement(Label, {
    required: inputOptions.required,
    withInput: true
  }, label), /*#__PURE__*/React.createElement(InputMask, _extends$3({
    icon: "events",
    placeholder: "".concat(inputFormat, " - ").concat(inputFormat)
  }, inputOptions, {
    mask: mask,
    value: !startDate && !endDate && !init ? undefined : "".concat(sValue, " - ").concat(eValue),
    onChange: function onChange(e, val) {
      onChangeHandler(e, val || '');
    },
    onBlur: function onBlur(e, val) {
      onBlurHandler(e, val || '');
    },
    onClear: onClearHandler,
    error: showError,
    caption: showError ? errorMessage : '',
    validators: [inputValidator],
    clearOnEmptyBlur: false
  }))));
};

var setDate = function setDate(date) {
  var d = new Date();
  return new Date(d.setDate(date));
};

var getCurrentYear = function getCurrentYear() {
  var current = new Date();
  var currentYear = current.getFullYear();
  return currentYear;
};
var getCurrentMonth = function getCurrentMonth() {
  var current = new Date();
  var currentMonth = current.getMonth();
  return currentMonth;
};
var getCurrentWeek = function getCurrentWeek() {
  var current = new Date();
  var currentDate = current.getDate();
  var currentDay = current.getDay();
  return {
    startDate: setDate(currentDate - currentDay + 1),
    endDate: setDate(currentDate - currentDay + 7)
  };
};
var getPreviousWeek = function getPreviousWeek() {
  var current = new Date();
  var currentDate = current.getDate();
  var currentDay = current.getDay();
  return {
    startDate: setDate(currentDate - currentDay - 6),
    endDate: setDate(currentDate - currentDay)
  };
};
var getPreviousMonth = function getPreviousMonth() {
  var current = new Date();
  var currentYear = current.getFullYear();
  var currentMonth = current.getMonth();
  return {
    endDate: new Date(currentYear, currentMonth, 0),
    startDate: new Date(currentYear - +(currentMonth < 0), (currentMonth + 11) % 12, 1)
  };
};
var getPrevious90Days = function getPrevious90Days() {
  var current = new Date();
  var currentDate = current.getDate();
  return {
    startDate: setDate(currentDate - 90),
    endDate: setDate(currentDate)
  };
};
var getCustomDates = function getCustomDates() {
  var current = new Date();
  var currentDate = current.getDate();
  return {
    startDate: setDate(currentDate),
    endDate: setDate(currentDate)
  };
};

var DateRangePicker = /*#__PURE__*/function (_React$Component) {
  _inherits$1(DateRangePicker, _React$Component);

  var _super = _createSuper$1(DateRangePicker);

  function DateRangePicker(props) {
    var _this;

    _classCallCheck$1(this, DateRangePicker);

    _this = _super.call(this, props);

    _defineProperty$2(_assertThisInitialized$2(_this), "monthsInView", void 0);

    _defineProperty$2(_assertThisInitialized$2(_this), "getDate", function (startDate, endDate) {
      var inputFormat = _this.props.inputFormat;
      var startVal = startDate ? translateToString(inputFormat, startDate) : '';
      var endVal = endDate ? translateToString(inputFormat, endDate) : '';
      return {
        startValue: startVal,
        endValue: endVal
      };
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "getErrors", function (startDate, endDate) {
      var isError = function isError(date) {
        var _this$props = _this.props,
            disabledBefore = _this$props.disabledBefore,
            disabledAfter = _this$props.disabledAfter;

        var _getDateInfo = getDateInfo(disabledBefore),
            dbYear = _getDateInfo.year,
            dbMonth = _getDateInfo.month,
            dbDate = _getDateInfo.date;

        var _getDateInfo2 = getDateInfo(disabledAfter),
            daYear = _getDateInfo2.year,
            daMonth = _getDateInfo2.month,
            daDate = _getDateInfo2.date;

        return !date ? true : compareDate(date, 'less', dbYear, dbMonth, dbDate) || compareDate(date, 'more', daYear, daMonth, daDate);
      };

      var startError = isError(startDate);
      var endError = isError(endDate);

      var _getDateInfo3 = getDateInfo(endDate),
          eYear = _getDateInfo3.year,
          eMonth = _getDateInfo3.month,
          eDate = _getDateInfo3.date;

      if (compareDate(startDate, 'more', eYear, eMonth, eDate)) {
        startError = true;
        endError = true;
      }

      return {
        startError: startError,
        endError: endError
      };
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "getInRangeError", function () {
      var rangeLimit = _this.props.rangeLimit;

      if (rangeLimit) {
        var _this$state = _this.state,
            _startDate2 = _this$state.startDate,
            _endDate2 = _this$state.endDate;

        var _getDateInfo4 = getDateInfo(_startDate2),
            sYear = _getDateInfo4.year,
            sMonth = _getDateInfo4.month,
            sDate = _getDateInfo4.date;

        var _getDateInfo5 = getDateInfo(_endDate2),
            eYear = _getDateInfo5.year,
            eMonth = _getDateInfo5.month,
            eDate = _getDateInfo5.date;

        var limitDate;

        if (_startDate2) {
          limitDate = new Date(_startDate2);
          limitDate.setDate(sDate + rangeLimit);
          return compareDate(limitDate, 'less', eYear, eMonth, eDate + 1);
        }

        if (_endDate2) {
          limitDate = new Date(_endDate2);
          limitDate.setDate(eDate - rangeLimit);
          return compareDate(limitDate, 'more', sYear, sMonth, sDate - 1);
        }
      }

      return false;
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "onRangeChangeHandler", function (sDate, eDate) {
      _this.setState({
        init: true,
        startDate: sDate,
        endDate: eDate,
        startValue: sDate ? translateToString(_this.props.inputFormat, sDate) : '',
        endValue: eDate ? translateToString(_this.props.inputFormat, eDate) : ''
      });
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "onToggleHandler", function (o, type) {
      switch (type) {
        case 'outsideClick':
          _this.setState({
            open: o
          });

          break;

        case 'onClick':
          _this.setState({
            open: true
          });

          break;
      }
    });

    var _inputFormat = props.inputFormat,
        validators = props.validators;

    var _startDate = convertToDate(props.startDate, _inputFormat, validators);

    var _endDate = convertToDate(props.endDate, _inputFormat, validators);

    var _this$getDate = _this.getDate(_startDate, _endDate),
        startValue = _this$getDate.startValue,
        endValue = _this$getDate.endValue;

    var _this$getErrors = _this.getErrors(_startDate, _endDate),
        _startError = _this$getErrors.startError,
        _endError = _this$getErrors.endError;

    _this.state = {
      startDate: _startDate,
      endDate: _endDate,
      startValue: startValue,
      endValue: endValue,
      startError: _startError,
      endError: _endError,
      init: false,
      open: props.open || false,
      yearNav: props.yearNav,
      monthNav: props.monthNav
    };
    _this.monthsInView = props.monthsInView || (props.withInput ? 2 : 1);
    return _this;
  }

  _createClass$1(DateRangePicker, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.startDate !== this.props.startDate) {
        var _this$props2 = this.props,
            inputFormat = _this$props2.inputFormat,
            validators = _this$props2.validators;
        var d = convertToDate(this.props.startDate, inputFormat, validators);
        var val = translateToString(inputFormat, d);
        this.setState({
          startDate: d,
          startValue: val
        });
      }

      if (prevProps.endDate !== this.props.endDate) {
        var _this$props3 = this.props,
            _inputFormat2 = _this$props3.inputFormat,
            _validators = _this$props3.validators;

        var _d = convertToDate(this.props.endDate, _inputFormat2, _validators);

        var _val = translateToString(_inputFormat2, _d);

        this.setState({
          endDate: _d,
          endValue: _val
        });
      }

      if (prevProps.open !== this.props.open) {
        this.setState({
          open: this.props.open || false
        });
      }

      if (prevProps.yearNav !== this.props.yearNav) {
        this.setState({
          yearNav: this.props.yearNav
        });
      }

      if (prevProps.monthNav !== this.props.monthNav) {
        this.setState({
          monthNav: this.props.monthNav
        });
      }

      if (prevState.startDate !== this.state.startDate || prevState.endDate !== this.state.endDate) {
        var _this$props4 = this.props,
            onRangeChange = _this$props4.onRangeChange,
            outputFormat = _this$props4.outputFormat;
        var _this$state2 = this.state,
            _startDate3 = _this$state2.startDate,
            _endDate3 = _this$state2.endDate;

        var _this$getErrors2 = this.getErrors(_startDate3, _endDate3),
            startError = _this$getErrors2.startError,
            endError = _this$getErrors2.endError;

        this.setState({
          startError: startError,
          endError: endError
        });

        if (onRangeChange) {
          var inRangeError = this.getInRangeError();
          var sValue = translateToString(outputFormat, _startDate3);
          var eValue = translateToString(outputFormat, _endDate3);

          if (!inRangeError && !startError && !endError) {
            onRangeChange(_startDate3, _endDate3, sValue, eValue);
          } else {
            if (!startError) onRangeChange(_startDate3, undefined, sValue, eValue);else if (!endError) onRangeChange(undefined, _endDate3, sValue, eValue);else onRangeChange(undefined, undefined, sValue, eValue);
          }
        }
      }
    }
  }, {
    key: "renderCalendar",
    value: function renderCalendar() {
      var _this$props5 = this.props;
          _this$props5.startDate;
          _this$props5.endDate;
          _this$props5.yearNav;
          _this$props5.monthNav;
          _this$props5.open;
          var inputFormat = _this$props5.inputFormat;
          _this$props5.outputFormat;
          _this$props5.startInputOptions;
          _this$props5.endInputOptions;
          var validators = _this$props5.validators;
          _this$props5.withInput;
          _this$props5.position;
          var disabledBefore = _this$props5.disabledBefore,
          disabledAfter = _this$props5.disabledAfter;
          _this$props5.onRangeChange;
          var rangeLimit = _this$props5.rangeLimit,
          rest = _objectWithoutProperties$1(_this$props5, ["startDate", "endDate", "yearNav", "monthNav", "open", "inputFormat", "outputFormat", "startInputOptions", "endInputOptions", "validators", "withInput", "position", "disabledBefore", "disabledAfter", "onRangeChange", "rangeLimit"]);

      var _this$state3 = this.state,
          startDate = _this$state3.startDate,
          endDate = _this$state3.endDate,
          yearNav = _this$state3.yearNav,
          monthNav = _this$state3.monthNav;
      return /*#__PURE__*/React.createElement(Calendar, _extends$3({}, rest, {
        monthsInView: this.monthsInView,
        rangePicker: true,
        startDate: convertToDate(startDate, inputFormat, validators),
        endDate: convertToDate(endDate, inputFormat, validators),
        disabledBefore: convertToDate(disabledBefore, inputFormat, validators),
        disabledAfter: convertToDate(disabledAfter, inputFormat, validators),
        onRangeChange: this.onRangeChangeHandler,
        yearNav: yearNav,
        monthNav: monthNav,
        rangeLimit: rangeLimit
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props6 = this.props,
          withInput = _this$props6.withInput,
          startInputOptions = _this$props6.startInputOptions,
          endInputOptions = _this$props6.endInputOptions,
          inputOptions = _this$props6.inputOptions,
          inputFormat = _this$props6.inputFormat,
          position = _this$props6.position,
          validators = _this$props6.validators,
          singleInput = _this$props6.singleInput,
          contentAlign = _this$props6.contentAlign,
          children = _this$props6.children;
      var open = this.state.open;
      var RangePickerClass = classnames((_classNames = {}, _defineProperty$2(_classNames, 'DateRangePicker', true), _defineProperty$2(_classNames, "DateRangePicker--".concat(contentAlign), contentAlign), _classNames));

      if (withInput) {
        var trigger = singleInput ? /*#__PURE__*/React.createElement(SingleInputTrigger, {
          inputFormat: inputFormat,
          inputOptions: inputOptions,
          validators: validators,
          state: this.state,
          setState: this.setState.bind(this)
        }) : /*#__PURE__*/React.createElement(Trigger, {
          inputFormat: inputFormat,
          startInputOptions: startInputOptions,
          endInputOptions: endInputOptions,
          validators: validators,
          state: this.state,
          setState: this.setState.bind(this)
        });
        return /*#__PURE__*/React.createElement(Popover, {
          trigger: trigger,
          triggerClass: "w-100",
          className: RangePickerClass,
          position: position,
          appendToBody: true,
          open: open,
          onToggle: this.onToggleHandler
        }, children, this.renderCalendar());
      }

      return this.renderCalendar();
    }
  }]);

  return DateRangePicker;
}(React.Component); // @ts-ignore

_defineProperty$2(DateRangePicker, "defaultProps", _objectSpread2(_objectSpread2({}, Calendar.defaultProps), {}, {
  children: /*#__PURE__*/React.createElement(React.Fragment, null),
  contentAlign: 'left',
  monthsInView: undefined,
  position: 'bottom-start',
  inputFormat: 'mm/dd/yyyy',
  outputFormat: 'mm/dd/yyyy',
  validators: [date$1],
  inputOptions: {
    label: 'Date'
  },
  startInputOptions: {
    label: 'Start Date'
  },
  endInputOptions: {
    label: 'End Date'
  }
}));

DateRangePicker.utils = {
  getCurrentWeek: getCurrentWeek,
  getPreviousWeek: getPreviousWeek,
  getPreviousMonth: getPreviousMonth,
  getPrevious90Days: getPrevious90Days,
  getCustomDates: getCustomDates,
  getCurrentYear: getCurrentYear,
  getCurrentMonth: getCurrentMonth
};

var TabsWrapper = function TabsWrapper(props) {
  var children = props.children,
      onTabChange = props.onTabChange,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var tabs = Array.isArray(children) ? children : [children];
  var totalTabs = tabs.length;

  var _React$useState = React.useState(props.active && props.active < totalTabs ? props.active : 0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      active = _React$useState2[0],
      setActiveTab = _React$useState2[1];

  React.useEffect(function () {
    setActiveTab(props.active && props.active < totalTabs ? props.active : 0);
  }, [props.active]);
  var wrapperClass = classnames(_defineProperty$2({}, 'TabsWrapper', true), className);

  var tabClickHandler = function tabClickHandler(tabIndex) {
    setActiveTab(tabIndex);
    if (onTabChange) onTabChange(tabIndex);
  };

  var TabsHeader = tabs.map(function (child, index) {
    var _classNames2;

    var _child$props = child.props,
        label = _child$props.label,
        disabled = _child$props.disabled;
    var tabHeaderClass = classnames((_classNames2 = {}, _defineProperty$2(_classNames2, 'Tab', true), _defineProperty$2(_classNames2, 'Tab--disabled', disabled), _defineProperty$2(_classNames2, 'Tab--active', !disabled && active === index), _classNames2));
    return /*#__PURE__*/React.createElement("div", {
      "data-test": "DesignSystem-Tabs--Header",
      key: index,
      className: tabHeaderClass,
      onClick: function onClick() {
        return !disabled && tabClickHandler(index);
      }
    }, label);
  });
  return /*#__PURE__*/React.createElement("div", _extends$3({
    "data-test": "DesignSystem-TabsWrapper"
  }, baseProps, {
    className: wrapperClass
  }), /*#__PURE__*/React.createElement("div", {
    className: "TabsWrapper-header"
  }, TabsHeader), /*#__PURE__*/React.createElement("div", {
    className: "TabsWrapper-content",
    "data-test": "DesignSystem-Tabs--Content"
  }, tabs[active]));
};
TabsWrapper.displayName = 'TabsWrapper';

var Tab = function Tab(props) {
  var children = props.children;
  return /*#__PURE__*/React.createElement(React.Fragment, null, children);
};
Tab.displayName = 'Tab';

var Tabs = function Tabs(props) {
  var _classNames;

  var tabs = props.tabs,
      withSeperator = props.withSeperator,
      onTabChange = props.onTabChange,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var totalTabs = tabs.length;

  var _React$useState = React.useState(props.activeIndex && props.activeIndex < totalTabs ? props.activeIndex : 0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      activeIndex = _React$useState2[0],
      setActiveTab = _React$useState2[1];

  React.useEffect(function () {
    if (props.activeIndex !== undefined && props.activeIndex < totalTabs) {
      setActiveTab(props.activeIndex);
    }
  }, [props.activeIndex]);
  var tabsClass = classnames((_classNames = {}, _defineProperty$2(_classNames, 'Tabs', true), _defineProperty$2(_classNames, 'Tabs--withSeperator', withSeperator), _classNames), className);

  var getPillsClass = function getPillsClass(disabled) {
    var _classNames2;

    return classnames((_classNames2 = {}, _defineProperty$2(_classNames2, 'Tabs-pills', true), _defineProperty$2(_classNames2, 'Tabs-pills--disabled', disabled), _classNames2));
  };

  var tabClickHandler = function tabClickHandler(tabIndex) {
    if (props.activeIndex === undefined) setActiveTab(tabIndex);
    if (onTabChange) onTabChange(tabIndex);
  };

  var renderInfo = function renderInfo(tab, index) {
    var count = tab.count,
        icon = tab.icon,
        disabled = tab.disabled;

    if (count !== undefined) {
      return /*#__PURE__*/React.createElement(Pills, {
        "data-test": "DesignSystem-Tabs--Pills",
        className: getPillsClass(disabled),
        appearance: activeIndex === index ? 'primary' : 'secondary'
      }, count);
    }

    if (icon) {
      var iconAppearance = activeIndex === index ? 'info' : disabled ? 'disabled' : 'subtle';
      return /*#__PURE__*/React.createElement(Icon, {
        "data-test": "DesignSystem-Tabs--Icon",
        className: "mr-4",
        name: icon,
        appearance: iconAppearance
      });
    }

    return null;
  };

  var renderTabs = function renderTabs() {
    return tabs.map(function (tab, index) {
      var _classNames3;

      var label = tab.label,
          disabled = tab.disabled;
      var textAppearance = activeIndex === index ? 'link' : disabled ? 'disabled' : 'subtle';
      var tabHeaderClass = classnames((_classNames3 = {}, _defineProperty$2(_classNames3, 'Tab', true), _defineProperty$2(_classNames3, 'Tab--disabled', disabled), _defineProperty$2(_classNames3, 'Tab--active', !disabled && activeIndex === index), _classNames3));
      return /*#__PURE__*/React.createElement("div", {
        "data-test": "DesignSystem-Tabs--Tab",
        key: index,
        className: tabHeaderClass,
        onClick: function onClick() {
          return !disabled && tabClickHandler(index);
        }
      }, renderInfo(tab, index), /*#__PURE__*/React.createElement(Text, {
        "data-test": "DesignSystem-Tabs--Text",
        appearance: textAppearance
      }, label));
    });
  };

  return /*#__PURE__*/React.createElement("div", _extends$3({
    "data-test": "DesignSystem-Tabs"
  }, baseProps, {
    className: tabsClass
  }), renderTabs());
};
Tabs.displayName = 'Tabs';

var accepts = function accepts(file, acceptedFiles) {
  if (file && acceptedFiles) {
    var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
    var fileName = file.name || '';
    var mimeType = (file.type || '').toLowerCase();
    var baseMimeType = mimeType.replace(/\/.*$/, '');
    return acceptedFilesArray.some(function (type) {
      var validType = type.trim().toLowerCase();

      if (validType.charAt(0) === '.') {
        return fileName.toLowerCase().endsWith(validType);
      }

      if (validType.endsWith('/*')) {
        return baseMimeType === validType.replace(/\/.*$/, '');
      }

      return mimeType === validType;
    });
  }

  return true;
};
var isPropagationStopped = function isPropagationStopped(event) {
  if (typeof event.isPropagationStopped === 'function') {
    return event.isPropagationStopped();
  }

  if (typeof event.cancelBubble !== 'undefined') {
    return event.cancelBubble;
  }

  return false;
};
var isEvtWithFiles = function isEvtWithFiles(event) {
  if (!event.dataTransfer) {
    return !!event.target && !!event.target.files;
  }

  return Array.prototype.some.call(event.dataTransfer.types, function (type) {
    return type === 'Files' || type === 'application/x-moz-file';
  });
};
var onDocumentDragOver = function onDocumentDragOver(event) {
  event.preventDefault();
};
var composeEventHandlers = function composeEventHandlers() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (event) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return fns.some(function (fn) {
      if (!isPropagationStopped(event) && fn) {
        fn.apply(void 0, [event].concat(args));
      }

      return isPropagationStopped(event);
    });
  };
};
var reducer = function reducer(state, action) {
  switch (action.type) {
    case 'focus':
      return _objectSpread2(_objectSpread2({}, state), {}, {
        isFocused: true
      });

    case 'blur':
      return _objectSpread2(_objectSpread2({}, state), {}, {
        isFocused: false
      });

    case 'openDialog':
      return _objectSpread2(_objectSpread2({}, state), {}, {
        isFileDialogActive: true
      });

    case 'closeDialog':
      return _objectSpread2(_objectSpread2({}, state), {}, {
        isFileDialogActive: false
      });

    case 'setDraggedFiles':
      /* eslint no-case-declarations: 0 */
      var isDragActive = action.isDragActive,
          draggedFiles = action.draggedFiles;
      return _objectSpread2(_objectSpread2({}, state), {}, {
        draggedFiles: draggedFiles,
        isDragActive: isDragActive
      });

    case 'setFiles':
      return _objectSpread2(_objectSpread2({}, state), {}, {
        acceptedFiles: action.acceptedFiles,
        fileRejections: action.fileRejections
      });

    case 'reset':
      return _objectSpread2(_objectSpread2({}, state), {}, {
        isFileDialogActive: false,
        isDragActive: false,
        draggedFiles: [],
        acceptedFiles: [],
        fileRejections: []
      });

    default:
      return state;
  }
};

var fileErrorMessages = {
  FILE_INVALID_TYPE: 'File format not accepted',
  FILE_TOO_LARGE: 'File is too large',
  FILE_TOO_SMALL: 'File is too small',
  TOO_MANY_FILES: 'Multiple files are not accepted'
};

var isDefined = function isDefined(value) {
  return value !== undefined && value !== null;
};

var getInvalidTypeRejectionErr = function getInvalidTypeRejectionErr(accept) {
  var updatedAccept = Array.isArray(accept) && accept.length === 1 ? accept[0] : accept;
  var messageSuffix = Array.isArray(updatedAccept) ? "one of ".concat(updatedAccept.join(', ')) : updatedAccept;
  return {
    type: 'FILE_INVALID_TYPE',
    message: "File type must be ".concat(messageSuffix)
  };
};
var getTooLargeRejectionErr = function getTooLargeRejectionErr(maxSize) {
  return {
    type: 'FILE_TOO_LARGE',
    message: "File is larger than ".concat(maxSize, " bytes")
  };
};
var getTooSmallRejectionErr = function getTooSmallRejectionErr(minSize) {
  return {
    type: 'FILE_TOO_SMALL',
    message: "File is smaller than ".concat(minSize, " bytes")
  };
};
var fileAccepted = function fileAccepted(file, accept) {
  var isAcceptable = file.type === 'application/x-moz-file' || accepts(file, accept);
  return [isAcceptable, isAcceptable ? null : getInvalidTypeRejectionErr(accept)];
};
var fileMatchSize = function fileMatchSize(file, minSize, maxSize) {
  if (isDefined(file.size)) {
    if (isDefined(minSize) && isDefined(maxSize)) {
      if (file.size > maxSize) return [false, getTooLargeRejectionErr(maxSize)];
      if (file.size < minSize) return [false, getTooSmallRejectionErr(minSize)];
    } else if (isDefined(minSize) && file.size < minSize) {
      return [false, getTooSmallRejectionErr(minSize)];
    } else if (isDefined(maxSize) && file.size > maxSize) {
      return [false, getTooLargeRejectionErr(maxSize)];
    }
  }

  return [true, null];
};
var getFileError = function getFileError(options) {
  var files = options.files,
      accept = options.accept,
      minSize = options.minSize,
      maxSize = options.maxSize,
      multiple = options.multiple;

  if (!multiple && files.length > 1) {
    return 'TOO_MANY_FILES';
  }

  var typeError = files.every(function (file) {
    var _fileAccepted = fileAccepted(file, accept),
        _fileAccepted2 = _slicedToArray(_fileAccepted, 1),
        accepted = _fileAccepted2[0];

    return !accepted;
  });
  var sizeError = files.every(function (file) {
    var _fileMatchSize = fileMatchSize(file, minSize, maxSize),
        _fileMatchSize2 = _slicedToArray(_fileMatchSize, 1),
        sizeMatch = _fileMatchSize2[0];

    return !sizeMatch;
  });
  return typeError ? 'FILE_INVALID_TYPE' : sizeError ? 'FILE_TOO_LARGE' : '';
};
var allFilesAccepted = function allFilesAccepted(options) {
  var files = options.files,
      accept = options.accept,
      minSize = options.minSize,
      maxSize = options.maxSize,
      multiple = options.multiple;

  if (!multiple && files.length > 1) {
    return false;
  }

  return files.every(function (file) {
    var _fileAccepted3 = fileAccepted(file, accept),
        _fileAccepted4 = _slicedToArray(_fileAccepted3, 1),
        accepted = _fileAccepted4[0];

    var _fileMatchSize3 = fileMatchSize(file, minSize, maxSize),
        _fileMatchSize4 = _slicedToArray(_fileMatchSize3, 1),
        sizeMatch = _fileMatchSize4[0];

    return accepted && sizeMatch;
  });
};

var COMMON_MIME_TYPES = new Map([['avi', 'video/avi'], ['gif', 'image/gif'], ['ico', 'image/x-icon'], ['jpeg', 'image/jpeg'], ['jpg', 'image/jpeg'], ['mkv', 'video/x-matroska'], ['mov', 'video/quicktime'], ['mp4', 'video/mp4'], ['pdf', 'application/pdf'], ['png', 'image/png'], ['zip', 'application/zip'], ['doc', 'application/msword'], ['docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']]);
var FILES_TO_IGNORE = ['.DS_Store', 'Thumbs.db'];
function fromEvent(_x) {
  return _fromEvent.apply(this, arguments);
}

function _fromEvent() {
  _fromEvent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(evt) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", isDragEvt(evt) && evt.dataTransfer ? getDataTransferFiles(evt.dataTransfer, evt.type) : getInputFiles(evt));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _fromEvent.apply(this, arguments);
}

function isDragEvt(value) {
  return !!value.dataTransfer;
}

function toFileWithPath(file, path) {
  var f = withMimeType(file);

  if (typeof f.path !== 'string') {
    var _ref = file,
        webkitRelativePath = _ref.webkitRelativePath;
    Object.defineProperty(f, 'path', {
      value: typeof path === 'string' ? path : typeof webkitRelativePath === 'string' && webkitRelativePath.length > 0 ? webkitRelativePath : file.name,
      writable: false,
      configurable: false,
      enumerable: true
    });
  }

  return f;
}

function withMimeType(file) {
  var name = file.name;
  var hasExtension = name && name.lastIndexOf('.') !== -1;

  if (hasExtension && !file.type) {
    var ext = name.split('.').pop().toLowerCase();
    var type = COMMON_MIME_TYPES.get(ext);

    if (type) {
      Object.defineProperty(file, 'type', {
        value: type,
        writable: false,
        configurable: false,
        enumerable: true
      });
    }
  }

  return file;
}

function getInputFiles(evt) {
  var files = isInput(evt.target) ? evt.target.files ? fromList(evt.target.files) : [] : [];
  return files.map(function (file) {
    return toFileWithPath(file);
  });
}

function isInput(value) {
  return value !== null;
}

function getDataTransferFiles(_x2, _x3) {
  return _getDataTransferFiles.apply(this, arguments);
}

function _getDataTransferFiles() {
  _getDataTransferFiles = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dt, type) {
    var items, files;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!dt.items) {
              _context3.next = 8;
              break;
            }

            items = fromList(dt.items).filter(function (item) {
              return item.kind === 'file';
            });

            if (!(type !== 'drop')) {
              _context3.next = 4;
              break;
            }

            return _context3.abrupt("return", items);

          case 4:
            _context3.next = 6;
            return Promise.all(items.map(toFilePromises));

          case 6:
            files = _context3.sent;
            return _context3.abrupt("return", noIgnoredFiles(flatten(files)));

          case 8:
            return _context3.abrupt("return", noIgnoredFiles(fromList(dt.files).map(function (file) {
              return toFileWithPath(file);
            })));

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getDataTransferFiles.apply(this, arguments);
}

function noIgnoredFiles(files) {
  return files.filter(function (file) {
    return FILES_TO_IGNORE.indexOf(file.name) === -1;
  });
}

function fromList(items) {
  var files = []; // tslint:disable: prefer-for-of

  for (var i = 0; i < items.length; i++) {
    var file = items[i];
    files.push(file);
  }

  return files;
}

function toFilePromises(item) {
  if (typeof item.webkitGetAsEntry !== 'function') {
    return fromDataTransferItem(item);
  }

  var entry = item.webkitGetAsEntry();

  if (entry && entry.isDirectory) {
    return fromDirEntry(entry);
  }

  return fromDataTransferItem(item);
}

function flatten(items) {
  return items.reduce(function (acc, files) {
    return [].concat(_toConsumableArray(acc), _toConsumableArray(Array.isArray(files) ? flatten(files) : [files]));
  }, []);
}

function fromDataTransferItem(item) {
  var file = item.getAsFile();

  if (!file) {
    return Promise.reject("".concat(item, " is not a File"));
  }

  var fwp = toFileWithPath(file);
  return Promise.resolve(fwp);
}

function fromEntry(_x4) {
  return _fromEntry.apply(this, arguments);
}

function _fromEntry() {
  _fromEntry = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(entry) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _fromEntry.apply(this, arguments);
}

function fromDirEntry(entry) {
  var reader = entry.createReader();
  return new Promise(function (resolve, reject) {
    var entries = [];

    function readEntries() {
      reader.readEntries( /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(batch) {
          var files, items;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (batch.length) {
                    _context.next = 13;
                    break;
                  }

                  _context.prev = 1;
                  _context.next = 4;
                  return Promise.all(entries);

                case 4:
                  files = _context.sent;
                  resolve(files);
                  _context.next = 11;
                  break;

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context["catch"](1);
                  reject(_context.t0);

                case 11:
                  _context.next = 16;
                  break;

                case 13:
                  items = Promise.all(batch.map(fromEntry));
                  entries.push(items); // Continue reading

                  readEntries();

                case 16:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[1, 8]]);
        }));

        return function (_x5) {
          return _ref2.apply(this, arguments);
        };
      }(), function (err) {
        reject(err);
      });
    }

    readEntries();
  });
}

function fromFileEntry(_x6) {
  return _fromFileEntry.apply(this, arguments);
}

function _fromFileEntry() {
  _fromFileEntry = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(entry) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", new Promise(function (resolve, reject) {
              entry.file(function (file) {
                var fwp = toFileWithPath(file, entry.fullPath);
                resolve(fwp);
              }, function (err) {
                reject(err);
              });
            }));

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _fromFileEntry.apply(this, arguments);
}

var initialState = {
  isFocused: false,
  isFileDialogActive: false,
  isDragActive: false,
  isDragAccept: false,
  isDragReject: false,
  draggedFiles: [],
  acceptedFiles: [],
  fileRejections: []
};
var DropzoneBase = function DropzoneBase(props) {
  var accept = props.accept,
      disabled = props.disabled,
      maxSize = props.maxSize,
      minSize = props.minSize,
      multiple = props.multiple,
      onDragEnter = props.onDragEnter,
      onDragLeave = props.onDragLeave,
      onDragOver = props.onDragOver,
      onDrop = props.onDrop,
      onDropAccepted = props.onDropAccepted,
      onDropRejected = props.onDropRejected,
      onFileDialogCancel = props.onFileDialogCancel,
      getFilesFromEvent = props.getFilesFromEvent,
      preventDropOnDocument = props.preventDropOnDocument,
      validator = props.validator;
  var rootRef = useRef(null);
  var inputRef = useRef(null);

  var _useReducer = useReducer(reducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var isFocused = state.isFocused,
      isFileDialogActive = state.isFileDialogActive,
      draggedFiles = state.draggedFiles;
  var openFileDialog = useCallback(function () {
    if (inputRef.current) {
      dispatch({
        type: 'openDialog'
      }); // @ts-ignore

      inputRef.current.value = null; // @ts-ignore

      inputRef.current.click();
    }
  }, [dispatch]);

  var onWindowFocus = function onWindowFocus() {
    if (isFileDialogActive) {
      setTimeout(function () {
        if (inputRef.current) {
          // @ts-ignore
          var _files = inputRef.current.files;

          if (!_files.length) {
            dispatch({
              type: 'closeDialog'
            });

            if (typeof onFileDialogCancel === 'function') {
              onFileDialogCancel();
            }
          }
        }
      }, 300);
    }
  };

  useEffect$2(function () {
    window.addEventListener('focus', onWindowFocus, false);
    return function () {
      window.removeEventListener('focus', onWindowFocus, false);
    };
  }, [inputRef, isFileDialogActive, onFileDialogCancel]); // Cb to open the file dialog when SPACE/ENTER occurs on the dropzone

  var onKeyDownCb = useCallback(function (event) {
    // @ts-ignore
    if (!rootRef.current || !rootRef.current.isEqualNode(event.target)) {
      return;
    }

    if (event.keyCode === 32 || event.keyCode === 13) {
      event.preventDefault();
      openFileDialog();
    }
  }, [rootRef, inputRef]); // Update focus state for the dropzone

  var onFocusCb = useCallback(function () {
    dispatch({
      type: 'focus'
    });
  }, []);
  var onBlurCb = useCallback(function () {
    dispatch({
      type: 'blur'
    });
  }, []);
  var dragTargetsRef = useRef([]);

  var onDocumentDrop = function onDocumentDrop(event) {
    // @ts-ignore
    if (rootRef.current && rootRef.current.contains(event.target)) {
      return;
    }

    event.preventDefault();
    dragTargetsRef.current = [];
  };

  useEffect$2(function () {
    if (preventDropOnDocument) {
      document.addEventListener('dragover', onDocumentDragOver, false);
      document.addEventListener('drop', onDocumentDrop, false);
    }

    return function () {
      if (preventDropOnDocument) {
        document.removeEventListener('dragover', onDocumentDragOver);
        document.removeEventListener('drop', onDocumentDrop);
      }
    };
  }, [rootRef, preventDropOnDocument]);
  var onDragEnterCb = useCallback(function (event) {
    event.preventDefault();
    event.persist(); // @ts-ignore

    dragTargetsRef.current = [].concat(_toConsumableArray(dragTargetsRef.current), [event.target]);

    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function (files) {
        if (isPropagationStopped(event)) {
          return;
        }

        dispatch({
          draggedFiles: files,
          isDragActive: true,
          type: 'setDraggedFiles'
        });

        if (onDragEnter) {
          onDragEnter(event);
        }
      });
    }
  }, [getFilesFromEvent, onDragEnter]);
  var onDragOverCb = useCallback(function (event) {
    event.preventDefault();
    event.persist();

    if (event.dataTransfer) {
      try {
        event.dataTransfer.dropEffect = 'copy';
      } catch (_unused) {}
      /* eslint-disable-line no-empty */

    }

    if (isEvtWithFiles(event) && onDragOver) {
      onDragOver(event);
    }

    return false;
  }, [onDragOver]);
  var onDragLeaveCb = useCallback(function (event) {
    event.preventDefault();
    event.persist();
    var targets = dragTargetsRef.current.filter( // @ts-ignore
    function (target) {
      return rootRef.current && rootRef.current.contains(target);
    }); // @ts-ignore

    var targetIdx = targets.indexOf(event.target);

    if (targetIdx !== -1) {
      targets.splice(targetIdx, 1);
    }

    dragTargetsRef.current = targets;

    if (targets.length > 0) {
      return;
    }

    dispatch({
      isDragActive: false,
      type: 'setDraggedFiles',
      draggedFiles: []
    });

    if (isEvtWithFiles(event) && onDragLeave) {
      onDragLeave(event);
    }
  }, [rootRef, onDragLeave]);
  var onDropCb = useCallback(function (event) {
    event.preventDefault(); // Persist here because we need the event later after getFilesFromEvent() is done

    event.persist();
    dragTargetsRef.current = [];

    if (isEvtWithFiles(event)) {
      Promise.resolve(getFilesFromEvent(event)).then(function (files) {
        if (isPropagationStopped(event)) {
          return;
        }

        var acceptedFiles = [];
        var fileRejections = [];
        files.forEach(function (file) {
          var _fileAccepted = fileAccepted(file, accept),
              _fileAccepted2 = _slicedToArray(_fileAccepted, 2),
              accepted = _fileAccepted2[0],
              acceptError = _fileAccepted2[1];

          var _fileMatchSize = fileMatchSize(file, minSize, maxSize),
              _fileMatchSize2 = _slicedToArray(_fileMatchSize, 2),
              sizeMatch = _fileMatchSize2[0],
              sizeError = _fileMatchSize2[1];

          var customErrors = validator ? validator(file) : null;

          if (accepted && sizeMatch && !customErrors) {
            acceptedFiles.push(file);
          } else {
            var errors = [acceptError, sizeError];

            if (customErrors) {
              errors = errors.concat(customErrors);
            }

            fileRejections.push({
              file: file,
              errors: errors.filter(function (e) {
                return e;
              })
            });
          }
        });
        dispatch({
          acceptedFiles: acceptedFiles,
          fileRejections: fileRejections,
          type: 'setFiles'
        });

        if (onDrop) {
          onDrop(event, acceptedFiles, fileRejections);
        }

        if (fileRejections.length > 0 && onDropRejected) {
          onDropRejected(event, fileRejections);
        }

        if (acceptedFiles.length > 0 && onDropAccepted) {
          onDropAccepted(event, acceptedFiles);
        }
      });
    }

    dispatch({
      type: 'reset'
    });
  }, [multiple, accept, minSize, maxSize, getFilesFromEvent, onDrop, onDropAccepted, onDropRejected]);

  var composeHandler = function composeHandler(fn) {
    return disabled ? null : fn;
  };

  var composeKeyboardHandler = function composeKeyboardHandler(_fn) {
    return null;
  };

  var composeDragHandler = function composeDragHandler(fn) {
    return composeHandler(fn);
  };

  var getRootProps = useMemo(function () {
    return function () {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$refKey = _ref.refKey,
          refKey = _ref$refKey === void 0 ? 'ref' : _ref$refKey,
          onKeyDown = _ref.onKeyDown,
          onFocus = _ref.onFocus,
          onBlur = _ref.onBlur;
          _ref.onClick;
          var onDragEnterCallback = _ref.onDragEnterCallback,
          onDragOverCallback = _ref.onDragOverCallback,
          onDragLeaveCallback = _ref.onDragLeaveCallback,
          onDropCallback = _ref.onDropCallback,
          rest = _objectWithoutProperties$1(_ref, ["refKey", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnterCallback", "onDragOverCallback", "onDragLeaveCallback", "onDropCallback"]);

      return _objectSpread2(_defineProperty$2({
        onKeyDown: composeKeyboardHandler(composeEventHandlers(onKeyDown, onKeyDownCb)),
        onFocus: composeKeyboardHandler(composeEventHandlers(onFocus, onFocusCb)),
        onBlur: composeKeyboardHandler(composeEventHandlers(onBlur, onBlurCb)),
        // onClick: composeHandler(composeEventHandlers(onClick, onClickCb)),
        onDragEnter: composeDragHandler(composeEventHandlers(onDragEnterCallback, onDragEnterCb)),
        onDragOver: composeDragHandler(composeEventHandlers(onDragOverCallback, onDragOverCb)),
        onDragLeave: composeDragHandler(composeEventHandlers(onDragLeaveCallback, onDragLeaveCb)),
        onDrop: composeDragHandler(composeEventHandlers(onDropCallback, onDropCb))
      }, refKey, rootRef), rest);
    };
  }, [rootRef, onKeyDownCb, onFocusCb, onBlurCb, onDragEnterCb, onDragOverCb, onDragLeaveCb, onDropCb, disabled]);
  var onInputElementClick = useCallback(function (event) {
    event.stopPropagation();
  }, []);
  var getInputProps = useMemo(function () {
    return function () {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$refKey = _ref2.refKey,
          refKey = _ref2$refKey === void 0 ? 'ref' : _ref2$refKey,
          onChange = _ref2.onChange,
          onClick = _ref2.onClick,
          rest = _objectWithoutProperties$1(_ref2, ["refKey", "onChange", "onClick"]);

      var inputProps = _defineProperty$2({
        accept: accept,
        multiple: multiple,
        type: 'file',
        style: {
          display: 'none'
        },
        onChange: composeHandler(composeEventHandlers(onChange, onDropCb)),
        onClick: composeHandler(composeEventHandlers(onClick, onInputElementClick)),
        autoComplete: 'off',
        tabIndex: -1
      }, refKey, inputRef);

      return _objectSpread2(_objectSpread2({}, inputProps), rest);
    };
  }, [inputRef, accept, multiple, onDropCb, disabled]);
  var fileCount = draggedFiles.length;
  var isDragAccept = fileCount > 0 && allFilesAccepted({
    accept: accept,
    minSize: minSize,
    maxSize: maxSize,
    multiple: multiple,
    files: draggedFiles
  });
  var isDragReject = fileCount > 0 && !isDragAccept;
  var fileError = isDragReject ? getFileError({
    accept: accept,
    minSize: minSize,
    maxSize: maxSize,
    multiple: multiple,
    files: draggedFiles
  }) : '';
  return _objectSpread2(_objectSpread2({}, state), {}, {
    isDragAccept: isDragAccept,
    isDragReject: isDragReject,
    getRootProps: getRootProps,
    getInputProps: getInputProps,
    rootRef: rootRef,
    inputRef: inputRef,
    draggedFiles: draggedFiles,
    fileError: fileError,
    isFocused: isFocused && !disabled,
    open: composeHandler(openFileDialog)
  });
};
DropzoneBase.displayName = 'DropzoneBase';
DropzoneBase.defaultProps = {
  disabled: false,
  getFilesFromEvent: fromEvent,
  maxSize: Infinity,
  minSize: 0,
  multiple: true,
  preventDropOnDocument: true,
  validator: function validator() {
    return null;
  }
};

var DropzoneActive = function DropzoneActive(props) {
  var _classNames;

  var type = props.type;
  var IconClass = classnames((_classNames = {}, _defineProperty$2(_classNames, 'Dropzone-stateIcon', true), _defineProperty$2(_classNames, "Dropzone-stateIcon--".concat(type), type), _classNames));
  return /*#__PURE__*/React.createElement(React.Fragment, null, type !== 'tight' && /*#__PURE__*/React.createElement(Icon, {
    name: "archive",
    size: 64,
    appearance: "info",
    className: IconClass
  }), /*#__PURE__*/React.createElement(Text, {
    appearance: "link",
    size: "large",
    weight: "strong"
  }, "Drop your files here"));
};
DropzoneActive.displayName = 'DropzoneActive';

var DropzoneError = function DropzoneError(props) {
  var _classNames;

  var type = props.type,
      error = props.error;
  var IconClass = classnames((_classNames = {}, _defineProperty$2(_classNames, 'Dropzone-stateIcon', true), _defineProperty$2(_classNames, "Dropzone-stateIcon--".concat(type), type), _classNames));
  return /*#__PURE__*/React.createElement(React.Fragment, null, type !== 'tight' && /*#__PURE__*/React.createElement(Icon, {
    name: "error",
    size: 64,
    appearance: "alert",
    className: IconClass
  }), /*#__PURE__*/React.createElement(Text, {
    appearance: "destructive",
    size: "large",
    weight: "strong"
  }, error));
};
DropzoneError.displayName = 'DropzoneError';

var Dropzone = function Dropzone(props) {
  var _classNames, _classNames2, _classNames3;

  var type = props.type,
      sizeLabel = props.sizeLabel,
      className = props.className,
      formatLabel = props.formatLabel,
      sampleFileLink = props.sampleFileLink,
      disabled = props.disabled;

  var _DropzoneBase = DropzoneBase(props),
      open = _DropzoneBase.open,
      getRootProps = _DropzoneBase.getRootProps,
      getInputProps = _DropzoneBase.getInputProps,
      isDragActive = _DropzoneBase.isDragActive,
      isDragReject = _DropzoneBase.isDragReject,
      fileError = _DropzoneBase.fileError;

  var baseProps = extractBaseProps(props);
  var DropzoneClass = classnames((_classNames = {}, _defineProperty$2(_classNames, 'Dropzone', true), _defineProperty$2(_classNames, "Dropzone--".concat(type), type), _defineProperty$2(_classNames, 'Dropzone--disabled', disabled), _defineProperty$2(_classNames, 'Dropzone--active', isDragActive), _defineProperty$2(_classNames, 'Dropzone--error', isDragReject), _classNames), className);
  var IconClass = classnames((_classNames2 = {}, _defineProperty$2(_classNames2, 'Dropzone-icon', true), _defineProperty$2(_classNames2, "Dropzone-icon--".concat(type), true), _defineProperty$2(_classNames2, 'Dropzone-icon--disabled', disabled), _classNames2));
  var WrapperClass = classnames((_classNames3 = {}, _defineProperty$2(_classNames3, 'DropzoneWrapper', true), _defineProperty$2(_classNames3, "DropzoneWrapper--".concat(type), true), _classNames3));

  if (isDragReject) {
    return /*#__PURE__*/React__default.createElement("div", _extends$3({}, getRootProps(), baseProps, {
      className: DropzoneClass
    }), /*#__PURE__*/React__default.createElement(DropzoneError, {
      type: type,
      error: fileErrorMessages[fileError]
    }));
  }

  if (isDragActive) {
    return /*#__PURE__*/React__default.createElement("div", _extends$3({}, getRootProps(), baseProps, {
      className: DropzoneClass
    }), /*#__PURE__*/React__default.createElement(DropzoneActive, {
      type: type
    }));
  }

  var renderDropzone = function renderDropzone() {
    if (isDragReject) return /*#__PURE__*/React__default.createElement(DropzoneError, {
      type: type,
      error: fileErrorMessages[fileError]
    });
    if (isDragActive) return /*#__PURE__*/React__default.createElement(DropzoneActive, {
      type: type
    });
    return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, type !== 'tight' && /*#__PURE__*/React__default.createElement(Icon, {
      name: "backup",
      size: 64,
      className: IconClass
    }), /*#__PURE__*/React__default.createElement("div", {
      className: WrapperClass
    }, /*#__PURE__*/React__default.createElement("span", null, /*#__PURE__*/React__default.createElement(Text, {
      size: "large",
      weight: "strong",
      className: "mr-2",
      appearance: disabled ? 'disabled' : 'default'
    }, "Drag your files here or"), /*#__PURE__*/React__default.createElement("span", {
      className: "cursor-pointer",
      onClick: open
    }, /*#__PURE__*/React__default.createElement(Text, {
      size: "large",
      weight: "strong",
      appearance: disabled ? 'disabled' : 'link'
    }, " browse files")), /*#__PURE__*/React__default.createElement("input", getInputProps())), formatLabel && /*#__PURE__*/React__default.createElement(Text, {
      appearance: disabled ? 'disabled' : 'subtle'
    }, formatLabel), sizeLabel && /*#__PURE__*/React__default.createElement(Text, {
      appearance: disabled ? 'disabled' : 'subtle'
    }, sizeLabel), sampleFileLink && /*#__PURE__*/React__default.createElement("div", {
      className: "mt-5"
    }, sampleFileLink)));
  };

  return /*#__PURE__*/React__default.createElement("div", _extends$3({}, getRootProps(), baseProps, {
    className: DropzoneClass
  }), renderDropzone());
};
Dropzone.displayName = 'Dropzone';
Dropzone.defaultProps = _objectSpread2(_objectSpread2({}, DropzoneBase.defaultProps), {}, {
  type: 'standard'
});

var FileUploaderFormat = function FileUploaderFormat(props) {
  var formatLabel = props.formatLabel;

  if (formatLabel) {
    return /*#__PURE__*/React.createElement(Text, {
      size: "small",
      appearance: "subtle",
      className: "mt-4"
    }, formatLabel);
  }

  return null;
};
FileUploaderFormat.displayName = 'FileUploaderFormat';

var FileUploaderButton = function FileUploaderButton(props) {
  var accept = props.accept,
      multiple = props.multiple,
      uploadButtonLabel = props.uploadButtonLabel,
      disabled = props.disabled,
      name = props.name,
      className = props.className,
      id = props.id,
      _onChange = props.onChange;
  var baseProps = extractBaseProps(props);
  var FileUploaderButtonClass = classnames(_defineProperty$2({}, 'FileUploaderButton', true), className);
  return /*#__PURE__*/React.createElement("div", _extends$3({}, baseProps, {
    className: FileUploaderButtonClass
  }), /*#__PURE__*/React.createElement(Button, {
    disabled: disabled,
    icon: "backup"
  }, uploadButtonLabel), /*#__PURE__*/React.createElement("input", {
    name: name,
    id: id,
    accept: accept && accept.join(', '),
    multiple: multiple,
    disabled: disabled,
    type: "file",
    tabIndex: -1,
    className: "FileUploaderButton-input",
    onChange: function onChange(event) {
      var fileList = event.target.files ? Array.from(event.target.files) : [];
      if (_onChange) _onChange(fileList, event);
    }
  }));
};
FileUploaderButton.defaultProps = {
  uploadButtonLabel: 'Upload files',
  disabled: false,
  multiple: false
};
FileUploaderButton.displayName = 'FileUploaderButton';

var FileUploader = function FileUploader(props) {
  var accept = props.accept,
      multiple = props.multiple,
      disabled = props.disabled,
      title = props.title,
      uploadButtonLabel = props.uploadButtonLabel,
      sizeLabel = props.sizeLabel,
      formatLabel = props.formatLabel,
      sampleFileLink = props.sampleFileLink,
      className = props.className,
      id = props.id,
      name = props.name,
      onChange = props.onChange;
  var baseProps = extractBaseProps(props);
  var FileUploaderClass = classnames(_defineProperty$2({}, 'FileUploader', true), className);
  return /*#__PURE__*/React.createElement("div", _extends$3({}, baseProps, {
    className: FileUploaderClass
  }), /*#__PURE__*/React.createElement(Text, {
    weight: "medium"
  }, title), /*#__PURE__*/React.createElement(FileUploaderFormat, {
    formatLabel: formatLabel
  }), /*#__PURE__*/React.createElement(Text, {
    size: "small",
    appearance: "subtle",
    className: !formatLabel ? 'mt-4' : ''
  }, sizeLabel), sampleFileLink && /*#__PURE__*/React.createElement("div", {
    className: "mt-4"
  }, sampleFileLink), /*#__PURE__*/React.createElement(FileUploaderButton, {
    id: id,
    name: name,
    accept: accept,
    multiple: multiple,
    disabled: disabled,
    uploadButtonLabel: uploadButtonLabel,
    onChange: onChange,
    className: "mt-5"
  }));
};
FileUploader.defaultProps = Object.assign({}, FileUploaderButton.defaultProps, {
  title: 'Upload files',
  sizeLabel: 'Maximum size: 25 MB'
});
FileUploader.displayName = 'FileUploader';

var FileUploaderStatus = function FileUploaderStatus(props) {
  var progress = props.progress,
      status = props.status,
      onRetry = props.onRetry;

  switch (status) {
    case 'uploading':
      return /*#__PURE__*/React.createElement(ProgressRing, {
        size: "small",
        value: progress,
        className: "mr-4"
      });

    case 'error':
      return /*#__PURE__*/React.createElement(Button, {
        appearance: "transparent",
        size: "regular",
        onClick: onRetry,
        icon: "refresh",
        className: "mr-2"
      });

    default:
      return null;
  }
};
FileUploaderStatus.displayName = 'FileUploaderStatus';
FileUploaderStatus.defaultProps = {
  status: 'completed',
  progress: 0
};

var FileUploaderItem = function FileUploaderItem(props) {
  var file = props.file,
      id = props.id,
      status = props.status,
      errorMessage = props.errorMessage,
      progress = props.progress,
      _onClick = props.onClick,
      onDelete = props.onDelete,
      _onRetry = props.onRetry,
      className = props.className;
  var name = file.name;
  var baseProps = extractBaseProps(props);
  var FileItemClass = classnames(_defineProperty$2({}, 'FileUploaderItem', true), className);
  return /*#__PURE__*/React.createElement("div", _extends$3({}, baseProps, {
    className: FileItemClass,
    onClick: function onClick() {
      return _onClick && _onClick(file, id);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "FileUploaderItem-file"
  }, /*#__PURE__*/React.createElement(Text, {
    className: "FileUploaderItem-text",
    appearance: status === 'completed' ? 'default' : 'subtle'
  }, name), /*#__PURE__*/React.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/React.createElement(FileUploaderStatus, {
    file: file,
    id: id,
    status: status,
    progress: progress,
    onRetry: function onRetry() {
      return _onRetry && _onRetry(file, id);
    }
  }), /*#__PURE__*/React.createElement(Button, {
    appearance: "transparent",
    size: "regular",
    onClick: function onClick() {
      return onDelete && onDelete(file, id);
    },
    icon: "close"
  }))), status === 'error' && /*#__PURE__*/React.createElement(Caption, {
    error: true
  }, errorMessage));
};
FileUploaderItem.defaultProps = {
  status: 'completed',
  progress: 0,
  errorMessage: 'Network Error'
};
FileUploaderItem.displayName = 'FileUploaderItem';

var FileUploaderList = function FileUploaderList(props) {
  var fileList = props.fileList,
      onClick = props.onClick,
      onDelete = props.onDelete,
      onRetry = props.onRetry,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var FileListClass = classnames(_defineProperty$2({}, 'FileUploaderList', true), className);
  if (fileList.length === 0) return null;
  return /*#__PURE__*/React.createElement("div", _extends$3({}, baseProps, {
    className: FileListClass
  }), fileList.map(function (fileName, i) {
    return /*#__PURE__*/React.createElement(FileUploaderItem, _extends$3({
      key: i,
      onDelete: onDelete,
      onRetry: onRetry,
      onClick: onClick
    }, fileName));
  }));
};
FileUploaderList.defaultProps = {
  fileList: []
};
FileUploaderList.displayName = 'FileUploaderList';

var resizeCol = function resizeCol(_this, name, el) {
  var elX = el === null || el === void 0 ? void 0 : el.getBoundingClientRect().x;

  function resizable(ev) {
    ev.preventDefault();

    if (elX) {
      _this.updateColumnSchema(name, {
        width: ev.pageX - elX
      });
    }
  }

  window.addEventListener('mousemove', resizable);
  window.addEventListener('mouseup', function () {
    window.removeEventListener('mousemove', resizable);
  });
};
function sortColumn(name, type) {
  var sortingList = _toConsumableArray(this.props.sortingList);

  var index = sortingList.findIndex(function (l) {
    return l.name === name;
  });

  if (index !== -1) {
    sortingList = [].concat(_toConsumableArray(sortingList.slice(0, index)), _toConsumableArray(sortingList.slice(index + 1)));
  }

  if (type !== 'unsort') sortingList.push({
    name: name,
    type: type
  });
  this.updateSortingList(sortingList);
}
function pinColumn(name, type) {
  var schemaUpdate = {
    pinned: type !== 'unpin' ? type : undefined
  };
  this.updateColumnSchema(name, schemaUpdate);
}
function hideColumn(name, value) {
  var schemaUpdate = {
    hidden: value
  };
  this.updateColumnSchema(name, schemaUpdate);
}
function getWidth(width) {
  var isPercent = typeof width === 'string' && width.slice(-1) === '%';

  if (isPercent) {
    if (this.state.init) {
      var checkboxCell = this.gridRef.querySelector('.Grid-cell--checkbox');
      var checkboxWidth = checkboxCell ? checkboxCell.clientWidth : 0;
      var gridWidth = this.gridRef.clientWidth - checkboxWidth;
      return gridWidth * (+width.slice(0, -1) / 100);
    }

    return 0;
  }

  return width;
}
function getCellSize(cellType) {
  var sizes = {
    AVATAR: {
      minWidth: 48
    },
    AVATAR_WITH_TEXT: {
      width: 256
    },
    AVATAR_WITH_META_LIST: {
      width: 256
    },
    ICON: {
      minWdth: 48
    },
    STATUS_HINT: {
      width: 96
    },
    WITH_META_LIST: {
      width: 176
    },
    DEFAULT: {
      width: 176
    }
  };
  return sizes[cellType];
}

var updateBatchData = function updateBatchData(data, rowIndexes, dataUpdate) {
  var updatedData = _toConsumableArray(data);

  var _iterator = _createForOfIteratorHelper(rowIndexes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var rowIndex = _step.value;
      updatedData[rowIndex] = _objectSpread2(_objectSpread2({}, updatedData[rowIndex]), dataUpdate);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return updatedData;
};
function translateData(schema, data) {
  var newData = _objectSpread2({}, data);

  if (schema.translate) {
    var translatedData = schema.translate(data);
    newData[schema.name] = translatedData !== null && _typeof(translatedData) === 'object' ? _objectSpread2(_objectSpread2({}, newData[schema.name]), translatedData) : translatedData;
  }

  if (newData[schema.name] === null || _typeof(newData[schema.name]) !== 'object') {
    newData[schema.name] = {
      title: newData[schema.name]
    };
  }

  return newData;
}
var filterData = function filterData() {
  var schema = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var filterList = arguments.length > 2 ? arguments[2] : undefined;
  var filteredData = data;

  if (filterList) {
    Object.keys(filterList).forEach(function (schemaName) {
      var filters = filterList[schemaName];
      var sIndex = schema.findIndex(function (s) {
        return s.name === schemaName;
      });
      var onFilterChange = schema[sIndex].onFilterChange;

      if (filters.length && onFilterChange) {
        filteredData = filteredData.filter(function (d) {
          return onFilterChange(d, filters);
        });
      }
    });
  }

  return filteredData;
};
var sortData = function sortData() {
  var schema = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var sortingList = arguments.length > 2 ? arguments[2] : undefined;

  var sortedData = _toConsumableArray(data);

  sortingList === null || sortingList === void 0 ? void 0 : sortingList.forEach(function (l) {
    var sIndex = schema.findIndex(function (s) {
      return s.name === l.name;
    });

    if (sIndex !== -1) {
      var defaultComparator = function defaultComparator(a, b) {
        var aData = translateData(schema[sIndex], a);
        var bData = translateData(schema[sIndex], b);
        return aData[l.name].title.localeCompare(bData[l.name].title);
      };

      var _schema$sIndex$compar = schema[sIndex].comparator,
          comparator = _schema$sIndex$compar === void 0 ? defaultComparator : _schema$sIndex$compar;
      sortedData.sort(comparator);
      if (l.type === 'desc') sortedData.reverse();
    }
  });
  return sortedData;
};
var paginateData = function paginateData() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var page = arguments.length > 1 ? arguments[1] : undefined;
  var pageSize = arguments.length > 2 ? arguments[2] : undefined;
  var start = (page - 1) * pageSize;
  var end = start + pageSize;
  var paginatedData = data.slice(start, end);
  return paginatedData;
};

var moveToIndex = function moveToIndex(arr, from, to) {
  if (from === to) return arr;
  var newArr = arr;

  if (from < to) {
    newArr = [].concat(_toConsumableArray(arr.slice(0, from)), _toConsumableArray(arr.slice(from + 1, to + 1)), [arr[from]], _toConsumableArray(arr.slice(to + 1)));
  } else {
    newArr = [].concat(_toConsumableArray(arr.slice(0, to)), [arr[from]], _toConsumableArray(arr.slice(to, from)), _toConsumableArray(arr.slice(from + 1)));
  }

  return newArr;
};
var getTotalPages = function getTotalPages(totalRecords, pageSize) {
  return Math.ceil(totalRecords / pageSize);
};
var getSelectAll = function getSelectAll(data) {
  if (data.length) {
    var anyUnSelected = data.some(function (d) {
      return !d._selected;
    });
    var allUnSelected = data.every(function (d) {
      return !d._selected;
    });
    var indeterminate = data.length >= 0 && anyUnSelected && !allUnSelected;
    var checked = !indeterminate && !allUnSelected;
    return {
      indeterminate: indeterminate,
      checked: checked
    };
  }

  return {
    indeterminate: false,
    checked: false
  };
};
var getInit = function getInit(schema) {
  return schema && !!schema.length;
};
var getSchema = function getSchema(_this) {
  var _this$props = _this.props,
      loading = _this$props.loading,
      loaderSchema = _this$props.loaderSchema;
  var schema = _this.props.schema;
  var init = getInit(schema);

  if (!init && loading) {
    schema = loaderSchema;
  }

  return schema;
};
var getPluralSuffix = function getPluralSuffix(count) {
  return count > 1 ? 's' : '';
};

// import * as React from 'react';
var GridNestedRow = function GridNestedRow(props) {
  var _this = props._this,
      data = props.data,
      rowIndex = props.rowIndex;
  var _this$props = _this.props,
      schema = _this$props.schema,
      loading = _this$props.loading,
      nestedRowRenderer = _this$props.nestedRowRenderer;
  if (nestedRowRenderer) return nestedRowRenderer({
    data: data,
    schema: schema,
    loading: loading,
    rowIndex: rowIndex
  }); // return (
  //   <Text>{JSON.stringify(data)}</Text>
  // )
  // const {
  //   schema: propSchema
  // } = _this.props;
  // if (data._expanded) {
  //   const showHead = data._expanded.showHead;
  //   const schema = data._expanded.schema || propSchema;
  //   let gridData = data._expanded.data;
  //   if (!gridData) {
  //     const {
  //       _uid,
  //       _expanded,
  //       ...rest
  //     } = data;
  //     gridData = [rest];
  //   }
  //   return (
  //     <div className="Grid-expandedRow">
  //       <Grid
  //         key={'expanedRow'}
  //         showHead={showHead}
  //         data={gridData}
  //         schema={schema}
  //         totalRecords={gridData.length}
  //       />
  //     </div>
  //   );
  // }

  return null;
};

var HeaderCell = function HeaderCell(props) {
  var _this = props._this,
      schema = props.schema,
      draggable = props.draggable;
  var _this$props = _this.props,
      schemaProp = _this$props.schema,
      loading = _this$props.loading,
      showMenu = _this$props.showMenu,
      sortingList = _this$props.sortingList,
      filterList = _this$props.filterList,
      headCellTooltip = _this$props.headCellTooltip,
      showFilters = _this$props.showFilters;
  var _schema$sorting = schema.sorting,
      sorting = _schema$sorting === void 0 ? true : _schema$sorting,
      name = schema.name,
      filters = schema.filters,
      pinned = schema.pinned;
  var init = getInit(schemaProp);
  var listIndex = sortingList.findIndex(function (l) {
    return l.name === name;
  });
  var sorted = listIndex !== -1 ? sortingList[listIndex].type : null;
  var el = /*#__PURE__*/React.createRef();
  var sortOptions = [{
    label: 'Sort Ascending',
    value: 'sortAsc',
    icon: 'arrow_downward'
  }, {
    label: 'Sort Descending',
    value: 'sortDesc',
    icon: 'arrow_upward'
  }];
  var pinOptions = [{
    label: 'Pin Left',
    value: 'pinLeft',
    icon: 'skip_previous'
  }, {
    label: 'Pin Right',
    value: 'pinRight',
    icon: 'skip_next'
  }];
  var unpinOption = {
    label: 'Unpin',
    value: 'unpin',
    icon: 'replay'
  };
  if (pinned === 'left') pinOptions[0] = unpinOption;
  if (pinned === 'right') pinOptions[1] = unpinOption;
  var hideOptions = [{
    label: 'Hide Column',
    value: 'hide',
    icon: 'cancel'
  }];
  var unsortOption = {
    label: 'Unsort',
    value: 'unsort',
    icon: 'unfold_more'
  };
  if (sorted === 'asc') sortOptions[0] = unsortOption;
  if (sorted === 'desc') sortOptions[1] = unsortOption;
  var options = [].concat(pinOptions, hideOptions);
  if (sorting) options = [].concat(sortOptions, _toConsumableArray(options));
  var classes = classnames({
    'Grid-headCell': true,
    'Grid-headCell--draggable': draggable
  });
  var filterOptions = filters ? filters.map(function (f) {
    return _objectSpread2(_objectSpread2({}, f), {}, {
      selected: filterList[name] && filterList[name].findIndex(function (fl) {
        return fl === f.value;
      }) !== -1
    });
  }) : [];

  var renderLabel = function renderLabel() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Text, {
      weight: "strong",
      className: "ellipsis--noWrap"
    }, schema.displayName), sorting && /*#__PURE__*/React.createElement("div", {
      className: "Grid-sortingIcons"
    }, sorted ? sorted === 'asc' ? /*#__PURE__*/React.createElement(Icon, {
      name: "arrow_downward"
    }) : /*#__PURE__*/React.createElement(Icon, {
      name: "arrow_upward"
    }) : /*#__PURE__*/React.createElement(Icon, {
      name: "unfold_more"
    })));
  };

  return /*#__PURE__*/React.createElement("div", {
    key: name,
    className: classes,
    ref: el
  }, /*#__PURE__*/React.createElement("div", {
    className: "Grid-cellContent",
    onClick: function onClick() {
      if (!loading && sorting) {
        if (sorted === 'asc') _this.onMenuChange(name, 'sortDesc');
        if (sorted === 'desc') _this.onMenuChange(name, 'unsort');
        if (!sorted) _this.onMenuChange(name, 'sortAsc');
      }
    }
  }, loading && !init ? /*#__PURE__*/React.createElement(Placeholder, {
    withImage: false
  }, /*#__PURE__*/React.createElement(PlaceholderParagraph, {
    length: "medium"
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, headCellTooltip ? /*#__PURE__*/React.createElement(Tooltip, {
    position: "top-start",
    triggerClass: "w-100 overflow-hidden",
    tooltip: schema.displayName
  }, renderLabel()) : renderLabel())), showFilters && filters && /*#__PURE__*/React.createElement(React.Fragment, null, loading && !init ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Placeholder, null)) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Dropdown, {
    menu: true,
    showApplyButton: true,
    withCheckbox: true,
    triggerOptions: {
      customTrigger: function customTrigger() {
        return /*#__PURE__*/React.createElement(Button, {
          icon: "filter_list",
          appearance: "transparent"
        });
      }
    },
    options: filterOptions,
    align: 'left',
    onChange: function onChange(selected) {
      return _this.onFilterChange(name, selected);
    },
    minWidth: 176
  }))), showMenu && /*#__PURE__*/React.createElement(React.Fragment, null, loading && !init ? /*#__PURE__*/React.createElement("span", {
    className: "ml-4"
  }, /*#__PURE__*/React.createElement(Placeholder, null)) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Dropdown, {
    key: "".concat(name, "-").concat(sorted, "-").concat(pinned),
    menu: true,
    optionType: "WITH_ICON",
    triggerOptions: {
      customTrigger: function customTrigger() {
        return /*#__PURE__*/React.createElement(Button, {
          icon: "more_vert_filled",
          appearance: "transparent"
        });
      }
    },
    options: options,
    align: 'left',
    onChange: function onChange(selected) {
      return _this.onMenuChange(name, selected);
    },
    minWidth: 176
  }))), schema.resizable && /*#__PURE__*/React.createElement("span", {
    className: "Grid-cellResize",
    onMouseDown: function onMouseDown() {
      resizeCol(_this, name, el.current);
    }
  }));
};

var BodyCell = function BodyCell(props) {
  var _this = props._this,
      data = props.data,
      schema = props.schema,
      expandedState = props.expandedState,
      rowIndex = props.rowIndex,
      colIndex = props.colIndex;
  var _this$props2 = _this.props,
      size = _this$props2.size,
      loading = _this$props2.loading,
      nestedRows = _this$props2.nestedRows;

  var _expandedState = _slicedToArray(expandedState, 2),
      expanded = _expandedState[0],
      setExpanded = _expandedState[1];

  var cellProps = {
    rowIndex: rowIndex,
    colIndex: colIndex,
    size: size,
    schema: schema,
    data: data,
    loading: loading,
    expanded: expanded
  };
  var nestedProps = {
    _this: _this,
    data: data,
    rowIndex: rowIndex
  };
  var isNestedRowDisabled = !GridNestedRow(nestedProps);
  return /*#__PURE__*/React.createElement("div", {
    className: "Grid-cellContent"
  }, colIndex === 0 && nestedRows && /*#__PURE__*/React.createElement(React.Fragment, null, !isNestedRowDisabled ? /*#__PURE__*/React.createElement(Icon, {
    className: 'Grid-nestedRowTrigger',
    name: expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down',
    size: 20,
    appearance: 'default',
    onClick: function onClick(e) {
      if (!isNestedRowDisabled) {
        e.stopPropagation();
        setExpanded(!expanded);
      }
    }
  }) : /*#__PURE__*/React.createElement("span", {
    className: "Grid-nestedRowPlaceholder"
  })), schema.cellRenderer ? schema.cellRenderer(cellProps) : /*#__PURE__*/React.createElement(GridCell, _extends$3({
    key: "".concat(rowIndex, "-").concat(colIndex)
  }, cellProps)));
};

var Cell = function Cell(props) {
  var _this = props._this,
      head = props.head,
      colIndex = props.colIndex,
      firstCell = props.firstCell,
      schema = props.schema,
      expandedState = props.expandedState,
      draggable = props.draggable,
      data = props.data,
      rowIndex = props.rowIndex;
  var _this$props3 = _this.props,
      separator = _this$props3.separator,
      nestedRows = _this$props3.nestedRows;
  var init = _this.state.init;
  var name = schema.name,
      hidden = schema.hidden,
      pinned = schema.pinned,
      _schema$cellType = schema.cellType,
      cellType = _schema$cellType === void 0 ? 'DEFAULT' : _schema$cellType;

  var _getCellSize = getCellSize(cellType),
      width = _getCellSize.width,
      _getCellSize$minWidth = _getCellSize.minWidth,
      minWidth = _getCellSize$minWidth === void 0 ? 96 : _getCellSize$minWidth,
      _getCellSize$maxWidth = _getCellSize.maxWidth,
      maxWidth = _getCellSize$maxWidth === void 0 ? 800 : _getCellSize$maxWidth;

  var cellClass = classnames({
    'Grid-cell': true,
    'Grid-cell--head': head,
    'Grid-cell--body': !head,
    'Grid-cell--separator': !firstCell && (schema.separator !== undefined ? schema.separator : separator),
    'Grid-cell--nestedRow': !head && colIndex === 0 && nestedRows
  });
  if (hidden) return null;
  return /*#__PURE__*/React.createElement("div", {
    key: "".concat(rowIndex, "-").concat(colIndex),
    className: cellClass,
    draggable: head && draggable,
    onDragStart: function onDragStart(e) {
      if (draggable) {
        e.dataTransfer.setData('name', name);
        if (pinned) e.dataTransfer.setData('type', pinned);
      }
    },
    onDragOver: function onDragOver(e) {
      return e.preventDefault();
    },
    onDrop: function onDrop(e) {
      if (draggable) {
        var from = {
          name: e.dataTransfer.getData('name'),
          type: e.dataTransfer.getData('type')
        };
        var to = {
          name: name,
          type: pinned || ''
        };
        if (from.type === to.type) _this.reorderCol(from.name, to.name);
      }
    },
    style: {
      visibility: !init ? 'hidden' : 'visible',
      width: getWidth.call(_this, schema.width || width),
      minWidth: getWidth.call(_this, schema.minWidth || minWidth),
      maxWidth: getWidth.call(_this, schema.maxWidth || maxWidth)
    }
  }, head ? /*#__PURE__*/React.createElement(HeaderCell, {
    _this: _this,
    draggable: draggable,
    colIndex: colIndex,
    schema: schema
  }) : /*#__PURE__*/React.createElement(BodyCell, {
    _this: _this,
    rowIndex: rowIndex,
    colIndex: colIndex,
    data: data,
    schema: schema,
    expandedState: expandedState
  }));
};

var GridHead = function GridHead(props) {
  var _this = props._this,
      _props$draggable = props.draggable,
      draggable = _props$draggable === void 0 ? false : _props$draggable,
      withCheckbox = props.withCheckbox;
  var _this$props = _this.props,
      loading = _this$props.loading,
      selectAll = _this$props.selectAll;
  var schema = getSchema(_this);
  var pinnedSchema = schema.filter(function (s) {
    return !s.hidden && s.pinned;
  });
  var leftPinnedSchema = pinnedSchema.filter(function (s) {
    return !s.hidden && s.pinned === 'left';
  });
  var rightPinnedSchema = pinnedSchema.filter(function (s) {
    return !s.hidden && s.pinned === 'right';
  });
  var unpinnedSchema = schema.filter(function (s) {
    return !s.hidden && !s.pinned;
  });

  var renderCheckbox = function renderCheckbox(show) {
    if (!show || !withCheckbox) return null;
    return /*#__PURE__*/React.createElement("div", {
      className: "Grid-cell Grid-cell--head Grid-cell--checkbox"
    }, loading ? /*#__PURE__*/React.createElement(Placeholder, null) : /*#__PURE__*/React.createElement(Checkbox, _extends$3({}, selectAll, {
      onChange: _this.onSelectAll
    })));
  };

  var renderSchema = function renderSchema(currSchema, shouldRenderCheckbox, pinned) {
    if (currSchema.length) {
      var _classNames;

      var classes = classnames((_classNames = {
        'Grid-cellGroup': true,
        'Grid-cellGroup--pinned': pinned
      }, _defineProperty$2(_classNames, "Grid-cellGroup--pinned-".concat(pinned), pinned), _defineProperty$2(_classNames, 'Grid-cellGroup--main', !pinned), _classNames));
      return /*#__PURE__*/React.createElement("div", {
        className: classes
      }, renderCheckbox(shouldRenderCheckbox), currSchema.map(function (s, index) {
        var cI = pinned === 'left' ? index : leftPinnedSchema.length + index;
        if (pinned === 'right') cI += unpinnedSchema.length;
        return /*#__PURE__*/React.createElement(Cell, {
          key: "".concat(cI),
          _this: _this,
          head: true,
          draggable: draggable,
          schema: s,
          colIndex: cI,
          firstCell: !index
        });
      }));
    }

    return null;
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "Grid-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "Grid-row Grid-row--head"
  }, renderSchema(leftPinnedSchema, !!leftPinnedSchema.length, 'left'), renderSchema(unpinnedSchema, !leftPinnedSchema.length && !!unpinnedSchema.length), renderSchema(rightPinnedSchema, false, 'right')));
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var isInView = function isInView(container, element) {
  var containerTop = container.offsetTop;
  var elementRect = element.getBoundingClientRect();
  var elementTop = elementRect.top;
  var elementHeight = elementRect.height;
  return elementHeight - (containerTop - elementTop) > 0;
};

var VirtualScroll = /*#__PURE__*/function (_React$Component) {
  _inherits(VirtualScroll, _React$Component);

  var _super = _createSuper(VirtualScroll);

  function VirtualScroll(props) {
    var _this;

    _classCallCheck(this, VirtualScroll);

    _this = _super.call(this, props);
    _this.state = {
      offset: props.offset
    };
    _this.lastScrollTop = 0;
    _this.avgRowHeight = props.minItemHeight;
    return _this;
  }

  _createClass(VirtualScroll, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      window.requestAnimationFrame(function () {
        if (_this2.listRef) {
          _this2.listRef.scrollTop = _this2.state.offset * _this2.avgRowHeight;
        }
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_prevProps, prevState) {
      if (prevState.offset > this.state.offset) {
        this.updateOffset(prevState);
      }
    }
  }, {
    key: "updateOffset",
    value: function updateOffset(prevState) {
      var offsetDiff = prevState.offset - this.state.offset;

      if (this.listRef) {
        var el = this.listRef;
        var items = el.querySelectorAll(".VS-item");
        var heightAdded = 0;
        var currOffset = prevState.offset;
        var start = Math.min(this.state.offset, this.props.buffer);
        var end = start + offsetDiff;

        for (var i = Math.min(items.length, end) - 1; i >= start; i--) {
          var inView = isInView(el, items[i]);

          if (inView) {
            currOffset--;
            var rowHeight = items[i].clientHeight;
            heightAdded += rowHeight;
          } else {
            break;
          }
        }

        if (items.length < end) {
          var diff = end - items.length;
          heightAdded += diff * this.props.minItemHeight;
          currOffset -= diff;
        }

        var newAvgRowHeight = currOffset === 0 ? this.props.minItemHeight : (this.avgRowHeight * prevState.offset - heightAdded) / currOffset;
        this.setState({
          offset: currOffset
        });
        this.avgRowHeight = Math.max(this.props.minItemHeight, newAvgRowHeight);
      }
    }
  }, {
    key: "onScrollHandler",
    value: function onScrollHandler(event) {
      if (this.listRef) {
        var _this$props = this.props,
            totalLength = _this$props.totalLength,
            length = _this$props.length,
            buffer = _this$props.buffer;
        var offset = this.state.offset;
        var avgRowHeight = this.avgRowHeight;
        var el = this.listRef;
        var scrollTop = el.scrollTop;
        var direction = Math.floor(scrollTop - this.lastScrollTop);
        if (direction === 0) return;
        var items = el.querySelectorAll(".VS-item");
        var newOffset = offset;
        var newAvgRowHeight = avgRowHeight;
        var start = Math.min(offset, buffer);

        if (direction > 0) {
          if (offset < totalLength - length) {
            var heightAdded = 0;

            for (var i = start; i < items.length; i++) {
              var inView = isInView(el, items[i]);
              var rowHeight = items[i].clientHeight;

              if (!inView) {
                heightAdded += rowHeight;
                newOffset++;
              } else {
                break;
              }
            }

            if (heightAdded < direction) {
              var heightLeft = direction - heightAdded;
              var offsetToBeAdded = Math.floor(heightLeft / this.props.minItemHeight);
              newOffset += offsetToBeAdded;
              heightAdded += offsetToBeAdded * this.props.minItemHeight;
            }

            newAvgRowHeight = newOffset > 0 ? (offset * avgRowHeight + heightAdded) / newOffset : this.props.minItemHeight;
            this.setState({
              offset: Math.min(newOffset, totalLength - length)
            });
            this.avgRowHeight = Math.max(this.props.minItemHeight, newAvgRowHeight);
          }
        } else {
          var scrollDiff = items[start].getBoundingClientRect().y - el.getBoundingClientRect().y;

          if (scrollDiff > 0) {
            var offsetDiff = Math.floor(scrollDiff / this.props.minItemHeight) || 1;

            var _newOffset = offset - offsetDiff;

            if (_newOffset < totalLength - (length + buffer)) {
              this.setState({
                offset: Math.max(0, _newOffset)
              });
            }
          }
        }

        this.lastScrollTop = scrollTop;
      }

      if (this.props.onScroll) this.props.onScroll(event);
    }
  }, {
    key: "renderItems",
    value: function renderItems(start, end) {
      var renderItem = this.props.renderItem;
      return Array.from({
        length: end - start + 1
      }, function (_, index) {
        var rowIndex = start + index;
        var component = renderItem(rowIndex);
        return /*#__PURE__*/React.cloneElement(component, {
          key: rowIndex,
          className: ["VS-item", component.props.className].join(' ').trim()
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          totalLength = _this$props2.totalLength,
          length = _this$props2.length,
          buffer = _this$props2.buffer;
          _this$props2.offset;
          _this$props2.renderItems;
          _this$props2.minItemHeight;
          var forwardRef = _this$props2.forwardRef,
          rest = _objectWithoutProperties(_this$props2, ["totalLength", "length", "buffer", "offset", "renderItems", "minItemHeight", "forwardRef"]);

      var _this$state = this.state,
          init = _this$state.init,
          offset = _this$state.offset;
      var avgRowHeight = this.avgRowHeight;
      var start = Math.max(0, offset - buffer);
      var end = Math.min(offset + (length + buffer) - 1, totalLength - 1);
      var topPadding = Math.max(0, start * avgRowHeight);
      var bottomPadding = Math.max(0, (totalLength - end - 1) * avgRowHeight);
      return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
        ref: function ref(el) {
          _this3.listRef = el;
          if (forwardRef) forwardRef.current = el;
          if (!init) _this3.setState({
            init: true
          });
        },
        onScroll: this.onScrollHandler.bind(this)
      }), init && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        style: {
          flexShrink: 0,
          height: topPadding
        }
      }), this.renderItems(start, end), /*#__PURE__*/React.createElement("div", {
        style: {
          flexShrink: 0,
          height: bottomPadding
        }
      })));
    }
  }]);

  return VirtualScroll;
}(React.Component);

_defineProperty(VirtualScroll, "defaultProps", {
  buffer: 10,
  length: 30,
  offset: 0
});

var index = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(VirtualScroll, _extends({
    forwardRef: ref
  }, props));
});

var GridRow = function GridRow(props) {
  var _this = props._this,
      schema = props.schema,
      data = props.data,
      withCheckbox = props.withCheckbox,
      rI = props.rowIndex,
      className = props.className;
  var rowRef = React.useRef(null);

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      expanded = _React$useState2[0],
      setExpanded = _React$useState2[1];

  var rowClasses = classnames('Grid-row', 'Grid-row--body', {
    'Grid-row--selected': data._selected
  });

  var onClickHandler = function onClickHandler() {
    var type = _this.props.type;

    if (type === 'resource' && !loading) {
      var onRowClick = _this.props.onRowClick;

      if (onRowClick) {
        onRowClick(data, rI);
      }
    }
  };

  var _this$props = _this.props,
      loading = _this$props.loading,
      nestedRows = _this$props.nestedRows;
  var pinnedSchema = schema.filter(function (s) {
    return !s.hidden && s.pinned;
  });
  var leftPinnedSchema = pinnedSchema.filter(function (s) {
    return !s.hidden && s.pinned === 'left';
  });
  var rightPinnedSchema = pinnedSchema.filter(function (s) {
    return !s.hidden && s.pinned === 'right';
  });
  var unpinnedSchema = schema.filter(function (s) {
    return !s.hidden && !s.pinned;
  });

  var renderCheckbox = function renderCheckbox(show) {
    if (!show || !withCheckbox) return null;
    return /*#__PURE__*/React.createElement("div", {
      className: "Grid-cell Grid-cell--body Grid-cell--checkbox",
      onClick: function onClick(e) {
        return e.stopPropagation();
      }
    }, loading ? /*#__PURE__*/React.createElement(Placeholder, null) : /*#__PURE__*/React.createElement(Checkbox, {
      checked: !!data._selected,
      onChange: function onChange(event) {
        _this.onSelect(rI, event.target.checked);
      }
    }));
  };

  var renderSchema = function renderSchema(currSchema, shouldRenderCheckbox, pinned) {
    if (currSchema.length) {
      var _classNames;

      var classes = classnames((_classNames = {
        'Grid-cellGroup': true,
        'Grid-cellGroup--pinned': pinned
      }, _defineProperty$2(_classNames, "Grid-cellGroup--pinned-".concat(pinned), pinned), _defineProperty$2(_classNames, 'Grid-cellGroup--main', !pinned), _classNames));
      return /*#__PURE__*/React.createElement("div", {
        className: classes
      }, renderCheckbox(shouldRenderCheckbox), currSchema.map(function (s, index) {
        var cI = pinned === 'left' ? index : leftPinnedSchema.length + index;
        if (pinned === 'right') cI += unpinnedSchema.length;
        return /*#__PURE__*/React.createElement(Cell, {
          key: "".concat(rI, "-").concat(cI),
          _this: _this,
          rowIndex: rI,
          colIndex: cI,
          firstCell: !index,
          schema: s,
          data: data,
          expandedState: [expanded, setExpanded]
        });
      }));
    }

    return null;
  };

  var wrapperClasses = classnames(className, {
    'Grid-rowWrapper': true
  });
  return /*#__PURE__*/React.createElement("div", {
    className: wrapperClasses
  }, /*#__PURE__*/React.createElement("div", {
    className: rowClasses,
    onClick: onClickHandler,
    ref: rowRef
  }, renderSchema(leftPinnedSchema, !!leftPinnedSchema.length, 'left'), renderSchema(unpinnedSchema, !leftPinnedSchema.length && !!unpinnedSchema.length), renderSchema(rightPinnedSchema, false, 'right')), nestedRows && expanded && /*#__PURE__*/React.createElement("div", {
    className: "Grid-nestedRow"
  }, /*#__PURE__*/React.createElement(GridNestedRow, {
    _this: _this,
    data: data,
    rowIndex: rI
  })));
};
GridRow.defaultProps = {
  data: {}
};

var GridBody = function GridBody(props) {
  var _this = props._this,
      schema = props.schema,
      data = props.data,
      withCheckbox = props.withCheckbox;
  React.useEffect(function () {
    var gridBodyEl = _this.gridRef.querySelector('.Grid-body');

    if (gridBodyEl) {
      window.requestAnimationFrame(function () {
        if (_this.prevPageInfo.page === page) {
          gridBodyEl.scrollTop = _this.prevPageInfo.scrollTop;
        }

        _this.prevPageInfo = _this.currPageInfo;
      });
    }

    return function () {
      _this.currPageInfo = {
        page: page,
        scrollTop: gridBodyEl.scrollTop
      };
    };
  }, []);
  var minRowHeight = {
    comfortable: 40,
    standard: 40,
    compressed: 32,
    tight: 24
  };
  var _this$props = _this.props,
      size = _this$props.size,
      loading = _this$props.loading,
      error = _this$props.error,
      withPagination = _this$props.withPagination,
      page = _this$props.page,
      pageSize = _this$props.pageSize,
      totalRecords = _this$props.totalRecords,
      errorTemplate = _this$props.errorTemplate;

  if (!loading && error) {
    return errorTemplate ? typeof errorTemplate === 'function' ? errorTemplate({}) : errorTemplate : null;
  }

  var totalPages = Math.ceil(totalRecords / pageSize);
  var isLastPage = withPagination && page === totalPages;
  var dataLength = isLastPage ? totalRecords - (page - 1) * pageSize : loading ? pageSize : withPagination ? Math.min(totalRecords, pageSize) : totalRecords;

  var renderItem = function renderItem(rowIndex) {
    return /*#__PURE__*/React.createElement(GridRow, {
      _this: _this,
      rowIndex: rowIndex,
      data: data[rowIndex],
      schema: schema,
      withCheckbox: withCheckbox
    });
  };

  return /*#__PURE__*/React.createElement(index, {
    className: "Grid-body",
    minItemHeight: minRowHeight[size],
    totalLength: dataLength,
    length: 20,
    buffer: 7,
    renderItem: renderItem
  });
};

var Grid = /*#__PURE__*/function (_React$Component) {
  _inherits$1(Grid, _React$Component);

  var _super = _createSuper$1(Grid);

  function Grid(props) {
    var _this;

    _classCallCheck$1(this, Grid);

    _this = _super.call(this, props);

    _defineProperty$2(_assertThisInitialized$2(_this), "currPageInfo", {
      page: 1,
      scrollTop: 0
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "prevPageInfo", _this.currPageInfo);

    _defineProperty$2(_assertThisInitialized$2(_this), "gridRef", null);

    _defineProperty$2(_assertThisInitialized$2(_this), "isHeadSyncing", false);

    _defineProperty$2(_assertThisInitialized$2(_this), "isBodySyncing", false);

    _defineProperty$2(_assertThisInitialized$2(_this), "syncScroll", function (type) {
      return function () {
        var gridHeadEl = _this.gridRef.querySelector('.Grid-head');

        var gridBodyEl = _this.gridRef.querySelector('.Grid-body');

        if (type === 'head') {
          if (!_this.isHeadSyncing) {
            _this.isBodySyncing = true;
            gridBodyEl.scrollLeft = gridHeadEl.scrollLeft;
          }

          _this.isHeadSyncing = false;
        }

        if (type === 'body') {
          if (!_this.isBodySyncing) {
            _this.isHeadSyncing = true;
            gridHeadEl.scrollLeft = gridBodyEl.scrollLeft;
          }

          _this.isBodySyncing = false;
        }
      };
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "updateRenderedSchema", function (newSchema) {
      var updateSchema = _this.props.updateSchema;

      if (updateSchema) {
        updateSchema(newSchema);
      }
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "updateColumnSchema", function (name, schemaUpdate) {
      var schema = _this.props.schema;

      var newSchema = _toConsumableArray(schema);

      var ind = newSchema.findIndex(function (s) {
        return s.name === name;
      });
      newSchema[ind] = _objectSpread2(_objectSpread2({}, newSchema[ind]), schemaUpdate);

      _this.updateRenderedSchema(newSchema);
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "reorderCol", function (from, to) {
      var schema = _this.props.schema;
      var fromInd = schema.findIndex(function (s) {
        return s.name === from;
      });
      var toInd = schema.findIndex(function (s) {
        return s.name === to;
      });
      var newSchema = moveToIndex(schema, fromInd, toInd);

      _this.updateRenderedSchema(newSchema);
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "updateSortingList", function (sortingList) {
      var updateSortingList = _this.props.updateSortingList;

      if (updateSortingList) {
        updateSortingList(sortingList);
      }
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "updateFilterList", function (filterList) {
      var updateFilterList = _this.props.updateFilterList;

      if (updateFilterList) {
        updateFilterList(filterList);
      }
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "onMenuChange", function (name, selected) {
      switch (selected) {
        case 'sortAsc':
          sortColumn.call(_assertThisInitialized$2(_this), name, 'asc');
          break;

        case 'sortDesc':
          sortColumn.call(_assertThisInitialized$2(_this), name, 'desc');
          break;

        case 'unsort':
          sortColumn.call(_assertThisInitialized$2(_this), name, 'unsort');
          break;

        case 'pinLeft':
          pinColumn.call(_assertThisInitialized$2(_this), name, 'left');
          break;

        case 'pinRight':
          pinColumn.call(_assertThisInitialized$2(_this), name, 'right');
          break;

        case 'unpin':
          pinColumn.call(_assertThisInitialized$2(_this), name, 'unpin');
          break;

        case 'hide':
          hideColumn.call(_assertThisInitialized$2(_this), name, true);
          break;
      }
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "onFilterChange", function (name, selected) {
      var filterList = _this.props.filterList;

      var newFilterList = _objectSpread2(_objectSpread2({}, filterList), {}, _defineProperty$2({}, name, selected));

      _this.updateFilterList(newFilterList);
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "onSelect", function (rowIndex, selected) {
      var onSelect = _this.props.onSelect;

      if (onSelect) {
        onSelect(rowIndex, selected);
      }
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "onSelectAll", function (event) {
      var onSelectAll = _this.props.onSelectAll;

      if (onSelectAll) {
        onSelectAll(event.target.checked);
      }
    });

    _this.state = {
      init: false
    };
    return _this;
  }

  _createClass$1(Grid, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.addScrollListeners();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeScrollListeners();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.page !== this.props.page) {
        this.removeScrollListeners();
        this.addScrollListeners();
      }
    }
  }, {
    key: "addScrollListeners",
    value: function addScrollListeners() {
      var gridHeadEl = this.gridRef.querySelector('.Grid-head');
      var gridBodyEl = this.gridRef.querySelector('.Grid-body');

      if (gridHeadEl && gridBodyEl) {
        gridHeadEl.addEventListener('scroll', this.syncScroll('head'));
        gridBodyEl.addEventListener('scroll', this.syncScroll('body'));
      }
    }
  }, {
    key: "removeScrollListeners",
    value: function removeScrollListeners() {
      var gridHeadEl = this.gridRef.querySelector('.Grid-head');
      var gridBodyEl = this.gridRef.querySelector('.Grid-body');

      if (gridHeadEl && gridBodyEl) {
        gridHeadEl.removeEventListener('scroll', this.syncScroll('head'));
        gridBodyEl.removeEventListener('scroll', this.syncScroll('body'));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames,
          _this2 = this;

      var baseProps = extractBaseProps(this.props);
      var schema = getSchema(this);
      var _this$props = this.props,
          type = _this$props.type,
          size = _this$props.size,
          showHead = _this$props.showHead,
          draggable = _this$props.draggable,
          withCheckbox = _this$props.withCheckbox,
          data = _this$props.data,
          className = _this$props.className,
          page = _this$props.page;
      var classes = classnames((_classNames = {
        Grid: 'true'
      }, _defineProperty$2(_classNames, "Grid--".concat(type), type), _defineProperty$2(_classNames, "Grid--".concat(size), size), _classNames), className);
      return /*#__PURE__*/React.createElement("div", _extends$3({
        key: "".concat(page),
        className: classes
      }, baseProps, {
        ref: function ref(el) {
          _this2.gridRef = el;

          if (el && !_this2.state.init) {
            _this2.setState({
              init: true
            });
          }
        }
      }), showHead && /*#__PURE__*/React.createElement(GridHead, {
        _this: this,
        schema: schema,
        draggable: draggable,
        withCheckbox: withCheckbox
      }), /*#__PURE__*/React.createElement(GridBody, {
        _this: this,
        schema: schema,
        data: data,
        withCheckbox: withCheckbox
      }));
    }
  }]);

  return Grid;
}(React.Component);

_defineProperty$2(Grid, "defaultProps", {
  showHead: true,
  loaderSchema: [],
  schema: [],
  data: [],
  type: 'data',
  size: 'standard',
  page: 1,
  pageSize: 15,
  loading: false,
  error: false,
  sortingList: [],
  filterList: {},
  showFilters: true
});

var renderTitle = function renderTitle(props) {
  var tooltip = props.tooltip,
      cellData = props.cellData;
  var children = cellData.title;

  if (children !== undefined && children !== null) {
    if (tooltip) {
      return /*#__PURE__*/React.createElement(Tooltip, {
        tooltip: children,
        position: 'top-start',
        triggerClass: "w-100 overflow-hidden"
      }, /*#__PURE__*/React.createElement(Text, {
        className: "w-100 ellipsis"
      }, children));
    }

    return /*#__PURE__*/React.createElement(Text, {
      className: "w-100 ellipsis"
    }, children);
  }

  return null;
};

var renderMetaList = function renderMetaList(props) {
  var cellData = props.cellData;
  var metaList = cellData.metaList;

  if (metaList) {
    return /*#__PURE__*/React.createElement("div", {
      className: "GridCell-metaList"
    }, metaList.map(function (list, index) {
      return /*#__PURE__*/React.createElement(Text, {
        key: index,
        className: "ellipsis",
        appearance: 'subtle',
        size: "small"
      }, list);
    }));
  }

  return null;
};

var renderAvatar = function renderAvatar(props) {
  var cellData = props.cellData;
  var firstName = cellData.firstName,
      lastName = cellData.lastName,
      title = cellData.title;

  if (firstName || lastName) {
    return /*#__PURE__*/React.createElement(Avatar, {
      className: "mr-5",
      firstName: firstName,
      lastName: lastName
    });
  }

  if (title) {
    return /*#__PURE__*/React.createElement(Avatar, {
      className: "mr-5"
    }, title);
  }

  return null;
};

var renderIcon = function renderIcon(props) {
  var cellData = props.cellData;
  var icon = cellData.icon;

  if (icon) {
    return /*#__PURE__*/React.createElement(Icon, {
      name: icon
    });
  }

  return null;
};

var renderStatusHint = function renderStatusHint(props) {
  var cellData = props.cellData;
  var statusAppearance = cellData.statusAppearance;
  var children = cellData.title;

  if (children) {
    return /*#__PURE__*/React.createElement(StatusHint, {
      appearance: statusAppearance
    }, children);
  }

  return null;
};

var GridCell = function GridCell(props) {
  var size = props.size,
      schema = props.schema,
      loading = props.loading;
  var data = !loading ? translateData(schema, props.data) : {};
  var name = schema.name,
      _schema$cellType = schema.cellType,
      cellType = _schema$cellType === void 0 ? 'DEFAULT' : _schema$cellType,
      _schema$align = schema.align,
      align = _schema$align === void 0 ? 'left' : _schema$align,
      tooltip = schema.tooltip;
  var cellData = data[name];
  var cellClass = classnames(_defineProperty$2({}, 'GridCell', true));

  switch (cellType) {
    case 'DEFAULT':
      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(cellClass, " GridCell--align-").concat(align, " GridCell--default")
      }, loading ? /*#__PURE__*/React.createElement(PlaceholderParagraph, {
        length: "medium"
      }) : renderTitle({
        tooltip: tooltip,
        cellData: cellData
      }));

    case 'WITH_META_LIST':
      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(cellClass, " GridCell--metaList")
      }, loading ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PlaceholderParagraph, {
        length: "medium"
      }), /*#__PURE__*/React.createElement(PlaceholderParagraph, {
        length: "large",
        size: "xxs"
      })) : /*#__PURE__*/React.createElement(React.Fragment, null, renderTitle({
        tooltip: tooltip,
        cellData: cellData
      }), renderMetaList({
        cellData: cellData
      })));

    case 'AVATAR':
      if (loading) {
        return /*#__PURE__*/React.createElement(Placeholder, {
          className: "GridCell--align-".concat(align),
          imageSize: 'medium',
          round: true
        });
      }

      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(cellClass, " GridCell--align-").concat(align, " GridCell--avatar")
      }, size !== 'tight' && renderAvatar({
        cellData: cellData
      }));

    case 'AVATAR_WITH_TEXT':
      if (loading) {
        return /*#__PURE__*/React.createElement(Placeholder, {
          imageSize: 'medium',
          round: true
        }, /*#__PURE__*/React.createElement(PlaceholderParagraph, {
          className: "ml-3",
          length: "medium"
        }));
      }

      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(cellClass, " GridCell--avatarWithText")
      }, size !== 'tight' && renderAvatar({
        cellData: cellData
      }), renderTitle({
        tooltip: tooltip,
        cellData: cellData
      }));

    case 'AVATAR_WITH_META_LIST':
      if (loading) {
        return /*#__PURE__*/React.createElement(Placeholder, {
          imageSize: 'medium',
          round: true
        }, /*#__PURE__*/React.createElement(PlaceholderParagraph, {
          className: "ml-3",
          length: "medium"
        }), /*#__PURE__*/React.createElement(PlaceholderParagraph, {
          className: "ml-3",
          length: "large"
        }));
      }

      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(cellClass, " GridCell--avatarWithText")
      }, size !== 'tight' && renderAvatar({
        cellData: cellData
      }), /*#__PURE__*/React.createElement("div", {
        className: "GridCell-metaListWrapper"
      }, renderTitle({
        tooltip: tooltip,
        cellData: cellData
      }), renderMetaList({
        cellData: cellData
      })));

    case 'ICON':
      if (loading) {
        return /*#__PURE__*/React.createElement(Placeholder, {
          className: "GridCell--align-".concat(align),
          imageSize: 'small',
          round: true
        });
      }

      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(cellClass, " GridCell--align-").concat(align, " GridCell--icon")
      }, renderIcon({
        cellData: cellData
      }));

    case 'STATUS_HINT':
      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(cellClass, " GridCell--align-").concat(align, " GridCell--statusHint")
      }, loading ? /*#__PURE__*/React.createElement(Placeholder, {
        className: "w-75 flex-grow-0",
        imageSize: 'small',
        round: true
      }, /*#__PURE__*/React.createElement(PlaceholderParagraph, {
        length: "large"
      })) : renderStatusHint({
        cellData: cellData
      }));
  }

  return null;
};
GridCell.displayName = 'GridCell';

var DraggableDropdown = function DraggableDropdown(props) {
  var options = props.options,
      onChange = props.onChange;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _React$useState3 = React.useState(options),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      tempOptions = _React$useState4[0],
      setTempOptions = _React$useState4[1];

  var _React$useState5 = React.useState('var(--spacing-8)'),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      triggerWidth = _React$useState6[0],
      setTriggerWidth = _React$useState6[1];

  React.useEffect(function () {
    setTempOptions(options);
  }, [open]);

  var handleParentChange = function handleParentChange(e) {
    setTempOptions(tempOptions.map(function (option) {
      return _objectSpread2(_objectSpread2({}, option), {}, {
        selected: e.target.checked
      });
    }));
  };

  var handleChildChange = function handleChildChange(e, index) {
    var newOptions = _toConsumableArray(tempOptions);

    newOptions[index] = _objectSpread2(_objectSpread2({}, newOptions[index]), {}, {
      selected: e.target.checked
    });
    setTempOptions(newOptions);
  };

  var onToggleHandler = function onToggleHandler(newOpen) {
    setOpen(newOpen);
  };

  var onCancelHandler = function onCancelHandler() {
    setOpen(false);
  };

  var onApplyHandler = function onApplyHandler() {
    setOpen(false);
    if (onChange) onChange(tempOptions);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "Dropdown"
  }, /*#__PURE__*/React.createElement(Popover, {
    open: open,
    onToggle: onToggleHandler,
    trigger: /*#__PURE__*/React.createElement(Button, {
      ref: function ref(el) {
        setTriggerWidth("".concat(el === null || el === void 0 ? void 0 : el.clientWidth, "px"));
      },
      size: "tiny",
      appearance: "transparent",
      icon: "keyboard_arrow_down_filled",
      iconAlign: "right"
    }, "Showing ".concat(options.filter(function (option) {
      return option.selected;
    }).length, " of ").concat(options.length, " column").concat(getPluralSuffix(options.length))),
    triggerClass: "w-100",
    customStyle: {
      width: triggerWidth
    },
    className: "Header-draggableDropdown"
  }, /*#__PURE__*/React.createElement("div", {
    className: "Dropdown-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "OptionWrapper"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    className: "OptionCheckbox",
    label: "Select All",
    checked: tempOptions.every(function (option) {
      return option.selected;
    }),
    indeterminate: tempOptions.some(function (option) {
      return option.selected;
    }) && tempOptions.some(function (option) {
      return !option.selected;
    }),
    onChange: handleParentChange
  })), tempOptions.map(function (option, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: option.value,
      className: "OptionWrapper d-flex flex-space-between align-items-center cursor-pointer",
      draggable: true,
      onDragStart: function onDragStart(e) {
        e.dataTransfer.setData('index', "".concat(index));
      },
      onDragOver: function onDragOver(e) {
        return e.preventDefault();
      },
      onDrop: function onDrop(e) {
        var from = +e.dataTransfer.getData('index');
        var to = index;
        if (from !== to) setTempOptions(moveToIndex(tempOptions, from, to));
      }
    }, /*#__PURE__*/React.createElement(Checkbox, {
      className: "OptionCheckbox",
      name: option.value,
      label: option.label,
      checked: tempOptions[index].selected,
      onChange: function onChange(e) {
        return handleChildChange(e, index);
      }
    }), /*#__PURE__*/React.createElement(Icon, {
      name: "drag_handle",
      className: "mr-4"
    }));
  })), /*#__PURE__*/React.createElement("div", {
    className: "Dropdown-buttonWrapper"
  }, /*#__PURE__*/React.createElement(Button, {
    className: "mr-4",
    size: "tiny",
    onClick: onCancelHandler
  }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
    appearance: "primary",
    size: "tiny",
    onClick: onApplyHandler
  }, "Apply"))));
};

var Header = function Header(props) {
  var loading = props.loading,
      error = props.error,
      data = props.data,
      schema = props.schema,
      withSearch = props.withSearch,
      showHead = props.showHead,
      withPagination = props.withPagination,
      page = props.page,
      pageSize = props.pageSize,
      withCheckbox = props.withCheckbox,
      children = props.children,
      updateSchema = props.updateSchema,
      _props$filterList = props.filterList,
      filterList = _props$filterList === void 0 ? {} : _props$filterList,
      updateFilterList = props.updateFilterList,
      _props$totalRecords = props.totalRecords,
      totalRecords = _props$totalRecords === void 0 ? 0 : _props$totalRecords,
      onSelectAll = props.onSelectAll,
      searchPlaceholder = props.searchPlaceholder,
      selectAll = props.selectAll,
      searchTerm = props.searchTerm,
      updateSearchTerm = props.updateSearchTerm,
      dynamicColumn = props.dynamicColumn,
      allowSelectAll = props.allowSelectAll,
      showFilters = props.showFilters;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      selectAllRecords = _React$useState2[0],
      setSelectAllRecords = _React$useState2[1];

  var _React$useState3 = React.useState(true),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      flag = _React$useState4[0],
      setFlag = _React$useState4[1];

  React.useEffect(function () {
    setFlag(!flag);
  }, [schema]);
  React.useEffect(function () {
    if (selectAll && selectAll.checked) {
      if (onSelectAll) onSelectAll(true, selectAllRecords);
    }
  }, [selectAllRecords]);
  React.useEffect(function () {
    if (selectAll && !selectAll.checked) setSelectAllRecords(false);
  }, [selectAll]);
  var filterSchema = schema.filter(function (s) {
    return s.filters;
  });

  var onSearchChange = function onSearchChange(e) {
    var value = e.target.value;

    if (updateSearchTerm) {
      updateSearchTerm(value);
    }
  };

  var onFilterChange = function onFilterChange(name, filters) {
    var newFilterList = _objectSpread2(_objectSpread2({}, filterList), {}, _defineProperty$2({}, name, filters));

    if (updateFilterList) {
      updateFilterList(newFilterList);
    }
  };

  var columnOptions = schema.map(function (s) {
    return {
      label: s.displayName,
      value: s.name,
      selected: !s.hidden
    };
  });

  var onDynamicColumnUpdate = function onDynamicColumnUpdate(options) {
    var newSchema = options.map(function (option) {
      return _objectSpread2(_objectSpread2({}, schema.find(function (colSchema) {
        return colSchema.name === option.value;
      })), {}, {
        hidden: !option.selected
        /* tslint:disable:no-object-literal-type-assertion */

      });
    });
    /* tslint:enable:no-object-literal-type-assertion */

    if (updateSchema) updateSchema(newSchema);
  };

  var selectedCount = data.filter(function (d) {
    return d._selected;
  }).length;
  var startIndex = (page - 1) * pageSize + 1;
  var endIndex = Math.min(page * pageSize, totalRecords);
  var label = error ? 'Showing 0 items' : withCheckbox && selectedCount ? selectAllRecords ? "Selected all ".concat(totalRecords, " item").concat(getPluralSuffix(totalRecords)) : "Selected ".concat(selectedCount, " item").concat(getPluralSuffix(totalRecords), " on this page") : withPagination ? "Showing ".concat(startIndex, "-").concat(endIndex, " of ").concat(totalRecords, " item").concat(getPluralSuffix(totalRecords)) : "Showing ".concat(totalRecords, " item").concat(getPluralSuffix(totalRecords));
  return /*#__PURE__*/React.createElement("div", {
    className: "Header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "Header-content Header-content--top"
  }, withSearch && /*#__PURE__*/React.createElement("div", {
    className: "Header-search"
  }, /*#__PURE__*/React.createElement(Input, {
    name: "GridHeader-search",
    icon: "search",
    placeholder: searchPlaceholder,
    onChange: onSearchChange,
    value: searchTerm,
    onClear: function onClear() {
      return updateSearchTerm && updateSearchTerm('');
    },
    disabled: loading && !getInit(schema)
  })), showFilters && filterSchema.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "Header-dropdown"
  }, /*#__PURE__*/React.createElement("div", {
    className: "Header-filters"
  }, filterSchema.map(function (s) {
    var name = s.name,
        displayName = s.displayName,
        filters = s.filters;
    var filterOptions = filters ? filters.map(function (f) {
      return _objectSpread2(_objectSpread2({}, f), {}, {
        selected: filterList[name] && filterList[name].findIndex(function (fl) {
          return fl === f.value;
        }) !== -1
      });
    }) : [];
    return /*#__PURE__*/React.createElement(Dropdown, {
      key: name,
      withCheckbox: true,
      showApplyButton: true,
      inlineLabel: displayName,
      icon: 'filter_list',
      options: filterOptions,
      onChange: function onChange(selected) {
        return onFilterChange(name, selected);
      }
    });
  }))), children && /*#__PURE__*/React.createElement("div", {
    className: "Header-actions"
  }, children)), /*#__PURE__*/React.createElement("div", {
    className: "Header-content Header-content--bottom"
  }, /*#__PURE__*/React.createElement("div", {
    className: "Header-label"
  }, !showHead && withCheckbox && !loading && /*#__PURE__*/React.createElement(Checkbox, _extends$3({}, selectAll, {
    onChange: function onChange(event) {
      if (onSelectAll) onSelectAll(event.target.checked);
    }
  })), loading ? /*#__PURE__*/React.createElement(Placeholder, {
    withImage: !showHead && withCheckbox
  }, /*#__PURE__*/React.createElement(PlaceholderParagraph, {
    length: 'small',
    size: 's'
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Label, null, label), withPagination && (selectAll === null || selectAll === void 0 ? void 0 : selectAll.checked) && allowSelectAll && /*#__PURE__*/React.createElement("div", {
    className: "ml-4"
  }, !selectAllRecords ? /*#__PURE__*/React.createElement(Button, {
    size: "tiny",
    onClick: function onClick() {
      return setSelectAllRecords(true);
    }
  }, "Select all ".concat(totalRecords, " items")) : /*#__PURE__*/React.createElement(Button, {
    size: "tiny",
    onClick: function onClick() {
      return setSelectAllRecords(false);
    }
  }, "Clear Selection")))), dynamicColumn && /*#__PURE__*/React.createElement("div", {
    className: "Header-hideColumns"
  }, /*#__PURE__*/React.createElement(DraggableDropdown, {
    options: columnOptions,
    onChange: onDynamicColumnUpdate
  }))));
};
Header.defaultProps = {
  schema: [],
  data: [],
  searchPlaceholder: 'Search',
  dynamicColumn: true,
  showFilters: true
};

var defaultErrorTemplate = function defaultErrorTemplate(props) {
  var _props$errorType = props.errorType,
      errorType = _props$errorType === void 0 ? 'DEFAULT' : _props$errorType;
  var errorMessages = {
    FAILED_TO_FETCH: 'Failed to fetch data',
    NO_RECORDS_FOUND: 'No results found',
    DEFAULT: 'No results found'
  };
  return /*#__PURE__*/React.createElement(Heading, null, errorMessages[errorType]);
};

var defaultProps = {
  type: 'data',
  size: 'standard',
  showHead: true,
  showMenu: true,
  multipleSorting: true,
  headerOptions: {},
  withPagination: true,
  paginationType: 'jump',
  page: 1,
  pageSize: 15,
  draggable: true,
  data: [],
  schema: [],
  loading: false,
  error: false,
  loaderSchema: [],
  sortingList: [],
  filterList: {},
  filterPosition: 'GRID',
  searchDebounceDuration: 750,
  errorTemplate: defaultErrorTemplate
};
/**
 * ###Note:
 * 1. Sync Table:
 *  - Manually toggle loading/error state to update data, schema.
 * 2. Async Table:
 *  - fetchData return:
 *    - Promise resolve with no records:
 *      error: true, errorType: 'NO\_RECORDS\_FOUND'
 *    - Promise reject:
 *      error: true, errorType: 'FAILED\_TO\_FETCH'
 * 3. Default errorTemplate:
 *
 * <pre class="DocPage-codeBlock mx-6 mb-7">
 * (props) => {
 *      const { errorType = 'DEFAULT' } = props;
 *      const errorMessages = {
 *        'FAILED\_TO\_FETCH': 'Failed to fetch data',
 *        'NO\_RECORDS\_FOUND': 'No results found',
 *        'DEFAULT': 'No results found'
 *      }
 *      return(
 *        \<Heading>{errorMessages[errorType]}\</Heading>
 *      );
 * }
 * </pre>
 */

var Table = /*#__PURE__*/function (_React$Component) {
  _inherits$1(Table, _React$Component);

  var _super = _createSuper$1(Table);

  function Table(props) {
    var _this;

    _classCallCheck$1(this, Table);

    _this = _super.call(this, props);

    _defineProperty$2(_assertThisInitialized$2(_this), "debounceUpdate", void 0);

    _defineProperty$2(_assertThisInitialized$2(_this), "updateData", function (searchUpdate) {
      if (_this.state.async) {
        _this.setState({
          loading: true
        });
      }

      if (searchUpdate) {
        _this.debounceUpdate();
      } else {
        _this.updateDataFn();
      }
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "updateDataFn", function () {
      var _this$props = _this.props,
          fetchData = _this$props.fetchData,
          pageSize = _this$props.pageSize,
          withPagination = _this$props.withPagination,
          dataProp = _this$props.data,
          onSearch = _this$props.onSearch;
      var _this$state = _this.state,
          async = _this$state.async,
          page = _this$state.page,
          sortingList = _this$state.sortingList,
          filterList = _this$state.filterList,
          searchTerm = _this$state.searchTerm;

      _this.onSelect(-1, false);

      var opts = {
        page: page,
        pageSize: pageSize,
        sortingList: sortingList,
        filterList: filterList,
        searchTerm: searchTerm
      };

      if (!_this.props.withPagination) {
        delete opts.page;
        delete opts.pageSize;
      }

      if (async) {
        if (fetchData) {
          fetchData(opts).then(function (res) {
            if (!res.searchTerm || res.searchTerm && res.searchTerm === _this.state.searchTerm) {
              var _data2 = res.data;
              var schema = _this.state.schema.length ? _this.state.schema : res.schema;

              _this.setState({
                data: _data2,
                schema: schema,
                selectAll: getSelectAll(_data2),
                totalRecords: res.count,
                loading: false,
                error: !_data2.length,
                errorType: 'NO_RECORDS_FOUND'
              });
            }
          })["catch"](function () {
            _this.setState({
              loading: false,
              error: true,
              errorType: 'FAILED_TO_FETCH'
            });
          });
        }
      } else {
        var schema = _this.state.schema;
        var filteredData = filterData(schema, dataProp, filterList);
        var searchedData = onSearch && opts.searchTerm !== undefined ? onSearch(filteredData, opts.searchTerm) : filteredData;
        var sortedData = sortData(schema, searchedData, sortingList);
        var renderedData = sortedData;
        var totalRecords = sortedData.length;

        if (withPagination && page && pageSize) {
          renderedData = paginateData(renderedData, page, pageSize);
        }

        var renderedSchema = _this.state.schema.length ? _this.state.schema : schema;

        _this.setState({
          totalRecords: totalRecords,
          error: !renderedData.length,
          errorType: 'NO_RECORDS_FOUND',
          selectAll: getSelectAll(renderedData),
          schema: renderedSchema,
          data: renderedData
        });
      }
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "onSelect", function (rowIndexes, selected) {
      var data = _this.state.data;
      var onSelect = _this.props.onSelect;
      var indexes = [rowIndexes];
      var newData = data;

      if (rowIndexes >= 0) {
        newData = updateBatchData(data, indexes, {
          _selected: selected
        });

        _this.setState({
          data: newData,
          selectAll: getSelectAll(newData)
        });
      }

      if (onSelect) {
        onSelect(indexes, selected, rowIndexes === -1 ? [] : newData.filter(function (d) {
          return d._selected;
        }));
      }
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "onSelectAll", function (selected, selectAll) {
      var onSelect = _this.props.onSelect;
      var data = _this.state.data;
      var indexes = Array.from({
        length: data.length
      }, function (_, i) {
        return i;
      });
      var newData = updateBatchData(data, indexes, {
        _selected: selected
      });

      if (onSelect) {
        onSelect(indexes, selected, newData.filter(function (d) {
          return d._selected;
        }), selectAll);
      }

      _this.setState({
        data: newData,
        selectAll: getSelectAll(newData)
      });
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "onPageChange", function (newPage) {
      _this.setState({
        page: newPage
      });
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "updateSchema", function (newSchema) {
      _this.setState({
        schema: newSchema
      });
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "updateSortingList", function (newSortingList) {
      var multipleSorting = _this.props.multipleSorting;

      _this.setState({
        sortingList: multipleSorting ? _toConsumableArray(newSortingList) : newSortingList.slice(-1),
        page: 1
      });
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "updateFilterList", function (newFilterList) {
      _this.setState({
        filterList: newFilterList,
        page: 1
      });
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "updateSearchTerm", function (newSearchTerm) {
      _this.setState({
        searchTerm: newSearchTerm,
        page: 1
      });
    });

    var _async = ('fetchData' in _this.props);

    var _data = props.data || [];

    var _schema = props.schema || [];

    _this.state = {
      async: _async,
      data: !_async ? _data : [],
      schema: !_async ? _schema : [],
      page: props.page,
      sortingList: props.sortingList,
      filterList: props.filterList,
      totalRecords: !_async ? _data.length : 0,
      loading: !_async ? props.loading : true,
      error: !_async ? props.error : false,
      errorType: props.errorType,
      selectAll: getSelectAll([]),
      searchTerm: undefined
    };
    _this.debounceUpdate = debounce$1(props.searchDebounceDuration, _this.updateDataFn);
    return _this;
  }

  _createClass$1(Table, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateData();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (!this.state.async) {
        if (prevProps.loading !== this.props.loading || prevProps.error !== this.props.error) {
          var _this$props2 = this.props,
              _this$props2$data = _this$props2.data,
              _data3 = _this$props2$data === void 0 ? [] : _this$props2$data,
              _this$props2$schema = _this$props2.schema,
              schema = _this$props2$schema === void 0 ? [] : _this$props2$schema;

          this.setState({
            data: _data3,
            schema: schema,
            loading: this.props.loading || false,
            error: this.props.error || false,
            errorType: this.props.errorType,
            page: 1,
            totalRecords: _data3.length || 0,
            selectAll: getSelectAll([])
          }, function () {
            _this2.updateData();
          });
        }
      }

      if (prevState.page !== this.state.page) {
        var onPageChange = this.props.onPageChange;
        if (onPageChange) onPageChange(this.state.page);
      }

      if (prevState.page !== this.state.page || prevState.filterList !== this.state.filterList || prevState.sortingList !== this.state.sortingList || prevState.searchTerm !== this.state.searchTerm) {
        if (!this.props.loading) {
          // let errorType = "";
          // let errorCount = 0;
          // if(prevState.page !== this.state.page) errorType = "ON_PAGE_CHANGE", errorCount++;
          // if(prevState.filterList !== this.state.filterList) errorType = "ON_FILTER_CHANGE", errorCount++;
          // if(prevState.sortingList !== this.state.sortingList) errorType = "ON_SORTING_CHANGE", errorCount++;
          // if(prevState.searchTerm !== this.state.searchTerm) errorType = "ON_SEARCH_CHANGE", errorCount++;
          // this.setState({
          //   errorType: errorCount > 1 ? "FAILED_TO_FETCH" : errorType
          // });
          var searchUpdate = prevState.searchTerm !== this.state.searchTerm;
          this.updateData(searchUpdate);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          showHead = _this$props3.showHead,
          type = _this$props3.type,
          size = _this$props3.size,
          headCellTooltip = _this$props3.headCellTooltip,
          separator = _this$props3.separator,
          draggable = _this$props3.draggable,
          nestedRows = _this$props3.nestedRows,
          nestedRowRenderer = _this$props3.nestedRowRenderer,
          withHeader = _this$props3.withHeader,
          headerOptions = _this$props3.headerOptions,
          withCheckbox = _this$props3.withCheckbox,
          showMenu = _this$props3.showMenu,
          withPagination = _this$props3.withPagination,
          paginationType = _this$props3.paginationType,
          pageSize = _this$props3.pageSize,
          onRowClick = _this$props3.onRowClick,
          loaderSchema = _this$props3.loaderSchema,
          errorTemplate = _this$props3.errorTemplate,
          className = _this$props3.className,
          filterPosition = _this$props3.filterPosition;
      var baseProps = extractBaseProps(this.props);

      var _ref = headerOptions,
          headerChildren = _ref.children,
          headerAttr = _objectWithoutProperties$1(_ref, ["children"]);

      var classes = className ? " ".concat(className) : '';
      var totalRecords = this.state.totalRecords;
      var totalPages = getTotalPages(totalRecords, pageSize);
      return /*#__PURE__*/React.createElement("div", _extends$3({}, baseProps, {
        className: "Table".concat(classes)
      }), withHeader && /*#__PURE__*/React.createElement("div", {
        className: "Table-header"
      }, /*#__PURE__*/React.createElement(Header, _extends$3({}, this.state, {
        // updateData={updateData}
        updateSchema: this.updateSchema // updateSortingList={updateSortingList}
        ,
        updateFilterList: this.updateFilterList,
        updateSearchTerm: this.updateSearchTerm,
        showHead: showHead,
        onSelectAll: this.onSelectAll,
        withCheckbox: withCheckbox,
        withPagination: withPagination,
        pageSize: pageSize,
        showFilters: filterPosition === 'HEADER'
      }, headerAttr), headerChildren)), /*#__PURE__*/React.createElement("div", {
        className: "Table-grid"
      }, /*#__PURE__*/React.createElement(Grid, _extends$3({}, this.state, {
        updateData: this.updateData,
        updateSchema: this.updateSchema,
        updateSortingList: this.updateSortingList,
        updateFilterList: this.updateFilterList,
        withCheckbox: withCheckbox,
        onSelect: this.onSelect,
        onSelectAll: this.onSelectAll,
        showMenu: showMenu,
        showHead: showHead,
        type: type,
        size: size,
        headCellTooltip: headCellTooltip,
        separator: separator,
        draggable: draggable,
        nestedRows: nestedRows,
        nestedRowRenderer: nestedRowRenderer,
        withPagination: withPagination && totalPages > 1,
        pageSize: pageSize,
        loaderSchema: loaderSchema,
        errorTemplate: errorTemplate && errorTemplate({
          errorType: this.state.errorType
        }),
        onRowClick: onRowClick,
        showFilters: filterPosition === 'GRID'
      }))), withPagination && !this.state.loading && !this.state.error && totalPages > 1 && /*#__PURE__*/React.createElement("div", {
        className: "Table-pagination"
      }, /*#__PURE__*/React.createElement(Pagination, {
        page: this.state.page,
        totalPages: getTotalPages(totalRecords, pageSize),
        type: paginationType,
        onPageChange: this.onPageChange
      })));
    }
  }]);

  return Table;
}(React.Component);

_defineProperty$2(Table, "defaultProps", defaultProps);

/**
 * **`List` is a pattern of `Table` with no Head Cells.**
 *
 * Please refer to stories of Table for examples. Simply replace `Table` with `List` to use it.
 */
var List = function List(props) {
  return /*#__PURE__*/React.createElement(Table, _extends$3({}, props, {
    showHead: false,
    filterPosition: 'HEADER'
  }));
};
List.defaultProps = defaultProps;

var useState$1 = React.useState;
var VerticalNavigation = function VerticalNavigation(props) {
  var menus = props.menus,
      active = props.active,
      onClick = props.onClick,
      expanded = props.expanded,
      rounded = props.rounded,
      onToggle = props.onToggle,
      footer = props.footer,
      autoCollapse = props.autoCollapse;

  var _useState = useState$1({}),
      _useState2 = _slicedToArray(_useState, 2),
      menuState = _useState2[0],
      setMenuState = _useState2[1];

  React.useEffect(function () {
    if (props.active) {
      var currMenu = getMenu(menus, props.active);
      if (currMenu) updateMenuState(currMenu, true);
    }
  }, [props.active]);

  var updateMenuState = function updateMenuState(menu, val) {
    var currMenu = getMenu(menus, menu);

    if (currMenu) {
      var nameSplit = currMenu.name.split('.');

      if (nameSplit.length > 1 || currMenu.subMenu) {
        var name = nameSplit[0];

        if (autoCollapse) {
          setMenuState(_defineProperty$2({}, name, val || !menuState[name]));
        } else {
          var menuData = _objectSpread2({}, menuState);

          menuData[name] = val !== undefined ? val : !menuData[name];
          setMenuState(menuData);
        }
      } else {
        if (autoCollapse) {
          if (!expanded) setMenuState({});
        }
      }
    }
  };

  var onClickHandler = function onClickHandler(menu) {
    if (!menu.disabled) {
      if (menu.subMenu) {
        if (!expanded) {
          if (onClick) onClick(menu.subMenu[0]);
        } else {
          updateMenuState(menu);
        }
      } else {
        if (onClick) onClick(menu);
      }
    }
  };

  var list = menus.map(function (menu, index) {
    var _classNames;

    var activeMenu = expanded && !menuState[menu.name] && isMenuActive(menus, menu, active);
    var activeMenuIcon = !expanded && isMenuActive(menus, menu, active) || activeMenu;
    var menuClasses = classnames((_classNames = {
      'Navigation-menu': true
    }, _defineProperty$2(_classNames, 'Navigation-menu--vertical', true), _defineProperty$2(_classNames, 'Navigation-menu--active', activeMenu), _defineProperty$2(_classNames, 'Navigation-menu--rounded', expanded && rounded), _classNames));
    var menuIconClasses = classnames({
      'Navigation-menuIcon': true,
      'Navigation-menuIcon--active': activeMenuIcon
    });
    return /*#__PURE__*/React.createElement("div", {
      key: index
    }, /*#__PURE__*/React.createElement("div", {
      className: menuClasses,
      onClick: function onClick() {
        return onClickHandler(menu);
      }
    }, menu.icon && /*#__PURE__*/React.createElement(Icon, {
      className: menuIconClasses,
      name: menu.icon,
      appearance: getIconAppearance(activeMenuIcon, menu.disabled)
    }), expanded && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "Navigation-menuLabel"
    }, /*#__PURE__*/React.createElement(Text, {
      appearance: getTextAppearance(activeMenu, menu.disabled)
    }, menu.label)), menu.subMenu && menu.subMenu.length > 0 && /*#__PURE__*/React.createElement(Icon, {
      className: "mx-4",
      name: menuState[menu.name] ? 'keyboard_arrow_up' : 'keyboard_arrow_down',
      appearance: "subtle"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "Navigation-subMenu"
    }, menuState[menu.name] && menu.subMenu && expanded && menu.subMenu.map(function (subMenu, ind) {
      var _classNames2;

      var isActive = isMenuActive(menus, subMenu, active);
      var subMenuClasses = classnames(menuClasses, (_classNames2 = {}, _defineProperty$2(_classNames2, 'Navigation-menu--subMenu', true), _defineProperty$2(_classNames2, 'Navigation-menu--active', isActive), _classNames2));
      return /*#__PURE__*/React.createElement("div", {
        key: ind,
        className: subMenuClasses,
        onClick: function onClick() {
          return onClickHandler(subMenu);
        }
      }, /*#__PURE__*/React.createElement(Text, {
        appearance: getTextAppearance(isActive, subMenu.disabled)
      }, subMenu.label));
    })));
  });
  var footerClasses = classnames(_defineProperty$2({
    'Navigation-footer': true
  }, 'Navigation-footer--border', true));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "Navigation-body"
  }, list), footer && /*#__PURE__*/React.createElement("div", {
    className: footerClasses
  }, /*#__PURE__*/React.createElement(Icon, {
    className: "Navigation-menuIcon Navigation-menuIcon--footer",
    name: "menu_open",
    size: 16,
    onClick: function onClick() {
      return onToggle && onToggle(!expanded);
    }
  })));
};
VerticalNavigation.defaultProps = {
  expanded: true,
  autoCollapse: true,
  rounded: false
};

/**
 * ####NOTE: Navigation will be deprecated soon. VerticalNav and HorizontalNav will be supported.
 */
var Navigation = function Navigation(props) {
  var _classNames;

  var type = props.type,
      align = props.align,
      menus = props.menus,
      active = props.active,
      onClick = props.onClick,
      expanded = props.expanded,
      rounded = props.rounded,
      onToggle = props.onToggle,
      footer = props.footer,
      autoCollapse = props.autoCollapse,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var classes = classnames((_classNames = {}, _defineProperty$2(_classNames, 'Navigation', true), _defineProperty$2(_classNames, "Navigation--".concat(type), type), _defineProperty$2(_classNames, 'justify-content-center', type === 'horizontal' && align === 'center'), _defineProperty$2(_classNames, 'justify-content-start', type === 'horizontal' && align === 'left'), _defineProperty$2(_classNames, 'Navigation--collapsed', !expanded), _classNames), className);

  var renderNavigation = function renderNavigation() {
    return type === 'horizontal' ? /*#__PURE__*/React.createElement(HorizontalNav, {
      menus: menus,
      active: active,
      onClick: onClick
    }) : /*#__PURE__*/React.createElement(VerticalNavigation, {
      menus: menus,
      active: active,
      autoCollapse: autoCollapse,
      expanded: expanded,
      rounded: rounded,
      footer: footer,
      onToggle: onToggle,
      onClick: onClick
    });
  };

  return /*#__PURE__*/React.createElement("div", _extends$3({}, baseProps, {
    className: classes
  }), renderNavigation());
};
Navigation.defaultProps = {
  type: 'horizontal',
  align: 'center',
  expanded: true,
  autoCollapse: true,
  rounded: false
};

var PageHeader = function PageHeader(props) {
  var _classNames;

  var title = props.title,
      navigation = props.navigation,
      stepper = props.stepper,
      actions = props.actions,
      tabs = props.tabs,
      breadcrumbs = props.breadcrumbs,
      badge = props.badge,
      separator = props.separator,
      status = props.status,
      meta = props.meta,
      navigationPosition = props.navigationPosition,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var wrapperClasses = classnames((_classNames = {
    'PageHeader-wrapper': true
  }, _defineProperty$2(_classNames, 'PageHeader-wrapper--separator', separator), _defineProperty$2(_classNames, 'PageHeader-wrapper--withTabs', tabs), _classNames), className);
  var classes = classnames({
    PageHeader: true
  });

  var renderCenter = function renderCenter() {
    return navigation ? navigation : stepper;
  };

  return /*#__PURE__*/React.createElement("div", _extends$3({}, baseProps, {
    className: wrapperClasses
  }), breadcrumbs, /*#__PURE__*/React.createElement("div", {
    className: classes
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Column, {
    size: "4",
    sizeXL: "4",
    sizeM: "4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "PageHeader-titleWrapper"
  }, /*#__PURE__*/React.createElement(Heading, {
    className: "PageHeader-title"
  }, title), badge)), /*#__PURE__*/React.createElement(Column, {
    size: "4",
    sizeXL: "4",
    sizeM: "4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "PageHeader-navigationWrapper"
  }, (!breadcrumbs || navigationPosition === 'center') && renderCenter())), /*#__PURE__*/React.createElement(Column, {
    size: "4",
    sizeXL: "4",
    sizeM: "4"
  }, actions))), (status || meta) && /*#__PURE__*/React.createElement("div", {
    className: "PageHeader-statusWrapper"
  }, status, meta), breadcrumbs && navigationPosition === 'bottom' && /*#__PURE__*/React.createElement("div", {
    className: "PageHeader-navigationWrapper"
  }, renderCenter()), tabs && /*#__PURE__*/React.createElement("div", null, tabs));
};
PageHeader.defaultProps = {
  navigationPosition: 'center',
  separator: true
};

var useEffect = React.useEffect,
    useState = React.useState;
var IconMapping = {
  audio: 'audiotrack',
  image: 'image',
  video: 'movie',
  application: 'insert_drive_file',
  others: 'text_snippet'
};
var FileIcon = function FileIcon(props) {
  var _classNames, _classNames2;

  var progress = props.progress,
      status = props.status,
      file = props.file;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      animate = _useState2[0],
      setAnimate = _useState2[1];

  var type = file.type.split('/')[0] || 'others';
  var fileType = IconMapping[type] ? type : 'others';
  var iconClass = classnames((_classNames = {}, _defineProperty$2(_classNames, 'FileIcon', true), _defineProperty$2(_classNames, 'FileIcon--animate', animate), _defineProperty$2(_classNames, "FileIcon--".concat(fileType), true), _classNames));
  var uploadingIconClass = classnames((_classNames2 = {}, _defineProperty$2(_classNames2, 'FileIcon', true), _defineProperty$2(_classNames2, 'FileIcon--uploading', true), _classNames2));
  useEffect(function () {
    if (status === 'completed') {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [status]);

  if (status === 'uploading') {
    return /*#__PURE__*/React.createElement(ProgressRing, {
      size: "small",
      value: progress || 0,
      className: uploadingIconClass
    });
  }

  return /*#__PURE__*/React.createElement(Icon, {
    name: IconMapping[fileType],
    className: iconClass
  });
};
FileIcon.displayName = 'FileIcon';
FileIcon.defaultProps = {
  progress: 0,
  status: 'completed'
};

var FileListItem = function FileListItem(props) {
  var progress = props.progress,
      errorMessage = props.errorMessage,
      onClick = props.onClick,
      className = props.className,
      actions = props.actions,
      fileItem = props.fileItem,
      file = props.file,
      status = props.status,
      fileSize = props.fileSize;
  var name = file.name;
  var baseProps = extractBaseProps(props);
  var FileItemClass = classnames(_defineProperty$2({}, 'FileItem', true), className);

  var onClickHandler = function onClickHandler() {
    if (onClick) {
      onClick(fileItem);
    }
  };

  return /*#__PURE__*/React.createElement("div", _extends$3({}, baseProps, {
    className: FileItemClass,
    onClick: onClickHandler
  }), /*#__PURE__*/React.createElement("div", {
    className: "FileItem-file"
  }, /*#__PURE__*/React.createElement("div", {
    className: "FileItem-fileContent"
  }, /*#__PURE__*/React.createElement(FileIcon, {
    file: file,
    status: status,
    progress: progress
  }), /*#__PURE__*/React.createElement(Text, {
    className: "FileItem-text",
    appearance: status === 'completed' ? 'default' : 'subtle'
  }, name)), /*#__PURE__*/React.createElement("div", {
    className: "FileItem-actions"
  }, /*#__PURE__*/React.createElement(Text, {
    className: "FileItem-size",
    appearance: 'subtle'
  }, fileSize || file.size), !!actions && actions)), status === 'error' && /*#__PURE__*/React.createElement(Caption, {
    className: 'FileItem-error',
    error: true
  }, errorMessage));
};
FileListItem.defaultProps = {
  progress: 0,
  errorMessage: 'Network Error'
};
FileListItem.displayName = 'FileListItem';

var FileList = function FileList(props) {
  var fileList = props.fileList,
      onClick = props.onClick,
      actionRenderer = props.actionRenderer,
      className = props.className;
  var baseProps = extractBaseProps(props);
  if (fileList.length === 0) return null;
  return /*#__PURE__*/React.createElement(Card, _extends$3({}, baseProps, {
    shadow: 'none',
    className: className
  }), fileList.map(function (fileItem, index) {
    return /*#__PURE__*/React.createElement(FileListItem, _extends$3({
      key: index,
      onClick: onClick,
      actions: actionRenderer && actionRenderer(fileItem),
      fileItem: fileItem
    }, fileItem));
  }));
};
FileList.defaultProps = {
  fileList: []
};
FileList.displayName = 'FileList';

var KEY_CODE = {
  backspace: 'Backspace',
  left: 'ArrowLeft',
  up: 'ArrowUp',
  right: 'ArrowRight',
  down: 'ArrowDown',
  e: 'e',
  E: 'E'
};

var VerificationCodeInput = function VerificationCodeInput(props) {
  var _props$type = props.type,
      type = _props$type === void 0 ? 'number' : _props$type,
      _props$fields = props.fields,
      fields = _props$fields === void 0 ? 4 : _props$fields,
      _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? '_' : _props$placeholder,
      _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? true : _props$autoFocus,
      onComplete = props.onComplete,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      className = props.className;
      props.value;
      var rest = _objectWithoutProperties$1(props, ["type", "fields", "placeholder", "autoFocus", "onComplete", "onFocus", "onBlur", "className", "value"]);

  var initialValues = useMemo(function () {
    if (props.value && props.value.length) {
      return props.value.split('');
    }

    return Array(fields).fill('');
  }, []);
  var initialRefs = useMemo(function () {
    return _toConsumableArray(Array(fields)).map(function () {
      return /*#__PURE__*/React__default.createRef();
    });
  }, []);

  var _useState = useState$3(initialValues),
      _useState2 = _slicedToArray(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  var _useState3 = useState$3(initialRefs),
      _useState4 = _slicedToArray(_useState3, 1),
      refs = _useState4[0];

  useEffect$2(function () {
    if (refs[0] && refs[0].current && autoFocus) {
      refs[0].current.focus({
        preventScroll: true
      });
    }
  }, []);
  useEffect$2(function () {
    var completeValue = values.join('');

    if (onComplete && completeValue.length === fields) {
      onComplete(completeValue);
    }
  }, [values]);

  var onChangeHandler = function onChangeHandler(e) {
    var index = parseInt(e.target.dataset.id, 10);
    var fieldValue = e.target.value;
    var nextRef;

    var newValues = _toConsumableArray(values);

    if (!fieldValue) {
      return;
    }

    if (fieldValue.length > 1) {
      var nextIndex = fieldValue.length + index - 1;

      if (nextIndex >= fields) {
        nextIndex = fields - 1;
      }

      nextRef = refs[nextIndex];
      var split = fieldValue.split('');
      split.forEach(function (item, i) {
        var cursor = index + i;

        if (cursor < fields) {
          newValues[cursor] = item;
        }
      });
      setValues(newValues);
    } else {
      nextRef = refs[index + 1];
      newValues[index] = fieldValue;
      setValues(newValues);
    }

    if (nextRef && nextRef.current) {
      nextRef.current.focus({
        preventScroll: true
      });
      nextRef.current.select();
    }
  };

  var onFocusHandler = function onFocusHandler(e) {
    e.target.select();
    e.target.placeholder = '';

    if (onFocus) {
      onFocus(e);
    }
  };

  var onBlurHandler = function onBlurHandler(e) {
    e.target.placeholder = placeholder;

    if (onBlur) {
      onBlur(e);
    }
  };

  var onKeyDown = function onKeyDown(e) {
    var index = parseInt(e.currentTarget.dataset.id, 10);
    var prevIndex = index - 1;
    var nextIndex = index + 1;
    var prev = refs[prevIndex];
    var nextRef = refs[nextIndex];

    switch (e.key) {
      case KEY_CODE.backspace:
        e.preventDefault();

        var vals = _toConsumableArray(values);

        if (values[index]) {
          vals[index] = '';
          setValues(vals);
        } else if (prev && prev.current) {
          vals[prevIndex] = '';
          prev.current.focus({
            preventScroll: true
          });
          setValues(vals);
        }

        break;

      case KEY_CODE.left:
        e.preventDefault();

        if (prev && prev.current) {
          prev.current.focus({
            preventScroll: true
          });
        }

        break;

      case KEY_CODE.right:
        e.preventDefault();

        if (nextRef && nextRef.current) {
          nextRef.current.focus({
            preventScroll: true
          });
        }

        break;

      case KEY_CODE.up:
      case KEY_CODE.down:
      case KEY_CODE.e:
      case KEY_CODE.E:
        if (type === 'number') {
          e.preventDefault();
        }

        break;
    }
  };

  var wrapperClassNames = function wrapperClassNames(i) {
    return classnames({
      'VerificationCodeInput-Input': true,
      'ml-4': i > 0
    }, className);
  };

  return /*#__PURE__*/React__default.createElement("div", {
    "data-test": "DesignSystem-VerificationCodeInput",
    className: "VerificationCodeInput"
  }, values.map(function (val, index) {
    return /*#__PURE__*/React__default.createElement(Input, _extends$3({
      key: index,
      className: wrapperClassNames(index),
      size: "large",
      minWidth: "40px",
      value: val,
      placeholder: placeholder,
      onChange: onChangeHandler,
      onKeyDown: onKeyDown,
      onFocus: onFocusHandler,
      onBlur: onBlurHandler,
      "data-id": index,
      ref: refs[index]
    }, rest));
  }));
};

VerificationCodeInput.displayName = 'VerificationCodeInput';

var version = "2.1.0";

export { Avatar, AvatarGroup, Backdrop, Badge, Breadcrumbs, Button, Calendar, Caption, Card, CardBody, CardFooter, CardHeader, CardSubdued, ChatMessage, Checkbox, Chip, ChipGroup, ChipInput, Collapsible, Column, DatePicker, DateRangePicker, Dialog, Dropdown, Dropzone, EditableDropdown, EditableInput, EmptyState, FileList, FileUploader, FileUploaderList, FullscreenModal, Grid, GridCell, Heading, HorizontalNav, Icon, Input, InputMask, Label, Legend, Link, List, Message, MetaList, MetricInput, Modal, ModalBody, ModalDescription, ModalFooter, ModalHeader, Navigation, OutsideClick, PageHeader, Pagination, Paragraph, Pills, Placeholder, PlaceholderParagraph, Popover, ProgressBar, ProgressRing, Radio, RangeSlider, Row, Sidesheet, Slider, Spinner, StatusHint, Stepper, Subheading, Switch, Tab, Table, Tabs, TabsWrapper, Text, Textarea, TimePicker, Toast, Tooltip, index$1 as Utils, VerificationCodeInput, VerticalNav, version };
