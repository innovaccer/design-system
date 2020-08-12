
  /**
   * Generated on: 1597231903725 
   *      Package: @innovaccer/design-system
   *      Version: v1.1.0-3
   *      License: MIT
   *         Docs: https://innovaccer.github.io/design-system
   */

    
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('classnames'), require('react-dom'), require('react-popper'), require('recharts')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'classnames', 'react-dom', 'react-popper', 'recharts'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.inno = {}, global.React, global.classNames, global.ReactDOM, global.reactPopper, global.recharts));
}(this, (function (exports, React, classNames, ReactDOM, reactPopper, recharts) { 'use strict';

    var React__default = 'default' in React ? React['default'] : React;
    classNames = classNames && Object.prototype.hasOwnProperty.call(classNames, 'default') ? classNames['default'] : classNames;

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
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
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

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }

    var baseProps = ['className', 'data-test'];
    var extractBaseProps = function extractBaseProps(props) {
      var basePropsObj = baseProps.reduce(function (acc, curr) {
        var _a;

        return props[curr] ? __assign(__assign({}, acc), (_a = {}, _a[curr] = props[curr], _a)) : __assign({}, acc);
      }, {});
      return basePropsObj;
    };

    var initialsLength = 2;
    var Avatar = function Avatar(props) {
      var _a;

      var children = props.children,
          firstName = props.firstName,
          lastName = props.lastName,
          className = props.className,
          appearance = props.appearance;
      var baseProps = extractBaseProps(props);
      var initials = children ? children.trim().slice(0, initialsLength) : "" + (firstName ? firstName.trim()[0] : '') + (lastName ? lastName.trim()[0] : '');
      var colors = ['accent4', 'primary', 'accent3', 'alert', 'accent2', 'warning', 'accent1', 'success'];
      var AvatarAppearance = appearance || colors[(initials.charCodeAt(0) + (initials.charCodeAt(1) || 0)) % 8];
      var classes = classNames((_a = {
        Avatar: true
      }, _a["Avatar--" + AvatarAppearance] = AvatarAppearance, _a), className);
      return /*#__PURE__*/React.createElement("span", __assign({}, baseProps, {
        className: classes
      }), /*#__PURE__*/React.createElement(Text, {
        "data-test": "DesignSystem-Avatar",
        weight: "medium",
        appearance: AvatarAppearance === 'warning' ? 'default' : 'white'
      }, initials));
    };
    Avatar.displayName = 'Avatar';

    var useEffect = React.useEffect,
        useState = React.useState;

    var Backdrop = function Backdrop(props) {
      var className = props.className;
      var baseProps = extractBaseProps(props);

      var _a = useState(null),
          savedBodyOverflow = _a[0],
          setBodyOverflow = _a[1];

      var _b = React.useState(props.open),
          open = _b[0],
          setOpen = _b[1];

      var _c = React.useState(props.open),
          animate = _c[0],
          setAnimate = _c[1];

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
      var BackdropElement = /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
        className: classes
      })), document.body);
      return BackdropElement;
    };

    Backdrop.displayName = 'Backdrop';

    var Badge = function Badge(props) {
      var _a;

      var _b = props.appearance,
          appearance = _b === void 0 ? 'secondary' : _b,
          children = props.children,
          subtle = props.subtle,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var classes = classNames((_a = {
        Badge: true
      }, _a["Badge--" + appearance] = appearance && !subtle, _a["Badge--subtle-" + appearance] = subtle, _a), className);
      return /*#__PURE__*/React.createElement("span", __assign({}, baseProps, {
        className: classes
      }), children);
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
    var _isControlled = function _isControlled(selected) {
      return selected !== undefined;
    };
    var _isOpenControlled = function _isOpenControlled(open, selected) {
      return open !== undefined && selected !== undefined;
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

    var Offsets;

    (function (Offsets) {
      Offsets["Small"] = "2px";
      Offsets["Medium"] = "4px";
      Offsets["Large"] = "8px";
    })(Offsets || (Offsets = {}));

    var PopperWrapper = function (_super) {
      __extends(PopperWrapper, _super);

      function PopperWrapper(props) {
        var _this = _super.call(this, props) || this;

        _this.handleMouseLeave = function (event) {
          var _a = _this.props,
              _b = _a.hoverable,
              hoverable = _b === void 0 ? false : _b,
              onToggle = _a.onToggle;

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
        };

        _this.handleMouseEnter = function (event) {
          var _a = _this.props,
              _b = _a.hoverable,
              hoverable = _b === void 0 ? false : _b,
              onToggle = _a.onToggle;

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
        };

        _this.togglePopper = function (type) {
          var _a = _this.props,
              _b = _a.open,
              open = _b === void 0 ? false : _b,
              onToggle = _a.onToggle;
          onToggle(!open, type);
        };

        _this.doesNodeContainClick = function (event) {
          if (!(_this.findDOMNode(_this.popupRef).contains(event.target) || _this.findDOMNode(_this.triggerRef).contains(event.target))) {
            _this.togglePopper('outsideClick');
          }
        };

        _this.getUpdatedStyle = function (oldStyle, placement, offset) {
          if (offset === void 0) {
            offset = 'Medium';
          }

          var _a = _this.props.style,
              style = _a === void 0 ? {} : _a;

          var newStyle = __assign(__assign({}, style), oldStyle);

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
        };

        _this.findDOMNode = function (ref) {
          return ReactDOM.findDOMNode(ref.current);
        };

        _this.state = {
          open: props.open || false,
          mouseLeaveDelay: 50,
          mouseEnterDelay: 0
        };
        _this.triggerRef = /*#__PURE__*/React.createRef();
        _this.popupRef = /*#__PURE__*/React.createRef();
        return _this;
      }

      PopperWrapper.prototype.componentWillUnmount = function () {
        clearTimeout(this._timer);
        document.removeEventListener('mousedown', this.doesNodeContainClick);
      };

      PopperWrapper.prototype.componentDidMount = function () {
        var _a = this.props,
            _b = _a.on,
            on = _b === void 0 ? 'click' : _b,
            _c = _a.closeOnBackdropClick,
            closeOnBackdropClick = _c === void 0 ? true : _c;
        var open = this.props.open;

        if (on === 'click' && open && closeOnBackdropClick) {
          document.addEventListener('mousedown', this.doesNodeContainClick);
        }
      };

      PopperWrapper.prototype.componentDidUpdate = function () {
        var _a = this.props,
            _b = _a.on,
            on = _b === void 0 ? 'click' : _b,
            _c = _a.closeOnBackdropClick,
            closeOnBackdropClick = _c === void 0 ? true : _c;
        var open = this.props.open;

        if (on === 'click' && open && closeOnBackdropClick) {
          document.addEventListener('mousedown', this.doesNodeContainClick);
        } else if (on === 'click' && !open && closeOnBackdropClick) {
          document.removeEventListener('mousedown', this.doesNodeContainClick);
        }
      };

      PopperWrapper.prototype.getTriggerElement = function (trigger, ref, on) {
        var _this = this;

        var options = on === 'hover' ? {
          ref: ref,
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave
        } : {
          ref: ref,
          onClick: function onClick() {
            return _this.togglePopper('onClick');
          }
        };
        var triggerClass = this.props.triggerClass;
        var classes = classNames('PopperWrapper-trigger', triggerClass);
        var element = /*#__PURE__*/React.cloneElement( /*#__PURE__*/React.createElement("span", {
          className: classes
        }, trigger), options);
        return element;
      };

      PopperWrapper.prototype.getChildrenElement = function (children, ref, placement, style) {
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
      };

      PopperWrapper.prototype.render = function () {
        var _this = this;

        var _a = this.props,
            trigger = _a.trigger,
            children = _a.children,
            placement = _a.placement,
            appendToBody = _a.appendToBody,
            _b = _a.on,
            on = _b === void 0 ? 'click' : _b,
            offset = _a.offset;
        var open = this.props.open;
        return /*#__PURE__*/React.createElement(reactPopper.Manager, null, /*#__PURE__*/React.createElement(reactPopper.Reference, {
          innerRef: this.triggerRef
        }, function (_a) {
          var ref = _a.ref;
          return _this.getTriggerElement(trigger, ref, on);
        }), (open || this.state.open) && appendToBody && /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement(reactPopper.Popper, {
          placement: placement,
          innerRef: this.popupRef
        }, function (_a) {
          var ref = _a.ref,
              style = _a.style,
              placement = _a.placement;
          var newStyle = offset ? _this.getUpdatedStyle(style, placement, offset) : style;
          return _this.getChildrenElement(children, ref, placement, newStyle);
        }), document.body), (open || this.state.open) && !appendToBody && /*#__PURE__*/React.createElement(reactPopper.Popper, {
          placement: placement,
          innerRef: this.popupRef
        }, function (_a) {
          var ref = _a.ref,
              style = _a.style,
              placement = _a.placement;
          var newStyle = offset ? _this.getUpdatedStyle(style, placement, offset) : style;
          return _this.getChildrenElement(children, ref, placement, newStyle);
        }));
      };

      return PopperWrapper;
    }(React.Component);

    var colorToHex = function colorToHex(color) {
      return getComputedStyle(document.documentElement).getPropertyValue("--" + color);
    };

    var Popover = function Popover(props) {
      var _a;

      var _b = props.position,
          position = _b === void 0 ? 'bottom' : _b,
          _c = props.closeOnBackdropClick,
          closeOnBackdropClick = _c === void 0 ? true : _c,
          _d = props.appendToBody,
          appendToBody = _d === void 0 ? true : _d,
          _e = props.on,
          on = _e === void 0 ? 'click' : _e,
          _f = props.customStyle,
          customStyle = _f === void 0 ? {} : _f,
          dark = props.dark,
          hoverable = props.hoverable,
          children = props.children,
          trigger = props.trigger,
          triggerClass = props.triggerClass,
          onToggle = props.onToggle,
          className = props.className;

      var _g = React.useState(props.open || false),
          open = _g[0],
          setOpen = _g[1];

      React.useEffect(function () {
        if (onToggle) {
          if (props.open !== undefined) setOpen(props.open);
        }
      }, [props.open]);

      var onToggleFunction = function onToggleFunction(newOpen) {
        setOpen(newOpen);
      };

      var classes = classNames((_a = {
        Popover: true
      }, _a['Popover--dark'] = dark, _a), className);
      var PopoverWrapper = /*#__PURE__*/React.createElement("div", {
        className: classes
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
      return /*#__PURE__*/React.createElement(PopperWrapper, __assign({}, popperOptions, {
        offset: "Large"
      }), PopoverWrapper);
    };
    Popover.displayName = 'Popover';

    var Icon = function Icon(props) {
      var _a;

      var appearance = props.appearance,
          type = props.type,
          className = props.className,
          name = props.name,
          size = props.size,
          onClick = props.onClick;
      var baseProps = extractBaseProps(props);
      var iconClass = classNames((_a = {}, _a['material-icons'] = true, _a['Icon'] = true, _a["Icon--" + appearance] = appearance, _a["" + className] = className, _a));
      var styles = {
        fontSize: size + "px",
        width: size + "px"
      };
      return /*#__PURE__*/React.createElement("i", __assign({}, baseProps, {
        className: iconClass,
        style: styles,
        onClick: onClick
      }), name + "_" + type);
    };
    Icon.defaultProps = {
      appearance: 'default',
      size: 16
    };
    Icon.displayName = 'Icon';

    var DropdownButton = /*#__PURE__*/React.forwardRef(function (props, ref) {
      var _a, _b;

      var _c = props.triggerSize,
          triggerSize = _c === void 0 ? 'regular' : _c,
          _d = props.placeholder,
          placeholder = _d === void 0 ? 'Select' : _d,
          _e = props.menu,
          menu = _e === void 0 ? false : _e,
          children = props.children,
          maxWidth = props.maxWidth,
          icon = props.icon,
          disabled = props.disabled,
          inlineLabel = props.inlineLabel,
          error = props.error,
          rest = __rest(props, ["triggerSize", "placeholder", "menu", "children", "maxWidth", "icon", "disabled", "inlineLabel", "error"]);

      var buttonDisabled = disabled ? 'disabled' : 'default';
      var trimmedPlaceholder = placeholder.trim();
      var value = children ? children : trimmedPlaceholder ? trimmedPlaceholder : 'Select';
      var iconName = !menu ? 'keyboard_arrow_down' : icon ? icon : 'more_horiz';
      var label = inlineLabel && inlineLabel.trim();
      var buttonClass = classNames((_a = {}, _a['Button'] = true, _a['Button--basic'] = true, _a['Button--square'] = !children, _a['DropdownTrigger'] = true, _a['DropdownButton'] = true, _a["DropdownButton--" + triggerSize] = triggerSize, _a['DropdownButton--icon'] = icon, _a['DropdownButton--moreIcon'] = menu, _a['DropdownButton--placeholder'] = !children && !menu, _a['DropdownButton--label'] = label, _a['DropdownButton--error'] = error, _a));
      var labelClass = classNames((_b = {}, _b['DropdownButton-label'] = true, _b));
      return /*#__PURE__*/React.createElement("button", __assign({
        ref: ref,
        value: children,
        className: buttonClass,
        disabled: disabled,
        style: {
          maxWidth: maxWidth ? maxWidth : '100%'
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
      }, value && "" + value)), /*#__PURE__*/React.createElement(Icon, {
        appearance: buttonDisabled,
        name: iconName
      }));
    });
    DropdownButton.displayName = 'DropdownButton';

    var GenericText = function GenericText(_a) {
      var children = _a.children,
          _b = _a.componentType,
          componentType = _b === void 0 ? 'span' : _b,
          className = _a.className,
          props = __rest(_a, ["children", "componentType", "className"]);

      return /*#__PURE__*/React.createElement(componentType, __assign(__assign({}, props), {
        className: className
      }), children);
    };

    var Text = function Text(props) {
      var _a;

      var _b = props.appearance,
          appearance = _b === void 0 ? 'default' : _b,
          children = props.children,
          weight = props.weight,
          small = props.small,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var classes = classNames((_a = {
        Text: true
      }, _a["Text--" + appearance] = appearance, _a["Text--" + weight] = weight, _a['Text--small'] = small, _a), className);
      return /*#__PURE__*/React.createElement(GenericText, __assign({}, baseProps, {
        className: classes,
        componentType: "span"
      }), children);
    };
    Text.displayName = 'Text';

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

    var Checkbox = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
      var _a, _b, _c, _d, _e;

      var _f = props.size,
          size = _f === void 0 ? 'regular' : _f,
          _g = props.tabIndex,
          tabIndex = _g === void 0 ? 0 : _g,
          defaultChecked = props.defaultChecked,
          indeterminate = props.indeterminate,
          label = props.label,
          disabled = props.disabled,
          onChange = props.onChange,
          name = props.name,
          value = props.value,
          className = props.className;
      var ref = React.useRef(null);
      var baseProps = extractBaseProps(props);
      React.useImperativeHandle(forwardedRef, function () {
        return ref.current;
      });

      var _h = React.useState(props.checked === undefined ? defaultChecked : props.checked),
          checked = _h[0],
          setChecked = _h[1];

      React.useEffect(function () {
        setIndeterminate(indeterminate);
      }, [indeterminate]);
      React.useEffect(function () {
        if (props.checked !== undefined) {
          setChecked(props.checked);
        }
      }, [props.checked]);
      var CheckboxClass = classNames((_a = {}, _a['Checkbox'] = true, _a['Checkbox--disabled'] = disabled, _a["Checkbox--" + size] = size, _a), className);
      var CheckboxOuterWrapper = classNames((_b = {}, _b['Checkbox-outerWrapper'] = true, _b));
      var CheckboxTextClass = classNames((_c = {}, _c['Checkbox-label'] = true, _c["Checkbox-label--" + size] = size, _c));
      var CheckboxInputWrapper = classNames((_d = {}, _d['Checkbox-input'] = true, _d['Checkbox-input--checked'] = checked, _d['Checkbox-input--indeterminate'] = props.indeterminate, _d));
      var CheckboxWrapper = classNames((_e = {}, _e['Checkbox-wrapper'] = true, _e["Checkbox-wrapper--" + size] = size, _e));

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

      var id = name + "-" + label + "-" + uidGenerator();
      var IconName = indeterminate ? 'remove' : checked ? 'check' : '';
      var IconSize = size === 'tiny' ? 8 : 16;
      return /*#__PURE__*/React.createElement("div", {
        className: CheckboxClass
      }, /*#__PURE__*/React.createElement("div", {
        className: CheckboxOuterWrapper
      }, /*#__PURE__*/React.createElement("input", __assign({}, baseProps, {
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

      var onChangeHandler = function onChangeHandler(event) {
        if (onChange) onChange(event);
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
      var _a;

      var className = props.className,
          textClassName = props.textClassName,
          selected = props.selected,
          onClick = props.onClick,
          optionData = props.optionData,
          updateActiveOption = props.updateActiveOption,
          index = props.index,
          menu = props.menu;
      var label = optionData.label,
          icon = optionData.icon;
      var OptionClass = classNames((_a = {}, _a["" + className] = true, _a['Option--icon'] = icon, _a));

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
      }, icon && /*#__PURE__*/React.createElement(Icon, {
        className: "Option-icon mr-4",
        name: icon,
        appearance: selected && !menu ? 'white' : 'default'
      }), /*#__PURE__*/React.createElement("div", {
        className: 'Option-label'
      }, /*#__PURE__*/React.createElement("div", {
        className: textClassName
      }, label)));
    };

    var IconWithMetaOption = function IconWithMetaOption(props) {
      var _a;

      var className = props.className,
          textClassName = props.textClassName,
          selected = props.selected,
          onClick = props.onClick,
          optionData = props.optionData,
          updateActiveOption = props.updateActiveOption,
          index = props.index,
          menu = props.menu;
      var label = optionData.label,
          icon = optionData.icon,
          subInfo = optionData.subInfo;
      var OptionClass = classNames((_a = {}, _a["" + className] = true, _a['Option--icon'] = icon, _a));

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
      }, icon && /*#__PURE__*/React.createElement(Icon, {
        className: "Option-icon mr-4",
        name: icon,
        appearance: selected && !menu ? 'white' : 'default'
      }), /*#__PURE__*/React.createElement("div", {
        className: 'Option-label'
      }, /*#__PURE__*/React.createElement("div", {
        className: textClassName
      }, label), subInfo && /*#__PURE__*/React.createElement("div", {
        className: 'Option-subinfo'
      }, subInfo)));
    };

    var _a;
    var OptionTypeMapping = (_a = {}, _a['DEFAULT'] = DefaultOption, _a['WITH_ICON'] = IconOption, _a['WITH_META'] = MetaOption, _a['WITH_CHECKBOX'] = CheckboxOption, _a['ICON_WITH_META'] = IconWithMetaOption, _a);

    var Option = function Option(props) {
      var _a, _b;

      var optionData = props.optionData,
          selected = props.selected,
          onClick = props.onClick,
          updateActiveOption = props.updateActiveOption,
          onChange = props.onChange,
          active = props.active,
          index = props.index,
          checkboxes = props.checkboxes,
          menu = props.menu;
      var _c = (optionData.optionType ? optionData : props).optionType,
          optionType = _c === void 0 ? 'DEFAULT' : _c;
      var className = classNames((_a = {}, _a['Option'] = true, _a['Option-wrapper'] = true, _a['Option--withCheckbox'] = checkboxes, _a['Option--active'] = active, _a['Option--selected'] = selected && !checkboxes && !menu, _a));
      var textClassName = classNames((_b = {}, _b['Option-text'] = true, _b['Option-text--wrap'] = !props.truncateOption, _b));

      var onUpdateActiveOption = function onUpdateActiveOption() {
        if (updateActiveOption) updateActiveOption(index);
      };

      if (props.optionRenderer) {
        return /*#__PURE__*/React.createElement("div", __assign({
          className: "Option-wrapper",
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
        optionData: optionData,
        menu: menu,
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
      var _a, _b;

      var _c = props.appearance,
          appearance = _c === void 0 ? 'primary' : _c,
          _d = props.size,
          size = _d === void 0 ? 'medium' : _d,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var wrapperClasses = classNames((_a = {
        Spinner: true
      }, _a["Spinner--" + size] = size, _a), className);
      var circleClasses = classNames((_b = {
        Circle: true
      }, _b["Circle--" + appearance] = appearance, _b));
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
      return /*#__PURE__*/React.createElement("svg", __assign({}, baseProps, {
        className: wrapperClasses
      }, svgProps), /*#__PURE__*/React.createElement("circle", __assign({
        className: circleClasses
      }, circleProps)));
    };
    Spinner.displayName = 'Spinner';

    var sizeMapping = {
      tiny: 12,
      regular: 16,
      large: 20
    };
    var Button = /*#__PURE__*/React.forwardRef(function (props, ref) {
      var _a, _b, _c;

      var _d = props.appearance,
          appearance = _d === void 0 ? 'basic' : _d,
          _e = props.size,
          size = _e === void 0 ? 'regular' : _e,
          _f = props.iconAlign,
          iconAlign = _f === void 0 ? 'left' : _f,
          _g = props.tabIndex,
          tabIndex = _g === void 0 ? 0 : _g,
          children = props.children,
          icon = props.icon,
          expanded = props.expanded,
          loading = props.loading,
          disabled = props.disabled,
          className = props.className,
          rest = __rest(props, ["appearance", "size", "iconAlign", "tabIndex", "children", "icon", "expanded", "loading", "disabled", "className"]);

      var buttonClass = classNames((_a = {}, _a['Button'] = true, _a['Button--expanded'] = expanded, _a["Button--" + size] = size, _a['Button--square'] = !children, _a["Button--" + appearance] = appearance, _a["Button--iconAlign-" + iconAlign] = children && iconAlign, _a["" + className] = className, _a));
      var iconClass = classNames((_b = {}, _b['Button-icon'] = true, _b["Button-icon--" + iconAlign] = children && iconAlign, _b));
      var spinnerClass = classNames((_c = {}, _c['Button-spinner'] = true, _c["Button-spinner--" + iconAlign] = children && iconAlign, _c));
      return /*#__PURE__*/React.createElement("button", __assign({
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
      })), children);
    });
    Button.displayName = 'Button';

    var sizeMapping$1 = {
      tiny: 12,
      regular: 16,
      large: 20
    };
    var Input = /*#__PURE__*/React.forwardRef(function (props, ref) {
      var _a, _b, _c, _d;

      var _e = props.size,
          size = _e === void 0 ? 'regular' : _e,
          _f = props.type,
          type = _f === void 0 ? 'text' : _f,
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
          actionIcon = props.actionIcon,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var classes = classNames((_a = {}, _a['Input'] = true, _a["Input--" + size] = size, _a['Input--disabled'] = disabled, _a['Input--error'] = error, _a), className);
      var inputClass = classNames((_b = {}, _b['Input-input'] = true, _b["Input-input--" + size] = size, _b));
      var leftIconClass = classNames((_c = {}, _c['Input-icon'] = true, _c['Input-icon--left'] = true, _c['Input-icon--disabled'] = !value, _c));
      var rightIconClass = classNames((_d = {}, _d['Input-icon'] = true, _d['Input-icon--right'] = true, _d));
      var trigger = /*#__PURE__*/React.createElement("div", {
        className: rightIconClass
      }, /*#__PURE__*/React.createElement(Icon, {
        name: 'info',
        size: sizeMapping$1[size]
      }));
      return /*#__PURE__*/React.createElement("div", {
        className: classes
      }, inlineLabel && /*#__PURE__*/React.createElement("div", {
        className: "Input-inlineLabel"
      }, /*#__PURE__*/React.createElement(Text, {
        appearance: "subtle"
      }, inlineLabel)), size !== 'tiny' && icon && /*#__PURE__*/React.createElement("div", {
        className: leftIconClass
      }, /*#__PURE__*/React.createElement(Icon, {
        name: icon,
        size: sizeMapping$1[size]
      })), /*#__PURE__*/React.createElement("input", __assign({}, baseProps, {
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

    var PlaceholderParagraph = function PlaceholderParagraph(props) {
      var _a, _b;

      var length = props.length,
          size = props.size,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var classes = classNames((_a = {
        'Placeholder--animation': true,
        PlaceholderParagraph: true
      }, _a["PlaceholderParagraph--" + size] = size, _a));
      var wrapperClass = classNames((_b = {
        'PlaceholderParagraph-wrapper': true
      }, _b["PlaceholderParagraph-wrapper--length-" + length] = length, _b["PlaceholderParagraph-wrapper--size-" + size] = size, _b), className);
      return /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
        className: wrapperClass
      }), /*#__PURE__*/React.createElement("span", {
        className: classes
      }));
    };
    PlaceholderParagraph.defaultProps = {
      length: 'medium'
    };
    PlaceholderParagraph.displayName = 'PlaceholderParagraph';

    var PlaceholderImage = function PlaceholderImage(props) {
      var _a;

      var _b = props.size,
          size = _b === void 0 ? 'small' : _b,
          round = props.round,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var classes = classNames((_a = {
        PlaceholderImage: true,
        'Placeholder--animation': true
      }, _a['PlaceholderImage--round'] = round, _a["PlaceholderImage--" + size] = size, _a), className);
      return /*#__PURE__*/React.createElement("span", __assign({}, baseProps, {
        className: classes
      }));
    };
    PlaceholderImage.displayName = 'PlaceholderImage';

    var Placeholder = function Placeholder(props) {
      var _a, _b;

      var imageSize = props.imageSize,
          withImage = props.withImage,
          round = props.round,
          children = props.children,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var paragraphClasses = classNames((_a = {
        'Placeholder-paragraph': true
      }, _a['Placeholder-paragraph--withImage'] = withImage, _a));
      var classes = classNames((_b = {}, _b['Placeholder'] = true, _b), className);
      return /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
        className: classes
      }), withImage && /*#__PURE__*/React.createElement(PlaceholderImage, {
        round: round,
        size: imageSize
      }), children && /*#__PURE__*/React.createElement("div", {
        className: paragraphClasses
      }, children));
    };
    Placeholder.defaultProps = {
      withImage: true,
      imageSize: 'small'
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
      var _a, _b, _c;

      var _d = props.listOptions,
          listOptions = _d === void 0 ? [] : _d,
          inputRef = props.inputRef,
          _f = props.align,
          align = _f === void 0 ? 'right' : _f,
          _g = props.optionType,
          optionType = _g === void 0 ? 'DEFAULT' : _g,
          _h = props.truncateOption,
          truncateOption = _h === void 0 ? true : _h,
          _j = props.maxHeight,
          maxHeight = _j === void 0 ? 200 : _j,
          customTrigger = props.customTrigger,
          selected = props.selected,
          tempSelected = props.tempSelected,
          previousSelected = props.previousSelected,
          remainingOptions = props.remainingOptions,
          dropdownOpen = props.dropdownOpen,
          menu = props.menu,
          searchTerm = props.searchTerm,
          maxWidth = props.maxWidth,
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
      var dropdownRef = /*#__PURE__*/React.createRef();
      var triggerRef = /*#__PURE__*/React.createRef();
      var dropdownTriggerRef = /*#__PURE__*/React.createRef();
      var dropdownCancelButtonRef = /*#__PURE__*/React.createRef();
      var dropdownApplyButtonRef = /*#__PURE__*/React.createRef();

      var _k = React.useState(),
          popoverStyle = _k[0],
          setPopoverStyle = _k[1];

      var _l = React.useState(0),
          cursor = _l[0],
          setCursor = _l[1];

      var width = props.width ? props.width : menu || customTrigger ? 'fit-content' : '100%';
      React.useEffect(function () {
        var _a;

        if (dropdownOpen) {
          var dropdownElement = triggerRef.current;
          var popoverWidth = props.width ? props.width : ((_a = dropdownElement === null || dropdownElement === void 0 ? void 0 : dropdownElement.parentElement) === null || _a === void 0 ? void 0 : _a.clientWidth) + "px";
          var popperWrapperStyle = {
            width: menu || customTrigger ? popoverWidth : (dropdownElement === null || dropdownElement === void 0 ? void 0 : dropdownElement.clientWidth) + "px",
            maxWidth: maxWidth ? maxWidth : '100%'
          };
          setPopoverStyle(popperWrapperStyle);
        }
      }, [dropdownOpen]);
      var _m = props.triggerSize,
          triggerSize = _m === void 0 ? 'regular' : _m,
          _o = props.placeholder,
          placeholder = _o === void 0 ? 'Select' : _o,
          icon = props.icon,
          error = props.error,
          disabled = props.disabled,
          inlineLabel = props.inlineLabel,
          triggerLabel = props.triggerLabel;
      var CustomTrigger = customTrigger ? customTrigger(triggerLabel ? triggerLabel : placeholder) : /*#__PURE__*/React.createElement(React.Fragment, null);
      var NewCustomTrigger = /*#__PURE__*/React.cloneElement(CustomTrigger, {
        tabindex: 0,
        ref: dropdownTriggerRef
      });
      var trigger = customTrigger ? NewCustomTrigger : /*#__PURE__*/React.createElement(DropdownButton, {
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
      var dropdownStyle = {
        maxHeight: maxHeight,
        overflowY: 'auto',
        overflowX: 'hidden'
      };

      var getDropdownClass = function getDropdownClass(index, isGroup) {
        var _a;

        var Dropdown = classNames((_a = {}, _a['Dropdown--border'] = isGroup && index !== 0, _a));
        return Dropdown;
      };

      var getDropdownSectionClass = function getDropdownSectionClass(showClearButton) {
        var _a;

        return classNames((_a = {}, _a['Dropdown-section'] = true, _a['Dropdown-section--withClear'] = showClearButton, _a));
      };

      var dropdownClass = classNames((_a = {}, _a['Dropdown'] = true, _a), className);
      var dropdownWrapperClass = classNames((_b = {}, _b['Dropdown-wrapper'] = true, _b['Dropdown-wrapper--wrap'] = !truncateOption, _b));
      var SelectAllClass = classNames((_c = {}, _c['Option'] = true, _c['Option--withCheckbox'] = true, _c['Option-wrapper'] = true, _c['Option--active'] = cursor === 0, _c));

      var onToggleDropdown = function onToggleDropdown(open, type) {
        var _a;

        toggleDropdown(open, type);
        if (!disabled) (_a = dropdownTriggerRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        setCursor(0);
      };

      var onCancelOptions = function onCancelOptions() {
        var _a;

        cancelOptions();
        (_a = dropdownTriggerRef.current) === null || _a === void 0 ? void 0 : _a.focus();
      };

      var onApplyOptions = function onApplyOptions() {
        var _a;

        applyOptions();
        (_a = dropdownTriggerRef.current) === null || _a === void 0 ? void 0 : _a.focus();
      };

      var optionClickHandler = function optionClickHandler(item) {
        var _a;

        props.onOptionSelect(item);
        (_a = dropdownTriggerRef.current) === null || _a === void 0 ? void 0 : _a.focus();
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
        var _a = props.footerLabel,
            footerLabel = _a === void 0 ? 'Search for more options' : _a;
        return /*#__PURE__*/React.createElement("div", {
          className: 'Dropdown-footer'
        }, /*#__PURE__*/React.createElement(Text, {
          small: true,
          appearance: 'subtle'
        }, footerLabel));
      };

      var renderGroups = function renderGroups(group, selectedGroup) {
        var onClearOptions = props.onClearOptions;
        return /*#__PURE__*/React.createElement("div", {
          className: getDropdownSectionClass(selectedGroup)
        }, /*#__PURE__*/React.createElement(Text, {
          small: true,
          appearance: 'subtle'
        }, group), selectedGroup && /*#__PURE__*/React.createElement(Button, {
          onClick: onClearOptions,
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
        }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
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
        return /*#__PURE__*/React.createElement("div", {
          className: 'Dropdown-input'
        }, /*#__PURE__*/React.createElement(Input, {
          name: "Dropdown-search",
          icon: 'search',
          value: searchTerm,
          placeholder: 'Search..',
          disabled: disable,
          autoFocus: true,
          onChange: searchHandler,
          onClear: searchClearHandler,
          ref: inputRef,
          autocomplete: 'off'
        }));
      };

      var renderLoading = function renderLoading(loadersLength) {
        var arr = Array(loadersLength).fill('Loading');
        var type = withCheckbox ? 'WITH_CHECKBOX' : optionType;
        return arr.map(function (option, ind) {
          return /*#__PURE__*/React.createElement("div", {
            className: "Option-loading",
            key: option + "-" + ind
          }, /*#__PURE__*/React.createElement(Loading, {
            loadingType: type
          }));
        });
      };

      var renderSelectAll = function renderSelectAll() {
        var _a = props.selectAllLabel,
            selectAllLabel = _a === void 0 ? 'Select All' : _a,
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
          tabIndex: -1
        }));
      };

      var renderOptions = function renderOptions(item, index) {
        var selectAllPresent = withCheckbox && remainingOptions === 0 && searchTerm === '';
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
        var _a = props.selectedSectionLabel,
            selectedSectionLabel = _a === void 0 ? 'Selected Items' : _a,
            _b = props.loadersCount,
            loadersCount = _b === void 0 ? 10 : _b,
            loadingOptions = props.loadingOptions;

        if (loadersCount && loadingOptions) {
          return /*#__PURE__*/React.createElement("div", {
            className: 'Dropdown-loading'
          }, /*#__PURE__*/React.createElement("div", {
            className: "Dropdown-wrapper",
            style: dropdownStyle
          }, renderLoading(loadersCount)));
        }

        if (listOptions.length === 0 && !loadingOptions) {
          var _c = props.noResultMessage,
              noResultMessage = _c === void 0 ? 'No result found' : _c;
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
        }, withCheckbox && remainingOptions === 0 && searchTerm === '' && renderSelectAll(), selected.length > 0 && renderGroups(selectedSectionLabel, true), selected.map(function (option, index) {
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
        var updatedCursor = direction === 'down' ? cursor + 1 : cursor - 1;
        var elements = document.querySelectorAll(classes);
        var element = elements[updatedCursor];
        if (element) scrollIntoView(dropdownRef.current, element);
        if (element !== undefined) setCursor(updatedCursor);
      };

      var onkeydown = function onkeydown(event) {
        var _a, _b, _c;

        var optionClass = optionRenderer ? '.Option-wrapper' : '.Option';

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
              var classes = withCheckbox ? optionClass + " .Checkbox-input" : optionClass;
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
            var disabledApplyButton = (_a = dropdownApplyButtonRef.current) === null || _a === void 0 ? void 0 : _a.disabled;

            if ((currentElement === dropdownCancelButtonRef.current && disabledApplyButton || currentElement === dropdownApplyButtonRef.current) && dropdownOpen) {
              event.preventDefault();
              onToggleDropdown(false, 'onClick');
              return;
            }

            if (showApplyButton && dropdownOpen) {
              event.preventDefault();

              if (currentElement === dropdownCancelButtonRef.current) {
                (_b = dropdownApplyButtonRef.current) === null || _b === void 0 ? void 0 : _b.focus();
              } else {
                (_c = dropdownCancelButtonRef.current) === null || _c === void 0 ? void 0 : _c.focus();
              }
            }

            break;
        }
      };

      return /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
        className: dropdownClass,
        ref: triggerRef,
        style: {
          width: width
        },
        onKeyDown: onkeydown
      }), /*#__PURE__*/React.createElement(Popover, {
        onToggle: onToggleDropdown,
        trigger: trigger,
        triggerClass: "w-100",
        open: dropdownOpen,
        customStyle: popoverStyle,
        position: alignmentMapping[align],
        appendToBody: true
      }, (withSearch || props.async) && renderSearch(), renderDropdownSection(), showApplyButton && withCheckbox && renderApplyButton()));
    };

    DropdownList.displayName = 'DropdownList';

    var inputRef = /*#__PURE__*/React.createRef();
    var bulk = 50;

    var Dropdown = function (_super) {
      __extends(Dropdown, _super);

      function Dropdown(props) {
        var _this = _super.call(this, props) || this;

        _this.fetchOptionsFunction = function (searchTerm) {
          var options = _this.props.options;
          var filteredOptions = searchTerm ? getSearchedOptions(options, searchTerm) : options;
          return new Promise(function (resolve) {
            resolve({
              options: filteredOptions,
              count: filteredOptions.length
            });
          });
        };

        _this.getUnSelectedOptions = function (options, init) {
          if (options.length) {
            if (!init) {
              return options.filter(function (option) {
                return _this.state.tempSelected.findIndex(function (item) {
                  return item.value === option.value;
                }) === -1;
              });
            }

            var _a = _this.props.selected,
                selected_1 = _a === void 0 ? [] : _a;
            var unSelectedGroup = options.filter(function (option) {
              return _isControlled(_this.props.selected) ? selected_1.findIndex(function (item) {
                return item.value === option.value;
              }) === -1 : !option.selected;
            });
            return unSelectedGroup;
          }

          return options;
        };

        _this.getSelectedOptions = function (options, init) {
          var _a = _this.props.selected,
              selected = _a === void 0 ? [] : _a;

          if (options.length) {
            if (!init) return _this.state.tempSelected;
            var selectedGroup = _isControlled(_this.props.selected) ? selected : options.filter(function (option) {
              return option.selected;
            });
            return selectedGroup;
          }

          return [];
        };

        _this.updateOptions = function (init, async) {
          var _a = _this.state,
              searchTerm = _a.searchTerm,
              selectAll = _a.selectAll,
              tempSelected = _a.tempSelected,
              previousSelected = _a.previousSelected;
          var updatedAsync = async === undefined ? _this.state.async : async;
          var _b = _this.props,
              fetchOptions = _b.fetchOptions,
              withCheckbox = _b.withCheckbox,
              withSearch = _b.withSearch;
          var fetchFunction = fetchOptions ? fetchOptions : _this.fetchOptionsFunction;
          fetchFunction(searchTerm).then(function (res) {
            var _a;

            var options = res.options,
                count = res.count;
            updatedAsync = searchTerm === '' ? count > bulk : updatedAsync;
            var unSelectedGroup = _showSelectedItems(updatedAsync, searchTerm, withCheckbox) ? _this.getUnSelectedOptions(options, init) : options;
            var selectedGroup = searchTerm === '' ? _this.getSelectedOptions(options, init) : [];
            var optionsLength = searchTerm === '' ? count : _this.state.optionsLength;

            _this.setState(__assign(__assign({}, _this.state), {
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

            if (updatedAsync || withSearch) (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
          });
        };

        _this.updateSearchTerm = function (search) {
          _this.setState(__assign(__assign({}, _this.state), {
            loading: true,
            searchInit: true,
            searchTerm: search
          }));
        };

        _this.updateOnPopperToggle = function () {
          var _a = _this.props,
              withCheckbox = _a.withCheckbox,
              showApplyButton = _a.showApplyButton,
              _b = _a.selected,
              selected = _b === void 0 ? [] : _b;
          var _c = _this.state,
              previousSelected = _c.previousSelected,
              tempSelected = _c.tempSelected,
              optionsLength = _c.optionsLength,
              async = _c.async,
              loading = _c.loading,
              searchTerm = _c.searchTerm;
          var popperIsOpen = _isOpenControlled(_this.props.open, _this.props.selected) ? _this.props.open : _this.state.open;

          if (withCheckbox && showApplyButton) {
            var temporarySelected = _isControlled(_this.props.selected) ? selected : previousSelected;

            _this.setState({
              tempSelected: temporarySelected,
              selectAll: getSelectAll(temporarySelected, optionsLength),
              triggerLabel: _this.updateTriggerLabel(temporarySelected)
            });
          }

          if (_isOpenControlled(_this.props.open, _this.props.selected)) {
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
        };

        _this.updateTriggerLabel = function (selectedArray, totalOptions) {
          if (selectedArray === void 0) {
            selectedArray = [];
          }

          var selectedLength = selectedArray.length;
          if (selectedLength === 0) return '';
          var _a = _this.props.triggerOptions,
              triggerOptions = _a === void 0 ? {} : _a;
          var customLabel = triggerOptions.customLabel,
              _b = triggerOptions.labelLimit,
              labelLimit = _b === void 0 ? 2 : _b;
          var optionsLength = _this.state ? _this.state.optionsLength : totalOptions;
          var label = '';

          if (selectedLength <= labelLimit) {
            label = selectedArray.map(function (option) {
              return option.label;
            }).join(', ');
          } else {
            label = customLabel ? customLabel(selectedLength, optionsLength) : selectedLength + " selected";
          }

          return label;
        };

        _this.updateSelectedOptions = function (selectedArray, isControlled) {
          var _a = _this.state,
              optionsLength = _a.optionsLength,
              previousSelected = _a.previousSelected,
              selected = _a.selected,
              loading = _a.loading,
              open = _a.open;
          var _b = _this.props,
              onChange = _b.onChange,
              withCheckbox = _b.withCheckbox,
              showApplyButton = _b.showApplyButton,
              closeOnSelect = _b.closeOnSelect;
          var isClearClicked = selectedArray.length === 0 && selected.length > 0;
          var updatePreviousSelected = withCheckbox && showApplyButton && isControlled;

          _this.setState(__assign(__assign({}, _this.state), {
            tempSelected: selectedArray,
            triggerLabel: _this.updateTriggerLabel(selectedArray),
            selectAll: getSelectAll(selectedArray, optionsLength),
            open: _isOpenControlled(_this.props.open, _this.props.selected) || withCheckbox ? open : !closeOnSelect,
            previousSelected: updatePreviousSelected ? selectedArray : previousSelected,
            selected: isClearClicked ? selectedArray : selected,
            loading: isClearClicked ? true : loading
          }));

          if (isClearClicked) _this.debounceClear();

          if (onChange && (!showApplyButton || isControlled)) {
            var values = selectedArray.map(function (item) {
              return item.value;
            });
            onChange(values, name);
          }
        };

        _this.onOptionSelect = function (option) {
          var _a = _this.props,
              onUpdate = _a.onUpdate,
              selected = _a.selected;

          if (_isControlled(selected)) {
            if (onUpdate) onUpdate('select-option', option);
            return;
          }

          _this.updateSelectedOptions([option]);
        };

        _this.onSelect = function (option, checked) {
          var _a = _this.props,
              onUpdate = _a.onUpdate,
              selected = _a.selected,
              showApplyButton = _a.showApplyButton;

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

          _this.updateSelectedOptions(selectedArray);
        };

        _this.onSelectAll = function (event) {
          var _a = _this.props,
              onUpdate = _a.onUpdate,
              selected = _a.selected,
              showApplyButton = _a.showApplyButton;

          if (_isControlled(selected) && !showApplyButton) {
            if (onUpdate) onUpdate(event.target.checked ? 'select-all' : 'deselect-all');
            return;
          }

          var selectedArray = event.target.checked ? _this.state.options : [];

          _this.updateSelectedOptions(selectedArray);
        };

        _this.debounceSearch = debounce(300, function () {
          _this.setState({
            searchInit: false
          }, function () {
            _this.updateOptions(false);
          });
        });
        _this.debounceClear = debounce(250, function () {
          return _this.updateOptions(false);
        });

        _this.onClearOptions = function () {
          var _a = _this.props,
              selected = _a.selected,
              onUpdate = _a.onUpdate,
              showApplyButton = _a.showApplyButton,
              onChange = _a.onChange;

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
        };

        _this.onCancelOptions = function () {
          var _a = _this.state,
              previousSelected = _a.previousSelected,
              tempSelected = _a.tempSelected,
              optionsLength = _a.optionsLength;
          var _b = _this.props,
              selected = _b.selected,
              onUpdate = _b.onUpdate;

          if (_isControlled(selected)) {
            if (onUpdate) onUpdate('cancel-selected', previousSelected, tempSelected);
            return;
          }

          var label = _this.updateTriggerLabel(previousSelected);

          _this.setState(__assign(__assign({}, _this.state), {
            tempSelected: previousSelected,
            selectAll: getSelectAll(previousSelected, optionsLength),
            triggerLabel: label,
            open: false
          }));

          if (_this.props.onClose) {
            var values = previousSelected.map(function (option) {
              return option.value;
            });

            _this.props.onClose(values, name);
          }
        };

        _this.onApplyOptions = function () {
          var _a = _this.state,
              tempSelected = _a.tempSelected,
              previousSelected = _a.previousSelected;
          var _b = _this.props,
              onChange = _b.onChange,
              onClose = _b.onClose,
              selected = _b.selected,
              onUpdate = _b.onUpdate;

          if (_isControlled(selected)) {
            if (onUpdate) onUpdate('apply-selected', previousSelected, tempSelected);
            return;
          }

          _this.setState(__assign(__assign({}, _this.state), {
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
        };

        _this.onToggleDropdown = function (updatedOpen, type) {
          if (_this.props.disabled) {
            return;
          }

          var _a = _this.props,
              showApplyButton = _a.showApplyButton,
              withCheckbox = _a.withCheckbox,
              onClose = _a.onClose,
              name = _a.name,
              onPopperToggle = _a.onPopperToggle;

          if (onPopperToggle && _isOpenControlled(_this.props.open, _this.props.selected)) {
            onPopperToggle(updatedOpen, type);
            return;
          }

          var isPopperOpen = _isOpenControlled(_this.props.open, _this.props.selected) ? _this.state.open : updatedOpen;
          var isCloseEvent = type === 'outsideClick' || type === 'onClick' && !isPopperOpen;

          _this.setState({
            open: isPopperOpen
          });

          if (onClose && isCloseEvent) {
            var arr = withCheckbox && showApplyButton ? _this.state.previousSelected : _this.state.tempSelected;
            var values = arr.map(function (option) {
              return option.value;
            });
            onClose(values, name);
          }
        };

        var totalOptions = props.totalOptions,
            withCheckbox = props.withCheckbox,
            _a = props.loading,
            loading = _a === void 0 ? false : _a,
            _b = props.open,
            open = _b === void 0 ? false : _b,
            _c = props.selected,
            selected = _c === void 0 ? [] : _c,
            _d = props.options,
            options = _d === void 0 ? [] : _d;
        var optionsLength = totalOptions ? totalOptions : options.length;
        var async = 'fetchOptions' in _this.props || optionsLength > bulk;
        var selectedGroup = !async ? _this.getSelectedOptions(options, true) : [];
        _this.state = {
          async: async,
          optionsLength: optionsLength,
          open: open,
          searchInit: false,
          searchedOptionsLength: optionsLength,
          optionsApplied: false,
          options: options || [],
          loading: async ? true : loading,
          searchTerm: '',
          tempSelected: selectedGroup,
          previousSelected: selectedGroup,
          selected: _showSelectedItems(async, '', withCheckbox) ? selected : [],
          triggerLabel: _this.updateTriggerLabel(selectedGroup, optionsLength),
          selectAll: getSelectAll(selectedGroup, optionsLength)
        };
        if (async) _this.updateOptions(true);
        return _this;
      }

      Dropdown.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _a;

        if (!this.state.async) {
          var _b = this.props,
              loading = _b.loading,
              fetchOptions = _b.fetchOptions,
              _c = _b.options,
              options = _c === void 0 ? [] : _c,
              withSearch = _b.withSearch;

          if (prevProps.loading !== loading && !fetchOptions) {
            if (options.length > bulk) {
              this.updateOptions(true, true);
            } else {
              var selectedGroup = this.getSelectedOptions(options, true);
              this.setState(__assign(__assign({}, this.state), {
                options: options,
                loading: loading,
                tempSelected: selectedGroup,
                previousSelected: selectedGroup,
                optionsLength: options.length,
                searchedOptionsLength: options.length,
                triggerLabel: this.updateTriggerLabel(selectedGroup),
                selectAll: getSelectAll(selectedGroup, this.state.optionsLength)
              }));
              if (withSearch) (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            }
          }
        }

        if (this.props.selected !== undefined && prevProps.selected !== this.props.selected && prevProps.loading === this.props.loading) {
          this.updateSelectedOptions(this.props.selected, true);
        }

        if (prevProps.open !== this.props.open || prevState.open !== this.state.open) {
          if (_isOpenControlled(this.props.open, this.props.selected) && this.props.open === this.state.open) return;
          this.updateOnPopperToggle();
        }

        if (prevState.searchTerm !== this.state.searchTerm) {
          this.debounceSearch();
        }
      };

      Dropdown.prototype.render = function () {
        var _a = this.state,
            options = _a.options,
            async = _a.async,
            open = _a.open,
            searchTerm = _a.searchTerm,
            searchInit = _a.searchInit,
            loading = _a.loading,
            searchedOptionsLength = _a.searchedOptionsLength,
            tempSelected = _a.tempSelected,
            selectAll = _a.selectAll,
            triggerLabel = _a.triggerLabel,
            previousSelected = _a.previousSelected;

        var _b = this.props,
            _c = _b.triggerOptions,
            triggerOptions = _c === void 0 ? {} : _c,
            selected = _b.selected,
            rest = __rest(_b, ["triggerOptions", "selected"]);

        var remainingOptionsLen = searchedOptionsLength - options.length;
        return /*#__PURE__*/React.createElement(DropdownList, __assign({
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
      };

      Dropdown.defaultProps = {
        triggerOptions: {},
        closeOnSelect: true
      };
      return Dropdown;
    }(React.Component);

    var SubtleLink = function SubtleLink(props) {
      var onClick = props.onClick,
          children = props.children,
          href = props.href;

      var onClickHandler = function onClickHandler(e) {
        e.preventDefault();
        onClick();
      };

      return /*#__PURE__*/React.createElement("a", {
        className: "SubtleLink",
        href: href,
        onClick: onClickHandler
      }, children);
    };

    var renderLink = function renderLink(item, _onClick) {
      return /*#__PURE__*/React.createElement(SubtleLink, {
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
        return /*#__PURE__*/React.createElement(Button, {
          size: "tiny",
          appearance: "transparent",
          icon: "more_horiz_filled"
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
          onClick(selected);
        }
      });
    };

    var Breadcrumbs = function Breadcrumbs(props) {
      var _a;

      var list = props.list,
          onClick = props.onClick,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var BreadcrumbClass = classNames((_a = {}, _a['Breadcrumbs'] = true, _a), className);
      return /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
        className: BreadcrumbClass
      }), list.length <= 4 ? list.map(function (item, index) {
        return /*#__PURE__*/React.createElement("div", {
          key: index,
          className: "Breadcrumbs-item"
        }, /*#__PURE__*/React.createElement("span", {
          className: "Breadcrumbs-link"
        }, renderLink(item, onClick)), /*#__PURE__*/React.createElement("span", {
          className: "Breadcrumbs-itemSeparator"
        }, "/"));
      }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "Breadcrumbs-item"
      }, /*#__PURE__*/React.createElement("span", {
        className: "Breadcrumbs-link"
      }, renderLink(list[0], onClick)), /*#__PURE__*/React.createElement("span", {
        className: "Breadcrumbs-itemSeparator"
      }, "/")), /*#__PURE__*/React.createElement("div", {
        className: "Breadcrumbs-dropdown"
      }, renderDropdown(list.slice(1, list.length - 1), onClick), /*#__PURE__*/React.createElement("span", {
        className: "Breadcrumbs-itemSeparator"
      }, "/")), /*#__PURE__*/React.createElement("div", {
        className: "Breadcrumbs-item"
      }, /*#__PURE__*/React.createElement("span", {
        className: "Breadcrumbs-link"
      }, renderLink(list[list.length - 1], onClick)), /*#__PURE__*/React.createElement("span", {
        className: "Breadcrumbs-itemSeparator"
      }, "/"))));
    };

    var Card = function Card(props) {
      var _a;

      var shadow = props.shadow,
          children = props.children,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var classes = classNames((_a = {
        Card: true
      }, _a["Card--shadow-" + shadow] = shadow, _a["" + className] = className, _a));
      return /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
        className: classes
      }), children);
    };
    Card.defaultProps = {
      shadow: 'medium'
    };
    Card.displayName = 'Card';

    var GenericChip = function GenericChip(props) {
      var _a = props.label,
          label = _a === void 0 ? '' : _a,
          icon = props.icon,
          clearButton = props.clearButton,
          disabled = props.disabled,
          className = props.className,
          selected = props.selected,
          onClose = props.onClose,
          onClick = props.onClick;
      var baseProps = extractBaseProps(props);

      var iconClass = function iconClass(align) {
        var _a;

        return classNames((_a = {}, _a['Chip-icon'] = true, _a["Chip-icon--" + align] = align, _a));
      };

      var onCloseHandler = function onCloseHandler(e) {
        e.stopPropagation();
        if (onClose) onClose();
      };

      var onClickHandler = function onClickHandler() {
        if (onClick) onClick();
      };

      return /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
        className: "Chip-wrapper " + className,
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

    var Chip = function Chip(props) {
      var _a;

      var _b = props.label,
          label = _b === void 0 ? '' : _b,
          icon = props.icon,
          clearButton = props.clearButton,
          _c = props.type,
          type = _c === void 0 ? 'input' : _c,
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

      var chipClass = classNames((_a = {
        Chip: true
      }, _a["Chip-" + type + "--disabled"] = disabled, _a["Chip--" + type] = type && !disabled, _a["Chip-" + type + "--selected"] = selected && !disabled, _a), className);
      var clearbutton = type === 'action' ? false : clearButton;
      var select = type === 'selection' && selected ? true : false;
      return /*#__PURE__*/React.createElement(GenericChip, __assign({}, baseProps, {
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

    var ChipGroup = function ChipGroup(props) {
      var _a;

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

      var ChipGroupClass = classNames((_a = {}, _a['ChipGroup'] = true, _a), className);
      return /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
        className: ChipGroupClass
      }), list.map(function (item, ind) {
        var _a = item.label,
            label = _a === void 0 ? '' : _a,
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

    var Column = function Column(props) {
      var _a;

      var size = props.size,
          sizeXS = props.sizeXS,
          sizeS = props.sizeS,
          sizeM = props.sizeM,
          sizeL = props.sizeL,
          sizeXL = props.sizeXL,
          className = props.className,
          children = props.children;
      var baseProps = extractBaseProps(props);
      var classes = classNames((_a = {}, _a['Col'] = true, _a["Col--" + size] = size, _a["Col--xs-" + sizeXS] = sizeXS, _a["Col--s-" + sizeS] = sizeS, _a["Col--m-" + sizeM] = sizeM, _a["Col--l-" + sizeL] = sizeL, _a["Col--xl-" + sizeXL] = sizeXL, _a["" + className] = className, _a));
      return /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
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
      var _a;

      var appearance = props.appearance,
          _b = props.size,
          size = _b === void 0 ? 'm' : _b,
          children = props.children,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var classes = classNames((_a = {
        Heading: true
      }, _a["Heading--" + size] = size, _a["Heading--" + appearance] = appearance, _a), className);
      return /*#__PURE__*/React.createElement(GenericText, __assign({}, baseProps, {
        className: classes,
        componentType: sizeMap[size]
      }), children);
    };
    Heading.defaultProps = {
      appearance: 'default',
      size: 'm'
    };
    Heading.displayName = 'Heading';

    var Subheading = function Subheading(props) {
      var _a;

      var _b = props.appearance,
          appearance = _b === void 0 ? 'default' : _b,
          children = props.children,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var classes = classNames((_a = {
        Subheading: true
      }, _a["Subheading--" + appearance] = appearance, _a), className);
      return /*#__PURE__*/React.createElement(GenericText, __assign({}, baseProps, {
        className: classes,
        componentType: 'h4'
      }), children);
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
          var _a = d,
              year = _a.year,
              month = _a.month,
              date = _a.date;
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
        var limitDecade = getDateInfo(d).decadeYear;

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
        var _a = getDateInfo(d),
            limitYear = _a.year,
            limitMonth = _a.month,
            limitDate = _a.date;

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
      var _a = getDateInfo(d),
          year = _a.year,
          month = _a.month,
          date = _a.date;

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
        var year_1 = -1,
            month_1 = -1,
            date_1 = -1;
        var v_1 = val.split(separator);
        format.split(separator).forEach(function (f, i) {
          switch (f) {
            case 'mm':
              month_1 = +v_1[i] - 1;
              break;

            case 'yyyy':
              year_1 = +v_1[i];
              break;

            case 'dd':
              date_1 = +v_1[i];
              break;
          }
        });
        var d = convertToDate({
          year: year_1,
          month: month_1,
          date: date_1
        });
        return d;
      } else {
        return undefined;
      }
    };

    var Calendar = function Calendar(props) {
      var _a = props.monthsInView,
          monthsInView = _a === void 0 ? 1 : _a,
          _b = props.view,
          viewProp = _b === void 0 ? 'date' : _b,
          _c = props.firstDayOfWeek,
          firstDayOfWeek = _c === void 0 ? 'sunday' : _c,
          dateProp = props.date,
          startDateProp = props.startDate,
          endDateProp = props.endDate,
          rangePicker = props.rangePicker,
          _d = props.yearNav,
          yearNavProp = _d === void 0 ? getDateInfo((rangePicker ? endDateProp || startDateProp : dateProp) || Date.now()).year : _d,
          _e = props.monthNav,
          monthNavProp = _e === void 0 ? getDateInfo((rangePicker ? endDateProp || startDateProp : dateProp) || Date.now()).month : _e,
          rangeLimit = props.rangeLimit,
          disabledBefore = props.disabledBefore,
          disabledAfter = props.disabledAfter,
          onDateChange = props.onDateChange,
          onRangeChange = props.onRangeChange,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var _f = props.jumpView,
          jumpView = _f === void 0 ? true : _f;

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

      var _g = React.useState(monthsInView > 1 ? 'date' : viewProp),
          view = _g[0],
          setView = _g[1];

      var _h = React.useState({
        year: undefined,
        month: undefined,
        date: undefined
      }),
          state = _h[0],
          setState = _h[1];

      var _j = React.useState(dateProp),
          currDateState = _j[0],
          setCurrDateState = _j[1];

      var _k = React.useState(),
          hoverDateState = _k[0],
          setHoverDateState = _k[1];

      var _l = React.useState(startDateProp),
          startDateState = _l[0],
          setStartDateState = _l[1];

      var _m = React.useState(endDateProp),
          endDateState = _m[0],
          setEndDateState = _m[1];

      var _o = React.useState(getYearBlock(yearNavProp)),
          yearBlockNav = _o[0],
          setYearBlockNav = _o[1];

      var _p = React.useState(yearNavProp),
          yearNav = _p[0],
          setYearNav = _p[1];

      var _q = React.useState(monthNavProp),
          monthNav = _q[0],
          setMonthNav = _q[1];

      var yearState = state.year,
          monthState = state.month,
          dateState = state.date;
      React.useEffect(function () {
        var _a = getDateInfo(dateProp),
            year = _a.year,
            month = _a.month,
            date = _a.date;

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
              var _a = getDateInfo(currDateState),
                  year = _a.year,
                  month = _a.month,
                  date = _a.date;

              if (startDateState) {
                if (compareDate(startDateState, 'more', year, month, date)) {
                  setStartDateState(currDateState);
                } else {
                  setEndDateState(currDateState);
                }
              } else if (endDateState) {
                if (compareDate(endDateState, 'less', year, month, date)) {
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
          var _a = getDateInfo(startDateState),
              startYear = _a.year,
              startMonth = _a.month,
              startDate = _a.date;

          var _b = getDateInfo(endDateState),
              endYear = _b.year,
              endMonth = _b.month,
              endDate = _b.date;

          var _c = getDateInfo(hoverDateState),
              hoverYear = _c.year,
              hoverMonth = _c.month,
              hoverDate = _c.date;

          var limitDate = void 0;

          if (startDateState) {
            limitDate = new Date(startDateState);
            limitDate.setDate(startDate + rangeLimit);
            return compareDate(limitDate, 'less', hoverYear, hoverMonth, hoverDate + 1) || compareDate(limitDate, 'less', endYear, endMonth, endDate + 1);
          }

          if (endDateState) {
            limitDate = new Date(endDateState);
            limitDate.setDate(endDate - rangeLimit);
            return compareDate(limitDate, 'more', hoverYear, hoverMonth, hoverDate - 1) || compareDate(limitDate, 'more', startYear, startMonth, startDate - 1);
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
        var _a = getNavDateInfo(index),
            yearNavVal = _a.year,
            monthNavVal = _a.month;

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
          name: "arrow_" + (type === 'next' ? 'forward' : 'back'),
          className: "p-4",
          onClick: navClickHandler
        }));
      };

      var renderHeaderContent = function renderHeaderContent(index) {
        var _a = getNavDateInfo(index),
            yearNavVal = _a.year,
            monthNavVal = _a.month;

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

        if (view === 'year') headerContent = yearBlockNav + " - " + (yearBlockNav + (yearBlockRange - 1));
        if (view === 'month') headerContent = "" + yearNavVal;
        if (view === 'date') headerContent = months[monthNavVal] + " " + yearNavVal;
        return /*#__PURE__*/React.createElement("div", {
          className: headerContentClass,
          onClick: onClickHandler
        }, /*#__PURE__*/React.createElement(Heading, {
          size: "s"
        }, headerContent));
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
            }, "" + year));
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
        var _a = getNavDateInfo(index),
            yearNavVal = _a.year,
            monthNavVal = _a.month;

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
            }, "" + date));
          })));
        });
      };

      var renderCalendar = function renderCalendar(index) {
        var _a;

        var wrapperClass = classNames((_a = {}, _a['Calendar'] = true, _a["Calendar--" + view] = view, _a), className);
        var headerClass = classNames({
          'Calendar-header': true
        });
        var bodyClass = classNames({
          'Calendar-body': true
        });
        return /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
          className: wrapperClass
        }), /*#__PURE__*/React.createElement("div", {
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

    var Caption = function Caption(props) {
      var _a, _b;

      var _c = props.error,
          error = _c === void 0 ? false : _c,
          _d = props.hide,
          hide = _d === void 0 ? false : _d,
          _e = props.withInput,
          withInput = _e === void 0 ? false : _e,
          children = props.children,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var classes = classNames((_a = {
        Caption: true
      }, _a['Caption--hidden'] = hide, _a['Caption--withInput'] = withInput, _a), className);
      var errorIconClass = classNames((_b = {}, _b['Caption-icon'] = true, _b));
      return /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
        className: classes
      }), error && /*#__PURE__*/React.createElement("div", {
        className: errorIconClass
      }, /*#__PURE__*/React.createElement(Icon, {
        size: 14,
        name: 'error',
        appearance: 'alert'
      })), /*#__PURE__*/React.createElement(Text, {
        appearance: error ? 'destructive' : 'subtle',
        small: true,
        weight: "medium"
      }, "" + children));
    };
    Caption.displayName = 'Caption';

    var InputMask = /*#__PURE__*/React.forwardRef(function (props, forwardRef) {
      var maskProp = props.mask,
          valueProp = props.value,
          _a = props.placeholderChar,
          placeholderChar = _a === void 0 ? '_' : _a,
          mask = props.mask,
          error = props.error,
          caption = props.caption,
          required = props.required,
          onChange = props.onChange,
          onBlur = props.onBlur,
          onClick = props.onClick,
          onClear = props.onClear,
          className = props.className,
          rest = __rest(props, ["mask", "value", "placeholderChar", "mask", "error", "caption", "required", "onChange", "onBlur", "onClick", "onClear", "className"]);

      var _b = React.useState(''),
          value = _b[0],
          setValue = _b[1];

      var _c = React.useState(0),
          caret = _c[0],
          setCaret = _c[1];

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
          var el = ref.current;

          if (el.selectionStart || el.selectionStart === 0) {
            var p = Math.ceil(pos);
            el.setSelectionRange(p, p);
          }
        }
      };

      var getRawValue = function getRawValue(val) {
        if (val === void 0) {
          val = '';
        }

        return val.split('').filter(function (v) {
          return !(fixedMask.includes(v) || v === placeholderChar);
        }).join('');
      };

      function convertToMasked(val) {
        if (val === void 0) {
          val = '';
        }

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

      var classes = classNames({
        'd-flex flex-column flex-grow-1': true
      }, className);
      return /*#__PURE__*/React.createElement("div", {
        className: classes
      }, /*#__PURE__*/React.createElement(Input, __assign({}, rest, {
        value: value,
        error: error,
        required: required,
        onClick: onClickHandler,
        onChange: onChangeHandler,
        onClear: onClearHandler,
        onBlur: onBlurHandler,
        autocomplete: 'off',
        ref: ref
      })), /*#__PURE__*/React.createElement(Caption, {
        error: error,
        withInput: true,
        hide: !caption
      }, caption));
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
        if (year < 1000 || year > 3000 || month == 0 || month > 12) return false;
        var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (year % 400 == 0 || year % 100 != 0 && year % 4 == 0) monthLength[1] = 29;
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
          _a = props.open,
          openProp = _a === void 0 ? false : _a,
          _b = props.position,
          position = _b === void 0 ? 'bottom-start' : _b,
          _c = props.inputFormat,
          inputFormat = _c === void 0 ? 'mm/dd/yyyy' : _c,
          _d = props.outputFormat,
          outputFormat = _d === void 0 ? 'mm/dd/yyyy' : _d,
          _f = props.inputOptions,
          inputOptions = _f === void 0 ? {
        name: 'datepicker',
        placeholder: inputFormat,
        placeholderChar: '_',
        required: false,
        caption: ''
      } : _f,
          _g = props.mask,
          mask = _g === void 0 ? e.date[inputFormat] : _g,
          _h = props.validator,
          validator = _h === void 0 ? e$1.date : _h,
          withInput = props.withInput,
          disabledBefore = props.disabledBefore,
          disabledAfter = props.disabledAfter,
          onDateChange = props.onDateChange,
          rest = __rest(props, ["date", "open", "position", "inputFormat", "outputFormat", "inputOptions", "mask", "validator", "withInput", "disabledBefore", "disabledAfter", "onDateChange"]);

      var _j = React.useState(false),
          init = _j[0],
          setInit = _j[1];

      var _k = React.useState(),
          date = _k[0],
          setDate = _k[1];

      var _l = React.useState(false),
          error = _l[0],
          setError = _l[1];

      var _m = React.useState(openProp),
          open = _m[0],
          setOpen = _m[1];

      React.useEffect(function () {
        var d = convertToDate(dateProp, inputFormat, validator);
        setDate(d);
      }, [dateProp]);
      React.useEffect(function () {
        setOpen(openProp);
      }, [openProp]);
      React.useEffect(function () {
        var _a = getDateInfo(disabledBefore),
            dbYear = _a.year,
            dbMonth = _a.month,
            dbDate = _a.date;

        var _b = getDateInfo(disabledAfter),
            daYear = _b.year,
            daMonth = _b.month,
            daDate = _b.date;

        var newError = !date ? true : compareDate(date, 'less', dbYear, dbMonth, dbDate) || compareDate(date, 'more', daYear, daMonth, daDate);
        setError(newError);

        if (init && !newError && onDateChange) {
          if (date) {
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
          setInit(true);
          var placeholderChar = '_';

          if (!val || val.includes(placeholderChar)) {
            setDate(undefined);
          }
        };

        var onClearHandler = function onClearHandler() {
          setInit(true);
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

        var trigger = /*#__PURE__*/React.createElement(InputMask, __assign({}, inputOptions, {
          error: inputOptions.required && error,
          mask: mask,
          value: date ? translateToString(inputFormat, date) : '',
          onChange: onChangeHandler,
          onBlur: onBlurHandler,
          onClear: onClearHandler,
          caption: inputOptions.required && error ? inputOptions.caption || 'Invalid value' : ''
        }));
        return /*#__PURE__*/React.createElement(Popover, {
          trigger: trigger,
          triggerClass: "w-100",
          position: position,
          appendToBody: true,
          open: open,
          onToggle: onToggleHandler
        }, /*#__PURE__*/React.createElement(Calendar, __assign({}, rest, {
          date: convertToDate(date, inputFormat, validator),
          disabledBefore: convertToDate(disabledBefore, inputFormat, validator),
          disabledAfter: convertToDate(disabledAfter, inputFormat, validator),
          onDateChange: onDateChangeHandler
        })));
      }

      return /*#__PURE__*/React.createElement(Calendar, __assign({}, rest, {
        date: convertToDate(date, inputFormat, validator),
        disabledBefore: convertToDate(disabledBefore, inputFormat, validator),
        disabledAfter: convertToDate(disabledAfter, inputFormat, validator),
        onDateChange: onDateChangeHandler
      }));
    };
    DatePicker.displayName = 'DatePicker';

    var DonutChart = function DonutChart(props) {
      var _a;

      var _b = props.width,
          width = _b === void 0 ? 20 : _b,
          _c = props.colors,
          colors = _c === void 0 ? ['primary', 'secondary', 'success', 'warning', 'alert'] : _c,
          _d = props.withCenterText,
          withCenterText = _d === void 0 ? true : _d,
          _e = props.colorOfTotalCount,
          colorOfTotalCount = _e === void 0 ? 'success' : _e,
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
          return /*#__PURE__*/React.createElement("div", {
            className: "DonutChart-tooltip"
          }, "" + payload.name + chartProps.separator + (+payload.value).toLocaleString());
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
          d: "M" + sx + "," + sy + "L" + mx + "," + my + "L" + ex + "," + ey,
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
        }, "" + payload.name), /*#__PURE__*/React.createElement("text", {
          x: ex + (cos >= 0 ? 1 : -1) * 12,
          y: ey,
          textAnchor: textAnchor,
          fill: "#333"
        }, "" + value.toLocaleString()), /*#__PURE__*/React.createElement("text", {
          x: ex + (cos >= 0 ? 1 : -1) * 12,
          y: ey,
          dy: 18,
          textAnchor: textAnchor,
          fill: "#999"
        }, (percent * 100).toFixed(0) + "%")));
      };

      var _f = React.useState(0),
          activeIndex = _f[0],
          setActiveIndex = _f[1];

      var onPieEnter = function onPieEnter(_data, index) {
        setActiveIndex(index);
      };

      var getColor = function getColor(index, type) {
        var color = colors[index % colors.length];
        var colorHex = colorToHex(color);
        return type === 'hex' ? colorHex : color;
      };

      var oRadius = withActiveSegment ? radius ? .7 * radius : '70%' : radius || '100%';
      var iRadius = withActiveSegment ? radius ? (100 - width) / 100 * oRadius : (100 - width) / 100 * 70 + "%" : radius ? (100 - width) / 100 * radius : 100 - width + "%";
      var classes = classNames((_a = {}, _a['DonutChart'] = true, _a), className);
      return /*#__PURE__*/React.createElement(Row, __assign({}, baseProps, {
        className: classes
      }), /*#__PURE__*/React.createElement(Column, __assign({}, columnOptions.chart), /*#__PURE__*/React.createElement(recharts.ResponsiveContainer, null, /*#__PURE__*/React.createElement(recharts.PieChart, null, /*#__PURE__*/React.createElement(recharts.Pie, {
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
      })))), withLegends && /*#__PURE__*/React.createElement(Column, __assign({
        className: "DonutChart-legends"
      }, columnOptions.legends), data.map(function (d, i) {
        return /*#__PURE__*/React.createElement(Legend, {
          key: i,
          iconAppearance: getColor(i)
        }, d.name + " - " + (+d.value).toLocaleString());
      })));
    };

    var Label = function Label(props) {
      var _a;

      var _b = props.required,
          required = _b === void 0 ? false : _b,
          _c = props.withInput,
          withInput = _c === void 0 ? false : _c,
          disabled = props.disabled,
          children = props.children,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var LabelClass = classNames((_a = {
        Label: true
      }, _a['Label--withInput'] = withInput, _a["" + className] = className, _a));
      var classes = classNames({
        'Label-label': true,
        'Label--disabled': disabled
      });
      return /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
        className: LabelClass
      }), /*#__PURE__*/React.createElement(GenericText, {
        className: classes,
        componentType: "label"
      }, children), required && /*#__PURE__*/React.createElement("span", {
        className: "Label-requiredIndicator"
      }));
    };
    Label.displayName = 'Label';

    var Legend = function Legend(props) {
      var _a;

      var _b = props.iconAppearance,
          iconAppearance = _b === void 0 ? 'inverse' : _b,
          _c = props.iconSize,
          iconSize = _c === void 0 ? 16 : _c,
          labelAppearance = props.labelAppearance,
          children = props.children,
          labelWeight = props.labelWeight,
          _onMouseEnter = props.onMouseEnter,
          _onMouseLeave = props.onMouseLeave,
          _onClick = props.onClick,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var legendClass = classNames((_a = {}, _a['Legend'] = true, _a), className);
      var styles = {
        background: "var(--" + iconAppearance + ")",
        height: iconSize + "px",
        width: iconSize + "px"
      };
      return /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
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

    var Link = function Link(props) {
      var children = props.children,
          className = props.className,
          rest = __rest(props, ["children", "className"]);

      var classes = classNames({
        Link: true
      }, className);
      return /*#__PURE__*/React.createElement(GenericText, __assign({
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
      var _a, _b;

      var _c = props.appearance,
          appearance = _c === void 0 ? 'default' : _c,
          title = props.title,
          children = props.children,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var MessageClass = classNames((_a = {}, _a['Message'] = true, _a["Message--" + appearance] = appearance, _a), className);
      var MessageIcon = classNames((_b = {}, _b['Message-icon'] = true, _b["Message-icon--" + appearance] = appearance, _b['Message-icon--withTitle'] = title, _b));
      return /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
        className: MessageClass
      }), appearance !== 'default' && /*#__PURE__*/React.createElement("div", {
        className: MessageIcon
      }, /*#__PURE__*/React.createElement(Icon, {
        name: IconMapping[appearance],
        appearance: appearance
      })), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
        className: "Message-title"
      }, /*#__PURE__*/React.createElement(Heading, {
        size: "s"
      }, title)), /*#__PURE__*/React.createElement("div", {
        className: "Message-description"
      }, children)));
    };
    Message.displayName = 'Message';

    var OutsideClick = function (_super) {
      __extends(OutsideClick, _super);

      function OutsideClick(props) {
        var _this = _super.call(this, props) || this;

        _this.handleOutsideClick = function (event) {
          var onOutsideClick = _this.props.onOutsideClick;
          var element = _this.container;

          if (!event.target || !element.current) {
            return;
          }

          if (!ReactDOM.findDOMNode(element.current).contains(event.target)) {
            onOutsideClick(event);
          }
        };

        _this.container = /*#__PURE__*/React.createRef();
        return _this;
      }

      OutsideClick.prototype.componentDidMount = function () {
        document.addEventListener('click', this.handleOutsideClick, true);
      };

      OutsideClick.prototype.componentWillUnmount = function () {
        document.removeEventListener('click', this.handleOutsideClick);
      };

      OutsideClick.prototype.render = function () {
        var children = this.props.children;
        return /*#__PURE__*/React.cloneElement(React.Children.only(children), {
          ref: this.container
        });
      };

      return OutsideClick;
    }(React.Component);

    var Paragraph = function Paragraph(props) {
      var _a;

      var _b = props.appearance,
          appearance = _b === void 0 ? 'default' : _b,
          children = props.children,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var classes = classNames((_a = {
        Text: true
      }, _a["Text--" + appearance] = appearance, _a), className);
      return /*#__PURE__*/React.createElement(GenericText, __assign({}, baseProps, {
        className: classes,
        componentType: "p"
      }), children);
    };
    Paragraph.displayName = 'Paragraph';

    var ProgressBar = function ProgressBar(props) {
      var _a = props.max,
          max = _a === void 0 ? 100 : _a,
          value = props.value,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var style = {
        width: value > 0 ? Math.min(value, max) * 100 / max + "%" : '0'
      };
      var ProgressBarClass = classNames({
        ProgressBar: true
      }, className);
      return /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
        className: ProgressBarClass
      }), /*#__PURE__*/React.createElement("div", {
        className: 'ProgressBar-indicator',
        style: style
      }));
    };
    ProgressBar.displayName = 'ProgressBar';

    var Radio = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
      var _a, _b, _c;

      var _d = props.size,
          size = _d === void 0 ? 'regular' : _d,
          label = props.label,
          disabled = props.disabled,
          onChange = props.onChange,
          name = props.name,
          value = props.value,
          defaultChecked = props.defaultChecked,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var ref = React.useRef(null);
      React.useImperativeHandle(forwardedRef, function () {
        return ref.current;
      });
      var RadioClass = classNames((_a = {}, _a['Radio'] = true, _a['Radio--disabled'] = disabled, _a["Radio--" + size] = size, _a), className);
      var RadioWrapper = classNames((_b = {}, _b['Radio-wrapper'] = true, _b["Radio-wrapper--" + size] = size, _b));
      var RadioOuterWrapper = classNames((_c = {}, _c['Radio-outerWrapper'] = true, _c["Radio-outerWrapper--" + size] = size, _c));

      var onChangeHandler = function onChangeHandler(event) {
        if (onChange) onChange(event);
      };

      var id = name + "-" + label + "-" + uidGenerator();
      return /*#__PURE__*/React.createElement("div", {
        className: RadioClass
      }, /*#__PURE__*/React.createElement("div", {
        className: RadioOuterWrapper
      }, /*#__PURE__*/React.createElement("input", __assign({}, baseProps, {
        type: "radio",
        disabled: disabled,
        defaultChecked: defaultChecked,
        ref: ref,
        name: name,
        value: value,
        onChange: onChangeHandler,
        className: "Radio-input",
        id: id
      })), /*#__PURE__*/React.createElement("span", {
        className: RadioWrapper
      })), label && /*#__PURE__*/React.createElement("label", {
        className: "Radio-label",
        htmlFor: id
      }, /*#__PURE__*/React.createElement(Text, {
        small: size === 'tiny'
      }, label)));
    });
    Radio.displayName = 'Radio';

    var Row = function Row(props) {
      var _a;

      var className = props.className,
          children = props.children;
      var baseProps = extractBaseProps(props);
      var classes = classNames((_a = {
        Row: true
      }, _a["" + className] = className, _a));
      return /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
        className: classes
      }), children);
    };
    Row.displayName = 'Row';

    var StatusHint = function StatusHint(props) {
      var _a, _b;

      var _c = props.appearance,
          appearance = _c === void 0 ? 'default' : _c,
          children = props.children,
          _onMouseEnter = props.onMouseEnter,
          _onMouseLeave = props.onMouseLeave,
          _onClick = props.onClick,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var StatusHintClass = classNames((_a = {}, _a['StatusHint'] = true, _a), className);
      var StatusHintIconClass = classNames((_b = {}, _b['StatusHint-icon'] = true, _b["StatusHint--" + appearance] = appearance, _b));
      return /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
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
        className: StatusHintIconClass
      }), /*#__PURE__*/React.createElement(Text, {
        weight: 'medium'
      }, children));
    };
    StatusHint.displayName = 'StatusHint';

    var Pills = function Pills(props) {
      var _a;

      var _b = props.appearance,
          appearance = _b === void 0 ? 'secondary' : _b,
          children = props.children,
          subtle = props.subtle,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var classes = classNames((_a = {
        Pills: true
      }, _a["Badge--" + appearance] = appearance && !subtle, _a["Badge--subtle-" + appearance] = subtle, _a), className);
      return /*#__PURE__*/React.createElement("span", __assign({}, baseProps, {
        className: classes
      }), children);
    };
    Pills.displayName = 'Pills';

    var Switch = /*#__PURE__*/React.forwardRef(function (props, ref) {
      var _a, _b;

      var _c = props.size,
          size = _c === void 0 ? 'regular' : _c,
          _d = props.appearance,
          appearance = _d === void 0 ? 'primary' : _d,
          defaultChecked = props.defaultChecked,
          disabled = props.disabled,
          onChange = props.onChange,
          name = props.name,
          value = props.value,
          className = props.className;
      var baseProps = extractBaseProps(props);

      var _e = React.useState(props.checked === undefined ? defaultChecked : props.checked),
          checked = _e[0],
          setChecked = _e[1];

      React.useEffect(function () {
        if (props.checked !== undefined) setChecked(props.checked);
      }, [props.checked]);
      var SwitchClass = classNames((_a = {}, _a['Switch'] = true, _a['Switch--disabled'] = disabled, _a["Switch--" + size] = size, _a), className);
      var SwitchWrapper = classNames((_b = {}, _b['Switch-wrapper'] = true, _b['Switch-wrapper--disabled'] = disabled, _b["Switch-wrapper--" + size] = size, _b["Switch-wrapper--" + appearance] = appearance, _b['Switch-wrapper--checked'] = checked, _b['Switch-wrapper--checkedDisabled'] = checked && disabled, _b));

      var onChangeHandler = function onChangeHandler(event) {
        if (props.checked === undefined) setChecked(!checked);
        if (onChange) onChange(event, !checked);
      };

      return /*#__PURE__*/React.createElement("div", {
        className: SwitchClass
      }, /*#__PURE__*/React.createElement("input", __assign({}, baseProps, {
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
      var _a, _b;

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
          onFocus = props.onFocus,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var classes = classNames((_a = {}, _a['Textarea'] = true, _a), className);
      var TextareaClass = classNames((_b = {}, _b['Textarea-textarea'] = true, _b['Textarea-textarea--error'] = error, _b));
      return /*#__PURE__*/React.createElement("div", {
        className: classes
      }, /*#__PURE__*/React.createElement("textarea", __assign({}, baseProps, {
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
    Textarea.defaultProps = {
      rows: 3
    };
    Textarea.displayName = 'Textarea';

    var ActionButton = function ActionButton(props) {
      var _a;

      var _b = props.appearance,
          appearance = _b === void 0 ? 'default' : _b,
          label = props.label,
          onClick = props.onClick;
      var buttonClass = classNames((_a = {}, _a['Button'] = true, _a['Button--tiny'] = true, _a['Toast-actionButton'] = true, _a["Toast-actionButton--" + appearance] = appearance, _a));

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
      var _a, _b;

      var _c = props.appearance,
          appearance = _c === void 0 ? 'default' : _c,
          title = props.title,
          message = props.message,
          actions = props.actions,
          onClose = props.onClose,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var wrapperClass = classNames((_a = {}, _a['Toast'] = true, _a["Toast--" + appearance] = appearance, _a), className);
      var IconMapping = {
        info: 'info',
        success: 'check_circle',
        alert: 'info',
        warning: 'info'
      };
      var icon = IconMapping[appearance];
      var titleClass = classNames((_b = {}, _b['Toast-title'] = true, _b['Toast-title--withMessage'] = message, _b));

      var iconClass = function iconClass(align) {
        var _a;

        return classNames((_a = {}, _a['Toast-icon'] = true, _a["Toast-icon--" + align] = align, _a));
      };

      var onCloseHandler = function onCloseHandler() {
        if (onClose) onClose();
      };

      return /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
        className: wrapperClass
      }), icon && /*#__PURE__*/React.createElement("div", {
        className: iconClass('left')
      }, /*#__PURE__*/React.createElement(Icon, {
        name: icon,
        appearance: appearance !== 'warning' ? 'white' : 'default'
      })), /*#__PURE__*/React.createElement("div", {
        className: "Toast-body"
      }, /*#__PURE__*/React.createElement("div", {
        className: titleClass
      }, /*#__PURE__*/React.createElement(Heading, {
        size: "s",
        appearance: appearance !== 'warning' ? 'white' : 'default'
      }, title), /*#__PURE__*/React.createElement("div", {
        onClick: onCloseHandler
      }, /*#__PURE__*/React.createElement("div", {
        className: iconClass('right')
      }, /*#__PURE__*/React.createElement(Icon, {
        name: 'close',
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

    var Tooltip = function (_super) {
      __extends(Tooltip, _super);

      function Tooltip(props) {
        var _this = _super.call(this, props) || this;

        _this.onToggle = function (open) {
          _this.setState({
            open: open
          });
        };

        _this.state = {
          open: false
        };
        return _this;
      }

      Tooltip.prototype.componentWillUnmount = function () {
        this.setState({
          open: false
        });
      };

      Tooltip.prototype.render = function () {
        var _a = this.props,
            _b = _a.appendToBody,
            appendToBody = _b === void 0 ? true : _b,
            _c = _a.position,
            tooltip = _a.tooltip,
            children = _a.children,
            className = _a.className,
            triggerClass = _a.triggerClass,
            props = __rest(_a, ["appendToBody", "position", "tooltip", "children", "className", "triggerClass"]);

        var tooltipWrapper = /*#__PURE__*/React.createElement("div", __assign({
          className: "Tooltip"
        }, props), tooltip);
        return /*#__PURE__*/React.createElement(PopperWrapper, {
          trigger: children,
          placement: this.props.position,
          appendToBody: appendToBody,
          on: 'hover',
          offset: 'Medium',
          onToggle: this.onToggle,
          open: this.state.open,
          triggerClass: triggerClass
        }, tooltipWrapper);
      };

      return Tooltip;
    }(React.Component);

    var useEffect$1 = React.useEffect,
        useState$1 = React.useState;

    var Modal = function Modal(props) {
      var _a;

      var _b = props.dimension,
          dimension = _b === void 0 ? 'small' : _b,
          children = props.children,
          backdropClose = props.backdropClose,
          backdrop = props.backdrop,
          className = props.className;

      var _c = useState$1(props.open),
          open = _c[0],
          setOpen = _c[1];

      var _d = useState$1(false),
          animate = _d[0],
          setAnimate = _d[1];

      var classes = classNames((_a = {
        Modal: true
      }, _a["Modal--" + dimension] = dimension, _a['Modal--open'] = open, _a['Modal-animation--open'] = animate, _a['Modal-animation--close'] = !animate, _a), className);
      var baseProps = extractBaseProps(props);
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
      }, /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
        className: classes
      }), children));
      var ModalWrapper = backdrop ? /*#__PURE__*/React.createElement(OutsideClick, {
        onOutsideClick: function onOutsideClick(event) {
          return open && backdropClose(event, 'OutsideClick');
        }
      }, ModalContainer) : ModalContainer;
      var WrapperElement = /*#__PURE__*/ReactDOM.createPortal(ModalWrapper, document.body);
      return /*#__PURE__*/React.createElement("div", null, WrapperElement, /*#__PURE__*/React.createElement(Backdrop, {
        open: open
      }));
    };

    Modal.displayName = 'Modal';

    var ModalHeader = function ModalHeader(props) {
      var _a;

      var className = props.className,
          _b = props.heading,
          heading = _b === void 0 ? '' : _b,
          _c = props.icon,
          icon = _c === void 0 ? '' : _c,
          _d = props.subHeading,
          subHeading = _d === void 0 ? '' : _d;
      var baseProps = extractBaseProps(props);
      var classes = classNames({
        'Modal-header': true
      }, className);
      var subheaderClasses = classNames((_a = {
        'Modal-header-subheader': true
      }, _a['Modal-header-subheader--withIcon'] = icon, _a));

      var getCloseButton = function getCloseButton() {
        var onClose = props.onClose;
        return /*#__PURE__*/React.createElement("div", {
          className: "Modal-close-icon",
          onClick: function onClick(event) {
            return onClose(event, 'IconClick');
          }
        }, /*#__PURE__*/React.createElement(Icon, {
          name: 'close'
        }));
      };

      var getHeaderIcon = function getHeaderIcon() {
        return /*#__PURE__*/React.createElement("div", {
          className: "Modal-header-icon"
        }, /*#__PURE__*/React.createElement(Icon, {
          name: icon
        }));
      };

      var closeButton = getCloseButton();
      return /*#__PURE__*/React.createElement("div", {
        className: "Modal-header-wrapper"
      }, /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
        className: classes
      }), icon && getHeaderIcon(), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Heading, null, heading)), closeButton), subHeading && /*#__PURE__*/React.createElement("div", {
        className: subheaderClasses
      }, /*#__PURE__*/React.createElement(Text, {
        appearance: "subtle"
      }, subHeading)));
    };
    ModalHeader.displayName = 'ModalHeader';

    var ModalDescription = function ModalDescription(props) {
      var _a;

      var _b = props.title,
          title = _b === void 0 ? '' : _b,
          _c = props.description,
          description = _c === void 0 ? '' : _c,
          _d = props.removePadding,
          removePadding = _d === void 0 ? false : _d,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var classes = classNames((_a = {
        'Modal-description': true
      }, _a['pl-6 pr-6'] = !removePadding, _a), className);
      return /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
        className: classes
      }), title && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Text, {
        weight: "strong"
      }, title)), description && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Text, null, description)));
    };
    ModalDescription.displayName = 'ModalDescription';

    var ModalFooter = function ModalFooter(props) {
      var children = props.children,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var classes = classNames({
        'Modal-footer': true
      }, className);
      return /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
        className: classes
      }), children);
    };
    ModalFooter.displayName = 'ModalFooter';

    var Dialog = function Dialog(props) {
      var _a = props.dimension,
          dimension = _a === void 0 ? 'small' : _a,
          _b = props.primaryButtonAppearance,
          primaryButtonAppearance = _b === void 0 ? 'primary' : _b,
          _c = props.secondaryButtonAppearance,
          secondaryButtonAppearance = _c === void 0 ? 'basic' : _c,
          open = props.open,
          onClose = props.onClose,
          icon = props.icon,
          _d = props.heading,
          heading = _d === void 0 ? '' : _d,
          _e = props.title,
          title = _e === void 0 ? '' : _e,
          _f = props.description,
          description = _f === void 0 ? '' : _f,
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
      return /*#__PURE__*/React.createElement(Modal, __assign({}, baseProps, modalOptions), /*#__PURE__*/React.createElement(ModalHeader, __assign({}, modalHeaderOptions)), /*#__PURE__*/React.createElement(ModalDescription, __assign({}, modalDescriptionOptions)), /*#__PURE__*/React.createElement(ModalFooter, null, /*#__PURE__*/React.createElement(Button, {
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
      var _a;

      var _b = useState$2(false),
          scroll = _b[0],
          setScroll = _b[1];

      var ref = useRef(null);
      var children = props.children,
          className = props.className;
      var baseProps = extractBaseProps(props);
      useEffect$2(function () {
        var scrollHeight = ref && ref.current ? ref.current.scrollHeight : 0;
        var clientHeight = ref && ref.current ? ref.current.clientHeight : 0;

        if (scrollHeight > clientHeight) {
          setScroll(true);
        }
      }, [ref]);
      var classes = classNames((_a = {
        'Modal-body': true
      }, _a['Modal-body--border'] = scroll, _a), className);
      return /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
        className: classes,
        ref: ref
      }), children);
    };
    ModalBody.displayName = 'ModalBody';

    var Pagination = function Pagination(props) {
      var _a, _b, _c;

      var _d = props.type,
          type = _d === void 0 ? 'basic' : _d,
          totalPages = props.totalPages,
          onPageChange = props.onPageChange,
          className = props.className;
      var baseProps = extractBaseProps(props);

      var _e = React.useState(props.page ? props.page : 1),
          page = _e[0],
          setPage = _e[1];

      var _f = React.useState(false),
          init = _f[0],
          setInit = _f[1];

      React.useEffect(function () {
        if (props.page && props.page >= 1 && props.page <= totalPages) setPage(props.page);
      }, [props.page]);
      var wrapperClass = classNames((_a = {}, _a['Pagination'] = true, _a["Pagination--" + type] = type, _a), className);
      var nextButtonWrapperClass = classNames((_b = {}, _b['Pagination-buttonWrapper'] = true, _b['Pagination-buttonWrapper--next'] = true, _b));
      var prevButtonWrapperClass = classNames((_c = {}, _c['Pagination-buttonWrapper'] = true, _c['Pagination-buttonWrapper--previous'] = true, _c));
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
      return /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
        className: wrapperClass
      }), /*#__PURE__*/React.createElement("div", {
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
        className: __spreadArrays(['ml-4'], buttonHelper).join(' ')
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
        onChange: inputChangeHandler,
        value: "" + page
      }), /*#__PURE__*/React.createElement(Text, null, " of " + totalPages + " pages")), /*#__PURE__*/React.createElement("div", {
        className: nextButtonWrapperClass
      }, /*#__PURE__*/React.createElement("div", {
        className: __spreadArrays(['mr-4'], buttonHelper).join(' ')
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

    var ProgressRing = function ProgressRing(props) {
      var _a;

      var _b = props.size,
          size = _b === void 0 ? 'regular' : _b,
          _c = props.max,
          max = _c === void 0 ? 100 : _c,
          value = props.value,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var radius = 20;
      var circumference = 2 * Math.PI * radius;
      var ProgressRingClass = classNames((_a = {
        Ring: true
      }, _a["Ring--" + size] = size, _a), className);
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
        strokeDasharray: circumference + " " + circumference
      };
      return /*#__PURE__*/React.createElement("svg", __assign({}, baseProps, {
        className: ProgressRingClass
      }, svgProps), /*#__PURE__*/React.createElement("circle", __assign({
        className: "Ring-background"
      }, circleProps)), /*#__PURE__*/React.createElement("circle", __assign({
        className: "Ring-indicator",
        strokeDashoffset: circumference - updatedValue / 100 * circumference
      }, circleProps)));
    };
    ProgressRing.displayName = 'ProgressRing';

    var DateRangePicker = function DateRangePicker(props) {
      var startDateProp = props.startDate,
          endDateProp = props.endDate,
          yearNavProp = props.yearNav,
          monthNavProp = props.monthNav,
          _a = props.open,
          openProp = _a === void 0 ? false : _a,
          _b = props.inputFormat,
          inputFormat = _b === void 0 ? 'mm/dd/yyyy' : _b,
          _c = props.outputFormat,
          outputFormat = _c === void 0 ? 'mm/dd/yyyy' : _c,
          _d = props.startInputOptions,
          startInputOptions = _d === void 0 ? {
        name: 'dateDateRangePicker-start',
        label: 'Start Date',
        placeholderChar: '_',
        placeholder: inputFormat,
        required: false,
        caption: ''
      } : _d,
          _f = props.endInputOptions,
          endInputOptions = _f === void 0 ? {
        name: 'dateDateRangePicker-end',
        label: 'End Date',
        placeholderChar: '_',
        placeholder: inputFormat,
        required: false,
        caption: ''
      } : _f,
          _g = props.mask,
          mask = _g === void 0 ? e.date[inputFormat] : _g,
          _h = props.validator,
          validator = _h === void 0 ? e$1.date : _h,
          withInput = props.withInput,
          position = props.position,
          disabledBefore = props.disabledBefore,
          disabledAfter = props.disabledAfter,
          onRangeChange = props.onRangeChange,
          rangeLimit = props.rangeLimit,
          rest = __rest(props, ["startDate", "endDate", "yearNav", "monthNav", "open", "inputFormat", "outputFormat", "startInputOptions", "endInputOptions", "mask", "validator", "withInput", "position", "disabledBefore", "disabledAfter", "onRangeChange", "rangeLimit"]);

      var _j = React.useState(false),
          init = _j[0],
          setInit = _j[1];

      var _k = React.useState(),
          startDate = _k[0],
          setStartDate = _k[1];

      var _l = React.useState(),
          endDate = _l[0],
          setEndDate = _l[1];

      var _m = React.useState(yearNavProp),
          yearNav = _m[0],
          setYearNav = _m[1];

      var _o = React.useState(monthNavProp),
          monthNav = _o[0],
          setMonthNav = _o[1];

      var _p = React.useState(openProp),
          open = _p[0],
          setOpen = _p[1];

      var _q = React.useState(false),
          startError = _q[0],
          setStartError = _q[1];

      var _r = React.useState(false),
          endError = _r[0],
          setEndError = _r[1];

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
        var sError = false;
        var eError = false;

        if (init) {
          var _a = getDateInfo(disabledBefore),
              dbYear = _a.year,
              dbMonth = _a.month,
              dbDate = _a.date;

          var _b = getDateInfo(disabledAfter),
              daYear = _b.year,
              daMonth = _b.month,
              daDate = _b.date;

          sError = !startDate ? true : compareDate(startDate, 'less', dbYear, dbMonth, dbDate) || compareDate(startDate, 'more', daYear, daMonth, daDate);
          eError = !endDate ? true : compareDate(endDate, 'less', dbYear, dbMonth, dbDate) || compareDate(endDate, 'more', daYear, daMonth, daDate);
        }

        var _c = getDateInfo(endDate),
            eYear = _c.year,
            eMonth = _c.month,
            eDate = _c.date;

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
          var _a = getDateInfo(startDate),
              sYear = _a.year,
              sMonth = _a.month,
              sDate = _a.date;

          var _b = getDateInfo(endDate),
              eYear = _b.year,
              eMonth = _b.month,
              eDate = _b.date;

          var limitDate = void 0;

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
        if (sDate && eDate) {
          if (!init) setInit(true);
        }

        if (sDate) setStartDate(sDate);
        if (eDate) setEndDate(eDate);
      };

      if (withInput) {
        var updateNav_1 = function updateNav_1(type) {
          if (type === 'start') {
            var _a = getDateInfo(startDate),
                year = _a.year,
                month = _a.month;

            setYearNav(year);
            setMonthNav(month);
          }

          if (type === 'end') {
            var _b = getDateInfo(endDate),
                year = _b.year,
                month = _b.month;

            setYearNav(year);
            setMonthNav(month);
          }
        };

        var onChangeHandler_1 = function onChangeHandler_1(_e, val, type) {
          setInit(true);
          setOpen(true);

          if (type === 'start') {
            var placeholderChar = startInputOptions.placeholderChar ? startInputOptions.placeholderChar : '_';

            if (val && !val.includes(placeholderChar)) {
              var d = translateToDate(inputFormat, val, validator);

              if (d) {
                setStartDate(d);

                if (endDate) {
                  var _a = getDateInfo(endDate),
                      eYear = _a.year,
                      eMonth = _a.month,
                      eDate = _a.date;

                  if (compareDate(startDate, 'more', eYear, eMonth, eDate)) {
                    setEndDate(undefined);
                  }
                }
              }
            }
          }

          if (type === 'end') {
            var placeholderChar = endInputOptions.placeholderChar ? endInputOptions.placeholderChar : '_';

            if (val && !val.includes(placeholderChar)) {
              var d = translateToDate(inputFormat, val, validator);
              if (d) setEndDate(d);
            }
          }
        };

        var onBlurHandler_1 = function onBlurHandler_1(_e, val, type) {
          setInit(true);

          if (type === 'start') {
            var placeholderChar = startInputOptions.placeholderChar ? startInputOptions.placeholderChar : '_';
            if (!val || val.includes(placeholderChar)) setStartDate(undefined);
          }

          if (type === 'end') {
            var placeholderChar = endInputOptions.placeholderChar ? endInputOptions.placeholderChar : '_';
            if (!val || val.includes(placeholderChar)) setEndDate(undefined);
          }
        };

        var onClearHandler_1 = function onClearHandler_1(type) {
          setInit(true);

          if (type === 'start') {
            setStartDate(undefined);
            updateNav_1('end');
          }

          if (type === 'end') {
            setEndDate(undefined);
            updateNav_1('start');
          }
        };

        var onClickHandler_1 = function onClickHandler_1(type) {
          if (!open) {
            updateNav_1(type);
          }
        };

        var trigger = /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Column, {
          size: '6',
          sizeXS: '12',
          className: "DateRangePicker-input DateRangePicker-input--startDate"
        }, /*#__PURE__*/React.createElement(InputMask, __assign({}, startInputOptions, {
          mask: mask,
          value: startDate ? translateToString(inputFormat, startDate) : '',
          onChange: function onChange(e, val) {
            return onChangeHandler_1(e, val || '', 'start');
          },
          onBlur: function onBlur(e, val) {
            return onBlurHandler_1(e, val || '', 'start');
          },
          onClear: function onClear() {
            return onClearHandler_1('start');
          },
          onClick: function onClick() {
            return onClickHandler_1('start');
          },
          error: startError,
          caption: startInputOptions.required && startError ? startInputOptions.caption || 'Invalid value' : ''
        }))), /*#__PURE__*/React.createElement(Column, {
          size: '6',
          sizeXS: '12',
          className: "DateRangePicker-input DateRangePicker-input--endDate"
        }, /*#__PURE__*/React.createElement(InputMask, __assign({}, endInputOptions, {
          mask: mask,
          value: endDate ? translateToString(inputFormat, endDate) : '',
          onChange: function onChange(e, val) {
            return onChangeHandler_1(e, val || '', 'end');
          },
          onBlur: function onBlur(e, val) {
            return onBlurHandler_1(e, val || '', 'end');
          },
          onClear: function onClear() {
            return onClearHandler_1('end');
          },
          onClick: function onClick() {
            return onClickHandler_1('end');
          },
          error: endError,
          caption: endInputOptions.required && endError ? endInputOptions.caption || 'Invalid value' : ''
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
          triggerClass: "w-100",
          position: position,
          appendToBody: true,
          open: open,
          onToggle: onToggleHandler
        }, /*#__PURE__*/React.createElement(Calendar, __assign({}, rest, {
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

      return /*#__PURE__*/React.createElement(Calendar, __assign({}, rest, {
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
    DateRangePicker.displayName = 'DateRangePicker';

    var TabsWrapper = function TabsWrapper(props) {
      var _a;

      var _b = props.children,
          children = _b === void 0 ? [] : _b,
          onTabChange = props.onTabChange,
          className = props.className;
      var baseProps = extractBaseProps(props);

      var _c = React.useState(props.active && props.active < children.length ? props.active : 0),
          active = _c[0],
          setActiveTab = _c[1];

      React.useEffect(function () {
        setActiveTab(props.active && props.active < children.length ? props.active : 0);
      }, [props.active]);
      var wrapperClass = classNames((_a = {}, _a['TabsWrapper'] = true, _a), className);

      var tabClickHandler = function tabClickHandler(tabIndex) {
        setActiveTab(tabIndex);
        if (onTabChange) onTabChange(tabIndex);
      };

      var TabsHeader = children.map(function (child, index) {
        var _a;

        var _b = child.props,
            label = _b.label,
            disabled = _b.disabled;
        var tabHeaderClass = classNames((_a = {}, _a['Tab'] = true, _a['Tab--disabled'] = disabled, _a['Tab--active'] = !disabled && active === index, _a));
        return /*#__PURE__*/React.createElement("div", {
          key: index,
          className: tabHeaderClass,
          onClick: function onClick() {
            return !disabled && tabClickHandler(index);
          }
        }, label);
      });
      return /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
        className: wrapperClass
      }), /*#__PURE__*/React.createElement("div", {
        className: "TabsWrapper-header"
      }, TabsHeader), /*#__PURE__*/React.createElement("div", {
        className: "TabsWrapper-content"
      }, children[active]));
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
    function sortColumn(name, type) {
      var sortingList = this.props.sortingList;
      var index = sortingList.findIndex(function (l) {
        return l.name === name;
      });

      if (index !== -1) {
        sortingList = __spreadArrays(sortingList.slice(0, index), sortingList.slice(index + 1));
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
    function getCellSize(cellType) {
      var sizes = {
        AVATAR: {
          width: 50,
          minWidth: 50
        },
        AVATAR_WITH_TEXT: {
          width: 250
        },
        AVATAR_WITH_META_LIST: {
          width: 250
        },
        ICON: {
          width: 50,
          minWidth: 50
        },
        STATUS_HINT: {
          width: 100
        },
        WITH_META_LIST: {
          width: 200
        },
        DEFAULT: {
          width: 200
        }
      };
      return sizes[cellType];
    }

    var updateBatchData = function updateBatchData(data, rowIndexes, dataUpdate) {
      var updatedData = __spreadArrays(data);

      for (var _i = 0, rowIndexes_1 = rowIndexes; _i < rowIndexes_1.length; _i++) {
        var rowIndex = rowIndexes_1[_i];
        updatedData[rowIndex] = __assign(__assign({}, updatedData[rowIndex]), dataUpdate);
      }

      return updatedData;
    };
    function translateData(schema, data) {
      var _a;

      var newData = data;

      if (schema.translate) {
        var translatedData = schema.translate(data);
        newData = __assign(__assign({}, newData), (_a = {}, _a[schema.name] = _typeof(translatedData) === 'object' ? __assign(__assign({}, newData[schema.name]), translatedData) : translatedData, _a));
      }

      if (_typeof(newData[schema.name]) !== 'object') newData[schema.name] = {
        title: newData[schema.name]
      };
      return newData;
    }
    var filterData = function filterData(schema, data, filterList) {
      if (schema === void 0) {
        schema = [];
      }

      if (data === void 0) {
        data = [];
      }

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
      if (schema === void 0) {
        schema = [];
      }

      if (data === void 0) {
        data = [];
      }

      var sortedData = __spreadArrays(data);

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

          var _a = schema[sIndex].comparator,
              comparator = _a === void 0 ? defaultComparator : _a;
          sortedData.sort(comparator);
          if (l.type === 'desc') sortedData.reverse();
        }
      });
      return sortedData;
    };
    var paginateData = function paginateData(data, page, pageSize) {
      if (data === void 0) {
        data = [];
      }

      var start = (page - 1) * pageSize;
      var end = start + pageSize;
      var paginatedData = data.slice(start, end);
      return paginatedData;
    };

    var moveToIndex = function moveToIndex(arr, from, to) {
      if (from === to) return arr;
      var newArr = arr;

      if (from < to) {
        newArr = __spreadArrays(arr.slice(0, from), arr.slice(from + 1, to + 1), [arr[from]], arr.slice(to + 1));
      } else {
        newArr = __spreadArrays(arr.slice(0, to), [arr[from]], arr.slice(to, from), arr.slice(from + 1));
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
      var _a = _this.props,
          loading = _a.loading,
          loaderSchema = _a.loaderSchema;
      var schema = _this.props.schema;
      var init = getInit(schema);

      if (!init && loading) {
        schema = loaderSchema;
      }

      return schema;
    };

    var renderTitle = function renderTitle(props) {
      var tooltip = props.tooltip,
          cellData = props.cellData;
      var children = cellData.title;

      if (children) {
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
            small: true
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
      var _a;

      var size = props.size,
          schema = props.schema,
          loading = props.loading;
      if (schema.cellRenderer) return schema.cellRenderer(props);
      var data = !loading ? translateData(schema, props.data) : {};
      var name = schema.name,
          _b = schema.cellType,
          cellType = _b === void 0 ? 'DEFAULT' : _b,
          _c = schema.align,
          align = _c === void 0 ? 'left' : _c,
          tooltip = schema.tooltip;
      var cellData = data[name];
      var cellClass = classNames((_a = {}, _a['GridCell'] = true, _a));

      switch (cellType) {
        case 'DEFAULT':
          return /*#__PURE__*/React.createElement("div", {
            className: cellClass + " GridCell--align-" + align + " GridCell--default"
          }, loading ? /*#__PURE__*/React.createElement(PlaceholderParagraph, {
            length: "medium"
          }) : renderTitle({
            tooltip: tooltip,
            cellData: cellData
          }));

        case 'WITH_META_LIST':
          return /*#__PURE__*/React.createElement("div", {
            className: cellClass + " GridCell--metaList"
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
              className: "GridCell--align-" + align,
              imageSize: 'medium',
              round: true
            });
          }

          return /*#__PURE__*/React.createElement("div", {
            className: cellClass + " GridCell--align-" + align + " GridCell--avatar"
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
            className: cellClass + " GridCell--avatarWithText"
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
            className: cellClass + " GridCell--avatarWithText"
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
              className: "GridCell--align-" + align,
              imageSize: 'small',
              round: true
            });
          }

          return /*#__PURE__*/React.createElement("div", {
            className: cellClass + " GridCell--align-" + align + " GridCell--icon"
          }, renderIcon({
            cellData: cellData
          }));

        case 'STATUS_HINT':
          return /*#__PURE__*/React.createElement("div", {
            className: cellClass + " GridCell--align-" + align + " GridCell--statusHint"
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

    var HeaderCell = function HeaderCell(props) {
      var _this = props._this,
          schema = props.schema,
          draggable = props.draggable;
      var _a = _this.props,
          schemaProp = _a.schema,
          loading = _a.loading,
          showMenu = _a.showMenu,
          sortingList = _a.sortingList,
          filterList = _a.filterList;
      var _b = schema.sorting,
          sorting = _b === void 0 ? true : _b,
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

      var options = __spreadArrays(pinOptions, hideOptions);

      if (sorting) options = __spreadArrays(sortOptions, options);
      var classes = classNames({
        'Grid-headCell': true,
        'Grid-headCell--draggable': draggable
      });
      var filterOptions = filters ? filters.map(function (f) {
        return __assign(__assign({}, f), {
          selected: filterList[name] && filterList[name].findIndex(function (fl) {
            return fl === f.value;
          }) !== -1
        });
      }) : [];
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
      })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Heading, {
        size: "s",
        className: "ellipsis--noWrap"
      }, schema.displayName), sorting && /*#__PURE__*/React.createElement("div", {
        className: "Grid-sortingIcons"
      }, sorted ? sorted === 'asc' ? /*#__PURE__*/React.createElement(Icon, {
        name: "arrow_downward"
      }) : /*#__PURE__*/React.createElement(Icon, {
        name: "arrow_upward"
      }) : /*#__PURE__*/React.createElement(Icon, {
        name: "unfold_more"
      })))), filters && /*#__PURE__*/React.createElement(React.Fragment, null, loading && !init ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Placeholder, null)) : /*#__PURE__*/React.createElement(Dropdown, {
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
        }
      })), showMenu && /*#__PURE__*/React.createElement(React.Fragment, null, loading && !init ? /*#__PURE__*/React.createElement("span", {
        className: "ml-4"
      }, /*#__PURE__*/React.createElement(Placeholder, null)) : /*#__PURE__*/React.createElement(Dropdown, {
        key: name + "-" + sorted + "-" + pinned,
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
        }
      })), schema.resizable && /*#__PURE__*/React.createElement("span", {
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
      var _a = _this.props,
          size = _a.size,
          loading = _a.loading,
          nestedRows = _a.nestedRows;
      var expanded = expandedState[0],
          setExpanded = expandedState[1];
      return /*#__PURE__*/React.createElement("div", {
        className: "Grid-cellContent"
      }, colIndex === 0 && nestedRows && /*#__PURE__*/React.createElement(Icon, {
        className: "Grid-nestedRowTrigger",
        name: expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down',
        size: 20,
        onClick: function onClick(e) {
          e.stopPropagation();
          setExpanded(!expanded);
        }
      }), /*#__PURE__*/React.createElement(GridCell, {
        key: rowIndex + "-" + colIndex,
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
          firstCell = props.firstCell,
          schema = props.schema,
          expandedState = props.expandedState,
          draggable = props.draggable,
          data = props.data,
          rowIndex = props.rowIndex;
      var nestedRows = _this.props.nestedRows;
      var name = schema.name,
          separator = schema.separator,
          hidden = schema.hidden,
          pinned = schema.pinned,
          _a = schema.cellType,
          cellType = _a === void 0 ? 'DEFAULT' : _a;

      var _b = getCellSize(cellType),
          width = _b.width,
          _c = _b.minWidth,
          minWidth = _c === void 0 ? 100 : _c,
          _d = _b.maxWidth,
          maxWidth = _d === void 0 ? 800 : _d;

      var cellClass = classNames({
        'Grid-cell': true,
        'Grid-cell--head': head,
        'Grid-cell--body': !head,
        'Grid-cell--separator': !firstCell && separator,
        'Grid-cell--nestedRow': !head && colIndex === 0 && nestedRows
      });
      if (hidden) return null;
      return /*#__PURE__*/React.createElement("div", {
        key: rowIndex + "-" + colIndex,
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
          width: schema.width || width,
          minWidth: schema.minWidth || minWidth,
          maxWidth: schema.maxWidth || maxWidth
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
          _a = props.draggable,
          draggable = _a === void 0 ? false : _a,
          withCheckbox = props.withCheckbox;
      var _b = _this.props,
          loading = _b.loading,
          selectAll = _b.selectAll;
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
        }, loading ? /*#__PURE__*/React.createElement(Placeholder, null) : /*#__PURE__*/React.createElement(Checkbox, __assign({}, selectAll, {
          onChange: _this.onSelectAll
        })));
      };

      var renderSchema = function renderSchema(currSchema, shouldRenderCheckbox, pinned) {
        var _a;

        if (currSchema.length) {
          var classes = classNames((_a = {
            'Grid-cellGroup': true,
            'Grid-cellGroup--pinned': pinned
          }, _a["Grid-cellGroup--pinned-" + pinned] = pinned, _a['Grid-cellGroup--main'] = !pinned, _a));
          return /*#__PURE__*/React.createElement("div", {
            className: classes
          }, renderCheckbox(shouldRenderCheckbox), currSchema.map(function (s, index) {
            var cI = pinned === 'left' ? index : leftPinnedSchema.length + index;
            if (pinned === 'right') cI += unpinnedSchema.length;
            return /*#__PURE__*/React.createElement(Cell, {
              key: s.name,
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

    var GridNestedRow = function GridNestedRow(props) {
      var _this = props._this,
          data = props.data,
          rowIndex = props.rowIndex;
      var _a = _this.props,
          schema = _a.schema,
          loading = _a.loading,
          nestedRowRenderer = _a.nestedRowRenderer;
      if (nestedRowRenderer) return nestedRowRenderer({
        data: data,
        schema: schema,
        loading: loading,
        rowIndex: rowIndex
      });
      return null;
    };

    var GridRow = function GridRow(props) {
      var _this = props._this,
          schema = props.schema,
          data = props.data,
          withCheckbox = props.withCheckbox,
          rI = props.rowIndex;
      var rowRef = React.useRef(null);

      var _a = React.useState(false),
          expanded = _a[0],
          setExpanded = _a[1];

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

      var _b = _this.props,
          loading = _b.loading,
          nestedRows = _b.nestedRows;
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
        var _a;

        if (currSchema.length) {
          var classes = classNames((_a = {
            'Grid-cellGroup': true,
            'Grid-cellGroup--pinned': pinned
          }, _a["Grid-cellGroup--pinned-" + pinned] = pinned, _a['Grid-cellGroup--main'] = !pinned, _a));
          return /*#__PURE__*/React.createElement("div", {
            className: classes
          }, renderCheckbox(shouldRenderCheckbox), currSchema.map(function (s, index) {
            var cI = pinned === 'left' ? index : leftPinnedSchema.length + index;
            if (pinned === 'right') cI += unpinnedSchema.length;
            return /*#__PURE__*/React.createElement(Cell, {
              key: rI + "-" + cI,
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

      return /*#__PURE__*/React.createElement("div", {
        className: "Grid-rowWrapper"
      }, /*#__PURE__*/React.createElement("div", {
        className: rowClasses,
        onClick: onClickHandler,
        ref: rowRef
      }, renderSchema(leftPinnedSchema, !!leftPinnedSchema.length, 'left'), renderSchema(unpinnedSchema, !leftPinnedSchema.length && !!unpinnedSchema.length), renderSchema(rightPinnedSchema, false, 'right')), nestedRows && expanded && /*#__PURE__*/React.createElement("div", {
        style: {
          width: rowRef.current ? rowRef.current.clientWidth : 0
        }
      }, /*#__PURE__*/React.createElement(GridNestedRow, {
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
      var _a = _this.props,
          loading = _a.loading,
          error = _a.error,
          withPagination = _a.withPagination,
          page = _a.page,
          pageSize = _a.pageSize,
          totalRecords = _a.totalRecords,
          errorTemplate = _a.errorTemplate;

      if (error) {
        return errorTemplate ? errorTemplate({}) : /*#__PURE__*/React.createElement(Heading, null, "No results found");
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
      }, !loading && /*#__PURE__*/React.createElement("div", {
        className: "GridBody-padding",
        style: {
          height: offset * avgRowHeight + "px"
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
      }), !loading && /*#__PURE__*/React.createElement("div", {
        className: "GridBody-padding",
        style: {
          height: ((withPagination ? dummyRows : data.length) - inView - offset - 1) * avgRowHeight + "px"
        }
      }));
    };

    var MainGrid = function MainGrid(props) {
      var _a;

      var _this = props._this,
          schema = props.schema,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var _b = _this.props,
          loading = _b.loading,
          type = _b.type,
          size = _b.size,
          showHead = _b.showHead,
          draggable = _b.draggable,
          withCheckbox = _b.withCheckbox,
          data = _b.data;
      var classes = classNames((_a = {
        Grid: 'true'
      }, _a["Grid--" + type] = type, _a["Grid--" + size] = size, _a), className);
      var minRowHeight = {
        comfortable: 54,
        standard: 40,
        compressed: 32,
        tight: 24
      };

      var _c = React.useState({
        offset: 0,
        avgRowHeight: minRowHeight[size],
        inView: 20
      }),
          state = _c[0],
          setState = _c[1];

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
                  var rowHeight = items[i].clientHeight;
                  currScroll -= rowHeight;
                  newAvgHeight = (newOffset * newAvgHeight + rowHeight) / (newOffset + 1);
                  newOffset++;
                  i++;
                }

                newOffset = newOffset < data.length - inView ? newOffset : data.length - inView - 1;

                if (newOffset > offset) {
                  setState(__assign(__assign({}, state), {
                    inView: newInView,
                    offset: newOffset,
                    avgRowHeight: newAvgHeight
                  }));
                }
              } else {
                if (avgRowHeight) {
                  var diff = Math.floor(newScroll / avgRowHeight) || -1;
                  var newOffset = offset + diff;

                  if (newOffset < offset) {
                    setState(__assign(__assign({}, state), {
                      inView: newInView,
                      offset: newOffset < 0 ? 0 : newOffset
                    }));
                  }
                }
              }
            }
          }
        }
      };

      return /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
        className: classes,
        onScroll: onScrollHandler
      }), showHead && /*#__PURE__*/React.createElement(GridHead, {
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

    var Grid = function (_super) {
      __extends(Grid, _super);

      function Grid(props) {
        var _this_1 = _super.call(this, props) || this;

        _this_1.gridRef = /*#__PURE__*/React.createRef();
        _this_1.updateRenderedData = debounce(300, function (options) {
          var _a = _this_1.props,
              page = _a.page,
              pageSize = _a.pageSize,
              updateData = _a.updateData,
              withPagination = _a.withPagination,
              sortingList = _a.sortingList,
              filterList = _a.filterList;

          var opts = __assign(__assign({}, options), {
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
        });

        _this_1.updateRenderedSchema = function (newSchema) {
          var updateSchema = _this_1.props.updateSchema;

          if (updateSchema) {
            updateSchema(newSchema);
          }
        };

        _this_1.updateColumnSchema = function (name, schemaUpdate) {
          var schema = _this_1.props.schema;

          var newSchema = __spreadArrays(schema);

          var ind = newSchema.findIndex(function (s) {
            return s.name === name;
          });
          newSchema[ind] = __assign(__assign({}, newSchema[ind]), schemaUpdate);

          _this_1.updateRenderedSchema(newSchema);
        };

        _this_1.reorderCol = function (from, to) {
          var schema = _this_1.props.schema;
          var fromInd = schema.findIndex(function (s) {
            return s.name === from;
          });
          var toInd = schema.findIndex(function (s) {
            return s.name === to;
          });
          var newSchema = moveToIndex(schema, fromInd, toInd);

          _this_1.updateRenderedSchema(newSchema);
        };

        _this_1.updateSortingList = function (sortingList) {
          var updateSortingList = _this_1.props.updateSortingList;

          if (updateSortingList) {
            updateSortingList(sortingList);
          }
        };

        _this_1.updateFilterList = function (filterList) {
          var updateFilterList = _this_1.props.updateFilterList;

          if (updateFilterList) {
            updateFilterList(filterList);
          }
        };

        _this_1.onMenuChange = function (name, selected) {
          switch (selected) {
            case 'sortAsc':
              sortColumn.call(_this_1, name, 'asc');
              break;

            case 'sortDesc':
              sortColumn.call(_this_1, name, 'desc');
              break;

            case 'unsort':
              sortColumn.call(_this_1, name, 'unsort');
              break;

            case 'pinLeft':
              pinColumn.call(_this_1, name, 'left');
              break;

            case 'pinRight':
              pinColumn.call(_this_1, name, 'right');
              break;

            case 'unpin':
              pinColumn.call(_this_1, name, 'unpin');
              break;

            case 'hide':
              hideColumn.call(_this_1, name, true);
              break;
          }
        };

        _this_1.onFilterChange = function (name, selected) {
          var _a;

          var filterList = _this_1.props.filterList;

          var newFilterList = __assign(__assign({}, filterList), (_a = {}, _a[name] = selected, _a));

          _this_1.updateFilterList(newFilterList);
        };

        _this_1.onSelect = function (rowIndex, selected) {
          var onSelect = _this_1.props.onSelect;

          if (onSelect) {
            onSelect(rowIndex, selected);
          }
        };

        _this_1.onSelectAll = function (event) {
          var onSelectAll = _this_1.props.onSelectAll;

          if (onSelectAll) {
            onSelectAll(event.target.checked);
          }
        };

        _this_1.state = {};
        return _this_1;
      }

      Grid.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.withPagination !== this.props.withPagination || prevProps.page !== this.props.page) ;

        if (prevProps.loading !== this.props.loading) {
          this.gridRef.current.querySelector('.Grid').scrollTop = 0;
        }
      };

      Grid.prototype.render = function () {
        var _a = this.props,
            withPagination = _a.withPagination,
            page = _a.page,
            _onPageChange = _a.onPageChange,
            totalRecords = _a.totalRecords,
            pageSize = _a.pageSize,
            paginationType = _a.paginationType;
        var baseProps = extractBaseProps(this.props);
        var schema = getSchema(this);
        return /*#__PURE__*/React.createElement("div", {
          className: "Grid-container"
        }, /*#__PURE__*/React.createElement("div", {
          className: "Grid-wrapper",
          ref: this.gridRef
        }, /*#__PURE__*/React.createElement(MainGrid, __assign({}, baseProps, {
          _this: this,
          schema: schema
        }))), withPagination && /*#__PURE__*/React.createElement("div", {
          className: "Grid-pagination"
        }, /*#__PURE__*/React.createElement(Pagination, {
          page: page,
          totalPages: getTotalPages(totalRecords, pageSize),
          type: paginationType,
          onPageChange: function onPageChange(newPage) {
            if (_onPageChange) _onPageChange(newPage);
          }
        })));
      };

      Grid.defaultProps = {
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
      };
      return Grid;
    }(React.Component);

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
          _a = props.filterList,
          filterList = _a === void 0 ? {} : _a,
          updateFilterList = props.updateFilterList,
          _b = props.totalRecords,
          totalRecords = _b === void 0 ? 0 : _b,
          onSelectAll = props.onSelectAll,
          searchPlaceholder = props.searchPlaceholder,
          selectAll = props.selectAll,
          searchTerm = props.searchTerm,
          updateSearchTerm = props.updateSearchTerm,
          dynamicColumn = props.dynamicColumn,
          allowSelectAll = props.allowSelectAll;

      var _c = React.useState(false),
          selectAllRecords = _c[0],
          setSelectAllRecords = _c[1];

      var _d = React.useState(true),
          flag = _d[0],
          setFlag = _d[1];

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
        var _a;

        var newFilterList = __assign(__assign({}, filterList), (_a = {}, _a[name] = filters, _a));

        if (updateFilterList) {
          updateFilterList(newFilterList);
        }
      };

      var onHideColumn = function onHideColumn(selected) {
        var newSchema = schema.map(function (s) {
          return __assign(__assign({}, s), {
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

      var renderedSchema = __spreadArrays(leftPinnedSchema, unpinnedSchema, rightPinnedSchema);

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
      var label = withCheckbox && selectedCount ? selectAllRecords ? "Selected all " + totalRecords + " items" : "Selected " + selectedCount + " items on this page" : "Showing " + (!error ? totalRecords : 0) + " items";
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
      })), !showHead && /*#__PURE__*/React.createElement("div", {
        className: "Header-dropdown"
      }, !showHead && filterSchema.length > 0 && /*#__PURE__*/React.createElement("div", {
        className: "Header-filters"
      }, filterSchema.map(function (s) {
        var name = s.name,
            displayName = s.displayName,
            filters = s.filters;
        var filterOptions = filters ? filters.map(function (f) {
          return __assign(__assign({}, f), {
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
      }, !showHead && withCheckbox && !loading && /*#__PURE__*/React.createElement(Checkbox, __assign({}, selectAll, {
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
      }, "Select all " + totalRecords + " items") : /*#__PURE__*/React.createElement(Button, {
        size: "tiny",
        onClick: function onClick() {
          return setSelectAllRecords(false);
        }
      }, "Clear Selection")))), dynamicColumn && /*#__PURE__*/React.createElement("div", {
        className: "Header-hideColumns"
      }, /*#__PURE__*/React.createElement(Dropdown, {
        key: "" + flag,
        triggerSize: 'tiny',
        withCheckbox: true,
        showApplyButton: true,
        options: columnOptions,
        totalOptions: columnOptions.length,
        align: 'left',
        triggerOptions: {
          labelLimit: 0,
          customLabel: function customLabel(selected, totalOptions) {
            return "Showing " + selected + " of " + totalOptions + " columns";
          },
          customTrigger: function customTrigger(triggerLabel) {
            return /*#__PURE__*/React.createElement(Button, {
              size: "tiny",
              appearance: "transparent",
              icon: "keyboard_arrow_down_filled",
              iconAlign: "right"
            }, triggerLabel ? triggerLabel : "Showing 0 of " + columnOptions.length + " columns");
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

    var defaultProps = {
      type: 'data',
      size: 'comfortable',
      showHead: true,
      showMenu: true,
      multipleSorting: true,
      headerOptions: {},
      pageSize: 15,
      loading: false,
      draggable: true
    };

    var Table = function (_super) {
      __extends(Table, _super);

      function Table(props) {
        var _this = _super.call(this, props) || this;

        _this.updateData = debounce(250, function (_options) {
          _this.onSelect(-1, false);

          var _a = _this.props,
              fetchData = _a.fetchData,
              pageSize = _a.pageSize,
              withPagination = _a.withPagination,
              dataProp = _a.data,
              onSearch = _a.onSearch;
          var _b = _this.state,
              async = _b.async,
              page = _b.page,
              sortingList = _b.sortingList,
              filterList = _b.filterList,
              searchTerm = _b.searchTerm;
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
            _this.setState({
              loading: true
            });

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
                  error: !data.length
                });
              })["catch"](function () {
                _this.setState({
                  loading: false,
                  error: true,
                  data: []
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
              selectAll: getSelectAll$1(renderedData),
              schema: renderedSchema,
              data: renderedData
            });
          }
        });

        _this.onSelect = function (rowIndexes, selected) {
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
        };

        _this.onSelectAll = function (selected, selectAll) {
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
        };

        _this.onPageChange = function (newPage) {
          _this.setState({
            page: newPage
          });
        };

        _this.updateSchema = function (newSchema) {
          _this.setState({
            schema: newSchema
          });
        };

        _this.updateSortingList = function (newSortingList) {
          var multipleSorting = _this.props.multipleSorting;

          _this.setState({
            sortingList: multipleSorting ? __spreadArrays(newSortingList) : newSortingList.slice(-1),
            page: 1
          });
        };

        _this.updateFilterList = function (newFilterList) {
          _this.setState({
            filterList: newFilterList,
            page: 1
          });
        };

        _this.updateSearchTerm = function (newSearchTerm) {
          _this.setState({
            searchTerm: newSearchTerm,
            page: 1
          });
        };

        var async = ('fetchData' in _this.props);
        var data = props.data || [];
        var schema = props.schema || [];
        _this.state = {
          async: async,
          data: !async ? data : [],
          schema: !async ? schema : [],
          page: 1,
          sortingList: props.sortingList || [],
          filterList: props.filterList || {},
          totalRecords: !async ? data.length : 0,
          loading: !async ? props.loading || false : true,
          error: !async ? props.error || false : false,
          selectAll: getSelectAll$1([]),
          searchTerm: undefined
        };

        _this.updateData({});

        return _this;
      }

      Table.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (!this.state.async) {
          if (prevProps.loading !== this.props.loading || prevProps.error !== this.props.error) {
            var _a = this.props,
                _b = _a.data,
                data = _b === void 0 ? [] : _b,
                _c = _a.schema,
                schema = _c === void 0 ? [] : _c;
            this.setState({
              data: data,
              schema: schema,
              loading: this.props.loading || false,
              error: this.props.error || false,
              page: 1,
              totalRecords: data.length || 0,
              sortingList: [],
              filterList: {},
              selectAll: getSelectAll$1([]),
              searchTerm: undefined
            });
          }
        }

        if (prevState.page !== this.state.page) {
          var onPageChange = this.props.onPageChange;
          if (onPageChange) onPageChange(this.state.page);
        }

        if (prevState.page !== this.state.page || prevState.filterList !== this.state.filterList || prevState.sortingList !== this.state.sortingList || prevState.searchTerm !== this.state.searchTerm) {
          if (!this.props.loading) this.updateData({});
        }
      };

      Table.prototype.render = function () {
        var _a = this.props,
            showHead = _a.showHead,
            type = _a.type,
            size = _a.size,
            draggable = _a.draggable,
            nestedRows = _a.nestedRows,
            nestedRowRenderer = _a.nestedRowRenderer,
            withHeader = _a.withHeader,
            headerOptions = _a.headerOptions,
            withCheckbox = _a.withCheckbox,
            showMenu = _a.showMenu,
            withPagination = _a.withPagination,
            paginationType = _a.paginationType,
            pageSize = _a.pageSize,
            onRowClick = _a.onRowClick,
            loaderSchema = _a.loaderSchema,
            errorTemplate = _a.errorTemplate,
            className = _a.className;
        var baseProps = extractBaseProps(this.props);

        var _b = headerOptions,
            headerChildren = _b.children,
            headerAttr = __rest(_b, ["children"]);

        var classes = className ? " " + className : '';
        var totalRecords = this.state.totalRecords;
        var totalPages = getTotalPages(totalRecords, pageSize);
        return /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
          className: "Table" + classes
        }), withHeader && /*#__PURE__*/React.createElement("div", {
          className: "Table-header"
        }, /*#__PURE__*/React.createElement(Header, __assign({}, this.state, {
          updateSchema: this.updateSchema,
          updateFilterList: this.updateFilterList,
          updateSearchTerm: this.updateSearchTerm,
          showHead: showHead,
          onSelectAll: this.onSelectAll,
          withCheckbox: withCheckbox,
          withPagination: withPagination
        }, headerAttr), headerChildren)), /*#__PURE__*/React.createElement("div", {
          className: "Table-grid"
        }, /*#__PURE__*/React.createElement(Grid, __assign({}, this.state, {
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
          nestedRows: nestedRows,
          nestedRowRenderer: nestedRowRenderer,
          withPagination: withPagination && totalPages > 1,
          paginationType: paginationType,
          pageSize: pageSize,
          loaderSchema: loaderSchema,
          errorTemplate: errorTemplate,
          onRowClick: onRowClick,
          onPageChange: this.onPageChange
        }))));
      };

      Table.defaultProps = defaultProps;
      return Table;
    }(React.Component);

    var List = function List(props) {
      return /*#__PURE__*/React.createElement(Table, __assign({
        showHead: false
      }, props));
    };

    var useState$3 = React.useState;
    var Navigation = function Navigation(props) {
      var _a;

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

      var _b = useState$3({}),
          menuState = _b[0],
          setMenuState = _b[1];

      React.useEffect(function () {
        if (props.active) {
          var currMenu = getMenu(props.active);
          if (currMenu) updateMenuState(currMenu, true);
        }
      }, [props.active]);

      var getMenu = function getMenu(menu) {
        for (var _i = 0, menus_1 = menus; _i < menus_1.length; _i++) {
          var m = menus_1[_i];

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

        return null;
      };

      var updateMenuState = function updateMenuState(menu, val) {
        var _a;

        var currMenu = getMenu(menu);

        if (currMenu) {
          var nameSplit = currMenu.name.split('.');

          if (nameSplit.length > 1 || currMenu.subMenu) {
            var name_1 = nameSplit[0];

            if (autoCollapse) {
              setMenuState((_a = {}, _a[name_1] = val || !menuState[name_1], _a));
            } else {
              var menuData = __assign({}, menuState);

              menuData[name_1] = val !== undefined ? val : !menuData[name_1];
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
          var _a;

          var menuClasses = classNames((_a = {
            'Navigation-menu': true
          }, _a["Navigation-menu--" + type] = type, _a['Navigation-menu--active'] = isActive(menu), _a));
          return /*#__PURE__*/React.createElement("div", {
            key: index,
            className: menuClasses,
            onClick: function onClick() {
              return onClickHandler(menu);
            }
          }, menu.icon && /*#__PURE__*/React.createElement(Icon, {
            className: "mr-3",
            name: menu.icon,
            appearance: menu.disabled ? 'disabled' : 'default'
          }), /*#__PURE__*/React.createElement(Text, {
            appearance: menu.disabled ? 'subtle' : 'default'
          }, menu.label));
        });
        return list;
      };

      var getVerticalMenu = function getVerticalMenu() {
        var _a;

        var list = menus.map(function (menu, index) {
          var _a;

          var menuClasses = classNames((_a = {
            'Navigation-menu': true
          }, _a["Navigation-menu--" + type] = type, _a['Navigation-menu--active'] = expanded && !menuState[menu.name] && isActive(menu), _a));
          var menuIconClasses = classNames({
            'Navigation-menuIcon': true,
            'Navigation-menuIcon--active': !expanded && isActive(menu)
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
            appearance: menu.disabled ? 'disabled' : 'default'
          }), expanded && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
            className: "Navigation-menuLabel"
          }, /*#__PURE__*/React.createElement(Text, {
            appearance: menu.disabled ? 'subtle' : 'default'
          }, menu.label)), menu.subMenu && menu.subMenu.length > 0 && /*#__PURE__*/React.createElement(Icon, {
            className: "mx-4",
            name: menuState[menu.name] ? 'keyboard_arrow_up' : 'keyboard_arrow_down',
            appearance: menu.disabled ? 'disabled' : 'default'
          }))), /*#__PURE__*/React.createElement("div", {
            className: "Navigation-subMenu"
          }, menuState[menu.name] && menu.subMenu && expanded && menu.subMenu.map(function (subMenu, ind) {
            var _a;

            var subMenuClasses = classNames(menuClasses, (_a = {}, _a['Navigation-menu--subMenu'] = type, _a['Navigation-menu--active'] = isActive(subMenu), _a));
            return /*#__PURE__*/React.createElement("div", {
              key: ind,
              className: subMenuClasses,
              onClick: function onClick() {
                return onClickHandler(subMenu);
              }
            }, /*#__PURE__*/React.createElement(Text, {
              appearance: subMenu.disabled ? 'subtle' : 'default'
            }, subMenu.label));
          })));
        });
        var footerClasses = classNames((_a = {
          'Navigation-footer': true
        }, _a['Navigation-footer--border'] = true, _a));
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

      var classes = classNames((_a = {}, _a['Navigation'] = true, _a["Navigation--" + type] = type, _a['Navigation--collapsed'] = !expanded, _a), className);
      return /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
        className: classes
      }), type === 'horizontal' ? getHorizontalMenu(menus) : getVerticalMenu());
    };
    Navigation.defaultProps = {
      type: 'horizontal',
      menus: [],
      expanded: true,
      footer: false,
      autoCollapse: true
    };

    var PageHeader = function PageHeader(props) {
      var _a;

      var title = props.title,
          navigation = props.navigation,
          actions = props.actions,
          tabs = props.tabs,
          breadcrumbs = props.breadcrumbs,
          badge = props.badge,
          status = props.status,
          meta = props.meta,
          navigationPosition = props.navigationPosition,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var wrapperClasses = classNames((_a = {
        'PageHeader-wrapper': true
      }, _a['PageHeader-wrapper--withTabs'] = tabs, _a), className);
      var classes = classNames({
        PageHeader: true
      });
      return /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
        className: wrapperClasses
      }), breadcrumbs && breadcrumbs, /*#__PURE__*/React.createElement("div", {
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
      }, (!breadcrumbs || navigationPosition === 'center') && navigation)), /*#__PURE__*/React.createElement(Column, {
        size: "4",
        sizeXL: "4",
        sizeM: "4"
      }, actions))), (status || meta) && /*#__PURE__*/React.createElement("div", {
        className: "PageHeader-statusWrapper"
      }, status, meta), breadcrumbs && navigationPosition === 'bottom' && /*#__PURE__*/React.createElement("div", {
        className: "PageHeader-navigationWrapper"
      }, navigation), tabs && /*#__PURE__*/React.createElement("div", null, tabs));
    };
    PageHeader.defaultProps = {
      title: '',
      navigation: null,
      actions: null,
      tabs: null,
      breadcrumbs: null,
      badge: null,
      status: null,
      meta: null,
      navigationPosition: 'center'
    };

    exports.Avatar = Avatar;
    exports.Backdrop = Backdrop;
    exports.Badge = Badge;
    exports.Breadcrumbs = Breadcrumbs;
    exports.Button = Button;
    exports.Caption = Caption;
    exports.Card = Card;
    exports.Checkbox = Checkbox;
    exports.Chip = Chip;
    exports.ChipGroup = ChipGroup;
    exports.Column = Column;
    exports.DatePicker = DatePicker;
    exports.DateRangePicker = DateRangePicker;
    exports.Dialog = Dialog;
    exports.DonutChart = DonutChart;
    exports.Dropdown = Dropdown;
    exports.Grid = Grid;
    exports.Heading = Heading;
    exports.Icon = Icon;
    exports.Input = Input;
    exports.InputMask = InputMask;
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
    exports.PageHeader = PageHeader;
    exports.Pagination = Pagination;
    exports.Paragraph = Paragraph;
    exports.Pills = Pills;
    exports.Placeholder = Placeholder;
    exports.PlaceholderParagraph = PlaceholderParagraph;
    exports.Popover = Popover;
    exports.ProgressBar = ProgressBar;
    exports.ProgressRing = ProgressRing;
    exports.Radio = Radio;
    exports.Row = Row;
    exports.Spinner = Spinner;
    exports.StatusHint = StatusHint;
    exports.Subheading = Subheading;
    exports.Switch = Switch;
    exports.Tab = Tab;
    exports.Table = Table;
    exports.TabsWrapper = TabsWrapper;
    exports.Text = Text;
    exports.Textarea = Textarea;
    exports.Toast = Toast;
    exports.Tooltip = Tooltip;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
