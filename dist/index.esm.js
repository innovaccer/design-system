import React__default, { createElement, useState as useState$4, useEffect as useEffect$3, createRef, Component, cloneElement, forwardRef, useRef as useRef$1, useImperativeHandle, Fragment, Children } from 'react';
import classNames from 'classnames';
import { createPortal, findDOMNode } from 'react-dom';
import { Manager, Reference, Popper } from 'react-popper';
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

var initialsLength = 2;
var Avatar = function Avatar(props) {
  var _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'primary' : _props$appearance,
      children = props.children;
  var initials = children.trim().slice(0, initialsLength);
  var classes = classNames(_defineProperty({
    Avatar: true
  }, "Avatar--".concat(appearance), appearance));
  return /*#__PURE__*/createElement("span", {
    className: classes
  }, initials);
};
Avatar.displayName = 'Avatar';

var useEffect = useEffect$3,
    useState = useState$4;

var Backdrop = function Backdrop(props) {
  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      savedBodyOverflow = _useState2[0],
      setBodyOverflow = _useState2[1];

  var _React$useState = useState$4(props.open),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _React$useState3 = useState$4(props.open),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      animate = _React$useState4[0],
      setAnimate = _React$useState4[1];

  var classes = classNames({
    Backdrop: true,
    'Backdrop--open': open,
    'Backdrop-animation--open': animate,
    'Backdrop-animation--close': !animate
  });

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
  var BackdropElement = /*#__PURE__*/createPortal( /*#__PURE__*/createElement("div", {
    className: classes
  }), document.body);
  return BackdropElement;
};

Backdrop.displayName = 'Backdrop';

var Badge = function Badge(props) {
  var _classNames;

  var _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'secondary' : _props$appearance,
      children = props.children,
      subtle = props.subtle,
      rest = _objectWithoutProperties(props, ["appearance", "children", "subtle"]);

  var classes = classNames((_classNames = {
    Badge: true
  }, _defineProperty(_classNames, "Badge--".concat(appearance), appearance && !subtle), _defineProperty(_classNames, "Badge--subtle-".concat(appearance), subtle), _classNames));
  return /*#__PURE__*/createElement("span", _extends({
    className: classes
  }, rest), children);
};
Badge.displayName = 'Badge';

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
    value: function componentDidUpdate() {
      var _this$props5 = this.props,
          _this$props5$on = _this$props5.on,
          on = _this$props5$on === void 0 ? 'click' : _this$props5$on,
          _this$props5$closeOnB = _this$props5.closeOnBackdropClick,
          closeOnBackdropClick = _this$props5$closeOnB === void 0 ? true : _this$props5$closeOnB;
      var open = this.props.open;

      if (on === 'click' && open && closeOnBackdropClick) {
        document.addEventListener('mousedown', this.doesNodeContainClick);
      } else if (on === 'click' && !open && closeOnBackdropClick) {
        document.removeEventListener('mousedown', this.doesNodeContainClick);
      }
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
      var element = /*#__PURE__*/cloneElement( /*#__PURE__*/createElement("span", {
        className: "PopperWrapper-trigger"
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
        innerRef: this.popupRef
      }, function (_ref2) {
        var ref = _ref2.ref,
            style = _ref2.style,
            placement = _ref2.placement;
        var newStyle = offset ? _this3.getUpdatedStyle(style, placement, offset) : style;
        return _this3.getChildrenElement(children, ref, placement, newStyle);
      }), document.body), (open || this.state.open) && !appendToBody && /*#__PURE__*/createElement(Popper, {
        placement: placement,
        innerRef: this.popupRef
      }, function (_ref3) {
        var ref = _ref3.ref,
            style = _ref3.style,
            placement = _ref3.placement;
        var newStyle = offset ? _this3.getUpdatedStyle(style, placement, offset) : style;
        return _this3.getChildrenElement(children, ref, placement, newStyle);
      }));
    }
  }]);

  return PopperWrapper;
}(Component);

var colorToHex = function colorToHex(color) {
  return getComputedStyle(document.documentElement).getPropertyValue("--".concat(color));
};

var Popover = function Popover(props) {
  var _props$position = props.position,
      position = _props$position === void 0 ? 'bottom' : _props$position,
      _props$closeOnBackdro = props.closeOnBackdropClick,
      closeOnBackdropClick = _props$closeOnBackdro === void 0 ? true : _props$closeOnBackdro,
      _props$appendToBody = props.appendToBody,
      appendToBody = _props$appendToBody === void 0 ? true : _props$appendToBody,
      _props$on = props.on,
      on = _props$on === void 0 ? 'click' : _props$on,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style,
      dark = props.dark,
      hoverable = props.hoverable,
      children = props.children,
      trigger = props.trigger,
      onToggle = props.onToggle;

  var _React$useState = useState$4(props.open || false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  useEffect$3(function () {
    if (onToggle) {
      if (props.open !== undefined) setOpen(props.open);
    }
  }, [props.open]);

  var onToggleFn = function onToggleFn(newOpen) {
    setOpen(newOpen);
  };

  var classes = classNames(_defineProperty({
    Popover: true
  }, 'Popover--dark', dark));
  var PopoverWrapper = /*#__PURE__*/createElement("div", {
    className: classes
  }, children);
  var popperOptions = {
    trigger: trigger,
    appendToBody: appendToBody,
    closeOnBackdropClick: closeOnBackdropClick,
    on: on,
    hoverable: hoverable,
    style: style,
    open: open,
    onToggle: onToggle || onToggleFn,
    placement: position
  };
  return /*#__PURE__*/createElement(PopperWrapper, _extends({}, popperOptions, {
    offset: "Large"
  }), PopoverWrapper);
};
Popover.displayName = 'Popover';

var Icon = function Icon(props) {
  var _classNames;

  var appearance = props.appearance,
      type = props.type,
      className = props.className,
      name = props.name,
      size = props.size,
      onClick = props.onClick;
  var iconClass = classNames((_classNames = {}, _defineProperty(_classNames, 'material-icons', true), _defineProperty(_classNames, 'Icon', true), _defineProperty(_classNames, "Icon--".concat(appearance), appearance), _defineProperty(_classNames, "".concat(className), className), _classNames));
  var styles = {
    fontSize: "".concat(size, "px"),
    width: "".concat(size, "px")
  };
  return /*#__PURE__*/createElement("i", {
    className: iconClass,
    style: styles,
    onClick: onClick
  }, "".concat(name, "_").concat(type));
};
Icon.defaultProps = {
  appearance: 'default',
  type: 'filled',
  size: 16
};
Icon.displayName = 'Icon';

var DropdownButton = /*#__PURE__*/forwardRef(function (props, ref) {
  var _classNames;

  var _props$triggerSize = props.triggerSize,
      triggerSize = _props$triggerSize === void 0 ? 'regular' : _props$triggerSize,
      _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? 'Select' : _props$placeholder,
      _props$menu = props.menu,
      menu = _props$menu === void 0 ? false : _props$menu,
      children = props.children,
      maxWidth = props.maxWidth,
      icon = props.icon,
      disabled = props.disabled,
      inlineLabel = props.inlineLabel,
      error = props.error,
      rest = _objectWithoutProperties(props, ["triggerSize", "placeholder", "menu", "children", "maxWidth", "icon", "disabled", "inlineLabel", "error"]);

  var buttonDisabled = disabled ? 'disabled' : 'default';
  var trimmedPlaceholder = placeholder.trim();
  var value = children ? children : trimmedPlaceholder ? trimmedPlaceholder : 'Select';
  var iconName = !menu ? 'keyboard_arrow_down' : icon ? icon : 'more_horiz';
  var label = inlineLabel && inlineLabel.trim();
  var buttonClass = classNames((_classNames = {}, _defineProperty(_classNames, 'Button', true), _defineProperty(_classNames, 'Button--basic', true), _defineProperty(_classNames, 'Button--square', !children), _defineProperty(_classNames, 'DropdownTrigger', true), _defineProperty(_classNames, 'DropdownButton', true), _defineProperty(_classNames, "DropdownButton--".concat(triggerSize), triggerSize), _defineProperty(_classNames, 'DropdownButton--icon', icon), _defineProperty(_classNames, 'DropdownButton--moreIcon', menu), _defineProperty(_classNames, 'DropdownButton--placeholder', !children && !menu), _defineProperty(_classNames, 'DropdownButton--label', label), _defineProperty(_classNames, 'DropdownButton--error', error), _classNames));
  var labelClass = classNames(_defineProperty({}, 'DropdownButton-label', true));
  return /*#__PURE__*/createElement("button", _extends({
    ref: ref,
    value: children,
    className: buttonClass,
    disabled: disabled,
    style: {
      maxWidth: maxWidth ? maxWidth : '100%'
    },
    tabIndex: 0
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
  }, value && "".concat(value.charAt(0).toUpperCase()).concat(value.slice(1)))), /*#__PURE__*/createElement(Icon, {
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

  var _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      children = props.children,
      weight = props.weight,
      small = props.small,
      rest = _objectWithoutProperties(props, ["appearance", "children", "weight", "small"]);

  var classes = classNames((_classNames = {
    Text: true
  }, _defineProperty(_classNames, "Text--".concat(appearance), appearance), _defineProperty(_classNames, "Text--".concat(weight), weight), _defineProperty(_classNames, 'Text--small', small), _classNames));
  return /*#__PURE__*/createElement(GenericText, _extends({
    className: classes,
    componentType: "span"
  }, rest), children);
};
Text.displayName = 'Text';

var Checkbox = /*#__PURE__*/forwardRef(function (props, forwardedRef) {
  var _classNames, _classNames2;

  var _props$size = props.size,
      size = _props$size === void 0 ? 'regular' : _props$size,
      _props$tabIndex = props.tabIndex,
      tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex,
      defaultChecked = props.defaultChecked,
      label = props.label,
      disabled = props.disabled,
      onChange = props.onChange,
      name = props.name,
      value = props.value;
  var ref = useRef$1(null);
  useImperativeHandle(forwardedRef, function () {
    return ref.current;
  });

  var _React$useState = useState$4(props.checked === undefined ? defaultChecked : props.checked),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      checked = _React$useState2[0],
      setChecked = _React$useState2[1];

  useEffect$3(function () {
    setIndeterminate(props.indeterminate);
  }, [props.indeterminate]);
  useEffect$3(function () {
    if (props.checked !== undefined) {
      setChecked(props.checked);
    }
  }, [props.checked]);
  var CheckboxClass = classNames((_classNames = {}, _defineProperty(_classNames, 'Checkbox', true), _defineProperty(_classNames, 'Checkbox--disabled', disabled), _defineProperty(_classNames, "Checkbox--".concat(size), size), _classNames));
  var CheckboxWrapper = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'Checkbox-wrapper', true), _defineProperty(_classNames2, "Checkbox-wrapper--".concat(size), size), _defineProperty(_classNames2, 'Checkbox-wrapper--checked', checked), _defineProperty(_classNames2, 'Checkbox-wrapper--indeterminate', props.indeterminate), _classNames2));

  var setIndeterminate = function setIndeterminate(indeterminate) {
    ref.current.indeterminate = indeterminate;
  };

  var onChangeHandler = function onChangeHandler(e) {
    e.stopPropagation();
    var checkedValue = props.indeterminate ? false : !checked;

    if (props.checked === undefined) {
      setChecked(checkedValue);
      setIndeterminate(false);
    }

    if (onChange) onChange(checkedValue, name, value, false);
  };

  var IconName = props.indeterminate ? 'remove' : checked ? 'check' : '';
  var IconSize = size === 'tiny' ? 8 : 16;
  return /*#__PURE__*/createElement("div", {
    className: CheckboxClass,
    onClick: onChangeHandler
  }, /*#__PURE__*/createElement("input", {
    type: "checkbox",
    defaultChecked: defaultChecked,
    checked: checked,
    disabled: disabled,
    ref: ref,
    name: name,
    value: value,
    tabIndex: tabIndex,
    className: 'Checkbox-input'
  }), /*#__PURE__*/createElement("span", {
    className: CheckboxWrapper
  }, IconName && /*#__PURE__*/createElement(Icon, {
    name: IconName,
    size: IconSize,
    appearance: 'white'
  })), label && label.trim() && /*#__PURE__*/createElement("div", {
    className: 'Checkbox-text'
  }, /*#__PURE__*/createElement(Text, {
    small: size === 'tiny'
  }, label.trim())));
});
Checkbox.displayName = 'Checkbox';

var CheckboxOption = function CheckboxOption(props) {
  var className = props.className,
      selected = props.selected,
      onChange = props.onChange,
      optionData = props.optionData,
      index = props.index,
      updateActiveOption = props.updateActiveOption;
  var label = optionData.label;

  var onChangeHandler = function onChangeHandler(checked) {
    if (onChange) onChange(checked);
  };

  var onUpdateActiveOption = function onUpdateActiveOption() {
    if (updateActiveOption) updateActiveOption(index);
  };

  return /*#__PURE__*/createElement("div", {
    className: className,
    onMouseEnter: onUpdateActiveOption
  }, /*#__PURE__*/createElement(Checkbox, {
    label: label,
    checked: selected,
    onChange: onChangeHandler,
    tabIndex: -1
  }));
};

var DefaultOption = function DefaultOption(props) {
  var className = props.className,
      textClassName = props.textClassName,
      onClick = props.onClick,
      optionData = props.optionData,
      updateActiveOption = props.updateActiveOption,
      index = props.index;
  var label = optionData.label;

  var onClickHandler = function onClickHandler() {
    if (onClick) onClick();
  };

  var onUpdateActiveOption = function onUpdateActiveOption() {
    if (updateActiveOption) updateActiveOption(index);
  };

  return /*#__PURE__*/createElement("div", {
    className: className,
    onClick: onClickHandler,
    onMouseEnter: onUpdateActiveOption
  }, /*#__PURE__*/createElement("div", {
    className: 'Option-label'
  }, /*#__PURE__*/createElement("div", {
    className: textClassName
  }, label)));
};

var MetaOption = function MetaOption(props) {
  var className = props.className,
      textClassName = props.textClassName,
      onClick = props.onClick,
      optionData = props.optionData,
      updateActiveOption = props.updateActiveOption,
      index = props.index;
  var label = optionData.label,
      subInfo = optionData.subInfo;

  var onClickHandler = function onClickHandler() {
    if (onClick) onClick();
  };

  var onUpdateActiveOption = function onUpdateActiveOption() {
    if (updateActiveOption) updateActiveOption(index);
  };

  return /*#__PURE__*/createElement("div", {
    className: className,
    onClick: onClickHandler,
    onMouseEnter: onUpdateActiveOption
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
      onClick = props.onClick,
      optionData = props.optionData,
      updateActiveOption = props.updateActiveOption,
      index = props.index;
  var label = optionData.label,
      icon = optionData.icon;
  var OptionClass = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(className), true), _defineProperty(_classNames, 'Option--icon', icon), _classNames));

  var onClickHandler = function onClickHandler() {
    if (onClick) onClick();
  };

  var onUpdateActiveOption = function onUpdateActiveOption() {
    if (updateActiveOption) updateActiveOption(index);
  };

  return /*#__PURE__*/createElement("div", {
    className: OptionClass,
    onClick: onClickHandler,
    onMouseEnter: onUpdateActiveOption
  }, icon && /*#__PURE__*/createElement("div", {
    className: 'Option-icon'
  }, /*#__PURE__*/createElement(Icon, {
    className: "mr-4",
    name: icon,
    appearance: selected ? 'white' : 'default'
  })), /*#__PURE__*/createElement("div", {
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
      onClick = props.onClick,
      optionData = props.optionData,
      updateActiveOption = props.updateActiveOption,
      index = props.index;
  var label = optionData.label,
      icon = optionData.icon,
      subInfo = optionData.subInfo;
  var OptionClass = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(className), true), _defineProperty(_classNames, 'Option--icon', icon), _classNames));

  var onClickHandler = function onClickHandler() {
    if (onClick) onClick();
  };

  var onUpdateActiveOption = function onUpdateActiveOption() {
    if (updateActiveOption) updateActiveOption(index);
  };

  return /*#__PURE__*/createElement("div", {
    className: OptionClass,
    onClick: onClickHandler,
    onMouseEnter: onUpdateActiveOption
  }, icon && /*#__PURE__*/createElement("div", {
    className: 'Option-icon'
  }, /*#__PURE__*/createElement(Icon, {
    className: "mr-4",
    name: icon,
    appearance: selected ? 'white' : 'default'
  })), /*#__PURE__*/createElement("div", {
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
  var _classNames, _classNames2;

  var optionData = props.optionData,
      selected = props.selected,
      optionIsTop = props.optionIsTop,
      optionIsBottom = props.optionIsBottom,
      onClick = props.onClick,
      updateActiveOption = props.updateActiveOption,
      onChange = props.onChange,
      active = props.active,
      index = props.index,
      checkboxes = props.checkboxes;

  var _ref = optionData.optionType ? optionData : props,
      _ref$optionType = _ref.optionType,
      optionType = _ref$optionType === void 0 ? 'DEFAULT' : _ref$optionType;

  var className = classNames((_classNames = {}, _defineProperty(_classNames, 'Option', true), _defineProperty(_classNames, 'Option-wrapper', true), _defineProperty(_classNames, 'Option--top', optionIsTop), _defineProperty(_classNames, 'Option--bottom', optionIsBottom), _defineProperty(_classNames, 'Option--active', active), _defineProperty(_classNames, 'Option--selected', selected && !checkboxes && !props.menu), _classNames));
  var textClassName = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'Option-text', true), _defineProperty(_classNames2, 'Option-text--wrap', props.optionsWrap), _classNames2));

  var onUpdateActiveOption = function onUpdateActiveOption() {
    if (updateActiveOption) updateActiveOption(index);
  };

  if (props.optionRenderer) {
    return /*#__PURE__*/createElement("div", _extends({
      className: "Option-wrapper",
      onMouseEnter: onUpdateActiveOption
    }, !checkboxes && {
      onClick: onClick
    }), props.optionRenderer({
      optionData: optionData,
      selected: selected,
      optionIsTop: optionIsTop,
      optionIsBottom: optionIsBottom,
      onChange: onChange,
      active: active,
      index: index
    }));
  }

  var type = checkboxes ? 'WITH_CHECKBOX' : optionType;
  var component = OptionTypeMapping[type];
  return component({
    optionData: optionData,
    selected: selected,
    onChange: onChange,
    onClick: onClick,
    updateActiveOption: updateActiveOption,
    textClassName: textClassName,
    className: className,
    index: index
  });
};

var Spinner = function Spinner(props) {
  var _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'primary' : _props$appearance,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size;
  var wrapperClasses = classNames(_defineProperty({
    Spinner: true
  }, "Spinner--".concat(size), size));
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
  return /*#__PURE__*/createElement("svg", _extends({
    className: wrapperClasses
  }, svgProps), /*#__PURE__*/createElement("circle", _extends({
    className: circleClasses
  }, circleProps)));
};
Spinner.displayName = 'Spinner';

var sizeMapping = {
  tiny: 12,
  regular: 16,
  large: 20
};
var Button = /*#__PURE__*/forwardRef(function (props, ref) {
  var _classNames, _classNames2, _classNames3;

  var _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'basic' : _props$appearance,
      _props$size = props.size,
      size = _props$size === void 0 ? 'regular' : _props$size,
      _props$iconAlign = props.iconAlign,
      iconAlign = _props$iconAlign === void 0 ? 'left' : _props$iconAlign,
      _props$tabIndex = props.tabIndex,
      tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex,
      children = props.children,
      icon = props.icon,
      expanded = props.expanded,
      loading = props.loading,
      disabled = props.disabled,
      className = props.className,
      rest = _objectWithoutProperties(props, ["appearance", "size", "iconAlign", "tabIndex", "children", "icon", "expanded", "loading", "disabled", "className"]);

  var buttonClass = classNames((_classNames = {}, _defineProperty(_classNames, 'Button', true), _defineProperty(_classNames, 'Button--expanded', expanded), _defineProperty(_classNames, "Button--".concat(size), size), _defineProperty(_classNames, 'Button--square', !children), _defineProperty(_classNames, "Button--".concat(appearance), appearance), _defineProperty(_classNames, "Button--iconAlign-".concat(iconAlign), children && iconAlign), _defineProperty(_classNames, "".concat(className), className), _classNames));
  var iconClass = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'Button-icon', true), _defineProperty(_classNames2, "Button-icon--".concat(iconAlign), children && iconAlign), _classNames2));
  var spinnerClass = classNames((_classNames3 = {}, _defineProperty(_classNames3, 'Button-spinner', true), _defineProperty(_classNames3, "Button-spinner--".concat(iconAlign), children && iconAlign), _classNames3));
  return /*#__PURE__*/createElement("button", _extends({
    ref: ref,
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
  })), children && "".concat(children.charAt(0).toUpperCase()).concat(children.slice(1)));
});
Button.displayName = 'Button';

