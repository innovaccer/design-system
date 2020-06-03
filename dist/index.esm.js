import { createElement, useState as useState$3, useEffect as useEffect$3, forwardRef, useRef as useRef$1, useImperativeHandle, Fragment, createRef, Component, cloneElement, useCallback, Children } from 'react';
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
    useState = useState$3;

var Backdrop = function Backdrop(props) {
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

var BreadcrumbsWrapper = function BreadcrumbsWrapper(props) {
  var children = props.children,
      heading = props.heading;
  return /*#__PURE__*/createElement("div", {
    className: "BreadcrumbsWrapper"
  }, /*#__PURE__*/createElement("ul", {
    className: "BreadcrumbsWrapper-list"
  }, children), heading && /*#__PURE__*/createElement(Heading, null, heading));
};
BreadcrumbsWrapper.displayName = 'BreadcrumbsWrapper';

var Breadcrumb = function Breadcrumb(props) {
  var children = props.children;
  return /*#__PURE__*/createElement("li", {
    className: "Breadcrumb"
  }, children);
};
Breadcrumb.displayName = 'Breadcrumb';

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

var Icon = function Icon(props) {
  var _classNames;

  var _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      _props$type = props.type,
      type = _props$type === void 0 ? 'filled' : _props$type,
      className = props.className,
      name = props.name,
      size = props.size,
      onClick = props.onClick;
  var iconClass = classNames((_classNames = {}, _defineProperty(_classNames, 'material-icons', true), _defineProperty(_classNames, 'Icon', true), _defineProperty(_classNames, "Icon--".concat(appearance), appearance), _defineProperty(_classNames, "".concat(className), className), _classNames));
  var styles = {
    fontSize: size ? "".concat(size, "px") : 'var(--font-size)',
    width: size ? "".concat(size, "px") : 'var(--font-size)'
  };

  var onClickHandler = function onClickHandler(e) {
    e.preventDefault();
    if (onClick) onClick(e);
  };

  return /*#__PURE__*/createElement("i", {
    className: iconClass,
    style: styles,
    onClick: onClickHandler
  }, "".concat(name, "_").concat(type));
};
Icon.displayName = 'Icon';

var sizeMapping = {
  tiny: 12,
  regular: 16,
  large: 20
};
var Button = function Button(props) {
  var _classNames, _classNames2, _classNames3;

  var _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'basic' : _props$appearance,
      _props$size = props.size,
      size = _props$size === void 0 ? 'regular' : _props$size,
      _props$iconAlign = props.iconAlign,
      iconAlign = _props$iconAlign === void 0 ? 'left' : _props$iconAlign,
      children = props.children,
      icon = props.icon,
      expanded = props.expanded,
      loading = props.loading,
      disabled = props.disabled,
      rest = _objectWithoutProperties(props, ["appearance", "size", "iconAlign", "children", "icon", "expanded", "loading", "disabled"]);

  var buttonClass = classNames((_classNames = {}, _defineProperty(_classNames, 'Button', true), _defineProperty(_classNames, 'Button--expanded', expanded), _defineProperty(_classNames, "Button--".concat(size), size), _defineProperty(_classNames, 'Button--square', !children), _defineProperty(_classNames, "Button--".concat(appearance), appearance), _defineProperty(_classNames, "Button--iconAlign-".concat(iconAlign), children && iconAlign), _classNames));
  var iconClass = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'Button-icon', true), _defineProperty(_classNames2, "Button-icon--".concat(iconAlign), children && iconAlign), _classNames2));
  var spinnerClass = classNames((_classNames3 = {}, _defineProperty(_classNames3, 'Button-spinner', true), _defineProperty(_classNames3, "Button-spinner--".concat(iconAlign), children && iconAlign), _classNames3));
  return /*#__PURE__*/createElement("button", _extends({
    className: buttonClass,
    disabled: disabled || loading
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
};
Button.displayName = 'Button';

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
      label = props.label,
      disabled = props.disabled,
      onChange = props.onChange,
      name = props.name,
      value = props.value;
  var ref = useRef$1(null);
  useImperativeHandle(forwardedRef, function () {
    return ref.current;
  });

  var _React$useState = useState$3(props.checked),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      checked = _React$useState2[0],
      setChecked = _React$useState2[1];

  useEffect$3(function () {
    setIndeterminate(props.indeterminate);
  }, [props.indeterminate]);
  useEffect$3(function () {
    setChecked(props.checked);
  }, [props.checked]);
  var CheckboxClass = classNames((_classNames = {}, _defineProperty(_classNames, 'Checkbox', true), _defineProperty(_classNames, 'Checkbox--disabled', disabled), _defineProperty(_classNames, "Checkbox--".concat(size), size), _classNames));
  var CheckboxWrapper = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'Checkbox-wrapper', true), _defineProperty(_classNames2, "Checkbox-wrapper--".concat(size), size), _defineProperty(_classNames2, 'Checkbox-wrapper--checked', checked), _defineProperty(_classNames2, 'Checkbox-wrapper--indeterminate', props.indeterminate), _classNames2));

  var setIndeterminate = function setIndeterminate(indeterminate) {
    ref.current.indeterminate = indeterminate;
  };

  var onChangeHandler = function onChangeHandler() {
    var checkedValue = props.indeterminate ? true : !checked;
    setChecked(checkedValue);
    setIndeterminate(false);
    if (onChange) onChange(checkedValue);
  };

  var IconName = props.indeterminate ? 'remove' : checked ? 'check' : '';
  var IconSize = size === 'tiny' ? 8 : 16;
  return /*#__PURE__*/createElement("div", {
    className: CheckboxClass,
    onClick: onChangeHandler
  }, /*#__PURE__*/createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    ref: ref,
    name: name,
    value: value,
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

  var _React$useState = useState$3(monthsInView > 1 ? 'date' : viewProp),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      view = _React$useState2[0],
      setView = _React$useState2[1];

  var _React$useState3 = useState$3({
    year: undefined,
    month: undefined,
    date: undefined
  }),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      state = _React$useState4[0],
      setState = _React$useState4[1];

  var _React$useState5 = useState$3(dateProp),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      currDateState = _React$useState6[0],
      setCurrDateState = _React$useState6[1];

  var _React$useState7 = useState$3(),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      hoverDateState = _React$useState8[0],
      setHoverDateState = _React$useState8[1];

  var _React$useState9 = useState$3(startDateProp),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      startDateState = _React$useState10[0],
      setStartDateState = _React$useState10[1];

  var _React$useState11 = useState$3(endDateProp),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      endDateState = _React$useState12[0],
      setEndDateState = _React$useState12[1];

  var _React$useState13 = useState$3(getYearBlock(yearNavProp)),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      yearBlockNav = _React$useState14[0],
      setYearBlockNav = _React$useState14[1];

  var _React$useState15 = useState$3(yearNavProp),
      _React$useState16 = _slicedToArray(_React$useState15, 2),
      yearNav = _React$useState16[0],
      setYearNav = _React$useState16[1];

  var _React$useState17 = useState$3(monthNavProp),
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
      size: 16,
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
        className: "d-inline-flex PopperWrapper-trigger"
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

  var _React$useState = useState$3(props.open || false),
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

var Label = function Label(props) {
  var disabled = props.disabled,
      children = props.children,
      rest = _objectWithoutProperties(props, ["disabled", "children"]);

  var classes = classNames({
    Label: true,
    'Label--disabled': disabled
  });
  return /*#__PURE__*/createElement(GenericText, _extends({
    className: classes,
    componentType: "label"
  }, rest), children);
};
Label.displayName = 'Label';

var sizeMapping$1 = {
  tiny: 12,
  regular: 16,
  large: 20
};
var Input = /*#__PURE__*/forwardRef(function (props, ref) {
  var _classNames2, _classNames3, _classNames4, _classNames5, _classNames6;

  var _props$size = props.size,
      size = _props$size === void 0 ? 'regular' : _props$size,
      _props$clearButton = props.clearButton,
      clearButton = _props$clearButton === void 0 ? true : _props$clearButton,
      propDisabled = props.disabled,
      name = props.name,
      type = props.type,
      placeholder = props.placeholder,
      value = props.value,
      caption = props.caption,
      icon = props.icon,
      label = props.label,
      inlineLabel = props.inlineLabel,
      required = props.required,
      error = props.error,
      info = props.info,
      autocomplete = props.autocomplete,
      onChange = props.onChange,
      onClick = props.onClick,
      onClear = props.onClear,
      onBlur = props.onBlur,
      onFocus = props.onFocus;
  var disabled = propDisabled || !onChange;
  var classes = classNames(_defineProperty({}, 'Input', true));
  var inputWrapperClass = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'Input-wrapper', true), _defineProperty(_classNames2, "Input-wrapper--".concat(size), size), _defineProperty(_classNames2, 'Input-wrapper--disabled', disabled), _defineProperty(_classNames2, 'Input-wrapper--error', error), _classNames2));
  var inputClass = classNames((_classNames3 = {}, _defineProperty(_classNames3, 'Input-input', true), _defineProperty(_classNames3, "Input-input--".concat(size), size), _classNames3));
  var leftIconClass = classNames((_classNames4 = {}, _defineProperty(_classNames4, 'Input-icon', true), _defineProperty(_classNames4, 'Input-icon--left', true), _defineProperty(_classNames4, 'Input-icon--disabled', !value), _classNames4));
  var rightIconClass = classNames((_classNames5 = {}, _defineProperty(_classNames5, 'Input-icon', true), _defineProperty(_classNames5, 'Input-icon--right', true), _classNames5));
  var errorIconClass = classNames((_classNames6 = {}, _defineProperty(_classNames6, 'Input-icon', true), _defineProperty(_classNames6, 'Input-icon--error', true), _classNames6));
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
  }, size !== 'tiny' && label && /*#__PURE__*/createElement("div", {
    className: "Input-label"
  }, /*#__PURE__*/createElement(Label, null, label), required && /*#__PURE__*/createElement("span", null)), /*#__PURE__*/createElement("div", {
    className: inputWrapperClass
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
    placeholder: placeholder,
    className: inputClass,
    value: value,
    autoComplete: autocomplete,
    required: required,
    disabled: disabled,
    onChange: onChange,
    onBlur: onBlur,
    onClick: onClick,
    onFocus: onFocus
  }), (!value && !disabled || value && disabled) && info && /*#__PURE__*/createElement(Popover, {
    style: popoverStyle,
    position: "top",
    on: 'hover',
    trigger: trigger,
    dark: true
  }, info), clearButton && value && !disabled && /*#__PURE__*/createElement("div", {
    className: rightIconClass,
    onClick: function onClick(e) {
      return onClear && onClear(e);
    }
  }, /*#__PURE__*/createElement(Icon, {
    name: 'close',
    size: sizeMapping$1[size]
  }))), size !== 'tiny' && caption && /*#__PURE__*/createElement("div", {
    className: "Input-caption"
  }, error && /*#__PURE__*/createElement("div", {
    className: errorIconClass
  }, /*#__PURE__*/createElement(Icon, {
    name: 'error',
    appearance: 'alert'
  })), /*#__PURE__*/createElement(Text, {
    appearance: error ? 'destructive' : 'subtle',
    small: true,
    weight: "medium"
  }, "".concat(caption))));
});
Input.displayName = 'Input';

