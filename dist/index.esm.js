import { createElement, useEffect as useEffect$2, useState as useState$2, forwardRef, useRef, useImperativeHandle, Fragment, createRef, cloneElement, Component, Children, PureComponent } from 'react';
import classNames from 'classnames';
import { createPortal, findDOMNode } from 'react-dom';
import { Manager, Reference, Popper } from 'react-popper';
import axios from 'axios';

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
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
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
  if (n === "Map" || n === "Set") return Array.from(n);
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

var initialsLength = 2;

var Avatar = function Avatar(props) {
  var _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'primary' : _props$appearance,
      children = props.children;
  var initials = children.slice(0, initialsLength);
  var classes = classNames(_defineProperty({
    Avatar: true
  }, "Avatar--".concat(appearance), appearance));
  return /*#__PURE__*/createElement("span", {
    className: classes
  }, initials);
};

var useEffect = useEffect$2,
    useState = useState$2;

var Backdrop = function Backdrop(props) {
  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      savedBodyOverflow = _useState2[0],
      setBodyOverflow = _useState2[1];

  var _useState3 = useState('Backdrop'),
      _useState4 = _slicedToArray(_useState3, 2),
      backdropClasses = _useState4[0],
      setClasses = _useState4[1];

  var _props$open = props.open,
      open = _props$open === void 0 ? false : _props$open;
  var classes = classNames({
    Backdrop: true
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
    if (open) {
      disableBodyScroll();
      var newBackdropClasses = "".concat(classes, " Backdrop--open Backdrop-animation--open");
      setClasses(newBackdropClasses);
    }

    if (!open) {
      var _newBackdropClasses = "".concat(classes, " Backdrop--open Backdrop-animation--close");

      setClasses(_newBackdropClasses);
      setTimeout(function () {
        setClasses(classes);
      }, 110);
    }

    return function () {
      enableBodyScroll();
    };
  }, [open]);
  var BacdropElement = createPortal( /*#__PURE__*/createElement("div", {
    className: backdropClasses
  }), document.body);
  return BacdropElement;
};

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

var GenericText = function GenericText(_ref) {
  var children = _ref.children,
      _ref$componentType = _ref.componentType,
      componentType = _ref$componentType === void 0 ? 'span' : _ref$componentType,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "componentType", "className"]);

  return createElement(componentType, _objectSpread2({}, props, {
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

var Button = function Button(props) {
  var _classNames, _classNames2;

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
  var iconClass = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'material-icons', true), _defineProperty(_classNames2, 'Button-icon', true), _defineProperty(_classNames2, "Button-icon--".concat(iconAlign), children && iconAlign), _classNames2));
  return /*#__PURE__*/createElement("button", _extends({
    className: buttonClass,
    disabled: disabled || loading
  }, rest), loading && /*#__PURE__*/createElement(Spinner, {
    size: "small",
    appearance: appearance === 'basic' || appearance === 'transparent' ? 'secondary' : 'white'
  }), icon && !loading && /*#__PURE__*/createElement("i", {
    className: iconClass
  }, icon), children && "".concat(children.charAt(0).toUpperCase()).concat(children.slice(1)));
};

Button.displayName = 'Button';

var Card = function Card(props) {
  var shadow = props.shadow,
      children = props.children,
      rest = _objectWithoutProperties(props, ["shadow", "children"]);

  var classes = classNames(_defineProperty({
    Card: true
  }, "Card--shadow-".concat(shadow), shadow));
  return /*#__PURE__*/createElement("div", _extends({
    className: classes
  }, rest), children);
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

var Icon = function Icon(props) {
  var _classNames;

  var _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      _props$type = props.type,
      type = _props$type === void 0 ? 'filled' : _props$type,
      _props$helpers = props.helpers,
      helpers = _props$helpers === void 0 ? [] : _props$helpers,
      name = props.name,
      size = props.size,
      onClick = props.onClick;
  var iconClass = classNames((_classNames = {}, _defineProperty(_classNames, 'material-icons', true), _defineProperty(_classNames, 'Icon', true), _defineProperty(_classNames, "Icon--".concat(appearance), appearance), _defineProperty(_classNames, "".concat(helpers.join(' ')), helpers), _classNames));
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

var Checkbox = forwardRef(function (props, forwardedRef) {
  var _classNames, _classNames2;

  var _props$size = props.size,
      size = _props$size === void 0 ? 'regular' : _props$size,
      label = props.label,
      disabled = props.disabled,
      onChange = props.onChange,
      name = props.name,
      value = props.value;
  var ref = useRef(null);
  useImperativeHandle(forwardedRef, function () {
    return ref.current;
  });

  var _React$useState = useState$2(props.checked),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      checked = _React$useState2[0],
      setChecked = _React$useState2[1];

  useEffect$2(function () {
    setIndeterminate(props.indeterminate);
  }, [props.indeterminate]);
  useEffect$2(function () {
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
    className: CheckboxClass
  }, /*#__PURE__*/createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    ref: ref,
    name: name,
    value: value,
    className: 'Checkbox-input'
  }), /*#__PURE__*/createElement("span", {
    onClick: onChangeHandler,
    className: CheckboxWrapper
  }, IconName && /*#__PURE__*/createElement(Icon, {
    name: IconName,
    size: IconSize,
    appearance: 'white'
  })), label && /*#__PURE__*/createElement(Text, {
    small: size === 'tiny'
  }, label));
});
Checkbox.displayName = 'Checkbox';