var sizeMapping$1 = {
  tiny: 12,
  regular: 16,
  large: 20
};
var Input = /*#__PURE__*/forwardRef(function (props, ref) {
  var _classNames, _classNames2, _classNames3, _classNames4;

  var _props$size = props.size,
      size = _props$size === void 0 ? 'regular' : _props$size,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      disabled = props.disabled,
      defaultValue = props.defaultValue,
      name = props.name,
      placeholder = props.placeholder,
      value = props.value,
      icon = props.icon,
      inlineLabel = props.inlineLabel,
      required = props.required,
      error = props.error,
      info = props.info,
      autocomplete = props.autocomplete,
      autoFocus = props.autoFocus,
      onChange = props.onChange,
      onClick = props.onClick,
      onClear = props.onClear,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      actionIcon = props.actionIcon;
  var classes = classNames((_classNames = {}, _defineProperty(_classNames, 'Input', true), _defineProperty(_classNames, "Input--".concat(size), size), _defineProperty(_classNames, 'Input--disabled', disabled), _defineProperty(_classNames, 'Input--error', error), _classNames));
  var inputClass = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'Input-input', true), _defineProperty(_classNames2, "Input-input--".concat(size), size), _classNames2));
  var leftIconClass = classNames((_classNames3 = {}, _defineProperty(_classNames3, 'Input-icon', true), _defineProperty(_classNames3, 'Input-icon--left', true), _defineProperty(_classNames3, 'Input-icon--disabled', !value), _classNames3));
  var rightIconClass = classNames((_classNames4 = {}, _defineProperty(_classNames4, 'Input-icon', true), _defineProperty(_classNames4, 'Input-icon--right', true), _classNames4));
  var trigger = /*#__PURE__*/createElement("div", {
    className: rightIconClass
  }, /*#__PURE__*/createElement(Icon, {
    name: 'info',
    size: sizeMapping$1[size]
  }));
  var popoverStyle = {
    padding: 'var(--spacing) var(--spacing-2)',
    maxWidth: 'var(--spacing-9)',
    overflow: 'hidden'
  };
  return /*#__PURE__*/createElement("div", {
    className: classes
  }, inlineLabel && /*#__PURE__*/createElement("div", {
    className: "Input-inlineLabel"
  }, /*#__PURE__*/createElement(Text, {
    appearance: "subtle"
  }, inlineLabel)), size !== 'tiny' && icon && /*#__PURE__*/createElement("div", {
    className: leftIconClass
  }, /*#__PURE__*/createElement(Icon, {
    name: icon,
    size: sizeMapping$1[size]
  })), /*#__PURE__*/createElement("input", {
    ref: ref,
    name: name,
    type: type,
    defaultValue: defaultValue,
    placeholder: placeholder,
    className: inputClass,
    value: value,
    autoComplete: autocomplete,
    required: required,
    disabled: disabled,
    onChange: onChange,
    onBlur: onBlur,
    onClick: onClick,
    onFocus: onFocus,
    autoFocus: autoFocus
  }), !value && !disabled || value && disabled || defaultValue && disabled ? info && /*#__PURE__*/createElement(Popover, {
    style: popoverStyle,
    position: "top",
    on: 'hover',
    trigger: trigger,
    dark: true
  }, info) : actionIcon ? actionIcon : onClear && value && !disabled && /*#__PURE__*/createElement("div", {
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
  var _props$length = props.length,
      length = _props$length === void 0 ? 'medium' : _props$length;
  var classes = classNames(_defineProperty({
    'Placeholder-paragraph': true,
    'Placeholder--animation': true
  }, "Placeholder-paragraph--".concat(length), length));
  return /*#__PURE__*/createElement("div", {
    className: classes
  });
};
PlaceholderParagraph.displayName = 'PlaceholderParagraph';

var PlaceholderImage = function PlaceholderImage(props) {
  var _classNames;

  var _props$imageSize = props.imageSize,
      imageSize = _props$imageSize === void 0 ? 'small' : _props$imageSize,
      round = props.round;
  var classes = classNames((_classNames = {
    'Placeholder-image': true,
    'Placeholder--animation': true
  }, _defineProperty(_classNames, 'Placeholder-image--round', round), _defineProperty(_classNames, "Placeholder-image--".concat(imageSize), imageSize), _classNames));
  return /*#__PURE__*/createElement("div", {
    className: classes
  });
};
PlaceholderImage.displayName = 'PlaceholderImage';

var Placeholder = function Placeholder(props) {
  var _props$imageSize = props.imageSize,
      imageSize = _props$imageSize === void 0 ? 'small' : _props$imageSize,
      withImage = props.withImage,
      round = props.round,
      children = props.children,
      rest = _objectWithoutProperties(props, ["imageSize", "withImage", "round", "children"]);

  var classes = classNames(_defineProperty({
    Placeholder: true
  }, 'Placeholder--withImage', withImage));
  return /*#__PURE__*/createElement("div", _extends({
    className: classes
  }, rest), withImage && /*#__PURE__*/createElement(PlaceholderImage, {
    round: round,
    imageSize: imageSize
  }), /*#__PURE__*/createElement("div", {
    className: "ml-4 w-100"
  }, children));
};
Placeholder.displayName = 'Placeholder';

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
      return /*#__PURE__*/React__default.createElement(Placeholder, null, /*#__PURE__*/React__default.createElement(PlaceholderParagraph, {
        length: "large"
      }), /*#__PURE__*/React__default.createElement(PlaceholderParagraph, {
        length: "medium"
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
        length: "medium"
      }));
  }

  return null;
};

var DropdownAlignMapping = {
  right: 'bottom-start',
  left: 'bottom-end'
};