var InputMask = /*#__PURE__*/forwardRef(function (props, forwardRef) {
  var maskProp = props.mask,
      valueProp = props.value,
      _props$placeholderCha = props.placeholderChar,
      placeholderChar = _props$placeholderCha === void 0 ? '_' : _props$placeholderCha,
      mask = props.mask,
      error = props.error,
      onChange = props.onChange,
      onBlur = props.onBlur,
      onClick = props.onClick,
      onClear = props.onClear,
      caption = props.caption,
      rest = _objectWithoutProperties(props, ["mask", "value", "placeholderChar", "mask", "error", "onChange", "onBlur", "onClick", "onClear", "caption"]);

  var _React$useState = useState$3(''),
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
      } // fail city, fortunately this never happens (as far as I've tested) :)
      // el.focus();
      // }

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
          newVal += rawValue[it++];
        } else {
          newVal += placeholderChar;
        }
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

  return /*#__PURE__*/createElement(Input, _extends({}, rest, {
    value: value,
    error: error,
    caption: error ? 'Invalid Value' : caption,
    onClick: onClickHandler,
    onChange: onChangeHandler,
    onClear: onClearHandler,
    onBlur: onBlurHandler,
    autocomplete: 'off',
    ref: ref
  }));
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

  var _React$useState = useState$3(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      init = _React$useState2[0],
      setInit = _React$useState2[1];

  var _React$useState3 = useState$3(),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      date = _React$useState4[0],
      setDate = _React$useState4[1];

  var _React$useState5 = useState$3(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      error = _React$useState6[0],
      setError = _React$useState6[1];

  var _React$useState7 = useState$3(openProp),
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

  var _React$useState = useState$3(0),
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

/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param  {Number}    delay          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}   [noTrailing]   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
 *                                    the internal counter is reset)
 * @param  {Function}  callback       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param  {Boolean}   [debounceMode] If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
 *                                    schedule `callback` to execute after `delay` ms.
 *
 * @return {Function}  A new, throttled, function.
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
    var self = this;
    var elapsed = Date.now() - lastExec;
    var args = arguments;

    if (cancelled) {
      return;
    } // Execute `callback` and update the `lastExec` timestamp.


    function exec() {
      lastExec = Date.now();
      callback.apply(self, args);
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
 * @param  {Number}   delay         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}  [atBegin]     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 * @param  {Function} callback      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                  to `callback` when the debounced-function is executed.
 *
 * @return {Function} A new, debounced function.
 */

function debounce (delay, atBegin, callback) {
  return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
}

