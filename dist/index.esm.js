
  /**
   * Generated on: 1602585780172 
   *      Package: @innovaccer/design-system
   *      Version: v1.3.0-3
   *      License: MIT
   *         Docs: https://innovaccer.github.io/design-system
   */

    
import React, { createRef, createElement, Component, cloneElement, useState as useState$3, useEffect as useEffect$2, forwardRef, useRef as useRef$1, useImperativeHandle, Fragment, Children } from 'react';
import { findDOMNode, createPortal } from 'react-dom';
import { Manager, Reference, Popper } from 'react-popper';
import classNames from 'classnames';
import { ResponsiveContainer, PieChart, Pie, Cell as Cell$1, Tooltip as Tooltip$1, Sector } from 'recharts';

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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
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
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
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
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
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
      it = o[Symbol.iterator]();
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

var Offsets;

(function (Offsets) {
  Offsets["Small"] = "2px";
  Offsets["Medium"] = "4px";
  Offsets["Large"] = "8px";
})(Offsets || (Offsets = {}));

var PopperWrapper = /*#__PURE__*/function (_React$Component) {
  _inherits(PopperWrapper, _React$Component);

  var _super = _createSuper(PopperWrapper);

  function PopperWrapper(props) {
    var _this;

    _classCallCheck(this, PopperWrapper);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "triggerRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "popupRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "_timer", void 0);

    _defineProperty(_assertThisInitialized(_this), "handleMouseLeave", function (event) {
      var _this$props = _this.props,
          _this$props$hoverable = _this$props.hoverable,
          hoverable = _this$props$hoverable === void 0 ? false : _this$props$hoverable,
          onToggle = _this$props.onToggle;

      if (hoverable) {
        clearTimeout(_this._timer);
        _this._timer = window.setTimeout(function () {
          _this.setState({
            open: false
          });

          if (_this.props.children.props.onMouseLeave) {
            _this.props.children.props.onMouseLeave(event);
          }
        }, _this.state.mouseLeaveDelay);
      } else {
        onToggle(false, 'mouseLeave');

        if (_this.props.children.props.onMouseLeave) {
          _this.props.children.props.onMouseLeave(event);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseEnter", function (event) {
      var _this$props2 = _this.props,
          _this$props2$hoverabl = _this$props2.hoverable,
          hoverable = _this$props2$hoverabl === void 0 ? false : _this$props2$hoverabl,
          onToggle = _this$props2.onToggle;

      if (hoverable) {
        clearTimeout(_this._timer);
        _this._timer = window.setTimeout(function () {
          _this.setState({
            open: true
          });

          if (_this.props.children.props.onMouseEnter) {
            _this.props.children.props.onMouseEnter(event);
          }
        }, _this.state.mouseEnterDelay);
      } else {
        onToggle(true, 'mouseEnter');

        if (_this.props.children.props.onMouseEnter) {
          _this.props.children.props.onMouseEnter(event);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "togglePopper", function (type) {
      var _this$props3 = _this.props,
          _this$props3$open = _this$props3.open,
          open = _this$props3$open === void 0 ? false : _this$props3$open,
          onToggle = _this$props3.onToggle;
      onToggle(!open, type);
    });

    _defineProperty(_assertThisInitialized(_this), "doesNodeContainClick", function (event) {
      if (!(_this.findDOMNode(_this.popupRef).contains(event.target) || _this.findDOMNode(_this.triggerRef).contains(event.target))) {
        _this.togglePopper('outsideClick');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getUpdatedStyle", function (oldStyle, placement) {
      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Medium';
      var _this$props$style = _this.props.style,
          style = _this$props$style === void 0 ? {} : _this$props$style;

      var newStyle = _objectSpread2(_objectSpread2({}, style), oldStyle);

      var position = placement ? placement.split('-')[0] : placement;

      switch (position) {
        case 'top':
          newStyle.marginBottom = Offsets[offset];
          break;

        case 'bottom':
          newStyle.marginTop = Offsets[offset];
          break;

        case 'left':
          newStyle.marginRight = Offsets[offset];
          break;

        case 'right':
          newStyle.marginLeft = Offsets[offset];
          break;
      }

      return newStyle;
    });

    _defineProperty(_assertThisInitialized(_this), "findDOMNode", function (ref) {
      return findDOMNode(ref.current);
    });

    _this.state = {
      open: props.open || false,
      mouseLeaveDelay: 50,
      mouseEnterDelay: 0
    };
    _this.triggerRef = /*#__PURE__*/createRef();
    _this.popupRef = /*#__PURE__*/createRef();
    return _this;
  }

  _createClass(PopperWrapper, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this._timer);
      document.removeEventListener('mousedown', this.doesNodeContainClick);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props4 = this.props,
          _this$props4$on = _this$props4.on,
          on = _this$props4$on === void 0 ? 'click' : _this$props4$on,
          _this$props4$closeOnB = _this$props4.closeOnBackdropClick,
          closeOnBackdropClick = _this$props4$closeOnB === void 0 ? true : _this$props4$closeOnB;
      var open = this.props.open;

      if (on === 'click' && open && closeOnBackdropClick) {
        document.addEventListener('mousedown', this.doesNodeContainClick);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props5 = this.props,
          _this$props5$on = _this$props5.on,
          on = _this$props5$on === void 0 ? 'click' : _this$props5$on,
          _this$props5$closeOnB = _this$props5.closeOnBackdropClick,
          closeOnBackdropClick = _this$props5$closeOnB === void 0 ? true : _this$props5$closeOnB;
      var open = this.props.open;

      if (prevProps.open !== this.props.open && this.props.open) {
        var triggerElement = this.findDOMNode(this.triggerRef);
        var zIndex = this.getZIndexForLayer(triggerElement);
        this.setState({
          zIndex: zIndex === undefined ? zIndex : zIndex + 1
        });
      }

      if (on === 'click' && open && closeOnBackdropClick) {
        document.addEventListener('mousedown', this.doesNodeContainClick);
      } else if (on === 'click' && !open && closeOnBackdropClick) {
        document.removeEventListener('mousedown', this.doesNodeContainClick);
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
    value: function getTriggerElement(trigger, ref, on) {
      var _this2 = this;

      var options = on === 'hover' ? {
        ref: ref,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      } : {
        ref: ref,
        onClick: function onClick() {
          return _this2.togglePopper('onClick');
        }
      };
      var triggerClass = this.props.triggerClass;
      var classes = classNames('PopperWrapper-trigger', triggerClass);
      var element = /*#__PURE__*/cloneElement( /*#__PURE__*/createElement("span", {
        className: classes
      }, trigger), options);
      return element;
    }
  }, {
    key: "getChildrenElement",
    value: function getChildrenElement(children, ref, placement, style) {
      var options = this.props.on === 'hover' ? {
        ref: ref,
        style: style,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        'data-placement': placement
      } : {
        ref: ref,
        style: style,
        'data-placement': placement
      };
      var element = /*#__PURE__*/cloneElement(children, options);
      return element;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props6 = this.props,
          trigger = _this$props6.trigger,
          children = _this$props6.children,
          placement = _this$props6.placement,
          appendToBody = _this$props6.appendToBody,
          _this$props6$on = _this$props6.on,
          on = _this$props6$on === void 0 ? 'click' : _this$props6$on,
          offset = _this$props6.offset;
      var open = this.props.open;
      return /*#__PURE__*/createElement(Manager, null, /*#__PURE__*/createElement(Reference, {
        innerRef: this.triggerRef
      }, function (_ref) {
        var ref = _ref.ref;
        return _this3.getTriggerElement(trigger, ref, on);
      }), (open || this.state.open) && appendToBody && /*#__PURE__*/createPortal(
      /*#__PURE__*/

      /* tslint:disable:no-shadowed-variable */
      createElement(Popper, {
        placement: placement,
        innerRef: this.popupRef,
        modifiers: {
          preventOverflow: {
            boundariesElement: document.body
          }
        }
      }, function (_ref2) {
        var ref = _ref2.ref,
            style = _ref2.style,
            placement = _ref2.placement;
        var newStyle = offset ? _this3.getUpdatedStyle(style, placement, offset) : style;
        return _this3.getChildrenElement(children, ref, placement, _objectSpread2(_objectSpread2({}, newStyle), {}, {
          zIndex: _this3.state.zIndex
        }));
      }), document.body), (open || this.state.open) && !appendToBody && /*#__PURE__*/createElement(Popper, {
        placement: placement,
        innerRef: this.popupRef
      }, function (_ref3) {
        var ref = _ref3.ref,
            style = _ref3.style,
            placement = _ref3.placement;
        var newStyle = offset ? _this3.getUpdatedStyle(style, placement, offset) : style;
        return _this3.getChildrenElement(children, ref, placement, _objectSpread2(_objectSpread2({}, newStyle), {}, {
          zIndex: _this3.state.zIndex
        }));
      }));
    }
  }]);

  return PopperWrapper;
}(Component);

var colorToHex = function colorToHex(color) {
  return getComputedStyle(document.documentElement).getPropertyValue("--".concat(color));
};

var css = /*#__PURE__*/Object.freeze({
  __proto__: null,
  colorToHex: colorToHex
});

var _placeholders;

var placeholders = (_placeholders = {}, _defineProperty(_placeholders, 'hh:mm', '-- : --'), _defineProperty(_placeholders, 'hh:mm AM', '-- : -- AM'), _placeholders);
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
    return translateToString(format, timeObj);
  }

  return time;
};

var getTimeObjectFromNumber = function getTimeObjectFromNumber(format, time) {
  var d = new Date(time);
  var hours = d.getHours();
  hours = isFormat12hour(format) ? get12hourFormat(hours).hrs : hours;
  var am_pm = isFormat12hour(format) ? get12hourFormat(hours).AMPM : '';
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
  var timeStr = translateToString(outputFormat, {
    minutes: minutes,
    hours: hrs,
    am_pm: AMPM
  });
  return timeStr;
};

var translateToString = function translateToString(format, time) {
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
var date = function date(val, format) {
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
var time = function time(val, format) {
  var _getTimeObjFromStr = getTimeObjFromStr(format, val),
      hours = _getTimeObjFromStr.hours,
      minutes = _getTimeObjFromStr.minutes;

  var hoursCond = isFormat12hour(format) ? hours <= 12 : hours < 24;
  return hoursCond && minutes <= 60;
};

var validators = /*#__PURE__*/Object.freeze({
  __proto__: null,
  isValid: isValid,
  date: date,
  time: time
});

var _time;

var date$1 = {
  'dd/mm/yyyy': [/[0123]/, /\d/, '/', /\[01]/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
  'mm/dd/yyyy': [/[01]/, /\d/, '/', /[0123]/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
  'yyyy/mm/dd': [/\d/, /\d/, /\d/, /\d/, '/', /[01]/, /\d/, '/', /[0123]/, /\d/],
  'dd-mm-yyyy': [/[0123]/, /\d/, '-', /[01]/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  'mm-dd-yyyy': [/[01]/, /\d/, '-', /[0123]/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  'yyyy-mm-dd': [/\d/, /\d/, /\d/, /\d/, '-', /[01]/, /\d/, '-', /[0123]/, /\d/]
};
var time$1 = (_time = {}, _defineProperty(_time, 'hh:mm', [/[0-1-2]/, /\d/, ' ', ':', ' ', /[0-6]/, /\d/]), _defineProperty(_time, 'hh:mm AM', [/[0-1]/, /\d/, ' ', ':', ' ', /[0-6]/, /\d/, ' ', /[AP]/, 'M']), _time);

var masks = /*#__PURE__*/Object.freeze({
  __proto__: null,
  date: date$1,
  time: time$1
});

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  css: css,
  validators: validators,
  masks: masks,
  PopperWrapper: PopperWrapper
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
  var classes = classNames((_classNames = {
    Avatar: true
  }, _defineProperty(_classNames, "Avatar--".concat(size), size), _defineProperty(_classNames, "Avatar--".concat(AvatarAppearance), AvatarAppearance), _defineProperty(_classNames, 'Avatar--disabled', !initials || !withTooltip), _classNames), className);
  var ContentClass = classNames((_classNames2 = {}, _defineProperty(_classNames2, "Avatar-content--".concat(size), size), _defineProperty(_classNames2, "Avatar-content--".concat(AvatarAppearance), AvatarAppearance), _classNames2));
  var IconClass = classNames(_defineProperty({}, "Avatar-content--".concat(AvatarAppearance), AvatarAppearance));

  var renderAvatar = function renderAvatar() {
    return /*#__PURE__*/createElement("span", _extends({
      "data-test": "DesignSystem-Avatar"
    }, baseProps, {
      className: classes
    }), initials && /*#__PURE__*/createElement(Text, {
      weight: "medium",
      appearance: 'white',
      className: ContentClass
    }, initials), !initials && /*#__PURE__*/createElement(Icon, {
      "data-test": "DesignSystem-AvatarIcon",
      name: "person",
      size: size === 'regular' ? 16 : 12,
      appearance: 'white',
      className: IconClass
    }));
  };

  var renderTooltip = function renderTooltip() {
    if (withTooltip && initials) {
      return /*#__PURE__*/createElement(Tooltip, {
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

var Popover = function Popover(props) {
  var position = props.position,
      closeOnBackdropClick = props.closeOnBackdropClick,
      appendToBody = props.appendToBody,
      on = props.on,
      customStyle = props.customStyle,
      dark = props.dark,
      hoverable = props.hoverable,
      children = props.children,
      trigger = props.trigger,
      triggerClass = props.triggerClass,
      onToggle = props.onToggle,
      className = props.className;

  var _React$useState = useState$3(props.open || false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  useEffect$2(function () {
    if (onToggle) {
      if (props.open !== undefined) setOpen(props.open);
    }
  }, [props.open]);

  var onToggleFunction = function onToggleFunction(newOpen) {
    setOpen(newOpen);
  };

  var classes = classNames(_defineProperty({
    Popover: true
  }, 'Popover--dark', dark), className);
  var PopoverWrapper = /*#__PURE__*/createElement("div", {
    "data-test": "DesignSystem-Popover",
    className: classes,
    "data-layer": true
  }, children);
  var popperOptions = {
    trigger: trigger,
    triggerClass: triggerClass,
    appendToBody: appendToBody,
    closeOnBackdropClick: closeOnBackdropClick,
    on: on,
    hoverable: hoverable,
    open: open,
    style: customStyle,
    onToggle: onToggle || onToggleFunction,
    placement: position
  };
  return /*#__PURE__*/createElement(PopperWrapper, _extends({}, popperOptions, {
    offset: "Large"
  }), PopoverWrapper);
};
Popover.displayName = 'Popover';
Popover.defaultProps = {
  position: 'bottom',
  closeOnBackdropClick: true,
  appendToBody: true,
  on: 'click',
  customStyle: {}
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
  var extraAvatars = list.length > max ? list.length - max : 0;
  var style = {
    borderRadius: '50%',
    backgroundColor: "".concat(borderColor),
    border: "var(--spacing-xs) solid ".concat(borderColor),
    boxShadow: "0 0 0 var(--spacing-xs) ".concat(borderColor)
  };
  var AvatarGroupClass = classNames(_defineProperty({}, 'AvatarGroup', true), className);
  var popperClass = classNames(_defineProperty({}, 'AvatarGroup-Popper', true), popperClassName);
  var trigger = /*#__PURE__*/createElement("div", {
    "data-test": "DesignSystem-AvatarGroup--TriggerAvatar",
    style: style
  }, /*#__PURE__*/createElement(Avatar, {
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

    return /*#__PURE__*/createElement("div", {
      className: "py-6 pr-4 pl-6"
    }, /*#__PURE__*/createElement("div", {
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
      return /*#__PURE__*/createElement(Text, {
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
      return /*#__PURE__*/createElement("div", {
        "data-test": "DesignSystem-AvatarGroup--Avatar",
        className: "AvatarGroup-item",
        style: style,
        key: index
      }, /*#__PURE__*/createElement(Avatar, {
        appearance: appearance,
        firstName: firstName,
        lastName: lastName,
        withTooltip: true,
        tooltipPosition: tooltipPosition
      }));
    });
    return avatars;
  };

  return /*#__PURE__*/createElement("div", _extends({
    "data-test": "DesignSystem-AvatarGroup"
  }, baseProps, {
    className: "".concat(AvatarGroupClass, " d-inline-flex")
  }), renderAvatars(), list.length - max > 0 && /*#__PURE__*/createElement(Popover, {
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

var useEffect = useEffect$2,
    useState = useState$3;

var Backdrop = function Backdrop(props) {
  var className = props.className;
  var baseProps = extractBaseProps(props);

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      savedBodyOverflow = _useState2[0],
      setBodyOverflow = _useState2[1];

  var _React$useState = useState$3(props.open),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _React$useState3 = useState$3(props.open),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      animate = _React$useState4[0],
      setAnimate = _React$useState4[1];

  var classes = classNames({
    Backdrop: true,
    'Backdrop--open': open,
    'Backdrop-animation--open': animate,
    'Backdrop-animation--close': !animate
  }, className);

  var disableBodyScroll = function disableBodyScroll() {
    if (savedBodyOverflow) {
      return;
    }

    setBodyOverflow(document.body.style.overflow);
    document.body.style.overflow = 'hidden';
  };

  var enableBodyScroll = function enableBodyScroll() {
    document.body.style.overflow = savedBodyOverflow || 'auto';
    setBodyOverflow(null);
  };

  useEffect(function () {
    if (props.open) {
      disableBodyScroll();
      setOpen(true);
      setAnimate(true);
    }

    if (!props.open) {
      setTimeout(function () {
        setOpen(false);
      }, 120);
      setAnimate(false);
    }

    return function () {
      enableBodyScroll();
    };
  }, [props.open]);
  var BackdropElement = /*#__PURE__*/createPortal( /*#__PURE__*/createElement("div", _extends({
    "data-test": "DesignSystem-Backdrop"
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
  var classes = classNames((_classNames = {
    Badge: true
  }, _defineProperty(_classNames, "Badge--".concat(appearance), appearance && !subtle), _defineProperty(_classNames, "Badge--subtle-".concat(appearance), subtle), _classNames), className);
  return /*#__PURE__*/createElement("span", _extends({
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

function debounce (delay, atBegin, callback) {
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
var getSelectAll = function getSelectAll(selected, optionsLength) {
  if (selected.length) {
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

var Icon = function Icon(props) {
  var _classNames;

  var appearance = props.appearance,
      className = props.className,
      name = props.name,
      size = props.size,
      onClick = props.onClick;
  var baseProps = extractBaseProps(props);

  var mapper = function mapper(val) {
    if (val === 'outline') return 'outlined';
    if (val === 'rounded') return 'round';
    return val;
  };

  var type = mapper(props.type);
  var iconClass = classNames((_classNames = {}, _defineProperty(_classNames, 'material-icons', true), _defineProperty(_classNames, "material-icons-".concat(mapper(type)), type && type !== 'filled'), _defineProperty(_classNames, 'Icon', true), _defineProperty(_classNames, "Icon--".concat(appearance), appearance), _defineProperty(_classNames, "".concat(className), className), _classNames));
  var styles = {
    fontSize: "".concat(size, "px"),
    width: "".concat(size, "px")
  }; // change `children` to {name} after migration

  return /*#__PURE__*/createElement("i", _extends({}, baseProps, {
    className: iconClass,
    style: styles,
    onClick: onClick
  }), type ? "".concat(name, "_").concat(type) : name);
};
Icon.displayName = 'Icon';
Icon.defaultProps = {
  appearance: 'default',
  size: 16
};

var DropdownButton = /*#__PURE__*/forwardRef(function (props, ref) {
  var _classNames;

  var _props$triggerSize = props.triggerSize,
      triggerSize = _props$triggerSize === void 0 ? 'regular' : _props$triggerSize,
      _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? 'Select' : _props$placeholder,
      _props$menu = props.menu,
      menu = _props$menu === void 0 ? false : _props$menu,
      children = props.children,
      icon = props.icon,
      disabled = props.disabled,
      inlineLabel = props.inlineLabel,
      error = props.error,
      rest = _objectWithoutProperties(props, ["triggerSize", "placeholder", "menu", "children", "icon", "disabled", "inlineLabel", "error"]);

  var buttonDisabled = disabled ? 'disabled' : 'default';
  var trimmedPlaceholder = placeholder.trim();
  var value = children ? children : trimmedPlaceholder ? trimmedPlaceholder : 'Select';
  var iconName = !menu ? 'keyboard_arrow_down' : icon ? icon : 'more_horiz';
  var label = inlineLabel && inlineLabel.trim();
  var buttonClass = classNames((_classNames = {}, _defineProperty(_classNames, 'Button', true), _defineProperty(_classNames, 'Button--basic', true), _defineProperty(_classNames, 'Button--square', menu), _defineProperty(_classNames, 'DropdownTrigger', true), _defineProperty(_classNames, 'DropdownButton', true), _defineProperty(_classNames, "DropdownButton--".concat(triggerSize), triggerSize), _defineProperty(_classNames, 'DropdownButton--icon', icon), _defineProperty(_classNames, 'DropdownButton--placeholder', !children && !menu), _defineProperty(_classNames, 'DropdownButton--label', label), _defineProperty(_classNames, 'DropdownButton--error', error), _classNames));
  var labelClass = classNames(_defineProperty({}, 'DropdownButton-label', true));
  return /*#__PURE__*/createElement("button", _extends({
    ref: ref,
    type: "button",
    value: children,
    className: buttonClass,
    disabled: disabled,
    tabIndex: 0,
    "data-test": "DesignSystem-DropdownTrigger"
  }, rest), !menu && /*#__PURE__*/createElement("div", {
    className: "DropdownButton-wrapper"
  }, label && /*#__PURE__*/createElement("div", {
    className: labelClass
  }, " ", label.trim().charAt(0).toUpperCase(), label.trim().slice(1), " "), icon && !inlineLabel && /*#__PURE__*/createElement(Icon, {
    appearance: buttonDisabled,
    className: "mr-4",
    name: icon
  }), /*#__PURE__*/createElement("div", {
    className: 'DropdownButton-text'
  }, value && "".concat(value))), /*#__PURE__*/createElement(Icon, {
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
      props = _objectWithoutProperties(_ref, ["children", "componentType", "className"]);

  return /*#__PURE__*/createElement(componentType, _objectSpread2(_objectSpread2({}, props), {}, {
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
      className = props.className;
  var baseProps = extractBaseProps(props);
  var classes = classNames((_classNames = {
    Text: true
  }, _defineProperty(_classNames, "Text--".concat(appearance), appearance), _defineProperty(_classNames, "Text--".concat(weight), weight), _defineProperty(_classNames, "Text--".concat(size), size), _defineProperty(_classNames, 'Text--small', size === 'small' || small), _classNames), className);
  return /*#__PURE__*/createElement(GenericText, _extends({
    "data-test": "DesignSystem-Text"
  }, baseProps, {
    className: classes,
    componentType: "span"
  }), children);
};
Text.displayName = 'Text';
Text.defaultProps = {
  appearance: 'default',
  size: 'regular'
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
var Checkbox = /*#__PURE__*/forwardRef(function (props, forwardedRef) {
  var _classNames, _classNames3, _classNames4, _classNames5;

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
  var ref = useRef$1(null);
  var baseProps = extractBaseProps(props);
  useImperativeHandle(forwardedRef, function () {
    return ref.current;
  });

  var _React$useState = useState$3(props.checked === undefined ? defaultChecked : props.checked),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      checked = _React$useState2[0],
      setChecked = _React$useState2[1];

  useEffect$2(function () {
    setIndeterminate(indeterminate);
  }, [indeterminate]);
  useEffect$2(function () {
    if (props.checked !== undefined) {
      setChecked(props.checked);
    }
  }, [props.checked]);
  var CheckboxClass = classNames((_classNames = {}, _defineProperty(_classNames, 'Checkbox', true), _defineProperty(_classNames, 'Checkbox--disabled', disabled), _defineProperty(_classNames, "Checkbox--".concat(size), size), _classNames), className);
  var CheckboxOuterWrapper = classNames(_defineProperty({}, 'Checkbox-outerWrapper', true));
  var CheckboxTextClass = classNames((_classNames3 = {}, _defineProperty(_classNames3, 'Checkbox-label', true), _defineProperty(_classNames3, "Checkbox-label--".concat(size), size), _classNames3));
  var CheckboxInputWrapper = classNames((_classNames4 = {}, _defineProperty(_classNames4, 'Checkbox-input', true), _defineProperty(_classNames4, 'Checkbox-input--checked', checked), _defineProperty(_classNames4, 'Checkbox-input--indeterminate', props.indeterminate), _classNames4));
  var CheckboxWrapper = classNames((_classNames5 = {}, _defineProperty(_classNames5, 'Checkbox-wrapper', true), _defineProperty(_classNames5, "Checkbox-wrapper--".concat(size), size), _classNames5));

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
  var IconSize = size === 'tiny' ? 8 : 16;
  return /*#__PURE__*/createElement("div", {
    className: CheckboxClass
  }, /*#__PURE__*/createElement("div", {
    className: CheckboxOuterWrapper
  }, /*#__PURE__*/createElement("input", _extends({}, baseProps, {
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
  })), /*#__PURE__*/createElement("span", {
    className: CheckboxWrapper
  }, IconName && /*#__PURE__*/createElement(Icon, {
    name: IconName,
    size: IconSize,
    appearance: 'white'
  }))), label && label.trim() && /*#__PURE__*/createElement("label", {
    htmlFor: id,
    className: CheckboxTextClass
  }, /*#__PURE__*/createElement(Text, {
    size: size === 'tiny' ? 'small' : 'regular'
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
  var label = optionData.label;
  return /*#__PURE__*/createElement("div", {
    className: className,
    onMouseEnter: onUpdateActiveOption,
    "data-test": dataTest
  }, /*#__PURE__*/createElement(Checkbox, {
    label: label,
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
      onUpdateActiveOption = props.onUpdateActiveOption,
      dataTest = props.dataTest;
  var label = optionData.label;
  return /*#__PURE__*/createElement("div", {
    className: className,
    onClick: onClickHandler,
    onMouseEnter: onUpdateActiveOption,
    "data-test": dataTest
  }, /*#__PURE__*/createElement("div", {
    className: 'Option-label'
  }, /*#__PURE__*/createElement("div", {
    className: textClassName
  }, label)));
};

var MetaOption = function MetaOption(props) {
  var className = props.className,
      textClassName = props.textClassName,
      onClickHandler = props.onClickHandler,
      optionData = props.optionData,
      onUpdateActiveOption = props.onUpdateActiveOption,
      dataTest = props.dataTest;
  var label = optionData.label,
      subInfo = optionData.subInfo;
  return /*#__PURE__*/createElement("div", {
    className: className,
    onClick: onClickHandler,
    onMouseEnter: onUpdateActiveOption,
    "data-test": dataTest
  }, /*#__PURE__*/createElement("div", {
    className: 'Option-label'
  }, /*#__PURE__*/createElement("div", {
    className: textClassName
  }, label), subInfo && /*#__PURE__*/createElement("div", {
    className: 'Option-subinfo'
  }, subInfo)));
};

var IconOption = function IconOption(props) {
  var _classNames;

  var className = props.className,
      textClassName = props.textClassName,
      selected = props.selected,
      onClickHandler = props.onClickHandler,
      optionData = props.optionData,
      onUpdateActiveOption = props.onUpdateActiveOption,
      menu = props.menu,
      dataTest = props.dataTest;
  var label = optionData.label,
      icon = optionData.icon;
  var OptionClass = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(className), true), _defineProperty(_classNames, 'Option--icon', icon), _classNames));
  return /*#__PURE__*/createElement("div", {
    className: OptionClass,
    onClick: onClickHandler,
    onMouseEnter: onUpdateActiveOption,
    "data-test": dataTest
  }, icon && /*#__PURE__*/createElement(Icon, {
    className: "Option-icon mr-4",
    name: icon,
    appearance: selected && !menu ? 'white' : 'default'
  }), /*#__PURE__*/createElement("div", {
    className: 'Option-label'
  }, /*#__PURE__*/createElement("div", {
    className: textClassName
  }, label)));
};

var IconWithMetaOption = function IconWithMetaOption(props) {
  var _classNames;

  var className = props.className,
      textClassName = props.textClassName,
      selected = props.selected,
      onClickHandler = props.onClickHandler,
      optionData = props.optionData,
      onUpdateActiveOption = props.onUpdateActiveOption,
      menu = props.menu,
      dataTest = props.dataTest;
  var label = optionData.label,
      icon = optionData.icon,
      subInfo = optionData.subInfo;
  var OptionClass = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(className), true), _defineProperty(_classNames, 'Option--icon', icon), _classNames));
  return /*#__PURE__*/createElement("div", {
    className: OptionClass,
    onClick: onClickHandler,
    onMouseEnter: onUpdateActiveOption,
    "data-test": dataTest
  }, icon && /*#__PURE__*/createElement(Icon, {
    className: "Option-icon mr-4",
    name: icon,
    appearance: selected && !menu ? 'white' : 'default'
  }), /*#__PURE__*/createElement("div", {
    className: 'Option-label'
  }, /*#__PURE__*/createElement("div", {
    className: textClassName
  }, label), subInfo && /*#__PURE__*/createElement("div", {
    className: 'Option-subinfo'
  }, subInfo)));
};

var _OptionTypeMapping;
var OptionTypeMapping = (_OptionTypeMapping = {}, _defineProperty(_OptionTypeMapping, 'DEFAULT', DefaultOption), _defineProperty(_OptionTypeMapping, 'WITH_ICON', IconOption), _defineProperty(_OptionTypeMapping, 'WITH_META', MetaOption), _defineProperty(_OptionTypeMapping, 'WITH_CHECKBOX', CheckboxOption), _defineProperty(_OptionTypeMapping, 'ICON_WITH_META', IconWithMetaOption), _OptionTypeMapping);

var Option = function Option(props) {
  var _classNames, _classNames2, _classNames3;

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

  var OptionClassName = classNames((_classNames = {}, _defineProperty(_classNames, 'Option', true), _defineProperty(_classNames, 'OptionWrapper', true), _defineProperty(_classNames, 'Option--active', active), _defineProperty(_classNames, 'Option--selected', selected && !menu), _classNames));
  var CheckboxClassName = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'OptionWrapper', true), _defineProperty(_classNames2, 'OptionWrapper--active', active), _classNames2));
  var textClassName = classNames((_classNames3 = {}, _defineProperty(_classNames3, 'Option-text', true), _defineProperty(_classNames3, 'Option-text--wrap', !props.truncateOption), _classNames3));

  var onUpdateActiveOption = function onUpdateActiveOption() {
    if (updateActiveOption) updateActiveOption(index);
  };

  var onClickHandler = function onClickHandler(e) {
    e.stopPropagation();
    if (onClick) onClick();
  };

  var onChangeHandler = function onChangeHandler(e) {
    e.stopPropagation();
    if (onChange) onChange(e);
  };

  if (props.optionRenderer) {
    return /*#__PURE__*/createElement("div", _extends({
      className: "OptionWrapper",
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

  var type = checkboxes ? 'WITH_CHECKBOX' : optionType;
  var component = OptionTypeMapping[type];
  return component({
    menu: menu,
    selected: selected,
    optionData: optionData,
    textClassName: textClassName,
    onClickHandler: onClickHandler,
    onChangeHandler: onChangeHandler,
    onUpdateActiveOption: onUpdateActiveOption,
    dataTest: "DesignSystem-DropdownOption--".concat(type),
    className: checkboxes ? CheckboxClassName : OptionClassName
  });
};

var Spinner = function Spinner(props) {
  var appearance = props.appearance,
      size = props.size,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var wrapperClasses = classNames(_defineProperty({
    Spinner: true
  }, "Spinner--".concat(size), size), className);
  var circleClasses = classNames(_defineProperty({
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
  return /*#__PURE__*/createElement("svg", _extends({}, baseProps, {
    className: wrapperClasses
  }, svgProps), /*#__PURE__*/createElement("circle", _extends({
    className: circleClasses
  }, circleProps)));
};
Spinner.displayName = 'Spinner';
Spinner.defaultProps = {
  appearance: 'primary',
  size: 'medium'
};

var sizeMapping = {
  tiny: 12,
  regular: 16,
  large: 20
};
var Button = /*#__PURE__*/forwardRef(function (props, ref) {
  var _classNames, _classNames2, _classNames3;

  var _props$size = props.size,
      size = _props$size === void 0 ? 'regular' : _props$size,
      _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'basic' : _props$appearance,
      _props$iconAlign = props.iconAlign,
      iconAlign = _props$iconAlign === void 0 ? 'left' : _props$iconAlign,
      _props$tabIndex = props.tabIndex,
      tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex,
      type = props.type,
      children = props.children,
      icon = props.icon,
      expanded = props.expanded,
      loading = props.loading,
      disabled = props.disabled,
      className = props.className,
      rest = _objectWithoutProperties(props, ["size", "appearance", "iconAlign", "tabIndex", "type", "children", "icon", "expanded", "loading", "disabled", "className"]);

  var buttonClass = classNames((_classNames = {}, _defineProperty(_classNames, 'Button', true), _defineProperty(_classNames, 'Button--expanded', expanded), _defineProperty(_classNames, "Button--".concat(size), size), _defineProperty(_classNames, 'Button--square', !children), _defineProperty(_classNames, "Button--".concat(appearance), appearance), _defineProperty(_classNames, "Button--iconAlign-".concat(iconAlign), children && iconAlign), _defineProperty(_classNames, "".concat(className), className), _classNames));
  var iconClass = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'Button-icon', true), _defineProperty(_classNames2, "Button-icon--".concat(iconAlign), children && iconAlign), _classNames2));
  var spinnerClass = classNames((_classNames3 = {}, _defineProperty(_classNames3, 'Button-spinner', true), _defineProperty(_classNames3, "Button-spinner--".concat(iconAlign), children && iconAlign), _classNames3));
  return /*#__PURE__*/createElement("button", _extends({
    ref: ref,
    type: type,
    className: buttonClass,
    disabled: disabled || loading,
    tabIndex: tabIndex
  }, rest), loading && /*#__PURE__*/createElement("span", {
    className: spinnerClass
  }, /*#__PURE__*/createElement(Spinner, {
    size: "small",
    appearance: appearance === 'basic' || appearance === 'transparent' ? 'secondary' : 'white'
  })), icon && !loading && /*#__PURE__*/createElement("div", {
    className: iconClass
  }, /*#__PURE__*/createElement(Icon, {
    name: icon,
    appearance: disabled ? 'disabled' : appearance === 'basic' || appearance === 'transparent' ? 'default' : 'white',
    size: sizeMapping[size]
  })), children);
});
Button.displayName = 'Button';

var sizeMapping$1 = {
  tiny: 12,
  regular: 16,
  large: 20
};
/**
 * ######Input has two types:
 *  - [Controlled Input](https://reactjs.org/docs/forms.html#controlled-components)
 *  - [Uncontrolled Input](https://reactjs.org/docs/uncontrolled-components.html)
 */

var Input = /*#__PURE__*/forwardRef(function (props, forwardedRef) {
  var _classNames, _classNames2, _classNames3, _classNames4;

  var _props$size = props.size,
      size = _props$size === void 0 ? 'regular' : _props$size,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      _props$minWidth = props.minWidth,
      minWidth = _props$minWidth === void 0 ? type !== 'number' ? 256 : undefined : _props$minWidth,
      readonly = props.readonly,
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
      autocomplete = props.autocomplete,
      autoFocus = props.autoFocus,
      rest = _objectWithoutProperties(props, ["size", "type", "minWidth", "readonly", "defaultValue", "name", "placeholder", "value", "icon", "inlineLabel", "required", "error", "info", "onChange", "onClick", "onClear", "onBlur", "onFocus", "actionIcon", "className", "autocomplete", "autoFocus"]);

  var ref = useRef$1(null);
  useImperativeHandle(forwardedRef, function () {
    return ref.current;
  });
  useEffect$2(function () {
    var _ref$current;

    if (autoFocus) (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.focus({
      preventScroll: true
    });
  }, []);
  var autoComplete = props.autoComplete || autocomplete;
  var disabled = props.disabled || readonly;
  var baseProps = extractBaseProps(props);
  var classes = classNames((_classNames = {}, _defineProperty(_classNames, 'Input', true), _defineProperty(_classNames, "Input--".concat(size), size), _defineProperty(_classNames, 'Input--disabled', disabled), _defineProperty(_classNames, 'Input--error', error), _classNames), className);
  var inputClass = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'Input-input', true), _defineProperty(_classNames2, "Input-input--".concat(size), size), _classNames2));
  var leftIconClass = classNames((_classNames3 = {}, _defineProperty(_classNames3, 'Input-icon', true), _defineProperty(_classNames3, 'Input-icon--left', true), _defineProperty(_classNames3, 'Input-icon--disabled', !value), _classNames3));
  var rightIconClass = classNames((_classNames4 = {}, _defineProperty(_classNames4, 'Input-icon', true), _defineProperty(_classNames4, 'Input-icon--right', true), _classNames4));
  var trigger = /*#__PURE__*/createElement("div", {
    className: rightIconClass
  }, /*#__PURE__*/createElement(Icon, {
    name: 'info',
    size: sizeMapping$1[size]
  }));
  return /*#__PURE__*/createElement("div", {
    "data-test": "DesignSystem-InputWrapper",
    className: classes,
    style: {
      minWidth: minWidth
    }
  }, inlineLabel && /*#__PURE__*/createElement("div", {
    className: "Input-inlineLabel"
  }, /*#__PURE__*/createElement(Text, {
    appearance: "subtle"
  }, inlineLabel)), size !== 'tiny' && icon && /*#__PURE__*/createElement("div", {
    className: leftIconClass
  }, /*#__PURE__*/createElement(Icon, {
    name: icon,
    size: sizeMapping$1[size]
  })), /*#__PURE__*/createElement("input", _extends({
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
    autoComplete: autoComplete,
    disabled: disabled,
    onChange: onChange,
    onBlur: onBlur,
    onClick: onClick,
    onFocus: onFocus
  })), !value && !disabled || value && disabled || defaultValue && disabled ? info && /*#__PURE__*/createElement(Tooltip, {
    position: "top",
    tooltip: info
  }, trigger) : actionIcon ? actionIcon : onClear && value && !disabled && /*#__PURE__*/createElement("div", {
    className: rightIconClass,
    onClick: function onClick(e) {
      return onClear(e);
    }
  }, /*#__PURE__*/createElement(Icon, {
    name: 'close',
    size: sizeMapping$1[size]
  })));
});
Input.displayName = 'Input';

var PlaceholderParagraph = function PlaceholderParagraph(props) {
  var _classNames2;

  var length = props.length,
      size = props.size,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var classes = classNames(_defineProperty({
    'Placeholder--animation': true,
    PlaceholderParagraph: true
  }, "PlaceholderParagraph--".concat(size), size));
  var wrapperClass = classNames((_classNames2 = {
    'PlaceholderParagraph-wrapper': true
  }, _defineProperty(_classNames2, "PlaceholderParagraph-wrapper--length-".concat(length), length), _defineProperty(_classNames2, "PlaceholderParagraph-wrapper--size-".concat(size), size), _classNames2), className);
  return /*#__PURE__*/createElement("div", _extends({}, baseProps, {
    className: wrapperClass
  }), /*#__PURE__*/createElement("span", {
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
  var classes = classNames((_classNames = {
    PlaceholderImage: true,
    'Placeholder--animation': true
  }, _defineProperty(_classNames, 'PlaceholderImage--round', round), _defineProperty(_classNames, "PlaceholderImage--".concat(size), size), _classNames), className);
  return /*#__PURE__*/createElement("span", _extends({}, baseProps, {
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
  var paragraphClasses = classNames(_defineProperty({
    'Placeholder-paragraph': true
  }, 'Placeholder-paragraph--withImage', withImage));
  var classes = classNames(_defineProperty({}, 'Placeholder', true), className);
  return /*#__PURE__*/createElement("div", _extends({
    "data-test": "DesignSystem-Placeholder"
  }, baseProps, {
    className: classes
  }), withImage && /*#__PURE__*/createElement(PlaceholderImage, {
    round: round,
    size: imageSize,
    "data-test": "DesignSystem-Placeholder--Image"
  }), children && /*#__PURE__*/createElement("div", {
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
      return /*#__PURE__*/React.createElement(PlaceholderParagraph, {
        length: 'large'
      });

    case 'WITH_ICON':
      return /*#__PURE__*/React.createElement(Placeholder, {
        withImage: true,
        round: true
      }, /*#__PURE__*/React.createElement(PlaceholderParagraph, {
        length: "large"
      }));

    case 'WITH_META':
      return /*#__PURE__*/React.createElement(Placeholder, {
        withImage: false
      }, /*#__PURE__*/React.createElement(PlaceholderParagraph, {
        length: "large"
      }), /*#__PURE__*/React.createElement(PlaceholderParagraph, {
        length: "medium",
        size: "xxs"
      }));

    case 'WITH_CHECKBOX':
      return /*#__PURE__*/React.createElement(Placeholder, {
        withImage: true
      }, /*#__PURE__*/React.createElement(PlaceholderParagraph, {
        length: "large"
      }));

    case 'ICON_WITH_META':
      return /*#__PURE__*/React.createElement(Placeholder, {
        withImage: true,
        round: true,
        imageSize: 'medium'
      }, /*#__PURE__*/React.createElement(PlaceholderParagraph, {
        length: "large"
      }), /*#__PURE__*/React.createElement(PlaceholderParagraph, {
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
      _props$truncateOption = props.truncateOption,
      truncateOption = _props$truncateOption === void 0 ? true : _props$truncateOption,
      _props$maxHeight = props.maxHeight,
      maxHeight = _props$maxHeight === void 0 ? 200 : _props$maxHeight,
      customTrigger = props.customTrigger,
      selected = props.selected,
      tempSelected = props.tempSelected,
      previousSelected = props.previousSelected,
      remainingOptions = props.remainingOptions,
      dropdownOpen = props.dropdownOpen,
      menu = props.menu,
      searchTerm = props.searchTerm,
      showApplyButton = props.showApplyButton,
      withCheckbox = props.withCheckbox,
      withSearch = props.withSearch,
      onSearchChange = props.onSearchChange,
      optionRenderer = props.optionRenderer,
      applyOptions = props.applyOptions,
      cancelOptions = props.cancelOptions,
      toggleDropdown = props.toggleDropdown,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var dropdownRef = /*#__PURE__*/createRef();
  var triggerRef = /*#__PURE__*/createRef();
  var dropdownTriggerRef = /*#__PURE__*/createRef();
  var dropdownCancelButtonRef = /*#__PURE__*/createRef();
  var dropdownApplyButtonRef = /*#__PURE__*/createRef();

  var _React$useState = useState$3(),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      popoverStyle = _React$useState2[0],
      setPopoverStyle = _React$useState2[1];

  var _React$useState3 = useState$3(0),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      cursor = _React$useState4[0],
      setCursor = _React$useState4[1];

  useEffect$2(function () {
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
  var _props$triggerSize = props.triggerSize,
      triggerSize = _props$triggerSize === void 0 ? 'regular' : _props$triggerSize,
      _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? 'Select' : _props$placeholder,
      icon = props.icon,
      error = props.error,
      disabled = props.disabled,
      inlineLabel = props.inlineLabel,
      triggerLabel = props.triggerLabel;
  var CustomTrigger = customTrigger ? customTrigger(triggerLabel ? triggerLabel : placeholder) : /*#__PURE__*/createElement(Fragment, null);
  var NewCustomTrigger = /*#__PURE__*/cloneElement(CustomTrigger, {
    tabindex: 0,
    ref: dropdownTriggerRef
  });
  var trigger = customTrigger ? NewCustomTrigger : /*#__PURE__*/createElement(DropdownButton, {
    placeholder: placeholder,
    triggerSize: triggerSize,
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
    var Dropdown = classNames(_defineProperty({}, 'Dropdown--border', isGroup && index !== 0));
    return Dropdown;
  };

  var getDropdownSectionClass = function getDropdownSectionClass(showClearButton) {
    var _classNames2;

    return classNames((_classNames2 = {}, _defineProperty(_classNames2, 'Dropdown-section', true), _defineProperty(_classNames2, 'Dropdown-section--withClear', showClearButton), _classNames2));
  };

  var dropdownClass = classNames(_defineProperty({}, 'Dropdown', true), className);
  var dropdownWrapperClass = classNames((_classNames4 = {}, _defineProperty(_classNames4, 'Dropdown-wrapper', true), _defineProperty(_classNames4, 'Dropdown-wrapper--wrap', !truncateOption), _classNames4));
  var SelectAllClass = classNames((_classNames5 = {}, _defineProperty(_classNames5, 'OptionWrapper', true), _defineProperty(_classNames5, 'OptionWrapper--active', cursor === 0), _classNames5));

  var onToggleDropdown = function onToggleDropdown(open, type) {
    var _dropdownTriggerRef$c;

    toggleDropdown(open, type);
    if (!disabled) (_dropdownTriggerRef$c = dropdownTriggerRef.current) === null || _dropdownTriggerRef$c === void 0 ? void 0 : _dropdownTriggerRef$c.focus();
    setCursor(0);
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
    setCursor(0);
    if (onSearchChange && searchTerm) onSearchChange('');
  };

  var searchHandler = function searchHandler(event) {
    setCursor(0);
    if (onSearchChange) onSearchChange(event.target.value);
  };

  var updateActiveOption = function updateActiveOption(index, parentCheckbox) {
    var updatedIndex = withCheckbox && !props.async && !parentCheckbox ? index + 1 : index;
    setCursor(updatedIndex);
  };

  var renderFooter = function renderFooter() {
    var _props$footerLabel = props.footerLabel,
        footerLabel = _props$footerLabel === void 0 ? 'Search for more options' : _props$footerLabel;
    return /*#__PURE__*/createElement("div", {
      className: 'Dropdown-footer'
    }, /*#__PURE__*/createElement(Text, {
      size: "small",
      appearance: 'subtle'
    }, footerLabel));
  };

  var renderGroups = function renderGroups(group, selectedGroup) {
    var onClearOptions = props.onClearOptions;
    return /*#__PURE__*/createElement("div", {
      className: getDropdownSectionClass(selectedGroup)
    }, /*#__PURE__*/createElement(Text, {
      size: "small",
      appearance: 'subtle'
    }, group), selectedGroup && /*#__PURE__*/createElement(Button, {
      onClick: onClearOptions,
      appearance: "transparent",
      size: "tiny"
    }, "Clear"));
  };

  var renderApplyButton = function renderApplyButton() {
    var disable = _isEqual(previousSelected, tempSelected);

    return /*#__PURE__*/createElement("div", {
      className: 'Dropdown-buttonWrapper'
    }, /*#__PURE__*/createElement(Button, {
      ref: dropdownCancelButtonRef,
      className: "mr-4",
      appearance: 'basic',
      onClick: onCancelOptions,
      size: 'tiny',
      tabIndex: -1
    }, "Cancel"), /*#__PURE__*/createElement(Button, {
      ref: dropdownApplyButtonRef,
      appearance: 'primary',
      disabled: disable,
      size: 'tiny',
      onClick: onApplyOptions
    }, "Apply"));
  };

  var renderSearch = function renderSearch() {
    var loadingOptions = props.loadingOptions,
        searchInit = props.searchInit;
    var disable = loadingOptions && !searchInit;
    return /*#__PURE__*/createElement("div", {
      className: 'Dropdown-inputWrapper'
    }, /*#__PURE__*/createElement(Input, {
      name: "Dropdown-search",
      icon: 'search',
      value: searchTerm,
      placeholder: 'Search..',
      disabled: disable,
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
      return /*#__PURE__*/createElement("div", {
        className: "Option-loading",
        key: "".concat(option, "-").concat(ind)
      }, /*#__PURE__*/createElement(Loading, {
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
    return /*#__PURE__*/createElement("div", {
      className: SelectAllClass,
      onMouseEnter: function onMouseEnter(_e) {
        return updateActiveOption(0, true);
      }
    }, /*#__PURE__*/createElement(Checkbox, {
      label: label,
      onChange: onSelectAll,
      checked: selectAll.checked,
      indeterminate: selectAll.indeterminate,
      tabIndex: -1,
      className: "OptionCheckbox"
    }));
  };

  var renderOptions = function renderOptions(item, index) {
    var selectAllPresent = withCheckbox && remainingOptions === 0 && searchTerm === '';
    var active = selectAllPresent ? index + 1 === cursor : index === cursor;
    var optionIsSelected = tempSelected.findIndex(function (option) {
      return option.value === item.value;
    }) !== -1;
    return /*#__PURE__*/createElement(Option, {
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

    if (loadersCount && loadingOptions) {
      return /*#__PURE__*/createElement("div", {
        className: 'Dropdown-loading'
      }, /*#__PURE__*/createElement("div", {
        className: "Dropdown-wrapper",
        style: dropdownStyle
      }, renderLoading(loadersCount)));
    }

    if (listOptions.length === 0 && !loadingOptions) {
      var _props$noResultMessag = props.noResultMessage,
          noResultMessage = _props$noResultMessag === void 0 ? 'No result found' : _props$noResultMessag;
      return /*#__PURE__*/createElement("div", {
        className: 'Dropdown-errorWrapper'
      }, /*#__PURE__*/createElement("div", {
        className: 'Option'
      }, /*#__PURE__*/createElement("div", {
        className: 'Option-subinfo'
      }, noResultMessage)));
    }

    return /*#__PURE__*/createElement("div", {
      className: dropdownWrapperClass,
      style: dropdownStyle,
      ref: dropdownRef
    }, withCheckbox && remainingOptions === 0 && searchTerm === '' && renderSelectAll(), selected.length > 0 && renderGroups(selectedSectionLabel, true), selected.map(function (option, index) {
      return renderOptions(option, index);
    }), listOptions.map(function (option, index) {
      var prevGroup = index > 0 ? listOptions[index - 1].group : selected.length ? selectedSectionLabel : undefined;
      var currentGroup = option.group;
      var isGroup = prevGroup !== currentGroup;
      var updatedIndex = index + selected.length;
      return /*#__PURE__*/createElement("div", {
        className: getDropdownClass(updatedIndex, isGroup),
        key: index
      }, isGroup && currentGroup && renderGroups(currentGroup), renderOptions(option, updatedIndex));
    }), props.async && remainingOptions > 0 && renderFooter());
  };

  var focusOption = function focusOption(direction, classes) {
    var updatedCursor = direction === 'down' ? cursor + 1 : cursor - 1;
    var elements = document.querySelectorAll(classes);
    var element = elements[updatedCursor];
    if (element) scrollIntoView(dropdownRef.current, element);
    if (element !== undefined) setCursor(updatedCursor);
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

  return /*#__PURE__*/createElement("div", _extends({}, baseProps, {
    className: dropdownClass,
    ref: triggerRef,
    onKeyDown: onkeydown
  }), /*#__PURE__*/createElement(Popover, {
    onToggle: onToggleDropdown,
    trigger: trigger,
    triggerClass: !menu ? 'w-100' : '',
    open: dropdownOpen,
    customStyle: popoverStyle,
    position: alignmentMapping[align],
    appendToBody: true
  }, (withSearch || props.async) && renderSearch(), renderDropdownSection(), showApplyButton && withCheckbox && renderApplyButton()));
};

DropdownList.displayName = 'DropdownList';

var inputRef = /*#__PURE__*/createRef();
var bulk = 50;
var defaultProps = {
  triggerOptions: {},
  options: [],
  closeOnSelect: true
};
/**
 * ###Note:
 * 1. Dropdown props types:
 *  - async: fetchOptions
 *  - sync: options, loading
 * 2. Sync Dropdown:
 *  - Manually toggle loading state to update options (Options <= 50).
 * 3. Callback Functions
 *  - Controlled Dropdown:
 *    * onUpdate: Called when user `clicks on option` / `clicks on Clear, Cancel or Apply button`.
 *    * onChange: Called when selected options are updated.
 *  - Uncontrolled Dropdown:
 *    * onChange: Called when user `clicks on option` / `clicks on Clear, or Apply button`.
 */

var Dropdown = /*#__PURE__*/function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  var _super = _createSuper(Dropdown);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "fetchOptionsFunction", function (searchTerm) {
      var options = _this.props.options;
      var filteredOptions = searchTerm ? getSearchedOptions(options, searchTerm) : options;
      return new Promise(function (resolve) {
        resolve({
          options: filteredOptions,
          count: filteredOptions.length
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getUnSelectedOptions", function (options, init) {
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

    _defineProperty(_assertThisInitialized(_this), "getSelectedOptions", function (options, init) {
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

    _defineProperty(_assertThisInitialized(_this), "updateOptions", function (init, async) {
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
        var _inputRef$current;

        var options = res.options,
            count = res.count;
        updatedAsync = searchTerm === '' ? count > bulk : updatedAsync;
        var unSelectedGroup = _showSelectedItems(updatedAsync, searchTerm, withCheckbox) ? _this.getUnSelectedOptions(options, init) : options;
        var selectedGroup = searchTerm === '' ? _this.getSelectedOptions(options, init) : [];
        var optionsLength = searchTerm === '' ? count : _this.state.optionsLength;

        _this.setState(_objectSpread2(_objectSpread2({}, _this.state), {}, {
          optionsLength: optionsLength,
          loading: false,
          async: updatedAsync,
          searchedOptionsLength: count,
          options: unSelectedGroup.slice(0, bulk),
          tempSelected: init ? selectedGroup : tempSelected,
          previousSelected: init ? selectedGroup : previousSelected,
          selected: _showSelectedItems(updatedAsync, searchTerm, withCheckbox) ? selectedGroup : [],
          triggerLabel: _this.updateTriggerLabel(init ? selectedGroup : tempSelected),
          selectAll: !updatedAsync && init ? getSelectAll(selectedGroup, optionsLength) : selectAll
        }));

        if (updatedAsync || withSearch) (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateSearchTerm", function (search) {
      _this.setState(_objectSpread2(_objectSpread2({}, _this.state), {}, {
        loading: true,
        searchInit: true,
        searchTerm: search
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "updateOnPopperToggle", function () {
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
          searchTerm = _this$state2.searchTerm;
      var popperIsOpen = _isOpenControlled(_this.props.open) ? _this.props.open : _this.state.open;

      if (withCheckbox && showApplyButton) {
        var temporarySelected = _isControlled(_this.props.selected) ? selected : previousSelected;

        _this.setState({
          tempSelected: temporarySelected,
          selectAll: getSelectAll(temporarySelected, optionsLength),
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

    _defineProperty(_assertThisInitialized(_this), "updateTriggerLabel", function () {
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
        label = customLabel ? customLabel(selectedLength, optionsLength) : "".concat(selectedLength, " selected");
      }

      if (getLabel) getLabel(label);
      return label;
    });

    _defineProperty(_assertThisInitialized(_this), "updateSelectedOptions", function (selectedArray, isSingleSelect, isControlled) {
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
      var isClearClicked = selectedArray.length === 0 && selected.length > 0;
      var updatePreviousSelected = withCheckbox && showApplyButton && isControlled;

      _this.setState(_objectSpread2(_objectSpread2({}, _this.state), {}, {
        tempSelected: selectedArray,
        triggerLabel: _this.updateTriggerLabel(selectedArray),
        selectAll: getSelectAll(selectedArray, optionsLength),
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

    _defineProperty(_assertThisInitialized(_this), "onOptionSelect", function (option) {
      var _this$props5 = _this.props,
          onUpdate = _this$props5.onUpdate,
          selected = _this$props5.selected;

      if (_isControlled(selected)) {
        if (onUpdate) onUpdate('select-option', option);
        return;
      }

      _this.updateSelectedOptions([option], true);
    });

    _defineProperty(_assertThisInitialized(_this), "onSelect", function (option, checked) {
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

    _defineProperty(_assertThisInitialized(_this), "onSelectAll", function (event) {
      var _this$props7 = _this.props,
          onUpdate = _this$props7.onUpdate,
          selected = _this$props7.selected,
          showApplyButton = _this$props7.showApplyButton;

      if (_isControlled(selected) && !showApplyButton) {
        if (onUpdate) onUpdate(event.target.checked ? 'select-all' : 'deselect-all');
        return;
      }

      var selectedArray = event.target.checked ? _this.state.options : [];

      _this.updateSelectedOptions(selectedArray, false);
    });

    _defineProperty(_assertThisInitialized(_this), "debounceSearch", debounce(300, function () {
      _this.setState({
        searchInit: false
      }, function () {
        _this.updateOptions(false);
      });
    }));

    _defineProperty(_assertThisInitialized(_this), "debounceClear", debounce(250, function () {
      return _this.updateOptions(false);
    }));

    _defineProperty(_assertThisInitialized(_this), "onClearOptions", function () {
      var _this$props8 = _this.props,
          selected = _this$props8.selected,
          name = _this$props8.name,
          onUpdate = _this$props8.onUpdate,
          showApplyButton = _this$props8.showApplyButton,
          onChange = _this$props8.onChange;

      if (_isControlled(selected) && !showApplyButton) {
        if (onUpdate) onUpdate('clear-all');
        return;
      }

      _this.setState({
        selected: [],
        tempSelected: [],
        triggerLabel: '',
        loading: true
      });

      _this.debounceClear();

      if (onChange && !showApplyButton) onChange([], name);
    });

    _defineProperty(_assertThisInitialized(_this), "onTogglePopper", function (type) {
      var onPopperToggle = _this.props.onPopperToggle;

      if (onPopperToggle && _isOpenControlled(_this.props.open)) {
        onPopperToggle(false, type);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onCancelOptions", function () {
      var _this$state4 = _this.state,
          previousSelected = _this$state4.previousSelected,
          tempSelected = _this$state4.tempSelected,
          optionsLength = _this$state4.optionsLength;
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

      _this.setState(_objectSpread2(_objectSpread2({}, _this.state), {}, {
        tempSelected: previousSelected,
        selectAll: getSelectAll(previousSelected, optionsLength),
        triggerLabel: label,
        open: popperIsOpen
      }));

      if (onClose && !popperIsOpen) {
        onClose(values, name);
      }

      _this.onTogglePopper('cancelClick');
    });

    _defineProperty(_assertThisInitialized(_this), "onApplyOptions", function () {
      var _this$state5 = _this.state,
          tempSelected = _this$state5.tempSelected,
          previousSelected = _this$state5.previousSelected;
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

    _defineProperty(_assertThisInitialized(_this), "onToggleDropdown", function (updatedOpen, type) {
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

    var _optionsLength = _totalOptions ? _totalOptions : _options.length;

    var _async = 'fetchOptions' in _this.props || _optionsLength > bulk;

    var _selectedGroup = !_async ? _this.getSelectedOptions(_options, true) : [];

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
      selectAll: getSelectAll(_selectedGroup, _optionsLength)
    };
    if (_async) _this.updateOptions(true);
    return _this;
  }

  _createClass(Dropdown, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (!this.state.async) {
        var _this$props11 = this.props,
            loading = _this$props11.loading,
            fetchOptions = _this$props11.fetchOptions,
            _this$props11$options = _this$props11.options,
            _options2 = _this$props11$options === void 0 ? [] : _this$props11$options,
            withSearch = _this$props11.withSearch;

        if (prevProps.loading !== loading && !fetchOptions) {
          if (_options2.length > bulk) {
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
              selectAll: getSelectAll(selectedGroup, this.state.optionsLength)
            }));
            if (withSearch) (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.focus();
          }
        }
      }

      if (this.props.selected !== undefined && prevProps.selected !== this.props.selected && prevProps.loading === this.props.loading) {
        var isSingleSelect = !this.props.withCheckbox;
        this.updateSelectedOptions(this.props.selected, isSingleSelect, true);
      }

      if (prevProps.open !== this.props.open || prevState.open !== this.state.open) {
        if (_isOpenControlled(this.props.open) && this.props.open === this.state.open) return;
        this.updateOnPopperToggle();
      }

      if (prevState.searchTerm !== this.state.searchTerm) {
        this.debounceSearch();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state6 = this.state,
          options = _this$state6.options,
          async = _this$state6.async,
          open = _this$state6.open,
          searchTerm = _this$state6.searchTerm,
          searchInit = _this$state6.searchInit,
          loading = _this$state6.loading,
          searchedOptionsLength = _this$state6.searchedOptionsLength,
          tempSelected = _this$state6.tempSelected,
          selectAll = _this$state6.selectAll,
          triggerLabel = _this$state6.triggerLabel,
          previousSelected = _this$state6.previousSelected;

      var _this$props12 = this.props,
          _this$props12$trigger = _this$props12.triggerOptions,
          triggerOptions = _this$props12$trigger === void 0 ? {} : _this$props12$trigger,
          selected = _this$props12.selected,
          rest = _objectWithoutProperties(_this$props12, ["triggerOptions", "selected"]);

      var remainingOptionsLen = searchedOptionsLength - options.length;
      return /*#__PURE__*/createElement(DropdownList, _extends({
        listOptions: options,
        inputRef: inputRef,
        remainingOptions: remainingOptionsLen,
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
}(Component);

_defineProperty(Dropdown, "defaultProps", defaultProps);

var SubtleLink = function SubtleLink(props) {
  var onClick = props.onClick,
      children = props.children,
      href = props.href;

  var onClickHandler = function onClickHandler(e) {
    e.preventDefault();
    onClick();
  };

  return /*#__PURE__*/createElement("a", {
    className: "SubtleLink",
    href: href,
    onClick: onClickHandler
  }, children);
};

var renderLink = function renderLink(item, _onClick) {
  return /*#__PURE__*/createElement(SubtleLink, {
    href: item.link,
    onClick: function onClick() {
      return _onClick(item.link);
    }
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
    return /*#__PURE__*/createElement(Button, {
      size: "tiny",
      appearance: "transparent",
      icon: "more_horiz_filled"
    });
  };

  return /*#__PURE__*/createElement(Dropdown, {
    triggerSize: 'tiny',
    triggerOptions: {
      customTrigger: customTrigger
    },
    options: options,
    menu: true,
    onChange: function onChange(selected) {
      onClick(selected);
    }
  });
};

var Breadcrumbs = function Breadcrumbs(props) {
  var list = props.list,
      onClick = props.onClick,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var BreadcrumbClass = classNames(_defineProperty({}, 'Breadcrumbs', true), className);
  return /*#__PURE__*/createElement("div", _extends({}, baseProps, {
    className: BreadcrumbClass
  }), list.length <= 4 ? list.map(function (item, index) {
    return /*#__PURE__*/createElement("div", {
      key: index,
      className: "Breadcrumbs-item"
    }, /*#__PURE__*/createElement("span", {
      className: "Breadcrumbs-link"
    }, renderLink(item, onClick)), /*#__PURE__*/createElement("span", {
      className: "Breadcrumbs-itemSeparator"
    }, "/"));
  }) : /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement("div", {
    className: "Breadcrumbs-item"
  }, /*#__PURE__*/createElement("span", {
    className: "Breadcrumbs-link"
  }, renderLink(list[0], onClick)), /*#__PURE__*/createElement("span", {
    className: "Breadcrumbs-itemSeparator"
  }, "/")), /*#__PURE__*/createElement("div", {
    className: "Breadcrumbs-dropdown"
  }, renderDropdown(list.slice(1, list.length - 1), onClick), /*#__PURE__*/createElement("span", {
    className: "Breadcrumbs-itemSeparator"
  }, "/")), /*#__PURE__*/createElement("div", {
    className: "Breadcrumbs-item"
  }, /*#__PURE__*/createElement("span", {
    className: "Breadcrumbs-link"
  }, renderLink(list[list.length - 1], onClick)), /*#__PURE__*/createElement("span", {
    className: "Breadcrumbs-itemSeparator"
  }, "/"))));
};

var Card = function Card(props) {
  var _classNames;

  var shadow = props.shadow,
      children = props.children,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var classes = classNames((_classNames = {
    Card: true
  }, _defineProperty(_classNames, "Card--shadow-".concat(shadow), shadow), _defineProperty(_classNames, "".concat(className), className), _classNames));
  return /*#__PURE__*/createElement("div", _extends({}, baseProps, {
    className: classes
  }), children);
};
Card.displayName = 'Card';
Card.defaultProps = {
  shadow: 'medium'
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

    return classNames((_classNames = {}, _defineProperty(_classNames, 'Chip-icon', true), _defineProperty(_classNames, "Chip-icon--".concat(align), align), _classNames));
  };

  var onCloseHandler = function onCloseHandler(e) {
    e.stopPropagation();
    if (onClose) onClose();
  };

  var onClickHandler = function onClickHandler() {
    if (onClick) onClick();
  };

  return /*#__PURE__*/createElement("div", _extends({}, baseProps, {
    className: "Chip-wrapper ".concat(className),
    onClick: onClickHandler
  }), icon && /*#__PURE__*/createElement(Icon, {
    name: icon,
    appearance: disabled ? 'disabled' : selected ? 'info' : 'default',
    className: iconClass('left')
  }), /*#__PURE__*/createElement(Text, {
    appearance: disabled ? 'disabled' : 'default'
  }, label), clearButton && /*#__PURE__*/createElement(Icon, {
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

  var chipClass = classNames((_classNames = {
    Chip: true
  }, _defineProperty(_classNames, "Chip-".concat(type, "--disabled"), disabled), _defineProperty(_classNames, "Chip--".concat(type), type && !disabled), _defineProperty(_classNames, "Chip-".concat(type, "--selected"), selected && !disabled), _classNames), className);
  var clearbutton = type === 'action' ? false : clearButton;
  var select = type === 'selection' && selected ? true : false;
  return /*#__PURE__*/createElement(GenericChip, _extends({}, baseProps, {
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

  var ChipGroupClass = classNames(_defineProperty({}, 'ChipGroup', true), className);
  return /*#__PURE__*/createElement("div", _extends({}, baseProps, {
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
    return /*#__PURE__*/createElement("span", {
      key: ind,
      className: "ChipGroup-item"
    }, /*#__PURE__*/createElement(Chip, {
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

var Column = function Column(props) {
  var _classNames;

  var size = props.size,
      sizeXS = props.sizeXS,
      sizeS = props.sizeS,
      sizeM = props.sizeM,
      sizeL = props.sizeL,
      sizeXL = props.sizeXL,
      className = props.className,
      children = props.children;
  var baseProps = extractBaseProps(props);
  var classes = classNames((_classNames = {}, _defineProperty(_classNames, 'Col', true), _defineProperty(_classNames, "Col--".concat(size), size), _defineProperty(_classNames, "Col--xs-".concat(sizeXS), sizeXS), _defineProperty(_classNames, "Col--s-".concat(sizeS), sizeS), _defineProperty(_classNames, "Col--m-".concat(sizeM), sizeM), _defineProperty(_classNames, "Col--l-".concat(sizeL), sizeL), _defineProperty(_classNames, "Col--xl-".concat(sizeXL), sizeXL), _defineProperty(_classNames, "".concat(className), className), _classNames));
  return /*#__PURE__*/createElement("div", _extends({}, baseProps, {
    className: classes
  }), children);
};
Column.displayName = 'Column';

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
      className = props.className;
  var baseProps = extractBaseProps(props);
  var classes = classNames((_classNames = {
    Heading: true
  }, _defineProperty(_classNames, "Heading--".concat(size), size), _defineProperty(_classNames, "Heading--".concat(appearance), appearance), _classNames), className);
  return /*#__PURE__*/createElement(GenericText, _extends({
    "data-test": "DesignSystem-Heading"
  }, baseProps, {
    className: classes,
    componentType: sizeMap[size]
  }), children);
};
Heading.displayName = 'Heading';
Heading.defaultProps = {
  appearance: 'default',
  size: 'm'
};

var Subheading = function Subheading(props) {
  var appearance = props.appearance,
      children = props.children,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var classes = classNames(_defineProperty({
    Subheading: true
  }, "Subheading--".concat(appearance), appearance), className);
  return /*#__PURE__*/createElement(GenericText, _extends({
    "data-test": "DesignSystem-Subheading"
  }, baseProps, {
    className: classes,
    componentType: 'h4'
  }), children);
};
Subheading.displayName = 'Subheading';
Subheading.defaultProps = {
  appearance: 'default'
};

var config = {
  yearBlockRange: 12,
  yearsInRow: 3,
  monthBlock: 12,
  monthsInRow: 3,
  daysInRow: 7,
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
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
      dateVal = new Date();
      dateVal.setDate(date);
      dateVal.setMonth(month);
      dateVal.setFullYear(year);
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
var translateToString$1 = function translateToString(format, d) {
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
  _inherits(Calendar, _React$Component);

  var _super = _createSuper(Calendar);

  function Calendar(props) {
    var _this;

    _classCallCheck(this, Calendar);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "updateState", function (year, month, date) {
      _this.setState({
        year: year,
        month: month,
        date: date
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getDateValue", function (year, month, date) {
      var _this$props = _this.props,
          disabledBefore = _this$props.disabledBefore,
          disabledAfter = _this$props.disabledAfter;
      var d = new Date(year, month, date);

      if (compareDate(disabledBefore, 'more', year, month, date) || compareDate(disabledAfter, 'less', year, month, date)) {
        return undefined;
      }

      return d;
    });

    _defineProperty(_assertThisInitialized(_this), "getNavDateInfo", function (index) {
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

    _defineProperty(_assertThisInitialized(_this), "getInRangeError", function () {
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

    _defineProperty(_assertThisInitialized(_this), "selectYear", function (year) {
      _this.updateState(year);

      _this.setState({
        view: 'month'
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectMonth", function (month) {
      _this.updateState(_this.state.yearNav, month);

      _this.setState({
        view: 'date'
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectDate", function (index, date) {
      var _this$getNavDateInfo = _this.getNavDateInfo(index),
          year = _this$getNavDateInfo.year,
          month = _this$getNavDateInfo.month;

      _this.updateState(year, month, date);

      var d = _this.getDateValue(year, month, date);

      _this.setState({
        currDate: d
      });
    });

    _defineProperty(_assertThisInitialized(_this), "navClickHandler", function (type) {
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
    });

    _defineProperty(_assertThisInitialized(_this), "renderJumpButton", function (type) {
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

      var headerIconClass = classNames({
        'Calendar-headerIcon': true,
        'Calendar-headerIcon--disabled': disabled
      });
      return /*#__PURE__*/createElement(Icon, {
        name: "arrow_".concat(type === 'next' ? 'forward' : 'back'),
        className: headerIconClass,
        onClick: function onClick() {
          return _this.navClickHandler(type);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderHeaderContent", function (index) {
      var monthsInView = _this.props.monthsInView;
      var _this$state5 = _this.state,
          view = _this$state5.view,
          yearBlockNav = _this$state5.yearBlockNav;
      var yearBlockRange = config.yearBlockRange,
          months = config.months;
      var _this$props$jumpView = _this.props.jumpView,
          jumpView = _this$props$jumpView === void 0 ? true : _this$props$jumpView;

      if (jumpView) {
        if (monthsInView > 1) jumpView = false;
      }

      var _this$getNavDateInfo2 = _this.getNavDateInfo(index),
          yearNavVal = _this$getNavDateInfo2.year,
          monthNavVal = _this$getNavDateInfo2.month;

      var headerContentClass = classNames({
        'Calendar-headerContent': true,
        'Calendar-headerContent--noIcon-left': index === monthsInView - 1,
        'Calendar-headerContent--noIcon-right': index === 0
      });
      var headerContent = '';

      var onClickHandler = function onClickHandler(currView) {
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

      if (view === 'year') headerContent = "".concat(yearBlockNav, " - ").concat(yearBlockNav + (yearBlockRange - 1));
      if (view === 'month') headerContent = "".concat(yearNavVal);
      return /*#__PURE__*/createElement("div", {
        className: headerContentClass
      }, view !== 'date' && /*#__PURE__*/createElement("span", {
        onClick: function onClick() {
          return onClickHandler(view);
        }
      }, /*#__PURE__*/createElement(Heading, {
        size: "s"
      }, headerContent)), view === 'date' && /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement("span", {
        onClick: function onClick() {
          return onClickHandler(view);
        }
      }, /*#__PURE__*/createElement(Heading, {
        size: "s"
      }, months[monthNavVal])), "\xA0", /*#__PURE__*/createElement("span", {
        onClick: function onClick() {
          return onClickHandler('month');
        }
      }, /*#__PURE__*/createElement(Heading, {
        size: "s"
      }, yearNavVal))));
    });

    _defineProperty(_assertThisInitialized(_this), "renderBodyYear", function () {
      var yearBlockRange = config.yearBlockRange,
          yearsInRow = config.yearsInRow;
      var _this$props4 = _this.props,
          rangePicker = _this$props4.rangePicker,
          disabledBefore = _this$props4.disabledBefore,
          disabledAfter = _this$props4.disabledAfter;
      var _this$state6 = _this.state,
          yearBlockNav = _this$state6.yearBlockNav,
          yearNav = _this$state6.yearNav;
      var noOfRows = Math.ceil(yearBlockRange / yearsInRow);
      return Array.from({
        length: noOfRows
      }, function (_y, row) {
        return /*#__PURE__*/createElement("div", {
          className: "Calendar-valueRow"
        }, Array.from({
          length: yearsInRow
        }, function (_x, col) {
          var offset = yearsInRow * row + col;
          if (offset === yearBlockNav) return undefined;
          var year = yearBlockNav + offset;
          var disabled = compareDate(disabledBefore, 'more', year) || compareDate(disabledAfter, 'less', year);
          var active = !disabled && !rangePicker && yearNav === year && year === _this.state.year;
          var valueClass = classNames({
            'Calendar-value': true,
            'Calendar-value--active': active,
            'Calendar-value--disabled': disabled
          });
          return /*#__PURE__*/createElement("div", {
            className: valueClass,
            onClick: function onClick() {
              return _this.selectYear(year);
            }
          }, /*#__PURE__*/createElement(Text, {
            appearance: active ? 'white' : disabled ? 'disabled' : 'default'
          }, "".concat(year)));
        }));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderBodyMonth", function () {
      var monthBlock = config.monthBlock,
          monthsInRow = config.monthsInRow,
          months = config.months;
      var _this$props5 = _this.props,
          disabledBefore = _this$props5.disabledBefore,
          disabledAfter = _this$props5.disabledAfter;
      var _this$state7 = _this.state,
          yearNav = _this$state7.yearNav,
          monthNav = _this$state7.monthNav,
          year = _this$state7.year;
      var noOfRows = Math.ceil(monthBlock / monthsInRow);
      return Array.from({
        length: noOfRows
      }, function (_y, row) {
        return /*#__PURE__*/createElement("div", {
          className: "Calendar-valueRow"
        }, Array.from({
          length: monthsInRow
        }, function (_x, col) {
          var month = monthsInRow * row + col;
          var disabled = compareDate(disabledBefore, 'more', yearNav, month) || compareDate(disabledAfter, 'less', yearNav, month);
          var active = !disabled && year === yearNav && monthNav === month;
          var valueClass = classNames({
            'Calendar-value': true,
            'Calendar-value--active': active,
            'Calendar-value--dummy': disabled
          });
          return /*#__PURE__*/createElement("div", {
            className: valueClass,
            onClick: function onClick() {
              return _this.selectMonth(month);
            }
          }, /*#__PURE__*/createElement(Text, {
            appearance: active ? 'white' : disabled ? 'disabled' : 'default'
          }, months[month]));
        }));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderBodyDate", function (index) {
      var daysInRow = config.daysInRow,
          days = config.days;
      var _this$props6 = _this.props,
          rangePicker = _this$props6.rangePicker,
          firstDayOfWeek = _this$props6.firstDayOfWeek;

      var onMouseLeaveHandler = function onMouseLeaveHandler() {
        if (rangePicker) {
          _this.setState({
            hoverDate: undefined
          });
        }
      };

      return /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement("div", {
        className: "Calendar-dayValues"
      }, Array.from({
        length: 7
      }, function (_x, day) {
        var valueClass = classNames({
          'Calendar-value': true,
          'Calendar-value--dummy': true
        });
        var dayValue = (day + daysInRow + getIndexOfDay(firstDayOfWeek)) % daysInRow;
        return /*#__PURE__*/createElement(Subheading, {
          className: valueClass,
          appearance: "disabled"
        }, days[dayValue]);
      })), /*#__PURE__*/createElement("div", {
        className: "Calendar-dateValues",
        onMouseLeave: onMouseLeaveHandler
      }, _this.renderDateValues(index)));
    });

    _defineProperty(_assertThisInitialized(_this), "renderDateValues", function (index) {
      var daysInRow = config.daysInRow;
      var _this$props7 = _this.props,
          rangePicker = _this$props7.rangePicker,
          firstDayOfWeek = _this$props7.firstDayOfWeek,
          disabledBefore = _this$props7.disabledBefore,
          disabledAfter = _this$props7.disabledAfter;
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

      var onMouseOverHandler = function onMouseOverHandler(date) {
        if (rangePicker) {
          var d = _this.getDateValue(yearNavVal, monthNavVal, date);

          if (!(startDate && endDate)) {
            _this.setState({
              hoverDate: d
            });
          }
        }
      };

      return Array.from({
        length: noOfRows
      }, function (_y, row) {
        return /*#__PURE__*/createElement(Fragment, null, dummyDays < daysInRow && /*#__PURE__*/createElement("div", {
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

          var wrapperClass = classNames({
            'Calendar-valueWrapper': true,
            'Calendar-valueWrapper--start': startActive || inRangeLast && endDate,
            'Calendar-valueWrapper--end': endActive || inRangeLast && startDate,
            'Calendar-valueWrapper--inRange': inRange || rangePicker && active,
            'Calendar-valueWrapper--inRange-error': inRange && inRangeError
          });
          var valueClass = classNames({
            'Calendar-value': true,
            'Calendar-value--active': active,
            'Calendar-value--dummy': dummy || disabled,
            'Calendar-value--disabled': disabled
          });
          return /*#__PURE__*/createElement("div", {
            className: wrapperClass
          }, /*#__PURE__*/createElement("span", {
            className: valueClass,
            onClick: function onClick() {
              return onClickHandler(date);
            },
            onMouseOver: function onMouseOver() {
              return onMouseOverHandler(date);
            }
          }, !dummy && /*#__PURE__*/createElement(Text, {
            appearance: active ? 'white' : disabled ? 'disabled' : 'default'
          }, "".concat(date))));
        })));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderCalendar", function (index) {
      var _classNames;

      var monthsInView = _this.props.monthsInView;
      var view = _this.state.view;
      var wrapperClass = classNames((_classNames = {}, _defineProperty(_classNames, 'Calendar', true), _defineProperty(_classNames, "Calendar--".concat(view), view), _classNames));
      var headerClass = classNames({
        'Calendar-header': true
      });
      var bodyClass = classNames({
        'Calendar-body': true
      });
      return /*#__PURE__*/createElement("div", {
        className: wrapperClass
      }, /*#__PURE__*/createElement("div", {
        className: headerClass
      }, index === 0 && _this.renderJumpButton('prev'), _this.renderHeaderContent(index), index === monthsInView - 1 && _this.renderJumpButton('next')), /*#__PURE__*/createElement("div", {
        className: bodyClass
      }, view === 'year' && _this.renderBodyYear(), view === 'month' && _this.renderBodyMonth(), view === 'date' && _this.renderBodyDate(index)));
    });

    var _this$props8 = _this.props,
        _rangePicker = _this$props8.rangePicker,
        _startDate = _this$props8.startDate,
        _endDate = _this$props8.endDate,
        _monthsInView = _this$props8.monthsInView,
        _view = _this$props8.view;
    var currDate = _rangePicker ? _endDate || _startDate : props.date;

    var _yearNav = props.yearNav || getDateInfo(currDate || Date.now()).year;

    var _monthNav = props.monthNav || getDateInfo(currDate || Date.now()).month;

    var _getDateInfo4 = getDateInfo(currDate),
        _year = _getDateInfo4.year,
        _month = _getDateInfo4.month,
        _date = _getDateInfo4.date;

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

  _createClass(Calendar, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var monthsInView = this.props.monthsInView;

      if (prevProps.date !== this.props.date) {
        var _getDateInfo5 = getDateInfo(this.props.date),
            year = _getDateInfo5.year,
            month = _getDateInfo5.month,
            _date2 = _getDateInfo5.date;

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
        var _this$props9 = this.props,
            rangePicker = _this$props9.rangePicker,
            onDateChange = _this$props9.onDateChange;
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
              var _getDateInfo6 = getDateInfo(currDate),
                  _year2 = _getDateInfo6.year,
                  _month2 = _getDateInfo6.month,
                  _date3 = _getDateInfo6.date;

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

      var _this$props10 = this.props,
          monthsInView = _this$props10.monthsInView,
          className = _this$props10.className;
      var baseProps = extractBaseProps(this.props);
      return /*#__PURE__*/createElement("div", _extends({}, baseProps, {
        className: "Calendar-wrapper ".concat(className)
      }), Array.from({
        length: monthsInView
      }, function (_x, index) {
        return _this2.renderCalendar(index);
      }));
    }
  }]);

  return Calendar;
}(Component);

_defineProperty(Calendar, "defaultProps", {
  monthsInView: 1,
  view: 'date',
  firstDayOfWeek: 'sunday'
});

/**
 * It works as Uncontrolled Input
 *
 * **Updated value can be passed**
 */
var InputMask = /*#__PURE__*/forwardRef(function (props, forwardRef) {
  var maskProp = props.mask,
      valueProp = props.value,
      _props$placeholderCha = props.placeholderChar,
      placeholderChar = _props$placeholderCha === void 0 ? '_' : _props$placeholderCha,
      _props$validators = props.validators,
      validators = _props$validators === void 0 ? [] : _props$validators,
      defaultValue = props.defaultValue,
      mask = props.mask,
      error = props.error,
      caption = props.caption,
      required = props.required,
      onChange = props.onChange,
      onBlur = props.onBlur,
      onClick = props.onClick,
      onClear = props.onClear,
      className = props.className,
      rest = _objectWithoutProperties(props, ["mask", "value", "placeholderChar", "validators", "defaultValue", "mask", "error", "caption", "required", "onChange", "onBlur", "onClick", "onClear", "className"]);

  var _React$useState = useState$3(defaultValue || valueProp || ''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var _React$useState3 = useState$3(0),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      caret = _React$useState4[0],
      setCaret = _React$useState4[1];

  var ref = useRef$1(null);
  var fixedMask = mask.filter(function (m) {
    return typeof m === 'string' && m.length === 1;
  });
  useEffect$2(function () {
    setCaretPos(caret);
  }, [caret]);
  useEffect$2(function () {
    if (ref.current && valueProp) {
      setValue(convertToMasked(valueProp));
    }
  }, [valueProp]);
  useEffect$2(function () {
    if (ref.current) {
      var el = ref.current;
      el.addEventListener('keyup', function (e) {
        if (e.keyCode === 37 || e.keyCode === 39) {
          if (ref.current) {
            var pos = ref.current.selectionEnd;

            if (ref.current.selectionStart === ref.current.selectionEnd) {
              if (pos) setCaret(pos);
            }
          }
        }
      });
    }
  }, [ref]);
  useImperativeHandle(forwardRef, function () {
    return ref.current;
  });

  var setCaretPos = function setCaretPos(pos) {
    if (ref.current) {
      var el = ref.current; // if (el.createTextRange) {
      //   var range = el.createTextRange();
      //   range.move('character', pos);
      //   range.select();
      //   return true;
      // }
      // else {
      //   // (el.selectionStart === 0 added for Firefox bug)

      if (el.selectionStart || el.selectionStart === 0) {
        // el.focus();
        var p = Math.ceil(pos);
        el.setSelectionRange(p, p);
      } // }

    }
  };

  var getRawValue = function getRawValue() {
    var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return val.split('').filter(function (v) {
      return !(fixedMask.includes(v) || v === placeholderChar);
    }).join('');
  };

  function convertToMasked() {
    var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var currCaret = 0;

    if (ref.current) {
      currCaret = ref.current.selectionEnd ? ref.current.selectionEnd : 0;
    }

    var oldRawValue = getRawValue(value);
    var rawValue = getRawValue(val);
    var it = 0;
    var newVal = '';
    var newCaretPos = currCaret;

    for (var i = 0; i < mask.length; i++) {
      var m = mask[i];

      if (_typeof(m) === 'object') {
        if (it < rawValue.length && rawValue[it].match(m)) {
          newVal += rawValue[it];
        } else {
          newVal += placeholderChar;
        }

        it++;
      } else {
        newVal += m;

        if (i >= caret && i <= newCaretPos && it < rawValue.length) {
          if (rawValue.length > oldRawValue.length) newCaretPos++;
        }
      }
    }

    setCaret(newCaretPos);
    return newVal;
  }

  var onClickHandler = function onClickHandler(e) {
    if (ref.current) {
      var pos = ref.current.selectionStart ? ref.current.selectionStart : 0;
      if (ref.current.selectionEnd === pos) setCaret(pos);
    }

    if (onClick) onClick(e);
  };

  var onChangeHandler = function onChangeHandler(e) {
    var inputVal = e.currentTarget.value;
    var maskedVal = convertToMasked(inputVal);

    if (isValid(validators, maskedVal)) {
      setValue(maskedVal);
      if (onChange) onChange(e, maskedVal);
    }
  };

  var onBlurHandler = function onBlurHandler(e) {
    var inputVal = e.currentTarget.value;
    var maskedVal = convertToMasked(inputVal);
    if (onBlur) onBlur(e, maskedVal);
  };

  var onClearHandler = function onClearHandler(e) {
    setValue('');
    if (onClear) onClear(e);
  };

  var classes = classNames({
    'd-flex flex-column flex-grow-1': true
  }, className);
  return /*#__PURE__*/createElement("div", {
    className: classes
  }, /*#__PURE__*/createElement(Input, _extends({}, rest, {
    value: value,
    error: error,
    required: required,
    onClick: onClickHandler,
    onChange: onChangeHandler,
    onClear: onClearHandler,
    onBlur: onBlurHandler,
    autoComplete: 'off',
    ref: ref
  })), /*#__PURE__*/createElement(Caption, {
    error: error,
    withInput: true,
    hide: !caption
  }, caption));
});
InputMask.displayName = 'InputMask';

var DatePicker = /*#__PURE__*/function (_React$Component) {
  _inherits(DatePicker, _React$Component);

  var _super = _createSuper(DatePicker);

  function DatePicker(props) {
    var _this;

    _classCallCheck(this, DatePicker);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "getError", function (date) {
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

    _defineProperty(_assertThisInitialized(_this), "onDateChangeHandler", function (d) {
      _this.setState({
        init: true,
        date: d
      });

      var closeOnSelect = _this.props.closeOnSelect;
      if (closeOnSelect) _this.setState({
        open: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeHandler", function (_e, val) {
      var _this$props2 = _this.props,
          inputFormat = _this$props2.inputFormat,
          validators = _this$props2.validators;

      _this.setState({
        open: true
      });

      var placeholderChar = '_';

      if (val && !val.includes(placeholderChar)) {
        var d = translateToDate(inputFormat, val, validators);

        _this.setState({
          date: d
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onFocusHandler", function () {
      _this.setState({
        init: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onBlurHandler", function (_e, val) {
      var placeholderChar = '_';

      if (!val || val.includes(placeholderChar)) {
        _this.setState({
          date: undefined
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onClearHandler", function () {
      _this.setState({
        init: true,
        date: undefined
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onToggleHandler", function (o, type) {
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
        _validators = props.validators;

    var _date = convertToDate(props.date, _inputFormat, _validators);

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
        var _this$props3 = this.props,
            inputFormat = _this$props3.inputFormat,
            validators = _this$props3.validators;
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
        var _this$props4 = this.props,
            onDateChange = _this$props4.onDateChange,
            outputFormat = _this$props4.outputFormat;
        var _date2 = this.state.date;
        var newError = this.getError(_date2);
        this.setState({
          error: newError
        });

        if (onDateChange) {
          if (!newError) {
            var dVal = translateToString$1(outputFormat, _date2);
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
      var _this$props5 = this.props,
          dateProp = _this$props5.date,
          open = _this$props5.open,
          position = _this$props5.position,
          inputFormat = _this$props5.inputFormat,
          outputFormat = _this$props5.outputFormat,
          inputOptions = _this$props5.inputOptions,
          validators = _this$props5.validators,
          withInput = _this$props5.withInput,
          disabledBefore = _this$props5.disabledBefore,
          disabledAfter = _this$props5.disabledAfter,
          onDateChange = _this$props5.onDateChange,
          closeOnSelect = _this$props5.closeOnSelect,
          rest = _objectWithoutProperties(_this$props5, ["date", "open", "position", "inputFormat", "outputFormat", "inputOptions", "validators", "withInput", "disabledBefore", "disabledAfter", "onDateChange", "closeOnSelect"]);

      var date = this.state.date;
      return /*#__PURE__*/createElement(Calendar, _extends({}, rest, {
        date: convertToDate(date, inputFormat, validators),
        disabledBefore: convertToDate(disabledBefore, inputFormat, validators),
        disabledAfter: convertToDate(disabledAfter, inputFormat, validators),
        onDateChange: this.onDateChangeHandler
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          position = _this$props6.position,
          inputFormat = _this$props6.inputFormat,
          inputOptions = _this$props6.inputOptions,
          withInput = _this$props6.withInput,
          validators = _this$props6.validators;
      var _this$state = this.state,
          init = _this$state.init,
          date = _this$state.date,
          error = _this$state.error,
          open = _this$state.open;

      if (withInput) {
        var showError = inputOptions.required && error && init;

        var inputValidator = function inputValidator(val) {
          return isValid(validators, val, inputFormat);
        };

        var trigger = /*#__PURE__*/createElement(InputMask, _extends({
          icon: "events",
          placeholder: inputFormat
        }, inputOptions, {
          error: showError,
          mask: date$1[inputFormat],
          value: date ? translateToString$1(inputFormat, date) : '',
          onChange: this.onChangeHandler,
          onFocus: this.onFocusHandler,
          onBlur: this.onBlurHandler,
          onClear: this.onClearHandler,
          caption: showError ? inputOptions.caption || 'Invalid value' : '',
          validators: [inputValidator]
        }));
        return /*#__PURE__*/createElement(Popover, {
          trigger: trigger,
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
}(Component);

_defineProperty(DatePicker, "defaultProps", _objectSpread2(_objectSpread2({}, Calendar.defaultProps), {}, {
  position: 'bottom-start',
  inputFormat: 'mm/dd/yyyy',
  outputFormat: 'mm/dd/yyyy',
  validators: [date],
  inputOptions: {},
  closeOnSelect: true
}));

var TimePicker = function TimePicker(props) {
  var validators = props.validators,
      inputOptions = props.inputOptions,
      inputFormat = props.inputFormat,
      outputFormat = props.outputFormat,
      onTimeChange = props.onTimeChange,
      time = props.time;

  var onChangeHandler = function onChangeHandler(_e, val) {
    var _inputOptions$placeho = inputOptions.placeholderChar,
        placeholderChar = _inputOptions$placeho === void 0 ? '_' : _inputOptions$placeho;

    if (onTimeChange) {
      var outputTimeStr = val && !val.includes(placeholderChar) ? getOutputTimeString(inputFormat, outputFormat, val) : undefined;
      onTimeChange(outputTimeStr);
    }
  };

  var inputValidator = function inputValidator(val) {
    return isValid(validators, val, inputFormat);
  };

  return /*#__PURE__*/createElement(InputMask, _extends({
    placeholder: placeholders[inputFormat],
    placeholderChar: "_"
  }, inputOptions, {
    mask: time$1[inputFormat],
    value: translateToTime(inputFormat, time),
    validators: inputValidator,
    onChange: onChangeHandler
  }));
};
TimePicker.defaultProps = {
  inputFormat: 'hh:mm AM',
  outputFormat: 'hh:mm AM',
  inputOptions: {},
  validators: [time]
};
TimePicker.displayName = 'TimePicker';

var DonutChart = function DonutChart(props) {
  var width = props.width,
      colors = props.colors,
      withCenterText = props.withCenterText,
      colorOfTotalCount = props.colorOfTotalCount,
      data = props.data,
      radius = props.radius,
      withLegends = props.withLegends,
      withTooltip = props.withTooltip,
      withActiveSegment = props.withActiveSegment,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var columnOptions = {
    chart: {
      size: withLegends ? '9' : '12',
      sizeS: '12',
      sizeXS: '12'
    },
    legends: {
      size: '3',
      sizeS: '12',
      sizeXS: '12'
    }
  };

  var ChartTooltip = function ChartTooltip(chartProps) {
    var payload = chartProps.payload[0];

    if (payload) {
      return /*#__PURE__*/createElement("div", {
        className: "DonutChart-tooltip"
      }, "".concat(payload.name).concat(chartProps.separator).concat((+payload.value).toLocaleString()));
    }

    return null;
  };

  var colorToHex$1 = colorToHex;

  var renderActiveShape = function renderActiveShape(activeShapeProps) {
    var RADIAN = Math.PI / 180;
    var cx = activeShapeProps.cx,
        cy = activeShapeProps.cy,
        midAngle = activeShapeProps.midAngle,
        innerRadius = activeShapeProps.innerRadius,
        outerRadius = activeShapeProps.outerRadius,
        startAngle = activeShapeProps.startAngle,
        endAngle = activeShapeProps.endAngle,
        fill = activeShapeProps.fill,
        payload = activeShapeProps.payload,
        percent = activeShapeProps.percent,
        value = activeShapeProps.value;
    var sin = Math.sin(-RADIAN * midAngle);
    var cos = Math.cos(-RADIAN * midAngle);
    var sx = cx + (outerRadius + 10) * cos;
    var sy = cy + (outerRadius + 10) * sin;
    var mx = cx + (outerRadius + 30) * cos;
    var my = cy + (outerRadius + 30) * sin;
    var ex = mx + (cos >= 0 ? 1 : -1) * 22;
    var ey = my;
    var textAnchor = cos >= 0 ? 'start' : 'end';
    var total = Math.ceil(value / percent);
    return /*#__PURE__*/createElement("g", null, withCenterText && /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement("text", {
      x: cx,
      y: cy,
      "font-size": 'var(--font-size-xl)',
      textAnchor: "middle"
    }, "Total"), /*#__PURE__*/createElement("text", {
      x: cx,
      y: cy,
      dy: 22,
      "font-size": 'var(--font-size-l)',
      textAnchor: "middle",
      fill: colorToHex$1(colorOfTotalCount)
    }, total.toLocaleString())), /*#__PURE__*/createElement(Sector, {
      cx: cx,
      cy: cy,
      innerRadius: innerRadius,
      outerRadius: outerRadius,
      startAngle: startAngle,
      endAngle: endAngle,
      fill: fill
    }), withActiveSegment && /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement(Sector, {
      cx: cx,
      cy: cy,
      startAngle: startAngle,
      endAngle: endAngle,
      innerRadius: outerRadius + 6,
      outerRadius: outerRadius + 10,
      fill: fill
    }), /*#__PURE__*/createElement("path", {
      d: "M".concat(sx, ",").concat(sy, "L").concat(mx, ",").concat(my, "L").concat(ex, ",").concat(ey),
      stroke: fill,
      fill: "none"
    }), /*#__PURE__*/createElement("circle", {
      cx: ex,
      cy: ey,
      r: 2,
      fill: fill,
      stroke: "none"
    }), /*#__PURE__*/createElement("text", {
      x: ex + (cos >= 0 ? 1 : -1) * 12,
      y: ey,
      dy: -18,
      textAnchor: textAnchor,
      fill: fill
    }, "".concat(payload.name)), /*#__PURE__*/createElement("text", {
      x: ex + (cos >= 0 ? 1 : -1) * 12,
      y: ey,
      textAnchor: textAnchor,
      fill: "#333"
    }, "".concat(value.toLocaleString())), /*#__PURE__*/createElement("text", {
      x: ex + (cos >= 0 ? 1 : -1) * 12,
      y: ey,
      dy: 18,
      textAnchor: textAnchor,
      fill: "#999"
    }, "".concat((percent * 100).toFixed(0), "%"))));
  };

  var _React$useState = useState$3(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      activeIndex = _React$useState2[0],
      setActiveIndex = _React$useState2[1];

  var onPieEnter = function onPieEnter(_data, index) {
    setActiveIndex(index);
  };

  var getColor = function getColor(index, type) {
    var color = colors[index % colors.length];
    var colorHex = colorToHex$1(color);
    return type === 'hex' ? colorHex : color;
  };

  var oRadius = withActiveSegment ? radius ? .7 * radius : '70%' : radius || '100%';
  var iRadius = withActiveSegment ? radius ? (100 - width) / 100 * oRadius : "".concat((100 - width) / 100 * 70, "%") : radius ? (100 - width) / 100 * radius : "".concat(100 - width, "%"); // const tooltipPayload = data.reduce((out: Data[], curr) => {
  //   out.push({
  //     name: curr.name,
  //     value: (+curr.value).toLocaleString()
  //   });
  //   return out;
  // }, []);

  var classes = classNames(_defineProperty({}, 'DonutChart', true), className);
  return /*#__PURE__*/createElement(Row, _extends({}, baseProps, {
    className: classes
  }), /*#__PURE__*/createElement(Column, columnOptions.chart, /*#__PURE__*/createElement(ResponsiveContainer, null, /*#__PURE__*/createElement(PieChart, null, /*#__PURE__*/createElement(Pie, {
    data: data,
    dataKey: "value",
    activeIndex: activeIndex,
    activeShape: renderActiveShape,
    onMouseEnter: onPieEnter,
    outerRadius: oRadius,
    innerRadius: iRadius
  }, data.map(function (_entry, index) {
    return /*#__PURE__*/createElement(Cell$1, {
      fill: getColor(index, 'hex'),
      key: index
    });
  })), withTooltip && /*#__PURE__*/createElement(Tooltip$1, {
    separator: ": ",
    content: /*#__PURE__*/createElement(ChartTooltip, null)
  })))), withLegends && /*#__PURE__*/createElement(Column, _extends({
    className: "DonutChart-legends"
  }, columnOptions.legends), data.map(function (d, i) {
    return /*#__PURE__*/createElement(Legend, {
      key: i,
      iconAppearance: getColor(i)
    }, "".concat(d.name, " - ").concat((+d.value).toLocaleString()));
  })));
};
DonutChart.displayName = 'DonutChart';
DonutChart.defaultProps = {
  width: 20,
  colors: ['primary', 'secondary', 'success', 'warning', 'alert'],
  withCenterText: true,
  colorOfTotalCount: 'success'
};

var Label = function Label(props) {
  var _classNames;

  var required = props.required,
      withInput = props.withInput,
      disabled = props.disabled,
      children = props.children,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var LabelClass = classNames((_classNames = {
    Label: true
  }, _defineProperty(_classNames, 'Label--withInput', withInput), _defineProperty(_classNames, "".concat(className), className), _classNames));
  var classes = classNames({
    'Label-label': true,
    'Label--disabled': disabled
  });
  return /*#__PURE__*/createElement("div", _extends({
    "data-test": "DesignSystem-Label"
  }, baseProps, {
    className: LabelClass
  }), /*#__PURE__*/createElement(GenericText, {
    className: classes,
    componentType: "label"
  }, children), required && /*#__PURE__*/createElement("span", {
    className: "Label-requiredIndicator",
    "data-test": "DesignSystem-Label--RequiredIndicator"
  }));
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
  var classes = classNames((_classNames = {
    Caption: true
  }, _defineProperty(_classNames, 'Caption--hidden', hide), _defineProperty(_classNames, 'Caption--withInput', withInput), _classNames), className);
  var errorIconClass = classNames(_defineProperty({}, 'Caption-icon', true));
  return /*#__PURE__*/createElement("div", _extends({}, baseProps, {
    className: classes
  }), error && /*#__PURE__*/createElement("div", {
    className: errorIconClass
  }, /*#__PURE__*/createElement(Icon, {
    size: 14,
    name: 'error',
    appearance: 'alert'
  })), /*#__PURE__*/createElement(Text, {
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
  var legendClass = classNames(_defineProperty({}, 'Legend', true), className);
  var styles = {
    background: "var(--".concat(iconAppearance, ")"),
    height: "".concat(iconSize, "px"),
    width: "".concat(iconSize, "px")
  };
  return /*#__PURE__*/createElement("div", _extends({}, baseProps, {
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
  }), /*#__PURE__*/createElement("span", {
    className: "Legend-icon",
    style: styles
  }), /*#__PURE__*/createElement(Text, {
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
  var EditableClass = classNames(_defineProperty({}, 'Editable', true), className);
  return /*#__PURE__*/createElement("div", _extends({
    "data-test": "DesignSystem-Editable"
  }, baseProps, {
    className: EditableClass
  }), /*#__PURE__*/createElement("div", {
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
      className = props.className;

  var onDropdownChange = dropdownOptions.onChange,
      rest = _objectWithoutProperties(dropdownOptions, ["onChange"]);

  var _React$useState = useState$3(placeholder),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      label = _React$useState2[0],
      setLabel = _React$useState2[1];

  var _React$useState3 = useState$3(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      editing = _React$useState4[0],
      setEditing = _React$useState4[1];

  var _React$useState5 = useState$3(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      showComponent = _React$useState6[0],
      setShowComponent = _React$useState6[1];

  var CompClass = classNames(_defineProperty({}, 'EditableDropdown', true), className);
  var DefaultCompClass = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'EditableDropdown-default', true), _defineProperty(_classNames2, 'd-none', showComponent), _classNames2));
  var EditableDropdownClass = classNames(_defineProperty({}, 'd-none', !showComponent));
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

  return /*#__PURE__*/createElement("div", _extends({
    "data-test": "DesignSystem-EditableDropdown"
  }, baseProps, {
    className: CompClass
  }), /*#__PURE__*/createElement(Editable, {
    onChange: onChangeHandler,
    editing: editing
  }, /*#__PURE__*/createElement(Dropdown, _extends({
    placeholder: placeholder,
    onChange: onChange,
    getLabel: getLabel,
    className: EditableDropdownClass,
    "data-test": "DesignSystem-EditableDropdown--Dropdown"
  }, rest)), /*#__PURE__*/createElement("div", {
    className: DefaultCompClass,
    "data-test": "DesignSystem-EditableDropdown--Default"
  }, label || placeholder)));
};
EditableDropdown.defaultProps = {
  placeholder: '',
  dropdownOptions: {}
};

var Link = function Link(props) {
  var children = props.children,
      className = props.className,
      rest = _objectWithoutProperties(props, ["children", "className"]);

  var classes = classNames({
    Link: true
  }, className);
  return /*#__PURE__*/createElement(GenericText, _extends({
    className: classes,
    componentType: "a"
  }, rest), children);
};
Link.displayName = 'Link';

var IconMapping = {
  success: 'check_circle',
  info: 'info',
  warning: 'warning',
  alert: 'error'
};
var Message = function Message(props) {
  var _classNames, _classNames2;

  var appearance = props.appearance,
      title = props.title,
      children = props.children,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var MessageClass = classNames((_classNames = {}, _defineProperty(_classNames, 'Message', true), _defineProperty(_classNames, "Message--".concat(appearance), appearance), _classNames), className);
  var MessageIcon = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'Message-icon', true), _defineProperty(_classNames2, "Message-icon--".concat(appearance), appearance), _defineProperty(_classNames2, 'Message-icon--withTitle', title), _classNames2));
  return /*#__PURE__*/createElement("div", _extends({
    "data-test": "DesignSystem-Message"
  }, baseProps, {
    className: MessageClass
  }), appearance !== 'default' && /*#__PURE__*/createElement("div", {
    className: MessageIcon,
    "data-test": "DesignSystem-Message--Icon"
  }, /*#__PURE__*/createElement(Icon, {
    name: IconMapping[appearance],
    appearance: appearance
  })), /*#__PURE__*/createElement("div", {
    "data-test": "DesignSystem-Message--Title"
  }, title && /*#__PURE__*/createElement("div", {
    className: "Message-title"
  }, /*#__PURE__*/createElement(Heading, {
    size: "s"
  }, title)), /*#__PURE__*/createElement("div", {
    "data-test": "DesignSystem-Message--Description",
    className: "Message-description"
  }, children)));
};
Message.displayName = 'Message';
Message.defaultProps = {
  appearance: 'default'
};

var Meta = function Meta(props) {
  var label = props.label,
      icon = props.icon;
  var baseProps = extractBaseProps(props);
  return /*#__PURE__*/createElement("span", _extends({}, baseProps, {
    className: 'Meta'
  }), icon && /*#__PURE__*/createElement(Icon, {
    name: icon,
    appearance: "disabled",
    className: 'Meta-icon'
  }), /*#__PURE__*/createElement(Text, {
    appearance: "subtle"
  }, label));
};
Meta.displayName = 'Meta';

var MetaList = function MetaList(props) {
  var list = props.list,
      seperator = props.seperator;
  var baseProps = extractBaseProps(props);
  return /*#__PURE__*/createElement("div", _extends({}, baseProps, {
    className: 'MetaList'
  }), seperator && /*#__PURE__*/createElement("span", {
    className: 'MetaList-seperator MetaList-separator--left'
  }), list.map(function (item, ind) {
    var _item$label = item.label,
        label = _item$label === void 0 ? '' : _item$label,
        icon = item.icon;
    var rightSeperator = ind === list.length - 1 ? false : true;
    return /*#__PURE__*/createElement("span", {
      key: ind,
      className: "MetaList-item"
    }, /*#__PURE__*/createElement(Meta, {
      label: label,
      icon: icon
    }), rightSeperator && /*#__PURE__*/createElement("span", {
      className: 'MetaList-seperator'
    }));
  }));
};
MetaList.displayName = 'MetaList';

/**
 * Handle click outside component
 * @class OutsideClick
 * @extends {React.Component<OutsideClickProps, never>}
 */
var OutsideClick = /*#__PURE__*/function (_React$Component) {
  _inherits(OutsideClick, _React$Component);

  var _super = _createSuper(OutsideClick);

  function OutsideClick(props) {
    var _this;

    _classCallCheck(this, OutsideClick);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "container", void 0);

    _defineProperty(_assertThisInitialized(_this), "handleOutsideClick", function (event) {
      var onOutsideClick = _this.props.onOutsideClick;
      var element = _this.container;

      if (!event.target || !element.current) {
        return;
      }

      if (!findDOMNode(element.current).contains(event.target)) {
        onOutsideClick(event);
      }
    });

    _this.container = /*#__PURE__*/createRef();
    return _this;
  }
  /**
   * Add event listener on mount
   * @memberof OutsideClick
   */


  _createClass(OutsideClick, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('click', this.handleOutsideClick, true);
    }
    /**
     * Remove event listener on unmount
     * @memberof OutsideClick
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.handleOutsideClick);
    }
    /**
     * Handle Outside click
     * @param {Event} event
     * @returns
     */

  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return /*#__PURE__*/cloneElement(Children.only(children), {
        ref: this.container
      });
    }
  }]);

  return OutsideClick;
}(Component);

var Paragraph = function Paragraph(props) {
  var appearance = props.appearance,
      children = props.children,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var classes = classNames(_defineProperty({
    Text: true
  }, "Text--".concat(appearance), appearance), className);
  return /*#__PURE__*/createElement(GenericText, _extends({
    "data-test": "DesignSystem-Paragraph"
  }, baseProps, {
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
  var ProgressBarClass = classNames({
    ProgressBar: true
  }, className);
  return /*#__PURE__*/createElement("div", _extends({
    "data-test": "DesignSystem-ProgressBar"
  }, baseProps, {
    className: ProgressBarClass
  }), /*#__PURE__*/createElement("div", {
    className: 'ProgressBar-indicator',
    style: style
  }));
};
ProgressBar.displayName = 'ProgressBar';
ProgressBar.defaultProps = {
  max: 100
};

var Radio = /*#__PURE__*/forwardRef(function (props, forwardedRef) {
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
      className = props.className;
  var baseProps = extractBaseProps(props);
  var ref = useRef$1(null);
  useImperativeHandle(forwardedRef, function () {
    return ref.current;
  });
  var RadioClass = classNames((_classNames = {}, _defineProperty(_classNames, 'Radio', true), _defineProperty(_classNames, 'Radio--disabled', disabled), _defineProperty(_classNames, "Radio--".concat(size), size), _classNames), className);
  var RadioWrapper = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'Radio-wrapper', true), _defineProperty(_classNames2, "Radio-wrapper--".concat(size), size), _classNames2));
  var RadioOuterWrapper = classNames((_classNames3 = {}, _defineProperty(_classNames3, 'Radio-outerWrapper', true), _defineProperty(_classNames3, "Radio-outerWrapper--".concat(size), size), _classNames3));
  var id = "".concat(name, "-").concat(label, "-").concat(uidGenerator());
  return /*#__PURE__*/createElement("div", {
    className: RadioClass
  }, /*#__PURE__*/createElement("div", {
    className: RadioOuterWrapper
  }, /*#__PURE__*/createElement("input", _extends({}, baseProps, {
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
  })), /*#__PURE__*/createElement("span", {
    className: RadioWrapper
  })), label && /*#__PURE__*/createElement("label", {
    className: "Radio-label",
    htmlFor: id
  }, /*#__PURE__*/createElement(Text, {
    size: size === 'tiny' ? 'small' : 'regular'
  }, label)));
});
Radio.displayName = 'Radio';

var Row = function Row(props) {
  var className = props.className,
      children = props.children;
  var baseProps = extractBaseProps(props);
  var classes = classNames(_defineProperty({
    Row: true
  }, "".concat(className), className));
  return /*#__PURE__*/createElement("div", _extends({
    "data-test": "DesignSystem-Row"
  }, baseProps, {
    className: classes
  }), children);
};
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
  var StatusHintClass = classNames(_defineProperty({}, 'StatusHint', true), className);
  var StatusHintIconClass = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'StatusHint-icon', true), _defineProperty(_classNames2, "StatusHint--".concat(appearance), appearance), _classNames2));
  return /*#__PURE__*/createElement("div", _extends({
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
  }), /*#__PURE__*/createElement("span", {
    "data-test": "DesignSystem-StatusHint--Icon",
    className: StatusHintIconClass
  }), /*#__PURE__*/createElement(Text, {
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
  var classes = classNames((_classNames = {
    Pills: true
  }, _defineProperty(_classNames, "Badge--".concat(appearance), appearance && !subtle), _defineProperty(_classNames, "Badge--subtle-".concat(appearance), subtle), _classNames), className);
  return /*#__PURE__*/createElement("span", _extends({
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
  _inherits(Handle, _React$Component);

  var _super = _createSuper(Handle);

  function Handle() {
    var _this;

    _classCallCheck(this, Handle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isMoving: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleElement", null);

    _defineProperty(_assertThisInitialized(_this), "refHandlers", {
      handle: function handle(el) {
        return _this.handleElement = el;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "mouseEventClientOffset", function (event) {
      return event.clientX;
    });

    _defineProperty(_assertThisInitialized(_this), "clientToValue", function (clientPixel) {
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

    _defineProperty(_assertThisInitialized(_this), "changeValue", function (newValue) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.props.onChange;
      var updatedValue = clamp(newValue, _this.props.min, _this.props.max);

      if (!isNaN(updatedValue) && _this.props.value !== updatedValue) {
        if (callback) callback(updatedValue);
      }

      return updatedValue;
    });

    _defineProperty(_assertThisInitialized(_this), "endHandleMovement", function (event) {
      var clientPixel = _this.mouseEventClientOffset(event);

      var onRelease = _this.props.onRelease;

      _this.removeDocumentEventListeners();

      _this.setState({
        isMoving: false
      });

      var finalValue = _this.changeValue(_this.clientToValue(clientPixel));

      if (onRelease) onRelease(finalValue);
    });

    _defineProperty(_assertThisInitialized(_this), "continueHandleMovement", function (event) {
      var clientPixel = _this.mouseEventClientOffset(event);

      if (_this.state.isMoving && !_this.props.disabled) {
        var value = _this.clientToValue(clientPixel);

        _this.changeValue(value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "beginHandleMovement", function (event) {
      if (_this.props.disabled) return;
      document.addEventListener('mousemove', _this.continueHandleMovement);
      document.addEventListener('mouseup', _this.endHandleMovement);

      _this.setState({
        isMoving: true
      });

      var value = _this.clientToValue(event.clientX);

      _this.changeValue(value);
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
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

    _defineProperty(_assertThisInitialized(_this), "handleKeyUp", function (event) {
      if (_this.props.disabled) return;

      if ([ARROW_LEFT, ARROW_RIGHT].indexOf(event.which) >= 0) {
        var onRelease = _this.props.onRelease;
        if (onRelease) onRelease(_this.props.value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getHandleMidpointAndOffset", function (handleElement) {
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

    _defineProperty(_assertThisInitialized(_this), "removeDocumentEventListeners", function () {
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
      var className = classNames((_classNames = {}, _defineProperty(_classNames, 'Slider-handle', true), _defineProperty(_classNames, 'Slider-handle--disabled', disabled), _defineProperty(_classNames, 'Slider-handle--active', this.state.isMoving), _classNames));
      return /*#__PURE__*/createElement("div", {
        className: className,
        onMouseDown: this.beginHandleMovement,
        onKeyDown: this.handleKeyDown,
        onKeyUp: this.handleKeyUp,
        ref: this.refHandlers.handle,
        style: style,
        tabIndex: 1
      }, !this.state.isMoving && /*#__PURE__*/createElement(Tooltip, {
        tooltip: label,
        position: "top",
        triggerClass: 'Slider-tooltip'
      }, /*#__PURE__*/createElement("span", {
        className: "h-100 w-100"
      })));
    }
  }]);

  return Handle;
}(Component);

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

    _defineProperty(_assertThisInitialized(_this), "handleElements", []);

    _defineProperty(_assertThisInitialized(_this), "trackElement", null);

    _defineProperty(_assertThisInitialized(_this), "getLabelPrecision", function (_ref) {
      var labelPrecision = _ref.labelPrecision,
          stepSize = _ref.stepSize;
      return labelPrecision == null ? countDecimalPlaces(stepSize) : labelPrecision;
    });

    _defineProperty(_assertThisInitialized(_this), "getOffsetRatio", function (value) {
      return clamp((value - _this.props.min) * _this.state.tickSizeRatio, 0, 1);
    });

    _defineProperty(_assertThisInitialized(_this), "addHandleRef", function (ref) {
      if (ref != null) {
        _this.handleElements.push(ref);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getHandleValues", function (props) {
      var maybeHandles = Children.map(props.children, function (child) {
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

    _defineProperty(_assertThisInitialized(_this), "updateTickSize", function () {
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

    _defineProperty(_assertThisInitialized(_this), "getTrackFill", function (start, end) {
      if (start.fillAfter !== undefined) {
        return start.fillAfter;
      }

      if (end !== undefined && end.fillBefore !== undefined) {
        return end.fillBefore;
      }

      return false;
    });

    _defineProperty(_assertThisInitialized(_this), "maybeHandleTrackClick", function (event) {
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

    _defineProperty(_assertThisInitialized(_this), "getLockedHandleIndex", function (startIndex, endIndex) {
      var inc = startIndex < endIndex ? 1 : -1;

      for (var index = startIndex + inc; index !== endIndex + inc; index += inc) {
        return index;
      }

      return -1;
    });

    _defineProperty(_assertThisInitialized(_this), "getNewHandleValues", function (newValue, oldIndex) {
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

    _defineProperty(_assertThisInitialized(_this), "onReleaseHandler", function (newValue, index) {
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

    _defineProperty(_assertThisInitialized(_this), "onChangeHandler", function (newValue, index) {
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

    _defineProperty(_assertThisInitialized(_this), "renderHandles", function () {
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
        return /*#__PURE__*/createElement(Handle, {
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

    _defineProperty(_assertThisInitialized(_this), "formatLabel", function (value) {
      var labelRenderer = _this.props.labelRenderer;

      if (typeof labelRenderer === 'function') {
        return labelRenderer(value);
      }

      return value.toFixed(_this.state.labelPrecision);
    });

    _defineProperty(_assertThisInitialized(_this), "renderLabels", function () {
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
        labels.push( /*#__PURE__*/createElement("div", {
          className: 'Slider-label',
          key: i,
          style: style
        }, /*#__PURE__*/createElement("span", {
          className: 'Slider-ticks'
        }), labelRenderer !== false && /*#__PURE__*/createElement(Text, {
          size: "small",
          appearance: active ? 'default' : 'disabled'
        }, _this.formatLabel(i))));
      }

      return labels;
    });

    _defineProperty(_assertThisInitialized(_this), "renderTrackFill", function (index, start, end) {
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

      var classes = classNames((_classNames = {}, _defineProperty(_classNames, 'Slider-progress', true), _defineProperty(_classNames, 'Slider-progress--disabled', _this.props.disabled), _defineProperty(_classNames, 'Slider-progress--inRange', fillTrack), _defineProperty(_classNames, 'Slider-progress--inRangeDisabled', fillTrack && _this.props.disabled), _classNames));
      return /*#__PURE__*/createElement("div", {
        key: "track-".concat(index),
        className: classes,
        style: style
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderTracks", function () {
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
      var _classNames3,
          _this2 = this;

      var _this$props3 = this.props,
          label = _this$props3.label,
          className = _this$props3.className;
      var baseProps = extractBaseProps(this.props);
      var SliderClass = classNames(_defineProperty({}, 'Slider', true), className);
      var WrapperClass = classNames((_classNames3 = {}, _defineProperty(_classNames3, 'Slider-wrapper', true), _defineProperty(_classNames3, 'Slider-wrapper--disabled', this.props.disabled), _classNames3));
      return /*#__PURE__*/createElement("div", _extends({}, baseProps, {
        className: SliderClass
      }), label && /*#__PURE__*/createElement(Label, {
        withInput: true
      }, label), /*#__PURE__*/createElement("div", {
        className: WrapperClass,
        onMouseDown: this.maybeHandleTrackClick
      }, /*#__PURE__*/createElement("div", {
        className: "Slider-track",
        ref: function ref(_ref3) {
          return _this2.trackElement = _ref3;
        }
      }, this.renderTracks()), /*#__PURE__*/createElement("div", {
        className: "Slider-axis'"
      }, this.renderLabels()), this.renderHandles()));
    }
  }]);

  return MultiSlider;
}(Component);

_defineProperty(MultiSlider, "defaultProps", {
  labelStepSize: 1,
  max: 10,
  min: 0,
  stepSize: 1,
  labelRenderer: true
});

_defineProperty(MultiSlider, "Handle", MultiSliderHandle);

var Slider = function Slider(props) {
  var valueProp = props.value,
      defaultValue = props.defaultValue,
      onRelease = props.onRelease,
      onChange = props.onChange,
      rest = _objectWithoutProperties(props, ["value", "defaultValue", "onRelease", "onChange"]);

  var _React$useState = useState$3(valueProp === undefined ? defaultValue : valueProp),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  useEffect$2(function () {
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

  return /*#__PURE__*/createElement(MultiSlider, rest, /*#__PURE__*/createElement(MultiSlider.Handle, {
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
      rest = _objectWithoutProperties(props, ["value", "defaultValue", "onChange", "onRelease"]);

  var _React$useState = useState$3(valueProp === undefined ? defaultValue : valueProp),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  useEffect$2(function () {
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

  return /*#__PURE__*/createElement(MultiSlider, _extends({
    onRangeChange: onChangeHandler,
    onRangeRelease: onRelease
  }, rest), /*#__PURE__*/createElement(MultiSlider.Handle, {
    value: value[RangeIndex.START],
    fillAfter: true
  }), /*#__PURE__*/createElement(MultiSlider.Handle, {
    value: value[RangeIndex.END]
  }));
};
RangeSlider.displayName = 'RangeSlider';
RangeSlider.defaultProps = _objectSpread2(_objectSpread2({}, MultiSlider.defaultProps), {}, {
  defaultValue: [0, 10]
});

/**
 * ######Switch has two types:
 *  - [Controlled Switch](https://reactjs.org/docs/forms.html#controlled-components)
 *  - [Uncontrolled Switch](https://reactjs.org/docs/uncontrolled-components.html)
 */
var Switch = /*#__PURE__*/forwardRef(function (props, ref) {
  var _classNames, _classNames2;

  var _props$size = props.size,
      size = _props$size === void 0 ? 'regular' : _props$size,
      _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'primary' : _props$appearance,
      defaultChecked = props.defaultChecked,
      disabled = props.disabled,
      onChange = props.onChange,
      name = props.name,
      value = props.value,
      className = props.className;
  var baseProps = extractBaseProps(props);

  var _React$useState = useState$3(props.checked === undefined ? defaultChecked : props.checked),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      checked = _React$useState2[0],
      setChecked = _React$useState2[1];

  useEffect$2(function () {
    if (props.checked !== undefined) setChecked(props.checked);
  }, [props.checked]);
  var SwitchClass = classNames((_classNames = {}, _defineProperty(_classNames, 'Switch', true), _defineProperty(_classNames, 'Switch--disabled', disabled), _defineProperty(_classNames, "Switch--".concat(size), size), _classNames), className);
  var SwitchWrapper = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'Switch-wrapper', true), _defineProperty(_classNames2, 'Switch-wrapper--disabled', disabled), _defineProperty(_classNames2, "Switch-wrapper--".concat(size), size), _defineProperty(_classNames2, "Switch-wrapper--".concat(appearance), appearance), _defineProperty(_classNames2, 'Switch-wrapper--checked', checked), _defineProperty(_classNames2, 'Switch-wrapper--checkedDisabled', checked && disabled), _classNames2));

  var onChangeHandler = function onChangeHandler(event) {
    if (props.checked === undefined) setChecked(!checked);
    if (onChange) onChange(event, !checked);
  };

  return /*#__PURE__*/createElement("div", {
    className: SwitchClass
  }, /*#__PURE__*/createElement("input", _extends({}, baseProps, {
    type: "checkbox",
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChangeHandler,
    checked: checked,
    ref: ref,
    name: name,
    value: value,
    className: "Switch-input"
  })), /*#__PURE__*/createElement("span", {
    className: SwitchWrapper
  }));
});
Switch.displayName = 'Switch';

var Textarea = /*#__PURE__*/forwardRef(function (props, ref) {
  var _classNames2;

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
      className = props.className;
  var baseProps = extractBaseProps(props);
  var classes = classNames(_defineProperty({}, 'Textarea', true), className);
  var TextareaClass = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'Textarea-textarea', true), _defineProperty(_classNames2, 'Textarea-textarea--resize', resize), _defineProperty(_classNames2, 'Textarea-textarea--error', error), _classNames2));
  return /*#__PURE__*/createElement("div", {
    className: classes
  }, /*#__PURE__*/createElement("textarea", _extends({
    "data-test": "DesignSystem-Textarea"
  }, baseProps, {
    ref: ref,
    name: name,
    rows: rows,
    placeholder: placeholder,
    className: TextareaClass,
    value: value,
    defaultValue: defaultValue,
    required: required,
    disabled: disabled,
    onChange: onChange,
    onBlur: onBlur,
    onClick: onClick,
    onFocus: onFocus
  })));
});
Textarea.displayName = 'Textarea';

var ActionButton = function ActionButton(props) {
  var _classNames;

  var appearance = props.appearance,
      label = props.label,
      onClick = props.onClick;
  var buttonClass = classNames((_classNames = {}, _defineProperty(_classNames, 'Button', true), _defineProperty(_classNames, 'Button--tiny', true), _defineProperty(_classNames, 'Toast-actionButton', true), _defineProperty(_classNames, "Toast-actionButton--".concat(appearance), appearance), _classNames));

  var onClickHandler = function onClickHandler(e) {
    e.preventDefault();
    if (onClick) onClick(e);
  };

  return /*#__PURE__*/createElement("button", {
    className: buttonClass,
    onClick: onClickHandler
  }, /*#__PURE__*/createElement(Text, {
    appearance: "white"
  }, label));
};

ActionButton.displayName = 'ActionButton';
ActionButton.defaultProps = {
  appearance: 'default'
};

var Toast = function Toast(props) {
  var _classNames, _classNames2;

  var appearance = props.appearance,
      title = props.title,
      message = props.message,
      actions = props.actions,
      onClose = props.onClose,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var wrapperClass = classNames((_classNames = {}, _defineProperty(_classNames, 'Toast', true), _defineProperty(_classNames, "Toast--".concat(appearance), appearance), _classNames), className);
  var IconMapping = {
    info: 'info',
    success: 'check_circle',
    alert: 'info',
    warning: 'info'
  };
  var icon = IconMapping[appearance];
  var titleClass = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'Toast-title', true), _defineProperty(_classNames2, 'Toast-title--withMessage', message), _classNames2));

  var iconClass = function iconClass(align) {
    var _classNames3;

    return classNames((_classNames3 = {}, _defineProperty(_classNames3, 'Toast-icon', true), _defineProperty(_classNames3, "Toast-icon--".concat(align), align), _classNames3));
  };

  var onCloseHandler = function onCloseHandler() {
    if (onClose) onClose();
  };

  return /*#__PURE__*/createElement("div", _extends({}, baseProps, {
    className: wrapperClass
  }), icon && /*#__PURE__*/createElement("div", {
    className: iconClass('left')
  }, /*#__PURE__*/createElement(Icon, {
    name: icon,
    appearance: appearance !== 'warning' ? 'white' : 'default'
  })), /*#__PURE__*/createElement("div", {
    className: "Toast-body"
  }, /*#__PURE__*/createElement("div", {
    className: titleClass
  }, /*#__PURE__*/createElement(Heading, {
    size: "s",
    appearance: appearance !== 'warning' ? 'white' : 'default'
  }, title), /*#__PURE__*/createElement("div", {
    onClick: onCloseHandler
  }, /*#__PURE__*/createElement("div", {
    className: iconClass('right')
  }, /*#__PURE__*/createElement(Icon, {
    name: 'close',
    appearance: appearance !== 'warning' ? 'white' : 'default'
  })))), message && /*#__PURE__*/createElement("div", {
    className: "Toast-message"
  }, /*#__PURE__*/createElement(Text, {
    appearance: appearance !== 'warning' ? 'white' : 'default'
  }, message)), !!(actions === null || actions === void 0 ? void 0 : actions.length) && /*#__PURE__*/createElement("div", {
    className: "Toast-actions"
  }, actions.slice(0, 2).map(function (action, index) {
    return /*#__PURE__*/createElement(ActionButton, {
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

/**
 * Tooltip is used to displays floating content in relation to a target when that target is hovered.
 *
 * Tooltips mostly appear either at the top or bottom of their target.
 * The preferred and default side is the bottom.
 *
 * For left navigation with only icons, show tooltip on the right.
 */
var Tooltip = /*#__PURE__*/function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  var _super = _createSuper(Tooltip);

  function Tooltip(props) {
    var _this;

    _classCallCheck(this, Tooltip);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onToggle", function (open) {
      _this.setState({
        open: open
      });
    });

    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(Tooltip, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.setState({
        open: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          appendToBody = _this$props.appendToBody,
          position = _this$props.position,
          tooltip = _this$props.tooltip,
          children = _this$props.children,
          className = _this$props.className,
          triggerClass = _this$props.triggerClass,
          props = _objectWithoutProperties(_this$props, ["appendToBody", "position", "tooltip", "children", "className", "triggerClass"]);

      var tooltipWrapper = /*#__PURE__*/createElement("div", _extends({
        className: "Tooltip"
      }, props), tooltip);
      return /*#__PURE__*/createElement(PopperWrapper, {
        trigger: children,
        placement: this.props.position,
        appendToBody: appendToBody,
        on: 'hover',
        offset: 'Medium',
        onToggle: this.onToggle,
        open: this.state.open,
        triggerClass: triggerClass
      }, tooltipWrapper);
    }
  }]);

  return Tooltip;
}(Component);

_defineProperty(Tooltip, "defaultProps", {
  position: 'bottom',
  appendToBody: true
});

var Modal = /*#__PURE__*/function (_React$Component) {
  _inherits(Modal, _React$Component);

  var _super = _createSuper(Modal);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "modalRef", /*#__PURE__*/createRef());

    _defineProperty(_assertThisInitialized(_this), "element", void 0);

    _defineProperty(_assertThisInitialized(_this), "getUpdatedZIndex", function () {
      if (_this.element === null) return;

      var elements = _this.element.querySelectorAll('.Modal-container');

      if (elements.length <= 1) return;
      var siblings = Array.from(elements).filter(function (el) {
        return el !== _this.modalRef.current;
      });
      var zIndex = -1;
      siblings.forEach(function (element) {
        if (element.classList.contains('Modal-container--open')) {
          var prevZIndex = parseInt(window.getComputedStyle(element).zIndex || '0', 10);
          zIndex = Math.max(zIndex, prevZIndex + 10);
        }
      });
      return zIndex > 0 ? zIndex : undefined;
    });

    var _element = document.querySelector('.Modal-wrapper');

    if (_element === null) {
      _element = document.createElement('div');

      _element.classList.add('Modal-wrapper');

      document.body.appendChild(_element);
    }

    _this.element = _element;
    _this.state = {
      open: props.open,
      animate: props.open
    };
    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (prevProps.open !== this.props.open) {
        if (this.props.open) {
          var zIndex = this.getUpdatedZIndex();
          this.setState({
            zIndex: zIndex,
            open: true,
            animate: true
          });
        } else {
          this.setState({
            animate: false
          });
          setTimeout(function () {
            _this2.setState({
              open: false
            });
          }, 120);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames, _classNames2;

      var _this$state = this.state,
          animate = _this$state.animate,
          open = _this$state.open,
          zIndex = _this$state.zIndex;
      var _this$props = this.props,
          className = _this$props.className,
          backdropClose = _this$props.backdropClose,
          dimension = _this$props.dimension;
      var classes = classNames((_classNames = {
        Modal: true
      }, _defineProperty(_classNames, "Modal--".concat(dimension), dimension), _defineProperty(_classNames, 'Modal--open', open), _defineProperty(_classNames, 'Modal-animation--open', animate), _defineProperty(_classNames, 'Modal-animation--close', !animate), _classNames), className);
      var ContainerClass = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'Modal-container', true), _defineProperty(_classNames2, 'Modal-container--open', open), _classNames2));
      var baseProps = extractBaseProps(this.props);
      var ModalContainer = /*#__PURE__*/createElement("div", {
        "data-test": "DesignSystem-ModalContainer",
        className: ContainerClass,
        "data-layer": true,
        style: {
          zIndex: zIndex
        },
        ref: this.modalRef
      }, /*#__PURE__*/createElement("div", _extends({
        "data-test": "DesignSystem-Modal"
      }, baseProps, {
        className: classes
      }), this.props.children));
      var ModalWrapper = backdropClose ? /*#__PURE__*/createElement(OutsideClick, {
        "data-test": "DesignSystem-Modal--OutsideClick",
        onOutsideClick: function onOutsideClick(event) {
          return open && backdropClose(event, 'OutsideClick');
        }
      }, ModalContainer) : ModalContainer;
      var WrapperElement = /*#__PURE__*/createPortal(ModalWrapper, this.element);
      return /*#__PURE__*/createElement("div", null, WrapperElement, /*#__PURE__*/createElement(Backdrop, {
        open: this.state.open
      }));
    }
  }]);

  return Modal;
}(Component);

var ModalHeader = function ModalHeader(props) {
  var className = props.className,
      heading = props.heading,
      icon = props.icon,
      iconAppearance = props.iconAppearance,
      subHeading = props.subHeading,
      onClose = props.onClose;
  var baseProps = extractBaseProps(props);
  var classes = classNames({
    'Modal-header': true
  }, className);
  var subheaderClasses = classNames(_defineProperty({
    'Modal-header-subheader': true
  }, 'Modal-header-subheader--withIcon', icon));
  return /*#__PURE__*/createElement("div", {
    className: "Modal-header-wrapper"
  }, /*#__PURE__*/createElement("div", _extends({
    "data-test": "DesignSystem-ModalHeader"
  }, baseProps, {
    className: classes
  }), icon && /*#__PURE__*/createElement(Icon, {
    className: "Modal-header-icon",
    name: icon,
    appearance: iconAppearance,
    "data-test": "DesignSystem-ModalHeader--Icon"
  }), heading && /*#__PURE__*/createElement("div", null, /*#__PURE__*/createElement(Heading, {
    size: "s"
  }, heading)), /*#__PURE__*/createElement(Icon, {
    name: 'close',
    className: "Modal-close-icon",
    "data-test": "DesignSystem-ModalHeader--CloseIcon",
    onClick: function onClick(event) {
      return onClose(event, 'IconClick');
    }
  })), subHeading && /*#__PURE__*/createElement("div", {
    className: subheaderClasses,
    "data-test": "DesignSystem-ModalHeader--Subheading"
  }, /*#__PURE__*/createElement(Text, {
    appearance: "subtle"
  }, subHeading)));
};
ModalHeader.displayName = 'ModalHeader';
ModalHeader.defaultProps = {
  iconAppearance: Icon.defaultProps.appearance
};

var ModalDescription = function ModalDescription(props) {
  var title = props.title,
      description = props.description,
      removePadding = props.removePadding,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var classes = classNames(_defineProperty({
    'Modal-description': true
  }, 'pl-6 pr-6', !removePadding), className);
  return /*#__PURE__*/createElement("div", _extends({
    "data-test": "DesignSystem-ModalDescription"
  }, baseProps, {
    className: classes
  }), title && /*#__PURE__*/createElement("div", null, /*#__PURE__*/createElement(Text, {
    weight: "strong",
    "data-test": "DesignSystem-ModalDescription--Title"
  }, title)), description && /*#__PURE__*/createElement("div", null, /*#__PURE__*/createElement(Text, {
    "data-test": "DesignSystem-ModalDescription--Description"
  }, description)));
};
ModalDescription.displayName = 'ModalDescription';

var ModalFooter = function ModalFooter(props) {
  var children = props.children,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var classes = classNames({
    'Modal-footer': true
  }, className);
  return /*#__PURE__*/createElement("div", _extends({
    "data-test": "DesignSystem-ModalFooter"
  }, baseProps, {
    className: classes
  }), children);
};
ModalFooter.displayName = 'ModalFooter';

var Dialog = function Dialog(props) {
  var dimension = props.dimension,
      primaryButtonAppearance = props.primaryButtonAppearance,
      secondaryButtonAppearance = props.secondaryButtonAppearance,
      open = props.open,
      onClose = props.onClose,
      icon = props.icon,
      heading = props.heading,
      title = props.title,
      description = props.description,
      primaryButtonLabel = props.primaryButtonLabel,
      primaryButtonCallback = props.primaryButtonCallback,
      secondaryButtonLabel = props.secondaryButtonLabel,
      secondaryButtonCallback = props.secondaryButtonCallback;
  var baseProps = extractBaseProps(props);
  var modalOptions = {
    open: open,
    dimension: dimension,
    backdropClose: onClose
  };
  var modalHeaderOptions = {
    onClose: onClose,
    icon: icon,
    heading: heading
  };
  var modalDescriptionOptions = {
    title: title,
    description: description
  };
  return /*#__PURE__*/createElement(Modal, _extends({
    "data-test": "DesignSystem-Dialog"
  }, baseProps, modalOptions), /*#__PURE__*/createElement(ModalHeader, modalHeaderOptions), /*#__PURE__*/createElement(ModalDescription, modalDescriptionOptions), /*#__PURE__*/createElement(ModalFooter, null, /*#__PURE__*/createElement(Button, {
    "data-test": "DesignSystem-Dialog--SecondaryButton",
    appearance: secondaryButtonAppearance,
    onClick: secondaryButtonCallback
  }, secondaryButtonLabel), /*#__PURE__*/createElement(Button, {
    "data-test": "DesignSystem-Dialog--PrimaryButton",
    appearance: primaryButtonAppearance,
    onClick: primaryButtonCallback
  }, primaryButtonLabel)));
};

Dialog.displayName = 'Dialog';
Dialog.defaultProps = {
  dimension: 'small',
  primaryButtonAppearance: 'primary',
  secondaryButtonAppearance: 'basic'
};

var useRef = useRef$1,
    useEffect$1 = useEffect$2,
    useState$1 = useState$3;
var ModalBody = function ModalBody(props) {
  var _useState = useState$1(false),
      _useState2 = _slicedToArray(_useState, 2),
      scroll = _useState2[0],
      setScroll = _useState2[1];

  var ref = useRef(null);
  var children = props.children,
      className = props.className;
  var baseProps = extractBaseProps(props);
  useEffect$1(function () {
    var scrollHeight = ref && ref.current ? ref.current.scrollHeight : 0;
    var clientHeight = ref && ref.current ? ref.current.clientHeight : 0;

    if (scrollHeight > clientHeight) {
      setScroll(true);
    }
  }, [ref]);
  var classes = classNames(_defineProperty({
    'Modal-body': true
  }, 'Modal-body--border', scroll), className);
  return /*#__PURE__*/createElement("div", _extends({
    "data-test": "DesignSystem-ModalBody"
  }, baseProps, {
    className: classes,
    ref: ref
  }), children);
};
ModalBody.displayName = 'ModalBody';

var Pagination = function Pagination(props) {
  var _classNames, _classNames2, _classNames3;

  var type = props.type,
      totalPages = props.totalPages,
      onPageChange = props.onPageChange,
      className = props.className;
  var baseProps = extractBaseProps(props);

  var _React$useState = useState$3(props.page),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      page = _React$useState2[0],
      setPage = _React$useState2[1];

  var _React$useState3 = useState$3(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      init = _React$useState4[0],
      setInit = _React$useState4[1];

  useEffect$2(function () {
    setPage(props.page);
  }, [props.page]);
  var wrapperClass = classNames((_classNames = {}, _defineProperty(_classNames, 'Pagination', true), _defineProperty(_classNames, "Pagination--".concat(type), type), _classNames), className);
  var nextButtonWrapperClass = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'Pagination-buttonWrapper', true), _defineProperty(_classNames2, 'Pagination-buttonWrapper--next', true), _classNames2));
  var prevButtonWrapperClass = classNames((_classNames3 = {}, _defineProperty(_classNames3, 'Pagination-buttonWrapper', true), _defineProperty(_classNames3, 'Pagination-buttonWrapper--previous', true), _classNames3));
  useEffect$2(function () {
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
  return /*#__PURE__*/createElement("div", _extends({
    "data-test": "DesignSystem-Pagination"
  }, baseProps, {
    className: wrapperClass
  }), /*#__PURE__*/createElement("div", {
    className: prevButtonWrapperClass
  }, /*#__PURE__*/createElement(Button, {
    onClick: function onClick() {
      return onClickHandler('first');
    },
    disabled: page <= 1,
    appearance: "transparent",
    size: "large",
    icon: "first_page",
    "data-test": "DesignSystem-Pagination--FirstButton"
  }), /*#__PURE__*/createElement("div", {
    "data-test": "DesignSystem-Pagination--Prev",
    className: ['ml-4'].concat(buttonHelper).join(' ')
  }, /*#__PURE__*/createElement(Button, {
    onClick: function onClick() {
      return onClickHandler('prev');
    },
    disabled: page <= 1,
    size: "large",
    icon: "navigate_before",
    "data-test": "DesignSystem-Pagination--PrevButton"
  }))), type === 'jump' && /*#__PURE__*/createElement("div", {
    className: "Pagination-pageIndex"
  }, /*#__PURE__*/createElement(Input, {
    name: "page",
    type: "number",
    size: "large",
    onChange: inputChangeHandler,
    value: "".concat(page === 0 ? '' : page),
    "data-test": "DesignSystem-Pagination--Input"
  }), /*#__PURE__*/createElement(Text, null, " of ".concat(totalPages, " pages"))), /*#__PURE__*/createElement("div", {
    className: nextButtonWrapperClass
  }, /*#__PURE__*/createElement("div", {
    className: ['mr-4'].concat(buttonHelper).join(' ')
  }, /*#__PURE__*/createElement(Button, {
    onClick: function onClick() {
      return onClickHandler('next');
    },
    disabled: page >= totalPages,
    size: "large",
    icon: "navigate_next",
    "data-test": "DesignSystem-Pagination--NextButton"
  })), /*#__PURE__*/createElement(Button, {
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
      rest = _objectWithoutProperties(inputOptions, ["onChange"]);

  var _React$useState = useState$3(value),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      inputValue = _React$useState2[0],
      setInputValue = _React$useState2[1];

  var _React$useState3 = useState$3(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      editing = _React$useState4[0],
      setEditing = _React$useState4[1];

  var _React$useState5 = useState$3(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      showComponent = _React$useState6[0],
      setShowComponent = _React$useState6[1];

  var inputRef = /*#__PURE__*/createRef();
  var baseProps = extractBaseProps(props);
  var EditableInputClass = classNames(_defineProperty({}, 'EditableInput', true), className);
  var EditableDefaultClass = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'EditableInput-default', true), _defineProperty(_classNames2, "EditableInput-default--".concat(size), size), _classNames2));
  var InputClass = classNames(_defineProperty({}, 'EditableInput-Input--tiny', size === 'tiny'));
  var ActionClass = classNames((_classNames4 = {}, _defineProperty(_classNames4, 'EditableInput-actions', true), _defineProperty(_classNames4, "EditableInput-actions--".concat(size), size), _classNames4));
  useEffect$2(function () {
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

  var inputComponent = /*#__PURE__*/createElement(Input, _extends({
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

  var renderChildren = function renderChildren() {
    if (showComponent) {
      return error && errorMessage && editing ? /*#__PURE__*/createElement(Popover, {
        trigger: inputComponent,
        position: "right",
        className: "px-6 py-6 d-flex align-items-center",
        on: "hover"
      }, /*#__PURE__*/createElement(Icon, {
        name: "error",
        appearance: 'alert',
        className: "mr-4"
      }), /*#__PURE__*/createElement(Text, {
        "data-test": "DesignSystem-EditableInput--ErrorPopper",
        appearance: "destructive",
        weight: "medium"
      }, errorMessage)) : inputComponent;
    }

    return /*#__PURE__*/createElement("div", {
      className: EditableDefaultClass,
      "data-test": "DesignSystem-EditableInput--Default"
    }, value || placeholder);
  };

  return /*#__PURE__*/createElement("div", _extends({
    "data-test": "DesignSystem-EditableInput"
  }, baseProps, {
    className: EditableInputClass
  }), /*#__PURE__*/createElement(Editable, {
    onChange: onChangeHandler,
    editing: editing
  }, renderChildren()), editing && /*#__PURE__*/createElement("div", {
    className: ActionClass,
    "data-test": "DesignSystem-EditableInput--Actions"
  }, /*#__PURE__*/createElement(Button, {
    icon: "clear",
    className: "mr-3",
    size: "tiny",
    onClick: setDefaultComponent,
    "data-test": "DesignSystem-EditableInput--Discard"
  }), /*#__PURE__*/createElement(Button, {
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
  var ProgressRingClass = classNames(_defineProperty({
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
  return /*#__PURE__*/createElement("svg", _extends({
    "data-test": "DesignSystem-ProgressRing"
  }, baseProps, {
    className: ProgressRingClass
  }, svgProps), /*#__PURE__*/createElement("circle", _extends({
    className: "Ring-background"
  }, circleProps)), /*#__PURE__*/createElement("circle", _extends({
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
  var StepClass = classNames((_classNames = {}, _defineProperty(_classNames, 'Step', true), _defineProperty(_classNames, 'Step--active', active), _defineProperty(_classNames, 'Step--disabled', disabled), _classNames));

  var onClickHandle = function onClickHandle() {
    if (disabled) return;
    if (onChange) onChange(label, value);
  };

  var iconAppearance = completed ? 'info' : disabled ? 'disabled' : 'default';
  return /*#__PURE__*/createElement("div", {
    "data-test": "DesignSystem-Step",
    className: StepClass,
    onClick: onClickHandle
  }, /*#__PURE__*/createElement(Icon, {
    "data-test": "DesignSystem-StepIcon",
    name: completed ? 'check_circle' : 'radio_button_unchecked',
    appearance: iconAppearance,
    className: "mr-3 my-4"
  }), label && /*#__PURE__*/createElement(Text, {
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

  var StepperClass = classNames(_defineProperty({}, 'Stepper', true), className);
  return /*#__PURE__*/createElement("div", _extends({
    "data-test": "DesignSystem-Stepper"
  }, baseProps, {
    className: StepperClass
  }), steps.map(function (step, index) {
    var label = step.label,
        value = step.value;
    var activeStep = active === index;
    var completedStep = completed >= index;
    var disabled = completed + 1 < index;
    return /*#__PURE__*/createElement(Step, {
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

var DateRangePicker = /*#__PURE__*/function (_React$Component) {
  _inherits(DateRangePicker, _React$Component);

  var _super = _createSuper(DateRangePicker);

  function DateRangePicker(props) {
    var _this;

    _classCallCheck(this, DateRangePicker);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "monthsInView", void 0);

    _defineProperty(_assertThisInitialized(_this), "getErrors", function (startDate, endDate) {
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

    _defineProperty(_assertThisInitialized(_this), "getInRangeError", function () {
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

    _defineProperty(_assertThisInitialized(_this), "onRangeChangeHandler", function (sDate, eDate) {
      _this.setState({
        init: true,
        startDate: sDate,
        endDate: eDate
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateNav", function (type) {
      var _this$state2 = _this.state,
          startDate = _this$state2.startDate,
          endDate = _this$state2.endDate;

      if (type === 'start') {
        var _getDateInfo6 = getDateInfo(startDate),
            year = _getDateInfo6.year,
            month = _getDateInfo6.month;

        _this.setState({
          yearNav: year,
          monthNav: month
        });
      }

      if (type === 'end') {
        var _getDateInfo7 = getDateInfo(endDate),
            _year = _getDateInfo7.year,
            _month = _getDateInfo7.month;

        _this.setState({
          yearNav: _year,
          monthNav: _month
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeHandler", function (_e, val, type) {
      var _this$props2 = _this.props,
          startInputOptions = _this$props2.startInputOptions,
          endInputOptions = _this$props2.endInputOptions,
          inputFormat = _this$props2.inputFormat,
          validators = _this$props2.validators;
      var _this$state3 = _this.state,
          startDate = _this$state3.startDate,
          endDate = _this$state3.endDate;

      _this.setState({
        open: true
      });

      if (type === 'start') {
        var placeholderChar = startInputOptions.placeholderChar || '_';

        if (val && !val.includes(placeholderChar)) {
          var d = translateToDate(inputFormat, val, validators);

          if (d) {
            _this.setState({
              startDate: d
            });

            if (endDate) {
              var _getDateInfo8 = getDateInfo(endDate),
                  eYear = _getDateInfo8.year,
                  eMonth = _getDateInfo8.month,
                  eDate = _getDateInfo8.date;

              if (compareDate(startDate, 'more', eYear, eMonth, eDate)) {
                _this.setState({
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

          if (_d) _this.setState({
            endDate: _d
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onFocusHandler", function () {
      _this.setState({
        init: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onBlurHandler", function (_e, val, type) {
      var _this$props3 = _this.props,
          startInputOptions = _this$props3.startInputOptions,
          endInputOptions = _this$props3.endInputOptions;

      if (type === 'start') {
        var placeholderChar = startInputOptions.placeholderChar || '_';
        if (!val || val.includes(placeholderChar)) _this.setState({
          startDate: undefined
        });
      }

      if (type === 'end') {
        var _placeholderChar2 = endInputOptions.placeholderChar || '_';

        if (!val || val.includes(_placeholderChar2)) _this.setState({
          endDate: undefined
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onClearHandler", function (type) {
      if (type === 'start') {
        _this.setState({
          init: true,
          startDate: undefined
        });

        _this.updateNav('end');
      }

      if (type === 'end') {
        _this.setState({
          init: true,
          endDate: undefined
        });

        _this.updateNav('start');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onClickHandler", function (type) {
      if (!open) {
        _this.updateNav(type);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onToggleHandler", function (o, type) {
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
        _validators = props.validators;

    var _startDate = convertToDate(props.startDate, _inputFormat, _validators);

    var _endDate = convertToDate(props.endDate, _inputFormat, _validators);

    var _this$getErrors = _this.getErrors(_startDate, _endDate),
        _startError = _this$getErrors.startError,
        _endError = _this$getErrors.endError;

    _this.state = {
      startDate: _startDate,
      endDate: _endDate,
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
        var _this$props4 = this.props,
            inputFormat = _this$props4.inputFormat,
            validators = _this$props4.validators;
        var d = convertToDate(this.props.startDate, inputFormat, validators);
        this.setState({
          startDate: d
        });
      }

      if (prevProps.endDate !== this.props.endDate) {
        var _this$props5 = this.props,
            _inputFormat2 = _this$props5.inputFormat,
            _validators2 = _this$props5.validators;

        var _d2 = convertToDate(this.props.endDate, _inputFormat2, _validators2);

        this.setState({
          endDate: _d2
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
        var _this$props6 = this.props,
            onRangeChange = _this$props6.onRangeChange,
            outputFormat = _this$props6.outputFormat;
        var _this$state4 = this.state,
            _startDate3 = _this$state4.startDate,
            _endDate3 = _this$state4.endDate;

        var _this$getErrors2 = this.getErrors(_startDate3, _endDate3),
            startError = _this$getErrors2.startError,
            endError = _this$getErrors2.endError;

        this.setState({
          startError: startError,
          endError: endError
        });

        if (onRangeChange) {
          var inRangeError = this.getInRangeError();
          var sValue = translateToString$1(outputFormat, _startDate3);
          var eValue = translateToString$1(outputFormat, _endDate3);

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
      var _this$props7 = this.props,
          startDateProp = _this$props7.startDate,
          endDateProp = _this$props7.endDate,
          yearNavProp = _this$props7.yearNav,
          monthNavProp = _this$props7.monthNav,
          open = _this$props7.open,
          inputFormat = _this$props7.inputFormat,
          outputFormat = _this$props7.outputFormat,
          startInputOptions = _this$props7.startInputOptions,
          endInputOptions = _this$props7.endInputOptions,
          validators = _this$props7.validators,
          withInput = _this$props7.withInput,
          position = _this$props7.position,
          disabledBefore = _this$props7.disabledBefore,
          disabledAfter = _this$props7.disabledAfter,
          onRangeChange = _this$props7.onRangeChange,
          rangeLimit = _this$props7.rangeLimit,
          rest = _objectWithoutProperties(_this$props7, ["startDate", "endDate", "yearNav", "monthNav", "open", "inputFormat", "outputFormat", "startInputOptions", "endInputOptions", "validators", "withInput", "position", "disabledBefore", "disabledAfter", "onRangeChange", "rangeLimit"]);

      var _this$state5 = this.state,
          startDate = _this$state5.startDate,
          endDate = _this$state5.endDate,
          yearNav = _this$state5.yearNav,
          monthNav = _this$state5.monthNav;
      return /*#__PURE__*/createElement(Calendar, _extends({}, rest, {
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
      var _this2 = this;

      var _this$props8 = this.props,
          withInput = _this$props8.withInput,
          startInputOptions = _this$props8.startInputOptions,
          endInputOptions = _this$props8.endInputOptions,
          inputFormat = _this$props8.inputFormat,
          position = _this$props8.position,
          validators = _this$props8.validators;
      var _this$state6 = this.state,
          init = _this$state6.init,
          startDate = _this$state6.startDate,
          endDate = _this$state6.endDate,
          startError = _this$state6.startError,
          endError = _this$state6.endError,
          open = _this$state6.open;

      if (withInput) {
        var mask = date$1[inputFormat];
        var showStartError = startInputOptions.required && startError && init;
        var showEndError = endInputOptions.required && endError && init;

        var inputValidator = function inputValidator(val) {
          return isValid(validators, val, inputFormat);
        };

        var trigger = /*#__PURE__*/createElement(Row, null, /*#__PURE__*/createElement(Column, {
          size: '6',
          sizeXS: '12',
          className: "DateRangePicker-input DateRangePicker-input--startDate"
        }, startInputOptions.label && /*#__PURE__*/createElement(Label, {
          required: startInputOptions.required,
          withInput: true
        }, startInputOptions.label), /*#__PURE__*/createElement(InputMask, _extends({
          icon: "events",
          placeholder: inputFormat
        }, startInputOptions, {
          mask: mask,
          value: startDate ? translateToString$1(inputFormat, startDate) : '',
          onFocus: this.onFocusHandler,
          onChange: function onChange(e, val) {
            _this2.onChangeHandler(e, val || '', 'start');
          },
          onBlur: function onBlur(e, val) {
            _this2.onBlurHandler(e, val || '', 'start');
          },
          onClear: function onClear() {
            return _this2.onClearHandler('start');
          },
          onClick: function onClick() {
            return _this2.onClickHandler('start');
          },
          error: showStartError,
          caption: showStartError ? startInputOptions.caption || 'Invalid value' : '',
          validators: [inputValidator]
        }))), /*#__PURE__*/createElement(Column, {
          size: '6',
          sizeXS: '12',
          className: "DateRangePicker-input DateRangePicker-input--endDate"
        }, endInputOptions.label && /*#__PURE__*/createElement(Label, {
          required: endInputOptions.required,
          withInput: true
        }, endInputOptions.label), /*#__PURE__*/createElement(InputMask, _extends({
          icon: "events",
          placeholder: inputFormat
        }, endInputOptions, {
          mask: mask,
          value: endDate ? translateToString$1(inputFormat, endDate) : '',
          onChange: function onChange(e, val) {
            _this2.onChangeHandler(e, val || '', 'end');
          },
          onBlur: function onBlur(e, val) {
            _this2.onBlurHandler(e, val || '', 'end');
          },
          onClear: function onClear() {
            return _this2.onClearHandler('end');
          },
          onClick: function onClick() {
            return _this2.onClickHandler('end');
          },
          error: showEndError,
          caption: showEndError ? endInputOptions.caption || 'Invalid value' : '',
          validators: [inputValidator]
        }))));
        return /*#__PURE__*/createElement(Popover, {
          trigger: trigger,
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

  return DateRangePicker;
}(Component);

_defineProperty(DateRangePicker, "defaultProps", _objectSpread2(_objectSpread2({}, Calendar.defaultProps), {}, {
  monthsInView: 2,
  position: 'bottom',
  inputFormat: 'mm/dd/yyyy',
  outputFormat: 'mm/dd/yyyy',
  validators: [date],
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

  var _React$useState = useState$3(props.active && props.active < totalTabs ? props.active : 0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      active = _React$useState2[0],
      setActiveTab = _React$useState2[1];

  useEffect$2(function () {
    setActiveTab(props.active && props.active < totalTabs ? props.active : 0);
  }, [props.active]);
  var wrapperClass = classNames(_defineProperty({}, 'TabsWrapper', true), className);

  var tabClickHandler = function tabClickHandler(tabIndex) {
    setActiveTab(tabIndex);
    if (onTabChange) onTabChange(tabIndex);
  };

  var TabsHeader = tabs.map(function (child, index) {
    var _classNames2;

    var _child$props = child.props,
        label = _child$props.label,
        disabled = _child$props.disabled;
    var tabHeaderClass = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'Tab', true), _defineProperty(_classNames2, 'Tab--disabled', disabled), _defineProperty(_classNames2, 'Tab--active', !disabled && active === index), _classNames2));
    return /*#__PURE__*/createElement("div", {
      "data-test": "DesignSystem-Tabs--Header",
      key: index,
      className: tabHeaderClass,
      onClick: function onClick() {
        return !disabled && tabClickHandler(index);
      }
    }, label);
  });
  return /*#__PURE__*/createElement("div", _extends({
    "data-test": "DesignSystem-TabsWrapper"
  }, baseProps, {
    className: wrapperClass
  }), /*#__PURE__*/createElement("div", {
    className: "TabsWrapper-header"
  }, TabsHeader), /*#__PURE__*/createElement("div", {
    className: "TabsWrapper-content",
    "data-test": "DesignSystem-Tabs--Content"
  }, tabs[active]));
};
TabsWrapper.displayName = 'TabsWrapper';

var Tab = function Tab(props) {
  var children = props.children;
  return /*#__PURE__*/createElement(Fragment, null, children);
};
Tab.displayName = 'Tab';

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
  if (typeof width === 'number') return width;

  if (width.charAt(width.length - 1) === '%' && this.state.init) {
    var withCheckbox = this.props.withCheckbox;
    var checkboxWidth = withCheckbox ? this.gridRef.querySelector('.Grid-cell--checkbox').clientWidth : 0;
    var gridWidth = this.gridRef.clientWidth - checkboxWidth;
    return gridWidth * (+width.slice(0, -1) / 100);
  }

  return 0;
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
var getSelectAll$1 = function getSelectAll(data) {
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
      headCellTooltip = _this$props.headCellTooltip;
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
  var el = /*#__PURE__*/createRef();
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
  var classes = classNames({
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
    return /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement(Text, {
      weight: "strong",
      className: "ellipsis--noWrap"
    }, schema.displayName), sorting && /*#__PURE__*/createElement("div", {
      className: "Grid-sortingIcons"
    }, sorted ? sorted === 'asc' ? /*#__PURE__*/createElement(Icon, {
      name: "arrow_downward"
    }) : /*#__PURE__*/createElement(Icon, {
      name: "arrow_upward"
    }) : /*#__PURE__*/createElement(Icon, {
      name: "unfold_more"
    })));
  };

  return /*#__PURE__*/createElement("div", {
    key: name,
    className: classes,
    ref: el
  }, /*#__PURE__*/createElement("div", {
    className: "Grid-cellContent",
    onClick: function onClick() {
      if (!loading && sorting) {
        if (sorted === 'asc') _this.onMenuChange(name, 'sortDesc');
        if (sorted === 'desc') _this.onMenuChange(name, 'unsort');
        if (!sorted) _this.onMenuChange(name, 'sortAsc');
      }
    }
  }, loading && !init ? /*#__PURE__*/createElement(Placeholder, {
    withImage: false
  }, /*#__PURE__*/createElement(PlaceholderParagraph, {
    length: "medium"
  })) : /*#__PURE__*/createElement(Fragment, null, headCellTooltip ? /*#__PURE__*/createElement(Tooltip, {
    position: "top-start",
    triggerClass: "w-100 overflow-hidden",
    tooltip: schema.displayName
  }, renderLabel()) : renderLabel())), filters && /*#__PURE__*/createElement(Fragment, null, loading && !init ? /*#__PURE__*/createElement("span", null, /*#__PURE__*/createElement(Placeholder, null)) : /*#__PURE__*/createElement("div", null, /*#__PURE__*/createElement(Dropdown, {
    menu: true,
    showApplyButton: true,
    withCheckbox: true,
    triggerOptions: {
      customTrigger: function customTrigger() {
        return /*#__PURE__*/createElement(Button, {
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
  }))), showMenu && /*#__PURE__*/createElement(Fragment, null, loading && !init ? /*#__PURE__*/createElement("span", {
    className: "ml-4"
  }, /*#__PURE__*/createElement(Placeholder, null)) : /*#__PURE__*/createElement("div", null, /*#__PURE__*/createElement(Dropdown, {
    key: "".concat(name, "-").concat(sorted, "-").concat(pinned),
    menu: true,
    optionType: "WITH_ICON",
    triggerOptions: {
      customTrigger: function customTrigger() {
        return /*#__PURE__*/createElement(Button, {
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
  }))), schema.resizable && /*#__PURE__*/createElement("span", {
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
    loading: loading
  };
  return /*#__PURE__*/createElement("div", {
    className: "Grid-cellContent"
  }, colIndex === 0 && nestedRows && /*#__PURE__*/createElement(Icon, {
    className: "Grid-nestedRowTrigger",
    name: expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down',
    size: 20,
    onClick: function onClick(e) {
      e.stopPropagation();
      setExpanded(!expanded);
    }
  }), schema.cellRenderer ? schema.cellRenderer(cellProps) : /*#__PURE__*/createElement(GridCell, _extends({
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

  var cellClass = classNames({
    'Grid-cell': true,
    'Grid-cell--head': head,
    'Grid-cell--body': !head,
    'Grid-cell--separator': !firstCell && (schema.separator !== undefined ? schema.separator : separator),
    'Grid-cell--nestedRow': !head && colIndex === 0 && nestedRows
  });
  if (hidden) return null;
  return /*#__PURE__*/createElement("div", {
    key: "".concat(rowIndex, "-").concat(colIndex),
    className: cellClass,
    draggable: head && draggable,
    onDragStart: function onDragStart(e) {
      e.dataTransfer.setData('name', name);
      if (pinned) e.dataTransfer.setData('type', pinned);
    },
    onDragOver: function onDragOver(e) {
      return e.preventDefault();
    },
    onDrop: function onDrop(e) {
      var from = {
        name: e.dataTransfer.getData('name'),
        type: e.dataTransfer.getData('type')
      };
      var to = {
        name: name,
        type: pinned || ''
      };
      if (from.type === to.type) _this.reorderCol(from.name, to.name);
    },
    style: {
      visibility: !init ? 'hidden' : 'visible',
      width: getWidth.call(_this, schema.width || width),
      minWidth: getWidth.call(_this, schema.minWidth || minWidth),
      maxWidth: getWidth.call(_this, schema.maxWidth || maxWidth)
    }
  }, head ? /*#__PURE__*/createElement(HeaderCell, {
    _this: _this,
    draggable: draggable,
    colIndex: colIndex,
    schema: schema
  }) : /*#__PURE__*/createElement(BodyCell, {
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
    return /*#__PURE__*/createElement("div", {
      className: "Grid-cell Grid-cell--head Grid-cell--checkbox"
    }, loading ? /*#__PURE__*/createElement(Placeholder, null) : /*#__PURE__*/createElement(Checkbox, _extends({}, selectAll, {
      onChange: _this.onSelectAll
    })));
  };

  var renderSchema = function renderSchema(currSchema, shouldRenderCheckbox, pinned) {
    if (currSchema.length) {
      var _classNames;

      var classes = classNames((_classNames = {
        'Grid-cellGroup': true,
        'Grid-cellGroup--pinned': pinned
      }, _defineProperty(_classNames, "Grid-cellGroup--pinned-".concat(pinned), pinned), _defineProperty(_classNames, 'Grid-cellGroup--main', !pinned), _classNames));
      return /*#__PURE__*/createElement("div", {
        className: classes
      }, renderCheckbox(shouldRenderCheckbox), currSchema.map(function (s, index) {
        var cI = pinned === 'left' ? index : leftPinnedSchema.length + index;
        if (pinned === 'right') cI += unpinnedSchema.length;
        return /*#__PURE__*/createElement(Cell, {
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

  return /*#__PURE__*/createElement("div", {
    className: "Grid-head"
  }, /*#__PURE__*/createElement("div", {
    className: "Grid-row Grid-row--head"
  }, renderSchema(leftPinnedSchema, !!leftPinnedSchema.length, 'left'), renderSchema(unpinnedSchema, !leftPinnedSchema.length && !!unpinnedSchema.length), renderSchema(rightPinnedSchema, false, 'right')));
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

var GridRow = function GridRow(props) {
  var _this = props._this,
      schema = props.schema,
      data = props.data,
      withCheckbox = props.withCheckbox,
      rI = props.rowIndex;
  var rowRef = useRef$1(null);

  var _React$useState = useState$3(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      expanded = _React$useState2[0],
      setExpanded = _React$useState2[1];

  var rowClasses = classNames('Grid-row', 'Grid-row--body', {
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
    return /*#__PURE__*/createElement("div", {
      className: "Grid-cell Grid-cell--body Grid-cell--checkbox",
      onClick: function onClick(e) {
        return e.stopPropagation();
      }
    }, loading ? /*#__PURE__*/createElement(Placeholder, null) : /*#__PURE__*/createElement(Checkbox, {
      checked: !!data._selected,
      onChange: function onChange(event) {
        _this.onSelect(rI, event.target.checked);
      }
    }));
  };

  var renderSchema = function renderSchema(currSchema, shouldRenderCheckbox, pinned) {
    if (currSchema.length) {
      var _classNames;

      var classes = classNames((_classNames = {
        'Grid-cellGroup': true,
        'Grid-cellGroup--pinned': pinned
      }, _defineProperty(_classNames, "Grid-cellGroup--pinned-".concat(pinned), pinned), _defineProperty(_classNames, 'Grid-cellGroup--main', !pinned), _classNames));
      return /*#__PURE__*/createElement("div", {
        className: classes
      }, renderCheckbox(shouldRenderCheckbox), currSchema.map(function (s, index) {
        var cI = pinned === 'left' ? index : leftPinnedSchema.length + index;
        if (pinned === 'right') cI += unpinnedSchema.length;
        return /*#__PURE__*/createElement(Cell, {
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

  return /*#__PURE__*/createElement("div", {
    className: "Grid-rowWrapper"
  }, /*#__PURE__*/createElement("div", {
    className: rowClasses,
    onClick: onClickHandler,
    ref: rowRef
  }, renderSchema(leftPinnedSchema, !!leftPinnedSchema.length, 'left'), renderSchema(unpinnedSchema, !leftPinnedSchema.length && !!unpinnedSchema.length), renderSchema(rightPinnedSchema, false, 'right')), nestedRows && expanded && /*#__PURE__*/createElement("div", {
    style: {
      width: rowRef.current ? rowRef.current.clientWidth : 0
    }
  }, /*#__PURE__*/createElement(GridNestedRow, {
    _this: _this,
    data: data,
    rowIndex: rI
  })));
};

var GridBody = function GridBody(props) {
  var _this = props._this,
      schema = props.schema,
      data = props.data,
      withCheckbox = props.withCheckbox,
      offset = props.offset,
      inView = props.inView,
      avgRowHeight = props.avgRowHeight;
  var buffer = 50;
  var _this$props = _this.props,
      loading = _this$props.loading,
      error = _this$props.error,
      withPagination = _this$props.withPagination,
      page = _this$props.page,
      pageSize = _this$props.pageSize,
      totalRecords = _this$props.totalRecords,
      errorTemplate = _this$props.errorTemplate;

  if (!loading && error) {
    return errorTemplate ? typeof errorTemplate === 'function' ? errorTemplate({}) : errorTemplate : /*#__PURE__*/createElement(Heading, null, "No results found");
  }

  var totalPages = Math.ceil(totalRecords / pageSize);
  var dummyRows = withPagination && page === totalPages ? totalRecords - (page - 1) * pageSize : pageSize;
  var rows = loading ? Array.from({
    length: dummyRows
  }, function () {
    return {};
  }) : data.slice(offset, offset + buffer);
  var topPadding = Math.max(0, offset * avgRowHeight);
  var bottomPadding = Math.max(0, ((withPagination ? dummyRows : data.length) - inView - offset - 1) * avgRowHeight);
  return /*#__PURE__*/createElement("div", {
    className: "Grid-body"
  }, !loading && /*#__PURE__*/createElement("div", {
    className: "GridBody-padding",
    style: {
      height: topPadding
    }
  }), rows.map(function (d, rI) {
    return /*#__PURE__*/createElement(GridRow, {
      key: offset + rI,
      _this: _this,
      rowIndex: offset + rI,
      data: d,
      schema: schema,
      withCheckbox: withCheckbox
    });
  }), !loading && /*#__PURE__*/createElement("div", {
    className: "GridBody-padding",
    style: {
      height: bottomPadding
    }
  }));
};

var MainGrid = function MainGrid(props) {
  var _classNames;

  var _this = props._this,
      schema = props.schema,
      className = props.className;
  var baseProps = extractBaseProps(props);
  var _this$props = _this.props,
      loading = _this$props.loading,
      error = _this$props.error,
      type = _this$props.type,
      size = _this$props.size,
      showHead = _this$props.showHead,
      draggable = _this$props.draggable,
      withCheckbox = _this$props.withCheckbox,
      data = _this$props.data;
  var init = _this.state.init;
  var classes = classNames((_classNames = {
    Grid: 'true'
  }, _defineProperty(_classNames, "Grid--".concat(type), type), _defineProperty(_classNames, "Grid--".concat(size), size), _classNames), className);
  var minRowHeight = {
    comfortable: 40,
    standard: 40,
    compressed: 32,
    tight: 24
  };
  var initialState = {
    offset: 0,
    avgRowHeight: minRowHeight[size],
    inView: 20
  };

  var _React$useState = useState$3(initialState),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  useEffect$2(function () {
    if (init) {
      setState({
        offset: offset,
        avgRowHeight: avgRowHeight,
        inView: _this.gridRef.scrollHeight / avgRowHeight
      });
    }
  }, [init]);
  useEffect$2(function () {
    setState(initialState);

    var el = _this.gridRef.querySelector('.Grid');

    if (el) el.scrollTop = 0;
  }, [loading, error]);
  var offset = state.offset,
      avgRowHeight = state.avgRowHeight,
      inView = state.inView;

  var onScrollHandler = function onScrollHandler() {
    if (!loading) {
      if (_this.gridRef && _this.gridRef) {
        var el = _this.gridRef.querySelector('.Grid');

        if (el) {
          var scrollTop = el.scrollTop;
          var items = el.querySelectorAll('.Grid-body .Grid-row');
          var newScroll = Math.floor(scrollTop - offset * avgRowHeight);
          var newInView = 0;
          var currScroll = 0;
          var i = 0;

          while (i < items.length && currScroll + items[i].clientHeight <= el.clientHeight) {
            var rowHeight = items[i].clientHeight;
            currScroll += rowHeight;
            newInView++;
            i++;
          }

          if (newScroll > 0) {
            currScroll = newScroll;
            var newOffset = offset;
            var newAvgHeight = avgRowHeight;
            i = 0;

            while (i < items.length && currScroll >= items[i].clientHeight) {
              var _rowHeight = items[i].clientHeight;
              currScroll -= _rowHeight;
              newAvgHeight = (newOffset * newAvgHeight + _rowHeight) / (newOffset + 1);
              newOffset++;
              i++;
            }

            newOffset = newOffset < data.length - inView ? newOffset : data.length - inView - 1;

            if (newOffset > offset) {
              setState(_objectSpread2(_objectSpread2({}, state), {}, {
                inView: newInView,
                offset: newOffset,
                avgRowHeight: newAvgHeight
              }));
            }
          } else {
            if (avgRowHeight) {
              var diff = Math.floor(newScroll / avgRowHeight) || -1;

              var _newOffset = offset + diff;

              if (_newOffset < offset) {
                setState(_objectSpread2(_objectSpread2({}, state), {}, {
                  inView: newInView,
                  offset: _newOffset < 0 ? 0 : _newOffset
                }));
              }
            }
          }
        }
      }
    }
  };

  return /*#__PURE__*/createElement("div", _extends({}, baseProps, {
    className: classes,
    onScroll: onScrollHandler
  }), showHead && /*#__PURE__*/createElement(GridHead, {
    key: 'GridHead',
    _this: _this,
    schema: schema,
    draggable: draggable,
    withCheckbox: withCheckbox
  }), /*#__PURE__*/createElement(GridBody, {
    key: 'GridBody',
    _this: _this,
    schema: schema,
    data: data,
    withCheckbox: withCheckbox,
    offset: offset,
    inView: inView,
    avgRowHeight: avgRowHeight
  }));
};

var Grid = /*#__PURE__*/function (_React$Component) {
  _inherits(Grid, _React$Component);

  var _super = _createSuper(Grid);

  function Grid(props) {
    var _this;

    _classCallCheck(this, Grid);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "gridRef", null);

    _defineProperty(_assertThisInitialized(_this), "updateRenderedData", debounce(300, function (options) {
      var _this$props = _this.props,
          page = _this$props.page,
          pageSize = _this$props.pageSize,
          updateData = _this$props.updateData,
          withPagination = _this$props.withPagination,
          sortingList = _this$props.sortingList,
          filterList = _this$props.filterList;

      var opts = _objectSpread2(_objectSpread2({}, options), {}, {
        page: page,
        pageSize: pageSize,
        sortingList: sortingList,
        filterList: filterList
      });

      if (!withPagination) {
        delete opts.page;
        delete opts.pageSize;
      }

      if (updateData) {
        updateData(opts);
      }
    }));

    _defineProperty(_assertThisInitialized(_this), "updateRenderedSchema", function (newSchema) {
      var updateSchema = _this.props.updateSchema;

      if (updateSchema) {
        updateSchema(newSchema);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateColumnSchema", function (name, schemaUpdate) {
      var schema = _this.props.schema;

      var newSchema = _toConsumableArray(schema);

      var ind = newSchema.findIndex(function (s) {
        return s.name === name;
      });
      newSchema[ind] = _objectSpread2(_objectSpread2({}, newSchema[ind]), schemaUpdate);

      _this.updateRenderedSchema(newSchema);
    });

    _defineProperty(_assertThisInitialized(_this), "reorderCol", function (from, to) {
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

    _defineProperty(_assertThisInitialized(_this), "updateSortingList", function (sortingList) {
      var updateSortingList = _this.props.updateSortingList;

      if (updateSortingList) {
        updateSortingList(sortingList);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateFilterList", function (filterList) {
      var updateFilterList = _this.props.updateFilterList;

      if (updateFilterList) {
        updateFilterList(filterList);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMenuChange", function (name, selected) {
      switch (selected) {
        case 'sortAsc':
          sortColumn.call(_assertThisInitialized(_this), name, 'asc');
          break;

        case 'sortDesc':
          sortColumn.call(_assertThisInitialized(_this), name, 'desc');
          break;

        case 'unsort':
          sortColumn.call(_assertThisInitialized(_this), name, 'unsort');
          break;

        case 'pinLeft':
          pinColumn.call(_assertThisInitialized(_this), name, 'left');
          break;

        case 'pinRight':
          pinColumn.call(_assertThisInitialized(_this), name, 'right');
          break;

        case 'unpin':
          pinColumn.call(_assertThisInitialized(_this), name, 'unpin');
          break;

        case 'hide':
          hideColumn.call(_assertThisInitialized(_this), name, true);
          break;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onFilterChange", function (name, selected) {
      var filterList = _this.props.filterList;

      var newFilterList = _objectSpread2(_objectSpread2({}, filterList), {}, _defineProperty({}, name, selected));

      _this.updateFilterList(newFilterList);
    });

    _defineProperty(_assertThisInitialized(_this), "onSelect", function (rowIndex, selected) {
      var onSelect = _this.props.onSelect;

      if (onSelect) {
        onSelect(rowIndex, selected);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectAll", function (event) {
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

  _createClass(Grid, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var baseProps = extractBaseProps(this.props);
      var schema = getSchema(this);
      return /*#__PURE__*/createElement("div", {
        className: "Grid-wrapper",
        ref: function ref(el) {
          _this2.gridRef = el;

          if (el && !_this2.state.init) {
            _this2.setState({
              init: true
            });
          }
        }
      }, /*#__PURE__*/createElement(MainGrid, _extends({}, baseProps, {
        _this: this,
        schema: schema
      })));
    }
  }]);

  return Grid;
}(Component);

_defineProperty(Grid, "defaultProps", {
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
  filterList: {}
});

var renderTitle = function renderTitle(props) {
  var tooltip = props.tooltip,
      cellData = props.cellData;
  var children = cellData.title;

  if (children !== undefined && children !== null) {
    if (tooltip) {
      return /*#__PURE__*/createElement(Tooltip, {
        tooltip: children,
        position: 'top-start',
        triggerClass: "w-100 overflow-hidden"
      }, /*#__PURE__*/createElement(Text, {
        className: "w-100 ellipsis"
      }, children));
    }

    return /*#__PURE__*/createElement(Text, {
      className: "w-100 ellipsis"
    }, children);
  }

  return null;
};

var renderMetaList = function renderMetaList(props) {
  var cellData = props.cellData;
  var metaList = cellData.metaList;

  if (metaList) {
    return /*#__PURE__*/createElement("div", {
      className: "GridCell-metaList"
    }, metaList.map(function (list, index) {
      return /*#__PURE__*/createElement(Text, {
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
    return /*#__PURE__*/createElement(Avatar, {
      className: "mr-5",
      firstName: firstName,
      lastName: lastName
    });
  }

  if (title) {
    return /*#__PURE__*/createElement(Avatar, {
      className: "mr-5"
    }, title);
  }

  return null;
};

var renderIcon = function renderIcon(props) {
  var cellData = props.cellData;
  var icon = cellData.icon;

  if (icon) {
    return /*#__PURE__*/createElement(Icon, {
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
    return /*#__PURE__*/createElement(StatusHint, {
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
  var cellClass = classNames(_defineProperty({}, 'GridCell', true));

  switch (cellType) {
    case 'DEFAULT':
      return /*#__PURE__*/createElement("div", {
        className: "".concat(cellClass, " GridCell--align-").concat(align, " GridCell--default")
      }, loading ? /*#__PURE__*/createElement(PlaceholderParagraph, {
        length: "medium"
      }) : renderTitle({
        tooltip: tooltip,
        cellData: cellData
      }));

    case 'WITH_META_LIST':
      return /*#__PURE__*/createElement("div", {
        className: "".concat(cellClass, " GridCell--metaList")
      }, loading ? /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement(PlaceholderParagraph, {
        length: "medium"
      }), /*#__PURE__*/createElement(PlaceholderParagraph, {
        length: "large",
        size: "xxs"
      })) : /*#__PURE__*/createElement(Fragment, null, renderTitle({
        tooltip: tooltip,
        cellData: cellData
      }), renderMetaList({
        cellData: cellData
      })));

    case 'AVATAR':
      if (loading) {
        return /*#__PURE__*/createElement(Placeholder, {
          className: "GridCell--align-".concat(align),
          imageSize: 'medium',
          round: true
        });
      }

      return /*#__PURE__*/createElement("div", {
        className: "".concat(cellClass, " GridCell--align-").concat(align, " GridCell--avatar")
      }, size !== 'tight' && renderAvatar({
        cellData: cellData
      }));

    case 'AVATAR_WITH_TEXT':
      if (loading) {
        return /*#__PURE__*/createElement(Placeholder, {
          imageSize: 'medium',
          round: true
        }, /*#__PURE__*/createElement(PlaceholderParagraph, {
          className: "ml-3",
          length: "medium"
        }));
      }

      return /*#__PURE__*/createElement("div", {
        className: "".concat(cellClass, " GridCell--avatarWithText")
      }, size !== 'tight' && renderAvatar({
        cellData: cellData
      }), renderTitle({
        tooltip: tooltip,
        cellData: cellData
      }));

    case 'AVATAR_WITH_META_LIST':
      if (loading) {
        return /*#__PURE__*/createElement(Placeholder, {
          imageSize: 'medium',
          round: true
        }, /*#__PURE__*/createElement(PlaceholderParagraph, {
          className: "ml-3",
          length: "medium"
        }), /*#__PURE__*/createElement(PlaceholderParagraph, {
          className: "ml-3",
          length: "large"
        }));
      }

      return /*#__PURE__*/createElement("div", {
        className: "".concat(cellClass, " GridCell--avatarWithText")
      }, size !== 'tight' && renderAvatar({
        cellData: cellData
      }), /*#__PURE__*/createElement("div", {
        className: "GridCell-metaListWrapper"
      }, renderTitle({
        tooltip: tooltip,
        cellData: cellData
      }), renderMetaList({
        cellData: cellData
      })));

    case 'ICON':
      if (loading) {
        return /*#__PURE__*/createElement(Placeholder, {
          className: "GridCell--align-".concat(align),
          imageSize: 'small',
          round: true
        });
      }

      return /*#__PURE__*/createElement("div", {
        className: "".concat(cellClass, " GridCell--align-").concat(align, " GridCell--icon")
      }, renderIcon({
        cellData: cellData
      }));

    case 'STATUS_HINT':
      return /*#__PURE__*/createElement("div", {
        className: "".concat(cellClass, " GridCell--align-").concat(align, " GridCell--statusHint")
      }, loading ? /*#__PURE__*/createElement(Placeholder, {
        className: "w-75 flex-grow-0",
        imageSize: 'small',
        round: true
      }, /*#__PURE__*/createElement(PlaceholderParagraph, {
        length: "large"
      })) : renderStatusHint({
        cellData: cellData
      }));
  }

  return null;
};
GridCell.displayName = 'GridCell';

var Header = function Header(props) {
  var loading = props.loading,
      error = props.error,
      data = props.data,
      schema = props.schema,
      withSearch = props.withSearch,
      showHead = props.showHead,
      withPagination = props.withPagination,
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
      allowSelectAll = props.allowSelectAll;

  var _React$useState = useState$3(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      selectAllRecords = _React$useState2[0],
      setSelectAllRecords = _React$useState2[1];

  var _React$useState3 = useState$3(true),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      flag = _React$useState4[0],
      setFlag = _React$useState4[1];

  useEffect$2(function () {
    setFlag(!flag);
  }, [schema]);
  useEffect$2(function () {
    if (selectAll && selectAll.checked) {
      if (onSelectAll) onSelectAll(true, selectAllRecords);
    }
  }, [selectAllRecords]);
  useEffect$2(function () {
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
    var newFilterList = _objectSpread2(_objectSpread2({}, filterList), {}, _defineProperty({}, name, filters));

    if (updateFilterList) {
      updateFilterList(newFilterList);
    }
  };

  var onHideColumn = function onHideColumn(selected) {
    var newSchema = schema.map(function (s) {
      return _objectSpread2(_objectSpread2({}, s), {}, {
        hidden: selected.findIndex(function (val) {
          return val === s.name;
        }) === -1
      });
    });
    if (updateSchema) updateSchema(newSchema);
  };

  var pinnedSchema = schema.filter(function (s) {
    return s.pinned;
  });
  var leftPinnedSchema = pinnedSchema.filter(function (s) {
    return s.pinned === 'left';
  });
  var rightPinnedSchema = pinnedSchema.filter(function (s) {
    return s.pinned === 'right';
  });
  var unpinnedSchema = schema.filter(function (s) {
    return !s.pinned;
  });
  var renderedSchema = [].concat(_toConsumableArray(leftPinnedSchema), _toConsumableArray(unpinnedSchema), _toConsumableArray(rightPinnedSchema));
  var columnOptions = renderedSchema.map(function (s) {
    return {
      label: s.displayName,
      value: s.name,
      selected: !s.hidden
    };
  });
  var selectedCount = data.filter(function (d) {
    return d._selected;
  }).length;
  var label = withCheckbox && selectedCount ? selectAllRecords ? "Selected all ".concat(totalRecords, " items") : "Selected ".concat(selectedCount, " items on this page") : "Showing ".concat(!error ? totalRecords : 0, " items");
  return /*#__PURE__*/createElement("div", {
    className: "Header"
  }, /*#__PURE__*/createElement("div", {
    className: "Header-content Header-content--top"
  }, withSearch && /*#__PURE__*/createElement("div", {
    className: "Header-search"
  }, /*#__PURE__*/createElement(Input, {
    name: "GridHeader-search",
    icon: "search",
    placeholder: searchPlaceholder,
    onChange: onSearchChange,
    value: searchTerm,
    onClear: function onClear() {
      return updateSearchTerm && updateSearchTerm('');
    },
    disabled: loading && !getInit(schema)
  })), !showHead && /*#__PURE__*/createElement("div", {
    className: "Header-dropdown"
  }, !showHead && filterSchema.length > 0 && /*#__PURE__*/createElement("div", {
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
    return /*#__PURE__*/createElement(Dropdown, {
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
  }))), children && /*#__PURE__*/createElement("div", {
    className: "Header-actions"
  }, children)), /*#__PURE__*/createElement("div", {
    className: "Header-content Header-content--bottom"
  }, /*#__PURE__*/createElement("div", {
    className: "Header-label"
  }, !showHead && withCheckbox && !loading && /*#__PURE__*/createElement(Checkbox, _extends({}, selectAll, {
    onChange: function onChange(event) {
      if (onSelectAll) onSelectAll(event.target.checked);
    }
  })), loading ? /*#__PURE__*/createElement(Placeholder, {
    withImage: !showHead && withCheckbox
  }, /*#__PURE__*/createElement(PlaceholderParagraph, {
    length: 'small',
    size: 's'
  })) : /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement(Label, null, label), withPagination && (selectAll === null || selectAll === void 0 ? void 0 : selectAll.checked) && allowSelectAll && /*#__PURE__*/createElement("div", {
    className: "ml-4"
  }, !selectAllRecords ? /*#__PURE__*/createElement(Button, {
    size: "tiny",
    onClick: function onClick() {
      return setSelectAllRecords(true);
    }
  }, "Select all ".concat(totalRecords, " items")) : /*#__PURE__*/createElement(Button, {
    size: "tiny",
    onClick: function onClick() {
      return setSelectAllRecords(false);
    }
  }, "Clear Selection")))), dynamicColumn && /*#__PURE__*/createElement("div", {
    className: "Header-hideColumns"
  }, /*#__PURE__*/createElement(Dropdown, {
    key: "".concat(flag),
    triggerSize: 'tiny',
    withCheckbox: true,
    showApplyButton: true,
    options: columnOptions,
    totalOptions: columnOptions.length,
    align: 'left',
    triggerOptions: {
      labelLimit: 0,
      customLabel: function customLabel(selected, totalOptions) {
        return "Showing ".concat(selected, " of ").concat(totalOptions, " columns");
      },
      customTrigger: function customTrigger(triggerLabel) {
        return /*#__PURE__*/createElement(Button, {
          size: "tiny",
          appearance: "transparent",
          icon: "keyboard_arrow_down_filled",
          iconAlign: "right"
        }, triggerLabel ? triggerLabel : "Showing 0 of ".concat(columnOptions.length, " columns"));
      }
    },
    onChange: function onChange(selected) {
      return onHideColumn(selected);
    }
  }))));
};
Header.defaultProps = {
  schema: [],
  data: [],
  searchPlaceholder: 'Search',
  dynamicColumn: true
};

var defaultErrorTemplate = function defaultErrorTemplate(props) {
  var _props$errorType = props.errorType,
      errorType = _props$errorType === void 0 ? 'DEFAULT' : _props$errorType;
  var errorMessages = {
    FAILED_TO_FETCH: 'Failed to fetch data',
    NO_RECORDS_FOUND: 'No results found',
    DEFAULT: 'No results found'
  };
  return /*#__PURE__*/createElement(Heading, null, errorMessages[errorType]);
};

var defaultProps$1 = {
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
 * <pre class="DocPage-codeBlock">
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

    _defineProperty(_assertThisInitialized(_this), "updateData", function () {
      if (_this.state.async) {
        _this.setState({
          loading: true
        });
      }

      _this.debounceUpdate();
    });

    _defineProperty(_assertThisInitialized(_this), "debounceUpdate", debounce(250, function () {
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
            var data = res.data;
            var schema = _this.state.schema.length ? _this.state.schema : res.schema;

            _this.setState({
              data: data,
              schema: schema,
              selectAll: getSelectAll$1(data),
              totalRecords: res.count,
              loading: false,
              error: !data.length,
              errorType: 'NO_RECORDS_FOUND'
            });
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
          selectAll: getSelectAll$1(renderedData),
          schema: renderedSchema,
          data: renderedData
        });
      }
    }));

    _defineProperty(_assertThisInitialized(_this), "onSelect", function (rowIndexes, selected) {
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
          selectAll: getSelectAll$1(newData)
        });
      }

      if (onSelect) {
        onSelect(indexes, selected, rowIndexes === -1 ? [] : newData.filter(function (d) {
          return d._selected;
        }));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectAll", function (selected, selectAll) {
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
        selectAll: getSelectAll$1(newData)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onPageChange", function (newPage) {
      _this.setState({
        page: newPage
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateSchema", function (newSchema) {
      _this.setState({
        schema: newSchema
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateSortingList", function (newSortingList) {
      var multipleSorting = _this.props.multipleSorting;

      _this.setState({
        sortingList: multipleSorting ? _toConsumableArray(newSortingList) : newSortingList.slice(-1),
        page: 1
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateFilterList", function (newFilterList) {
      _this.setState({
        filterList: newFilterList,
        page: 1
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateSearchTerm", function (newSearchTerm) {
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
      selectAll: getSelectAll$1([]),
      searchTerm: undefined
    };

    _this.updateData();

    return _this;
  }

  _createClass(Table, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (!this.state.async) {
        if (prevProps.loading !== this.props.loading || prevProps.error !== this.props.error) {
          var _this$props2 = this.props,
              _this$props2$data = _this$props2.data,
              _data2 = _this$props2$data === void 0 ? [] : _this$props2$data,
              _this$props2$schema = _this$props2.schema,
              schema = _this$props2$schema === void 0 ? [] : _this$props2$schema;

          this.setState({
            data: _data2,
            schema: schema,
            loading: this.props.loading || false,
            error: this.props.error || false,
            errorType: this.props.errorType,
            page: 1,
            totalRecords: _data2.length || 0,
            selectAll: getSelectAll$1([])
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
          this.updateData();
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
          className = _this$props3.className;
      var baseProps = extractBaseProps(this.props);

      var _ref = headerOptions,
          headerChildren = _ref.children,
          headerAttr = _objectWithoutProperties(_ref, ["children"]);

      var classes = className ? " ".concat(className) : '';
      var totalRecords = this.state.totalRecords;
      var totalPages = getTotalPages(totalRecords, pageSize);
      return /*#__PURE__*/createElement("div", _extends({}, baseProps, {
        className: "Table".concat(classes)
      }), withHeader && /*#__PURE__*/createElement("div", {
        className: "Table-header"
      }, /*#__PURE__*/createElement(Header, _extends({}, this.state, {
        // updateData={updateData}
        updateSchema: this.updateSchema // updateSortingList={updateSortingList}
        ,
        updateFilterList: this.updateFilterList,
        updateSearchTerm: this.updateSearchTerm,
        showHead: showHead,
        onSelectAll: this.onSelectAll,
        withCheckbox: withCheckbox,
        withPagination: withPagination
      }, headerAttr), headerChildren)), /*#__PURE__*/createElement("div", {
        className: "Table-grid"
      }, /*#__PURE__*/createElement(Grid, _extends({}, this.state, {
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
        onRowClick: onRowClick
      }))), withPagination && !this.state.loading && !this.state.error && totalPages > 1 && /*#__PURE__*/createElement("div", {
        className: "Table-pagination"
      }, /*#__PURE__*/createElement(Pagination, {
        page: this.state.page,
        totalPages: getTotalPages(totalRecords, pageSize),
        type: paginationType,
        onPageChange: this.onPageChange
      })));
    }
  }]);

  return Table;
}(Component);

_defineProperty(Table, "defaultProps", defaultProps$1);

/**
 * **`List` is a pattern of `Table` with no Head Cells.**
 *
 * Please refer to stories of Table for examples. Simply replace `Table` with `List` to use it.
 */
var List = function List(props) {
  return /*#__PURE__*/createElement(Table, _extends({}, props, {
    showHead: false
  }));
};
List.defaultProps = defaultProps$1;

var useState$2 = useState$3;

/**
 * ####NOTE: Navigation(vertical) sets first subMenu(if present) active if the Navigation is collapsed.
 */
var Navigation = function Navigation(props) {
  var _classNames5;

  var type = props.type,
      menus = props.menus,
      active = props.active,
      onClick = props.onClick,
      expanded = props.expanded,
      onToggle = props.onToggle,
      footer = props.footer,
      autoCollapse = props.autoCollapse,
      className = props.className;
  var baseProps = extractBaseProps(props);

  var _useState = useState$2({}),
      _useState2 = _slicedToArray(_useState, 2),
      menuState = _useState2[0],
      setMenuState = _useState2[1];

  useEffect$2(function () {
    if (props.active) {
      var currMenu = getMenu(props.active);
      if (currMenu) updateMenuState(currMenu, true);
    }
  }, [props.active]);

  var getMenu = function getMenu(menu) {
    var _iterator = _createForOfIteratorHelper(menus),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var m = _step.value;

        if (menu.name && m.name === menu.name || menu.link && m.link === menu.link) {
          return m;
        }

        if (m.subMenu) {
          var activeMenu = m.subMenu.find(function (sm) {
            return menu.name && sm.name === menu.name || menu.link && sm.link === menu.link;
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

  var updateMenuState = function updateMenuState(menu, val) {
    var currMenu = getMenu(menu);

    if (currMenu) {
      var nameSplit = currMenu.name.split('.');

      if (nameSplit.length > 1 || currMenu.subMenu) {
        var name = nameSplit[0];

        if (autoCollapse) {
          setMenuState(_defineProperty({}, name, val || !menuState[name]));
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

  var isActive = function isActive(menu) {
    if (active) {
      var currMenu = getMenu(active);
      return !!currMenu && (currMenu === menu || currMenu.name.split('.')[0] === menu.name || currMenu.name === menu.name || !!currMenu.link && currMenu.link === menu.link);
    }

    return false;
  };

  var getHorizontalMenu = function getHorizontalMenu(menuData) {
    var list = menuData.map(function (menu, index) {
      var _classNames;

      var menuClasses = classNames((_classNames = {
        'Navigation-menu': true
      }, _defineProperty(_classNames, "Navigation-menu--".concat(type), type), _defineProperty(_classNames, 'Navigation-menu--active', isActive(menu)), _classNames));
      return /*#__PURE__*/createElement("div", {
        key: index,
        className: menuClasses,
        onClick: function onClick() {
          return onClickHandler(menu);
        }
      }, menu.icon && /*#__PURE__*/createElement(Icon, {
        className: "mr-3",
        name: menu.icon,
        appearance: menu.disabled ? 'disabled' : 'default'
      }), /*#__PURE__*/createElement(Text, {
        appearance: menu.disabled ? 'subtle' : 'default'
      }, menu.label));
    });
    return list;
  };

  var getVerticalMenu = function getVerticalMenu() {
    var list = menus.map(function (menu, index) {
      var _classNames2;

      var menuClasses = classNames((_classNames2 = {
        'Navigation-menu': true
      }, _defineProperty(_classNames2, "Navigation-menu--".concat(type), type), _defineProperty(_classNames2, 'Navigation-menu--active', expanded && !menuState[menu.name] && isActive(menu)), _classNames2));
      var menuIconClasses = classNames({
        'Navigation-menuIcon': true,
        'Navigation-menuIcon--active': !expanded && isActive(menu)
      });
      return /*#__PURE__*/createElement("div", {
        key: index
      }, /*#__PURE__*/createElement("div", {
        className: menuClasses,
        onClick: function onClick() {
          return onClickHandler(menu);
        }
      }, menu.icon && /*#__PURE__*/createElement(Icon, {
        className: menuIconClasses,
        name: menu.icon,
        appearance: menu.disabled ? 'disabled' : 'default'
      }), expanded && /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement("span", {
        className: "Navigation-menuLabel"
      }, /*#__PURE__*/createElement(Text, {
        appearance: menu.disabled ? 'subtle' : 'default'
      }, menu.label)), menu.subMenu && menu.subMenu.length > 0 && /*#__PURE__*/createElement(Icon, {
        className: "mx-4",
        name: menuState[menu.name] ? 'keyboard_arrow_up' : 'keyboard_arrow_down',
        appearance: menu.disabled ? 'disabled' : 'default'
      }))), /*#__PURE__*/createElement("div", {
        className: "Navigation-subMenu"
      }, menuState[menu.name] && menu.subMenu && expanded && menu.subMenu.map(function (subMenu, ind) {
        var _classNames3;

        var subMenuClasses = classNames(menuClasses, (_classNames3 = {}, _defineProperty(_classNames3, 'Navigation-menu--subMenu', type), _defineProperty(_classNames3, 'Navigation-menu--active', isActive(subMenu)), _classNames3));
        return /*#__PURE__*/createElement("div", {
          key: ind,
          className: subMenuClasses,
          onClick: function onClick() {
            return onClickHandler(subMenu);
          }
        }, /*#__PURE__*/createElement(Text, {
          appearance: subMenu.disabled ? 'subtle' : 'default'
        }, subMenu.label));
      })));
    });
    var footerClasses = classNames(_defineProperty({
      'Navigation-footer': true
    }, 'Navigation-footer--border', true));
    return /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement("div", {
      className: "Navigation-body"
    }, list), footer && /*#__PURE__*/createElement("div", {
      className: footerClasses
    }, /*#__PURE__*/createElement(Icon, {
      className: "Navigation-menuIcon Navigation-menuIcon--footer",
      name: "menu_open",
      size: 16,
      onClick: function onClick() {
        return onToggle && onToggle(!expanded);
      }
    })));
  };

  var classes = classNames((_classNames5 = {}, _defineProperty(_classNames5, 'Navigation', true), _defineProperty(_classNames5, "Navigation--".concat(type), type), _defineProperty(_classNames5, 'Navigation--collapsed', !expanded), _classNames5), className);
  return /*#__PURE__*/createElement("div", _extends({}, baseProps, {
    className: classes
  }), type === 'horizontal' ? getHorizontalMenu(menus) : getVerticalMenu());
};
Navigation.defaultProps = {
  type: 'horizontal',
  expanded: true,
  autoCollapse: true
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
  var wrapperClasses = classNames((_classNames = {
    'PageHeader-wrapper': true
  }, _defineProperty(_classNames, 'PageHeader-wrapper--separator', separator), _defineProperty(_classNames, 'PageHeader-wrapper--withTabs', tabs), _classNames), className);
  var classes = classNames({
    PageHeader: true
  });

  var renderCenter = function renderCenter() {
    return navigation ? navigation : stepper;
  };

  return /*#__PURE__*/createElement("div", _extends({}, baseProps, {
    className: wrapperClasses
  }), breadcrumbs, /*#__PURE__*/createElement("div", {
    className: classes
  }, /*#__PURE__*/createElement(Row, null, /*#__PURE__*/createElement(Column, {
    size: "4",
    sizeXL: "4",
    sizeM: "4"
  }, /*#__PURE__*/createElement("div", {
    className: "PageHeader-titleWrapper"
  }, /*#__PURE__*/createElement(Heading, {
    className: "PageHeader-title"
  }, title), badge)), /*#__PURE__*/createElement(Column, {
    size: "4",
    sizeXL: "4",
    sizeM: "4"
  }, /*#__PURE__*/createElement("div", {
    className: "PageHeader-navigationWrapper"
  }, (!breadcrumbs || navigationPosition === 'center') && renderCenter())), /*#__PURE__*/createElement(Column, {
    size: "4",
    sizeXL: "4",
    sizeM: "4"
  }, actions))), (status || meta) && /*#__PURE__*/createElement("div", {
    className: "PageHeader-statusWrapper"
  }, status, meta), breadcrumbs && navigationPosition === 'bottom' && /*#__PURE__*/createElement("div", {
    className: "PageHeader-navigationWrapper"
  }, renderCenter()), tabs && /*#__PURE__*/createElement("div", null, tabs));
};
PageHeader.defaultProps = {
  navigationPosition: 'center',
  separator: true
};

export { Avatar, AvatarGroup, Backdrop, Badge, Breadcrumbs, Button, Caption, Card, Checkbox, Chip, ChipGroup, Column, DatePicker, DateRangePicker, Dialog, DonutChart, Dropdown, EditableDropdown, EditableInput, Grid, GridCell, Heading, Icon, Input, InputMask, Label, Legend, Link, List, Message, MetaList, Modal, ModalBody, ModalDescription, ModalFooter, ModalHeader, Navigation, OutsideClick, PageHeader, Pagination, Paragraph, Pills, Placeholder, PlaceholderParagraph, Popover, ProgressBar, ProgressRing, Radio, RangeSlider, Row, Slider, Spinner, StatusHint, Stepper, Subheading, Switch, Tab, Table, TabsWrapper, Text, Textarea, TimePicker, Toast, Tooltip, index as Utils };