var DropdownList = function DropdownList(props) {
  var _classNames2, _classNames3, _classNames4;

  var _props$listOptions = props.listOptions,
      listOptions = _props$listOptions === void 0 ? [] : _props$listOptions,
      _props$dropdownAlign = props.dropdownAlign,
      dropdownAlign = _props$dropdownAlign === void 0 ? 'right' : _props$dropdownAlign,
      _props$loadingType = props.loadingType,
      loadingType = _props$loadingType === void 0 ? 'DEFAULT' : _props$loadingType,
      _props$optionsWrap = props.optionsWrap,
      optionsWrap = _props$optionsWrap === void 0 ? false : _props$optionsWrap,
      _props$maxHeight = props.maxHeight,
      maxHeight = _props$maxHeight === void 0 ? 200 : _props$maxHeight,
      selected = props.selected,
      tempSelected = props.tempSelected,
      previousSelected = props.previousSelected,
      remainingOptions = props.remainingOptions,
      dropdownOpen = props.dropdownOpen,
      menu = props.menu,
      searchTerm = props.searchTerm,
      maxWidth = props.maxWidth,
      showApplyButton = props.showApplyButton,
      checkboxes = props.checkboxes,
      search = props.search,
      onSearchChange = props.onSearchChange,
      optionRenderer = props.optionRenderer,
      applyOptions = props.applyOptions,
      cancelOptions = props.cancelOptions,
      toggleDropdown = props.toggleDropdown;
  var dropdownRef = /*#__PURE__*/createRef();
  var triggerRef = /*#__PURE__*/createRef();
  var dropdownInputRef = /*#__PURE__*/createRef();
  var dropdownTriggerRef = /*#__PURE__*/createRef();
  var dropdownCancelButtonRef = /*#__PURE__*/createRef();
  var dropdownApplyButtonRef = /*#__PURE__*/createRef();

  var _React$useState = useState$4(),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      popoverStyle = _React$useState2[0],
      setPopoverStyle = _React$useState2[1];

  var _React$useState3 = useState$4(0),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      cursor = _React$useState4[0],
      setCursor = _React$useState4[1];

  var width = props.width ? props.width : '100%';
  useEffect$3(function () {
    if (dropdownOpen) {
      var _dropdownElement$pare;

      var dropdownElement = triggerRef.current;
      var popoverWidth = width !== '100%' ? width : "".concat(dropdownElement === null || dropdownElement === void 0 ? void 0 : (_dropdownElement$pare = dropdownElement.parentElement) === null || _dropdownElement$pare === void 0 ? void 0 : _dropdownElement$pare.clientWidth, "px");
      var popperWrapperStyle = {
        width: menu ? popoverWidth : "".concat(dropdownElement === null || dropdownElement === void 0 ? void 0 : dropdownElement.clientWidth, "px"),
        minWidth: showApplyButton && checkboxes ? '176px' : '128px',
        maxWidth: maxWidth ? maxWidth : '100%'
      };
      setPopoverStyle(popperWrapperStyle);
    }
  }, [dropdownOpen, checkboxes, showApplyButton]);
  var _props$triggerSize = props.triggerSize,
      triggerSize = _props$triggerSize === void 0 ? 'regular' : _props$triggerSize,
      placeholder = props.placeholder,
      icon = props.icon,
      error = props.error,
      disabled = props.disabled,
      inlineLabel = props.inlineLabel,
      triggerLabel = props.triggerLabel;
  var CustomTrigger = props.customTrigger ? props.customTrigger(triggerLabel ? triggerLabel : placeholder) : /*#__PURE__*/createElement(Fragment, null);
  var NewCustomTrigger = /*#__PURE__*/cloneElement(CustomTrigger, {
    tabindex: 0,
    ref: dropdownTriggerRef
  });
  var trigger = props.customTrigger ? NewCustomTrigger : /*#__PURE__*/createElement(DropdownButton, {
    placeholder: placeholder,
    triggerSize: triggerSize,
    icon: icon,
    disabled: disabled,
    inlineLabel: inlineLabel,
    maxWidth: maxWidth,
    menu: menu,
    error: error,
    ref: dropdownTriggerRef
  }, triggerLabel);
  var dropdownWrapperStyle = menu ? {} : {
    width: width
  };
  var dropdownStyle = {
    maxHeight: maxHeight,
    overflowY: 'auto',
    overflowX: 'hidden'
  };

  var getDropdownClass = function getDropdownClass(index, isGroup) {
    var Dropdown = classNames(_defineProperty({}, 'Dropdown--border', isGroup && index !== 0));
    return Dropdown;
  };

  var dropdownClass = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'Dropdown', true), _defineProperty(_classNames2, 'Dropdown--placeholder', !menu), _defineProperty(_classNames2, 'Dropdown--menu', menu), _classNames2));
  var dropdownWrapperClass = classNames((_classNames3 = {}, _defineProperty(_classNames3, 'Dropdown-wrapper', true), _defineProperty(_classNames3, 'Dropdown-wrapper--wrap', optionsWrap), _classNames3));
  var SelectAllClass = classNames((_classNames4 = {}, _defineProperty(_classNames4, 'Option', true), _defineProperty(_classNames4, 'Option-wrapper', true), _defineProperty(_classNames4, 'Option--top', true), _defineProperty(_classNames4, 'Option--active', cursor === 0), _classNames4));

  var onToggleDropdown = function onToggleDropdown() {
    var _dropdownTriggerRef$c;

    toggleDropdown();
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
    if (onSearchChange && searchTerm) onSearchChange('');
  };

  var searchHandler = function searchHandler(event) {
    if (onSearchChange) onSearchChange(event.target.value);
  };

  var updateActiveOption = function updateActiveOption(index, parentCheckbox) {
    var updatedIndex = checkboxes && !props.async && !parentCheckbox ? index + 1 : index;
    setCursor(updatedIndex);
  };

  var renderFooter = function renderFooter() {
    var _props$footerLabel = props.footerLabel,
        footerLabel = _props$footerLabel === void 0 ? 'Search for more options' : _props$footerLabel;
    return /*#__PURE__*/createElement("div", {
      className: 'Dropdown-footer'
    }, /*#__PURE__*/createElement(Text, {
      small: true,
      appearance: 'subtle'
    }, footerLabel));
  };

  var renderGroups = function renderGroups(group, selectedGroup) {
    var onClearOptions = props.onClearOptions;
    return /*#__PURE__*/createElement("div", {
      className: 'Dropdown-subinfo'
    }, /*#__PURE__*/createElement(Text, {
      small: true,
      appearance: 'subtle'
    }, group), selectedGroup && /*#__PURE__*/createElement("div", {
      onClick: onClearOptions,
      className: 'Dropdown-clear'
    }, /*#__PURE__*/createElement(Text, null, "Clear")));
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
      tabIndex: -1
    }, "Cancel"), /*#__PURE__*/createElement(Button, {
      ref: dropdownApplyButtonRef,
      appearance: 'primary',
      disabled: disable,
      onClick: onApplyOptions
    }, "Apply"));
  };

  var renderSearch = function renderSearch() {
    return /*#__PURE__*/createElement("div", {
      className: 'Dropdown-input'
    }, /*#__PURE__*/createElement(Input, {
      name: "Dropdown-search",
      icon: 'search',
      value: searchTerm,
      placeholder: 'Search..',
      disabled: false,
      autoFocus: true,
      onChange: searchHandler,
      onClear: searchClearHandler,
      ref: dropdownInputRef,
      autocomplete: 'off'
    }));
  };

  var renderLoading = function renderLoading(loadersLength) {
    var arr = Array(loadersLength).fill('Loading');
    var type = checkboxes ? 'WITH_CHECKBOX' : loadingType;
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
    var _props$parentCheckbox = props.parentCheckboxLabel,
        parentCheckboxLabel = _props$parentCheckbox === void 0 ? 'Select All' : _props$parentCheckbox,
        selectAll = props.selectAll,
        onSelectAll = props.onSelectAll;
    var label = parentCheckboxLabel.trim() ? parentCheckboxLabel.trim() : 'Select All';
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
      tabIndex: -1
    }));
  };

  var renderOptions = function renderOptions(item, index) {
    var selectAllPresent = checkboxes && remainingOptions === 0 && searchTerm === '';
    var active = selectAllPresent ? index + 1 === cursor : index === cursor;
    var top = index === 0 && !selectAllPresent;
    var bottom = index + 1 === listOptions.length + selected.length && !(props.async && remainingOptions > 0);
    var optionIsSelected = tempSelected.findIndex(function (option) {
      return option.value === item.value;
    }) !== -1;
    return /*#__PURE__*/createElement(Option, {
      optionData: item,
      optionIsTop: top,
      optionIsBottom: bottom,
      optionsWrap: optionsWrap,
      selected: optionIsSelected,
      index: index,
      onClick: function onClick() {
        return optionClickHandler(item);
      },
      updateActiveOption: updateActiveOption,
      optionRenderer: optionRenderer,
      active: active,
      checkboxes: checkboxes,
      menu: menu,
      onChange: function onChange(c) {
        return props.onSelect(item, c);
      },
      optionType: props.optionType
    });
  };

  var renderDropdownSection = function renderDropdownSection() {
    var _props$selectedGroupL = props.selectedGroupLabel,
        selectedGroupLabel = _props$selectedGroupL === void 0 ? 'Selected Items' : _props$selectedGroupL,
        _props$loadersLength = props.loadersLength,
        loadersLength = _props$loadersLength === void 0 ? 10 : _props$loadersLength,
        loadingOptions = props.loadingOptions;

    if (loadersLength && loadingOptions) {
      return /*#__PURE__*/createElement("div", {
        className: 'Dropdown-loading'
      }, /*#__PURE__*/createElement("div", {
        className: "Dropdown-scroller",
        style: dropdownStyle
      }, renderLoading(loadersLength)));
    }

    if (listOptions.length === 0 && !loadingOptions) {
      var _props$searchResultMe = props.searchResultMessage,
          searchResultMessage = _props$searchResultMe === void 0 ? 'No result found' : _props$searchResultMe;
      return /*#__PURE__*/createElement("div", {
        className: 'Dropdown-errorWrapper'
      }, /*#__PURE__*/createElement("div", {
        className: 'Option'
      }, /*#__PURE__*/createElement("div", {
        className: 'Option-subinfo'
      }, searchResultMessage)));
    }

    return /*#__PURE__*/createElement("div", {
      className: dropdownWrapperClass
    }, checkboxes && remainingOptions === 0 && searchTerm === '' && renderSelectAll(), /*#__PURE__*/createElement("div", {
      className: "Dropdown-scroller",
      style: dropdownStyle,
      ref: dropdownRef
    }, selected.length > 0 && renderGroups(selectedGroupLabel, true), selected.map(function (option, index) {
      return renderOptions(option, index);
    }), listOptions.map(function (option, index) {
      var prevGroup = index > 0 ? listOptions[index - 1].group : selected.length ? selectedGroupLabel : undefined;
      var currentGroup = option.group;
      var isGroup = prevGroup !== currentGroup;
      var updatedIndex = index + selected.length;
      return /*#__PURE__*/createElement("div", {
        className: getDropdownClass(updatedIndex, isGroup),
        key: index
      }, isGroup && currentGroup && renderGroups(currentGroup), renderOptions(option, updatedIndex));
    }), props.async && remainingOptions > 0 && renderFooter()));
  };

  var focusOption = function focusOption(direction, className) {
    var updatedCursor = direction === 'down' ? cursor + 1 : cursor - 1;
    var elements = document.querySelectorAll(className);
    var element = elements[updatedCursor];
    if (element) scrollIntoView(dropdownRef.current, element);
    if (element !== undefined) setCursor(updatedCursor);
  };

  var onkeydown = function onkeydown(event) {
    var _dropdownApplyButtonR;

    var optionClass = optionRenderer ? '.Option-wrapper' : '.Option';

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        dropdownOpen ? focusOption('down', optionClass) : onToggleDropdown();
        break;

      case 'ArrowUp':
        event.preventDefault();
        dropdownOpen ? focusOption('up', optionClass) : onToggleDropdown();
        break;

      case 'Enter':
        var activeElement = document.activeElement;

        if (dropdownOpen && (dropdownInputRef.current === activeElement || dropdownTriggerRef.current === activeElement)) {
          event.preventDefault();
          var className = checkboxes ? "".concat(optionClass, " .Checkbox") : optionClass;
          var elements = document.querySelectorAll(className);
          var element = elements[cursor];
          if (element) element.click();
        }

        if (!dropdownOpen) onToggleDropdown();
        break;

      case 'Tab':
        if (!showApplyButton && dropdownOpen) {
          event.preventDefault();
          onToggleDropdown();
          return;
        }

        var currentElement = document.activeElement;
        var disabledApplyButton = (_dropdownApplyButtonR = dropdownApplyButtonRef.current) === null || _dropdownApplyButtonR === void 0 ? void 0 : _dropdownApplyButtonR.disabled;

        if ((currentElement === dropdownCancelButtonRef.current && disabledApplyButton || currentElement === dropdownApplyButtonRef.current) && dropdownOpen) {
          event.preventDefault();
          onToggleDropdown();
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

  return /*#__PURE__*/createElement("div", {
    className: dropdownClass,
    ref: triggerRef,
    style: dropdownWrapperStyle,
    onKeyDown: onkeydown
  }, /*#__PURE__*/createElement(Popover, {
    onToggle: onToggleDropdown,
    trigger: trigger,
    open: dropdownOpen,
    style: popoverStyle,
    position: DropdownAlignMapping[dropdownAlign],
    appendToBody: true
  }, (search || props.async) && renderSearch(), renderDropdownSection(), showApplyButton && checkboxes && renderApplyButton()));
};

DropdownList.displayName = 'DropdownList';

var bulk = 50;
var Dropdown = /*#__PURE__*/function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  var _super = _createSuper(Dropdown);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "fetchOptionsFn", function (searchTerm) {
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
        var unSelectedGroup = options.filter(function (option) {
          return init ? !option.selected : _this.state.tempSelected.findIndex(function (item) {
            return item.value === option.value;
          }) === -1;
        });
        return unSelectedGroup;
      }

      return options;
    });

    _defineProperty(_assertThisInitialized(_this), "getSelectedOptions", function (options, init) {
      if (options.length) {
        var selectedGroup = init ? options.filter(function (option) {
          return option.selected;
        }) : _this.state.tempSelected;
        return selectedGroup;
      }

      return [];
    });

    _defineProperty(_assertThisInitialized(_this), "updateOptions", function (init, async) {
      var _this$state = _this.state,
          searchTerm = _this$state.searchTerm,
          tempSelected = _this$state.tempSelected,
          optionsLength = _this$state.optionsLength,
          previousSelected = _this$state.previousSelected;
      var updatedAsync = async === undefined ? _this.state.async : async;
      var _this$props = _this.props,
          fetchOptions = _this$props.fetchOptions,
          checkboxes = _this$props.checkboxes;
      var fetchFn = fetchOptions ? fetchOptions : _this.fetchOptionsFn;
      fetchFn(searchTerm).then(function (res) {
        var options = res.options,
            count = res.count;
        var unSelectedGroup = checkboxes && searchTerm === '' && updatedAsync ? _this.getUnSelectedOptions(options, init) : options;
        var selectedGroup = searchTerm === '' && updatedAsync ? _this.getSelectedOptions(options, init) : [];

        _this.setState(_objectSpread2(_objectSpread2({}, _this.state), {}, {
          loading: false,
          async: updatedAsync,
          searchedOptionsLength: count,
          options: unSelectedGroup.slice(0, bulk),
          selected: checkboxes ? selectedGroup : [],
          optionsLength: searchTerm === '' ? count : optionsLength,
          tempSelected: init ? selectedGroup : tempSelected,
          previousSelected: init ? selectedGroup : previousSelected,
          triggerLabel: _this.updateTriggerLabel(init ? selectedGroup : tempSelected)
        }));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateSearchTerm", function (search) {
      _this.setState(_objectSpread2(_objectSpread2({}, _this.state), {}, {
        loading: true,
        searchTerm: search
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "onOptionSelect", function (selectedArray) {
      var _this$props2 = _this.props,
          onChange = _this$props2.onChange,
          closeOnSelect = _this$props2.closeOnSelect;
      var label = selectedArray.label;

      _this.setState(_objectSpread2(_objectSpread2({}, _this.state), {}, {
        tempSelected: [selectedArray],
        triggerLabel: label,
        open: !closeOnSelect
      }));

      if (onChange) onChange(selectedArray.value, name);
    });

    _defineProperty(_assertThisInitialized(_this), "updateTriggerLabel", function () {
      var selectedArray = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var totalOptions = arguments.length > 1 ? arguments[1] : undefined;
      var selectedLength = selectedArray.length;
      if (selectedLength === 0) return '';
      var _this$props3 = _this.props,
          checkedValuesOffset = _this$props3.checkedValuesOffset,
          onChangeTriggerLabel = _this$props3.onChangeTriggerLabel;
      var optionsLength = _this.state ? _this.state.optionsLength : totalOptions;
      var label = '';

      if (checkedValuesOffset !== undefined && selectedLength <= checkedValuesOffset) {
        label = selectedArray.map(function (option) {
          return option.label;
        }).join(', ');
      } else {
        label = onChangeTriggerLabel ? onChangeTriggerLabel(selectedLength, optionsLength) : "".concat(selectedLength, " selected");
      }

      return label;
    });

    _defineProperty(_assertThisInitialized(_this), "onSelect", function (option, checked) {
      var _this$state2 = _this.state,
          tempSelected = _this$state2.tempSelected,
          optionsLength = _this$state2.optionsLength;
      var _this$props4 = _this.props,
          onChange = _this$props4.onChange,
          showApplyButton = _this$props4.showApplyButton;
      var selectedArray = tempSelected.slice();

      if (!checked) {
        var index = selectedArray.findIndex(function (item) {
          return item.value === option.value;
        });
        selectedArray.splice(index, 1);
      }

      selectedArray = checked ? selectedArray.concat(option) : selectedArray;

      _this.setState(_objectSpread2(_objectSpread2({}, _this.state), {}, {
        tempSelected: selectedArray,
        triggerLabel: _this.updateTriggerLabel(selectedArray),
        selectAll: getSelectAll(selectedArray, optionsLength)
      }));

      if (onChange && !showApplyButton) {
        var values = selectedArray.map(function (item) {
          return item.value;
        });
        onChange(values, name);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectAll", function (checked) {
      var _this$props5 = _this.props,
          onChange = _this$props5.onChange,
          showApplyButton = _this$props5.showApplyButton;
      var _this$state3 = _this.state,
          options = _this$state3.options,
          optionsLength = _this$state3.optionsLength;
      var selectedArray = checked ? options : [];

      _this.setState(_objectSpread2(_objectSpread2({}, _this.state), {}, {
        tempSelected: selectedArray,
        triggerLabel: _this.updateTriggerLabel(selectedArray),
        selectAll: getSelectAll(selectedArray, optionsLength)
      }));

      if (onChange && !showApplyButton) {
        var values = selectedArray.map(function (option) {
          return option.value;
        });
        onChange(values, name);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "debounceSearch", debounce(300, function () {
      return _this.updateOptions(false);
    }));

    _defineProperty(_assertThisInitialized(_this), "onClearOptions", function () {
      var _this$props6 = _this.props,
          onChange = _this$props6.onChange,
          showApplyButton = _this$props6.showApplyButton;

      _this.setState({
        selected: [],
        tempSelected: [],
        triggerLabel: '',
        loading: true
      });

      _this.debounceSearch();

      if (onChange && !showApplyButton) onChange([], name);
    });

    _defineProperty(_assertThisInitialized(_this), "onCancelOptions", function () {
      var _this$state4 = _this.state,
          previousSelected = _this$state4.previousSelected,
          optionsLength = _this$state4.optionsLength,
          tempSelected = _this$state4.tempSelected;

      var label = _this.updateTriggerLabel(previousSelected);

      _this.setState(_objectSpread2(_objectSpread2({}, _this.state), {}, {
        tempSelected: previousSelected,
        selectAll: getSelectAll(previousSelected, optionsLength),
        triggerLabel: label,
        open: false
      }));

      if (_this.props.onClose) {
        var values = tempSelected.map(function (option) {
          return option.value;
        });

        _this.props.onClose(values, name);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onApplyOptions", function () {
      var tempSelected = _this.state.tempSelected;
      var _this$props7 = _this.props,
          onChange = _this$props7.onChange,
          onClose = _this$props7.onClose;

      _this.setState(_objectSpread2(_objectSpread2({}, _this.state), {}, {
        previousSelected: tempSelected,
        optionsApplied: true,
        open: false
      }));

      var values = tempSelected.map(function (option) {
        return option.value;
      });

      if (onChange) {
        onChange(values, name);
      }

      if (onClose) {
        onClose(values, name);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onToggleDropdown", function () {
      if (_this.props.disabled) {
        return;
      }

      var _this$props8 = _this.props,
          showApplyButton = _this$props8.showApplyButton,
          checkboxes = _this$props8.checkboxes,
          onClose = _this$props8.onClose,
          name = _this$props8.name;
      var _this$state5 = _this.state,
          triggerLabel = _this$state5.triggerLabel,
          optionsApplied = _this$state5.optionsApplied,
          previousSelected = _this$state5.previousSelected,
          tempSelected = _this$state5.tempSelected,
          optionsLength = _this$state5.optionsLength,
          open = _this$state5.open,
          async = _this$state5.async,
          selected = _this$state5.selected,
          loading = _this$state5.loading,
          selectAll = _this$state5.selectAll;
      var applyClicked = checkboxes && showApplyButton && !optionsApplied;
      var moveSelectedGroup = async && checkboxes && !_isEqual(selected, tempSelected);

      _this.setState(_objectSpread2(_objectSpread2({}, _this.state), {}, {
        tempSelected: applyClicked ? previousSelected : tempSelected,
        selectAll: applyClicked ? getSelectAll(previousSelected, optionsLength) : selectAll,
        triggerLabel: applyClicked ? _this.updateTriggerLabel(previousSelected) : triggerLabel,
        open: !open,
        optionsApplied: false,
        loading: moveSelectedGroup || loading,
        searchTerm: ''
      }));

      if (moveSelectedGroup) _this.updateOptions(false);

      if (onClose && open) {
        var values = tempSelected.map(function (option) {
          return option.value;
        });
        onClose(values, name);
      }
    });

    var _totalOptions = props.totalOptions,
        _loading = props.loading,
        _props$options = props.options,
        _options = _props$options === void 0 ? [] : _props$options;

    var _optionsLength = _totalOptions ? _totalOptions : _options.length;

    var _async = 'fetchOptions' in _this.props || _optionsLength > bulk;

    var _selectedGroup = !_async ? _this.getSelectedOptions(_options, true) : [];

    _this.state = {
      async: _async,
      optionsLength: _optionsLength,
      searchedOptionsLength: _optionsLength,
      optionsApplied: false,
      options: _options || [],
      loading: _async ? true : _loading,
      searchTerm: '',
      selected: [],
      tempSelected: _selectedGroup,
      previousSelected: _selectedGroup,
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
        var _this$props9 = this.props,
            loading = _this$props9.loading,
            _this$props9$options = _this$props9.options,
            options = _this$props9$options === void 0 ? [] : _this$props9$options;

        if (prevProps.loading !== loading || prevProps.options !== options) {
          if (options.length > bulk) {
            this.updateOptions(true, true);
          } else {
            var selectedGroup = this.getSelectedOptions(options, true);
            this.setState(_objectSpread2(_objectSpread2({}, this.state), {}, {
              options: options,
              loading: loading,
              tempSelected: selectedGroup,
              previousSelected: selectedGroup,
              optionsLength: options.length,
              searchedOptionsLength: options.length,
              triggerLabel: this.updateTriggerLabel(selectedGroup),
              selectAll: getSelectAll(selectedGroup, this.state.optionsLength)
            }));
          }
        }
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
          loading = _this$state6.loading,
          searchedOptionsLength = _this$state6.searchedOptionsLength,
          tempSelected = _this$state6.tempSelected,
          selectAll = _this$state6.selectAll,
          selected = _this$state6.selected,
          triggerLabel = _this$state6.triggerLabel,
          previousSelected = _this$state6.previousSelected;

      var _this$props10 = this.props,
          loadersLength = _this$props10.loadersLength,
          rest = _objectWithoutProperties(_this$props10, ["loadersLength"]);

      var remainingOptionsLen = searchedOptionsLength - options.length;
      return /*#__PURE__*/createElement(DropdownList, _extends({
        listOptions: options,
        remainingOptions: remainingOptionsLen,
        loadingOptions: loading,
        async: async,
        dropdownOpen: open,
        searchTerm: searchTerm,
        triggerLabel: triggerLabel,
        tempSelected: tempSelected,
        previousSelected: previousSelected,
        selected: selected,
        applyOptions: this.onApplyOptions,
        cancelOptions: this.onCancelOptions,
        toggleDropdown: this.onToggleDropdown,
        onClearOptions: this.onClearOptions,
        onSelect: this.onSelect,
        selectAll: selectAll,
        onSearchChange: this.updateSearchTerm,
        onOptionSelect: this.onOptionSelect,
        onSelectAll: this.onSelectAll
      }, rest));
    }
  }]);

  return Dropdown;
}(Component);

_defineProperty(Dropdown, "defaultProps", {
  closeOnSelect: true,
  checkedValuesOffset: 2
});

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
  return /*#__PURE__*/createElement(Dropdown, {
    triggerSize: 'tiny',
    customTrigger: function customTrigger() {
      return /*#__PURE__*/createElement(Button, {
        size: "tiny",
        appearance: "transparent",
        icon: "more_horiz_filled"
      });
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
      onClick = props.onClick;
  return /*#__PURE__*/createElement("div", {
    className: "Breadcrumbs"
  }, list.length <= 4 ? list.map(function (item, index) {
    return /*#__PURE__*/createElement("div", {
      key: index,
      className: "Breadcrumbs-item"
    }, renderLink(item, onClick), /*#__PURE__*/createElement("span", {
      className: "Breadcrumbs-itemSeparator"
    }, "/"));
  }) : /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement("div", {
    className: "Breadcrumbs-item"
  }, renderLink(list[0], onClick), /*#__PURE__*/createElement("span", {
    className: "Breadcrumbs-itemSeparator"
  }, "/")), /*#__PURE__*/createElement("div", {
    className: "Breadcrumbs-dropdown"
  }, renderDropdown(list.slice(1, list.length - 1), onClick), /*#__PURE__*/createElement("span", {
    className: "Breadcrumbs-itemSeparator"
  }, "/")), /*#__PURE__*/createElement("div", {
    className: "Breadcrumbs-item"
  }, renderLink(list[list.length - 1], onClick), /*#__PURE__*/createElement("span", {
    className: "Breadcrumbs-itemSeparator"
  }, "/"))));
};

var Card = function Card(props) {
  var _classNames;

  var _props$shadow = props.shadow,
      shadow = _props$shadow === void 0 ? 'medium' : _props$shadow,
      children = props.children,
      className = props.className,
      rest = _objectWithoutProperties(props, ["shadow", "children", "className"]);

  var classes = classNames((_classNames = {
    Card: true
  }, _defineProperty(_classNames, "Card--shadow-".concat(shadow), shadow), _defineProperty(_classNames, "".concat(className), className), _classNames));
  return /*#__PURE__*/createElement("div", _extends({
    className: classes
  }, rest), children);
};
Card.displayName = 'Card';

var Column = function Column(props) {
  var _classNames;

  var size = props.size,
      sizeXS = props.sizeXS,
      sizeS = props.sizeS,
      sizeM = props.sizeM,
      sizeL = props.sizeL,
      sizeXL = props.sizeXL,
      className = props.className;
  var classes = classNames((_classNames = {}, _defineProperty(_classNames, 'Col', true), _defineProperty(_classNames, "Col--".concat(size), size), _defineProperty(_classNames, "Col--xs-".concat(sizeXS), sizeXS), _defineProperty(_classNames, "Col--s-".concat(sizeS), sizeS), _defineProperty(_classNames, "Col--m-".concat(sizeM), sizeM), _defineProperty(_classNames, "Col--l-".concat(sizeL), sizeL), _defineProperty(_classNames, "Col--xl-".concat(sizeXL), sizeXL), _defineProperty(_classNames, "".concat(className), className), _classNames));
  return /*#__PURE__*/createElement("div", {
    className: classes
  }, props.children);
};
Column.displayName = 'Column';

var sizeMap = {
  m: 'h4',
  l: 'h3',
  xl: 'h2',
  xxl: 'h1',
  "default": 'h3'
};
var Heading = function Heading(props) {
  var _classNames;

  var _props$size = props.size,
      size = _props$size === void 0 ? 'default' : _props$size,
      _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      children = props.children,
      rest = _objectWithoutProperties(props, ["size", "appearance", "children"]);

  var classes = classNames((_classNames = {
    Heading: true
  }, _defineProperty(_classNames, "Heading--".concat(size), size !== 'default'), _defineProperty(_classNames, "Heading--".concat(appearance), appearance), _classNames));
  return /*#__PURE__*/createElement(GenericText, _extends({
    className: classes,
    componentType: sizeMap[size]
  }, rest), children);
};
Heading.displayName = 'Heading';

var Subheading = function Subheading(props) {
  var _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      children = props.children,
      rest = _objectWithoutProperties(props, ["appearance", "children"]);

  var classes = classNames(_defineProperty({
    Subheading: true
  }, "Subheading--".concat(appearance), appearance));
  return /*#__PURE__*/createElement(GenericText, _extends({
    className: classes,
    componentType: 'h4'
  }, rest), children);
};
Subheading.displayName = 'Subheading';

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
var convertToDate = function convertToDate(d, format, validator) {
  var dateVal;

  if (d) {
    if (typeof d === 'number') {
      dateVal = new Date(d);
    } else if (typeof d === 'string') {
      return format ? translateToDate(format, d, validator) : undefined;
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
var translateToString = function translateToString(format, d) {
  var _getDateInfo3 = getDateInfo(d),
      year = _getDateInfo3.year,
      month = _getDateInfo3.month,
      date = _getDateInfo3.date;

  var separator = format.includes('/') ? '/' : '-';
  var f = format.split(separator);
  var val = f.reduce(function (out, curr, i) {
    switch (curr) {
      case 'mm':
        out += (month < 10 && '0') + (month + 1);
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
};
var translateToDate = function translateToDate(format, val, validator) {
  var isValid = validator ? validator(format, val) : true;

  if (isValid) {
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

var Calendar = function Calendar(props) {
  var _props$monthsInView = props.monthsInView,
      monthsInView = _props$monthsInView === void 0 ? 1 : _props$monthsInView,
      _props$view = props.view,
      viewProp = _props$view === void 0 ? 'date' : _props$view,
      _props$firstDayOfWeek = props.firstDayOfWeek,
      firstDayOfWeek = _props$firstDayOfWeek === void 0 ? 'sunday' : _props$firstDayOfWeek,
      dateProp = props.date,
      startDateProp = props.startDate,
      endDateProp = props.endDate,
      rangePicker = props.rangePicker,
      _props$yearNav = props.yearNav,
      yearNavProp = _props$yearNav === void 0 ? getDateInfo((rangePicker ? endDateProp || startDateProp : dateProp) || Date.now()).year : _props$yearNav,
      _props$monthNav = props.monthNav,
      monthNavProp = _props$monthNav === void 0 ? getDateInfo((rangePicker ? endDateProp || startDateProp : dateProp) || Date.now()).month : _props$monthNav,
      rangeLimit = props.rangeLimit,
      disabledBefore = props.disabledBefore,
      disabledAfter = props.disabledAfter,
      onDateChange = props.onDateChange,
      onRangeChange = props.onRangeChange;
  var _props$jumpView = props.jumpView,
      jumpView = _props$jumpView === void 0 ? true : _props$jumpView;

  if (jumpView) {
    if (monthsInView > 1) jumpView = false;
  }

  var yearBlockRange = config.yearBlockRange,
      yearsInRow = config.yearsInRow,
      monthBlock = config.monthBlock,
      monthsInRow = config.monthsInRow,
      daysInRow = config.daysInRow,
      months = config.months,
      days = config.days;

  var _React$useState = useState$4(monthsInView > 1 ? 'date' : viewProp),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      view = _React$useState2[0],
      setView = _React$useState2[1];

  var _React$useState3 = useState$4({
    year: undefined,
    month: undefined,
    date: undefined
  }),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      state = _React$useState4[0],
      setState = _React$useState4[1];

  var _React$useState5 = useState$4(dateProp),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      currDateState = _React$useState6[0],
      setCurrDateState = _React$useState6[1];

  var _React$useState7 = useState$4(),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      hoverDateState = _React$useState8[0],
      setHoverDateState = _React$useState8[1];

  var _React$useState9 = useState$4(startDateProp),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      startDateState = _React$useState10[0],
      setStartDateState = _React$useState10[1];

  var _React$useState11 = useState$4(endDateProp),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      endDateState = _React$useState12[0],
      setEndDateState = _React$useState12[1];

  var _React$useState13 = useState$4(getYearBlock(yearNavProp)),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      yearBlockNav = _React$useState14[0],
      setYearBlockNav = _React$useState14[1];

  var _React$useState15 = useState$4(yearNavProp),
      _React$useState16 = _slicedToArray(_React$useState15, 2),
      yearNav = _React$useState16[0],
      setYearNav = _React$useState16[1];

  var _React$useState17 = useState$4(monthNavProp),
      _React$useState18 = _slicedToArray(_React$useState17, 2),
      monthNav = _React$useState18[0],
      setMonthNav = _React$useState18[1];

  var yearState = state.year,
      monthState = state.month,
      dateState = state.date;
  useEffect$3(function () {
    var _getDateInfo = getDateInfo(dateProp),
        year = _getDateInfo.year,
        month = _getDateInfo.month,
        date = _getDateInfo.date;

    updateState(year, month, date);
    var d = convertToDate(dateProp);
    setCurrDateState(d);
  }, [dateProp]);
  useEffect$3(function () {
    var d = convertToDate(startDateProp);
    setStartDateState(d);
  }, [startDateProp]);
  useEffect$3(function () {
    var d = convertToDate(endDateProp);
    setEndDateState(d);
  }, [endDateProp]);
  useEffect$3(function () {
    if (monthsInView === 1) setView(viewProp);else setView('date');
  }, [monthsInView, viewProp]);
  useEffect$3(function () {
    if (currDateState) {
      if (onDateChange) onDateChange(currDateState);

      if (rangePicker) {
        if (startDateState && endDateState) {
          setEndDateState(undefined);
          setHoverDateState(undefined);
          setStartDateState(currDateState);
        } else {
          var _getDateInfo2 = getDateInfo(currDateState),
              year = _getDateInfo2.year,
              month = _getDateInfo2.month,
              _date = _getDateInfo2.date;

          if (startDateState) {
            if (compareDate(startDateState, 'more', year, month, _date)) {
              setStartDateState(currDateState);
            } else {
              setEndDateState(currDateState);
            }
          } else if (endDateState) {
            if (compareDate(endDateState, 'less', year, month, _date)) {
              setEndDateState(currDateState);
            } else {
              setStartDateState(currDateState);
            }
          } else {
            setStartDateState(currDateState);
          }
        }
      } else {
        setStartDateState(currDateState);
      }
    }
  }, [currDateState]);
  useEffect$3(function () {
    if (onRangeChange) onRangeChange(startDateState, endDateState);
  }, [startDateState, endDateState]);
  useEffect$3(function () {
    if (yearState !== undefined && monthsInView < 2) {
      setYearBlockNav(getYearBlock(yearState));
      setYearNav(yearState);
    }
  }, [yearState]);
  useEffect$3(function () {
    if (monthState !== undefined && monthsInView < 2) {
      setMonthNav(monthState);
    }
  }, [monthState]);
  useEffect$3(function () {
    setYearNav(yearNavProp);
    setYearBlockNav(getYearBlock(yearNavProp));
  }, [yearNavProp]);
  useEffect$3(function () {
    setMonthNav(monthNavProp);
  }, [monthNavProp]);

  var getDateValue = function getDateValue(year, month, date) {
    var d = new Date(year, month, date);

    if (compareDate(disabledBefore, 'more', year, month, date) || compareDate(disabledAfter, 'less', year, month, date)) {
      return undefined;
    }

    return d;
  };

  var getNavDateInfo = function getNavDateInfo(index) {
    var yearBlock = yearBlockNav;
    var month = (monthNav + index) % monthBlock;
    var year = yearNav + (index !== 0 && month < monthNav ? 1 : 0);
    return {
      yearBlock: yearBlock,
      year: year,
      month: month
    };
  };

  var getInRangeError = function getInRangeError() {
    if (rangePicker && rangeLimit) {
      var _getDateInfo3 = getDateInfo(startDateState),
          startYear = _getDateInfo3.year,
          startMonth = _getDateInfo3.month,
          _startDate = _getDateInfo3.date;

      var _getDateInfo4 = getDateInfo(endDateState),
          endYear = _getDateInfo4.year,
          endMonth = _getDateInfo4.month,
          _endDate = _getDateInfo4.date;

      var _getDateInfo5 = getDateInfo(hoverDateState),
          hoverYear = _getDateInfo5.year,
          hoverMonth = _getDateInfo5.month,
          hoverDate = _getDateInfo5.date;

      var limitDate;

      if (startDateState) {
        limitDate = new Date(startDateState);
        limitDate.setDate(_startDate + rangeLimit);
        return compareDate(limitDate, 'less', hoverYear, hoverMonth, hoverDate + 1) || compareDate(limitDate, 'less', endYear, endMonth, _endDate + 1);
      }

      if (endDateState) {
        limitDate = new Date(endDateState);
        limitDate.setDate(_endDate - rangeLimit);
        return compareDate(limitDate, 'more', hoverYear, hoverMonth, hoverDate - 1) || compareDate(limitDate, 'more', startYear, startMonth, _startDate - 1);
      }
    }

    return false;
  };

  var updateState = function updateState(year, month, date) {
    setState({
      year: year,
      month: month,
      date: date
    });
  };

  var selectYear = function selectYear(year) {
    updateState(year);
    setView('month');
  };

  var selectMonth = function selectMonth(month) {
    updateState(yearNav, month);
    setView('date');
  };

  var selectDate = function selectDate(index, date) {
    var _getNavDateInfo = getNavDateInfo(index),
        yearNavVal = _getNavDateInfo.year,
        monthNavVal = _getNavDateInfo.month;

    updateState(yearNavVal, monthNavVal, date);
    var d = getDateValue(yearNavVal, monthNavVal, date);
    setCurrDateState(d);
  };

  var renderJumpButton = function renderJumpButton(type) {
    var navClickHandler = function navClickHandler() {
      switch (view) {
        case 'year':
          if (type === 'prev') setYearBlockNav(yearBlockNav - yearBlockRange);
          if (type === 'next') setYearBlockNav(yearBlockNav + yearBlockRange);
          break;

        case 'month':
          if (type === 'prev') setYearNav(yearNav - 1);
          if (type === 'next') setYearNav(yearNav + 1);
          break;

        case 'date':
          if (type === 'prev') {
            if (monthNav === 0) setYearNav(yearNav - 1);
            setMonthNav((monthBlock + monthNav - 1) % monthBlock);
          }

          if (type === 'next') {
            if (monthNav === monthBlock - 1) setYearNav(yearNav + 1);
            setMonthNav((monthNav + 1) % monthBlock);
          }

          break;
      }
    };

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
    return /*#__PURE__*/createElement("div", {
      className: headerIconClass
    }, /*#__PURE__*/createElement(Icon, {
      name: "arrow_".concat(type === 'next' ? 'forward' : 'back'),
      className: "p-4",
      onClick: navClickHandler
    }));
  };

  var renderHeaderContent = function renderHeaderContent(index) {
    var _getNavDateInfo2 = getNavDateInfo(index),
        yearNavVal = _getNavDateInfo2.year,
        monthNavVal = _getNavDateInfo2.month;

    var headerContentClass = classNames({
      'Calendar-headerContent': true,
      'Calendar-headerContent--noIcon-left': index === monthsInView - 1,
      'Calendar-headerContent--noIcon-right': index === 0
    });
    var headerContent = '';

    var onClickHandler = function onClickHandler() {
      if (jumpView) {
        if (view === 'year') setView('date');
        if (view === 'month') setView('year');
        if (view === 'date') setView('month');
      }
    };

    if (view === 'year') headerContent = "".concat(yearBlockNav, " - ").concat(yearBlockNav + (yearBlockRange - 1));
    if (view === 'month') headerContent = "".concat(yearNavVal);
    if (view === 'date') headerContent = "".concat(months[monthNavVal], " ").concat(yearNavVal);
    return /*#__PURE__*/createElement("div", {
      className: headerContentClass,
      onClick: onClickHandler
    }, /*#__PURE__*/createElement(Heading, null, headerContent));
  };

  var renderBodyYear = function renderBodyYear() {
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
        var active = !disabled && !rangePicker && yearNav === year;
        var valueClass = classNames({
          'Calendar-value': true,
          'Calendar-value--active': active,
          'Calendar-value--disabled': disabled
        });
        return /*#__PURE__*/createElement("div", {
          className: valueClass,
          onClick: function onClick() {
            return selectYear(year);
          }
        }, /*#__PURE__*/createElement(Text, {
          appearance: active ? 'white' : disabled ? 'disabled' : 'default'
        }, "".concat(year)));
      }));
    });
  };

  var renderBodyMonth = function renderBodyMonth() {
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
        var active = !disabled && yearState === yearNav && monthNav === month;
        var valueClass = classNames({
          'Calendar-value': true,
          'Calendar-value--active': active,
          'Calendar-value--dummy': disabled
        });
        return /*#__PURE__*/createElement("div", {
          className: valueClass,
          onClick: function onClick() {
            return selectMonth(month);
          }
        }, /*#__PURE__*/createElement(Text, {
          appearance: active ? 'white' : disabled ? 'disabled' : 'default'
        }, months[month]));
      }));
    });
  };

  var renderBodyDate = function renderBodyDate(index) {
    var onMouseLeaveHandler = function onMouseLeaveHandler() {
      if (rangePicker) {
        setHoverDateState(undefined);
      }
    };

    return /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement("div", {
      className: "Calendar-dayValues"
    }, renderDayValues()), /*#__PURE__*/createElement("div", {
      className: "Calendar-dateValues",
      onMouseLeave: onMouseLeaveHandler
    }, renderDateValues(index)));
  };

  var renderDayValues = function renderDayValues() {
    return Array.from({
      length: 7
    }, function (_x, day) {
      var valueClass = classNames({
        'Calendar-value': true,
        'Calendar-value--dummy': true
      });
      var dayValue = (day + daysInRow + getIndexOfDay(firstDayOfWeek)) % daysInRow;
      return /*#__PURE__*/createElement("div", {
        className: valueClass
      }, /*#__PURE__*/createElement(Subheading, {
        appearance: "disabled"
      }, days[dayValue]));
    });
  };

  var renderDateValues = function renderDateValues(index) {
    var _getNavDateInfo3 = getNavDateInfo(index),
        yearNavVal = _getNavDateInfo3.year,
        monthNavVal = _getNavDateInfo3.month;

    var dayRange = getDaysInMonth(yearNavVal, monthNavVal);
    var dayDiff = getFirstDayOfMonth(yearNavVal, monthNavVal) - getIndexOfDay(firstDayOfWeek);
    var dummyDays = (dayDiff + daysInRow) % daysInRow;
    var noOfRows = Math.ceil((dayRange + dummyDays) / daysInRow);
    var inRangeError = getInRangeError();

    var onClickHandler = function onClickHandler(date) {
      if (rangePicker) {
        if (startDateState && endDateState) {
          selectDate(index, date);
        } else {
          if (!inRangeError) selectDate(index, date);
        }
      } else {
        selectDate(index, date);
      }
    };

    var onMouseOverHandler = function onMouseOverHandler(date) {
      if (rangePicker) {
        var d = getDateValue(yearNavVal, monthNavVal, date);

        if (!(startDateState && endDateState)) {
          setHoverDateState(d);
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
        var inRange = false;

        if (rangePicker) {
          active = !disabled && (compareDate(startDateState, 'equal', yearNavVal, monthNavVal, date) || compareDate(endDateState, 'equal', yearNavVal, monthNavVal, date));

          if (startDateState && endDateState) {
            inRange = !disabled && compareDate(startDateState, 'less', yearNavVal, monthNavVal, date) && compareDate(endDateState, 'more', yearNavVal, monthNavVal, date);
          } else if (startDateState) {
            inRange = !disabled && (compareDate(hoverDateState, 'more', yearNavVal, monthNavVal, date) || compareDate(hoverDateState, 'equal', yearNavVal, monthNavVal, date)) && compareDate(startDateState, 'less', yearNavVal, monthNavVal, date);
          } else if (endDateState) {
            inRange = !disabled && (compareDate(hoverDateState, 'less', yearNavVal, monthNavVal, date) || compareDate(hoverDateState, 'equal', yearNavVal, monthNavVal, date)) && compareDate(endDateState, 'more', yearNavVal, monthNavVal, date);
          }
        }

        var valueClass = classNames({
          'Calendar-value': true,
          'Calendar-value--active': active,
          'Calendar-value--dummy': dummy || disabled,
          'Calendar-value--disabled': disabled,
          'Calendar-value--inRange': inRange,
          'Calendar-value--inRange-error': inRange && inRangeError
        });
        return /*#__PURE__*/createElement("div", {
          className: valueClass,
          onClick: function onClick() {
            return onClickHandler(date);
          },
          onMouseOver: function onMouseOver() {
            return onMouseOverHandler(date);
          }
        }, !dummy && /*#__PURE__*/createElement(Text, {
          appearance: active ? 'white' : disabled ? 'disabled' : 'default'
        }, "".concat(date)));
      })));
    });
  };

  var renderCalendar = function renderCalendar(index) {
    var _classNames;

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
    }, index === 0 && renderJumpButton('prev'), renderHeaderContent(index), index === monthsInView - 1 && renderJumpButton('next')), /*#__PURE__*/createElement("div", {
      className: bodyClass
    }, view === 'year' && renderBodyYear(), view === 'month' && renderBodyMonth(), view === 'date' && renderBodyDate(index)));
  };

  return /*#__PURE__*/createElement("div", {
    className: "Calendar-wrapper"
  }, Array.from({
    length: monthsInView
  }, function (_x, index) {
    return renderCalendar(index);
  }));
};
Calendar.displayName = 'Calendar';

