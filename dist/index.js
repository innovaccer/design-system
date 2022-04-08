
  /**
   * Generated on: 1649421259832 
   *      Package: @innovaccer/design-system
   *      Version: v3.0.0-1
   *      License: MIT
   *         Docs: https://innovaccer.github.io/design-system
   */

    
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('classnames')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'classnames'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.inno = {}, global.React, global.classNames));
})(this, (function (exports, React, classNames) { 'use strict';

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

    var version = "3.0.0-1";

    exports.Avatar = Avatar;
    exports.Badge = Badge;
    exports.Icon = Icon;
    exports.Pills = Pills;
    exports.Text = Text;
    exports.Utils = index;
    exports.version = version;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.js.map