var Column = function Column(props) {
  var _classNames;

  var size = props.size,
      sizeS = props.sizeS,
      sizeM = props.sizeM,
      sizeL = props.sizeL,
      sizeXL = props.sizeXL;
  var classes = classNames((_classNames = {}, _defineProperty(_classNames, 'Col', !size), _defineProperty(_classNames, 'Col--s', sizeS && sizeS === 's'), _defineProperty(_classNames, 'Col--m', sizeM && sizeM === 'm'), _defineProperty(_classNames, 'Col--l', sizeL && sizeL === 'l'), _defineProperty(_classNames, 'Col--xl', sizeXL && sizeXL === 'xl'), _defineProperty(_classNames, "Col--".concat(size), size), _defineProperty(_classNames, "Col--s-".concat(sizeS), sizeS && sizeS !== 's'), _defineProperty(_classNames, "Col--m-".concat(sizeM), sizeM && sizeM !== 'm'), _defineProperty(_classNames, "Col--l-".concat(sizeL), sizeL && sizeL !== 'l'), _defineProperty(_classNames, "Col--xl-".concat(sizeXL), sizeXL && sizeXL !== 'xl'), _classNames));
  return /*#__PURE__*/createElement("div", {
    className: classes
  }, props.children);
};

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

      case 'yy':
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

        case 'yy':
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
  var now = Date.now();

  var _getDateInfo = getDateInfo(now),
      nowYear = _getDateInfo.year,
      nowMonth = _getDateInfo.month;

  var _props$monthsInView = props.monthsInView,
      monthsInView = _props$monthsInView === void 0 ? 1 : _props$monthsInView,
      _props$view = props.view,
      viewProp = _props$view === void 0 ? 'date' : _props$view,
      _props$firstDayOfWeek = props.firstDayOfWeek,
      firstDayOfWeek = _props$firstDayOfWeek === void 0 ? 'sunday' : _props$firstDayOfWeek,
      dateProp = props.date,
      rangePicker = props.rangePicker,
      rangeLimit = props.rangeLimit,
      _props$yearNav = props.yearNav,
      yearNavProp = _props$yearNav === void 0 ? nowYear : _props$yearNav,
      _props$monthNav = props.monthNav,
      monthNavProp = _props$monthNav === void 0 ? nowMonth : _props$monthNav,
      startDateProp = props.startDate,
      endDateProp = props.endDate,
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

  var _React$useState = useState$2(monthsInView > 1 ? 'date' : viewProp),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      view = _React$useState2[0],
      setView = _React$useState2[1];

  var _React$useState3 = useState$2({
    year: undefined,
    month: undefined,
    date: undefined
  }),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      state = _React$useState4[0],
      setState = _React$useState4[1];

  var _React$useState5 = useState$2(),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      currDateState = _React$useState6[0],
      setCurrDateState = _React$useState6[1];

  var _React$useState7 = useState$2(),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      hoverDateState = _React$useState8[0],
      setHoverDateState = _React$useState8[1];

  var _React$useState9 = useState$2(),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      startDateState = _React$useState10[0],
      setStartDateState = _React$useState10[1];

  var _React$useState11 = useState$2(),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      endDateState = _React$useState12[0],
      setEndDateState = _React$useState12[1];

  var _React$useState13 = useState$2(getYearBlock(yearNavProp)),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      yearBlockNav = _React$useState14[0],
      setYearBlockNav = _React$useState14[1];

  var _React$useState15 = useState$2(yearNavProp),
      _React$useState16 = _slicedToArray(_React$useState15, 2),
      yearNav = _React$useState16[0],
      setYearNav = _React$useState16[1];

  var _React$useState17 = useState$2(monthNavProp),
      _React$useState18 = _slicedToArray(_React$useState17, 2),
      monthNav = _React$useState18[0],
      setMonthNav = _React$useState18[1];

  var yearState = state.year,
      monthState = state.month,
      dateState = state.date;
  useEffect$2(function () {
    if (dateProp) {
      var _getDateInfo2 = getDateInfo(dateProp),
          year = _getDateInfo2.year,
          month = _getDateInfo2.month,
          _date = _getDateInfo2.date;

      updateState(year, month, _date);
      var d = convertToDate(dateProp);
      setCurrDateState(d);
    } else {
      setCurrDateState(undefined);
    }
  }, [dateProp]);
  useEffect$2(function () {
    if (startDateProp) {
      var d = convertToDate(startDateProp);
      setStartDateState(d);
    } else {
      setStartDateState(undefined);
    }
  }, [startDateProp]);
  useEffect$2(function () {
    if (endDateProp) {
      var d = convertToDate(endDateProp);
      setEndDateState(d);
    } else {
      setEndDateState(undefined);
    }
  }, [endDateProp]);
  useEffect$2(function () {
    if (monthsInView === 1) setView(viewProp);else setView('date');
  }, [monthsInView, viewProp]);
  useEffect$2(function () {
    if (currDateState) {
      if (onDateChange) onDateChange(currDateState);

      if (rangePicker) {
        if (startDateState && endDateState) {
          setEndDateState(undefined);
          setHoverDateState(undefined);
          setStartDateState(currDateState);
        } else {
          var _getDateInfo3 = getDateInfo(currDateState),
              year = _getDateInfo3.year,
              month = _getDateInfo3.month,
              _date2 = _getDateInfo3.date;

          if (startDateState) {
            if (compareDate(startDateState, 'more', year, month, _date2)) {
              setStartDateState(currDateState);
            } else {
              setEndDateState(currDateState);
            }
          } else if (endDateState) {
            if (compareDate(endDateState, 'less', year, month, _date2)) {
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
  useEffect$2(function () {
    if (onRangeChange) onRangeChange(startDateState, endDateState);
  }, [startDateState, endDateState]);
  useEffect$2(function () {
    if (yearState !== undefined && monthsInView < 2) {
      setYearBlockNav(getYearBlock(yearState));
      setYearNav(yearState);
    }
  }, [yearState]);
  useEffect$2(function () {
    if (monthState !== undefined && monthsInView < 2) {
      setMonthNav(monthState);
    }
  }, [monthState]);
  useEffect$2(function () {
    setYearNav(yearNavProp);
    setYearBlockNav(getYearBlock(yearNavProp));
  }, [yearNavProp]);
  useEffect$2(function () {
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
      var _getDateInfo4 = getDateInfo(startDateState),
          startYear = _getDateInfo4.year,
          startMonth = _getDateInfo4.month,
          _startDate = _getDateInfo4.date;

      var _getDateInfo5 = getDateInfo(endDateState),
          endYear = _getDateInfo5.year,
          endMonth = _getDateInfo5.month,
          _endDate = _getDateInfo5.date;

      var _getDateInfo6 = getDateInfo(hoverDateState),
          hoverYear = _getDateInfo6.year,
          hoverMonth = _getDateInfo6.month,
          hoverDate = _getDateInfo6.date;

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
      helpers: ['p-4'],
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
        var active = !disabled && yearNav === year;
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
    className: "d-flex"
  }, Array.from({
    length: monthsInView
  }, function (_x, index) {
    return renderCalendar(index);
  }));
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

      var newStyle = _objectSpread2({}, style, {}, oldStyle);

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
    _this.triggerRef = createRef();
    _this.popupRef = createRef();
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
      var element = cloneElement( /*#__PURE__*/createElement("span", {
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
      var element = cloneElement(children, options);
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
      }), (open || this.state.open) && appendToBody && createPortal(
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
      open = props.open,
      onToggle = props.onToggle;
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
    onToggle: onToggle,
    placement: position
  };
  return /*#__PURE__*/createElement(PopperWrapper, _extends({}, popperOptions, {
    offset: "Large"
  }), PopoverWrapper);
};

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

var Input = forwardRef(function (props, ref) {
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
      _onChange = props.onChange,
      _onClick = props.onClick,
      onClear = props.onClear,
      _onBlur = props.onBlur;
  var disabled = propDisabled || !_onChange;
  var classes = classNames(_defineProperty({}, 'Input', true));
  var inputWrapperClass = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'Input-wrapper', true), _defineProperty(_classNames2, "Input-wrapper--".concat(size), size), _defineProperty(_classNames2, 'Input-wrapper--disabled', disabled), _defineProperty(_classNames2, 'Input-wrapper--error', error), _classNames2));
  var inputClass = classNames((_classNames3 = {}, _defineProperty(_classNames3, 'Input-input', true), _defineProperty(_classNames3, "Input-input--".concat(size), size), _classNames3));
  var leftIconClass = classNames((_classNames4 = {}, _defineProperty(_classNames4, 'material-icons', true), _defineProperty(_classNames4, 'Input-icon', true), _defineProperty(_classNames4, 'Input-icon--left', true), _defineProperty(_classNames4, 'Input-icon--disabled', !value), _classNames4));
  var rightIconClass = classNames((_classNames5 = {}, _defineProperty(_classNames5, 'material-icons', true), _defineProperty(_classNames5, 'Input-icon', true), _defineProperty(_classNames5, 'Input-icon--right', true), _classNames5));
  var errorIconClass = classNames((_classNames6 = {}, _defineProperty(_classNames6, 'material-icons', true), _defineProperty(_classNames6, 'Input-icon', true), _defineProperty(_classNames6, 'Input-icon--error', true), _classNames6));
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
  }, inlineLabel)), size !== 'tiny' && icon && /*#__PURE__*/createElement("i", {
    className: leftIconClass
  }, icon), /*#__PURE__*/createElement("input", {
    name: name,
    type: type,
    placeholder: placeholder,
    className: inputClass,
    ref: ref,
    value: value,
    autoComplete: autocomplete,
    onChange: function onChange(e) {
      return _onChange && _onChange(e);
    },
    onBlur: function onBlur(e) {
      return _onBlur && _onBlur(e);
    },
    onClick: function onClick(e) {
      return _onClick && _onClick(e);
    },
    required: required,
    disabled: disabled
  }), (!value && !disabled || value && disabled) && info && /*#__PURE__*/createElement(Tooltip, {
    position: "top",
    tooltip: info
  }, /*#__PURE__*/createElement("i", {
    className: rightIconClass
  }, "info")), clearButton && value && !disabled && /*#__PURE__*/createElement("i", {
    className: rightIconClass,
    onClick: function onClick(e) {
      return onClear && onClear(e);
    }
  }, "close")), size !== 'tiny' && caption && /*#__PURE__*/createElement("div", {
    className: "Input-caption"
  }, error && /*#__PURE__*/createElement("i", {
    className: errorIconClass
  }, "error"), /*#__PURE__*/createElement(Text, {
    appearance: error ? 'destructive' : 'subtle',
    small: true,
    weight: "medium"
  }, "".concat(caption))));
});
Input.displayName = 'Input';

