
  /**
   * Generated on: 1650459533467 
   *      Package: @innovaccer/design-system
   *      Version: v3.0.0-4
   *      License: MIT
   *         Docs: https://innovaccer.github.io/design-system
   */

    
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('classnames'), require('react-dom'), require('react-popper')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'classnames', 'react-dom', 'react-popper'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.inno = {}, global.React, global.classNames, global.ReactDOM, global.ReactPopper));
})(this, (function (exports, React, classNames, ReactDOM, reactPopper) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var React__namespace = /*#__PURE__*/_interopNamespace(React);
    var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);
    var ReactDOM__namespace = /*#__PURE__*/_interopNamespace(ReactDOM);

    var colorToHex = function colorToHex(color) {
      return getComputedStyle(document.documentElement).getPropertyValue("--".concat(color));
    };

    var css = /*#__PURE__*/Object.freeze({
        __proto__: null,
        colorToHex: colorToHex
    });

    var index = /*#__PURE__*/Object.freeze({
        __proto__: null,
        css: css
    });

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    var extractBaseProps = function extractBaseProps(props) {
      var baseProps = ['className', 'data-test'];
      var basePropsObj = baseProps.reduce(function (acc, curr) {
        var _a;

        return props[curr] ? __assign(__assign({}, acc), (_a = {}, _a[curr] = props[curr], _a)) : __assign({}, acc);
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

    var Avatar = function Avatar(props) {
      var _a, _b, _c;

      var size = props.size,
          className = props.className,
          appearance = props.appearance,
          icon = props.icon,
          text = props.text,
          tooltip = props.tooltip,
          image = props.image,
          rest = __rest(props, ["size", "className", "appearance", "icon", "text", "tooltip", "image"]);

      var _d = React__namespace.useState(false),
          isValidImage = _d[0],
          setValidImage = _d[1];

      React__namespace.useEffect(function () {
        return checkIfImageExists((image === null || image === void 0 ? void 0 : image.src) ? image.src : '', setValidImage);
      }, [image]);
      var baseProps = extractBaseProps(props);
      var defaultAppearance = 'secondary';
      var colors = ['accent4', 'primary', 'accent3', 'alert', 'accent2', 'warning', 'accent1', 'success'];
      var avatarAppearance = appearance || text && colors[(text.charCodeAt(0) + (text.charCodeAt(1) || 0)) % 8] || defaultAppearance;
      var classes = classNames__default["default"]((_a = {
        Avatar: true
      }, _a["Avatar--".concat(size)] = size, _a["Avatar--".concat(avatarAppearance)] = avatarAppearance, _a['Avatar--disabled'] = !text || !(image === null || image === void 0 ? void 0 : image.src) || !icon, _a['overflow-hidden'] = !text, _a), className);
      var contentClass = classNames__default["default"]((_b = {}, _b["Avatar-content--".concat(size)] = size, _b["Avatar-content--".concat(avatarAppearance)] = avatarAppearance, _b));
      var iconClass = classNames__default["default"]((_c = {}, _c["Avatar-content--".concat(avatarAppearance)] = avatarAppearance, _c));
      var imageDimensions = {
        width: "".concat(size === 'regular' ? 32 : 24, "px"),
        height: "".concat(size === 'regular' ? 32 : 24, "px")
      };
      return /*#__PURE__*/React__namespace.createElement("span", __assign({
        title: tooltip,
        "data-test": "DesignSystem-Avatar"
      }, baseProps, rest, {
        className: classes
      }), text && /*#__PURE__*/React__namespace.createElement(Text, {
        weight: "medium",
        appearance: 'white',
        className: contentClass
      }, text), icon && /*#__PURE__*/React__namespace.createElement(Icon, {
        "data-test": "DesignSystem-Avatar--Icon",
        name: icon,
        size: size === 'regular' ? 16 : 12,
        appearance: 'white',
        className: iconClass
      }), image && isValidImage ? /*#__PURE__*/React__namespace.createElement("img", __assign({
        "data-test": "DesignSystem-Avatar--Image",
        src: image === null || image === void 0 ? void 0 : image.src,
        alt: image.altText
      }, imageDimensions)) : image === null || image === void 0 ? void 0 : image.altText.charAt(0), !text && !isValidImage && !(image === null || image === void 0 ? void 0 : image.altText) && !icon && /*#__PURE__*/React__namespace.createElement(Icon, {
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

    var GenericText = function GenericText(_a) {
      var children = _a.children,
          _b = _a.componentType,
          componentType = _b === void 0 ? 'span' : _b,
          className = _a.className,
          props = __rest(_a, ["children", "componentType", "className"]);

      return /*#__PURE__*/React__namespace.createElement(componentType, __assign(__assign({}, props), {
        className: className
      }), children);
    };

    var Text = function Text(props) {
      var _a;

      var appearance = props.appearance,
          size = props.size,
          children = props.children,
          weight = props.weight,
          small = props.small,
          className = props.className,
          rest = __rest(props, ["appearance", "size", "children", "weight", "small", "className"]);

      var classes = classNames__default["default"]((_a = {
        Text: true
      }, _a["Text--".concat(appearance)] = appearance, _a["Text--".concat(weight)] = weight, _a["Text--".concat(size)] = size, _a['Text--small'] = size === 'small' || small, _a), className);
      return /*#__PURE__*/React__namespace.createElement(GenericText, __assign({
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

    var allowed = {
      button: new Set(['Enter', 'Space', 'Spacebar', ' ']),
      link: new Set(['Enter']),
      checkbox: new Set([]),
      radio: new Set([])
    };

    var isKeyboardInteractionAllowed = function isKeyboardInteractionAllowed(role, key) {
      if (!allowed[role]) {
        return false;
      }

      var allowedKeys = allowed[role];
      return allowedKeys.has(key);
    };

    var useAccessibilityProps = function useAccessibilityProps(_a) {
      var onClick = _a.onClick,
          _onKeyDown = _a.onKeyDown,
          _b = _a.role,
          role = _b === void 0 ? 'button' : _b,
          rest = __rest(_a, ["onClick", "onKeyDown", "role"]);

      return __assign({}, onClick ? {
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
      var _a;

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
      var iconClass = classNames__default["default"]((_a = {}, _a['material-icons'] = true, _a["material-icons-".concat(mapper(type))] = type && type !== 'filled', _a['Icon'] = true, _a["Icon--".concat(color)] = appearance, _a["".concat(className)] = className, _a));
      var styles = {
        fontSize: "".concat(size, "px"),
        width: "".concat(size, "px")
      };

      if (children && /*#__PURE__*/React__namespace.isValidElement(children)) {
        return /*#__PURE__*/React__namespace.createElement("span", __assign({}, baseProps, {
          className: className
        }), children);
      }

      return /*#__PURE__*/React__namespace.createElement("i", __assign({}, baseProps, {
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
      var _a;

      var appearance = props.appearance,
          children = props.children,
          subtle = props.subtle,
          className = props.className,
          ariaLabel = props.ariaLabel;
      var baseProps = extractBaseProps(props);
      var classes = classNames__default["default"]((_a = {
        Pills: true
      }, _a["Badge--".concat(appearance)] = appearance && !subtle, _a["Badge--subtle-".concat(appearance)] = subtle, _a), className);
      return /*#__PURE__*/React__namespace.createElement("span", __assign({
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
      var _a;

      var appearance = props.appearance,
          children = props.children,
          subtle = props.subtle,
          className = props.className,
          ariaLabel = props.ariaLabel;
      var baseProps = extractBaseProps(props);
      var classes = classNames__default["default"]((_a = {
        Badge: true
      }, _a["Badge--".concat(appearance)] = appearance && !subtle, _a["Badge--subtle-".concat(appearance)] = subtle, _a), className);
      return /*#__PURE__*/React__namespace.createElement("span", __assign({
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

    var sizeMapping = {
      tiny: 12,
      regular: 16,
      large: 20
    };
    var ButtonElement = /*#__PURE__*/React__namespace.forwardRef(function (props, ref) {
      var _a, _b;

      var _c = props.size,
          size = _c === void 0 ? 'regular' : _c,
          _d = props.appearance,
          appearance = _d === void 0 ? 'basic' : _d,
          _e = props.tabIndex,
          tabIndex = _e === void 0 ? 0 : _e,
          type = props.type,
          children = props.children,
          iconOptions = props.iconOptions,
          expanded = props.expanded,
          selected = props.selected,
          loading = props.loading,
          disabled = props.disabled,
          className = props.className,
          rest = __rest(props, ["size", "appearance", "tabIndex", "type", "children", "iconOptions", "expanded", "selected", "loading", "disabled", "className"]);

      var iconAlignment = (iconOptions === null || iconOptions === void 0 ? void 0 : iconOptions.align) || 'left';
      var buttonClass = classNames__default["default"]((_a = {}, _a['Button'] = true, _a['Button--expanded'] = expanded, _a["Button--".concat(size)] = size, _a["Button--".concat(size, "Square")] = !children, _a["Button--".concat(appearance)] = appearance, _a['Button--selected'] = selected && (appearance === 'basic' || appearance === 'transparent'), _a["Button--iconAlign-".concat(iconAlignment)] = children && iconAlignment, _a["".concat(className)] = className, _a));
      var iconClass = classNames__default["default"]((_b = {}, _b['Button-icon'] = true, _b["Button-icon--".concat(iconAlignment)] = children && iconAlignment, _b));
      return /*#__PURE__*/React__namespace.createElement("button", __assign({
        "data-test": "DesignSystem-Button",
        ref: ref,
        type: type,
        className: buttonClass,
        disabled: disabled || loading,
        tabIndex: tabIndex
      }, rest), loading ? /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement(Spinner, {
        size: "small",
        appearance: appearance === 'basic' || appearance === 'transparent' ? 'secondary' : 'white',
        "data-test": "DesignSystem-Button--Spinner",
        className: "Button-spinner"
      }), /*#__PURE__*/React__namespace.createElement(Text, {
        className: "Button-text Button-text--hidden"
      }, children || '')) : /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, iconOptions && (iconOptions === null || iconOptions === void 0 ? void 0 : iconOptions.name) && /*#__PURE__*/React__namespace.createElement("div", {
        className: iconClass
      }, /*#__PURE__*/React__namespace.createElement(Icon, {
        "data-test": "DesignSystem-Button--Icon",
        name: iconOptions === null || iconOptions === void 0 ? void 0 : iconOptions.name,
        appearance: disabled ? 'disabled' : appearance === 'basic' || appearance === 'transparent' ? selected ? 'info' : 'default' : 'white',
        size: (iconOptions === null || iconOptions === void 0 ? void 0 : iconOptions.isLarge) && !children ? sizeMapping[size] + 4 : sizeMapping[size]
      })), children));
    });
    ButtonElement.displayName = '';
    var Button = /*#__PURE__*/React__namespace.forwardRef(function (props, ref) {
      var iconOptions = props.iconOptions,
          children = props.children;
      return (iconOptions === null || iconOptions === void 0 ? void 0 : iconOptions.name) && (iconOptions === null || iconOptions === void 0 ? void 0 : iconOptions.tooltip) && !children ? /*#__PURE__*/React__namespace.createElement(Tooltip, {
        tooltip: iconOptions === null || iconOptions === void 0 ? void 0 : iconOptions.tooltip
      }, /*#__PURE__*/React__namespace.createElement(ButtonElement, __assign({}, props, {
        ref: ref
      }))) : /*#__PURE__*/React__namespace.createElement(ButtonElement, __assign({}, props, {
        ref: ref
      }));
    });
    Button.displayName = 'Button';

    var Spinner = function Spinner(props) {
      var _a, _b;

      var appearance = props.appearance,
          size = props.size,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var wrapperClasses = classNames__default["default"]((_a = {
        Spinner: true
      }, _a["Spinner--".concat(size)] = size, _a), className);
      var circleClasses = classNames__default["default"]((_b = {
        Circle: true
      }, _b["Circle--".concat(appearance)] = appearance, _b));
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
      return /*#__PURE__*/React__namespace.createElement("svg", __assign({}, baseProps, {
        className: wrapperClasses
      }, svgProps), /*#__PURE__*/React__namespace.createElement("circle", __assign({
        className: circleClasses
      }, circleProps)));
    };
    Spinner.displayName = 'Spinner';
    Spinner.defaultProps = {
      appearance: 'primary',
      size: 'medium'
    };

    var PopperWrapper = function (_super) {
      __extends(PopperWrapper, _super);

      function PopperWrapper(props) {
        var _this = _super.call(this, props) || this;

        _this.togglePopper = function (type, newValue) {
          var _a = _this.props,
              open = _a.open,
              onToggle = _a.onToggle;
          onToggle(newValue === undefined ? !open : newValue, type);
        };

        _this.doesEventContainsElement = function (event, ref) {
          var el = ref.current;
          return el && el.contains(event.target);
        };

        _this.getUpdatedStyle = function (oldStyle, placement, offset) {
          var style = _this.props.style;

          var newStyle = __assign(__assign({}, style), oldStyle);

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
        };

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
        _this.positionOffset = {
          'auto-start': 'top left',
          auto: 'top',
          'auto-end': 'top right',
          'top-start': 'bottom left',
          top: 'bottom',
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
        _this.triggerRef = /*#__PURE__*/React__namespace.createRef();
        _this.popupRef = /*#__PURE__*/React__namespace.createRef();
        _this.getPopperChildren = _this.getPopperChildren.bind(_this);
        _this.mouseMoveHandler = _this.mouseMoveHandler.bind(_this);
        _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
        _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
        _this.boundaryScrollHandler = _this.boundaryScrollHandler.bind(_this);
        return _this;
      }

      PopperWrapper.prototype.componentDidMount = function () {
        this.addBoundaryScrollHandler();
      };

      PopperWrapper.prototype.componentDidUpdate = function (prevProps) {
        var _this = this;

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
          } else {
            setTimeout(function () {
              _this.setState({
                isOpen: false
              });
            }, 120);
          }
        }
      };

      PopperWrapper.prototype.componentWillUnmount = function () {
        this.removeBoundaryScrollHandler();
      };

      PopperWrapper.prototype.boundaryScrollHandler = function () {
        var _a = this.props,
            open = _a.open,
            on = _a.on,
            closeOnScroll = _a.closeOnScroll;

        if (on === 'click' && closeOnScroll) {
          if (open) {
            if (!this._throttleWait) {
              this.togglePopper('onScroll', false);
              this._throttleWait = true;
            }
          }
        }
      };

      PopperWrapper.prototype.addBoundaryScrollHandler = function () {
        if (this.props.boundaryElement) {
          this.props.boundaryElement.addEventListener('scroll', this.boundaryScrollHandler);
        }
      };

      PopperWrapper.prototype.removeBoundaryScrollHandler = function () {
        if (this.props.boundaryElement) {
          this.props.boundaryElement.removeEventListener('scroll', this.boundaryScrollHandler);
        }
      };

      PopperWrapper.prototype.mouseMoveHandler = function () {
        var _this = this;

        if (this._timer) clearTimeout(this._timer);
        this._timer = window.setTimeout(function () {
          var onToggle = _this.props.onToggle;
          onToggle(false, 'mouseLeave');
        }, this.hoverableDelay);
      };

      PopperWrapper.prototype.handleMouseEnter = function () {
        var on = this.props.on;

        if (on === 'hover') {
          if (this._timer) clearTimeout(this._timer);
          var onToggle = this.props.onToggle;
          onToggle(true, 'mouseEnter');
        }
      };

      PopperWrapper.prototype.handleMouseLeave = function () {
        var on = this.props.on;

        if (on === 'hover') {
          var _a = this.props,
              hoverable = _a.hoverable,
              onToggle = _a.onToggle;

          if (hoverable) {
            this.mouseMoveHandler();
          } else {
            onToggle(false, 'mouseLeave');
          }
        }
      };

      PopperWrapper.prototype.getZIndexForLayer = function (node) {
        if (node === null) {
          return;
        }

        var layerNode = node.closest('[data-layer]') || document.body;
        var zIndex = layerNode === document.body ? 'auto' : parseInt(window.getComputedStyle(layerNode).zIndex || '0', 10);
        return zIndex === 'auto' || isNaN(zIndex) ? undefined : zIndex;
      };

      PopperWrapper.prototype.getTriggerElement = function (ref) {
        var _this = this;

        var _a = this.props,
            trigger = _a.trigger,
            on = _a.on,
            triggerClass = _a.triggerClass;
        var options = on === 'hover' ? {
          ref: ref,
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave
        } : {
          ref: ref,
          onClick: function onClick(ev) {
            ev.stopPropagation();

            _this.togglePopper('onClick');
          }
        };
        var classes = classNames__default["default"]('PopperWrapper-trigger', triggerClass);

        var onOutsideClickHandler = function onOutsideClickHandler(event) {
          var _a = _this.props,
              open = _a.open,
              closeOnBackdropClick = _a.closeOnBackdropClick;

          if (open && closeOnBackdropClick) {
            if (!_this.doesEventContainsElement(event, _this.popupRef)) {
              _this.togglePopper('outsideClick');
            }
          }
        };

        return /*#__PURE__*/React__namespace.createElement(OutsideClick, __assign({
          className: classes,
          onOutsideClick: onOutsideClickHandler
        }, options), trigger);
      };

      PopperWrapper.prototype.getPopperChildren = function (_a) {
        var _b;

        var _c;

        var ref = _a.ref,
            style = _a.style,
            placement = _a.placement,
            outOfBoundaries = _a.outOfBoundaries;
        var _d = this.props,
            offset = _d.offset,
            children = _d.children,
            open = _d.open,
            animationClass = _d.animationClass;
        var _e = this.state,
            zIndex = _e.zIndex,
            animationKeyframe = _e.animationKeyframe,
            uniqueKey = _e.uniqueKey;
        var newStyle = offset ? this.getUpdatedStyle(style, placement, offset) : style;

        var childrenStyles = __assign(__assign({}, newStyle), {
          zIndex: zIndex
        });

        var classes = '';

        if (!animationClass) {
          var transformStyles = (_c = this.popupRef.current) === null || _c === void 0 ? void 0 : _c.style.getPropertyValue('transform');

          if (transformStyles && !animationKeyframe) {
            var uniqueKey_1 = Math.random().toString(36).substring(2, 6);
            var popperAnimation = "\n        @keyframes popper-open-".concat(uniqueKey_1, " {\n          from { \n            transform: ").concat(transformStyles, " scaleY(0.5);\n            opacity: 0.5;\n          }\n          to {\n            transform: ").concat(transformStyles, " scaleY(1);\n            opacity: 1\n          }\n        }\n        @keyframes popper-close-").concat(uniqueKey_1, " {\n          from {\n            transform: ").concat(transformStyles, " scaleY(1);\n            opacity: 1\n          }\n          to {\n            transform: ").concat(transformStyles, " scaleY(0);\n            opacity: 0.5\n          }\n        }");
            this.setState({
              animationKeyframe: popperAnimation,
              uniqueKey: uniqueKey_1
            });
          }

          var popperAnimationStyles = {
            transformOrigin: this.positionOffset[this.props.placement],
            animation: open ? "popper-open-".concat(uniqueKey, " 120ms cubic-bezier(0, 0, 0.38, 0.9)") : "popper-close-".concat(uniqueKey, " 120ms cubic-bezier(0.2, 0, 1, 0.9)")
          };
          childrenStyles = __assign(__assign({}, childrenStyles), popperAnimationStyles);
        } else {
          classes = classNames__default["default"]((_b = {}, _b["".concat(animationClass.open)] = open, _b["".concat(animationClass.close)] = !open, _b), children.props.className);
        }

        var childProps = {
          ref: ref,
          style: childrenStyles,
          'data-placement': placement,
          'data-hide': outOfBoundaries,
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave
        };
        var element = /*#__PURE__*/React__namespace.cloneElement(children, animationClass ? __assign(__assign({}, childProps), {
          className: classes
        }) : __assign({}, childProps));
        return element;
      };

      PopperWrapper.prototype.render = function () {
        var _this = this;

        var _a = this.props,
            placement = _a.placement,
            appendToBody = _a.appendToBody,
            hide = _a.hide,
            boundaryElement = _a.boundaryElement;
        var _b = this.state,
            animationKeyframe = _b.animationKeyframe,
            isOpen = _b.isOpen;
        return /*#__PURE__*/React__namespace.createElement(reactPopper.Manager, null, /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("style", null, animationKeyframe), /*#__PURE__*/React__namespace.createElement(reactPopper.Reference, {
          innerRef: this.triggerRef
        }, function (_a) {
          var ref = _a.ref;
          return _this.getTriggerElement(ref);
        }), isOpen && appendToBody && /*#__PURE__*/ReactDOM__namespace.createPortal( /*#__PURE__*/React__namespace.createElement(reactPopper.Popper, {
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
        }, this.getPopperChildren), document.body), isOpen && !appendToBody && /*#__PURE__*/React__namespace.createElement(reactPopper.Popper, {
          placement: placement,
          innerRef: this.popupRef
        }, this.getPopperChildren)));
      };

      PopperWrapper.defaultProps = {
        on: 'click',
        offset: 'medium',
        closeOnBackdropClick: true,
        hoverable: true,
        appendToBody: true,
        style: {}
      };
      return PopperWrapper;
    }(React__namespace.Component);

    var propsList = ['appendToBody', 'trigger', 'hoverable', 'on', 'open', 'closeOnBackdropClick', 'offset', 'closeOnScroll'];
    var Popover = function Popover(props) {
      var _a;

      var position = props.position,
          customStyle = props.customStyle,
          dark = props.dark,
          children = props.children,
          onToggle = props.onToggle,
          className = props.className,
          hideOnReferenceEscape = props.hideOnReferenceEscape,
          _b = props.boundaryElement,
          boundaryElement = _b === void 0 ? document.body : _b,
          rest = __rest(props, ["position", "customStyle", "dark", "children", "onToggle", "className", "hideOnReferenceEscape", "boundaryElement"]);

      var _c = React__namespace.useState(!!props.open),
          open = _c[0],
          setOpen = _c[1];

      var _d = React__namespace.useState(false),
          init = _d[0],
          setInit = _d[1];

      React__namespace.useEffect(function () {
        if (props.open !== undefined) setOpen(props.open);
      }, [props.open]);
      var defaultOnToggle = React__namespace.useCallback(function (newOpen) {
        setOpen(newOpen);
      }, []);
      React__namespace.useEffect(function () {
        if (!init) {
          if ('current' in boundaryElement && boundaryElement.current) {
            setInit(true);
          }
        }
      }, [boundaryElement]);
      var classes = classNames__default["default"]((_a = {
        Popover: true
      }, _a['Popover--dark'] = dark, _a), className);
      var PopoverWrapper = /*#__PURE__*/React__namespace.createElement("div", {
        "data-test": "DesignSystem-Popover",
        className: classes,
        "data-layer": true
      }, children);
      return /*#__PURE__*/React__namespace.createElement(PopperWrapper, __assign({}, rest, {
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

    var tooltipPropsList = ['trigger', 'on', 'open', 'offset', 'onToggle', 'dark', 'customStyle', 'closeOnBackdropClick', 'hideOnReferenceEscape', 'closeOnScroll'];
    var Tooltip = function Tooltip(props) {
      var children = props.children,
          tooltip = props.tooltip,
          rest = __rest(props, ["children", "tooltip"]);

      var tooltipWrapper = /*#__PURE__*/React__namespace.createElement("div", {
        className: "Tooltip"
      }, /*#__PURE__*/React__namespace.createElement(Text, {
        className: "Tooltip-text",
        appearance: "white"
      }, tooltip));
      return /*#__PURE__*/React__namespace.createElement(Popover, __assign({
        trigger: children,
        on: 'hover',
        offset: 'medium'
      }, rest), tooltipWrapper);
    };
    Tooltip.defaultProps = Object.assign({}, filterProps(Popover.defaultProps, tooltipPropsList), {
      hoverable: false
    });

    var OutsideClick = /*#__PURE__*/React__namespace.forwardRef(function (props, ref) {
      var _a;

      var children = props.children,
          className = props.className,
          onOutsideClick = props.onOutsideClick,
          rest = __rest(props, ["children", "className", "onOutsideClick"]);

      var innerRef = React__namespace.useRef(null);
      React__namespace.useImperativeHandle(ref, function () {
        return innerRef.current;
      }, [innerRef]);
      React__namespace.useEffect(function () {
        document.addEventListener('click', handleOutsideClick, true);
        return function () {
          document.removeEventListener('click', handleOutsideClick);
        };
      }, []);
      var handleOutsideClick = React__namespace.useCallback(function (event) {
        var element = innerRef;

        if (!event.target || !element.current) {
          return;
        }

        if (!element.current.contains(event.target)) {
          onOutsideClick(event);
        }
      }, []);
      var classes = classNames__default["default"]((_a = {}, _a['OutsideClick'] = true, _a), className);
      return /*#__PURE__*/React__namespace.createElement("div", __assign({
        ref: innerRef
      }, rest, {
        className: classes
      }), children);
    });
    OutsideClick.displayName = 'OutsideClick';

    var version = "3.0.0-4";

    exports.Avatar = Avatar;
    exports.Badge = Badge;
    exports.Button = Button;
    exports.Icon = Icon;
    exports.OutsideClick = OutsideClick;
    exports.Pills = Pills;
    exports.Popover = Popover;
    exports.Spinner = Spinner;
    exports.Text = Text;
    exports.Tooltip = Tooltip;
    exports.Utils = index;
    exports.version = version;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.js.map