var DropdownButton = /*#__PURE__*/forwardRef(function (props, ref) {
  var _classNames;

  var _props$size = props.size,
      size = _props$size === void 0 ? 'regular' : _props$size,
      _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'basic' : _props$appearance,
      _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? 'Select' : _props$placeholder,
      _props$menu = props.menu,
      menu = _props$menu === void 0 ? false : _props$menu,
      children = props.children,
      width = props.width,
      icon = props.icon,
      disabled = props.disabled,
      inlineLabel = props.inlineLabel,
      rest = _objectWithoutProperties(props, ["size", "appearance", "placeholder", "menu", "children", "width", "icon", "disabled", "inlineLabel"]);

  var buttonDisabled = disabled ? 'disabled' : 'default';
  var trimmedPlaceholder = placeholder.trim();
  var value = children ? children : trimmedPlaceholder ? trimmedPlaceholder : 'Select';
  var iconName = !menu ? 'keyboard_arrow_down' : icon ? icon : 'more_horiz';
  var label = inlineLabel && inlineLabel.trim();
  var buttonClass = classNames((_classNames = {}, _defineProperty(_classNames, 'Button', true), _defineProperty(_classNames, "Button--".concat(appearance), appearance), _defineProperty(_classNames, 'Button--square', !children), _defineProperty(_classNames, 'DropdownButton', true), _defineProperty(_classNames, "DropdownButton--".concat(size), size), _defineProperty(_classNames, 'DropdownButton--icon', icon), _defineProperty(_classNames, 'DropdownButton--moreIcon', menu), _defineProperty(_classNames, 'DropdownButton--placeholder', !children && !menu), _defineProperty(_classNames, 'DropdownButton--label', label), _classNames));
  var labelClass = classNames(_defineProperty({}, 'DropdownButton-label', true));
  var style = {
    width: width
  };
  return /*#__PURE__*/createElement("button", _extends({
    ref: ref,
    value: children,
    className: buttonClass,
    disabled: disabled,
    style: menu ? {} : style
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

var ListCheckbox = /*#__PURE__*/forwardRef(function (props, ref) {
  var list = props.list,
      _props$showParentChec = props.showParentCheckbox,
      showParentCheckbox = _props$showParentChec === void 0 ? true : _props$showParentChec,
      remainingOptions = props.remainingOptions,
      renderFooter = props.renderFooter,
      renderGroups = props.renderGroups,
      showGroups = props.showGroups,
      bufferedOption = props.bufferedOption,
      _props$selected = props.selected,
      selected = _props$selected === void 0 ? [] : _props$selected,
      _props$selectedLabels = props.selectedLabels,
      selectedLabels = _props$selectedLabels === void 0 ? [] : _props$selectedLabels,
      optionsLength = props.optionsLength,
      updatedSelectedArray = props.updatedSelectedArray,
      onChange = props.onChange,
      label = props.label,
      style = props.style;
  var childArray = props.checked ? Array(list.length).fill(props.checked) : [];

  if (!props.checked) {
    list.map(function (item) {
      var _item$checked = item.checked,
          childChecked = _item$checked === void 0 ? false : _item$checked;
      childArray.push(childChecked);
    });
  }

  var getLabelsFromList = function getLabelsFromList(optionsList) {
    var labels = [];
    optionsList.forEach(function (option) {
      labels.push(option.label);
    });
    return labels;
  };

  var getValuesFromList = function getValuesFromList(optionsList) {
    var values = [];
    optionsList.forEach(function (option) {
      values.push(option.value);
    });
    return values;
  };

  var calcParentStatus = function calcParentStatus(selectedValues) {
    var optionsListLength = selected && selected.length > 0 ? optionsLength : list.length;
    var indeterminateTrue = selectedValues.length < optionsListLength && selectedValues.length > 0;
    var checkedTrue = selectedValues.length === optionsListLength;
    var obj = {
      checked: props.checked ? props.checked : checkedTrue,
      indeterminate: indeterminateTrue
    };
    return obj;
  };

  var _React$useState = useState$3(calcParentStatus(selected)),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      parentStatus = _React$useState2[0],
      setParentStatus = _React$useState2[1];

  var _React$useState3 = useState$3(childArray),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      checked = _React$useState4[0],
      setChecked = _React$useState4[1];

  var _React$useState5 = useState$3(selectedLabels),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      selectedArrayLabels = _React$useState6[0],
      setSelectedArrayLabels = _React$useState6[1];

  var _React$useState7 = useState$3(selected),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      selectedArrayValues = _React$useState8[0],
      setSelectedArrayValues = _React$useState8[1];

  useEffect$3(function () {
    if (updatedSelectedArray && updatedSelectedArray.length > 0) {
      setChecked(updatedSelectedArray);
    }
  }, [JSON.stringify(updatedSelectedArray)]);
  useEffect$3(function () {
    if (selected && selected.length > 0 && parentStatus.checked) {
      setSelectedArrayValues(selected);
      setSelectedArrayLabels(selectedLabels);
    }
  }, [JSON.stringify(selected)]);
  useEffect$3(function () {
    if (props.checked !== undefined) {
      setParentStatus(_objectSpread2(_objectSpread2({}, parentStatus), {}, {
        checked: props.checked
      }));
    }
  }, [props.checked]);

  var getListCheckboxClass = function getListCheckboxClass(index) {
    var _classNames;

    var ListCheckboxClass = classNames((_classNames = {}, _defineProperty(_classNames, 'ListCheckbox-childWrapper', true), _defineProperty(_classNames, 'ListCheckbox-childWrapper--top', !showParentCheckbox && index === 0 && !showGroups), _defineProperty(_classNames, 'ListCheckbox-childWrapper--bottom', index + 1 === list.length && !(showGroups && remainingOptions > 0)), _classNames));
    return ListCheckboxClass;
  };

  var handleChildChange = function handleChildChange(checkedValue, index) {
    var updateCheck = _toConsumableArray(checked);

    updateCheck[index] = checkedValue;
    var valueArray = selectedArrayValues.slice();
    var labelsArray = selectedArrayLabels.slice();

    if (!checkedValue) {
      var ind = labelsArray.indexOf(list[index].label);
      valueArray.splice(ind, 1);
      labelsArray.splice(ind, 1);
    }

    var selectedLabelsCopy = checkedValue ? labelsArray.concat(list[index].label) : labelsArray;
    var selectedValuesCopy = checkedValue ? valueArray.concat(list[index].value) : valueArray;
    var obj = calcParentStatus(selectedValuesCopy);
    setChecked(updateCheck);
    setParentStatus(obj);
    setSelectedArrayLabels(selectedLabelsCopy);
    setSelectedArrayValues(selectedValuesCopy);

    if (onChange) {
      onChange(selectedValuesCopy, selectedLabelsCopy, false);
    }
  };

  var handleParentChange = function handleParentChange(checkedValue) {
    var updatedArray = _toConsumableArray(childArray).fill(checkedValue);

    var optionsList = selected && selected.length > 0 ? selectedArrayValues.slice() : getValuesFromList(list);
    var labelsList = selected && selected.length > 0 ? selectedArrayLabels.slice() : getLabelsFromList(list);
    var selectedValues = checkedValue ? optionsList : [];
    var selectedLabelsCopy = checkedValue ? labelsList : [];
    setChecked(updatedArray);
    setSelectedArrayValues(selectedValues);
    setSelectedArrayLabels(selectedLabelsCopy);

    if (checkedValue) {
      setParentStatus({
        checked: checkedValue,
        indeterminate: !checkedValue
      });
    }

    if (onChange) {
      onChange(selectedValues, selectedLabelsCopy, true);
    }
  };

  return /*#__PURE__*/createElement("div", {
    className: 'ListCheckbox'
  }, showParentCheckbox && /*#__PURE__*/createElement("div", {
    className: 'ListCheckbox-parentWrapper'
  }, /*#__PURE__*/createElement(Checkbox, {
    label: label,
    onChange: handleParentChange,
    checked: parentStatus.checked,
    indeterminate: parentStatus.indeterminate
  })), /*#__PURE__*/createElement("div", {
    className: 'ListCheckbox-scroller',
    style: style,
    ref: ref
  }, list.map(function (item, ind) {
    var childLabel = item.label,
        size = item.size,
        group = item.group,
        selectedGroup = item.selectedGroup,
        childOnChange = item.onChange;
    var prevGroup = ind > 0 ? list[ind - 1].group : bufferedOption ? bufferedOption.group : undefined;
    var isGroup = showGroups && prevGroup !== group;
    return /*#__PURE__*/createElement("div", {
      key: "checkbox-".concat(ind)
    }, isGroup && group && renderGroups(group, selectedGroup), /*#__PURE__*/createElement("div", {
      className: getListCheckboxClass(ind)
    }, /*#__PURE__*/createElement(Checkbox, {
      label: childLabel,
      checked: checked[ind],
      size: size,
      onChange: function onChange(c) {
        handleChildChange(c, ind);
        if (childOnChange) childOnChange(checked[ind]);
      }
    })));
  }), showGroups && remainingOptions > 0 && renderFooter()));
});
ListCheckbox.displayName = 'ListCheckbox';

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

var DropdownAlignMapping = {
  right: 'bottom-start',
  left: 'bottom-end'
};
var lastScrollTop = 0;
var usePrevious = function usePrevious(value) {
  var ref = useRef$1();
  useEffect$3(function () {
    ref.current = value;
  }, [value]);
  return ref.current;
};

var DropdownList = function DropdownList(props) {
  var _classNames3, _classNames4, _classNames5;

  var _props$listOptions = props.listOptions,
      listOptions = _props$listOptions === void 0 ? [] : _props$listOptions,
      _props$triggerSize = props.triggerSize,
      triggerSize = _props$triggerSize === void 0 ? 'regular' : _props$triggerSize,
      _props$dropdownAlign = props.dropdownAlign,
      dropdownAlign = _props$dropdownAlign === void 0 ? 'right' : _props$dropdownAlign,
      _props$checkedValuesO = props.checkedValuesOffset,
      checkedValuesOffset = _props$checkedValuesO === void 0 ? 2 : _props$checkedValuesO,
      _props$closeOnSelect = props.closeOnSelect,
      closeOnSelect = _props$closeOnSelect === void 0 ? true : _props$closeOnSelect,
      _props$optionsWrap = props.optionsWrap,
      optionsWrap = _props$optionsWrap === void 0 ? false : _props$optionsWrap,
      _props$searchResultMe = props.searchResultMessage,
      searchResultMessage = _props$searchResultMe === void 0 ? 'No result found' : _props$searchResultMe,
      _props$parentCheckbox = props.parentCheckboxLabel,
      parentCheckboxLabel = _props$parentCheckbox === void 0 ? 'Select All' : _props$parentCheckbox,
      _props$footerLabel = props.footerLabel,
      footerLabel = _props$footerLabel === void 0 ? 'Search for more options' : _props$footerLabel,
      _props$maxHeight = props.maxHeight,
      maxHeight = _props$maxHeight === void 0 ? 200 : _props$maxHeight,
      _props$bottomScrollOf = props.bottomScrollOffset,
      bottomScrollOffset = _props$bottomScrollOf === void 0 ? 64 : _props$bottomScrollOf,
      remainingOptions = props.remainingOptions,
      buttonAppearance = props.buttonAppearance,
      totalOptions = props.totalOptions,
      menu = props.menu,
      bufferedOption = props.bufferedOption,
      slicedOptionsLength = props.slicedOptionsLength,
      loadingOptions = props.loadingOptions,
      placeholder = props.placeholder,
      searchTerm = props.searchTerm,
      limit = props.limit,
      offset = props.offset,
      optionsLength = props.optionsLength,
      showApplyButton = props.showApplyButton,
      icon = props.icon,
      disabled = props.disabled,
      inlineLabel = props.inlineLabel,
      checkboxes = props.checkboxes,
      search = props.search,
      style = props.style,
      onChange = props.onChange,
      onSearchChange = props.onSearchChange,
      onChangeTriggerLabel = props.onChangeTriggerLabel,
      onScroll = props.onScroll,
      onSelectAll = props.onSelectAll,
      onRearrangeOptions = props.onRearrangeOptions,
      renderOptionsFromTop = props.renderOptionsFromTop;
  var dropdownRef = /*#__PURE__*/createRef();
  var triggerRef = /*#__PURE__*/createRef();

  var _React$useState = useState$3([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      selected = _React$useState2[0],
      setSelected = _React$useState2[1];

  var _React$useState3 = useState$3([]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      selectedLabels = _React$useState4[0],
      setSelectedLabels = _React$useState4[1];

  var _React$useState5 = useState$3(''),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      buttonLabel = _React$useState6[0],
      setButtonLabel = _React$useState6[1];

  var _React$useState7 = useState$3(),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      dropdownOpen = _React$useState8[0],
      setDropdownOpen = _React$useState8[1];

  var _React$useState9 = useState$3(),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      popoverStyle = _React$useState10[0],
      setPopoverStyle = _React$useState10[1];

  var _React$useState11 = useState$3([]),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      previousSelected = _React$useState12[0],
      setPreviousSelected = _React$useState12[1];

  var _React$useState13 = useState$3([]),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      previousSelectedLabels = _React$useState14[0],
      setPreviousSelectedLabels = _React$useState14[1];

  var _React$useState15 = useState$3(false),
      _React$useState16 = _slicedToArray(_React$useState15, 2),
      optionsApplied = _React$useState16[0],
      setOptionsApplied = _React$useState16[1];

  var _React$useState17 = useState$3(false),
      _React$useState18 = _slicedToArray(_React$useState17, 2),
      loading = _React$useState18[0],
      setLoading = _React$useState18[1];

  var prevDropdownOpen = usePrevious(dropdownOpen);
  var prevListOptions = usePrevious(listOptions);
  var width = style && style.width ? style.width : '100%';

  var setSelectButtonLabel = function setSelectButtonLabel() {
    var selectedArray = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var selectedLength = selectedArray.length;
    var label = '';

    if (selectedLength <= checkedValuesOffset) {
      var labelArray = [];
      selectedArray.forEach(function (selectedLabel) {
        labelArray.push(selectedLabel);
      });
      label = labelArray.join(', ');
    } else {
      label = onChangeTriggerLabel ? onChangeTriggerLabel(selectedLength, totalOptions) : "".concat(selectedLength, " selected");
    }

    setSelectedLabels(selectedArray);
    setButtonLabel(label);
  };

  useEffect$3(function () {
    if (dropdownOpen) {
      var _dropdownElement$pare;

      var dropdownElement = triggerRef.current;
      var popoverWidth = width !== '100%' ? width : "".concat(dropdownElement === null || dropdownElement === void 0 ? void 0 : (_dropdownElement$pare = dropdownElement.parentElement) === null || _dropdownElement$pare === void 0 ? void 0 : _dropdownElement$pare.clientWidth, "px");
      var popperWrapperStyle = {
        width: menu ? popoverWidth : "".concat(dropdownElement === null || dropdownElement === void 0 ? void 0 : dropdownElement.clientWidth, "px"),
        minWidth: showApplyButton && checkboxes ? '176px' : '128px'
      };
      setPopoverStyle(popperWrapperStyle);
    }
  }, [dropdownOpen, checkboxes, showApplyButton]);
  useEffect$3(function () {
    if (props.selected) {
      var selectedValuesArray = selected.slice();
      var selectedLabelsArray = selectedLabels.slice();
      props.selected.forEach(function (selectedOption) {
        var label = selectedOption.label,
            value = selectedOption.value;

        if (!selectedValuesArray.includes(value)) {
          selectedValuesArray = selectedValuesArray.concat(value);
          selectedLabelsArray = selectedLabelsArray.concat(label);
        }
      });
      setPreviousSelected(selectedValuesArray);
      setPreviousSelectedLabels(selectedLabelsArray);
      setSelected(selectedValuesArray);
      setSelectButtonLabel(selectedLabelsArray);
    }
  }, [JSON.stringify(props.selected)]);
  useEffect$3(function () {
    if (props.selectedAll) {
      var _props$selectedAll = props.selectedAll,
          label = _props$selectedAll.label,
          value = _props$selectedAll.value;

      if (label && value) {
        var selectedLabelsCopy = selectedLabels.slice();
        var selectedValue = selected.slice();
        selectedLabelsCopy = label;
        selectedValue = value;
        setSelected(selectedValue);
        setSelectButtonLabel(selectedLabelsCopy);
      }
    }
  }, [props.selectedAll]);
  useEffect$3(function () {
    if (props.bottomOptionsSliced && dropdownRef.current) {
      var className = checkboxes ? '.ListCheckbox-childWrapper' : '.Option-wrapper';
      var element = document.querySelectorAll(className);
      var index = element.length - limit + slicedOptionsLength;
      var marker = element[index];
      var updatedScrollTop = marker.offsetTop - maxHeight;
      dropdownRef.current.scrollTop = updatedScrollTop;
      lastScrollTop = updatedScrollTop;
    }
  }, [props.bottomOptionsSliced]);
  useEffect$3(function () {
    if (props.topOptionsSliced && dropdownRef.current) {
      var className = checkboxes ? '.ListCheckbox-childWrapper' : '.Option-wrapper';
      var element = document.querySelectorAll(className);
      var index = limit - slicedOptionsLength;
      var marker = element[index];
      dropdownRef.current.scrollTop = marker.offsetTop;
      lastScrollTop = marker.offsetTop;
    }
  }, [props.topOptionsSliced]);
  useEffect$3(function () {
    var rearrangeCondition = dropdownOpen && props.async && checkboxes;
    if (rearrangeCondition && onRearrangeOptions) onRearrangeOptions(selected, selectedLabels);
  }, [dropdownOpen]);
  useEffect$3(function () {
    var rearrangeCondition = !searchTerm && props.searchInit && props.async && checkboxes;
    if (rearrangeCondition && onRearrangeOptions) onRearrangeOptions(selected, selectedLabels);
  }, [searchTerm, props.searchInit]);
  var trigger = /*#__PURE__*/createElement(DropdownButton, {
    placeholder: placeholder,
    appearance: buttonAppearance,
    size: triggerSize,
    icon: icon,
    disabled: disabled,
    inlineLabel: inlineLabel,
    width: width,
    menu: menu
  }, buttonLabel);
  var dropdownWrapperStyle = menu ? style : _objectSpread2({
    width: width
  }, style);
  var dropdownStyle = {
    maxHeight: maxHeight,
    overflowY: 'auto',
    overflowX: 'hidden'
  };

  var getDropdownClass = function getDropdownClass(index, currentGroup, isGroup) {
    var Dropdown = classNames(_defineProperty({}, 'Dropdown--border', currentGroup !== undefined && isGroup && index !== 0));
    return Dropdown;
  };

  var getOptionWrapperClass = function getOptionWrapperClass(optionIcon, optionValue, index) {
    var _classNames2;

    var OptionWrapper = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'Option-wrapper', true), _defineProperty(_classNames2, 'Option-wrapper--top', index === 0), _defineProperty(_classNames2, 'Option-wrapper--bottom', index + 1 === listOptions.length && !(props.async && remainingOptions > 0)), _defineProperty(_classNames2, 'Option-wrapper--icon', optionIcon), _defineProperty(_classNames2, 'Option-wrapper--selected', selected[0] === optionValue), _classNames2));
    return OptionWrapper;
  };

  var dropdownClass = classNames((_classNames3 = {}, _defineProperty(_classNames3, 'Dropdown', true), _defineProperty(_classNames3, 'Dropdown--placeholder', !menu), _defineProperty(_classNames3, 'Dropdown--menu', menu), _classNames3));
  var dropdownWrapperClass = classNames((_classNames4 = {}, _defineProperty(_classNames4, 'Dropdown-wrapper', true), _defineProperty(_classNames4, 'Dropdown-wrapper--wrap', optionsWrap), _classNames4));
  var optionTextClass = classNames((_classNames5 = {}, _defineProperty(_classNames5, 'Option-text', true), _defineProperty(_classNames5, 'Option-text--wrap', optionsWrap), _classNames5));

  var onToggleDropdown = function onToggleDropdown() {
    if (!dropdownOpen) {
      renderOptionsFromTop();
    }

    if (!disabled) setDropdownOpen(!dropdownOpen);

    if (!(optionsApplied || !showApplyButton)) {
      setSelected(previousSelected);
      setSelectButtonLabel(previousSelectedLabels);
    }

    setOptionsApplied(false);
    if (search || props.async) searchClearHandler();
  };

  var debounceClear = debounce(400, function () {
    if (onRearrangeOptions) onRearrangeOptions([], []);
    setLoading(false);
  });

  var onClearOptions = function onClearOptions() {
    setSelected([]);
    setSelectButtonLabel([]);
    setLoading(true);
    debounceClear();
    if (onChange && !showApplyButton) onChange([]);
  };

  var onCancelOptions = function onCancelOptions() {
    setSelected(previousSelected);
    setSelectedLabels(previousSelectedLabels);
    setSelectButtonLabel(previousSelectedLabels);
    setDropdownOpen(false);
  };

  var onApplyOptions = function onApplyOptions() {
    setPreviousSelected(selected);
    setPreviousSelectedLabels(selectedLabels);
    setOptionsApplied(true);
    setDropdownOpen(false);
    if (onChange) onChange(selected);
  };

  var checkboxChangeHandler = function checkboxChangeHandler(selectedArray, selectedLabelsArray, parentChecked) {
    if (selectedArray.length === 0 || selectedArray.length === optionsLength || !parentChecked) {
      setSelected(selectedArray);
      setSelectButtonLabel(selectedLabelsArray);
    }

    if (parentChecked) {
      if (onSelectAll) onSelectAll(selectedArray.length > 0);
    } else {
      if (onChange && !showApplyButton) onChange(selectedArray);
    }
  };

  var optionClickHandler = function optionClickHandler(event, item) {
    event.preventDefault();
    var value = item.value,
        label = item.label;
    setSelectedLabels([label]);
    setButtonLabel(label);
    setSelected([value]);
    setDropdownOpen(!closeOnSelect);
    if (onChange) onChange(value);
  };

  var searchClearHandler = function searchClearHandler() {
    if (onSearchChange && searchTerm) onSearchChange('');
  };

  var searchHandler = function searchHandler(event) {
    if (onSearchChange) onSearchChange(event.target.value);
  };

  var onScrollDropdown = function onScrollDropdown(direction, scrollTop) {
    lastScrollTop = scrollTop;

    if (onScroll) {
      onScroll(direction);
    }
  };

  var handleMenuScroll = function handleMenuScroll(e) {
    var element = e.target;
    var scrollTop = element.scrollTop;

    if (scrollTop <= lastScrollTop) {
      if (scrollTop <= bottomScrollOffset) onScrollDropdown('up', scrollTop);
    } else {
      var scrollContainerBottomPosition = Math.round(element.scrollTop + element.clientHeight);
      var scrollPosition = Math.round(element.scrollHeight - bottomScrollOffset);

      if (scrollPosition <= scrollContainerBottomPosition) {
        onScrollDropdown('down', scrollTop);
      }
    }
  };

  var renderFooter = function renderFooter() {
    return /*#__PURE__*/createElement("div", {
      className: 'Dropdown-footer'
    }, /*#__PURE__*/createElement(Text, {
      small: true,
      appearance: 'subtle'
    }, footerLabel));
  };

  var renderGroups = function renderGroups(group, selectedGroup) {
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
    var disable = JSON.stringify(previousSelectedLabels) === JSON.stringify(selected);
    return /*#__PURE__*/createElement("div", {
      className: 'Dropdown-buttonWrapper'
    }, /*#__PURE__*/createElement("div", {
      style: {
        marginRight: '8px'
      }
    }, /*#__PURE__*/createElement(Button, {
      appearance: 'basic',
      onClick: onCancelOptions
    }, " Cancel ")), /*#__PURE__*/createElement(Button, {
      appearance: 'primary',
      disabled: disable,
      onClick: onApplyOptions
    }, " Apply "));
  };

  var renderSearch = function renderSearch() {
    return /*#__PURE__*/createElement("div", {
      className: 'Dropdown-input'
    }, /*#__PURE__*/createElement(Input, {
      name: "search",
      icon: 'search',
      value: searchTerm,
      placeholder: 'Search..',
      disabled: false,
      clearButton: true,
      onChange: searchHandler,
      onClear: searchClearHandler
    }));
  };

  var renderLoading = function renderLoading(loadersLength) {
    var arr = Array(loadersLength).fill('Loading');
    return arr.map(function (option, ind) {
      return /*#__PURE__*/createElement("div", {
        className: "Option-loadingWrapper",
        key: "".concat(option, "-").concat(ind)
      }, /*#__PURE__*/createElement(PlaceholderParagraph, {
        length: 'large'
      }));
    });
  };

  var renderCheckboxes = function renderCheckboxes() {
    var list = [];
    var updatedChecked = [];
    var parentChecked = selected.length === optionsLength;
    var showParentCheckbox = searchTerm === '' && !props.async;
    var selectedCondition = prevDropdownOpen !== dropdownOpen || props.searchInit || prevListOptions !== listOptions;
    var parentLabel = parentCheckboxLabel.trim() ? parentCheckboxLabel.trim() : 'Select All';
    var showGroups = props.async;
    listOptions.forEach(function (option) {
      var label = option.label,
          value = option.value,
          group = option.group,
          selectedGroup = option.selectedGroup;
      var checkedValue = false;

      if (selectedCondition && selected && selected.length > 0) {
        var updatedVal = JSON.stringify(value);
        checkedValue = selected.findIndex(function (item) {
          return JSON.stringify(item) === updatedVal;
        }) !== -1 ? true : false;
        updatedChecked.push(checkedValue);
      }

      list.push({
        label: label,
        value: value,
        group: group,
        selectedGroup: selectedGroup,
        checked: checkedValue
      });
    });
    return /*#__PURE__*/createElement(ListCheckbox, {
      label: parentLabel,
      onChange: checkboxChangeHandler,
      checked: parentChecked,
      renderFooter: renderFooter,
      renderGroups: renderGroups,
      remainingOptions: remainingOptions,
      bufferedOption: bufferedOption,
      showGroups: showGroups,
      list: list,
      updatedSelectedArray: updatedChecked,
      style: dropdownStyle,
      ref: dropdownRef,
      selected: selected,
      selectedLabels: selectedLabels,
      optionsLength: optionsLength,
      showParentCheckbox: showParentCheckbox
    });
  };

  var renderOptions = function renderOptions(item, index) {
    var label = item.label,
        value = item.value,
        _item$icon = item.icon,
        optionIcon = _item$icon === void 0 ? '' : _item$icon,
        subInfo = item.subInfo;
    return /*#__PURE__*/createElement("div", {
      className: getOptionWrapperClass(optionIcon, value, index),
      onClick: function onClick(e) {
        return optionClickHandler(e, item);
      }
    }, optionIcon && /*#__PURE__*/createElement("div", {
      className: 'Option-icon'
    }, /*#__PURE__*/createElement(Icon, {
      className: "mr-4",
      name: optionIcon,
      appearance: selected[0] === value ? 'white' : 'default'
    })), /*#__PURE__*/createElement("div", {
      className: 'Option-label'
    }, /*#__PURE__*/createElement("div", {
      className: optionTextClass
    }, label), subInfo && /*#__PURE__*/createElement("div", {
      className: 'Option-subinfo'
    }, subInfo)));
  };

  var renderDropdownSection = function renderDropdownSection() {
    if (loadingOptions || loading) {
      return /*#__PURE__*/createElement("div", {
        className: 'Dropdown-loaderWrapper'
      }, /*#__PURE__*/createElement("div", {
        className: "Scroller-wrapper",
        style: dropdownStyle
      }, renderLoading(limit)));
    }

    if (listOptions.length === 0) {
      return /*#__PURE__*/createElement("div", {
        className: 'Dropdown-errorWrapper'
      }, /*#__PURE__*/createElement("div", {
        className: 'Option-wrapper'
      }, /*#__PURE__*/createElement("div", {
        className: 'Option-subinfo'
      }, searchResultMessage)));
    }

    return /*#__PURE__*/createElement("div", {
      className: dropdownWrapperClass
    }, checkboxes && renderCheckboxes(), !checkboxes && /*#__PURE__*/createElement("div", {
      className: "Scroller-wrapper",
      style: dropdownStyle,
      ref: dropdownRef
    }, listOptions.map(function (option, index) {
      var prevGroup = index > 0 ? listOptions[index - 1].group : bufferedOption ? bufferedOption.group : undefined;
      var currentGroup = option.group;
      var isGroup = prevGroup !== currentGroup;
      return /*#__PURE__*/createElement("div", {
        className: getDropdownClass(index + offset, currentGroup, isGroup),
        key: index
      }, isGroup && currentGroup && renderGroups(currentGroup), renderOptions(option, index));
    }), props.async && remainingOptions > 0 && renderFooter()));
  };

  return /*#__PURE__*/createElement("div", {
    className: dropdownClass,
    ref: triggerRef,
    onScroll: handleMenuScroll,
    style: dropdownWrapperStyle
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

var getSearchedOptions = function getSearchedOptions(options, searchTerm) {
  var result = options.filter(function (option) {
    return option.label.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return result;
};

var getOptions = function getOptions(offset, limit, searchTerm, options) {
  var searchedOptions = searchTerm ? getSearchedOptions(options, searchTerm) : options;
  return new Promise(function (resolve) {
    resolve({
      offset: offset,
      options: searchedOptions.slice(offset, offset + limit),
      length: searchedOptions.length,
      totalRecords: options.length
    });
  });
};
var getValuesFromSelectedObj = function getValuesFromSelectedObj() {
  var selectedArray = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var selectedValues = [];
  selectedArray.forEach(function (selectedObj) {
    var value = selectedObj.value;
    selectedValues.push(value);
  });
  return selectedValues;
};
var getLabelsFromSelectedObj = function getLabelsFromSelectedObj(options) {
  var result = [];
  options.forEach(function (option) {
    result.push(option.label);
  });
  return result;
};

var useIsMount = function useIsMount() {
  var isMountRef = useRef$1(true);
  useEffect$3(function () {
    isMountRef.current = false;
  }, []);
  return isMountRef.current;
};
var asyncLimit = 50;
var Dropdown = function Dropdown(props) {
  var _props$limit = props.limit,
      limit = _props$limit === void 0 ? 10 : _props$limit,
      _props$options = props.options,
      dropdownItems = _props$options === void 0 ? [] : _props$options,
      _props$selectedGroupL = props.selectedGroupLabel,
      selectedGroupLabel = _props$selectedGroupL === void 0 ? 'Selected Items' : _props$selectedGroupL,
      bulk = props.bulk,
      onChange = props.onChange,
      fetchOptions = props.fetchOptions,
      rest = _objectWithoutProperties(props, ["limit", "options", "selectedGroupLabel", "bulk", "onChange", "fetchOptions"]);

  var _React$useState = useState$3(-1),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      topOffset = _React$useState2[0],
      setTopOffset = _React$useState2[1];

  var _React$useState3 = useState$3(-1),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      bottomOffset = _React$useState4[0],
      setBottomOffset = _React$useState4[1];

  var _React$useState5 = useState$3([]),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      options = _React$useState6[0],
      setOptions = _React$useState6[1];

  var _React$useState7 = useState$3(dropdownItems),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      dropdownOptions = _React$useState8[0],
      setDropdownOptions = _React$useState8[1];

  var _React$useState9 = useState$3(dropdownItems),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      shuffledOptions = _React$useState10[0],
      setShuffledOptions = _React$useState10[1];

  var _React$useState11 = useState$3(false),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      topOptionsSliced = _React$useState12[0],
      setTopOptionsSliced = _React$useState12[1];

  var _React$useState13 = useState$3(false),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      bottomOptionsSliced = _React$useState14[0],
      setBottomOptionsSliced = _React$useState14[1];

  var _React$useState15 = useState$3(''),
      _React$useState16 = _slicedToArray(_React$useState15, 2),
      searchTerm = _React$useState16[0],
      setSearchTerm = _React$useState16[1];

  var _React$useState17 = useState$3(2 * limit),
      _React$useState18 = _slicedToArray(_React$useState17, 2),
      stateLimit = _React$useState18[0],
      setStateLimit = _React$useState18[1];

  var _React$useState19 = useState$3(0),
      _React$useState20 = _slicedToArray(_React$useState19, 2),
      slicedOptionLength = _React$useState20[0],
      setSlicedOptionLength = _React$useState20[1];

  var _React$useState21 = useState$3(bulk),
      _React$useState22 = _slicedToArray(_React$useState21, 2),
      async = _React$useState22[0],
      setAsync = _React$useState22[1];

  var _React$useState23 = useState$3(props.loading),
      _React$useState24 = _slicedToArray(_React$useState23, 2),
      loading = _React$useState24[0],
      setLoading = _React$useState24[1];

  var _React$useState25 = useState$3(dropdownItems.length),
      _React$useState26 = _slicedToArray(_React$useState25, 2),
      optionsLength = _React$useState26[0],
      setOptionsLength = _React$useState26[1];

  var _React$useState27 = useState$3(),
      _React$useState28 = _slicedToArray(_React$useState27, 2),
      bufferedOption = _React$useState28[0],
      setBufferedOption = _React$useState28[1];

  var _React$useState29 = useState$3(false),
      _React$useState30 = _slicedToArray(_React$useState29, 2),
      searchInit = _React$useState30[0],
      setSearchInit = _React$useState30[1];

  var _React$useState31 = useState$3(),
      _React$useState32 = _slicedToArray(_React$useState31, 2),
      selectedAll = _React$useState32[0],
      setSelectedAll = _React$useState32[1];

  var isInitialRender = useIsMount();
  var debounceSearch = useCallback(debounce(300, function (search, updatedAsync) {
    if (updatedAsync) {
      var emptyBuffer = {
        value: '',
        label: ''
      };
      setBufferedOption(emptyBuffer);
      getFilteredOptions(search);
      setTopOffset(0);
      setBottomOffset(0);
    } else {
      setLoading(false);
      renderOptionsFromTop(search);
    }
  }), []);

  var getFilteredOptions = function getFilteredOptions() {
    var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    if (fetchOptions) {
      fetchOptions(search, asyncLimit).then(function (res) {
        var searchResult = res.options,
            count = res.count;
        var searchOptions = searchResult.slice(0, asyncLimit);
        setLoading(false);
        setDropdownOptions(searchOptions);
        setShuffledOptions(searchOptions);
        setOptionsLength(count);
        setSearchInit(true);
      });
    }
  };

  var setVirtualization = function setVirtualization(offset, optionsLimit, direction) {
    var search = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : searchTerm;
    var bufferedOptionPresent = direction === 'up' && !(offset < 0);
    var updatedLimit = direction === 'up' ? offset < 0 ? optionsLimit : optionsLimit + 1 : optionsLimit;
    var updatedOffset = direction === 'up' ? offset < 0 ? offset + 1 : offset : offset;
    getOptions(updatedOffset, updatedLimit, search, dropdownOptions).then(function (res) {
      if (updatedOffset !== undefined && direction !== undefined) {
        var slicedOptions = res.options;
        var len = limit - slicedOptions.length;
        var slicedLength = bufferedOptionPresent ? len + 1 : len;
        setSlicedOptionLength(slicedLength);
        updateOptionsOnScroll(slicedOptions, updatedOffset, direction, slicedLength, bufferedOptionPresent);
      } else {
        setSlicedOptionLength(0);
        setOptions(res.options);
        setBottomOffset(res.offset);
        if (!async) setOptionsLength(res.length);
      }
    });
  };

  var renderOptionsFromTop = function renderOptionsFromTop() {
    var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : searchTerm;

    if (!loading) {
      var emptyBuffer = {
        value: '',
        label: ''
      };
      setBufferedOption(emptyBuffer);
      setVirtualization(0, limit, undefined, search);
      setTopOffset(0);
      setBottomOffset(0);
    }
  };

  useEffect$3(function () {
    if (!isInitialRender) setStateLimit(2 * limit);
  }, [limit]);
  useEffect$3(function () {
    if (!isInitialRender) setAsync(bulk);
  }, [bulk]);
  useEffect$3(function () {
    if (!isInitialRender) {
      if (async) {
        setLoading(true);
        getFilteredOptions();
      } else {
        setDropdownOptions(dropdownItems);
        setOptionsLength(dropdownItems.length);
      }
    }
  }, [props.checkboxes]);
  useEffect$3(function () {
    var updatedAsync = bulk === undefined ? dropdownItems.length > 50 : async;
    if (bulk === undefined) setAsync(updatedAsync);

    if (updatedAsync) {
      setLoading(true);
      getFilteredOptions();
    } else {
      setDropdownOptions(dropdownItems);
      setOptionsLength(dropdownItems.length);
    }
  }, [JSON.stringify(props.options)]);
  useEffect$3(function () {
    if (!isInitialRender) renderOptionsFromTop();
  }, [JSON.stringify(dropdownOptions), limit]);
  useEffect$3(function () {
    if (!isInitialRender) {
      debounceSearch(searchTerm, async);
    }
  }, [searchTerm]);

  var onSearchChange = function onSearchChange(search) {
    setLoading(true);
    setSearchTerm(search);
    setSearchInit(false);
  };

  var updateOptionsOnScroll = function updateOptionsOnScroll(slicedOptions, updatedOffset, direction, slicedLength, bufferPresent) {
    if (bottomOptionsSliced) setBottomOptionsSliced(false);
    if (topOptionsSliced) setTopOptionsSliced(false);
    var updatedOptions = options.slice();

    if (direction === 'down') {
      updatedOptions = updatedOptions.concat(slicedOptions);
      var len = updatedOptions.length;

      if (len > stateLimit) {
        var bufferOption = updatedOptions[len - stateLimit - 1];
        updatedOptions = updatedOptions.slice(len - stateLimit, len);
        setBufferedOption(bufferOption);
        setTopOffset(updatedOffset - stateLimit + limit - slicedLength);
        setBottomOptionsSliced(true);
      }

      setBottomOffset(updatedOffset);
    } else {
      var _bufferOption = bufferPresent ? slicedOptions[0] : {};

      var newOptions = bufferPresent ? slicedOptions.slice(1) : slicedOptions;
      var newOffset = bufferPresent ? updatedOffset + 1 : updatedOffset;
      updatedOptions = newOptions.concat(updatedOptions);
      var _len = updatedOptions.length;

      if (_len > stateLimit) {
        updatedOptions = updatedOptions.slice(0, stateLimit);
        setBottomOffset(newOffset + stateLimit - limit);
        setTopOptionsSliced(true);
      }

      setBufferedOption(_bufferOption);
      setTopOffset(newOffset);
    }

    setOptions(updatedOptions);
  };

  var onRearrangeOptions = function onRearrangeOptions(selected, selectedLabels) {
    var optionsCopy = shuffledOptions.slice();
    var unselectedOptions = optionsCopy.filter(function (option) {
      return selected.indexOf(option.value) === -1;
    });
    var selectedOptions = selected.map(function (option, i) {
      var selectedOption = {
        label: selectedLabels[i],
        value: option,
        group: selectedGroupLabel,
        selectedGroup: true
      };
      return selectedOption;
    });
    var newOptions = selectedOptions.concat(unselectedOptions);
    setDropdownOptions(newOptions);
  };

  var OnScrollOptions = function OnScrollOptions(direction) {
    var condition = direction === 'down' ? bottomOffset + limit > optionsLength : topOffset - limit < 0;
    var optionsLimit = condition ? direction === 'down' ? optionsLength - bottomOffset : topOffset : limit;
    var updatedOffset = direction === 'down' ? bottomOffset + optionsLimit : topOffset - optionsLimit - 1;
    var offsetInOptions = updatedOffset >= -1 && optionsLimit > 0;
    if (offsetInOptions) setVirtualization(updatedOffset, optionsLimit, direction);
  };

  var onChangeOptions = function onChangeOptions(selectedArray) {
    if (searchInit) setSearchInit(false);
    if (onChange) onChange(selectedArray);
  };

  var onSelectAll = function onSelectAll(selectedAllOptions) {
    if (props.options) {
      var optionsCopy = props.options.slice();
      var selectedArray = selectedAllOptions ? getValuesFromSelectedObj(optionsCopy) : [];
      var selectedArrayLabel = selectedAllOptions ? getLabelsFromSelectedObj(optionsCopy) : [];
      setSelectedAll({
        label: selectedArrayLabel,
        value: selectedArray
      });
      if (onChange && !props.showApplyButton) onChange(selectedArray);
    }
  };

  return /*#__PURE__*/createElement(DropdownList, _extends({
    listOptions: options,
    searchInit: searchInit,
    bufferedOption: bufferedOption,
    slicedOptionsLength: slicedOptionLength,
    remainingOptions: optionsLength - dropdownOptions.length,
    loadingOptions: loading,
    async: async,
    selectedAll: selectedAll,
    searchTerm: searchTerm,
    onScroll: OnScrollOptions,
    topOptionsSliced: topOptionsSliced,
    bottomOptionsSliced: bottomOptionsSliced,
    limit: limit,
    offset: topOffset,
    optionsLength: dropdownItems.length,
    onSearchChange: onSearchChange,
    onChange: onChangeOptions,
    onSelectAll: onSelectAll,
    onRearrangeOptions: onRearrangeOptions,
    renderOptionsFromTop: renderOptionsFromTop
  }, rest));
};
Dropdown.displayName = 'Dropdown';

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
    size: 16,
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

  var _React$useState = useState$3(props.checked),
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

var ActionButton = function ActionButton(props) {
  var _classNames;

  var _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      label = props.label,
      onClick = props.onClick;
  var buttonClass = classNames((_classNames = {}, _defineProperty(_classNames, 'Toast-actionButton', true), _defineProperty(_classNames, "Toast-actionButton--".concat(appearance), appearance), _classNames));

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
    size: 16,
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
    size: 16,
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
    useState$1 = useState$3;

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
      return onClose('OutsideClick', event);
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
      name: 'close',
      size: 16
    }));
  };

  var getHeaderIcon = function getHeaderIcon() {
    return /*#__PURE__*/createElement("div", {
      className: "Modal-header-icon"
    }, /*#__PURE__*/createElement(Icon, {
      name: icon,
      size: 16
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
    useState$2 = useState$3;
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

  var _React$useState = useState$3(props.page ? props.page : 1),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      page = _React$useState2[0],
      setPage = _React$useState2[1];

  var _React$useState3 = useState$3(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      init = _React$useState4[0],
      setInit = _React$useState4[1];

  var wrapperClass = classNames((_classNames = {}, _defineProperty(_classNames, 'Pagination', true), _defineProperty(_classNames, "Pagination--".concat(type), type), _classNames));
  var nextButtonWrapperClass = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'Pagination-buttonWrapper', true), _defineProperty(_classNames2, 'Pagination-buttonWrapper--next', true), _classNames2));
  var prevButtonWrapperClass = classNames((_classNames3 = {}, _defineProperty(_classNames3, 'Pagination-buttonWrapper', true), _defineProperty(_classNames3, 'Pagination-buttonWrapper--previous', true), _classNames3));
  useEffect$3(function () {
    if (init) onPageChange(page);
  }, [page]);

  var inputChangeHandler = function inputChangeHandler(e) {
    e.preventDefault();
    var val = parseInt(e.target.value.trim(), 10);

    if (!val || val > 0 && val <= totalPages) {
      setPage(val);
    }
  };

  var onClickHandler = function onClickHandler(buttonType) {
    switch (buttonType) {
      case 'prev':
        if (page > 1) setPage(page - 1);
        break;

      case 'next':
        if (page < totalPages) setPage(page + 1);
        break;
    }

    setInit(true);
  };

  var buttonHelper = [];
  if (type === 'basic') buttonHelper.push('mx-3');else buttonHelper.push('mx-4');
  return /*#__PURE__*/createElement("div", {
    className: wrapperClass
  }, /*#__PURE__*/createElement("div", {
    className: prevButtonWrapperClass
  }, /*#__PURE__*/createElement(Button, {
    onClick: function onClick() {
      return setPage(1);
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
    clearButton: false,
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
      return setPage(totalPages);
    },
    disabled: page === totalPages,
    appearance: "transparent",
    size: "large",
    icon: "last_page"
  })));
};
Pagination.displayName = 'Pagination';

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

  var _React$useState = useState$3(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      init = _React$useState2[0],
      setInit = _React$useState2[1];

  var _React$useState3 = useState$3(),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      startDate = _React$useState4[0],
      setStartDate = _React$useState4[1];

  var _React$useState5 = useState$3(),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      endDate = _React$useState6[0],
      setEndDate = _React$useState6[1];

  var _React$useState7 = useState$3(yearNavProp),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      yearNav = _React$useState8[0],
      setYearNav = _React$useState8[1];

  var _React$useState9 = useState$3(monthNavProp),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      monthNav = _React$useState10[0],
      setMonthNav = _React$useState10[1];

  var _React$useState11 = useState$3(openProp),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      open = _React$useState12[0],
      setOpen = _React$useState12[1];

  var _React$useState13 = useState$3(false),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      startError = _React$useState14[0],
      setStartError = _React$useState14[1];

  var _React$useState15 = useState$3(false),
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

  var _React$useState = useState$3(props.activeTab && props.activeTab < children.length ? props.activeTab : 0),
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
  function resize(ev) {
    ev.preventDefault();

    _this.updateCellSchema(name, {
      // @ts-ignore
      width: ev.pageX - el.getClientRects()[0].x
    });
  }

  window.addEventListener('mousemove', resize);
  window.addEventListener('mouseup', function () {
    window.removeEventListener('mousemove', resize);
  });
};
var reorderCol = function reorderCol(_this, name, el) {
  var from = name;
  var to;

  function reorder(ev) {
    ev.preventDefault();

    var index = _this.state.schema.findIndex(function (s) {
      return s.name === name;
    });

    var cellType = _this.state.schema[index].pinned ? 'pinned' : 'main';

    var columns = _this.tableRef.current.querySelectorAll(".Table--".concat(cellType, " .Table-header .Table-cell.Table-cell--header"));

    if (el) {
      columns.forEach(function (c) {
        var _c$getClientRects$ = c.getClientRects()[0],
            x = _c$getClientRects$.x,
            width = _c$getClientRects$.width;

        if (c.contains(ev.target)) {
          var currX = el.getClientRects()[0].x; // @ts-ignore

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
    window.removeEventListener('mouseup', stopReorder);

    _this.updateCellSchema(name, {
      selected: false
    });

    _this.updateReorderHighlighter(undefined);

    if (to && from !== to) _this.reorderSchema(from, to);
  }

  _this.updateCellSchema(name, {
    selected: true
  });

  window.addEventListener('mousemove', reorder);
  window.addEventListener('mouseup', stopReorder);
};
function sortColumn(name, type) {
  var sortingList = this.state.sortingList;
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

  this.updateSortedList(sortingList);
}
function pinColumn(name, type) {
  var schemaUpdate = {
    pinned: type === 'left' ? true : false
  };
  this.updateCellSchema(name, schemaUpdate);
}
function hideColumn(name, value) {
  var schemaUpdate = {
    hidden: value
  };
  this.updateCellSchema(name, schemaUpdate);
}

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

var Image = function Image(props) {
  var src = props.src,
      size = props.size;
  var style = {
    height: "".concat(size, "px"),
    width: "".concat(size, "px")
  };
  return /*#__PURE__*/createElement("img", {
    className: "Image",
    src: src,
    style: style
  });
};

var ImageCell = function ImageCell(props) {
  var schema = props.schema,
      loading = props.loading;
  var src = schema.image;
  var size = 32;

  if (loading) {
    return /*#__PURE__*/createElement(Placeholder, {
      withImage: true,
      imageSize: 'medium',
      round: true
    });
  }

  return /*#__PURE__*/createElement(Image, {
    src: src || '',
    size: size
  });
};

var StatusCell = function StatusCell(props) {
  var loading = props.loading,
      schema = props.schema,
      data = props.data,
      appearanceMapper = props.appearanceMapper;

  if (loading) {
    return /*#__PURE__*/createElement(Placeholder, {
      style: {
        flexGrow: 1
      },
      withImage: true
    }, /*#__PURE__*/createElement(PlaceholderParagraph, {
      length: "small"
    }));
  }

  var cellData = data[schema.name];

  if (cellData) {
    var title = cellData.title;
    var children = title ? title : cellData;
    var appearance = appearanceMapper ? appearanceMapper(children.toLowerCase()) : 'default';
    return /*#__PURE__*/createElement(StatusHints, {
      appearance: appearance
    }, children);
  }

  return null;
};

var AvatarCell = function AvatarCell(props) {
  var schema = props.schema,
      data = props.data,
      loading = props.loading;

  if (loading) {
    return /*#__PURE__*/createElement(Placeholder, {
      style: {
        paddingLeft: 'var(--spacing)'
      },
      withImage: true,
      imageSize: 'medium',
      round: true
    });
  }

  var cellData = data[schema.name];

  if (cellData) {
    var firstName = cellData.firstName,
        lastName = cellData.lastName;
    var appearance = 'primary';
    var children = "".concat(firstName).concat(lastName);
    return /*#__PURE__*/createElement(Avatar, {
      appearance: appearance
    }, children);
  }

  return null;
};

function translateData(schema, data) {
  var newData = data;

  if (schema.translate) {
    var translatedData = schema.translate(data);
    newData = _objectSpread2(_objectSpread2({}, newData), {}, _defineProperty({}, schema.name, _typeof(translatedData) === 'object' ? _objectSpread2(_objectSpread2({}, newData[schema.name]), translatedData) : translatedData));
  }

  return newData;
}

var TableCell = function TableCell(props) {
  var _classNames, _classNames2, _classNames3;

  var size = props.size,
      schema = props.schema,
      loading = props.loading,
      statusMapper = props.statusMapper;
  if (schema.cellTemplate) return schema.cellTemplate(props);
  var data = translateData(schema, props.data);
  var name = schema.name,
      avatar = schema.avatar,
      icon = schema.icon,
      dropdown = schema.dropdown,
      input = schema.input,
      align = schema.align,
      image = schema.image,
      status = schema.status;
  var cellData = data[name] !== undefined ? data[name] : '';
  var title = cellData.title,
      metaData = cellData.metaData;
  var CellClass = classNames((_classNames = {}, _defineProperty(_classNames, 'TableCell-wrapper', true), _defineProperty(_classNames, 'TableCell-avatarOnly', avatar && !image), _defineProperty(_classNames, 'TableCell-imageOnly', !avatar && image), _defineProperty(_classNames, "TableCell--".concat(align), align && !avatar && !image), _classNames));
  var TableCellClass = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'TableCell', true), _defineProperty(_classNames2, 'TableCell-status', status), _classNames2));
  var TableCellWrapperClass = classNames((_classNames3 = {}, _defineProperty(_classNames3, 'TableCell-textwrapper', true), _defineProperty(_classNames3, 'TableCell-textwrapper--image', avatar || image), _classNames3));

  var renderMetaData = function renderMetaData() {
    if (typeof metaData === 'string') {
      return /*#__PURE__*/createElement(Text, {
        appearance: 'subtle',
        small: true
      }, metaData);
    }

    return metaData;
  };

  var renderCellData = function renderCellData() {
    return /*#__PURE__*/createElement("div", {
      className: CellClass
    }, size !== 'tight' && image && /*#__PURE__*/createElement("span", {
      className: "TableCell-image"
    }, /*#__PURE__*/createElement(ImageCell, {
      schema: schema,
      data: data,
      loading: loading
    })), size !== 'tight' && avatar && /*#__PURE__*/createElement(AvatarCell, {
      schema: schema,
      data: data,
      loading: loading
    }), /*#__PURE__*/createElement("div", {
      className: TableCellWrapperClass
    }, loading ? /*#__PURE__*/createElement(Placeholder, null, /*#__PURE__*/createElement(PlaceholderParagraph, {
      length: "medium"
    })) : /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement(Text, {
      small: size === 'tight'
    }, title ? title : cellData), size !== 'tight' && metaData && renderMetaData())));
  };

  return /*#__PURE__*/createElement("div", {
    className: TableCellClass
  }, icon && /*#__PURE__*/createElement(Fragment, null, loading ? /*#__PURE__*/createElement(Placeholder, {
    withImage: true
  }) : /*#__PURE__*/createElement(Icon, {
    name: icon,
    size: 20
  })), dropdown && /*#__PURE__*/createElement(Dropdown, dropdown), input && /*#__PURE__*/createElement(Input, input), status && /*#__PURE__*/createElement(StatusCell, {
    schema: schema,
    data: data,
    loading: loading,
    appearanceMapper: statusMapper
  }), !icon && !dropdown && !input && !status && renderCellData());
};
TableCell.displayName = 'TableCell';

var HeaderCell = function HeaderCell(props) {
  var _this = props._this,
      schema = props.schema,
      draggable = props.draggable;
  var _this$state = _this.state,
      init = _this$state.init,
      loading = _this$state.loading,
      sortingList = _this$state.sortingList;
  var showMenu = _this.showMenu;
  var listIndex = sortingList.findIndex(function (l) {
    return l.name === schema.name;
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
  var options = [{
    label: 'Pin Left',
    value: 'pinLeft',
    icon: 'first_page'
  }, {
    label: 'Pin Right',
    value: 'pinRight',
    icon: 'last_page'
  }, {
    label: 'Hide Column',
    value: 'hide',
    icon: 'cancel'
  }];
  if (schema.sortFn) options = [].concat(sortOptions, _toConsumableArray(options));
  var classes = classNames({
    'Table-headerCell': true,
    'Table-headerCell--draggable': draggable
  });
  return /*#__PURE__*/createElement("div", {
    key: schema.name,
    className: classes,
    ref: el
  }, /*#__PURE__*/createElement("div", {
    className: "Table-cellContent",
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
    className: "Table-sortingIcons"
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
    buttonAppearance: 'transparent',
    showApplyButton: true,
    checkboxes: true,
    options: schema.filters,
    icon: 'filter_list',
    dropdownAlign: 'left',
    onChange: function onChange(selected) {
      return _this.onFilterChange(schema.name, selected);
    }
  })), showMenu && /*#__PURE__*/createElement(Fragment, null, loading && !init ? /*#__PURE__*/createElement(Placeholder, {
    withImage: true
  }) : /*#__PURE__*/createElement(Dropdown, {
    key: schema.name,
    menu: true,
    buttonAppearance: 'transparent',
    options: options,
    dropdownAlign: 'left',
    onChange: function onChange(selected) {
      return _this.onMenuChange(schema.name, selected);
    }
  })), schema.resize && /*#__PURE__*/createElement("span", {
    className: "Table-cellResize",
    onMouseDown: function onMouseDown() {
      return resizeCol(_this, schema.name, el.current);
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
  var loading = _this.state.loading;
  var size = _this.size;
  var statusMapper = _this.props.statusMapper;

  var _expandedState = _slicedToArray(expandedState, 2),
      expanded = _expandedState[0],
      setExpanded = _expandedState[1];

  return /*#__PURE__*/createElement("div", {
    className: "Table-cellContent"
  }, colIndex === 0 && data._expanded && !schema.pinned && /*#__PURE__*/createElement(Button, {
    appearance: 'transparent',
    icon: expanded ? 'expand_less' : 'expand_more',
    onClick: function onClick() {
      return setExpanded(!expanded);
    }
  }), /*#__PURE__*/createElement(TableCell, {
    size: size,
    rowIndex: rowIndex,
    schema: schema,
    data: data,
    loading: loading,
    statusMapper: statusMapper
  }));
};

var Cell = function Cell(props) {
  var _this = props._this,
      header = props.header,
      colIndex = props.colIndex,
      schema = props.schema,
      expandedState = props.expandedState,
      draggable = props.draggable,
      data = props.data,
      rowIndex = props.rowIndex;
  var withCheckbox = _this.props.withCheckbox;
  var cellClass = classNames({
    'Table-cell': true,
    'Table-cell--header': header,
    'Table-cell--body': !header,
    'Table-cell--withSeparator': header ? !(withCheckbox && colIndex === 0) : schema.separator,
    'Table-cell--selected': schema.selected
  });
  if (schema.hidden) return null;
  return /*#__PURE__*/createElement("div", {
    className: cellClass,
    "data-name": schema.name,
    style: {
      width: schema.width
    }
  }, header ? /*#__PURE__*/createElement(HeaderCell, {
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

var TableHeader = function TableHeader(props) {
  var _this = props._this,
      _props$show = props.show,
      show = _props$show === void 0 ? true : _props$show,
      _props$draggable = props.draggable,
      draggable = _props$draggable === void 0 ? false : _props$draggable,
      schema = props.schema,
      withCheckbox = props.withCheckbox;
  var _this$state = _this.state,
      page = _this$state.page,
      selectAll = _this$state.selectAll,
      loading = _this$state.loading;

  if (show) {
    return /*#__PURE__*/createElement("div", {
      className: "Table-header"
    }, /*#__PURE__*/createElement("div", {
      className: "Table-row Table-row--header"
    }, withCheckbox && /*#__PURE__*/createElement("div", {
      className: "Table-cell Table-checkboxCell"
    }, loading ? /*#__PURE__*/createElement(Placeholder, {
      withImage: true
    }) : /*#__PURE__*/createElement(Checkbox, _extends({}, selectAll, {
      onChange: function onChange(checked) {
        return _this.onSelectAll(page, checked);
      }
    }))), schema.map(function (s, index) {
      return /*#__PURE__*/createElement(Cell, {
        key: s.name,
        _this: _this,
        header: true,
        draggable: draggable,
        schema: s,
        colIndex: index
      });
    })));
  }

  return null;
};

var TableExtendedRow = function TableExtendedRow(props) {
  var _this = props._this,
      data = props.data;
  var stateSchema = _this.state.schema;

  if (data._expanded) {
    var showHeader = data._expanded.showHeader;
    var schema = data._expanded.schema || stateSchema;
    var tableData = data._expanded.data;

    if (!tableData) {
      var _uid = data._uid,
          _expanded = data._expanded,
          rest = _objectWithoutProperties(data, ["_uid", "_expanded"]);

      tableData = [rest];
    }

    return /*#__PURE__*/createElement("div", {
      className: "Table-expandedRow"
    }, /*#__PURE__*/createElement(Table, {
      key: 'expanedRow',
      showHeader: showHeader,
      data: tableData,
      schema: schema,
      totalRecords: tableData.length
    }));
  }

  return null;
};

var TableRow = function TableRow(props) {
  var _this = props._this,
      schema = props.schema,
      data = props.data,
      withCheckbox = props.withCheckbox,
      rI = props.rowIndex;

  var _React$useState = useState$3(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      expanded = _React$useState2[0],
      setExpanded = _React$useState2[1];

  var rowClasses = classNames('Table-row', 'Table-row--body', {
    'Table-row--selected': data._selected
  });

  var onClickHandler = function onClickHandler() {
    var type = _this.type;

    if (type === 'resource') {
      var onRowClick = _this.props.onRowClick;

      if (onRowClick) {
        onRowClick(data);
      } else {
        if (data._link) window.location = data._link;
      }
    }
  };

  var loading = _this.state.loading;
  return /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement("div", {
    className: rowClasses,
    onClick: onClickHandler
  }, withCheckbox && /*#__PURE__*/createElement("div", {
    className: "Table-cell Table-checkboxCell"
  }, loading ? /*#__PURE__*/createElement(Placeholder, {
    withImage: true
  }) : /*#__PURE__*/createElement(Checkbox, {
    checked: data._selected,
    onChange: function onChange(checked) {
      _this.onSelect(rI, checked);
    }
  })), schema.map(function (s, cI) {
    return /*#__PURE__*/createElement(Cell, {
      key: rI * schema.length + cI,
      _this: _this,
      rowIndex: rI,
      colIndex: cI,
      schema: s,
      data: data,
      expandedState: [expanded, setExpanded]
    });
  })), expanded && /*#__PURE__*/createElement(TableExtendedRow, {
    _this: _this,
    data: data
  }));
};

var TableBody = function TableBody(props) {
  var _this = props._this,
      schema = props.schema,
      data = props.data,
      withCheckbox = props.withCheckbox;
  var size = _this.size;
  var minRowHeight = {
    comfortable: 54,
    standard: 40,
    compressed: 32,
    tight: 24
  };

  var _React$useState = useState$3({
    offset: 0,
    avgRowHeight: minRowHeight[size],
    inView: 20
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var tableBodyRef = useRef$1(null);
  var offset = state.offset,
      avgRowHeight = state.avgRowHeight,
      inView = state.inView;
  var buffer = 30;
  var pageSize = _this.pageSize;
  var _this$props = _this.props,
      totalRecords = _this$props.totalRecords,
      errorTemplate = _this$props.errorTemplate;
  var _this$state = _this.state,
      page = _this$state.page,
      loading = _this$state.loading;

  if (!loading && data.length === 0) {
    return errorTemplate ? errorTemplate() : /*#__PURE__*/createElement(Heading, null, "Couldn't fetch data");
  }

  var totalPages = Math.ceil(totalRecords / pageSize);
  var dummyRows = page === totalPages ? totalRecords - (page - 1) * pageSize : pageSize;
  var rows = loading ? Array.from({
    length: dummyRows
  }, function () {
    return {};
  }) : data.slice(offset, offset + buffer);

  var onScrollHandler = function onScrollHandler() {
    if (tableBodyRef.current) {
      var el = tableBodyRef.current;
      var scrollTop = el.scrollTop;
      var items = el.querySelectorAll('.Table-row');
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
  };

  return /*#__PURE__*/createElement("div", {
    className: "Table-body",
    ref: tableBodyRef,
    onScroll: onScrollHandler
  }, /*#__PURE__*/createElement("div", {
    className: "TableBody-padding",
    style: {
      height: "".concat(offset * avgRowHeight, "px")
    }
  }), rows.map(function (d, rI) {
    return /*#__PURE__*/createElement(TableRow, {
      key: offset + rI,
      _this: _this,
      rowIndex: offset + rI,
      data: d,
      schema: schema,
      withCheckbox: withCheckbox
    });
  }), /*#__PURE__*/createElement("div", {
    className: "TableBody-padding",
    style: {
      height: "".concat((data.length - inView - offset - 1) * avgRowHeight, "px")
    }
  }));
};

var Table = /*#__PURE__*/function (_React$Component) {
  _inherits(Table, _React$Component);

  var _super = _createSuper(Table);

  function Table(props) {
    var _this;

    _classCallCheck(this, Table);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "type", void 0);

    _defineProperty(_assertThisInitialized(_this), "size", void 0);

    _defineProperty(_assertThisInitialized(_this), "pageSize", void 0);

    _defineProperty(_assertThisInitialized(_this), "paginationType", void 0);

    _defineProperty(_assertThisInitialized(_this), "showMenu", void 0);

    _defineProperty(_assertThisInitialized(_this), "tableRef", /*#__PURE__*/createRef());

    _defineProperty(_assertThisInitialized(_this), "updateRenderedData", function (options) {
      var _this$props = _this.props,
          updateData = _this$props.updateData,
          withPagination = _this$props.withPagination;
      var _this$state = _this.state,
          page = _this$state.page,
          sortingList = _this$state.sortingList;

      var _assertThisInitialize = _assertThisInitialized(_this),
          pageSize = _assertThisInitialize.pageSize;

      var opts = _objectSpread2(_objectSpread2({}, options), {}, {
        page: page,
        pageSize: pageSize,
        sortingList: sortingList
      });

      if (!withPagination) {
        delete opts.page;
        delete opts.pageSize;
      }

      if (updateData) {
        updateData(opts);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateCellSchema", function (name, schemaUpdate) {
      var schema = _this.state.schema;
      var ind = schema.findIndex(function (s) {
        return s.name === name;
      });
      schema[ind] = _objectSpread2(_objectSpread2({}, schema[ind]), schemaUpdate);

      _this.setState({
        schema: schema
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateRowData", function (rowIndexes, dataUpdate) {
      var data = _this.state.data;

      var _iterator = _createForOfIteratorHelper(rowIndexes),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _rowIndex = _step.value;
          data[_rowIndex] = _objectSpread2(_objectSpread2({}, data[_rowIndex]), dataUpdate);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      _this.setState({
        data: data
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateReorderHighlighter", function (dim) {
      _this.setState({
        reorderHighlighter: dim
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateSelectAll", function (attr) {
      _this.setState({
        selectAll: attr
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateSortedList", function (sortingList) {
      _this.setState({
        sortingList: sortingList
      }, function () {
        _this.updateRenderedData();
      });
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
      _this.updateRenderedData({
        filterList: _defineProperty({}, name, selected)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "reorderSchema", function (from, to) {
      var schema = _this.state.schema;
      var fromInd = schema.findIndex(function (s) {
        return s.name === from;
      });
      var toInd = schema.findIndex(function (s) {
        return s.name === to;
      });
      var newSchema = schema;

      if (fromInd < toInd) {
        newSchema = [].concat(_toConsumableArray(schema.slice(0, fromInd)), _toConsumableArray(schema.slice(fromInd + 1, toInd + 1)), [schema[fromInd]], _toConsumableArray(schema.slice(toInd + 1)));
      } else {
        newSchema = [].concat(_toConsumableArray(schema.slice(0, toInd)), [schema[fromInd]], _toConsumableArray(schema.slice(toInd, fromInd)), _toConsumableArray(schema.slice(fromInd + 1)));
      }

      _this.setState({
        schema: newSchema
      });
    });

    _defineProperty(_assertThisInitialized(_this), "syncScroll", function (renderType) {
      var pinnedTable = _this.tableRef.current.querySelector('.Table--pinned .Table-body');

      var mainTable = _this.tableRef.current.querySelector('.Table--main .Table-body');

      if (pinnedTable && mainTable) {
        if (renderType === 'main') pinnedTable.scrollTop = mainTable.scrollTop;
        if (renderType === 'pinned') mainTable.scrollTop = pinnedTable.scrollTop;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "syncSelectAll", function () {
      var data = _this.state.data;

      _this.updateSelectAll({
        indeterminate: data.length >= 0 && data.some(function (d) {
          return !d._selected;
        }) && !data.every(function (d) {
          return !d._selected;
        }),
        checked: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSelect", function (rowIndex, selected) {
      var onSelect = _this.props.onSelect;

      _this.updateRowData([rowIndex], {
        _selected: selected
      });

      _this.syncSelectAll();

      if (onSelect) {
        onSelect(rowIndex, selected);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectAll", function (page, selected) {
      var _this$props2 = _this.props,
          onSelectAll = _this$props2.onSelectAll,
          withPagination = _this$props2.withPagination;
      var data = _this.state.data;
      var indexes = withPagination && _this.pageSize ? Array.from({
        length: _this.pageSize
      }, function (_, i) {
        return i;
      }) : Array.from({
        length: data.length
      }, function (_, i) {
        return i;
      });

      _this.updateRowData(indexes, {
        _selected: selected
      });

      _this.updateSelectAll({
        indeterminate: false,
        checked: selected
      });

      if (onSelectAll) {
        onSelectAll(page, selected);
      }
    });

    _this.state = {
      init: false,
      data: props.data,
      loading: props.loading || false,
      schema: props.loading ? props.loaderSchema || [] : props.schema,
      page: 1,
      sortingList: []
    };
    _this.type = props.type || 'data';
    _this.size = props.size || 'standard';
    _this.pageSize = props.pageSize || 15;
    _this.paginationType = props.paginationType || 'jump';
    _this.showMenu = props.showMenu !== undefined ? props.showMenu : true;

    _this.updateRenderedData();

    return _this;
  }

  _createClass(Table, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (prevProps.withPagination !== this.props.withPagination || prevState.page !== this.state.page) {
        this.updateRenderedData();
      }

      if (this.props.schema !== prevProps.schema) {
        this.setState({
          schema: this.props.schema
        }, function () {
          _this2.syncSelectAll();
        });
      }

      if (this.props.data !== prevProps.data) {
        this.setState({
          data: this.props.data
        }, function () {
          _this2.syncSelectAll();
        });
      }

      if (this.props.loading !== prevProps.loading) {
        this.setState({
          loading: this.props.loading || false
        }, function () {
          _this2.syncSelectAll();
        });
      }
    }
  }, {
    key: "renderTable",
    value: function renderTable(renderType) {
      var _classNames,
          _this3 = this;

      var type = this.type,
          size = this.size;
      var _this$props3 = this.props,
          showHeader = _this$props3.showHeader,
          draggable = _this$props3.draggable,
          withCheckbox = _this$props3.withCheckbox;
      var _this$state2 = this.state,
          schema = _this$state2.schema,
          data = _this$state2.data;
      var classes = classNames((_classNames = {
        Table: 'true'
      }, _defineProperty(_classNames, "Table--".concat(renderType), renderType), _defineProperty(_classNames, "Table--".concat(type), type), _defineProperty(_classNames, "Table--".concat(size), size), _classNames));
      var pinnedSchema = schema.filter(function (s) {
        return s.pinned;
      });
      var unpinnedSchema = schema.filter(function (s) {
        return !s.pinned;
      });
      var mainSchema = [].concat(_toConsumableArray(pinnedSchema), _toConsumableArray(unpinnedSchema));
      if (renderType === 'pinned' && pinnedSchema.length === 0) return null;
      return /*#__PURE__*/createElement("div", {
        className: classes,
        onScroll: function onScroll() {
          return _this3.syncScroll(renderType);
        }
      }, /*#__PURE__*/createElement(TableHeader, {
        _this: this,
        schema: renderType === 'pinned' ? pinnedSchema : mainSchema,
        show: showHeader,
        draggable: draggable,
        withCheckbox: withCheckbox
      }), /*#__PURE__*/createElement(TableBody, {
        _this: this,
        schema: renderType === 'pinned' ? pinnedSchema : mainSchema,
        data: data,
        withCheckbox: withCheckbox
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state3 = this.state,
          reorderHighlighter = _this$state3.reorderHighlighter,
          page = _this$state3.page;
      var _this$props4 = this.props,
          withPagination = _this$props4.withPagination,
          _onPageChange = _this$props4.onPageChange,
          totalRecords = _this$props4.totalRecords;
      var totalPages = Math.ceil(totalRecords / this.pageSize);
      return /*#__PURE__*/createElement("div", {
        className: "Table-container"
      }, /*#__PURE__*/createElement("div", {
        className: "Table-wrapper",
        ref: this.tableRef
      }, this.renderTable('pinned'), this.renderTable('main'), reorderHighlighter && /*#__PURE__*/createElement("div", {
        className: "Table-reorderHighlighter",
        style: {
          left: "".concat(reorderHighlighter, "px")
        }
      })), withPagination && /*#__PURE__*/createElement("div", {
        className: "Table-pagination"
      }, /*#__PURE__*/createElement(Pagination, {
        page: page,
        totalPages: totalPages,
        type: this.paginationType,
        onPageChange: function onPageChange(newPage) {
          if (_onPageChange) _onPageChange(newPage);

          _this4.setState({
            page: newPage
          });
        }
      })));
    }
  }]);

  return Table;
}(Component);

export { Avatar, Backdrop, Badge, Breadcrumb, BreadcrumbsWrapper, Button, Card, Checkbox, Column, DatePicker, Dialog, DonutChart, Dropdown, Heading, Icon, Input, Label, Legend, Link, ListCheckbox, Message, Modal, ModalBody, ModalDescription, ModalFooter, ModalHeader, OutsideClick, Pagination, Paragraph, Placeholder, PlaceholderParagraph, Popover, Radio, RangePicker, Row, Spinner, Subheading, Switch, Tab, Table, TabsWrapper, Text, Toast, Tooltip };