var InputMask = forwardRef(function (props, forwardRef) {
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

  var _React$useState = useState$2(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var _React$useState3 = useState$2(0),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      caret = _React$useState4[0],
      setCaret = _React$useState4[1];

  var ref = useRef(null);
  var fixedMask = mask.filter(function (m) {
    return typeof m === 'string' && m.length === 1;
  });
  useEffect$2(function () {
    if (valueProp) {
      setValue(convertToMasked(valueProp));
    }
  }, [valueProp]);
  useEffect$2(function () {
    setCaretPos(caret);
  }, [caret]);
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
  'dd/mm/yy': [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
  'mm/dd/yy': [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
  'yy/mm/dd': [/\d/, /\d/, /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/],
  'dd-mm-yy': [/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  'mm-dd-yy': [/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  'yy-mm-dd': [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]
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
    case 'dd/mm/yy':
      var p = val.split('/');
      var date = +p[0];
      var month = +p[1];
      var year = +p[2];
      return validate(date, month, year);

    case 'mm/dd/yy':
      var p = val.split('/');
      var date = +p[1];
      var month = +p[0];
      var year = +p[2];
      return validate(date, month, year);

    case 'yy/mm/dd':
      var p = val.split('/');
      var date = +p[2];
      var month = +p[1];
      var year = +p[0];
      return validate(date, month, year);

    case 'dd-mm-yy':
      var p = val.split('-');
      var date = +p[0];
      var month = +p[1];
      var year = +p[2];
      return validate(date, month, year);

    case 'mm-dd-yy':
      var p = val.split('-');
      var date = +p[1];
      var month = +p[0];
      var year = +p[2];
      return validate(date, month, year);

    case 'yy-mm-dd':
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
      _props$withInput = props.withInput,
      withInput = _props$withInput === void 0 ? false : _props$withInput,
      _props$inputFormat = props.inputFormat,
      inputFormat = _props$inputFormat === void 0 ? 'dd/mm/yy' : _props$inputFormat,
      _props$outputFormat = props.outputFormat,
      outputFormat = _props$outputFormat === void 0 ? 'mm/dd/yy' : _props$outputFormat,
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
      position = props.position,
      disabledBefore = props.disabledBefore,
      disabledAfter = props.disabledAfter,
      onDateChange = props.onDateChange,
      rest = _objectWithoutProperties(props, ["date", "withInput", "inputFormat", "outputFormat", "inputProps", "mask", "validator", "position", "disabledBefore", "disabledAfter", "onDateChange"]);

  var _React$useState = useState$2(),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      date = _React$useState2[0],
      setDate = _React$useState2[1];

  var _React$useState3 = useState$2(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      error = _React$useState4[0],
      setError = _React$useState4[1];

  var _React$useState5 = useState$2(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      open = _React$useState6[0],
      setOpen = _React$useState6[1];

  useEffect$2(function () {
    var d = convertToDate(dateProp, inputFormat, validator);
    setDate(d);
  }, [dateProp]);
  useEffect$2(function () {
    setError(!date);

    if (onDateChange) {
      if (date) {
        var dVal = translateToString(outputFormat, date);
        onDateChange(date, dVal);
      }
    }
  }, [date]);

  var onDateChangeHandler = function onDateChangeHandler(d) {
    if (d) setDate(d);
  };

  if (withInput) {
    var onChangeHandler = function onChangeHandler(_e, val) {
      setOpen(true);
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

var DropdownButton = forwardRef(function (props, ref) {
  var _classNames;

  var _props$size = props.size,
      size = _props$size === void 0 ? 'regular' : _props$size,
      children = props.children,
      width = props.width,
      placeholder = props.placeholder,
      icon = props.icon,
      disabled = props.disabled,
      inlineLabel = props.inlineLabel,
      rest = _objectWithoutProperties(props, ["size", "children", "width", "placeholder", "icon", "disabled", "inlineLabel"]);

  var buttonClass = classNames((_classNames = {}, _defineProperty(_classNames, 'Button', true), _defineProperty(_classNames, 'Button--basic', true), _defineProperty(_classNames, 'Button--square', !children), _defineProperty(_classNames, 'DropdownButton', true), _defineProperty(_classNames, "DropdownButton--".concat(size), size), _defineProperty(_classNames, 'DropdownButton--icon', icon), _defineProperty(_classNames, 'DropdownButton--moreIcon', !placeholder && !children), _defineProperty(_classNames, 'DropdownButton--placeholder', placeholder && !children), _defineProperty(_classNames, 'DropdownButton--label', inlineLabel), _classNames));
  var labelClass = classNames(_defineProperty({}, 'DropdownButton-label', true));
  var style = {
    minWidth: width,
    maxWidth: width
  };
  var appearance = disabled ? 'disabled' : 'default';
  var value = children ? children : placeholder;
  var iconName = value ? 'keyboard_arrow_down' : 'more_horiz';
  return /*#__PURE__*/createElement("button", _extends({
    ref: ref,
    value: children,
    className: buttonClass,
    disabled: disabled
  }, rest, {
    style: style
  }), value && /*#__PURE__*/createElement("div", {
    className: "DropdownButton-wrapper"
  }, inlineLabel && !icon && /*#__PURE__*/createElement("div", {
    className: labelClass
  }, " ", inlineLabel.charAt(0).toUpperCase(), inlineLabel.slice(1), " "), icon && !inlineLabel && /*#__PURE__*/createElement(Icon, {
    appearance: appearance,
    helpers: ['mr-4'],
    name: icon
  }), /*#__PURE__*/createElement("div", {
    className: 'DropdownButton-text'
  }, value && "".concat(value.charAt(0).toUpperCase()).concat(value.slice(1)))), /*#__PURE__*/createElement(Icon, {
    appearance: appearance,
    name: iconName
  }));
});

var ListCheckbox = forwardRef(function (props, ref) {
  var list = props.list,
      _props$showParentChec = props.showParentCheckbox,
      showParentCheckbox = _props$showParentChec === void 0 ? true : _props$showParentChec,
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

  var _React$useState = useState$2(calcParentStatus(selected)),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      parentStatus = _React$useState2[0],
      setParentStatus = _React$useState2[1];

  var _React$useState3 = useState$2(childArray),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      checked = _React$useState4[0],
      setChecked = _React$useState4[1];

  var _React$useState5 = useState$2(selectedLabels),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      selectedArrayLabels = _React$useState6[0],
      setSelectedArrayLabels = _React$useState6[1];

  var _React$useState7 = useState$2(selected),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      selectedArrayValues = _React$useState8[0],
      setSelectedArrayValues = _React$useState8[1];

  useEffect$2(function () {
    if (updatedSelectedArray && updatedSelectedArray.length > 0) {
      setChecked(updatedSelectedArray);
    }
  }, [JSON.stringify(updatedSelectedArray)]);
  useEffect$2(function () {
    if (selected && selected.length > 0 && parentStatus.checked) {
      setSelectedArrayValues(selected);
      setSelectedArrayLabels(selectedLabels);
    }
  }, [JSON.stringify(selected)]);
  useEffect$2(function () {
    if (props.checked !== undefined) {
      setParentStatus(_objectSpread2({}, parentStatus, {
        checked: props.checked
      }));
    }
  }, [props.checked]);

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
        childOnChange = item.onChange;
    return /*#__PURE__*/createElement("div", {
      className: 'ListCheckbox-childWrapper',
      key: "checkbox-".concat(ind)
    }, /*#__PURE__*/createElement(Checkbox, {
      label: childLabel,
      checked: checked[ind],
      size: size,
      onChange: function onChange(c) {
        handleChildChange(c, ind);
        if (childOnChange) childOnChange(checked[ind]);
      }
    }));
  })));
});

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

var DropdownAlignMapping = {
  right: 'bottom-start',
  left: 'bottom-end'
};
var lastScrollTop = 0;

var usePrevious = function usePrevious(value) {
  var ref = useRef();
  useEffect$2(function () {
    ref.current = value;
  }, [value]);
  return ref.current;
};

var DropdownList = function DropdownList(props) {
  var _props$subheading = props.subheading,
      subheading = _props$subheading === void 0 ? {} : _props$subheading,
      _props$listOptions = props.listOptions,
      listOptions = _props$listOptions === void 0 ? [] : _props$listOptions,
      _props$size = props.size,
      size = _props$size === void 0 ? 'regular' : _props$size,
      _props$dropdownAlign = props.dropdownAlign,
      dropdownAlign = _props$dropdownAlign === void 0 ? 'right' : _props$dropdownAlign,
      _props$checkedValuesO = props.checkedValuesOffset,
      checkedValuesOffset = _props$checkedValuesO === void 0 ? 2 : _props$checkedValuesO,
      _props$closeOnSelect = props.closeOnSelect,
      closeOnSelect = _props$closeOnSelect === void 0 ? true : _props$closeOnSelect,
      _props$searchResultMe = props.searchResultMessage,
      searchResultMessage = _props$searchResultMe === void 0 ? 'No Result Found' : _props$searchResultMe,
      _props$maxHeight = props.maxHeight,
      maxHeight = _props$maxHeight === void 0 ? 200 : _props$maxHeight,
      _props$bottomScrollOf = props.bottomScrollOffset,
      bottomScrollOffset = _props$bottomScrollOf === void 0 ? 0 : _props$bottomScrollOf,
      loadingOptions = props.loadingOptions,
      selectAll = props.selectAll,
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
      onScroll = props.onScroll,
      onSelectAll = props.onSelectAll,
      setSearchTerm = props.setSearchTerm;
  var dropdownRef = createRef();

  var _React$useState = useState$2([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      selected = _React$useState2[0],
      setSelected = _React$useState2[1];

  var _React$useState3 = useState$2([]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      selectedLabels = _React$useState4[0],
      setSelectedLabels = _React$useState4[1];

  var _React$useState5 = useState$2(''),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      buttonLabel = _React$useState6[0],
      setButtonLabel = _React$useState6[1];

  var _React$useState7 = useState$2(),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      dropdownOpen = _React$useState8[0],
      setDropdownOpen = _React$useState8[1];

  var _React$useState9 = useState$2([]),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      checkboxSelected = _React$useState10[0],
      setCheckboxSelected = _React$useState10[1];

  var _React$useState11 = useState$2([]),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      previousSelected = _React$useState12[0],
      setPreviousSelected = _React$useState12[1];

  var _React$useState13 = useState$2([]),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      previousSelectedLabels = _React$useState14[0],
      setPreviousSelectedLabels = _React$useState14[1];

  var _React$useState15 = useState$2(false),
      _React$useState16 = _slicedToArray(_React$useState15, 2),
      optionsApplied = _React$useState16[0],
      setOptionsApplied = _React$useState16[1];

  var prevSearchTerm = usePrevious(searchTerm);
  var width = style && style.width ? style.width : '128px';

  var setSelectButtonLabel = function setSelectButtonLabel() {
    var selectedArray = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var selectedLength = selectedArray.length;
    var label = '';

    if (selectedLength > checkedValuesOffset) {
      var str = "".concat(selectedLength, " selected");
      label = str;
    } else {
      var labelArray = [];
      selectedArray.forEach(function (selectedLabel) {
        labelArray.push(selectedLabel);
      });
      label = labelArray.join(', ');
    }

    setSelectedLabels(selectedArray);
    setButtonLabel(label);
  };

  useEffect$2(function () {
    if (prevSearchTerm === searchTerm) {
      setSelected(checkboxSelected);
    }
  }, [listOptions.length]);
  useEffect$2(function () {
    var _props$selected = props.selected,
        label = _props$selected.label,
        value = _props$selected.value;

    if (label && value) {
      var selectedLabelsCopy = selectedLabels.slice();
      var selectedValue = selected.slice();

      if (value.length === optionsLength || selected.length === optionsLength) {
        selectedLabelsCopy = label;
        selectedValue = value;
      } else if (JSON.stringify(label) !== JSON.stringify(selectedLabelsCopy)) {
        selectedLabelsCopy = selectedLabelsCopy.concat(label);
        selectedValue = selectedValue.concat(value);
      }

      if (showApplyButton && (value.length !== optionsLength || selectAll) && value.length > 0 && !searchTerm) {
        var prevValuesCopy = value;
        var prevLabelsCopy = label;
        setPreviousSelected(prevValuesCopy);
        setPreviousSelectedLabels(prevLabelsCopy);
      }

      setCheckboxSelected(selectedValue);
      setSelected(selectedValue);
      setSelectButtonLabel(selectedLabelsCopy);
    }
  }, [props.selected]);
  useEffect$2(function () {
    if (props.bottomOptionsSliced && dropdownRef.current) {
      var updatedScrollTop = dropdownRef.current.scrollTop - limit * 32;
      dropdownRef.current.scrollTop = updatedScrollTop;
      lastScrollTop = updatedScrollTop;
      if (checkboxes) setSelected(checkboxSelected);
    }
  }, [props.bottomOptionsSliced]);
  useEffect$2(function () {
    if (props.topOptionsSliced && dropdownRef.current) {
      var updatedScrollTop = dropdownRef.current.scrollTop + limit * 32;
      dropdownRef.current.scrollTop = updatedScrollTop;
      lastScrollTop = updatedScrollTop;
      if (checkboxes) setSelected(checkboxSelected);
    }
  }, [props.topOptionsSliced]);
  useEffect$2(function () {
    if (searchTerm || prevSearchTerm) {
      setSelected(checkboxSelected);
    }
  }, [searchTerm]);
  var trigger = /*#__PURE__*/createElement(DropdownButton, {
    placeholder: placeholder,
    size: size,
    icon: icon,
    disabled: disabled,
    inlineLabel: inlineLabel,
    width: width
  }, buttonLabel);

  var dropdownDivStyle = _objectSpread2({
    minWidth: width,
    maxWidth: width
  }, style);

  var popoverStyle = {
    width: '100%',
    minWidth: showApplyButton && checkboxes ? '176px' : width
  };
  var dropdownStyle = {
    maxHeight: maxHeight,
    overflowY: 'auto',
    overflowX: 'hidden'
  };

  var getDropdownClass = function getDropdownClass(index) {
    var Dropdown = classNames(_defineProperty({}, 'Dropdown-border', subheading.hasOwnProperty(index) && index !== 0));
    return Dropdown;
  };

  var getOptionWrapperClass = function getOptionWrapperClass(optionIcon, optionValue, index) {
    var _classNames2;

    var OptionWrapper = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'Option-wrapper', true), _defineProperty(_classNames2, 'Option-wrapper--top', index === 0), _defineProperty(_classNames2, 'Option-wrapper--bottom', index + 1 === listOptions.length), _defineProperty(_classNames2, 'Option-wrapper--icon', optionIcon), _defineProperty(_classNames2, 'Option-wrapper--selected', selected[0] === optionValue), _classNames2));
    return OptionWrapper;
  };

  var onToggleDropdown = function onToggleDropdown() {
    if (!disabled) setDropdownOpen(!dropdownOpen);

    if (optionsApplied || !showApplyButton) {
      setSelected(checkboxSelected);
    } else {
      setCheckboxSelected(previousSelected);
      setSelected(previousSelected);
      setSelectButtonLabel(previousSelectedLabels);
    }

    setOptionsApplied(false);
    if (search && setSearchTerm) setSearchTerm('');
  };

  var onCancelOptions = function onCancelOptions() {
    setButtonLabel(placeholder);
    setDropdownOpen(false);
  };

  var onApplyOptions = function onApplyOptions() {
    setPreviousSelected(checkboxSelected);
    setPreviousSelectedLabels(selectedLabels);
    setOptionsApplied(true);
    setDropdownOpen(false);
    if (onChange) onChange(checkboxSelected);
  };

  var checkboxChangeHandler = function checkboxChangeHandler(selectedArray, selectedLabelsArray, parentChecked) {
    if (selectedArray.length === 0 || selectedArray.length === optionsLength || !parentChecked) {
      setCheckboxSelected(selectedArray);
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
    setCheckboxSelected([value]);
    setSelected([value]);
    setDropdownOpen(!closeOnSelect);
    if (onChange) onChange(value);
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

    if (scrollTop < lastScrollTop) {
      if (scrollTop === 0) onScrollDropdown('up', scrollTop);
    } else {
      var scrollContainerBottomPosition = Math.round(element.scrollTop + element.clientHeight);
      var scrollPosition = Math.round(element.scrollHeight - bottomScrollOffset);
      if (scrollPosition === scrollContainerBottomPosition) onScrollDropdown('down', scrollTop);
    }
  };

  var renderApplyButton = function renderApplyButton() {
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
      onClick: onApplyOptions
    }, " Apply "));
  };

  var renderSearch = function renderSearch() {
    return /*#__PURE__*/createElement("div", null, /*#__PURE__*/createElement(Input, {
      name: "search",
      icon: 'search',
      placeholder: 'Search..',
      disabled: false,
      onChange: searchHandler
    }));
  };

  var renderLoading = function renderLoading() {
    var arr = Array(limit).fill('Loading');
    return /*#__PURE__*/createElement("div", {
      className: "Scroller-wrapper",
      style: dropdownStyle
    }, arr.map(function (option, ind) {
      return /*#__PURE__*/createElement("div", {
        className: "Option-loadingWrapper",
        key: "".concat(option, "-").concat(ind)
      }, /*#__PURE__*/createElement(PlaceholderParagraph, {
        length: 'large'
      }));
    }));
  };

  var renderCheckboxes = function renderCheckboxes() {
    var list = [];
    var updatedChecked = [];
    var parentChecked = checkboxSelected.length === optionsLength;
    var showParentCheckbox = searchTerm === '';
    listOptions.forEach(function (option) {
      var label = option.label,
          value = option.value;
      var checkedValue = false;

      if (selected && selected.length > 0) {
        var updatedVal = JSON.stringify(value);
        checkedValue = selected.findIndex(function (item) {
          return JSON.stringify(item) === updatedVal;
        }) !== -1 ? true : false;
        updatedChecked.push(checkedValue);
      }

      list.push({
        label: label,
        value: value,
        checked: checkedValue
      });
    });
    return /*#__PURE__*/createElement(ListCheckbox, {
      label: 'Select All',
      onChange: checkboxChangeHandler,
      checked: parentChecked,
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
      helpers: ['mr-4'],
      name: optionIcon
    })), /*#__PURE__*/createElement("div", {
      className: 'Option-label'
    }, /*#__PURE__*/createElement("div", {
      className: 'Option-text'
    }, label), subInfo && /*#__PURE__*/createElement("div", {
      className: 'Option-subinfo'
    }, subInfo)));
  };

  var renderDropdownSection = function renderDropdownSection() {
    if (loadingOptions) {
      return /*#__PURE__*/createElement("div", {
        className: 'Dropdown-loaderWrapper'
      }, renderLoading());
    }

    if (listOptions.length === 0) {
      return /*#__PURE__*/createElement("div", {
        className: 'Dropdown-wrapper'
      }, /*#__PURE__*/createElement("div", {
        className: 'Option-wrapper'
      }, /*#__PURE__*/createElement("div", {
        className: 'Option-subinfo'
      }, searchResultMessage)));
    }

    return /*#__PURE__*/createElement("div", {
      className: 'Dropdown-wrapper'
    }, checkboxes && renderCheckboxes(), !checkboxes && /*#__PURE__*/createElement("div", {
      className: "Scroller-wrapper",
      style: dropdownStyle,
      ref: dropdownRef
    }, listOptions.map(function (option, index) {
      return /*#__PURE__*/createElement("div", {
        className: getDropdownClass(index + offset),
        key: index
      }, subheading.hasOwnProperty(index + offset) && subheading[index + offset] && /*#__PURE__*/createElement("div", {
        className: 'Dropdown-subinfo'
      }, subheading[index + offset]), renderOptions(option, index));
    })));
  };

  return /*#__PURE__*/createElement("div", {
    className: 'Dropdown',
    onScroll: handleMenuScroll,
    style: dropdownDivStyle
  }, /*#__PURE__*/createElement(Popover, {
    onToggle: onToggleDropdown,
    trigger: trigger,
    open: dropdownOpen,
    style: popoverStyle,
    position: DropdownAlignMapping[dropdownAlign],
    appendToBody: false
  }, search && renderSearch(), renderDropdownSection(), showApplyButton && checkboxes && renderApplyButton()));
};

DropdownList.displayName = 'Dropdown';

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
      slicedOptions: searchedOptions.slice(offset, offset + limit),
      options: searchedOptions
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
var getIndexesFromSelectedObj = function getIndexesFromSelectedObj() {
  var selectedArray = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return Array.from(Array(selectedArray.length).keys());
};
var getLabelsFromInd = function getLabelsFromInd(selectedArray, options) {
  var result = [];
  selectedArray.forEach(function (ind) {
    result.push(options[ind].label);
  });
  return result;
};

var Dropdown = function Dropdown(props) {
  var _props$offset = props.offset,
      offset = _props$offset === void 0 ? 0 : _props$offset,
      _props$limit = props.limit,
      limit = _props$limit === void 0 ? 10 : _props$limit,
      _props$stateLimit = props.stateLimit,
      stateLimit = _props$stateLimit === void 0 ? 30 : _props$stateLimit,
      _props$selectAll = props.selectAll,
      selectAll = _props$selectAll === void 0 ? false : _props$selectAll,
      url = props.url,
      onChange = props.onChange,
      rest = _objectWithoutProperties(props, ["offset", "limit", "stateLimit", "selectAll", "url", "onChange"]);

  var _React$useState = useState$2(offset),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      topOffset = _React$useState2[0],
      setTopOffset = _React$useState2[1];

  var _React$useState3 = useState$2(offset),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      bottomOffset = _React$useState4[0],
      setBottomOffset = _React$useState4[1];

  var _React$useState5 = useState$2([]),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      options = _React$useState6[0],
      setOptions = _React$useState6[1];

  var _React$useState7 = useState$2(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      topOptionsSliced = _React$useState8[0],
      setTopOptionsSliced = _React$useState8[1];

  var _React$useState9 = useState$2(false),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      bottomOptionsSliced = _React$useState10[0],
      setBottomOptionsSliced = _React$useState10[1];

  var _React$useState11 = useState$2(selectAll),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      selectedAll = _React$useState12[0],
      setSelectedAll = _React$useState12[1];

  var _React$useState13 = useState$2(''),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      searchTerm = _React$useState14[0],
      setSearchTerm = _React$useState14[1];

  var length = props.options ? props.options.length : 0;

  var _React$useState15 = useState$2({
    label: [],
    value: []
  }),
      _React$useState16 = _slicedToArray(_React$useState15, 2),
      selected = _React$useState16[0],
      setSelected = _React$useState16[1];

  var getSelectedFromOptions = function getSelectedFromOptions() {
    var selectedValues = [];
    var selectedLabels = [];
    var optionsArray = props.options.slice();

    var selectedFilter = function selectedFilter(option) {
      if (option.selected || selectAll && props.checkboxes) {
        selectedValues.push(option.value);
        selectedLabels.push(option.label);
      }
    };

    optionsArray.filter(selectedFilter);
    var result = {
      label: selectedLabels,
      value: selectedValues
    };
    return result;
  };

  var getOptionsfromAPI = function getOptionsfromAPI(updatedOffset, direction) {
    var optionOffset = updatedOffset ? updatedOffset : offset;
    axios.get("".concat(url, "?offset=").concat(optionOffset, "&limit=").concat(limit, "&search=").concat(searchTerm)).then(function (res) {
      var _res$data = res.data,
          newOffset = _res$data.offset,
          results = _res$data.results;

      if (updatedOffset !== undefined && direction !== undefined) {
        updateOptionsOnScroll(res.data, updatedOffset, direction);
      } else {
        setOptions(results);
        setBottomOffset(newOffset);
      }
    });
  };

  var getDropdownOptions = function getDropdownOptions(updatedOffset, direction) {
    var optionOffset = updatedOffset ? updatedOffset : offset;
    getOptions(optionOffset, limit, searchTerm, props.options).then(function (res) {
      if (updatedOffset !== undefined && direction !== undefined) {
        updateOptionsOnScroll(res, updatedOffset, direction);
      } else {
        setOptions(res.slicedOptions);
        setBottomOffset(res.offset);
      }
    });
  };

  useEffect$2(function () {
    if (!url) {
      var selectedOptions = getSelectedFromOptions();
      setSelected(selectedOptions);
      setSelectedAll(selectAll);
      getDropdownOptions(undefined, undefined);
    }
  }, [props.options, selectAll]);
  useEffect$2(function () {
    getDropdownOptions(undefined, undefined);
  }, [searchTerm]);
  useEffect$2(function () {
    if (!props.options) {
      getOptionsfromAPI(undefined, undefined);
    }
  }, [url, searchTerm]);

  var onSearchChange = function onSearchChange(search) {
    setSearchTerm(search);
  };

  var updateOptionsOnScroll = function updateOptionsOnScroll(result, updatedOffset, direction) {
    if (bottomOptionsSliced) setBottomOptionsSliced(false);
    if (topOptionsSliced) setTopOptionsSliced(false);
    var slicedOptions = result.slicedOptions;
    var updatedOptions = options.slice();

    if (direction === 'down') {
      updatedOptions = updatedOptions.concat(slicedOptions);
      var len = updatedOptions.length;

      if (len > stateLimit) {
        updatedOptions = updatedOptions.slice(len - stateLimit, len);
        setTopOffset(updatedOffset - stateLimit + limit);
        setBottomOptionsSliced(true);
      }

      setBottomOffset(updatedOffset);
    } else {
      updatedOptions = slicedOptions.concat(updatedOptions);
      var _len = updatedOptions.length;

      if (_len > stateLimit) {
        updatedOptions = updatedOptions.slice(0, stateLimit);
        setBottomOffset(updatedOffset + stateLimit - limit);
        setTopOptionsSliced(true);
      }

      setTopOffset(updatedOffset);
    }

    setOptions(updatedOptions);
  };

  var OnScrollOptions = function OnScrollOptions(direction) {
    var updatedOffset = direction === 'down' ? bottomOffset + limit : topOffset - limit;

    if (updatedOffset >= 0) {
      if (url && !props.options) {
        getOptionsfromAPI(updatedOffset, direction);
      } else {
        getDropdownOptions(updatedOffset, direction);
      }
    }
  };

  var onChangeOptions = function onChangeOptions(selectedArray) {
    if (onChange) onChange(selectedArray);
  };

  var onSelectAll = function onSelectAll(selectedAllOptions) {
    if (props.options) {
      var optionsCopy = props.options.slice();
      var selectedArray = selectedAllOptions ? getValuesFromSelectedObj(optionsCopy) : [];
      var selectedArrayInd = selectedAllOptions ? getIndexesFromSelectedObj(optionsCopy) : [];
      var selectedArrayLabel = selectedAllOptions ? getLabelsFromInd(selectedArrayInd, optionsCopy) : [];
      setSelected({
        label: selectedArrayLabel,
        value: selectedArray
      });
      setSelectedAll(false);
      if (onChange) onChange(selectedArray);
    }
  };

  return /*#__PURE__*/createElement("div", null, /*#__PURE__*/createElement(DropdownList, _extends({
    listOptions: options,
    selectAll: selectedAll,
    selected: selected,
    searchTerm: searchTerm,
    onScroll: OnScrollOptions,
    topOptionsSliced: topOptionsSliced,
    bottomOptionsSliced: bottomOptionsSliced,
    limit: limit,
    offset: topOffset,
    optionsLength: length,
    onSearchChange: onSearchChange,
    onChange: onChangeOptions,
    onSelectAll: onSelectAll,
    setSearchTerm: onSearchChange
  }, rest)));
};

Dropdown.displayName = 'Dropdown';

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

/**
 * Handle click outside component
 * @class OutsideClick
 * @extends {React.Component<IProps, never>}
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

    _this.container = createRef();
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
      return cloneElement(Children.only(children), {
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

var Radio = forwardRef(function (props, forwardedRef) {
  var _classNames, _classNames2, _classNames3;

  var _props$size = props.size,
      size = _props$size === void 0 ? 'regular' : _props$size,
      label = props.label,
      disabled = props.disabled,
      onChange = props.onChange,
      name = props.name,
      value = props.value,
      defaultChecked = props.defaultChecked;
  var ref = useRef(null);
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
      groupS = props.groupS,
      groupM = props.groupM,
      groupL = props.groupL,
      groupXL = props.groupXL;
  var classes = classNames((_classNames = {
    Row: true
  }, _defineProperty(_classNames, "RowCols--".concat(group), group), _defineProperty(_classNames, "RowCols--s-".concat(groupS), groupS), _defineProperty(_classNames, "RowCols--m-".concat(groupM), groupM), _defineProperty(_classNames, "RowCols--l-".concat(groupL), groupL), _defineProperty(_classNames, "RowCols--xl-".concat(groupXL), groupXL), _classNames));
  return /*#__PURE__*/createElement("div", {
    className: classes
  }, props.children);
};

var Switch = forwardRef(function (props, ref) {
  var _classNames, _classNames2;

  var _props$size = props.size,
      size = _props$size === void 0 ? 'regular' : _props$size,
      _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'primary' : _props$appearance,
      disabled = props.disabled,
      onChange = props.onChange,
      name = props.name,
      value = props.value;

  var _React$useState = useState$2(props.checked),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      checked = _React$useState2[0],
      setChecked = _React$useState2[1];

  useEffect$2(function () {
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

var Cell = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Cell, _React$PureComponent);

  var _super = _createSuper(Cell);

  function Cell() {
    _classCallCheck(this, Cell);

    return _super.apply(this, arguments);
  }

  _createClass(Cell, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          template = _this$props.template,
          rowIndex = _this$props.rowIndex,
          width = _this$props.width,
          rest = _objectWithoutProperties(_this$props, ["template", "rowIndex", "width"]);

      var Template = template;
      return /*#__PURE__*/createElement("div", {
        className: "cell",
        style: {
          width: width
        }
      }, /*#__PURE__*/createElement(Template, _extends({
        rowIndex: rowIndex
      }, rest)));
    }
  }]);

  return Cell;
}(PureComponent);

// TODO: Stop header rendering on every render without causing any side effect
var Header = /*#__PURE__*/function (_React$Component) {
  _inherits(Header, _React$Component);

  var _super = _createSuper(Header);

  function Header() {
    var _this;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "centerHeaderRef", createRef());

    _defineProperty(_assertThisInitialized(_this), "getHeader", function (schema) {
      var headerHeight = _this.props.headerHeight;
      return /*#__PURE__*/createElement("div", {
        "data-row": "header",
        style: {
          height: headerHeight
        },
        className: "row header"
      }, schema.map(function (_ref, j) {
        var width = _ref.width,
            HeaderComp = _ref.header;
        return /*#__PURE__*/createElement("div", {
          className: "cell",
          key: j,
          style: {
            width: width
          }
        }, /*#__PURE__*/createElement(HeaderComp, null));
      }));
    });

    return _this;
  }

  _createClass(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getRef(this.centerHeaderRef);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          leftSchema = _this$props.leftSchema,
          centerSchema = _this$props.centerSchema,
          leftWidth = _this$props.leftWidth,
          centerWidth = _this$props.centerWidth,
          syncHorizontalScroll = _this$props.syncHorizontalScroll,
          headerHeight = _this$props.headerHeight;
      return /*#__PURE__*/createElement("div", {
        className: "grid-header hide-scroll-bar",
        style: {
          height: headerHeight
        }
      }, leftWidth > 0 && /*#__PURE__*/createElement("div", {
        className: "grid-header-left hide-scroll-bar",
        style: {
          width: leftWidth
        }
      }, this.getHeader(leftSchema)), centerWidth > 0 && /*#__PURE__*/createElement("div", {
        ref: this.centerHeaderRef,
        onScroll: syncHorizontalScroll,
        className: "grid-header-center hide-scroll-bar",
        style: {
          width: "calc(100% - ".concat(leftWidth, "px)")
        }
      }, /*#__PURE__*/createElement("div", {
        style: {
          width: centerWidth
        }
      }, this.getHeader(centerSchema))));
    }
  }]);

  return Header;
}(Component);

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