var Caption = function Caption(props) {
  var _props$error = props.error,
      error = _props$error === void 0 ? false : _props$error,
      children = props.children;
  var classes = classNames({
    Caption: true
  });
  var errorIconClass = classNames(_defineProperty({}, 'Caption-icon', true));
  return /*#__PURE__*/createElement("div", {
    className: classes
  }, error && /*#__PURE__*/createElement("div", {
    className: errorIconClass
  }, /*#__PURE__*/createElement(Icon, {
    size: 14,
    name: 'error',
    appearance: 'alert'
  })), /*#__PURE__*/createElement(Text, {
    appearance: error ? 'destructive' : 'subtle',
    small: true,
    weight: "medium"
  }, "".concat(children)));
};
Caption.displayName = 'Caption';

var InputMask = /*#__PURE__*/forwardRef(function (props, forwardRef) {
  var maskProp = props.mask,
      valueProp = props.value,
      _props$placeholderCha = props.placeholderChar,
      placeholderChar = _props$placeholderCha === void 0 ? '_' : _props$placeholderCha,
      mask = props.mask,
      error = props.error,
      caption = props.caption,
      onChange = props.onChange,
      onBlur = props.onBlur,
      onClick = props.onClick,
      onClear = props.onClear,
      rest = _objectWithoutProperties(props, ["mask", "value", "placeholderChar", "mask", "error", "caption", "onChange", "onBlur", "onClick", "onClear"]);

  var _React$useState = useState$4(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var _React$useState3 = useState$4(0),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      caret = _React$useState4[0],
      setCaret = _React$useState4[1];

  var ref = useRef$1(null);
  var fixedMask = mask.filter(function (m) {
    return typeof m === 'string' && m.length === 1;
  });
  useEffect$3(function () {
    if (valueProp) {
      setValue(convertToMasked(valueProp));
    }
  }, [valueProp]);
  useEffect$3(function () {
    setCaretPos(caret);
  }, [caret]);
  useEffect$3(function () {
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
    setValue(maskedVal);
    if (onChange) onChange(e, maskedVal);
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

  return /*#__PURE__*/createElement("div", null, /*#__PURE__*/createElement(Input, _extends({}, rest, {
    value: value,
    error: error,
    onClick: onClickHandler,
    onChange: onChangeHandler,
    onClear: onClearHandler,
    onBlur: onBlurHandler,
    autocomplete: 'off',
    ref: ref
  })), error && /*#__PURE__*/createElement(Caption, {
    error: error
  }, error ? caption || 'Invalid Value' : caption));
});

var dateMask = {
  'dd/mm/yyyy': [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
  'mm/dd/yyyy': [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
  'yyyy/mm/dd': [/\d/, /\d/, /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/],
  'dd-mm-yyyy': [/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  'mm-dd-yyyy': [/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  'yyyy-mm-dd': [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]
};
var e = {
  date: dateMask
};

var dateValidator = function dateValidator(format, val) {
  var validate = function validate(date, month, year) {
    // Check the ranges of month and year
    if (year < 1000 || year > 3000 || month == 0 || month > 12) return false;
    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // Adjust for leap years

    if (year % 400 == 0 || year % 100 != 0 && year % 4 == 0) monthLength[1] = 29; // Check the range of the day

    return date > 0 && date <= monthLength[month - 1];
  };

  switch (format) {
    case 'dd/mm/yyyy':
      var p = val.split('/');
      var date = +p[0];
      var month = +p[1];
      var year = +p[2];
      return validate(date, month, year);

    case 'mm/dd/yyyy':
      var p = val.split('/');
      var date = +p[1];
      var month = +p[0];
      var year = +p[2];
      return validate(date, month, year);

    case 'yyyy/mm/dd':
      var p = val.split('/');
      var date = +p[2];
      var month = +p[1];
      var year = +p[0];
      return validate(date, month, year);

    case 'dd-mm-yyyy':
      var p = val.split('-');
      var date = +p[0];
      var month = +p[1];
      var year = +p[2];
      return validate(date, month, year);

    case 'mm-dd-yyyy':
      var p = val.split('-');
      var date = +p[1];
      var month = +p[0];
      var year = +p[2];
      return validate(date, month, year);

    case 'yyyy-mm-dd':
      var p = val.split('-');
      var date = +p[2];
      var month = +p[1];
      var year = +p[0];
      return validate(date, month, year);

    default:
      return false;
  }
};
var e$1 = {
  date: dateValidator
};

var DatePicker = function DatePicker(props) {
  var dateProp = props.date,
      _props$open = props.open,
      openProp = _props$open === void 0 ? false : _props$open,
      _props$position = props.position,
      position = _props$position === void 0 ? 'bottom-start' : _props$position,
      _props$inputFormat = props.inputFormat,
      inputFormat = _props$inputFormat === void 0 ? 'mm/dd/yyyy' : _props$inputFormat,
      _props$outputFormat = props.outputFormat,
      outputFormat = _props$outputFormat === void 0 ? 'mm/dd/yyyy' : _props$outputFormat,
      _props$inputProps = props.inputProps,
      inputProps = _props$inputProps === void 0 ? {
    name: 'datepicker',
    placeholder: inputFormat,
    placeholderChar: '_'
  } : _props$inputProps,
      _props$mask = props.mask,
      mask = _props$mask === void 0 ? e.date[inputFormat] : _props$mask,
      _props$validator = props.validator,
      validator = _props$validator === void 0 ? e$1.date : _props$validator,
      withInput = props.withInput,
      disabledBefore = props.disabledBefore,
      disabledAfter = props.disabledAfter,
      onDateChange = props.onDateChange,
      rest = _objectWithoutProperties(props, ["date", "open", "position", "inputFormat", "outputFormat", "inputProps", "mask", "validator", "withInput", "disabledBefore", "disabledAfter", "onDateChange"]);

  var _React$useState = useState$4(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      init = _React$useState2[0],
      setInit = _React$useState2[1];

  var _React$useState3 = useState$4(),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      date = _React$useState4[0],
      setDate = _React$useState4[1];

  var _React$useState5 = useState$4(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      error = _React$useState6[0],
      setError = _React$useState6[1];

  var _React$useState7 = useState$4(openProp),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      open = _React$useState8[0],
      setOpen = _React$useState8[1];

  useEffect$3(function () {
    var d = convertToDate(dateProp, inputFormat, validator);
    setDate(d);
  }, [dateProp]);
  useEffect$3(function () {
    setOpen(openProp);
  }, [openProp]);
  useEffect$3(function () {
    setError(!date);

    if (onDateChange) {
      if (init && date) {
        var dVal = translateToString(outputFormat, date);
        onDateChange(date, dVal);
      }
    }
  }, [date]);

  var onDateChangeHandler = function onDateChangeHandler(d) {
    setInit(true);
    if (d) setDate(d);
  };

  if (withInput) {
    var onChangeHandler = function onChangeHandler(_e, val) {
      setOpen(true);
      setInit(true);
      var placeholderChar = '_';

      if (val && !val.includes(placeholderChar)) {
        var d = translateToDate(inputFormat, val, validator);
        if (d) setDate(d);
      }
    };

    var onBlurHandler = function onBlurHandler(_e, val) {
      var placeholderChar = '_';

      if (!val || val.includes(placeholderChar)) {
        setDate(undefined);
      }
    };

    var onClearHandler = function onClearHandler() {
      setDate(undefined);
    };

    var onToggleHandler = function onToggleHandler(o, type) {
      switch (type) {
        case 'outsideClick':
          setOpen(o);
          break;

        case 'onClick':
          setOpen(true);
          break;
      }
    };

    var trigger = /*#__PURE__*/createElement(InputMask, _extends({}, inputProps, {
      error: error,
      mask: mask,
      value: date ? translateToString(inputFormat, date) : '',
      onChange: onChangeHandler,
      onBlur: onBlurHandler,
      onClear: onClearHandler
    }));
    return /*#__PURE__*/createElement(Popover, {
      trigger: trigger,
      position: position,
      appendToBody: true,
      open: open,
      onToggle: onToggleHandler
    }, /*#__PURE__*/createElement(Calendar, _extends({}, rest, {
      date: convertToDate(date, inputFormat, validator),
      disabledBefore: convertToDate(disabledBefore, inputFormat, validator),
      disabledAfter: convertToDate(disabledAfter, inputFormat, validator),
      onDateChange: onDateChangeHandler
    })));
  }

  return /*#__PURE__*/createElement(Calendar, _extends({}, rest, {
    date: convertToDate(date, inputFormat, validator),
    disabledBefore: convertToDate(disabledBefore, inputFormat, validator),
    disabledAfter: convertToDate(disabledAfter, inputFormat, validator),
    onDateChange: onDateChangeHandler
  }));
};
DatePicker.displayName = 'DatePicker';

var DonutChart = function DonutChart(props) {
  var _props$donutWidth = props.donutWidth,
      donutWidth = _props$donutWidth === void 0 ? 20 : _props$donutWidth,
      _props$colors = props.colors,
      colors = _props$colors === void 0 ? ['primary', 'secondary', 'success', 'warning', 'alert'] : _props$colors,
      _props$withCenterText = props.withCenterText,
      withCenterText = _props$withCenterText === void 0 ? true : _props$withCenterText,
      _props$colorOfTotalCo = props.colorOfTotalCount,
      colorOfTotalCount = _props$colorOfTotalCo === void 0 ? 'success' : _props$colorOfTotalCo,
      data = props.data,
      radius = props.radius,
      withLegends = props.withLegends,
      withTooltip = props.withTooltip,
      withActiveSegment = props.withActiveSegment;
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
      fill: colorToHex(colorOfTotalCount)
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

  var _React$useState = useState$4(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      activeIndex = _React$useState2[0],
      setActiveIndex = _React$useState2[1];

  var onPieEnter = function onPieEnter(_data, index) {
    setActiveIndex(index);
  };

  var getColor = function getColor(index, type) {
    var color = colors[index % colors.length];
    var colorHex = colorToHex(color);
    return type === 'hex' ? colorHex : color;
  };

  var oRadius = withActiveSegment ? radius ? .7 * radius : '70%' : radius || '100%';
  var iRadius = withActiveSegment ? radius ? (100 - donutWidth) / 100 * oRadius : "".concat((100 - donutWidth) / 100 * 70, "%") : radius ? (100 - donutWidth) / 100 * radius : "".concat(100 - donutWidth, "%"); // const tooltipPayload = data.reduce((out: Data[], curr) => {
  //   out.push({
  //     name: curr.name,
  //     value: (+curr.value).toLocaleString()
  //   });
  //   return out;
  // }, []);

  return /*#__PURE__*/createElement(Row, {
    className: "DonutChart"
  }, /*#__PURE__*/createElement(Column, columnOptions.chart, /*#__PURE__*/createElement(ResponsiveContainer, null, /*#__PURE__*/createElement(PieChart, null, /*#__PURE__*/createElement(Pie, {
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
      label: "".concat(d.name, " - ").concat((+d.value).toLocaleString()),
      iconAppearance: getColor(i)
    });
  })));
};

var Label = function Label(props) {
  var _props$required = props.required,
      required = _props$required === void 0 ? false : _props$required,
      disabled = props.disabled,
      children = props.children,
      className = props.className,
      rest = _objectWithoutProperties(props, ["required", "disabled", "children", "className"]);

  var LabelClass = classNames(_defineProperty({
    Label: true
  }, "".concat(className), className));
  var classes = classNames({
    'Label-label': true,
    'Label--disabled': disabled
  });
  return /*#__PURE__*/createElement("div", {
    className: LabelClass
  }, /*#__PURE__*/createElement(GenericText, _extends({
    className: classes,
    componentType: "label"
  }, rest), children), required && /*#__PURE__*/createElement("span", {
    className: "Label-requiredIndicator"
  }));
};
Label.displayName = 'Label';

var Legend = function Legend(props) {
  var _props$iconAppearance = props.iconAppearance,
      iconAppearance = _props$iconAppearance === void 0 ? 'inverse' : _props$iconAppearance,
      _props$iconSize = props.iconSize,
      iconSize = _props$iconSize === void 0 ? 14 : _props$iconSize,
      labelAppearance = props.labelAppearance,
      label = props.label,
      labelWeight = props.labelWeight,
      _onMouseEnter = props.onMouseEnter,
      _onMouseLeave = props.onMouseLeave,
      _onClick = props.onClick,
      style = props.style;
  var legendClass = classNames(_defineProperty({}, 'Legend', true));
  var styles = {
    background: "var(--".concat(iconAppearance, ")"),
    height: "".concat(iconSize, "px"),
    width: "".concat(iconSize, "px")
  };
  return /*#__PURE__*/createElement("div", {
    className: legendClass,
    onClick: function onClick(e) {
      return _onClick && _onClick(e);
    },
    onMouseEnter: function onMouseEnter(e) {
      return _onMouseEnter && _onMouseEnter(e);
    },
    onMouseLeave: function onMouseLeave(e) {
      return _onMouseLeave && _onMouseLeave(e);
    },
    style: style
  }, /*#__PURE__*/createElement("span", {
    className: "Legend-icon",
    style: styles
  }), /*#__PURE__*/createElement(Text, {
    appearance: labelAppearance,
    weight: labelWeight
  }, label));
};
Legend.displayName = 'Legend';

var Link = function Link(props) {
  var children = props.children,
      rest = _objectWithoutProperties(props, ["children"]);

  var classes = classNames({
    Link: true
  });
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

  var _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      title = props.title,
      children = props.children;
  var MessageClass = classNames((_classNames = {}, _defineProperty(_classNames, 'Message', true), _defineProperty(_classNames, "Message--".concat(appearance), appearance), _classNames));
  var MessageIcon = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'Message-icon', true), _defineProperty(_classNames2, "Message-icon--".concat(appearance), appearance), _defineProperty(_classNames2, 'Message-icon--withTitle', title), _classNames2));
  return /*#__PURE__*/createElement("div", {
    className: MessageClass
  }, appearance !== 'default' && /*#__PURE__*/createElement("div", {
    className: MessageIcon
  }, /*#__PURE__*/createElement(Icon, {
    name: IconMapping[appearance],
    appearance: appearance
  })), /*#__PURE__*/createElement("div", null, title && /*#__PURE__*/createElement("div", {
    className: "Message-title"
  }, /*#__PURE__*/createElement(Heading, null, title)), /*#__PURE__*/createElement("div", {
    className: "Message-description"
  }, children)));
};
Message.displayName = 'Message';

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
  var _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      children = props.children,
      rest = _objectWithoutProperties(props, ["appearance", "children"]);

  var classes = classNames(_defineProperty({
    Text: true
  }, "Text--".concat(appearance), appearance));
  return /*#__PURE__*/createElement(GenericText, _extends({
    className: classes,
    componentType: "p"
  }, rest), children);
};
Paragraph.displayName = 'Paragraph';

var useIsMount = function useIsMount() {
  var isMountRef = useRef$1(true);
  useEffect$3(function () {
    isMountRef.current = false;
  }, []);
  return isMountRef.current;
};
var ProgressBar = function ProgressBar(props) {
  var value = props.value,
      onChange = props.onChange;
  var isMount = useIsMount();
  useEffect$3(function () {
    if (onChange && !isMount) onChange(value);
  }, [value]);
  var style = {
    width: "".concat(value, "%")
  };
  var ProgressBarClass = classNames({
    ProgressBar: true
  });
  return /*#__PURE__*/createElement("div", {
    className: ProgressBarClass
  }, /*#__PURE__*/createElement("div", {
    className: 'ProgressBar-indicator',
    style: style
  }));
};
ProgressBar.displayName = 'ProgressBar';

var Radio = /*#__PURE__*/forwardRef(function (props, forwardedRef) {
  var _classNames, _classNames2, _classNames3;

  var _props$size = props.size,
      size = _props$size === void 0 ? 'regular' : _props$size,
      label = props.label,
      disabled = props.disabled,
      onChange = props.onChange,
      name = props.name,
      value = props.value,
      defaultChecked = props.defaultChecked;
  var ref = useRef$1(null);
  useImperativeHandle(forwardedRef, function () {
    return ref.current;
  });
  var RadioClass = classNames((_classNames = {}, _defineProperty(_classNames, 'Radio', true), _defineProperty(_classNames, 'Radio--disabled', disabled), _defineProperty(_classNames, "Radio--".concat(size), size), _classNames));
  var RadioWrapper = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'Radio-wrapper', true), _defineProperty(_classNames2, "Radio-wrapper--".concat(size), size), _classNames2));
  var RadioOuterWrapper = classNames((_classNames3 = {}, _defineProperty(_classNames3, 'Radio-outerWrapper', true), _defineProperty(_classNames3, "Radio-outerWrapper--".concat(size), size), _classNames3));

  var onChangeHandler = function onChangeHandler() {
    if (onChange) onChange(ref.current.checked);
  };

  return /*#__PURE__*/createElement("div", {
    className: RadioClass
  }, /*#__PURE__*/createElement("div", {
    className: RadioOuterWrapper
  }, /*#__PURE__*/createElement("input", {
    type: "radio",
    disabled: disabled,
    defaultChecked: defaultChecked,
    ref: ref,
    name: name,
    value: value,
    onChange: onChangeHandler,
    className: "Radio-input"
  }), /*#__PURE__*/createElement("span", {
    className: RadioWrapper
  })), label && /*#__PURE__*/createElement(Text, {
    small: size === 'tiny'
  }, label));
});
Radio.displayName = 'Radio';

var Row = function Row(props) {
  var _classNames;

  var group = props.group,
      groupXS = props.groupXS,
      groupS = props.groupS,
      groupM = props.groupM,
      groupL = props.groupL,
      groupXL = props.groupXL,
      className = props.className;
  var classes = classNames((_classNames = {
    Row: true
  }, _defineProperty(_classNames, "RowGroup--".concat(group), group), _defineProperty(_classNames, "RowGroup--xs-".concat(groupXS), groupXS), _defineProperty(_classNames, "RowGroup--s-".concat(groupS), groupS), _defineProperty(_classNames, "RowGroup--m-".concat(groupM), groupM), _defineProperty(_classNames, "RowGroup--l-".concat(groupL), groupL), _defineProperty(_classNames, "RowGroup--xl-".concat(groupXL), groupXL), _defineProperty(_classNames, "".concat(className), className), _classNames));
  return /*#__PURE__*/createElement("div", {
    className: classes
  }, props.children);
};
Row.displayName = 'Row';

var StatusHints = function StatusHints(props) {
  var _classNames2;

  var _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      children = props.children,
      _onMouseEnter = props.onMouseEnter,
      _onMouseLeave = props.onMouseLeave,
      _onClick = props.onClick,
      style = props.style;
  var StatusHintsClass = classNames(_defineProperty({}, 'StatusHints', true));
  var StatusHintsIconClass = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'StatusHints-icon', true), _defineProperty(_classNames2, "StatusHints--".concat(appearance), appearance), _classNames2));
  return /*#__PURE__*/createElement("div", {
    className: StatusHintsClass,
    onClick: function onClick(e) {
      return _onClick && _onClick(e);
    },
    onMouseEnter: function onMouseEnter(e) {
      return _onMouseEnter && _onMouseEnter(e);
    },
    onMouseLeave: function onMouseLeave(e) {
      return _onMouseLeave && _onMouseLeave(e);
    },
    style: style
  }, /*#__PURE__*/createElement("span", {
    className: StatusHintsIconClass
  }), /*#__PURE__*/createElement(Text, {
    weight: 'medium'
  }, children));
};
StatusHints.displayName = 'StatusHints';

