
  /**
   * Generated on: 1716891583546 
   *      Package: @innovaccer/design-system
   *      Version: v2.34.0
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
        _defineProperty$1(target, key, source[key]);
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

function _defineProperty$1(obj, key, value) {
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

function _extends$2() {
  _extends$2 = Object.assign || function (target) {
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

  return _extends$2.apply(this, arguments);
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

function _objectWithoutPropertiesLoose$1(source, excluded) {
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

  var target = _objectWithoutPropertiesLoose$1(source, excluded);

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

function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized$1(self);
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

var placeholders = (_placeholders = {}, _defineProperty$1(_placeholders, 'hh:mm', '--:--'), _defineProperty$1(_placeholders, 'hh:mm AM', '--:-- AM'), _placeholders);
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

  if (val) {
    switch (format) {
      case 'dd/mm/yyyy':
        {
          var p = val.split('/');

          var _date = +p[0] || 1;

          var month = +p[1] || 1;
          var year = +p[2] || 1900;
          return validate(_date, month, year);
        }

      case 'mm/dd/yyyy':
        {
          var _p = val.split('/');

          var _date2 = +_p[1] || 1;

          var _month = +_p[0] || 1;

          var _year = +_p[2] || 1900;

          return validate(_date2, _month, _year);
        }

      case 'yyyy/mm/dd':
        {
          var _p2 = val.split('/');

          var _date3 = +_p2[2] || 1;

          var _month2 = +_p2[1] || 1;

          var _year2 = +_p2[0] || 1900;

          return validate(_date3, _month2, _year2);
        }

      case 'dd-mm-yyyy':
        {
          var _p3 = val.split('-');

          var _date4 = +_p3[0] || 1;

          var _month3 = +_p3[1] || 1;

          var _year3 = +_p3[2] || 1900;

          return validate(_date4, _month3, _year3);
        }

      case 'mm-dd-yyyy':
        {
          var _p4 = val.split('-');

          var _date5 = +_p4[1] || 1;

          var _month4 = +_p4[0] || 1;

          var _year4 = +_p4[2] || 1900;

          return validate(_date5, _month4, _year4);
        }

      case 'yyyy-mm-dd':
        {
          var _p5 = val.split('-');

          var _date6 = +_p5[2] || 1;

          var _month5 = +_p5[1] || 1;

          var _year5 = +_p5[0] || 1900;

          return validate(_date6, _month5, _year5);
        }

      default:
        return false;
    }
  }

  return false;
};
var time$1 = function time(val, format) {
  var _getTimeObjFromStr = getTimeObjFromStr(format, val),
      hours = _getTimeObjFromStr.hours,
      minutes = _getTimeObjFromStr.minutes;

  var hoursCond = isFormat12hour(format) ? hours <= 12 : hours < 24;
  return hoursCond && minutes <= 60;
};
var isNaturalNumber = function isNaturalNumber(val) {
  if (typeof val === 'string' && /[^0-9]/.test(val) || typeof val === 'number' && (val <= 0 || val - Math.floor(val) !== 0)) {
    return false;
  }

  return true;
};

var validators = /*#__PURE__*/Object.freeze({
  __proto__: null,
  isValid: isValid,
  date: date$1,
  time: time$1,
  isNaturalNumber: isNaturalNumber
});

var _time;

var date = {
  'dd/mm/yyyy': [/[0123]/, /\d/, '/', /[01]/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
  'mm/dd/yyyy': [/[01]/, /\d/, '/', /[0123]/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
  'yyyy/mm/dd': [/\d/, /\d/, /\d/, /\d/, '/', /[01]/, /\d/, '/', /[0123]/, /\d/],
  'dd-mm-yyyy': [/[0123]/, /\d/, '-', /[01]/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  'mm-dd-yyyy': [/[01]/, /\d/, '-', /[0123]/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  'yyyy-mm-dd': [/\d/, /\d/, /\d/, /\d/, '-', /[01]/, /\d/, '-', /[0123]/, /\d/]
};
var rangeDate = {
  'dd/mm/yyyy': [/[0123]/, /\d/, '/', /[01]/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, ' ', '-', ' ', /[0123]/, /\d/, '/', /[01]/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
  'mm/dd/yyyy': [/[01]/, /\d/, '/', /[0123]/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, ' ', '-', ' ', /[01]/, /\d/, '/', /[0123]/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
  'yyyy/mm/dd': [/\d/, /\d/, /\d/, /\d/, '/', /[01]/, /\d/, '/', /[0123]/, /\d/, ' ', '-', ' ', /\d/, /\d/, /\d/, /\d/, '/', /[01]/, /\d/, '/', /[0123]/, /\d/],
  'dd-mm-yyyy': [/[0123]/, /\d/, '-', /[01]/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, ' ', '-', ' ', /[0123]/, /\d/, '-', /[01]/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  'mm-dd-yyyy': [/[01]/, /\d/, '-', /[0123]/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, ' ', '-', ' ', /[01]/, /\d/, '-', /[0123]/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  'yyyy-mm-dd': [/\d/, /\d/, /\d/, /\d/, '-', /[01]/, /\d/, '-', /[0123]/, /\d/, ' ', '-', ' ', /\d/, /\d/, /\d/, /\d/, '-', /[01]/, /\d/, '-', /[0123]/, /\d/]
};
var time = (_time = {}, _defineProperty$1(_time, 'hh:mm', [/[0-1-2]/, /\d/, ':', /[0-5]/, /\d/]), _defineProperty$1(_time, 'hh:mm AM', [/[0-1]/, /\d/, ':', /[0-5]/, /\d/, ' ', /[APap]/, 'M']), _time);

var masks = /*#__PURE__*/Object.freeze({
  __proto__: null,
  date: date,
  rangeDate: rangeDate,
  time: time
});

var index = /*#__PURE__*/Object.freeze({
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
    return props[curr] ? _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty$1({}, curr, props[curr])) : _objectSpread2({}, acc);
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

var AvatarContext = /*#__PURE__*/React.createContext({
  size: 'regular',
  appearance: 'secondary',
  firstName: '',
  lastName: ''
});
var AvatarProvider = AvatarContext.Provider;

var appearanceMapper = {
  secondary: 'inverse',
  primary: 'white',
  alert: 'white',
  accent2: 'white',
  accent3: 'white',
  warning: 'warning_darker',
  success: 'success_darker',
  accent1: 'accent1_darker',
  accent4: 'accent4_darker'
};
var AvatarIcon = function AvatarIcon(props) {
  var contextProp = React.useContext(AvatarContext);
  var size = contextProp.size,
      appearance = contextProp.appearance;
  var iconSize = size === 'regular' ? 20 : 16;
  var iconAppearance = appearance && appearanceMapper[appearance] || 'inverse';
  return /*#__PURE__*/React.createElement(Icon, _extends$2({}, props, {
    size: iconSize,
    appearance: iconAppearance
  }));
};

var sizeMapper = {
  regular: 32,
  tiny: 24
};
var AvatarImage = function AvatarImage(props) {
  var _classNames;

  var children = props.children,
      src = props.src;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      error = _React$useState2[0],
      setError = _React$useState2[1];

  var contextProp = React.useContext(AvatarContext);
  var size = contextProp.size,
      appearance = contextProp.appearance,
      firstName = contextProp.firstName,
      lastName = contextProp.lastName;
  var baseProps = extractBaseProps(props);
  var initials = "".concat(firstName ? firstName.trim()[0] : '').concat(lastName ? lastName.trim()[0] : '');
  var imgSize = size && sizeMapper[size];
  var TextClassNames = classnames((_classNames = {}, _defineProperty$1(_classNames, "Avatar-content--".concat(size), size), _defineProperty$1(_classNames, "Avatar-content--".concat(appearance), appearance), _classNames));
  var IconClassNames = classnames(_defineProperty$1({}, "Avatar-content--".concat(appearance), appearance));

  var onError = function onError() {
    setError(true);
  };

  if (children) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, children);
  }

  if (error) {
    if (initials) {
      return /*#__PURE__*/React.createElement(Text, _extends$2({
        weight: "medium",
        appearance: 'white',
        className: TextClassNames
      }, baseProps), initials);
    }

    return /*#__PURE__*/React.createElement(Icon, {
      "data-test": "DesignSystem-Avatar--Icon",
      name: "person",
      size: size === 'regular' ? 20 : 16,
      appearance: "white",
      className: IconClassNames
    });
  }

  return /*#__PURE__*/React.createElement("img", _extends$2({
    "data-test": "DesignSystem-Image",
    src: src,
    alt: firstName
  }, baseProps, {
    height: imgSize,
    width: imgSize,
    onError: onError
  }));
};

var initialsLength = 2;
var DefaultAppearance = 'secondary';
var colors = ['accent4', 'primary', 'accent3', 'alert', 'accent2', 'warning', 'accent1', 'success'];
var Avatar = function Avatar(props) {
  var _classNames, _classNames2, _classNames3;

  var withTooltip = props.withTooltip,
      tooltipPosition = props.tooltipPosition,
      size = props.size,
      children = props.children,
      firstName = props.firstName,
      lastName = props.lastName,
      className = props.className,
      appearance = props.appearance,
      shape = props.shape,
      _props$role = props.role,
      role = _props$role === void 0 ? 'presentation' : _props$role;
  var baseProps = extractBaseProps(props);
  var initials = children && typeof children === 'string' ? children.trim().slice(0, initialsLength) : "".concat(firstName ? firstName.trim()[0] : '').concat(lastName ? lastName.trim()[0] : '');
  var tooltip = children && typeof children === 'string' ? children : "".concat(firstName || '', " ").concat(lastName || '') || '';
  var AvatarAppearance = appearance || colors[(initials.charCodeAt(0) + (initials.charCodeAt(1) || 0)) % 8] || DefaultAppearance;
  var AvatarClassNames = classnames((_classNames = {
    Avatar: true
  }, _defineProperty$1(_classNames, 'Avatar--square', shape === 'square'), _defineProperty$1(_classNames, "Avatar--".concat(size), shape !== 'square'), _defineProperty$1(_classNames, "Avatar--".concat(AvatarAppearance), AvatarAppearance), _defineProperty$1(_classNames, 'Avatar--disabled', !initials || !withTooltip), _classNames), className);
  var AvatarWrapperClassNames = classnames((_classNames2 = {}, _defineProperty$1(_classNames2, 'Avatar--wrapper', shape === 'square'), _defineProperty$1(_classNames2, "Avatar--".concat(size), shape === 'square'), _classNames2));
  var TextClassNames = classnames((_classNames3 = {}, _defineProperty$1(_classNames3, "Avatar-content--".concat(size), size), _defineProperty$1(_classNames3, "Avatar-content--".concat(AvatarAppearance), AvatarAppearance), _classNames3));
  var IconClassNames = classnames(_defineProperty$1({}, "Avatar-content--".concat(AvatarAppearance), AvatarAppearance));
  var sharedProp = {
    size: size,
    firstName: firstName,
    lastName: lastName,
    appearance: AvatarAppearance
  };

  var renderAvatar = function renderAvatar() {
    if (children && typeof children !== 'string') {
      return /*#__PURE__*/React.createElement("span", {
        "data-test": "DesignSystem-AvatarWrapper",
        className: AvatarWrapperClassNames,
        role: role
      }, /*#__PURE__*/React.createElement(AvatarProvider, {
        value: sharedProp
      }, /*#__PURE__*/React.createElement("span", _extends$2({
        "data-test": "DesignSystem-Avatar"
      }, baseProps, {
        className: AvatarClassNames
      }), children)));
    }

    return /*#__PURE__*/React.createElement("span", {
      "data-test": "DesignSystem-AvatarWrapper",
      className: AvatarWrapperClassNames,
      role: role
    }, /*#__PURE__*/React.createElement("span", _extends$2({
      "data-test": "DesignSystem-Avatar"
    }, baseProps, {
      className: AvatarClassNames
    }), initials && /*#__PURE__*/React.createElement(Text, {
      weight: "medium",
      appearance: 'white',
      className: TextClassNames
    }, initials), !initials && /*#__PURE__*/React.createElement(Icon, {
      "data-test": "DesignSystem-Avatar--Icon",
      name: "person",
      size: size === 'regular' ? 20 : 16,
      appearance: 'white',
      className: IconClassNames
    })));
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
Avatar.Icon = AvatarIcon;
Avatar.Image = AvatarImage;
Avatar.defaultProps = {
  tooltipPosition: 'bottom',
  withTooltip: true,
  size: 'regular',
  shape: 'round'
};

var AvatarCount = function AvatarCount(props) {
  var _classNames, _classNames2;

  var hiddenAvatarCount = props.hiddenAvatarCount,
      avatarStyle = props.avatarStyle,
      size = props.size,
      on = props.on;
  var ContentClass = classnames((_classNames = {}, _defineProperty$1(_classNames, "Avatar-content--secondary", true), _defineProperty$1(_classNames, "Avatar-content--tiny", size === 'tiny'), _classNames));
  var AvatarVariantsClass = classnames((_classNames2 = {
    Avatar: true
  }, _defineProperty$1(_classNames2, "Avatar--regular", size === 'regular'), _defineProperty$1(_classNames2, "Avatar--tiny", size === 'tiny'), _defineProperty$1(_classNames2, "Avatar--secondary", true), _defineProperty$1(_classNames2, 'Avatar--disabled', true), _defineProperty$1(_classNames2, 'cursor-pointer', on === 'click'), _classNames2));
  return /*#__PURE__*/React.createElement("div", {
    "data-test": "DesignSystem-AvatarGroup--TriggerAvatar",
    className: "AvatarCount-wrapper",
    style: avatarStyle
  }, /*#__PURE__*/React.createElement("span", {
    "data-test": "DesignSystem-AvatarGroup--TriggerAvatarVariants",
    className: AvatarVariantsClass
  }, /*#__PURE__*/React.createElement(Text, {
    appearance: 'white',
    className: ContentClass
  }, "+".concat(hiddenAvatarCount))));
};

var Avatars = function Avatars(props) {
  var _classNames;

  var avatarList = props.avatarList,
      avatarStyle = props.avatarStyle,
      tooltipPosition = props.tooltipPosition,
      size = props.size;
  var GroupClass = classnames((_classNames = {}, _defineProperty$1(_classNames, "AvatarGroup-item", true), _defineProperty$1(_classNames, "AvatarGroup-item--tiny", size === 'tiny'), _defineProperty$1(_classNames, "AvatarGroup-item--regular", size === 'regular'), _classNames));
  var avatars = avatarList.map(function (item, index) {
    var appearance = item.appearance,
        firstName = item.firstName,
        lastName = item.lastName,
        icon = item.icon,
        image = item.image;
    return /*#__PURE__*/React.createElement("div", {
      "data-test": "DesignSystem-AvatarGroup--Avatar",
      className: GroupClass,
      style: avatarStyle,
      key: index
    }, /*#__PURE__*/React.createElement(Avatar, {
      size: size,
      appearance: appearance,
      firstName: firstName,
      lastName: lastName,
      withTooltip: true,
      tooltipPosition: tooltipPosition
    }, image || icon));
  });
  return avatars;
};

var AvatarPopperBody = function AvatarPopperBody(props) {
  var hiddenAvatarList = props.hiddenAvatarList,
      popperRenderer = props.popperRenderer,
      maxHeight = props.maxHeight,
      dark = props.dark;

  if (popperRenderer) {
    return popperRenderer(hiddenAvatarList);
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "px-4 py-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "AvatarGroup-TextWrapper",
    style: {
      maxHeight: maxHeight
    }
  }, hiddenAvatarList.map(function (item, ind) {
    var _item$firstName = item.firstName,
        firstName = _item$firstName === void 0 ? '' : _item$firstName,
        _item$lastName = item.lastName,
        lastName = _item$lastName === void 0 ? '' : _item$lastName;
    var name = "".concat(firstName, " ").concat(lastName);
    var AvatarTextClass = classnames(_defineProperty$1({}, "mb-4", ind < hiddenAvatarList.length - 1));
    return /*#__PURE__*/React.createElement(Text, {
      key: ind,
      appearance: dark ? 'white' : 'default',
      className: AvatarTextClass,
      "data-test": "DesignSystem-AvatarGroup--Text"
    }, name);
  })));
};

var AvatarGroup = function AvatarGroup(props) {
  var max = props.max,
      borderColor = props.borderColor,
      popoverOptions = props.popoverOptions,
      tooltipPosition = props.tooltipPosition,
      list = props.list,
      className = props.className,
      size = props.size;
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
  var hiddenAvatarCount = list.length > max ? Math.min(list.length - max, 99) : 0;
  var style = {
    backgroundColor: "".concat(borderColor),
    boxShadow: "0 0 0  calc(var(--spacing-xs) + var(--spacing-s)) ".concat(borderColor)
  };
  var tinyAvatarStyle = {
    boxShadow: "0 0 0  var(--spacing-s) ".concat(borderColor)
  };
  var avatarStyle = size === 'tiny' ? _objectSpread2(_objectSpread2({}, style), tinyAvatarStyle) : style;
  var avatarList = list.length === 3 ? list : list.slice(0, max);
  var AvatarGroupClass = classnames(_defineProperty$1({}, 'AvatarGroup', true), className);
  var popperClass = classnames(_defineProperty$1({}, 'AvatarGroup-Popper', true), popperClassName);
  return /*#__PURE__*/React.createElement("div", _extends$2({
    "data-test": "DesignSystem-AvatarGroup"
  }, baseProps, {
    className: "".concat(AvatarGroupClass, " d-inline-flex")
  }), /*#__PURE__*/React.createElement(Avatars, {
    size: size,
    avatarList: avatarList,
    avatarStyle: avatarStyle,
    tooltipPosition: tooltipPosition
  }), list.length - max > 0 && list.length !== 3 && /*#__PURE__*/React.createElement(Popover, {
    on: on,
    dark: dark,
    trigger: /*#__PURE__*/React.createElement(AvatarCount, {
      on: on,
      size: size,
      hiddenAvatarCount: hiddenAvatarCount,
      avatarStyle: avatarStyle
    }),
    position: position,
    appendToBody: appendToBody,
    className: popperClass,
    offset: "medium"
  }, /*#__PURE__*/React.createElement(AvatarPopperBody, {
    hiddenAvatarList: list.slice(max, list.length),
    popperRenderer: popperRenderer,
    maxHeight: maxHeight,
    dark: dark
  })));
};
AvatarGroup.displayName = 'AvatarGroup';
AvatarGroup.defaultProps = {
  max: 2,
  tooltipPosition: 'bottom',
  borderColor: 'white',
  popoverOptions: {},
  size: 'regular'
};

var useEffect$1 = React.useEffect,
    useState$2 = React.useState;

/**
 * ### Note:
 * **   The backdrop component is used to provide emphasis on a particular element or parts of it. <br/>**
 * The backdrop signals to the user of a state change within the application and can be used for creating loaders, dialogs, and more. <br/>
 * In its simplest form, the backdrop component will add a dimmed layer over your application.
 */
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
  var BackdropElement = /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement("div", _extends$2({
    "data-test": "DesignSystem-Backdrop",
    "data-layer": true,
    "data-opened": open
  }, baseProps, {
    className: classes,
    style: {
      zIndex: props.zIndex
    }
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
  }, _defineProperty$1(_classNames, "Badge--".concat(appearance), appearance && !subtle), _defineProperty$1(_classNames, "Badge--subtle-".concat(appearance), subtle), _classNames), className);
  return /*#__PURE__*/React.createElement("span", _extends$2({
    "data-test": "DesignSystem-Badge"
  }, baseProps, {
    className: classes
  }), children);
};
Badge.displayName = 'Badge';
Badge.defaultProps = {
  appearance: 'secondary'
};

var RenderLink = function RenderLink(_ref) {
  var item = _ref.item,
      onClick = _ref.onClick;

  var onClickHandler = function onClickHandler(ev) {
    if (onClick) {
      ev.preventDefault();
      onClick(item.link);
    }
  };

  return /*#__PURE__*/React.createElement(Link, {
    className: "Breadcrumbs-link ellipsis--noWrap",
    "data-test": "DesignSystem-Breadcrumbs-link",
    href: item.link,
    onClick: onClickHandler,
    appearance: "subtle",
    size: "tiny"
  }, item.label);
};

var RenderItem = function RenderItem(_ref2) {
  var item = _ref2.item,
      onClick = _ref2.onClick,
      index = _ref2.index,
      showTooltip = _ref2.showTooltip;
  return /*#__PURE__*/React.createElement("div", {
    key: index,
    className: "Breadcrumbs-item",
    "data-test": "DesignSystem-Breadcrumbs-item"
  }, showTooltip ? /*#__PURE__*/React.createElement(Tooltip, {
    tooltip: item.label,
    position: "bottom"
  }, /*#__PURE__*/React.createElement(RenderLink, {
    item: item,
    onClick: onClick
  })) : /*#__PURE__*/React.createElement(RenderLink, {
    item: item,
    onClick: onClick
  }), /*#__PURE__*/React.createElement("span", {
    className: "Breadcrumbs-itemSeparator"
  }, "/"));
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
      type: "button",
      size: "tiny",
      appearance: "transparent",
      icon: "more_horiz_filled",
      largeIcon: true,
      className: "Breadcrumbs-Button",
      "data-test": "DesignSystem-Breadcrumbs--Button"
    });
  };

  return /*#__PURE__*/React.createElement(Dropdown, {
    className: "Breadcrumbs-dropdown",
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
      className = props.className,
      showTooltip = props.showTooltip;
  var baseProps = extractBaseProps(props);
  var BreadcrumbClass = classnames(_defineProperty$1({}, 'Breadcrumbs', true), className);
  return /*#__PURE__*/React.createElement("div", _extends$2({
    "data-test": "DesignSystem-Breadcrumbs"
  }, baseProps, {
    className: BreadcrumbClass
  }), list.length <= 4 ? list.map(function (item, index) {
    return /*#__PURE__*/React.createElement(RenderItem, {
      key: index,
      item: item,
      onClick: onClick,
      showTooltip: showTooltip
    });
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RenderItem, {
    item: list[0],
    onClick: onClick,
    showTooltip: showTooltip
  }), /*#__PURE__*/React.createElement("div", {
    className: "d-flex align-items-center"
  }, renderDropdown(list.slice(1, list.length - 1), onClick), /*#__PURE__*/React.createElement("span", {
    className: "Breadcrumbs-itemSeparator"
  }, "/")), /*#__PURE__*/React.createElement(RenderItem, {
    item: list[list.length - 1],
    onClick: onClick,
    showTooltip: showTooltip
  })));
};

var _excluded$_ = ["size", "appearance", "iconAlign", "tabIndex", "largeIcon", "type", "children", "icon", "expanded", "selected", "loading", "disabled", "className", "tooltip", "iconType"];
var sizeMapping$3 = {
  tiny: 12,
  regular: 16,
  large: 20
}; // eslint-disable-next-line react/display-name

var ButtonElement = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames, _classNames2;

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
      className = props.className;
      props.tooltip;
      var iconType = props.iconType,
      rest = _objectWithoutProperties(props, _excluded$_);

  var buttonClass = classnames((_classNames = {}, _defineProperty$1(_classNames, 'Button', true), _defineProperty$1(_classNames, 'Button--expanded', expanded), _defineProperty$1(_classNames, "Button--".concat(size), size), _defineProperty$1(_classNames, "Button--".concat(size, "Square"), !children), _defineProperty$1(_classNames, "Button--".concat(appearance), appearance), _defineProperty$1(_classNames, 'Button--selected', selected && (appearance === 'basic' || appearance === 'transparent')), _defineProperty$1(_classNames, "Button--iconAlign-".concat(iconAlign), children && iconAlign), _defineProperty$1(_classNames, "".concat(className), className), _classNames));
  var iconClass = classnames((_classNames2 = {}, _defineProperty$1(_classNames2, 'Button-icon', true), _defineProperty$1(_classNames2, "Button-icon--".concat(iconAlign), children && iconAlign), _classNames2));
  return /*#__PURE__*/React.createElement("button", _extends$2({
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
    className: "Button-spinner"
  }), /*#__PURE__*/React.createElement(Text, {
    className: "Button-text Button-text--hidden"
  }, children || '')) : /*#__PURE__*/React.createElement(React.Fragment, null, icon && /*#__PURE__*/React.createElement("div", {
    className: iconClass
  }, /*#__PURE__*/React.createElement(Icon, {
    "data-test": "DesignSystem-Button--Icon",
    name: icon,
    type: iconType,
    size: largeIcon && !children ? sizeMapping$3[size] + 4 : sizeMapping$3[size]
  })), children && /*#__PURE__*/React.createElement("span", {
    className: "Button-text"
  }, children)));
});
var Button = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var icon = props.icon,
      tooltip = props.tooltip,
      children = props.children;
  return icon && tooltip && !children ? /*#__PURE__*/React.createElement(Tooltip, {
    tooltip: tooltip
  }, /*#__PURE__*/React.createElement(ButtonElement, _extends$2({}, props, {
    ref: ref
  }))) : /*#__PURE__*/React.createElement(ButtonElement, _extends$2({}, props, {
    ref: ref
  }));
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
    small: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    large: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
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
var compareYearBlock = function compareYearBlock(d, operator, currDecade) {
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
var dateComparison = function dateComparison(date, operator, currDate, currMonth, currYear) {
  var currentDate = new Date("".concat(currYear, "-").concat(currMonth, "-").concat(currDate));

  if (date) {
    switch (operator) {
      case 'less':
        return date <= currentDate;

      case 'equal':
        return date.toDateString() === currentDate.toDateString();

      case 'more':
        return date >= currentDate;

      default:
        return false;
    }
  }

  return false;
};

var Calendar = /*#__PURE__*/function (_React$Component) {
  _inherits(Calendar, _React$Component);

  var _super = _createSuper(Calendar);

  function Calendar(props) {
    var _this;

    _classCallCheck(this, Calendar);

    _this = _super.call(this, props);

    _defineProperty$1(_assertThisInitialized$1(_this), "updateState", function (year, month, date) {
      _this.setState({
        year: year,
        month: month,
        date: date
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "getDateValue", function (year, month, date) {
      var d = new Date(year, month, date);
      return d;
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "getNavDateInfo", function (index) {
      var _this$state = _this.state,
          yearBlockNav = _this$state.yearBlockNav,
          yearNav = _this$state.yearNav,
          monthNav = _this$state.monthNav;
      var monthBlock = config.monthBlock;
      var yearBlock = yearBlockNav;
      var month = (monthNav + index) % monthBlock === -1 ? 11 : (monthNav + index) % monthBlock; // const year = yearNav + (index !== 0 && month < monthNav ? 1 : 0);

      var year;

      if (index >= 0) {
        year = yearNav + (index !== 0 && month < monthNav ? 1 : 0);
      } else {
        year = yearNav - (index !== 0 && month > monthNav ? 1 : 0);
      }

      return {
        yearBlock: yearBlock,
        year: year,
        month: month
      };
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "getInRangeError", function () {
      var _this$props = _this.props,
          rangePicker = _this$props.rangePicker,
          rangeLimit = _this$props.rangeLimit;
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

    _defineProperty$1(_assertThisInitialized$1(_this), "selectYear", function (year) {
      return function () {
        _this.updateState(year);

        _this.setState({
          view: 'month'
        });
      };
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "yearMouseOverHandler", function (year, isCurrentYear, isDisabled, ev) {
      var onYearHover = _this.props.onYearHover;
      var yearData = {
        value: year,
        year: year,
        isCurrentYear: isCurrentYear,
        isDisabled: isDisabled
      };
      if (onYearHover) onYearHover(yearData, ev);
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "selectMonth", function (month) {
      return function () {
        _this.updateState(_this.state.yearNav, month);

        _this.setState({
          view: 'date'
        });
      };
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "monthMouseOverHandler", function (month, isCurrentMonth, isDisabled, ev) {
      var months = config.months;
      var onMonthHover = _this.props.onMonthHover;
      var monthData = {
        value: months[month],
        month: months[month],
        year: _this.state.year,
        isCurrentMonth: isCurrentMonth,
        isDisabled: isDisabled
      };
      if (onMonthHover) onMonthHover(monthData, ev);
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "selectDate", function (index, date, prevMonthDayRange, dayRange) {
      var d = _this.calculateDate(index, date, prevMonthDayRange, dayRange, false);

      _this.setState({
        currDate: d
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "calculateDate", function (index, date, prevMonthDayRange, dayRange, isDateHovered) {
      var neighbouringMonthIndex;
      var neighbouringMonthDate;
      var type = '';

      if (date <= 0) {
        neighbouringMonthIndex = index - 1;
        neighbouringMonthDate = prevMonthDayRange + date;
        type = 'prev';
      } else if (date > dayRange) {
        neighbouringMonthIndex = index;
        neighbouringMonthDate = date;
      } else {
        neighbouringMonthIndex = index;
        neighbouringMonthDate = date;
      }

      var _this$getNavDateInfo = _this.getNavDateInfo(neighbouringMonthIndex),
          year = _this$getNavDateInfo.year,
          month = _this$getNavDateInfo.month;

      if (isDateHovered === false) {
        _this.updateState(year, month, neighbouringMonthDate);

        _this.onNavIconClickHandler(type)();
      }

      var d = _this.getDateValue(year, month, neighbouringMonthDate);

      return d;
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onNavIconClickHandler", function (type) {
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

    _defineProperty$1(_assertThisInitialized$1(_this), "renderJumpButton", function (type) {
      var _this$props2 = _this.props,
          disabledBefore = _this$props2.disabledBefore,
          disabledAfter = _this$props2.disabledAfter,
          size = _this$props2.size;
      var _this$state4 = _this.state,
          view = _this$state4.view,
          yearBlockNav = _this$state4.yearBlockNav,
          yearNav = _this$state4.yearNav,
          monthNav = _this$state4.monthNav;
      var disabled = false;

      switch (view) {
        case 'year':
          if (type === 'prev') {
            disabled = compareYearBlock(disabledBefore, 'more', yearBlockNav) || compareYearBlock(disabledBefore, 'equal', yearBlockNav);
          }

          if (type === 'next') {
            disabled = compareYearBlock(disabledAfter, 'less', yearBlockNav) || compareYearBlock(disabledAfter, 'equal', yearBlockNav);
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

      var headerIconClass = classnames(_defineProperty$1({
        'Calendar-headerIcon': true
      }, "Calendar-headerIcon--".concat(type), type));
      return /*#__PURE__*/React.createElement(Button, {
        type: "button",
        className: headerIconClass,
        appearance: "basic",
        icon: "arrow_".concat(type === 'next' ? 'forward' : 'back'),
        disabled: disabled,
        size: size === 'small' ? 'tiny' : 'regular',
        onClick: _this.onNavIconClickHandler(type)
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onNavHeadingClickHandler", function (currView) {
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

    _defineProperty$1(_assertThisInitialized$1(_this), "renderHeaderContent", function (index) {
      var _this$props3 = _this.props,
          size = _this$props3.size,
          monthsInView = _this$props3.monthsInView,
          rangePicker = _this$props3.rangePicker;
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
          return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Text, {
            weight: "strong"
          }, content), view !== 'year' && !rangePicker && /*#__PURE__*/React.createElement(Icon, {
            appearance: "inverse",
            className: "pl-3",
            name: "keyboard_arrow_down"
          }));
        }

        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Heading, {
          size: "s"
        }, content), view !== 'year' && !rangePicker && /*#__PURE__*/React.createElement(Icon, {
          appearance: "inverse",
          className: "pl-3",
          name: "keyboard_arrow_down"
        }));
      };

      return /*#__PURE__*/React.createElement("div", {
        className: headerContentClass
      }, view !== 'date' &&
      /*#__PURE__*/
      // TODO(a11y)
      //  eslint-disable-next-line
      React.createElement("div", {
        className: "d-flex justify-content-center align-items-center",
        onClick: _this.onNavHeadingClickHandler(view)
      }, renderHeading(headerContent)), view === 'date' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        onClick: _this.onNavHeadingClickHandler(view),
        className: "d-flex justify-content-center align-items-center"
      }, renderHeading(months[monthNavVal])), /*#__PURE__*/React.createElement("div", {
        className: "ml-4 d-flex justify-content-center align-items-center",
        onClick: _this.onNavHeadingClickHandler('month')
      }, renderHeading(yearNavVal))));
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "renderBodyYear", function () {
      var yearBlockRange = config.yearBlockRange,
          yearsInRow = config.yearsInRow;
      var _this$props4 = _this.props,
          size = _this$props4.size,
          rangePicker = _this$props4.rangePicker,
          disabledBefore = _this$props4.disabledBefore,
          disabledAfter = _this$props4.disabledAfter;
      var _this$state6 = _this.state,
          yearBlockNav = _this$state6.yearBlockNav,
          currYear = _this$state6.currYear;
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
          var _classNames2;

          var offset = yearsInRow * row + col;
          if (offset === yearBlockNav) return undefined;
          var year = yearBlockNav + offset;
          var disabled = compareDate(disabledBefore, 'more', year) || compareDate(disabledAfter, 'less', year);
          var active = !disabled && !rangePicker && year === _this.state.year;

          var isCurrentYear = function isCurrentYear() {
            return year === currYear;
          };

          var valueClass = classnames((_classNames2 = {
            'Calendar-value': true,
            'Calendar-value--active': active,
            'Calendar-value--disabled': disabled,
            'Calendar-yearValue': true
          }, _defineProperty$1(_classNames2, "Calendar-yearValue--".concat(size), size), _defineProperty$1(_classNames2, 'Calendar-value--currDateMonthYear', isCurrentYear()), _classNames2));
          var textClass = classnames({
            'Calendar-value--currDate': isCurrentYear() && !active,
            'Calendar-text': true
          });
          var getTextColor = classnames({
            inverse: !active && !isCurrentYear() && !disabled,
            white: active,
            'primary-lighter': isCurrentYear() && disabled,
            primary: isCurrentYear(),
            'inverse-lightest': disabled
          });
          return (
            /*#__PURE__*/
            //  TODO(a11y)
            //  eslint-disable-next-line
            React.createElement("div", {
              key: "".concat(row, "-").concat(col),
              "data-test": "DesignSystem-Calendar--yearValue",
              className: valueClass,
              onClick: _this.selectYear(year),
              onMouseOver: _this.yearMouseOverHandler.bind(_assertThisInitialized$1(_this), year, isCurrentYear(), disabled)
            }, /*#__PURE__*/React.createElement(Text, {
              size: size === 'small' ? 'small' : 'regular',
              color: getTextColor,
              className: textClass
            }, year))
          );
        }));
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "renderBodyMonth", function () {
      var monthBlock = config.monthBlock,
          monthsInRow = config.monthsInRow,
          months = config.months;
      var _this$props5 = _this.props,
          size = _this$props5.size,
          disabledBefore = _this$props5.disabledBefore,
          disabledAfter = _this$props5.disabledAfter;
      var _this$state7 = _this.state,
          yearNav = _this$state7.yearNav,
          year = _this$state7.year,
          currYear = _this$state7.currYear,
          currMonth = _this$state7.currMonth;
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
          var _classNames3;

          var month = monthsInRow * row + col;
          var disabled = compareDate(disabledBefore, 'more', yearNav, month) || compareDate(disabledAfter, 'less', yearNav, month);
          var active = !disabled && year === yearNav && month === _this.state.month;

          var isCurrentMonth = function isCurrentMonth() {
            return currYear === yearNav && currMonth === month;
          };

          var valueClass = classnames((_classNames3 = {
            'Calendar-value': true,
            'Calendar-value--active': active,
            'Calendar-value--disabled': disabled,
            'Calendar-monthValue': true
          }, _defineProperty$1(_classNames3, "Calendar-monthValue--".concat(size), size), _defineProperty$1(_classNames3, 'Calendar-value--currDateMonthYear', isCurrentMonth()), _classNames3));
          var getTextColor = classnames({
            inverse: !active && !isCurrentMonth() && !disabled,
            white: active,
            'primary-lighter': isCurrentMonth() && disabled,
            primary: isCurrentMonth(),
            'inverse-lightest': disabled
          });
          var textClass = classnames({
            'Calendar-value--currDate': isCurrentMonth() && !active,
            'Calendar-text': true
          });
          return (
            /*#__PURE__*/
            //TODO(a11y)
            //eslint-disable-next-line
            React.createElement("div", {
              key: "".concat(row, "-").concat(col),
              "data-test": "DesignSystem-Calendar--monthValue",
              className: valueClass,
              onClick: _this.selectMonth(month),
              onMouseOver: _this.monthMouseOverHandler.bind(_assertThisInitialized$1(_this), month, isCurrentMonth(), disabled)
            }, /*#__PURE__*/React.createElement(Text, {
              size: size === 'small' ? 'small' : 'regular',
              color: getTextColor,
              className: textClass
            }, months[month]))
          );
        }));
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onDateRowMouseLeaveHandler", function () {
      var rangePicker = _this.props.rangePicker;

      if (rangePicker) {
        _this.setState({
          hoverDate: undefined
        });
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "renderBodyDate", function (index) {
      var daysInRow = config.daysInRow,
          days = config.days;
      var _this$props6 = _this.props,
          size = _this$props6.size,
          firstDayOfWeek = _this$props6.firstDayOfWeek;
      var textSize = size === 'large' ? 'regular' : 'small';
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "Calendar-dayValues"
      }, Array.from({
        length: 7
      }, function (_x, day) {
        var valueClass = classnames({
          'Calendar-valueWrapper': true
        });
        var dayValue = (day + daysInRow + getIndexOfDay(firstDayOfWeek)) % daysInRow;
        return /*#__PURE__*/React.createElement(Text, {
          key: day,
          className: valueClass,
          appearance: "default",
          weight: "strong",
          size: textSize
        }, days[size][dayValue]);
      })), /*#__PURE__*/React.createElement("div", {
        className: "Calendar-dateValues",
        onMouseLeave: _this.onDateRowMouseLeaveHandler
      }, _this.renderDateValues(index)));
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "renderDateValues", function (index) {
      var daysInRow = config.daysInRow,
          monthBlock = config.monthBlock;
      var _this$props7 = _this.props,
          size = _this$props7.size,
          rangePicker = _this$props7.rangePicker,
          firstDayOfWeek = _this$props7.firstDayOfWeek,
          disabledBefore = _this$props7.disabledBefore,
          disabledAfter = _this$props7.disabledAfter,
          monthsInView = _this$props7.monthsInView,
          onDateHover = _this$props7.onDateHover;
      var _this$state8 = _this.state,
          startDate = _this$state8.startDate,
          endDate = _this$state8.endDate,
          hoverDate = _this$state8.hoverDate,
          yearState = _this$state8.year,
          monthState = _this$state8.month,
          dateState = _this$state8.date,
          currMonth = _this$state8.currMonth,
          currYear = _this$state8.currYear,
          todayDate = _this$state8.todayDate;

      var _this$getNavDateInfo3 = _this.getNavDateInfo(index),
          yearNavVal = _this$getNavDateInfo3.year,
          monthNavVal = _this$getNavDateInfo3.month;

      var prevMonth = monthNavVal - 1;
      var prevYear = yearNavVal;
      var prevMonthDayRange = getDaysInMonth(prevYear, prevMonth);
      var dayRange = getDaysInMonth(yearNavVal, monthNavVal);
      var firstDayIndex = getFirstDayOfMonth(yearNavVal, monthNavVal);
      var desiredFirstDayIndex = getIndexOfDay(firstDayOfWeek);
      var dayDiff = (firstDayIndex - desiredFirstDayIndex + 7) % 7;
      var dummyDays = Math.abs(dayDiff);
      var noOfRows = Math.ceil((dayRange + dummyDays) / daysInRow); // if(noOfRows !== 6 && monthsInView <= 1) ?

      if (noOfRows === 6) ; else if (monthsInView > 1) ; else {
        noOfRows = noOfRows + 1;
      }

      var inRangeError = _this.getInRangeError();

      var events = _this.props.events;

      var onClickHandler = function onClickHandler(date) {
        return function () {
          if (rangePicker) {
            if (startDate && endDate) {
              _this.selectDate(index, date, prevMonthDayRange, dayRange);
            } else {
              if (!inRangeError) _this.selectDate(index, date, prevMonthDayRange, dayRange);
            }
          } else {
            _this.selectDate(index, date, prevMonthDayRange, dayRange);
          }
        };
      };

      var onMouseOverHandler = function onMouseOverHandler(date) {
        return function () {
          if (rangePicker) {
            var d = _this.getDateValue(yearNavVal, monthNavVal, date);

            if (!startDate || !endDate) {
              _this.setState({
                hoverDate: d
              });
            }
          }
        };
      };

      var onMouseEnterHandler = function onMouseEnterHandler(date, isToday, isDisabled, ev) {
        var d = _this.calculateDate(index, date, prevMonthDayRange, dayRange, true) || new Date();
        var months = config.months,
            days = config.days;
        var dayName = days.large[d.getDay()];
        var dateData = {
          value: d.getDate(),
          isToday: isToday,
          isDisabled: isDisabled,
          todayDate: _this.state.currDate,
          fullDate: d,
          date: d.getDate(),
          month: months[d.getMonth()],
          year: d.getFullYear(),
          dayName: dayName
        };
        if (onDateHover) onDateHover(dateData, ev);
      };

      return Array.from({
        length: noOfRows
      }, function (_y, row) {
        return /*#__PURE__*/React.createElement("div", {
          key: row,
          className: "Calendar-valueRow"
        }, Array.from({
          length: daysInRow
        }, function (_x, col) {
          var _classNames4;

          var date = daysInRow * row + col - dummyDays + 1;
          var dummy = date <= 0 || date > dayRange;
          var disabled = compareDate(disabledBefore, 'more', yearNavVal, monthNavVal, date) || compareDate(disabledAfter, 'less', yearNavVal, monthNavVal, date);
          var active = !disabled && yearState === yearNavVal && monthState === monthNavVal && dateState === date;

          var today = function today() {
            var boolVal;

            if (date <= 0) {
              boolVal = currYear === yearNavVal && currMonth === monthNavVal - 1 && todayDate === prevMonthDayRange + date;
            } else if (date > dayRange) {
              boolVal = currYear === yearNavVal && currMonth === monthNavVal + 1 && todayDate === date - dayRange;
            } else {
              boolVal = currYear === yearNavVal && currMonth === monthNavVal && todayDate === date;
            }

            return boolVal;
          };

          var startActive = false;
          var endActive = false;
          var inRange = false;
          var inRangeLast = false;

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
          var dateInString = "".concat(date <= 0 ? prevMonthDayRange + date : date > dayRange ? date - dayRange : date);
          var monthInString = "".concat(date <= 0 ? monthNavVal === 0 ? monthNavVal + monthBlock : (monthNavVal - 1) % monthBlock + 1 : date > dayRange ? (monthNavVal + 1) % monthBlock + 1 : monthNavVal + 1);
          var yearInString = "".concat(date <= 0 && monthNavVal + 1 === 1 ? yearNavVal - 1 : date > dayRange && monthNavVal + 1 === 12 ? yearNavVal + 1 : yearNavVal);
          var completeDateString = "".concat(monthInString.length === 2 ? monthInString : "0".concat(monthInString), "/").concat(dateInString.length === 2 ? dateInString : "0".concat(dateInString), "/").concat(yearInString);
          var isEventExist = events && _typeof(events) === 'object' && events.hasOwnProperty(completeDateString);

          if (rangePicker) {
            startActive = compareDate(startDate, 'equal', yearNavVal, monthNavVal, date);
            endActive = compareDate(endDate, 'equal', yearNavVal, monthNavVal, date);
            inRangeLast = compareDate(hoverDate, 'equal', yearNavVal, monthNavVal, date);
            active = !disabled && (startActive || endActive);

            if (startDate && endDate) {
              inRange = !disabled && (dateComparison(startDate, 'less', dateInString, monthInString, yearInString) && dateComparison(endDate, 'more', dateInString, monthInString, yearInString) || startActive || endActive);
            } else if (startDate) {
              inRange = !disabled && (dateComparison(hoverDate, 'more', dateInString, monthInString, yearInString) || inRangeLast) && dateComparison(startDate, 'less', dateInString, monthInString, yearInString);
            } else if (endDate) {
              inRange = !disabled && (dateComparison(hoverDate, 'less', dateInString, monthInString, yearInString) || inRangeLast) && dateComparison(endDate, 'more', dateInString, monthInString, yearInString);
            }
          }

          var isRangeError = inRange && inRangeError;
          var isStartActive = startDate && dateComparison(startDate, 'equal', dateInString, monthInString, yearInString);
          var isEndActive = endDate && dateComparison(endDate, 'equal', dateInString, monthInString, yearInString);
          var activeDate = startDate && endDate && (isStartActive || isEndActive);
          var isHoverBackwardLast = _this.props.allowReverseSelection && dateComparison(hoverDate, 'equal', dateInString, monthInString, yearInString) && hoverDate && (startDate && hoverDate < startDate || endDate && hoverDate < endDate);
          var isHoverForwardLast = dateComparison(hoverDate, 'equal', dateInString, monthInString, yearInString) && hoverDate && startDate && hoverDate >= startDate;
          var isEdgeElement = col === 0 || col === 6;
          var isValueRange = inRange || rangePicker && (active || activeDate);
          var wrapperClass = classnames({
            'Calendar-valueWrapper': true,
            'Calendar-valueWrapper--inRange': !isEdgeElement && isValueRange,
            'Calendar-valueWrapper--inEdgeRange': isValueRange && isEdgeElement,
            'Calendar-valueWrapper--inRangeError': isRangeError,
            'Calendar-valueWrapper--start': isStart && !isEnd && col !== 6 || rangePicker && isStartActive && col !== 6,
            'Calendar-valueWrapper--end': isEnd && !isStart && col !== 0 || rangePicker && isEndActive && col !== 0,
            'Calendar-valueWrapper--startEnd': isStart && isEnd,
            'Calendar-valueWrapper--startError': isStart && isRangeError || rangePicker && isRangeError && isStartActive,
            'Calendar-valueWrapper--endError': isEnd && isRangeError || rangePicker && isRangeError && isEndActive,
            'Calendar-valueWrapper--dummy': dummy,
            'Calendar-valueWrapper--hoverDate': rangePicker && isHoverForwardLast,
            'Calendar-valueWrapper--hoverEndDate': rangePicker && isHoverBackwardLast,
            'Calendar-valueWrapper--inStartRange': isValueRange && col === 0 && !active && !activeDate,
            'Calendar-valueWrapper--inEndRange': isValueRange && col === 6 && !active && !activeDate
          });
          var valueClass = classnames((_classNames4 = {
            'Calendar-value': true,
            'Calendar-inRangeValue': !isStart && !isEnd && !active && !activeDate,
            'Calendar-value--start': isStart && !isEnd,
            'Calendar-value--end': isEnd && !isStart,
            'Calendar-value--startError': isStart && isRangeError,
            'Calendar-value--endError': isEnd && isRangeError,
            'Calendar-value--active': active || activeDate,
            'Calendar-value--disabled': disabled,
            'Calendar-dateValue': true
          }, _defineProperty$1(_classNames4, "Calendar-dateValue--".concat(size), size), _defineProperty$1(_classNames4, 'Calendar-value--currDateMonthYear', today()), _defineProperty$1(_classNames4, 'Calendar-value--currDate', today() && !active && !activeDate), _classNames4));
          var getTextColor = classnames({
            inverse: !active && !today() && !disabled && !activeDate,
            white: active || activeDate,
            'primary-lighter': today() && disabled,
            primary: today(),
            'inverse-lightest': disabled
          });
          return /*#__PURE__*/React.createElement("div", {
            key: "".concat(row, "-").concat(col),
            className: wrapperClass,
            "data-test": "designSystem-Calendar-WrapperClass"
          }, !dummy && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Text, {
            color: getTextColor,
            size: size === 'small' ? 'small' : 'regular',
            "data-test": "DesignSystem-Calendar--dateValue",
            className: valueClass,
            onClick: onClickHandler(date),
            onMouseOver: onMouseOverHandler(date),
            onMouseEnter: onMouseEnterHandler.bind(_assertThisInitialized$1(_this), date, today(), disabled)
          }, date), isEventExist && _this.renderEventsIndicator(size, active)), (dummy && date > 0 && index === monthsInView - 1 || dummy && date <= 0 && index === 0) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Text, {
            appearance: active || activeDate ? 'white' : disabled ? 'disabled' : today() ? 'link' : 'default',
            size: size === 'small' ? 'small' : 'regular',
            "data-test": "DesignSystem-Calendar--dateValue",
            className: valueClass,
            onClick: onClickHandler(date),
            onMouseOver: onMouseOverHandler(date),
            onMouseEnter: onMouseEnterHandler.bind(_assertThisInitialized$1(_this), date, today(), disabled)
          }, date <= 0 ? prevMonthDayRange + date : date - dayRange), isEventExist && _this.renderEventsIndicator(size, active)));
        }));
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "renderCalendar", function (index) {
      var _classNames5;

      var _this$props8 = _this.props,
          size = _this$props8.size,
          monthsInView = _this$props8.monthsInView;
      var view = _this.state.view;
      var containerClass = classnames((_classNames5 = {}, _defineProperty$1(_classNames5, 'Calendar', true), _defineProperty$1(_classNames5, "Calendar-".concat(view, "--").concat(size), view), _defineProperty$1(_classNames5, "Calendar--".concat(size), size), _classNames5));
      var headerClass = classnames(_defineProperty$1({}, "Calendar-header--".concat(size), size));
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

    var _this$props9 = _this.props,
        _rangePicker = _this$props9.rangePicker,
        _startDate = _this$props9.startDate,
        _endDate = _this$props9.endDate,
        _monthsInView = _this$props9.monthsInView,
        _view = _this$props9.view;
    var currDate = _rangePicker ? _endDate || _startDate : props.date;

    var _yearNav = props.yearNav !== undefined ? props.yearNav : getDateInfo(currDate || Date.now()).year;

    var _monthNav = props.monthNav !== undefined ? props.monthNav : getDateInfo(currDate || Date.now()).month;

    var _getDateInfo6 = getDateInfo(currDate),
        _year = _getDateInfo6.year,
        _month = _getDateInfo6.month,
        _date = _getDateInfo6.date;

    var todayCompleteDate = getDateInfo(new Date(Date.now()));
    _this.state = {
      currDate: currDate,
      startDate: _startDate,
      endDate: _endDate,
      yearNav: _yearNav,
      monthNav: _monthNav,
      year: _year,
      month: _month,
      date: _date,
      todayDate: todayCompleteDate.date,
      currMonth: todayCompleteDate.month,
      currYear: todayCompleteDate.year,
      view: _monthsInView > 1 ? 'date' : _view,
      yearBlockNav: getYearBlock(_yearNav)
    };
    return _this;
  }

  _createClass(Calendar, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _prevState$startDate, _this$state$startDate, _this$state$endDate, _prevState$endDate, _this$state$endDate2;

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

      if (this.props.startDate && !isNaN(this.props.startDate.getTime()) && prevProps.startDate !== this.props.startDate) {
        var _d = convertToDate(this.props.startDate);

        this.setState({
          startDate: _d
        });
      }

      if (this.props.endDate && !isNaN(this.props.endDate.getTime()) && prevProps.endDate !== this.props.endDate) {
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
        var _this$props10 = this.props,
            rangePicker = _this$props10.rangePicker,
            onDateChange = _this$props10.onDateChange;
        var _this$state9 = this.state,
            currDate = _this$state9.currDate,
            _startDate3 = _this$state9.startDate,
            _endDate3 = _this$state9.endDate;

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

      if (this.state.startDate && !isNaN(this.state.startDate.getTime()) && ((_prevState$startDate = prevState.startDate) === null || _prevState$startDate === void 0 ? void 0 : _prevState$startDate.getTime()) !== ((_this$state$startDate = this.state.startDate) === null || _this$state$startDate === void 0 ? void 0 : _this$state$startDate.getTime()) || this.state.endDate && !isNaN((_this$state$endDate = this.state.endDate) === null || _this$state$endDate === void 0 ? void 0 : _this$state$endDate.getTime()) && ((_prevState$endDate = prevState.endDate) === null || _prevState$endDate === void 0 ? void 0 : _prevState$endDate.getTime()) !== ((_this$state$endDate2 = this.state.endDate) === null || _this$state$endDate2 === void 0 ? void 0 : _this$state$endDate2.getTime())) {
        var onRangeChange = this.props.onRangeChange;
        var _this$state10 = this.state,
            _startDate4 = _this$state10.startDate,
            _endDate4 = _this$state10.endDate;
        if (onRangeChange) onRangeChange(_startDate4, _endDate4);
      }

      if (this.props.allowReverseSelection && prevState.hoverDate !== this.state.hoverDate) {
        var _this$state11 = this.state,
            hoverDate = _this$state11.hoverDate,
            _startDate5 = _this$state11.startDate,
            _endDate5 = _this$state11.endDate;

        if (_startDate5 && !_endDate5) {
          var _getDateInfo9 = getDateInfo(_startDate5),
              _year3 = _getDateInfo9.year,
              _month3 = _getDateInfo9.month,
              _date4 = _getDateInfo9.date;

          if (compareDate(hoverDate, 'less', _year3, _month3, _date4)) {
            this.setState({
              startDate: undefined,
              endDate: _startDate5
            });
          }
        } else if (_endDate5 && !_startDate5) {
          var _getDateInfo10 = getDateInfo(_endDate5),
              _year4 = _getDateInfo10.year,
              _month4 = _getDateInfo10.month,
              _date5 = _getDateInfo10.date;

          if (compareDate(hoverDate, 'more', _year4, _month4, _date5)) {
            this.setState({
              startDate: _endDate5,
              endDate: undefined
            });
          }
        }
      }

      if (prevState.year !== this.state.year) {
        var _year5 = this.state.year;

        if (_year5 !== undefined && monthsInView === 1) {
          this.setState({
            year: _year5,
            yearBlockNav: getYearBlock(_year5),
            yearNav: _year5
          });
        }
      }

      if (prevState.month !== this.state.month) {
        var _month5 = this.state.month;

        if (_month5 !== undefined && monthsInView === 1) {
          this.setState({
            monthNav: _month5
          });
        }
      }
    }
  }, {
    key: "renderEventsIndicator",
    value: function renderEventsIndicator(size, active) {
      var _classNames7;

      var eventsIndicatorClass = classnames((_classNames7 = {
        'Calendar-eventsIndicator': true
      }, _defineProperty$1(_classNames7, "Calendar-eventsIndicator--".concat(size), true), _defineProperty$1(_classNames7, 'Calendar-eventsIndicator--active', active), _classNames7));
      return /*#__PURE__*/React.createElement("span", {
        "data-test": "DesignSystem-Calendar-Event-Indicator",
        className: eventsIndicatorClass
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props11 = this.props,
          monthsInView = _this$props11.monthsInView,
          className = _this$props11.className;
      var baseProps = extractBaseProps(this.props);
      var classes = classnames({
        'Calendar-wrapper': true
      }, className);
      return /*#__PURE__*/React.createElement("div", _extends$2({}, baseProps, {
        className: classes,
        "data-test": "DesignSystem-Calendar-Wrapper"
      }), Array.from({
        length: monthsInView
      }, function (_x, index) {
        return _this2.renderCalendar(index);
      }));
    }
  }]);

  return Calendar;
}(React.Component);

_defineProperty$1(Calendar, "defaultProps", {
  size: 'large',
  monthsInView: 1,
  view: 'date',
  firstDayOfWeek: 'sunday',
  jumpView: true
});

var _excluded$Z = ["shadow", "children", "className"];
var Card = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames;

  var _props$shadow = props.shadow,
      shadow = _props$shadow === void 0 ? 'shadow10' : _props$shadow,
      children = props.children,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$Z);

  var classes = classnames((_classNames = {
    Card: true
  }, _defineProperty$1(_classNames, "Card--".concat(shadow), shadow), _defineProperty$1(_classNames, "".concat(className), className), _classNames));
  return /*#__PURE__*/React.createElement("div", _extends$2({
    "data-test": "DesignSystem-Card",
    ref: ref
  }, rest, {
    className: classes
  }), children);
});
Card.displayName = 'Card';
Card.defaultProps = {
  shadow: 'shadow10'
};

var _excluded$Y = ["border", "children", "className"];
var CardSubdued = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var border = props.border,
      children = props.children,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$Y);

  var classes = classnames(_defineProperty$1({
    CardSubdued: true
  }, "CardSubdued--".concat(border), border), className);
  return /*#__PURE__*/React.createElement("div", _extends$2({
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
  return /*#__PURE__*/React.createElement("div", _extends$2({
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
  return /*#__PURE__*/React.createElement("div", _extends$2({
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
  var classes = classnames(_defineProperty$1({
    'Card-footer': true
  }, 'Card-footer--withSeperator', withSeperator), className);
  return /*#__PURE__*/React.createElement("div", _extends$2({
    "data-test": "DesignSystem-CardFooter"
  }, baseProps, {
    className: classes
  }), children);
};
CardFooter.displayName = 'CardFooter';
CardFooter.defaultProps = {
  withSeperator: true
};

var isSpaceKey = function isSpaceKey(e) {
  return e.key === 'Space';
};

var _excluded$X = ["onClick", "onKeyDown", "role", "tabIndex"];
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
      tabIndex = _ref.tabIndex,
      rest = _objectWithoutProperties(_ref, _excluded$X);

  return _objectSpread2({}, onClick ? {
    onClick: onClick,
    role: role,
    tabIndex: tabIndex || 0,
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
    tabIndex: tabIndex,
    'aria-label': rest['aria-label']
  });
};

var iconTypeMapper = {
  timelapse: 'outlined',
  content_copy: 'outlined',
  speed: 'outlined',
  add_circle_outline: 'outlined',
  turned_in_not: 'outlined',
  important_devices: 'outlined',
  thumb_down_off_alt: 'outlined',
  alarm_on: 'outlined',
  calendar_view_month: 'outlined',
  aspect_ratio: 'outlined',
  change_history: 'outlined',
  arrow_circle_down: 'outlined',
  card_membership: 'outlined',
  query_builder: 'outlined',
  copyright: 'outlined',
  arrow_circle_up: 'outlined',
  alarm: 'outlined',
  work_outline: 'outlined',
  bookmark_border: 'outlined',
  delete_outline: 'outlined',
  credit_card: 'outlined',
  highlight_of: 'outlined',
  check_circle_outline: 'outlined',
  help_outline: 'outlined',
  schedule: 'outlined',
  radio_button_unchecked: 'outlined',
  radio_button_checked: 'outlined',
  "delete": 'outlined'
};
/**
 *
 * <pre class="DocPage-codeBlock mx-6 mb-7">
 *  Following Icons are mapped to **outlined** type by default:
 *  <br />
 *  timelapse,  content_copy,  speed,  add_circle_outline,  turned_in_not,  important_devices,  thumb_down_off_alt,  alarm_on,  calendar_view_month,  aspect_ratio,  change_history,  arrow_circle_down,  card_membership,  query_builder,  copyright,  arrow_circle_up,  alarm,  work_outline,  bookmark_border,  delete_outline,  credit_card,  highlight_of,  check_circle_outline, help_outline,  schedule,  radio_button_unchecked,  radio_button_checked,  delete
 * </pre>
 */

var Icon = function Icon(props) {
  var _classNames;

  var appearance = props.appearance,
      className = props.className,
      name = props.name,
      size = props.size,
      children = props.children;
  var accessibilityProps = useAccessibilityProps(props);
  var baseProps = extractBaseProps(props);
  var mapper = {
    outline: 'outlined',
    sharp: 'outlined',
    round: 'rounded',
    filled: 'rounded',
    'two-tone': 'rounded'
  };
  var type = props.type && mapper[props.type] || props.type || name && iconTypeMapper[name] || 'rounded';

  var getIconAppearance = function getIconAppearance(iconColor) {
    var x = iconColor.indexOf('_');
    return iconColor.slice(0, x) + iconColor.charAt(x + 1).toUpperCase() + iconColor.slice(x + 2);
  };

  var color = appearance && appearance.includes('_') ? getIconAppearance(appearance) : appearance;
  var iconClass = classnames((_classNames = {}, _defineProperty$1(_classNames, 'material-symbols', true), _defineProperty$1(_classNames, 'material-symbols-rounded', type === 'rounded'), _defineProperty$1(_classNames, 'material-symbols-outlined', type === 'outlined'), _defineProperty$1(_classNames, 'Icon', true), _defineProperty$1(_classNames, "Icon--".concat(color), appearance), _defineProperty$1(_classNames, "".concat(className), className), _classNames));
  var styles = {
    fontSize: "".concat(size, "px"),
    width: "".concat(size, "px")
  }; // change `children` to {name} after migration

  if (children && /*#__PURE__*/React.isValidElement(children)) {
    return /*#__PURE__*/React.createElement("span", _extends$2({}, baseProps, {
      className: className
    }), children);
  }

  return /*#__PURE__*/React.createElement("i", _extends$2({
    "data-test": "DesignSystem-Icon"
  }, baseProps, {
    className: iconClass,
    style: styles
  }, accessibilityProps), name);
};
Icon.displayName = 'Icon';
Icon.defaultProps = {
  size: 16
};

var _excluded$W = ["children", "componentType", "className"];

var GenericText = function GenericText(_ref, ref) {
  var children = _ref.children,
      _ref$componentType = _ref.componentType,
      componentType = _ref$componentType === void 0 ? 'span' : _ref$componentType,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, _excluded$W);

  return /*#__PURE__*/React.createElement(componentType, _objectSpread2(_objectSpread2({}, rest), {}, {
    className: className,
    ref: ref
  }), children);
};

var Link$1 = /*#__PURE__*/React.forwardRef(GenericText);

var _excluded$V = ["appearance", "size", "children", "weight", "small", "className", "color"];
var Text = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames;

  var _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      _props$size = props.size,
      size = _props$size === void 0 ? 'regular' : _props$size,
      children = props.children,
      weight = props.weight,
      small = props.small,
      className = props.className,
      color = props.color,
      rest = _objectWithoutProperties(props, _excluded$V);

  var classes = classnames((_classNames = {
    Text: true
  }, _defineProperty$1(_classNames, "Text--".concat(appearance), !color && appearance), _defineProperty$1(_classNames, "Text--".concat(weight), weight), _defineProperty$1(_classNames, "Text--".concat(size), size), _defineProperty$1(_classNames, "color-".concat(color), color), _defineProperty$1(_classNames, 'Text--small', size === 'small' || small), _classNames), className);
  return /*#__PURE__*/React.createElement(Link$1, _extends$2({
    ref: ref,
    "data-test": "DesignSystem-Text"
  }, rest, {
    className: classes,
    componentType: "span"
  }), children);
});
Text.displayName = 'Text';
Text.defaultProps = {
  appearance: 'default',
  size: 'regular'
};

var GenericChip = function GenericChip(props) {
  var _classNames3;

  var label = props.label,
      icon = props.icon,
      clearButton = props.clearButton,
      disabled = props.disabled,
      className = props.className,
      selected = props.selected,
      onClose = props.onClose,
      onClick = props.onClick,
      labelPrefix = props.labelPrefix,
      iconType = props.iconType;
  var baseProps = extractBaseProps(props);

  var iconClass = function iconClass(align) {
    var _classNames;

    return classnames((_classNames = {}, _defineProperty$1(_classNames, 'Chip-icon', true), _defineProperty$1(_classNames, "Chip-icon--".concat(align), align), _defineProperty$1(_classNames, "Chip-icon-disabled--right", align === 'right' && disabled), _defineProperty$1(_classNames, 'cursor-pointer', align === 'right' && !disabled), _defineProperty$1(_classNames, 'Chip-icon--selected', align === 'right' && selected), _classNames));
  };

  var onCloseHandler = function onCloseHandler(e) {
    e.stopPropagation();
    if (onClose) onClose();
  };

  var onClickHandler = function onClickHandler() {
    if (onClick) onClick();
  };

  var onKeyDownHandler = function onKeyDownHandler(event) {
    if (event.key === 'Enter') {
      onCloseHandler(event);
    }
  };

  var iconAppearance = function iconAppearance(align) {
    var _classNames2;

    return classnames((_classNames2 = {}, _defineProperty$1(_classNames2, 'disabled', disabled && !selected), _defineProperty$1(_classNames2, 'primary_dark', !disabled && selected), _defineProperty$1(_classNames2, 'primary_lighter', disabled && selected), _defineProperty$1(_classNames2, 'subtle', !disabled && !selected && align === 'right'), _defineProperty$1(_classNames2, 'inverse', !disabled && !selected && align === 'left'), _classNames2));
  };

  var textColor = classnames((_classNames3 = {}, _defineProperty$1(_classNames3, 'primary-lighter', disabled && selected), _defineProperty$1(_classNames3, 'inverse-lightest', disabled && !selected), _defineProperty$1(_classNames3, 'primary-dark', selected), _defineProperty$1(_classNames3, 'inverse', !disabled && !selected), _classNames3));

  var renderLabel = function renderLabel() {
    if (typeof label === 'string') {
      return /*#__PURE__*/React.createElement(React.Fragment, null, labelPrefix && /*#__PURE__*/React.createElement(Text, {
        "data-test": "DesignSystem-GenericChip--LabelPrefix",
        weight: "medium",
        color: textColor,
        className: "Chip-text mr-3"
      }, labelPrefix), /*#__PURE__*/React.createElement(Text, {
        "data-test": "DesignSystem-GenericChip--Text",
        color: textColor,
        className: "Chip-text"
      }, label));
    }

    return label;
  };

  return (
    /*#__PURE__*/
    // TODO(a11y)
    // eslint-disable-next-line
    React.createElement("div", _extends$2({
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex: disabled ? -1 : 0,
      "data-test": "DesignSystem-GenericChip--GenericChipWrapper"
    }, baseProps, {
      className: "Chip-wrapper ".concat(className),
      onClick: onClickHandler
    }), icon && /*#__PURE__*/React.createElement(Icon, {
      "data-test": "DesignSystem-GenericChip--Icon",
      name: icon,
      type: iconType,
      appearance: iconAppearance('left'),
      className: iconClass('left')
    }), renderLabel(), clearButton && /*#__PURE__*/React.createElement("div", {
      role: "button",
      onClick: onCloseHandler,
      tabIndex: disabled ? -1 : 0,
      onKeyDown: onKeyDownHandler,
      className: iconClass('right'),
      "data-test": "DesignSystem-GenericChip--clearButton"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clear",
      appearance: iconAppearance('right'),
      className: "p-2"
    })))
  );
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
      className = props.className,
      labelPrefix = props.labelPrefix,
      iconType = props.iconType;
  var baseProps = extractBaseProps(props);

  var onCloseHandler = function onCloseHandler() {
    if (!disabled && onClose) onClose(name);
  };

  var onClickHandler = function onClickHandler() {
    if (!disabled && onClick) onClick(name);
  };

  var clearbutton = type === 'action' ? false : clearButton;
  var select = type === 'selection' && selected ? true : false;
  var chipClass = classnames((_classNames = {
    Chip: true
  }, _defineProperty$1(_classNames, "Chip-".concat(type, "--disabled"), disabled), _defineProperty$1(_classNames, "Chip--".concat(type), type && !disabled), _defineProperty$1(_classNames, "Chip-".concat(type, "--selected"), selected && !disabled), _defineProperty$1(_classNames, "Chip-selection--selectedDisabled", type === 'selection' && selected && disabled), _defineProperty$1(_classNames, 'Chip-icon--clear', clearbutton), _classNames), className);
  return /*#__PURE__*/React.createElement(GenericChip, _extends$2({
    "data-test": "DesignSystem-Chip--GenericChip"
  }, baseProps, {
    label: label,
    selected: select,
    icon: icon,
    iconType: iconType,
    clearButton: clearbutton,
    disabled: disabled,
    className: chipClass,
    onClose: onCloseHandler,
    onClick: onClickHandler,
    name: name,
    labelPrefix: labelPrefix
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

  var ChipGroupClass = classnames(_defineProperty$1({}, 'ChipGroup', true), className);
  return /*#__PURE__*/React.createElement("div", _extends$2({
    "data-test": "DesignSystem-ChipGroup"
  }, baseProps, {
    className: ChipGroupClass
  }), list.map(function (item, ind) {
    var _item$label = item.label,
        label = _item$label === void 0 ? '' : _item$label,
        icon = item.icon,
        type = item.type,
        disabled = item.disabled,
        selected = item.selected,
        clearButton = item.clearButton,
        name = item.name,
        iconType = item.iconType;
    return /*#__PURE__*/React.createElement("span", {
      key: ind,
      className: "ChipGroup-item"
    }, /*#__PURE__*/React.createElement(Chip, {
      "data-test": "DesignSystem-ChipGroup--Chip",
      name: name,
      label: label,
      selected: selected,
      icon: icon,
      disabled: disabled,
      clearButton: clearButton,
      iconType: iconType,
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

var CheckboxIcon = function CheckboxIcon(props) {
  switch (props.name) {
    case 'checked--regular':
      return /*#__PURE__*/React__default.createElement("svg", {
        width: "10",
        height: "8",
        viewBox: "0 0 10 8",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/React__default.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.66667 5.56L8.72667 0.5L9.66667 1.44667L3.66667 7.44667L0.333333 4.11333L1.27333 3.17333L3.66667 5.56Z",
        fill: "white"
      }));

    case 'checked--tiny':
      return /*#__PURE__*/React__default.createElement("svg", {
        width: "10",
        height: "8",
        viewBox: "0 0 10 8",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/React__default.createElement("path", {
        d: "M0.333344 4L1.27334 3.06L3.66668 5.44667L8.72668 0.386665L9.66668 1.33333L3.66668 7.33333L0.333344 4Z",
        fill: "white"
      }));

    case 'indeterminate--regular':
      return /*#__PURE__*/React__default.createElement("svg", {
        width: "10",
        height: "2",
        viewBox: "0 0 10 2",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/React__default.createElement("path", {
        d: "M0 0H10V2H0V0Z",
        fill: "white"
      }));

    case 'indeterminate--tiny':
      return /*#__PURE__*/React__default.createElement("svg", {
        width: "8",
        height: "2",
        viewBox: "0 0 8 2",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/React__default.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8 0H0V2H8V0Z",
        fill: "white"
      }));

    default:
      return null;
  }
};

var _excluded$U = ["size", "tabIndex", "defaultChecked", "indeterminate", "label", "error", "disabled", "onChange", "name", "value", "className", "checked", "helpText", "id", "labelRef"];
var Checkbox = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
  var _classNames, _classNames2, _classNames3, _classNames4, _classNames5, _classNames6;

  var _props$size = props.size,
      size = _props$size === void 0 ? 'regular' : _props$size,
      _props$tabIndex = props.tabIndex,
      tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex,
      defaultChecked = props.defaultChecked,
      indeterminate = props.indeterminate,
      label = props.label,
      error = props.error,
      disabled = props.disabled,
      onChange = props.onChange,
      name = props.name,
      value = props.value,
      className = props.className,
      checkedProp = props.checked,
      helpText = props.helpText,
      _props$id = props.id,
      id = _props$id === void 0 ? "".concat(name, "-").concat(label, "-").concat(uidGenerator()) : _props$id,
      labelRef = props.labelRef,
      rest = _objectWithoutProperties(props, _excluded$U);

  var ref = React.useRef(null);
  React.useImperativeHandle(forwardedRef, function () {
    return ref.current;
  });

  var _React$useState = React.useState(checkedProp === undefined ? defaultChecked : checkedProp),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      checked = _React$useState2[0],
      setChecked = _React$useState2[1];

  React.useEffect(function () {
    setIndeterminate(indeterminate);
  }, [indeterminate]);
  React.useEffect(function () {
    if (checkedProp !== undefined) {
      setChecked(checkedProp);
    }
  }, [checkedProp]);
  var CheckboxClass = classnames((_classNames = {}, _defineProperty$1(_classNames, 'Checkbox', true), _defineProperty$1(_classNames, 'Checkbox--disabled', disabled), _classNames), className);
  var CheckboxOuterWrapper = classnames((_classNames2 = {}, _defineProperty$1(_classNames2, 'Checkbox-outerWrapper', true), _defineProperty$1(_classNames2, "Checkbox-outerWrapper--".concat(size), size), _classNames2));
  var CheckboxInputWrapper = classnames((_classNames3 = {}, _defineProperty$1(_classNames3, 'Checkbox-input', true), _defineProperty$1(_classNames3, 'Checkbox-input--checked', checked), _defineProperty$1(_classNames3, 'Checkbox-input--indeterminate', props.indeterminate), _classNames3));
  var CheckboxWrapper = classnames((_classNames4 = {}, _defineProperty$1(_classNames4, 'Checkbox-wrapper', true), _defineProperty$1(_classNames4, 'Checkbox-wrapper--default', !error), _defineProperty$1(_classNames4, 'Checkbox-wrapper--error', error), _classNames4));
  var CheckboxLabelClass = classnames((_classNames5 = {}, _defineProperty$1(_classNames5, 'Checkbox-label', true), _defineProperty$1(_classNames5, 'Checkbox-label--tiny', size === 'tiny'), _classNames5));

  var setIndeterminate = function setIndeterminate(indeterminateValue) {
    ref.current.indeterminate = indeterminateValue;
  };

  var onChangeHandler = function onChangeHandler(e) {
    if (checkedProp === undefined) {
      setChecked(e.target.checked);
      setIndeterminate(e.target.indeterminate);
    }

    if (onChange) onChange(e);
  };

  var IconMapper = classnames((_classNames6 = {}, _defineProperty$1(_classNames6, 'checked--regular', checked && size === 'regular'), _defineProperty$1(_classNames6, 'checked--tiny', checked && size === 'tiny'), _defineProperty$1(_classNames6, 'indeterminate--regular', indeterminate && size === 'regular'), _defineProperty$1(_classNames6, 'indeterminate--tiny', indeterminate && size === 'tiny'), _classNames6));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    "data-test": "DesignSystem-Checkbox",
    className: CheckboxClass
  }, /*#__PURE__*/React.createElement("div", {
    "data-test": "DesignSystem-Checkbox-OuterWrapper",
    className: CheckboxOuterWrapper
  }, /*#__PURE__*/React.createElement("input", _extends$2({}, rest, {
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
    id: id,
    "data-test": "DesignSystem-Checkbox-InputBox"
  })), /*#__PURE__*/React.createElement("span", {
    className: CheckboxWrapper,
    "data-test": "DesignSystem-Checkbox-Icon"
  }, IconMapper && /*#__PURE__*/React.createElement(CheckboxIcon, {
    name: IconMapper
  }))), /*#__PURE__*/React.createElement("div", {
    className: "Checkbox-labelWrapper"
  }, label && label.trim() && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    className: CheckboxLabelClass,
    "data-test": "DesignSystem-Checkbox-Label"
  }, /*#__PURE__*/React.createElement(Text, {
    size: size === 'tiny' ? 'small' : 'regular',
    appearance: disabled ? 'disabled' : 'default',
    className: "ellipsis--noWrap mw-100",
    ref: labelRef
  }, label.trim())), helpText && /*#__PURE__*/React.createElement(Text, {
    "data-test": "DesignSystem-Checkbox-HelpText",
    size: "small",
    appearance: disabled ? 'disabled' : 'subtle'
  }, helpText.trim()))));
});
Checkbox.displayName = 'Checkbox';

var _excluded$T = ["size", "sizeXS", "sizeS", "sizeM", "sizeL", "sizeXL", "className", "children"];
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
      rest = _objectWithoutProperties(props, _excluded$T);

  var classes = classnames((_classNames = {}, _defineProperty$1(_classNames, 'Col', true), _defineProperty$1(_classNames, "Col--".concat(size), size), _defineProperty$1(_classNames, "Col--xs-".concat(sizeXS), sizeXS), _defineProperty$1(_classNames, "Col--s-".concat(sizeS), sizeS), _defineProperty$1(_classNames, "Col--m-".concat(sizeM), sizeM), _defineProperty$1(_classNames, "Col--l-".concat(sizeL), sizeL), _defineProperty$1(_classNames, "Col--xl-".concat(sizeXL), sizeXL), _defineProperty$1(_classNames, "".concat(className), className), _classNames));
  return /*#__PURE__*/React.createElement("div", _extends$2({
    ref: ref,
    "data-test": "DesignSystem-Column"
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

  var onPasteHandler = function onPasteHandler(_e, val) {
    var onPaste = inputOptions.onPaste;
    setState({
      open: true
    });

    if (val && !val.includes(placeholderChar)) {
      var d = translateToDate(inputFormat, val, validators);
      setState({
        date: d
      });
    }

    if (onPaste) onPaste(_e, val);
  };

  var onChangeHandler = function onChangeHandler(_e, val) {
    var onChange = inputOptions.onChange;
    setState({
      open: true
    });

    if (val && !val.includes(placeholderChar)) {
      var d = translateToDate(inputFormat, val, validators);
      setState({
        date: d
      });
    }

    if (onChange) onChange(_e);
  };

  var onBlurHandler = function onBlurHandler(_e, val) {
    var onBlur = inputOptions.onBlur;
    setState({
      init: true
    });
    var hasNumber = /\d/;

    if (val && hasNumber.test(val) && val.includes(placeholderChar)) {
      setState({
        error: true
      });
    } else if (val && !hasNumber.test(val) || !val) {
      setState({
        error: false
      });
    }

    if (onBlur) onBlur(_e, val || '');
  };

  var onClearHandler = function onClearHandler(e) {
    var onClear = inputOptions.onClear;
    setState({
      init: true,
      date: undefined
    });
    if (onClear) onClear(e);
  };

  var showError = inputOptions.error || inputOptions.required && error && init;
  var errorMessage = inputOptions.caption === undefined ? 'Invalid value' : inputOptions.caption;

  var inputValidator = function inputValidator(val) {
    return isValid(validators, val, inputFormat);
  };

  var mask = date[inputFormat];
  return /*#__PURE__*/React.createElement(X, _extends$2({
    icon: "events",
    placeholder: inputFormat
  }, inputOptions, {
    error: showError,
    mask: mask,
    value: date$1 ? translateToString(inputFormat, date$1) : init ? X.utils.getDefaultValue(mask, placeholderChar) : '',
    onChange: onChangeHandler,
    onPaste: onPasteHandler,
    onBlur: onBlurHandler,
    onClear: onClearHandler,
    caption: showError ? errorMessage : '',
    validators: [inputValidator],
    clearOnEmptyBlur: true,
    id: "parent-DatePicker"
  }));
};

var _excluded$S = ["date", "open", "position", "inputFormat", "outputFormat", "inputOptions", "validators", "withInput", "disabledBefore", "disabledAfter", "onDateChange", "closeOnSelect", "size", "showTodayDate", "children", "view"];
var DatePicker = /*#__PURE__*/function (_React$Component) {
  _inherits(DatePicker, _React$Component);

  var _super = _createSuper(DatePicker);

  function DatePicker(props) {
    var _this;

    _classCallCheck(this, DatePicker);

    _this = _super.call(this, props);

    _defineProperty$1(_assertThisInitialized$1(_this), "getError", function (date) {
      var _this$props = _this.props,
          disabledBefore = _this$props.disabledBefore,
          disabledAfter = _this$props.disabledAfter,
          outputFormat = _this$props.outputFormat,
          onError = _this$props.onError;
      if (!date) return false;

      var _getDateInfo = getDateInfo(disabledBefore),
          dbYear = _getDateInfo.year,
          dbMonth = _getDateInfo.month,
          dbDate = _getDateInfo.date;

      var _getDateInfo2 = getDateInfo(disabledAfter),
          daYear = _getDateInfo2.year,
          daMonth = _getDateInfo2.month,
          daDate = _getDateInfo2.date;

      if (compareDate(date, 'less', dbYear, dbMonth, dbDate) || compareDate(date, 'more', daYear, daMonth, daDate)) {
        if (onError) {
          var dVal = translateToString(outputFormat, date);
          onError(date, dVal);
        }

        return true;
      }

      return false;
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onDateChangeHandler", function (d) {
      _this.setState({
        init: true,
        date: d
      });

      var closeOnSelect = _this.props.closeOnSelect;
      if (closeOnSelect) _this.setState({
        open: false
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onToggleHandler", function (o, type) {
      var disabled = _this.props.inputOptions.disabled;
      if (disabled) return;

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

  _createClass(DatePicker, [{
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
      var _this2 = this;

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
          var size = _this$props4.size,
          _this$props4$showToda = _this$props4.showTodayDate,
          showTodayDate = _this$props4$showToda === void 0 ? true : _this$props4$showToda,
          _this$props4$children = _this$props4.children,
          children = _this$props4$children === void 0 ? /*#__PURE__*/React.createElement(React.Fragment, null) : _this$props4$children,
          view = _this$props4.view,
          rest = _objectWithoutProperties(_this$props4, _excluded$S);

      var date = this.state.date;
      var months = config.months;
      var todayDate = new Date(Date.now());
      var todayMonthAndDate = "".concat(months[todayDate.getMonth()], " ").concat(todayDate.getDate());
      var currDate = convertToDate(date, inputFormat, validators);
      var dateDisabledBefore = convertToDate(disabledBefore, inputFormat, validators);
      var dateDisabledAfter = convertToDate(disabledAfter, inputFormat, validators);

      var isTodayDisabled = function isTodayDisabled() {
        var isTodayDateDisabled = true;

        if (currDate && dateDisabledBefore && dateDisabledAfter) {
          isTodayDateDisabled = currDate > dateDisabledBefore && currDate < dateDisabledAfter;
        } else if (currDate && dateDisabledBefore) {
          isTodayDateDisabled = currDate > dateDisabledBefore;
        } else if (currDate && dateDisabledAfter) {
          isTodayDateDisabled = currDate < dateDisabledAfter;
        }

        return !isTodayDateDisabled;
      };

      var todayChipClass = classnames({
        'd-flex justify-content-center': true,
        'pb-5': size === 'small',
        'pb-6': size === 'large',
        'pt-3': size === 'large' && view === 'year'
      });
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "d-flex"
      }, children, /*#__PURE__*/React.createElement(Calendar, _extends$2({}, rest, {
        size: size,
        date: currDate,
        view: view,
        disabledBefore: dateDisabledBefore,
        disabledAfter: dateDisabledAfter,
        onDateChange: this.onDateChangeHandler
      }))), showTodayDate && /*#__PURE__*/React.createElement("div", {
        className: todayChipClass,
        "data-test": "DesignSystem-Select--TodaysDate-wrapper"
      }, /*#__PURE__*/React.createElement(Chip, {
        label: "Today, ".concat(todayMonthAndDate),
        name: "chip",
        type: "action",
        disabled: isTodayDisabled(),
        onClick: function onClick() {
          return _this2.onDateChangeHandler(new Date());
        }
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          position = _this$props5.position,
          withInput = _this$props5.withInput,
          inputFormat = _this$props5.inputFormat,
          inputOptions = _this$props5.inputOptions,
          validators = _this$props5.validators,
          popoverOptions = _this$props5.popoverOptions;
      var open = this.state.open;

      if (withInput) {
        return /*#__PURE__*/React.createElement(Popover, _extends$2({
          trigger: /*#__PURE__*/React.createElement(Trigger$1, {
            inputFormat: inputFormat,
            inputOptions: inputOptions,
            validators: validators,
            state: this.state,
            setState: this.setState.bind(this)
          })
        }, popoverOptions, {
          triggerClass: "w-100",
          position: position,
          appendToBody: true,
          open: open,
          onToggle: this.onToggleHandler
        }), this.renderCalendar());
      }

      return this.renderCalendar();
    }
  }]);

  return DatePicker;
}(React.Component);

_defineProperty$1(DatePicker, "defaultProps", _objectSpread2(_objectSpread2({}, Calendar.defaultProps), {}, {
  position: 'bottom-start',
  inputFormat: 'mm/dd/yyyy',
  outputFormat: 'mm/dd/yyyy',
  validators: [date$1],
  inputOptions: {},
  closeOnSelect: true
}));

var parseDate = function parseDate(date_time) {
  var d = new Date();
  d.setHours(date_time.substring(0, 2));
  d.setMinutes(date_time.substring(3, 5));
  return d;
};

var isFormat12Hour = function isFormat12Hour(format) {
  return format === '12-Hour';
};

var isTimeIn12HourFormat = function isTimeIn12HourFormat(time) {
  return _isTimeInAM(time) || _isTimeInPM(time);
};

var _isTimeInAM = function _isTimeInAM(time) {
  return time.includes('a') || time.includes('A');
};
var _isTimeInPM = function _isTimeInPM(time) {
  return time.includes('p') || time.includes('P');
};
/**
 * Convert time from 12 hour format to 24 hour format
 * @param timeStr in hh:mm [AM/PM] format
 * @returns time in HH:MM format
 */

var convert12To24HourFormat$1 = function convert12To24HourFormat(timeStr) {
  var _timeStr$split = timeStr.split(' '),
      _timeStr$split2 = _slicedToArray(_timeStr$split, 2),
      time = _timeStr$split2[0],
      modifier = _timeStr$split2[1];

  var timeArr = time.split(':');
  var hours = timeArr[0];
  var minutes = timeArr[1];

  if (hours === '12' && _isTimeInAM(modifier)) {
    hours = '00';
  }

  if (_isTimeInPM(modifier) && hours !== '12') {
    hours = (parseInt(hours, 10) + 12).toString();
  }

  return "".concat(hours, ":").concat(minutes);
};
/**
 * @param val
 * @returns insert 0 at start in case of single digit
 */

var convertToTwoDigit = function convertToTwoDigit(val) {
  return ('0' + val).slice(-2);
};
/**
 * Convert time from 24 hour format to 12 hour format
 * @param timeStr in HH:MM format
 * @returns time in hh:mm [AM/PM] format
 */

var convert24To12HourFormat = function convert24To12HourFormat(timeStr) {
  var timeArr = timeStr.split(':');
  var hours = parseInt(timeArr[0], 10);
  var modifier = hours >= 12 ? 'PM' : 'AM';
  var convertedHours = hours % 12 || 12;
  var hoursInString = convertedHours.toString();
  hoursInString = convertToTwoDigit(hoursInString);
  var minutes = timeArr[1];
  var result = "".concat(hoursInString.toString(), ":").concat(minutes, " ").concat(modifier);
  return result;
};

var getTimeIn24HrFormat = function getTimeIn24HrFormat(timeStr) {
  if (isTimeIn12HourFormat(timeStr)) {
    return convert12To24HourFormat$1(timeStr);
  }

  return timeStr;
};
/**
 * @param startTime in HH:MM format
 * @param endTime in HH:MM format
 * @returns returns true if start time is greater than end time
 */


var checkTimeDifference = function checkTimeDifference(startTime, endTime) {
  var parseStartTime = parseDate(startTime);
  var parseEndTime = parseDate(endTime);
  return parseStartTime > parseEndTime;
};
/**
 * @param startTime in HH:MM format
 * @param endTime in HH:MM format
 * @param interval
 * @returns array of 24 hour time list based on interval
 */

var get24HourTimeList = function get24HourTimeList(startTime, endTime, interval) {
  var timeList = [];
  var parseStartTime = parseDate(startTime);
  var parseEndTime = parseDate(endTime);

  while (parseStartTime <= parseEndTime) {
    timeList.push(parseStartTime.toTimeString().substring(0, 5));
    parseStartTime.setMinutes(parseStartTime.getMinutes() + interval);
  }

  return timeList;
};
/**
 * @param startTime in HH:MM format
 * @param interval
 * @returns time list in 24 hour format including times option for next day
 */


var getReverseTimeList = function getReverseTimeList(startTime, endTime, interval) {
  var timeList = get24HourTimeList('00:00', '23:59', interval);
  var startTimeIndex = timeList.indexOf(startTime);
  var endTimeIndex = timeList.indexOf(endTime);
  var nextDayTimeIndex = endTime === '' ? startTimeIndex : endTimeIndex + 1;
  var presentDayList = timeList.slice(startTimeIndex);
  var nextDayList = timeList.slice(0, nextDayTimeIndex);
  var result = presentDayList.concat(nextDayList);
  return result;
};

var getTimeListIn24HourFormat = function getTimeListIn24HourFormat(startTime, endTime, interval) {
  if (endTime === '' || checkTimeDifference(startTime, endTime)) {
    return getReverseTimeList(startTime, endTime, interval);
  }

  return get24HourTimeList(startTime, endTime, interval);
};

var getTimeDifference = function getTimeDifference(startTime, endTime) {
  var timeStart = new Date('07/07/2022 ' + startTime);
  var timeEnd = new Date('07/07/2022 ' + endTime);
  var diff = timeEnd.getTime() - timeStart.getTime();
  var diff_as_date = new Date(diff);
  var hour = diff_as_date.getUTCHours();
  var minute = diff_as_date.getUTCMinutes();
  return {
    hour: hour,
    minute: minute
  };
};

var getCustomLabel = function getCustomLabel(time, timeFormat, showDuration, referenceTime) {
  var label = time;

  if (isFormat12Hour(timeFormat)) {
    label = convert24To12HourFormat(time);
  }

  if (showDuration && referenceTime) {
    var _getTimeDifference = getTimeDifference(referenceTime, time),
        hour = _getTimeDifference.hour,
        minute = _getTimeDifference.minute;

    var timeDiffLabel = " (".concat(hour, " hr ").concat(minute, " min)");
    label += timeDiffLabel;
  }

  return label;
};

var isOptionDisabled = function isOptionDisabled(time, timeFormat, disabledSlotList) {
  var timeValue = time;

  if (isFormat12Hour(timeFormat)) {
    timeValue = convert24To12HourFormat(time);
  }

  if (disabledSlotList.includes(timeValue)) {
    return true;
  }

  return false;
};

var convertTimeToOptionList = function convertTimeToOptionList(timeList, timeFormat) {
  var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'TimePicker-Option-key';
  var showDuration = arguments.length > 3 ? arguments[3] : undefined;
  var referenceTime = arguments.length > 4 ? arguments[4] : undefined;
  var disabledSlotList = arguments.length > 5 ? arguments[5] : undefined;
  var optionList = timeList.map(function (time, index) {
    return {
      label: getCustomLabel(time, timeFormat, showDuration, referenceTime),
      value: time,
      disabled: disabledSlotList && isOptionDisabled(time, timeFormat, disabledSlotList),
      selected: false,
      optionID: id + index
    };
  });
  return optionList;
};

var computeEndTime = function computeEndTime(startTime) {
  return startTime ? '' : '23:59';
};

var getDropdownOptionList = function getDropdownOptionList(props) {
  var startTime = props.startTime,
      endTime = props.endTime,
      interval = props.interval,
      timeFormat = props.timeFormat,
      showDuration = props.showDuration,
      disabledSlotList = props.disabledSlotList,
      id = props.id;
  var startTimeIn24Hr = startTime ? getTimeIn24HrFormat(startTime) : '00:00';
  var endTimeIn24Hr = endTime ? getTimeIn24HrFormat(endTime) : computeEndTime(startTime);
  var timeList = getTimeListIn24HourFormat(startTimeIn24Hr, endTimeIn24Hr, interval);
  var dropdownOptionList = convertTimeToOptionList(timeList, timeFormat, id, showDuration, startTime, disabledSlotList);
  return dropdownOptionList;
};

var convertMinTo60 = function convertMinTo60(time) {
  var parseNum = parseInt(time, 10);
  if (parseNum < 10) return time;
  var timeInNum = parseNum > 60 ? parseNum % 60 : parseNum;
  var min = (timeInNum.toString() + '0').slice(0, 2);
  return min;
};

var get24HourCurrentTime = function get24HourCurrentTime() {
  var today = new Date();
  return convertToTwoDigit(today.getHours()) + ':' + convertToTwoDigit(today.getMinutes());
};

var convertHourTo24 = function convertHourTo24(time) {
  var timeInNum = parseInt(time, 10) % 24;
  return timeInNum.toString();
};

var convertHourTo12 = function convertHourTo12(time) {
  var timeInNum = parseInt(time, 10) % 12;
  return timeInNum.toString();
};

var _checkNumber = function _checkNumber(str) {
  var numberRegex = /^[0-9]+$/;
  return numberRegex.test(str);
};

var _checkNumberWithAMPM = function _checkNumberWithAMPM(str) {
  var numberWithAMPMRegex = /^[0-9]+[ AaMmPp]+$/;
  return numberWithAMPMRegex.test(str);
};

var _checkNumberWithSpecialChar = function _checkNumberWithSpecialChar(str) {
  var numberWithSpecialCharRegex = /^[0-9]+[`\s!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~][0-9]*$/;
  return numberWithSpecialCharRegex.test(str);
};

var _checkNumberWithSpecialCharAMPM = function _checkNumberWithSpecialCharAMPM(str) {
  var numberWithSpecialCharAMPM = /^[0-9]+[`\s!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~][0-9]+[ AaMmPp]+$/;
  return numberWithSpecialCharAMPM.test(str);
};

var specialCharRegex = /[`\s!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
/**
 * @param searchTime in [number special-char number] format
 * @returns timeObj with hour & minute in 24 hour format
 */

var getTimeFromNumberWithSpecialChar = function getTimeFromNumberWithSpecialChar(searchTime) {
  var time = searchTime.split(specialCharRegex);
  var hour = convertHourTo24(time[0]);
  var hh = convertToTwoDigit(hour);
  var min = time[1] !== '' ? convertMinTo60(time[1]) : '00';
  var mm = (min + '0').slice(0, 2);
  return {
    hour: hh,
    min: mm
  };
};
/**
 * If search term only contains number
 * @param searchTerm
 * @returns timeObj with hour & minute in 24 hour format
 */


var getSearchTimeFromNumber = function getSearchTimeFromNumber(searchTerm, show12HourFormat) {
  var searchLen = searchTerm.length;
  var searchTimeInNum = parseInt(searchTerm, 10);
  var firstTwoTerm = searchTerm.slice(0, 2);
  var hh = '00';
  var mm = '00';

  switch (searchLen) {
    case 1:
      // if search term length is 1 consider it as hour
      hh = '0' + searchTerm;
      break;

    case 2:
      // if search term length is 2
      if (searchTimeInNum <= 24 || show12HourFormat && searchTimeInNum <= 12) {
        // consider it as hour
        hh = convertToTwoDigit(searchTerm);
      } else {
        // consider first term as hour and last term as min
        hh = '0' + searchTerm[0];
        mm = convertMinTo60(searchTerm[1] + '0'); // mm = searchTerm[1] + '0';
      }

      break;

    case 3:
      hh = '0' + searchTerm[0];
      mm = convertMinTo60(searchTerm.slice(1));
      break;

    case 4:
      hh = show12HourFormat ? convertHourTo12(firstTwoTerm) : convertHourTo24(firstTwoTerm);
      mm = convertMinTo60(searchTerm.slice(2));
      break;

    default:
      // set time as -1 in case of invalid time
      hh = '-1';
      mm = '-1';
  }

  return {
    hour: hh,
    min: mm
  };
};
/**
 * @param searchTime in [number AMPM] format
 * @returns timeObj with hour & minute in 24 hour format
 */


var getTimeFromNumberWithAMPM = function getTimeFromNumberWithAMPM(searchTime) {
  var timeArr = searchTime.split(/[\saAmMpP]/);

  var _getSearchTimeFromNum = getSearchTimeFromNumber(timeArr[0], true),
      hour = _getSearchTimeFromNum.hour,
      min = _getSearchTimeFromNum.min;

  return {
    hour: hour,
    min: min
  };
};
/**
 * @param searchTerm entered by user in any format
 * @returns modified search term in 24 hour format
 */


var formatSearchTerm = function formatSearchTerm(optionList, searchTerm) {
  var searchTime = {
    hour: '00',
    min: '00'
  }; // If search term only contains numbers

  if (_checkNumber(searchTerm)) {
    var searchTimeInHHMM = getSearchTimeFromNumber(searchTerm);

    if (parseInt(searchTimeInHHMM.hour) <= 12 && parseInt(searchTimeInHHMM.hour) > 0) {
      // switch to AM/PM based on current time
      searchTime = getCurrentRelativeTime(optionList, searchTimeInHHMM);
    } else {
      searchTime = searchTimeInHHMM;
    }
  } // if search term contains numbers along with [ampm]
  else if (_checkNumberWithAMPM(searchTerm)) {
    searchTime = getTimeFromNumberWithAMPM(searchTerm);
    searchTime.hour = convert12To24HourFormat(searchTime.hour, searchTerm);
  } // if search term contains numbers along with special character
  else if (_checkNumberWithSpecialChar(searchTerm)) {
    var _searchTimeInHHMM = getTimeFromNumberWithSpecialChar(searchTerm);

    if (parseInt(_searchTimeInHHMM.hour) <= 12) {
      // switch to AM/PM based on current time
      searchTime = getCurrentRelativeTime(optionList, _searchTimeInHHMM);
    } else {
      searchTime = _searchTimeInHHMM;
    }
  } // if search term contains numbers, special character & [AmPm]
  else if (_checkNumberWithSpecialCharAMPM(searchTerm)) {
    var timeWithoutAMPM = searchTerm.replace(/[\saApPmM]/g, '');

    if (_checkNumber(timeWithoutAMPM)) {
      searchTime = getSearchTimeFromNumber(timeWithoutAMPM, true);
    } else if (_checkNumberWithSpecialChar(timeWithoutAMPM)) {
      searchTime = getTimeFromNumberWithSpecialChar(timeWithoutAMPM);
    }

    searchTime.hour = convert12To24HourFormat(searchTime.hour, searchTerm);
  }

  return searchTime;
};
/**
 * @param hours
 * @param searchTerm
 * @returns hours based on AM/PM in 24 hour format
 */

var convert12To24HourFormat = function convert12To24HourFormat(hours, searchTerm) {
  if (hours === '12' && _isTimeInAM(searchTerm)) {
    hours = '00';
  } else if (_isTimeInPM(searchTerm) && hours !== '12') {
    hours = (parseInt(hours, 10) + 12).toString();
  }

  return hours;
};
/**
 * Switch to AM/PM time based on current time
 * @param optionList
 * @param searchTime
 */


var getCurrentRelativeTime = function getCurrentRelativeTime(optionList, searchTime) {
  var searchTimeStr = "".concat(searchTime.hour, ":").concat(searchTime.min);
  var currentTime = get24HourCurrentTime();
  var greaterTime = checkTimeDifference(currentTime, searchTimeStr);
  var currentTimeIndex = findClosestTimeIndex(optionList, currentTime);
  var searchTimeIndex = findClosestTimeIndex(optionList, searchTimeStr);

  if (greaterTime && currentTimeIndex > searchTimeIndex) {
    var hourIn24Format = parseInt(searchTime.hour, 10) + 12;
    searchTime.hour = hourIn24Format.toString();
  }

  return searchTime;
};

var findClosestTimeIndex = function findClosestTimeIndex(optionList, searchItem) {
  var closestItemIndex = 0;
  var minTime = {
    hour: 100,
    mins: 100
  };

  for (var index = 0; index < optionList.length; index++) {
    var _getTimeDifference = getTimeDifference(searchItem, optionList[index]),
        hour = _getTimeDifference.hour,
        minute = _getTimeDifference.minute;

    if (hour < minTime.hour || hour === minTime.hour && minute < minTime.mins) {
      minTime.hour = hour;
      minTime.mins = minute;
      closestItemIndex = index;
    }
  }

  return closestItemIndex;
};
/**
 * Get index of search term from option list
 * @param optionList
 * @param searchTerm
 * @returns Index of the search term in option list
 */


var getSearchIndex = function getSearchIndex(optionList, searchTerm) {
  var _formatSearchTerm = formatSearchTerm(optionList, searchTerm),
      hour = _formatSearchTerm.hour,
      min = _formatSearchTerm.min;

  if (min === '60') {
    min = '00';
    hour = (parseInt(hour, 10) + 1).toString();
  }

  var searchItem = "".concat(hour, ":").concat(min);
  var searchIndex = findClosestTimeIndex(optionList, searchItem);
  return searchIndex;
};
/**
 * @param searchTerm
 * @returns count number of digits present inside search term
 */

var countNumberInStr = function countNumberInStr(searchTerm) {
  var _searchTerm$match;

  return ((_searchTerm$match = searchTerm.match(/\d/g)) === null || _searchTerm$match === void 0 ? void 0 : _searchTerm$match.length) || 0;
};

var isValidSearchTerm = function isValidSearchTerm(searchTerm) {
  var totalDigit = countNumberInStr(searchTerm);
  return totalDigit > 0 && totalDigit < 5;
};

var getValueFromOptionList = function getValueFromOptionList(optionList) {
  var list = optionList.map(function (option) {
    return option.value;
  });
  return list;
};

var getSearchValueIndex = function getSearchValueIndex(options, searchTerm) {
  // Search Term is valid if it contains number
  if (!isValidSearchTerm(searchTerm)) {
    return -1;
  }

  var searchIndex = getSearchIndex(options, searchTerm);
  return searchIndex;
};

var getScrollIndex = function getScrollIndex(dropdownOptionList, searchTerm) {
  var optionList = getValueFromOptionList(dropdownOptionList);

  if (searchTerm === '') {
    // return current time index
    var currTime = get24HourCurrentTime();
    var currTimeIndex = findClosestTimeIndex(optionList, currTime);
    return currTimeIndex;
  }

  return getSearchValueIndex(optionList, searchTerm);
};

var getSearchedOptions = function getSearchedOptions(options, searchTerm) {
  var result = options.filter(function (option) {
    return option.label.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return result;
};

var sortList = function sortList(arr) {
  return arr.sort(function (a, b) {
    return a.value > b.value ? 1 : b.value > a.value ? -1 : 0;
  });
};

var _isEqual = function _isEqual(firstList, secondList) {
  var firstSortedList = sortList(_toConsumableArray(firstList));
  var secondSortedList = sortList(_toConsumableArray(secondList));
  return firstSortedList.length === secondSortedList.length && firstSortedList.every(function (option, index) {
    return option.value === secondSortedList[index].value;
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
var scrollToOptionIndex = function scrollToOptionIndex(scrollIndex, listOptions) {
  var _listOptions$scrollIn;

  var optionID = listOptions && ((_listOptions$scrollIn = listOptions[scrollIndex]) === null || _listOptions$scrollIn === void 0 ? void 0 : _listOptions$scrollIn.optionID);
  var targetOption = document.getElementById(optionID);
  targetOption && targetOption.scrollIntoView && targetOption.scrollIntoView({
    block: 'center'
  });
};
var groupListOptions = function groupListOptions(listOptions) {
  var groupList = listOptions.reduce(function (acc, option) {
    var group = option.group || '';

    if (!acc[group]) {
      acc[group] = [];
    }

    acc[group].push(option);
    return acc;
  }, {});
  var flattenedGroupList = Object.values(groupList).flatMap(function (item) {
    return _toConsumableArray(item);
  });
  return flattenedGroupList;
};

var TimePickerWithSearch = function TimePickerWithSearch(props) {
  var open = props.open,
      endTime = props.endTime,
      interval = props.interval,
      onChange = props.onChange,
      startTime = props.startTime,
      timeFormat = props.timeFormat,
      showDuration = props.showDuration,
      noResultMessage = props.noResultMessage,
      disabledSlotList = props.disabledSlotList,
      fetchTimeOptions = props.fetchTimeOptions,
      error = props.error;

  var _React$useState = React.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      tabIndex = _React$useState2[0],
      setTabIndex = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      openPopover = _React$useState4[0],
      setOpenPopover = _React$useState4[1];

  var _React$useState5 = React.useState(-1),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      selectedIndex = _React$useState6[0],
      setSelectedIndex = _React$useState6[1];

  var _React$useState7 = React.useState(0),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      counter = _React$useState8[0],
      setCounter = _React$useState8[1];

  var dropdownOptionList = getDropdownOptionList(props);
  React.useEffect(function () {
    open !== undefined && setOpenPopover(open);
  }, [open]);
  React.useEffect(function () {
    var timer;

    if (openPopover && selectedIndex != -1) {
      setTabIndex(selectedIndex);
      timer = setTimeout(function () {
        scrollToOptionIndex(selectedIndex, dropdownOptionList);
      }, 100);
    }

    return function () {
      clearTimeout(timer);
    };
  }, [openPopover]); // Required to re-render dropdown forcefully whenever props changes

  React.useEffect(function () {
    setCounter(counter + 1);
  }, [startTime, endTime, interval, showDuration, disabledSlotList]);

  var onChangeHandler = function onChangeHandler(props) {
    var time = props;

    if (isFormat12Hour(timeFormat)) {
      time = convert24To12HourFormat(time);
    }

    var selectIndex = dropdownOptionList.findIndex(function (option) {
      return option.value === props;
    });
    setSelectedIndex(selectIndex);
    onChange && onChange(time);
  };

  var getOptionList = function getOptionList(searchTerm) {
    var scrollIndex;
    var indexValue = getScrollIndex(dropdownOptionList, searchTerm);

    if (searchTerm === '' && selectedIndex != -1) {
      scrollIndex = selectedIndex;
      setTabIndex(selectedIndex);
    } else {
      scrollIndex = indexValue;
      setTabIndex(indexValue);
    }

    return Promise.resolve({
      options: indexValue === -1 ? [] : dropdownOptionList,
      count: dropdownOptionList.length,
      scrollToIndex: scrollIndex === 0 ? scrollIndex + 1 : scrollIndex,
      searchTerm: searchTerm
    });
  };

  var fetchOptionList = function fetchOptionList() {
    return fetchTimeOptions ? fetchTimeOptions : getOptionList;
  };

  return /*#__PURE__*/React.createElement(Dropdown, {
    key: counter,
    maxHeight: 160,
    loadersCount: 0,
    withSearch: true,
    open: openPopover,
    tabIndex: tabIndex,
    searchPlaceholder: "Search",
    onChange: onChangeHandler,
    fetchOptions: fetchOptionList(),
    noResultMessage: noResultMessage,
    staticLimit: dropdownOptionList.length,
    onPopperToggle: function onPopperToggle() {
      setOpenPopover(!openPopover);
    },
    error: error
  });
};
TimePickerWithSearch.defaultProps = {
  timeFormat: '12-Hour',
  interval: 15
};
TimePickerWithSearch.displayName = 'TimePickerWithSearch';

var TimePickerWithInput = function TimePickerWithInput(props) {
  var validators = props.validators,
      inputOptions = props.inputOptions,
      inputFormat = props.inputFormat,
      outputFormat = props.outputFormat,
      onTimeChange = props.onTimeChange,
      timeProp = props.time,
      error = props.error;

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
  return /*#__PURE__*/React.createElement(X, _extends$2({
    placeholder: placeholders[inputFormat],
    placeholderChar: placeholderChar
  }, inputOptions, {
    mask: mask,
    value: time$1 ? translateToTime(inputFormat, time$1) : init ? X.utils.getDefaultValue(mask, placeholderChar) : '',
    validators: inputValidator,
    onChange: onChangeHandler,
    onClear: onClearHandler,
    onBlur: onBlurHandler,
    error: error,
    id: "parent-TimePicker"
  }));
};
TimePickerWithInput.defaultProps = {
  inputFormat: 'hh:mm AM',
  outputFormat: 'hh:mm AM',
  inputOptions: {},
  validators: [time$1]
};
TimePickerWithInput.displayName = 'TimePickerWithInput';

var TimePicker = function TimePicker(props) {
  return props.withSearch ? /*#__PURE__*/React.createElement(TimePickerWithSearch, props) : /*#__PURE__*/React.createElement(TimePickerWithInput, props);
};
TimePicker.defaultProps = _objectSpread2(_objectSpread2({}, TimePickerWithInput.defaultProps), TimePickerWithSearch.defaultProps);
TimePicker.displayName = 'TimePicker';

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

var _excluded$R = ["triggerSize", "placeholder", "menu", "children", "icon", "disabled", "open", "inlineLabel", "error", "iconType"];
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
      iconType = props.iconType,
      rest = _objectWithoutProperties(props, _excluded$R);

  var buttonDisabled = disabled ? 'disabled' : 'default';
  var trimmedPlaceholder = placeholder.trim();
  var value = children ? children : trimmedPlaceholder;
  var iconName = !menu ? 'keyboard_arrow_down' : icon ? icon : 'more_horiz';
  var buttonClass = classnames((_classNames = {}, _defineProperty$1(_classNames, 'Button', true), _defineProperty$1(_classNames, 'DropdownButton', true), _defineProperty$1(_classNames, "DropdownButton--".concat(triggerSize), triggerSize), _defineProperty$1(_classNames, "DropdownButton--".concat(triggerSize, "Square"), menu), _defineProperty$1(_classNames, 'DropdownButton--placeholder', !children && !menu), _defineProperty$1(_classNames, 'DropdownButton--icon', icon), _defineProperty$1(_classNames, 'DropdownButton--open', open), _defineProperty$1(_classNames, 'DropdownButton--error', error), _classNames));
  var textClass = classnames((_classNames2 = {}, _defineProperty$1(_classNames2, 'Text', true), _defineProperty$1(_classNames2, 'Text--regular', true), _defineProperty$1(_classNames2, 'DropdownButton-text', true), _classNames2));
  return /*#__PURE__*/React.createElement("button", _extends$2({
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
    className: "mr-4 white-space-nowrap"
  }, "".concat(inlineLabel.trim().charAt(0).toUpperCase()).concat(inlineLabel.trim().slice(1))), icon && !inlineLabel && /*#__PURE__*/React.createElement(Icon, {
    appearance: buttonDisabled,
    className: "d-flex align-items-center mr-4",
    name: icon,
    type: iconType
  }), value && /*#__PURE__*/React.createElement("span", {
    className: textClass
  }, value)), /*#__PURE__*/React.createElement(Icon, {
    appearance: buttonDisabled,
    name: iconName,
    type: iconType
  }));
});
DropdownButton.displayName = 'DropdownButton';

var CheckboxOption = function CheckboxOption(props) {
  var className = props.className,
      selected = props.selected,
      optionData = props.optionData,
      onChangeHandler = props.onChangeHandler,
      onUpdateActiveOption = props.onUpdateActiveOption,
      dataTest = props.dataTest,
      _props$id = props.id,
      id = _props$id === void 0 ? '' : _props$id;
  var subInfo = optionData.subInfo,
      label = optionData.label,
      disabled = optionData.disabled;

  var renderSubInfo = function renderSubInfo(subInfo) {
    var labelAppearance = disabled ? 'disabled' : 'subtle';
    var iconAppearance = selected ? 'white' : 'disabled';

    if (typeof subInfo === 'string') {
      return /*#__PURE__*/React.createElement(Text, {
        "data-test": "DesignSystem-DropdownOption--WITH_META--Meta",
        appearance: labelAppearance,
        size: "small",
        weight: "medium"
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
      seperatorAppearance: iconAppearance,
      "data-test": "DesignSystem-DropdownOption--WITH_META--MetaList"
    });
  };

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
    className: "OptionCheckbox ".concat(subInfo ? 'pb-0' : ''),
    "data-test": "".concat(dataTest, "--Checkbox"),
    id: id
  }), subInfo && /*#__PURE__*/React.createElement("div", {
    className: "pl-8 ml-3"
  }, renderSubInfo(subInfo)));
};

var DefaultOption = function DefaultOption(props) {
  var className = props.className,
      textClassName = props.textClassName,
      onClickHandler = props.onClickHandler,
      optionData = props.optionData,
      color = props.color,
      onUpdateActiveOption = props.onUpdateActiveOption,
      dataTest = props.dataTest;
  var label = optionData.label,
      disabled = optionData.disabled;
  return (
    /*#__PURE__*/
    // TODO(a11y): fix accessibility

    /* eslint-disable */
    React.createElement("div", {
      className: className,
      onClick: onClickHandler,
      onMouseEnter: onUpdateActiveOption,
      "data-test": dataTest,
      "data-disabled": disabled
    }, /*#__PURE__*/React.createElement("div", {
      className: 'Option-label'
    }, /*#__PURE__*/React.createElement(Text, {
      className: textClassName,
      color: color,
      id: optionData.optionID
    }, label)))
  );
};

var MetaOption = function MetaOption(props) {
  var className = props.className,
      textClassName = props.textClassName,
      onClickHandler = props.onClickHandler,
      optionData = props.optionData,
      onUpdateActiveOption = props.onUpdateActiveOption,
      renderSubInfo = props.renderSubInfo,
      color = props.color,
      dataTest = props.dataTest;
  var subInfo = optionData.subInfo,
      label = optionData.label,
      disabled = optionData.disabled;
  return (
    /*#__PURE__*/
    // TODO(a11y): fix accessibility

    /* eslint-disable */
    React.createElement("div", {
      className: className,
      onClick: onClickHandler,
      onMouseEnter: onUpdateActiveOption,
      "data-test": dataTest,
      "data-disabled": disabled
    }, /*#__PURE__*/React.createElement("div", {
      className: 'Option-label'
    }, /*#__PURE__*/React.createElement(Text, {
      className: textClassName,
      color: color
    }, label), subInfo && renderSubInfo(subInfo)))
  );
};

var IconOption = function IconOption(props) {
  var _classNames;

  var className = props.className,
      textClassName = props.textClassName,
      onClickHandler = props.onClickHandler,
      optionData = props.optionData,
      onUpdateActiveOption = props.onUpdateActiveOption,
      color = props.color,
      dataTest = props.dataTest;
  var label = optionData.label,
      icon = optionData.icon,
      disabled = optionData.disabled,
      iconType = optionData.iconType;
  var OptionClass = classnames((_classNames = {}, _defineProperty$1(_classNames, "".concat(className), true), _defineProperty$1(_classNames, 'Option--icon', icon), _classNames));
  return (
    /*#__PURE__*/
    // TODO(a11y): fix accessibility

    /* eslint-disable */
    React.createElement("div", {
      className: OptionClass,
      onClick: onClickHandler,
      onMouseEnter: onUpdateActiveOption,
      "data-test": dataTest,
      "data-disabled": disabled
    }, icon && /*#__PURE__*/React.createElement(Icon, {
      className: "Option-icon mr-4",
      "data-test": "".concat(dataTest, "--Icon"),
      name: icon,
      type: iconType
    }), /*#__PURE__*/React.createElement("div", {
      className: 'Option-label'
    }, /*#__PURE__*/React.createElement(Text, {
      className: textClassName,
      color: color
    }, label)))
  );
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
      color = props.color,
      dataTest = props.dataTest;
  var subInfo = optionData.subInfo,
      label = optionData.label,
      icon = optionData.icon,
      disabled = optionData.disabled;
  var OptionClass = classnames((_classNames = {}, _defineProperty$1(_classNames, "".concat(className), true), _defineProperty$1(_classNames, 'Option--icon', icon), _classNames));
  return (
    /*#__PURE__*/
    // TODO(a11y): fix accessibility

    /* eslint-disable */
    React.createElement("div", {
      className: OptionClass,
      onClick: onClickHandler,
      onMouseEnter: onUpdateActiveOption,
      "data-test": dataTest,
      "data-disabled": disabled
    }, icon && /*#__PURE__*/React.createElement(Icon, {
      "data-test": "".concat(dataTest, "--Icon"),
      className: "Option-icon mr-4",
      name: icon,
      appearance: appearance
    }), /*#__PURE__*/React.createElement("div", {
      className: 'Option-label'
    }, /*#__PURE__*/React.createElement(Text, {
      className: textClassName,
      color: color
    }, label), subInfo && renderSubInfo(subInfo)))
  );
};

var _OptionTypeMapping;
var OptionTypeMapping = (_OptionTypeMapping = {}, _defineProperty$1(_OptionTypeMapping, 'DEFAULT', DefaultOption), _defineProperty$1(_OptionTypeMapping, 'WITH_ICON', IconOption), _defineProperty$1(_OptionTypeMapping, 'WITH_META', MetaOption), _defineProperty$1(_OptionTypeMapping, 'WITH_CHECKBOX', CheckboxOption), _defineProperty$1(_OptionTypeMapping, 'ICON_WITH_META', IconWithMetaOption), _OptionTypeMapping);

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
      menu = props.menu,
      _props$id = props.id,
      id = _props$id === void 0 ? '' : _props$id;

  var _ref = optionData.optionType ? optionData : props,
      _ref$optionType = _ref.optionType,
      optionType = _ref$optionType === void 0 ? 'DEFAULT' : _ref$optionType;

  var disabled = optionData.disabled;
  var color = disabled ? 'inverse-lightest' : selected && !menu ? 'primary-dark' : 'inverse';
  var appearance = disabled ? 'disabled' : selected && !menu ? 'primary_dark' : 'default';
  var type = checkboxes ? 'WITH_CHECKBOX' : optionType;
  var component = OptionTypeMapping[type];
  var OptionClassName = classnames((_classNames = {}, _defineProperty$1(_classNames, 'Option', true), _defineProperty$1(_classNames, 'Option--active', active), _defineProperty$1(_classNames, 'Option--selected', selected && !menu), _defineProperty$1(_classNames, 'Option--disabled', disabled), _defineProperty$1(_classNames, 'OptionWrapper', true), _defineProperty$1(_classNames, "color-".concat(color), true), _classNames));
  var CheckboxClassName = classnames((_classNames2 = {}, _defineProperty$1(_classNames2, 'Option-checkbox', true), _defineProperty$1(_classNames2, 'Option-checkbox--active', active), _defineProperty$1(_classNames2, 'OptionWrapper', true), _classNames2));
  var textClassName = classnames((_classNames3 = {}, _defineProperty$1(_classNames3, 'Option-text', true), _defineProperty$1(_classNames3, 'Option-text--wrap', !props.truncateOption), _classNames3));
  var customOptionClass = classnames((_classNames4 = {}, _defineProperty$1(_classNames4, 'OptionWrapper', true), _defineProperty$1(_classNames4, 'OptionWrapper--disabled', disabled), _classNames4));

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
    return /*#__PURE__*/React.createElement("div", _extends$2({
      "data-test": "DesignSystem-DropdownOption--Custom",
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
    var labelAppearance = disabled ? 'disabled' : selected && !menu ? 'white' : 'subtle';
    var subInfoColor = disabled ? 'inverse-lightest' : selected && !menu ? 'primary-dark' : 'inverse-lighter';
    var iconAppearance = selected ? 'white' : 'disabled';

    if (typeof subInfo === 'string') {
      return /*#__PURE__*/React.createElement(Text, {
        "data-test": "DesignSystem-DropdownOption--WITH_META--Meta",
        color: subInfoColor,
        size: "small",
        weight: "medium",
        className: "Option-subInfo"
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
      seperatorAppearance: iconAppearance,
      "data-test": "DesignSystem-DropdownOption--WITH_META--MetaList"
    });
  };

  return component({
    selected: selected,
    index: index,
    renderSubInfo: renderSubInfo,
    optionData: optionData,
    textClassName: textClassName,
    appearance: appearance,
    color: color,
    onClickHandler: onClickHandler,
    onChangeHandler: onChangeHandler,
    onUpdateActiveOption: onUpdateActiveOption,
    dataTest: "DesignSystem-DropdownOption--".concat(type),
    className: checkboxes ? CheckboxClassName : OptionClassName,
    id: id
  });
};

var PlaceholderParagraph = function PlaceholderParagraph(props) {
  var _classNames2;

  var length = props.length,
      size = props.size,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var classes = classnames(_defineProperty$1({
    'Placeholder--animation': true,
    PlaceholderParagraph: true
  }, "PlaceholderParagraph--".concat(size), size));
  var wrapperClass = classnames((_classNames2 = {
    'PlaceholderParagraph-wrapper': true
  }, _defineProperty$1(_classNames2, "PlaceholderParagraph-wrapper--length-".concat(length), length), _defineProperty$1(_classNames2, "PlaceholderParagraph-wrapper--size-".concat(size), size), _classNames2), className);
  return /*#__PURE__*/React.createElement("div", _extends$2({}, baseProps, {
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
  }, _defineProperty$1(_classNames, 'PlaceholderImage--round', round), _defineProperty$1(_classNames, "PlaceholderImage--".concat(size), size), _classNames), className);
  return /*#__PURE__*/React.createElement("span", _extends$2({}, baseProps, {
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
  var paragraphClasses = classnames(_defineProperty$1({
    'Placeholder-paragraph': true
  }, 'Placeholder-paragraph--withImage', withImage));
  var classes = classnames(_defineProperty$1({}, 'Placeholder', true), className);
  return /*#__PURE__*/React.createElement("div", _extends$2({
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
  var loadingType = props.loadingType,
      optionIndex = props.optionIndex;
  var placeholderSizes = ['medium', 'large'];
  var size = placeholderSizes[(optionIndex + 2) % 2];

  switch (loadingType) {
    case 'DEFAULT':
      return /*#__PURE__*/React.createElement(PlaceholderParagraph, {
        length: size,
        "data-test": "DesignSystem-Dropdown--PlaceholderParagraph"
      });

    case 'WITH_ICON':
      return /*#__PURE__*/React.createElement(Placeholder, {
        withImage: true,
        round: true,
        "data-test": "DesignSystem-Dropdown--Placeholder"
      }, /*#__PURE__*/React.createElement(PlaceholderParagraph, {
        length: "large"
      }));

    case 'WITH_META':
      return /*#__PURE__*/React.createElement(Placeholder, {
        withImage: false,
        "data-test": "DesignSystem-Dropdown--Placeholder"
      }, /*#__PURE__*/React.createElement(PlaceholderParagraph, {
        length: "large",
        "data-test": "DesignSystem-Dropdown--PlaceholderParagraph"
      }), /*#__PURE__*/React.createElement(PlaceholderParagraph, {
        length: "medium",
        size: "xxs",
        "data-test": "DesignSystem-Dropdown--PlaceholderParagraph"
      }));

    case 'WITH_CHECKBOX':
      return /*#__PURE__*/React.createElement(Placeholder, {
        withImage: true,
        "data-test": "DesignSystem-Dropdown--Placeholder"
      }, /*#__PURE__*/React.createElement(PlaceholderParagraph, {
        length: "large"
      }));

    case 'ICON_WITH_META':
      return /*#__PURE__*/React.createElement(Placeholder, {
        withImage: true,
        round: true,
        imageSize: 'medium',
        "data-test": "DesignSystem-Dropdown--Placeholder"
      }, /*#__PURE__*/React.createElement(PlaceholderParagraph, {
        length: "large",
        "data-test": "DesignSystem-Dropdown--PlaceholderParagraph"
      }), /*#__PURE__*/React.createElement(PlaceholderParagraph, {
        length: "medium",
        size: "xxs",
        "data-test": "DesignSystem-Dropdown--PlaceholderParagraph"
      }));
  }

  return null;
};

var errorTitle = {
  FAILED_TO_FETCH: 'Failed to fetch data',
  NO_RECORDS_FOUND: 'No results found',
  DEFAULT: 'No record available'
};
var errorDescription = {
  FAILED_TO_FETCH: "We couldn't load the data, try reloading.",
  NO_RECORDS_FOUND: 'Try modifying your search to find what you are looking for.',
  DEFAULT: 'We have nothing to show you at the moment.'
};
var ErrorTemplate = function ErrorTemplate(_ref) {
  var dropdownStyle = _ref.dropdownStyle,
      errorType = _ref.errorType,
      updateOptions = _ref.updateOptions;
  return /*#__PURE__*/React.createElement("div", {
    className: "Dropdown-wrapper px-7 d-flex",
    style: dropdownStyle,
    "data-test": "DesignSystem-Dropdown--wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "d-flex flex-column justify-content-center align-items-center w-100",
    "data-test": "DesignSystem-Dropdown--errorWrapper"
  }, /*#__PURE__*/React.createElement(Text, {
    className: "text-align-center mb-3",
    weight: "strong"
  }, errorTitle[errorType]), /*#__PURE__*/React.createElement(Text, {
    className: "text-align-center mb-6",
    weight: "medium",
    size: "small",
    appearance: "subtle"
  }, errorDescription[errorType]), errorType === 'FAILED_TO_FETCH' && /*#__PURE__*/React.createElement(Button, {
    size: "tiny",
    largeIcon: true,
    "aria-label": "reload",
    icon: "refresh",
    iconAlign: "left",
    onClick: function onClick() {
      return updateOptions();
    }
  }, "Reload")));
};

var alignmentMapping = {
  right: 'bottom-start',
  left: 'bottom-end'
};

var DropdownList = function DropdownList(props) {
  var _classNames3, _classNames4;

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
      className = props.className,
      _props$searchPlacehol = props.searchPlaceholder,
      searchPlaceholder = _props$searchPlacehol === void 0 ? 'Search..' : _props$searchPlacehol,
      scrollIndex = props.scrollIndex,
      updateOptions = props.updateOptions,
      noResultMessage = props.noResultMessage,
      errorType = props.errorType,
      loadingOptions = props.loadingOptions;
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

  var _React$useState5 = React.useState(),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      minHeight = _React$useState6[0],
      setMinHeight = _React$useState6[1];

  var getMinHeight = function getMinHeight() {
    var dropdownWrapper = document.querySelector('.Dropdown-wrapper');
    var minHeight = dropdownWrapper === null || dropdownWrapper === void 0 ? void 0 : dropdownWrapper.offsetHeight;
    minHeight && setMinHeight(minHeight);
  };

  var isDropdownListBlank = listOptions.length === 0 && !loadingOptions && selected.length <= 0;
  React.useEffect(function () {
    var timer;

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
      requestAnimationFrame(getMinHeight);
      setPopoverStyle(popperWrapperStyle); // scrolls to current time

      if (scrollIndex && tempSelected.length === 0) {
        timer = setTimeout(function () {
          scrollToOptionIndex(scrollIndex, listOptions);
        }, 100);
      }
    }

    return function () {
      clearTimeout(timer);
    };
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
      triggerLabel = props.triggerLabel,
      iconType = props.iconType;
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
    ref: dropdownTriggerRef,
    iconType: iconType
  }, triggerLabel);
  var dropdownStyle = {
    maxHeight: maxHeight,
    overflowY: 'auto',
    overflowX: 'hidden',
    minHeight: minHeight
  };
  var loaderStyle = {
    maxHeight: minHeight ? minHeight : maxHeight,
    overflowY: 'auto',
    overflowX: 'hidden',
    minHeight: minHeight
  };

  var defaultErrorTemplate = function defaultErrorTemplate() {
    return /*#__PURE__*/React.createElement(ErrorTemplate, {
      dropdownStyle: _objectSpread2(_objectSpread2({}, dropdownStyle), {}, {
        minHeight: maxHeight
      }),
      updateOptions: updateOptions,
      errorType: errorType
    });
  };

  var getDropdownSectionClass = function getDropdownSectionClass(showClearButton) {
    var _classNames;

    return classnames((_classNames = {}, _defineProperty$1(_classNames, 'Dropdown-section', true), _defineProperty$1(_classNames, 'Dropdown-section--withClear', showClearButton), _classNames));
  };

  var dropdownClass = classnames(_defineProperty$1({}, 'Dropdown', true), className);
  var dropdownWrapperClass = classnames((_classNames3 = {}, _defineProperty$1(_classNames3, 'Dropdown-wrapper', true), _defineProperty$1(_classNames3, 'Dropdown-wrapper--wrap', !truncateOption), _classNames3));
  var SelectAllClass = classnames((_classNames4 = {}, _defineProperty$1(_classNames4, 'Option-checkbox--active', cursor === 0), _defineProperty$1(_classNames4, 'Option-checkboxWrapper', true), _defineProperty$1(_classNames4, 'Option-checkbox', true), _defineProperty$1(_classNames4, 'OptionWrapper', true), _classNames4));

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
      className: "Dropdown-footer"
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
      size: "tiny",
      type: "button"
    }, "Clear"));
  };

  var renderApplyButton = function renderApplyButton() {
    var disable = _isEqual(previousSelected, tempSelected) || props.loadingOptions;
    return /*#__PURE__*/React.createElement("div", {
      className: "Dropdown-buttonWrapper"
    }, /*#__PURE__*/React.createElement(Button, {
      ref: dropdownCancelButtonRef,
      className: "mr-4",
      appearance: 'basic',
      onClick: onCancelOptions,
      disabled: props.loadingOptions,
      size: 'tiny',
      tabIndex: -1,
      "data-test": "DesignSystem-Dropdown-CancelButton",
      type: "button"
    }, cancelButtonLabel), /*#__PURE__*/React.createElement(Button, {
      ref: dropdownApplyButtonRef,
      appearance: 'primary',
      disabled: disable,
      size: 'tiny',
      onClick: onApplyOptions,
      "data-test": "DesignSystem-Dropdown-ApplyButton",
      type: "button"
    }, applyButtonLabel));
  };

  var renderSearch = function renderSearch() {
    return /*#__PURE__*/React.createElement("div", {
      className: "Dropdown-inputWrapper"
    }, /*#__PURE__*/React.createElement(Input, {
      name: "Dropdown-search",
      icon: 'search',
      value: searchTerm,
      placeholder: searchPlaceholder // TODO(a11y): research more on this.
      // eslint-disable-next-line jsx-a11y/no-autofocus
      ,
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
        loadingType: type,
        optionIndex: ind
      }));
    });
  };

  var renderSelectAll = function renderSelectAll() {
    var _props$selectAllLabel = props.selectAllLabel,
        selectAllLabel = _props$selectAllLabel === void 0 ? 'Select All' : _props$selectAllLabel,
        selectAll = props.selectAll,
        onSelectAll = props.onSelectAll;
    var label = selectAllLabel.trim() ? selectAllLabel.trim() : 'Select All';
    var id = "Checkbox-option-".concat(label.toLowerCase().replace(/\s+/g, ''), "-").concat(new Date().getTime());
    return /*#__PURE__*/React.createElement("div", {
      className: SelectAllClass,
      onMouseEnter: function onMouseEnter() {
        return updateActiveOption(0, true);
      }
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: id,
      className: "Checkbox-label"
    }, /*#__PURE__*/React.createElement(Checkbox, {
      label: label,
      onChange: onSelectAll,
      checked: selectAll.checked,
      indeterminate: selectAll.indeterminate,
      tabIndex: -1,
      className: "OptionCheckbox",
      id: id
    })));
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
    var id = "Checkbox-option-".concat(index, "-").concat(item.value, "-").concat(new Date().getTime());
    return /*#__PURE__*/React.createElement("label", {
      htmlFor: id
    }, /*#__PURE__*/React.createElement(Option, {
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
      optionType: props.optionType,
      id: id
    }));
  };

  var renderDropdownSection = function renderDropdownSection() {
    var _listOptions$0$group;

    var _props$selectedSectio = props.selectedSectionLabel,
        selectedSectionLabel = _props$selectedSectio === void 0 ? 'Selected Items' : _props$selectedSectio,
        _props$allItemsSectio = props.allItemsSectionLabel,
        allItemsSectionLabel = _props$allItemsSectio === void 0 ? 'All Items' : _props$allItemsSectio,
        _props$loadersCount = props.loadersCount,
        loadersCount = _props$loadersCount === void 0 ? 10 : _props$loadersCount,
        _props$errorTemplate = props.errorTemplate,
        errorTemplate = _props$errorTemplate === void 0 ? defaultErrorTemplate : _props$errorTemplate;

    var selectAllPresent = _isSelectAllPresent(searchTerm, remainingOptions, withSelectAll, withCheckbox);

    var groupedListOptions = groupListOptions(listOptions);

    if (loadersCount && loadingOptions) {
      return /*#__PURE__*/React.createElement("div", {
        className: 'Dropdown-loading'
      }, /*#__PURE__*/React.createElement("div", {
        className: "Dropdown-wrapper",
        style: loaderStyle
      }, renderLoading(loadersCount)));
    }

    if (isDropdownListBlank) {
      if (noResultMessage) {
        return /*#__PURE__*/React.createElement("div", {
          className: "Dropdown-wrapper w-100",
          style: dropdownStyle,
          "data-test": "DesignSystem-Dropdown--errorWrapper"
        }, /*#__PURE__*/React.createElement("div", {
          className: 'Option'
        }, /*#__PURE__*/React.createElement("div", {
          className: 'Option-subinfo'
        }, noResultMessage)));
      } else {
        return errorTemplate && errorTemplate({
          errorType: errorType
        });
      }
    }

    return /*#__PURE__*/React.createElement("div", {
      className: dropdownWrapperClass,
      style: dropdownStyle,
      ref: dropdownRef
    }, selectAllPresent && renderSelectAll(), selected.length > 0 && renderGroups(selectedSectionLabel, true), selected.map(function (option, index) {
      return renderOptions(option, index);
    }), selected.length > 0 && listOptions.length - selected.length > 0 && !((_listOptions$0$group = listOptions[0].group) !== null && _listOptions$0$group !== void 0 && _listOptions$0$group.trim()) && // allItemsSectionLabel is displayed only when there are no groups
    renderGroups(allItemsSectionLabel), groupedListOptions.map(function (option, index) {
      var prevGroup = index > 0 ? groupedListOptions[index - 1].group : selected.length ? selectedSectionLabel : undefined;
      var currentGroup = option.group;
      var isGroupDifferent = prevGroup !== currentGroup;
      var updatedIndex = index + selected.length;
      return /*#__PURE__*/React.createElement("div", {
        className: "Option-checkboxWrapper",
        key: index
      }, isGroupDifferent && currentGroup && renderGroups(currentGroup), renderOptions(option, updatedIndex));
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
        {
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
        }

      case 'Tab':
        {
          var _dropdownApplyButtonR;

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
    }
  };

  var enableSearch = withSearch || props.async;
  return (
    /*#__PURE__*/
    //TODO(a11y)
    //eslint-disable-next-line
    React.createElement("div", _extends$2({}, baseProps, {
      className: dropdownClass,
      ref: triggerRef,
      onKeyDown: onkeydown
    }), /*#__PURE__*/React.createElement(Popover, _extends$2({
      onToggle: onToggleDropdown,
      trigger: trigger,
      triggerClass: !menu ? 'w-100' : '',
      open: dropdownOpen,
      customStyle: popoverStyle,
      position: alignmentMapping[align]
    }, popoverOptions, {
      "data-test": "DesignSystem-Dropdown--Popover"
    }), enableSearch && renderSearch(), renderDropdownSection(), showApplyButton && withCheckbox && renderApplyButton()))
  );
};

DropdownList.displayName = 'DropdownList';

var _excluded$Q = ["triggerOptions", "selected", "tabIndex"];
var inputRef = /*#__PURE__*/React.createRef();

/**
 *
 * Dropdown component has been deprecated, please use following components instead:
 *
 * - [Select](https://mds.innovaccer.com/?path=/docs/components-select-all--all)
 * - [Menu](https://mds.innovaccer.com/?path=/docs/components-menu-all--all)
 * - [Combobox](https://mds.innovaccer.com/?path=/docs/components-combobox-all--all)
 *
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
 * 4. Default errorTemplate:
 *
 *  <pre class="DocPage-codeBlock mx-6 mb-7">
 * (props) => {
 *      const { errorType = 'DEFAULT' } = props;
 *      const errorMessages = {
 *        'FAILED\_TO\_FETCH': 'Failed to fetch data',
 *        'NO\_RECORDS\_FOUND': 'No results found',
 *        'DEFAULT': 'No record available'
 *      }
 *      return(
 *        \<Heading>{errorMessages[errorType]}\</Heading>
 *      );
 * }
 * </pre>
 */
var Dropdown = /*#__PURE__*/function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  var _super = _createSuper(Dropdown);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _super.call(this, props);

    _defineProperty$1(_assertThisInitialized$1(_this), "staticLimit", void 0);

    _defineProperty$1(_assertThisInitialized$1(_this), "getDisabledOptions", function () {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return options.filter(function (option) {
        return option.disabled;
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "fetchOptionsFunction", function (searchTerm) {
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

    _defineProperty$1(_assertThisInitialized$1(_this), "getUnSelectedOptions", function (options, init) {
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

    _defineProperty$1(_assertThisInitialized$1(_this), "getSelectedOptions", function (options, init) {
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

    _defineProperty$1(_assertThisInitialized$1(_this), "updateOptions", function (init, async) {
      var _this$state = _this.state,
          searchTerm = _this$state.searchTerm,
          selectAll = _this$state.selectAll,
          tempSelected = _this$state.tempSelected,
          previousSelected = _this$state.previousSelected,
          errorType = _this$state.errorType;
      var updatedAsync = async === undefined ? _this.state.async : async;
      var _this$props = _this.props,
          fetchOptions = _this$props.fetchOptions,
          withCheckbox = _this$props.withCheckbox,
          withSearch = _this$props.withSearch;
      var fetchFunction = fetchOptions ? fetchOptions : _this.fetchOptionsFunction;
      fetchFunction(searchTerm).then(function (res) {
        var options = res.options,
            count = res.count;

        if (res.scrollToIndex) {
          setTimeout(function () {
            scrollToOptionIndex(res.scrollToIndex, options);
          }, 0);
        }

        if (!res.searchTerm || res.searchTerm && res.searchTerm === _this.state.searchTerm) {
          var _inputRef$current;

          updatedAsync = searchTerm === '' ? count > _this.staticLimit : updatedAsync;
          var unSelectedGroup = _showSelectedItems(updatedAsync, searchTerm, withCheckbox) ? _this.getUnSelectedOptions(options, init) : options;
          var selectedGroup = searchTerm === '' ? _this.getSelectedOptions(options, init) : [];
          var optionsLength = searchTerm === '' ? count : _this.state.optionsLength;

          var disabledOptions = _this.getDisabledOptions(unSelectedGroup.slice(0, _this.staticLimit));

          var errorResult = errorType;

          if (optionsLength === 0 && searchTerm === '') {
            errorResult = 'DEFAULT';
          } else if (searchTerm !== '') {
            errorResult = 'NO_RECORDS_FOUND';
          } else {
            errorResult = 'FAILED_TO_FETCH';
          }

          _this.setState(_objectSpread2(_objectSpread2({}, _this.state), {}, {
            errorType: fetchOptions ? errorResult : errorType,
            scrollIndex: res.scrollToIndex || 0,
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
      })["catch"](function () {
        _this.setState({
          errorType: fetchOptions ? 'FAILED_TO_FETCH' : errorType,
          loading: false,
          options: []
        });
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "updateSearchTerm", function (search) {
      _this.setState(_objectSpread2(_objectSpread2({}, _this.state), {}, {
        loading: true,
        searchInit: true,
        searchTerm: search,
        errorType: 'NO_RECORDS_FOUND'
      }));
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "updateOnPopperToggle", function () {
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

        _this.debounceOnClose(values, name);
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "debounceOnClose", debounce$1(300, function (values, name) {
      var onClose = _this.props.onClose;

      if (onClose) {
        onClose(values, name);
      }
    }));

    _defineProperty$1(_assertThisInitialized$1(_this), "updateTriggerLabel", function () {
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

    _defineProperty$1(_assertThisInitialized$1(_this), "updateSelectedOptions", function (selectedArray, isSingleSelect, isControlled) {
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

    _defineProperty$1(_assertThisInitialized$1(_this), "isValidOption", function (option) {
      var _this$props5 = _this.props,
          closeOnSelect = _this$props5.closeOnSelect,
          withCheckbox = _this$props5.withCheckbox,
          open = _this$props5.open,
          onPopperToggle = _this$props5.onPopperToggle;
      var temp = _this.state.tempSelected;

      if (temp.length > 0 && !withCheckbox && temp[0].value === option['value']) {
        _this.setState(_objectSpread2(_objectSpread2({}, _this.state), {}, {
          open: _isOpenControlled(open) || !closeOnSelect
        }));

        if (!withCheckbox && closeOnSelect && onPopperToggle && _isOpenControlled(open)) {
          onPopperToggle(false, 'optionClick');
        }

        return false;
      }

      return true;
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onOptionSelect", function (option) {
      var _this$props6 = _this.props,
          onUpdate = _this$props6.onUpdate,
          selected = _this$props6.selected,
          menu = _this$props6.menu;

      if (_isControlled(selected)) {
        if (onUpdate && (_this.isValidOption(option) || menu)) {
          onUpdate('select-option', option);
        }

        return;
      }

      if (_this.isValidOption(option) || menu) {
        _this.updateSelectedOptions([option], true);
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onSelect", function (option, checked) {
      var _this$props7 = _this.props,
          onUpdate = _this$props7.onUpdate,
          selected = _this$props7.selected,
          showApplyButton = _this$props7.showApplyButton;

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

    _defineProperty$1(_assertThisInitialized$1(_this), "onSelectAll", function (event) {
      var _this$props8 = _this.props,
          onUpdate = _this$props8.onUpdate,
          selected = _this$props8.selected,
          showApplyButton = _this$props8.showApplyButton;
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

    _defineProperty$1(_assertThisInitialized$1(_this), "debounceSearch", debounce$1(_this.props.searchDebounceDuration, function () {
      _this.setState({
        searchInit: false
      }, function () {
        _this.updateOptions(false);
      });
    }));

    _defineProperty$1(_assertThisInitialized$1(_this), "reload", function () {
      _this.setState({
        loading: true
      }, function () {
        _this.updateOptions(false);
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "debounceClear", debounce$1(250, function () {
      return _this.updateOptions(false);
    }));

    _defineProperty$1(_assertThisInitialized$1(_this), "onClearOptions", function () {
      var _this$props9 = _this.props,
          selected = _this$props9.selected,
          name = _this$props9.name,
          onUpdate = _this$props9.onUpdate,
          showApplyButton = _this$props9.showApplyButton,
          onChange = _this$props9.onChange;
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

    _defineProperty$1(_assertThisInitialized$1(_this), "onTogglePopper", function (type) {
      var onPopperToggle = _this.props.onPopperToggle;

      if (onPopperToggle && _isOpenControlled(_this.props.open)) {
        onPopperToggle(false, type);
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onCancelOptions", function () {
      var _this$state5 = _this.state,
          previousSelected = _this$state5.previousSelected,
          tempSelected = _this$state5.tempSelected,
          optionsLength = _this$state5.optionsLength;
      var _this$props10 = _this.props,
          selected = _this$props10.selected,
          onUpdate = _this$props10.onUpdate,
          onClose = _this$props10.onClose,
          name = _this$props10.name;
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

    _defineProperty$1(_assertThisInitialized$1(_this), "onApplyOptions", function () {
      var _this$state6 = _this.state,
          tempSelected = _this$state6.tempSelected,
          previousSelected = _this$state6.previousSelected;
      var _this$props11 = _this.props,
          onChange = _this$props11.onChange,
          selected = _this$props11.selected,
          onUpdate = _this$props11.onUpdate,
          onClose = _this$props11.onClose,
          name = _this$props11.name;
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

    _defineProperty$1(_assertThisInitialized$1(_this), "onToggleDropdown", function (updatedOpen, type) {
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
      selectAll: getSelectAll$1(_selectedGroup, _optionsLength, _disabledOptions.length),
      errorType: 'DEFAULT'
    };
    return _this;
  }

  _createClass(Dropdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var async = this.state.async;
      if (async) this.updateOptions(true);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (!this.state.async) {
        var _this$props12 = this.props,
            loading = _this$props12.loading,
            fetchOptions = _this$props12.fetchOptions,
            _this$props12$options = _this$props12.options,
            _options2 = _this$props12$options === void 0 ? [] : _this$props12$options,
            withSearch = _this$props12.withSearch;

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
          previousSelected = _this$state7.previousSelected,
          scrollIndex = _this$state7.scrollIndex,
          errorType = _this$state7.errorType;
      var _this$props13 = this.props,
          _this$props13$withSel = _this$props13.withSelectAll,
          withSelectAll = _this$props13$withSel === void 0 ? true : _this$props13$withSel,
          withCheckbox = _this$props13.withCheckbox;

      var _this$props14 = this.props,
          _this$props14$trigger = _this$props14.triggerOptions,
          triggerOptions = _this$props14$trigger === void 0 ? {} : _this$props14$trigger;
          _this$props14.selected;
          var tabIndex = _this$props14.tabIndex,
          rest = _objectWithoutProperties(_this$props14, _excluded$Q);

      var remainingOptionsLen = searchedOptionsLength - options.length;
      var firstEnabledOption = tabIndex ? tabIndex : _isSelectAllPresent(searchTerm, remainingOptionsLen, withSelectAll, withCheckbox) ? 0 : options.findIndex(function (option) {
        return !option.disabled;
      });
      return /*#__PURE__*/React.createElement(DropdownList, _extends$2({
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
        customTrigger: triggerOptions.customTrigger,
        scrollIndex: scrollIndex,
        updateOptions: this.reload,
        errorType: errorType
      }, rest));
    }
  }]);

  return Dropdown;
}(React.Component);

_defineProperty$1(Dropdown, "defaultProps", {
  triggerOptions: {},
  options: [],
  closeOnSelect: true,
  staticLimit: 50,
  searchDebounceDuration: 300
});

var _excluded$P = ["appearance", "size", "children", "className", "color"];
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
      color = props.color,
      rest = _objectWithoutProperties(props, _excluded$P);

  var classes = classnames((_classNames = {
    Heading: true
  }, _defineProperty$1(_classNames, "Heading--".concat(size), size), _defineProperty$1(_classNames, "Heading--".concat(appearance), !color && appearance), _defineProperty$1(_classNames, "color-".concat(color), color), _classNames), className);
  return /*#__PURE__*/React.createElement(Link$1, _extends$2({
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

var _excluded$O = ["className", "iconType"];
var ActionButton$1 = function ActionButton(props) {
  var _classNames;

  var className = props.className,
      iconType = props.iconType,
      rest = _objectWithoutProperties(props, _excluded$O);

  var iconClass = classnames((_classNames = {}, _defineProperty$1(_classNames, 'ActionButton', true), _defineProperty$1(_classNames, "".concat(className), className), _classNames));
  return /*#__PURE__*/React.createElement(Icon, _extends$2({
    className: iconClass,
    type: iconType,
    "data-test": "DesignSystem-Input-ActionButton"
  }, rest));
};
ActionButton$1.displayName = 'ActionButton';
ActionButton$1.defaultProps = {
  size: 16,
  type: 'rounded'
};

var _excluded$N = ["size", "type", "minWidth", "defaultValue", "name", "placeholder", "value", "icon", "inlineLabel", "required", "error", "info", "onChange", "onClick", "onClear", "onBlur", "onFocus", "onPaste", "actionIcon", "className", "autoFocus", "disabled", "readOnly", "iconType"];
var sizeMapping$2 = {
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
      onPaste = props.onPaste,
      actionIcon = props.actionIcon,
      className = props.className,
      autoFocus = props.autoFocus,
      disabled = props.disabled,
      readOnly = props.readOnly,
      iconType = props.iconType,
      rest = _objectWithoutProperties(props, _excluded$N);

  var ref = React.useRef(null);

  var _React$useState = React.useState(!value),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isInputBlank = _React$useState2[0],
      setIsInputBlank = _React$useState2[1];

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
  var classes = classnames((_classNames = {}, _defineProperty$1(_classNames, 'Input', true), _defineProperty$1(_classNames, "Input--".concat(size), size), _defineProperty$1(_classNames, 'Input--disabled', disabled || readOnly), _defineProperty$1(_classNames, 'Input--error', error), _classNames), className);
  var inputClass = classnames((_classNames2 = {}, _defineProperty$1(_classNames2, 'Input-input', true), _defineProperty$1(_classNames2, "Input-input--".concat(size), size), _classNames2));
  var leftIconClass = classnames((_classNames3 = {}, _defineProperty$1(_classNames3, 'Input-icon', true), _defineProperty$1(_classNames3, 'Input-icon--left', true), _defineProperty$1(_classNames3, 'Input-icon--inputBlank', isInputBlank), _defineProperty$1(_classNames3, 'Input-icon--error', error), _classNames3));
  var rightIconClass = classnames((_classNames4 = {}, _defineProperty$1(_classNames4, 'Input-icon', true), _defineProperty$1(_classNames4, 'Input-iconWrapper--right', true), _classNames4));
  var trigger = /*#__PURE__*/React.createElement("div", {
    className: rightIconClass // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    ,
    tabIndex: 0
  }, /*#__PURE__*/React.createElement(Icon, {
    name: 'info',
    size: sizeMapping$2[size],
    className: "Input-icon--right"
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
    },
    role: "presentation",
    onBlur: function onBlur() {
      var _ref$current3;

      return setIsInputBlank(!((_ref$current3 = ref.current) !== null && _ref$current3 !== void 0 && _ref$current3.value));
    }
  }, inlineLabel && /*#__PURE__*/React.createElement("div", {
    className: "Input-inlineLabel"
  }, /*#__PURE__*/React.createElement(Text, {
    appearance: "subtle"
  }, inlineLabel)), size !== 'tiny' && icon && /*#__PURE__*/React.createElement("div", {
    className: leftIconClass
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: sizeMapping$2[size],
    type: iconType
  })), /*#__PURE__*/React.createElement("input", _extends$2({
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
    onFocus: onFocus,
    onPaste: onPaste
    /**
     *for readOnly: true, tab focus from input element is removed. Hence, its tabIndex is set to -1.
     *For rest, "undefined" lets user agent(browser) use the default tabIndex.
     */
    ,
    tabIndex: readOnly ? -1 : undefined
  })), disabled ? '' : info ? /*#__PURE__*/React.createElement(Tooltip, {
    position: "bottom",
    tooltip: info
  }, trigger) : actionIcon && (value || defaultValue) ? actionIcon : onClear && (value || defaultValue) && /*#__PURE__*/React.createElement("div", {
    className: rightIconClass
  }, /*#__PURE__*/React.createElement(Icon, {
    "data-test": "DesignSystem-Input--closeIcon",
    onClick: function onClick(e) {
      var _ref$current4;

      (_ref$current4 = ref.current) === null || _ref$current4 === void 0 ? void 0 : _ref$current4.focus({
        preventScroll: true
      });
      onClear(e);
    },
    name: 'close',
    size: sizeMapping$2[size],
    className: "Input-icon--right"
  })));
});
Input.displayName = 'Input';
Object.assign(Input, {
  ActionButton: ActionButton$1
});

var _excluded$M = ["size", "defaultValue", "name", "placeholder", "icon", "prefix", "suffix", "error", "min", "max", "onChange", "onClick", "onBlur", "onFocus", "className", "autoFocus", "disabled", "readOnly", "value", "showActionButton", "onKeyDown", "iconType"];
var sizeMapping$1 = {
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
  var _classNames, _classNames2, _classNames3, _classNames4, _classNames5, _classNames6;

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
      _props$showActionButt = props.showActionButton,
      showActionButton = _props$showActionButt === void 0 ? true : _props$showActionButt,
      onKeyDown = props.onKeyDown,
      iconType = props.iconType,
      rest = _objectWithoutProperties(props, _excluded$M);

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
  var classes = classnames((_classNames = {}, _defineProperty$1(_classNames, 'MetricInput', true), _defineProperty$1(_classNames, "MetricInput--".concat(size), size), _defineProperty$1(_classNames, 'MetricInput--disabled', disabled || readOnly), _defineProperty$1(_classNames, 'MetricInput--error', error), _classNames), className);
  var inputClass = classnames((_classNames2 = {}, _defineProperty$1(_classNames2, 'MetricInput-input', true), _defineProperty$1(_classNames2, "MetricInput-input--".concat(size), size), _defineProperty$1(_classNames2, "mr-4", !suffix && !showActionButton && size === 'regular'), _defineProperty$1(_classNames2, "mr-6", !suffix && !showActionButton && size === 'large'), _classNames2));
  var iconClass = classnames((_classNames3 = {}, _defineProperty$1(_classNames3, 'MetricInput-icon', true), _defineProperty$1(_classNames3, "MetricInput-icon--".concat(size), size), _classNames3));
  var prefixClass = classnames((_classNames4 = {}, _defineProperty$1(_classNames4, 'mr-4', size === 'regular'), _defineProperty$1(_classNames4, 'mr-5', size !== 'regular'), _classNames4));
  var suffixClass = classnames((_classNames5 = {}, _defineProperty$1(_classNames5, 'ml-4 mr-3', size === 'regular'), _defineProperty$1(_classNames5, 'mx-5', size !== 'regular'), _classNames5));
  var actionButton = classnames((_classNames6 = {}, _defineProperty$1(_classNames6, 'p-0', true), _defineProperty$1(_classNames6, "MetricInput-arrowIcon--".concat(size), size), _defineProperty$1(_classNames6, 'ml-3', true), _classNames6));

  var onChangeHandler = function onChangeHandler(e) {
    if (isUncontrolled) {
      setValue(e.target.value);
    }

    if (onChange) onChange(e);
  };

  var onArrowClick = function onArrowClick(e, direction) {
    var _newValue$toString$sp;

    var newValue = Number(value || 0);
    var decimalDigits = ((_newValue$toString$sp = newValue.toString().split('.')[1]) === null || _newValue$toString$sp === void 0 ? void 0 : _newValue$toString$sp.length) || 0;
    var isValid = direction === 'down' ? min !== undefined && newValue > min || min === undefined : max !== undefined && newValue < max || max === undefined;
    if (disabled || readOnly || !isValid) return;
    newValue = direction === 'down' ? newValue - 1 : newValue + 1;
    newValue = capMax(max, capMin(min, +newValue.toFixed(decimalDigits)));
    if (isUncontrolled) setValue(newValue);

    if (onChange) {
      var syntheticEvent = Object.create(e, {
        target: {
          value: {
            value: newValue
          }
        }
      });
      onChange(syntheticEvent);
    }
  };

  var onKeyDownHandler = function onKeyDownHandler(e) {
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

  var handleKeyDown = function handleKeyDown(e) {
    if (showActionButton) {
      onKeyDownHandler(e);
    } else e.preventDefault();
  };

  var actionButtonSize = size === 'large' ? 'regular' : 'tiny';
  return /*#__PURE__*/React.createElement("div", {
    "data-test": "DesignSystem-MetricInputWrapper",
    className: classes,
    onKeyDown: onKeyDown,
    role: "presentation"
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    "data-test": "DesignSystem-MetricInput--icon",
    name: icon,
    type: iconType,
    size: sizeMapping$1[size],
    appearance: !value ? 'disabled' : 'subtle',
    className: iconClass
  }), prefix && /*#__PURE__*/React.createElement(Text, {
    "data-test": "DesignSystem-MetricInput--prefix",
    className: prefixClass,
    size: size,
    appearance: "subtle"
  }, prefix), /*#__PURE__*/React.createElement("input", _extends$2({
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
    onKeyDown: handleKeyDown
  })), suffix && /*#__PURE__*/React.createElement(Text, {
    "data-test": "DesignSystem-MetricInput--suffix",
    className: suffixClass,
    size: size,
    appearance: "subtle"
  }, suffix), showActionButton && /*#__PURE__*/React.createElement("div", {
    className: "MetricInput-arrowIcons"
  }, /*#__PURE__*/React.createElement(Button, {
    type: "button",
    icon: "keyboard_arrow_up",
    size: actionButtonSize,
    className: "".concat(actionButton, " mb-2"),
    onClick: function onClick(e) {
      return onArrowClick(e, 'up');
    },
    "data-test": "DesignSystem-MetricInput--upIcon"
  }), /*#__PURE__*/React.createElement(Button, {
    type: "button",
    icon: "keyboard_arrow_down",
    size: actionButtonSize,
    className: actionButton,
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

var _excluded$L = ["mask", "value", "placeholderChar", "validators", "clearOnEmptyBlur", "defaultValue", "mask", "error", "caption", "required", "onChange", "onPaste", "onBlur", "onFocus", "onClear", "className", "id", "helpText"];

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
      onPaste = props.onPaste,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      onClear = props.onClear,
      className = props.className,
      id = props.id,
      helpText = props.helpText,
      rest = _objectWithoutProperties(props, _excluded$L);

  var isEditable = React.useCallback(function (pos) {
    return _typeof(mask[pos]) === 'object';
  }, [mask]);
  var getNewCursorPosition = React.useCallback(function (type, position) {
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
  }, [mask, isEditable]);
  var getDefaultSelection = React.useCallback(function () {
    var pos = getNewCursorPosition('right', 0);
    return {
      start: pos,
      end: pos
    };
  }, [getNewCursorPosition]);
  var getPlaceholderValue = React.useCallback(function () {
    var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : mask.length - 1;
    return getDefaultValue(mask, placeholderChar).slice(start, end + 1);
  }, [mask, placeholderChar]);
  var defaultPlaceholderValue = React.useMemo(function () {
    return getPlaceholderValue();
  }, [getPlaceholderValue]);
  var defaultSelection = React.useMemo(function () {
    return getDefaultSelection();
  }, [getDefaultSelection]);
  var ref = React.useRef(null);
  var deferId = React.useRef();
  var selectionPos = React.useRef(defaultSelection);
  var newSelectionPos = React.useRef(0);

  var _React$useState = React.useState(defaultValue || valueProp || ''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  React.useImperativeHandle(forwardRef, function () {
    return ref.current;
  });
  React.useEffect(function () {
    setValue(valueProp || '');
  }, [valueProp]);
  React.useEffect(function () {
    setCursorPosition(newSelectionPos.current);
  }, [value]);
  var getSelectionLength = React.useCallback(function (val) {
    return Math.abs(val.end - val.start);
  }, []);
  var getCurrSelection = React.useCallback(function () {
    var _ref$current, _ref$current2;

    return {
      start: ((_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.selectionStart) || 0,
      end: ((_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : _ref$current2.selectionEnd) || 0
    };
  }, [ref.current]);
  var setSelectionRange_compatible_types = ['text', 'password', 'tel', 'url'];
  var setSelectionPos = React.useCallback(function (pos) {
    if (ref.current) {
      var el = ref.current;
      var start = Math.min(pos.start, pos.end);
      var end = Math.max(pos.start, pos.end);

      if (setSelectionRange_compatible_types.includes(el.type)) {
        el.setSelectionRange(start, end);
      } else {
        var el_type = el.type;
        el.type = 'text';
        el.setSelectionRange(start, end);
        el.type = el_type;
      }
    }
  }, [ref.current]);
  var setCursorPosition = React.useCallback(function (val) {
    return setSelectionPos({
      start: val,
      end: val
    });
  }, [setSelectionPos]);
  var insertAtIndex = React.useCallback(function (currValue, index) {
    var iterator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var newValue = '';
    var newIndex = index + 1;
    var newIterator = iterator;

    if (index >= mask.length) {
      return newValue;
    }

    if (iterator >= currValue.length) {
      selectionPos.current = {
        start: index,
        end: index
      };
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
  }, [mask, placeholderChar, isEditable]);
  var updateSelection = React.useCallback(function () {
    selectionPos.current = getCurrSelection();
    deferId.current = window.requestAnimationFrame(updateSelection);
  }, [selectionPos.current, getCurrSelection]);

  var matchSeparatorValue = function matchSeparatorValue(currValue) {
    var separator = props.placeholder || 'dd/mm/yyyy';

    if (separator.substring(0, 4) === 'yyyy') {
      return currValue && currValue[4] === separator[4] && currValue[7] === separator[7];
    }

    return currValue && currValue[2] === separator[2] && currValue[5] === separator[5];
  };

  var isSameFormat = function isSameFormat(currValue, inputLength) {
    var value = currValue.substring(0, inputLength);

    if (inputLength === 23) {
      var date = value.split(' - ');
      var startVal = date[0];
      var endVal = date[1];
      return matchSeparatorValue(startVal) && matchSeparatorValue(endVal);
    }

    return matchSeparatorValue(value);
  };

  var onPasteHandler = function onPasteHandler(e) {
    var _e$clipboardData;

    e.preventDefault();
    var pastedValue = (_e$clipboardData = e.clipboardData) === null || _e$clipboardData === void 0 ? void 0 : _e$clipboardData.getData('Text');
    var sameFormat = isSameFormat(pastedValue, pastedValue.length);
    var isValidDate = isValid(validators, pastedValue);

    if (sameFormat && onPaste && isValidDate) {
      onPaste(e, pastedValue);
      setValue(pastedValue);
    }
  };

  var onChangeHandler = React.useCallback(function (e) {
    var _e$currentTarget;

    var inputVal = (_e$currentTarget = e.currentTarget) === null || _e$currentTarget === void 0 ? void 0 : _e$currentTarget.value;
    var currSelection = getCurrSelection();
    var start = Math.min(selectionPos.current.start, currSelection.start);
    var end = currSelection.end;
    var cursorPosition = start;
    var enteredVal = '';
    var updatedVal = '';
    var removedLength = 0;
    var insertedStringLength = 0;
    enteredVal = inputVal.slice(start, end);
    updatedVal = insertAtIndex(enteredVal, start);
    var oldValue = value;

    if (oldValue.length === 0 && (id === 'parent-TimePicker' || id === 'parent-DatePicker')) {
      oldValue = defaultPlaceholderValue;
    }

    insertedStringLength = updatedVal.length;

    if (currSelection.end > selectionPos.current.end) {
      removedLength = insertedStringLength ? getSelectionLength(selectionPos.current) : 0;
    } else if (inputVal.length < oldValue.length) {
      removedLength = oldValue.length - inputVal.length;
    }

    var maskedVal = oldValue.split('');

    for (var i = 0; i < insertedStringLength; i++) {
      maskedVal[start + i] = updatedVal[i];
    }

    for (var _i2 = 0; _i2 < removedLength; _i2++) {
      var index$1 = start + insertedStringLength + _i2;
      maskedVal[index$1] = getPlaceholderValue(index$1, index$1);
    }

    var enteredValue = maskedVal.slice(0, mask.length).join('');

    if (updatedVal !== placeholderChar && updatedVal !== '' && !updatedVal.includes(placeholderChar) && isValid(validators, enteredValue)) {
      cursorPosition += insertedStringLength;
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
    newSelectionPos.current = cursorPosition;

    if (newValue !== oldValue && isValid(validators, newValue)) {
      if (defaultPlaceholderValue === '__:__ _M') {
        setValue(newValue.toUpperCase());
        onChange === null || onChange === void 0 ? void 0 : onChange(e, newValue.toUpperCase());
      } else {
        setValue(newValue);
        onChange === null || onChange === void 0 ? void 0 : onChange(e, newValue);
      }
    } else {
      window.requestAnimationFrame(function () {
        return setCursorPosition(newSelectionPos.current);
      });
    }
  }, [selectionPos.current, validators, getCurrSelection, insertAtIndex, getSelectionLength, getPlaceholderValue, getNewCursorPosition, isEditable, setCursorPosition, setValue, onChange]);
  var onBlurHandler = React.useCallback(function (e) {
    var inputVal = e.currentTarget.value;

    if (clearOnEmptyBlur) {
      if (inputVal === defaultPlaceholderValue) {
        setValue('');
        inputVal = '';
      }
    }

    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e, inputVal);
    if (deferId.current) window.cancelAnimationFrame(deferId.current);
  }, [clearOnEmptyBlur, deferId.current, getPlaceholderValue, setValue, onBlur]);
  var onClearHandler = React.useCallback(function (e) {
    newSelectionPos.current = defaultSelection.start;
    setValue(defaultPlaceholderValue);
    onClear === null || onClear === void 0 ? void 0 : onClear(e);
  }, [setValue, getPlaceholderValue, setCursorPosition, getDefaultSelection, onClear]);
  var onFocusHandler = React.useCallback(function (e) {
    deferId.current = window.requestAnimationFrame(updateSelection);

    if (!value) {
      newSelectionPos.current = defaultSelection.start;
      setValue(getPlaceholderValue());
    }

    onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
  }, [deferId.current, value, updateSelection, setValue, setSelectionPos, onFocus]);
  var classes = React.useMemo(function () {
    return classnames({
      'd-flex flex-column flex-grow-1': true
    }, className);
  }, [className]);
  var isValueEqualPlaceholder = value === defaultPlaceholderValue;
  return /*#__PURE__*/React.createElement("div", {
    className: classes,
    "data-test": "DesignSystem-InputMask--Wrapper"
  }, /*#__PURE__*/React.createElement(Input, _extends$2({}, rest, {
    value: value,
    error: error,
    required: required,
    onFocus: onFocusHandler,
    onChange: onChangeHandler
    /**
     * input right cross icon should be visible only
     * when user provides value
     */
    ,
    onClear: !isValueEqualPlaceholder ? onClearHandler : undefined,
    onBlur: onBlurHandler,
    onPaste: onPasteHandler,
    autoComplete: 'off',
    ref: ref
  })), /*#__PURE__*/React.createElement(HelpText, {
    message: error ? caption : helpText,
    error: error
  }));
});
InputMask.displayName = 'InputMask'; // we are adding a new property which is not present in default interface
// we could have explicitly added the interface above with definition
// but then it would force us to marks utils as optional
// as we cannot add new properties by defining the InputMask
// that would cause user to use `!` everywhere or check for utils

InputMask.utils = {
  getDefaultValue: getDefaultValue
};
var X = InputMask;

var _excluded$K = ["required", "optional", "withInput", "disabled", "children", "className", "info"];

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
      info = props.info,
      rest = _objectWithoutProperties(props, _excluded$K);

  var baseProps = extractBaseProps(props);
  var LabelClass = classnames((_classNames = {
    Label: true
  }, _defineProperty$1(_classNames, 'Label--withInput', withInput), _defineProperty$1(_classNames, 'Label--optional', optional), _classNames), className);
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

  var renderIndicator = function renderIndicator(info) {
    return /*#__PURE__*/React.createElement(Tooltip, {
      tooltip: info
    }, /*#__PURE__*/React.createElement(Icon, {
      "data-test": "DesignSystem-Label--Info",
      name: "info",
      size: 12,
      appearance: "subtle",
      className: "ml-3 cursor-pointer d-flex align-items-center"
    }));
  };

  return /*#__PURE__*/React.createElement("div", _extends$2({
    "data-test": "DesignSystem-Label"
  }, baseProps, {
    className: LabelClass
  }), /*#__PURE__*/React.createElement(Link$1, _extends$2({
    "data-test": "DesignSystem-Label--Text",
    className: classes,
    componentType: "label"
  }, rest), children, renderInfo(required, optional), info && renderIndicator(info)));
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
  }, _defineProperty$1(_classNames, 'Caption--hidden', hide), _defineProperty$1(_classNames, 'Caption--withInput', withInput), _classNames), className);
  var errorIconClass = classnames(_defineProperty$1({}, 'Caption-icon', true));
  return /*#__PURE__*/React.createElement("div", _extends$2({}, baseProps, {
    className: classes,
    "data-test": "DesignSystem-Caption"
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
  var legendClass = classnames(_defineProperty$1({}, 'Legend', true), className);
  var styles = {
    background: "var(--".concat(iconAppearance, ")"),
    height: "".concat(iconSize, "px"),
    width: "".concat(iconSize, "px")
  }; // TODO(a11y): fix accessibility

  /* eslint-disable */

  return /*#__PURE__*/React.createElement("div", _extends$2({}, baseProps, {
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
  var EditableClass = classnames(_defineProperty$1({}, 'Editable', true), className);
  return /*#__PURE__*/React.createElement("div", _extends$2({
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

var _excluded$J = ["onChange", "onClose"];
var EditableDropdown = function EditableDropdown(props) {
  var _classNames2;

  var placeholder = props.placeholder,
      dropdownOptions = props.dropdownOptions,
      className = props.className,
      customTriggerRenderer = props.customTriggerRenderer;

  var onDropdownChange = dropdownOptions.onChange,
      onDropdownClose = dropdownOptions.onClose,
      rest = _objectWithoutProperties(dropdownOptions, _excluded$J);

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

  var CompClass = classnames(_defineProperty$1({}, 'EditableDropdown', true), className);
  var DefaultCompClass = classnames((_classNames2 = {}, _defineProperty$1(_classNames2, 'EditableDropdown-default', true), _defineProperty$1(_classNames2, 'd-none', showComponent), _classNames2));
  var EditableDropdownClass = classnames(_defineProperty$1({}, 'd-none', !showComponent));
  var baseProps = extractBaseProps(props);

  var getLabel = function getLabel(updatedLabel) {
    setLabel(updatedLabel);
  };

  var onChangeHandler = function onChangeHandler(eventType) {
    switch (eventType) {
      case 'edit':
        setEditing(true);
        setShowComponent(true);
        break;

      case 'hover':
        setShowComponent(true);
        break;

      case 'default':
        setShowComponent(false);
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

  return /*#__PURE__*/React.createElement("div", _extends$2({
    "data-test": "DesignSystem-EditableDropdown"
  }, baseProps, {
    className: CompClass
  }), /*#__PURE__*/React.createElement(Editable, {
    onChange: onChangeHandler,
    editing: editing
  }, /*#__PURE__*/React.createElement(Dropdown, _extends$2({
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

var _excluded$I = ["children", "className", "appearance", "size", "disabled"];
var Link = function Link(props) {
  var _classNames;

  var children = props.children,
      className = props.className,
      appearance = props.appearance,
      size = props.size,
      disabled = props.disabled,
      rest = _objectWithoutProperties(props, _excluded$I);

  var classes = classnames((_classNames = {
    Link: true
  }, _defineProperty$1(_classNames, "Link--".concat(size), size), _defineProperty$1(_classNames, "Link--".concat(appearance), appearance), _defineProperty$1(_classNames, "Link--".concat(appearance, "-disabled"), disabled), _classNames), className);
  return /*#__PURE__*/React.createElement(Link$1, _extends$2({
    "data-test": "DesignSystem-Link",
    className: classes,
    componentType: "a",
    tabIndex: disabled ? -1 : 0
  }, rest), children);
};
Link.displayName = 'Link';
Link.defaultProps = {
  appearance: 'default',
  size: 'regular',
  disabled: false
};

var IconMapping$2 = {
  success: 'check_circle',
  info: 'info',
  warning: 'warning',
  alert: 'error'
};
var Message = function Message(props) {
  var _classNames, _classNames2, _classNames3, _classNames4;

  var actions = props.actions,
      title = props.title,
      className = props.className;
  var appearance = props.appearance;
  appearance = appearance === 'default' ? 'info' : appearance;
  var baseProps = extractBaseProps(props);
  var MessageClass = classnames((_classNames = {}, _defineProperty$1(_classNames, 'Message', true), _defineProperty$1(_classNames, "Message--".concat(appearance), appearance), _classNames), className);
  var IconClass = classnames((_classNames2 = {}, _defineProperty$1(_classNames2, 'Message-icon', true), _defineProperty$1(_classNames2, "Message-icon--".concat(appearance), appearance), _defineProperty$1(_classNames2, 'Message-icon--withTitle', title), _classNames2));
  var TitleClass = classnames((_classNames3 = {}, _defineProperty$1(_classNames3, 'Message-heading', true), _defineProperty$1(_classNames3, "Message-heading--".concat(appearance), appearance), _classNames3));
  var DescriptionClass = classnames((_classNames4 = {}, _defineProperty$1(_classNames4, 'Message-text', true), _defineProperty$1(_classNames4, "Message-text--".concat(appearance), appearance), _classNames4));

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

  return /*#__PURE__*/React.createElement("div", _extends$2({
    "data-test": "DesignSystem-Message"
  }, baseProps, {
    className: MessageClass
  }), /*#__PURE__*/React.createElement(Icon, {
    "data-test": "DesignSystem-Message--Icon",
    name: IconMapping$2[appearance],
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
  appearance: 'info',
  description: ''
};

var Meta = function Meta(props) {
  var label = props.label,
      icon = props.icon,
      size = props.size,
      iconType = props.iconType;
  return /*#__PURE__*/React.createElement("span", {
    "data-test": "DesignSystem-MetaList--Meta",
    className: 'Meta'
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    "data-test": "DesignSystem-MetaList--MetaIcon",
    name: icon,
    appearance: "subtle",
    className: 'Meta-icon',
    type: iconType,
    size: size === 'regular' ? 16 : 12
  }), /*#__PURE__*/React.createElement(Text, {
    size: size,
    "data-test": "DesignSystem-MetaList--MetaLabel",
    appearance: "subtle"
  }, label));
};
Meta.displayName = 'Meta';

var MetaList = function MetaList(props) {
  var _classNames3;

  var list = props.list,
      seperator = props.seperator,
      className = props.className,
      size = props.size;
  var baseProps = extractBaseProps(props);
  var MetaClass = classnames(_defineProperty$1({}, 'MetaList', true), className);
  var SeperatorClass = classnames(_defineProperty$1({}, 'MetaList-seperator', true));
  var LeftSeperatorClass = classnames((_classNames3 = {}, _defineProperty$1(_classNames3, 'MetaList-seperator', true), _defineProperty$1(_classNames3, 'MetaList-seperator--left', true), _classNames3));
  return /*#__PURE__*/React.createElement("div", _extends$2({
    "data-test": "DesignSystem-MetaList"
  }, baseProps, {
    className: MetaClass
  }), seperator && /*#__PURE__*/React.createElement(Icon, {
    "data-test": "DesignSystem-MetaList--Seperator",
    name: "fiber_manual_record",
    size: 8,
    className: LeftSeperatorClass,
    appearance: "disabled"
  }), list.map(function (item, ind) {
    var _item$label = item.label,
        label = _item$label === void 0 ? '' : _item$label,
        icon = item.icon,
        iconType = item.iconType;
    var rightSeperator = ind !== list.length - 1;
    return /*#__PURE__*/React.createElement("span", {
      key: ind,
      className: "MetaList-item"
    }, /*#__PURE__*/React.createElement(Meta, {
      size: size,
      label: label,
      icon: icon,
      iconType: iconType
    }), rightSeperator && /*#__PURE__*/React.createElement(Icon, {
      "data-test": "DesignSystem-MetaList--rightSeperator",
      name: "fiber_manual_record",
      size: 8,
      className: SeperatorClass,
      appearance: "disabled"
    }));
  }));
};
MetaList.displayName = 'MetaList';
MetaList.defaultProps = {
  seperatorAppearance: 'disabled',
  iconAppearance: 'subtle',
  labelAppearance: 'subtle',
  size: 'regular'
};

/**
 * Key codes are deprecated, soon major browser support will end.
 */
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
function isElementOfType(element) {
  return element != null && element.type != null;
}

var Handle = /*#__PURE__*/function (_React$Component) {
  _inherits(Handle, _React$Component);

  var _super = _createSuper(Handle);

  function Handle() {
    var _this;

    _classCallCheck(this, Handle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty$1(_assertThisInitialized$1(_this), "state", {
      isHandleMoving: false,
      isHandleHovered: false
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "handleElement", null);

    _defineProperty$1(_assertThisInitialized$1(_this), "refHandlers", {
      handle: function handle(el) {
        return _this.handleElement = el;
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "mouseEventClientOffset", function (event) {
      return event.clientX;
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "clientToValue", function (clientPixel) {
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

    _defineProperty$1(_assertThisInitialized$1(_this), "changeValue", function (newValue) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.props.onChange;
      var updatedValue = clamp(newValue, _this.props.min, _this.props.max);

      if (!isNaN(updatedValue) && _this.props.value !== updatedValue) {
        if (callback) callback(updatedValue);
      }

      return updatedValue;
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "endHandleMovement", function (event) {
      var clientPixel = _this.mouseEventClientOffset(event);

      var onRelease = _this.props.onRelease;

      _this.removeDocumentEventListeners();

      _this.setState({
        isHandleMoving: false
      });

      var finalValue = _this.changeValue(_this.clientToValue(clientPixel));

      if (onRelease) onRelease(finalValue);
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "continueHandleMovement", function (event) {
      var clientPixel = _this.mouseEventClientOffset(event);

      if (_this.state.isHandleMoving && !_this.props.disabled) {
        var value = _this.clientToValue(clientPixel);

        _this.changeValue(value);
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "beginHandleMovement", function (event) {
      if (_this.props.disabled) return;
      document.addEventListener('mousemove', _this.continueHandleMovement);
      document.addEventListener('mouseup', _this.endHandleMovement);

      _this.setState({
        isHandleMoving: true
      });

      var value = _this.clientToValue(event.clientX);

      _this.changeValue(value);
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "handleKeyDown", function (event) {
      if (_this.props.disabled) return;
      var _this$props2 = _this.props,
          stepSize = _this$props2.stepSize,
          value = _this$props2.value;
      var keyCode = event.keyCode; // TODO(a11y): add ARROW_DOWN & ARROW_UP too

      if (keyCode === ARROW_LEFT) {
        _this.changeValue(value - stepSize);

        event.preventDefault();
      } else if (keyCode === ARROW_RIGHT) {
        _this.changeValue(value + stepSize);

        event.preventDefault();
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "handleKeyUp", function (event) {
      if (_this.props.disabled) return;

      if ([ARROW_LEFT, ARROW_RIGHT].indexOf(event.keyCode) >= 0) {
        var onRelease = _this.props.onRelease;
        if (onRelease) onRelease(_this.props.value);
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "getHandleMidpointAndOffset", function (handleElement) {
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

    _defineProperty$1(_assertThisInitialized$1(_this), "handleMouseOver", function () {
      _this.setState({
        isHandleHovered: true
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "handleMouseLeave", function () {
      _this.setState({
        isHandleHovered: false
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "removeDocumentEventListeners", function () {
      document.removeEventListener('mousemove', _this.continueHandleMovement);
      document.removeEventListener('mouseup', _this.endHandleMovement);
    });

    return _this;
  }

  _createClass(Handle, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeDocumentEventListeners();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_prevProps, prevState) {
      if (prevState.isHandleMoving !== this.state.isHandleMoving) {
        if (this.handleElement) this.handleElement.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames, _classNames2;

      var _this$props3 = this.props,
          min = _this$props3.min,
          tickSizeRatio = _this$props3.tickSizeRatio,
          value = _this$props3.value,
          disabled = _this$props3.disabled,
          label = _this$props3.label,
          isCurrentLabelHovered = _this$props3.isCurrentLabelHovered;
      var _this$state = this.state,
          isHandleMoving = _this$state.isHandleMoving,
          isHandleHovered = _this$state.isHandleHovered;
      var showTootlip = isHandleMoving || isHandleHovered || isCurrentLabelHovered;

      var _this$getHandleMidpoi2 = this.getHandleMidpointAndOffset(this.handleElement, true),
          handleMidpoint = _this$getHandleMidpoi2.handleMidpoint;

      var offsetRatio = (value - min) * tickSizeRatio;
      var offsetCalc = "calc(".concat(formatPercentage(offsetRatio), " - ").concat(handleMidpoint, "px)");
      var style = {
        left: offsetCalc
      };
      var className = classnames((_classNames = {}, _defineProperty$1(_classNames, 'Slider-handle', true), _defineProperty$1(_classNames, 'Slider-handle--disabled', disabled), _defineProperty$1(_classNames, 'Slider-handle--active', isHandleMoving), _defineProperty$1(_classNames, 'border-0', disabled), _classNames));
      var TooltipClass = classnames((_classNames2 = {}, _defineProperty$1(_classNames2, 'Slider-tooltip', true), _defineProperty$1(_classNames2, 'Tooltip', true), _defineProperty$1(_classNames2, 'd-none', !showTootlip), _classNames2));
      return (
        /*#__PURE__*/
        // TODO(a11y): fix accessibility

        /* eslint-disable */
        React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
          className: className,
          onMouseOver: this.handleMouseOver,
          onMouseLeave: this.handleMouseLeave,
          onMouseDown: this.beginHandleMovement,
          onKeyDown: this.handleKeyDown,
          onKeyUp: this.handleKeyUp,
          ref: this.refHandlers.handle,
          style: style,
          tabIndex: 0,
          "data-test": "DesignSystem-MultiSlider-Handle"
        }), /*#__PURE__*/React.createElement("div", {
          className: TooltipClass,
          style: style
        }, label))
      );
    }
  }]);

  return Handle;
}(React.Component);

var MultiSliderHandle = function MultiSliderHandle() {
  return null;
};

var MultiSlider = /*#__PURE__*/function (_React$Component) {
  _inherits(MultiSlider, _React$Component);

  var _super = _createSuper(MultiSlider);

  function MultiSlider(_props) {
    var _this;

    _classCallCheck(this, MultiSlider);

    _this = _super.call(this, _props);

    _defineProperty$1(_assertThisInitialized$1(_this), "handleElements", []);

    _defineProperty$1(_assertThisInitialized$1(_this), "trackElement", null);

    _defineProperty$1(_assertThisInitialized$1(_this), "getLabelPrecision", function (_ref) {
      var labelPrecision = _ref.labelPrecision,
          stepSize = _ref.stepSize;
      return labelPrecision == null ? countDecimalPlaces(stepSize) : labelPrecision;
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "getOffsetRatio", function (value) {
      return clamp((value - _this.props.min) * _this.state.tickSizeRatio, 0, 1);
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "addHandleRef", function (ref) {
      if (ref != null) {
        _this.handleElements.push(ref);
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "getHandleValues", function (props) {
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

    _defineProperty$1(_assertThisInitialized$1(_this), "updateTickSize", function () {
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

    _defineProperty$1(_assertThisInitialized$1(_this), "getTrackFill", function (start, end) {
      if (start.fillAfter !== undefined) {
        return start.fillAfter;
      }

      if (end !== undefined && end.fillBefore !== undefined) {
        return end.fillBefore;
      }

      return false;
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "maybeHandleTrackClick", function (event) {
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

    _defineProperty$1(_assertThisInitialized$1(_this), "getLockedHandleIndex", function (startIndex, endIndex) {
      var inc = startIndex < endIndex ? 1 : -1;

      for (var index = startIndex + inc; index !== endIndex + inc; index += inc) {
        return index;
      }

      return -1;
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "getNewHandleValues", function (newValue, oldIndex) {
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

    _defineProperty$1(_assertThisInitialized$1(_this), "onReleaseHandler", function (newValue, index) {
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

    _defineProperty$1(_assertThisInitialized$1(_this), "onChangeHandler", function (newValue, index) {
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

    _defineProperty$1(_assertThisInitialized$1(_this), "formatLabel", function (value) {
      var labelRenderer = _this.props.labelRenderer;
      var labelValue = value.toFixed(_this.state.labelPrecision);

      if (typeof labelRenderer === 'function') {
        return labelRenderer(Number(labelValue));
      }

      return labelValue;
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "renderHandles", function () {
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
        var isCurrentLabelHovered = _this.state.hoveredLabelValue === Number(value.toFixed(_this.state.labelPrecision));
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
          label: _this.formatLabel(value),
          ref: _this.addHandleRef,
          stepSize: stepSize,
          tickSize: _this.state.tickSize,
          tickSizeRatio: _this.state.tickSizeRatio,
          value: value,
          isCurrentLabelHovered: isCurrentLabelHovered
        });
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "renderLabels", function () {
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

      var _loop = function _loop(i, offsetRatio) {
        var _classNames;

        var offsetPercentage = formatPercentage(offsetRatio);
        var style = {
          left: offsetPercentage
        };
        var active = !disabled && activeLabels.indexOf(i.toFixed(_this.state.labelPrecision)) !== -1;

        var onClickHandler = function onClickHandler(event) {
          if (!_this.props.disabled) {
            var foundHandle = _this.nearestHandleForValue(_this.handleElements, function (handle) {
              return handle.mouseEventClientOffset(event);
            });

            if (foundHandle) {
              foundHandle.changeValue(i);
            }
          }
        };

        var SliderTicksClass = classnames((_classNames = {}, _defineProperty$1(_classNames, 'Slider-ticks', true), _defineProperty$1(_classNames, 'bg-dark', active), _classNames)); // TODO(a11y): fix accessibility

        /* eslint-disable */

        labels.push( /*#__PURE__*/React.createElement("div", {
          onClick: onClickHandler,
          className: 'Slider-label',
          key: i,
          style: style,
          onMouseOver: function onMouseOver() {
            return _this.handleLabelMouseOver(i);
          },
          onMouseLeave: _this.handleLabelMouseLeave,
          "data-test": "DesignSystem-MultiSlider-Label"
        }, /*#__PURE__*/React.createElement("span", {
          className: SliderTicksClass
        }), labelRenderer !== false && /*#__PURE__*/React.createElement(Text, {
          size: "small",
          appearance: active ? 'default' : 'disabled'
        }, _this.formatLabel(i))));
      };

      for (var i = min, offsetRatio = 0; i < max || approxEqual(i, max); i += labelStepSize, offsetRatio += stepSizeRatio) {
        _loop(i, offsetRatio);
      }

      return labels;
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "renderTrackFill", function (index, start, end) {
      var _classNames2;

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

      var classes = classnames((_classNames2 = {}, _defineProperty$1(_classNames2, 'Slider-progress', true), _defineProperty$1(_classNames2, 'Slider-progress--disabled', _this.props.disabled), _defineProperty$1(_classNames2, 'Slider-progress--inRange', fillTrack), _defineProperty$1(_classNames2, 'Slider-progress--inRangeDisabled', fillTrack && _this.props.disabled), _classNames2));
      return /*#__PURE__*/React.createElement("div", {
        key: "track-".concat(index),
        className: classes,
        style: style
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "renderTracks", function () {
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

    _defineProperty$1(_assertThisInitialized$1(_this), "handleLabelMouseOver", function (value) {
      _this.setState({
        hoveredLabelValue: value
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "handleLabelMouseLeave", function () {
      _this.setState({
        hoveredLabelValue: undefined
      });
    });

    _this.state = {
      labelPrecision: _this.getLabelPrecision(_this.props),
      tickSize: 0,
      tickSizeRatio: 0
    };
    return _this;
  }

  _createClass(MultiSlider, [{
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
      var _classNames4,
          _this2 = this;

      var _this$props3 = this.props,
          label = _this$props3.label,
          className = _this$props3.className;
      var baseProps = extractBaseProps(this.props);
      var SliderClass = classnames(_defineProperty$1({}, 'Slider', true), className);
      var WrapperClass = classnames((_classNames4 = {}, _defineProperty$1(_classNames4, 'Slider-wrapper', true), _defineProperty$1(_classNames4, 'Slider-wrapper--disabled', this.props.disabled), _classNames4));
      return /*#__PURE__*/React.createElement("div", _extends$2({}, baseProps, {
        className: SliderClass,
        "data-test": "DesignSystem-MultiSlider"
      }), label && /*#__PURE__*/React.createElement(Label, {
        withInput: true
      }, label), /*#__PURE__*/React.createElement("div", {
        className: WrapperClass
      }, /*#__PURE__*/React.createElement("div", {
        className: "Slider-track",
        ref: function ref(_ref3) {
          return _this2.trackElement = _ref3;
        },
        onMouseDown: this.maybeHandleTrackClick,
        "data-test": "DesignSystem-MultiSlider-Slider-Track"
      }, this.renderTracks()), /*#__PURE__*/React.createElement("div", {
        className: "Slider-axis"
      }, this.renderLabels()), this.renderHandles()));
    }
  }]);

  return MultiSlider;
}(React.Component);

_defineProperty$1(MultiSlider, "defaultProps", {
  labelStepSize: 1,
  max: 10,
  min: 0,
  stepSize: 1,
  labelRenderer: true
});

_defineProperty$1(MultiSlider, "Handle", MultiSliderHandle);

var _excluded$H = ["children", "className", "onOutsideClick"];
var OutsideClick = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
      className = props.className,
      onOutsideClick = props.onOutsideClick,
      rest = _objectWithoutProperties(props, _excluded$H);

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
  var classes = classnames(_defineProperty$1({}, 'OutsideClick', true), className);
  return /*#__PURE__*/React.createElement("div", _extends$2({
    ref: innerRef
  }, rest, {
    className: classes
  }), children);
});
OutsideClick.displayName = 'OutsideClick';

var _excluded$G = ["appearance", "children", "className", "color"];
var Paragraph = function Paragraph(props) {
  var _classNames;

  var appearance = props.appearance,
      children = props.children,
      className = props.className,
      color = props.color,
      rest = _objectWithoutProperties(props, _excluded$G);

  var classes = classnames((_classNames = {
    Text: true
  }, _defineProperty$1(_classNames, "Text--".concat(appearance), !color && appearance), _defineProperty$1(_classNames, "color-".concat(color), color), _classNames), className);
  return /*#__PURE__*/React.createElement(Link$1, _extends$2({
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
  var _classNames;

  var max = props.max,
      value = props.value,
      className = props.className,
      size = props.size;
  var baseProps = extractBaseProps(props);
  var style = {
    width: value > 0 ? "".concat(Math.min(value, max) * 100 / max, "%") : '0'
  };
  var ProgressBarClass = classnames({
    ProgressBar: true
  }, className);
  var ProgressIndicatorClass = classnames((_classNames = {}, _defineProperty$1(_classNames, 'ProgressBar-indicator', true), _defineProperty$1(_classNames, 'ProgressBar-indicator--small', size === 'small'), _defineProperty$1(_classNames, 'ProgressBar-indicator--regular', size === 'regular'), _classNames));
  return /*#__PURE__*/React.createElement("div", _extends$2({
    "data-test": "DesignSystem-ProgressBar"
  }, baseProps, {
    className: ProgressBarClass
  }), /*#__PURE__*/React.createElement("div", {
    "data-test": "DesignSystem-ProgressBar-Indicator",
    className: ProgressIndicatorClass,
    style: style
  }));
};
ProgressBar.displayName = 'ProgressBar';
ProgressBar.defaultProps = {
  max: 100,
  size: 'regular'
};

var _excluded$F = ["size", "label", "disabled", "onChange", "name", "value", "checked", "defaultChecked", "className", "helpText", "error"];
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
      helpText = props.helpText,
      error = props.error,
      rest = _objectWithoutProperties(props, _excluded$F);

  var ref = React.useRef(null);
  React.useImperativeHandle(forwardedRef, function () {
    return ref.current;
  });
  var RadioClass = classnames((_classNames = {}, _defineProperty$1(_classNames, 'Radio', true), _defineProperty$1(_classNames, 'Radio--disabled', disabled), _classNames), className);
  var RadioWrapper = classnames((_classNames2 = {}, _defineProperty$1(_classNames2, 'Radio-wrapper', true), _defineProperty$1(_classNames2, "Radio-defaultWrapper", !error), _defineProperty$1(_classNames2, "Radio-errorWrapper", error), _defineProperty$1(_classNames2, "Radio-wrapper--".concat(size), size), _classNames2));
  var RadioOuterWrapper = classnames((_classNames3 = {}, _defineProperty$1(_classNames3, 'Radio-outerWrapper', true), _defineProperty$1(_classNames3, "Radio-outerWrapper--".concat(size), size), _classNames3));
  var RadioLabelClass = classnames(_defineProperty$1({}, 'Radio-Label', true));
  var id = "".concat(name, "-").concat(label, "-").concat(uidGenerator());
  return /*#__PURE__*/React.createElement("div", {
    className: RadioClass,
    "data-test": "DesignSystem-Radio"
  }, /*#__PURE__*/React.createElement("div", {
    className: RadioOuterWrapper,
    "data-test": "DesignSystem-Radio-OuterWrapper"
  }, /*#__PURE__*/React.createElement("input", _extends$2({
    tabIndex: 0
  }, rest, {
    type: "radio",
    disabled: disabled,
    checked: checked,
    defaultChecked: defaultChecked,
    ref: ref,
    name: name,
    value: value,
    onChange: onChange,
    className: "Radio-input",
    id: id,
    "data-test": "DesignSystem-Radio-Input"
  })), /*#__PURE__*/React.createElement("span", {
    "data-test": "DesignSystem-Radio-wrapper",
    className: RadioWrapper
  })), /*#__PURE__*/React.createElement("div", {
    className: "Radio-labelWrapper"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: RadioLabelClass,
    htmlFor: id,
    "data-test": "DesignSystem-Radio-Label"
  }, /*#__PURE__*/React.createElement(Text, {
    size: size === 'tiny' ? 'small' : 'regular',
    appearance: disabled ? 'disabled' : 'default'
  }, label)), helpText && /*#__PURE__*/React.createElement(Text, {
    "data-test": "DesignSystem-Radio-HelpText",
    size: "small",
    appearance: disabled ? 'disabled' : 'subtle'
  }, helpText.trim())));
});
Radio.displayName = 'Radio';

var _excluded$E = ["className", "children"];
var Row = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded$E);

  var classes = classnames(_defineProperty$1({
    Row: true
  }, "".concat(className), className));
  return /*#__PURE__*/React.createElement("div", _extends$2({
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
      truncateLabel = props.truncateLabel,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var StatusHintClass = classnames(_defineProperty$1({}, 'StatusHint', true), className);
  var StatusHintIconClass = classnames((_classNames2 = {}, _defineProperty$1(_classNames2, 'StatusHint-icon', true), _defineProperty$1(_classNames2, "StatusHint--".concat(appearance), appearance), _classNames2));
  var StatusHintTextClass = classnames(_defineProperty$1({}, 'ellipsis--noWrap', truncateLabel));
  return (
    /*#__PURE__*/
    // TODO(a11y): fix accessibility

    /* eslint-disable */
    React.createElement("div", _extends$2({
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
      weight: 'medium',
      className: StatusHintTextClass
    }, children))
  );
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
  }, _defineProperty$1(_classNames, "Badge--".concat(appearance), appearance && !subtle), _defineProperty$1(_classNames, "Badge--subtle-".concat(appearance), subtle), _classNames), className);
  return /*#__PURE__*/React.createElement("span", _extends$2({
    "data-test": "DesignSystem-Pills"
  }, baseProps, {
    className: classes
  }), children);
};
Pills.displayName = 'Pills';
Pills.defaultProps = {
  appearance: 'secondary'
};

var Spinner = function Spinner(props) {
  var appearance = props.appearance,
      size = props.size,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var wrapperClasses = classnames(_defineProperty$1({
    Spinner: true
  }, "Spinner--".concat(size), size), className);
  var circleClasses = classnames(_defineProperty$1({
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
  return /*#__PURE__*/React.createElement("svg", _extends$2({}, baseProps, {
    className: wrapperClasses
  }, svgProps), /*#__PURE__*/React.createElement("circle", _extends$2({
    className: circleClasses
  }, circleProps)));
};
Spinner.displayName = 'Spinner';
Spinner.defaultProps = {
  appearance: 'primary',
  size: 'medium'
};

var _excluded$D = ["value", "defaultValue", "onRelease", "onChange"];
var Slider = function Slider(props) {
  var valueProp = props.value,
      defaultValue = props.defaultValue,
      onRelease = props.onRelease,
      onChange = props.onChange,
      rest = _objectWithoutProperties(props, _excluded$D);

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

var _excluded$C = ["value", "defaultValue", "onChange", "onRelease"];
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
      rest = _objectWithoutProperties(props, _excluded$C);

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

  return /*#__PURE__*/React.createElement(MultiSlider, _extends$2({
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

var _excluded$B = ["appearance", "children", "className", "color"];
var Subheading = function Subheading(props) {
  var _classNames;

  var appearance = props.appearance,
      children = props.children,
      className = props.className,
      color = props.color,
      rest = _objectWithoutProperties(props, _excluded$B);

  var classes = classnames((_classNames = {
    Subheading: true
  }, _defineProperty$1(_classNames, "Subheading--".concat(appearance), !color && appearance), _defineProperty$1(_classNames, "color-".concat(color), color), _classNames), className);
  return /*#__PURE__*/React.createElement(Link$1, _extends$2({
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

var _excluded$A = ["size", "defaultChecked", "disabled", "onChange", "name", "value", "className", "appearance", "checked"];

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
      rest = _objectWithoutProperties(props, _excluded$A);

  var _React$useState = React.useState(checkedProp === undefined ? defaultChecked : checkedProp),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      checked = _React$useState2[0],
      setChecked = _React$useState2[1];

  React.useEffect(function () {
    if (checkedProp !== undefined) setChecked(checkedProp);
  }, [checkedProp]);
  var SwitchClass = classnames((_classNames = {}, _defineProperty$1(_classNames, 'Switch', true), _defineProperty$1(_classNames, 'Switch--disabled', disabled), _defineProperty$1(_classNames, "Switch--".concat(size), size), _classNames), className);
  var SwitchWrapper = classnames((_classNames2 = {}, _defineProperty$1(_classNames2, 'Switch-wrapper', true), _defineProperty$1(_classNames2, 'Switch-wrapper--disabled', disabled), _defineProperty$1(_classNames2, "Switch-wrapper--".concat(size), size), _defineProperty$1(_classNames2, 'Switch-wrapper--checked', checked), _defineProperty$1(_classNames2, 'Switch-wrapper--checkedDisabled', checked && disabled), _classNames2));

  var onChangeHandler = function onChangeHandler(event) {
    if (event.type == 'change' || isSpaceKey(event)) {
      if (checkedProp === undefined) setChecked(!checked);
      if (onChange) onChange(event, !checked);
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: SwitchClass
  }, /*#__PURE__*/React.createElement("input", _extends$2({}, rest, {
    type: "checkbox",
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChangeHandler,
    checked: checked,
    ref: ref,
    name: name,
    value: value,
    className: "Switch-input",
    onKeyUp: onChangeHandler
  })), /*#__PURE__*/React.createElement("span", {
    className: SwitchWrapper
  }));
});
Switch.displayName = 'Switch';

var _excluded$z = ["rows", "resize", "disabled", "name", "placeholder", "value", "defaultValue", "required", "error", "onChange", "onClick", "onBlur", "onFocus", "className"];
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
      rest = _objectWithoutProperties(props, _excluded$z);

  var classes = classnames((_classNames = {}, _defineProperty$1(_classNames, 'Textarea', true), _defineProperty$1(_classNames, 'Textarea--resize', resize), _defineProperty$1(_classNames, 'Textarea--error', error), _classNames), className);
  return /*#__PURE__*/React.createElement("textarea", _extends$2({
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
  var buttonClass = classnames((_classNames = {}, _defineProperty$1(_classNames, 'Button', true), _defineProperty$1(_classNames, 'Button--tiny', true), _defineProperty$1(_classNames, 'Toast-actionButton', true), _defineProperty$1(_classNames, "Toast-actionButton--".concat(appearance), appearance), _classNames));

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

  var title = props.title,
      message = props.message,
      actions = props.actions,
      onClose = props.onClose,
      className = props.className;
  var appearance = props.appearance;
  appearance = appearance === 'default' ? 'info' : appearance;
  var baseProps = extractBaseProps(props);
  var wrapperClass = classnames((_classNames = {}, _defineProperty$1(_classNames, 'Toast', true), _defineProperty$1(_classNames, 'Toast--withMessage', message), _defineProperty$1(_classNames, "Toast--".concat(appearance), appearance), _classNames), className);
  var IconMapping = {
    info: 'info',
    success: 'check_circle',
    alert: 'error',
    warning: 'warning'
  };
  var icon = IconMapping[appearance];
  var titleClass = classnames((_classNames2 = {}, _defineProperty$1(_classNames2, 'Toast-title', true), _defineProperty$1(_classNames2, 'Toast-title--withMessage', message), _classNames2));

  var iconClass = function iconClass(align) {
    var _classNames3;

    return classnames((_classNames3 = {}, _defineProperty$1(_classNames3, 'Toast-icon', true), _defineProperty$1(_classNames3, "Toast-icon--".concat(align), align), _defineProperty$1(_classNames3, "Toast-icon--".concat(appearance), appearance), _defineProperty$1(_classNames3, "Toast-close-icon--".concat(appearance), appearance && align === 'right'), _classNames3));
  };

  var textClass = classnames((_classNames4 = {}, _defineProperty$1(_classNames4, 'Toast-text', true), _defineProperty$1(_classNames4, "Toast-text--".concat(appearance), appearance), _classNames4));
  var headingClass = classnames((_classNames5 = {}, _defineProperty$1(_classNames5, 'Toast-heading', true), _defineProperty$1(_classNames5, "Toast-heading--".concat(appearance), appearance), _classNames5));

  var onCloseHandler = function onCloseHandler() {
    if (onClose) onClose();
  };

  return /*#__PURE__*/React.createElement("div", _extends$2({}, baseProps, {
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
  appearance: 'info'
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

var _objectWithoutPropertiesLoose = unwrapExports(objectWithoutPropertiesLoose);

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

var _extends$1 = unwrapExports(_extends_1);

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

var _assertThisInitialized = unwrapExports(assertThisInitialized);

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

var _defineProperty = unwrapExports(defineProperty$3);

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
var shams$1 = function hasSymbols() {
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

var shams = function hasToStringTagShams() {
	return shams$1() && !!Symbol.toStringTag;
};

var origSymbol = typeof Symbol !== 'undefined' && Symbol;


var hasSymbols$2 = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return shams$1();
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

var hasSymbols$1 = hasSymbols$2();

var getProto$1 = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' ? undefined$1 : getProto$1(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined$1 : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined$1 : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols$1 ? getProto$1([][Symbol.iterator]()) : undefined$1,
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
	'%IteratorPrototype%': hasSymbols$1 ? getProto$1(getProto$1([][Symbol.iterator]())) : undefined$1,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined$1,
	'%Map%': typeof Map === 'undefined' ? undefined$1 : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols$1 ? undefined$1 : getProto$1(new Map()[Symbol.iterator]()),
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
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols$1 ? undefined$1 : getProto$1(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined$1 : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols$1 ? getProto$1(''[Symbol.iterator]()) : undefined$1,
	'%Symbol%': hasSymbols$1 ? Symbol : undefined$1,
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

var hasToStringTag$2 = shams();


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

var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

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
	if (hasSymbols) {
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

var hasToStringTag$1 = shams();
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
var hasToStringTag = shams();

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

var _extends = Object.assign || function (target) {
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
  return _extends({}, offsets, {
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
    return _extends({
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
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

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
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

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
    popper = _extends({}, popper, check[side](placement));
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

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
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
    this.options = _extends({}, Popper.Defaults, options);

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
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
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

var PopperJS = Popper$1;

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "referenceNode", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setReferenceNode", function (newReferenceNode) {
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      data: undefined,
      placement: undefined
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "popperInstance", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "popperNode", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "arrowNode", null);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setPopperNode", function (popperNode) {
      if (!popperNode || _this.popperNode === popperNode) return;
      setRef(_this.props.innerRef, popperNode);
      _this.popperNode = popperNode;

      _this.updatePopperInstance();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setArrowNode", function (arrowNode) {
      _this.arrowNode = arrowNode;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateStateModifier", {
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getOptions", function () {
      return {
        placement: _this.props.placement,
        eventsEnabled: _this.props.eventsEnabled,
        positionFixed: _this.props.positionFixed,
        modifiers: _extends$1({}, _this.props.modifiers, {
          arrow: _extends$1({}, _this.props.modifiers && _this.props.modifiers.arrow, {
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getPopperStyle", function () {
      return !_this.popperNode || !_this.state.data ? initialStyle : _extends$1({
        position: _this.state.data.offsets.popper.position
      }, _this.state.data.styles);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getPopperPlacement", function () {
      return !_this.state.data ? undefined : _this.state.placement;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getArrowStyle", function () {
      return !_this.arrowNode || !_this.state.data ? initialArrowStyle : _this.state.data.arrowStyles;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getOutOfBoundariesState", function () {
      return _this.state.data ? _this.state.data.hide : undefined;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "destroyPopperInstance", function () {
      if (!_this.popperInstance) return;

      _this.popperInstance.destroy();

      _this.popperInstance = null;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updatePopperInstance", function () {
      _this.destroyPopperInstance();

      var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)),
          popperNode = _assertThisInitialize.popperNode;

      var referenceElement = _this.props.referenceElement;
      if (!referenceElement || !popperNode) return;
      _this.popperInstance = new PopperJS(referenceElement, popperNode, _this.getOptions());
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scheduleUpdate", function () {
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

_defineProperty(InnerPopper, "defaultProps", {
  placement: 'bottom',
  eventsEnabled: true,
  referenceElement: undefined,
  positionFixed: false
});

PopperJS.placements;
function Popper(_ref) {
  var referenceElement = _ref.referenceElement,
      props = _objectWithoutPropertiesLoose(_ref, ["referenceElement"]);

  return React.createElement(ManagerReferenceNodeContext.Consumer, null, function (referenceNode) {
    return React.createElement(InnerPopper, _extends$1({
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "refHandler", function (node) {
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
    return React.createElement(InnerReference, _extends$1({
      setReferenceNode: setReferenceNode
    }, props));
  });
}

var PopperWrapper = /*#__PURE__*/function (_React$Component) {
  _inherits(PopperWrapper, _React$Component);

  var _super = _createSuper(PopperWrapper);

  function PopperWrapper(props) {
    var _this;

    _classCallCheck(this, PopperWrapper);

    _this = _super.call(this, props);

    _defineProperty$1(_assertThisInitialized$1(_this), "triggerRef", void 0);

    _defineProperty$1(_assertThisInitialized$1(_this), "popupRef", void 0);

    _defineProperty$1(_assertThisInitialized$1(_this), "hoverableDelay", void 0);

    _defineProperty$1(_assertThisInitialized$1(_this), "_timer", void 0);

    _defineProperty$1(_assertThisInitialized$1(_this), "_throttleWait", void 0);

    _defineProperty$1(_assertThisInitialized$1(_this), "offsetMapping", void 0);

    _defineProperty$1(_assertThisInitialized$1(_this), "togglePopper", function (type, newValue) {
      var _this$props = _this.props,
          open = _this$props.open,
          onToggle = _this$props.onToggle;
      onToggle(newValue === undefined ? !open : newValue, type);
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "doesEventContainsElement", function (event, ref) {
      var el = ref.current;
      return el && el.contains(event.target);
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "getUpdatedStyle", function (oldStyle, placement, offset) {
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

      if (_this.props.triggerCoordinates) {
        newStyle.position = 'absolute';
        newStyle.transform = "translate(".concat(_this.props.triggerCoordinates.x, "px, ").concat(_this.props.triggerCoordinates.y, "px)");
      }

      return newStyle;
    });

    _this.state = {
      animationKeyframe: '',
      isOpen: _this.props.open || false,
      uniqueKey: ''
    };
    _this.hoverableDelay = 100;
    _this.offsetMapping = {
      small: '2px',
      medium: '4px',
      large: '8px'
    };
    _this.triggerRef = /*#__PURE__*/React.createRef();
    _this.popupRef = /*#__PURE__*/React.createRef();
    _this.getPopperChildren = _this.getPopperChildren.bind(_assertThisInitialized$1(_this));
    _this.mouseMoveHandler = _this.mouseMoveHandler.bind(_assertThisInitialized$1(_this));
    _this.handleMouseEnter = _this.handleMouseEnter.bind(_assertThisInitialized$1(_this));
    _this.handleMouseLeave = _this.handleMouseLeave.bind(_assertThisInitialized$1(_this));
    _this.boundaryScrollHandler = _this.boundaryScrollHandler.bind(_assertThisInitialized$1(_this));
    return _this;
  }

  _createClass(PopperWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.addBoundaryScrollHandler();
      var triggerElement = this.triggerRef.current;
      var zIndex = this.getZIndexForLayer(triggerElement);
      this.setState({
        zIndex: zIndex === undefined ? zIndex : zIndex + 1
      });
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
        this.setState({
          animationKeyframe: ''
        });

        if (this.props.open) {
          var triggerElement = this.triggerRef.current;
          var zIndex = this.getZIndexForLayer(triggerElement);
          this.setState({
            zIndex: zIndex === undefined ? zIndex : zIndex + 1,
            isOpen: true
          });
        } else if (!this.props.open && this.props.animationClass) {
          this.setState({
            isOpen: false
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
      if (this.props.boundaryElement && this.props.boundaryElement.addEventListener) {
        this.props.boundaryElement.addEventListener('scroll', this.boundaryScrollHandler);
      }
    }
  }, {
    key: "removeBoundaryScrollHandler",
    value: function removeBoundaryScrollHandler() {
      if (this.props.boundaryElement && this.props.boundaryElement.removeEventListener) {
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
        this.setState(function () {
          return {
            isOpen: true
          };
        });
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
          this.setState({
            isOpen: false
          });
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
      return zIndex === 'auto' || isNaN(zIndex) ? 500 : zIndex;
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

      var shouldPopoverClose = function shouldPopoverClose(clicked) {
        var popover = _this3.popupRef.current;
        var container = document.body;
        var popoverIndex = parseInt(window.getComputedStyle(popover).zIndex);
        var clickInsideLayer = false;
        var shouldClose = false;
        var openedLayers = container.querySelectorAll('[data-opened="true"]');
        openedLayers.forEach(function (layer) {
          if (layer.contains(clicked)) {
            clickInsideLayer = true;
            var clickedIndex = parseInt(window.getComputedStyle(layer).zIndex);

            if (popoverIndex > clickedIndex) {
              shouldClose = true;
              return;
            }
          }
        });

        if (container.isEqualNode(clicked) || shouldClose || !container.contains(clicked) || !clickInsideLayer) {
          return true;
        }

        return false;
      };

      var onOutsideClickHandler = function onOutsideClickHandler(event) {
        var _this3$props = _this3.props,
            open = _this3$props.open,
            closeOnBackdropClick = _this3$props.closeOnBackdropClick;

        if (open && shouldPopoverClose(event.target) && closeOnBackdropClick) {
          if (!_this3.doesEventContainsElement(event, _this3.popupRef)) {
            _this3.togglePopper('outsideClick');
          }
        }
      };

      return /*#__PURE__*/React.createElement(OutsideClick, _extends$2({
        className: classes,
        onOutsideClick: onOutsideClickHandler
      }, options), trigger);
    }
  }, {
    key: "getPopperChildren",
    value: function getPopperChildren(_ref) {
      var _this4 = this;

      var ref = _ref.ref,
          style = _ref.style,
          placement = _ref.placement,
          outOfBoundaries = _ref.outOfBoundaries;
      var _this$props5 = this.props,
          offset = _this$props5.offset,
          children = _this$props5.children,
          open = _this$props5.open,
          animationClass = _this$props5.animationClass;
      var _this$state = this.state,
          zIndex = _this$state.zIndex,
          animationKeyframe = _this$state.animationKeyframe,
          uniqueKey = _this$state.uniqueKey;
      var newStyle = offset ? this.getUpdatedStyle(style, placement, offset) : style;

      var childrenStyles = _objectSpread2(_objectSpread2({}, newStyle), {}, {
        zIndex: zIndex
      });

      var classes = '';

      if (!animationClass) {
        var _this$popupRef$curren, _this$popupRef$curren2;

        var maxHeight = (_this$popupRef$curren = this.popupRef.current) === null || _this$popupRef$curren === void 0 ? void 0 : _this$popupRef$curren.offsetHeight; // we need to check for transformStyles so that we open the popover at correct position (left/right)

        var transformStyles = (_this$popupRef$curren2 = this.popupRef.current) === null || _this$popupRef$curren2 === void 0 ? void 0 : _this$popupRef$curren2.style.getPropertyValue('transform');

        if (transformStyles && maxHeight && placement && !animationKeyframe) {
          var _uniqueKey = Math.random().toString(36).substring(2, 6);

          var isTop = placement.includes('top');
          var popperAnimation = "\n        @keyframes popper-open-".concat(_uniqueKey, " {\n          from { \n            max-height: 0;\n            ").concat(isTop ? "margin-top: ".concat(maxHeight, "px") : '', ";\n          }\n          to {\n            max-height: ").concat(maxHeight, "px;\n            ").concat(isTop ? "margin-top: 0px" : '', ";\n          }\n        }\n        @keyframes popper-close-").concat(_uniqueKey, " {\n          from {\n            max-height: ").concat(maxHeight, "px;\n            ").concat(isTop ? "margin-top: 0px" : '', ";\n          }\n          to {\n            max-height: 0;\n            ").concat(isTop ? "margin-top: ".concat(maxHeight, "px") : '', ";\n          }\n        }\n        ");
          this.setState({
            animationKeyframe: popperAnimation,
            uniqueKey: _uniqueKey
          });
        } // defining popper-fade-in custom keyframe as it is specific to popover usecase.


        var popperAnimationStyles = {
          animation: open ? "popper-open-".concat(uniqueKey, " 120ms cubic-bezier(0, 0, 0.38, 0.9), popper-fade-in 120ms") : "popper-close-".concat(uniqueKey, " 120ms cubic-bezier(0.2, 0, 1, 0.9), fadeOut 100ms")
        };
        childrenStyles = _objectSpread2(_objectSpread2(_objectSpread2({}, childrenStyles), popperAnimationStyles), {}, {
          overflow: 'hidden'
        });
      } else {
        var _classNames;

        classes = classnames((_classNames = {}, _defineProperty$1(_classNames, "".concat(animationClass.open), this.state.isOpen), _defineProperty$1(_classNames, "".concat(animationClass.close), !this.state.isOpen), _classNames), children.props.className);
      }

      var childProps = {
        ref: ref,
        style: childrenStyles,
        'data-placement': placement,
        'data-hide': outOfBoundaries,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        onAnimationEnd: function onAnimationEnd() {
          if (!open) {
            _this4.setState({
              isOpen: false
            });
          }
        }
      };
      var element = /*#__PURE__*/React.cloneElement(children, animationClass ? _objectSpread2(_objectSpread2({}, childProps), {}, {
        className: classes
      }) : _objectSpread2({}, childProps));
      return element;
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$props6 = this.props,
          placement = _this$props6.placement,
          appendToBody = _this$props6.appendToBody,
          hide = _this$props6.hide,
          boundaryElement = _this$props6.boundaryElement,
          triggerCoordinates = _this$props6.triggerCoordinates;
      var _this$state2 = this.state,
          animationKeyframe = _this$state2.animationKeyframe,
          isOpen = _this$state2.isOpen;
      var coordinatesPopper = /*#__PURE__*/React.createElement(Popper, {
        placement: placement,
        innerRef: this.popupRef,
        modifiers: _objectSpread2({
          preventOverflow: {
            boundariesElement: boundaryElement || document.body
          },
          hide: {
            enabled: hide
          }
        }, triggerCoordinates && {
          offset: {
            offset: "".concat(triggerCoordinates.x, "px, ").concat(triggerCoordinates.y, "px")
          }
        })
      }, this.getPopperChildren);
      return /*#__PURE__*/React.createElement(Manager, null, /*#__PURE__*/React.createElement("style", null, animationKeyframe), /*#__PURE__*/React.createElement(Reference, {
        innerRef: this.triggerRef
      }, function (_ref2) {
        var ref = _ref2.ref;
        return _this5.getTriggerElement(ref);
      }), isOpen && appendToBody && !triggerCoordinates && /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement(Popper, {
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
      }, this.getPopperChildren), document.body), isOpen && appendToBody && triggerCoordinates && /*#__PURE__*/ReactDOM.createPortal(coordinatesPopper, document.body), isOpen && !appendToBody && !triggerCoordinates && /*#__PURE__*/React.createElement(Popper, {
        placement: placement,
        innerRef: this.popupRef
      }, this.getPopperChildren));
    }
  }]);

  return PopperWrapper;
}(React.Component);

_defineProperty$1(PopperWrapper, "defaultProps", {
  on: 'click',
  offset: 'medium',
  closeOnBackdropClick: true,
  hoverable: true,
  appendToBody: true,
  style: {}
});

var _excluded$y = ["position", "customStyle", "dark", "children", "onToggle", "className", "hideOnReferenceEscape", "boundaryElement", "name"];
var propsList = ['appendToBody', 'trigger', 'hoverable', 'on', 'open', 'closeOnBackdropClick', 'offset', 'closeOnScroll'];
var Popover = function Popover(props) {
  var position = props.position,
      customStyle = props.customStyle,
      dark = props.dark,
      children = props.children,
      onToggle = props.onToggle,
      className = props.className,
      hideOnReferenceEscape = props.hideOnReferenceEscape,
      _props$boundaryElemen = props.boundaryElement,
      boundaryElement = _props$boundaryElemen === void 0 ? document.body : _props$boundaryElemen,
      name = props.name,
      rest = _objectWithoutProperties(props, _excluded$y);

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
  var classes = classnames(_defineProperty$1({
    Popover: true
  }, 'Popover--dark', dark), className);
  var PopoverWrapper = /*#__PURE__*/React.createElement("div", {
    "data-test": "DesignSystem-Popover",
    className: classes,
    "data-layer": true,
    "data-opened": open,
    "data-name": name
  }, children);
  return /*#__PURE__*/React.createElement(PopperWrapper, _extends$2({}, rest, {
    init: init,
    boundaryElement: 'current' in boundaryElement ? boundaryElement.current : boundaryElement,
    open: open,
    hide: hideOnReferenceEscape,
    style: customStyle,
    onToggle: onToggle || defaultOnToggle,
    placement: position
  }), PopoverWrapper);
};
Popover.displayName = 'Popover';
Popover.defaultProps = Object.assign({}, filterProps(PopperWrapper.defaultProps, propsList, true), {
  offset: 'large',
  position: 'bottom',
  hideOnReferenceEscape: true,
  customStyle: {}
});

var _excluded$x = ["type", "onClick"];
var keyCodes$1 = {
  BACKSPACE: 'Backspace',
  DELETE: 'Delete',
  ENTER: 'Enter'
};
var ChipInput = function ChipInput(props) {
  var _classNames, _classNames2;

  var chipOptions = props.chipOptions,
      allowDuplicates = props.allowDuplicates,
      disabled = props.disabled,
      error = props.error,
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
  var ChipInputBorderClass = classnames((_classNames = {}, _defineProperty$1(_classNames, 'ChipInput-border', true), _defineProperty$1(_classNames, 'ChipInput-border--error', error), _classNames));
  var ChipInputClass = classnames((_classNames2 = {
    ChipInput: true
  }, _defineProperty$1(_classNames2, 'ChipInput--disabled', disabled), _defineProperty$1(_classNames2, 'ChipInput--withChips', chips && chips.length > 0), _defineProperty$1(_classNames2, 'ChipInput--error', error), _classNames2), className);

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
    var chip = inputValue.trim();

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
      case keyCodes$1.DELETE:
      case keyCodes$1.BACKSPACE:
        if (inputValue === '' && chipsLength > 0) {
          onChipDeleteHandler(chipsLength - 1);
        }

        break;

      case keyCodes$1.ENTER:
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
        rest = _objectWithoutProperties(chipOptions, _excluded$x);

    return /*#__PURE__*/React.createElement(Chip, _extends$2({
      "data-test": "DesignSystem-ChipInput--Chip",
      label: chip,
      name: chip,
      type: type,
      disabled: disabled,
      key: index,
      className: "my-3 mx-2",
      onClick: function onClick() {
        return _onClick && _onClick(chip, index);
      },
      onClose: function onClose() {
        return onChipDeleteHandler(index);
      }
    }, rest));
  });
  return (
    /*#__PURE__*/

    /* TODO(a11y): fix accessibility  */

    /* eslint-disable  */
    React.createElement("div", {
      "data-test": "DesignSystem-ChipInput--Border",
      className: ChipInputBorderClass
    }, /*#__PURE__*/React.createElement("div", _extends$2({
      "data-test": "DesignSystem-ChipInput"
    }, baseProps, {
      className: ChipInputClass,
      onClick: onClickHandler,
      tabIndex: disabled ? -1 : 0
    }), /*#__PURE__*/React.createElement("div", {
      className: "ChipInput-wrapper"
    }, chips && chips.length > 0 && chipComponents, /*#__PURE__*/React.createElement("input", {
      "data-test": "DesignSystem-ChipInput--Input",
      ref: inputRef,
      className: "ChipInput-input",
      autoFocus: autoFocus,
      placeholder: chips && chips.length > 0 ? '' : placeholder,
      disabled: disabled,
      value: inputValue,
      onBlur: onBlur,
      onFocus: onFocus,
      onChange: onInputChangeHandler,
      onKeyDown: onKeyDownHandler
    })), chips.length > 0 && /*#__PURE__*/React.createElement(Icon, {
      "data-test": "DesignSystem-ChipInput--Icon",
      name: "close",
      appearance: disabled ? 'disabled' : 'subtle',
      className: "ChipInput-icon",
      onClick: onDeleteAllHandler,
      tabIndex: disabled ? -1 : 0
    })))
  );
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
  return disabled ? 'disabled' : isActive ? 'primary_dark' : 'default';
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
var getExpandedMenus = function getExpandedMenus(menus, active) {
  var expandedMenus = {};
  var activeMenu = active ? getMenu(menus, active) : null;

  var _iterator2 = _createForOfIteratorHelper(menus),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var menu = _step2.value;
      // Determine if the current menu is active or should be expanded by default
      var isActiveOrExpanded = (activeMenu === null || activeMenu === void 0 ? void 0 : activeMenu.name.split('.')[0]) === menu.name || menu.expanded;

      if (menu.subMenu) {
        expandedMenus[menu.name] = !!isActiveOrExpanded;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return expandedMenus;
};
var isMenuActive = function isMenuActive(menus, menu, active) {
  if (active) {
    var currActiveMenu = getMenu(menus, active);
    return !!currActiveMenu && (currActiveMenu === menu || currActiveMenu.name.split('.')[0] === menu.name || currActiveMenu.name === menu.name || !!currActiveMenu.link && currActiveMenu.link === menu.link);
  }

  return false;
};
var getNavItemColor = function getNavItemColor(isActive, disabled) {
  return disabled ? 'inverse-lightest' : isActive ? 'primary-dark' : 'inverse';
};

var _MenuIcon = function MenuIcon(props) {
  var isChildrenVisible = props.isChildrenVisible;
  return /*#__PURE__*/React.createElement(Icon, {
    className: "mx-4",
    name: isChildrenVisible ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
  });
};

var _MenuPills = function MenuPills(props) {
  var _classNames;

  var disabled = props.disabled,
      isActive = props.isActive,
      count = props.count;
  var PillsClass = classnames((_classNames = {}, _defineProperty$1(_classNames, 'MenuItem-count', true), _defineProperty$1(_classNames, 'MenuItem-count--disabled', disabled), _classNames));
  return /*#__PURE__*/React.createElement(Pills, {
    subtle: disabled,
    className: PillsClass,
    appearance: getPillsAppearance(isActive),
    "data-test": "DesignSystem-VerticalNav--Pills"
  }, count);
};

var MenuItem$1 = function MenuItem(props) {
  var _classNames2;

  var menu = props.menu,
      isActive = props.isActive,
      expanded = props.expanded,
      rounded = props.rounded,
      hasSubmenu = props.hasSubmenu,
      isChildren = props.isChildren,
      isChildrenVisible = props.isChildrenVisible,
      onClick = props.onClick,
      customItemRenderer = props.customItemRenderer;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isTextTruncated = _React$useState2[0],
      setIsTextTruncated = _React$useState2[1];

  var _Tooltip$useAutoToolt = Tooltip.useAutoTooltip(),
      detectTruncation = _Tooltip$useAutoToolt.detectTruncation;

  var contentRef = /*#__PURE__*/React.createRef();
  React.useEffect(function () {
    var isTruncated = detectTruncation(contentRef);
    setIsTextTruncated(isTruncated);
  }, [contentRef]);

  var _MenuLabel = function MenuLabel(props) {
    var label = props.label,
        labelColor = props.labelColor;
    return /*#__PURE__*/React.createElement(Text, {
      "data-test": "DesignSystem-VerticalNav--Text",
      ref: contentRef,
      color: labelColor,
      className: "MenuItem-Text MenuItem--overflow ".concat(hasSubmenu || menu.count !== undefined ? '' : 'mr-5')
    }, label);
  };

  var onClickHandler = function onClickHandler(ev) {
    ev.preventDefault();
    if (onClick) onClick(menu);
  };

  var baseProps = _objectSpread2({
    onClick: onClickHandler,
    href: menu.link,
    tabIndex: 0
  }, extractBaseProps(props));

  var itemColor = getNavItemColor(isActive, menu.disabled);
  var ItemClass = classnames((_classNames2 = {}, _defineProperty$1(_classNames2, 'MenuItem', true), _defineProperty$1(_classNames2, 'MenuItem--vertical', true), _defineProperty$1(_classNames2, 'MenuItem--collapsed', !expanded), _defineProperty$1(_classNames2, 'MenuItem--expanded', expanded), _defineProperty$1(_classNames2, 'MenuItem--active', isActive), _defineProperty$1(_classNames2, 'MenuItem--disabled', menu.disabled), _defineProperty$1(_classNames2, 'MenuItem--subMenu', isChildren && expanded), _defineProperty$1(_classNames2, 'MenuItem--rounded', rounded && expanded), _defineProperty$1(_classNames2, "color-".concat(itemColor), true), _classNames2));

  var renderSubMenu = function renderSubMenu() {
    if (hasSubmenu) {
      return /*#__PURE__*/React.createElement(_MenuIcon, {
        isChildrenVisible: isChildrenVisible
      });
    }

    if (menu.count !== undefined) {
      var count = menu.count > 99 ? '99+' : menu.count;
      return /*#__PURE__*/React.createElement(_MenuPills, {
        disabled: menu.disabled,
        isActive: isActive,
        count: count
      });
    }

    return null;
  };

  if (!expanded && !menu.icon) return null;

  var customItemProps = _objectSpread2(_objectSpread2({}, props), {}, {
    contentRef: contentRef,
    MenuIcon: function MenuIcon() {
      return _MenuIcon({
        isChildrenVisible: isChildrenVisible
      });
    },
    MenuLabel: function MenuLabel() {
      return _MenuLabel({
        label: menu.label,
        labelColor: itemColor
      });
    },
    MenuPills: function MenuPills() {
      return menu.count !== undefined ? _MenuPills({
        disabled: menu.disabled,
        isActive: isActive,
        count: menu.count
      }) : /*#__PURE__*/React.createElement(React.Fragment, null);
    }
  });

  return customItemRenderer ? customItemRenderer(customItemProps) :
  /*#__PURE__*/
  // TODO(a11y)
  // eslint-disable-next-line
  React.createElement(Tooltip, {
    showTooltip: expanded ? isTextTruncated : true,
    tooltip: menu.label,
    position: "right"
  }, /*#__PURE__*/React.createElement(Link$1, _extends$2({
    componentType: "a",
    className: ItemClass
  }, baseProps), /*#__PURE__*/React.createElement("div", {
    className: "d-flex align-items-center overflow-hidden"
  }, menu.icon && /*#__PURE__*/React.createElement(Icon, {
    "data-test": "DesignSystem-VerticalNav--Icon",
    className: expanded ? 'mr-4' : '',
    name: menu.icon,
    type: menu.iconType
  }), expanded && /*#__PURE__*/React.createElement(_MenuLabel, {
    label: menu.label,
    labelColor: itemColor
  })), expanded && renderSubMenu()));
};
MenuItem$1.defaultProps = {
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
      className = props.className,
      customItemRenderer = props.customItemRenderer;

  var _React$useState = React.useState({}),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      subMenuExpandedState = _React$useState2[0],
      setSubMenuExpandedState = _React$useState2[1];

  var _React$useState3 = React.useState({}),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      menuState = _React$useState4[0],
      setMenuState = _React$useState4[1];

  var baseProps = extractBaseProps(props);
  React.useEffect(function () {
    if (props.active) {
      var currMenu = getMenu(menus, props.active);
      if (currMenu) updateMenuState(currMenu, true);
    }
  }, [props.active]);
  React.useEffect(function () {
    var expandedMenus = getExpandedMenus(menus, active);
    setSubMenuExpandedState(expandedMenus);
  }, []);

  var updateMenuState = function updateMenuState(menu, val) {
    var currMenu = getMenu(menus, menu);

    if (currMenu) {
      var nameSplit = currMenu.name.split('.');

      if (nameSplit.length > 1 || currMenu.subMenu) {
        var name = nameSplit[0];

        if (autoCollapse) {
          setMenuState(_defineProperty$1({}, name, val || !menuState[name]));
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
        if (!subMenuExpandedState[menu.name]) {
          updateMenuState(menu);
        }

        setMenuState(_objectSpread2(_objectSpread2({}, menuState), {}, _defineProperty$1({}, menu.name, false)));
        setSubMenuExpandedState(_objectSpread2(_objectSpread2({}, subMenuExpandedState), {}, _defineProperty$1({}, menu.name, !subMenuExpandedState[menu.name])));
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
      var isChildrenVisible = hasSubmenu && (menuState[menu.name] || subMenuExpandedState[menu.name]);
      var hasGroup = index === 0 || menus[index - 1].group !== menu.group;
      var sectionClass = classnames((_classNames = {}, _defineProperty$1(_classNames, 'VerticalNav-section', true), _defineProperty$1(_classNames, 'VerticalNav-section--border', index !== 0), _classNames));
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: index
      }, hasGroup && menu.group && expanded && /*#__PURE__*/React.createElement("div", {
        className: sectionClass
      }, /*#__PURE__*/React.createElement(Text, {
        "data-test": "DesignSystem-VerticalNav--Section",
        size: "small",
        weight: "strong",
        appearance: "subtle"
      }, menu.group)), /*#__PURE__*/React.createElement(MenuItem$1, {
        "data-test": "DesignSystem-VerticalNav--Item",
        menu: menu,
        expanded: expanded,
        isActive: isActive,
        hasSubmenu: hasSubmenu,
        isChildren: false,
        rounded: rounded,
        isChildrenVisible: isChildrenVisible,
        onClick: onClickHandler,
        customItemRenderer: customItemRenderer
      }), isChildrenVisible && menu.subMenu.map(function (subMenu, id) {
        return /*#__PURE__*/React.createElement(MenuItem$1, {
          key: id,
          menu: subMenu,
          expanded: expanded,
          hasSubmenu: false,
          isChildren: true,
          rounded: rounded,
          onClick: onClickHandler,
          isActive: isMenuActive(menus, subMenu, active),
          customItemRenderer: customItemRenderer
        });
      }));
    });
    return list;
  };

  var classes = classnames(_defineProperty$1({
    VerticalNav: true
  }, 'VerticalNav--expanded', expanded), className);
  return /*#__PURE__*/React.createElement("div", _extends$2({}, baseProps, {
    className: classes
  }), renderList());
};
VerticalNav.defaultProps = {
  expanded: true,
  autoCollapse: true,
  rounded: false,
  showTooltip: false
};

var HorizontalNav = function HorizontalNav(props) {
  var menus = props.menus,
      active = props.active,
      onClick = props.onClick,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var classes = classnames(_defineProperty$1({}, 'HorizontalNav', true), className);

  var onClickHandler = function onClickHandler(menu) {
    return function () {
      if (onClick) onClick(menu);
    };
  };

  var getPillsClass = function getPillsClass(disabled) {
    var _classNames2;

    return classnames((_classNames2 = {}, _defineProperty$1(_classNames2, 'HorizontalNav-pills', true), _defineProperty$1(_classNames2, 'HorizontalNav-pills--disabled', disabled), _defineProperty$1(_classNames2, 'HorizontalNav-animate', true), _classNames2));
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
        className: "mr-3 HorizontalNav-animate",
        name: menu.icon,
        type: menu.iconType,
        "data-test": "DesignSystem-HorizontalNav--Icon"
      });
    }

    return null;
  };

  var onKeyDownHandler = function onKeyDownHandler(event, menu) {
    if (event.key === 'Enter' && onClick) {
      onClick(menu);
    }
  };

  var list = menus.map(function (menu, index) {
    var _classNames3;

    var isActive = isMenuActive(menus, menu, active);
    var itemColor = getNavItemColor(isActive, menu.disabled);
    var menuClasses = classnames((_classNames3 = {
      'HorizontalNav-menu': true,
      'HorizontalNav-menu--default': !isActive && !menu.disabled
    }, _defineProperty$1(_classNames3, 'HorizontalNav-menu--active', isActive), _defineProperty$1(_classNames3, 'HorizontalNav-menu--disabled', menu.disabled), _defineProperty$1(_classNames3, "HorizontalNav-animate", true), _defineProperty$1(_classNames3, "color-".concat(itemColor), true), _classNames3));
    return (
      /*#__PURE__*/
      // TODO(a11y)
      // eslint-disable-next-line
      React.createElement("div", {
        tabIndex: 0,
        "data-test": "DesignSystem-HorizontalNav",
        key: index,
        className: menuClasses,
        onClick: onClickHandler(menu),
        onKeyDown: function onKeyDown(e) {
          return onKeyDownHandler(e, menu);
        },
        role: "button"
      }, renderIcon(menu, isActive), /*#__PURE__*/React.createElement(Text, {
        color: itemColor,
        weight: "medium",
        "data-test": "DesignSystem-HorizontalNav--Text",
        className: "HorizontalNav-menuText HorizontalNav-animate"
      }, menu.label))
    );
  });
  return /*#__PURE__*/React.createElement("div", _extends$2({}, baseProps, {
    className: classes
  }), list);
};

var _excluded$w = ["children", "tooltip", "showTooltip", "showOnTruncation", "elementRef"];
var tooltipPropsList = ['trigger', 'on', 'open', 'offset', 'onToggle', 'dark', 'customStyle', 'closeOnBackdropClick', 'hideOnReferenceEscape', 'closeOnScroll'];
var positionValue = {
  bottom: 'bottom',
  top: 'top',
  'top-start': 'top',
  'top-end': 'top',
  'bottom-start': 'bottom',
  'bottom-end': 'bottom',
  left: 'left',
  right: 'right'
};
var detectTruncation = function detectTruncation(boundaryRef) {
  var element = boundaryRef === null || boundaryRef === void 0 ? void 0 : boundaryRef.current;
  var isTruncated = element ? element.scrollWidth > element.clientWidth : false;
  return isTruncated;
};
var Tooltip = function Tooltip(props) {
  var children = props.children,
      tooltip = props.tooltip,
      showTooltip = props.showTooltip,
      showOnTruncation = props.showOnTruncation,
      elementRef = props.elementRef,
      rest = _objectWithoutProperties(props, _excluded$w);

  var childrenRef = React.useRef(null);

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isTruncated = _React$useState2[0],
      setIsTruncated = _React$useState2[1];

  React.useEffect(function () {
    var element = elementRef ? elementRef : childrenRef;
    setIsTruncated(detectTruncation(element));
  }, [childrenRef, elementRef, children]);
  var renderChildren = elementRef || ! /*#__PURE__*/React.isValidElement(children) ? children : /*#__PURE__*/React.cloneElement(children, {
    ref: childrenRef
  });

  if (!showTooltip) {
    // If showTooltip is false skip the Popover and return the children directly
    return children;
  }

  var tooltipWrapper = /*#__PURE__*/React.createElement("div", {
    className: "Tooltip"
  }, /*#__PURE__*/React.createElement(Text, {
    className: "Tooltip-text",
    appearance: "white"
  }, tooltip));

  if (showOnTruncation) {
    return isTruncated ? /*#__PURE__*/React.createElement(Popover, _extends$2({
      trigger: renderChildren,
      on: 'hover',
      offset: 'medium'
    }, rest, {
      animationClass: {
        open: "Tooltip-animation-open-".concat(positionValue[props.position]),
        close: "Tooltip-animation-close-".concat(positionValue[props.position])
      },
      className: "Tooltip-container"
    }), tooltipWrapper) : renderChildren;
  }

  return /*#__PURE__*/React.createElement(Popover, _extends$2({
    trigger: children,
    on: 'hover',
    offset: 'medium'
  }, rest, {
    animationClass: {
      open: "Tooltip-animation-open-".concat(positionValue[props.position]),
      close: "Tooltip-animation-close-".concat(positionValue[props.position])
    },
    className: "Tooltip-container"
  }), tooltipWrapper);
};

Tooltip.useAutoTooltip = function () {
  return {
    detectTruncation: detectTruncation
  };
};

Tooltip.defaultProps = Object.assign({}, filterProps(Popover.defaultProps, tooltipPropsList), {
  hoverable: false,
  showTooltip: true,
  showOnTruncation: false
});

/**
 *
 * Dialog component has been deprecated, please use [Modal](https://mds.innovaccer.com/?path=/docs/components-modal-modal-all--all) component instead.
 *
 */
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
  return /*#__PURE__*/React.createElement(Modal, _extends$2({
    "data-test": "DesignSystem-Dialog"
  }, baseProps, {
    open: open,
    dimension: dimension,
    onClose: onClose,
    headerOptions: {
      heading: heading
    },
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      type: "button",
      "data-test": "DesignSystem-Dialog--SecondaryButton",
      appearance: secondaryButtonAppearance,
      onClick: secondaryButtonCallback
    }, secondaryButtonLabel), /*#__PURE__*/React.createElement(Button, {
      type: "button",
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

var _excluded$v = ["label"];
var OverlayFooter = function OverlayFooter(props) {
  var open = props.open,
      className = props.className,
      children = props.children,
      actions = props.actions;
  var baseProps = extractBaseProps(props);
  var classes = classnames({
    OverlayFooter: true
  }, className);
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

  if (actions) {
    return /*#__PURE__*/React.createElement("div", _extends$2({
      ref: wrapperRef
    }, baseProps, {
      className: classes
    }), actions.map(function (_ref, index) {
      _ref.label;
          var options = _objectWithoutProperties(_ref, _excluded$v);

      return /*#__PURE__*/React.createElement(Button, _extends$2({
        type: "button"
      }, options, {
        key: index
      }));
    }));
  }

  return /*#__PURE__*/React.createElement("div", _extends$2({
    "data-test": "DesignSystem-OverlayFooter",
    ref: wrapperRef
  }, baseProps, {
    className: classes
  }), children);
};
OverlayFooter.displayName = 'OverlayFooter';

var OverlayHeader = function OverlayHeader(props) {
  var _classNames2;

  var className = props.className,
      heading = props.heading,
      subHeading = props.subHeading,
      backButton = props.backButton,
      backIcon = props.backIcon,
      backIconCallback = props.backIconCallback,
      backButtonCallback = props.backButtonCallback,
      headingClass = props.headingClass;
  var baseProps = extractBaseProps(props);
  var classes = classnames(_defineProperty$1({
    OverlayHeader: true
  }, 'OverlayHeader--withBackButton', backButton || backIcon), className);
  var subheadingClass = classnames((_classNames2 = {}, _defineProperty$1(_classNames2, 'OverlayHeader-subheading', true), _defineProperty$1(_classNames2, 'OverlayHeader-subheading--withBackButton', backButton || backIcon), _classNames2));
  return /*#__PURE__*/React.createElement("div", _extends$2({
    "data-test": "DesignSystem-OverlayHeader"
  }, baseProps, {
    className: classes
  }), /*#__PURE__*/React.createElement("div", {
    className: "OverlayHeader-headerWrapper"
  }, (backButton || backIcon) && /*#__PURE__*/React.createElement(Button, {
    "data-test": "DesignSystem-OverlayHeader--Button",
    appearance: "transparent",
    className: "mr-4",
    icon: "arrow_back",
    largeIcon: true,
    onClick: backButtonCallback || backIconCallback
  }), heading && /*#__PURE__*/React.createElement(Heading, {
    className: headingClass,
    "data-test": "DesignSystem-OverlayHeader--heading"
  }, heading)), subHeading && /*#__PURE__*/React.createElement(Text, {
    "data-test": "DesignSystem-OverlayHeader--Subheading",
    appearance: "subtle",
    className: subheadingClass
  }, subHeading));
};
OverlayHeader.displayName = 'OverlayHeader';

var OverlayBody = function OverlayBody(props) {
  var children = props.children,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var classes = classnames({
    OverlayBody: true
  }, className);
  return /*#__PURE__*/React.createElement("div", _extends$2({
    "data-test": "DesignSystem-OverlayBody"
  }, baseProps, {
    className: classes
  }), children);
};
OverlayBody.defaultProps = {
  stickFooter: true,
  withFooter: true
};
OverlayBody.displayName = 'OverlayBody';

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
}; // keyboard event, boolean?, (event: Event) => void

var closeOnEscapeKeypress = function closeOnEscapeKeypress(event, isTopOverlay, onClose) {
  if (event.key === 'Escape' && isTopOverlay) {
    onClose(event); // prevent browser-specific escape key behavior (Safari exits fullscreen)

    event.preventDefault();
  }
};

var OverlayManager = /*#__PURE__*/function () {
  function OverlayManager() {
    _classCallCheck(this, OverlayManager);

    _defineProperty$1(this, "overlays", void 0);

    this.overlays = [];
  }

  _createClass(OverlayManager, [{
    key: "add",
    value: function add(overlay) {
      if (overlay === null) return;
      var overlayIdx = this.overlays.indexOf(overlay);

      if (overlayIdx !== -1) {
        return overlayIdx;
      }

      overlayIdx = this.overlays.length;
      this.overlays.push(overlay);
      return overlayIdx;
    }
  }, {
    key: "remove",
    value: function remove(overlay) {
      if (overlay === null) return;
      var overlayIdx = this.overlays.indexOf(overlay);

      if (overlayIdx === -1) {
        return;
      }

      this.overlays.splice(overlayIdx, 1);
    }
  }, {
    key: "isTopOverlay",
    value: function isTopOverlay(overlay) {
      if (overlay === null) return;
      return !!this.overlays.length && this.overlays[this.overlays.length - 1] === overlay;
    }
  }]);

  return OverlayManager;
}();

var instance = new OverlayManager();
Object.freeze(instance);

/**
 * ** NOTE: Use `headerOptions`, `header`, `footerOptions`, `footer`, `onClose` and `backdropClose`(boolean). **
 * ** Support for composition using `ModalHeader`, `ModalBody` and `ModalFooter` will be deprecated soon. **
 */
var Modal = /*#__PURE__*/function (_React$Component) {
  _inherits(Modal, _React$Component);

  var _super = _createSuper(Modal);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _super.call(this, props);

    _defineProperty$1(_assertThisInitialized$1(_this), "modalRef", /*#__PURE__*/React.createRef());

    _defineProperty$1(_assertThisInitialized$1(_this), "element", void 0);

    _defineProperty$1(_assertThisInitialized$1(_this), "onCloseHandler", function (event) {
      var isTopOverlay = instance.isTopOverlay(_this.modalRef.current);
      closeOnEscapeKeypress(event, isTopOverlay, _this.onOutsideClickHandler);
    });

    _this.element = getWrapperElement();
    _this.state = {
      open: props.open,
      animate: props.open
    };
    _this.onOutsideClickHandler = _this.onOutsideClickHandler.bind(_assertThisInitialized$1(_this));
    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.closeOnEscape) {
        if (this.state.open) {
          instance.add(this.modalRef.current);
        }

        document.addEventListener('keydown', this.onCloseHandler);
      }

      if (this.props.backdropClose) {
        if (this.state.open) {
          instance.add(this.modalRef.current);
        }
      }

      var zIndex = getUpdatedZIndex({
        element: this.element,
        containerClassName: '.Overlay-container',
        elementRef: this.modalRef
      });
      this.setState({
        zIndex: zIndex
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.closeOnEscape) {
        document.removeEventListener('keydown', this.onCloseHandler);
      }
    }
  }, {
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
          if (this.props.closeOnEscape || this.props.backdropClose) instance.add(this.modalRef.current);
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
          if (this.props.closeOnEscape || this.props.backdropClose) instance.remove(this.modalRef.current);
        }
      }
    }
  }, {
    key: "onOutsideClickHandler",
    value: function onOutsideClickHandler(event) {
      var _this$props = this.props,
          closeOnEscape = _this$props.closeOnEscape,
          backdropClose = _this$props.backdropClose,
          onClose = _this$props.onClose;
      var open = this.state.open;

      if (open && instance.isTopOverlay(this.modalRef.current)) {
        if (closeOnEscape || backdropClose) instance.remove(this.modalRef.current);
        if (onClose) onClose(event, 'OutsideClick');else if (typeof backdropClose === 'function') backdropClose(event, 'OutsideClick');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames, _classNames2, _classNames3, _classNames4;

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
          header = _this$props2.header,
          footerOptions = _this$props2.footerOptions,
          seperator = _this$props2.seperator,
          footer = _this$props2.footer,
          onClose = _this$props2.onClose;
      var BackdropZIndex = zIndex ? zIndex - 1 : 1000;
      var classes = classnames({
        Modal: true,
        'Modal--open': open,
        'Modal-animation--open': animate,
        'Modal-animation--close': !animate
      }, className);
      var headerClass = classnames((_classNames = {}, _defineProperty$1(_classNames, 'Modal-header', true), _defineProperty$1(_classNames, 'Modal-header--withSeperator', seperator), _classNames));
      var footerClass = classnames((_classNames2 = {}, _defineProperty$1(_classNames2, 'Modal-footer', true), _defineProperty$1(_classNames2, 'Modal-footer--withSeperator', seperator), _classNames2));
      var ContainerClass = classnames((_classNames3 = {}, _defineProperty$1(_classNames3, 'Row', true), _defineProperty$1(_classNames3, 'Overlay-container', true), _defineProperty$1(_classNames3, 'Overlay-container--open', open), _classNames3));
      var isAPINew = headerOptions || footerOptions || footer || header;
      var bodyClass = classnames((_classNames4 = {}, _defineProperty$1(_classNames4, 'Modal-body', true), _defineProperty$1(_classNames4, 'Modal-body--withMargin', isAPINew ? !!footer : true), _defineProperty$1(_classNames4, 'Modal-body--withPadding', isAPINew ? !footer : true), _classNames4));
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
        "data-opened": open,
        style: {
          zIndex: zIndex ? zIndex : 1001
        }
      }, /*#__PURE__*/React.createElement(Column, _extends$2({
        "data-test": "DesignSystem-Modal"
      }, baseProps, {
        className: classes
      }, sizeMap[dimension], {
        ref: this.modalRef
      }), (headerOptions || header) && /*#__PURE__*/React.createElement("div", {
        className: headerClass
      }, /*#__PURE__*/React.createElement(Column, null, !header && /*#__PURE__*/React.createElement(OverlayHeader, _extends$2({
        "data-test": "DesignSystem-Modal--header"
      }, headerOptions)), !!header && header), /*#__PURE__*/React.createElement(Column, {
        className: "flex-grow-0"
      }, /*#__PURE__*/React.createElement(Tooltip, {
        tooltip: "Close",
        position: "bottom"
      }, /*#__PURE__*/React.createElement(Button, {
        icon: "close",
        appearance: "transparent",
        "data-test": "DesignSystem-Modal--CloseButton",
        onClick: function onClick(event) {
          if (onClose) onClose(event, 'IconClick');
        }
      })))), open && children && /*#__PURE__*/React.createElement(React.Fragment, null, headerOptions || footerOptions || footer || header ? /*#__PURE__*/React.createElement(OverlayBody, {
        className: bodyClass
      }, this.props.children) : children), (!!footer || !!footerOptions) && /*#__PURE__*/React.createElement(OverlayFooter, _extends$2({
        "data-test": "DesignSystem-Modal--footer"
      }, footerOptions, {
        open: open,
        className: footerClass
      }), footer)));
      var ModalWrapper = backdropClose ? /*#__PURE__*/React.createElement(OutsideClick, {
        ref: this.modalRef,
        "data-test": "DesignSystem-Modal--OutsideClick",
        onOutsideClick: this.onOutsideClickHandler
      }, ModalContainer) : ModalContainer;
      var WrapperElement = /*#__PURE__*/ReactDOM.createPortal(ModalWrapper, this.element);
      return /*#__PURE__*/React.createElement(React.Fragment, null, WrapperElement, /*#__PURE__*/React.createElement(Backdrop, {
        open: this.state.animate,
        zIndex: BackdropZIndex
      }));
    }
  }]);

  return Modal;
}(React.Component);

_defineProperty$1(Modal, "defaultProps", {
  dimension: 'medium'
});

var ModalHeader = function ModalHeader(props) {
  var className = props.className,
      heading = props.heading,
      subHeading = props.subHeading,
      onClose = props.onClose,
      seperator = props.seperator,
      backIcon = props.backIcon,
      backIconCallback = props.backIconCallback;
  var baseProps = extractBaseProps(props);
  var classes = classnames(_defineProperty$1({
    'Modal-header': true
  }, 'Modal-header--withSeperator', seperator), className);
  return /*#__PURE__*/React.createElement("div", _extends$2({}, baseProps, {
    className: classes
  }), /*#__PURE__*/React.createElement(Column, null, /*#__PURE__*/React.createElement(OverlayHeader, {
    heading: heading,
    subHeading: subHeading,
    backButton: backIcon,
    backButtonCallback: backIconCallback
  })), /*#__PURE__*/React.createElement(Column, {
    className: "flex-grow-0"
  }, /*#__PURE__*/React.createElement(Button, {
    icon: "close",
    appearance: "transparent",
    "data-test": "DesignSystem-Modal--CloseButton",
    onClick: function onClick(event) {
      if (onClose) onClose(event, 'IconClick');
    }
  })));
};
ModalHeader.displayName = 'ModalHeader';

var ModalBody = function ModalBody(props) {
  var children = props.children,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var classes = classnames({
    'Modal-body': true,
    'Modal-body--withMargin': true
  }, className);
  return /*#__PURE__*/React.createElement(OverlayBody, _extends$2({}, baseProps, {
    stickFooter: true,
    className: classes
  }), children);
};
ModalBody.defaultProps = {
  stickFooter: true,
  withFooter: true
};
ModalBody.displayName = 'ModalBody';

var ModalFooter = function ModalFooter(props) {
  var _classNames;

  var open = props.open,
      children = props.children,
      className = props.className,
      seperator = props.seperator;
  var baseProps = extractBaseProps(props);
  var classes = classnames((_classNames = {}, _defineProperty$1(_classNames, 'Modal-footer', true), _defineProperty$1(_classNames, 'Modal-footer--withSeperator', seperator), _classNames), className);
  return /*#__PURE__*/React.createElement(OverlayFooter, _extends$2({}, baseProps, {
    open: open,
    className: classes
  }), children);
};
ModalFooter.displayName = 'ModalFooter';

var FullscreenModal = /*#__PURE__*/function (_React$Component) {
  _inherits(FullscreenModal, _React$Component);

  var _super = _createSuper(FullscreenModal);

  function FullscreenModal(props) {
    var _this;

    _classCallCheck(this, FullscreenModal);

    _this = _super.call(this, props);

    _defineProperty$1(_assertThisInitialized$1(_this), "modalRef", /*#__PURE__*/React.createRef());

    _defineProperty$1(_assertThisInitialized$1(_this), "element", void 0);

    _defineProperty$1(_assertThisInitialized$1(_this), "onOutsideClickHandler", function (event) {
      instance.remove(_this.modalRef.current);

      if (_this.props.onClose) {
        _this.props.onClose(event, 'EscapePress');
      } else {
        _this.setState({
          animate: false
        }, function () {
          window.setTimeout(function () {
            _this.setState({
              open: false
            });
          }, 120);
        });
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onCloseHandler", function (event) {
      var isTopOverlay = instance.isTopOverlay(_this.modalRef.current);
      closeOnEscapeKeypress(event, isTopOverlay, _this.onOutsideClickHandler);
    });

    _this.element = getWrapperElement();
    _this.state = {
      open: props.open,
      animate: props.open
    };
    return _this;
  }

  _createClass(FullscreenModal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.closeOnEscape) {
        if (this.state.open) {
          instance.add(this.modalRef.current);
        }

        document.addEventListener('keydown', this.onCloseHandler);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.closeOnEscape) document.removeEventListener('keydown', this.onCloseHandler);
    }
  }, {
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
          if (this.props.closeOnEscape) instance.add(this.modalRef.current);
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
          if (this.props.closeOnEscape) instance.remove(this.modalRef.current);
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
        'FullscreenModal-animation--open': animate,
        'FullscreenModal-animation--close': !animate
      }, className);
      var ContainerClass = classnames((_classNames = {}, _defineProperty$1(_classNames, 'Overlay-container', true), _defineProperty$1(_classNames, 'Overlay-container--open', open), _classNames));
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
      var ModalContainer = open ? /*#__PURE__*/React.createElement("div", {
        "data-test": "DesignSystem-FullscreenModalContainer",
        className: ContainerClass,
        "data-layer": true,
        style: {
          zIndex: zIndex
        }
      }, /*#__PURE__*/React.createElement("div", _extends$2({
        "data-test": "DesignSystem-FullscreenModal"
      }, baseProps, {
        className: classes,
        ref: this.modalRef
      }), /*#__PURE__*/React.createElement(Row, {
        className: "justify-content-center"
      }, /*#__PURE__*/React.createElement(Column, sizeMap[dimension], /*#__PURE__*/React.createElement(Row, {
        className: "FullscreenModal-header"
      }, /*#__PURE__*/React.createElement(Column, null, !header && /*#__PURE__*/React.createElement(OverlayHeader, _extends$2({
        "data-test": "DesignSystem-FullscreenModal--header"
      }, headerOptions)), !!header && header), /*#__PURE__*/React.createElement(Column, {
        className: "flex-grow-0"
      }, /*#__PURE__*/React.createElement(Tooltip, {
        tooltip: "Close"
      }, /*#__PURE__*/React.createElement(Button, {
        icon: "close",
        appearance: "transparent",
        "data-test": "DesignSystem-FullscreenModal--CloseButton",
        onClick: function onClick(event) {
          if (onClose) onClose(event, 'IconClick');
        }
      })))), /*#__PURE__*/React.createElement(OverlayBody, {
        "data-test": "DesignSystem-FullscreenModal--Body",
        className: "FullscreenModal-body"
      }, children), (!!footer || !!footerOptions) && /*#__PURE__*/React.createElement(OverlayFooter, _extends$2({
        "data-test": "DesignSystem-FullscreenModal--footer"
      }, footerOptions, {
        open: open,
        className: "FullscreenModal-footer"
      }), footer))))) : null;
      var WrapperElement = /*#__PURE__*/ReactDOM.createPortal(ModalContainer, this.element);
      return /*#__PURE__*/React.createElement(React.Fragment, null, WrapperElement);
    }
  }]);

  return FullscreenModal;
}(React.Component);

_defineProperty$1(FullscreenModal, "defaultProps", {
  dimension: 'medium'
});

var sidesheetWidth = {
  regular: '6',
  large: '10'
};

var Sidesheet = /*#__PURE__*/function (_React$Component) {
  _inherits(Sidesheet, _React$Component);

  var _super = _createSuper(Sidesheet);

  function Sidesheet(props) {
    var _this;

    _classCallCheck(this, Sidesheet);

    _this = _super.call(this, props);

    _defineProperty$1(_assertThisInitialized$1(_this), "sidesheetRef", /*#__PURE__*/React.createRef());

    _defineProperty$1(_assertThisInitialized$1(_this), "element", void 0);

    _defineProperty$1(_assertThisInitialized$1(_this), "onCloseHandler", function (event) {
      var isTopOverlay = instance.isTopOverlay(_this.sidesheetRef.current);
      closeOnEscapeKeypress(event, isTopOverlay, _this.onOutsideClickHandler);
    });

    _this.element = getWrapperElement();
    _this.state = {
      open: props.open,
      animate: props.open
    };
    _this.onOutsideClickHandler = _this.onOutsideClickHandler.bind(_assertThisInitialized$1(_this));
    return _this;
  }

  _createClass(Sidesheet, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.closeOnEscape) {
        if (this.state.open) {
          instance.add(this.sidesheetRef.current);
        }

        document.addEventListener('keydown', this.onCloseHandler);
      }

      if (this.props.backdropClose && this.state.open) {
        instance.add(this.sidesheetRef.current);
      }

      var zIndex = getUpdatedZIndex({
        element: this.element,
        containerClassName: '.Overlay-container',
        elementRef: this.sidesheetRef
      });
      this.setState({
        zIndex: zIndex
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.closeOnEscape) {
        document.removeEventListener('keydown', this.onCloseHandler);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
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
          if (this.props.closeOnEscape || this.props.backdropClose) instance.add(this.sidesheetRef.current);
        } else {
          this.setState({
            animate: false
          });
          if (this.props.closeOnEscape || this.props.backdropClose) instance.remove(this.sidesheetRef.current);
        }
      }
    }
  }, {
    key: "onOutsideClickHandler",
    value: function onOutsideClickHandler(event) {
      var _this$props = this.props,
          backdropClose = _this$props.backdropClose,
          closeOnEscape = _this$props.closeOnEscape,
          onClose = _this$props.onClose;
      var open = this.state.open;

      if (open && instance.isTopOverlay(this.sidesheetRef.current)) {
        if (backdropClose || closeOnEscape) instance.remove(this.sidesheetRef.current);
        if (onClose) onClose(event, 'OutsideClick');
      }
    }
  }, {
    key: "handleAnimationEnd",
    value: function handleAnimationEnd() {
      if (!this.state.animate) {
        this.setState({
          open: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames,
          _classNames2,
          _classNames3,
          _classNames4,
          _classNames5,
          _this2 = this;

      var _this$state = this.state,
          animate = _this$state.animate,
          open = _this$state.open,
          zIndex = _this$state.zIndex;
      var _this$props2 = this.props,
          className = _this$props2.className,
          backdropClose = _this$props2.backdropClose,
          dimension = _this$props2.dimension,
          footer = _this$props2.footer,
          seperator = _this$props2.seperator,
          stickFooter = _this$props2.stickFooter,
          headerOptions = _this$props2.headerOptions,
          footerOptions = _this$props2.footerOptions,
          header = _this$props2.header,
          onClose = _this$props2.onClose;
      var BackdropZIndex = zIndex ? zIndex - 1 : 1000;
      var classes = classnames({
        Sidesheet: true,
        'Sidesheet--open': open,
        'Sidesheet-animation--open': animate,
        'Sidesheet-animation--close': !animate
      }, className);
      var ContainerClass = classnames((_classNames = {}, _defineProperty$1(_classNames, 'Overlay-container', true), _defineProperty$1(_classNames, 'fade-in', animate), _defineProperty$1(_classNames, 'Overlay-container--open', animate), _defineProperty$1(_classNames, 'Overlay-container--close', !animate), _classNames));
      var headerClass = classnames((_classNames2 = {}, _defineProperty$1(_classNames2, 'Sidesheet-header', true), _defineProperty$1(_classNames2, 'Sidesheet-header--withSeperator', seperator), _classNames2));
      var footerClass = classnames((_classNames3 = {}, _defineProperty$1(_classNames3, 'Sidesheet-footer', true), _defineProperty$1(_classNames3, 'Sidesheet-footer--withSeperator', seperator), _defineProperty$1(_classNames3, 'Sidesheet-footer--stickToBottom', stickFooter), _classNames3));
      var bodyClass = classnames((_classNames4 = {}, _defineProperty$1(_classNames4, 'Sidesheet-body', true), _defineProperty$1(_classNames4, 'Sidesheet-body--withMargin', !!footer && stickFooter), _defineProperty$1(_classNames4, 'Sidesheet-body--nextPage', (headerOptions === null || headerOptions === void 0 ? void 0 : headerOptions.backButton) || (headerOptions === null || headerOptions === void 0 ? void 0 : headerOptions.backIcon)), _defineProperty$1(_classNames4, 'Sidesheet-body--firstPage', !(headerOptions !== null && headerOptions !== void 0 && headerOptions.backButton) && !(headerOptions !== null && headerOptions !== void 0 && headerOptions.backIcon)), _classNames4));
      var headingClass = classnames((_classNames5 = {}, _defineProperty$1(_classNames5, 'Sidesheet-header--shiftRight', (headerOptions === null || headerOptions === void 0 ? void 0 : headerOptions.backButton) || (headerOptions === null || headerOptions === void 0 ? void 0 : headerOptions.backIcon)), _defineProperty$1(_classNames5, 'Sidesheet-header--shiftLeft', !(headerOptions !== null && headerOptions !== void 0 && headerOptions.backButton) && !(headerOptions !== null && headerOptions !== void 0 && headerOptions.backIcon)), _classNames5));
      var baseProps = extractBaseProps(this.props);
      var SidesheetContainer = /*#__PURE__*/React.createElement(Row, {
        "data-test": "DesignSystem-SidesheetContainer",
        "data-open": this.state.open,
        className: ContainerClass,
        "data-layer": true,
        style: {
          zIndex: zIndex ? zIndex : 1001
        },
        ref: this.sidesheetRef,
        onAnimationEnd: function onAnimationEnd() {
          return _this2.handleAnimationEnd;
        }
      }, /*#__PURE__*/React.createElement(Column, _extends$2({
        "data-test": "DesignSystem-Sidesheet"
      }, baseProps, {
        className: classes,
        size: sidesheetWidth[dimension]
      }), /*#__PURE__*/React.createElement("div", {
        className: headerClass
      }, /*#__PURE__*/React.createElement(Column, {
        "data-test": "DesignSystem-Sidesheet--Header"
      }, !header && /*#__PURE__*/React.createElement(OverlayHeader, _extends$2({
        headingClass: headingClass
      }, headerOptions)), !!header && header), /*#__PURE__*/React.createElement(Column, {
        className: "flex-grow-0"
      }, /*#__PURE__*/React.createElement(Tooltip, {
        tooltip: "Close"
      }, /*#__PURE__*/React.createElement(Button, {
        icon: "close",
        appearance: "transparent",
        "data-test": "DesignSystem-Sidesheet--CloseButton",
        largeIcon: true,
        onClick: function onClick(event) {
          if (onClose) onClose(event, 'IconClick');
        }
      })))), /*#__PURE__*/React.createElement(OverlayBody, {
        "data-test": "DesignSystem-Sidesheet--OverlayBody",
        className: bodyClass
      }, this.props.children), (!!footer || !!footerOptions) && /*#__PURE__*/React.createElement(OverlayFooter, _extends$2({
        "data-test": "DesignSystem-Sidesheet--Footer"
      }, footerOptions, {
        open: open,
        className: footerClass
      }), footer)));
      var SidesheetWrapper = backdropClose ? /*#__PURE__*/React.createElement(OutsideClick, {
        ref: this.sidesheetRef,
        "data-test": "DesignSystem-Sidesheet--OutsideClick",
        onOutsideClick: this.onOutsideClickHandler
      }, SidesheetContainer) : SidesheetContainer;
      var WrapperElement = /*#__PURE__*/ReactDOM.createPortal(SidesheetWrapper, this.element);
      return /*#__PURE__*/React.createElement(React.Fragment, null, WrapperElement, /*#__PURE__*/React.createElement(Backdrop, {
        open: this.state.animate,
        zIndex: BackdropZIndex
      }));
    }
  }]);

  return Sidesheet;
}(React.Component);

_defineProperty$1(Sidesheet, "defaultProps", {
  dimension: 'regular',
  stickFooter: false,
  headerOptions: {}
});

var Collapsible = function Collapsible(props) {
  var _classNames, _classNames2, _classNames3, _classNames4;

  var expanded = props.expanded,
      hoverable = props.hoverable,
      expandedWidth = props.expandedWidth,
      height = props.height,
      children = props.children,
      className = props.className,
      onToggle = props.onToggle,
      withTrigger = props.withTrigger;

  var _React$useState = React.useState(true),
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
  var WrapperClass = classnames((_classNames = {}, _defineProperty$1(_classNames, 'Collapsible-wrapper', true), _defineProperty$1(_classNames, 'Collapsible-wrapper--overlay', !isClicked), _classNames));
  var BodyClass = classnames((_classNames2 = {}, _defineProperty$1(_classNames2, 'Collapsible-body', true), _defineProperty$1(_classNames2, 'overflow-hidden', !expanded && hoverable), _classNames2));
  var classes = classnames((_classNames3 = {
    Collapsible: true
  }, _defineProperty$1(_classNames3, 'Collapsible--overlay', !isClicked), _defineProperty$1(_classNames3, 'Collapsible--shadow', !isClicked && expanded), _classNames3), className);
  var FooterClass = classnames((_classNames4 = {}, _defineProperty$1(_classNames4, 'Collapsible-footer', true), _defineProperty$1(_classNames4, 'Collapsible-footer--seperator', seperator), _classNames4));

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
  }, /*#__PURE__*/React.createElement("div", _extends$2({
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
  }, children), withTrigger && /*#__PURE__*/React.createElement("div", {
    role: "button",
    tabIndex: 0,
    className: FooterClass,
    "data-test": "DesignSystem-Collapsible--Footer",
    onClick: onToggleHandler(!expanded, 'click'),
    onKeyDown: onToggleHandler(!expanded, 'click')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: expanded ? 'keyboard_arrow_left' : 'keyboard_arrow_right',
    "data-test": "DesignSystem-Collapsible--FooterIcon",
    className: "px-6 py-4 my-2 cursor-pointer",
    size: 16
  }))));
};
Collapsible.displayName = 'Collapsible';
Collapsible.defaultProps = {
  expanded: false,
  hoverable: true,
  height: '100%',
  expandedWidth: '240px',
  withTrigger: true
};

var Status$1 = function Status(props) {
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
  var StatusClass = classnames(_defineProperty$1({}, 'd-flex align-items-center mt-3', true), className);
  var TextClass = classnames(_defineProperty$1({}, 'ChatMessage-status', true), className);

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
      return /*#__PURE__*/React.createElement("div", _extends$2({}, baseProps, {
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
      return /*#__PURE__*/React.createElement("div", _extends$2({}, baseProps, {
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
      return /*#__PURE__*/React.createElement("div", _extends$2({}, baseProps, {
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
      return /*#__PURE__*/React.createElement(Text, _extends$2({}, baseProps, {
        appearance: "subtle",
        size: "small",
        className: TextClass
      }), sendingText);

    case 'sent':
      return /*#__PURE__*/React.createElement(React.Fragment, null, time && /*#__PURE__*/React.createElement(Text, _extends$2({}, baseProps, {
        appearance: "subtle",
        size: "small",
        className: TextClass
      }), getTime(time)));

    default:
      return null;
  }
};
Status$1.displayName = 'Status';

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
  var MessageClass = classnames((_classNames = {}, _defineProperty$1(_classNames, 'Box', true), _defineProperty$1(_classNames, "Box--".concat(type), type), _defineProperty$1(_classNames, 'Box--typing', isTyping), _defineProperty$1(_classNames, 'Box--urgent', statusType === 'urgent'), _defineProperty$1(_classNames, "Box-".concat(type, "--withStatus"), withStatus || isTyping), _classNames), className);
  /* TODO(a11y): fix accessibility  */

  /* eslint-disable  */

  return /*#__PURE__*/React.createElement("div", _extends$2({}, baseProps, {
    className: MessageClass,
    onClick: onClick,
    "data-test": "DesignSystem-ChatMessage--Box"
  }), children);
  /* eslint-enable  */
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
    return /*#__PURE__*/React.createElement(Text, _extends$2({}, baseProps, {
      appearance: 'subtle',
      size: 'small',
      className: className
    }), typingText);
  }

  return /*#__PURE__*/React.createElement(Text, _extends$2({}, baseProps, {
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

  return /*#__PURE__*/React.createElement(Box, _extends$2({}, baseProps, {
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
  }), !isTyping && statusOptions && /*#__PURE__*/React.createElement(Status$1, statusOptions));
};
ChatMessage.displayName = 'ChatMessage';

var EmptyStateContext = /*#__PURE__*/React.createContext({});

var _excluded$u = ["children", "maxHeight", "height", "minHeight", "src", "alt", "className"];
var imageHeight$1 = {
  standard: '200px',
  compressed: '150px',
  tight: '100px',
  large: '200px',
  small: '200px'
};

var EmptyStateImage = function EmptyStateImage(props) {
  var _classNames2;

  var children = props.children,
      maxHeight = props.maxHeight,
      height = props.height,
      minHeight = props.minHeight,
      src = props.src,
      alt = props.alt,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$u);

  var contextProp = React__default.useContext(EmptyStateContext);
  var imageClasses = classnames(_defineProperty$1({}, 'EmptyState-image', true), className);
  var imageWrapperClasses = classnames((_classNames2 = {}, _defineProperty$1(_classNames2, 'd-flex', true), _defineProperty$1(_classNames2, 'justify-content-center', true), _classNames2), className);
  var _contextProp$size = contextProp.size,
      size = _contextProp$size === void 0 ? 'standard' : _contextProp$size;
  var sizeStyle = {
    maxHeight: maxHeight !== null && maxHeight !== void 0 ? maxHeight : imageHeight$1[size],
    height: height,
    minHeight: minHeight
  };

  if (children) {
    return /*#__PURE__*/React__default.createElement("div", _extends$2({}, rest, {
      className: imageWrapperClasses,
      style: _objectSpread2({}, sizeStyle)
    }), children);
  }

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, src && /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("img", _extends$2({
    className: imageClasses,
    src: src,
    alt: alt,
    style: _objectSpread2({}, sizeStyle),
    "data-test": "DesignSystem-EmptyState--Img"
  }, rest))));
};

var _excluded$t = ["children", "className"];

var EmptyStateTitle = function EmptyStateTitle(props) {
  var _classNames;

  var children = props.children,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$t);

  var contextProp = React__default.useContext(EmptyStateContext);
  var _contextProp$size = contextProp.size,
      size = _contextProp$size === void 0 ? 'standard' : _contextProp$size;
  var headingClass = classnames((_classNames = {}, _defineProperty$1(_classNames, "EmptyState-text", true), _defineProperty$1(_classNames, "EmptyState-title--".concat(size), true), _classNames), className);

  if (size === 'standard') {
    return /*#__PURE__*/React__default.createElement(Heading, _extends$2({
      "data-test": "DesignSystem-EmptyState--Heading",
      className: headingClass
    }, rest), children);
  }

  return /*#__PURE__*/React__default.createElement(Text, _extends$2({
    "data-test": "DesignSystem-EmptyState--Heading",
    className: headingClass,
    weight: "medium",
    size: textSize[size]
  }, rest), children);
};

var _excluded$s = ["children", "className"];

var EmptyStateDescription = function EmptyStateDescription(props) {
  var _classNames;

  var children = props.children,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$s);

  var contextProp = React__default.useContext(EmptyStateContext);
  var _contextProp$size = contextProp.size,
      size = _contextProp$size === void 0 ? 'standard' : _contextProp$size;
  var textSize = {
    standard: 'regular',
    compressed: 'regular',
    tight: 'small'
  };
  var descriptionClasses = classnames((_classNames = {}, _defineProperty$1(_classNames, "EmptyState-text", true), _defineProperty$1(_classNames, 'mt-3', true), _classNames), className);
  return /*#__PURE__*/React__default.createElement(Text, _extends$2({
    size: textSize[size],
    appearance: "subtle",
    className: descriptionClasses,
    "data-test": "DesignSystem-EmptyState--Text"
  }, rest), children);
};

var _excluded$r = ["children", "className"];

var EmptyStateActions = function EmptyStateActions(props) {
  var _classNames;

  var children = props.children,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$r);

  var contextProp = React__default.useContext(EmptyStateContext);
  var _contextProp$size = contextProp.size,
      size = _contextProp$size === void 0 ? 'standard' : _contextProp$size;
  var actionWrapperClasses = classnames((_classNames = {}, _defineProperty$1(_classNames, "EmptyState-actions--".concat(size), true), _defineProperty$1(_classNames, 'EmptyState-actions', true), _classNames), className);
  return /*#__PURE__*/React__default.createElement("div", _extends$2({
    "data-test": "DesignSystem-EmptyState--Actions",
    className: actionWrapperClasses
  }, rest), children);
};

var imageHeight = {
  large: '256px',
  small: '128px',
  standard: '256px',
  compressed: '256px',
  tight: '256px'
};
var templateWidth = {
  standard: '480px',
  compressed: '400px',
  tight: '320px',
  large: '480px',
  small: '480px'
};
var HeadingSize = {
  large: 'l',
  small: 'm',
  standard: 'l',
  compressed: 'l',
  tight: 'l'
};
var textSize = {
  large: 'large',
  small: 'regular',
  standard: 'large',
  compressed: 'large',
  tight: 'regular'
};
var EmptyState = function EmptyState(props) {
  var _classNames3, _classNames4;

  var imageSrc = props.imageSrc,
      title = props.title,
      description = props.description,
      _props$size = props.size,
      size = _props$size === void 0 ? 'standard' : _props$size,
      children = props.children,
      className = props.className,
      image = props.image,
      maxWidth = props.maxWidth,
      minWidth = props.minWidth,
      width = props.width;
  var baseProps = extractBaseProps(props);
  var templateSize = 'standard';

  var isValidSize = function isValidSize(size) {
    return size === 'large' || size === 'small';
  };

  if (title || description) {
    templateSize = isValidSize(size) ? size : 'large';
  } else {
    templateSize = isValidSize(size) ? 'standard' : size;
  }

  var wrapperClasses = classnames(_defineProperty$1({}, 'EmptyState', true), className);
  var emptyStateWrapper = classnames(_defineProperty$1({}, 'EmptyState-Wrapper', true), className);
  var headingClasses = classnames((_classNames3 = {}, _defineProperty$1(_classNames3, 'EmptyState-title', true), _defineProperty$1(_classNames3, "EmptyState-title--".concat(templateSize), true), _classNames3));
  var textClasses = classnames((_classNames4 = {}, _defineProperty$1(_classNames4, 'EmptyState-description', true), _defineProperty$1(_classNames4, "EmptyState-description--".concat(templateSize), children !== undefined), _classNames4));

  if (title || description) {
    return /*#__PURE__*/React.createElement("div", _extends$2({
      "data-test": "DesignSystem-EmptyState"
    }, baseProps, {
      className: wrapperClasses
    }), image && /*#__PURE__*/React.createElement("div", {
      style: {
        height: imageHeight[templateSize]
      }
    }, image), imageSrc && !image &&
    /*#__PURE__*/
    //TODO(a11y)
    //eslint-disable-next-line
    React.createElement("img", {
      src: imageSrc,
      height: imageHeight[templateSize],
      "data-test": "DesignSystem-EmptyState--Img"
    }), title && /*#__PURE__*/React.createElement(Heading, {
      "data-test": "DesignSystem-EmptyState--Heading",
      size: HeadingSize[templateSize],
      className: headingClasses
    }, title), description && /*#__PURE__*/React.createElement(Text, {
      size: textSize[templateSize],
      className: textClasses,
      appearance: "subtle",
      "data-test": "DesignSystem-EmptyState--Text"
    }, description), children && children);
  }

  var templateMaxWidth = maxWidth ? maxWidth : templateWidth[templateSize];
  var customStyle = {
    maxWidth: templateMaxWidth,
    minWidth: minWidth,
    width: width
  };
  return /*#__PURE__*/React.createElement(EmptyStateContext.Provider, {
    value: {
      size: templateSize,
      maxWidth: templateMaxWidth
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "d-flex justify-content-center align-item-center w-100 h-100"
  }, /*#__PURE__*/React.createElement("div", _extends$2({
    "data-test": "DesignSystem-EmptyState--Wrapper",
    className: emptyStateWrapper,
    style: customStyle
  }, baseProps), children)));
};
EmptyState.displayName = 'EmptyState';
EmptyState.Title = EmptyStateTitle;
EmptyState.Description = EmptyStateDescription;
EmptyState.Image = EmptyStateImage;
EmptyState.Actions = EmptyStateActions;
EmptyState.defaultProps = {
  size: 'standard'
};

var ModalDescription = function ModalDescription(props) {
  var title = props.title,
      description = props.description,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var classes = classnames({
    'Modal-description': true
  }, className);
  return /*#__PURE__*/React.createElement("div", _extends$2({
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
      className = props.className,
      pageJumpDebounceDuration = props.pageJumpDebounceDuration;
  var baseProps = extractBaseProps(props);

  var _React$useState = React.useState(props.page),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      page = _React$useState2[0],
      setPage = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      init = _React$useState4[0],
      setInit = _React$useState4[1];

  var _React$useState5 = React.useState(0),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      debounceCancelCounter = _React$useState6[0],
      setDebounceCancelCounter = _React$useState6[1];

  var debouncePageChange = React.useCallback(debounce$1(pageJumpDebounceDuration, onPageChange), [debounceCancelCounter]);
  React.useEffect(function () {
    setPage(props.page);
  }, [props.page]);
  var wrapperClass = classnames((_classNames = {}, _defineProperty$1(_classNames, 'Pagination', true), _defineProperty$1(_classNames, "Pagination--".concat(type), type), _classNames), className);
  var nextButtonWrapperClass = classnames((_classNames2 = {}, _defineProperty$1(_classNames2, 'Pagination-buttonWrapper', true), _defineProperty$1(_classNames2, 'Pagination-buttonWrapper--next', true), _classNames2));
  var prevButtonWrapperClass = classnames((_classNames3 = {}, _defineProperty$1(_classNames3, 'Pagination-buttonWrapper', true), _defineProperty$1(_classNames3, 'Pagination-buttonWrapper--previous', true), _classNames3));
  React.useEffect(function () {
    if (init) {
      if (page >= 1 && page <= totalPages) {
        debouncePageChange(page);
      } else {
        /**
         * On removing a page number on UI via backspace, debounce malfunctions if page is not within desired range.
         * Hence, we remove the debounce function via cancel method.
         */
        debouncePageChange.cancel();
        /**
         * Since debouncePageChange is cached via React.useCallback,
         * cancel method above removes the single debounce function instance available.
         * To make a new instance available, we have to update the dependency object.
         */

        setDebounceCancelCounter(function (prev) {
          return prev + 1;
        });
      }
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

  var onKeyPressHandler = function onKeyPressHandler(e) {
    if (!isNaturalNumber(e.key)) {
      e.preventDefault();
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

  return /*#__PURE__*/React.createElement("div", _extends$2({
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
    icon: "first_page",
    "data-test": "DesignSystem-Pagination--FirstButton"
  }), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return onClickHandler('prev');
    },
    disabled: page <= 1,
    icon: "navigate_before",
    "data-test": "DesignSystem-Pagination--PrevButton",
    className: "ml-4 mr-3"
  })), type === 'jump' && /*#__PURE__*/React.createElement("div", {
    className: "Pagination-pageIndex"
  }, /*#__PURE__*/React.createElement(MetricInput, {
    name: "page",
    className: "Pagination-MetricInput",
    onChange: inputChangeHandler,
    value: "".concat(isNaturalNumber(page) ? page : ''),
    "data-test": "DesignSystem-Pagination--Input",
    onKeyPress: onKeyPressHandler
  }), /*#__PURE__*/React.createElement(Text, null, " of ".concat(totalPages, " pages"))), /*#__PURE__*/React.createElement("div", {
    className: nextButtonWrapperClass
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return onClickHandler('next');
    },
    disabled: page >= totalPages,
    icon: "navigate_next",
    "data-test": "DesignSystem-Pagination--NextButton",
    className: "mr-4 ml-3"
  }), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return onClickHandler('last');
    },
    disabled: page >= totalPages,
    appearance: "transparent",
    icon: "last_page",
    "data-test": "DesignSystem-Pagination--LastButton"
  })));
};
Pagination.displayName = 'Pagination';
Pagination.defaultProps = {
  type: 'basic',
  page: 1,
  totalPages: 1,
  pageJumpDebounceDuration: 750
};

var _excluded$q = ["onChange"];
var EditableInput = function EditableInput(props) {
  var _classNames2, _classNames4;

  var error = props.error,
      size = props.size,
      errorMessage = props.errorMessage,
      placeholder = props.placeholder,
      inputOptions = props.inputOptions,
      disableSaveAction = props.disableSaveAction,
      onChange = props.onChange,
      className = props.className;

  var onInputChange = inputOptions.onChange,
      rest = _objectWithoutProperties(inputOptions, _excluded$q);

  var _React$useState = React.useState(props.value),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      inputValue = _React$useState2[0],
      setInputValue = _React$useState2[1];

  var _React$useState3 = React.useState(props.value),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      value = _React$useState4[0],
      setValue = _React$useState4[1];

  var _React$useState5 = React.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      editing = _React$useState6[0],
      setEditing = _React$useState6[1];

  var _React$useState7 = React.useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      showComponent = _React$useState8[0],
      setShowComponent = _React$useState8[1];

  var inputRef = /*#__PURE__*/React.createRef();
  var baseProps = extractBaseProps(props);
  var isControlled = props.value !== undefined;
  React.useEffect(function () {
    if (isControlled) setValue(props.value);
  }, [props.value]);
  var EditableInputClass = classnames(_defineProperty$1({}, 'EditableInput', true), className);
  var EditableDefaultClass = classnames((_classNames2 = {}, _defineProperty$1(_classNames2, 'EditableInput-default', true), _defineProperty$1(_classNames2, "EditableInput-default--".concat(size), size), _classNames2));
  var InputClass = classnames(_defineProperty$1({}, 'EditableInput-Input--tiny', size === 'tiny'));
  var ActionClass = classnames((_classNames4 = {}, _defineProperty$1(_classNames4, 'EditableInput-actions', true), _defineProperty$1(_classNames4, "EditableInput-actions--".concat(size), size), _classNames4));

  var setDefaultComponent = function setDefaultComponent(updatedValue) {
    setInputValue(updatedValue);
    setEditing(false);
    setShowComponent(false);
  };

  var onSaveChanges = function onSaveChanges() {
    if (!isControlled) setValue(inputValue);
    if (onChange) onChange(inputValue || '');
    setDefaultComponent(inputValue);
  };

  var onInputChangeHandler = function onInputChangeHandler(e) {
    setInputValue(e.target.value);
    if (onInputChange) onInputChange(e);
  };

  var onChangeHandler = function onChangeHandler(eventType) {
    switch (eventType) {
      case 'edit':
        {
          var _inputRef$current;

          (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
          setEditing(true);
          setShowComponent(true);
          break;
        }

      case 'hover':
        {
          setShowComponent(true);
          break;
        }

      case 'default':
        {
          setShowComponent(false);
        }
    }
  };

  var inputComponent = /*#__PURE__*/React.createElement(Input, _extends$2({
    defaultValue: inputValue,
    placeholder: placeholder,
    className: InputClass // TODO(a11y)
    // eslint-disable-next-line jsx-a11y/no-autofocus
    ,
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
          setDefaultComponent(value);
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
      }, /*#__PURE__*/React.createElement(InlineMessage, {
        appearance: "alert",
        description: errorMessage
      })) : inputComponent;
    }

    return /*#__PURE__*/React.createElement("div", {
      className: EditableDefaultClass,
      "data-test": "DesignSystem-EditableInput--Default"
    }, value || placeholder);
  };

  return (
    /*#__PURE__*/
    // TODO(a11y)
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    React.createElement("div", _extends$2({
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
      largeIcon: true,
      size: "tiny",
      onClick: function onClick() {
        setDefaultComponent(value);
      },
      "data-test": "DesignSystem-EditableInput--Discard"
    }), /*#__PURE__*/React.createElement(Button, {
      icon: "check",
      appearance: "primary",
      largeIcon: true,
      size: "tiny",
      disabled: disableSaveAction,
      onClick: onSaveChanges,
      "data-test": "DesignSystem-EditableInput--Save"
    })))
  );
};
EditableInput.defaultProps = {
  size: 'regular',
  placeholder: '',
  inputOptions: {}
};

var _excluded$p = ["onChange", "chipOptions"],
    _excluded2$2 = ["onClick"];
var EditableChipInput = function EditableChipInput(props) {
  var _classNames3;

  var placeholder = props.placeholder,
      onChange = props.onChange,
      className = props.className,
      disableSaveAction = props.disableSaveAction,
      chipInputOptions = props.chipInputOptions;

  var onChipInputChange = chipInputOptions.onChange,
      _chipInputOptions$chi = chipInputOptions.chipOptions,
      chipOptions = _chipInputOptions$chi === void 0 ? {} : _chipInputOptions$chi,
      rest = _objectWithoutProperties(chipInputOptions, _excluded$p);

  var _onClick = chipOptions.onClick,
      chipObject = _objectWithoutProperties(chipOptions, _excluded2$2);

  var _React$useState = React.useState(props.value),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      inputValue = _React$useState2[0],
      setInputValue = _React$useState2[1];

  var _React$useState3 = React.useState(props.value),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      value = _React$useState4[0],
      setValue = _React$useState4[1];

  var _React$useState5 = React.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      showComponent = _React$useState6[0],
      setShowComponent = _React$useState6[1];

  var baseProps = extractBaseProps(props);
  var isWithChips = inputValue && inputValue.length;
  var isControlled = props.value !== undefined;
  React.useEffect(function () {
    if (isControlled) {
      setInputValue(props.value);
      setValue(props.value);
    }
  }, [props.value]);
  var classes = classnames(_defineProperty$1({}, 'EditableChipInput', true), className);
  var actionClass = classnames(_defineProperty$1({}, 'EditableChipInput-actions', true));
  var defaultClasses = classnames((_classNames3 = {}, _defineProperty$1(_classNames3, 'EditableChipInput-default', !isWithChips), _defineProperty$1(_classNames3, 'EditableChipInput-defaultWithChips', isWithChips), _classNames3));
  var inputClass = classnames(_defineProperty$1({}, 'EditableChipInput-chipInput', true));

  var onChipInputChangeHandler = function onChipInputChangeHandler(val) {
    setInputValue(val);
    if (onChipInputChange) onChipInputChange(val);
  };

  var setDefaultComponent = function setDefaultComponent(updatedValue) {
    setInputValue(updatedValue);
    setShowComponent(false);
  };

  var onSaveChanges = function onSaveChanges() {
    if (!isControlled) setValue(inputValue);
    if (onChange && inputValue) onChange(inputValue);
    setDefaultComponent(inputValue);
  };

  var onChangeHandler = function onChangeHandler(eventType) {
    switch (eventType) {
      case 'edit':
        {
          setShowComponent(true);
          break;
        }

      case 'hover':
        {
          break;
        }

      case 'default':
        {
          setShowComponent(false);
          break;
        }
    }
  };

  var onChipDelete = function onChipDelete(index) {
    if (value) {
      var updatedValue = _toConsumableArray(value);

      updatedValue.splice(index, 1);

      if (!isControlled) {
        setInputValue(updatedValue);
        setValue(updatedValue);
      }

      if (onChange) onChange(updatedValue);
    }
  };

  var renderDefaultState = function renderDefaultState() {
    if (inputValue && inputValue.length) {
      return inputValue.map(function (val, index) {
        return /*#__PURE__*/React.createElement(Chip, _extends$2({
          "data-test": "DesignSystem-EditableChipInput--Chip",
          key: index,
          name: val,
          label: val,
          className: "my-2 mx-2"
        }, chipObject, {
          onClose: function onClose() {
            return onChipDelete(index);
          },
          onClick: function onClick() {
            return _onClick && _onClick(val, index);
          }
        }));
      });
    }

    return /*#__PURE__*/React.createElement(Text, {
      className: "pt-1"
    }, placeholder);
  };

  var renderChildren = function renderChildren() {
    if (showComponent) {
      return /*#__PURE__*/React.createElement("div", {
        "data-test": "DesignSystem-EditableChipInput--wrapper"
      }, /*#__PURE__*/React.createElement(ChipInput, _extends$2({
        "data-test": "DesignSystem-EditableChipInput--ChipInput",
        placeholder: placeholder,
        onChange: onChipInputChangeHandler,
        value: inputValue,
        chipOptions: chipOptions
      }, rest, {
        className: inputClass
      })));
    }

    return /*#__PURE__*/React.createElement("div", {
      className: defaultClasses,
      "data-test": "DesignSystem-EditableChipInput--Default"
    }, renderDefaultState());
  };

  return /*#__PURE__*/React.createElement("div", _extends$2({
    className: classes,
    "data-test": "DesignSystem-EditableChipInput"
  }, baseProps), /*#__PURE__*/React.createElement(Editable, {
    onChange: onChangeHandler,
    editing: showComponent
  }, renderChildren()), showComponent && /*#__PURE__*/React.createElement("div", {
    className: actionClass,
    "data-test": "DesignSystem-EditableChipInput--Actions"
  }, /*#__PURE__*/React.createElement(Button, {
    "data-test": "DesignSystem-EditableChipInput--DiscardButton",
    icon: "clear",
    className: "mr-3",
    size: "tiny",
    onClick: function onClick() {
      setDefaultComponent(value);
    }
  }), /*#__PURE__*/React.createElement(Button, {
    "data-test": "DesignSystem-EditableChipInput--SaveButton",
    icon: "check",
    appearance: "primary",
    size: "tiny",
    disabled: disableSaveAction,
    onClick: onSaveChanges
  })));
};
EditableChipInput.defaultProps = {
  placeholder: '',
  chipInputOptions: {}
};

var ProgressRing = function ProgressRing(props) {
  var size = props.size,
      max = props.max,
      value = props.value,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var radius = 20;
  var circumference = 2 * Math.PI * radius;
  var ProgressRingClass = classnames(_defineProperty$1({
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
  return /*#__PURE__*/React.createElement("svg", _extends$2({
    "data-test": "DesignSystem-ProgressRing"
  }, baseProps, {
    className: ProgressRingClass
  }, svgProps), /*#__PURE__*/React.createElement("circle", _extends$2({
    className: "Ring-background"
  }, circleProps)), /*#__PURE__*/React.createElement("circle", _extends$2({
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
  var StepClass = classnames((_classNames = {}, _defineProperty$1(_classNames, 'Step', true), _defineProperty$1(_classNames, 'Stepper-animate', true), _defineProperty$1(_classNames, 'Step--active', active), _defineProperty$1(_classNames, 'Step--disabled', disabled), _defineProperty$1(_classNames, 'Step--completed', completed), _classNames));

  var onClickHandle = function onClickHandle() {
    if (disabled) return;
    if (onChange) onChange(label, value);
  };

  var onKeyDownHandler = function onKeyDownHandler(event) {
    if (event.key === 'Enter') {
      onClickHandle();
    }
  };

  var textColor = active ? 'primary-dark' : disabled ? 'inverse-lightest' : 'inverse';
  return (
    /*#__PURE__*/
    // TODO(a11y)
    // eslint-disable-next-line
    React.createElement("div", {
      "data-test": "DesignSystem-Step",
      className: StepClass,
      onKeyDown: function onKeyDown(e) {
        return onKeyDownHandler(e);
      },
      onClick: onClickHandle,
      tabIndex: disabled ? -1 : 0
    }, /*#__PURE__*/React.createElement(Icon, {
      "data-test": "DesignSystem-Step--Icon",
      name: completed ? 'check_circle' : 'radio_button_unchecked',
      className: "mr-3 my-4 Stepper-animate"
    }), label && /*#__PURE__*/React.createElement(Text, {
      weight: "medium",
      color: textColor,
      className: "Stepper-animate Stepper-text"
    }, label))
  );
};
Step.displayName = 'Step';

var Stepper = function Stepper(props) {
  var steps = props.steps,
      active = props.active,
      completed = props.completed,
      onChange = props.onChange,
      className = props.className,
      skipIndexes = props.skipIndexes;
  var baseProps = extractBaseProps(props);

  var onChangeHandler = function onChangeHandler(index, stepLabel, stepValue) {
    if (onChange) onChange(index, completed, stepLabel, stepValue);
  };

  var StepperClass = classnames(_defineProperty$1({}, 'Stepper', true), className);
  return /*#__PURE__*/React.createElement("div", _extends$2({
    "data-test": "DesignSystem-Stepper"
  }, baseProps, {
    className: StepperClass
  }), steps.map(function (step, index) {
    var label = step.label,
        value = step.value;
    var isSkipped = skipIndexes.includes(index);
    var activeStep = active === index;
    var completedStep = !isSkipped && completed >= index;
    var disabled = !activeStep && !isSkipped && completed + 1 < index;
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
  active: 0,
  skipIndexes: []
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

  var onPasteHandler = function onPasteHandler(_e, val, type) {
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

          if (startInputOptions.onPaste) startInputOptions.onPaste(_e, val);
        }
      }
    }

    if (type === 'end') {
      var _placeholderChar = endInputOptions.placeholderChar ? endInputOptions.placeholderChar : '_';

      if (val && !val.includes(_placeholderChar)) {
        var _d = translateToDate(inputFormat, val, validators);

        if (_d) {
          setState({
            endDate: _d
          });
          if (endInputOptions.onPaste) endInputOptions.onPaste(_e, val);
        }
      }
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

        if (d && !isNaN(d.getTime())) {
          setState({
            startDate: d
          });

          if (endDate) {
            var _getDateInfo4 = getDateInfo(endDate),
                eYear = _getDateInfo4.year,
                eMonth = _getDateInfo4.month,
                eDate = _getDateInfo4.date;

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
      var _placeholderChar2 = endInputOptions.placeholderChar ? endInputOptions.placeholderChar : '_';

      if (val && !val.includes(_placeholderChar2)) {
        var _d2 = translateToDate(inputFormat, val, validators);

        if (_d2 && !isNaN(_d2.getTime())) setState({
          endDate: _d2
        });
      }
    }
  };

  var onBlurHandler = function onBlurHandler(_e, val, type) {
    setState({
      init: true
    });
    var hasNumber = /\d/;

    if (type === 'start') {
      var _startInputOptions$pl = startInputOptions.placeholderChar,
          placeholderChar = _startInputOptions$pl === void 0 ? '_' : _startInputOptions$pl;

      if (val && hasNumber.test(val) && val.includes(placeholderChar)) {
        setState({
          startError: true
        });
      } else if (val && !hasNumber.test(val) || !val) {
        setState({
          startError: false
        });
      }

      if (!val || val.includes(placeholderChar)) setState({
        startDate: undefined
      });
    }

    if (type === 'end') {
      var _endInputOptions$plac = endInputOptions.placeholderChar,
          _placeholderChar3 = _endInputOptions$plac === void 0 ? '_' : _endInputOptions$plac;

      if (val && hasNumber.test(val) && val.includes(_placeholderChar3)) {
        setState({
          endError: true
        });
      } else if (val && !hasNumber.test(val) || !val) {
        setState({
          endError: false
        });
      }

      if (!val || val.includes(_placeholderChar3)) setState({
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

  return /*#__PURE__*/React.createElement(Row, {
    "data-test": "DesignSystem-DateRangePicker-InputTrigger"
  }, /*#__PURE__*/React.createElement(Column, {
    size: '6',
    sizeXS: '12',
    className: "DateRangePicker-input DateRangePicker-input--startDate"
  }, startLabel && /*#__PURE__*/React.createElement(Label, {
    required: startInputOptions.required,
    withInput: true
  }, startLabel), /*#__PURE__*/React.createElement(X, _extends$2({
    icon: "events",
    placeholder: inputFormat
  }, startInputOptions, {
    mask: mask,
    value: startDate ? translateToString(inputFormat, startDate) : init ? X.utils.getDefaultValue(mask, startPlaceholderChar) : '',
    onChange: function onChange(e, val) {
      onChangeHandler(e, val || '', 'start');
    },
    onPaste: function onPaste(e, val) {
      onPasteHandler(e, val || '', 'start');
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
    clearOnEmptyBlur: true
  }))), /*#__PURE__*/React.createElement(Column, {
    size: '6',
    sizeXS: '12',
    className: "DateRangePicker-input DateRangePicker-input--endDate"
  }, endLabel && /*#__PURE__*/React.createElement(Label, {
    required: endInputOptions.required,
    withInput: true
  }, endLabel), /*#__PURE__*/React.createElement(X, _extends$2({
    icon: "events",
    placeholder: inputFormat
  }, endInputOptions, {
    mask: mask,
    value: endDate ? translateToString(inputFormat, endDate) : init ? X.utils.getDefaultValue(mask, endPlaceholderChar) : '',
    onChange: function onChange(e, val) {
      onChangeHandler(e, val || '', 'end');
    },
    onPaste: function onPaste(e, val) {
      onPasteHandler(e, val || '', 'end');
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
    clearOnEmptyBlur: true
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
      placeholderChar = _inputOptions$placeho === void 0 ? '_' : _inputOptions$placeho;
  var defaultValue = X.utils.getDefaultValue(mask, placeholderChar).split(' - ');
  var sValue = startValue || defaultValue[0];
  var eValue = endValue || defaultValue[1];

  var inputValidator = function inputValidator(val) {
    var _val$split = val.split(' - '),
        _val$split2 = _slicedToArray(_val$split, 2),
        startVal = _val$split2[0],
        endVal = _val$split2[1];

    return isValid(validators, startVal, inputFormat) && isValid(validators, endVal, inputFormat);
  };

  var onPasteHandler = function onPasteHandler(_e, val) {
    var onPaste = inputOptions.onPaste;
    var date = val.split(' - ');
    var startVal = date[0];
    var endVal = date[1];
    var endD = translateToDate(inputFormat, endVal, validators);
    var startD = translateToDate(inputFormat, startVal, validators);
    setState({
      startDate: startD,
      endDate: endD,
      startValue: startVal,
      endValue: endVal
    });
    if (onPaste) onPaste(_e, val);
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

  var getErrorState = function getErrorState(currentVal, siblingVal) {
    var hasNumber = /\d/;

    if (currentVal && siblingVal && !currentVal.includes(placeholderChar) && siblingVal.includes(placeholderChar)) {
      return true;
    } else if (currentVal && hasNumber.test(currentVal) && currentVal.includes(placeholderChar)) {
      return true;
    } else if (currentVal && !hasNumber.test(currentVal) || !currentVal) {
      return false;
    }

    return null;
  };

  var onBlurHandler = function onBlurHandler(_e, val) {
    setState({
      init: true
    });
    var date = val.split(' - ');
    var startVal = date[0];
    var endVal = date[1];
    var startErr = getErrorState(startVal, endVal);
    var endErr = getErrorState(endVal, startVal);

    if (startErr !== null && endErr !== null) {
      setState({
        startError: startErr,
        endError: endErr
      });
    }

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

  return /*#__PURE__*/React.createElement(Row, {
    "data-test": "DesignSystem-DateRangePicker-SingleInputTrigger"
  }, /*#__PURE__*/React.createElement(Column, null, label && /*#__PURE__*/React.createElement(Label, {
    required: inputOptions.required,
    withInput: true
  }, label), /*#__PURE__*/React.createElement(X, _extends$2({
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
    onPaste: function onPaste(e, val) {
      onPasteHandler(e, val || '');
    },
    onClear: onClearHandler,
    error: showError,
    caption: showError ? errorMessage : '',
    validators: [inputValidator],
    clearOnEmptyBlur: true
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
  return {
    startDate: '',
    endDate: ''
  };
};

var _excluded$o = ["startDate", "endDate", "yearNav", "monthNav", "open", "inputFormat", "outputFormat", "startInputOptions", "endInputOptions", "validators", "withInput", "position", "disabledBefore", "disabledAfter", "onRangeChange", "rangeLimit"];
var DateRangePicker = /*#__PURE__*/function (_React$Component) {
  _inherits(DateRangePicker, _React$Component);

  var _super = _createSuper(DateRangePicker);

  function DateRangePicker(props) {
    var _this;

    _classCallCheck(this, DateRangePicker);

    _this = _super.call(this, props);

    _defineProperty$1(_assertThisInitialized$1(_this), "monthsInView", void 0);

    _defineProperty$1(_assertThisInitialized$1(_this), "getDate", function (startDate, endDate) {
      var inputFormat = _this.props.inputFormat;
      var startVal = startDate ? translateToString(inputFormat, startDate) : '';
      var endVal = endDate ? translateToString(inputFormat, endDate) : '';
      return {
        startValue: startVal,
        endValue: endVal
      };
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "getErrors", function (startDate, endDate) {
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

        return !date ? false : compareDate(date, 'less', dbYear, dbMonth, dbDate) || compareDate(date, 'more', daYear, daMonth, daDate);
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

    _defineProperty$1(_assertThisInitialized$1(_this), "getInRangeError", function () {
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

    _defineProperty$1(_assertThisInitialized$1(_this), "onRangeChangeHandler", function (sDate, eDate) {
      _this.setState({
        init: true,
        startDate: sDate,
        endDate: eDate,
        startValue: sDate ? translateToString(_this.props.inputFormat, sDate) : '',
        endValue: eDate ? translateToString(_this.props.inputFormat, eDate) : ''
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onToggleHandler", function (o, type) {
      var _this$props2 = _this.props,
          singleInput = _this$props2.singleInput,
          inputOptions = _this$props2.inputOptions,
          startInputOptions = _this$props2.startInputOptions,
          endInputOptions = _this$props2.endInputOptions;
      var disabled = singleInput ? inputOptions.disabled : startInputOptions.disabled || endInputOptions.disabled;
      if (disabled) return;

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

  _createClass(DateRangePicker, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.startDate !== this.props.startDate) {
        var _this$props3 = this.props,
            inputFormat = _this$props3.inputFormat,
            validators = _this$props3.validators;
        var d = convertToDate(this.props.startDate, inputFormat, validators);
        var val = translateToString(inputFormat, d);
        this.setState({
          startDate: d,
          startValue: val
        });
      }

      if (prevProps.endDate !== this.props.endDate) {
        var _this$props4 = this.props,
            _inputFormat2 = _this$props4.inputFormat,
            _validators = _this$props4.validators;

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
        var _this$props5 = this.props,
            onRangeChange = _this$props5.onRangeChange,
            outputFormat = _this$props5.outputFormat;
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
            if (this.props.allowReverseSelection) {
              if (_startDate3 && _endDate3) {
                onRangeChange(_startDate3, _endDate3, sValue, eValue);
              }
            } else {
              onRangeChange(_startDate3, _endDate3, sValue, eValue);
            }
          } else if (!this.props.allowReverseSelection) {
            if (!startError) onRangeChange(_startDate3, undefined, sValue, eValue);else if (!endError) onRangeChange(undefined, _endDate3, sValue, eValue);else onRangeChange(undefined, undefined, sValue, eValue);
          }
        }

        if (this.state.startDate && this.state.endDate) {
          this.setState({
            open: false
          });
        }
      }
    }
  }, {
    key: "renderCalendar",
    value: function renderCalendar() {
      var _this$props6 = this.props;
          _this$props6.startDate;
          _this$props6.endDate;
          _this$props6.yearNav;
          _this$props6.monthNav;
          _this$props6.open;
          var inputFormat = _this$props6.inputFormat;
          _this$props6.outputFormat;
          _this$props6.startInputOptions;
          _this$props6.endInputOptions;
          var validators = _this$props6.validators;
          _this$props6.withInput;
          _this$props6.position;
          var disabledBefore = _this$props6.disabledBefore,
          disabledAfter = _this$props6.disabledAfter;
          _this$props6.onRangeChange;
          var rangeLimit = _this$props6.rangeLimit,
          rest = _objectWithoutProperties(_this$props6, _excluded$o);

      var _this$state3 = this.state,
          startDate = _this$state3.startDate,
          endDate = _this$state3.endDate,
          yearNav = _this$state3.yearNav,
          monthNav = _this$state3.monthNav;
      return /*#__PURE__*/React.createElement(Calendar, _extends$2({}, rest, {
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

      var _this$props7 = this.props,
          withInput = _this$props7.withInput,
          startInputOptions = _this$props7.startInputOptions,
          endInputOptions = _this$props7.endInputOptions,
          inputOptions = _this$props7.inputOptions,
          inputFormat = _this$props7.inputFormat,
          position = _this$props7.position,
          validators = _this$props7.validators,
          singleInput = _this$props7.singleInput,
          contentAlign = _this$props7.contentAlign,
          children = _this$props7.children;
      var open = this.state.open;
      var RangePickerClass = classnames((_classNames = {}, _defineProperty$1(_classNames, 'DateRangePicker', true), _defineProperty$1(_classNames, "DateRangePicker--".concat(contentAlign), contentAlign), _classNames));

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
}(React.Component);

_defineProperty$1(DateRangePicker, "utils", {
  getCurrentWeek: getCurrentWeek,
  getPreviousWeek: getPreviousWeek,
  getPreviousMonth: getPreviousMonth,
  getPrevious90Days: getPrevious90Days,
  getCustomDates: getCustomDates,
  getCurrentYear: getCurrentYear,
  getCurrentMonth: getCurrentMonth
});

_defineProperty$1(DateRangePicker, "defaultProps", _objectSpread2(_objectSpread2({}, Calendar.defaultProps), {}, {
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
  var wrapperClass = classnames(_defineProperty$1({}, 'TabsWrapper', true), className);

  var tabClickHandler = function tabClickHandler(tabIndex) {
    setActiveTab(tabIndex);
    if (onTabChange) onTabChange(tabIndex);
  };

  var TabsHeader = tabs.map(function (child, index) {
    var _classNames2;

    var _child$props = child.props,
        label = _child$props.label,
        disabled = _child$props.disabled;
    var tabHeaderClass = classnames((_classNames2 = {}, _defineProperty$1(_classNames2, 'Tab', true), _defineProperty$1(_classNames2, 'Tab--disabled', disabled), _defineProperty$1(_classNames2, 'Tab--active', !disabled && active === index), _classNames2));
    return (
      /*#__PURE__*/
      // TODO(a11y)
      //  eslint-disable-next-line
      React.createElement("div", {
        "data-test": "DesignSystem-Tabs--Header",
        key: index,
        className: tabHeaderClass,
        onClick: function onClick() {
          return !disabled && tabClickHandler(index);
        }
      }, label)
    );
  });
  return /*#__PURE__*/React.createElement("div", _extends$2({
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

var getChildrenArray = function getChildrenArray(children) {
  return Array.isArray(children) ? children : [children];
};

var filterTabs = function filterTabs(children) {
  var childrenArray = getChildrenArray(children);
  var tabs = childrenArray.filter(function (element) {
    return typeof element.type === 'function' && element.type.name === Tab.name;
  });
  return tabs;
};

var filterInlineComponent = function filterInlineComponent(children) {
  var childrenArray = getChildrenArray(children);
  var inlineComponent = childrenArray.filter(function (element) {
    return !(typeof element.type === 'function' && element.type.name === Tab.name);
  });
  return inlineComponent;
};

var Tabs = function Tabs(props) {
  var _classNames2, _classNames4;

  var children = props.children,
      withSeparator = props.withSeparator,
      onTabChange = props.onTabChange,
      className = props.className,
      headerClassName = props.headerClassName;
  var baseProps = extractBaseProps(props);
  var tabRefs = [];
  var tabs = children ? filterTabs(children) : props.tabs;
  var inlineComponent = children ? filterInlineComponent(children) : /*#__PURE__*/React.createElement(React.Fragment, null);
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
  var wrapperClass = classnames(_defineProperty$1({}, 'TabsWrapper', true), className);
  var headerClass = classnames((_classNames2 = {}, _defineProperty$1(_classNames2, 'TabsWrapper-header', true), _defineProperty$1(_classNames2, 'TabsWrapper-header--withSeparator', withSeparator), _classNames2), className, headerClassName);

  var getPillsClass = function getPillsClass(disabled) {
    var _classNames3;

    return classnames((_classNames3 = {}, _defineProperty$1(_classNames3, 'Tab-pills', true), _defineProperty$1(_classNames3, 'Tab-pills--disabled', disabled), _classNames3));
  };

  var getActiveTabClass = function getActiveTabClass() {
    var activeTab;
    var activeTabClass;

    if (tabs && tabs.length && tabs[activeIndex] && 'props' in tabs[activeIndex]) {
      var _activeTab$props;

      activeTab = tabs[activeIndex];
      activeTabClass = (_activeTab$props = activeTab.props) === null || _activeTab$props === void 0 ? void 0 : _activeTab$props.className;
    } else {
      activeTab = tabs[activeIndex];
      activeTabClass = activeTab && activeTab.className;
    }

    return activeTabClass;
  };

  var activeTabClass = getActiveTabClass();
  var tabContentClass = classnames((_classNames4 = {}, _defineProperty$1(_classNames4, 'TabsWrapper-content', true), _defineProperty$1(_classNames4, "".concat(activeTabClass), activeTabClass), _classNames4));

  var tabClickHandler = function tabClickHandler(tabIndex, isKeyboard) {
    if (props.activeIndex === undefined) {
      var _tabRefs$tabIndex;

      setActiveTab(tabIndex);
      if (!isKeyboard) (_tabRefs$tabIndex = tabRefs[tabIndex]) === null || _tabRefs$tabIndex === void 0 ? void 0 : _tabRefs$tabIndex.blur();
    }

    if (onTabChange) onTabChange(tabIndex);
  };

  var tabKeyDownHandler = function tabKeyDownHandler(event, tabIndex) {
    if (event.key === 'Enter') {
      tabClickHandler(tabIndex, true);
    }

    if (event.key === 'ArrowLeft' && tabIndex > 0) {
      var prevElement = tabRefs[tabIndex - 1];
      prevElement === null || prevElement === void 0 ? void 0 : prevElement.focus();
    }

    if (event.key === 'ArrowRight' && tabIndex < tabs.length) {
      var nextElement = tabRefs[tabIndex + 1];
      nextElement === null || nextElement === void 0 ? void 0 : nextElement.focus();
    }
  };

  var renderInfo = function renderInfo(tab, index) {
    var _ref = tab,
        count = _ref.count,
        icon = _ref.icon,
        disabled = _ref.disabled,
        iconType = _ref.iconType;

    if (count !== undefined) {
      return /*#__PURE__*/React.createElement(Pills, {
        "data-test": "DesignSystem-Tabs--Pills",
        className: getPillsClass(disabled),
        appearance: activeIndex === index ? 'primary' : 'secondary'
      }, count);
    }

    var iconClass = classnames(_defineProperty$1({}, 'Tab-selected', !disabled && activeIndex === index));

    if (icon) {
      var iconAppearance = activeIndex === index ? 'info' : disabled ? 'disabled' : 'subtle';
      return /*#__PURE__*/React.createElement(Icon, {
        "data-test": "DesignSystem-Tabs--Icon",
        className: "mr-4 ".concat(iconClass),
        name: icon,
        type: iconType,
        appearance: iconAppearance
      });
    }

    return null;
  };

  var renderDismissIcon = function renderDismissIcon(tab, index, onDismiss) {
    var _ref2 = tab,
        disabled = _ref2.disabled,
        label = _ref2.label;
    var iconAppearance = activeIndex === index ? 'info' : disabled ? 'disabled' : 'subtle';

    var dismissIconClass = function dismissIconClass(disabled) {
      var _classNames6;

      return classnames((_classNames6 = {}, _defineProperty$1(_classNames6, "DismissibleTab-icon--right", true), _defineProperty$1(_classNames6, 'DismissibleTab-icon--default', !disabled && activeIndex !== index), _defineProperty$1(_classNames6, "DismissibleTab-icon--selected", !disabled && activeIndex === index), _defineProperty$1(_classNames6, 'cursor-pointer', !disabled), _defineProperty$1(_classNames6, 'Tab-selected', !disabled && activeIndex === index), _classNames6));
    };

    var tabInfo = {
      label: label,
      activeIndex: activeIndex,
      currentTabIndex: index
    };

    var onCloseHandler = function onCloseHandler(e) {
      e.stopPropagation();
      if (onDismiss) onDismiss(tabInfo);
    };

    return /*#__PURE__*/React.createElement(Icon, {
      "data-test": "DesignSystem-DismissibleTabs--Icon",
      name: "clear",
      appearance: iconAppearance,
      className: dismissIconClass(disabled),
      onClick: !disabled ? onCloseHandler : undefined,
      tabIndex: disabled ? -1 : 0
    });
  };

  var renderTab = function renderTab(tab, index) {
    var _ref3 = tab,
        _ref3$label = _ref3.label,
        label = _ref3$label === void 0 ? '' : _ref3$label,
        disabled = _ref3.disabled,
        isDismissible = _ref3.isDismissible,
        _ref3$onDismiss = _ref3.onDismiss,
        onDismiss = _ref3$onDismiss === void 0 ? function () {} : _ref3$onDismiss;

    if (typeof label !== 'string') {
      return label;
    }

    var textAppearance = activeIndex === index ? 'link' : disabled ? 'disabled' : 'subtle';
    var tabTextClass = classnames(_defineProperty$1({}, 'Tab-selected', !disabled && activeIndex === index));
    return /*#__PURE__*/React.createElement(React.Fragment, null, renderInfo(tab, index), /*#__PURE__*/React.createElement(Text, {
      "data-test": "DesignSystem-Tabs--Text",
      appearance: textAppearance,
      className: tabTextClass
    }, label), isDismissible && renderDismissIcon(tab, index, onDismiss));
  };

  var renderTabs = tabs.map(function (tab, index) {
    var _classNames8;

    var currentTabProp = children && 'props' in tab ? tab.props : tab;
    var disabled = currentTabProp.disabled;
    var tabHeaderClass = classnames((_classNames8 = {}, _defineProperty$1(_classNames8, 'Tab', true), _defineProperty$1(_classNames8, 'Tab--disabled', disabled), _defineProperty$1(_classNames8, 'Tab--active', !disabled && activeIndex === index), _defineProperty$1(_classNames8, 'Tab-selected', !disabled && activeIndex === index), _defineProperty$1(_classNames8, 'align-items-center', true), _classNames8));
    return (
      /*#__PURE__*/
      // TODO(a11y)
      //  eslint-disable-next-line
      React.createElement("div", {
        ref: function ref(element) {
          return element && !disabled && tabRefs.push(element);
        },
        "data-test": "DesignSystem-Tabs--Tab",
        key: index,
        className: tabHeaderClass,
        onClick: function onClick() {
          return !disabled && tabClickHandler(index);
        },
        onKeyDown: function onKeyDown(event) {
          return tabKeyDownHandler(event, index);
        },
        tabIndex: disabled ? -1 : 0
      }, renderTab(currentTabProp, index))
    );
  });
  return /*#__PURE__*/React.createElement("div", _extends$2({
    "data-test": "DesignSystem-Tabs"
  }, baseProps, {
    className: wrapperClass
  }), /*#__PURE__*/React.createElement("div", {
    className: headerClass,
    "data-test": "DesignSystem-Tabs--Header"
  }, renderTabs, inlineComponent), children && /*#__PURE__*/React.createElement("div", {
    className: tabContentClass,
    "data-test": "DesignSystem-Tabs--Content"
  }, tabs[activeIndex]));
};
Tabs.displayName = 'Tabs';
Tabs.defaultProps = {
  withSeparator: true,
  tabs: []
};

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

var COMMON_MIME_TYPES = new Map([// image
['gif', 'image/gif'], ['ico', 'image/x-icon'], ['jpeg', 'image/jpeg'], ['jpg', 'image/jpeg'], ['png', 'image/png'], ['bmp', 'image/bmp'], ['tif', 'image/tiff'], ['tiff', 'image/tiff'], ['apng', 'image/apng'], ['avif', 'image/avif'], ['jfif', 'image/jpeg'], ['pjpeg', 'image/pjpeg'], ['pjp', 'image/jpeg'], ['svg', 'image/svg+xml'], ['webp', 'image/webp'], ['cur', 'image/x-win-bitmap'], ['MTS', 'model/vnd.mts'], // Video
['roq', 'video'], ['f4a', 'video'], ['f4b', 'video'], ['drc', 'video'], ['nsv', 'video'], ['avi', 'video/x-msvideo'], ['mkv', 'video/x-matroska'], ['mov', 'video/quicktime'], ['mp4', 'video/mp4'], ['webm', 'video/webm'], ['flv', 'video/x-flv'], ['vob', 'video/x-ms-vob'], ['ogv', 'video/ogg'], ['ogg', 'application/ogg'], ['gifv', 'image/gif'], ['mng', 'video/x-mng'], ['M2TS', 'video/MP2T'], ['TS', 'video/mp2t'], ['qt', 'video/quicktime'], ['wmv', 'video/x-ms-wmv'], ['yuv', 'application/octet-stream'], ['rm', 'application/vnd.rn-realmedia'], ['rmvb', 'application/vnd.rn-realmedia-vbr'], ['viv', 'video/vnd.vivo'], ['asf', 'video/x-ms-asf'], ['amv', 'video/x-amv'], ['m4v', 'video/x-m4v'], ['mpg', 'video/mpeg'], ['mpeg', 'video/mpeg'], ['mpe', 'video/mpeg'], ['mpv', 'video/mpv'], ['m2v', 'video/mpeg'], ['svi', 'video/x-msvideo'], ['3gp', 'video/3gpp'], ['3g2', 'video/3gpp2'], ['mxf', 'application/mxf'], ['flv', 'video/x-flv'], ['f4v', 'video/x-f4v'], ['f4p', 'video/mp4'], // audio
['aa', 'audio'], ['aax', 'audio'], ['act', 'audio'], ['alac', 'audio'], ['ape', 'audio'], ['awb', 'audio'], ['dss', 'audio'], ['dvf', 'audio'], ['iklax', 'audio'], ['ivs', 'audio'], ['msv', 'audio'], ['nmf', 'audio'], ['mogg', 'audio'], ['raw', 'audio'], ['rf64', 'audio'], ['sln', 'audio'], ['wv', 'audio'], ['8svx', 'audio'], ['3gp', 'audio/3gpp'], ['mp2', 'audio/mpeg'], ['aac', 'audio/x-aac'], ['aiff', 'audio/x-aiff'], ['amr', 'audio/amr'], ['au', 'audio/basic'], ['flac', 'audio/x-flac'], ['gsm', 'audio/gsm'], ['m4a', 'audio/mp4a-latm'], ['m4b', 'audio/mp4a-latm'], ['m4p', 'audio/mp4a-latm'], ['mmf', 'application/vnd.smaf'], ['mp3', 'audio/mpeg'], ['ogg', 'audio/ogg'], ['oga', 'audio/ogg'], ['opus', 'audio/opus'], ['tta', 'audio/x-tta'], ['voc', 'audio/x-voice'], ['wav', 'audio/x-wav'], ['wma', 'audio/x-ms-wma'], ['webm', 'audio/webm'], ['cda ', 'application/x-cdf'], ['ra', 'audio/x-pn-realaudio'], ['vox', 'application/x-authorware-bin'], ['rm', 'application/vnd.rn-realmedia'], ['mpc', 'application/vnd.mophun.certificate'], // docs
['pdf', 'application/pdf'], ['zip', 'application/zip'], ['doc', 'application/msword'], ['docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'], ['xlss', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'], ['xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'], ['xls', 'application/vnd.ms-excel'], ['odt', 'application/vnd.oasis.opendocument.text'], ['tex', 'application/x-tex'], ['wpd', 'application/wordperfect'], ['ods', 'application/vnd.oasis.opendocument.spreadsheet'], ['csv', 'text/csv'], ['rtf', 'text/rtf'], ['txt', 'text/plain'], ['tsv', 'text/tab-separated-values']]);
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

var _excluded$n = ["refKey", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnterCallback", "onDragOverCallback", "onDragLeaveCallback", "onDropCallback"],
    _excluded2$1 = ["refKey", "onChange", "onClick"];
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
      });
      inputRef.current.value = '';
      inputRef.current.click();
    }
  }, [dispatch]);

  var onWindowFocus = function onWindowFocus() {
    if (isFileDialogActive) {
      setTimeout(function () {
        if (inputRef.current) {
          var _files = inputRef.current.files;

          if (!_files || !_files.length) {
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
    // Not every event target type is element so we have to check if it is.
    if (event.target instanceof HTMLDivElement && rootRef.current && rootRef.current.contains(event.target)) {
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
    event.persist();
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
    var targets = dragTargetsRef.current.filter(function (target) {
      return rootRef.current && rootRef.current.contains(target);
    });
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

            var filteredErrors = errors.filter(function (e) {
              return e;
            });
            fileRejections.push({
              file: file,
              errors: filteredErrors
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

  var composeDragHandler = function composeDragHandler(fn) {
    return disabled ? null : fn;
  };

  var getRootProps = useMemo(function () {
    return function () {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$refKey = _ref.refKey,
          refKey = _ref$refKey === void 0 ? 'ref' : _ref$refKey;
          _ref.onKeyDown;
          _ref.onFocus;
          _ref.onBlur;
          _ref.onClick;
          var onDragEnterCallback = _ref.onDragEnterCallback,
          onDragOverCallback = _ref.onDragOverCallback,
          onDragLeaveCallback = _ref.onDragLeaveCallback,
          onDropCallback = _ref.onDropCallback,
          rest = _objectWithoutProperties(_ref, _excluded$n);

      return _objectSpread2(_defineProperty$1({
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
          rest = _objectWithoutProperties(_ref2, _excluded2$1);

      var inputProps = _defineProperty$1({
        accept: accept,
        multiple: multiple,
        type: 'file',
        style: {
          display: 'none'
        },
        onChange: composeDragHandler(composeEventHandlers(onChange, onDropCb)),
        onClick: composeDragHandler(composeEventHandlers(onClick, onInputElementClick)),
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
    open: composeDragHandler(openFileDialog)
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

var svgCode = {
  active: 'M14.6667 53.3333C13.6 53.3333 12.6667 52.9333 11.8667 52.1333C11.0667 51.3333 10.6667 50.4 10.6667 49.3333V39.8H14.6667V49.3333H49.3333V39.8H53.3333V49.3333C53.3333 50.4 52.9333 51.3333 52.1333 52.1333C51.3333 52.9333 50.4 53.3333 49.3333 53.3333H14.6667ZM30 43.1333V18.4L22 26.4L19.1333 23.5333L32 10.6666L44.8667 23.5333L42 26.4L34 18.4V43.1333H30Z',
  "default": 'M14.6667 53.3334C13.6 53.3334 12.6667 52.9334 11.8667 52.1334C11.0667 51.3334 10.6667 50.4 10.6667 49.3334V39.8H14.6667V49.3334H49.3333V39.8H53.3333V49.3334C53.3333 50.4 52.9333 51.3334 52.1333 52.1334C51.3333 52.9334 50.4 53.3334 49.3333 53.3334H14.6667ZM32 43.1334L19.1333 30.2667L22 27.4L30 35.4V10.6667H34V35.4L42 27.4L44.8667 30.2667L32 43.1334Z',
  error: 'M31.9988 45.3334C32.6218 45.3334 33.1444 45.1227 33.5667 44.7012C33.9889 44.2798 34.2 43.7575 34.2 43.1346C34.2 42.5115 33.9893 41.9889 33.5679 41.5667C33.1464 41.1445 32.6242 40.9334 32.0012 40.9334C31.3782 40.9334 30.8555 41.1441 30.4333 41.5655C30.0111 41.987 29.8 42.5092 29.8 43.1322C29.8 43.7552 30.0107 44.2778 30.4321 44.7C30.8536 45.1223 31.3758 45.3334 31.9988 45.3334ZM32.2117 35.1334C32.7817 35.1334 33.2555 34.9417 33.6333 34.5584C34.0111 34.175 34.2 33.7 34.2 33.1334V20.2667C34.2 19.7 34.0072 19.225 33.6217 18.8417C33.2361 18.4584 32.7583 18.2667 32.1883 18.2667C31.6183 18.2667 31.1444 18.4584 30.7667 18.8417C30.3889 19.225 30.2 19.7 30.2 20.2667V33.1334C30.2 33.7 30.3928 34.175 30.7783 34.5584C31.1639 34.9417 31.6417 35.1334 32.2117 35.1334ZM32.0177 58.6667C28.3407 58.6667 24.8851 57.9667 21.6511 56.5667C18.417 55.1667 15.5889 53.2556 13.1667 50.8334C10.7444 48.4111 8.83333 45.5813 7.43333 42.344C6.03333 39.1066 5.33333 35.6475 5.33333 31.9667C5.33333 28.2859 6.03333 24.8268 7.43333 21.5894C8.83333 18.3521 10.7444 15.5334 13.1667 13.1334C15.5889 10.7334 18.4187 8.83337 21.6561 7.43337C24.8934 6.03337 28.3525 5.33337 32.0333 5.33337C35.7142 5.33337 39.1733 6.03337 42.4106 7.43337C45.648 8.83337 48.4667 10.7334 50.8667 13.1334C53.2667 15.5334 55.1667 18.3556 56.5667 21.6C57.9667 24.8445 58.6667 28.3052 58.6667 31.9823C58.6667 35.6594 57.9667 39.1149 56.5667 42.349C55.1667 45.583 53.2667 48.4071 50.8667 50.8211C48.4667 53.2351 45.6444 55.1463 42.4 56.5544C39.1555 57.9626 35.6948 58.6667 32.0177 58.6667Z'
};

var DropzoneIcon = function DropzoneIcon(props) {
  var IconStyle = {
    height: 'var(--spacing-5)',
    width: 'var(--spacing-5)'
  };
  return /*#__PURE__*/React__default.createElement("svg", {
    style: IconStyle,
    className: "Dropzone-icon--".concat(props.type),
    viewBox: "0 0 64 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: svgCode[props.name],
    className: props.disabled ? 'Dropzone-icon--disabled' : "Dropzone-icon--".concat(props.name)
  }));
};

var DropzoneActive = function DropzoneActive(props) {
  var type = props.type;
  return /*#__PURE__*/React.createElement(React.Fragment, null, type !== 'tight' && /*#__PURE__*/React.createElement(DropzoneIcon, {
    name: "active",
    type: type
  }), /*#__PURE__*/React.createElement(Text, {
    appearance: "link",
    size: "large",
    weight: "strong"
  }, "Drop your files here"));
};
DropzoneActive.displayName = 'DropzoneActive';

var DropzoneError = function DropzoneError(props) {
  var type = props.type,
      error = props.error;
  return /*#__PURE__*/React.createElement(React.Fragment, null, type !== 'tight' && /*#__PURE__*/React.createElement(DropzoneIcon, {
    type: type,
    name: "error"
  }), /*#__PURE__*/React.createElement(Text, {
    appearance: "destructive",
    size: "large",
    weight: "strong"
  }, error));
};
DropzoneError.displayName = 'DropzoneError';

var Dropzone = function Dropzone(props) {
  var _classNames, _classNames2;

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
  var DropzoneClass = classnames((_classNames = {}, _defineProperty$1(_classNames, 'Dropzone', true), _defineProperty$1(_classNames, "Dropzone--".concat(type), type), _defineProperty$1(_classNames, 'Dropzone--disabled', disabled), _defineProperty$1(_classNames, 'Dropzone--active', isDragActive), _defineProperty$1(_classNames, 'Dropzone--error', isDragReject), _defineProperty$1(_classNames, 'Dropzone-animation', true), _defineProperty$1(_classNames, 'Dropzone-animation--default', !isDragActive && type !== 'standard'), _defineProperty$1(_classNames, 'Dropzone-animation--active', isDragActive && !isDragReject && type !== 'standard'), _defineProperty$1(_classNames, 'Dropzone-standard--default', !isDragActive && type === 'standard'), _defineProperty$1(_classNames, 'Dropzone-standard--active', isDragActive && !isDragReject && type === 'standard'), _classNames), className);
  var WrapperClass = classnames((_classNames2 = {}, _defineProperty$1(_classNames2, 'DropzoneWrapper', true), _defineProperty$1(_classNames2, "DropzoneWrapper--".concat(type), true), _classNames2));

  var renderDropzone = function renderDropzone() {
    if (isDragReject) return /*#__PURE__*/React.createElement(DropzoneError, {
      type: type,
      error: fileErrorMessages[fileError]
    });
    if (isDragActive) return /*#__PURE__*/React.createElement(DropzoneActive, {
      type: type
    });
    var buttonAccessibilityProps = useAccessibilityProps({
      onClick: open,
      'aria-label': 'Drag your files here or click to select files'
    });
    return /*#__PURE__*/React.createElement(React.Fragment, null, type !== 'tight' && /*#__PURE__*/React.createElement(DropzoneIcon, {
      disabled: disabled,
      name: "default",
      type: type
    }), /*#__PURE__*/React.createElement("div", {
      className: WrapperClass,
      "data-test": "DesignSystem-Dropzone-Wrapper"
    }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Text, {
      size: "large",
      weight: "strong",
      className: "mr-2",
      appearance: disabled ? 'disabled' : 'default'
    }, "Drag your files here or"), /*#__PURE__*/React.createElement(Text, _extends$2({
      tabIndex: disabled ? -1 : 0,
      className: "ml-2 cursor-pointer",
      size: "large",
      weight: "strong",
      appearance: disabled ? 'disabled' : 'link'
    }, buttonAccessibilityProps), "browse files"), /*#__PURE__*/React.createElement("input", getInputProps())), formatLabel && /*#__PURE__*/React.createElement(Text, {
      appearance: disabled ? 'disabled' : 'subtle'
    }, formatLabel), sizeLabel && /*#__PURE__*/React.createElement(Text, {
      appearance: disabled ? 'disabled' : 'subtle'
    }, sizeLabel), sampleFileLink && /*#__PURE__*/React.createElement("div", {
      className: "mt-5"
    }, sampleFileLink)));
  };

  return /*#__PURE__*/React.createElement("div", _extends$2({}, getRootProps(), baseProps, {
    className: DropzoneClass,
    "data-test": "DesignSystem-Dropzone"
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
  var FileUploaderButtonClass = classnames(_defineProperty$1({}, 'FileUploaderButton', true), className);
  return /*#__PURE__*/React.createElement("div", _extends$2({}, baseProps, {
    className: FileUploaderButtonClass
  }), /*#__PURE__*/React.createElement(Button, {
    type: "button",
    disabled: disabled,
    icon: "backup"
  }, uploadButtonLabel), /*#__PURE__*/React.createElement("input", {
    name: name,
    id: id,
    "data-test": "DesignSystem-FileUploaderButton--Input",
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
  var FileUploaderClass = classnames(_defineProperty$1({}, 'FileUploader', true), className);
  return /*#__PURE__*/React.createElement("div", _extends$2({}, baseProps, {
    className: FileUploaderClass,
    "data-test": "DesignSystem-FileUploader"
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
  var FileItemClass = classnames(_defineProperty$1({}, 'FileUploaderItem', true), className);
  return (
    /*#__PURE__*/
    // TODO(a11y)
    //  eslint-disable-next-line
    React.createElement("div", _extends$2({}, baseProps, {
      "data-test": "DesignSystem-FileUploader--Item",
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
      "data-test": "DesignSystem-FileUploader--CancelButton",
      appearance: "transparent",
      size: "regular",
      onClick: function onClick() {
        return onDelete && onDelete(file, id);
      },
      icon: "close"
    }))), status === 'error' && /*#__PURE__*/React.createElement(InlineMessage, {
      size: "small",
      appearance: "alert",
      description: errorMessage
    }))
  );
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
  var FileListClass = classnames(_defineProperty$1({}, 'FileUploaderList', true), className);
  if (fileList.length === 0) return null;
  return /*#__PURE__*/React.createElement("div", _extends$2({}, baseProps, {
    className: FileListClass,
    "data-test": "DesignSystem-FileUploader--List"
  }), fileList.map(function (fileName, i) {
    return /*#__PURE__*/React.createElement(FileUploaderItem, _extends$2({
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

var resizeCol = function resizeCol(_ref, name, el) {
  var updateColumnSchema = _ref.updateColumnSchema;
  var elX = el === null || el === void 0 ? void 0 : el.getBoundingClientRect().x;

  function resizable(ev) {
    ev.preventDefault();

    if (elX) {
      updateColumnSchema(name, {
        width: ev.pageX - elX
      });
    }
  }

  window.addEventListener('mousemove', resizable);
  window.addEventListener('mouseup', function () {
    window.removeEventListener('mousemove', resizable);
  });
};
var sortColumn = function sortColumn(_ref2, name, type) {
  var sortingList = _ref2.sortingList,
      updateSortingList = _ref2.updateSortingList;

  var newSortingList = _toConsumableArray(sortingList);

  var index = newSortingList.findIndex(function (l) {
    return l.name === name;
  });

  if (index !== -1) {
    newSortingList = [].concat(_toConsumableArray(newSortingList.slice(0, index)), _toConsumableArray(newSortingList.slice(index + 1)));
  }

  if (type !== 'unsort') newSortingList.push({
    name: name,
    type: type
  });
  updateSortingList(newSortingList);
};
var pinColumn = function pinColumn(_ref3, name, type) {
  var updateColumnSchema = _ref3.updateColumnSchema;
  var schemaUpdate = {
    pinned: type !== 'unpin' ? type : undefined
  };
  updateColumnSchema(name, schemaUpdate);
};
var hideColumn = function hideColumn(_ref4, name, value) {
  var updateColumnSchema = _ref4.updateColumnSchema;
  var schemaUpdate = {
    hidden: value
  };
  updateColumnSchema(name, schemaUpdate);
};
function getWidth(_ref5, width) {
  var ref = _ref5.ref,
      withCheckbox = _ref5.withCheckbox;
  var isPercent = typeof width === 'string' && width.slice(-1) === '%';

  if (isPercent) {
    var checkboxCell = ref.querySelector('.Grid-cell--checkbox');
    var checkboxWidth = withCheckbox ? (checkboxCell === null || checkboxCell === void 0 ? void 0 : checkboxCell.clientWidth) || 28 : 0;
    var gridWidth = ref.clientWidth - checkboxWidth;
    return gridWidth * (+width.slice(0, -1) / 100);
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

var updateBatchData = function updateBatchData(data, rowIndexes, dataUpdate, selectDisabledRow) {
  var updatedData = _toConsumableArray(data);

  var _iterator = _createForOfIteratorHelper(rowIndexes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var rowIndex = _step.value;

      if (data[rowIndex].disabled && selectDisabledRow || !data[rowIndex].disabled) {
        updatedData[rowIndex] = _objectSpread2(_objectSpread2({}, updatedData[rowIndex]), dataUpdate);
      }
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
var getSelectAll = function getSelectAll(tableData, selectDisabledRow, clearSelection) {
  if (clearSelection) {
    return {
      indeterminate: false,
      checked: false
    };
  }

  var data = tableData.filter(function (d) {
    return d.disabled && selectDisabledRow || !d.disabled;
  });

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
var hasSchema = function hasSchema(schema) {
  return schema && !!schema.length;
};
var getSchema = function getSchema(schema, loading, loaderSchema) {
  var response = schema;

  if (!hasSchema(schema) && loading) {
    response = loaderSchema;
  }

  return response;
};
var getPluralSuffix = function getPluralSuffix(count) {
  return count > 1 ? 's' : '';
};

var defaultProps$1 = {
  showHead: true,
  loaderSchema: [],
  schema: [],
  data: [],
  totalRecords: 0,
  type: 'data',
  size: 'standard',
  page: 1,
  pageSize: 15,
  loading: false,
  error: false,
  sortingList: [],
  filterList: {},
  showFilters: true
};

var context = /*#__PURE__*/React.createContext(_objectSpread2(_objectSpread2({}, defaultProps$1), {}, {
  ref: null
}));
var GridProvider = context.Provider;

var HeaderCell = function HeaderCell(props) {
  var context$1 = React.useContext(context);
  var schema = props.schema,
      setIsDragged = props.setIsDragged,
      colIndex = props.colIndex,
      onSelectAll = props.onSelectAll,
      onMenuChange = props.onMenuChange,
      onFilterChange = props.onFilterChange,
      updateColumnSchema = props.updateColumnSchema,
      reorderColumn = props.reorderColumn;
  var headProps = {
    schema: schema,
    colIndex: colIndex,
    onSelectAll: onSelectAll,
    onMenuChange: onMenuChange,
    onFilterChange: onFilterChange,
    updateColumnSchema: updateColumnSchema,
    reorderColumn: reorderColumn,
    setIsDragged: setIsDragged
  };
  var loading = context$1.loading,
      draggable = context$1.draggable,
      showMenu = context$1.showMenu,
      sortingList = context$1.sortingList,
      filterList = context$1.filterList,
      headCellTooltip = context$1.headCellTooltip,
      showFilters = context$1.showFilters,
      schemaProp = context$1.schema;
  var _schema$sorting = schema.sorting,
      sorting = _schema$sorting === void 0 ? true : _schema$sorting,
      name = schema.name,
      filters = schema.filters,
      pinned = schema.pinned;
  var isValidSchema = hasSchema(schemaProp);
  var listIndex = sortingList.findIndex(function (l) {
    return l.name === name;
  });
  var sorted = listIndex !== -1 ? sortingList[listIndex].type : null;
  var el = /*#__PURE__*/React.createRef();
  var sortOptions = [{
    label: 'Sort Ascending',
    value: 'sortAsc',
    icon: 'arrow_upward'
  }, {
    label: 'Sort Descending',
    value: 'sortDesc',
    icon: 'arrow_downward'
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
      name: "arrow_upward"
    }) : /*#__PURE__*/React.createElement(Icon, {
      name: "arrow_downward"
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
    "data-test": "DesignSystem-Grid-cellContent",
    onClick: function onClick() {
      if (!loading && sorting) {
        if (sorted === 'asc') onMenuChange(name, 'sortDesc');
        if (sorted === 'desc') onMenuChange(name, 'unsort');
        if (!sorted) onMenuChange(name, 'sortAsc');
      }
    }
  }, loading && !isValidSchema ? /*#__PURE__*/React.createElement(Placeholder, {
    withImage: false
  }, /*#__PURE__*/React.createElement(PlaceholderParagraph, {
    length: "medium"
  })) : !schema.headerCellRenderer && headCellTooltip ? /*#__PURE__*/React.createElement(Tooltip, {
    position: "top-start",
    triggerClass: "w-100 overflow-hidden",
    tooltip: schema.displayName
  }, renderLabel()) : schema.headerCellRenderer && !headCellTooltip ? schema.headerCellRenderer(headProps) : renderLabel()), showFilters && filters && /*#__PURE__*/React.createElement(React.Fragment, null, loading && !isValidSchema ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Placeholder, null)) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Dropdown, {
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
      return onFilterChange(name, selected);
    },
    minWidth: 176
  }))), showMenu && /*#__PURE__*/React.createElement(React.Fragment, null, loading && !isValidSchema ? /*#__PURE__*/React.createElement("span", {
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
      return onMenuChange(name, selected);
    },
    minWidth: 176
  }))), schema.resizable &&
  /*#__PURE__*/
  //TODO(a11y)
  //eslint-disable-next-line
  React.createElement("span", {
    className: "Grid-cellResize",
    onMouseDown: function onMouseDown() {
      resizeCol({
        updateColumnSchema: updateColumnSchema
      }, name, el.current);
      setIsDragged(false);
    }
  }));
};

var BodyCell = function BodyCell(props) {
  var context$1 = React.useContext(context);
  var data = props.data,
      schema = props.schema,
      expandedState = props.expandedState,
      rowIndex = props.rowIndex,
      colIndex = props.colIndex,
      nestedRowData = props.nestedRowData;
  var size = context$1.size,
      loading = context$1.loading,
      nestedRows = context$1.nestedRows;

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
  return /*#__PURE__*/React.createElement("div", {
    className: "Grid-cellContent"
  }, colIndex === 0 && nestedRows && /*#__PURE__*/React.createElement(React.Fragment, null, nestedRowData ? /*#__PURE__*/React.createElement(Icon, {
    className: 'Grid-nestedRowTrigger',
    name: expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down',
    size: 20,
    appearance: 'default',
    onClick: function onClick(e) {
      if (nestedRowData) {
        e.stopPropagation();
        setExpanded(!expanded);
      }
    }
  }) : /*#__PURE__*/React.createElement("span", {
    className: "Grid-nestedRowPlaceholder"
  })), schema.cellRenderer ? schema.cellRenderer(cellProps) : /*#__PURE__*/React.createElement(GridCell, _extends$2({
    key: "".concat(rowIndex, "-").concat(colIndex)
  }, cellProps)));
};

var Cell = function Cell(props) {
  var context$1 = React.useContext(context);
  var _ref = props,
      isHead = _ref.isHead,
      firstCell = _ref.firstCell,
      schema = _ref.schema,
      data = _ref.data,
      rowIndex = _ref.rowIndex,
      colIndex = _ref.colIndex,
      expandedState = _ref.expandedState,
      onSelectAll = _ref.onSelectAll,
      onMenuChange = _ref.onMenuChange,
      onFilterChange = _ref.onFilterChange,
      updateColumnSchema = _ref.updateColumnSchema,
      reorderColumn = _ref.reorderColumn,
      nestedRowData = _ref.nestedRowData;
  var draggable = context$1.draggable,
      separator = context$1.separator,
      nestedRows = context$1.nestedRows,
      ref = context$1.ref,
      withCheckbox = context$1.withCheckbox;
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

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isDragged = _React$useState2[0],
      setIsDragged = _React$useState2[1];

  var cellClass = classnames({
    'Grid-cell': true,
    'Grid-cell--head': isHead,
    'Grid-cell--dragged': isDragged && draggable,
    'Grid-cell--body': !isHead,
    'Grid-cell--separator': !firstCell && (schema.separator !== undefined ? schema.separator : separator),
    'Grid-cell--nestedRow': !isHead && colIndex === 0 && nestedRows
  });
  if (hidden) return null;
  return /*#__PURE__*/React.createElement("div", {
    key: "".concat(rowIndex, "-").concat(colIndex),
    className: cellClass,
    draggable: isHead && draggable,
    onDragStart: function onDragStart(e) {
      if (draggable) {
        setIsDragged(true);
        e.dataTransfer.setData('name', name);
        if (pinned) e.dataTransfer.setData('type', pinned);
      }
    },
    onDrag: function onDrag() {
      setIsDragged(false);
    },
    onDragOver: function onDragOver(e) {
      return e.preventDefault();
    },
    onMouseUpCapture: function onMouseUpCapture() {
      setIsDragged(false);
    },
    onDragEnd: function onDragEnd(e) {
      e.preventDefault();
      setIsDragged(false);
    },
    onDrop: function onDrop(e) {
      if (draggable) {
        setIsDragged(false);
        var from = {
          name: e.dataTransfer.getData('name'),
          type: e.dataTransfer.getData('type')
        };
        var to = {
          name: name,
          type: pinned || ''
        };
        if (from.type === to.type && reorderColumn) reorderColumn(from.name, to.name);
      }
    },
    style: {
      width: getWidth({
        ref: ref,
        withCheckbox: withCheckbox
      }, schema.width || width),
      minWidth: getWidth({
        ref: ref,
        withCheckbox: withCheckbox
      }, schema.minWidth || minWidth),
      maxWidth: getWidth({
        ref: ref,
        withCheckbox: withCheckbox
      }, schema.maxWidth || maxWidth)
    }
  }, isHead ? /*#__PURE__*/React.createElement(HeaderCell, {
    colIndex: colIndex,
    schema: schema,
    onSelectAll: onSelectAll,
    onMenuChange: onMenuChange,
    onFilterChange: onFilterChange,
    updateColumnSchema: updateColumnSchema,
    reorderColumn: reorderColumn,
    setIsDragged: setIsDragged
  }) : /*#__PURE__*/React.createElement(BodyCell, {
    rowIndex: rowIndex,
    colIndex: colIndex,
    data: data,
    schema: schema,
    expandedState: expandedState,
    nestedRowData: nestedRowData
  }));
};

var GridHead = function GridHead(props) {
  var context$1 = React.useContext(context);
  var schema = props.schema,
      onSelectAll = props.onSelectAll,
      onMenuChange = props.onMenuChange,
      onFilterChange = props.onFilterChange,
      updateColumnSchema = props.updateColumnSchema,
      reorderColumn = props.reorderColumn;
  var withCheckbox = context$1.withCheckbox,
      loading = context$1.loading,
      selectAll = context$1.selectAll;
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
    }, loading ? /*#__PURE__*/React.createElement(Placeholder, null) : /*#__PURE__*/React.createElement(Checkbox, _extends$2({}, selectAll, {
      onChange: onSelectAll
    })));
  };

  var renderSchema = function renderSchema(currSchema, shouldRenderCheckbox, pinned) {
    if (currSchema.length) {
      var _classNames;

      var classes = classnames((_classNames = {
        'Grid-cellGroup': true,
        'Grid-cellGroup--pinned': pinned
      }, _defineProperty$1(_classNames, "Grid-cellGroup--pinned-".concat(pinned), pinned), _defineProperty$1(_classNames, 'Grid-cellGroup--main', !pinned), _classNames));
      return /*#__PURE__*/React.createElement("div", {
        className: classes
      }, renderCheckbox(shouldRenderCheckbox), currSchema.map(function (s, index) {
        var cI = pinned === 'left' ? index : leftPinnedSchema.length + index;
        if (pinned === 'right') cI += unpinnedSchema.length;
        return /*#__PURE__*/React.createElement(Cell, {
          key: "".concat(cI),
          firstCell: !index,
          colIndex: cI,
          isHead: true,
          schema: s,
          onSelectAll: onSelectAll,
          onMenuChange: onMenuChange,
          onFilterChange: onFilterChange,
          updateColumnSchema: updateColumnSchema,
          reorderColumn: reorderColumn
        });
      }));
    }

    return null;
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "Grid-head",
    "data-test": "DesignSystem-GridHead-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "Grid-row Grid-row--head"
  }, renderSchema(leftPinnedSchema, !!leftPinnedSchema.length, 'left'), renderSchema(unpinnedSchema, !leftPinnedSchema.length && !!unpinnedSchema.length), renderSchema(rightPinnedSchema, false, 'right')));
};

var GridNestedRow = function GridNestedRow(props) {
  var context$1 = React.useContext(context);
  var schema = context$1.schema,
      loading = context$1.loading,
      nestedRowRenderer = context$1.nestedRowRenderer;
  var data = props.data,
      rowIndex = props.rowIndex,
      expanded = props.expanded;
  if (nestedRowRenderer) return nestedRowRenderer({
    data: data,
    schema: schema,
    loading: loading,
    rowIndex: rowIndex,
    expanded: expanded
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

var GridRow = function GridRow(props) {
  var context$1 = React.useContext(context);
  var type = context$1.type,
      onRowClick = context$1.onRowClick,
      loading = context$1.loading,
      withCheckbox = context$1.withCheckbox,
      nestedRows = context$1.nestedRows;
  var schema = props.schema,
      data = props.data,
      rI = props.rowIndex,
      onSelect = props.onSelect,
      className = props.className;
  var rowRef = React.useRef(null);

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      expanded = _React$useState2[0],
      setExpanded = _React$useState2[1];

  var rowClasses = classnames('Grid-row', 'Grid-row--body', {
    'Grid-row--selected': data._selected,
    'Grid-row--disabled': data.disabled
  });
  var onClickHandler = React.useCallback(function () {
    if (type === 'resource' && !loading) {
      if (onRowClick) {
        onRowClick(data, rI);
      }
    }
  }, [data, rI]);
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
  var nestedProps = {
    data: data,
    rowIndex: rI,
    expanded: expanded
  };
  var nestedRowData = GridNestedRow(nestedProps);

  var renderCheckbox = function renderCheckbox(show) {
    if (!show || !withCheckbox) return null;
    return (
      /*#__PURE__*/
      // TODO(a11y)
      // eslint-disable-next-line
      React.createElement("div", {
        className: "Grid-cell Grid-cell--body Grid-cell--checkbox",
        onClick: function onClick(e) {
          return e.stopPropagation();
        }
      }, loading ? /*#__PURE__*/React.createElement(Placeholder, null) : /*#__PURE__*/React.createElement(Checkbox, {
        checked: !!data._selected,
        onChange: function onChange(event) {
          onSelect(rI, event.target.checked);
        }
      }))
    );
  };

  var renderSchema = function renderSchema(currSchema, shouldRenderCheckbox, pinned) {
    if (currSchema.length) {
      var _classNames;

      var classes = classnames((_classNames = {
        'Grid-cellGroup': true,
        'Grid-cellGroup--pinned': pinned
      }, _defineProperty$1(_classNames, "Grid-cellGroup--pinned-".concat(pinned), pinned), _defineProperty$1(_classNames, 'Grid-cellGroup--main', !pinned), _classNames));
      return /*#__PURE__*/React.createElement("div", {
        className: classes,
        "data-test": "DesignSystem-Grid-cellGroup"
      }, renderCheckbox(shouldRenderCheckbox), currSchema.map(function (s, index) {
        var cI = pinned === 'left' ? index : leftPinnedSchema.length + index;
        if (pinned === 'right') cI += unpinnedSchema.length;
        return /*#__PURE__*/React.createElement(Cell, {
          key: "".concat(rI, "-").concat(cI),
          rowIndex: rI,
          colIndex: cI,
          firstCell: !index,
          schema: s,
          data: data,
          expandedState: [expanded, setExpanded],
          nestedRowData: nestedRowData
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
    "data-test": "DesignSystem-Grid-row",
    className: rowClasses,
    onClick: onClickHandler,
    ref: rowRef
  }, renderSchema(leftPinnedSchema, !!leftPinnedSchema.length, 'left'), renderSchema(unpinnedSchema, !leftPinnedSchema.length && !!unpinnedSchema.length), renderSchema(rightPinnedSchema, false, 'right')), nestedRows && expanded && /*#__PURE__*/React.createElement("div", {
    className: "Grid-nestedRow"
  }, nestedRowData));
};
GridRow.defaultProps = {
  data: {}
};

var GridBody = function GridBody(props) {
  var context$1 = React.useContext(context);
  var data = context$1.data,
      ref = context$1.ref,
      loading = context$1.loading,
      error = context$1.error,
      withPagination = context$1.withPagination,
      page = context$1.page,
      pageSize = context$1.pageSize,
      totalRecords = context$1.totalRecords,
      errorTemplate = context$1.errorTemplate;

  if (!loading && error) {
    return errorTemplate ? typeof errorTemplate === 'function' ? errorTemplate({}) : errorTemplate : null;
  }

  var schema = props.schema,
      prevPageInfo = props.prevPageInfo,
      updatePrevPageInfo = props.updatePrevPageInfo,
      onSelect = props.onSelect;
  React.useEffect(function () {
    var gridBodyEl = ref.querySelector('.Grid-body');

    if (gridBodyEl) {
      window.requestAnimationFrame(function () {
        if (prevPageInfo.page === page) {
          gridBodyEl.scrollTop = prevPageInfo.scrollTop;
        }
      });
    }

    return function () {
      if (gridBodyEl) {
        updatePrevPageInfo({
          page: page,
          scrollTop: gridBodyEl.scrollTop
        });
      }
    };
  }, []);
  var totalPages = Math.ceil(totalRecords / pageSize);
  var isLastPage = withPagination && page === totalPages;
  var dataLength = isLastPage ? totalRecords - (page - 1) * pageSize : loading ? pageSize : withPagination ? Math.min(totalRecords, pageSize) : totalRecords;

  var renderRow = function renderRow(rowIndex, item) {
    return /*#__PURE__*/React.createElement(GridRow, {
      key: rowIndex,
      rowIndex: rowIndex,
      data: !item ? data[rowIndex] : item,
      schema: schema,
      onSelect: onSelect
    });
  };

  var getArrayList = function getArrayList() {
    if (loading && !data.length) {
      return _toConsumableArray(Array(dataLength).map(function (x) {
        return x;
      }));
    }

    return data;
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "Grid-body"
  }, getArrayList().map(function (item, i) {
    return renderRow(i, item);
  }));
};

var Grid = /*#__PURE__*/function (_React$Component) {
  _inherits(Grid, _React$Component);

  var _super = _createSuper(Grid);

  function Grid(props) {
    var _this;

    _classCallCheck(this, Grid);

    _this = _super.call(this, props);

    _defineProperty$1(_assertThisInitialized$1(_this), "gridRef", null);

    _defineProperty$1(_assertThisInitialized$1(_this), "isHeadSyncing", false);

    _defineProperty$1(_assertThisInitialized$1(_this), "isBodySyncing", false);

    _defineProperty$1(_assertThisInitialized$1(_this), "syncScroll", function (type) {
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

    _defineProperty$1(_assertThisInitialized$1(_this), "updateRenderedSchema", function (newSchema) {
      var updateSchema = _this.props.updateSchema;

      if (updateSchema) {
        updateSchema(newSchema);
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "updateColumnSchema", function (name, schemaUpdate) {
      var schema = _this.props.schema;

      var newSchema = _toConsumableArray(schema);

      var ind = newSchema.findIndex(function (s) {
        return s.name === name;
      });
      newSchema[ind] = _objectSpread2(_objectSpread2({}, newSchema[ind]), schemaUpdate);

      _this.updateRenderedSchema(newSchema);
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "reorderColumn", function (from, to) {
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

    _defineProperty$1(_assertThisInitialized$1(_this), "updateSortingList", function (sortingList) {
      var updateSortingList = _this.props.updateSortingList;

      if (updateSortingList) {
        updateSortingList(sortingList);
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "updateFilterList", function (filterList) {
      var updateFilterList = _this.props.updateFilterList;

      if (updateFilterList) {
        updateFilterList(filterList);
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onMenuChange", function (name, selected) {
      var sortingList = _this.props.sortingList;

      switch (selected) {
        case 'sortAsc':
          sortColumn({
            sortingList: sortingList,
            updateSortingList: _this.updateSortingList
          }, name, 'asc');
          break;

        case 'sortDesc':
          sortColumn({
            sortingList: sortingList,
            updateSortingList: _this.updateSortingList
          }, name, 'desc');
          break;

        case 'unsort':
          sortColumn({
            sortingList: sortingList,
            updateSortingList: _this.updateSortingList
          }, name, 'unsort');
          break;

        case 'pinLeft':
          pinColumn({
            updateColumnSchema: _this.updateColumnSchema
          }, name, 'left');
          break;

        case 'pinRight':
          pinColumn({
            updateColumnSchema: _this.updateColumnSchema
          }, name, 'right');
          break;

        case 'unpin':
          pinColumn({
            updateColumnSchema: _this.updateColumnSchema
          }, name, 'unpin');
          break;

        case 'hide':
          hideColumn({
            updateColumnSchema: _this.updateColumnSchema
          }, name, true);
          break;
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onFilterChange", function (name, selected) {
      var filterList = _this.props.filterList;

      var newFilterList = _objectSpread2(_objectSpread2({}, filterList), {}, _defineProperty$1({}, name, selected));

      _this.updateFilterList(newFilterList);
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onSelect", function (rowIndex, selected) {
      var onSelect = _this.props.onSelect;

      if (onSelect) {
        onSelect(rowIndex, selected);
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onSelectAll", function (event) {
      var onSelectAll = _this.props.onSelectAll;

      if (onSelectAll) {
        onSelectAll(event.target.checked, undefined, true);
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "updatePrevPageInfo", function (value) {
      _this.setState({
        prevPageInfo: value
      });
    });

    var pageInfo = {
      page: 1,
      scrollTop: 0
    };
    _this.state = {
      init: false,
      prevPageInfo: pageInfo
    };
    return _this;
  }

  _createClass(Grid, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        init: true
      });
      window.addEventListener('resize', this.forceRerender.bind(this));
    }
  }, {
    key: "forceRerender",
    value: function forceRerender() {
      this.forceUpdate();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeScrollListeners();
      window.removeEventListener('resize', this.forceRerender.bind(this));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.init !== this.state.init) {
        this.addScrollListeners();
      }

      if (prevProps.page !== this.props.page || prevProps.error !== this.props.error) {
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
          _this2 = this,
          _this$onSelectAll;

      var baseProps = extractBaseProps(this.props);
      var _this$state = this.state,
          init = _this$state.init,
          prevPageInfo = _this$state.prevPageInfo;
      var _this$props = this.props,
          type = _this$props.type,
          size = _this$props.size,
          showHead = _this$props.showHead,
          className = _this$props.className,
          page = _this$props.page,
          loading = _this$props.loading,
          loaderSchema = _this$props.loaderSchema;
      var schema = getSchema(this.props.schema, loading, loaderSchema);
      var classes = classnames((_classNames = {
        Grid: 'true'
      }, _defineProperty$1(_classNames, "Grid--".concat(type), type), _defineProperty$1(_classNames, "Grid--".concat(size), size), _classNames), className);
      return /*#__PURE__*/React.createElement("div", _extends$2({
        className: classes
      }, baseProps, {
        ref: function ref(el) {
          _this2.gridRef = el;
        }
      }), init && /*#__PURE__*/React.createElement(GridProvider, {
        value: _objectSpread2(_objectSpread2({}, this.props), {}, {
          ref: this.gridRef
        })
      }, showHead && /*#__PURE__*/React.createElement(GridHead, {
        schema: schema,
        onSelectAll: (_this$onSelectAll = this.onSelectAll) === null || _this$onSelectAll === void 0 ? void 0 : _this$onSelectAll.bind(this),
        onMenuChange: this.onMenuChange.bind(this),
        onFilterChange: this.onFilterChange.bind(this),
        updateColumnSchema: this.updateColumnSchema.bind(this),
        reorderColumn: this.reorderColumn.bind(this)
      }), /*#__PURE__*/React.createElement(GridBody, {
        key: "".concat(page),
        schema: schema,
        prevPageInfo: prevPageInfo,
        updatePrevPageInfo: this.updatePrevPageInfo.bind(this),
        onSelect: this.onSelect.bind(this)
      })));
    }
  }]);

  return Grid;
}(React.Component);

_defineProperty$1(Grid, "defaultProps", void 0);

Grid.defaultProps = defaultProps$1;

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
      className: "GridCell-metaList",
      "data-test": "DesignSystem-GridCell-metaList"
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
  var title = cellData.title,
      icon = cellData.icon;
  var iconName = icon || title;

  if (iconName) {
    return /*#__PURE__*/React.createElement(Icon, {
      name: iconName
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
  var cellClass = classnames(_defineProperty$1({}, 'GridCell', true));

  switch (cellType) {
    case 'DEFAULT':
      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(cellClass, " GridCell--align-").concat(align, " GridCell--default")
      }, loading ? /*#__PURE__*/React.createElement(PlaceholderParagraph, {
        length: "medium",
        "data-test": "DesignSystem-GridCell-placeHolder"
      }) : renderTitle({
        tooltip: tooltip,
        cellData: cellData
      }));

    case 'WITH_META_LIST':
      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(cellClass, " GridCell--metaList")
      }, loading ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PlaceholderParagraph, {
        length: "medium",
        "data-test": "DesignSystem-GridCell-withMetaList"
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
        className: "".concat(cellClass, " GridCell--align-").concat(align, " GridCell--avatar"),
        "data-test": "DesignSystem-GridCell-avatar"
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
        className: "".concat(cellClass, "   "),
        "data-test": "DesignSystem-GridCell-avatarWithText"
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
        className: "".concat(cellClass, " GridCell--avatarWithText"),
        "data-test": "DesignSystem-GridCell-avatarWithMetaList"
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
        className: "".concat(cellClass, " GridCell--align-").concat(align, " GridCell--icon"),
        "data-test": "DesignSystem-GridCell-icon"
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
      type: "button",
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
      "data-test": "DesignSystem-Table-Header--draggableDropdownOption",
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
    type: "button",
    className: "mr-4",
    size: "tiny",
    onClick: onCancelHandler
  }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
    type: "button",
    appearance: "primary",
    size: "tiny",
    onClick: onApplyHandler
  }, "Apply"))));
};

var Header = function Header(props) {
  var _selectedRowsRef$curr;

  var loading = props.loading,
      error = props.error,
      data = props.data,
      displayData = props.displayData,
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
      globalActionRenderer = props.globalActionRenderer,
      dynamicColumn = props.dynamicColumn,
      allowSelectAll = props.allowSelectAll,
      showFilters = props.showFilters,
      customSelectionLabel = props.customSelectionLabel,
      selectedRowsRef = props.selectedRowsRef,
      selectedAllRef = props.selectedAllRef,
      onClearSelection = props.onClearSelection,
      onSelectAllRows = props.onSelectAllRows,
      selectionActionRenderer = props.selectionActionRenderer,
      uniqueColumnName = props.uniqueColumnName;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      selectAllRecords = _React$useState2[0],
      setSelectAllRecords = _React$useState2[1];

  var _React$useState3 = React.useState(true),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      flag = _React$useState4[0],
      setFlag = _React$useState4[1];

  var customLabel = customSelectionLabel ? customSelectionLabel : 'item';
  var selectedCount = data.filter(function (d) {
    return d._selected;
  }).length;
  var startIndex = (page - 1) * pageSize + 1;
  var endIndex = Math.min(page * pageSize, totalRecords);
  var selectedRowsCount = (selectedAllRef === null || selectedAllRef === void 0 ? void 0 : selectedAllRef.current) === true ? totalRecords : (selectedRowsRef === null || selectedRowsRef === void 0 ? void 0 : (_selectedRowsRef$curr = selectedRowsRef.current) === null || _selectedRowsRef$curr === void 0 ? void 0 : _selectedRowsRef$curr.length) || 0;
  var showSelectedRowLabel = withCheckbox && (selectedCount || selectedRowsCount > 0);

  var _React$useState5 = React.useState(true),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      showSelectedLabel = _React$useState6[0],
      setShowSelectedLabel = _React$useState6[1];

  var _React$useState7 = React.useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      animateSelectedLabel = _React$useState8[0],
      setAnimateSelectedLabel = _React$useState8[1];

  var _React$useState9 = React.useState(false),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      animateUnSelectedLabel = _React$useState10[0],
      setAnimateUnSelectedLabel = _React$useState10[1];

  React.useEffect(function () {
    if (showSelectedRowLabel) {
      setAnimateUnSelectedLabel(true);
      setAnimateSelectedLabel(false);
    } else {
      setAnimateUnSelectedLabel(false);
      setAnimateSelectedLabel(true);
    }
  }, [showSelectedRowLabel]);

  var onUnSelectAnimationEnd = function onUnSelectAnimationEnd() {
    showSelectedRowLabel ? setShowSelectedLabel(true) : setShowSelectedLabel(false);
    setAnimateSelectedLabel(true);
    setAnimateUnSelectedLabel(false);
  };

  var onSelectAnimationEnd = function onSelectAnimationEnd() {
    showSelectedRowLabel ? setShowSelectedLabel(true) : setShowSelectedLabel(false);
    setAnimateSelectedLabel(false);
    setAnimateUnSelectedLabel(true);
  };

  var unselectedRowLabelClass = classnames({
    'Table-Header-Label--hide': animateUnSelectedLabel && showSelectedRowLabel,
    'Table-Header-Label--show': animateUnSelectedLabel && !showSelectedRowLabel
  });
  var selectedRowLabelClass = classnames({
    'Table-Header-Label--hide': animateSelectedLabel && !showSelectedRowLabel,
    'Table-Header-Label--show': animateSelectedLabel && showSelectedRowLabel
  });
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
    var newFilterList = _objectSpread2(_objectSpread2({}, filterList), {}, _defineProperty$1({}, name, filters));

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

  var getUnSelectedRowLabel = function getUnSelectedRowLabel() {
    if (error) {
      return "Showing 0 ".concat(customLabel, "s");
    } else if (withPagination) {
      return "Showing ".concat(startIndex, "-").concat(endIndex, " of ").concat(totalRecords, " ").concat(customLabel).concat(getPluralSuffix(totalRecords));
    }

    return "Showing ".concat(totalRecords, " ").concat(customLabel).concat(getPluralSuffix(totalRecords));
  };

  var getSelectedRowLabel = function getSelectedRowLabel() {
    if (selectedRowsCount > 0 && uniqueColumnName && withCheckbox) {
      return "Selected ".concat(selectedRowsCount, " ").concat(customLabel).concat(getPluralSuffix(selectedRowsCount));
    } else if (selectedCount && !uniqueColumnName && withCheckbox) {
      return "Selected ".concat(selectedCount, " ").concat(customLabel).concat(getPluralSuffix(selectedCount));
    } else if (withPagination) {
      return "Showing ".concat(startIndex, "-").concat(endIndex, " of ").concat(totalRecords, " ").concat(customLabel).concat(getPluralSuffix(totalRecords));
    }

    return "Showing ".concat(totalRecords, " ").concat(customLabel).concat(getPluralSuffix(totalRecords));
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "Header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "Header-content Header-content--top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "d-flex w-100"
  }, withSearch && /*#__PURE__*/React.createElement("div", {
    className: "Header-search"
  }, /*#__PURE__*/React.createElement(Input, {
    "data-test": "DesignSystem-Table-Header--withSearch",
    name: "GridHeader-search",
    icon: "search",
    placeholder: searchPlaceholder,
    onChange: onSearchChange,
    value: searchTerm,
    onClear: function onClear() {
      return updateSearchTerm && updateSearchTerm('');
    },
    disabled: loading && !hasSchema(schema),
    autoComplete: "off"
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
  }, children)), globalActionRenderer && /*#__PURE__*/React.createElement("div", {
    className: "Header-global-actions"
  }, globalActionRenderer(displayData))), /*#__PURE__*/React.createElement("div", {
    className: "Header-content Header-content--bottom"
  }, /*#__PURE__*/React.createElement("div", {
    className: "Header-label"
  }, !showHead && withCheckbox && !loading && /*#__PURE__*/React.createElement(Checkbox, _extends$2({}, selectAll, {
    onChange: function onChange(event) {
      if (onSelectAll) onSelectAll(event.target.checked);
    }
  })), loading ? /*#__PURE__*/React.createElement(Placeholder, {
    withImage: !showHead && withCheckbox
  }, /*#__PURE__*/React.createElement(PlaceholderParagraph, {
    length: 'small',
    size: 's'
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, showSelectedLabel ? /*#__PURE__*/React.createElement("span", {
    className: selectedRowLabelClass,
    onAnimationEnd: onSelectAnimationEnd
  }, /*#__PURE__*/React.createElement(Label, null, getSelectedRowLabel())) : /*#__PURE__*/React.createElement("span", {
    className: unselectedRowLabelClass,
    onAnimationEnd: onUnSelectAnimationEnd
  }, /*#__PURE__*/React.createElement(Label, null, getUnSelectedRowLabel())), selectedRowsCount > 0 && allowSelectAll && showSelectedLabel && /*#__PURE__*/React.createElement("div", {
    className: selectedRowLabelClass
  }, /*#__PURE__*/React.createElement("div", {
    className: "ml-4 d-flex"
  }, /*#__PURE__*/React.createElement(Button, {
    "data-test": "DesignSystem-Table-Header--selectAllItemsButton",
    size: "tiny",
    disabled: selectedRowsCount === totalRecords,
    onClick: onSelectAllRows
  }, "Select ".concat(totalRecords, " ").concat(customLabel, "s")), /*#__PURE__*/React.createElement(Button, {
    "data-test": "DesignSystem-Table-Header--clearSelectionItemsButton",
    size: "tiny",
    className: "ml-4",
    onClick: onClearSelection
  }, "Clear Selection"), selectionActionRenderer && /*#__PURE__*/React.createElement(Divider, {
    vertical: true,
    className: "mx-4 Table-Header--Divider"
  }))), selectionActionRenderer && selectedRowsCount > 0 && showSelectedLabel && /*#__PURE__*/React.createElement("div", {
    "data-test": "DesignSystem-Table-Header--ActionRenderer",
    className: selectedRowLabelClass
  }, selectionActionRenderer(selectedRowsRef === null || selectedRowsRef === void 0 ? void 0 : selectedRowsRef.current, selectedAllRef === null || selectedAllRef === void 0 ? void 0 : selectedAllRef.current)))), dynamicColumn && /*#__PURE__*/React.createElement("div", {
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

var isElementPresent = function isElementPresent(list, uniqueColumnName, value) {
  var arr = list === null || list === void 0 ? void 0 : list.filter(function (item) {
    return item[uniqueColumnName] === value;
  });
  return arr.length > 0;
};

var getUpdatedData = function getUpdatedData(data, selectedList, uniqueColumnName, isCancelSelection, isSelectAll) {
  var updatedData = data.map(function (item) {
    if (isSelectAll || item._selected && !isCancelSelection || uniqueColumnName && item[uniqueColumnName] && selectedList && isElementPresent(selectedList, uniqueColumnName, item[uniqueColumnName]) && !isCancelSelection) {
      item._selected = true;
    } else if (isCancelSelection) {
      item._selected = false;
    } else {
      item._selected = false;
    }

    return item;
  });
  return updatedData;
};

var uniqueByKey = function uniqueByKey(arr, key) {
  var list = new Set();
  return arr.filter(function (obj) {
    var value = obj[key];

    if (list.has(value)) {
      return false;
    } else {
      list.add(value);
      return true;
    }
  });
};

var removeDuplicate = function removeDuplicate(data, uniqueColumnName) {
  if (uniqueColumnName) {
    return uniqueByKey(data, uniqueColumnName);
  }

  return data;
};

var _excluded$m = ["children"];

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
  displayData: [],
  schema: [],
  loading: false,
  error: false,
  loaderSchema: [],
  sortingList: [],
  filterList: {},
  filterPosition: 'GRID',
  searchDebounceDuration: 750,
  pageJumpDebounceDuration: 750,
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
  _inherits(Table, _React$Component);

  var _super = _createSuper(Table);

  function Table(props) {
    var _this;

    _classCallCheck(this, Table);

    _this = _super.call(this, props);

    _defineProperty$1(_assertThisInitialized$1(_this), "debounceUpdate", void 0);

    _defineProperty$1(_assertThisInitialized$1(_this), "selectedRowsRef", /*#__PURE__*/React.createRef());

    _defineProperty$1(_assertThisInitialized$1(_this), "clearSelectionRef", /*#__PURE__*/React.createRef());

    _defineProperty$1(_assertThisInitialized$1(_this), "selectAllRef", /*#__PURE__*/React.createRef());

    _defineProperty$1(_assertThisInitialized$1(_this), "updateData", function (searchUpdate) {
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

    _defineProperty$1(_assertThisInitialized$1(_this), "updateDataFn", function () {
      var _this$props = _this.props,
          fetchData = _this$props.fetchData,
          pageSize = _this$props.pageSize,
          withPagination = _this$props.withPagination,
          dataProp = _this$props.data,
          onSearch = _this$props.onSearch,
          uniqueColumnName = _this$props.uniqueColumnName;
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
              var dataReplica = JSON.parse(JSON.stringify(_data2));
              var schema = _this.state.schema.length ? _this.state.schema : res.schema;

              var preSelectedRows = _data2.filter(function (item) {
                return item._selected;
              });

              if (_this.clearSelectionRef.current) {
                _this.selectedRowsRef.current = [];
              } else {
                _this.selectedRowsRef.current = _this.selectedRowsRef.current ? removeDuplicate([].concat(_toConsumableArray(_this.selectedRowsRef.current), _toConsumableArray(preSelectedRows)), uniqueColumnName) : removeDuplicate(_toConsumableArray(preSelectedRows), uniqueColumnName);
              }

              var selectedData = getUpdatedData(dataReplica, _this.selectedRowsRef.current, uniqueColumnName, _this.clearSelectionRef.current, _this.selectAllRef.current);

              _this.setState({
                data: selectedData,
                displayData: _data2,
                schema: schema,
                selectAll: getSelectAll(selectedData, _this.props.selectDisabledRow, _this.clearSelectionRef.current),
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
        var preSelectedRows = renderedData.filter(function (item) {
          return item._selected;
        });
        var renderedDataReplica = JSON.parse(JSON.stringify(renderedData));

        if (_this.clearSelectionRef.current) {
          _this.selectedRowsRef.current = [];
        } else {
          _this.selectedRowsRef.current = _this.selectedRowsRef.current ? removeDuplicate([].concat(_toConsumableArray(_this.selectedRowsRef.current), _toConsumableArray(preSelectedRows)), uniqueColumnName) : removeDuplicate(_toConsumableArray(preSelectedRows), uniqueColumnName);
        }

        var selectedData = getUpdatedData(renderedDataReplica, _this.selectedRowsRef.current, uniqueColumnName, _this.clearSelectionRef.current, _this.selectAllRef.current);

        _this.setState({
          totalRecords: totalRecords,
          error: !renderedData.length,
          errorType: 'NO_RECORDS_FOUND',
          selectAll: getSelectAll(renderedData, _this.props.selectDisabledRow, _this.clearSelectionRef.current),
          schema: renderedSchema,
          displayData: sortedData,
          data: selectedData
        });
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onSelect", function (rowIndexes, selected) {
      var data = _this.state.data;
      var _this$props2 = _this.props,
          onSelect = _this$props2.onSelect,
          uniqueColumnName = _this$props2.uniqueColumnName;

      if (_this.selectAllRef.current && rowIndexes !== -1 && !selected) {
        _this.selectAllRef.current = false;
        _this.selectedRowsRef.current = [];

        var _indexes = Array.from({
          length: data.length
        }, function (_, i) {
          return i;
        });

        var _newData = updateBatchData(data, _indexes, {
          _selected: false
        }, _this.props.selectDisabledRow);

        _this.setState({
          data: _newData,
          selectAll: {
            checked: false,
            indeterminate: false
          }
        });

        if (onSelect) {
          if (_this.props.uniqueColumnName) {
            onSelect(_indexes, selected, _this.selectedRowsRef.current, _this.selectAllRef.current);
          } else {
            // To avoid breaking the current selection flow
            onSelect(_indexes, selected, rowIndexes === -1 ? [] : _newData.filter(function (d) {
              return d._selected;
            }));
          }
        }

        return;
      }

      var indexes = [rowIndexes];
      var rowData = data[rowIndexes];
      var selectedItemList = rowIndexes === -1 ? [] : [rowData];
      var newData = data;

      if (rowIndexes >= 0) {
        newData = updateBatchData(data, indexes, {
          _selected: selected
        }, _this.props.selectDisabledRow);

        _this.resetClearSelection();

        _this.setState({
          data: newData,
          selectAll: getSelectAll(newData, _this.props.selectDisabledRow, _this.clearSelectionRef.current)
        });

        if (_this.selectedRowsRef.current && selected) {
          selectedItemList = [_objectSpread2(_objectSpread2({}, rowData), {}, {
            _selected: selected
          })].concat(_toConsumableArray(_this.selectedRowsRef.current));
        }

        if (!selected && uniqueColumnName) {
          selectedItemList = _this.selectedRowsRef.current.filter(function (item) {
            return item[uniqueColumnName] !== rowData[uniqueColumnName];
          });
        }

        _this.selectedRowsRef.current = removeDuplicate(selectedItemList, uniqueColumnName);
      } else if (rowIndexes === -1 && _this.selectedRowsRef.current) {
        selectedItemList = _this.selectedRowsRef.current;
      }

      if (onSelect) {
        if (_this.props.uniqueColumnName) {
          var _selectedItemList;

          onSelect(indexes, selected, rowIndexes === -1 && ((_selectedItemList = selectedItemList) === null || _selectedItemList === void 0 ? void 0 : _selectedItemList.length) === 0 ? [] : _this.selectedRowsRef.current, _this.selectAllRef.current);
        } else {
          // To avoid breaking the current selection flow
          onSelect(indexes, selected, rowIndexes === -1 ? [] : newData.filter(function (d) {
            return d._selected;
          }));
        }
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onSelectAll", function (selected, selectAll, headerCheckbox) {
      var _this$props3 = _this.props,
          onSelect = _this$props3.onSelect,
          uniqueColumnName = _this$props3.uniqueColumnName;
      var data = _this.state.data;
      var indexes = Array.from({
        length: data.length
      }, function (_, i) {
        return i;
      });
      var newData = updateBatchData(data, indexes, {
        _selected: selected
      }, _this.props.selectDisabledRow);
      var selectedIndex = [];
      newData.forEach(function (item, key) {
        if (item._selected) {
          selectedIndex.push(key);
        }
      });
      var selectedData = [];

      if (selected) {
        _this.resetClearSelection();

        selectedData = selectAll === undefined ? [].concat(_toConsumableArray(_this.selectedRowsRef.current || []), _toConsumableArray(newData.filter(function (d) {
          return d._selected;
        }))) : _this.selectedRowsRef.current;
      } else if (!selected && headerCheckbox && uniqueColumnName) {
        _this.selectAllRef.current = false;
        _this.selectedRowsRef.current = [].concat(_toConsumableArray(_this.selectedRowsRef.current || []), _toConsumableArray(newData));
        _this.selectedRowsRef.current = _this.selectedRowsRef.current.filter(function (item1) {
          return !newData.some(function (item2) {
            return item1[uniqueColumnName] === item2[uniqueColumnName];
          });
        });
      } else {
        _this.selectedRowsRef.current = [];
        _this.selectAllRef.current = false;
      }

      if (!(headerCheckbox && !selected)) {
        _this.selectedRowsRef.current = removeDuplicate(selectedData, uniqueColumnName);
      }

      if (onSelect) {
        if (_this.props.uniqueColumnName) {
          if (headerCheckbox && !selected) {
            onSelect(selectedIndex, selected, removeDuplicate(_this.selectedRowsRef.current, uniqueColumnName), _this.selectAllRef.current);
          } else {
            onSelect(selectedIndex, selected, removeDuplicate(selectedData, uniqueColumnName), _this.selectAllRef.current);
          }
        } else {
          onSelect(selectedIndex, selected, newData.filter(function (d) {
            return d._selected;
          }), selectAll);
        }
      }

      _this.setState({
        data: newData,
        selectAll: getSelectAll(newData, _this.props.selectDisabledRow)
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onPageChange", function (newPage) {
      _this.setState({
        page: newPage
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "updateSchema", function (newSchema) {
      _this.setState({
        schema: newSchema
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "updateSortingList", function (newSortingList) {
      var multipleSorting = _this.props.multipleSorting;

      _this.setState({
        sortingList: multipleSorting ? _toConsumableArray(newSortingList) : newSortingList.slice(-1),
        page: 1
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "updateFilterList", function (newFilterList) {
      _this.setState({
        filterList: newFilterList,
        page: 1
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "updateSearchTerm", function (newSearchTerm) {
      _this.setState({
        searchTerm: newSearchTerm,
        page: 1
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onClearSelection", function () {
      _this.selectedRowsRef.current = [];
      _this.clearSelectionRef.current = true;
      _this.selectAllRef.current = false;

      _this.onSelectAll(false);

      _this.setState({
        selectAll: getSelectAll([], _this.props.selectDisabledRow, _this.clearSelectionRef.current)
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "resetClearSelection", function () {
      _this.clearSelectionRef.current = false;
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onSelectAllRows", function () {
      _this.selectAllRef.current = _this.props.uniqueColumnName ? true : false;

      _this.onSelectAll(true, true);
    });

    var _async = ('fetchData' in _this.props);

    var _data = props.data || [];

    var _schema = props.schema || [];

    _this.state = {
      async: _async,
      data: !_async ? _data : [],
      displayData: !_async ? _data : [],
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

  _createClass(Table, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateData();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (!this.state.async) {
        if (prevProps.error !== this.props.error) {
          var _this$props4 = this.props,
              _this$props4$data = _this$props4.data,
              _data3 = _this$props4$data === void 0 ? [] : _this$props4$data,
              _this$props4$schema = _this$props4.schema,
              schema = _this$props4$schema === void 0 ? [] : _this$props4$schema;

          this.setState({
            data: _data3,
            displayData: _data3,
            schema: schema,
            error: this.props.error || false,
            errorType: this.props.errorType,
            page: 1,
            totalRecords: _data3.length || 0,
            selectAll: getSelectAll([])
          });
        }

        if (prevProps.loading !== this.props.loading) {
          var _this$props5 = this.props,
              _this$props5$data = _this$props5.data,
              _data4 = _this$props5$data === void 0 ? [] : _this$props5$data,
              _this$props5$schema = _this$props5.schema,
              _schema2 = _this$props5$schema === void 0 ? [] : _this$props5$schema;

          this.setState({
            data: _data4,
            displayData: _data4,
            schema: _schema2,
            loading: this.props.loading || false,
            error: this.props.error || false,
            errorType: this.props.errorType,
            page: 1,
            totalRecords: _data4.length || 0,
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
      var _this$props6 = this.props,
          showHead = _this$props6.showHead,
          type = _this$props6.type,
          size = _this$props6.size,
          headCellTooltip = _this$props6.headCellTooltip,
          separator = _this$props6.separator,
          draggable = _this$props6.draggable,
          nestedRows = _this$props6.nestedRows,
          nestedRowRenderer = _this$props6.nestedRowRenderer,
          withHeader = _this$props6.withHeader,
          headerOptions = _this$props6.headerOptions,
          withCheckbox = _this$props6.withCheckbox,
          showMenu = _this$props6.showMenu,
          withPagination = _this$props6.withPagination,
          paginationType = _this$props6.paginationType,
          pageSize = _this$props6.pageSize,
          pageJumpDebounceDuration = _this$props6.pageJumpDebounceDuration,
          onRowClick = _this$props6.onRowClick,
          loaderSchema = _this$props6.loaderSchema,
          errorTemplate = _this$props6.errorTemplate,
          className = _this$props6.className,
          filterPosition = _this$props6.filterPosition,
          uniqueColumnName = _this$props6.uniqueColumnName;
      var baseProps = extractBaseProps(this.props);

      var _ref = headerOptions,
          headerChildren = _ref.children,
          headerAttr = _objectWithoutProperties(_ref, _excluded$m);

      var classes = className ? " ".concat(className) : '';
      var totalRecords = this.state.totalRecords;
      var totalPages = getTotalPages(totalRecords, pageSize);
      return /*#__PURE__*/React.createElement("div", _extends$2({}, baseProps, {
        className: "Table".concat(classes),
        "data-test": "DesignSystem-Table-wrapper"
      }), withHeader && /*#__PURE__*/React.createElement("div", {
        className: "Table-header",
        "data-test": "DesignSystem-Table-header"
      }, /*#__PURE__*/React.createElement(Header, _extends$2({}, this.state, {
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
        showFilters: filterPosition === 'HEADER',
        selectedRowsRef: this.selectedRowsRef,
        onClearSelection: this.onClearSelection,
        onSelectAllRows: this.onSelectAllRows,
        selectedAllRef: this.selectAllRef,
        uniqueColumnName: uniqueColumnName
      }, headerAttr), headerChildren)), /*#__PURE__*/React.createElement("div", {
        className: "Table-grid"
      }, /*#__PURE__*/React.createElement(Grid, _extends$2({}, this.state, {
        key: this.state.searchTerm,
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
        onPageChange: this.onPageChange,
        pageJumpDebounceDuration: pageJumpDebounceDuration
      })));
    }
  }]);

  return Table;
}(React.Component);

_defineProperty$1(Table, "defaultProps", defaultProps);

/**
 * List component has been deprecated, please use [Listbox](https://mds.innovaccer.com/?path=/docs/components-listbox-all--all) component instead.
 *
 * **`List` is a pattern of `Table` with no Head Cells.**
 *
 * Please refer to stories of Table for examples. Simply replace `Table` with `List` to use it.
 */
var List = function List(props) {
  return /*#__PURE__*/React.createElement(Table, _extends$2({}, props, {
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
          setMenuState(_defineProperty$1({}, name, val || !menuState[name]));
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
    }, _defineProperty$1(_classNames, 'Navigation-menu--vertical', true), _defineProperty$1(_classNames, 'Navigation-menu--active', activeMenu), _defineProperty$1(_classNames, 'Navigation-menu--rounded', expanded && rounded), _classNames));
    var menuIconClasses = classnames({
      'Navigation-menuIcon': true,
      'Navigation-menuIcon--active': activeMenuIcon
    });
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      "data-test": "DesignSystem-Navigation-VerticalNavigation--menuWrapper"
    }, /*#__PURE__*/React.createElement("div", {
      "data-test": "DesignSystem-Navigation-VerticalNavigation--menuItem",
      className: menuClasses,
      onClick: function onClick() {
        return onClickHandler(menu);
      }
    }, menu.icon && /*#__PURE__*/React.createElement(Icon, {
      "data-test": "DesignSystem-Navigation-VerticalNavigation--menuIcon",
      className: menuIconClasses,
      name: menu.icon,
      appearance: getIconAppearance(activeMenuIcon, menu.disabled)
    }), expanded && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "Navigation-menuLabel"
    }, /*#__PURE__*/React.createElement(Text, {
      appearance: getTextAppearance(activeMenu, menu.disabled)
    }, menu.label)), menu.subMenu && menu.subMenu.length > 0 && /*#__PURE__*/React.createElement(Icon, {
      "data-test": "DesignSystem-Navigation-VerticalNavigation--expandedSubMenuIcon",
      className: "mx-4",
      name: menuState[menu.name] ? 'keyboard_arrow_up' : 'keyboard_arrow_down',
      appearance: "subtle"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "Navigation-subMenu"
    }, menuState[menu.name] && menu.subMenu && expanded && menu.subMenu.map(function (subMenu, ind) {
      var _classNames2;

      var isActive = isMenuActive(menus, subMenu, active);
      var subMenuClasses = classnames(menuClasses, (_classNames2 = {}, _defineProperty$1(_classNames2, 'Navigation-menu--subMenu', true), _defineProperty$1(_classNames2, 'Navigation-menu--active', isActive), _classNames2));
      return (
        /*#__PURE__*/
        // TODO(a11y)
        // eslint-disable-next-line
        React.createElement("div", {
          "data-test": "DesignSystem-Navigation-VerticalNavigation--subMenu",
          key: ind,
          className: subMenuClasses,
          onClick: function onClick() {
            return onClickHandler(subMenu);
          }
        }, /*#__PURE__*/React.createElement(Text, {
          appearance: getTextAppearance(isActive, subMenu.disabled)
        }, subMenu.label))
      );
    })));
  });
  var footerClasses = classnames(_defineProperty$1({
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
  var classes = classnames((_classNames = {}, _defineProperty$1(_classNames, 'Navigation', true), _defineProperty$1(_classNames, "Navigation--".concat(type), type), _defineProperty$1(_classNames, 'justify-content-center', type === 'horizontal' && align === 'center'), _defineProperty$1(_classNames, 'justify-content-start', type === 'horizontal' && align === 'left'), _defineProperty$1(_classNames, 'Navigation--collapsed', !expanded), _classNames), className);

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

  return /*#__PURE__*/React.createElement("div", _extends$2({}, baseProps, {
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

var Status = function Status(props) {
  var status = props.status,
      meta = props.meta,
      navigationPosition = props.navigationPosition,
      navigation = props.navigation,
      tabs = props.tabs;
  var statusClasses = classnames({
    'PageHeader-statusWrapper': true,
    'mb-3': navigationPosition === 'bottom' && navigation || tabs
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, (status || meta) && /*#__PURE__*/React.createElement("div", {
    className: statusClasses,
    "data-test": "DesignSystem-PageHeader--Status"
  }, status, meta));
};
var Action = function Action(props) {
  var actions = props.actions,
      navigation = props.navigation,
      stepper = props.stepper;
  return /*#__PURE__*/React.createElement(React.Fragment, null, actions ? /*#__PURE__*/React.createElement(Column, {
    size: "4",
    sizeXL: "4",
    sizeM: "4",
    "data-test": "DesignSystem-PageHeader--Actions"
  }, /*#__PURE__*/React.createElement("div", {
    className: "PageHeader-actionsWrapper"
  }, actions)) : (navigation || stepper) && /*#__PURE__*/React.createElement(Column, {
    size: "4",
    sizeXL: "4",
    sizeM: "4",
    "data-test": "DesignSystem-PageHeader--Actions"
  }, /*#__PURE__*/React.createElement("div", {
    className: "PageHeader-actionsWrapper"
  })));
};
var Nav = function Nav(props) {
  var navigation = props.navigation,
      stepper = props.stepper;

  if (!navigation && !stepper) {
    return null;
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "PageHeader-navigationWrapper",
    "data-test": "DesignSystem-PageHeader--Nav"
  }, navigation || stepper);
};
var CenterNav = function CenterNav(props) {
  var colSize = props.colSize,
      breadcrumbs = props.breadcrumbs,
      navigationPosition = props.navigationPosition;
  return /*#__PURE__*/React.createElement(React.Fragment, null, (!breadcrumbs || navigationPosition === 'center') && colSize === '4' && /*#__PURE__*/React.createElement(Column, {
    size: "4",
    sizeXL: "4",
    sizeM: "4",
    "data-test": "DesignSystem-PageHeader--CenterNav"
  }, /*#__PURE__*/React.createElement(Nav, props)));
};
var BackButton = function BackButton(props) {
  var button = props.button;
  return /*#__PURE__*/React.createElement(React.Fragment, null, button && /*#__PURE__*/React.createElement("div", {
    className: "mr-5 my-3",
    "data-test": "DesignSystem-PageHeader--Button"
  }, button));
};
var Title = function Title(props) {
  var badge = props.badge,
      title = props.title;
  return /*#__PURE__*/React.createElement("div", {
    className: "PageHeader-titleWrapper",
    "data-test": "DesignSystem-PageHeader--Title"
  }, /*#__PURE__*/React.createElement(Heading, {
    className: "PageHeader-title"
  }, title), badge);
};

var PageHeader = function PageHeader(props) {
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
      className = props.className,
      button = props.button;
  var baseProps = extractBaseProps(props);
  var wrapperClasses = classnames(_defineProperty$1({
    'PageHeader-wrapper': true
  }, 'PageHeader-wrapper--withTabs', tabs), className);
  var classes = classnames({
    PageHeader: true
  });
  var colSize = (navigation || stepper) && navigationPosition === 'center' ? '4' : actions ? '8' : '12';
  var centerNavProps = {
    colSize: colSize,
    breadcrumbs: breadcrumbs,
    navigationPosition: navigationPosition,
    navigation: navigation,
    stepper: stepper
  };
  var statusProps = {
    status: status,
    meta: meta,
    navigationPosition: navigationPosition,
    navigation: navigation,
    tabs: tabs
  };
  return /*#__PURE__*/React.createElement("div", {
    "data-test": "DesignSystem-PageHeader"
  }, /*#__PURE__*/React.createElement("div", _extends$2({}, baseProps, {
    className: wrapperClasses
  }), breadcrumbs && /*#__PURE__*/React.createElement("div", {
    className: "pl-6",
    "data-test": "DesignSystem-PageHeader--Breadcrumbs"
  }, breadcrumbs), /*#__PURE__*/React.createElement("div", {
    className: "d-flex pl-6"
  }, /*#__PURE__*/React.createElement(BackButton, {
    button: button
  }), /*#__PURE__*/React.createElement("div", {
    className: classes
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Column, {
    size: colSize,
    sizeXL: colSize,
    sizeM: colSize
  }, /*#__PURE__*/React.createElement(Title, {
    badge: badge,
    title: title
  })), /*#__PURE__*/React.createElement(CenterNav, centerNavProps), /*#__PURE__*/React.createElement(Action, {
    actions: actions,
    navigation: navigation,
    stepper: stepper
  })), /*#__PURE__*/React.createElement(Status, statusProps))), /*#__PURE__*/React.createElement("div", {
    className: "pl-3"
  }, navigationPosition === 'bottom' && /*#__PURE__*/React.createElement(Nav, {
    navigation: navigation,
    stepper: stepper
  }), tabs && /*#__PURE__*/React.createElement("div", {
    "data-test": "DesignSystem-PageHeader--Tabs"
  }, tabs))), separator && /*#__PURE__*/React.createElement(Divider, {
    appearance: "header"
  }));
};
PageHeader.defaultProps = {
  navigationPosition: 'center',
  separator: true
};

var useEffect = React.useEffect,
    useState = React.useState;
var IconMapping$1 = {
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
  var fileType = IconMapping$1[type] ? type : 'others';
  var iconClass = classnames((_classNames = {}, _defineProperty$1(_classNames, 'FileIcon', true), _defineProperty$1(_classNames, 'FileIcon--animate', animate), _defineProperty$1(_classNames, "FileIcon--".concat(fileType), true), _classNames));
  var uploadingIconClass = classnames((_classNames2 = {}, _defineProperty$1(_classNames2, 'FileIcon', true), _defineProperty$1(_classNames2, 'FileIcon--uploading', true), _classNames2));
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
      className: uploadingIconClass,
      "data-test": "DesignSystem-FileListItem--ProgressRing"
    });
  }

  return /*#__PURE__*/React.createElement(Icon, {
    name: IconMapping$1[fileType],
    className: iconClass,
    "data-test": "DesignSystem-FileListItem--Icon"
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
  var FileItemClass = classnames(_defineProperty$1({}, 'FileItem', true), className);

  var onClickHandler = function onClickHandler() {
    if (onClick) {
      onClick(fileItem);
    }
  };

  return (
    /*#__PURE__*/
    // TODO(a11y)
    //  eslint-disable-next-line
    React.createElement("div", _extends$2({}, baseProps, {
      className: FileItemClass,
      onClick: onClickHandler,
      "data-test": "DesignSystem-FileListItem"
    }), /*#__PURE__*/React.createElement("div", {
      className: "FileItem-file"
    }, /*#__PURE__*/React.createElement("div", {
      className: "FileItem-fileContent"
    }, /*#__PURE__*/React.createElement(FileIcon, {
      file: file,
      status: status,
      progress: progress
    }), /*#__PURE__*/React.createElement(Text, {
      "data-test": "DesignSystem-FileListItem--Name",
      className: "FileItem-text",
      appearance: status === 'completed' ? 'default' : 'subtle',
      weight: "medium"
    }, name)), /*#__PURE__*/React.createElement("div", {
      className: "FileItem-actions"
    }, /*#__PURE__*/React.createElement(Text, {
      className: "FileItem-size",
      size: "small",
      appearance: 'subtle',
      "data-test": "DesignSystem-FileListItem--Size"
    }, fileSize || file.size), !!actions && actions)), status === 'error' && /*#__PURE__*/React.createElement(InlineMessage, {
      size: "small",
      appearance: "alert",
      description: errorMessage,
      className: 'FileItem-error'
    }))
  );
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
  return /*#__PURE__*/React.createElement(Card, _extends$2({}, baseProps, {
    shadow: 'none',
    className: className
  }), fileList.map(function (fileItem, index) {
    return /*#__PURE__*/React.createElement(FileListItem, _extends$2({
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

var _excluded$l = ["type", "fields", "placeholder", "autoFocus", "onComplete", "onFocus", "onBlur", "className", "value"];
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
      var rest = _objectWithoutProperties(props, _excluded$l);

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
        {
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
        }

      case KEY_CODE.left:
        {
          e.preventDefault();

          if (prev && prev.current) {
            prev.current.focus({
              preventScroll: true
            });
          }

          break;
        }

      case KEY_CODE.right:
        {
          e.preventDefault();

          if (nextRef && nextRef.current) {
            nextRef.current.focus({
              preventScroll: true
            });
          }

          break;
        }

      case KEY_CODE.up:
      case KEY_CODE.down:
      case KEY_CODE.e:
      case KEY_CODE.E:
        {
          if (type === 'number') {
            e.preventDefault();
          }

          break;
        }
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
    return /*#__PURE__*/React__default.createElement(Input, _extends$2({
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
      ref: refs[index],
      type: type
    }, rest));
  }));
};

VerificationCodeInput.displayName = 'VerificationCodeInput';
VerificationCodeInput.defaultProps = {
  type: 'number',
  fields: 4
};

var IconMapping = {
  success: 'check_circle',
  info: 'info',
  warning: 'warning',
  alert: 'error'
};
var InlineMessage = function InlineMessage(props) {
  var _classNames2;

  var appearance = props.appearance,
      className = props.className,
      description = props.description,
      size = props.size;
  var baseProps = extractBaseProps(props);
  var InlineMessageClass = classnames(_defineProperty$1({}, 'InlineMessage', true), className);
  var IconClass = classnames((_classNames2 = {}, _defineProperty$1(_classNames2, 'InlineMessage-icon--warning', appearance === 'warning'), _defineProperty$1(_classNames2, 'InlineMessage-icon--small', size === 'small'), _defineProperty$1(_classNames2, 'InlineMessage-icon--regular', size === 'regular'), _classNames2));
  var DescriptionClass = classnames(_defineProperty$1({}, "InlineMessage-text--".concat(appearance), appearance));
  var IconSize = size === 'small' ? 14 : 16;
  var TextWeight = size === 'small' ? 'medium' : undefined;
  return /*#__PURE__*/React.createElement("div", _extends$2({
    "data-test": "DesignSystem-InlineMessage"
  }, baseProps, {
    className: InlineMessageClass
  }), appearance !== 'default' && /*#__PURE__*/React.createElement(Icon, {
    "data-test": "DesignSystem-InlineMessage--Icon",
    name: IconMapping[appearance],
    appearance: appearance,
    className: IconClass,
    size: IconSize
  }), /*#__PURE__*/React.createElement(Text, {
    size: size,
    weight: TextWeight,
    className: DescriptionClass,
    "data-test": "DesignSystem-InlineMessage--Description"
  }, description));
};
InlineMessage.displayName = 'InlineMessage';
InlineMessage.defaultProps = {
  appearance: 'default',
  description: '',
  size: 'regular'
};

var renderCheckbox = function renderCheckbox(list, handleOnChange, ChoiceListDisabled, size, alignment, selected) {
  return list.map(function (item, checkboxIndex) {
    var name = item.name,
        value = item.value,
        helpText = item.helpText,
        disabled = item.disabled,
        label = item.label;
    return /*#__PURE__*/React.createElement(Checkbox, {
      key: checkboxIndex,
      label: label,
      onChange: handleOnChange,
      disabled: disabled || ChoiceListDisabled,
      helpText: helpText,
      size: size,
      name: name,
      value: value,
      defaultChecked: selected.length !== 0 && selected.includes(value),
      className: getCheckboxClassName(alignment, checkboxIndex)
    });
  });
};

var renderRadio = function renderRadio(list, handleOnChange, ChoiceListDisabled, size, alignment, selected) {
  return list.map(function (item, radioIndex) {
    var name = item.name,
        value = item.value,
        helpText = item.helpText,
        disabled = item.disabled,
        label = item.label;
    return /*#__PURE__*/React.createElement(Radio, {
      key: radioIndex,
      label: label,
      onChange: handleOnChange,
      disabled: disabled || ChoiceListDisabled,
      helpText: helpText,
      size: size,
      name: name,
      value: value,
      defaultChecked: selected.length !== 0 && selected.includes(value),
      className: getRadioClassName(alignment, radioIndex)
    });
  });
};

var getCheckboxClassName = function getCheckboxClassName(alignment, index) {
  var _classNames;

  var ChoiceListCheckboxClass = classnames((_classNames = {}, _defineProperty$1(_classNames, "ChoiceList-checkbox--".concat(alignment), true), _defineProperty$1(_classNames, 'ml-0', index === 0 && alignment === 'horizontal'), _defineProperty$1(_classNames, 'mt-4', alignment === 'horizontal'), _classNames));
  return ChoiceListCheckboxClass;
};

var getRadioClassName = function getRadioClassName(alignment, index) {
  var _classNames2;

  var ChoiceListRadioClass = classnames((_classNames2 = {}, _defineProperty$1(_classNames2, "ChoiceList-radio--".concat(alignment), true), _defineProperty$1(_classNames2, 'ml-0', index === 0 && alignment === 'horizontal'), _defineProperty$1(_classNames2, 'mt-4', alignment === 'horizontal'), _classNames2));
  return ChoiceListRadioClass;
};

var ChoiceList = function ChoiceList(props) {
  var title = props.title,
      choices = props.choices,
      _props$alignment = props.alignment,
      alignment = _props$alignment === void 0 ? 'vertical' : _props$alignment,
      _props$allowMultiple = props.allowMultiple,
      allowMultiple = _props$allowMultiple === void 0 ? false : _props$allowMultiple,
      onChange = props.onChange,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$size = props.size,
      size = _props$size === void 0 ? 'regular' : _props$size,
      className = props.className;
  var _props$selected = props.selected,
      selected = _props$selected === void 0 ? [] : _props$selected;
  var selectedChoiceValue = selected && selected || [];
  var ChoiceListClass = classnames(_defineProperty$1({}, 'ChoiceList', true), className);
  var ChoiceListVerticalClass = classnames(_defineProperty$1({}, 'ChoiceList--alignVertical', true));
  var ChoiceHorizontalClass = classnames(_defineProperty$1({}, 'ChoiceList--alignHorizontal', true));

  var handleOnChange = function handleOnChange(e) {
    if (e.target.checked && allowMultiple) {
      if (!selectedChoiceValue.includes(e.target.value)) {
        selectedChoiceValue = [].concat(_toConsumableArray(selectedChoiceValue), [e.target.value]);
      }
    } else if (!e.target.checked && allowMultiple) {
      selectedChoiceValue = selectedChoiceValue.filter(function (el) {
        return el !== e.target.value;
      });
    }

    if (!allowMultiple) {
      if (!selectedChoiceValue.includes(e.target.value)) {
        selectedChoiceValue = [];
        selectedChoiceValue = [].concat(_toConsumableArray(selectedChoiceValue), [e.target.value]);
      }
    }

    if (onChange) onChange(e, selectedChoiceValue);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("fieldset", {
    className: ChoiceListClass,
    "data-test": "DesignSystem-ChoiceList-Wrapper"
  }, title && title.trim() && /*#__PURE__*/React.createElement(Label, {
    withInput: true
  }, title.trim()), allowMultiple ? /*#__PURE__*/React.createElement("div", {
    className: "".concat(alignment === 'horizontal' ? ChoiceHorizontalClass : ChoiceListVerticalClass)
  }, renderCheckbox(choices, handleOnChange, disabled, size, alignment, selected)) : /*#__PURE__*/React.createElement("div", {
    className: "".concat(alignment === 'horizontal' ? ChoiceHorizontalClass : ChoiceListVerticalClass)
  }, renderRadio(choices, handleOnChange, disabled, size, alignment, selected))));
};
ChoiceList.displayName = 'ChoiceList';
ChoiceList.defaultProps = {
  alignment: 'vertical',
  size: 'regular',
  allowMultiple: false,
  disabled: false
};

var Divider = function Divider(props) {
  var _classNames;

  var vertical = props.vertical,
      appearance = props.appearance,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var DividerClass = classnames((_classNames = {}, _defineProperty$1(_classNames, 'Divider', true), _defineProperty$1(_classNames, 'Divider--horizontal', !vertical), _defineProperty$1(_classNames, 'Divider--vertical', vertical), _defineProperty$1(_classNames, 'Divider--basic', !vertical && appearance !== 'header'), _defineProperty$1(_classNames, 'Divider--header', !vertical && appearance === 'header'), _classNames), className);
  return /*#__PURE__*/React.createElement("hr", _extends$2({
    "data-test": "DesignSystem-Divider"
  }, baseProps, {
    className: DividerClass
  }));
};
Divider.displayName = 'Divider';
Divider.defaultProps = {
  appearance: 'basic',
  vertical: false
};

var HelpText = function HelpText(props) {
  var error = props.error,
      message = props.message,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var classes = classnames({
    'mt-3': true
  }, className);
  if (!message) return null;

  if (error) {
    return /*#__PURE__*/React.createElement(InlineMessage, {
      size: "small",
      className: classes,
      appearance: "alert",
      description: message
    });
  }

  return /*#__PURE__*/React.createElement("div", _extends$2({}, baseProps, {
    className: classes
  }), /*#__PURE__*/React.createElement(Text, {
    appearance: "subtle",
    size: "small",
    weight: "medium"
  }, message));
};
HelpText.displayName = 'HelpText';

var _excluded$k = ["children", "type", "className", "disabled", "tabIndex", "icon", "subtle", "size", "iconAlign", "iconType"];
var sizeMapping = {
  tiny: 12,
  regular: 16
};
var LinkButton = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames, _classNames2;

  var children = props.children,
      type = props.type,
      className = props.className,
      disabled = props.disabled,
      tabIndex = props.tabIndex,
      icon = props.icon,
      subtle = props.subtle,
      size = props.size,
      iconAlign = props.iconAlign,
      iconType = props.iconType,
      rest = _objectWithoutProperties(props, _excluded$k);

  var buttonClass = classnames((_classNames = {}, _defineProperty$1(_classNames, 'LinkButton', true), _defineProperty$1(_classNames, "LinkButton--".concat(size), size), _defineProperty$1(_classNames, 'LinkButton--default', !subtle), _defineProperty$1(_classNames, 'LinkButton--subtle', subtle), _defineProperty$1(_classNames, "LinkButton--iconAlign-".concat(iconAlign), children && iconAlign), _defineProperty$1(_classNames, "".concat(className), className), _classNames));
  var iconClass = classnames((_classNames2 = {}, _defineProperty$1(_classNames2, 'LinkButton-icon', true), _defineProperty$1(_classNames2, "LinkButton-icon--".concat(iconAlign), children && iconAlign), _classNames2));
  return /*#__PURE__*/React.createElement("button", _extends$2({
    ref: ref,
    type: type,
    "data-test": "DesignSystem-LinkButton",
    className: buttonClass,
    disabled: disabled,
    tabIndex: tabIndex
  }, rest), /*#__PURE__*/React.createElement(React.Fragment, null, icon && /*#__PURE__*/React.createElement("div", {
    className: iconClass
  }, /*#__PURE__*/React.createElement(Icon, {
    "data-test": "DesignSystem-LinkButton--Icon",
    name: icon,
    type: iconType,
    size: size && sizeMapping[size]
  })), children));
});
LinkButton.displayName = 'LinkButton';
LinkButton.defaultProps = {
  size: 'regular',
  type: 'button',
  iconAlign: 'left'
};

var _excluded$j = ["children", "disabled", "className", "zIndex", "onClick"];
var ActionCard = function ActionCard(props) {
  var _classNames;

  var children = props.children,
      disabled = props.disabled,
      className = props.className,
      zIndex = props.zIndex,
      onClick = props.onClick,
      rest = _objectWithoutProperties(props, _excluded$j);

  var classes = classnames((_classNames = {}, _defineProperty$1(_classNames, 'ActionCard', true), _defineProperty$1(_classNames, 'ActionCard--disabled', disabled), _classNames), className);

  var onKeyDownHandler = function onKeyDownHandler(event) {
    if (event.key === 'Enter' && onClick) {
      onClick(event);
    }
  };

  return /*#__PURE__*/React.createElement("div", _extends$2({
    tabIndex: disabled ? -1 : 0,
    role: "link",
    "data-test": "DesignSystem-ActionCard",
    className: classes,
    onClick: onClick,
    onKeyDown: onKeyDownHandler
  }, rest), disabled && /*#__PURE__*/React.createElement("div", {
    style: {
      zIndex: zIndex
    },
    "data-test": "DesignSystem-ActionCard-Overlay",
    className: "ActionCard-overlay--disabled"
  }), children);
};
ActionCard.displayName = 'ActionCard';

var selectedCardValues = new Map();
function useMultiSelect() {
  var _React$useState = React.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      selectedCardIds = _React$useState2[0],
      setSelectedCardIds = _React$useState2[1];

  var isCardSelected = function isCardSelected(id) {
    return selectedCardIds.includes(id);
  };

  var updateCardSelection = function updateCardSelection(id, value) {
    var idList = _toConsumableArray(selectedCardIds);

    if (isCardSelected(id)) {
      idList = selectedCardIds.filter(function (cardKey) {
        return id !== cardKey;
      });
      selectedCardValues["delete"](id);
    } else {
      idList.push(id);
      selectedCardValues.set(id, value);
    }

    setSelectedCardIds(idList);
  };

  return {
    selectedCardIds: selectedCardIds,
    selectedCardValues: selectedCardValues,
    isCardSelected: isCardSelected,
    updateCardSelection: updateCardSelection
  };
}

function useSingleSelect() {
  var _React$useState = React.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      selectedCardIds = _React$useState2[0],
      setSelectedCardIds = _React$useState2[1];

  var _React$useState3 = React.useState([]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      selectedCardValues = _React$useState4[0],
      setSelectedCardValues = _React$useState4[1];

  var isCardSelected = function isCardSelected(id) {
    return selectedCardIds.includes(id);
  };

  var updateCardSelection = function updateCardSelection(id, value) {
    var idList = _toConsumableArray(selectedCardIds);

    var valueList = _toConsumableArray(selectedCardValues);

    if (selectedCardIds.includes(id)) {
      idList = [];
      valueList = [];
    } else {
      idList = [id];
      valueList = value ? [value] : [];
    }

    setSelectedCardIds(idList);
    setSelectedCardValues(valueList);
  };

  return {
    selectedCardIds: selectedCardIds,
    selectedCardValues: selectedCardValues,
    isCardSelected: isCardSelected,
    updateCardSelection: updateCardSelection
  };
}

var _excluded$i = ["children", "onClick", "disabled", "id", "cardValue", "overlayZIndex", "selected", "className"];
var SelectionCard = function SelectionCard(props) {
  var _classNames;

  var children = props.children,
      onClick = props.onClick,
      disabled = props.disabled,
      id = props.id,
      cardValue = props.cardValue,
      overlayZIndex = props.overlayZIndex,
      selected = props.selected,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded$i);

  var classes = classnames((_classNames = {}, _defineProperty$1(_classNames, 'Selection-card', true), _defineProperty$1(_classNames, 'Selection-card--selected', selected), _defineProperty$1(_classNames, 'Selection-card--disabled', disabled && !selected), _defineProperty$1(_classNames, 'Selection-card--selected-disabled', disabled && selected), _classNames), className);

  var onClickHandler = function onClickHandler(event) {
    onClick && onClick(event, id, cardValue);
  };

  var onKeyDownHandler = function onKeyDownHandler(event) {
    if (event.key === 'Enter') {
      onClickHandler(event);
    }
  };

  return /*#__PURE__*/React.createElement("div", _extends$2({
    role: "checkbox",
    "aria-checked": selected,
    tabIndex: 0,
    onKeyDown: onKeyDownHandler,
    onClick: function onClick(event) {
      return onClickHandler(event);
    },
    className: classes,
    "data-test": "DesignSystem-SelectionCard"
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "Selection-card-overlay",
    style: {
      zIndex: overlayZIndex
    },
    "data-test": "DesignSystem-SelectionCard-Overlay"
  }), children);
};
SelectionCard.defaultProps = {
  disabled: false,
  overlayZIndex: 2
};
SelectionCard.useMultiSelect = useMultiSelect;
SelectionCard.useSingleSelect = useSingleSelect;

function arrayMove(array, from, to) {
  array = array.slice();
  array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
  return array;
}
function getTranslateOffset(element) {
  var style = window.getComputedStyle(element);
  return Math.max(parseInt(style['margin-top'], 10), parseInt(style['margin-bottom'], 10)) + element.getBoundingClientRect().height;
}
function isTouchEvent(event) {
  return event.touches && event.touches.length || event.changedTouches && event.changedTouches.length;
}
function transformItem(element) {
  var offsetY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var offsetX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  if (!element) return;

  if (offsetY === null || offsetX === null) {
    element.style.removeProperty('transform');
    return;
  }

  element.style.transform = "translate(".concat(offsetX, "px, ").concat(offsetY, "px)");
}
function setItemTransition(element, duration, timing) {
  if (element) {
    element.style['transition'] = "transform ".concat(duration, "ms").concat(timing ? " ".concat(timing) : '');
  }
} // returns the "slot" for the targetValue, aka where it should go
// in an ordered "array", it starts with -1 index

function binarySearch(array, targetValue) {
  var min = 0;
  var max = array.length - 1;
  var guess;

  while (min <= max) {
    guess = Math.floor((max + min) / 2);

    if (!array[guess + 1] || array[guess] <= targetValue && array[guess + 1] >= targetValue) {
      return guess;
    } else if (array[guess] < targetValue && array[guess + 1] < targetValue) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }

  return -1;
} // A throttle function that uses requestAnimationFrame to rate limit

var schd = function schd(fn) {
  var lastArgs = [];
  var frameId = null;

  var wrapperFn = function wrapperFn() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    lastArgs = args;

    if (frameId) {
      return;
    }

    frameId = requestAnimationFrame(function () {
      frameId = null;
      fn.apply(void 0, _toConsumableArray(lastArgs));
    });
  };

  wrapperFn.cancel = function () {
    if (frameId) {
      cancelAnimationFrame(frameId);
    }
  };

  return wrapperFn;
};

var AUTOSCROLL_ACTIVE_OFFSET = 200;
var AUTOSCROLL_SPEED_RATIO = 10;

var Draggable = /*#__PURE__*/function (_React$Component) {
  _inherits(Draggable, _React$Component);

  var _super = _createSuper(Draggable);

  function Draggable(props) {
    var _this;

    _classCallCheck(this, Draggable);

    _this = _super.call(this, props);

    _defineProperty$1(_assertThisInitialized$1(_this), "listRef", /*#__PURE__*/React.createRef());

    _defineProperty$1(_assertThisInitialized$1(_this), "ghostRef", /*#__PURE__*/React.createRef());

    _defineProperty$1(_assertThisInitialized$1(_this), "topOffsets", []);

    _defineProperty$1(_assertThisInitialized$1(_this), "itemTranslateOffsets", []);

    _defineProperty$1(_assertThisInitialized$1(_this), "initialYOffset", 0);

    _defineProperty$1(_assertThisInitialized$1(_this), "lastScroll", 0);

    _defineProperty$1(_assertThisInitialized$1(_this), "lastYOffset", 0);

    _defineProperty$1(_assertThisInitialized$1(_this), "lastListYOffset", 0);

    _defineProperty$1(_assertThisInitialized$1(_this), "dropTimeout", void 0);

    _defineProperty$1(_assertThisInitialized$1(_this), "needle", -1);

    _defineProperty$1(_assertThisInitialized$1(_this), "afterIndex", -2);

    _defineProperty$1(_assertThisInitialized$1(_this), "state", {
      itemDragged: -1,
      itemDraggedOutOfBounds: -1,
      selectedItem: -1,
      initialX: 0,
      initialY: 0,
      targetX: 0,
      targetY: 0,
      targetHeight: 0,
      targetWidth: 0,
      scrollingSpeed: 0,
      scrollWindow: false
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "schdOnMouseMove", void 0);

    _defineProperty$1(_assertThisInitialized$1(_this), "schdOnTouchMove", void 0);

    _defineProperty$1(_assertThisInitialized$1(_this), "schdOnEnd", void 0);

    _defineProperty$1(_assertThisInitialized$1(_this), "doScrolling", function () {
      var _this$state = _this.state,
          scrollingSpeed = _this$state.scrollingSpeed,
          scrollWindow = _this$state.scrollWindow;
      var listEl = _this.listRef.current;
      window.requestAnimationFrame(function () {
        if (scrollWindow) {
          window.scrollTo(window.pageXOffset, window.pageYOffset + scrollingSpeed * 1.5);
        } else {
          listEl.scrollTop += scrollingSpeed;
        }

        if (scrollingSpeed !== 0) {
          _this.doScrolling();
        }
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "getChildren", function () {
      if (_this.listRef && _this.listRef.current) {
        return Array.from(_this.listRef.current.children);
      }

      return [];
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "calculateOffsets", function () {
      _this.topOffsets = _this.getChildren().map(function (item) {
        return item.getBoundingClientRect().top;
      });
      _this.itemTranslateOffsets = _this.getChildren().map(function (item) {
        return getTranslateOffset(item);
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "getTargetIndex", function (e) {
      return _this.getChildren().findIndex(function (child) {
        return child === e.target || child.contains(e.target);
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onMouseOrTouchStart", function (e) {
      var _e$target;

      if (_this.dropTimeout && _this.state.itemDragged > -1) {
        window.clearTimeout(_this.dropTimeout);

        _this.finishDrop();
      }

      var isTouch = isTouchEvent(e);
      if (!isTouch && e.button !== 0) return;

      var index = _this.getTargetIndex(e);

      var listItemTouched = _this.getChildren()[index];

      var isValidDragHandle = (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.classList.contains('Listbox-item--drag-icon');
      if (!isValidDragHandle) return;
      e.preventDefault();

      if (isTouch) {
        var opts = {
          passive: false
        };
        listItemTouched.style.touchAction = 'none';
        document.addEventListener('touchend', _this.schdOnEnd, opts);
        document.addEventListener('touchmove', _this.schdOnTouchMove, opts);
        document.addEventListener('touchcancel', _this.schdOnEnd, opts);
      } else {
        document.addEventListener('mousemove', _this.schdOnMouseMove);
        document.addEventListener('mouseup', _this.schdOnEnd);

        var listItemDragged = _this.getChildren()[_this.state.itemDragged];

        if (listItemDragged && listItemDragged.style) {
          listItemDragged.style.touchAction = '';
        }
      }

      _this.onStart(listItemTouched, isTouch ? e.touches[0].clientX : e.clientX, isTouch ? e.touches[0].clientY : e.clientY, index);
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "getYOffset", function () {
      var listScroll = _this.listRef.current ? _this.listRef.current.scrollTop : 0;
      return window.pageYOffset + listScroll;
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onStart", function (target, clientX, clientY, index) {
      if (_this.state.selectedItem > -1) {
        _this.setState({
          selectedItem: -1
        });

        _this.needle = -1;
      }

      var targetRect = target.getBoundingClientRect();
      var targetStyles = window.getComputedStyle(target);

      _this.calculateOffsets();

      _this.initialYOffset = _this.getYOffset();
      _this.lastYOffset = window.pageYOffset;
      _this.lastListYOffset = _this.listRef.current.scrollTop;

      _this.setState({
        itemDragged: index,
        targetX: targetRect.left - parseInt(targetStyles['margin-left'], 10),
        targetY: targetRect.top - parseInt(targetStyles['margin-top'], 10),
        targetHeight: targetRect.height,
        targetWidth: targetRect.width,
        initialX: clientX,
        initialY: clientY
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onMouseMove", function (e) {
      e.cancelable && e.preventDefault();

      _this.onMove(e.clientX, e.clientY);
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onTouchMove", function (e) {
      e.cancelable && e.preventDefault();

      _this.onMove(e.touches[0].clientX, e.touches[0].clientY);
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onWheel", function (e) {
      if (_this.state.itemDragged < 0) return;
      _this.lastScroll = _this.listRef.current.scrollTop += e.deltaY;

      _this.moveOtherItems();
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onMove", function (clientX, clientY) {
      if (_this.state.itemDragged === -1) return null;
      transformItem(_this.ghostRef.current, clientY - _this.state.initialY, _this.props.lockVertically ? 0 : clientX - _this.state.initialX);

      _this.autoScrolling(clientY);

      _this.moveOtherItems();

      return;
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "moveOtherItems", function () {
      var targetRect = _this.ghostRef.current.getBoundingClientRect();

      var itemVerticalCenter = targetRect.top + targetRect.height / 2;
      var offset = getTranslateOffset(_this.getChildren()[_this.state.itemDragged]);

      var currentYOffset = _this.getYOffset(); // adjust offsets if scrolling happens during the item movement


      if (_this.initialYOffset !== currentYOffset) {
        _this.topOffsets = _this.topOffsets.map(function (offset) {
          return offset - (currentYOffset - _this.initialYOffset);
        });
        _this.initialYOffset = currentYOffset;
      }

      if (_this.isDraggedItemOutOfBounds() && _this.props.removableByMove) {
        _this.afterIndex = _this.topOffsets.length + 1;
      } else {
        _this.afterIndex = binarySearch(_this.topOffsets, itemVerticalCenter);
      }

      _this.animateItems(_this.afterIndex === -1 ? 0 : _this.afterIndex, _this.state.itemDragged, offset);
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "autoScrolling", function (clientY) {
      var _getBoundingClientRec = _this.listRef.current.getBoundingClientRect(),
          top = _getBoundingClientRec.top,
          bottom = _getBoundingClientRec.bottom,
          height = _getBoundingClientRec.height;

      var viewportHeight = window.innerHeight || document.documentElement.clientHeight; // auto scrolling for the window (down)

      if (bottom > viewportHeight && viewportHeight - clientY < AUTOSCROLL_ACTIVE_OFFSET) {
        _this.setState({
          scrollingSpeed: Math.round((AUTOSCROLL_ACTIVE_OFFSET - (viewportHeight - clientY)) / AUTOSCROLL_SPEED_RATIO),
          scrollWindow: true
        }); // auto scrolling for the window (up)

      } else if (top < 0 && clientY < AUTOSCROLL_ACTIVE_OFFSET) {
        _this.setState({
          scrollingSpeed: Math.round((AUTOSCROLL_ACTIVE_OFFSET - clientY) / -AUTOSCROLL_SPEED_RATIO),
          scrollWindow: true
        });
      } else {
        if (_this.state.scrollWindow && _this.state.scrollingSpeed !== 0) {
          _this.setState({
            scrollingSpeed: 0,
            scrollWindow: false
          });
        } // auto scrolling for containers with overflow


        if (height + 20 < _this.listRef.current.scrollHeight) {
          var scrollingSpeed = 0;

          if (clientY - top < AUTOSCROLL_ACTIVE_OFFSET) {
            scrollingSpeed = Math.round((AUTOSCROLL_ACTIVE_OFFSET - (clientY - top)) / -AUTOSCROLL_SPEED_RATIO);
          } else if (bottom - clientY < AUTOSCROLL_ACTIVE_OFFSET) {
            scrollingSpeed = Math.round((AUTOSCROLL_ACTIVE_OFFSET - (bottom - clientY)) / AUTOSCROLL_SPEED_RATIO);
          }

          if (_this.state.scrollingSpeed !== scrollingSpeed) {
            _this.setState({
              scrollingSpeed: scrollingSpeed
            });
          }
        }
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "animateItems", function (needle, movedItem, offset) {
      var animateMovedItem = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      _this.getChildren().forEach(function (item, i) {
        setItemTransition(item, _this.props.transitionDuration);

        if (movedItem === i && animateMovedItem) {
          if (movedItem === needle) {
            return transformItem(item, null);
          }

          transformItem(item, movedItem < needle ? _this.itemTranslateOffsets.slice(movedItem + 1, needle + 1).reduce(function (a, b) {
            return a + b;
          }, 0) : _this.itemTranslateOffsets.slice(needle, movedItem).reduce(function (a, b) {
            return a + b;
          }, 0) * -1);
        } else if (movedItem < needle && i > movedItem && i <= needle) {
          transformItem(item, -offset);
        } else if (i < movedItem && movedItem > needle && i >= needle) {
          transformItem(item, offset);
        } else {
          transformItem(item, null);
        }
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "isDraggedItemOutOfBounds", function () {
      var initialRect = _this.getChildren()[_this.state.itemDragged].getBoundingClientRect();

      var targetRect = _this.ghostRef.current.getBoundingClientRect();

      if (Math.abs(initialRect.left - targetRect.left) > targetRect.width) {
        if (_this.state.itemDraggedOutOfBounds === -1) {
          _this.setState({
            itemDraggedOutOfBounds: _this.state.itemDragged
          });
        }

        return true;
      }

      if (_this.state.itemDraggedOutOfBounds > -1) {
        _this.setState({
          itemDraggedOutOfBounds: -1
        });
      }

      return false;
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onEnd", function (e) {
      e.cancelable && e.preventDefault();
      document.removeEventListener('mousemove', _this.schdOnMouseMove);
      document.removeEventListener('touchmove', _this.schdOnTouchMove);
      document.removeEventListener('mouseup', _this.schdOnEnd);
      document.removeEventListener('touchup', _this.schdOnEnd);
      document.removeEventListener('touchcancel', _this.schdOnEnd);

      var removeItem = _this.props.removableByMove && _this.isDraggedItemOutOfBounds();

      if (!removeItem && _this.props.transitionDuration > 0 && _this.afterIndex !== -2) {
        // animate drop
        schd(function () {
          setItemTransition(_this.ghostRef.current, _this.props.transitionDuration, 'cubic-bezier(0.2, 0, 0.38, 0.9)');

          if (_this.afterIndex < 1 && _this.state.itemDragged === 0) {
            transformItem(_this.ghostRef.current, 0, 0);
          } else {
            transformItem(_this.ghostRef.current, // compensate window scroll
            -(window.pageYOffset - _this.lastYOffset) + // compensate container scroll
            -(_this.listRef.current.scrollTop - _this.lastListYOffset) + (_this.state.itemDragged < _this.afterIndex ? _this.itemTranslateOffsets.slice(_this.state.itemDragged + 1, _this.afterIndex + 1).reduce(function (a, b) {
              return a + b;
            }, 0) : _this.itemTranslateOffsets.slice(_this.afterIndex < 0 ? 0 : _this.afterIndex, _this.state.itemDragged).reduce(function (a, b) {
              return a + b;
            }, 0) * -1), 0);
          }
        })();
      }

      _this.dropTimeout = window.setTimeout(_this.finishDrop, removeItem || _this.afterIndex === -2 ? 0 : _this.props.transitionDuration);
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "finishDrop", function () {
      var removeItem = _this.props.removableByMove && _this.isDraggedItemOutOfBounds();

      if (removeItem || _this.afterIndex > -2 && _this.state.itemDragged !== _this.afterIndex) {
        _this.props.onChange({
          oldIndex: _this.state.itemDragged,
          newIndex: removeItem ? -1 : Math.max(_this.afterIndex, 0),
          targetRect: _this.ghostRef.current.getBoundingClientRect()
        });
      }

      _this.getChildren().forEach(function (item) {
        setItemTransition(item, 0);
        transformItem(item, null);
        item.style.touchAction = '';
      });

      _this.setState({
        itemDragged: -1,
        scrollingSpeed: 0
      });

      _this.afterIndex = -2; // sometimes the scroll gets messed up after the drop, fix:

      if (_this.lastScroll > 0) {
        _this.listRef.current.scrollTop = _this.lastScroll;
        _this.lastScroll = 0;
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onKeyDown", function (e) {
      var selectedItem = _this.state.selectedItem;

      var index = _this.getTargetIndex(e);

      if (index === -1 || _this.props.values[index] && _this.props.values[index].props.disabled) {
        return;
      }

      if (e.key === ' ') {
        e.preventDefault();

        if (selectedItem === index) {
          if (selectedItem !== _this.needle) {
            _this.getChildren().forEach(function (item) {
              setItemTransition(item, 0);
              transformItem(item, null);
            });

            _this.props.onChange({
              oldIndex: selectedItem,
              newIndex: _this.needle,
              targetRect: _this.getChildren()[_this.needle].getBoundingClientRect()
            });

            _this.getChildren()[_this.needle].focus();
          }

          _this.setState({
            selectedItem: -1
          });

          _this.needle = -1;
        } else {
          _this.setState({
            selectedItem: index
          });

          _this.needle = index;

          _this.calculateOffsets();
        }
      }

      if ((e.key === 'ArrowDown' || e.key === 'j') && selectedItem > -1 && _this.needle < _this.props.values.length - 1) {
        e.preventDefault();
        var offset = getTranslateOffset(_this.getChildren()[selectedItem]);
        _this.needle++;

        _this.animateItems(_this.needle, selectedItem, offset, true);
      }

      if ((e.key === 'ArrowUp' || e.key === 'k') && selectedItem > -1 && _this.needle > 0) {
        e.preventDefault();

        var _offset = getTranslateOffset(_this.getChildren()[selectedItem]);

        _this.needle--;

        _this.animateItems(_this.needle, selectedItem, _offset, true);
      }

      if (e.key === 'Escape' && selectedItem > -1) {
        _this.getChildren().forEach(function (item) {
          setItemTransition(item, 0);
          transformItem(item, null);
        });

        _this.setState({
          selectedItem: -1
        });

        _this.needle = -1;
      }

      if ((e.key === 'Tab' || e.key === 'Enter') && selectedItem > -1) {
        e.preventDefault();
      }
    });

    _this.schdOnMouseMove = schd(_this.onMouseMove);
    _this.schdOnTouchMove = schd(_this.onTouchMove);
    _this.schdOnEnd = schd(_this.onEnd);
    return _this;
  }

  _createClass(Draggable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.calculateOffsets();
      document.addEventListener('touchstart', this.onMouseOrTouchStart, {
        passive: false,
        capture: false
      });
      document.addEventListener('mousedown', this.onMouseOrTouchStart);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_prevProps, prevState) {
      if (prevState.scrollingSpeed !== this.state.scrollingSpeed && prevState.scrollingSpeed === 0) {
        this.doScrolling();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('touchstart', this.onMouseOrTouchStart);
      document.removeEventListener('mousedown', this.onMouseOrTouchStart);

      if (this.dropTimeout) {
        window.clearTimeout(this.dropTimeout);
      }

      this.schdOnMouseMove.cancel();
      this.schdOnTouchMove.cancel();
      this.schdOnEnd.cancel();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var baseStyle = {
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        boxSizing: 'border-box',
        position: 'relative'
      };

      var ghostStyle = _objectSpread2(_objectSpread2({}, baseStyle), {}, {
        top: this.state.targetY,
        left: this.state.targetX,
        width: this.state.targetWidth,
        height: this.state.targetHeight,
        backgroundColor: '#ffffff',
        listStyleType: 'none',
        margin: 0,
        position: 'fixed',
        boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.16)'
      });

      return /*#__PURE__*/React.createElement(React.Fragment, null, this.props.renderList({
        children: this.props.values.map(function (value, index) {
          var isHidden = index === _this2.state.itemDragged;
          var isSelected = index === _this2.state.selectedItem;
          var isDisabled = _this2.props.values[index] && _this2.props.values[index].props.disabled;
          var props = {
            key: index,
            tabIndex: isDisabled ? -1 : 0,
            onKeyDown: _this2.onKeyDown,
            style: _objectSpread2(_objectSpread2({}, baseStyle), {}, {
              visibility: isHidden ? 'hidden' : undefined,
              zIndex: isSelected ? 5000 : 0
            })
          };
          return _this2.props.renderItem({
            value: value,
            props: props,
            index: index,
            isDragged: false,
            isSelected: isSelected,
            isOutOfBounds: false
          });
        }),
        isDragged: this.state.itemDragged > -1,
        props: {
          ref: this.listRef
        }
      }), this.state.itemDragged > -1 && /*#__PURE__*/ReactDOM.createPortal(this.props.renderItem({
        value: this.props.values[this.state.itemDragged],
        props: {
          ref: this.ghostRef,
          style: ghostStyle,
          onWheel: this.onWheel
        },
        index: this.state.itemDragged,
        isDragged: true,
        isSelected: false,
        isOutOfBounds: this.state.itemDraggedOutOfBounds > -1
      }), document.body));
    }
  }]);

  return Draggable;
}(React.Component);

_defineProperty$1(Draggable, "defaultProps", {
  transitionDuration: 240,
  lockVertically: false,
  removableByMove: false
});

var DraggableList = function DraggableList(props) {
  var children = props.children,
      className = props.className,
      Tag = props.tagName;
  var baseProps = extractBaseProps(props);
  var classes = classnames({
    Listbox: true
  }, className);
  var renderChildren = React__default.Children.toArray(children).map(function (child) {
    var element = /*#__PURE__*/React__default.cloneElement(child, {
      parentProps: _objectSpread2({}, props)
    });
    return element;
  });

  var _React$useState = React__default.useState(renderChildren),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      childList = _React$useState2[0],
      setChildList = _React$useState2[1];

  var onChangeHandler = function onChangeHandler(props) {
    var oldIndex = props.oldIndex,
        newIndex = props.newIndex;
    var updatedList = arrayMove(childList, oldIndex, newIndex);
    setChildList(updatedList);
  };

  return /*#__PURE__*/React__default.createElement(Draggable, {
    values: childList,
    onChange: onChangeHandler,
    renderItem: function renderItem(_ref) {
      var value = _ref.value,
          props = _ref.props;
      return /*#__PURE__*/React__default.createElement("div", _extends$2({}, props, {
        className: "Listbox-item--draggable"
      }), value);
    },
    renderList: function renderList(_ref2) {
      var children = _ref2.children,
          props = _ref2.props;
      return /*#__PURE__*/React__default.createElement(Tag, _extends$2({
        "data-test": "DesignSystem-Listbox"
      }, baseProps, {
        className: classes
      }, props), children);
    }
  });
};

var isDisabledElement = function isDisabledElement(element) {
  return element && element.getAttribute('data-disabled') === 'true';
};

var getNextSibling = function getNextSibling(element) {
  var _element$parentNode, _element$parentNode$n;

  return element === null || element === void 0 ? void 0 : (_element$parentNode = element.parentNode) === null || _element$parentNode === void 0 ? void 0 : (_element$parentNode$n = _element$parentNode.nextSibling) === null || _element$parentNode$n === void 0 ? void 0 : _element$parentNode$n.firstChild;
};

var getPrevSibling = function getPrevSibling(element) {
  var _element$parentNode2, _element$parentNode2$;

  return element === null || element === void 0 ? void 0 : (_element$parentNode2 = element.parentNode) === null || _element$parentNode2 === void 0 ? void 0 : (_element$parentNode2$ = _element$parentNode2.previousSibling) === null || _element$parentNode2$ === void 0 ? void 0 : _element$parentNode2$.firstChild;
};

var focusOption = function focusOption(element, direction) {
  var iterateElement = element;

  while (iterateElement) {
    if (!isDisabledElement(iterateElement)) {
      iterateElement.focus();
      break;
    }

    if (direction === 'down') {
      iterateElement = getNextSibling(iterateElement);
    } else {
      iterateElement = getPrevSibling(iterateElement);
    }
  }
};

var onKeyDown = function onKeyDown(event) {
  var sourceElement = event.target;
  var nextElement = getNextSibling(sourceElement);
  var prevElement = getPrevSibling(sourceElement);

  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault();
      focusOption(nextElement, 'down');
      break;

    case 'ArrowUp':
      event.preventDefault();
      focusOption(prevElement, 'up');
      break;
  }
};

var ListBody = function ListBody(props) {
  var _classNames;

  var children = props.children,
      className = props.className,
      disabled = props.disabled,
      selected = props.selected,
      activated = props.activated,
      tabIndex = props.tabIndex;
  var contextProp = React.useContext(ListboxContext);
  var size = contextProp.size,
      type = contextProp.type,
      draggable = contextProp.draggable;
  var itemClass = classnames((_classNames = {
    'Listbox-item': true
  }, _defineProperty$1(_classNames, "Listbox-item--".concat(size), size), _defineProperty$1(_classNames, "Listbox-item--".concat(type), type), _defineProperty$1(_classNames, 'Listbox-item--disabled', disabled), _defineProperty$1(_classNames, 'Listbox-item--selected', selected && type === 'option'), _defineProperty$1(_classNames, 'Listbox-item--activated', activated && type === 'resource'), _classNames), className);
  return /*#__PURE__*/React.createElement("div", {
    "data-disabled": disabled,
    "data-test": "DesignSystem-Listbox-ItemWrapper",
    tabIndex: draggable ? -1 : tabIndex || 0,
    className: itemClass,
    onKeyDown: onKeyDown,
    role: "tablist"
  }, draggable && /*#__PURE__*/React.createElement(Icon, {
    size: 16,
    appearance: "subtle",
    name: "drag_indicator",
    className: "Listbox-item--drag-icon",
    "data-test": "DesignSystem-Listbox-DragIcon"
  }), children);
};
ListBody.displayName = 'ListBody';

var getAnimationClass = function getAnimationClass(uniqueKey, expanded) {
  if (expanded) return "nestedList-open-".concat(uniqueKey, " 240ms cubic-bezier(0, 0, 0.38, 0.9)");else if (!expanded) return "nestedList-close-".concat(uniqueKey, " 160ms cubic-bezier(0.2, 0, 1, 0.9)");
  return '';
};

var getHeight = function getHeight(listItemRef) {
  var _listItemRef$current;

  var scrollHeight = (_listItemRef$current = listItemRef.current) === null || _listItemRef$current === void 0 ? void 0 : _listItemRef$current.scrollHeight;
  return scrollHeight;
};

var menuItemAnimation = function menuItemAnimation(listItemRef, uniqueKey) {
  return "\n      @keyframes nestedList-open-".concat(uniqueKey, " {\n      from {\n        height: 0px;\n      }\n      to {\n        height: ").concat(getHeight(listItemRef), "px;\n      }\n    }\n\n    @keyframes nestedList-close-").concat(uniqueKey, " {\n      from {\n        height: ").concat(getHeight(listItemRef), "px;\n      }\n      to {\n        height: 0px;\n      }\n    }\n  ");
};

function usePrevious(value) {
  var ref = React.useRef();
  React.useEffect(function () {
    if (value != undefined) {
      ref.current = value;
    }
  }, [value]);
  return ref.current;
}

var NestedList = function NestedList(props) {
  var nestedBody = props.nestedBody,
      expanded = props.expanded;
  var prevState = usePrevious(expanded);

  var _React$useState = React.useState(expanded),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _React$useState3 = React.useState(''),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      keyframe = _React$useState4[0],
      setKeyframe = _React$useState4[1];

  var listItemRef = React.useRef(null);
  var uniqueKey = Math.random().toString(36).substring(2, 6);

  var _React$useState5 = React.useState(getAnimationClass(uniqueKey, expanded)),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      animation = _React$useState6[0],
      setAnimation = _React$useState6[1];

  React.useEffect(function () {
    if (prevState != undefined && prevState !== expanded) {
      setOpen(true);
    }

    requestAnimationFrame(function () {
      var result = menuItemAnimation(listItemRef, uniqueKey);
      setKeyframe(result);
    });
    var animationClass = getAnimationClass(uniqueKey, expanded);
    setAnimation(animationClass);
  }, [expanded]);

  var handleAnimationEnd = function handleAnimationEnd() {
    !expanded && setOpen(false);
  };

  var styles = {
    animation: animation,
    overflow: 'hidden',
    animationFillMode: 'forwards'
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, keyframe), nestedBody && open && /*#__PURE__*/React.createElement("div", {
    style: styles,
    onAnimationEnd: handleAnimationEnd,
    "data-test": "DesignSystem-Listbox--Nested-Item",
    ref: listItemRef
  }, nestedBody));
};

var _excluded$h = ["nestedBody", "expanded", "id", "onClick", "value", "tagName"];
var ListboxItem = function ListboxItem(props) {
  var nestedBody = props.nestedBody,
      expanded = props.expanded,
      id = props.id,
      onClick = props.onClick,
      value = props.value,
      _props$tagName = props.tagName,
      Tag = _props$tagName === void 0 ? 'li' : _props$tagName,
      rest = _objectWithoutProperties(props, _excluded$h);

  var contextProp = React.useContext(ListboxContext);
  var showDivider = contextProp.showDivider,
      draggable = contextProp.draggable;

  var onClickHandler = function onClickHandler(e) {
    onClick && onClick(e, id, value);
  };

  var tagClass = classnames(_defineProperty$1({}, 'Listbox-item-wrapper', !draggable));
  return /*#__PURE__*/React.createElement(Tag, _extends$2({
    id: id,
    "data-test": "DesignSystem-Listbox-Item"
  }, rest, {
    onClick: onClickHandler,
    "data-value": value,
    className: tagClass
  }), /*#__PURE__*/React.createElement(ListBody, props), nestedBody && /*#__PURE__*/React.createElement(NestedList, {
    expanded: expanded,
    nestedBody: nestedBody
  }), showDivider && /*#__PURE__*/React.createElement(Divider, {
    className: "Listbox-divider"
  }));
};
ListboxItem.displayName = 'Listbox.Item';
ListboxItem.defaultProps = {
  tagName: 'li'
};

var _excluded$g = ["children", "className", "draggable", "size", "type", "showDivider", "tagName"];
var ListboxContext = /*#__PURE__*/React.createContext({
  size: 'standard',
  type: 'resource',
  draggable: false,
  showDivider: true
});
var Provider = ListboxContext.Provider;
var Listbox = function Listbox(props) {
  var children = props.children,
      className = props.className,
      draggable = props.draggable,
      size = props.size,
      type = props.type,
      showDivider = props.showDivider,
      Tag = props.tagName,
      rest = _objectWithoutProperties(props, _excluded$g);

  var baseProps = extractBaseProps(props);
  var classes = classnames({
    Listbox: true
  }, className);
  var sharedProp = {
    size: size,
    type: type,
    draggable: draggable,
    showDivider: showDivider
  };
  return /*#__PURE__*/React.createElement(Provider, {
    value: sharedProp
  }, draggable ? /*#__PURE__*/React.createElement(DraggableList, props) : /*#__PURE__*/React.createElement(Tag, _extends$2({
    "data-test": "DesignSystem-Listbox"
  }, baseProps, {
    className: classes
  }, rest), children));
};
Listbox.displayName = 'Listbox';
Listbox.defaultProps = {
  tagName: 'ul',
  size: 'standard',
  type: 'resource',
  draggable: false,
  showDivider: true
};
Listbox.Item = ListboxItem;

// TextFieldCommon.tsx
var RenderHelpText = function RenderHelpText(_ref) {
  var helpText = _ref.helpText,
      error = _ref.error;
  return /*#__PURE__*/React__default.createElement(HelpText, {
    className: "d-flex",
    message: helpText.trim().length > 0 ? helpText : ' ',
    error: error ? error : undefined
  });
};
var RenderCounter = function RenderCounter(_ref2) {
  var inputText = _ref2.inputText,
      max = _ref2.max;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "mt-3 d-flex"
  }, /*#__PURE__*/React__default.createElement(Text, {
    appearance: "subtle",
    className: "pr-2",
    color: inputText.length > max ? 'alert' : undefined,
    size: "small",
    weight: "medium"
  }, inputText.length), /*#__PURE__*/React__default.createElement(Text, {
    appearance: "subtle",
    className: "pr-2",
    size: "small",
    weight: "medium"
  }, "/"), /*#__PURE__*/React__default.createElement(Text, {
    appearance: "subtle",
    size: "small",
    weight: "medium"
  }, max));
};

var TextFieldWithTextarea = function TextFieldWithTextarea(props) {
  var label = props.label,
      _props$rows = props.rows,
      rows = _props$rows === void 0 ? 3 : _props$rows,
      _props$resize = props.resize,
      resize = _props$resize === void 0 ? true : _props$resize,
      required = props.required,
      error = props.error,
      onChange = props.onChange,
      _props$value = props.value,
      value = _props$value === void 0 ? '' : _props$value,
      _props$max = props.max,
      max = _props$max === void 0 ? 200 : _props$max,
      _props$helpText = props.helpText,
      helpText = _props$helpText === void 0 ? ' ' : _props$helpText;
  var textareaRef = React.useRef(null);

  var _React$useState = React.useState(value),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      inputText = _React$useState2[0],
      setInputText = _React$useState2[1];

  var _React$useState3 = React.useState(0),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      helptextWidth = _React$useState4[0],
      setHelptextWidth = _React$useState4[1];

  var onChangeHandler = function onChangeHandler(e) {
    setInputText(e.target.value);
    if (onChange) onChange(e);
  };

  var inputError = error || inputText.length > max;
  React.useEffect(function () {
    var textarea = textareaRef.current;

    if (window.ResizeObserver) {
      var resizeObserver = new window.ResizeObserver(function (entries) {
        var entry = entries[0];
        var offsetWidth = entry.target.offsetWidth;
        setHelptextWidth(offsetWidth);
      });
      textarea && resizeObserver.observe(textarea);
      return function () {
        resizeObserver.disconnect();
      };
    }

    return function () {};
  }, []);
  return /*#__PURE__*/React.createElement("div", null, label && /*#__PURE__*/React.createElement(Label, {
    required: required,
    withInput: true
  }, label), /*#__PURE__*/React.createElement(Textarea, _extends$2({}, props, {
    resize: resize,
    rows: rows,
    onChange: onChangeHandler,
    error: inputError,
    ref: textareaRef
  })), /*#__PURE__*/React.createElement("div", {
    className: "d-flex justify-content-between",
    style: {
      width: helptextWidth
    }
  }, /*#__PURE__*/React.createElement(RenderHelpText, {
    helpText: helpText,
    error: inputError
  }), /*#__PURE__*/React.createElement(RenderCounter, {
    inputText: inputText,
    max: max
  })));
};

var TextFieldWithInput = function TextFieldWithInput(props) {
  var label = props.label,
      minWidth = props.minWidth,
      required = props.required,
      error = props.error,
      onChange = props.onChange,
      _props$value = props.value,
      value = _props$value === void 0 ? '' : _props$value,
      _props$max = props.max,
      max = _props$max === void 0 ? 200 : _props$max,
      _props$helpText = props.helpText,
      helpText = _props$helpText === void 0 ? ' ' : _props$helpText;

  var _React$useState = React.useState(value),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      inputText = _React$useState2[0],
      setInputText = _React$useState2[1];

  var onChangeHandler = function onChangeHandler(event) {
    setInputText(event.target.value);
    if (onChange) onChange(event);
  };

  var inputError = error || inputText.length > max;
  return /*#__PURE__*/React.createElement("div", null, label && /*#__PURE__*/React.createElement(Label, {
    required: required,
    withInput: true
  }, label), /*#__PURE__*/React.createElement(Input, _extends$2({}, props, {
    error: inputError,
    onChange: onChangeHandler
  })), /*#__PURE__*/React.createElement("div", {
    className: "d-flex justify-content-between",
    style: {
      minWidth: minWidth
    }
  }, /*#__PURE__*/React.createElement(RenderHelpText, {
    helpText: helpText,
    error: inputError
  }), /*#__PURE__*/React.createElement(RenderCounter, {
    inputText: inputText,
    max: max
  })));
};
TextFieldWithInput.defaultProps = {
  minWidth: 256
};

var TextField = function TextField(props) {
  var withTextarea = props.withTextarea;

  if (withTextarea) {
    return /*#__PURE__*/React.createElement(TextFieldWithTextarea, props);
  }

  return /*#__PURE__*/React.createElement(TextFieldWithInput, props);
};
TextField.displayName = 'TextField';

var _excluded$f = ["icon", "image"];
var SelectionAvatar = function SelectionAvatar(props) {
  var icon = props.icon,
      image = props.image,
      rest = _objectWithoutProperties(props, _excluded$f);

  return /*#__PURE__*/React.createElement(Avatar, _extends$2({
    role: "checkbox"
  }, rest, {
    withTooltip: true,
    className: "cursor-pointer"
  }), image || icon);
};

var AvatarSelectionContext = /*#__PURE__*/React.createContext({});

var SelectionAvatarsWrapper = function SelectionAvatarsWrapper(props) {
  var avatarList = props.avatarList,
      avatarStyle = props.avatarStyle,
      tooltipPosition = props.tooltipPosition,
      size = props.size,
      avatarRenderer = props.avatarRenderer;
  var contextProp = React.useContext(AvatarSelectionContext);
  var setSelectedItems = contextProp.setSelectedItems,
      selectedItems = contextProp.selectedItems,
      onSelect = contextProp.onSelect;

  var onClickHandler = function onClickHandler(item) {
    var list = selectedItems;

    if (selectedItems !== null && selectedItems !== void 0 && selectedItems.includes(item)) {
      list = selectedItems.filter(function (selectedItem) {
        return selectedItem !== item;
      });
    } else {
      var _list;

      (_list = list) === null || _list === void 0 ? void 0 : _list.push(item);
    }

    list && (setSelectedItems === null || setSelectedItems === void 0 ? void 0 : setSelectedItems(_toConsumableArray(list)));
    onSelect && onSelect(list);
  };

  var handleKeyDown = function handleKeyDown(event, item) {
    switch (event.key) {
      case 'Enter':
        onClickHandler(item);
        break;
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, avatarList.map(function (avatarItem, index) {
    var _classNames;

    var appearance = avatarItem.appearance,
        firstName = avatarItem.firstName,
        lastName = avatarItem.lastName,
        icon = avatarItem.icon,
        image = avatarItem.image;
    var GroupClass = classnames((_classNames = {}, _defineProperty$1(_classNames, "SelectionAvatarGroup-item", true), _defineProperty$1(_classNames, "SelectionAvatarGroup-item--selected", selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.includes(avatarItem)), _classNames));

    if (avatarRenderer) {
      return avatarRenderer(avatarItem);
    }

    return /*#__PURE__*/React.createElement("span", {
      key: index,
      className: "SelectionAvatarGroup-wrapper"
    }, /*#__PURE__*/React.createElement("div", {
      tabIndex: 0,
      role: "checkbox",
      style: avatarStyle,
      className: GroupClass,
      "data-test": "DesignSystem-AvatarSelection--Avatar",
      "aria-checked": selectedItems && selectedItems.includes(avatarItem),
      onClick: function onClick() {
        return onClickHandler(avatarItem);
      },
      onKeyDown: function onKeyDown(event) {
        return handleKeyDown(event, avatarItem);
      }
    }, /*#__PURE__*/React.createElement(SelectionAvatar, {
      size: size,
      appearance: appearance,
      firstName: firstName,
      lastName: lastName,
      withTooltip: true,
      tooltipPosition: tooltipPosition,
      icon: icon,
      image: image
    })));
  }));
};

var handleKeyDown$6 = function handleKeyDown(event, setOpenPopover, setHighlightFirstItem, setHighlightLastItem) {
  switch (event.key) {
    case 'Enter':
      setOpenPopover === null || setOpenPopover === void 0 ? void 0 : setOpenPopover(true);
      setHighlightFirstItem === null || setHighlightFirstItem === void 0 ? void 0 : setHighlightFirstItem(true);
      break;

    case 'ArrowDown':
      setOpenPopover === null || setOpenPopover === void 0 ? void 0 : setOpenPopover(true);
      setHighlightFirstItem === null || setHighlightFirstItem === void 0 ? void 0 : setHighlightFirstItem(true);
      break;

    case 'ArrowUp':
      setOpenPopover === null || setOpenPopover === void 0 ? void 0 : setOpenPopover(true);
      setHighlightLastItem === null || setHighlightLastItem === void 0 ? void 0 : setHighlightLastItem(true);
      break;
  }
};
var focusListItem$3 = function focusListItem(position, setFocusedOption, listRef, withSearch) {
  var _listRef$current2, _targetOption, _targetOption2, _targetOption2$scroll;

  if (withSearch && position === 'down') {
    var _listRef$current, _searchInput$;

    var searchInput = (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.querySelectorAll('[data-test="DesignSystem-AvatarSelection--Input"]');
    searchInput && ((_searchInput$ = searchInput[0]) === null || _searchInput$ === void 0 ? void 0 : _searchInput$.focus());
    setFocusedOption === null || setFocusedOption === void 0 ? void 0 : setFocusedOption(searchInput);
    return;
  }

  var listItems = (_listRef$current2 = listRef.current) === null || _listRef$current2 === void 0 ? void 0 : _listRef$current2.querySelectorAll('[data-test="DesignSystem-Listbox-ItemWrapper"]');
  var targetOption;

  if (position === 'down') {
    targetOption = listItems === null || listItems === void 0 ? void 0 : listItems[0];
  } else {
    targetOption = listItems === null || listItems === void 0 ? void 0 : listItems[listItems.length - 1];
  }

  (_targetOption = targetOption) === null || _targetOption === void 0 ? void 0 : _targetOption.focus();
  (_targetOption2 = targetOption) === null || _targetOption2 === void 0 ? void 0 : (_targetOption2$scroll = _targetOption2.scrollIntoView) === null || _targetOption2$scroll === void 0 ? void 0 : _targetOption2$scroll.call(_targetOption2, {
    block: 'center'
  });
  setFocusedOption && setFocusedOption(targetOption);
};

var AvatarSelectionCount = function AvatarSelectionCount(props) {
  var _classNames;

  var hiddenAvatarCount = props.hiddenAvatarCount,
      avatarStyle = props.avatarStyle,
      size = props.size,
      hiddenAvatarList = props.hiddenAvatarList;
  var contextProp = React.useContext(AvatarSelectionContext);
  var selectedItems = contextProp.selectedItems,
      setHighlightFirstItem = contextProp.setHighlightFirstItem,
      setHighlightLastItem = contextProp.setHighlightLastItem,
      triggerRef = contextProp.triggerRef,
      setOpenPopover = contextProp.setOpenPopover,
      openPopover = contextProp.openPopover,
      popoverId = contextProp.popoverId;

  var _React$useState = React.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      selectedItemCount = _React$useState2[0],
      setSelectedItemCount = _React$useState2[1];

  var wrapperClassName = classnames((_classNames = {}, _defineProperty$1(_classNames, 'SelectionAvatarCount-wrapper', true), _defineProperty$1(_classNames, 'SelectionAvatarCount--selected', selectedItemCount > 0), _classNames));
  React.useEffect(function () {
    var selectedList = hiddenAvatarList.filter(function (data1) {
      return selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.some(function (data2) {
        return data2 === data1;
      });
    });
    setSelectedItemCount(selectedList.length);
  }, [selectedItems]);
  return /*#__PURE__*/React.createElement("div", {
    "data-test": "DesignSystem-AvatarSelection--TriggerAvatar",
    className: wrapperClassName,
    onKeyDown: function onKeyDown(event) {
      return handleKeyDown$6(event, setOpenPopover, setHighlightFirstItem, setHighlightLastItem);
    },
    style: avatarStyle,
    tabIndex: 0,
    role: "button",
    "aria-haspopup": "listbox",
    "aria-expanded": openPopover,
    "aria-controls": popoverId,
    ref: triggerRef
  }, /*#__PURE__*/React.createElement(Avatar, {
    size: size,
    appearance: "secondary",
    className: "SelectionAvatarCount cursor-pointer"
  }, /*#__PURE__*/React.createElement(Text, {
    className: "overflow-hidden"
  }, "+".concat(hiddenAvatarCount))));
};

var handleKeyDown$5 = function handleKeyDown(event, focusedOption, setFocusedOption, setHighlightFirstItem, setHighlightLastItem, listRef, withSearch, setOpenPopover, triggerRef) {
  switch (event.key) {
    case 'ArrowUp':
      event.preventDefault();
      navigateOptions$3('up', focusedOption, setFocusedOption, listRef, withSearch);
      break;

    case 'ArrowDown':
      event.preventDefault();
      navigateOptions$3('down', focusedOption, setFocusedOption, listRef, withSearch);
      break;

    case 'Enter':
      handleEnterKey$2(focusedOption);
      setHighlightLastItem === null || setHighlightLastItem === void 0 ? void 0 : setHighlightLastItem(false);
      setHighlightFirstItem === null || setHighlightFirstItem === void 0 ? void 0 : setHighlightFirstItem(false);
      break;

    case 'Escape':
      setOpenPopover === null || setOpenPopover === void 0 ? void 0 : setOpenPopover(false);
      triggerRef.current.focus();
      setFocusedOption === null || setFocusedOption === void 0 ? void 0 : setFocusedOption(undefined);
      break;
  }
};

var handleEnterKey$2 = function handleEnterKey(focusedOption) {
  focusedOption === null || focusedOption === void 0 ? void 0 : focusedOption.click();
};

var navigateOptions$3 = function navigateOptions(direction, focusedOption, setFocusedOption, listRef, withSearch) {
  var listItems = listRef === null || listRef === void 0 ? void 0 : listRef.current.querySelectorAll('[data-test="DesignSystem-Listbox-ItemWrapper"]');
  var index = Array.from(listItems).findIndex(function (item) {
    return item == focusedOption;
  });

  if (index === -1) {
    index = direction === 'up' ? listItems.length - 1 : 0;
  } else if (withSearch && index === 0 && direction === 'up' || withSearch && index === listItems.length - 1 && direction === 'down') {
    var searchInput = listRef.current.querySelector('[data-test="DesignSystem-AvatarSelection--Input"]');
    searchInput.focus();
    setFocusedOption && setFocusedOption(searchInput);
  } else {
    index = direction === 'up' ? (index - 1 + listItems.length) % listItems.length : (index + 1) % listItems.length;
    var targetOption = listItems[index];
    targetOption.focus();
    setFocusedOption && setFocusedOption(targetOption);
    targetOption.scrollIntoView({
      block: 'center'
    });
  }
};

var handleInputKeyDown$1 = function handleInputKeyDown(event, listRef, setFocusedOption, setOpenPopover, triggerRef) {
  var _listRef$current, _targetOption, _targetOption2, _targetOption2$scroll;

  var listItems = (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.querySelectorAll('[data-test="DesignSystem-Listbox-ItemWrapper"]');
  var targetOption;

  switch (event.key) {
    case 'ArrowUp':
      event.preventDefault();
      targetOption = listItems[listItems.length - 1];
      break;

    case 'ArrowDown':
      event.preventDefault();
      targetOption = listItems[0];
      break;

    case 'Escape':
      setOpenPopover === null || setOpenPopover === void 0 ? void 0 : setOpenPopover(false);
      triggerRef.current.focus();
      setFocusedOption === null || setFocusedOption === void 0 ? void 0 : setFocusedOption(undefined);
      break;
  }

  (_targetOption = targetOption) === null || _targetOption === void 0 ? void 0 : _targetOption.focus();
  (_targetOption2 = targetOption) === null || _targetOption2 === void 0 ? void 0 : (_targetOption2$scroll = _targetOption2.scrollIntoView) === null || _targetOption2$scroll === void 0 ? void 0 : _targetOption2$scroll.call(_targetOption2, {
    block: 'center'
  });
  setFocusedOption && setFocusedOption(targetOption);
};

var AvatarSelectionInput = function AvatarSelectionInput(props) {
  var contextProp = React.useContext(AvatarSelectionContext);
  var listRef = contextProp.listRef,
      setFocusedOption = contextProp.setFocusedOption,
      setOpenPopover = contextProp.setOpenPopover,
      triggerRef = contextProp.triggerRef;
  return /*#__PURE__*/React.createElement("div", {
    className: "SelectionAvatar-inputWrapper"
  }, /*#__PURE__*/React.createElement(Input, _extends$2({
    icon: "search",
    onKeyDown: function onKeyDown(event) {
      return handleInputKeyDown$1(event, listRef, setFocusedOption, setOpenPopover, triggerRef);
    },
    className: "w-100 SelectionAvatar-input",
    "data-test": "DesignSystem-AvatarSelection--Input"
  }, props)));
};

var AvatarSelectionList = function AvatarSelectionList(props) {
  return /*#__PURE__*/React.createElement(Listbox, props, props.children);
};
AvatarSelectionList.defaultProps = {
  type: 'option',
  showDivider: false,
  size: 'compressed',
  tagName: 'ul'
};

var _excluded$e = ["children", "value"];
var AvatarSelectionOption = function AvatarSelectionOption(props) {
  var children = props.children,
      value = props.value,
      rest = _objectWithoutProperties(props, _excluded$e);

  var contextProp = React.useContext(AvatarSelectionContext);
  var setSelectedItems = contextProp.setSelectedItems,
      selectedItems = contextProp.selectedItems,
      onSelect = contextProp.onSelect,
      focusedOption = contextProp.focusedOption,
      setFocusedOption = contextProp.setFocusedOption,
      setHighlightFirstItem = contextProp.setHighlightFirstItem,
      setHighlightLastItem = contextProp.setHighlightLastItem,
      listRef = contextProp.listRef,
      withSearch = contextProp.withSearch,
      setOpenPopover = contextProp.setOpenPopover,
      triggerRef = contextProp.triggerRef;

  var onSelectHandler = function onSelectHandler(event, avatarData) {
    event.preventDefault();
    var list = selectedItems ? _toConsumableArray(selectedItems) : [];

    if (selectedItems !== null && selectedItems !== void 0 && selectedItems.includes(avatarData)) {
      list = selectedItems.filter(function (selectedItem) {
        return selectedItem !== avatarData;
      });
    } else {
      list.push(avatarData);
    }

    setSelectedItems === null || setSelectedItems === void 0 ? void 0 : setSelectedItems(_toConsumableArray(list));
    setOpenPopover === null || setOpenPopover === void 0 ? void 0 : setOpenPopover(true);
    onSelect && onSelect(list);
  };

  var onKeyDownHandler = function onKeyDownHandler(event) {
    handleKeyDown$5(event, focusedOption, setFocusedOption, setHighlightFirstItem, setHighlightLastItem, listRef, withSearch, setOpenPopover, triggerRef);
  };

  return /*#__PURE__*/React.createElement(Listbox.Item, _extends$2({
    onClick: function onClick(event) {
      return onSelectHandler(event, value);
    },
    onKeyDown: function onKeyDown(event) {
      return onKeyDownHandler(event);
    },
    selected: selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.includes(value),
    "data-test": "DesignSystem-AvatarSelection--Option",
    tabIndex: -1
  }, rest), children);
};
AvatarSelectionOption.defaultProps = {
  tagName: 'li'
};

var AvatarSelectionEmptyState = function AvatarSelectionEmptyState(props) {
  var height = props.height,
      title = props.title,
      description = props.description;
  return /*#__PURE__*/React.createElement("div", {
    className: "d-flex flex-column justify-content-center align-items-center",
    style: {
      height: height ? height - 4 : ''
    },
    "data-test": "DesignSystem-AvatarSelection--EmptyState"
  }, title && /*#__PURE__*/React.createElement(Text, {
    className: "text-align-center mb-3",
    weight: "strong"
  }, title), description && /*#__PURE__*/React.createElement(Text, {
    className: "text-align-center mb-6",
    weight: "medium",
    size: "small",
    appearance: "subtle"
  }, description));
};

var AvatarSelectionItem = function AvatarSelectionItem(props) {
  var avatarData = props.avatarData,
      isSelected = props.isSelected;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      showTooltip = _React$useState2[0],
      setShowTooltip = _React$useState2[1];

  var elementRef = React.useRef(null);
  var _avatarData$firstName = avatarData.firstName,
      firstName = _avatarData$firstName === void 0 ? '' : _avatarData$firstName,
      _avatarData$lastName = avatarData.lastName,
      lastName = _avatarData$lastName === void 0 ? '' : _avatarData$lastName;
  var name = "".concat(firstName, " ").concat(lastName);
  return /*#__PURE__*/React.createElement(Tooltip, {
    showOnTruncation: true,
    tooltip: name,
    elementRef: elementRef,
    open: showTooltip
  }, /*#__PURE__*/React.createElement(AvatarSelectionOption, {
    value: avatarData,
    onFocus: function onFocus() {
      setShowTooltip(true);
    },
    onBlur: function onBlur() {
      setShowTooltip(false);
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    defaultChecked: isSelected,
    checked: isSelected,
    label: name,
    size: "regular",
    tabIndex: -1,
    className: "ellipsis--noWrap",
    "data-test": "DesignSystem-AvatarSelection--Checkbox",
    labelRef: elementRef
  })));
};

var AvatarSelectionPopover = function AvatarSelectionPopover(props) {
  var _classNames;

  var hiddenAvatarList = props.hiddenAvatarList,
      customStyle = props.customStyle,
      searchPlaceholder = props.searchPlaceholder,
      searchComparator = props.searchComparator,
      children = props.children;

  var _React$useState3 = React.useState(hiddenAvatarList),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      searchList = _React$useState4[0],
      setSearchList = _React$useState4[1];

  var _React$useState5 = React.useState(''),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      searchValue = _React$useState6[0],
      setSearchValue = _React$useState6[1];

  var contextProp = React.useContext(AvatarSelectionContext);
  var selectedItems = contextProp.selectedItems,
      listRef = contextProp.listRef,
      withSearch = contextProp.withSearch,
      popoverId = contextProp.popoverId;

  if (children) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, children);
  }

  var onSearchHandler = function onSearchHandler(event) {
    var searchValue = event.target.value;
    var list = hiddenAvatarList === null || hiddenAvatarList === void 0 ? void 0 : hiddenAvatarList.filter(function (avatarData) {
      var _firstName$toLowerCas, _lastName$toLowerCase;

      var firstName = avatarData.firstName,
          lastName = avatarData.lastName;

      if (searchComparator) {
        return searchComparator(searchValue, avatarData);
      }

      return (firstName === null || firstName === void 0 ? void 0 : (_firstName$toLowerCas = firstName.toLowerCase()) === null || _firstName$toLowerCas === void 0 ? void 0 : _firstName$toLowerCas.startsWith(searchValue.toLowerCase())) || (lastName === null || lastName === void 0 ? void 0 : (_lastName$toLowerCase = lastName.toLowerCase()) === null || _lastName$toLowerCase === void 0 ? void 0 : _lastName$toLowerCase.startsWith(searchValue.toLowerCase()));
    });
    setSearchValue(searchValue);
    setSearchList(list);
  };

  var onClearHandler = function onClearHandler() {
    setSearchValue('');
    setSearchList(hiddenAvatarList);
  };

  var popperClassName = classnames((_classNames = {}, _defineProperty$1(_classNames, 'py-3', !withSearch), _defineProperty$1(_classNames, 'pb-3', withSearch), _defineProperty$1(_classNames, 'SelectionAvatarGroup-popper', true), _classNames));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: customStyle.width
    },
    ref: listRef,
    "data-test": "DesignSystem-AvatarSelection--Popover",
    id: popoverId
  }, withSearch && /*#__PURE__*/React.createElement(AvatarSelectionInput, {
    placeholder: searchPlaceholder,
    onChange: onSearchHandler,
    value: searchValue,
    onClear: onClearHandler
  }), /*#__PURE__*/React.createElement("div", {
    style: customStyle,
    className: popperClassName
  }, searchList.length === 0 && /*#__PURE__*/React.createElement(AvatarSelectionEmptyState, {
    height: customStyle.maxHeight,
    title: "No users found",
    description: "Try modifying your search to find what you are looking for."
  }), /*#__PURE__*/React.createElement(AvatarSelectionList, null, searchList.map(function (avatarData, index) {
    var isSelected = selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.includes(avatarData);
    return /*#__PURE__*/React.createElement(AvatarSelectionItem, {
      key: index,
      avatarData: avatarData,
      isSelected: isSelected
    });
  }))));
};

var AvatarSelection = function AvatarSelection(props) {
  var max = props.max,
      borderColor = props.borderColor,
      tooltipPosition = props.tooltipPosition,
      list = props.list,
      className = props.className,
      size = props.size,
      avatarRenderer = props.avatarRenderer,
      onSelect = props.onSelect,
      width = props.width,
      maxHeight = props.maxHeight,
      minHeight = props.minHeight,
      searchPlaceholder = props.searchPlaceholder,
      withSearch = props.withSearch,
      searchComparator = props.searchComparator,
      children = props.children;

  var _React$useState = React.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      selectedItems = _React$useState2[0],
      setSelectedItems = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      openPopover = _React$useState4[0],
      setOpenPopover = _React$useState4[1];

  var _React$useState5 = React.useState(),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      focusedOption = _React$useState6[0],
      setFocusedOption = _React$useState6[1];

  var _React$useState7 = React.useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      highlightFirstItem = _React$useState8[0],
      setHighlightFirstItem = _React$useState8[1];

  var _React$useState9 = React.useState(false),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      highlightLastItem = _React$useState10[0],
      setHighlightLastItem = _React$useState10[1];

  var listRef = /*#__PURE__*/React.createRef();
  var triggerRef = /*#__PURE__*/React.createRef();
  React.useEffect(function () {
    var selectedList = [];
    list.forEach(function (avatarItem) {
      if (avatarItem.selected) {
        selectedList.push(avatarItem);
      }
    });
    setSelectedItems(selectedList);
  }, []);
  React.useEffect(function () {
    if (!openPopover) {
      setHighlightFirstItem(false);
      setHighlightLastItem(false);
    } else {
      setHighlightFirstItem(true);
    }
  }, [openPopover]);
  React.useEffect(function () {
    if (highlightFirstItem && openPopover) {
      requestAnimationFrame(function () {
        return focusListItem$3('down', setFocusedOption, listRef, withSearch);
      });
    }
  }, [highlightFirstItem]);
  React.useEffect(function () {
    if (highlightLastItem && openPopover) {
      requestAnimationFrame(function () {
        return focusListItem$3('up', setFocusedOption, listRef, withSearch);
      });
    }
  }, [highlightLastItem]);
  var baseProps = extractBaseProps(props);
  var hiddenAvatarCount = list.length - max;
  var avatarStyle = {
    backgroundColor: "".concat(borderColor),
    boxShadow: "0 0 0  calc(var(--spacing-xs) + var(--spacing-s)) ".concat(borderColor)
  };
  var AvatarSelectionClass = classnames(_defineProperty$1({}, 'SelectionAvatarGroup', true), className);
  var searchInputHeight = 36;
  var searchBorder = 1;
  var customStyle = {
    width: width,
    minHeight: minHeight,
    maxHeight: withSearch ? maxHeight - searchInputHeight - searchBorder : maxHeight
  };
  var hiddenAvatarList = list.slice(max, list.length);
  var popoverId = "DesignSystem-AvatarSelection-Popover-".concat(uidGenerator());
  var popoverProps = {
    hiddenAvatarList: hiddenAvatarList,
    customStyle: customStyle,
    searchPlaceholder: searchPlaceholder,
    searchComparator: searchComparator,
    children: children
  };
  var triggerProps = {
    size: size,
    avatarStyle: avatarStyle,
    hiddenAvatarCount: hiddenAvatarCount,
    hiddenAvatarList: hiddenAvatarList
  };

  var onToggleHandler = function onToggleHandler(open) {
    open ? setOpenPopover(true) : setOpenPopover(false);
  };

  var contextProp = {
    listRef: listRef,
    onSelect: onSelect,
    withSearch: withSearch,
    triggerRef: triggerRef,
    selectedItems: selectedItems,
    focusedOption: focusedOption,
    openPopover: openPopover,
    setSelectedItems: setSelectedItems,
    setFocusedOption: setFocusedOption,
    setHighlightFirstItem: setHighlightFirstItem,
    setHighlightLastItem: setHighlightLastItem,
    setOpenPopover: setOpenPopover,
    popoverId: popoverId
  };
  return /*#__PURE__*/React.createElement(AvatarSelectionContext.Provider, {
    value: contextProp
  }, /*#__PURE__*/React.createElement("div", _extends$2({
    "data-test": "DesignSystem-AvatarSelection"
  }, baseProps, {
    className: AvatarSelectionClass
  }), /*#__PURE__*/React.createElement(SelectionAvatarsWrapper, {
    size: size,
    avatarStyle: avatarStyle,
    avatarList: list.slice(0, max),
    avatarRenderer: avatarRenderer,
    tooltipPosition: tooltipPosition
  }), (hiddenAvatarCount > 0 || children && hiddenAvatarCount > 0) && /*#__PURE__*/React.createElement(Popover, {
    open: openPopover,
    position: "bottom-end",
    trigger: /*#__PURE__*/React.createElement(AvatarSelectionCount, triggerProps),
    triggerClass: "flex-grow-0",
    onToggle: onToggleHandler
  }, /*#__PURE__*/React.createElement(AvatarSelectionPopover, popoverProps))));
};
AvatarSelection.displayName = 'AvatarSelection';
AvatarSelection.defaultProps = {
  max: 5,
  tooltipPosition: 'bottom',
  borderColor: 'white',
  size: 'regular',
  width: 176,
  maxHeight: 256
};
AvatarSelection.Input = AvatarSelectionInput;
AvatarSelection.List = AvatarSelectionList;
AvatarSelection.Option = AvatarSelectionOption;
AvatarSelection.EmptyState = AvatarSelectionEmptyState;

var ComboboxList = function ComboboxList(props) {
  return /*#__PURE__*/React.createElement(Listbox, _extends$2({
    className: "py-3"
  }, props, {
    role: "listbox"
  }), props.children);
};
ComboboxList.defaultProps = {
  type: 'option',
  showDivider: false,
  tagName: 'ul',
  size: 'compressed'
};

var ComboboxContext = /*#__PURE__*/React.createContext({});

var handleKeyDown$4 = function handleKeyDown(event, focusedOption, setFocusedOption, setOpenPopover, inputTriggerRef, setHighlightFirstItem, setHighlightLastItem, multiSelect, listRef) {
  switch (event.key) {
    case 'ArrowUp':
      event.preventDefault();
      navigateOptions$2('up', focusedOption, setFocusedOption, listRef);
      break;

    case 'ArrowDown':
      event.preventDefault();
      navigateOptions$2('down', focusedOption, setFocusedOption, listRef);
      break;

    case 'Enter':
      handleEnterKey$1(focusedOption, multiSelect, inputTriggerRef, listRef, setFocusedOption);
      setHighlightLastItem === null || setHighlightLastItem === void 0 ? void 0 : setHighlightLastItem(false);
      setHighlightFirstItem === null || setHighlightFirstItem === void 0 ? void 0 : setHighlightFirstItem(false);
      break;

    case 'Escape':
      setOpenPopover === null || setOpenPopover === void 0 ? void 0 : setOpenPopover(false);
      inputTriggerRef.current.focus();
      setFocusedOption === null || setFocusedOption === void 0 ? void 0 : setFocusedOption(undefined);
      break;
  }
};

var handleEnterKey$1 = function handleEnterKey(focusedOption, multiSelect, inputTriggerRef, listRef, setFocusedOption) {
  focusedOption === null || focusedOption === void 0 ? void 0 : focusedOption.click();

  if (!multiSelect) {
    inputTriggerRef.current.focus();
  } else {
    // to focus first option by default when last option is selected
    var listItems = listRef.current.querySelectorAll('[data-test="DesignSystem-Listbox-ItemWrapper"]');
    var listArr = Array.from(listItems);
    var index = listArr.findIndex(function (item) {
      return item == focusedOption;
    });

    if (index === listArr.length - 1) {
      listItems[0].focus();
      setFocusedOption && setFocusedOption(listItems[0]);
      listItems[0].scrollIntoView({
        block: 'center'
      });
    }
  }
};

var navigateOptions$2 = function navigateOptions(direction, focusedOption, setFocusedOption, listRef) {
  var _targetOption$scrollI;

  var listItems = listRef.current.querySelectorAll('[data-test="DesignSystem-Listbox-ItemWrapper"]');
  var index = Array.from(listItems).findIndex(function (item) {
    return item == focusedOption;
  });

  if (index === -1) {
    index = direction === 'up' ? listItems.length - 1 : 0;
  } else {
    index = direction === 'up' ? (index - 1 + listItems.length) % listItems.length : (index + 1) % listItems.length;
  }

  var targetOption = listItems[index];
  targetOption.focus();
  setFocusedOption && setFocusedOption(targetOption);
  targetOption === null || targetOption === void 0 ? void 0 : (_targetOption$scrollI = targetOption.scrollIntoView) === null || _targetOption$scrollI === void 0 ? void 0 : _targetOption$scrollI.call(targetOption, {
    block: 'center'
  });
};

var _excluded$d = ["children", "option", "onClick"];
var ComboboxOption = function ComboboxOption(props) {
  var children = props.children,
      option = props.option,
      onClick = props.onClick,
      rest = _objectWithoutProperties(props, _excluded$d);

  var contextProp = React.useContext(ComboboxContext);
  var onOptionClick = contextProp.onOptionClick,
      inputValue = contextProp.inputValue,
      focusedOption = contextProp.focusedOption,
      setFocusedOption = contextProp.setFocusedOption,
      setOpenPopover = contextProp.setOpenPopover,
      inputTriggerRef = contextProp.inputTriggerRef,
      setHighlightFirstItem = contextProp.setHighlightFirstItem,
      setHighlightLastItem = contextProp.setHighlightLastItem,
      multiSelect = contextProp.multiSelect,
      listRef = contextProp.listRef;

  var onClickHandler = function onClickHandler() {
    if (onClick) {
      return onClick(option);
    }

    return onOptionClick && onOptionClick(_objectSpread2(_objectSpread2({}, option), {}, {
      isSelectedOption: true
    }));
  };

  var onKeyDownHandler = function onKeyDownHandler(event) {
    handleKeyDown$4(event, focusedOption, setFocusedOption, setOpenPopover, inputTriggerRef, setHighlightFirstItem, setHighlightLastItem, multiSelect, listRef);
  };

  return /*#__PURE__*/React.createElement(Listbox.Item, _extends$2({
    onClick: onClickHandler,
    selected: option.label === (inputValue === null || inputValue === void 0 ? void 0 : inputValue.label),
    onKeyDown: onKeyDownHandler,
    tabIndex: -1,
    role: "option",
    "data-test": "DesignSystem-Combobox-Option"
  }, rest), children);
};
ComboboxOption.defaultProps = {
  tagName: 'li'
};

var handleKeyDown$3 = function handleKeyDown(event, setOpenPopover, setHighlightFirstItem, setHighlightLastItem) {
  switch (event.key) {
    case 'ArrowUp':
      setOpenPopover === null || setOpenPopover === void 0 ? void 0 : setOpenPopover(true);
      setHighlightLastItem === null || setHighlightLastItem === void 0 ? void 0 : setHighlightLastItem(true);
      break;

    case 'ArrowDown':
      setOpenPopover === null || setOpenPopover === void 0 ? void 0 : setOpenPopover(true);
      setHighlightFirstItem === null || setHighlightFirstItem === void 0 ? void 0 : setHighlightFirstItem(true);
      break;

    case 'Escape':
    case 'Tab':
      setOpenPopover === null || setOpenPopover === void 0 ? void 0 : setOpenPopover(false);
      break;
  }
};
var focusListItem$2 = function focusListItem(position, setFocusedOption, listRef) {
  var _listRef$current, _targetOption;

  var listItems = (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.querySelectorAll('[data-test="DesignSystem-Listbox-ItemWrapper"]');
  var targetOption;

  if (position === 'down') {
    targetOption = listItems === null || listItems === void 0 ? void 0 : listItems[0];
  } else {
    targetOption = listItems[listItems.length - 1];
  }

  (_targetOption = targetOption) === null || _targetOption === void 0 ? void 0 : _targetOption.focus();

  if (targetOption && typeof targetOption.scrollIntoView === 'function') {
    var _targetOption2;

    (_targetOption2 = targetOption) === null || _targetOption2 === void 0 ? void 0 : _targetOption2.scrollIntoView({
      block: 'center',
      behavior: 'smooth'
    });
  }

  setFocusedOption && setFocusedOption(targetOption);
};

var InputBox = function InputBox(props) {
  var contextProp = React.useContext(ComboboxContext);
  var inputValue = contextProp.inputValue,
      setInputValue = contextProp.setInputValue,
      setFocusedOption = contextProp.setFocusedOption,
      setOpenPopover = contextProp.setOpenPopover,
      inputTriggerRef = contextProp.inputTriggerRef,
      setHighlightFirstItem = contextProp.setHighlightFirstItem,
      setHighlightLastItem = contextProp.setHighlightLastItem,
      openPopover = contextProp.openPopover,
      popoverId = contextProp.popoverId;

  var onChangeHandler = function onChangeHandler(event) {
    var value = event.target.value;
    setFocusedOption && setFocusedOption(undefined);
    var newValue = {
      label: value,
      value: value,
      isSelectedOption: false
    };
    setInputValue && setInputValue(newValue);

    if (value !== '') {
      setOpenPopover === null || setOpenPopover === void 0 ? void 0 : setOpenPopover(true);
    }
  };

  var onClearHandler = function onClearHandler(event) {
    var _props$onClear;

    event.stopPropagation();
    var newValue = {
      label: '',
      value: '',
      isSelectedOption: false
    };
    setInputValue && setInputValue(newValue);
    setOpenPopover === null || setOpenPopover === void 0 ? void 0 : setOpenPopover(true);
    (_props$onClear = props.onClear) === null || _props$onClear === void 0 ? void 0 : _props$onClear.call(props, event);
  };

  var onKeyDownHandler = function onKeyDownHandler(event) {
    handleKeyDown$3(event, setOpenPopover, setHighlightFirstItem, setHighlightLastItem);
    props.onKeyDown && props.onKeyDown(event);
  };

  return /*#__PURE__*/React.createElement(Input, _extends$2({}, props, {
    ref: inputTriggerRef,
    value: inputValue === null || inputValue === void 0 ? void 0 : inputValue.label,
    onChange: onChangeHandler,
    onKeyDown: onKeyDownHandler,
    onClear: onClearHandler,
    role: "combobox",
    "aria-haspopup": "listbox",
    "aria-controls": popoverId,
    "aria-label": props.placeholder || 'Combobox-Input-Trigger',
    "aria-expanded": openPopover,
    "data-test": "DesignSystem-Combobox-Input"
  }));
};

var _excluded$c = ["chipOptions", "allowDuplicates", "disabled", "error", "placeholder", "defaultValue", "value", "className", "autoFocus", "onChange", "onBlur", "onFocus", "onKeyDown", "onInputChange", "tabIndex", "role"],
    _excluded2 = ["type", "onClick"];
var keyCodes = {
  BACKSPACE: 'Backspace',
  DELETE: 'Delete',
  ENTER: 'Enter'
};
var MultiSelectTrigger = function MultiSelectTrigger(props) {
  var _classNames, _classNames2;

  var chipOptions = props.chipOptions,
      allowDuplicates = props.allowDuplicates,
      disabled = props.disabled,
      error = props.error,
      placeholder = props.placeholder,
      defaultValue = props.defaultValue,
      value = props.value,
      className = props.className,
      autoFocus = props.autoFocus,
      onChange = props.onChange,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      onKeyDown = props.onKeyDown,
      onInputChange = props.onInputChange,
      tabIndex = props.tabIndex,
      role = props.role,
      rest = _objectWithoutProperties(props, _excluded$c);

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
      setInputValue('');
    }
  }, [value]);
  var ChipInputBorderClass = classnames((_classNames = {}, _defineProperty$1(_classNames, 'ChipInput-border', true), _defineProperty$1(_classNames, 'ChipInput-border--error', error), _classNames));
  var ChipInputClass = classnames((_classNames2 = {
    ChipInput: true
  }, _defineProperty$1(_classNames2, 'ChipInput--disabled', disabled), _defineProperty$1(_classNames2, 'ChipInput--withChips', chips && chips.length > 0), _defineProperty$1(_classNames2, 'ChipInput--error', error), _classNames2), className);

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
    var chip = inputValue.trim();
    var isChipExist = chips.filter(function (item) {
      return item.label === chip;
    }).length > 0;

    if ((allowDuplicates || !isChipExist) && chip) {
      var updatedChips = [].concat(_toConsumableArray(chips), [{
        label: chip,
        value: chip,
        isSelectedOption: false
      }]);

      if (!value) {
        setChips(updatedChips);
      }

      onUpdateChips(updatedChips);
      setInputValue('');
    }
  };

  var onDeleteAllHandler = function onDeleteAllHandler(e) {
    e.stopPropagation();
    var updatedChips = [];

    if (!value) {
      setChips(updatedChips);
    }

    onUpdateChips(updatedChips);
    setInputValue('');
    onInputChange && onInputChange();
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

    onKeyDown && onKeyDown(event);
  };

  var onInputChangeHandler = function onInputChangeHandler(event) {
    setInputValue(event.target.value);
    onInputChange && onInputChange(event);
  };

  var onClickHandler = function onClickHandler() {
    var _inputRef$current;

    (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
  };

  var chipComponents = chips.map(function (chip, index) {
    var _chipOptions$type = chipOptions.type,
        type = _chipOptions$type === void 0 ? 'input' : _chipOptions$type,
        _onClick = chipOptions.onClick,
        rest = _objectWithoutProperties(chipOptions, _excluded2);

    var chipLabel = typeof chip === 'string' ? chip : chip === null || chip === void 0 ? void 0 : chip.label;
    return /*#__PURE__*/React.createElement(Chip, _extends$2({
      "data-test": "DesignSystem-MultiSelectTrigger--Chip",
      label: chipLabel,
      name: chip,
      type: type,
      disabled: disabled,
      key: index,
      className: "my-3 mx-2",
      onClick: function onClick() {
        return _onClick && _onClick(chip, index);
      },
      onClose: function onClose() {
        return onChipDeleteHandler(index);
      }
    }, rest));
  });
  return (
    /*#__PURE__*/

    /* TODO(a11y): fix accessibility  */

    /* eslint-disable  */
    React.createElement("div", {
      "data-test": "DesignSystem-MultiSelectTrigger--Border",
      className: ChipInputBorderClass
    }, /*#__PURE__*/React.createElement("div", _extends$2({
      "data-test": "DesignSystem-MultiSelectTrigger"
    }, baseProps, {
      className: ChipInputClass,
      onClick: onClickHandler,
      tabIndex: disabled ? -1 : tabIndex || 0
    }), /*#__PURE__*/React.createElement("div", {
      className: "ChipInput-wrapper"
    }, chips && chips.length > 0 && chipComponents, /*#__PURE__*/React.createElement("input", _extends$2({}, rest, {
      "data-test": "DesignSystem-MultiSelectTrigger--Input",
      ref: props.forwardedRef || inputRef,
      className: "ChipInput-input",
      autoFocus: autoFocus,
      placeholder: chips && chips.length > 0 ? '' : placeholder,
      disabled: disabled,
      value: inputValue,
      onBlur: onBlur,
      onFocus: onFocus,
      onChange: onInputChangeHandler,
      onKeyDown: onKeyDownHandler,
      role: role
    }))), (chips.length > 0 || inputValue.length > 0) && /*#__PURE__*/React.createElement(Icon, {
      "data-test": "DesignSystem-MultiSelectTrigger--Icon",
      name: "close",
      appearance: disabled ? 'disabled' : 'subtle',
      className: "ChipInput-icon",
      onClick: onDeleteAllHandler,
      tabIndex: disabled ? -1 : 0
    })))
  );
};
MultiSelectTrigger.displayName = 'MultiSelectTrigger';
MultiSelectTrigger.defaultProps = {
  chipOptions: {},
  defaultValue: [],
  allowDuplicates: false,
  autoFocus: false
};

var ChipInputBox = function ChipInputBox(props) {
  var contextProp = React__default.useContext(ComboboxContext);
  var chipInputValue = contextProp.chipInputValue,
      setChipInputValue = contextProp.setChipInputValue,
      setOpenPopover = contextProp.setOpenPopover,
      setFocusedOption = contextProp.setFocusedOption,
      setChipInputText = contextProp.setChipInputText,
      setHighlightFirstItem = contextProp.setHighlightFirstItem,
      setHighlightLastItem = contextProp.setHighlightLastItem,
      inputTriggerRef = contextProp.inputTriggerRef,
      openPopover = contextProp.openPopover,
      popoverId = contextProp.popoverId;

  var onChangeHandler = function onChangeHandler(chips) {
    setFocusedOption && setFocusedOption(undefined);
    setChipInputValue && setChipInputValue(chips);

    if (chips.length === 0) {
      setOpenPopover === null || setOpenPopover === void 0 ? void 0 : setOpenPopover(true);
    }
  };

  var onUpdateHandler = function onUpdateHandler(event) {
    var _event$target;

    var value = event === null || event === void 0 ? void 0 : (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.value;

    if (!value) {
      setChipInputText === null || setChipInputText === void 0 ? void 0 : setChipInputText('');
      setOpenPopover === null || setOpenPopover === void 0 ? void 0 : setOpenPopover(true);
      inputTriggerRef === null || inputTriggerRef === void 0 ? void 0 : inputTriggerRef.current.focus();
      return;
    }

    setChipInputText && setChipInputText(value);

    if (value !== '') {
      setOpenPopover === null || setOpenPopover === void 0 ? void 0 : setOpenPopover(true);
    }
  };

  var onKeyDownHandler = function onKeyDownHandler(event) {
    handleKeyDown$3(event, setOpenPopover, setHighlightFirstItem, setHighlightLastItem);
    props.onKeyDown && props.onKeyDown(event);
  };

  return /*#__PURE__*/React__default.createElement(MultiSelectTrigger, _extends$2({}, props, {
    value: chipInputValue,
    onChange: onChangeHandler,
    onInputChange: onUpdateHandler,
    onKeyDown: onKeyDownHandler,
    tabIndex: -1,
    forwardedRef: inputTriggerRef,
    role: "combobox",
    "aria-haspopup": "listbox",
    "aria-controls": popoverId,
    "aria-label": props.placeholder || 'Combobox-ChipInput-Trigger',
    "aria-expanded": openPopover,
    "data-test": "DesignSystem-Combobox-ChipInput"
  }));
};

var _excluded$b = ["multiSelect", "chipValue", "value"];
var ComboboxTrigger = function ComboboxTrigger(props) {
  var multiSelect = props.multiSelect,
      chipValue = props.chipValue,
      value = props.value,
      rest = _objectWithoutProperties(props, _excluded$b);

  if (multiSelect) {
    var icon = props.icon,
        clearButton = props.clearButton,
        iconType = props.iconType;
    var chipInputOptions = {
      icon: icon,
      clearButton: clearButton,
      iconType: iconType
    };
    return /*#__PURE__*/React.createElement(ChipInputBox, _extends$2({
      defaultValue: [],
      chipOptions: _objectSpread2({}, chipInputOptions)
    }, rest, {
      value: chipValue
    }));
  }

  return /*#__PURE__*/React.createElement(InputBox, _extends$2({}, props, {
    value: value === null || value === void 0 ? void 0 : value.label
  }));
};

var Combobox = function Combobox(props) {
  var children = props.children,
      onChange = props.onChange,
      multiSelect = props.multiSelect,
      className = props.className,
      maxHeight = props.maxHeight,
      width = props.width,
      value = props.value,
      placeholder = props.placeholder,
      disabled = props.disabled,
      error = props.error,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      onClear = props.onClear,
      icon = props.icon,
      iconType = props.iconType,
      size = props.size,
      chipValue = props.chipValue,
      clearButton = props.clearButton,
      onSearch = props.onSearch,
      onKeyDown = props.onKeyDown,
      onKeyUp = props.onKeyUp;

  var _React$useState = React.useState(),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      popoverStyle = _React$useState2[0],
      setPopoverStyle = _React$useState2[1];

  var _React$useState3 = React.useState({}),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      wrapperStyle = _React$useState4[0],
      setWrapperStyle = _React$useState4[1];

  var triggerRef = /*#__PURE__*/React.createRef();
  var listRef = /*#__PURE__*/React.createRef();

  var _React$useState5 = React.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      openPopover = _React$useState6[0],
      setOpenPopover = _React$useState6[1];

  var _React$useState7 = React.useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      isOptionSelected = _React$useState8[0],
      setIsOptionSelected = _React$useState8[1];

  var _React$useState9 = React.useState(),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      focusedOption = _React$useState10[0],
      setFocusedOption = _React$useState10[1];

  var _React$useState11 = React.useState(value || {
    label: '',
    value: ''
  }),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      inputValue = _React$useState12[0],
      setInputValue = _React$useState12[1];

  var _React$useState13 = React.useState(chipValue),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      chipInputValue = _React$useState14[0],
      setChipInputValue = _React$useState14[1];

  var _React$useState15 = React.useState(''),
      _React$useState16 = _slicedToArray(_React$useState15, 2),
      chipInputText = _React$useState16[0],
      setChipInputText = _React$useState16[1];

  var _React$useState17 = React.useState(false),
      _React$useState18 = _slicedToArray(_React$useState17, 2),
      highlightFirstItem = _React$useState18[0],
      setHighlightFirstItem = _React$useState18[1];

  var _React$useState19 = React.useState(false),
      _React$useState20 = _slicedToArray(_React$useState19, 2),
      highlightLastItem = _React$useState20[0],
      setHighlightLastItem = _React$useState20[1];

  var inputTriggerRef = React.useRef();
  var popoverId = "DesignSystem-Combobox--Popover-".concat(uidGenerator());
  React.useEffect(function () {
    var _triggerRef$current;

    var popperWidth = (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 ? void 0 : _triggerRef$current.clientWidth;
    var popperWrapperStyle = {
      width: width || popperWidth
    };
    var wrapperStyle = {
      maxHeight: maxHeight || 'var(--spacing-9)',
      overflowY: 'auto',
      boxSizing: 'border-box'
    };
    setWrapperStyle(wrapperStyle);
    setPopoverStyle(popperWrapperStyle);
  }, []);
  React.useEffect(function () {
    if (isOptionSelected) {
      multiSelect ? setOpenPopover(true) : setOpenPopover(false);
      setIsOptionSelected(false);
    }

    var value = multiSelect ? chipInputValue : inputValue;
    onChange && !isOptionSelected && onChange(value);
  }, [inputValue, chipInputValue]);
  React.useEffect(function () {
    if (highlightFirstItem && openPopover) {
      requestAnimationFrame(function () {
        return focusListItem$2('down', setFocusedOption, listRef);
      });
    }
  }, [highlightFirstItem]);
  React.useEffect(function () {
    if (highlightLastItem && openPopover) {
      requestAnimationFrame(function () {
        return focusListItem$2('up', setFocusedOption, listRef);
      });
    }
  }, [highlightLastItem]);
  React.useEffect(function () {
    if (!openPopover) {
      setHighlightFirstItem(false);
      setHighlightLastItem(false);
    }
  }, [openPopover]);
  React.useEffect(function () {
    onSearch && onSearch(chipInputText);
  }, [chipInputText]);

  var onOptionClick = function onOptionClick(option) {
    setIsOptionSelected(true);

    if (!multiSelect) {
      setInputValue(option);
      onChange && onChange(option);
    } else {
      var chipList = chipInputValue ? [].concat(_toConsumableArray(chipInputValue), [option]) : [option];
      setChipInputValue(chipList);
      onChange && onChange(chipList);
    }
  };

  var outsideClickHandler = function outsideClickHandler() {
    !multiSelect && setOpenPopover(false);
  };

  var onToggleHandler = function onToggleHandler(open) {
    open ? setOpenPopover(true) : setOpenPopover(false);
  };

  var triggerProps = {
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    error: error,
    onBlur: onBlur,
    onFocus: onFocus,
    onClear: onClear,
    icon: icon,
    iconType: iconType,
    size: size,
    multiSelect: multiSelect,
    chipValue: chipValue,
    clearButton: clearButton,
    onKeyDown: onKeyDown,
    onKeyUp: onKeyUp
  };
  var contextProp = {
    inputValue: inputValue,
    setInputValue: setInputValue,
    onOptionClick: onOptionClick,
    openPopover: openPopover,
    setOpenPopover: setOpenPopover,
    isOptionSelected: isOptionSelected,
    setIsOptionSelected: setIsOptionSelected,
    chipInputValue: chipInputValue,
    setChipInputValue: setChipInputValue,
    focusedOption: focusedOption,
    setFocusedOption: setFocusedOption,
    chipInputText: chipInputText,
    setChipInputText: setChipInputText,
    inputTriggerRef: inputTriggerRef,
    setHighlightFirstItem: setHighlightFirstItem,
    setHighlightLastItem: setHighlightLastItem,
    multiSelect: multiSelect,
    listRef: listRef,
    onSearch: onSearch,
    popoverId: popoverId
  };
  return /*#__PURE__*/React.createElement(ComboboxContext.Provider, {
    value: contextProp
  }, /*#__PURE__*/React.createElement("div", {
    ref: triggerRef,
    className: className
  }, /*#__PURE__*/React.createElement(OutsideClick, {
    onOutsideClick: outsideClickHandler
  }, /*#__PURE__*/React.createElement(Popover, {
    open: openPopover && !disabled,
    triggerClass: "d-block",
    customStyle: popoverStyle,
    onToggle: onToggleHandler,
    trigger: /*#__PURE__*/React.createElement(ComboboxTrigger, triggerProps)
  }, /*#__PURE__*/React.createElement("div", {
    style: wrapperStyle,
    ref: listRef,
    id: popoverId
  }, children && typeof children === 'function' ? children(contextProp) : children)))));
};
Combobox.List = ComboboxList;
Combobox.Option = ComboboxOption;

var SelectContext = /*#__PURE__*/React.createContext({});

var _excluded$a = ["children"];
var SelectList = function SelectList(props) {
  var contextProp = React.useContext(SelectContext);
  var withSearch = contextProp.withSearch,
      minHeight = contextProp.minHeight,
      maxHeight = contextProp.maxHeight,
      multiSelect = contextProp.multiSelect;

  var children = props.children,
      rest = _objectWithoutProperties(props, _excluded$a);

  var searchInputHeight = 33;
  var wrapperStyle = {
    maxHeight: withSearch ? maxHeight - searchInputHeight : maxHeight,
    overflowY: 'auto',
    minHeight: minHeight
  };
  return /*#__PURE__*/React.createElement(Listbox, _extends$2({
    "aria-label": "Options item list",
    "aria-multiselectable": multiSelect,
    className: "my-3"
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: wrapperStyle
  }, children));
};
SelectList.defaultProps = {
  type: 'option',
  showDivider: false,
  size: 'compressed',
  tagName: 'ul'
};

var mapInitialValue = function mapInitialValue(multiSelect, selectedValue) {
  if (multiSelect) {
    return selectedValue && !Array.isArray(selectedValue) ? [selectedValue] : selectedValue || [];
  } else {
    return selectedValue || {
      label: '',
      value: ''
    };
  }
};
var elementExist = function elementExist(targetObject, mainList) {
  if (!Array.isArray(mainList)) {
    return targetObject.value === (mainList === null || mainList === void 0 ? void 0 : mainList.value) ? 0 : -1;
  }

  return mainList.findIndex(function (item) {
    return item.value === targetObject.value;
  });
};
var removeOrAddToList = function removeOrAddToList(targetObject, prevList) {
  var newList = _toConsumableArray(prevList);

  var existingIndex = elementExist(targetObject, newList);

  if (existingIndex !== -1) {
    newList.splice(existingIndex, 1);
  } else {
    newList.push(targetObject);
  }

  return newList;
};
var computeValue = function computeValue(multiSelect, selectValue, setLabel) {
  if (!multiSelect) {
    return (selectValue === null || selectValue === void 0 ? void 0 : selectValue.label.trim()) || '';
  }

  var label = setLabel === null || setLabel === void 0 ? void 0 : setLabel(selectValue.length);

  if (label) {
    return label;
  }

  if (selectValue.length <= 2) {
    return selectValue.map(function (pair) {
      return "".concat(pair.label);
    }).join(', ');
  } else {
    return "".concat(selectValue.length, " Selected");
  }
};
var handleKeyDownTrigger = function handleKeyDownTrigger(event, setOpenPopover, setHighlightFirstItem, setHighlightLastItem) {
  switch (event.key) {
    case 'Enter':
      event.preventDefault();
      setOpenPopover === null || setOpenPopover === void 0 ? void 0 : setOpenPopover(true);
      setHighlightFirstItem === null || setHighlightFirstItem === void 0 ? void 0 : setHighlightFirstItem(true);
      break;

    case 'ArrowDown':
      setOpenPopover === null || setOpenPopover === void 0 ? void 0 : setOpenPopover(true);
      setHighlightFirstItem === null || setHighlightFirstItem === void 0 ? void 0 : setHighlightFirstItem(true);
      break;

    case 'ArrowUp':
      setOpenPopover === null || setOpenPopover === void 0 ? void 0 : setOpenPopover(true);
      setHighlightLastItem === null || setHighlightLastItem === void 0 ? void 0 : setHighlightLastItem(true);
      break;
  }
};
var focusListItem$1 = function focusListItem(position, setFocusedOption, listRef) {
  var _listRef$current, _listRef$current2, _targetOption, _targetOption2;

  var searchInput = (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.querySelectorAll('[data-test="DesignSystem-Select--Input"]');
  var listItems = (_listRef$current2 = listRef.current) === null || _listRef$current2 === void 0 ? void 0 : _listRef$current2.querySelectorAll('[data-test="DesignSystem-Listbox-ItemWrapper"]');
  var targetOption;

  if (position === 'down') {
    targetOption = (searchInput === null || searchInput === void 0 ? void 0 : searchInput[0]) || (listItems === null || listItems === void 0 ? void 0 : listItems[0]);
  } else {
    targetOption = listItems === null || listItems === void 0 ? void 0 : listItems[listItems.length - 1];
  }

  (_targetOption = targetOption) === null || _targetOption === void 0 ? void 0 : _targetOption.focus();
  (_targetOption2 = targetOption) === null || _targetOption2 === void 0 ? void 0 : _targetOption2.scrollIntoView({
    block: 'center'
  });
  setFocusedOption && setFocusedOption(targetOption);
};
var handleKeyDown$2 = function handleKeyDown(event, focusedOption, setFocusedOption, setHighlightFirstItem, setHighlightLastItem, listRef, withSearch, setOpenPopover, triggerRef) {
  switch (event.key) {
    case 'ArrowUp':
      event.preventDefault();
      navigateOptions$1('up', focusedOption, setFocusedOption, listRef, withSearch);
      break;

    case 'ArrowDown':
      event.preventDefault();
      navigateOptions$1('down', focusedOption, setFocusedOption, listRef, withSearch);
      break;

    case 'Enter':
      handleEnterKey(focusedOption);
      setHighlightLastItem === null || setHighlightLastItem === void 0 ? void 0 : setHighlightLastItem(false);
      setHighlightFirstItem === null || setHighlightFirstItem === void 0 ? void 0 : setHighlightFirstItem(false);
      break;

    case 'Tab':
      setHighlightLastItem === null || setHighlightLastItem === void 0 ? void 0 : setHighlightLastItem(false);
      setHighlightFirstItem === null || setHighlightFirstItem === void 0 ? void 0 : setHighlightFirstItem(false);
      break;

    case 'Escape':
      setOpenPopover === null || setOpenPopover === void 0 ? void 0 : setOpenPopover(false);
      triggerRef.current.focus();
      setFocusedOption === null || setFocusedOption === void 0 ? void 0 : setFocusedOption(undefined);
      break;
  }
};
var handleEnterKey = function handleEnterKey(focusedOption) {
  focusedOption === null || focusedOption === void 0 ? void 0 : focusedOption.click();
};
var navigateOptions$1 = function navigateOptions(direction, focusedOption, setFocusedOption, listRef, withSearch) {
  var listItems = listRef.current.querySelectorAll('[data-test="DesignSystem-Listbox-ItemWrapper"]');
  var index = Array.from(listItems).findIndex(function (item) {
    return item == focusedOption;
  });

  if (index === -1) {
    index = direction === 'up' ? listItems.length - 1 : 0;
  } else if (withSearch && index === 0 && direction === 'up' || withSearch && index === listItems.length - 1 && direction === 'down') {
    var searchInput = listRef.current.querySelector('[data-test="DesignSystem-Select--Input"]');
    searchInput.focus();
    setFocusedOption && setFocusedOption(searchInput);
  } else {
    index = direction === 'up' ? (index - 1 + listItems.length) % listItems.length : (index + 1) % listItems.length;
    var targetOption = listItems[index];
    targetOption.focus();
    setFocusedOption && setFocusedOption(targetOption);
    targetOption.scrollIntoView({
      block: 'center'
    });
  }
};
var handleInputKeyDown = function handleInputKeyDown(event, listRef, setFocusedOption, setOpenPopover, triggerRef) {
  var _listRef$current3, _targetOption3, _targetOption4;

  var listItems = (_listRef$current3 = listRef.current) === null || _listRef$current3 === void 0 ? void 0 : _listRef$current3.querySelectorAll('[data-test="DesignSystem-Listbox-ItemWrapper"]');
  var targetOption;

  switch (event.key) {
    case 'ArrowUp':
      event.preventDefault();
      targetOption = listItems[listItems.length - 1];
      break;

    case 'ArrowDown':
      event.preventDefault();
      targetOption = listItems[0];
      break;

    case 'Escape':
      setOpenPopover === null || setOpenPopover === void 0 ? void 0 : setOpenPopover(false);
      triggerRef.current.focus();
      setFocusedOption === null || setFocusedOption === void 0 ? void 0 : setFocusedOption(undefined);
      break;
  }

  (_targetOption3 = targetOption) === null || _targetOption3 === void 0 ? void 0 : _targetOption3.focus();
  (_targetOption4 = targetOption) === null || _targetOption4 === void 0 ? void 0 : _targetOption4.scrollIntoView({
    block: 'center'
  });
  setFocusedOption && setFocusedOption(targetOption);
};

var _excluded$9 = ["children", "option", "checkedState", "onClick", "withCheckbox", "disabled"];
var SelectOption = function SelectOption(props) {
  var children = props.children,
      option = props.option,
      checkedState = props.checkedState,
      onClick = props.onClick,
      _props$withCheckbox = props.withCheckbox,
      withCheckbox = _props$withCheckbox === void 0 ? true : _props$withCheckbox,
      disabled = props.disabled,
      rest = _objectWithoutProperties(props, _excluded$9);

  var contextProp = React.useContext(SelectContext);
  var onOptionClick = contextProp.onOptionClick,
      selectValue = contextProp.selectValue,
      setSelectValue = contextProp.setSelectValue,
      multiSelect = contextProp.multiSelect,
      setIsOptionSelected = contextProp.setIsOptionSelected,
      focusedOption = contextProp.focusedOption,
      setFocusedOption = contextProp.setFocusedOption,
      setHighlightFirstItem = contextProp.setHighlightFirstItem,
      setHighlightLastItem = contextProp.setHighlightLastItem,
      listRef = contextProp.listRef,
      withSearch = contextProp.withSearch,
      setOpenPopover = contextProp.setOpenPopover,
      triggerRef = contextProp.triggerRef;

  var onClickHandler = function onClickHandler() {
    if (disabled) return;

    if (onClick) {
      onClick(option);
      return;
    }

    var newList = multiSelect && Array.isArray(selectValue) ? removeOrAddToList(option, selectValue) : option;
    setIsOptionSelected === null || setIsOptionSelected === void 0 ? void 0 : setIsOptionSelected(Array.isArray(newList) ? newList.length !== 0 : true);
    setSelectValue === null || setSelectValue === void 0 ? void 0 : setSelectValue(newList);
    onOptionClick === null || onOptionClick === void 0 ? void 0 : onOptionClick(newList);
  };

  var checked = checkedState === 'checked' || elementExist(option, selectValue) !== -1;
  var indeterminate = checkedState === 'indeterminate';

  var onKeyDownHandler = function onKeyDownHandler(event) {
    handleKeyDown$2(event, focusedOption, setFocusedOption, setHighlightFirstItem, setHighlightLastItem, listRef, withSearch, setOpenPopover, triggerRef);
  };

  return /*#__PURE__*/React.createElement(Listbox.Item, _extends$2({
    role: "option",
    onClick: onClickHandler,
    "aria-selected": checked,
    "aria-label": "option item",
    onKeyDown: function onKeyDown(event) {
      return onKeyDownHandler(event);
    },
    selected: checked,
    tabIndex: -1,
    disabled: disabled,
    "data-test": "DesignSystem-Select-Option"
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "d-flex align-items-center"
  }, multiSelect && withCheckbox && /*#__PURE__*/React.createElement(Checkbox, {
    tabIndex: -1,
    "aria-checked": indeterminate ? 'mixed' : checked,
    checked: checked,
    indeterminate: indeterminate
  }), /*#__PURE__*/React.createElement("div", {
    className: multiSelect ? 'Select-trigger-text pt-2' : 'Select-trigger-text'
  }, children)));
};
SelectOption.defaultProps = {
  withCheckbox: true
};

var _excluded$8 = ["triggerSize", "placeholder", "withClearButton", "icon", "disabled", "inlineLabel", "iconType", "onClear", "setLabel"];

var SelectTrigger = function SelectTrigger(props) {
  var _classNames;

  var triggerSize = props.triggerSize,
      placeholder = props.placeholder,
      withClearButton = props.withClearButton,
      icon = props.icon,
      disabled = props.disabled,
      inlineLabel = props.inlineLabel,
      iconType = props.iconType,
      onClear = props.onClear,
      setLabel = props.setLabel,
      rest = _objectWithoutProperties(props, _excluded$8);

  var contextProp = React.useContext(SelectContext);
  var elementRef = React.useRef(null);
  var openPopover = contextProp.openPopover,
      selectValue = contextProp.selectValue,
      setSelectValue = contextProp.setSelectValue,
      isOptionSelected = contextProp.isOptionSelected,
      setIsOptionSelected = contextProp.setIsOptionSelected,
      multiSelect = contextProp.multiSelect,
      setOpenPopover = contextProp.setOpenPopover,
      setHighlightFirstItem = contextProp.setHighlightFirstItem,
      setHighlightLastItem = contextProp.setHighlightLastItem,
      triggerRef = contextProp.triggerRef;
  var buttonDisabled = disabled ? 'disabled' : 'default';
  var trimmedPlaceholder = placeholder === null || placeholder === void 0 ? void 0 : placeholder.trim();
  var displayValue = computeValue(multiSelect, selectValue, setLabel);
  var value = isOptionSelected && displayValue.length > 0 ? displayValue : trimmedPlaceholder;
  var iconName = openPopover ? 'keyboard_arrow_up' : 'keyboard_arrow_down';

  var onClearHandler = function onClearHandler(event) {
    event.stopPropagation();
    var emptyValue = multiSelect ? [] : {
      label: '',
      value: ''
    };
    setSelectValue === null || setSelectValue === void 0 ? void 0 : setSelectValue(emptyValue);
    setIsOptionSelected === null || setIsOptionSelected === void 0 ? void 0 : setIsOptionSelected(false);

    if (onClear) {
      onClear(event);
    }
  };

  var buttonClass = classnames((_classNames = {}, _defineProperty$1(_classNames, 'Button', true), _defineProperty$1(_classNames, 'Select-trigger', true), _defineProperty$1(_classNames, "Select-trigger--".concat(triggerSize), triggerSize), _defineProperty$1(_classNames, 'Select-trigger--placeholder', !isOptionSelected), _defineProperty$1(_classNames, 'Select-trigger--icon', icon), _defineProperty$1(_classNames, 'Select-trigger--open', openPopover), _classNames));
  var textClass = classnames(_defineProperty$1({}, 'Select-trigger-text', true));
  return /*#__PURE__*/React.createElement(Tooltip, {
    showOnTruncation: true,
    showTooltip: !openPopover,
    tooltip: value,
    elementRef: elementRef,
    className: "w-100",
    triggerClass: "w-100"
  }, /*#__PURE__*/React.createElement("button", _extends$2({
    ref: triggerRef,
    onKeyDown: function onKeyDown(event) {
      return handleKeyDownTrigger(event, setOpenPopover, setHighlightFirstItem, setHighlightLastItem);
    },
    type: "button",
    className: buttonClass,
    disabled: disabled,
    tabIndex: 0,
    "aria-haspopup": "listbox",
    "aria-expanded": openPopover,
    "aria-label": "trigger",
    "data-test": "DesignSystem-Select-trigger"
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "Select-trigger-wrapper ellipsis--noWrap"
  }, inlineLabel && /*#__PURE__*/React.createElement(Text, {
    appearance: "subtle",
    className: "mr-4 white-space-nowrap"
  }, "".concat(inlineLabel.trim().charAt(0).toUpperCase()).concat(inlineLabel.trim().slice(1))), icon && !inlineLabel && /*#__PURE__*/React.createElement(Icon, {
    appearance: buttonDisabled,
    className: "d-flex align-items-center mr-4",
    name: icon,
    type: iconType
  }), value && /*#__PURE__*/React.createElement(Text, {
    ref: elementRef,
    className: textClass
  }, value)), isOptionSelected && withClearButton && /*#__PURE__*/React.createElement(Icon, {
    appearance: buttonDisabled,
    onClick: onClearHandler,
    className: "align-items-center mr-2 ml-3 Select-crossButton",
    size: 12,
    name: "close",
    "aria-label": "clear selected",
    type: iconType,
    "data-test": "DesignSystem-Select--closeIcon"
  }), /*#__PURE__*/React.createElement(Icon, {
    appearance: buttonDisabled,
    name: iconName,
    type: iconType
  })));
};

SelectTrigger.defaultProps = {
  triggerSize: 'regular',
  placeholder: 'Select',
  withClearButton: true
};

var _excluded$7 = ["onChange", "onClear"];
var SearchInput = function SearchInput(props) {
  var contextProp = React.useContext(SelectContext);
  var setWithSearch = contextProp.setWithSearch,
      maxHeight = contextProp.maxHeight,
      listRef = contextProp.listRef,
      setFocusedOption = contextProp.setFocusedOption,
      setOpenPopover = contextProp.setOpenPopover,
      triggerRef = contextProp.triggerRef;

  var onChange = props.onChange,
      onClear = props.onClear,
      rest = _objectWithoutProperties(props, _excluded$7);

  React.useEffect(function () {
    setWithSearch === null || setWithSearch === void 0 ? void 0 : setWithSearch(true);
  }, [maxHeight]);

  var searchHandler = function searchHandler(event) {
    if (onChange) onChange(event.target.value);
  };

  var searchClearHandler = function searchClearHandler(event) {
    if (onClear) onClear(event);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "Select-inputWrapper"
  }, /*#__PURE__*/React.createElement(Input, _extends$2({}, rest, {
    icon: 'search',
    onKeyDown: function onKeyDown(event) {
      return handleInputKeyDown(event, listRef, setFocusedOption, setOpenPopover, triggerRef);
    } // TODO(a11y): research more on this.
    // eslint-disable-next-line jsx-a11y/no-autofocus
    ,
    autoFocus: true,
    onChange: searchHandler,
    onClear: searchClearHandler,
    autoComplete: 'off',
    "aria-label": "Search",
    "aria-haspopup": "listbox",
    className: "Select-input",
    "data-test": "DesignSystem-Select--Input"
  })));
};

var _excluded$6 = ["title", "description", "children"];
var SelectEmptyTemplate = function SelectEmptyTemplate(props) {
  var contextProp = React.useContext(SelectContext);
  var maxHeight = contextProp.maxHeight,
      withSearch = contextProp.withSearch;

  var title = props.title,
      description = props.description,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded$6);

  var searchInputHeight = 33;
  var wrapperStyle = {
    minHeight: withSearch ? maxHeight - searchInputHeight : maxHeight
  };
  return /*#__PURE__*/React.createElement("div", _extends$2({
    className: "px-7 d-flex justify-content-center align-items-center",
    style: wrapperStyle,
    "data-test": "DesignSystem-Select-EmptyState--wrapper",
    "aria-live": "polite",
    role: "alert"
  }, rest), /*#__PURE__*/React.createElement("div", {
    "aria-labelledby": title,
    "aria-describedby": description,
    className: "d-flex flex-column justify-content-center align-items-center"
  }, title && /*#__PURE__*/React.createElement(Text, {
    id: title,
    role: "heading",
    className: "text-align-center mb-3",
    weight: "strong"
  }, title), description && /*#__PURE__*/React.createElement(Text, {
    id: description,
    className: "text-align-center mb-6",
    weight: "medium",
    size: "small",
    appearance: "subtle"
  }, description), children && children));
};

var _excluded$5 = ["children"];
var SelectFooter = function SelectFooter(props) {
  var children = props.children,
      rest = _objectWithoutProperties(props, _excluded$5);

  return /*#__PURE__*/React.createElement("div", _extends$2({
    className: "Select-buttonWrapper"
  }, rest), children);
};

var Select = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
      onSelect = props.onSelect,
      width = props.width,
      maxHeight = props.maxHeight,
      minHeight = props.minHeight,
      value = props.value,
      boundaryElement = props.boundaryElement,
      appendToBody = props.appendToBody,
      _props$multiSelect = props.multiSelect,
      multiSelect = _props$multiSelect === void 0 ? false : _props$multiSelect,
      onOutsideClick = props.onOutsideClick,
      triggerOptions = props.triggerOptions,
      popoverWidth = props.popoverWidth;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      openPopover = _React$useState2[0],
      setOpenPopover = _React$useState2[1];

  var mapValue = mapInitialValue(multiSelect, value);

  var _React$useState3 = React.useState(mapValue),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      selectValue = _React$useState4[0],
      setSelectValue = _React$useState4[1];

  var _React$useState5 = React.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      isOptionSelected = _React$useState6[0],
      setIsOptionSelected = _React$useState6[1];

  var triggerRef = /*#__PURE__*/React.createRef();
  var listRef = React.useRef(null);

  var _React$useState7 = React.useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      withSearch = _React$useState8[0],
      setWithSearch = _React$useState8[1];

  var _React$useState9 = React.useState(),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      focusedOption = _React$useState10[0],
      setFocusedOption = _React$useState10[1];

  var _React$useState11 = React.useState(false),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      highlightFirstItem = _React$useState12[0],
      setHighlightFirstItem = _React$useState12[1];

  var _React$useState13 = React.useState(false),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      highlightLastItem = _React$useState14[0],
      setHighlightLastItem = _React$useState14[1];

  var _React$useState15 = React.useState({
    width: popoverWidth || width
  }),
      _React$useState16 = _slicedToArray(_React$useState15, 2),
      popoverStyle = _React$useState16[0],
      setPopoverStyle = _React$useState16[1];

  var triggerStyle = {
    width: width
  };
  React.useEffect(function () {
    var _triggerRef$current;

    // if popover width is not provided explicitly, apply the trigger width to popover width
    if (!popoverWidth && (_triggerRef$current = triggerRef.current) !== null && _triggerRef$current !== void 0 && _triggerRef$current.clientWidth) {
      var _triggerRef$current2;

      setPopoverStyle(_objectSpread2(_objectSpread2({}, popoverStyle), {}, {
        width: (_triggerRef$current2 = triggerRef.current) === null || _triggerRef$current2 === void 0 ? void 0 : _triggerRef$current2.clientWidth
      }));
    }
  }, []);
  React.useImperativeHandle(ref, function () {
    return {
      setOpen: function setOpen(open) {
        setOpenPopover === null || setOpenPopover === void 0 ? void 0 : setOpenPopover(open);
      },
      setFocusFirstItem: function setFocusFirstItem() {
        if (openPopover) {
          requestAnimationFrame(function () {
            return focusListItem$1('down', setFocusedOption, listRef);
          });
          setHighlightFirstItem(true);
        }
      },
      setFocusLastItem: function setFocusLastItem() {
        if (openPopover) {
          requestAnimationFrame(function () {
            return focusListItem$1('up', setFocusedOption, listRef);
          });
          setHighlightLastItem(true);
        }
      }
    };
  });
  React.useEffect(function () {
    if (!openPopover) {
      setHighlightFirstItem(false);
      setHighlightLastItem(false);
    }
  }, [openPopover]);
  React.useEffect(function () {
    if (highlightFirstItem && openPopover) {
      requestAnimationFrame(function () {
        return focusListItem$1('down', setFocusedOption, listRef);
      });
    }
  }, [highlightFirstItem]);
  React.useEffect(function () {
    if (highlightLastItem && openPopover) {
      requestAnimationFrame(function () {
        return focusListItem$1('up', setFocusedOption, listRef);
      });
    }
  }, [highlightLastItem]);
  React.useEffect(function () {
    if (value) {
      setSelectValue(value);
      setIsOptionSelected(Array.isArray(value) ? value.length > 0 : value.value.trim().length > 0);
    }
  }, [value]);

  var onToggleHandler = function onToggleHandler(open) {
    if (triggerOptions && triggerOptions.disabled) {
      setOpenPopover(false);
    } else {
      setHighlightFirstItem(open);
      setOpenPopover(open);
    }
  };

  var onOptionClick = function onOptionClick(option) {
    onSelect === null || onSelect === void 0 ? void 0 : onSelect(option);
    !multiSelect && setOpenPopover(false);
  };

  var onOutsideClickHandler = function onOutsideClickHandler() {
    onOutsideClick === null || onOutsideClick === void 0 ? void 0 : onOutsideClick();
  };

  var contextProp = {
    openPopover: openPopover,
    setOpenPopover: setOpenPopover,
    selectValue: selectValue,
    setSelectValue: setSelectValue,
    isOptionSelected: isOptionSelected,
    setIsOptionSelected: setIsOptionSelected,
    onOptionClick: onOptionClick,
    maxHeight: maxHeight,
    minHeight: minHeight,
    withSearch: withSearch,
    width: width,
    setWithSearch: setWithSearch,
    multiSelect: multiSelect,
    listRef: listRef,
    triggerRef: triggerRef,
    focusedOption: focusedOption,
    setFocusedOption: setFocusedOption,
    setHighlightFirstItem: setHighlightFirstItem,
    setHighlightLastItem: setHighlightLastItem
  };
  return /*#__PURE__*/React.createElement(SelectContext.Provider, {
    value: contextProp
  }, /*#__PURE__*/React.createElement("div", {
    "data-test": "DesignSystem-Select",
    "aria-haspopup": "listbox",
    "aria-expanded": openPopover,
    style: triggerStyle
  }, /*#__PURE__*/React.createElement(Popover, {
    open: openPopover,
    onToggle: onToggleHandler,
    className: "mt-3",
    triggerClass: "d-block",
    customStyle: popoverStyle,
    boundaryElement: boundaryElement,
    appendToBody: appendToBody,
    trigger: /*#__PURE__*/React.createElement(SelectTrigger, _extends$2({
      "aria-controls": "select-listbox"
    }, triggerOptions))
  }, /*#__PURE__*/React.createElement(OutsideClick, {
    onOutsideClick: onOutsideClickHandler
  }, /*#__PURE__*/React.createElement("div", {
    role: "listbox",
    id: "select-listbox",
    tabIndex: 0,
    ref: listRef
  }, children)))));
});
Select.displayName = 'Select';
Select.defaultProps = {
  maxHeight: 256,
  width: 176
};
Select.Option = SelectOption;
Select.List = SelectList;
Select.SearchInput = SearchInput;
Select.EmptyTemplate = SelectEmptyTemplate;
Select.Footer = SelectFooter;

var _excluded$4 = ["label", "children", "showDivider"];
var MenuGroup = function MenuGroup(props) {
  var label = props.label,
      children = props.children,
      showDivider = props.showDivider,
      rest = _objectWithoutProperties(props, _excluded$4);

  if (label) {
    return /*#__PURE__*/React__default.createElement("div", _extends$2({
      "data-test": "DesignSystem-Menu-Group",
      role: "group",
      className: "Menu-Group"
    }, rest), /*#__PURE__*/React__default.createElement(Text, {
      "data-test": "DesignSystem-Menu-Group-Label",
      size: "small",
      weight: "medium",
      appearance: "subtle",
      className: "Menu-Group-Label"
    }, label), children);
  }

  return /*#__PURE__*/React__default.createElement("div", _extends$2({
    "data-test": "DesignSystem-Menu-Group",
    role: "group"
  }, rest), children, showDivider && /*#__PURE__*/React__default.createElement(Divider, {
    className: "my-3"
  }));
};
MenuGroup.defaultProps = {
  showDivider: true
};

var MenuContext = /*#__PURE__*/React.createContext({});

var handleKeyDown$1 = function handleKeyDown(event, focusedOption, setFocusedOption, setOpenPopover, menuTriggerRef, listRef, subListRef, isSubMenuTrigger, triggerRef, menuID, triggerID, parentListRef) {
  switch (event.key) {
    case 'ArrowUp':
      event.preventDefault();
      navigateOptions('up', focusedOption, setFocusedOption, listRef);
      break;

    case 'ArrowDown':
      event.preventDefault();
      navigateOptions('down', focusedOption, setFocusedOption, listRef);
      break;

    case 'Enter':
      focusedOption === null || focusedOption === void 0 ? void 0 : focusedOption.click();
      setOpenPopover === null || setOpenPopover === void 0 ? void 0 : setOpenPopover(false);
      break;

    case 'Escape':
      setOpenPopover === null || setOpenPopover === void 0 ? void 0 : setOpenPopover(false);

      if (triggerRef && !isSubMenuTrigger) {
        var _triggerRef$current;

        triggerRef === null || triggerRef === void 0 ? void 0 : (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 ? void 0 : _triggerRef$current.focus();
      } else {
        var _menuTriggerRef$curre;

        menuTriggerRef === null || menuTriggerRef === void 0 ? void 0 : (_menuTriggerRef$curre = menuTriggerRef.current) === null || _menuTriggerRef$curre === void 0 ? void 0 : _menuTriggerRef$curre.focus();
      }

      setFocusedOption === null || setFocusedOption === void 0 ? void 0 : setFocusedOption(undefined);
      break;

    case 'Tab':
      setOpenPopover === null || setOpenPopover === void 0 ? void 0 : setOpenPopover(false);
      break;

    case 'ArrowRight':
      navigateSubMenu(isSubMenuTrigger, 'right', subListRef, menuID, triggerID, parentListRef);
      break;

    case 'ArrowLeft':
      navigateSubMenu(isSubMenuTrigger, 'left', subListRef, menuID, triggerID, parentListRef);
      break;
  }
};

var navigateOptions = function navigateOptions(direction, focusedOption, setFocusedOption, listRef) {
  var _listRef$current, _targetOption$scrollI;

  var listItems = (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.querySelectorAll('[data-test="DesignSystem-Listbox-ItemWrapper"]');
  var index = Array.from(listItems).findIndex(function (item) {
    return item == focusedOption;
  });

  if (index === -1) {
    index = direction === 'up' ? listItems.length - 1 : 0;
  } else {
    index = direction === 'up' ? (index - 1 + listItems.length) % listItems.length : (index + 1) % listItems.length;
  }

  var targetOption = listItems[index];
  targetOption.focus();
  setFocusedOption && setFocusedOption(targetOption);
  targetOption === null || targetOption === void 0 ? void 0 : (_targetOption$scrollI = targetOption.scrollIntoView) === null || _targetOption$scrollI === void 0 ? void 0 : _targetOption$scrollI.call(targetOption, {
    block: 'center'
  });
};

var navigateSubMenu = function navigateSubMenu(isSubMenuTrigger, direction, subListRef, menuID, triggerID, parentListRef) {
  var element = document.querySelector("[data-name=\"".concat(menuID, "\"]"));
  var menuPlacement = element === null || element === void 0 ? void 0 : element.getAttribute('data-placement');

  if (isSubMenuTrigger) {
    if (direction === 'right' && menuPlacement !== null && menuPlacement !== void 0 && menuPlacement.includes('right') || direction === 'left' && menuPlacement !== null && menuPlacement !== void 0 && menuPlacement.includes('left')) {
      var _subListRef$current;

      var listItems = subListRef === null || subListRef === void 0 ? void 0 : (_subListRef$current = subListRef.current) === null || _subListRef$current === void 0 ? void 0 : _subListRef$current.querySelectorAll('[data-test="DesignSystem-Listbox-ItemWrapper"]');
      (listItems === null || listItems === void 0 ? void 0 : listItems[0]).focus();
    }
  } else if (direction === 'left' && menuPlacement !== null && menuPlacement !== void 0 && menuPlacement.includes('right') || direction === 'right' && menuPlacement !== null && menuPlacement !== void 0 && menuPlacement.includes('left')) {
    var _parentListRef$curren, _parentListRef$curren2;

    var triggerElement = parentListRef === null || parentListRef === void 0 ? void 0 : (_parentListRef$curren = parentListRef.current) === null || _parentListRef$curren === void 0 ? void 0 : (_parentListRef$curren2 = _parentListRef$curren.querySelector("#".concat(triggerID))) === null || _parentListRef$curren2 === void 0 ? void 0 : _parentListRef$curren2.firstChild;
    triggerElement === null || triggerElement === void 0 ? void 0 : triggerElement.focus();
  }
};

var SubMenuContext = /*#__PURE__*/React.createContext({});

var _excluded$3 = ["children", "className", "onClick", "disabled", "onFocus"];
var MenuItem = function MenuItem(props) {
  var children = props.children,
      className = props.className,
      onClick = props.onClick,
      disabled = props.disabled,
      onFocus = props.onFocus,
      rest = _objectWithoutProperties(props, _excluded$3);

  var contextProp = React__default.useContext(MenuContext);
  var subMenuContextProp = React__default.useContext(SubMenuContext);
  var isSubMenuTrigger = false;
  var subListRef = null;
  var triggerRef = subMenuContextProp.triggerRef,
      menuID = subMenuContextProp.menuID,
      setParentOpen = subMenuContextProp.setParentOpen,
      triggerID = subMenuContextProp.triggerID,
      parentListRef = subMenuContextProp.parentListRef;
  var setOpenPopover = contextProp.setOpenPopover,
      focusedOption = contextProp.focusedOption,
      setFocusedOption = contextProp.setFocusedOption,
      menuTriggerRef = contextProp.menuTriggerRef,
      listRef = contextProp.listRef;
  var MenuItemClassName = classnames({
    'Menu-Item': true
  }, className);
  React__default.useEffect(function () {
    var _parentListRef$curren, _parentListRef$curren2;

    var handlePopoverOpen = function handlePopoverOpen() {
      setOpenPopover === null || setOpenPopover === void 0 ? void 0 : setOpenPopover(true);
    };

    var handlePopoverClose = function handlePopoverClose() {
      setOpenPopover === null || setOpenPopover === void 0 ? void 0 : setOpenPopover(false);
    };

    var triggerElement = parentListRef === null || parentListRef === void 0 ? void 0 : (_parentListRef$curren = parentListRef.current) === null || _parentListRef$curren === void 0 ? void 0 : (_parentListRef$curren2 = _parentListRef$curren.querySelector("#".concat(triggerID))) === null || _parentListRef$curren2 === void 0 ? void 0 : _parentListRef$curren2.firstChild;
    triggerElement === null || triggerElement === void 0 ? void 0 : triggerElement.addEventListener('focus', handlePopoverOpen);
    triggerElement === null || triggerElement === void 0 ? void 0 : triggerElement.addEventListener('blur', handlePopoverClose);
    return function () {
      triggerElement === null || triggerElement === void 0 ? void 0 : triggerElement.removeEventListener('focus', handlePopoverOpen);
      triggerElement === null || triggerElement === void 0 ? void 0 : triggerElement.removeEventListener('blur', handlePopoverClose);
    };
  }, [triggerID]);

  var onFocusHandler = function onFocusHandler(event) {
    setFocusedOption === null || setFocusedOption === void 0 ? void 0 : setFocusedOption(event.target);
    setOpenPopover === null || setOpenPopover === void 0 ? void 0 : setOpenPopover(true);
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(event);
  };

  var onKeyDownHandler = function onKeyDownHandler(event) {
    handleKeyDown$1(event, focusedOption, setFocusedOption, setOpenPopover, menuTriggerRef, listRef, subListRef, isSubMenuTrigger, triggerRef, menuID, triggerID, parentListRef);
  };

  var onClickHandler = function onClickHandler(event) {
    if (disabled) {
      return;
    }

    setOpenPopover === null || setOpenPopover === void 0 ? void 0 : setOpenPopover(false);
    onClick === null || onClick === void 0 ? void 0 : onClick(event);
    setParentOpen === null || setParentOpen === void 0 ? void 0 : setParentOpen(false);
  };

  return /*#__PURE__*/React__default.createElement(Listbox.Item, _extends$2({
    "data-test": "DesignSystem-Menu-ListItem",
    className: MenuItemClassName,
    tabIndex: -1,
    onKeyDown: onKeyDownHandler,
    onFocus: onFocusHandler,
    onClick: onClickHandler,
    disabled: disabled,
    role: "menuitem",
    "aria-disabled": disabled
  }, rest), children);
};
MenuItem.displayName = 'MenuItem';
MenuItem.defaultProps = {
  tagName: 'a'
};

var _excluded$2 = ["children"];
var MenuList = function MenuList(props) {
  var children = props.children,
      rest = _objectWithoutProperties(props, _excluded$2);

  return /*#__PURE__*/React__default.createElement(Listbox, _extends$2({
    "data-test": "DesignSystem-Menu-List"
  }, rest), children);
};
MenuList.defaultProps = {
  type: 'option',
  showDivider: false,
  tagName: 'nav',
  size: 'compressed'
};

var handleKeyDown = function handleKeyDown(event, setOpenPopover, setHighlightFirstItem, setHighlightLastItem) {
  switch (event.key) {
    case 'ArrowUp':
      event.preventDefault();
      setOpenPopover === null || setOpenPopover === void 0 ? void 0 : setOpenPopover(true);
      setHighlightLastItem === null || setHighlightLastItem === void 0 ? void 0 : setHighlightLastItem(true);
      break;

    case 'ArrowDown':
      event.preventDefault();
      setOpenPopover === null || setOpenPopover === void 0 ? void 0 : setOpenPopover(true);
      setHighlightFirstItem === null || setHighlightFirstItem === void 0 ? void 0 : setHighlightFirstItem(true);
      break;

    case 'Escape':
    case 'Tab':
      setOpenPopover === null || setOpenPopover === void 0 ? void 0 : setOpenPopover(false);
      break;
  }
};
var focusListItem = function focusListItem(position, setFocusedOption, listRef) {
  var _listRef$current, _targetOption;

  var listItems = (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.querySelectorAll('[data-test="DesignSystem-Listbox-ItemWrapper"]');
  var targetOption;

  if (position === 'down') {
    targetOption = listItems === null || listItems === void 0 ? void 0 : listItems[0];
  } else {
    targetOption = listItems === null || listItems === void 0 ? void 0 : listItems[listItems.length - 1];
  }

  (_targetOption = targetOption) === null || _targetOption === void 0 ? void 0 : _targetOption.focus();

  if (targetOption && typeof targetOption.scrollIntoView === 'function') {
    var _targetOption2;

    (_targetOption2 = targetOption) === null || _targetOption2 === void 0 ? void 0 : _targetOption2.scrollIntoView({
      block: 'end'
    });
  }

  setFocusedOption && setFocusedOption(targetOption);
};

var MenuTrigger = function MenuTrigger(props) {
  var className = props.className;
  var contextProp = React__default.useContext(MenuContext);
  var openPopover = contextProp.openPopover,
      setOpenPopover = contextProp.setOpenPopover,
      setHighlightFirstItem = contextProp.setHighlightFirstItem,
      setHighlightLastItem = contextProp.setHighlightLastItem,
      menuTriggerRef = contextProp.menuTriggerRef;
  var triggerClassName = classnames({
    'Menu-Trigger--active': openPopover
  }, className);

  var onKeyDownHandler = function onKeyDownHandler(event) {
    handleKeyDown(event, setOpenPopover, setHighlightFirstItem, setHighlightLastItem);
  };

  return /*#__PURE__*/React__default.createElement(Button, _extends$2({
    "data-test": "DesignSystem-Menu-Trigger",
    icon: "more_horiz",
    ref: menuTriggerRef,
    "aria-label": "Open menu",
    "aria-haspopup": true,
    "aria-expanded": openPopover
  }, props, {
    className: triggerClassName,
    onKeyDown: onKeyDownHandler
  }));
};

var SubMenu = function SubMenu(props) {
  var children = props.children;
  var menuID = "DesignSystem-Menu--Popover-".concat(uidGenerator());
  var triggerID = "DesignSystem-Menu--Trigger-".concat(uidGenerator());

  var _React$Children$toArr = React__default.Children.toArray(children),
      _React$Children$toArr2 = _slicedToArray(_React$Children$toArr, 2),
      submenuTrigger = _React$Children$toArr2[0],
      submenuContent = _React$Children$toArr2[1];

  var contextProp = React__default.useContext(MenuContext);
  var subListRef = React__default.useRef(null);
  var triggerRef = React__default.useRef(null);
  var isSubMenuTrigger = true;
  var subMenuElement = /*#__PURE__*/React__default.createElement(React__default.Fragment, null);
  var setOpenPopover = contextProp.setOpenPopover,
      focusedOption = contextProp.focusedOption,
      setFocusedOption = contextProp.setFocusedOption,
      menuTriggerRef = contextProp.menuTriggerRef,
      listRef = contextProp.listRef;

  var onKeyDownHandler = function onKeyDownHandler(event) {
    handleKeyDown$1(event, focusedOption, setFocusedOption, setOpenPopover, menuTriggerRef, listRef, subListRef, isSubMenuTrigger, triggerRef, menuID);
  };

  var subMenuContextProp = {
    triggerRef: triggerRef,
    menuID: menuID,
    setParentOpen: setOpenPopover,
    parentListRef: listRef,
    triggerID: triggerID
  };
  var triggerElement = /*#__PURE__*/React__default.cloneElement(submenuTrigger, _objectSpread2(_objectSpread2({}, submenuTrigger === null || submenuTrigger === void 0 ? void 0 : submenuTrigger.props), {}, {
    onKeyDown: onKeyDownHandler,
    ref: triggerRef,
    'aria-haspopup': 'menu',
    'aria-expanded': subListRef.current ? 'true' : 'false',
    'aria-controls': menuID,
    id: triggerID
  }));

  if ( /*#__PURE__*/React__default.isValidElement(submenuContent)) {
    var _submenuContent$props = submenuContent === null || submenuContent === void 0 ? void 0 : submenuContent.props,
        on = _submenuContent$props.on,
        _children = _submenuContent$props.children;

    subMenuElement = /*#__PURE__*/React__default.cloneElement(submenuContent, _objectSpread2(_objectSpread2({}, submenuContent.props), {}, {
      on: on || 'hover',
      offset: 'small',
      children: /*#__PURE__*/React__default.createElement("div", {
        ref: subListRef
      }, _children),
      trigger: triggerElement
    }));
  }

  return /*#__PURE__*/React__default.createElement(SubMenuContext.Provider, {
    value: subMenuContextProp
  }, subMenuElement);
};

var _excluded$1 = ["children", "width", "minHeight", "maxHeight", "className", "open"];
var Menu = function Menu(props) {
  var children = props.children,
      width = props.width,
      minHeight = props.minHeight,
      maxHeight = props.maxHeight,
      className = props.className,
      open = props.open,
      rest = _objectWithoutProperties(props, _excluded$1);

  var _React$useState = React__default.useState(open),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      openPopover = _React$useState2[0],
      setOpenPopover = _React$useState2[1];

  var _React$useState3 = React__default.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      highlightFirstItem = _React$useState4[0],
      setHighlightFirstItem = _React$useState4[1];

  var _React$useState5 = React__default.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      highlightLastItem = _React$useState6[0],
      setHighlightLastItem = _React$useState6[1];

  var _React$useState7 = React__default.useState(),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      focusedOption = _React$useState8[0],
      setFocusedOption = _React$useState8[1];

  var listRef = /*#__PURE__*/React__default.createRef();
  var menuTriggerRef = React__default.useRef(null);
  var subMenuContextProp = React__default.useContext(SubMenuContext);
  var menuID = subMenuContextProp.menuID;
  var popoverClassName = classnames(_defineProperty$1({}, 'Menu', true), className);
  React__default.useEffect(function () {
    setOpenPopover(open);
  }, [open]);
  React__default.useEffect(function () {
    if (highlightFirstItem && openPopover) {
      requestAnimationFrame(function () {
        return focusListItem('down', setFocusedOption, listRef);
      });
    }
  }, [highlightFirstItem]);
  React__default.useEffect(function () {
    if (highlightLastItem && openPopover) {
      requestAnimationFrame(function () {
        return focusListItem('up', setFocusedOption, listRef);
      });
    }
  }, [highlightLastItem]);
  React__default.useEffect(function () {
    if (!openPopover) {
      setHighlightFirstItem(false);
      setHighlightLastItem(false);
    }
  }, [openPopover]);

  var onToggleHandler = function onToggleHandler(open) {
    setOpenPopover(open);
  };

  var contextProp = {
    openPopover: openPopover,
    setOpenPopover: setOpenPopover,
    setHighlightFirstItem: setHighlightFirstItem,
    setHighlightLastItem: setHighlightLastItem,
    focusedOption: focusedOption,
    setFocusedOption: setFocusedOption,
    menuTriggerRef: menuTriggerRef,
    listRef: listRef
  };
  return /*#__PURE__*/React__default.createElement(MenuContext.Provider, {
    value: contextProp
  }, /*#__PURE__*/React__default.createElement(Popover, _extends$2({
    "data-test": "DesignSystem-Menu",
    name: menuID,
    offset: "medium"
  }, rest, {
    open: openPopover,
    customStyle: {
      width: width
    },
    onToggle: onToggleHandler
  }), /*#__PURE__*/React__default.createElement("div", {
    ref: listRef,
    role: "menu",
    "data-test": props['data-test'] || 'DesignSystem-Menu-Wrapper',
    className: popoverClassName,
    style: {
      maxHeight: maxHeight,
      minHeight: minHeight
    }
  }, children)));
};
Menu.Group = MenuGroup;
Menu.Item = MenuItem;
Menu.List = MenuList;
Menu.Trigger = MenuTrigger;
Menu.SubMenu = SubMenu;
Menu.defaultProps = {
  width: 176,
  maxHeight: 256,
  position: 'bottom-start'
};

var img$1 = "data:image/svg+xml,%3csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M10 0C10 5.52285 5.52285 10 0 10C5.52285 10 10 14.4772 10 20C10 14.4772 14.4772 10 20 10C14.4772 10 10 5.52285 10 0ZM20 14C20 17.3137 17.3137 20 14 20C17.3137 20 20 22.6863 20 26C20 22.6863 22.6863 20 26 20C22.6863 20 20 17.3137 20 14Z' fill='%232F2F2F'/%3e%3c/svg%3e";

var img = "data:image/svg+xml,%3csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M10 0C10 5.52285 5.52285 10 0 10C5.52285 10 10 14.4772 10 20C10 14.4772 14.4772 10 20 10C14.4772 10 10 5.52285 10 0ZM20 14C20 17.3137 17.3137 20 14 20C17.3137 20 20 22.6863 20 26C20 22.6863 22.6863 20 26 20C22.6863 20 20 17.3137 20 14Z' fill='white'/%3e%3c/svg%3e";

var _excluded = ["appearance", "className", "children"];
var AIButton = function AIButton(props) {
  var appearance = props.appearance,
      className = props.className,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded);

  var buttonClassNames = classnames({
    AIButton: true,
    'AIButton--primary': appearance === 'primary',
    'AIButton--basic': appearance === 'basic'
  }, className);
  var IconClassNames = classnames({
    'AIButton-Icon': true
  });
  var buttonIcon = appearance === 'primary' ? img : img$1;
  return /*#__PURE__*/React.createElement("button", _extends$2({
    className: buttonClassNames,
    "data-test": "DesignSystem-AI-Button"
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: buttonIcon,
    alt: "Button Icon",
    width: 16,
    height: 16,
    className: IconClassNames,
    "data-test": "DesignSystem-AI-Button-Icon"
  }), children);
};
AIButton.defaultProps = {
  appearance: 'basic',
  type: 'button'
};

var version = "2.34.0";

export { AIButton, ActionCard, Avatar, AvatarGroup, AvatarSelection, Backdrop, Badge, Breadcrumbs, Button, Calendar, Caption, Card, CardBody, CardFooter, CardHeader, CardSubdued, ChatMessage, Checkbox, Chip, ChipGroup, ChipInput, ChoiceList, Collapsible, Column, Combobox, DatePicker, DateRangePicker, Dialog, Divider, Dropdown, Dropzone, EditableChipInput, EditableDropdown, EditableInput, EmptyState, FileList, FileUploader, FileUploaderList, FullscreenModal, Grid, GridCell, Heading, HelpText, HorizontalNav, Icon, InlineMessage, Input, X as InputMask, Label, Legend, Link, LinkButton, List, Listbox, Menu, Message, MetaList, MetricInput, Modal, ModalBody, ModalDescription, ModalFooter, ModalHeader, MultiSlider, Navigation, OutsideClick, PageHeader, Pagination, Paragraph, Pills, Placeholder, PlaceholderImage, PlaceholderParagraph, Popover, ProgressBar, ProgressRing, Radio, RangeSlider, Row, Select, SelectionCard, Sidesheet, Slider, Spinner, StatusHint, Stepper, Subheading, Switch, Tab, Table, Tabs, TabsWrapper, Text, TextField, Textarea, TimePicker, Toast, Tooltip, index as Utils, VerificationCodeInput, VerticalNav, version };