// export const Placeholder = ({
//   style,
//   shimmerWidth,
// }: {
//   /**
//    *  Column width is mandatory for proper rendering
//    */
//   style: React.CSSProperties;
//   shimmerWidth: React.CSSProperties['width'];
// }) => (
//   <div className="loader-column" style={style}>
//     <div className="shimmer" style={{ width: shimmerWidth }}></div>
//   </div>
// );
var Loader = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Loader, _React$PureComponent);

  var _super = _createSuper(Loader);

  function Loader() {
    var _this;

    _classCallCheck(this, Loader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "columns", ['4%', '4%', '14%', '13%', '11%', '7%', '9%', '14%', '11%', '13%']);

    _defineProperty(_assertThisInitialized(_this), "getLoaderRows", function (rows, height) {
      var list = Array(rows).fill(0);
      return list.map(function (_, i) {
        return /*#__PURE__*/createElement("div", {
          className: "loader-row",
          key: i,
          style: {
            height: height
          }
        }, _this.columns.map(function (width, j) {
          var len = ['small', 'medium'];
          return /*#__PURE__*/createElement(Placeholder, {
            key: j,
            style: {
              width: width
            }
          }, /*#__PURE__*/createElement(PlaceholderParagraph, {
            length: len[i % len.length]
          }));
        }));
      });
    });

    return _this;
  }

  _createClass(Loader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          rows = _this$props.rows,
          rowHeight = _this$props.rowHeight;
      return /*#__PURE__*/createElement("div", {
        className: "loader-wrapper"
      }, this.getLoaderRows(rows, rowHeight));
    }
  }]);

  return Loader;
}(PureComponent);