var Switch = /*#__PURE__*/forwardRef(function (props, ref) {
  var _classNames, _classNames2;

  var _props$size = props.size,
      size = _props$size === void 0 ? 'regular' : _props$size,
      _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'primary' : _props$appearance,
      disabled = props.disabled,
      onChange = props.onChange,
      name = props.name,
      value = props.value;

  var _React$useState = useState$4(props.checked),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      checked = _React$useState2[0],
      setChecked = _React$useState2[1];

  useEffect$3(function () {
    var checkedValue = props.disabled ? checked : props.checked;
    setChecked(checkedValue);
  }, [props.checked, props.disabled]);
  var SwitchClass = classNames((_classNames = {}, _defineProperty(_classNames, 'Switch', true), _defineProperty(_classNames, 'Switch--disabled', disabled), _defineProperty(_classNames, "Switch--".concat(size), size), _classNames));
  var SwitchWrapper = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'Switch-wrapper', true), _defineProperty(_classNames2, 'Switch-wrapper--disabled', disabled), _defineProperty(_classNames2, "Switch-wrapper--".concat(size), size), _defineProperty(_classNames2, "Switch-wrapper--".concat(appearance), appearance), _defineProperty(_classNames2, 'Switch-wrapper--checked', checked), _defineProperty(_classNames2, 'Switch-wrapper--checkedDisabled', checked && disabled), _classNames2));

  var onChangeHandler = function onChangeHandler() {
    setChecked(!checked);
    if (onChange) onChange(!checked);
  };

  return /*#__PURE__*/createElement("div", {
    className: SwitchClass
  }, /*#__PURE__*/createElement("input", {
    type: "checkbox",
    disabled: disabled,
    checked: checked,
    ref: ref,
    name: name,
    value: value,
    className: "Switch-input"
  }), /*#__PURE__*/createElement("span", {
    onClick: onChangeHandler,
    className: SwitchWrapper
  }));
});
Switch.displayName = 'Switch';

var Textarea = /*#__PURE__*/forwardRef(function (props, ref) {
  var _classNames2;

  var disabled = props.disabled,
      rows = props.rows,
      name = props.name,
      placeholder = props.placeholder,
      value = props.value,
      defaultValue = props.defaultValue,
      required = props.required,
      error = props.error,
      onChange = props.onChange,
      onClick = props.onClick,
      onBlur = props.onBlur,
      onFocus = props.onFocus;
  var classes = classNames(_defineProperty({}, 'Textarea', true));
  var TextareaClass = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'Textarea-textarea', true), _defineProperty(_classNames2, 'Textarea-textarea--error', error), _classNames2));
  return /*#__PURE__*/createElement("div", {
    className: classes
  }, /*#__PURE__*/createElement("textarea", {
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
  }));
});
Textarea.displayName = 'Textarea';

