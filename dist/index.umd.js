(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('classnames'), require('react-dom'), require('react-popper'), require('recharts')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'classnames', 'react-dom', 'react-popper', 'recharts'], factory) :
  (global = global || self, factory(global.inno = {}, global.React, global.classNames, global.ReactDOM, global.reactPopper, global.recharts));
}(this, (function (exports, React, classNames, ReactDOM, reactPopper, recharts) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  classNames = classNames && Object.prototype.hasOwnProperty.call(classNames, 'default') ? classNames['default'] : classNames;

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
    return /*#__PURE__*/React.createElement("span", {
      className: classes
    }, initials);
  };
  Avatar.displayName = 'Avatar';

  var useEffect = React.useEffect,
      useState = React.useState;

  var Backdrop = function Backdrop(props) {
    var _useState = useState(null),
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
    var BackdropElement = /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement("div", {
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
    return /*#__PURE__*/React.createElement("span", _extends({
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

    return /*#__PURE__*/React.createElement(componentType, _objectSpread2(_objectSpread2({}, props), {}, {
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
    return /*#__PURE__*/React.createElement(GenericText, _extends({
      className: classes,
      componentType: sizeMap[size]
    }, rest), children);
  };
  Heading.displayName = 'Heading';

  var BreadcrumbsWrapper = function BreadcrumbsWrapper(props) {
    var children = props.children,
        heading = props.heading;
    return /*#__PURE__*/React.createElement("div", {
      className: "BreadcrumbsWrapper"
    }, /*#__PURE__*/React.createElement("ul", {
      className: "BreadcrumbsWrapper-list"
    }, children), heading && /*#__PURE__*/React.createElement(Heading, null, heading));
  };
  BreadcrumbsWrapper.displayName = 'BreadcrumbsWrapper';

  var Breadcrumb = function Breadcrumb(props) {
    var children = props.children;
    return /*#__PURE__*/React.createElement("li", {
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
    return /*#__PURE__*/React.createElement("svg", _extends({
      className: wrapperClasses
    }, svgProps), /*#__PURE__*/React.createElement("circle", _extends({
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
    return /*#__PURE__*/React.createElement("i", {
      className: iconClass,
      style: styles,
      onClick: onClick
    }, "".concat(name, "_").concat(type));
  };
  Icon.displayName = 'Icon';

  var sizeMapping = {
    tiny: 12,
    regular: 16,
    large: 20
  };
  var Button = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    return /*#__PURE__*/React.createElement("button", _extends({
      ref: ref,
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
      name: icon,
      appearance: disabled ? 'disabled' : appearance === 'basic' || appearance === 'transparent' ? 'default' : 'white',
      size: sizeMapping[size]
    })), children && "".concat(children.charAt(0).toUpperCase()).concat(children.slice(1)));
  });
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
    return /*#__PURE__*/React.createElement("div", _extends({
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
    return /*#__PURE__*/React.createElement(GenericText, _extends({
      className: classes,
      componentType: "span"
    }, rest), children);
  };
  Text.displayName = 'Text';

  var Checkbox = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
    var _classNames, _classNames2;

    var _props$size = props.size,
        size = _props$size === void 0 ? 'regular' : _props$size,
        _props$tabIndex = props.tabIndex,
        tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex,
        label = props.label,
        disabled = props.disabled,
        onChange = props.onChange,
        name = props.name,
        value = props.value;
    var ref = React.useRef(null);
    React.useImperativeHandle(forwardedRef, function () {
      return ref.current;
    });

    var _React$useState = React.useState(props.checked),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        checked = _React$useState2[0],
        setChecked = _React$useState2[1];

    React.useEffect(function () {
      setIndeterminate(props.indeterminate);
    }, [props.indeterminate]);
    React.useEffect(function () {
      setChecked(props.checked);
    }, [props.checked]);
    var CheckboxClass = classNames((_classNames = {}, _defineProperty(_classNames, 'Checkbox', true), _defineProperty(_classNames, 'Checkbox--disabled', disabled), _defineProperty(_classNames, "Checkbox--".concat(size), size), _classNames));
    var CheckboxWrapper = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'Checkbox-wrapper', true), _defineProperty(_classNames2, "Checkbox-wrapper--".concat(size), size), _defineProperty(_classNames2, 'Checkbox-wrapper--checked', checked), _defineProperty(_classNames2, 'Checkbox-wrapper--indeterminate', props.indeterminate), _classNames2));

    var setIndeterminate = function setIndeterminate(indeterminate) {
      ref.current.indeterminate = indeterminate;
    };

    var onChangeHandler = function onChangeHandler(e) {
      e.stopPropagation();
      var checkedValue = props.indeterminate ? false : !checked;
      setChecked(checkedValue);
      setIndeterminate(false);
      if (onChange) onChange(checkedValue, false);
    };

    var IconName = props.indeterminate ? 'remove' : checked ? 'check' : '';
    var IconSize = size === 'tiny' ? 8 : 16;
    return /*#__PURE__*/React.createElement("div", {
      className: CheckboxClass,
      onClick: onChangeHandler
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: checked,
      disabled: disabled,
      ref: ref,
      name: name,
      value: value,
      tabIndex: tabIndex,
      className: 'Checkbox-input'
    }), /*#__PURE__*/React.createElement("span", {
      className: CheckboxWrapper
    }, IconName && /*#__PURE__*/React.createElement(Icon, {
      name: IconName,
      size: IconSize,
      appearance: 'white'
    })), label && label.trim() && /*#__PURE__*/React.createElement("div", {
      className: 'Checkbox-text'
    }, /*#__PURE__*/React.createElement(Text, {
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
    return /*#__PURE__*/React.createElement("div", {
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
    return /*#__PURE__*/React.createElement(GenericText, _extends({
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

    var _React$useState = React.useState(monthsInView > 1 ? 'date' : viewProp),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        view = _React$useState2[0],
        setView = _React$useState2[1];

    var _React$useState3 = React.useState({
      year: undefined,
      month: undefined,
      date: undefined
    }),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        state = _React$useState4[0],
        setState = _React$useState4[1];

    var _React$useState5 = React.useState(dateProp),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        currDateState = _React$useState6[0],
        setCurrDateState = _React$useState6[1];

    var _React$useState7 = React.useState(),
        _React$useState8 = _slicedToArray(_React$useState7, 2),
        hoverDateState = _React$useState8[0],
        setHoverDateState = _React$useState8[1];

    var _React$useState9 = React.useState(startDateProp),
        _React$useState10 = _slicedToArray(_React$useState9, 2),
        startDateState = _React$useState10[0],
        setStartDateState = _React$useState10[1];

    var _React$useState11 = React.useState(endDateProp),
        _React$useState12 = _slicedToArray(_React$useState11, 2),
        endDateState = _React$useState12[0],
        setEndDateState = _React$useState12[1];

    var _React$useState13 = React.useState(getYearBlock(yearNavProp)),
        _React$useState14 = _slicedToArray(_React$useState13, 2),
        yearBlockNav = _React$useState14[0],
        setYearBlockNav = _React$useState14[1];

    var _React$useState15 = React.useState(yearNavProp),
        _React$useState16 = _slicedToArray(_React$useState15, 2),
        yearNav = _React$useState16[0],
        setYearNav = _React$useState16[1];

    var _React$useState17 = React.useState(monthNavProp),
        _React$useState18 = _slicedToArray(_React$useState17, 2),
        monthNav = _React$useState18[0],
        setMonthNav = _React$useState18[1];

    var yearState = state.year,
        monthState = state.month,
        dateState = state.date;
    React.useEffect(function () {
      var _getDateInfo = getDateInfo(dateProp),
          year = _getDateInfo.year,
          month = _getDateInfo.month,
          date = _getDateInfo.date;

      updateState(year, month, date);
      var d = convertToDate(dateProp);
      setCurrDateState(d);
    }, [dateProp]);
    React.useEffect(function () {
      var d = convertToDate(startDateProp);
      setStartDateState(d);
    }, [startDateProp]);
    React.useEffect(function () {
      var d = convertToDate(endDateProp);
      setEndDateState(d);
    }, [endDateProp]);
    React.useEffect(function () {
      if (monthsInView === 1) setView(viewProp);else setView('date');
    }, [monthsInView, viewProp]);
    React.useEffect(function () {
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
    React.useEffect(function () {
      if (onRangeChange) onRangeChange(startDateState, endDateState);
    }, [startDateState, endDateState]);
    React.useEffect(function () {
      if (yearState !== undefined && monthsInView < 2) {
        setYearBlockNav(getYearBlock(yearState));
        setYearNav(yearState);
      }
    }, [yearState]);
    React.useEffect(function () {
      if (monthState !== undefined && monthsInView < 2) {
        setMonthNav(monthState);
      }
    }, [monthState]);
    React.useEffect(function () {
      setYearNav(yearNavProp);
      setYearBlockNav(getYearBlock(yearNavProp));
    }, [yearNavProp]);
    React.useEffect(function () {
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
      return /*#__PURE__*/React.createElement("div", {
        className: headerIconClass
      }, /*#__PURE__*/React.createElement(Icon, {
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
      return /*#__PURE__*/React.createElement("div", {
        className: headerContentClass,
        onClick: onClickHandler
      }, /*#__PURE__*/React.createElement(Heading, null, headerContent));
    };

    var renderBodyYear = function renderBodyYear() {
      var noOfRows = Math.ceil(yearBlockRange / yearsInRow);
      return Array.from({
        length: noOfRows
      }, function (_y, row) {
        return /*#__PURE__*/React.createElement("div", {
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
          return /*#__PURE__*/React.createElement("div", {
            className: valueClass,
            onClick: function onClick() {
              return selectYear(year);
            }
          }, /*#__PURE__*/React.createElement(Text, {
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
        return /*#__PURE__*/React.createElement("div", {
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
          return /*#__PURE__*/React.createElement("div", {
            className: valueClass,
            onClick: function onClick() {
              return selectMonth(month);
            }
          }, /*#__PURE__*/React.createElement(Text, {
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

      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "Calendar-dayValues"
      }, renderDayValues()), /*#__PURE__*/React.createElement("div", {
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
        return /*#__PURE__*/React.createElement("div", {
          className: valueClass
        }, /*#__PURE__*/React.createElement(Subheading, {
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
        return /*#__PURE__*/React.createElement(React.Fragment, null, dummyDays < daysInRow && /*#__PURE__*/React.createElement("div", {
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
          return /*#__PURE__*/React.createElement("div", {
            className: valueClass,
            onClick: function onClick() {
              return onClickHandler(date);
            },
            onMouseOver: function onMouseOver() {
              return onMouseOverHandler(date);
            }
          }, !dummy && /*#__PURE__*/React.createElement(Text, {
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
      return /*#__PURE__*/React.createElement("div", {
        className: wrapperClass
      }, /*#__PURE__*/React.createElement("div", {
        className: headerClass
      }, index === 0 && renderJumpButton('prev'), renderHeaderContent(index), index === monthsInView - 1 && renderJumpButton('next')), /*#__PURE__*/React.createElement("div", {
        className: bodyClass
      }, view === 'year' && renderBodyYear(), view === 'month' && renderBodyMonth(), view === 'date' && renderBodyDate(index)));
    };

    return /*#__PURE__*/React.createElement("div", {
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
        return ReactDOM.findDOMNode(ref.current);
      });

      _this.state = {
        open: props.open || false,
        mouseLeaveDelay: 50,
        mouseEnterDelay: 0
      };
      _this.triggerRef = /*#__PURE__*/React.createRef();
      _this.popupRef = /*#__PURE__*/React.createRef();
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
        var element = /*#__PURE__*/React.cloneElement( /*#__PURE__*/React.createElement("span", {
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
        var element = /*#__PURE__*/React.cloneElement(children, options);
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
        return /*#__PURE__*/React.createElement(reactPopper.Manager, null, /*#__PURE__*/React.createElement(reactPopper.Reference, {
          innerRef: this.triggerRef
        }, function (_ref) {
          var ref = _ref.ref;
          return _this3.getTriggerElement(trigger, ref, on);
        }), (open || this.state.open) && appendToBody && /*#__PURE__*/ReactDOM.createPortal(
        /*#__PURE__*/

        /* tslint:disable:no-shadowed-variable */
        React.createElement(reactPopper.Popper, {
          placement: placement,
          innerRef: this.popupRef
        }, function (_ref2) {
          var ref = _ref2.ref,
              style = _ref2.style,
              placement = _ref2.placement;
          var newStyle = offset ? _this3.getUpdatedStyle(style, placement, offset) : style;
          return _this3.getChildrenElement(children, ref, placement, newStyle);
        }), document.body), (open || this.state.open) && !appendToBody && /*#__PURE__*/React.createElement(reactPopper.Popper, {
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
  }(React.Component);

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

    var _React$useState = React.useState(props.open || false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        open = _React$useState2[0],
        setOpen = _React$useState2[1];

    React.useEffect(function () {
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
    var PopoverWrapper = /*#__PURE__*/React.createElement("div", {
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
    return /*#__PURE__*/React.createElement(PopperWrapper, _extends({}, popperOptions, {
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
    return /*#__PURE__*/React.createElement(GenericText, _extends({
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
  var Input = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var _classNames2, _classNames3, _classNames4, _classNames5, _classNames6;

    var _props$size = props.size,
        size = _props$size === void 0 ? 'regular' : _props$size,
        _props$clearButton = props.clearButton,
        clearButton = _props$clearButton === void 0 ? true : _props$clearButton,
        _props$autoFocus = props.autoFocus,
        autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
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
    var trigger = /*#__PURE__*/React.createElement("div", {
      className: rightIconClass
    }, /*#__PURE__*/React.createElement(Icon, {
      name: 'info',
      size: sizeMapping$1[size]
    }));
    var popoverStyle = {
      padding: 'var(--spacing) var(--spacing-2)',
      maxWidth: 'var(--spacing-9)',
      overflow: 'hidden'
    };
    return /*#__PURE__*/React.createElement("div", {
      className: classes
    }, size !== 'tiny' && label && /*#__PURE__*/React.createElement("div", {
      className: "Input-label"
    }, /*#__PURE__*/React.createElement(Label, null, label), required && /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("div", {
      className: inputWrapperClass
    }, inlineLabel && /*#__PURE__*/React.createElement("div", {
      className: "Input-inlineLabel"
    }, /*#__PURE__*/React.createElement(Text, {
      appearance: "subtle"
    }, inlineLabel)), size !== 'tiny' && icon && /*#__PURE__*/React.createElement("div", {
      className: leftIconClass
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: sizeMapping$1[size]
    })), /*#__PURE__*/React.createElement("input", {
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
      onFocus: onFocus,
      autoFocus: autoFocus
    }), (!value && !disabled || value && disabled) && info && /*#__PURE__*/React.createElement(Popover, {
      style: popoverStyle,
      position: "top",
      on: 'hover',
      trigger: trigger,
      dark: true
    }, info), clearButton && value && !disabled && /*#__PURE__*/React.createElement("div", {
      className: rightIconClass,
      onClick: function onClick(e) {
        return onClear && onClear(e);
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: 'close',
      size: sizeMapping$1[size]
    }))), size !== 'tiny' && caption && /*#__PURE__*/React.createElement("div", {
      className: "Input-caption"
    }, error && /*#__PURE__*/React.createElement("div", {
      className: errorIconClass
    }, /*#__PURE__*/React.createElement(Icon, {
      name: 'error',
      appearance: 'alert'
    })), /*#__PURE__*/React.createElement(Text, {
      appearance: error ? 'destructive' : 'subtle',
      small: true,
      weight: "medium"
    }, "".concat(caption))));
  });
  Input.displayName = 'Input';

  var InputMask = /*#__PURE__*/React.forwardRef(function (props, forwardRef) {
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

    var _React$useState = React.useState(''),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        value = _React$useState2[0],
        setValue = _React$useState2[1];

    var _React$useState3 = React.useState(0),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        caret = _React$useState4[0],
        setCaret = _React$useState4[1];

    var ref = React.useRef(null);
    var fixedMask = mask.filter(function (m) {
      return typeof m === 'string' && m.length === 1;
    });
    React.useEffect(function () {
      if (valueProp) {
        setValue(convertToMasked(valueProp));
      }
    }, [valueProp]);
    React.useEffect(function () {
      setCaretPos(caret);
    }, [caret]);
    React.useEffect(function () {
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
    React.useImperativeHandle(forwardRef, function () {
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

    return /*#__PURE__*/React.createElement(Input, _extends({}, rest, {
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

    var _React$useState = React.useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        init = _React$useState2[0],
        setInit = _React$useState2[1];

    var _React$useState3 = React.useState(),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        date = _React$useState4[0],
        setDate = _React$useState4[1];

    var _React$useState5 = React.useState(false),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        error = _React$useState6[0],
        setError = _React$useState6[1];

    var _React$useState7 = React.useState(openProp),
        _React$useState8 = _slicedToArray(_React$useState7, 2),
        open = _React$useState8[0],
        setOpen = _React$useState8[1];

    React.useEffect(function () {
      var d = convertToDate(dateProp, inputFormat, validator);
      setDate(d);
    }, [dateProp]);
    React.useEffect(function () {
      setOpen(openProp);
    }, [openProp]);
    React.useEffect(function () {
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

      var trigger = /*#__PURE__*/React.createElement(InputMask, _extends({}, inputProps, {
        error: error,
        mask: mask,
        value: date ? translateToString(inputFormat, date) : '',
        onChange: onChangeHandler,
        onBlur: onBlurHandler,
        onClear: onClearHandler
      }));
      return /*#__PURE__*/React.createElement(Popover, {
        trigger: trigger,
        position: position,
        appendToBody: true,
        open: open,
        onToggle: onToggleHandler
      }, /*#__PURE__*/React.createElement(Calendar, _extends({}, rest, {
        date: convertToDate(date, inputFormat, validator),
        disabledBefore: convertToDate(disabledBefore, inputFormat, validator),
        disabledAfter: convertToDate(disabledAfter, inputFormat, validator),
        onDateChange: onDateChangeHandler
      })));
    }

    return /*#__PURE__*/React.createElement(Calendar, _extends({}, rest, {
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
        return /*#__PURE__*/React.createElement("div", {
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
      return /*#__PURE__*/React.createElement("g", null, withCenterText && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("text", {
        x: cx,
        y: cy,
        "font-size": 'var(--font-size-xl)',
        textAnchor: "middle"
      }, "Total"), /*#__PURE__*/React.createElement("text", {
        x: cx,
        y: cy,
        dy: 22,
        "font-size": 'var(--font-size-l)',
        textAnchor: "middle",
        fill: colorToHex(colorOfTotalCount)
      }, total.toLocaleString())), /*#__PURE__*/React.createElement(recharts.Sector, {
        cx: cx,
        cy: cy,
        innerRadius: innerRadius,
        outerRadius: outerRadius,
        startAngle: startAngle,
        endAngle: endAngle,
        fill: fill
      }), withActiveSegment && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(recharts.Sector, {
        cx: cx,
        cy: cy,
        startAngle: startAngle,
        endAngle: endAngle,
        innerRadius: outerRadius + 6,
        outerRadius: outerRadius + 10,
        fill: fill
      }), /*#__PURE__*/React.createElement("path", {
        d: "M".concat(sx, ",").concat(sy, "L").concat(mx, ",").concat(my, "L").concat(ex, ",").concat(ey),
        stroke: fill,
        fill: "none"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: ex,
        cy: ey,
        r: 2,
        fill: fill,
        stroke: "none"
      }), /*#__PURE__*/React.createElement("text", {
        x: ex + (cos >= 0 ? 1 : -1) * 12,
        y: ey,
        dy: -18,
        textAnchor: textAnchor,
        fill: fill
      }, "".concat(payload.name)), /*#__PURE__*/React.createElement("text", {
        x: ex + (cos >= 0 ? 1 : -1) * 12,
        y: ey,
        textAnchor: textAnchor,
        fill: "#333"
      }, "".concat(value.toLocaleString())), /*#__PURE__*/React.createElement("text", {
        x: ex + (cos >= 0 ? 1 : -1) * 12,
        y: ey,
        dy: 18,
        textAnchor: textAnchor,
        fill: "#999"
      }, "".concat((percent * 100).toFixed(0), "%"))));
    };

    var _React$useState = React.useState(0),
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

    return /*#__PURE__*/React.createElement(Row, {
      className: "DonutChart"
    }, /*#__PURE__*/React.createElement(Column, columnOptions.chart, /*#__PURE__*/React.createElement(recharts.ResponsiveContainer, null, /*#__PURE__*/React.createElement(recharts.PieChart, null, /*#__PURE__*/React.createElement(recharts.Pie, {
      data: data,
      dataKey: "value",
      activeIndex: activeIndex,
      activeShape: renderActiveShape,
      onMouseEnter: onPieEnter,
      outerRadius: oRadius,
      innerRadius: iRadius
    }, data.map(function (_entry, index) {
      return /*#__PURE__*/React.createElement(recharts.Cell, {
        fill: getColor(index, 'hex'),
        key: index
      });
    })), withTooltip && /*#__PURE__*/React.createElement(recharts.Tooltip, {
      separator: ": ",
      content: /*#__PURE__*/React.createElement(ChartTooltip, null)
    })))), withLegends && /*#__PURE__*/React.createElement(Column, _extends({
      className: "DonutChart-legends"
    }, columnOptions.legends), data.map(function (d, i) {
      return /*#__PURE__*/React.createElement(Legend, {
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

  var DropdownButton = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var _classNames;

    var _props$size = props.size,
        size = _props$size === void 0 ? 'regular' : _props$size,
        _props$placeholder = props.placeholder,
        placeholder = _props$placeholder === void 0 ? 'Select' : _props$placeholder,
        _props$menu = props.menu,
        menu = _props$menu === void 0 ? false : _props$menu,
        children = props.children,
        width = props.width,
        maxWidth = props.maxWidth,
        icon = props.icon,
        disabled = props.disabled,
        inlineLabel = props.inlineLabel,
        rest = _objectWithoutProperties(props, ["size", "placeholder", "menu", "children", "width", "maxWidth", "icon", "disabled", "inlineLabel"]);

    var buttonDisabled = disabled ? 'disabled' : 'default';
    var trimmedPlaceholder = placeholder.trim();
    var value = children ? children : trimmedPlaceholder ? trimmedPlaceholder : 'Select';
    var iconName = !menu ? 'keyboard_arrow_down' : icon ? icon : 'more_horiz';
    var label = inlineLabel && inlineLabel.trim();
    var buttonClass = classNames((_classNames = {}, _defineProperty(_classNames, 'Button', true), _defineProperty(_classNames, 'Button--basic', true), _defineProperty(_classNames, 'Button--square', !children), _defineProperty(_classNames, 'DropdownTrigger', true), _defineProperty(_classNames, 'DropdownButton', true), _defineProperty(_classNames, "DropdownButton--".concat(size), size), _defineProperty(_classNames, 'DropdownButton--icon', icon), _defineProperty(_classNames, 'DropdownButton--moreIcon', menu), _defineProperty(_classNames, 'DropdownButton--placeholder', !children && !menu), _defineProperty(_classNames, 'DropdownButton--label', label), _classNames));
    var labelClass = classNames(_defineProperty({}, 'DropdownButton-label', true));
    return /*#__PURE__*/React.createElement("button", _extends({
      ref: ref,
      value: children,
      className: buttonClass,
      disabled: disabled,
      style: {
        maxWidth: maxWidth
      },
      tabIndex: 0
    }, rest), !menu && /*#__PURE__*/React.createElement("div", {
      className: "DropdownButton-wrapper"
    }, label && /*#__PURE__*/React.createElement("div", {
      className: labelClass
    }, " ", label.trim().charAt(0).toUpperCase(), label.trim().slice(1), " "), icon && !inlineLabel && /*#__PURE__*/React.createElement(Icon, {
      appearance: buttonDisabled,
      className: "mr-4",
      name: icon
    }), /*#__PURE__*/React.createElement("div", {
      className: 'DropdownButton-text'
    }, value && "".concat(value.charAt(0).toUpperCase()).concat(value.slice(1)))), /*#__PURE__*/React.createElement(Icon, {
      appearance: buttonDisabled,
      name: iconName
    }));
  });
  DropdownButton.displayName = 'DropdownButton';

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

    return /*#__PURE__*/React.createElement("div", {
      className: className,
      onMouseEnter: onUpdateActiveOption
    }, /*#__PURE__*/React.createElement(Checkbox, {
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

    return /*#__PURE__*/React.createElement("div", {
      className: className,
      onClick: onClickHandler,
      onMouseEnter: onUpdateActiveOption
    }, /*#__PURE__*/React.createElement("div", {
      className: 'Option-label'
    }, /*#__PURE__*/React.createElement("div", {
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

    return /*#__PURE__*/React.createElement("div", {
      className: className,
      onClick: onClickHandler,
      onMouseEnter: onUpdateActiveOption
    }, /*#__PURE__*/React.createElement("div", {
      className: 'Option-label'
    }, /*#__PURE__*/React.createElement("div", {
      className: textClassName
    }, label), subInfo && /*#__PURE__*/React.createElement("div", {
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

    return /*#__PURE__*/React.createElement("div", {
      className: OptionClass,
      onClick: onClickHandler,
      onMouseEnter: onUpdateActiveOption
    }, icon && /*#__PURE__*/React.createElement("div", {
      className: 'Option-icon'
    }, /*#__PURE__*/React.createElement(Icon, {
      className: "mr-4",
      name: icon,
      appearance: selected ? 'white' : 'default'
    })), /*#__PURE__*/React.createElement("div", {
      className: 'Option-label'
    }, /*#__PURE__*/React.createElement("div", {
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

    return /*#__PURE__*/React.createElement("div", {
      className: OptionClass,
      onClick: onClickHandler,
      onMouseEnter: onUpdateActiveOption
    }, icon && /*#__PURE__*/React.createElement("div", {
      className: 'Option-icon'
    }, /*#__PURE__*/React.createElement(Icon, {
      className: "mr-4",
      name: icon,
      appearance: selected ? 'white' : 'default'
    })), /*#__PURE__*/React.createElement("div", {
      className: 'Option-label'
    }, /*#__PURE__*/React.createElement("div", {
      className: textClassName
    }, label), subInfo && /*#__PURE__*/React.createElement("div", {
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
        optionsWrap = props.optionsWrap,
        onClick = props.onClick,
        updateActiveOption = props.updateActiveOption,
        onChange = props.onChange,
        active = props.active,
        index = props.index;
    var _optionData$optionTyp = optionData.optionType,
        optionType = _optionData$optionTyp === void 0 ? 'DEFAULT' : _optionData$optionTyp;

    if (props.checkboxes) {
      optionType = 'WITH_CHECKBOX';
    }

    var checkboxPresent = optionType === 'WITH_CHECKBOX';
    var className = classNames((_classNames = {}, _defineProperty(_classNames, 'Option', true), _defineProperty(_classNames, 'Option-wrapper', true), _defineProperty(_classNames, 'Option--top', optionIsTop), _defineProperty(_classNames, 'Option--bottom', optionIsBottom), _defineProperty(_classNames, 'Option--active', active), _defineProperty(_classNames, 'Option--selected', selected && !checkboxPresent), _classNames));
    var textClassName = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'Option-text', true), _defineProperty(_classNames2, 'Option-text--wrap', optionsWrap), _classNames2));

    var onUpdateActiveOption = function onUpdateActiveOption() {
      if (updateActiveOption) updateActiveOption(index);
    };

    if (props.optionRenderer) {
      return /*#__PURE__*/React.createElement("div", _extends({
        className: "Option-wrapper",
        onMouseEnter: onUpdateActiveOption
      }, !checkboxPresent && {
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

    var component = OptionTypeMapping[optionType];
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

  var ListCheckbox = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var _classNames;

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
        optionRenderer = props.optionRenderer,
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

    var _React$useState = React.useState(calcParentStatus(selected)),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        parentStatus = _React$useState2[0],
        setParentStatus = _React$useState2[1];

    var _React$useState3 = React.useState(childArray),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        checked = _React$useState4[0],
        setChecked = _React$useState4[1];

    var _React$useState5 = React.useState(selectedLabels),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        selectedArrayLabels = _React$useState6[0],
        setSelectedArrayLabels = _React$useState6[1];

    var _React$useState7 = React.useState(selected),
        _React$useState8 = _slicedToArray(_React$useState7, 2),
        selectedArrayValues = _React$useState8[0],
        setSelectedArrayValues = _React$useState8[1];

    var SelectAllClass = classNames((_classNames = {}, _defineProperty(_classNames, 'Option', true), _defineProperty(_classNames, 'Option-wrapper', true), _defineProperty(_classNames, 'Option--top', true), _defineProperty(_classNames, 'Option--active', props.cursor === 0), _classNames));
    React.useEffect(function () {
      if (updatedSelectedArray && updatedSelectedArray.length > 0) {
        setChecked(updatedSelectedArray);
      }
    }, [JSON.stringify(updatedSelectedArray)]);
    React.useEffect(function () {
      if (selected && selected.length > 0 && parentStatus.checked) {
        setSelectedArrayValues(selected);
        setSelectedArrayLabels(selectedLabels);
      }
    }, [JSON.stringify(selected)]);
    React.useEffect(function () {
      if (props.checked !== undefined) {
        setParentStatus(_objectSpread2(_objectSpread2({}, parentStatus), {}, {
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
      var indeterminate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var updatedArray = _toConsumableArray(childArray).fill(checkedValue);

      var optionsList = selected && selected.length > 0 ? selectedArrayValues.slice() : getValuesFromList(list);
      var labelsList = selected && selected.length > 0 ? selectedArrayLabels.slice() : getLabelsFromList(list);
      var selectedValues = checkedValue ? optionsList : [];
      var selectedLabelsCopy = checkedValue ? labelsList : [];
      setChecked(updatedArray);
      setSelectedArrayValues(selectedValues);
      setSelectedArrayLabels(selectedLabelsCopy);
      setParentStatus({
        indeterminate: indeterminate,
        checked: checkedValue
      });

      if (onChange) {
        onChange(selectedValues, selectedLabelsCopy, true);
      }
    };

    var onUpdateActiveOption = function onUpdateActiveOption() {
      if (props.updateActiveOption) props.updateActiveOption(0, true);
    };

    return /*#__PURE__*/React.createElement("div", {
      className: 'ListCheckbox'
    }, showParentCheckbox && /*#__PURE__*/React.createElement("div", {
      className: SelectAllClass,
      onMouseEnter: onUpdateActiveOption
    }, /*#__PURE__*/React.createElement(Checkbox, {
      label: label,
      onChange: handleParentChange,
      checked: parentStatus.checked,
      indeterminate: parentStatus.indeterminate,
      tabIndex: -1
    })), /*#__PURE__*/React.createElement("div", {
      className: 'ListCheckbox-scroller',
      style: style,
      ref: ref
    }, list.map(function (item, ind) {
      var group = item.group,
          selectedGroup = item.selectedGroup,
          value = item.value,
          childLabel = item.label;
      var prevGroup = ind > 0 ? list[ind - 1].group : bufferedOption ? bufferedOption.group : undefined;
      var isGroup = showGroups && prevGroup !== group;
      var top = !showParentCheckbox && ind === 0 && !showGroups;
      var bottom = ind + 1 === list.length && !(showGroups && remainingOptions > 0);
      var active = showParentCheckbox ? ind + 1 === props.cursor : ind === props.cursor;
      return /*#__PURE__*/React.createElement("div", {
        key: "checkbox-".concat(ind)
      }, isGroup && group && renderGroups(group, selectedGroup), /*#__PURE__*/React.createElement(Option, {
        optionData: {
          value: value,
          label: childLabel
        },
        active: active,
        selected: checked[ind],
        optionRenderer: optionRenderer,
        index: ind,
        optionIsTop: top,
        optionIsBottom: bottom,
        updateActiveOption: props.updateActiveOption,
        checkboxes: true,
        onChange: function onChange(c) {
          handleChildChange(c, ind);
        }
      }));
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
    return /*#__PURE__*/React.createElement("div", {
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
    return /*#__PURE__*/React.createElement("div", {
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
    return /*#__PURE__*/React.createElement("div", _extends({
      className: classes
    }, rest), withImage && /*#__PURE__*/React.createElement(PlaceholderImage, {
      round: round,
      imageSize: imageSize
    }), /*#__PURE__*/React.createElement("div", {
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
  var lastScrollTop = 0;
  var bottomScrollOffset = 64;
  var usePrevious = function usePrevious(value) {
    var ref = React.useRef();
    React.useEffect(function () {
      ref.current = value;
    }, [value]);
    return ref.current;
  };

  var DropdownList = function DropdownList(props) {
    var _classNames2, _classNames3;

    var _props$listOptions = props.listOptions,
        listOptions = _props$listOptions === void 0 ? [] : _props$listOptions,
        _props$dropdownAlign = props.dropdownAlign,
        dropdownAlign = _props$dropdownAlign === void 0 ? 'right' : _props$dropdownAlign,
        _props$closeOnSelect = props.closeOnSelect,
        closeOnSelect = _props$closeOnSelect === void 0 ? true : _props$closeOnSelect,
        _props$optionsWrap = props.optionsWrap,
        optionsWrap = _props$optionsWrap === void 0 ? false : _props$optionsWrap,
        _props$parentCheckbox = props.parentCheckboxLabel,
        parentCheckboxLabel = _props$parentCheckbox === void 0 ? 'Select All' : _props$parentCheckbox,
        _props$maxHeight = props.maxHeight,
        maxHeight = _props$maxHeight === void 0 ? 200 : _props$maxHeight,
        remainingOptions = props.remainingOptions,
        totalOptions = props.totalOptions,
        menu = props.menu,
        bufferedOption = props.bufferedOption,
        loadingOptions = props.loadingOptions,
        searchTerm = props.searchTerm,
        limit = props.limit,
        maxWidth = props.maxWidth,
        optionsLength = props.optionsLength,
        showApplyButton = props.showApplyButton,
        checkboxes = props.checkboxes,
        search = props.search,
        onChange = props.onChange,
        onSearchChange = props.onSearchChange,
        onScroll = props.onScroll,
        onSelectAll = props.onSelectAll,
        onRearrangeOptions = props.onRearrangeOptions,
        optionRenderer = props.optionRenderer;
    var _props$loadingType = props.loadingType,
        loadingType = _props$loadingType === void 0 ? 'DEFAULT' : _props$loadingType;

    if (checkboxes) {
      loadingType = 'WITH_CHECKBOX';
    }

    var dropdownRef = /*#__PURE__*/React.createRef();
    var triggerRef = /*#__PURE__*/React.createRef();
    var dropdownInputRef = /*#__PURE__*/React.createRef();
    var dropdownTriggerRef = /*#__PURE__*/React.createRef();
    var dropdownCancelButtonRef = /*#__PURE__*/React.createRef();
    var dropdownApplyButtonRef = /*#__PURE__*/React.createRef();

    var _React$useState = React.useState([]),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        selected = _React$useState2[0],
        setSelected = _React$useState2[1];

    var _React$useState3 = React.useState([]),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        selectedLabels = _React$useState4[0],
        setSelectedLabels = _React$useState4[1];

    var _React$useState5 = React.useState(''),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        buttonLabel = _React$useState6[0],
        setButtonLabel = _React$useState6[1];

    var _React$useState7 = React.useState(),
        _React$useState8 = _slicedToArray(_React$useState7, 2),
        dropdownOpen = _React$useState8[0],
        setDropdownOpen = _React$useState8[1];

    var _React$useState9 = React.useState(),
        _React$useState10 = _slicedToArray(_React$useState9, 2),
        popoverStyle = _React$useState10[0],
        setPopoverStyle = _React$useState10[1];

    var _React$useState11 = React.useState([]),
        _React$useState12 = _slicedToArray(_React$useState11, 2),
        previousSelected = _React$useState12[0],
        setPreviousSelected = _React$useState12[1];

    var _React$useState13 = React.useState([]),
        _React$useState14 = _slicedToArray(_React$useState13, 2),
        previousSelectedLabels = _React$useState14[0],
        setPreviousSelectedLabels = _React$useState14[1];

    var _React$useState15 = React.useState(false),
        _React$useState16 = _slicedToArray(_React$useState15, 2),
        optionsApplied = _React$useState16[0],
        setOptionsApplied = _React$useState16[1];

    var _React$useState17 = React.useState(false),
        _React$useState18 = _slicedToArray(_React$useState17, 2),
        loading = _React$useState18[0],
        setLoading = _React$useState18[1];

    var _React$useState19 = React.useState(0),
        _React$useState20 = _slicedToArray(_React$useState19, 2),
        cursor = _React$useState20[0],
        setCursor = _React$useState20[1];

    var prevDropdownOpen = usePrevious(dropdownOpen);
    var prevListOptions = usePrevious(listOptions);
    var width = props.width ? props.width : '100%';

    var setSelectButtonLabel = function setSelectButtonLabel() {
      var selectedArray = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var _props$checkedValuesO = props.checkedValuesOffset,
          checkedValuesOffset = _props$checkedValuesO === void 0 ? 2 : _props$checkedValuesO;
      var selectedLength = selectedArray.length;
      var label = '';

      if (selectedLength <= checkedValuesOffset) {
        var labelArray = [];
        selectedArray.forEach(function (selectedLabel) {
          labelArray.push(selectedLabel);
        });
        label = labelArray.join(', ');
      } else {
        label = props.onChangeTriggerLabel ? props.onChangeTriggerLabel(selectedLength, totalOptions) : "".concat(selectedLength, " selected");
      }

      setSelectedLabels(selectedArray);
      setButtonLabel(label);
    };

    React.useEffect(function () {
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
    React.useEffect(function () {
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
    React.useEffect(function () {
      if (props.selectedAll) {
        var _props$selectedAll = props.selectedAll,
            _label = _props$selectedAll.label,
            value = _props$selectedAll.value;

        if (_label && value) {
          var selectedLabelsCopy = selectedLabels.slice();
          var selectedValue = selected.slice();
          selectedLabelsCopy = _label;
          selectedValue = value;
          setSelected(selectedValue);
          setSelectButtonLabel(selectedLabelsCopy);
        }
      }
    }, [props.selectedAll]);
    React.useEffect(function () {
      if (props.bottomOptionsSliced && dropdownRef.current) {
        var className = '.Option-wrapper';
        var element = document.querySelectorAll(className);
        var index = element.length - limit + props.slicedOptionsLength;
        var marker = element[index];
        var updatedScrollTop = marker.offsetTop - maxHeight;
        dropdownRef.current.scrollTop = updatedScrollTop;
        lastScrollTop = updatedScrollTop;
        setCursor(cursor - limit + props.slicedOptionsLength);
      }
    }, [props.bottomOptionsSliced]);
    React.useEffect(function () {
      if (props.topOptionsSliced && dropdownRef.current) {
        var className = '.Option-wrapper';
        var element = document.querySelectorAll(className);
        var index = limit - props.slicedOptionsLength;
        var marker = element[index];
        dropdownRef.current.scrollTop = marker.offsetTop;
        lastScrollTop = marker.offsetTop;
        setCursor(limit - props.slicedOptionsLength + 1);
      }
    }, [props.topOptionsSliced]);
    React.useEffect(function () {
      var rearrangeCondition = dropdownOpen && props.async && checkboxes;
      if (rearrangeCondition && onRearrangeOptions) onRearrangeOptions(selected, selectedLabels);
    }, [dropdownOpen]);
    React.useEffect(function () {
      var rearrangeCondition = !searchTerm && props.searchInit && props.async && checkboxes;
      if (rearrangeCondition && onRearrangeOptions) onRearrangeOptions(selected, selectedLabels);
    }, [searchTerm, props.searchInit]);
    var _props$triggerSize = props.triggerSize,
        triggerSize = _props$triggerSize === void 0 ? 'regular' : _props$triggerSize,
        placeholder = props.placeholder,
        icon = props.icon,
        disabled = props.disabled,
        inlineLabel = props.inlineLabel;
    var CustomTrigger = props.customTrigger ? props.customTrigger(buttonLabel) : /*#__PURE__*/React.createElement(React.Fragment, null);
    var NewCustomTrigger = /*#__PURE__*/React.cloneElement(CustomTrigger, {
      tabindex: 0,
      ref: dropdownTriggerRef
    });
    var trigger = props.customTrigger ? NewCustomTrigger : /*#__PURE__*/React.createElement(DropdownButton, {
      placeholder: placeholder,
      size: triggerSize,
      icon: icon,
      disabled: disabled,
      inlineLabel: inlineLabel,
      width: width,
      maxWidth: maxWidth,
      menu: menu,
      ref: dropdownTriggerRef
    }, buttonLabel);
    var dropdownWrapperStyle = menu ? {} : {
      width: width
    };
    var dropdownStyle = {
      maxHeight: maxHeight,
      overflowY: 'auto',
      overflowX: 'hidden'
    };

    var getDropdownClass = function getDropdownClass(index, currentGroup, isGroup) {
      var Dropdown = classNames(_defineProperty({}, 'Dropdown--border', currentGroup !== undefined && isGroup && index !== 0));
      return Dropdown;
    };

    var dropdownClass = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'Dropdown', true), _defineProperty(_classNames2, 'Dropdown--placeholder', !menu), _defineProperty(_classNames2, 'Dropdown--menu', menu), _classNames2));
    var dropdownWrapperClass = classNames((_classNames3 = {}, _defineProperty(_classNames3, 'Dropdown-wrapper', true), _defineProperty(_classNames3, 'Dropdown-wrapper--wrap', optionsWrap), _classNames3));

    var closeDropdownPopper = function closeDropdownPopper(open) {
      var _dropdownTriggerRef$c;

      setDropdownOpen(open);
      (_dropdownTriggerRef$c = dropdownTriggerRef.current) === null || _dropdownTriggerRef$c === void 0 ? void 0 : _dropdownTriggerRef$c.focus();
    };

    var onToggleDropdown = function onToggleDropdown() {
      if (!dropdownOpen) {
        props.renderOptionsFromTop();
      }

      if (!disabled) closeDropdownPopper(!dropdownOpen);

      if (!(optionsApplied || !showApplyButton)) {
        setSelected(previousSelected);
        setSelectButtonLabel(previousSelectedLabels);
      }

      setCursor(0);
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
      closeDropdownPopper(false);
    };

    var onApplyOptions = function onApplyOptions() {
      setPreviousSelected(selected);
      setPreviousSelectedLabels(selectedLabels);
      setOptionsApplied(true);
      closeDropdownPopper(false);
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

    var optionClickHandler = function optionClickHandler(item) {
      var label = item.label,
          value = item.value;
      setSelectedLabels([label]);
      setButtonLabel(label);
      setSelected([value]);
      closeDropdownPopper(!closeOnSelect);
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

    var updateActiveOption = function updateActiveOption(index, parentCheckbox) {
      var updatedIndex = checkboxes && !props.async && !parentCheckbox ? index + 1 : index;
      setCursor(updatedIndex);
    };

    var renderFooter = function renderFooter() {
      var _props$footerLabel = props.footerLabel,
          footerLabel = _props$footerLabel === void 0 ? 'Search for more options' : _props$footerLabel;
      return /*#__PURE__*/React.createElement("div", {
        className: 'Dropdown-footer'
      }, /*#__PURE__*/React.createElement(Text, {
        small: true,
        appearance: 'subtle'
      }, footerLabel));
    };

    var renderGroups = function renderGroups(group, selectedGroup) {
      return /*#__PURE__*/React.createElement("div", {
        className: 'Dropdown-subinfo'
      }, /*#__PURE__*/React.createElement(Text, {
        small: true,
        appearance: 'subtle'
      }, group), selectedGroup && /*#__PURE__*/React.createElement("div", {
        onClick: onClearOptions,
        className: 'Dropdown-clear'
      }, /*#__PURE__*/React.createElement(Text, null, "Clear")));
    };

    var renderApplyButton = function renderApplyButton() {
      var disable = JSON.stringify(previousSelectedLabels) === JSON.stringify(selected);
      return /*#__PURE__*/React.createElement("div", {
        className: 'Dropdown-buttonWrapper'
      }, /*#__PURE__*/React.createElement(Button, {
        ref: dropdownCancelButtonRef,
        className: "mr-4",
        appearance: 'basic',
        onClick: onCancelOptions,
        tabIndex: -1
      }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
        ref: dropdownApplyButtonRef,
        appearance: 'primary',
        disabled: disable,
        onClick: onApplyOptions
      }, "Apply"));
    };

    var renderSearch = function renderSearch() {
      return /*#__PURE__*/React.createElement("div", {
        className: 'Dropdown-input'
      }, /*#__PURE__*/React.createElement(Input, {
        name: "Dropdown-search",
        icon: 'search',
        value: searchTerm,
        placeholder: 'Search..',
        disabled: false,
        clearButton: true,
        autoFocus: true,
        onChange: searchHandler,
        onClear: searchClearHandler,
        ref: dropdownInputRef
      }));
    };

    var renderLoading = function renderLoading(loadersLength) {
      var arr = Array(loadersLength).fill('Loading');
      return arr.map(function (option, ind) {
        return /*#__PURE__*/React.createElement("div", {
          className: "Option-loading",
          key: "".concat(option, "-").concat(ind)
        }, /*#__PURE__*/React.createElement(Loading, {
          loadingType: loadingType
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
      return /*#__PURE__*/React.createElement(ListCheckbox, {
        label: parentLabel,
        cursor: cursor,
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
        showParentCheckbox: showParentCheckbox,
        optionRenderer: optionRenderer,
        updateActiveOption: updateActiveOption
      });
    };

    var renderOptions = function renderOptions(item, index) {
      var active = index === cursor;
      var top = index === 0;
      var bottom = index + 1 === listOptions.length && !(props.async && remainingOptions > 0);
      return /*#__PURE__*/React.createElement(Option, {
        optionData: item,
        optionIsTop: top,
        optionIsBottom: bottom,
        optionsWrap: optionsWrap,
        selected: selected[0] === item.value,
        index: index,
        onClick: function onClick() {
          return optionClickHandler(item);
        },
        updateActiveOption: updateActiveOption,
        optionRenderer: optionRenderer,
        active: active
      });
    };

    var renderDropdownSection = function renderDropdownSection() {
      if (loadingOptions || loading) {
        return /*#__PURE__*/React.createElement("div", {
          className: 'Dropdown-loading'
        }, /*#__PURE__*/React.createElement("div", {
          className: "Dropdown-scroller",
          style: dropdownStyle
        }, renderLoading(limit)));
      }

      if (listOptions.length === 0 && !(loading || loadingOptions)) {
        var _props$searchResultMe = props.searchResultMessage,
            searchResultMessage = _props$searchResultMe === void 0 ? 'No result found' : _props$searchResultMe;
        return /*#__PURE__*/React.createElement("div", {
          className: 'Dropdown-errorWrapper'
        }, /*#__PURE__*/React.createElement("div", {
          className: 'Option'
        }, /*#__PURE__*/React.createElement("div", {
          className: 'Option-subinfo'
        }, searchResultMessage)));
      }

      return /*#__PURE__*/React.createElement("div", {
        className: dropdownWrapperClass
      }, checkboxes && renderCheckboxes(), !checkboxes && /*#__PURE__*/React.createElement("div", {
        className: "Dropdown-scroller",
        style: dropdownStyle,
        ref: dropdownRef
      }, listOptions.map(function (option, index) {
        var prevGroup = index > 0 ? listOptions[index - 1].group : bufferedOption ? bufferedOption.group : undefined;
        var currentGroup = option.group;
        var isGroup = prevGroup !== currentGroup;
        return /*#__PURE__*/React.createElement("div", {
          className: getDropdownClass(index + props.offset, currentGroup, isGroup),
          key: index
        }, isGroup && currentGroup && renderGroups(currentGroup), renderOptions(option, index));
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

    return /*#__PURE__*/React.createElement("div", {
      className: dropdownClass,
      ref: triggerRef,
      onScroll: handleMenuScroll,
      style: dropdownWrapperStyle,
      onKeyDown: onkeydown
    }, /*#__PURE__*/React.createElement(Popover, {
      onToggle: onToggleDropdown,
      trigger: trigger,
      open: dropdownOpen,
      style: popoverStyle,
      position: DropdownAlignMapping[dropdownAlign],
      appendToBody: true
    }, (search || props.async) && renderSearch(), renderDropdownSection(), showApplyButton && checkboxes && renderApplyButton()));
  };

  DropdownList.displayName = 'DropdownList';

  var useIsMount = function useIsMount() {
    var isMountRef = React.useRef(true);
    React.useEffect(function () {
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

    var _React$useState = React.useState(-1),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        topOffset = _React$useState2[0],
        setTopOffset = _React$useState2[1];

    var _React$useState3 = React.useState(-1),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        bottomOffset = _React$useState4[0],
        setBottomOffset = _React$useState4[1];

    var _React$useState5 = React.useState([]),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        options = _React$useState6[0],
        setOptions = _React$useState6[1];

    var _React$useState7 = React.useState(dropdownItems),
        _React$useState8 = _slicedToArray(_React$useState7, 2),
        dropdownOptions = _React$useState8[0],
        setDropdownOptions = _React$useState8[1];

    var _React$useState9 = React.useState(dropdownItems),
        _React$useState10 = _slicedToArray(_React$useState9, 2),
        shuffledOptions = _React$useState10[0],
        setShuffledOptions = _React$useState10[1];

    var _React$useState11 = React.useState(false),
        _React$useState12 = _slicedToArray(_React$useState11, 2),
        topOptionsSliced = _React$useState12[0],
        setTopOptionsSliced = _React$useState12[1];

    var _React$useState13 = React.useState(false),
        _React$useState14 = _slicedToArray(_React$useState13, 2),
        bottomOptionsSliced = _React$useState14[0],
        setBottomOptionsSliced = _React$useState14[1];

    var _React$useState15 = React.useState(''),
        _React$useState16 = _slicedToArray(_React$useState15, 2),
        searchTerm = _React$useState16[0],
        setSearchTerm = _React$useState16[1];

    var _React$useState17 = React.useState(0),
        _React$useState18 = _slicedToArray(_React$useState17, 2),
        slicedOptionLength = _React$useState18[0],
        setSlicedOptionLength = _React$useState18[1];

    var _React$useState19 = React.useState(bulk),
        _React$useState20 = _slicedToArray(_React$useState19, 2),
        async = _React$useState20[0],
        setAsync = _React$useState20[1];

    var _React$useState21 = React.useState(props.loading),
        _React$useState22 = _slicedToArray(_React$useState21, 2),
        loading = _React$useState22[0],
        setLoading = _React$useState22[1];

    var _React$useState23 = React.useState(dropdownItems.length),
        _React$useState24 = _slicedToArray(_React$useState23, 2),
        optionsLength = _React$useState24[0],
        setOptionsLength = _React$useState24[1];

    var _React$useState25 = React.useState(),
        _React$useState26 = _slicedToArray(_React$useState25, 2),
        bufferedOption = _React$useState26[0],
        setBufferedOption = _React$useState26[1];

    var _React$useState27 = React.useState(false),
        _React$useState28 = _slicedToArray(_React$useState27, 2),
        searchInit = _React$useState28[0],
        setSearchInit = _React$useState28[1];

    var _React$useState29 = React.useState(),
        _React$useState30 = _slicedToArray(_React$useState29, 2),
        selectedAll = _React$useState30[0],
        setSelectedAll = _React$useState30[1];

    var isInitialRender = useIsMount();
    var debounceSearch = React.useCallback(debounce(300, function (search, updatedAsync) {
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

    React.useEffect(function () {
      if (!isInitialRender) setAsync(bulk);
    }, [bulk]);
    React.useEffect(function () {
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
    React.useEffect(function () {
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
    React.useEffect(function () {
      if (!isInitialRender) renderOptionsFromTop();
    }, [JSON.stringify(dropdownOptions), limit]);
    React.useEffect(function () {
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
      var stateLimit = 2 * limit;
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

    return /*#__PURE__*/React.createElement(DropdownList, _extends({
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
    return /*#__PURE__*/React.createElement("div", {
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
    }, /*#__PURE__*/React.createElement("span", {
      className: "Legend-icon",
      style: styles
    }), /*#__PURE__*/React.createElement(Text, {
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
    return /*#__PURE__*/React.createElement(GenericText, _extends({
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
    return /*#__PURE__*/React.createElement("div", {
      className: MessageClass
    }, appearance !== 'default' && /*#__PURE__*/React.createElement("div", {
      className: MessageIcon
    }, /*#__PURE__*/React.createElement(Icon, {
      name: IconMapping[appearance],
      size: 16,
      appearance: appearance
    })), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
      className: "Message-title"
    }, /*#__PURE__*/React.createElement(Heading, null, title)), /*#__PURE__*/React.createElement("div", {
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

        if (!ReactDOM.findDOMNode(element.current).contains(event.target)) {
          onOutsideClick(event);
        }
      });

      _this.container = /*#__PURE__*/React.createRef();
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
        return /*#__PURE__*/React.cloneElement(React.Children.only(children), {
          ref: this.container
        });
      }
    }]);

    return OutsideClick;
  }(React.Component);

  var Paragraph = function Paragraph(props) {
    var _props$appearance = props.appearance,
        appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
        children = props.children,
        rest = _objectWithoutProperties(props, ["appearance", "children"]);

    var classes = classNames(_defineProperty({
      Text: true
    }, "Text--".concat(appearance), appearance));
    return /*#__PURE__*/React.createElement(GenericText, _extends({
      className: classes,
      componentType: "p"
    }, rest), children);
  };
  Paragraph.displayName = 'Paragraph';

  var useIsMount$1 = function useIsMount() {
    var isMountRef = React.useRef(true);
    React.useEffect(function () {
      isMountRef.current = false;
    }, []);
    return isMountRef.current;
  };
  var ProgressBar = function ProgressBar(props) {
    var value = props.value,
        onChange = props.onChange;
    var isMount = useIsMount$1();
    React.useEffect(function () {
      if (onChange && !isMount) onChange(value);
    }, [value]);
    var style = {
      width: "".concat(value, "%")
    };
    var ProgressBarClass = classNames({
      ProgressBar: true
    });
    return /*#__PURE__*/React.createElement("div", {
      className: ProgressBarClass
    }, /*#__PURE__*/React.createElement("div", {
      className: 'ProgressBar-indicator',
      style: style
    }));
  };
  ProgressBar.displayName = 'ProgressBar';

  var Radio = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
    var _classNames, _classNames2, _classNames3;

    var _props$size = props.size,
        size = _props$size === void 0 ? 'regular' : _props$size,
        label = props.label,
        disabled = props.disabled,
        onChange = props.onChange,
        name = props.name,
        value = props.value,
        defaultChecked = props.defaultChecked;
    var ref = React.useRef(null);
    React.useImperativeHandle(forwardedRef, function () {
      return ref.current;
    });
    var RadioClass = classNames((_classNames = {}, _defineProperty(_classNames, 'Radio', true), _defineProperty(_classNames, 'Radio--disabled', disabled), _defineProperty(_classNames, "Radio--".concat(size), size), _classNames));
    var RadioWrapper = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'Radio-wrapper', true), _defineProperty(_classNames2, "Radio-wrapper--".concat(size), size), _classNames2));
    var RadioOuterWrapper = classNames((_classNames3 = {}, _defineProperty(_classNames3, 'Radio-outerWrapper', true), _defineProperty(_classNames3, "Radio-outerWrapper--".concat(size), size), _classNames3));

    var onChangeHandler = function onChangeHandler() {
      if (onChange) onChange(ref.current.checked);
    };

    return /*#__PURE__*/React.createElement("div", {
      className: RadioClass
    }, /*#__PURE__*/React.createElement("div", {
      className: RadioOuterWrapper
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      disabled: disabled,
      defaultChecked: defaultChecked,
      ref: ref,
      name: name,
      value: value,
      onChange: onChangeHandler,
      className: "Radio-input"
    }), /*#__PURE__*/React.createElement("span", {
      className: RadioWrapper
    })), label && /*#__PURE__*/React.createElement(Text, {
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
    return /*#__PURE__*/React.createElement("div", {
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
    return /*#__PURE__*/React.createElement("div", {
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
    }, /*#__PURE__*/React.createElement("span", {
      className: StatusHintsIconClass
    }), /*#__PURE__*/React.createElement(Text, {
      weight: 'medium'
    }, children));
  };
  StatusHints.displayName = 'StatusHints';

  var Switch = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var _classNames, _classNames2;

    var _props$size = props.size,
        size = _props$size === void 0 ? 'regular' : _props$size,
        _props$appearance = props.appearance,
        appearance = _props$appearance === void 0 ? 'primary' : _props$appearance,
        disabled = props.disabled,
        onChange = props.onChange,
        name = props.name,
        value = props.value;

    var _React$useState = React.useState(props.checked),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        checked = _React$useState2[0],
        setChecked = _React$useState2[1];

    React.useEffect(function () {
      var checkedValue = props.disabled ? checked : props.checked;
      setChecked(checkedValue);
    }, [props.checked, props.disabled]);
    var SwitchClass = classNames((_classNames = {}, _defineProperty(_classNames, 'Switch', true), _defineProperty(_classNames, 'Switch--disabled', disabled), _defineProperty(_classNames, "Switch--".concat(size), size), _classNames));
    var SwitchWrapper = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'Switch-wrapper', true), _defineProperty(_classNames2, 'Switch-wrapper--disabled', disabled), _defineProperty(_classNames2, "Switch-wrapper--".concat(size), size), _defineProperty(_classNames2, "Switch-wrapper--".concat(appearance), appearance), _defineProperty(_classNames2, 'Switch-wrapper--checked', checked), _defineProperty(_classNames2, 'Switch-wrapper--checkedDisabled', checked && disabled), _classNames2));

    var onChangeHandler = function onChangeHandler() {
      setChecked(!checked);
      if (onChange) onChange(!checked);
    };

    return /*#__PURE__*/React.createElement("div", {
      className: SwitchClass
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      disabled: disabled,
      checked: checked,
      ref: ref,
      name: name,
      value: value,
      className: "Switch-input"
    }), /*#__PURE__*/React.createElement("span", {
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

    return /*#__PURE__*/React.createElement("button", {
      className: buttonClass,
      onClick: onClickHandler
    }, /*#__PURE__*/React.createElement(Text, {
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

    return /*#__PURE__*/React.createElement("div", {
      className: wrapperClass
    }, icon && /*#__PURE__*/React.createElement("div", {
      className: iconClass('left')
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 16,
      appearance: appearance !== 'warning' ? 'white' : 'default'
    })), /*#__PURE__*/React.createElement("div", {
      className: "Toast-body"
    }, /*#__PURE__*/React.createElement("div", {
      className: titleClass
    }, /*#__PURE__*/React.createElement(Heading, {
      appearance: appearance !== 'warning' ? 'white' : 'default'
    }, title), /*#__PURE__*/React.createElement("div", {
      onClick: onCloseHandler
    }, /*#__PURE__*/React.createElement("div", {
      className: iconClass('right')
    }, /*#__PURE__*/React.createElement(Icon, {
      name: 'close',
      size: 16,
      appearance: appearance !== 'warning' ? 'white' : 'default'
    })))), message && /*#__PURE__*/React.createElement("div", {
      className: "Toast-message"
    }, /*#__PURE__*/React.createElement(Text, {
      appearance: appearance !== 'warning' ? 'white' : 'default'
    }, message)), !!(actions === null || actions === void 0 ? void 0 : actions.length) && /*#__PURE__*/React.createElement("div", {
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

        var tooltipWrapper = /*#__PURE__*/React.createElement("div", _extends({
          className: "Tooltip"
        }, props, {
          style: this.state.style
        }), tooltip);
        return /*#__PURE__*/React.createElement(PopperWrapper, {
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
  }(React.Component);

  var useEffect$1 = React.useEffect,
      useState$1 = React.useState;

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
    var ModalContainer = /*#__PURE__*/React.createElement("div", {
      className: "Modal-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: classes
    }, children));
    var ModalWrapper = backdrop ? /*#__PURE__*/React.createElement(OutsideClick, {
      onOutsideClick: function onOutsideClick(event) {
        return onClose('OutsideClick', event);
      }
    }, ModalContainer) : ModalContainer;
    var WrapperElement = /*#__PURE__*/ReactDOM.createPortal(ModalWrapper, document.body);
    return /*#__PURE__*/React.createElement("div", null, WrapperElement, /*#__PURE__*/React.createElement(Backdrop, {
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
      return /*#__PURE__*/React.createElement("div", {
        className: "Modal-close-icon",
        onClick: function onClick(event) {
          return onClose('IconClick', event);
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: 'close',
        size: 16
      }));
    };

    var getHeaderIcon = function getHeaderIcon() {
      return /*#__PURE__*/React.createElement("div", {
        className: "Modal-header-icon"
      }, /*#__PURE__*/React.createElement(Icon, {
        name: icon,
        size: 16
      }));
    };

    var closeButton = getCloseButton();
    return /*#__PURE__*/React.createElement("div", {
      className: "Modal-header-wrapper"
    }, /*#__PURE__*/React.createElement("div", {
      className: classes
    }, icon && getHeaderIcon(), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Heading, {
      size: "m"
    }, heading)), closeButton), subHeading && /*#__PURE__*/React.createElement("div", {
      className: subheaderClasses
    }, /*#__PURE__*/React.createElement(Text, {
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
    return /*#__PURE__*/React.createElement("div", {
      className: classes
    }, title && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Text, {
      weight: "strong"
    }, title)), description && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Text, null, description)));
  };
  ModalDescription.displayName = 'ModalDescription';

  var ModalFooter = function ModalFooter(props) {
    var children = props.children;
    var classes = classNames({
      'Modal-footer': true
    });
    return /*#__PURE__*/React.createElement("div", {
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
    return /*#__PURE__*/React.createElement(Modal, modalOptions, /*#__PURE__*/React.createElement(ModalHeader, modalHeaderOptions), /*#__PURE__*/React.createElement(ModalDescription, modalDescriptionOptions), /*#__PURE__*/React.createElement(ModalFooter, null, /*#__PURE__*/React.createElement(Button, {
      appearance: secondaryButtonAppearance,
      onClick: secondaryButtonCallback
    }, secondaryButtonLabel), /*#__PURE__*/React.createElement(Button, {
      appearance: primaryButtonAppearance,
      onClick: primaryButtonCallback
    }, primaryButtonLabel)));
  };

  Dialog.displayName = 'Dialog';

  var useRef = React.useRef,
      useEffect$2 = React.useEffect,
      useState$2 = React.useState;
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
    return /*#__PURE__*/React.createElement("div", {
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

    var _React$useState = React.useState(props.page ? props.page : 1),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        page = _React$useState2[0],
        setPage = _React$useState2[1];

    var _React$useState3 = React.useState(false),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        init = _React$useState4[0],
        setInit = _React$useState4[1];

    React.useEffect(function () {
      if (props.page && props.page >= 1 && props.page <= totalPages) setPage(props.page);
    }, [props.page]);
    var wrapperClass = classNames((_classNames = {}, _defineProperty(_classNames, 'Pagination', true), _defineProperty(_classNames, "Pagination--".concat(type), type), _classNames));
    var nextButtonWrapperClass = classNames((_classNames2 = {}, _defineProperty(_classNames2, 'Pagination-buttonWrapper', true), _defineProperty(_classNames2, 'Pagination-buttonWrapper--next', true), _classNames2));
    var prevButtonWrapperClass = classNames((_classNames3 = {}, _defineProperty(_classNames3, 'Pagination-buttonWrapper', true), _defineProperty(_classNames3, 'Pagination-buttonWrapper--previous', true), _classNames3));
    React.useEffect(function () {
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
    return /*#__PURE__*/React.createElement("div", {
      className: wrapperClass
    }, /*#__PURE__*/React.createElement("div", {
      className: prevButtonWrapperClass
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: function onClick() {
        return onClickHandler('first');
      },
      disabled: page === 1,
      appearance: "transparent",
      size: "large",
      icon: "first_page"
    }), /*#__PURE__*/React.createElement("div", {
      className: ['ml-4'].concat(buttonHelper).join(' ')
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: function onClick() {
        return onClickHandler('prev');
      },
      disabled: page === 1,
      size: "large",
      icon: "navigate_before"
    }))), type === 'jump' && /*#__PURE__*/React.createElement("div", {
      className: "Pagination-pageIndex"
    }, /*#__PURE__*/React.createElement(Input, {
      name: "page",
      type: "number",
      size: "large",
      clearButton: false,
      onChange: inputChangeHandler,
      value: "".concat(page)
    }), /*#__PURE__*/React.createElement(Text, null, " of ".concat(totalPages, " pages"))), /*#__PURE__*/React.createElement("div", {
      className: nextButtonWrapperClass
    }, /*#__PURE__*/React.createElement("div", {
      className: ['mr-4'].concat(buttonHelper).join(' ')
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: function onClick() {
        return onClickHandler('next');
      },
      disabled: page === totalPages,
      size: "large",
      icon: "navigate_next"
    })), /*#__PURE__*/React.createElement(Button, {
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

  var useIsMount$2 = function useIsMount() {
    var isMountRef = React.useRef(true);
    React.useEffect(function () {
      isMountRef.current = false;
    }, []);
    return isMountRef.current;
  };
  var ProgressRing = function ProgressRing(props) {
    var _props$size = props.size,
        size = _props$size === void 0 ? 'regular' : _props$size,
        value = props.value,
        onChange = props.onChange;
    var isMount = useIsMount$2();
    React.useEffect(function () {
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
    return /*#__PURE__*/React.createElement("svg", _extends({
      className: ProgressRingClass
    }, svgProps), /*#__PURE__*/React.createElement("circle", _extends({
      className: "Ring-background"
    }, circleProps)), /*#__PURE__*/React.createElement("circle", _extends({
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

    var _React$useState = React.useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        init = _React$useState2[0],
        setInit = _React$useState2[1];

    var _React$useState3 = React.useState(),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        startDate = _React$useState4[0],
        setStartDate = _React$useState4[1];

    var _React$useState5 = React.useState(),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        endDate = _React$useState6[0],
        setEndDate = _React$useState6[1];

    var _React$useState7 = React.useState(yearNavProp),
        _React$useState8 = _slicedToArray(_React$useState7, 2),
        yearNav = _React$useState8[0],
        setYearNav = _React$useState8[1];

    var _React$useState9 = React.useState(monthNavProp),
        _React$useState10 = _slicedToArray(_React$useState9, 2),
        monthNav = _React$useState10[0],
        setMonthNav = _React$useState10[1];

    var _React$useState11 = React.useState(openProp),
        _React$useState12 = _slicedToArray(_React$useState11, 2),
        open = _React$useState12[0],
        setOpen = _React$useState12[1];

    var _React$useState13 = React.useState(false),
        _React$useState14 = _slicedToArray(_React$useState13, 2),
        startError = _React$useState14[0],
        setStartError = _React$useState14[1];

    var _React$useState15 = React.useState(false),
        _React$useState16 = _slicedToArray(_React$useState15, 2),
        endError = _React$useState16[0],
        setEndError = _React$useState16[1];

    React.useEffect(function () {
      var d = startDateProp ? convertToDate(startDateProp, inputFormat, validator) : undefined;
      setStartDate(d);
    }, [startDateProp]);
    React.useEffect(function () {
      var d = endDateProp ? convertToDate(endDateProp, inputFormat, validator) : undefined;
      setEndDate(d);
    }, [endDateProp]);
    React.useEffect(function () {
      setYearNav(yearNavProp);
    }, [yearNavProp]);
    React.useEffect(function () {
      setMonthNav(monthNavProp);
    }, [monthNavProp]);
    React.useEffect(function () {
      setOpen(openProp);
    }, [openProp]);
    React.useEffect(function () {
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

      var trigger = /*#__PURE__*/React.createElement(Row, {
        group: '2',
        groupXS: '1'
      }, /*#__PURE__*/React.createElement(Column, {
        className: "RangePicker-input RangePicker-input--startDate"
      }, /*#__PURE__*/React.createElement(InputMask, _extends({}, startInputProps, {
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
      }))), /*#__PURE__*/React.createElement(Column, {
        className: "RangePicker-input RangePicker-input--endDate"
      }, /*#__PURE__*/React.createElement(InputMask, _extends({}, endInputProps, {
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

      return /*#__PURE__*/React.createElement(Popover, {
        trigger: trigger,
        position: position,
        appendToBody: true,
        open: open,
        onToggle: onToggleHandler
      }, /*#__PURE__*/React.createElement(Calendar, _extends({}, rest, {
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

    return /*#__PURE__*/React.createElement(Calendar, _extends({}, rest, {
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

    var _React$useState = React.useState(props.activeTab && props.activeTab < children.length ? props.activeTab : 0),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        activeTab = _React$useState2[0],
        setActiveTab = _React$useState2[1];

    React.useEffect(function () {
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
      return /*#__PURE__*/React.createElement("div", {
        key: index,
        className: tabHeaderClass,
        onClick: function onClick() {
          return tabClickHandler(index);
        }
      }, label);
    });
    return /*#__PURE__*/React.createElement("div", {
      className: wrapperClass
    }, /*#__PURE__*/React.createElement("div", {
      className: "TabsWrapper-header"
    }, TabsHeader), /*#__PURE__*/React.createElement("div", {
      className: "TabsWrapper-content"
    }, children[activeTab]));
  };
  TabsWrapper.displayName = 'TabsWrapper';

  var Tab = function Tab(props) {
    var children = props.children;
    return /*#__PURE__*/React.createElement(React.Fragment, null, children);
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
    var _iterator = _createForOfIteratorHelper(rowIndexes),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var rowIndex = _step.value;
        data[rowIndex] = _objectSpread2(_objectSpread2({}, data[rowIndex]), dataUpdate);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return data;
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
    var sortedData = data;
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

  var renderTitle = function renderTitle(props) {
    var cellData = props.cellData;
    var children = cellData.title;

    if (children) {
      return /*#__PURE__*/React.createElement(Text, null, children);
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
      return /*#__PURE__*/React.createElement(Avatar, {
        appearance: appearance
      }, children);
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
    var _cellData$statusAppea = cellData.statusAppearance,
        statusAppearance = _cellData$statusAppea === void 0 ? 'default' : _cellData$statusAppea;
    var children = cellData.title;

    if (children) {
      return /*#__PURE__*/React.createElement(StatusHints, {
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
          return /*#__PURE__*/React.createElement(Placeholder, {
            style: {
              flexGrow: 1
            }
          }, /*#__PURE__*/React.createElement(PlaceholderParagraph, {
            length: "medium"
          }));
        }

        return /*#__PURE__*/React.createElement("div", {
          className: "".concat(cellClass, " GridCell--align-").concat(align, " GridCell--default")
        }, renderTitle({
          loading: loading,
          cellData: cellData
        }));

      case 'WITH_META_LIST':
        if (loading) {
          return /*#__PURE__*/React.createElement(Placeholder, {
            style: {
              flexGrow: 1
            }
          }, /*#__PURE__*/React.createElement(PlaceholderParagraph, {
            length: "medium"
          }), /*#__PURE__*/React.createElement(PlaceholderParagraph, {
            length: "large"
          }));
        }

        return /*#__PURE__*/React.createElement("div", {
          className: "".concat(cellClass, " GridCell--align-").concat(align, " GridCell--metaList")
        }, /*#__PURE__*/React.createElement("div", {
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
          return /*#__PURE__*/React.createElement(Placeholder, {
            withImage: true,
            imageSize: 'medium',
            round: true
          });
        }

        return /*#__PURE__*/React.createElement("div", {
          className: "".concat(cellClass, " GridCell--avatar")
        }, size !== 'tight' && renderAvatar({
          loading: loading,
          cellData: cellData
        }));

      case 'AVATAR_WITH_TEXT':
        if (loading) {
          return /*#__PURE__*/React.createElement(Placeholder, {
            style: {
              flexGrow: 1
            },
            withImage: true,
            imageSize: 'medium',
            round: true
          }, /*#__PURE__*/React.createElement(PlaceholderParagraph, {
            length: "medium"
          }));
        }

        return /*#__PURE__*/React.createElement("div", {
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
          return /*#__PURE__*/React.createElement(Placeholder, {
            style: {
              flexGrow: 1
            },
            withImage: true,
            imageSize: 'medium',
            round: true
          }, /*#__PURE__*/React.createElement(PlaceholderParagraph, {
            length: "medium"
          }), /*#__PURE__*/React.createElement(PlaceholderParagraph, {
            length: "large"
          }));
        }

        return /*#__PURE__*/React.createElement("div", {
          className: "".concat(cellClass, " GridCell--avatarWithText")
        }, size !== 'tight' && renderAvatar({
          loading: loading,
          cellData: cellData
        }), /*#__PURE__*/React.createElement("div", {
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
          return /*#__PURE__*/React.createElement(Placeholder, {
            withImage: true,
            imageSize: 'small',
            round: true
          });
        }

        return /*#__PURE__*/React.createElement("div", {
          className: "".concat(cellClass, " GridCell--align-").concat(align, " GridCell--icon")
        }, renderIcon({
          loading: loading,
          cellData: cellData
        }));

      case 'STATUS_HINT':
        if (loading) {
          return /*#__PURE__*/React.createElement(Placeholder, {
            style: {
              flexGrow: 1
            },
            withImage: true,
            imageSize: 'small',
            round: true
          }, /*#__PURE__*/React.createElement(PlaceholderParagraph, {
            length: "medium"
          }));
        }

        return /*#__PURE__*/React.createElement("div", {
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
        sortingList = _this$props.sortingList,
        filterList = _this$props.filterList;
    var init = _this.state.init;
    var listIndex = sortingList.findIndex(function (l) {
      return l.name === schema.name;
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
    var options = [{
      label: 'Pin Left',
      value: 'pinLeft',
      icon: 'skip_previous'
    }, {
      label: 'Pin Right',
      value: 'pinRight',
      icon: 'skip_next'
    }, {
      label: 'Hide Column',
      value: 'hide',
      icon: 'cancel'
    }];
    if (schema.sortFn) options = [].concat(sortOptions, _toConsumableArray(options));
    var classes = classNames({
      'Grid-headCell': true,
      'Grid-headCell--draggable': draggable
    });
    return /*#__PURE__*/React.createElement("div", {
      key: schema.name,
      className: classes,
      ref: el
    }, /*#__PURE__*/React.createElement("div", {
      className: "Grid-cellContent",
      onMouseDown: function onMouseDown() {
        if (draggable) reorderCol(_this, schema.name, el.current);
      }
    }, loading && !init ? /*#__PURE__*/React.createElement(Placeholder, {
      style: {
        flexGrow: 1
      }
    }, /*#__PURE__*/React.createElement(PlaceholderParagraph, {
      length: "medium"
    })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Heading, null, schema.displayName), schema.sortFn && /*#__PURE__*/React.createElement("div", {
      className: "Grid-sortingIcons"
    }, sorted ? sorted === 'asc' ? /*#__PURE__*/React.createElement(Icon, {
      name: "arrow_downward"
    }) : /*#__PURE__*/React.createElement(Icon, {
      name: "arrow_upward"
    }) : /*#__PURE__*/React.createElement(Icon, {
      name: "unfold_more"
    })))), schema.filters && /*#__PURE__*/React.createElement(React.Fragment, null, loading && !init ? /*#__PURE__*/React.createElement(Placeholder, {
      withImage: true
    }) : /*#__PURE__*/React.createElement(Dropdown, {
      menu: true,
      showApplyButton: true,
      checkboxes: true,
      selected: filterList[schema.name] ? filterList[schema.name].map(function (f) {
        var _schema$filters;

        return {
          value: f,
          label: ((_schema$filters = schema.filters) === null || _schema$filters === void 0 ? void 0 : _schema$filters.find(function (s) {
            return s.value === f;
          }).label) || ''
        };
      }) : [],
      options: schema.filters,
      icon: 'filter_list',
      dropdownAlign: 'left',
      onChange: function onChange(selected) {
        return _this.onFilterChange(schema.name, selected);
      }
    })), showMenu && /*#__PURE__*/React.createElement(React.Fragment, null, loading && !init ? /*#__PURE__*/React.createElement(Placeholder, {
      withImage: true
    }) : /*#__PURE__*/React.createElement(Dropdown, {
      key: schema.name,
      menu: true,
      options: options,
      dropdownAlign: 'left',
      onChange: function onChange(selected) {
        return _this.onMenuChange(schema.name, selected);
      }
    })), schema.resizable && /*#__PURE__*/React.createElement("span", {
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

    return /*#__PURE__*/React.createElement("div", {
      className: "Grid-cellContent"
    }, colIndex === 0 && data._expanded && !schema.pinned && /*#__PURE__*/React.createElement(Button, {
      appearance: 'transparent',
      icon: expanded ? 'expand_less' : 'expand_more',
      onClick: function onClick() {
        return setExpanded(!expanded);
      }
    }), /*#__PURE__*/React.createElement(GridCell, {
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
      'Grid-cell--withSeparator': head ? !(withCheckbox && colIndex === 0) : schema.separator // 'Grid-cell--selected': schema._selected,

    });
    if (schema.hidden) return null;
    return /*#__PURE__*/React.createElement("div", {
      key: "".concat(rowIndex, "-").concat(colIndex),
      className: cellClass,
      "data-name": schema.name,
      style: {
        width: schema.width
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
        schema = props.schema,
        withCheckbox = props.withCheckbox;
    var _this$props = _this.props,
        loading = _this$props.loading,
        selectAll = _this$props.selectAll;
    var init = _this.state.init;
    var pinnedSchema = schema.filter(function (s) {
      return s.pinned;
    });
    var unpinnedSchema = schema.filter(function (s) {
      return !s.pinned;
    });

    var renderCheckbox = function renderCheckbox(show) {
      if (!show || !(withCheckbox && init)) return null;
      return /*#__PURE__*/React.createElement("div", {
        className: "Grid-cell Grid-cell--head Grid-checkboxCell"
      }, loading ? /*#__PURE__*/React.createElement(Placeholder, {
        withImage: true
      }) : /*#__PURE__*/React.createElement(Checkbox, _extends({}, selectAll, {
        onChange: _this.onSelectAll
      })));
    };

    return /*#__PURE__*/React.createElement("div", {
      className: "Grid-head"
    }, /*#__PURE__*/React.createElement("div", {
      className: "Grid-row Grid-row--head"
    }, !!pinnedSchema.length && /*#__PURE__*/React.createElement("div", {
      className: "Grid-cellGroup Grid-cellGroup--pinned"
    }, renderCheckbox(!!pinnedSchema.length), pinnedSchema.map(function (s, index) {
      return /*#__PURE__*/React.createElement(Cell, {
        key: s.name,
        _this: _this,
        head: true,
        draggable: draggable,
        schema: s,
        colIndex: index
      });
    })), /*#__PURE__*/React.createElement("div", {
      className: "Grid-cellGroup Grid-cellGroup--main"
    }, renderCheckbox(!pinnedSchema.length), unpinnedSchema.map(function (s, index) {
      return /*#__PURE__*/React.createElement(Cell, {
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

      return /*#__PURE__*/React.createElement("div", {
        className: "Grid-expandedRow"
      }, /*#__PURE__*/React.createElement(Grid, {
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

    var _React$useState = React.useState(false),
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
    var init = _this.state.init;
    var pinnedSchema = schema.filter(function (s) {
      return s.pinned;
    });
    var unpinnedSchema = schema.filter(function (s) {
      return !s.pinned;
    }); // const mainSchema = [
    //   ...pinnedSchema,
    //   ...unpinnedSchema
    // ];

    var renderCheckbox = function renderCheckbox(show) {
      if (!show || !(withCheckbox && init)) return null;
      return /*#__PURE__*/React.createElement("div", {
        className: "Grid-cell Grid-cell--body Grid-checkboxCell"
      }, loading ? /*#__PURE__*/React.createElement(Placeholder, {
        withImage: true
      }) : /*#__PURE__*/React.createElement(Checkbox, {
        checked: data._selected,
        onChange: function onChange(checked) {
          _this.onSelect(rI, checked);
        }
      }));
    };

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: rowClasses,
      onClick: onClickHandler
    }, !!pinnedSchema.length && /*#__PURE__*/React.createElement("div", {
      className: "Grid-cellGroup Grid-cellGroup--pinned"
    }, renderCheckbox(!!pinnedSchema.length), pinnedSchema.map(function (s, cI) {
      return /*#__PURE__*/React.createElement(Cell, {
        key: "".concat(rI, "-").concat(cI),
        _this: _this,
        rowIndex: rI,
        colIndex: cI,
        schema: s,
        data: data,
        expandedState: [expanded, setExpanded]
      });
    })), /*#__PURE__*/React.createElement("div", {
      className: "Grid-cellGroup Grid-cellGroup--main"
    }, renderCheckbox(!pinnedSchema.length), unpinnedSchema.map(function (s, cI) {
      return /*#__PURE__*/React.createElement(Cell, {
        key: rI * schema.length + (pinnedSchema.length + cI),
        _this: _this,
        rowIndex: rI,
        colIndex: cI,
        schema: s,
        data: data,
        expandedState: [expanded, setExpanded]
      });
    }))), expanded && /*#__PURE__*/React.createElement(GridExtendedRow, {
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
        withPagination = _this$props.withPagination,
        page = _this$props.page,
        pageSize = _this$props.pageSize,
        totalRecords = _this$props.totalRecords,
        errorTemplate = _this$props.errorTemplate;

    if (!loading && data.length === 0) {
      return errorTemplate ? errorTemplate() : /*#__PURE__*/React.createElement(Heading, null, "No results found");
    }

    var totalPages = Math.ceil(totalRecords / pageSize);
    var dummyRows = page === totalPages ? totalRecords - (page - 1) * pageSize : pageSize;
    var rows = loading ? Array.from({
      length: dummyRows
    }, function () {
      return {};
    }) : data.slice(offset, offset + buffer);
    return /*#__PURE__*/React.createElement("div", {
      className: "Grid-body"
    }, /*#__PURE__*/React.createElement("div", {
      className: "GridBody-padding",
      style: {
        height: "".concat(offset * avgRowHeight, "px")
      }
    }), rows.map(function (d, rI) {
      return /*#__PURE__*/React.createElement(GridRow, {
        key: offset + rI,
        _this: _this,
        rowIndex: offset + rI,
        data: d,
        schema: schema,
        withCheckbox: withCheckbox
      });
    }), /*#__PURE__*/React.createElement("div", {
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

    var _React$useState = React.useState({
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
    };

    return /*#__PURE__*/React.createElement("div", {
      className: classes,
      onScroll: onScrollHandler
    }, showHead && /*#__PURE__*/React.createElement(GridHead, {
      key: 'GridHead',
      _this: _this,
      schema: schema,
      draggable: draggable,
      withCheckbox: withCheckbox
    }), /*#__PURE__*/React.createElement(GridBody, {
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

      _defineProperty(_assertThisInitialized(_this), "gridRef", /*#__PURE__*/React.createRef());

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

      _this.state = {
        init: false
      }; // this.updateRenderedData();

      return _this;
    }

    _createClass(Grid, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, _prevState) {
        if (prevProps.withPagination !== this.props.withPagination || prevProps.page !== this.props.page) {
          this.updateRenderedData();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$state = this.state,
            init = _this$state.init,
            reorderHighlighter = _this$state.reorderHighlighter;
        var _this$props2 = this.props,
            loading = _this$props2.loading,
            loaderSchema = _this$props2.loaderSchema,
            withPagination = _this$props2.withPagination,
            page = _this$props2.page,
            _onPageChange = _this$props2.onPageChange,
            totalRecords = _this$props2.totalRecords,
            pageSize = _this$props2.pageSize,
            paginationType = _this$props2.paginationType;
        var schema = this.props.schema;

        if ((!schema || schema.length === 0) && !init && loading) {
          schema = loaderSchema;
        }

        if (!loading && !init && schema !== loaderSchema) {
          this.setState({
            init: true
          });
        }

        return /*#__PURE__*/React.createElement("div", {
          className: "Grid-container"
        }, /*#__PURE__*/React.createElement("div", {
          className: "Grid-wrapper",
          ref: this.gridRef
        }, /*#__PURE__*/React.createElement(MainGrid, {
          _this: this,
          schema: schema
        }), reorderHighlighter && /*#__PURE__*/React.createElement("div", {
          className: "Grid-reorderHighlighter",
          style: {
            left: "".concat(reorderHighlighter, "px")
          }
        })), withPagination && /*#__PURE__*/React.createElement("div", {
          className: "Grid-pagination"
        }, /*#__PURE__*/React.createElement(Pagination, {
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
  }(React.Component);

  _defineProperty(Grid, "defaultProps", {
    showHead: true,
    loaderSchema: [],
    type: 'data',
    size: 'comfortable',
    page: 1,
    pageSize: 15,
    paginationType: 'jump',
    loading: false,
    sortingList: [],
    filterList: {}
  });

  var Header = function Header(props) {
    var loading = props.loading,
        data = props.data,
        schema = props.schema,
        withSearch = props.withSearch,
        showHead = props.showHead,
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
    var filterSchema = schema.filter(function (s) {
      return s.filters;
    }); // const sortingSchema = schema.filter(s => s.sortFn);
    // const [state, setState] = React.useState({
    //   // sortingList: [],
    //   filterList: {},
    // });

    var onSearchChange = function onSearchChange(e) {
      var value = e.target.value;

      if (updateSearchTerm) {
        updateSearchTerm(value);
      } // if (updateData) {
      //   updateData({
      //     searchTerm: value
      //   });
      // }

    }; // const onSortChange = (name: ColumnSchema['name'], filters: any[]) => {
    //   const newFilterList = {
    //     ...state.filterList,
    //     [name]: filters
    //   };
    //   setState({
    //     ...state,
    //     filterList: newFilterList
    //   });
    //   if (updateData) {
    //     updateData({
    //       page: 1,
    //       filterList: newFilterList
    //     });
    //   }
    // };


    var onFilterChange = function onFilterChange(name, filters) {
      var newFilterList = _objectSpread2(_objectSpread2({}, filterList), {}, _defineProperty({}, name, filters));

      if (updateFilterList) {
        updateFilterList(newFilterList);
      } // setState({
      //   ...state,
      //   filterList: newFilterList
      // });
      // if (updateData) {
      //   updateData({
      //     page: 1,
      //     filterList: newFilterList
      //   });
      // }

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
    var label = withCheckbox && selectedCount ? "Selected ".concat(selectedCount, " items on this page") : "Showing ".concat(totalRecords, " items");
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
      }
    })), !showHead && /*#__PURE__*/React.createElement("div", {
      className: "Header-dropdown"
    }, !showHead && filterSchema.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "Header-filters"
    }, filterSchema.map(function (s) {
      var name = s.name,
          displayName = s.displayName,
          filters = s.filters;
      return /*#__PURE__*/React.createElement(Dropdown, {
        key: name,
        checkboxes: true,
        showApplyButton: true,
        inlineLabel: displayName // icon={'filter_list'}
        ,
        selected: filterList[s.name] ? filterList[s.name].map(function (f) {
          var _s$filters;

          return {
            value: f,
            label: ((_s$filters = s.filters) === null || _s$filters === void 0 ? void 0 : _s$filters.find(function (sf) {
              return sf.value === f;
            }).label) || ''
          };
        }) : [],
        options: filters,
        onChange: function onChange(selected) {
          return onFilterChange(name, selected);
        }
      });
    }))), /*#__PURE__*/React.createElement("div", {
      className: "Header-actions"
    }, children)), /*#__PURE__*/React.createElement("div", {
      className: "Header-content Header-content--bottom"
    }, /*#__PURE__*/React.createElement("div", {
      className: "Header-label"
    }, !showHead && withCheckbox && !loading && /*#__PURE__*/React.createElement(Checkbox, _extends({}, selectAll, {
      onChange: onSelectAll
    })), loading ? /*#__PURE__*/React.createElement(Placeholder, {
      style: {
        display: 'flex',
        flexGrow: 1
      },
      withImage: !showHead && withCheckbox
    }, /*#__PURE__*/React.createElement(PlaceholderParagraph, {
      length: 'small'
    })) : /*#__PURE__*/React.createElement(Text, {
      small: true,
      weight: 'medium'
    }, label)), /*#__PURE__*/React.createElement("div", {
      className: "Header-hideColumns"
    }, /*#__PURE__*/React.createElement(Dropdown, {
      triggerSize: 'tiny',
      checkboxes: true,
      showApplyButton: true,
      selected: columnOptions.filter(function (o) {
        return o.selected;
      }),
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

      _defineProperty(_assertThisInitialized(_this), "updateData", debounce(250, function (options) {
        var _this$props = _this.props,
            fetchData = _this$props.fetchData,
            pageSize = _this$props.pageSize,
            withPagination = _this$props.withPagination,
            dataProp = _this$props.data;
        var _this$state = _this.state,
            async = _this$state.async,
            page = _this$state.page,
            schema = _this$state.schema,
            sortingList = _this$state.sortingList,
            filterList = _this$state.filterList,
            searchTerm = _this$state.searchTerm;

        _this.setState({
          loading: true,
          selectAll: getSelectAll([])
        });

        var opts = _objectSpread2({
          page: page,
          pageSize: pageSize,
          sortingList: sortingList,
          filterList: filterList,
          searchTerm: searchTerm
        }, options);

        if (async) {
          fetchData(opts).then(function (res) {
            _this.setState({
              selectAll: getSelectAll(res.data),
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
          var sortedData = sortData(schema, filteredData, sortingList);
          var renderedData = sortedData;
          var totalRecords = sortedData.length;

          if (withPagination && page && pageSize) {
            renderedData = paginateData(renderedData, page, pageSize);
          }

          _this.setState({
            totalRecords: totalRecords,
            selectAll: getSelectAll(renderedData),
            schema: _this.state.schema.length ? _this.state.schema : schema,
            loading: schema.length === 0,
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
            selectAll: getSelectAll(newData)
          });
        }

        if (onSelect) {
          onSelect(indexes, selected, rowIndex === -1 ? [] : newData.filter(function (d) {
            return d._selected;
          }));
        }
      });

      _defineProperty(_assertThisInitialized(_this), "onSelectAll", function (selected) {
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
          }));
        }

        _this.setState({
          data: newData,
          selectAll: getSelectAll(newData)
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
        _this.setState({
          // @ts-ignore
          sortingList: _toConsumableArray(newSortingList),
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
        totalRecords: 0,
        loading: true,
        selectAll: getSelectAll([]),
        searchTerm: ''
      };

      _this.updateData({});

      return _this;
    }

    _createClass(Table, [{
      key: "componentDidUpdate",
      // static getDerivedStateFromProps()
      value: function componentDidUpdate(prevProps, prevState) {
        if (!this.state.async) {
          if (prevProps.data !== this.props.data || prevProps.schema !== this.props.schema) {
            this.setState({
              loading: this.props.schema.length === 0,
              page: 1,
              schema: this.props.schema,
              data: this.props.data,
              totalRecords: this.props.data.length,
              sortingList: [],
              filterList: {},
              selectAll: getSelectAll([]),
              searchTerm: ''
            });
          }
        }

        if (prevState.page !== this.state.page) {
          this.onSelect(-1, false);
          var onPageChange = this.props.onPageChange;
          if (onPageChange) onPageChange(this.state.page);
        }

        if (prevState.page !== this.state.page || prevState.filterList !== this.state.filterList || prevState.sortingList !== this.state.sortingList || prevState.searchTerm !== this.state.searchTerm) {
          this.updateData({});
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

        return /*#__PURE__*/React.createElement("div", {
          className: "Table"
        }, withHeader && /*#__PURE__*/React.createElement("div", {
          className: "Table-header"
        }, /*#__PURE__*/React.createElement(Header, _extends({}, this.state, {
          // updateData={updateData}
          updateSchema: this.updateSchema // updateSortingList={updateSortingList}
          ,
          updateFilterList: this.updateFilterList,
          updateSearchTerm: this.updateSearchTerm,
          showHead: showHead,
          onSelectAll: this.onSelectAll,
          withCheckbox: withCheckbox
        }, headerAttr), headerChildren)), /*#__PURE__*/React.createElement("div", {
          className: "Table-grid"
        }, /*#__PURE__*/React.createElement(Grid, _extends({}, this.state, {
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
  }(React.Component);

  _defineProperty(Table, "defaultProps", {
    showHead: true,
    headerProps: {},
    pageSize: 15
  });

  var List = function List(props) {
    return /*#__PURE__*/React.createElement(Table, _extends({
      showHead: false
    }, props));
  };

  var useState$3 = React.useState,
      useEffect$3 = React.useEffect,
      useRef$1 = React.useRef;
  var Navigation = function Navigation(props) {
    var _classNames3;

    var _useState = useState$3({}),
        _useState2 = _slicedToArray(_useState, 2),
        menuState = _useState2[0],
        setMenuState = _useState2[1];

    var ref = useRef$1(null);

    var _useState3 = useState$3(false),
        _useState4 = _slicedToArray(_useState3, 2),
        scroll = _useState4[0],
        setScroll = _useState4[1];

    var type = props.type,
        _props$data = props.data,
        data = _props$data === void 0 ? [] : _props$data,
        _onClick = props.onClick,
        active = props.active,
        collapsed = props.collapsed,
        onToggle = props.onToggle;

    var isSubMenuActive = function isSubMenuActive(isActive, subMenu) {
      if (!isActive || !subMenu || subMenu && subMenu.length === 0) {
        return false;
      }

      var result = false;

      var _iterator = _createForOfIteratorHelper(subMenu),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;

          if (item.id === active) {
            result = true;
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return result;
    };

    var updateMenuState = function updateMenuState(id) {
      var menuData = _objectSpread2({}, menuState);

      menuData[id] = !menuData[id];
      setMenuState(menuData);
    };

    useEffect$3(function () {
      if (props.data && props.data.length > 0) {
        props.data.filter(function (menu) {
          return menu.subMenu && menu.subMenu.length > 0;
        }).forEach(function (menu) {
          if (isSubMenuActive(active, menu.subMenu)) {
            updateMenuState(menu.id);
          }
        });
      }

      var scrollHeight = ref && ref.current ? ref.current.scrollHeight : 0;
      var clientHeight = ref && ref.current ? ref.current.clientHeight : 0;

      if (scrollHeight > clientHeight) {
        setScroll(true);
      }
    }, [props.data, collapsed, ref]);
    var classes = classNames(_defineProperty({
      Navigation: true
    }, "Navigation-".concat(type), type));
    var footerClasses = classNames(_defineProperty({
      'Navigation-vertical-footer': true
    }, 'Navigation-vertical-footer--border', scroll));
    var wrapperClasses = classNames((_classNames3 = {
      Navigation: true
    }, _defineProperty(_classNames3, "Navigation-wrapper-".concat(type), type), _defineProperty(_classNames3, 'Navigation--collapsed', collapsed), _classNames3));

    var truncateName = function truncateName(name) {
      var limit = 25;
      return name.length > 25 ? name.slice(0, limit).concat('...') : name;
    };

    var getHorizontalMenu = function getHorizontalMenu(menuData) {
      var list = menuData.map(function (item, index) {
        var menuClasses = classNames(_defineProperty({
          'Navigation-horizontal-menu': true
        }, 'Navigation-horizontal-menu--active', active === item.id));
        return /*#__PURE__*/React.createElement("div", {
          key: index,
          className: menuClasses,
          onClick: function onClick() {
            return !item.disabled && _onClick && _onClick(item.id);
          }
        }, item.icon && /*#__PURE__*/React.createElement(Icon, {
          name: item.icon,
          size: 16,
          appearance: item.disabled ? 'disabled' : 'default'
        }), /*#__PURE__*/React.createElement(Text, {
          appearance: item.disabled ? 'subtle' : 'default'
        }, truncateName(item.name)));
      });
      return list;
    };

    var getverticalMenu = function getverticalMenu() {
      var list = data.map(function (item, index) {
        var _classNames5;

        var menuClasses = classNames((_classNames5 = {
          'Navigation-vertical-menu-wrapper': true
        }, _defineProperty(_classNames5, 'Navigation-vertical-menu--active', active === item.id || collapsed && item.subMenu && isSubMenuActive(active, item.subMenu)), _defineProperty(_classNames5, 'Navigation-vertical-menu-collapsed--active', active === item.id && collapsed || collapsed && item.subMenu && isSubMenuActive(active, item.subMenu)), _classNames5));
        return /*#__PURE__*/React.createElement("div", {
          className: "".concat(collapsed ? 'm-3' : 'mt-3 mb-3'),
          key: index
        }, /*#__PURE__*/React.createElement("div", {
          className: menuClasses
        }, /*#__PURE__*/React.createElement("div", {
          className: "Navigation-vertical-menu ".concat(collapsed ? 'Navigation-vertical-menu--collapsed' : ''),
          onClick: function onClick() {
            return !item.disabled && _onClick && _onClick(item.id);
          }
        }, item.icon && /*#__PURE__*/React.createElement(Icon, {
          name: item.icon,
          size: 16,
          appearance: item.disabled ? 'disabled' : 'default'
        }), !collapsed && /*#__PURE__*/React.createElement(Text, {
          appearance: item.disabled ? 'subtle' : 'default'
        }, truncateName(item.name))), !collapsed && /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer'
          }
        }, item.subMenu && item.subMenu.length > 0 && /*#__PURE__*/React.createElement(Icon, {
          onClick: function onClick() {
            return updateMenuState(item.id);
          },
          name: menuState[item.id] ? 'keyboard_arrow_up' : 'keyboard_arrow_down',
          size: 16,
          appearance: item.disabled ? 'disabled' : 'default'
        }))), menuState[item.id] && item.subMenu && !collapsed && item.subMenu.map(function (menu, ind) {
          return /*#__PURE__*/React.createElement("div", {
            className: "Navigation-vertical-menu Navigation-vertical-submenu ".concat(collapsed ? 'Navigation-vertical-menu--collapsed' : '', " ").concat(menu.id === active ? 'Navigation-vertical-menu--active' : ''),
            key: ind
          }, /*#__PURE__*/React.createElement(Text, {
            appearance: menu.disabled ? 'subtle' : 'default'
          }, truncateName(menu.name)));
        }));
      });
      return list;
    };

    var menus = type === 'horizontal' ? getHorizontalMenu(data) : getverticalMenu();
    return /*#__PURE__*/React.createElement("div", {
      className: wrapperClasses
    }, /*#__PURE__*/React.createElement("div", {
      className: classes,
      ref: ref
    }, menus), type === 'vertical' && /*#__PURE__*/React.createElement("div", {
      className: footerClasses
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "menu_open",
      size: 16,
      onClick: function onClick() {
        return onToggle && onToggle(!collapsed);
      }
    })));
  };
  Navigation.defaultProps = {
    type: 'horizontal',
    onClick: function onClick() {
      return null;
    },
    onToggle: function onToggle() {
      return null;
    },
    collapsed: false
  };

  exports.Avatar = Avatar;
  exports.Backdrop = Backdrop;
  exports.Badge = Badge;
  exports.Breadcrumb = Breadcrumb;
  exports.BreadcrumbsWrapper = BreadcrumbsWrapper;
  exports.Button = Button;
  exports.Card = Card;
  exports.Checkbox = Checkbox;
  exports.Column = Column;
  exports.DatePicker = DatePicker;
  exports.Dialog = Dialog;
  exports.DonutChart = DonutChart;
  exports.Dropdown = Dropdown;
  exports.Grid = Grid;
  exports.Heading = Heading;
  exports.Icon = Icon;
  exports.Input = Input;
  exports.Label = Label;
  exports.Legend = Legend;
  exports.Link = Link;
  exports.List = List;
  exports.Message = Message;
  exports.Modal = Modal;
  exports.ModalBody = ModalBody;
  exports.ModalDescription = ModalDescription;
  exports.ModalFooter = ModalFooter;
  exports.ModalHeader = ModalHeader;
  exports.Navigation = Navigation;
  exports.OutsideClick = OutsideClick;
  exports.Pagination = Pagination;
  exports.Paragraph = Paragraph;
  exports.Placeholder = Placeholder;
  exports.PlaceholderParagraph = PlaceholderParagraph;
  exports.Popover = Popover;
  exports.ProgressBar = ProgressBar;
  exports.ProgressRing = ProgressRing;
  exports.Radio = Radio;
  exports.RangePicker = RangePicker;
  exports.Row = Row;
  exports.Spinner = Spinner;
  exports.StatusHints = StatusHints;
  exports.Subheading = Subheading;
  exports.Switch = Switch;
  exports.Tab = Tab;
  exports.Table = Table;
  exports.TabsWrapper = TabsWrapper;
  exports.Text = Text;
  exports.Toast = Toast;
  exports.Tooltip = Tooltip;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