_defineProperty(Loader, "defaultProps", {
  rowHeight: 40,
  rows: 20
});

var PartialLoader = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(PartialLoader, _React$PureComponent);

  var _super = _createSuper(PartialLoader);

  function PartialLoader() {
    _classCallCheck(this, PartialLoader);

    return _super.apply(this, arguments);
  }

  _createClass(PartialLoader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          rowStyle = _this$props.rowStyle,
          schema = _this$props.schema,
          rest = _objectWithoutProperties(_this$props, ["rowStyle", "schema"]);

      return /*#__PURE__*/createElement("div", rest, [0, 1].map(function (i) {
        return /*#__PURE__*/createElement("div", {
          key: i,
          className: "loader-row",
          style: rowStyle
        }, schema.map(function (_ref, j) {
          var width = _ref.width;
          var len = ['small', 'medium'];
          return /*#__PURE__*/createElement(Placeholder, {
            key: j,
            style: {
              width: width
            }
          }, /*#__PURE__*/createElement(PlaceholderParagraph, {
            length: len[i % len.length]
          }));
        }));
      }));
    }
  }]);

  return PartialLoader;
}(PureComponent);

var Grid = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Grid, _React$PureComponent);

  var _super = _createSuper(Grid);

  // Refs
  // rows height map
  // rows height will be saved here after first calculation until changed
  // Load more metadata
  // Cache row with there index
  function Grid(_props) {
    var _this;

    _classCallCheck(this, Grid);

    _this = _super.call(this, _props);

    _defineProperty(_assertThisInitialized(_this), "centerGridRef", createRef());

    _defineProperty(_assertThisInitialized(_this), "centerScrollRef", createRef());

    _defineProperty(_assertThisInitialized(_this), "centerHeaderRef", createRef());

    _defineProperty(_assertThisInitialized(_this), "gridRef", createRef());

    _defineProperty(_assertThisInitialized(_this), "calculatedRowHeight", []);

    _defineProperty(_assertThisInitialized(_this), "calculatedRowTopPosition", []);

    _defineProperty(_assertThisInitialized(_this), "calculateRowHeight", false);

    _defineProperty(_assertThisInitialized(_this), "loadMoreDataPosition", {
      position: -1,
      end: -1
    });

    _defineProperty(_assertThisInitialized(_this), "cache", {
      row: {},
      // this cache is needed to check for optimization during scroll
      // when user is scroll we can check the cache and row in row cache
      // iff row cache & height is available row can be picked from row cache
      // in case of dynamic scrolling else new row will be created
      // height cache only filled when row is created with actual height & top position
      // will never be cleared once created until done through gridActions
      height: []
    });

    _defineProperty(_assertThisInitialized(_this), "isColumnActive", function () {
      return _this.state.gridMeta.leftSchema.length > 0 || _this.state.gridMeta.centerSchema.length > 0;
    });

    _defineProperty(_assertThisInitialized(_this), "refreshRows", function (indexs, all) {
      if (all) {
        _this.cache.height = [];
        _this.calculatedRowHeight = [];
        _this.calculatedRowTopPosition = [];
        return;
      }

      var minIndex = Math.min.apply(Math, _toConsumableArray(indexs));
      _this.cache.height = _this.cache.height.slice(0, minIndex);
      _this.calculatedRowHeight = _this.calculatedRowHeight.slice(0, minIndex);
      _this.calculatedRowTopPosition = _this.calculatedRowTopPosition.slice(0, minIndex);
    });

    _defineProperty(_assertThisInitialized(_this), "getClientHeight", function (element) {
      if (!element) {
        return 0;
      }

      return element.clientHeight;
    });

    _defineProperty(_assertThisInitialized(_this), "calulateRowHeightAndRender", function () {
      var leftRows = document.querySelectorAll('.grid .grid-body .grid-left-body .row');
      var centerRows = document.querySelectorAll('.grid .grid-body .grid-center-body .row');

      if (leftRows.length === 0 && _this.state.gridMeta.leftSchema.length === 0 && centerRows.length === 0 && _this.state.gridMeta.centerSchema.length === 0) {
        return;
      }

      var rowNodes = leftRows.length > centerRows.length ? leftRows : centerRows;
      rowNodes.forEach(function (row, nodeIndex) {
        var ind = row.getAttribute('data-row');
        var index = parseInt(ind || '', 10);
        var height = Math.max(_this.getClientHeight(leftRows[nodeIndex]), _this.getClientHeight(centerRows[nodeIndex]));

        if (!_this.calculatedRowHeight[index]) {
          _this.calculatedRowHeight[index] = height;
        }

        if (index !== 0) {
          if (_this.calculatedRowTopPosition[index - 1] !== undefined) {
            _this.calculatedRowTopPosition[index] = _this.calculatedRowTopPosition[index - 1] + _this.calculatedRowHeight[index - 1];
          }
        } else {
          _this.calculatedRowTopPosition[index] = 0;
        }
      });

      _this.forceUpdate();
    });

    _defineProperty(_assertThisInitialized(_this), "getVisibleRowsCount", function () {
      return _this.gridRef.current ? Math.round(_this.gridRef.current.offsetHeight / _this.props.rowHeight) : 0;
    });

    _defineProperty(_assertThisInitialized(_this), "getScrollPosition", function () {
      if (!_this.gridRef.current) {
        return 0;
      }

      var scrollTop = _this.gridRef.current.scrollTop;
      var _this$props = _this.props,
          dynamicRowHeight = _this$props.dynamicRowHeight,
          rowHeight = _this$props.rowHeight;

      if (!dynamicRowHeight) {
        return Math.round(scrollTop / _this.props.rowHeight);
      }

      var index = _this.calculatedRowTopPosition.findIndex(function (position) {
        return position > scrollTop;
      });

      if (index !== -1) {
        return Math.max(index, 0);
      }

      if (_this.calculatedRowTopPosition.length === 0) {
        return 0;
      }

      return Math.round((scrollTop - _this.calculatedRowTopPosition[_this.calculatedRowTopPosition.length - 1]) / rowHeight) + _this.calculatedRowTopPosition.length;
    });

    _defineProperty(_assertThisInitialized(_this), "sync", throttle(75, false, function (scrollLeft, scrollTarget) {
      if (_this.centerGridRef.current && scrollTarget !== _this.centerGridRef.current) {
        _this.centerGridRef.current.scrollLeft = scrollLeft;
      }

      if (_this.centerScrollRef.current && scrollTarget !== _this.centerScrollRef.current) {
        _this.centerScrollRef.current.scrollLeft = scrollLeft;
      }

      if (_this.centerHeaderRef.current && scrollTarget !== _this.centerHeaderRef.current) {
        _this.centerHeaderRef.current.scrollLeft = scrollLeft;
      }
    }));

    _defineProperty(_assertThisInitialized(_this), "syncHorizontalScroll", function (event) {
      var scrollLeft = event.target.scrollLeft;
      var scrollTarget = event.target;

      _this.sync(scrollLeft, scrollTarget);
    });

    _defineProperty(_assertThisInitialized(_this), "updateSchema", function (schema) {
      var leftSchema = schema.filter(function (_ref) {
        var pinned = _ref.pinned;
        return pinned === 'LEFT';
      });
      var centerSchema = schema.filter(function (_ref2) {
        var pinned = _ref2.pinned;
        return !pinned;
      });
      var leftWidth = leftSchema.reduce(function (total, current) {
        return total + current.width;
      }, 0);
      var centerWidth = centerSchema.reduce(function (total, current) {
        return total + current.width;
      }, 0);
      return {
        leftSchema: leftSchema,
        centerSchema: centerSchema,
        leftWidth: leftWidth,
        centerWidth: centerWidth
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleGridScroll", function (event) {
      if (event.target !== _this.gridRef.current) {
        return;
      }

      var scrollTop = event.target.scrollTop;

      if (scrollTop < 0) {
        return;
      }

      var data = _this.props.data;

      var position = _this.getScrollPosition();

      if (Math.abs(position - _this.state.position) < 1) {
        return;
      }

      var visibleCount = _this.getVisibleRowsCount();

      _this.setState({
        position: position,
        isScrolling: true
      }); // set scrolling to false once scroll is paused for a definite time


      _this.debouncedSetScroll(false);

      _this.loadMoreData(position, visibleCount, data.length);
    });

    _defineProperty(_assertThisInitialized(_this), "debouncedSetScroll", debounce(300, false, function (isScrolling) {
      _this.setState({
        isScrolling: isScrolling
      });
    }));

    _defineProperty(_assertThisInitialized(_this), "isScrollEnd", function () {
      var element = _this.gridRef.current;

      if (!element) {
        return false;
      }

      if (element.scrollHeight - element.scrollTop === element.clientHeight) {
        return true;
      }

      return false;
    });

    _defineProperty(_assertThisInitialized(_this), "loadMoreData", function (currentPosition, visibleCount, dataLength) {
      if (currentPosition > _this.loadMoreDataPosition.position && dataLength > _this.loadMoreDataPosition.end && currentPosition > dataLength - visibleCount - 5) {
        if (_this.props.loadMore) {
          _this.props.loadMore();
        }

        _this.loadMoreDataPosition = {
          position: currentPosition,
          end: dataLength
        };
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getHiddenRowStyling", function (index) {
      var dynamicRowHeight = _this.props.dynamicRowHeight;

      if (!dynamicRowHeight || _this.calculatedRowTopPosition[index] || index === 0) {
        return {};
      }

      return {
        position: 'fixed',
        top: -10000,
        visibility: 'hidden'
      };
    });

    _defineProperty(_assertThisInitialized(_this), "createRow", function (_ref3) {
      var index = _ref3.index,
          rowHeight = _ref3.rowHeight,
          row = _ref3.row,
          schema = _ref3.schema,
          dynamicRowHeight = _ref3.dynamicRowHeight;
      return /*#__PURE__*/createElement("div", {
        "data-row": index,
        style: _objectSpread2({
          width: '100%',
          height: dynamicRowHeight ? _this.calculatedRowHeight[index] : rowHeight,
          transform: "translateY(".concat(_this.getTopPosition(index), "px)")
        }, _this.getHiddenRowStyling(index)),
        className: "row ".concat(row.className || ''),
        key: index
      }, schema.map(function (_ref4, j) {
        var width = _ref4.width,
            template = _ref4.template,
            get = _ref4.get;
        return /*#__PURE__*/createElement(Cell, _extends({
          rowIndex: index,
          key: j,
          width: width,
          template: template
        }, get(row)));
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "getVirtualList", function (state, props) {
      var leftRows = [];
      var centerRows = [];
      var heightCache = _this.cache.height;
      var _state$gridMeta = state.gridMeta,
          leftSchema = _state$gridMeta.leftSchema,
          centerSchema = _state$gridMeta.centerSchema;
      var buffer = props.buffer,
          data = props.data,
          rowHeight = props.rowHeight,
          _props$dynamicRowHeig = props.dynamicRowHeight,
          dynamicRowHeight = _props$dynamicRowHeig === void 0 ? false : _props$dynamicRowHeig,
          virtualization = props.virtualization;

      var position = _this.getScrollPosition();

      var visibleCount = _this.getVisibleRowsCount();

      var start = Math.max(position - visibleCount - buffer, 0);
      var end = Math.min(position + visibleCount + buffer, data.length - 1);
      var rowCache = _this.cache.row;

      if (!virtualization) {
        start = 0;
        end = data.length - 1;
      } // We can approximate where the user has landed but we can
      // show if the correct row there unitl we have redered all the
      // previous rows once
      // expect the case when table is first rendered


      if (dynamicRowHeight && !_this.calculatedRowTopPosition[position] && position !== 0) {
        start = Math.min(_this.calculatedRowTopPosition.length - 1, start);
      }

      for (var index = start; index <= end; index++) {
        if (index === data.length) {
          break;
        } // To stop unnecessary renders


        _this.calculateRowHeight = !_this.calculateRowHeight ? _this.cache.height[index] === undefined : _this.calculateRowHeight;

        if (dynamicRowHeight ? heightCache[index] && rowCache[index] : rowCache[index]) {
          leftRows.push(rowCache[index].left);
          centerRows.push(rowCache[index].center);
        } else {
          var row = data[index];
          rowCache[index] = {
            left: null,
            center: null
          }; // Left grid

          rowCache[index].left = _this.createRow({
            index: index,
            rowHeight: rowHeight,
            row: row,
            dynamicRowHeight: dynamicRowHeight,
            schema: leftSchema
          });
          leftRows.push(rowCache[index].left); // Center grid

          rowCache[index].center = _this.createRow({
            index: index,
            rowHeight: rowHeight,
            row: row,
            dynamicRowHeight: dynamicRowHeight,
            schema: centerSchema
          });
          centerRows.push(rowCache[index].center);
          heightCache[index] = _this.calculatedRowHeight[index];
        }
      }

      return {
        leftGrid: leftRows,
        centerGrid: centerRows
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getTopPosition", function (index) {
      var dynamicRowHeight = _this.props.dynamicRowHeight;

      if (!dynamicRowHeight) {
        return _this.props.rowHeight * index;
      }

      return _this.calculatedRowTopPosition[index];
    });

    _defineProperty(_assertThisInitialized(_this), "getHeaderRef", function (ref) {
      _this.centerHeaderRef = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "getGridHeight", function () {
      var _this$props2 = _this.props,
          dynamicRowHeight = _this$props2.dynamicRowHeight,
          data = _this$props2.data,
          rowHeight = _this$props2.rowHeight,
          loadingMoreData = _this$props2.loadingMoreData;

      if (!dynamicRowHeight) {
        return data.length * rowHeight + (loadingMoreData ? rowHeight * 2 : 0);
      }

      var total = 0;
      data.forEach(function (__, index) {
        total += _this.calculatedRowHeight[index] || rowHeight;
      });
      return total;
    });

    _this.state = {
      position: 0,
      isScrolling: false,
      gridMeta: _this.updateSchema(_this.props.schema)
    };

    if (_props.getGridActions) {
      _props.getGridActions({
        refreshRows: _this.refreshRows
      });
    }

    return _this;
  }

  _createClass(Grid, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.schema !== this.props.schema) {
        this.setState({
          gridMeta: this.updateSchema(this.props.schema)
        });
      }

      if (this.props.dynamicRowHeight && this.calculateRowHeight && this.isColumnActive()) {
        this.calculateRowHeight = false;

        if (this.props.data && prevProps.data !== this.props.data || this.state.position !== prevState.position || this.state.gridMeta !== prevState.gridMeta) {
          this.calulateRowHeightAndRender();
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          data = _this$props3.data,
          __ = _this$props3.schema,
          __1 = _this$props3.loadMore,
          __2 = _this$props3.buffer,
          __3 = _this$props3.getGridActions,
          dynamicRowHeight = _this$props3.dynamicRowHeight,
          rowHeight = _this$props3.rowHeight,
          virtualization = _this$props3.virtualization,
          loading = _this$props3.loading,
          loader = _this$props3.loader,
          overlay = _this$props3.overlay,
          showOverlay = _this$props3.showOverlay,
          loadingMoreData = _this$props3.loadingMoreData,
          headerHeight = _this$props3.headerHeight,
          className = _this$props3.className,
          rest = _objectWithoutProperties(_this$props3, ["data", "schema", "loadMore", "buffer", "getGridActions", "dynamicRowHeight", "rowHeight", "virtualization", "loading", "loader", "overlay", "showOverlay", "loadingMoreData", "headerHeight", "className"]);

      var gridMeta = this.state.gridMeta;
      var visibleCount = this.getVisibleRowsCount();

      var girdRestProps = _objectSpread2({
        className: "craft-smart-grid ".concat(className || '')
      }, rest);

      if (visibleCount === -1) {
        return /*#__PURE__*/createElement("div", {
          ref: this.gridRef,
          style: this.props.style
        }, "Loading No Mounted yet");
      }

      if (loading) {
        if (loader) {
          return loader;
        }

        return /*#__PURE__*/createElement("div", _extends({}, girdRestProps, {
          ref: this.gridRef
        }), /*#__PURE__*/createElement(Loader, {
          rows: visibleCount > 0 ? visibleCount + 1 : undefined,
          rowHeight: rowHeight
        }));
      }

      if (showOverlay) {
        return /*#__PURE__*/createElement("div", _extends({
          ref: this.gridRef
        }, girdRestProps), overlay);
      }

      var _this$getVirtualList = this.getVirtualList(this.state, this.props),
          leftGrid = _this$getVirtualList.leftGrid,
          centerGrid = _this$getVirtualList.centerGrid; // Clear cache to save memory or it can lead to page crash


      if (!this.state.isScrolling) {
        this.cache = _objectSpread2({}, this.cache, {
          row: {}
        });
      }

      var gridHeight = this.getGridHeight();

      if (dynamicRowHeight && loadingMoreData) {
        gridHeight += rowHeight * 2;
      }

      return /*#__PURE__*/createElement("div", girdRestProps, /*#__PURE__*/createElement(Header, {
        getRef: this.getHeaderRef,
        centerSchema: gridMeta.centerSchema,
        leftSchema: gridMeta.leftSchema,
        centerWidth: gridMeta.centerWidth,
        leftWidth: gridMeta.leftWidth,
        headerHeight: headerHeight,
        syncHorizontalScroll: this.syncHorizontalScroll
      }), /*#__PURE__*/createElement("div", {
        className: "grid",
        ref: this.gridRef,
        onScroll: virtualization ? this.handleGridScroll : undefined
      }, /*#__PURE__*/createElement("div", {
        style: {
          height: gridHeight
        },
        className: "grid-body"
      }, gridMeta.leftWidth > 0 && /*#__PURE__*/createElement("div", {
        style: {
          width: gridMeta.leftWidth
        },
        className: "grid-left"
      }, /*#__PURE__*/createElement("div", {
        className: "grid-left-body"
      }, leftGrid, loadingMoreData && /*#__PURE__*/createElement(PartialLoader, {
        style: {
          transform: "translateY(".concat(dynamicRowHeight ? gridHeight - rowHeight * 2 : this.getTopPosition(data.length), "px)")
        },
        schema: gridMeta.leftSchema,
        className: "partial-loader",
        rowStyle: {
          height: rowHeight
        }
      }))), gridMeta.centerWidth > 0 && /*#__PURE__*/createElement("div", {
        style: {
          width: "calc(100% - ".concat(gridMeta.leftWidth, "px)")
        },
        className: "grid-center"
      }, /*#__PURE__*/createElement("div", {
        ref: this.centerGridRef,
        className: "grid-center-body hide-scroll-bar",
        onScroll: this.syncHorizontalScroll
      }, /*#__PURE__*/createElement("div", {
        style: {
          minWidth: gridMeta.centerWidth
        },
        className: "grid-center-body-inner"
      }, centerGrid, loadingMoreData && /*#__PURE__*/createElement(PartialLoader, {
        schema: gridMeta.centerSchema,
        style: {
          transform: "translateY(".concat(dynamicRowHeight ? gridHeight - rowHeight * 2 : this.getTopPosition(data.length), "px)")
        },
        className: "partial-loader",
        rowStyle: {
          height: rowHeight
        }
      })))))), /*#__PURE__*/createElement("div", {
        className: "grid-scroll"
      }, /*#__PURE__*/createElement("div", {
        className: "grid-scroll-left",
        style: {
          width: gridMeta.leftWidth
        }
      }), /*#__PURE__*/createElement("div", {
        style: {
          width: "calc(100% - ".concat(gridMeta.leftWidth, "px)")
        },
        className: "grid-scroll-center overflow-y-hidden",
        ref: this.centerScrollRef,
        onScroll: this.syncHorizontalScroll
      }, /*#__PURE__*/createElement("div", {
        style: {
          width: gridMeta.centerWidth
        }
      }))));
    }
  }]);

  return Grid;
}(PureComponent);

_defineProperty(Grid, "defaultProps", {
  buffer: 5,
  virtualization: true
});

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
  var Icon = {
    info: 'info',
    success: 'check_circle',
    alert: 'info',
    warning: 'info'
  };
  var icon = Icon[appearance];
  var titleClass = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'Toast-title', true), _defineProperty(_classNames2, 'Toast-title--withMessage', message), _classNames2));

  var iconClass = function iconClass(align) {
    var _classNames3;

    return classNames((_classNames3 = {}, _defineProperty(_classNames3, 'material-icons', true), _defineProperty(_classNames3, 'Toast-icon', true), _defineProperty(_classNames3, "Toast-icon--".concat(align), align), _classNames3));
  };

  var onCloseHandler = function onCloseHandler() {
    if (onClose) onClose();
  };

  return /*#__PURE__*/createElement("div", {
    className: wrapperClass
  }, icon && /*#__PURE__*/createElement("i", {
    className: iconClass('left')
  }, icon), /*#__PURE__*/createElement("div", {
    className: "Toast-body"
  }, /*#__PURE__*/createElement("div", {
    className: titleClass
  }, /*#__PURE__*/createElement(Heading, {
    appearance: appearance !== 'warning' ? 'white' : 'default'
  }, title), /*#__PURE__*/createElement("div", {
    onClick: onCloseHandler
  }, /*#__PURE__*/createElement("i", {
    className: iconClass('right')
  }, "close"))), message && /*#__PURE__*/createElement("div", {
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

var useEffect$1 = useEffect$2,
    useState$1 = useState$2;

var Modal = function Modal(props) {
  var _props$dimension = props.dimension,
      dimension = _props$dimension === void 0 ? 'small' : _props$dimension,
      open = props.open,
      children = props.children,
      onClose = props.onClose,
      backdrop = props.backdrop;

  var _useState = useState$1('Modal'),
      _useState2 = _slicedToArray(_useState, 2),
      modalClasses = _useState2[0],
      setClasses = _useState2[1];

  var classes = classNames(_defineProperty({
    Modal: true
  }, "Modal--".concat(dimension), dimension));
  useEffect$1(function () {
    if (open) {
      var newModalClasses = "".concat(classes, " Modal--open Modal-animation--open");
      setClasses(newModalClasses);
    }

    if (!open) {
      var _newModalClasses = "".concat(classes, " Modal--open Modal-animation--close");

      setClasses(_newModalClasses);
      setTimeout(function () {
        setClasses(classes);
      }, 150);
    }
  }, [open]);
  var ModalContainer = /*#__PURE__*/createElement("div", {
    className: "Modal-container"
  }, /*#__PURE__*/createElement("div", {
    className: modalClasses
  }, children));
  var ModalWrapper = backdrop ? /*#__PURE__*/createElement(OutsideClick, {
    onOutsideClick: function onOutsideClick(event) {
      return onClose('OutsideClick', event);
    }
  }, ModalContainer) : ModalContainer;
  var WrapperElement = createPortal(ModalWrapper, document.body);
  return /*#__PURE__*/createElement("div", null, WrapperElement, /*#__PURE__*/createElement(Backdrop, {
    open: open
  }));
};

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
    return /*#__PURE__*/createElement("i", {
      className: "material-icons Modal-close-icon",
      onClick: function onClick(event) {
        return onClose('IconClick', event);
      }
    }, "close");
  };

  var getHeaderIcon = function getHeaderIcon() {
    return /*#__PURE__*/createElement("i", {
      className: "material-icons Modal-header-icon"
    }, icon);
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

var ModalFooter = function ModalFooter(props) {
  var children = props.children;
  var classes = classNames({
    'Modal-footer': true
  });
  return /*#__PURE__*/createElement("div", {
    className: classes
  }, children);
};

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

var Pagination = function Pagination(props) {
  var _classNames;

  var _props$type = props.type,
      type = _props$type === void 0 ? 'basic' : _props$type,
      totalPages = props.totalPages,
      onPageChange = props.onPageChange;

  var _React$useState = useState$2(props.page ? props.page : 1),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      page = _React$useState2[0],
      setPage = _React$useState2[1];

  var wrapperClass = classNames((_classNames = {}, _defineProperty(_classNames, 'Pagination', true), _defineProperty(_classNames, "Pagination--".concat(type), type), _classNames));
  useEffect$2(function () {
    if (page) onPageChange(page);
  }, [page]);

  var inputChangeHandler = function inputChangeHandler(e) {
    e.preventDefault();
    var val = parseInt(e.target.value.trim(), 10);

    if (!val || val > 0 && val <= totalPages) {
      setPage(val);
    }
  };

  var buttonHelper = [];
  if (type === 'basic') buttonHelper.push('mx-3');else buttonHelper.push('mx-4');
  return /*#__PURE__*/createElement("div", {
    className: wrapperClass
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
      return page > 1 && setPage(page - 1);
    },
    disabled: page === 1,
    size: "large",
    icon: "navigate_before"
  })), type === 'jump' && /*#__PURE__*/createElement("div", {
    className: "Pagination-pageIndex"
  }, /*#__PURE__*/createElement(Input, {
    name: "page",
    type: "number",
    size: "large",
    clearButton: false,
    onChange: inputChangeHandler,
    value: "".concat(page)
  }), /*#__PURE__*/createElement(Text, null, " of ".concat(totalPages, " pages"))), /*#__PURE__*/createElement("div", {
    className: ['mr-4'].concat(buttonHelper).join(' ')
  }, /*#__PURE__*/createElement(Button, {
    onClick: function onClick() {
      return page < totalPages && setPage(page + 1);
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
  }));
};

var RangePicker = function RangePicker(props) {
  var startDateProp = props.startDate,
      endDateProp = props.endDate,
      yearNavProp = props.yearNav,
      monthNavProp = props.monthNav,
      _props$withInput = props.withInput,
      withInput = _props$withInput === void 0 ? false : _props$withInput,
      _props$inputFormat = props.inputFormat,
      inputFormat = _props$inputFormat === void 0 ? 'dd/mm/yy' : _props$inputFormat,
      _props$outputFormat = props.outputFormat,
      outputFormat = _props$outputFormat === void 0 ? 'mm/dd/yy' : _props$outputFormat,
      _props$rangeSeparator = props.rangeSeparator,
      rangeSeparator = _props$rangeSeparator === void 0 ? ' - ' : _props$rangeSeparator,
      _props$startInputProp = props.startInputProps,
      startInputProps = _props$startInputProp === void 0 ? {
    name: 'rangePicker-start',
    placeholderChar: '_',
    placeholder: inputFormat
  } : _props$startInputProp,
      _props$endInputProps = props.endInputProps,
      endInputProps = _props$endInputProps === void 0 ? {
    name: 'rangePicker-end',
    placeholderChar: '_',
    placeholder: inputFormat
  } : _props$endInputProps,
      _props$mask = props.mask,
      mask = _props$mask === void 0 ? e.date[inputFormat] : _props$mask,
      _props$validator = props.validator,
      validator = _props$validator === void 0 ? e$1.date : _props$validator,
      position = props.position,
      disabledBefore = props.disabledBefore,
      disabledAfter = props.disabledAfter,
      onRangeChange = props.onRangeChange,
      rangeLimit = props.rangeLimit,
      rest = _objectWithoutProperties(props, ["startDate", "endDate", "yearNav", "monthNav", "withInput", "inputFormat", "outputFormat", "rangeSeparator", "startInputProps", "endInputProps", "mask", "validator", "position", "disabledBefore", "disabledAfter", "onRangeChange", "rangeLimit"]);

  var _React$useState = useState$2(),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      startDate = _React$useState2[0],
      setStartDate = _React$useState2[1];

  var _React$useState3 = useState$2(),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      endDate = _React$useState4[0],
      setEndDate = _React$useState4[1];

  var _React$useState5 = useState$2(yearNavProp),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      yearNav = _React$useState6[0],
      setYearNav = _React$useState6[1];

  var _React$useState7 = useState$2(monthNavProp),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      monthNav = _React$useState8[0],
      setMonthNav = _React$useState8[1];

  var _React$useState9 = useState$2(false),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      open = _React$useState10[0],
      setOpen = _React$useState10[1];

  var _React$useState11 = useState$2(false),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      startError = _React$useState12[0],
      setStartError = _React$useState12[1];

  var _React$useState13 = useState$2(false),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      endError = _React$useState14[0],
      setEndError = _React$useState14[1];

  useEffect$2(function () {
    var d = startDateProp ? convertToDate(startDateProp, inputFormat, validator) : undefined;
    setStartDate(d);
  }, [startDateProp]);
  useEffect$2(function () {
    var d = startDateProp ? convertToDate(startDateProp, inputFormat, validator) : undefined;
    setEndDate(d);
  }, [endDateProp]);
  useEffect$2(function () {
    setYearNav(yearNavProp);
  }, [yearNavProp]);
  useEffect$2(function () {
    setYearNav(monthNavProp);
  }, [monthNavProp]);
  useEffect$2(function () {
    var sError = !startDate;
    var eError = !endDate;

    var _getDateInfo = getDateInfo(startDate),
        sYear = _getDateInfo.year,
        sMonth = _getDateInfo.month;

    var _getDateInfo2 = getDateInfo(endDate),
        eYear = _getDateInfo2.year,
        eMonth = _getDateInfo2.month,
        eDate = _getDateInfo2.date;

    if (compareDate(startDate, 'more', eYear, eMonth, eDate)) {
      sError = true;
      eError = true;
    }

    if (startDate) {
      setYearNav(sYear);
      setMonthNav(sMonth);
    }

    if (endDate) {
      setYearNav(eYear);
      setMonthNav(eMonth);
    }

    setStartError(sError);
    setEndError(eError);

    if (onRangeChange) {
      if (startDate && endDate) {
        var inRangeError = getInRangeError();

        if (!inRangeError && !sError && !eError) {
          var sValue = translateToString(outputFormat, startDate);
          var eValue = translateToString(outputFormat, endDate);
          onRangeChange(startDate, endDate, sValue, eValue);
        }
      }
    }
  }, [startDate, endDate]);

  var getInRangeError = function getInRangeError() {
    if (rangeLimit) {
      var _getDateInfo3 = getDateInfo(startDate),
          sYear = _getDateInfo3.year,
          sMonth = _getDateInfo3.month,
          sDate = _getDateInfo3.date;

      var _getDateInfo4 = getDateInfo(endDate),
          eYear = _getDateInfo4.year,
          eMonth = _getDateInfo4.month,
          eDate = _getDateInfo4.date;

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
    if (sDate) setStartDate(sDate);
    if (eDate) setEndDate(eDate);
  };

  if (withInput) {
    var updateNav = function updateNav(type) {
      if (type === 'start') {
        var _getDateInfo5 = getDateInfo(startDate),
            year = _getDateInfo5.year,
            month = _getDateInfo5.month;

        setYearNav(year);
        setMonthNav(month);
      }

      if (type === 'end') {
        var _getDateInfo6 = getDateInfo(endDate),
            _year = _getDateInfo6.year,
            _month = _getDateInfo6.month;

        setYearNav(_year);
        setMonthNav(_month);
      }
    };

    var onChangeHandler = function onChangeHandler(_e, val, type) {
      setOpen(true);

      if (type === 'start') {
        var placeholderChar = startInputProps.placeholderChar ? startInputProps.placeholderChar : '_';

        if (val && !val.includes(placeholderChar)) {
          var d = translateToDate(inputFormat, val, validator);

          if (d) {
            setStartDate(d);

            if (endDate) {
              var _getDateInfo7 = getDateInfo(endDate),
                  eYear = _getDateInfo7.year,
                  eMonth = _getDateInfo7.month,
                  eDate = _getDateInfo7.date;

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

    var trigger = /*#__PURE__*/createElement("div", {
      className: "RangePicker-input"
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
    })), /*#__PURE__*/createElement("div", {
      className: "RangePicker-rangeSeparator"
    }, /*#__PURE__*/createElement(Text, null, rangeSeparator)), /*#__PURE__*/createElement(InputMask, _extends({}, endInputProps, {
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
    })));

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

var TabsWrapper = function TabsWrapper(props) {
  var _props$children = props.children,
      children = _props$children === void 0 ? [] : _props$children,
      onTabChange = props.onTabChange;

  var _React$useState = useState$2(props.activeTab && props.activeTab < children.length ? props.activeTab : 0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      activeTab = _React$useState2[0],
      setActiveTab = _React$useState2[1];

  useEffect$2(function () {
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

var Tab = function Tab(props) {
  var children = props.children;
  return /*#__PURE__*/createElement(Fragment, null, children);
};

export { Avatar, Backdrop, Badge, Breadcrumb, BreadcrumbsWrapper, Button, Card, Checkbox, Column, DatePicker, Dialog, Dropdown, Heading, Icon, Input, Label, Link, ListCheckbox, Message, Modal, OutsideClick, Pagination, Paragraph, Placeholder, Popover, Radio, RangePicker, Row, Spinner, Subheading, Switch, Tab, Grid as Table, TabsWrapper, Text, Toast, Tooltip };