var ActionButton = function ActionButton(props) {
  var _classNames;

  var _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
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

var Toast = function Toast(props) {
  var _classNames, _classNames2;

  var _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      title = props.title,
      message = props.message,
      actions = props.actions,
      onClose = props.onClose;
  var wrapperClass = classNames((_classNames = {}, _defineProperty(_classNames, 'Toast', true), _defineProperty(_classNames, "Toast--".concat(appearance), appearance), _classNames));
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

  return /*#__PURE__*/createElement("div", {
    className: wrapperClass
  }, icon && /*#__PURE__*/createElement("div", {
    className: iconClass('left')
  }, /*#__PURE__*/createElement(Icon, {
    name: icon,
    appearance: appearance !== 'warning' ? 'white' : 'default'
  })), /*#__PURE__*/createElement("div", {
    className: "Toast-body"
  }, /*#__PURE__*/createElement("div", {
    className: titleClass
  }, /*#__PURE__*/createElement(Heading, {
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
      position: {
        top: 0,
        left: 0
      },
      style: {},
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
          _this$props$appendToB = _this$props.appendToBody,
          appendToBody = _this$props$appendToB === void 0 ? false : _this$props$appendToB,
          _this$props$position = _this$props.position,
          tooltip = _this$props.tooltip,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["appendToBody", "position", "tooltip", "children"]);

      var tooltipWrapper = /*#__PURE__*/createElement("div", _extends({
        className: "Tooltip"
      }, props, {
        style: this.state.style
      }), tooltip);
      return /*#__PURE__*/createElement(PopperWrapper, {
        trigger: children,
        placement: this.props.position,
        style: this.state.style,
        appendToBody: appendToBody,
        on: 'hover',
        offset: 'Medium',
        onToggle: this.onToggle,
        open: this.state.open
      }, tooltipWrapper);
    }
  }]);

  return Tooltip;
}(Component);

var useEffect$1 = useEffect$3,
    useState$1 = useState$4;

var Modal = function Modal(props) {
  var _classNames;

  var _props$dimension = props.dimension,
      dimension = _props$dimension === void 0 ? 'small' : _props$dimension,
      children = props.children,
      onClose = props.onClose,
      backdrop = props.backdrop;

  var _useState = useState$1(props.open),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = useState$1(false),
      _useState4 = _slicedToArray(_useState3, 2),
      animate = _useState4[0],
      setAnimate = _useState4[1];

  var classes = classNames((_classNames = {
    Modal: true
  }, _defineProperty(_classNames, "Modal--".concat(dimension), dimension), _defineProperty(_classNames, 'Modal--open', open), _defineProperty(_classNames, 'Modal-animation--open', animate), _defineProperty(_classNames, 'Modal-animation--close', !animate), _classNames));
  useEffect$1(function () {
    if (props.open) {
      setOpen(true);
      setAnimate(true);
    }

    if (!props.open) {
      setTimeout(function () {
        setOpen(false);
      }, 120);
      setAnimate(false);
    }
  }, [props.open]);
  var ModalContainer = /*#__PURE__*/createElement("div", {
    className: "Modal-container"
  }, /*#__PURE__*/createElement("div", {
    className: classes
  }, children));
  var ModalWrapper = backdrop ? /*#__PURE__*/createElement(OutsideClick, {
    onOutsideClick: function onOutsideClick(event) {
      return open && onClose('OutsideClick', event);
    }
  }, ModalContainer) : ModalContainer;
  var WrapperElement = /*#__PURE__*/createPortal(ModalWrapper, document.body);
  return /*#__PURE__*/createElement("div", null, WrapperElement, /*#__PURE__*/createElement(Backdrop, {
    open: open
  }));
};

Modal.displayName = 'Modal';

var ModalHeader = function ModalHeader(props) {
  var _props$heading = props.heading,
      heading = _props$heading === void 0 ? '' : _props$heading,
      _props$icon = props.icon,
      icon = _props$icon === void 0 ? '' : _props$icon,
      _props$subHeading = props.subHeading,
      subHeading = _props$subHeading === void 0 ? '' : _props$subHeading;
  var classes = classNames({
    'Modal-header': true
  });
  var subheaderClasses = classNames(_defineProperty({
    'Modal-header-subheader': true
  }, 'Modal-header-subheader--withIcon', icon));

  var getCloseButton = function getCloseButton() {
    var onClose = props.onClose;
    return /*#__PURE__*/createElement("div", {
      className: "Modal-close-icon",
      onClick: function onClick(event) {
        return onClose('IconClick', event);
      }
    }, /*#__PURE__*/createElement(Icon, {
      name: 'close'
    }));
  };

  var getHeaderIcon = function getHeaderIcon() {
    return /*#__PURE__*/createElement("div", {
      className: "Modal-header-icon"
    }, /*#__PURE__*/createElement(Icon, {
      name: icon
    }));
  };

  var closeButton = getCloseButton();
  return /*#__PURE__*/createElement("div", {
    className: "Modal-header-wrapper"
  }, /*#__PURE__*/createElement("div", {
    className: classes
  }, icon && getHeaderIcon(), /*#__PURE__*/createElement("div", null, /*#__PURE__*/createElement(Heading, {
    size: "m"
  }, heading)), closeButton), subHeading && /*#__PURE__*/createElement("div", {
    className: subheaderClasses
  }, /*#__PURE__*/createElement(Text, {
    appearance: "subtle"
  }, subHeading)));
};
ModalHeader.displayName = 'ModalHeader';

var ModalDescription = function ModalDescription(props) {
  var _props$title = props.title,
      title = _props$title === void 0 ? '' : _props$title,
      _props$description = props.description,
      description = _props$description === void 0 ? '' : _props$description,
      _props$removePadding = props.removePadding,
      removePadding = _props$removePadding === void 0 ? false : _props$removePadding;
  var classes = classNames(_defineProperty({
    'Modal-description': true
  }, 'pl-6 pr-6', !removePadding));
  return /*#__PURE__*/createElement("div", {
    className: classes
  }, title && /*#__PURE__*/createElement("div", null, /*#__PURE__*/createElement(Text, {
    weight: "strong"
  }, title)), description && /*#__PURE__*/createElement("div", null, /*#__PURE__*/createElement(Text, null, description)));
};
ModalDescription.displayName = 'ModalDescription';

var ModalFooter = function ModalFooter(props) {
  var children = props.children;
  var classes = classNames({
    'Modal-footer': true
  });
  return /*#__PURE__*/createElement("div", {
    className: classes
  }, children);
};
ModalFooter.displayName = 'ModalFooter';

var Dialog = function Dialog(props) {
  var _props$dimension = props.dimension,
      dimension = _props$dimension === void 0 ? 'small' : _props$dimension,
      _props$primaryButtonA = props.primaryButtonAppearance,
      primaryButtonAppearance = _props$primaryButtonA === void 0 ? 'primary' : _props$primaryButtonA,
      _props$secondaryButto = props.secondaryButtonAppearance,
      secondaryButtonAppearance = _props$secondaryButto === void 0 ? 'basic' : _props$secondaryButto,
      open = props.open,
      onClose = props.onClose,
      icon = props.icon,
      _props$heading = props.heading,
      heading = _props$heading === void 0 ? '' : _props$heading,
      _props$title = props.title,
      title = _props$title === void 0 ? '' : _props$title,
      _props$description = props.description,
      description = _props$description === void 0 ? '' : _props$description,
      primaryButtonLabel = props.primaryButtonLabel,
      primaryButtonCallback = props.primaryButtonCallback,
      secondaryButtonLabel = props.secondaryButtonLabel,
      secondaryButtonCallback = props.secondaryButtonCallback;
  var modalOptions = {
    open: open,
    onClose: onClose,
    dimension: dimension
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
  return /*#__PURE__*/createElement(Modal, modalOptions, /*#__PURE__*/createElement(ModalHeader, modalHeaderOptions), /*#__PURE__*/createElement(ModalDescription, modalDescriptionOptions), /*#__PURE__*/createElement(ModalFooter, null, /*#__PURE__*/createElement(Button, {
    appearance: secondaryButtonAppearance,
    onClick: secondaryButtonCallback
  }, secondaryButtonLabel), /*#__PURE__*/createElement(Button, {
    appearance: primaryButtonAppearance,
    onClick: primaryButtonCallback
  }, primaryButtonLabel)));
};

Dialog.displayName = 'Dialog';

var useRef = useRef$1,
    useEffect$2 = useEffect$3,
    useState$2 = useState$4;
var ModalBody = function ModalBody(props) {
  var _useState = useState$2(false),
      _useState2 = _slicedToArray(_useState, 2),
      scroll = _useState2[0],
      setScroll = _useState2[1];

  var ref = useRef(null);
  var children = props.children;
  useEffect$2(function () {
    var scrollHeight = ref && ref.current ? ref.current.scrollHeight : 0;
    var clientHeight = ref && ref.current ? ref.current.clientHeight : 0;

    if (scrollHeight > clientHeight) {
      setScroll(true);
    }
  }, [ref]);
  var classes = classNames(_defineProperty({
    'Modal-body': true
  }, 'Modal-body--border', scroll));
  return /*#__PURE__*/createElement("div", {
    className: classes,
    ref: ref
  }, children);
};
ModalBody.displayName = 'ModalBody';

var Pagination = function Pagination(props) {
  var _classNames, _classNames2, _classNames3;

  var _props$type = props.type,
      type = _props$type === void 0 ? 'basic' : _props$type,
      totalPages = props.totalPages,
      onPageChange = props.onPageChange;

  var _React$useState = useState$4(props.page ? props.page : 1),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      page = _React$useState2[0],
      setPage = _React$useState2[1];

  var _React$useState3 = useState$4(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      init = _React$useState4[0],
      setInit = _React$useState4[1];

  useEffect$3(function () {
    if (props.page && props.page >= 1 && props.page <= totalPages) setPage(props.page);
  }, [props.page]);
  var wrapperClass = classNames((_classNames = {}, _defineProperty(_classNames, 'Pagination', true), _defineProperty(_classNames, "Pagination--".concat(type), type), _classNames));
  var nextButtonWrapperClass = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'Pagination-buttonWrapper', true), _defineProperty(_classNames2, 'Pagination-buttonWrapper--next', true), _classNames2));
  var prevButtonWrapperClass = classNames((_classNames3 = {}, _defineProperty(_classNames3, 'Pagination-buttonWrapper', true), _defineProperty(_classNames3, 'Pagination-buttonWrapper--previous', true), _classNames3));
  useEffect$3(function () {
    if (init && page) onPageChange(page);
  }, [page]);

  var inputChangeHandler = function inputChangeHandler(e) {
    e.preventDefault();
    var val = parseInt(e.target.value.trim(), 10);

    if (!val || val > 0 && val <= totalPages) {
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
  return /*#__PURE__*/createElement("div", {
    className: wrapperClass
  }, /*#__PURE__*/createElement("div", {
    className: prevButtonWrapperClass
  }, /*#__PURE__*/createElement(Button, {
    onClick: function onClick() {
      return onClickHandler('first');
    },
    disabled: page === 1,
    appearance: "transparent",
    size: "large",
    icon: "first_page"
  }), /*#__PURE__*/createElement("div", {
    className: ['ml-4'].concat(buttonHelper).join(' ')
  }, /*#__PURE__*/createElement(Button, {
    onClick: function onClick() {
      return onClickHandler('prev');
    },
    disabled: page === 1,
    size: "large",
    icon: "navigate_before"
  }))), type === 'jump' && /*#__PURE__*/createElement("div", {
    className: "Pagination-pageIndex"
  }, /*#__PURE__*/createElement(Input, {
    name: "page",
    type: "number",
    size: "large",
    onChange: inputChangeHandler,
    value: "".concat(page)
  }), /*#__PURE__*/createElement(Text, null, " of ".concat(totalPages, " pages"))), /*#__PURE__*/createElement("div", {
    className: nextButtonWrapperClass
  }, /*#__PURE__*/createElement("div", {
    className: ['mr-4'].concat(buttonHelper).join(' ')
  }, /*#__PURE__*/createElement(Button, {
    onClick: function onClick() {
      return onClickHandler('next');
    },
    disabled: page === totalPages,
    size: "large",
    icon: "navigate_next"
  })), /*#__PURE__*/createElement(Button, {
    onClick: function onClick() {
      return onClickHandler('last');
    },
    disabled: page === totalPages,
    appearance: "transparent",
    size: "large",
    icon: "last_page"
  })));
};
Pagination.displayName = 'Pagination';

var useIsMount$1 = function useIsMount() {
  var isMountRef = useRef$1(true);
  useEffect$3(function () {
    isMountRef.current = false;
  }, []);
  return isMountRef.current;
};
var ProgressRing = function ProgressRing(props) {
  var _props$size = props.size,
      size = _props$size === void 0 ? 'regular' : _props$size,
      value = props.value,
      onChange = props.onChange;
  var isMount = useIsMount$1();
  useEffect$3(function () {
    if (onChange && !isMount) onChange(value);
  }, [value]);
  var radius = 20;
  var circumference = 2 * Math.PI * radius;
  var ProgressRingClass = classNames(_defineProperty({
    Ring: true
  }, "Ring--".concat(size), size));
  var svgProps = {
    viewBox: '0 0 50 50'
  };
  var circleProps = {
    cx: 25,
    cy: 25,
    r: radius,
    fill: 'none',
    strokeWidth: '8',
    strokeDasharray: "".concat(circumference, " ").concat(circumference)
  };
  return /*#__PURE__*/createElement("svg", _extends({
    className: ProgressRingClass
  }, svgProps), /*#__PURE__*/createElement("circle", _extends({
    className: "Ring-background"
  }, circleProps)), /*#__PURE__*/createElement("circle", _extends({
    className: "Ring-indicator",
    strokeDashoffset: circumference - value / 100 * circumference
  }, circleProps)));
};
ProgressRing.displayName = 'ProgressRing';

var RangePicker = function RangePicker(props) {
  var startDateProp = props.startDate,
      endDateProp = props.endDate,
      yearNavProp = props.yearNav,
      monthNavProp = props.monthNav,
      _props$open = props.open,
      openProp = _props$open === void 0 ? false : _props$open,
      _props$inputFormat = props.inputFormat,
      inputFormat = _props$inputFormat === void 0 ? 'mm/dd/yyyy' : _props$inputFormat,
      _props$outputFormat = props.outputFormat,
      outputFormat = _props$outputFormat === void 0 ? 'mm/dd/yyyy' : _props$outputFormat,
      _props$startInputProp = props.startInputProps,
      startInputProps = _props$startInputProp === void 0 ? {
    name: 'rangePicker-start',
    label: 'Start Date',
    placeholderChar: '_',
    placeholder: inputFormat
  } : _props$startInputProp,
      _props$endInputProps = props.endInputProps,
      endInputProps = _props$endInputProps === void 0 ? {
    name: 'rangePicker-end',
    label: 'End Date',
    placeholderChar: '_',
    placeholder: inputFormat
  } : _props$endInputProps,
      _props$mask = props.mask,
      mask = _props$mask === void 0 ? e.date[inputFormat] : _props$mask,
      _props$validator = props.validator,
      validator = _props$validator === void 0 ? e$1.date : _props$validator,
      withInput = props.withInput,
      position = props.position,
      disabledBefore = props.disabledBefore,
      disabledAfter = props.disabledAfter,
      onRangeChange = props.onRangeChange,
      rangeLimit = props.rangeLimit,
      rest = _objectWithoutProperties(props, ["startDate", "endDate", "yearNav", "monthNav", "open", "inputFormat", "outputFormat", "startInputProps", "endInputProps", "mask", "validator", "withInput", "position", "disabledBefore", "disabledAfter", "onRangeChange", "rangeLimit"]);

  var _React$useState = useState$4(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      init = _React$useState2[0],
      setInit = _React$useState2[1];

  var _React$useState3 = useState$4(),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      startDate = _React$useState4[0],
      setStartDate = _React$useState4[1];

  var _React$useState5 = useState$4(),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      endDate = _React$useState6[0],
      setEndDate = _React$useState6[1];

  var _React$useState7 = useState$4(yearNavProp),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      yearNav = _React$useState8[0],
      setYearNav = _React$useState8[1];

  var _React$useState9 = useState$4(monthNavProp),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      monthNav = _React$useState10[0],
      setMonthNav = _React$useState10[1];

  var _React$useState11 = useState$4(openProp),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      open = _React$useState12[0],
      setOpen = _React$useState12[1];

  var _React$useState13 = useState$4(false),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      startError = _React$useState14[0],
      setStartError = _React$useState14[1];

  var _React$useState15 = useState$4(false),
      _React$useState16 = _slicedToArray(_React$useState15, 2),
      endError = _React$useState16[0],
      setEndError = _React$useState16[1];

  useEffect$3(function () {
    var d = startDateProp ? convertToDate(startDateProp, inputFormat, validator) : undefined;
    setStartDate(d);
  }, [startDateProp]);
  useEffect$3(function () {
    var d = endDateProp ? convertToDate(endDateProp, inputFormat, validator) : undefined;
    setEndDate(d);
  }, [endDateProp]);
  useEffect$3(function () {
    setYearNav(yearNavProp);
  }, [yearNavProp]);
  useEffect$3(function () {
    setMonthNav(monthNavProp);
  }, [monthNavProp]);
  useEffect$3(function () {
    setOpen(openProp);
  }, [openProp]);
  useEffect$3(function () {
    var sError = !startDate;
    var eError = !endDate;

    var _getDateInfo = getDateInfo(endDate),
        eYear = _getDateInfo.year,
        eMonth = _getDateInfo.month,
        eDate = _getDateInfo.date;

    if (compareDate(startDate, 'more', eYear, eMonth, eDate)) {
      sError = true;
      eError = true;
    }

    setStartError(sError);
    setEndError(eError);

    if (onRangeChange) {
      if (startDate && endDate) {
        var inRangeError = getInRangeError();

        if (init && !inRangeError && !sError && !eError) {
          var sValue = translateToString(outputFormat, startDate);
          var eValue = translateToString(outputFormat, endDate);
          onRangeChange(startDate, endDate, sValue, eValue);
        }
      }
    }
  }, [startDate, endDate]);

  var getInRangeError = function getInRangeError() {
    if (rangeLimit) {
      var _getDateInfo2 = getDateInfo(startDate),
          sYear = _getDateInfo2.year,
          sMonth = _getDateInfo2.month,
          sDate = _getDateInfo2.date;

      var _getDateInfo3 = getDateInfo(endDate),
          eYear = _getDateInfo3.year,
          eMonth = _getDateInfo3.month,
          eDate = _getDateInfo3.date;

      var limitDate;

      if (startDate) {
        limitDate = new Date(startDate);
        limitDate.setDate(sDate + rangeLimit);
        return compareDate(limitDate, 'less', eYear, eMonth, eDate + 1);
      }

      if (endDate) {
        limitDate = new Date(endDate);
        limitDate.setDate(eDate - rangeLimit);
        return compareDate(limitDate, 'more', sYear, sMonth, sDate - 1);
      }
    }

    return false;
  };

  var onRangeChangeHandler = function onRangeChangeHandler(sDate, eDate) {
    if (sDate && eDate) setInit(true);
    if (sDate) setStartDate(sDate);
    if (eDate) setEndDate(eDate);
  };

  if (withInput) {
    var updateNav = function updateNav(type) {
      if (type === 'start') {
        var _getDateInfo4 = getDateInfo(startDate),
            year = _getDateInfo4.year,
            month = _getDateInfo4.month;

        setYearNav(year);
        setMonthNav(month);
      }

      if (type === 'end') {
        var _getDateInfo5 = getDateInfo(endDate),
            _year = _getDateInfo5.year,
            _month = _getDateInfo5.month;

        setYearNav(_year);
        setMonthNav(_month);
      }
    };

    var onChangeHandler = function onChangeHandler(_e, val, type) {
      setInit(true);
      setOpen(true);

      if (type === 'start') {
        var placeholderChar = startInputProps.placeholderChar ? startInputProps.placeholderChar : '_';

        if (val && !val.includes(placeholderChar)) {
          var d = translateToDate(inputFormat, val, validator);

          if (d) {
            setStartDate(d);

            if (endDate) {
              var _getDateInfo6 = getDateInfo(endDate),
                  eYear = _getDateInfo6.year,
                  eMonth = _getDateInfo6.month,
                  eDate = _getDateInfo6.date;

              if (compareDate(startDate, 'more', eYear, eMonth, eDate)) {
                setEndDate(undefined);
              }
            }
          }
        }
      }

      if (type === 'end') {
        var _placeholderChar = endInputProps.placeholderChar ? endInputProps.placeholderChar : '_';

        if (val && !val.includes(_placeholderChar)) {
          var _d = translateToDate(inputFormat, val, validator);

          if (_d) setEndDate(_d);
        }
      }
    };

    var onBlurHandler = function onBlurHandler(_e, val, type) {
      if (type === 'start') {
        var placeholderChar = startInputProps.placeholderChar ? startInputProps.placeholderChar : '_';
        if (!val || val.includes(placeholderChar)) setStartDate(undefined);
      }

      if (type === 'end') {
        var _placeholderChar2 = endInputProps.placeholderChar ? endInputProps.placeholderChar : '_';

        if (!val || val.includes(_placeholderChar2)) setEndDate(undefined);
      }
    };

    var onClearHandler = function onClearHandler(type) {
      if (type === 'start') {
        setStartDate(undefined);
        updateNav('end');
      }

      if (type === 'end') {
        setEndDate(undefined);
        updateNav('start');
      }
    };

    var onClickHandler = function onClickHandler(type) {
      if (!open) {
        updateNav(type);
      }
    };

    var trigger = /*#__PURE__*/createElement(Row, {
      group: '2',
      groupXS: '1'
    }, /*#__PURE__*/createElement(Column, {
      className: "RangePicker-input RangePicker-input--startDate"
    }, /*#__PURE__*/createElement(InputMask, _extends({}, startInputProps, {
      mask: mask,
      value: startDate ? translateToString(inputFormat, startDate) : '',
      onChange: function onChange(e, val) {
        return onChangeHandler(e, val || '', 'start');
      },
      onBlur: function onBlur(e, val) {
        return onBlurHandler(e, val || '', 'start');
      },
      onClear: function onClear() {
        return onClearHandler('start');
      },
      onClick: function onClick() {
        return onClickHandler('start');
      },
      error: startError
    }))), /*#__PURE__*/createElement(Column, {
      className: "RangePicker-input RangePicker-input--endDate"
    }, /*#__PURE__*/createElement(InputMask, _extends({}, endInputProps, {
      mask: mask,
      value: endDate ? translateToString(inputFormat, endDate) : '',
      onChange: function onChange(e, val) {
        return onChangeHandler(e, val || '', 'end');
      },
      onBlur: function onBlur(e, val) {
        return onBlurHandler(e, val || '', 'end');
      },
      onClear: function onClear() {
        return onClearHandler('end');
      },
      onClick: function onClick() {
        return onClickHandler('end');
      },
      error: endError
    }))));

    var onToggleHandler = function onToggleHandler(o, type) {
      switch (type) {
        case 'outsideClick':
          setOpen(o);
          break;

        case 'onClick':
          setOpen(true);
          break;
      }
    };

    return /*#__PURE__*/createElement(Popover, {
      trigger: trigger,
      position: position,
      appendToBody: true,
      open: open,
      onToggle: onToggleHandler
    }, /*#__PURE__*/createElement(Calendar, _extends({}, rest, {
      rangePicker: true,
      startDate: convertToDate(startDate, inputFormat, validator),
      endDate: convertToDate(endDate, inputFormat, validator),
      disabledBefore: convertToDate(disabledBefore, inputFormat, validator),
      disabledAfter: convertToDate(disabledAfter, inputFormat, validator),
      onRangeChange: onRangeChangeHandler,
      yearNav: yearNav,
      monthNav: monthNav,
      rangeLimit: rangeLimit
    })));
  }

  return /*#__PURE__*/createElement(Calendar, _extends({}, rest, {
    rangePicker: true,
    startDate: convertToDate(startDate, inputFormat, validator),
    endDate: convertToDate(endDate, inputFormat, validator),
    disabledBefore: convertToDate(disabledBefore, inputFormat, validator),
    disabledAfter: convertToDate(disabledAfter, inputFormat, validator),
    onRangeChange: onRangeChangeHandler,
    yearNav: yearNav,
    monthNav: monthNav,
    rangeLimit: rangeLimit
  }));
};
RangePicker.displayName = 'RangePicker';

var TabsWrapper = function TabsWrapper(props) {
  var _props$children = props.children,
      children = _props$children === void 0 ? [] : _props$children,
      onTabChange = props.onTabChange;

  var _React$useState = useState$4(props.activeTab && props.activeTab < children.length ? props.activeTab : 0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      activeTab = _React$useState2[0],
      setActiveTab = _React$useState2[1];

  useEffect$3(function () {
    setActiveTab(props.activeTab && props.activeTab < children.length ? props.activeTab : 0);
  }, [props.activeTab]);
  var wrapperClass = classNames(_defineProperty({}, 'TabsWrapper', true));

  var tabClickHandler = function tabClickHandler(tabIndex) {
    setActiveTab(tabIndex);
    if (onTabChange) onTabChange(tabIndex);
  };

  var TabsHeader = children.map(function (child, index) {
    var _classNames2;

    var tabHeaderClass = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'Tab', true), _defineProperty(_classNames2, 'Tab--active', activeTab === index), _classNames2));
    var label = child.props.label;
    return /*#__PURE__*/createElement("div", {
      key: index,
      className: tabHeaderClass,
      onClick: function onClick() {
        return tabClickHandler(index);
      }
    }, label);
  });
  return /*#__PURE__*/createElement("div", {
    className: wrapperClass
  }, /*#__PURE__*/createElement("div", {
    className: "TabsWrapper-header"
  }, TabsHeader), /*#__PURE__*/createElement("div", {
    className: "TabsWrapper-content"
  }, children[activeTab]));
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
var reorderCol = function reorderCol(_this, name, el) {
  var from = name;
  var to;
  var schema = _this.props.schema;

  var getColumns = function getColumns() {
    return _this.gridRef.current.querySelectorAll(".Grid-cellGroup--".concat(cellType, " .Grid-cell.Grid-cell--head"));
  };

  var sI = schema.findIndex(function (s) {
    return s.name === name;
  });
  var cellType = schema[sI].pinned ? 'pinned' : 'main';
  var cols = getColumns();
  var colRect = [];
  cols.forEach(function (c) {
    colRect.push(c.getBoundingClientRect());
  });
  var currX = el === null || el === void 0 ? void 0 : el.getBoundingClientRect().x;

  function reorder(ev) {
    ev.preventDefault();

    if (el) {
      var columns = getColumns();
      columns.forEach(function (c, index) {
        var _colRect$index = colRect[index],
            x = _colRect$index.x,
            width = _colRect$index.width;

        if (currX && c.contains(ev.target)) {
          // @ts-ignore
          var left = c.offsetLeft;
          if (currX < x) left += width;

          _this.updateReorderHighlighter(left); // @ts-ignore


          to = c.dataset.name;
        }
      });
    }
  }

  function stopReorder() {
    window.removeEventListener('mousemove', reorder);
    window.removeEventListener('mouseup', stopReorder); // _this.updateColumnSchema(name, { _selected: false });

    _this.updateReorderHighlighter(undefined);

    if (to && from !== to) _this.reorderCol(from, to);
  } // _this.updateColumnSchema(name, { _selected: true });


  window.addEventListener('mousemove', reorder);
  window.addEventListener('mouseup', stopReorder);
};
function sortColumn(name, type) {
  var sortingList = this.props.sortingList;
  var index = sortingList.findIndex(function (l) {
    return l.name === name;
  });

  if (index === -1) {
    sortingList.push({
      name: name,
      type: type
    });
  } else {
    sortingList = [].concat(_toConsumableArray(sortingList.slice(0, index)), _toConsumableArray(sortingList.slice(index + 1)), [{
      name: name,
      type: type
    }]);
  }

  this.updateSortingList(sortingList);
}
function pinColumn(name, type) {
  var schemaUpdate = {
    pinned: type === 'left' ? true : false
  };
  this.updateColumnSchema(name, schemaUpdate);
}
function hideColumn(name, value) {
  var schemaUpdate = {
    hidden: value
  };
  this.updateColumnSchema(name, schemaUpdate);
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
  var newData = data;

  if (schema.translate) {
    var translatedData = schema.translate(data);
    newData = _objectSpread2(_objectSpread2({}, newData), {}, _defineProperty({}, schema.name, _typeof(translatedData) === 'object' ? _objectSpread2(_objectSpread2({}, newData[schema.name]), translatedData) : translatedData));
  }

  if (_typeof(newData[schema.name]) !== 'object') newData[schema.name] = {
    title: newData[schema.name]
  };
  return newData;
}
var filterData = function filterData(schema, data, filterList) {
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
var sortData = function sortData(schema, data, sortingList) {
  var sortedData = _toConsumableArray(data);

  sortingList === null || sortingList === void 0 ? void 0 : sortingList.forEach(function (l) {
    var sIndex = schema.findIndex(function (s) {
      return s.name === l.name;
    });
    var sortFn = schema[sIndex].sortFn;

    if (sortFn) {
      sortedData.sort(sortFn);
      if (l.type === 'desc') sortedData.reverse();
    }
  });
  return sortedData;
};
var paginateData = function paginateData(data, page, pageSize) {
  var start = (page - 1) * pageSize;
  var end = start + pageSize;
  var paginatedData = data.slice(start, end);
  return paginatedData;
};
var searchData = function searchData(data, searchTerm, onSearch) {
  if (onSearch) {
    return data.filter(function (d) {
      return onSearch(d, searchTerm);
    });
  }

  return data;
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
var getInit = function getInit(_this) {
  var schema = _this.props.schema;
  return schema && !!schema.length;
};
var getSchema = function getSchema(_this) {
  var _this$props = _this.props,
      loading = _this$props.loading,
      loaderSchema = _this$props.loaderSchema;
  var schema = _this.props.schema;
  var init = getInit(_this);

  if (!init && loading) {
    schema = loaderSchema;
  }

  return schema;
};

var renderTitle = function renderTitle(props) {
  var cellData = props.cellData;
  var children = cellData.title;

  if (children) {
    return /*#__PURE__*/createElement(Text, null, children);
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
        appearance: 'subtle',
        small: true
      }, list);
    }));
  }

  return null;
};

var renderAvatar = function renderAvatar(props) {
  var cellData = props.cellData;
  var firstName = cellData.firstName,
      lastName = cellData.lastName;

  if (firstName && lastName) {
    var appearance = 'primary';
    var children = "".concat(firstName).concat(lastName);
    return /*#__PURE__*/createElement(Avatar, {
      appearance: appearance
    }, children);
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
  var _cellData$statusAppea = cellData.statusAppearance,
      statusAppearance = _cellData$statusAppea === void 0 ? 'default' : _cellData$statusAppea;
  var children = cellData.title;

  if (children) {
    return /*#__PURE__*/createElement(StatusHints, {
      appearance: statusAppearance
    }, children);
  }

  return null;
};

var GridCell = function GridCell(props) {
  var size = props.size,
      schema = props.schema,
      loading = props.loading;
  if (schema.cellRenderer) return schema.cellRenderer(props);
  var data = !loading ? translateData(schema, props.data) : {};
  var name = schema.name,
      _schema$cellType = schema.cellType,
      cellType = _schema$cellType === void 0 ? 'DEFAULT' : _schema$cellType,
      _schema$align = schema.align,
      align = _schema$align === void 0 ? 'left' : _schema$align;
  var cellData = data[name];
  var cellClass = classNames(_defineProperty({}, 'GridCell', true));

  switch (cellType) {
    case 'DEFAULT':
      if (loading) {
        return /*#__PURE__*/createElement(Placeholder, {
          style: {
            flexGrow: 1
          }
        }, /*#__PURE__*/createElement(PlaceholderParagraph, {
          length: "medium"
        }));
      }

      return /*#__PURE__*/createElement("div", {
        className: "".concat(cellClass, " GridCell--align-").concat(align, " GridCell--default")
      }, renderTitle({
        loading: loading,
        cellData: cellData
      }));

    case 'WITH_META_LIST':
      if (loading) {
        return /*#__PURE__*/createElement(Placeholder, {
          style: {
            flexGrow: 1
          }
        }, /*#__PURE__*/createElement(PlaceholderParagraph, {
          length: "medium"
        }), /*#__PURE__*/createElement(PlaceholderParagraph, {
          length: "large"
        }));
      }

      return /*#__PURE__*/createElement("div", {
        className: "".concat(cellClass, " GridCell--align-").concat(align, " GridCell--metaList")
      }, /*#__PURE__*/createElement("div", {
        className: "GridCell-metaListWrapper"
      }, renderTitle({
        loading: loading,
        cellData: cellData
      }), renderMetaList({
        loading: loading,
        cellData: cellData
      })));

    case 'AVATAR':
      if (loading) {
        return /*#__PURE__*/createElement(Placeholder, {
          withImage: true,
          imageSize: 'medium',
          round: true
        });
      }

      return /*#__PURE__*/createElement("div", {
        className: "".concat(cellClass, " GridCell--avatar")
      }, size !== 'tight' && renderAvatar({
        loading: loading,
        cellData: cellData
      }));

    case 'AVATAR_WITH_TEXT':
      if (loading) {
        return /*#__PURE__*/createElement(Placeholder, {
          style: {
            flexGrow: 1
          },
          withImage: true,
          imageSize: 'medium',
          round: true
        }, /*#__PURE__*/createElement(PlaceholderParagraph, {
          length: "medium"
        }));
      }

      return /*#__PURE__*/createElement("div", {
        className: "".concat(cellClass, " GridCell--avatarWithText")
      }, size !== 'tight' && renderAvatar({
        loading: loading,
        cellData: cellData
      }), renderTitle({
        loading: loading,
        cellData: cellData
      }));

    case 'AVATAR_WITH_META_LIST':
      if (loading) {
        return /*#__PURE__*/createElement(Placeholder, {
          style: {
            flexGrow: 1
          },
          withImage: true,
          imageSize: 'medium',
          round: true
        }, /*#__PURE__*/createElement(PlaceholderParagraph, {
          length: "medium"
        }), /*#__PURE__*/createElement(PlaceholderParagraph, {
          length: "large"
        }));
      }

      return /*#__PURE__*/createElement("div", {
        className: "".concat(cellClass, " GridCell--avatarWithText")
      }, size !== 'tight' && renderAvatar({
        loading: loading,
        cellData: cellData
      }), /*#__PURE__*/createElement("div", {
        className: "GridCell-metaListWrapper"
      }, renderTitle({
        loading: loading,
        cellData: cellData
      }), renderMetaList({
        loading: loading,
        cellData: cellData
      })));

    case 'ICON':
      if (loading) {
        return /*#__PURE__*/createElement(Placeholder, {
          withImage: true,
          imageSize: 'small',
          round: true
        });
      }

      return /*#__PURE__*/createElement("div", {
        className: "".concat(cellClass, " GridCell--align-").concat(align, " GridCell--icon")
      }, renderIcon({
        loading: loading,
        cellData: cellData
      }));

    case 'STATUS_HINT':
      if (loading) {
        return /*#__PURE__*/createElement(Placeholder, {
          style: {
            flexGrow: 1
          },
          withImage: true,
          imageSize: 'small',
          round: true
        }, /*#__PURE__*/createElement(PlaceholderParagraph, {
          length: "medium"
        }));
      }

      return /*#__PURE__*/createElement("div", {
        className: "".concat(cellClass, " GridCell--align-").concat(align, " GridCell--statusHint")
      }, renderStatusHint({
        loading: loading,
        cellData: cellData
      }));
  }

  return null;
};
GridCell.displayName = 'GridCell';

var HeaderCell = function HeaderCell(props) {
  var _this = props._this,
      schema = props.schema,
      draggable = props.draggable;
  var _this$props = _this.props,
      loading = _this$props.loading,
      showMenu = _this$props.showMenu,
      sortingList = _this$props.sortingList;
  var init = getInit(_this);
  var listIndex = sortingList.findIndex(function (l) {
    return l.name === schema.name;
  });
  var sorted = listIndex !== -1 ? sortingList[listIndex].type : null;
  var el = /*#__PURE__*/createRef();
  var sortOptions = [{
    label: 'Sort Ascending',
    value: 'sortAsc',
    icon: 'arrow_downward',
    optionType: 'WITH_ICON'
  }, {
    label: 'Sort Descending',
    value: 'sortDesc',
    icon: 'arrow_upward',
    optionType: 'WITH_ICON'
  }];
  var options = [{
    label: 'Pin Left',
    value: 'pinLeft',
    icon: 'skip_previous',
    optionType: 'WITH_ICON'
  }, {
    label: 'Pin Right',
    value: 'pinRight',
    icon: 'skip_next',
    optionType: 'WITH_ICON'
  }, {
    label: 'Hide Column',
    value: 'hide',
    icon: 'cancel',
    optionType: 'WITH_ICON'
  }];
  if (schema.sortFn) options = [].concat(sortOptions, _toConsumableArray(options));
  var classes = classNames({
    'Grid-headCell': true,
    'Grid-headCell--draggable': draggable
  });
  return /*#__PURE__*/createElement("div", {
    key: schema.name,
    className: classes,
    ref: el
  }, /*#__PURE__*/createElement("div", {
    className: "Grid-cellContent",
    onMouseDown: function onMouseDown() {
      if (draggable) reorderCol(_this, schema.name, el.current);
    }
  }, loading && !init ? /*#__PURE__*/createElement(Placeholder, {
    style: {
      flexGrow: 1
    }
  }, /*#__PURE__*/createElement(PlaceholderParagraph, {
    length: "medium"
  })) : /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement(Heading, null, schema.displayName), schema.sortFn && /*#__PURE__*/createElement("div", {
    className: "Grid-sortingIcons"
  }, sorted ? sorted === 'asc' ? /*#__PURE__*/createElement(Icon, {
    name: "arrow_downward"
  }) : /*#__PURE__*/createElement(Icon, {
    name: "arrow_upward"
  }) : /*#__PURE__*/createElement(Icon, {
    name: "unfold_more"
  })))), schema.filters && /*#__PURE__*/createElement(Fragment, null, loading && !init ? /*#__PURE__*/createElement(Placeholder, {
    withImage: true
  }) : /*#__PURE__*/createElement(Dropdown, {
    menu: true,
    showApplyButton: true,
    checkboxes: true // selected={
    //   filterList[schema.name]
    //     ? filterList[schema.name].map(f => ({
    //       value: f,
    //       label: schema.filters?.find(s => s.value === f)!.label || ''
    //     }))
    //     : []
    // }
    ,
    options: schema.filters,
    dropdownAlign: 'left',
    onChange: function onChange(selected) {
      return _this.onFilterChange(schema.name, selected);
    }
  })), showMenu && /*#__PURE__*/createElement(Fragment, null, loading && !init ? /*#__PURE__*/createElement(Placeholder, {
    withImage: true
  }) : /*#__PURE__*/createElement(Dropdown, {
    key: schema.name,
    menu: true,
    customTrigger: function customTrigger() {
      return /*#__PURE__*/createElement(Button, {
        icon: "more_horiz_filled",
        appearance: "transparent"
      });
    },
    options: options,
    dropdownAlign: 'left',
    onChange: function onChange(selected) {
      return _this.onMenuChange(schema.name, selected);
    }
  })), schema.resizable && /*#__PURE__*/createElement("span", {
    className: "Grid-cellResize",
    onMouseDown: function onMouseDown() {
      resizeCol(_this, schema.name, el.current);
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
      loading = _this$props2.loading;

  var _expandedState = _slicedToArray(expandedState, 2),
      expanded = _expandedState[0],
      setExpanded = _expandedState[1];

  return /*#__PURE__*/createElement("div", {
    className: "Grid-cellContent"
  }, colIndex === 0 && data._expanded && !schema.pinned && /*#__PURE__*/createElement(Button, {
    appearance: 'transparent',
    icon: expanded ? 'expand_less' : 'expand_more',
    onClick: function onClick() {
      return setExpanded(!expanded);
    }
  }), /*#__PURE__*/createElement(GridCell, {
    key: "".concat(rowIndex, "-").concat(colIndex),
    rowIndex: rowIndex,
    colIndex: colIndex,
    size: size,
    schema: schema,
    data: data,
    loading: loading
  }));
};

var Cell = function Cell(props) {
  var _schema$separator, _schema$separator2;

  var _this = props._this,
      head = props.head,
      colIndex = props.colIndex,
      schema = props.schema,
      expandedState = props.expandedState,
      draggable = props.draggable,
      data = props.data,
      rowIndex = props.rowIndex;
  var withCheckbox = _this.props.withCheckbox;
  var cellClass = classNames({
    'Grid-cell': true,
    'Grid-cell--head': head,
    'Grid-cell--body': !head,
    'Grid-cell--separator': head ? !(withCheckbox && colIndex === 0) && ((_schema$separator = schema.separator) === null || _schema$separator === void 0 ? void 0 : _schema$separator.head) : (_schema$separator2 = schema.separator) === null || _schema$separator2 === void 0 ? void 0 : _schema$separator2.body
  });
  if (schema.hidden) return null;
  return /*#__PURE__*/createElement("div", {
    key: "".concat(rowIndex, "-").concat(colIndex),
    className: cellClass,
    "data-name": schema.name,
    style: {
      width: schema.width
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
    return s.pinned;
  });
  var unpinnedSchema = schema.filter(function (s) {
    return !s.pinned;
  });

  var renderCheckbox = function renderCheckbox(show) {
    if (!show || !withCheckbox) return null;
    return /*#__PURE__*/createElement("div", {
      className: "Grid-cell Grid-cell--head Grid-checkboxCell"
    }, loading ? /*#__PURE__*/createElement(Placeholder, {
      withImage: true
    }) : /*#__PURE__*/createElement(Checkbox, _extends({}, selectAll, {
      onChange: _this.onSelectAll
    })));
  };

  return /*#__PURE__*/createElement("div", {
    className: "Grid-head"
  }, /*#__PURE__*/createElement("div", {
    className: "Grid-row Grid-row--head"
  }, !!pinnedSchema.length && /*#__PURE__*/createElement("div", {
    className: "Grid-cellGroup Grid-cellGroup--pinned"
  }, renderCheckbox(!!pinnedSchema.length), pinnedSchema.map(function (s, index) {
    return /*#__PURE__*/createElement(Cell, {
      key: s.name,
      _this: _this,
      head: true,
      draggable: draggable,
      schema: s,
      colIndex: index
    });
  })), /*#__PURE__*/createElement("div", {
    className: "Grid-cellGroup Grid-cellGroup--main"
  }, renderCheckbox(!pinnedSchema.length && !!unpinnedSchema.length), unpinnedSchema.map(function (s, index) {
    return /*#__PURE__*/createElement(Cell, {
      key: s.name,
      _this: _this,
      head: true,
      draggable: draggable,
      schema: s,
      colIndex: index
    });
  }))));
};

var GridExtendedRow = function GridExtendedRow(props) {
  var _this = props._this,
      data = props.data;
  var propSchema = _this.props.schema;

  if (data._expanded) {
    var showHead = data._expanded.showHead;
    var schema = data._expanded.schema || propSchema;
    var gridData = data._expanded.data;

    if (!gridData) {
      var _uid = data._uid,
          _expanded = data._expanded,
          rest = _objectWithoutProperties(data, ["_uid", "_expanded"]);

      gridData = [rest];
    }

    return /*#__PURE__*/createElement("div", {
      className: "Grid-expandedRow"
    }, /*#__PURE__*/createElement(Grid, {
      key: 'expanedRow',
      showHead: showHead,
      data: gridData,
      schema: schema,
      totalRecords: gridData.length
    }));
  }

  return null;
};

var GridRow = function GridRow(props) {
  var _this = props._this,
      schema = props.schema,
      data = props.data,
      withCheckbox = props.withCheckbox,
      rI = props.rowIndex;

  var _React$useState = useState$4(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      expanded = _React$useState2[0],
      setExpanded = _React$useState2[1];

  var rowClasses = classNames('Grid-row', 'Grid-row--body', {
    'Grid-row--selected': data._selected
  });

  var onClickHandler = function onClickHandler() {
    var type = _this.props.type;

    if (type === 'resource') {
      var onRowClick = _this.props.onRowClick;

      if (onRowClick) {
        onRowClick(data, rI);
      }
    }
  };

  var loading = _this.props.loading;
  var pinnedSchema = schema.filter(function (s) {
    return s.pinned;
  });
  var unpinnedSchema = schema.filter(function (s) {
    return !s.pinned;
  });

  var renderCheckbox = function renderCheckbox(show) {
    if (!show || !withCheckbox) return null;
    return /*#__PURE__*/createElement("div", {
      className: "Grid-cell Grid-cell--body Grid-checkboxCell"
    }, loading ? /*#__PURE__*/createElement(Placeholder, {
      withImage: true
    }) : /*#__PURE__*/createElement(Checkbox, {
      checked: data._selected,
      onChange: function onChange(checked) {
        _this.onSelect(rI, checked);
      }
    }));
  };

  return /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement("div", {
    className: rowClasses,
    onClick: onClickHandler
  }, !!pinnedSchema.length && /*#__PURE__*/createElement("div", {
    className: "Grid-cellGroup Grid-cellGroup--pinned"
  }, renderCheckbox(!!pinnedSchema.length), pinnedSchema.map(function (s, cI) {
    return /*#__PURE__*/createElement(Cell, {
      key: "".concat(rI, "-").concat(cI),
      _this: _this,
      rowIndex: rI,
      colIndex: cI,
      schema: s,
      data: data,
      expandedState: [expanded, setExpanded]
    });
  })), /*#__PURE__*/createElement("div", {
    className: "Grid-cellGroup Grid-cellGroup--main"
  }, renderCheckbox(!pinnedSchema.length && !!unpinnedSchema.length), unpinnedSchema.map(function (s, cI) {
    return /*#__PURE__*/createElement(Cell, {
      key: rI * schema.length + (pinnedSchema.length + cI),
      _this: _this,
      rowIndex: rI,
      colIndex: cI,
      schema: s,
      data: data,
      expandedState: [expanded, setExpanded]
    });
  }))), expanded && /*#__PURE__*/createElement(GridExtendedRow, {
    _this: _this,
    data: data
  }));
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

  if (error) {
    return errorTemplate ? errorTemplate() : /*#__PURE__*/createElement(Heading, null, "No results found");
  }

  var totalPages = Math.ceil(totalRecords / pageSize);
  var dummyRows = page === totalPages ? totalRecords - (page - 1) * pageSize : pageSize;
  var rows = loading ? Array.from({
    length: dummyRows
  }, function () {
    return {};
  }) : data.slice(offset, offset + buffer);
  return /*#__PURE__*/createElement("div", {
    className: "Grid-body"
  }, !loading && /*#__PURE__*/createElement("div", {
    className: "GridBody-padding",
    style: {
      height: "".concat(offset * avgRowHeight, "px")
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
      height: "".concat(((withPagination ? dummyRows : data.length) - inView - offset - 1) * avgRowHeight, "px")
    }
  }));
};

var MainGrid = function MainGrid(props) {
  var _classNames;

  var _this = props._this,
      schema = props.schema;
  var _this$props = _this.props,
      loading = _this$props.loading,
      type = _this$props.type,
      size = _this$props.size,
      showHead = _this$props.showHead,
      draggable = _this$props.draggable,
      withCheckbox = _this$props.withCheckbox,
      data = _this$props.data;
  var classes = classNames((_classNames = {
    Grid: 'true'
  }, _defineProperty(_classNames, "Grid--".concat(type), type), _defineProperty(_classNames, "Grid--".concat(size), size), _classNames));
  var minRowHeight = {
    comfortable: 54,
    standard: 40,
    compressed: 32,
    tight: 24
  };

  var _React$useState = useState$4({
    offset: 0,
    avgRowHeight: minRowHeight[size],
    inView: 20
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var offset = state.offset,
      avgRowHeight = state.avgRowHeight,
      inView = state.inView;

  var onScrollHandler = function onScrollHandler() {
    if (!loading) {
      if (_this.gridRef && _this.gridRef.current) {
        var el = _this.gridRef.current.querySelector('.Grid');

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

  return /*#__PURE__*/createElement("div", {
    className: classes,
    onScroll: onScrollHandler
  }, showHead && /*#__PURE__*/createElement(GridHead, {
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

    _defineProperty(_assertThisInitialized(_this), "gridRef", /*#__PURE__*/createRef());

    _defineProperty(_assertThisInitialized(_this), "updateRenderedData", debounce(100, function (options) {
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

    _defineProperty(_assertThisInitialized(_this), "updateReorderHighlighter", debounce(50, function (dim) {
      _this.setState({
        reorderHighlighter: dim
      });
    }));

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

        case 'pinLeft':
          pinColumn.call(_assertThisInitialized(_this), name, 'left');
          break;

        case 'pinRight':
          pinColumn.call(_assertThisInitialized(_this), name, 'right');
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
        onSelect(rowIndex, selected); // this.syncSelectAll();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectAll", function (selected) {
      var onSelectAll = _this.props.onSelectAll;

      if (onSelectAll) {
        onSelectAll(selected); // this.updateSelectAll({
        //   indeterminate: false,
        //   checked: selected
        // });
      }
    });

    _this.state = {}; // this.updateRenderedData();

    return _this;
  }

  _createClass(Grid, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, _prevState) {
      if (prevProps.withPagination !== this.props.withPagination || prevProps.page !== this.props.page) ;

      if (prevProps.loading !== this.props.loading) {
        this.gridRef.current.querySelector('.Grid').scrollTop = 0;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var reorderHighlighter = this.state.reorderHighlighter;
      var _this$props2 = this.props,
          withPagination = _this$props2.withPagination,
          page = _this$props2.page,
          _onPageChange = _this$props2.onPageChange,
          totalRecords = _this$props2.totalRecords,
          pageSize = _this$props2.pageSize,
          paginationType = _this$props2.paginationType;
      var schema = getSchema(this); // let { schema } = this.props;
      // if ((!schema || schema.length === 0) && loading) {
      //   schema = loaderSchema;
      // }

      return /*#__PURE__*/createElement("div", {
        className: "Grid-container"
      }, /*#__PURE__*/createElement("div", {
        className: "Grid-wrapper",
        ref: this.gridRef
      }, /*#__PURE__*/createElement(MainGrid, {
        _this: this,
        schema: schema
      }), reorderHighlighter && /*#__PURE__*/createElement("div", {
        className: "Grid-reorderHighlighter",
        style: {
          left: "".concat(reorderHighlighter, "px")
        }
      })), withPagination && /*#__PURE__*/createElement("div", {
        className: "Grid-pagination"
      }, /*#__PURE__*/createElement(Pagination, {
        page: page,
        totalPages: getTotalPages(totalRecords, pageSize),
        type: paginationType,
        onPageChange: function onPageChange(newPage) {
          if (_onPageChange) _onPageChange(newPage);
        }
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
  size: 'comfortable',
  page: 1,
  pageSize: 0,
  paginationType: 'jump',
  loading: false,
  error: false,
  sortingList: [],
  filterList: {}
});

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
      _props$searchPlacehol = props.searchPlaceholder,
      searchPlaceholder = _props$searchPlacehol === void 0 ? 'Search' : _props$searchPlacehol,
      selectAll = props.selectAll,
      searchTerm = props.searchTerm,
      updateSearchTerm = props.updateSearchTerm;

  var _React$useState = useState$4(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      selectAllRecords = _React$useState2[0],
      setSelectAllRecords = _React$useState2[1];

  useEffect$3(function () {
    if (selectAll && selectAll.checked) {
      if (onSelectAll) onSelectAll(true, selectAllRecords);
    }
  }, [selectAllRecords]);
  useEffect$3(function () {
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

  var columnOptions = schema.map(function (s) {
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
    }
  })), !showHead && /*#__PURE__*/createElement("div", {
    className: "Header-dropdown"
  }, !showHead && filterSchema.length > 0 && /*#__PURE__*/createElement("div", {
    className: "Header-filters"
  }, filterSchema.map(function (s) {
    var name = s.name,
        displayName = s.displayName,
        filters = s.filters;
    return /*#__PURE__*/createElement(Dropdown, {
      key: name,
      checkboxes: true,
      showApplyButton: true,
      inlineLabel: displayName,
      icon: 'filter_list' // selected={
      //   filterList[s.name]
      //     ? filterList[s.name].map(f => ({
      //       value: f,
      //       label: s.filters?.find(sf => sf.value === f)!.label || ''
      //     }))
      //     : []
      // }
      ,
      options: filters,
      onChange: function onChange(selected) {
        return onFilterChange(name, selected);
      }
    });
  }))), /*#__PURE__*/createElement("div", {
    className: "Header-actions"
  }, children)), /*#__PURE__*/createElement("div", {
    className: "Header-content Header-content--bottom"
  }, /*#__PURE__*/createElement("div", {
    className: "Header-label"
  }, !showHead && withCheckbox && !loading && /*#__PURE__*/createElement(Checkbox, _extends({}, selectAll, {
    onChange: function onChange(selected) {
      if (onSelectAll) onSelectAll(selected);
    }
  })), loading ? /*#__PURE__*/createElement(Placeholder, {
    style: {
      display: 'flex',
      flexGrow: 1
    },
    withImage: !showHead && withCheckbox
  }, /*#__PURE__*/createElement(PlaceholderParagraph, {
    length: 'small'
  })) : /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement(Text, {
    small: true,
    weight: 'medium'
  }, label), withPagination && (selectAll === null || selectAll === void 0 ? void 0 : selectAll.checked) && /*#__PURE__*/createElement("div", {
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
  }, "Clear Selection")))), /*#__PURE__*/createElement("div", {
    className: "Header-hideColumns"
  }, /*#__PURE__*/createElement(Dropdown, {
    triggerSize: 'tiny',
    checkboxes: true,
    showApplyButton: true // selected={columnOptions.filter(o => o.selected)}
    ,
    options: columnOptions,
    checkedValuesOffset: 0,
    totalOptions: columnOptions.length,
    onChangeTriggerLabel: function onChangeTriggerLabel(selected, totalOptions) {
      return "Showing ".concat(selected, " of ").concat(totalOptions, " columns");
    },
    onChange: function onChange(selected) {
      return onHideColumn(selected);
    }
  }))));
};
Header.defaultProps = {
  schema: [],
  data: []
};

// export type ExtractType<T> = T extends SyncTableProps ? SyncTableProps : AsyncTableProps;
// export const Table = <T extends SyncTableProps, K extends AsyncTableProps>(props: T | K) => {
// export function Table(props: SyncTableProps): React.ReactElement;
// export function Table(props: AsyncTableProps): React.ReactElement;
var Table = /*#__PURE__*/function (_React$Component) {
  _inherits(Table, _React$Component);

  var _super = _createSuper(Table);

  function Table(props) {
    var _this;

    _classCallCheck(this, Table);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "updateData", debounce(250, function (_options) {
      var _this$props = _this.props,
          fetchData = _this$props.fetchData,
          pageSize = _this$props.pageSize,
          withPagination = _this$props.withPagination,
          dataProp = _this$props.data,
          onSearch = _this$props.onSearch;
      var _this$state = _this.state,
          async = _this$state.async,
          page = _this$state.page,
          schema = _this$state.schema,
          sortingList = _this$state.sortingList,
          filterList = _this$state.filterList,
          _this$state$searchTer = _this$state.searchTerm,
          searchTerm = _this$state$searchTer === void 0 ? '' : _this$state$searchTer;
      var opts = {
        // ...options,
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

      _this.setState({
        loading: true
      });

      if (async) {
        fetchData(opts).then(function (res) {
          _this.setState({
            selectAll: getSelectAll$1(res.data),
            schema: _this.state.schema.length ? _this.state.schema : res.schema,
            data: res.data,
            totalRecords: res.totalRecords,
            loading: false
          });
        })["catch"](function () {
          _this.setState({
            loading: false,
            data: []
          });
        });
      } else {
        var filteredData = filterData(schema, dataProp, filterList);
        var searchedData = searchData(filteredData, opts.searchTerm, onSearch);
        var sortedData = sortData(schema, searchedData, sortingList);
        var renderedData = sortedData;
        var totalRecords = sortedData.length;

        if (withPagination && page && pageSize) {
          renderedData = paginateData(renderedData, page, pageSize);
        }

        _this.setState({
          totalRecords: totalRecords,
          selectAll: getSelectAll$1(renderedData),
          schema: _this.state.schema.length ? _this.state.schema : schema,
          loading: false,
          data: renderedData
        });
      }
    }));

    _defineProperty(_assertThisInitialized(_this), "onSelect", function (rowIndex, selected) {
      var data = _this.state.data;
      var onSelect = _this.props.onSelect;
      var indexes = [rowIndex];
      var newData = data;

      if (rowIndex >= 0) {
        newData = updateBatchData(data, indexes, {
          _selected: selected
        });

        _this.setState({
          data: newData,
          selectAll: getSelectAll$1(newData)
        });
      }

      if (onSelect) {
        onSelect(indexes, selected, rowIndex === -1 ? [] : newData.filter(function (d) {
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
      var saveSortHistory = _this.props.saveSortHistory;

      _this.setState({
        sortingList: saveSortHistory ? _toConsumableArray(newSortingList) : newSortingList.slice(-1),
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

    _this.state = {
      async: _async,
      // @ts-ignore
      data: props.data || [],
      // @ts-ignore
      schema: props.schema || [],
      sortingList: [],
      filterList: {},
      page: 1,
      totalRecords: !_async ? props.data.length : 0,
      loading: !_async ? props.loading || false : true,
      error: !_async ? props.error || false : false,
      selectAll: getSelectAll$1([]),
      searchTerm: ''
    };
    if (_async) _this.updateData({});
    return _this;
  }

  _createClass(Table, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (!this.state.async) {
        if (prevProps.data !== this.props.data || prevProps.schema !== this.props.schema || prevProps.loading !== this.props.loading || prevProps.error !== this.props.error) {
          this.setState({
            loading: this.props.loading || false,
            error: this.props.error || false,
            page: 1,
            schema: this.props.schema,
            data: this.props.data,
            totalRecords: this.props.data.length,
            sortingList: [],
            filterList: {},
            selectAll: getSelectAll$1([]),
            searchTerm: ''
          });
        }
      }

      if (prevState.page !== this.state.page) {
        var onPageChange = this.props.onPageChange;
        if (onPageChange) onPageChange(this.state.page);
      }

      if (prevState.page !== this.state.page || prevState.filterList !== this.state.filterList || prevState.sortingList !== this.state.sortingList || prevState.searchTerm !== this.state.searchTerm) {
        this.onSelect(-1, false);
        if (!this.props.loading) this.updateData({});
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          showHead = _this$props2.showHead,
          type = _this$props2.type,
          size = _this$props2.size,
          draggable = _this$props2.draggable,
          withHeader = _this$props2.withHeader,
          headerProps = _this$props2.headerProps,
          withCheckbox = _this$props2.withCheckbox,
          showMenu = _this$props2.showMenu,
          withPagination = _this$props2.withPagination,
          paginationType = _this$props2.paginationType,
          pageSize = _this$props2.pageSize,
          onRowClick = _this$props2.onRowClick,
          loaderSchema = _this$props2.loaderSchema;

      var _ref = headerProps,
          headerChildren = _ref.children,
          headerAttr = _objectWithoutProperties(_ref, ["children"]);

      return /*#__PURE__*/createElement("div", {
        className: "Table"
      }, withHeader && /*#__PURE__*/createElement("div", {
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
        draggable: draggable,
        withPagination: withPagination,
        paginationType: paginationType,
        pageSize: pageSize,
        loaderSchema: loaderSchema,
        onRowClick: onRowClick,
        onPageChange: this.onPageChange
      }))));
    }
  }]);

  return Table;
}(Component);

_defineProperty(Table, "defaultProps", {
  showHead: true,
  saveSortHistory: true,
  headerProps: {},
  pageSize: 15,
  loading: false
});

var List = function List(props) {
  return /*#__PURE__*/createElement(Table, _extends({
    showHead: false
  }, props));
};

var useState$3 = useState$4;

/**
 * ####NOTE: Navigation(vertical) sets first subMenu(if present) active if the Navigation is collapsed.
 */
var Navigation = function Navigation(props) {
  var _classNames5;

  var type = props.type,
      data = props.data,
      active = props.active,
      onClick = props.onClick,
      expanded = props.expanded,
      onToggle = props.onToggle,
      footer = props.footer,
      autoCollapse = props.autoCollapse;

  var _useState = useState$3({}),
      _useState2 = _slicedToArray(_useState, 2),
      menuState = _useState2[0],
      setMenuState = _useState2[1];

  useEffect$3(function () {
    if (props.active) {
      var currMenu = getMenu(props.active);
      if (currMenu) updateMenuState(currMenu, true);
    }
  }, [props.active]);

  var getMenu = function getMenu(menu) {
    var _iterator = _createForOfIteratorHelper(data),
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
    var list = data.map(function (menu, index) {
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

  var classes = classNames((_classNames5 = {}, _defineProperty(_classNames5, 'Navigation', true), _defineProperty(_classNames5, "Navigation--".concat(type), type), _defineProperty(_classNames5, 'Navigation--collapsed', !expanded), _classNames5));
  return /*#__PURE__*/createElement("div", {
    className: classes
  }, type === 'horizontal' ? getHorizontalMenu(data) : getVerticalMenu());
};
Navigation.defaultProps = {
  type: 'horizontal',
  data: [],
  expanded: true,
  footer: false,
  autoCollapse: true
};

var PageHeader = function PageHeader(props) {
  var title = props.title,
      navigation = props.navigation,
      actions = props.actions,
      tabs = props.tabs,
      breadcrumb = props.breadcrumb,
      badge = props.badge,
      status = props.status,
      meta = props.meta,
      type = props.type;
  var wrapperClasses = classNames(_defineProperty({
    'PageHeader-wrapper': true
  }, 'PageHeader-wrapper--withTabs', tabs));
  var classes = classNames({
    PageHeader: true
  });
  return /*#__PURE__*/createElement("div", {
    className: wrapperClasses
  }, breadcrumb && breadcrumb, /*#__PURE__*/createElement("div", {
    className: classes
  }, /*#__PURE__*/createElement("div", {
    className: "PageHeader-titleWrapper"
  }, /*#__PURE__*/createElement(Heading, {
    size: "m"
  }, title), badge), type === 'large' && navigation, actions), (status || meta) && /*#__PURE__*/createElement("div", {
    className: "PageHeader-statusWrapper"
  }, status, meta), type === 'small' && /*#__PURE__*/createElement("div", {
    className: "PageHeader-navigationWrapper"
  }, navigation), tabs && /*#__PURE__*/createElement("div", null, tabs));
};
PageHeader.defaultProps = {
  title: '',
  navigation: null,
  actions: null,
  tabs: null,
  breadcrumb: null,
  badge: null,
  status: null,
  meta: null,
  type: 'large'
};

export { Avatar, Backdrop, Badge, Breadcrumbs, Button, Caption, Card, Checkbox, Column, DatePicker, Dialog, DonutChart, Dropdown, Grid, Heading, Icon, Input, InputMask, Label, Legend, Link, List, Message, Modal, ModalBody, ModalDescription, ModalFooter, ModalHeader, Navigation, OutsideClick, PageHeader, Pagination, Paragraph, Placeholder, PlaceholderParagraph, Popover, ProgressBar, ProgressRing, Radio, RangePicker, Row, Spinner, StatusHints, Subheading, Switch, Tab, Table, TabsWrapper, Text, Textarea, Toast, Tooltip };
