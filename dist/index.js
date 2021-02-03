
  /**
   * Generated on: 1612363784246 
   *      Package: @innovaccer/design-system
   *      Version: v1.6.0-1
   *      License: MIT
   *         Docs: https://innovaccer.github.io/design-system
   */

    
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom'), require('react-popper'), require('classnames'), require('recharts')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom', 'react-popper', 'classnames', 'recharts'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.inno = {}, global.React, global.ReactDOM, global.ReactPopper, global.classNames, global.recharts));
}(this, (function (exports, React, ReactDOM, reactPopper, classNames, recharts) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
    var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);

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

        _this.findDOMNode = function (ref) {
          return ReactDOM.findDOMNode(ref.current);
        };

        _this.doesEventContainsElement = function (event, ref) {
          var el = _this.findDOMNode(ref);

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

        _this.state = {};
        _this.hoverableDelay = 100;
        _this.offsetMapping = {
          small: '2px',
          medium: '4px',
          large: '8px'
        };
        _this.triggerRef = /*#__PURE__*/React.createRef();
        _this.popupRef = /*#__PURE__*/React.createRef();
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
        this._timer = setTimeout(function () {
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
          onClick: function onClick() {
            return _this.togglePopper('onClick');
          }
        };
        var classes = classNames__default['default']('PopperWrapper-trigger', triggerClass);

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

        return /*#__PURE__*/React.createElement(OutsideClick, __assign({
          className: classes,
          onOutsideClick: onOutsideClickHandler
        }, options), trigger);
      };

      PopperWrapper.prototype.getPopperChildren = function (_a) {
        var ref = _a.ref,
            style = _a.style,
            placement = _a.placement,
            outOfBoundaries = _a.outOfBoundaries;
        var _b = this.props,
            offset = _b.offset,
            children = _b.children;
        var zIndex = this.state.zIndex;
        var newStyle = offset ? this.getUpdatedStyle(style, placement, offset) : style;
        var element = /*#__PURE__*/React.cloneElement(children, {
          ref: ref,
          style: __assign(__assign({}, newStyle), {
            zIndex: zIndex
          }),
          'data-placement': placement,
          'data-hide': outOfBoundaries,
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave
        });
        return element;
      };

      PopperWrapper.prototype.render = function () {
        var _this = this;

        var _a = this.props,
            placement = _a.placement,
            appendToBody = _a.appendToBody,
            open = _a.open,
            hide = _a.hide,
            boundaryElement = _a.boundaryElement;
        return /*#__PURE__*/React.createElement(reactPopper.Manager, null, /*#__PURE__*/React.createElement(reactPopper.Reference, {
          innerRef: this.triggerRef
        }, function (_a) {
          var ref = _a.ref;
          return _this.getTriggerElement(ref);
        }), open && appendToBody && /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement(reactPopper.Popper, {
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
        }, this.getPopperChildren), document.body), open && !appendToBody && /*#__PURE__*/React.createElement(reactPopper.Popper, {
          placement: placement,
          innerRef: this.popupRef
        }, this.getPopperChildren));
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
    }(React.Component);

    var colorToHex = function colorToHex(color) {
      return getComputedStyle(document.documentElement).getPropertyValue("--" + color);
    };

    var css = /*#__PURE__*/Object.freeze({
        __proto__: null,
        colorToHex: colorToHex
    });

    var _a;

    var placeholders = (_a = {}, _a['hh:mm'] = '-- : --', _a['hh:mm AM'] = '-- : -- AM', _a);
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

      var _a = getTimeObjFromStr(inputFormat, time),
          hours = _a.hours,
          minutes = _a.minutes,
          am_pm = _a.am_pm;

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
            val += hours < 10 ? "0" + hours : hours;
            break;

          case 'mm':
            val += minutes < 10 ? "0" + minutes : minutes;
            break;
        }

        if (i !== f.length - 1) val += separator;
      });
      val += isFormat12hour(format) && am_pm ? " " + am_pm : '';
      return val;
    };

    var isValid = function isValid(validators) {
      var value = [];

      for (var _i = 1; _i < arguments.length; _i++) {
        value[_i - 1] = arguments[_i];
      }

      var iterator = Array.isArray(validators) ? validators : [validators];
      return iterator.every(function (validator) {
        return validator.apply(void 0, value);
      });
    };
    var date = function date(val, format) {
      var validate = function validate(date, month, year) {
        var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (year % 400 == 0 || year % 100 != 0 && year % 4 == 0) monthLength[1] = 29;
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
      var _a = getTimeObjFromStr(format, val),
          hours = _a.hours,
          minutes = _a.minutes;

      var hoursCond = isFormat12hour(format) ? hours <= 12 : hours < 24;
      return hoursCond && minutes <= 60;
    };

    var validators = /*#__PURE__*/Object.freeze({
        __proto__: null,
        isValid: isValid,
        date: date,
        time: time
    });

    var _a$1;

    var date$1 = {
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
    var time$1 = (_a$1 = {}, _a$1['hh:mm'] = [/[0-1-2]/, /\d/, ' ', ':', ' ', /[0-6]/, /\d/], _a$1['hh:mm AM'] = [/[0-1]/, /\d/, ' ', ':', ' ', /[0-6]/, /\d/, ' ', /[APap]/, 'M'], _a$1);

    var masks = /*#__PURE__*/Object.freeze({
        __proto__: null,
        date: date$1,
        rangeDate: rangeDate,
        time: time$1
    });

    var index = /*#__PURE__*/Object.freeze({
        __proto__: null,
        css: css,
        validators: validators,
        masks: masks,
        PopperWrapper: PopperWrapper
    });

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

    var initialsLength = 2;
    var Avatar = function Avatar(props) {
      var _a, _b, _c;

      var withTooltip = props.withTooltip,
          tooltipPosition = props.tooltipPosition,
          size = props.size,
          children = props.children,
          firstName = props.firstName,
          lastName = props.lastName,
          className = props.className,
          appearance = props.appearance;
      var baseProps = extractBaseProps(props);
      var initials = children ? children.trim().slice(0, initialsLength) : "" + (firstName ? firstName.trim()[0] : '') + (lastName ? lastName.trim()[0] : '');
      var tooltip = children || (firstName || '') + " " + (lastName || '') || '';
      var DefaultAppearance = 'secondary';
      var colors = ['accent4', 'primary', 'accent3', 'alert', 'accent2', 'warning', 'accent1', 'success'];
      var AvatarAppearance = appearance || colors[(initials.charCodeAt(0) + (initials.charCodeAt(1) || 0)) % 8] || DefaultAppearance;
      var classes = classNames__default['default']((_a = {
        Avatar: true
      }, _a["Avatar--" + size] = size, _a["Avatar--" + AvatarAppearance] = AvatarAppearance, _a['Avatar--disabled'] = !initials || !withTooltip, _a), className);
      var ContentClass = classNames__default['default']((_b = {}, _b["Avatar-content--" + size] = size, _b["Avatar-content--" + AvatarAppearance] = AvatarAppearance, _b));
      var IconClass = classNames__default['default']((_c = {}, _c["Avatar-content--" + AvatarAppearance] = AvatarAppearance, _c));

      var renderAvatar = function renderAvatar() {
        return /*#__PURE__*/React.createElement("span", __assign({
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
      var _a, _b;

      var max = props.max,
          borderColor = props.borderColor,
          popoverOptions = props.popoverOptions,
          tooltipPosition = props.tooltipPosition,
          list = props.list,
          className = props.className;
      var popperRenderer = popoverOptions.popperRenderer,
          _c = popoverOptions.maxHeight,
          maxHeight = _c === void 0 ? 150 : _c,
          _d = popoverOptions.position,
          position = _d === void 0 ? 'bottom' : _d,
          _e = popoverOptions.on,
          on = _e === void 0 ? 'hover' : _e,
          _f = popoverOptions.dark,
          dark = _f === void 0 ? true : _f,
          _g = popoverOptions.appendToBody,
          appendToBody = _g === void 0 ? true : _g,
          _h = popoverOptions.popperClassName,
          popperClassName = _h === void 0 ? '' : _h;
      var baseProps = extractBaseProps(props);
      var extraAvatars = list.length > max ? list.length - max > 9 ? 9 : list.length - max : 0;
      var style = {
        borderRadius: '50%',
        backgroundColor: "" + borderColor,
        border: "var(--spacing-xs) solid " + borderColor,
        boxShadow: "0 0 0 var(--spacing-xs) " + borderColor
      };
      var AvatarGroupClass = classNames__default['default']((_a = {}, _a['AvatarGroup'] = true, _a), className);
      var popperClass = classNames__default['default']((_b = {}, _b['AvatarGroup-Popper'] = true, _b), popperClassName);
      var trigger = /*#__PURE__*/React.createElement("div", {
        "data-test": "DesignSystem-AvatarGroup--TriggerAvatar",
        style: style
      }, /*#__PURE__*/React.createElement(Avatar, {
        appearance: "secondary",
        firstName: "+",
        lastName: "" + extraAvatars,
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
          var _a = item.firstName,
              firstName = _a === void 0 ? '' : _a,
              _b = item.lastName,
              lastName = _b === void 0 ? '' : _b;
          var name = firstName + " " + lastName;
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

      return /*#__PURE__*/React.createElement("div", __assign({
        "data-test": "DesignSystem-AvatarGroup"
      }, baseProps, {
        className: AvatarGroupClass + " d-inline-flex"
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

      var classes = classNames__default['default']({
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

      useEffect(function () {
        if (props.open) {
          setBodyOverflow(document.body.style.overflow);
          disableBodyScroll();
          setOpen(true);
          setAnimate(true);
        }

        if (!props.open) {
          setTimeout(function () {
            setOpen(false);
          }, 120);
          setAnimate(false);
          enableBodyScroll();
        }
      }, [props.open]);
      var BackdropElement = /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement("div", __assign({
        "data-test": "DesignSystem-Backdrop",
        "data-layer": true
      }, baseProps, {
        className: classes
      })), document.body);
      return BackdropElement;
    };
    Backdrop.displayName = 'Backdrop';

    var Badge = function Badge(props) {
      var _a;

      var appearance = props.appearance,
          children = props.children,
          subtle = props.subtle,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var classes = classNames__default['default']((_a = {
        Badge: true
      }, _a["Badge--" + appearance] = appearance && !subtle, _a["Badge--subtle-" + appearance] = subtle, _a), className);
      return /*#__PURE__*/React.createElement("span", __assign({
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
    var getSelectAll = function getSelectAll(selected, optionsLength, disabledOptionsLength) {
      if (selected.length) {
        if (selected.length > 0 && disabledOptionsLength > 0 && selected.length === optionsLength - disabledOptionsLength) {
          return {
            indeterminate: true,
            checked: true
          };
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
      var _a, _b;

      var _c = props.triggerSize,
          triggerSize = _c === void 0 ? 'regular' : _c,
          _d = props.placeholder,
          placeholder = _d === void 0 ? 'Select' : _d,
          _e = props.menu,
          menu = _e === void 0 ? false : _e,
          children = props.children,
          icon = props.icon,
          disabled = props.disabled,
          open = props.open,
          inlineLabel = props.inlineLabel,
          error = props.error,
          rest = __rest(props, ["triggerSize", "placeholder", "menu", "children", "icon", "disabled", "open", "inlineLabel", "error"]);

      var buttonDisabled = disabled ? 'disabled' : 'default';
      var trimmedPlaceholder = placeholder.trim();
      var value = children ? children : trimmedPlaceholder;
      var iconName = !menu ? 'keyboard_arrow_down' : icon ? icon : 'more_horiz';
      var buttonClass = classNames__default['default']((_a = {}, _a['Button'] = true, _a['DropdownButton'] = true, _a["DropdownButton--" + triggerSize] = triggerSize, _a["DropdownButton--" + triggerSize + "Square"] = menu, _a['DropdownButton--placeholder'] = !children && !menu, _a['DropdownButton--icon'] = icon, _a['DropdownButton--open'] = open, _a['DropdownButton--error'] = error, _a));
      var textClass = classNames__default['default']((_b = {}, _b['Text'] = true, _b['Text--regular'] = true, _b['DropdownButton-text'] = true, _b));
      return /*#__PURE__*/React.createElement("button", __assign({
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
      }, "" + inlineLabel.trim().charAt(0).toUpperCase() + inlineLabel.trim().slice(1)), icon && !inlineLabel && /*#__PURE__*/React.createElement(Icon, {
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

      var appearance = props.appearance,
          size = props.size,
          children = props.children,
          weight = props.weight,
          small = props.small,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var classes = classNames__default['default']((_a = {
        Text: true
      }, _a["Text--" + appearance] = appearance, _a["Text--" + weight] = weight, _a["Text--" + size] = size, _a['Text--small'] = size === 'small' || small, _a), className);
      return /*#__PURE__*/React.createElement(GenericText, __assign({
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

    var Icon = function Icon(props) {
      var _a;

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
      var iconClass = classNames__default['default']((_a = {}, _a['material-icons'] = true, _a["material-icons-" + mapper(type)] = type && type !== 'filled', _a['Icon'] = true, _a["Icon--" + appearance] = appearance, _a["" + className] = className, _a));
      var styles = {
        fontSize: size + "px",
        width: size + "px"
      };
      return /*#__PURE__*/React.createElement("i", __assign({}, baseProps, {
        className: iconClass,
        style: styles,
        onClick: onClick
      }), type ? name + "_" + type : name);
    };
    Icon.displayName = 'Icon';
    Icon.defaultProps = {
      appearance: 'default',
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
      var CheckboxClass = classNames__default['default']((_a = {}, _a['Checkbox'] = true, _a['Checkbox--disabled'] = disabled, _a["Checkbox--" + size] = size, _a), className);
      var CheckboxOuterWrapper = classNames__default['default']((_b = {}, _b['Checkbox-outerWrapper'] = true, _b));
      var CheckboxTextClass = classNames__default['default']((_c = {}, _c['Checkbox-label'] = true, _c["Checkbox-label--" + size] = size, _c));
      var CheckboxInputWrapper = classNames__default['default']((_d = {}, _d['Checkbox-input'] = true, _d['Checkbox-input--checked'] = checked, _d['Checkbox-input--indeterminate'] = props.indeterminate, _d));
      var CheckboxWrapper = classNames__default['default']((_e = {}, _e['Checkbox-wrapper'] = true, _e["Checkbox-wrapper--" + size] = size, _e));

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
      var _a;

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
      var OptionClass = classNames__default['default']((_a = {}, _a["" + className] = true, _a['Option--icon'] = icon, _a));
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
      var _a;

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
      var OptionClass = classNames__default['default']((_a = {}, _a["" + className] = true, _a['Option--icon'] = icon, _a));
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

    var _a$2;
    var OptionTypeMapping = (_a$2 = {}, _a$2['DEFAULT'] = DefaultOption, _a$2['WITH_ICON'] = IconOption, _a$2['WITH_META'] = MetaOption, _a$2['WITH_CHECKBOX'] = CheckboxOption, _a$2['ICON_WITH_META'] = IconWithMetaOption, _a$2);

    var Option = function Option(props) {
      var _a, _b, _c, _d;

      var optionData = props.optionData,
          selected = props.selected,
          onClick = props.onClick,
          updateActiveOption = props.updateActiveOption,
          onChange = props.onChange,
          active = props.active,
          index = props.index,
          checkboxes = props.checkboxes,
          menu = props.menu;
      var _e = (optionData.optionType ? optionData : props).optionType,
          optionType = _e === void 0 ? 'DEFAULT' : _e;
      var disabled = optionData.disabled;
      var OptionClassName = classNames__default['default']((_a = {}, _a['Option'] = true, _a['Option--active'] = active, _a['Option--selected'] = selected && !menu, _a['Option--disabled'] = disabled, _a['OptionWrapper'] = true, _a));
      var CheckboxClassName = classNames__default['default']((_b = {}, _b['Option-checkbox'] = true, _b['Option-checkbox--active'] = active, _b['OptionWrapper'] = true, _b));
      var textClassName = classNames__default['default']((_c = {}, _c['Option-text'] = true, _c['Option-text--wrap'] = !props.truncateOption, _c));
      var customOptionClass = classNames__default['default']((_d = {}, _d['OptionWrapper'] = true, _d['OptionWrapper--disabled'] = disabled, _d));

      var onUpdateActiveOption = function onUpdateActiveOption() {
        if (disabled) return;
        if (updateActiveOption) updateActiveOption(index);
      };

      var onClickHandler = function onClickHandler(e) {
        if (disabled) return;
        e.stopPropagation();
        if (onClick) onClick();
      };

      var onChangeHandler = function onChangeHandler(e) {
        if (disabled) return;
        e.stopPropagation();
        if (onChange) onChange(e);
      };

      if (props.optionRenderer) {
        return /*#__PURE__*/React.createElement("div", __assign({
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

        var _a = subInfo.list,
            list = _a === void 0 ? [] : _a,
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
        dataTest: "DesignSystem-DropdownOption--" + type,
        className: checkboxes ? CheckboxClassName : OptionClassName
      });
    };

    var PlaceholderParagraph = function PlaceholderParagraph(props) {
      var _a, _b;

      var length = props.length,
          size = props.size,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var classes = classNames__default['default']((_a = {
        'Placeholder--animation': true,
        PlaceholderParagraph: true
      }, _a["PlaceholderParagraph--" + size] = size, _a));
      var wrapperClass = classNames__default['default']((_b = {
        'PlaceholderParagraph-wrapper': true
      }, _b["PlaceholderParagraph-wrapper--length-" + length] = length, _b["PlaceholderParagraph-wrapper--size-" + size] = size, _b), className);
      return /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
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
      var _a;

      var _b = props.size,
          size = _b === void 0 ? 'small' : _b,
          round = props.round,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var classes = classNames__default['default']((_a = {
        PlaceholderImage: true,
        'Placeholder--animation': true
      }, _a['PlaceholderImage--round'] = round, _a["PlaceholderImage--" + size] = size, _a), className);
      return /*#__PURE__*/React.createElement("span", __assign({}, baseProps, {
        className: classes
      }));
    };
    PlaceholderImage.displayName = 'PlaceholderImage';
    PlaceholderImage.defaultProps = {
      size: 'small'
    };

    var Placeholder = function Placeholder(props) {
      var _a, _b;

      var imageSize = props.imageSize,
          withImage = props.withImage,
          round = props.round,
          children = props.children,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var paragraphClasses = classNames__default['default']((_a = {
        'Placeholder-paragraph': true
      }, _a['Placeholder-paragraph--withImage'] = withImage, _a));
      var classes = classNames__default['default']((_b = {}, _b['Placeholder'] = true, _b), className);
      return /*#__PURE__*/React.createElement("div", __assign({
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
          return /*#__PURE__*/React__default['default'].createElement(PlaceholderParagraph, {
            length: 'large'
          });

        case 'WITH_ICON':
          return /*#__PURE__*/React__default['default'].createElement(Placeholder, {
            withImage: true,
            round: true
          }, /*#__PURE__*/React__default['default'].createElement(PlaceholderParagraph, {
            length: "large"
          }));

        case 'WITH_META':
          return /*#__PURE__*/React__default['default'].createElement(Placeholder, {
            withImage: false
          }, /*#__PURE__*/React__default['default'].createElement(PlaceholderParagraph, {
            length: "large"
          }), /*#__PURE__*/React__default['default'].createElement(PlaceholderParagraph, {
            length: "medium",
            size: "xxs"
          }));

        case 'WITH_CHECKBOX':
          return /*#__PURE__*/React__default['default'].createElement(Placeholder, {
            withImage: true
          }, /*#__PURE__*/React__default['default'].createElement(PlaceholderParagraph, {
            length: "large"
          }));

        case 'ICON_WITH_META':
          return /*#__PURE__*/React__default['default'].createElement(Placeholder, {
            withImage: true,
            round: true,
            imageSize: 'medium'
          }, /*#__PURE__*/React__default['default'].createElement(PlaceholderParagraph, {
            length: "large"
          }), /*#__PURE__*/React__default['default'].createElement(PlaceholderParagraph, {
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
          _h = props.applyButtonLabel,
          applyButtonLabel = _h === void 0 ? 'Apply' : _h,
          _j = props.cancelButtonLabel,
          cancelButtonLabel = _j === void 0 ? 'Cancel' : _j,
          _k = props.truncateOption,
          truncateOption = _k === void 0 ? true : _k,
          _l = props.withSelectAll,
          withSelectAll = _l === void 0 ? true : _l,
          _m = props.maxHeight,
          maxHeight = _m === void 0 ? 200 : _m,
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

      var _o = React.useState(),
          popoverStyle = _o[0],
          setPopoverStyle = _o[1];

      var _p = React.useState(firstEnabledOption),
          cursor = _p[0],
          setCursor = _p[1];

      React.useEffect(function () {
        var _a;

        if (dropdownOpen) {
          var width = props.width,
              minWidth = props.minWidth,
              maxWidth = props.maxWidth;
          var popperWidth = (_a = triggerRef.current) === null || _a === void 0 ? void 0 : _a.clientWidth;
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
      var _q = props.triggerSize,
          triggerSize = _q === void 0 ? 'regular' : _q,
          _r = props.placeholder,
          placeholder = _r === void 0 ? 'Select' : _r,
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
        var _a;

        var Dropdown = classNames__default['default']((_a = {}, _a['Dropdown--border'] = isGroup && index !== 0, _a));
        return Dropdown;
      };

      var getDropdownSectionClass = function getDropdownSectionClass(showClearButton) {
        var _a;

        return classNames__default['default']((_a = {}, _a['Dropdown-section'] = true, _a['Dropdown-section--withClear'] = showClearButton, _a));
      };

      var dropdownClass = classNames__default['default']((_a = {}, _a['Dropdown'] = true, _a), className);
      var dropdownWrapperClass = classNames__default['default']((_b = {}, _b['Dropdown-wrapper'] = true, _b['Dropdown-wrapper--wrap'] = !truncateOption, _b));
      var SelectAllClass = classNames__default['default']((_c = {}, _c['Option-checkbox'] = true, _c['Option-checkbox--active'] = cursor === 0, _c['OptionWrapper'] = true, _c));

      var onToggleDropdown = function onToggleDropdown(open, type) {
        var _a;

        toggleDropdown(open, type);
        if (!disabled) (_a = dropdownTriggerRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        setCursor(firstEnabledOption);
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
        var _a = props.footerLabel,
            footerLabel = _a === void 0 ? 'Search for more options' : _a;
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
        var loadingOptions = props.loadingOptions,
            searchInit = props.searchInit;
        var disable = loadingOptions && !searchInit;
        return /*#__PURE__*/React.createElement("div", {
          className: 'Dropdown-inputWrapper'
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
          tabIndex: -1,
          className: "OptionCheckbox"
        }));
      };

      var renderOptions = function renderOptions(item, index) {
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
        var _a = props.selectedSectionLabel,
            selectedSectionLabel = _a === void 0 ? 'Selected Items' : _a,
            _b = props.loadersCount,
            loadersCount = _b === void 0 ? 10 : _b,
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
        var _a, _b, _c;

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
        onKeyDown: onkeydown
      }), /*#__PURE__*/React.createElement(Popover, __assign({
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

    var Dropdown = function (_super) {
      __extends(Dropdown, _super);

      function Dropdown(props) {
        var _this = _super.call(this, props) || this;

        _this.getDisabledOptions = function (options) {
          if (options === void 0) {
            options = [];
          }

          return options.filter(function (option) {
            return option.disabled;
          });
        };

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
            updatedAsync = searchTerm === '' ? count > _this.staticLimit : updatedAsync;
            var unSelectedGroup = _showSelectedItems(updatedAsync, searchTerm, withCheckbox) ? _this.getUnSelectedOptions(options, init) : options;
            var selectedGroup = searchTerm === '' ? _this.getSelectedOptions(options, init) : [];
            var optionsLength = searchTerm === '' ? count : _this.state.optionsLength;

            var disabledOptions = _this.getDisabledOptions(unSelectedGroup.slice(0, _this.staticLimit));

            _this.setState(__assign(__assign({}, _this.state), {
              optionsLength: optionsLength,
              loading: false,
              async: updatedAsync,
              searchedOptionsLength: count,
              options: unSelectedGroup.slice(0, _this.staticLimit),
              tempSelected: init ? selectedGroup : tempSelected,
              previousSelected: init ? selectedGroup : previousSelected,
              selected: _showSelectedItems(updatedAsync, searchTerm, withCheckbox) ? selectedGroup : [],
              triggerLabel: _this.updateTriggerLabel(init ? selectedGroup : tempSelected),
              selectAll: !updatedAsync && init ? getSelectAll(selectedGroup, optionsLength, disabledOptions.length) : selectAll
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
              onClose = _a.onClose,
              name = _a.name,
              _b = _a.selected,
              selected = _b === void 0 ? [] : _b;
          var _c = _this.state,
              previousSelected = _c.previousSelected,
              tempSelected = _c.tempSelected,
              optionsLength = _c.optionsLength,
              async = _c.async,
              loading = _c.loading,
              searchTerm = _c.searchTerm,
              options = _c.options;
          var popperIsOpen = _isOpenControlled(_this.props.open) ? _this.props.open : _this.state.open;

          var disabledOptionsCount = _this.getDisabledOptions(options).length;

          if (withCheckbox && showApplyButton) {
            var temporarySelected = _isControlled(_this.props.selected) ? selected : previousSelected;

            _this.setState({
              tempSelected: temporarySelected,
              selectAll: getSelectAll(temporarySelected, optionsLength, disabledOptionsCount),
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
        };

        _this.updateTriggerLabel = function (selectedArray, totalOptions) {
          if (selectedArray === void 0) {
            selectedArray = [];
          }

          var selectedLength = selectedArray.length;
          if (selectedLength === 0) return '';
          var _a = _this.props,
              _b = _a.triggerOptions,
              triggerOptions = _b === void 0 ? {} : _b,
              getLabel = _a.getLabel;
          var customLabel = triggerOptions.customLabel,
              _c = triggerOptions.labelLimit,
              labelLimit = _c === void 0 ? 2 : _c;
          var optionsLength = _this.state ? _this.state.optionsLength : totalOptions;
          var label = '';

          if (selectedLength <= labelLimit) {
            label = selectedArray.map(function (option) {
              return option.label;
            }).join(', ');
          } else {
            label = customLabel ? customLabel(selectedLength, optionsLength, selectedArray) : selectedLength + " selected";
          }

          if (getLabel) getLabel(label);
          return label;
        };

        _this.updateSelectedOptions = function (selectedArray, isSingleSelect, isControlled) {
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
              closeOnSelect = _b.closeOnSelect,
              name = _b.name,
              onPopperToggle = _b.onPopperToggle;
          var updatePreviousSelected = withCheckbox && showApplyButton && isControlled;

          var disabledOptions = _this.getDisabledOptions(_this.state.options);

          var isClearClicked = selectedArray.length === 0 && selected.length > 0 || selectedArray.every(function (option) {
            return option.disabled;
          }) && !selected.every(function (option) {
            return option.disabled;
          });

          _this.setState(__assign(__assign({}, _this.state), {
            tempSelected: selectedArray,
            triggerLabel: _this.updateTriggerLabel(selectedArray),
            selectAll: getSelectAll(selectedArray, optionsLength, disabledOptions.length),
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
        };

        _this.onOptionSelect = function (option) {
          var _a = _this.props,
              onUpdate = _a.onUpdate,
              selected = _a.selected;

          if (_isControlled(selected)) {
            if (onUpdate) onUpdate('select-option', option);
            return;
          }

          _this.updateSelectedOptions([option], true);
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

          _this.updateSelectedOptions(selectedArray, false);
        };

        _this.onSelectAll = function (event) {
          var _a = _this.props,
              onUpdate = _a.onUpdate,
              selected = _a.selected,
              showApplyButton = _a.showApplyButton;
          var _b = _this.state,
              tempSelected = _b.tempSelected,
              options = _b.options;

          if (_isControlled(selected) && !showApplyButton) {
            if (onUpdate) onUpdate(event.target.checked ? 'select-all' : 'deselect-all');
            return;
          }

          var selectedArr = tempSelected.slice();
          var selectedDisabledArray = selectedArr.filter(function (option) {
            return option.disabled;
          });
          var selectedArray = event.target.checked ? __spreadArrays(options.filter(function (option) {
            return !option.disabled;
          }), selectedDisabledArray) : selectedDisabledArray;

          _this.updateSelectedOptions(selectedArray, false);
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
              name = _a.name,
              onUpdate = _a.onUpdate,
              showApplyButton = _a.showApplyButton,
              onChange = _a.onChange;
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
        };

        _this.onTogglePopper = function (type) {
          var onPopperToggle = _this.props.onPopperToggle;

          if (onPopperToggle && _isOpenControlled(_this.props.open)) {
            onPopperToggle(false, type);
          }
        };

        _this.onCancelOptions = function () {
          var _a = _this.state,
              previousSelected = _a.previousSelected,
              tempSelected = _a.tempSelected,
              optionsLength = _a.optionsLength;
          var _b = _this.props,
              selected = _b.selected,
              onUpdate = _b.onUpdate,
              onClose = _b.onClose,
              name = _b.name;
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

          _this.setState(__assign(__assign({}, _this.state), {
            tempSelected: previousSelected,
            selectAll: getSelectAll(previousSelected, optionsLength, disabledOptions.length),
            triggerLabel: label,
            open: popperIsOpen
          }));

          if (onClose && !popperIsOpen) {
            onClose(values, name);
          }

          _this.onTogglePopper('cancelClick');
        };

        _this.onApplyOptions = function () {
          var _a = _this.state,
              tempSelected = _a.tempSelected,
              previousSelected = _a.previousSelected;
          var _b = _this.props,
              onChange = _b.onChange,
              selected = _b.selected,
              onUpdate = _b.onUpdate,
              onClose = _b.onClose,
              name = _b.name;
          var popperIsOpen = _isOpenControlled(_this.props.open) ? _this.state.open : false;
          var values = tempSelected.map(function (option) {
            return option.value;
          });

          if (_isControlled(selected)) {
            if (onUpdate) onUpdate('apply-selected', previousSelected, tempSelected);

            _this.onTogglePopper('applyClick');

            return;
          }

          _this.setState(__assign(__assign({}, _this.state), {
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
        };

        _this.onToggleDropdown = function (updatedOpen, type) {
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
        };

        var _a = props.selected,
            selected = _a === void 0 ? [] : _a,
            totalOptions = props.totalOptions,
            withCheckbox = props.withCheckbox,
            loading = props.loading,
            open = props.open,
            options = props.options;
        _this.staticLimit = Math.min(100, props.staticLimit);
        var optionsLength = totalOptions ? totalOptions : options.length;
        var async = 'fetchOptions' in _this.props || optionsLength > _this.staticLimit;
        var selectedGroup = !async ? _this.getSelectedOptions(options, true) : [];

        var disabledOptions = _this.getDisabledOptions(options);

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
          selectAll: getSelectAll(selectedGroup, optionsLength, disabledOptions.length)
        };
        return _this;
      }

      Dropdown.prototype.componentDidMount = function () {
        var async = this.state.async;
        if (async) this.updateOptions(true);
      };

      Dropdown.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _a;

        if (!this.state.async) {
          var _b = this.props,
              loading = _b.loading,
              fetchOptions = _b.fetchOptions,
              _c = _b.options,
              options = _c === void 0 ? [] : _c,
              withSearch = _b.withSearch;
          var disabledOptionsCount = this.getDisabledOptions(options).length;

          if (prevProps.loading !== loading && !fetchOptions) {
            if (options.length > this.staticLimit) {
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
                selectAll: getSelectAll(selectedGroup, this.state.optionsLength, disabledOptionsCount)
              }));
              if (withSearch) (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
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
            _c = _b.withSelectAll,
            withSelectAll = _c === void 0 ? true : _c,
            withCheckbox = _b.withCheckbox;

        var _d = this.props,
            _e = _d.triggerOptions,
            triggerOptions = _e === void 0 ? {} : _e;
            _d.selected;
            var rest = __rest(_d, ["triggerOptions", "selected"]);

        var remainingOptionsLen = searchedOptionsLength - options.length;
        var firstEnabledOption = _isSelectAllPresent(searchTerm, remainingOptionsLen, withSelectAll, withCheckbox) ? 0 : options.findIndex(function (option) {
          return !option.disabled;
        });
        return /*#__PURE__*/React.createElement(DropdownList, __assign({
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
      };

      Dropdown.defaultProps = {
        triggerOptions: {},
        options: [],
        closeOnSelect: true,
        staticLimit: 50
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
      var BreadcrumbClass = classNames__default['default']((_a = {}, _a['Breadcrumbs'] = true, _a), className);
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

    var Spinner = function Spinner(props) {
      var _a, _b;

      var appearance = props.appearance,
          size = props.size,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var wrapperClasses = classNames__default['default']((_a = {
        Spinner: true
      }, _a["Spinner--" + size] = size, _a), className);
      var circleClasses = classNames__default['default']((_b = {
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
    Spinner.defaultProps = {
      appearance: 'primary',
      size: 'medium'
    };

    var sizeMapping = {
      tiny: 12,
      regular: 16,
      large: 20
    };
    var Button = /*#__PURE__*/React.forwardRef(function (props, ref) {
      var _a, _b, _c;

      var _d = props.size,
          size = _d === void 0 ? 'regular' : _d,
          _e = props.appearance,
          appearance = _e === void 0 ? 'basic' : _e,
          _f = props.iconAlign,
          iconAlign = _f === void 0 ? 'left' : _f,
          _g = props.tabIndex,
          tabIndex = _g === void 0 ? 0 : _g,
          type = props.type,
          children = props.children,
          icon = props.icon,
          expanded = props.expanded,
          selected = props.selected,
          loading = props.loading,
          disabled = props.disabled,
          className = props.className,
          rest = __rest(props, ["size", "appearance", "iconAlign", "tabIndex", "type", "children", "icon", "expanded", "selected", "loading", "disabled", "className"]);

      var buttonClass = classNames__default['default']((_a = {}, _a['Button'] = true, _a['Button--expanded'] = expanded, _a["Button--" + size] = size, _a["Button--" + size + "Square"] = !children, _a["Button--" + appearance] = appearance, _a['Button--selected'] = selected && (appearance === 'basic' || appearance === 'transparent'), _a["Button--iconAlign-" + iconAlign] = children && iconAlign, _a["" + className] = className, _a));
      var iconClass = classNames__default['default']((_b = {}, _b['Button-icon'] = true, _b["Button-icon--" + iconAlign] = children && iconAlign, _b));
      var spinnerClass = classNames__default['default']((_c = {}, _c['Button-spinner'] = true, _c["Button-spinner--" + iconAlign] = children && iconAlign, _c));
      return /*#__PURE__*/React.createElement("button", __assign({
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
        name: icon,
        appearance: disabled ? 'disabled' : appearance === 'basic' || appearance === 'transparent' ? selected ? 'info' : 'default' : 'white',
        size: sizeMapping[size]
      })), children);
    });
    Button.displayName = 'Button';

    var Card = /*#__PURE__*/React.forwardRef(function (props, ref) {
      var _a;

      var _b = props.shadow,
          shadow = _b === void 0 ? 'medium' : _b,
          children = props.children,
          className = props.className,
          rest = __rest(props, ["shadow", "children", "className"]);

      var classes = classNames__default['default']((_a = {
        Card: true
      }, _a["Card--shadow-" + shadow] = shadow, _a["" + className] = className, _a));
      return /*#__PURE__*/React.createElement("div", __assign({
        ref: ref
      }, rest, {
        className: classes
      }), children);
    });
    Card.displayName = 'Card';

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
        var _a;

        return classNames__default['default']((_a = {}, _a['Chip-icon'] = true, _a["Chip-icon--" + align] = align, _a['cursor-pointer'] = align === 'right' && !disabled, _a));
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
    GenericChip.displayName = 'GenericChip';

    var Chip = function Chip(props) {
      var _a;

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

      var chipClass = classNames__default['default']((_a = {
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
    Chip.defaultProps = {
      type: 'input'
    };

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

      var ChipGroupClass = classNames__default['default']((_a = {}, _a['ChipGroup'] = true, _a), className);
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

    var Column = /*#__PURE__*/React.forwardRef(function (props, ref) {
      var _a;

      var size = props.size,
          sizeXS = props.sizeXS,
          sizeS = props.sizeS,
          sizeM = props.sizeM,
          sizeL = props.sizeL,
          sizeXL = props.sizeXL,
          className = props.className,
          children = props.children,
          rest = __rest(props, ["size", "sizeXS", "sizeS", "sizeM", "sizeL", "sizeXL", "className", "children"]);

      var classes = classNames__default['default']((_a = {}, _a['Col'] = true, _a["Col--" + size] = size, _a["Col--xs-" + sizeXS] = sizeXS, _a["Col--s-" + sizeS] = sizeS, _a["Col--m-" + sizeM] = sizeM, _a["Col--l-" + sizeL] = sizeL, _a["Col--xl-" + sizeXL] = sizeXL, _a["" + className] = className, _a));
      return /*#__PURE__*/React.createElement("div", __assign({
        ref: ref
      }, rest, {
        className: classes
      }), children);
    });
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
          size = props.size,
          children = props.children,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var classes = classNames__default['default']((_a = {
        Heading: true
      }, _a["Heading--" + size] = size, _a["Heading--" + appearance] = appearance, _a), className);
      return /*#__PURE__*/React.createElement(GenericText, __assign({
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
      var _a;

      var appearance = props.appearance,
          children = props.children,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var classes = classNames__default['default']((_a = {
        Subheading: true
      }, _a["Subheading--" + appearance] = appearance, _a), className);
      return /*#__PURE__*/React.createElement(GenericText, __assign({
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
    var translateToString$1 = function translateToString(format, d) {
      if (format && d) {
        var _a = getDateInfo(d),
            year_1 = _a.year,
            month_1 = _a.month,
            date_1 = _a.date;

        var separator_1 = format.includes('/') ? '/' : '-';
        var f_1 = format.split(separator_1);
        var val = f_1.reduce(function (out, curr, i) {
          switch (curr) {
            case 'mm':
              out += (month_1 < 9 && '0') + (month_1 + 1);
              break;

            case 'yyyy':
              out += year_1;
              break;

            case 'dd':
              out += (date_1 < 10 && '0') + date_1;
              break;
          }

          if (i !== f_1.length - 1) out += separator_1;
          return out;
        }, '');
        return val;
      }

      return '';
    };
    var translateToDate = function translateToDate(format, val, validators) {
      if (validators === void 0) {
        validators = [];
      }

      if (isValid(validators, val, format)) {
        var separator = format.includes('/') ? '/' : '-';
        var year_2 = -1,
            month_2 = -1,
            date_2 = -1;
        var v_1 = val.split(separator);
        format.split(separator).forEach(function (f, i) {
          switch (f) {
            case 'mm':
              month_2 = +v_1[i] - 1;
              break;

            case 'yyyy':
              year_2 = +v_1[i];
              break;

            case 'dd':
              date_2 = +v_1[i];
              break;
          }
        });
        var d = convertToDate({
          year: year_2,
          month: month_2,
          date: date_2
        });
        return d;
      } else {
        return undefined;
      }
    };

    var Calendar = function (_super) {
      __extends(Calendar, _super);

      function Calendar(props) {
        var _this = _super.call(this, props) || this;

        _this.updateState = function (year, month, date) {
          _this.setState({
            year: year,
            month: month,
            date: date
          });
        };

        _this.getDateValue = function (year, month, date) {
          var _a = _this.props,
              disabledBefore = _a.disabledBefore,
              disabledAfter = _a.disabledAfter;
          var d = new Date(year, month, date);

          if (compareDate(disabledBefore, 'more', year, month, date) || compareDate(disabledAfter, 'less', year, month, date)) {
            return undefined;
          }

          return d;
        };

        _this.getNavDateInfo = function (index) {
          var _a = _this.state,
              yearBlockNav = _a.yearBlockNav,
              yearNav = _a.yearNav,
              monthNav = _a.monthNav;
          var monthBlock = config.monthBlock;
          var yearBlock = yearBlockNav;
          var month = (monthNav + index) % monthBlock;
          var year = yearNav + (index !== 0 && month < monthNav ? 1 : 0);
          return {
            yearBlock: yearBlock,
            year: year,
            month: month
          };
        };

        _this.getInRangeError = function () {
          var _a = _this.props,
              rangePicker = _a.rangePicker,
              rangeLimit = _a.rangeLimit;
          var _b = _this.state,
              startDateState = _b.startDate,
              endDateState = _b.endDate,
              hoverDateState = _b.hoverDate;

          if (rangePicker && rangeLimit) {
            var _c = getDateInfo(startDateState),
                startYear = _c.year,
                startMonth = _c.month,
                startDate = _c.date;

            var _d = getDateInfo(endDateState),
                endYear = _d.year,
                endMonth = _d.month,
                endDate = _d.date;

            var _e = getDateInfo(hoverDateState),
                hoverYear = _e.year,
                hoverMonth = _e.month,
                hoverDate = _e.date;

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

        _this.selectYear = function (year) {
          _this.updateState(year);

          _this.setState({
            view: 'month'
          });
        };

        _this.selectMonth = function (month) {
          _this.updateState(_this.state.yearNav, month);

          _this.setState({
            view: 'date'
          });
        };

        _this.selectDate = function (index, date) {
          var _a = _this.getNavDateInfo(index),
              year = _a.year,
              month = _a.month;

          _this.updateState(year, month, date);

          var d = _this.getDateValue(year, month, date);

          _this.setState({
            currDate: d
          });
        };

        _this.navClickHandler = function (type) {
          var _a = _this.state,
              view = _a.view,
              yearBlockNav = _a.yearBlockNav,
              yearNav = _a.yearNav,
              monthNav = _a.monthNav;
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

        _this.renderJumpButton = function (type) {
          var _a = _this.props,
              disabledBefore = _a.disabledBefore,
              disabledAfter = _a.disabledAfter;
          var _b = _this.state,
              view = _b.view,
              yearBlockNav = _b.yearBlockNav,
              yearNav = _b.yearNav,
              monthNav = _b.monthNav;
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

          var headerIconClass = classNames__default['default']({
            'Calendar-headerIcon': true,
            'Calendar-headerIcon--disabled': disabled
          });
          return /*#__PURE__*/React.createElement(Icon, {
            name: "arrow_" + (type === 'next' ? 'forward' : 'back'),
            className: headerIconClass,
            onClick: function onClick() {
              return _this.navClickHandler(type);
            }
          });
        };

        _this.renderHeaderContent = function (index) {
          var monthsInView = _this.props.monthsInView;
          var _a = _this.state,
              view = _a.view,
              yearBlockNav = _a.yearBlockNav;
          var yearBlockRange = config.yearBlockRange,
              months = config.months;
          var _b = _this.props.jumpView,
              jumpView = _b === void 0 ? true : _b;

          if (jumpView) {
            if (monthsInView > 1) jumpView = false;
          }

          var _c = _this.getNavDateInfo(index),
              yearNavVal = _c.year,
              monthNavVal = _c.month;

          var headerContentClass = classNames__default['default']({
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

          if (view === 'year') headerContent = yearBlockNav + " - " + (yearBlockNav + (yearBlockRange - 1));
          if (view === 'month') headerContent = "" + yearNavVal;
          return /*#__PURE__*/React.createElement("div", {
            className: headerContentClass
          }, view !== 'date' && /*#__PURE__*/React.createElement("span", {
            onClick: function onClick() {
              return onClickHandler(view);
            }
          }, /*#__PURE__*/React.createElement(Heading, {
            size: "s"
          }, headerContent)), view === 'date' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
            onClick: function onClick() {
              return onClickHandler(view);
            }
          }, /*#__PURE__*/React.createElement(Heading, {
            size: "s"
          }, months[monthNavVal])), "\xA0", /*#__PURE__*/React.createElement("span", {
            onClick: function onClick() {
              return onClickHandler('month');
            }
          }, /*#__PURE__*/React.createElement(Heading, {
            size: "s"
          }, yearNavVal))));
        };

        _this.renderBodyYear = function () {
          var yearBlockRange = config.yearBlockRange,
              yearsInRow = config.yearsInRow;
          var _a = _this.props,
              rangePicker = _a.rangePicker,
              disabledBefore = _a.disabledBefore,
              disabledAfter = _a.disabledAfter;
          var _b = _this.state,
              yearBlockNav = _b.yearBlockNav,
              yearNav = _b.yearNav;
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
              var valueClass = classNames__default['default']({
                'Calendar-value': true,
                'Calendar-value--active': active,
                'Calendar-value--disabled': disabled
              });
              return /*#__PURE__*/React.createElement("div", {
                key: row + "-" + col,
                className: valueClass,
                onClick: function onClick() {
                  return _this.selectYear(year);
                }
              }, /*#__PURE__*/React.createElement(Text, {
                appearance: active ? 'white' : disabled ? 'disabled' : 'default'
              }, "" + year));
            }));
          });
        };

        _this.renderBodyMonth = function () {
          var monthBlock = config.monthBlock,
              monthsInRow = config.monthsInRow,
              months = config.months;
          var _a = _this.props,
              disabledBefore = _a.disabledBefore,
              disabledAfter = _a.disabledAfter;
          var _b = _this.state,
              yearNav = _b.yearNav,
              monthNav = _b.monthNav,
              year = _b.year;
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
              var valueClass = classNames__default['default']({
                'Calendar-value': true,
                'Calendar-value--active': active,
                'Calendar-value--dummy': disabled
              });
              return /*#__PURE__*/React.createElement("div", {
                key: row + "-" + col,
                className: valueClass,
                onClick: function onClick() {
                  return _this.selectMonth(month);
                }
              }, /*#__PURE__*/React.createElement(Text, {
                appearance: active ? 'white' : disabled ? 'disabled' : 'default'
              }, months[month]));
            }));
          });
        };

        _this.renderBodyDate = function (index) {
          var daysInRow = config.daysInRow,
              days = config.days;
          var _a = _this.props,
              rangePicker = _a.rangePicker,
              firstDayOfWeek = _a.firstDayOfWeek;

          var onMouseLeaveHandler = function onMouseLeaveHandler() {
            if (rangePicker) {
              _this.setState({
                hoverDate: undefined
              });
            }
          };

          return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
            className: "Calendar-dayValues"
          }, Array.from({
            length: 7
          }, function (_x, day) {
            var valueClass = classNames__default['default']({
              'Calendar-value': true,
              'Calendar-value--dummy': true
            });
            var dayValue = (day + daysInRow + getIndexOfDay(firstDayOfWeek)) % daysInRow;
            return /*#__PURE__*/React.createElement(Subheading, {
              key: day,
              className: valueClass,
              appearance: "disabled"
            }, days[dayValue]);
          })), /*#__PURE__*/React.createElement("div", {
            className: "Calendar-dateValues",
            onMouseLeave: onMouseLeaveHandler
          }, _this.renderDateValues(index)));
        };

        _this.renderDateValues = function (index) {
          var daysInRow = config.daysInRow;
          var _a = _this.props,
              rangePicker = _a.rangePicker,
              firstDayOfWeek = _a.firstDayOfWeek,
              disabledBefore = _a.disabledBefore,
              disabledAfter = _a.disabledAfter;
          var _b = _this.state,
              startDate = _b.startDate,
              endDate = _b.endDate,
              hoverDate = _b.hoverDate;
          var _c = _this.state,
              yearState = _c.year,
              monthState = _c.month,
              dateState = _c.date;

          var _d = _this.getNavDateInfo(index),
              yearNavVal = _d.year,
              monthNavVal = _d.month;

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

                var wrapperClass = classNames__default['default']({
                  'Calendar-valueWrapper': true,
                  'Calendar-valueWrapper--start': startActive || inRangeLast && endDate,
                  'Calendar-valueWrapper--end': endActive || inRangeLast && startDate,
                  'Calendar-valueWrapper--inRange': inRange || rangePicker && active,
                  'Calendar-valueWrapper--inRange-error': inRange && inRangeError
                });
                var valueClass = classNames__default['default']({
                  'Calendar-value': true,
                  'Calendar-value--active': active,
                  'Calendar-value--dummy': dummy || disabled,
                  'Calendar-value--disabled': disabled
                });
                return /*#__PURE__*/React.createElement("div", {
                  key: row + "-" + col,
                  className: wrapperClass
                }, /*#__PURE__*/React.createElement("span", {
                  className: valueClass,
                  onClick: function onClick() {
                    return onClickHandler(date);
                  },
                  onMouseOver: function onMouseOver() {
                    return onMouseOverHandler(date);
                  }
                }, !dummy && /*#__PURE__*/React.createElement(Text, {
                  appearance: active ? 'white' : disabled ? 'disabled' : 'default'
                }, "" + date)));
              }));
            }

            return null;
          });
        };

        _this.renderCalendar = function (index) {
          var _a;

          var monthsInView = _this.props.monthsInView;
          var view = _this.state.view;
          var wrapperClass = classNames__default['default']((_a = {}, _a['Calendar'] = true, _a["Calendar--" + view] = view, _a));
          var headerClass = classNames__default['default']({
            'Calendar-header': true
          });
          var bodyClass = classNames__default['default']({
            'Calendar-body': true
          });
          return /*#__PURE__*/React.createElement("div", {
            key: index,
            className: wrapperClass
          }, /*#__PURE__*/React.createElement("div", {
            className: headerClass
          }, index === 0 && _this.renderJumpButton('prev'), _this.renderHeaderContent(index), index === monthsInView - 1 && _this.renderJumpButton('next')), /*#__PURE__*/React.createElement("div", {
            className: bodyClass
          }, view === 'year' && _this.renderBodyYear(), view === 'month' && _this.renderBodyMonth(), view === 'date' && _this.renderBodyDate(index)));
        };

        var _a = _this.props,
            rangePicker = _a.rangePicker,
            startDate = _a.startDate,
            endDate = _a.endDate,
            monthsInView = _a.monthsInView,
            view = _a.view;
        var currDate = rangePicker ? endDate || startDate : props.date;
        var yearNav = props.yearNav || getDateInfo(currDate || Date.now()).year;
        var monthNav = props.monthNav || getDateInfo(currDate || Date.now()).month;

        var _b = getDateInfo(currDate),
            year = _b.year,
            month = _b.month,
            date = _b.date;

        _this.state = {
          currDate: currDate,
          startDate: startDate,
          endDate: endDate,
          yearNav: yearNav,
          monthNav: monthNav,
          year: year,
          month: month,
          date: date,
          view: monthsInView > 1 ? 'date' : view,
          yearBlockNav: getYearBlock(yearNav)
        };
        return _this;
      }

      Calendar.prototype.componentDidUpdate = function (prevProps, prevState) {
        var monthsInView = this.props.monthsInView;

        if (prevProps.date !== this.props.date) {
          var _a = getDateInfo(this.props.date),
              year = _a.year,
              month = _a.month,
              date = _a.date;

          this.updateState(year, month, date);
          var d = convertToDate(this.props.date);
          this.setState({
            currDate: d
          });
        }

        if (prevProps.startDate !== this.props.startDate) {
          var d = convertToDate(this.props.startDate);
          this.setState({
            startDate: d
          });
        }

        if (prevProps.endDate !== this.props.endDate) {
          var d = convertToDate(this.props.endDate);
          this.setState({
            endDate: d
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
          var _b = this.props,
              rangePicker = _b.rangePicker,
              onDateChange = _b.onDateChange;
          var _c = this.state,
              currDate = _c.currDate,
              startDate = _c.startDate,
              endDate = _c.endDate;

          if (currDate) {
            if (onDateChange) onDateChange(currDate);

            if (rangePicker) {
              this.setState({
                hoverDate: undefined
              });

              if (startDate && endDate) {
                this.setState({
                  startDate: currDate,
                  endDate: undefined
                });
              } else {
                var _d = getDateInfo(currDate),
                    year = _d.year,
                    month = _d.month,
                    date = _d.date;

                if (startDate) {
                  if (compareDate(startDate, 'more', year, month, date)) {
                    this.setState({
                      startDate: currDate
                    });
                  } else {
                    this.setState({
                      endDate: currDate
                    });
                  }
                } else if (endDate) {
                  if (compareDate(endDate, 'less', year, month, date)) {
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
          var _e = this.state,
              startDate = _e.startDate,
              endDate = _e.endDate;
          if (onRangeChange) onRangeChange(startDate, endDate);
        }

        if (prevState.year !== this.state.year) {
          var year = this.state.year;

          if (year !== undefined && monthsInView === 1) {
            this.setState({
              year: year,
              yearBlockNav: getYearBlock(year),
              yearNav: year
            });
          }
        }

        if (prevState.month !== this.state.month) {
          var month = this.state.month;

          if (month !== undefined && monthsInView === 1) {
            this.setState({
              monthNav: month
            });
          }
        }
      };

      Calendar.prototype.render = function () {
        var _this = this;

        var _a = this.props,
            monthsInView = _a.monthsInView,
            className = _a.className;
        var baseProps = extractBaseProps(this.props);
        return /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
          className: "Calendar-wrapper " + className
        }), Array.from({
          length: monthsInView
        }, function (_x, index) {
          return _this.renderCalendar(index);
        }));
      };

      Calendar.defaultProps = {
        monthsInView: 1,
        view: 'date',
        firstDayOfWeek: 'sunday'
      };
      return Calendar;
    }(React.Component);

    var Trigger = function Trigger(props) {
      var inputFormat = props.inputFormat,
          inputOptions = props.inputOptions,
          validators = props.validators,
          state = props.state,
          setState = props.setState;
      var init = state.init,
          date = state.date,
          error = state.error;

      var onChangeHandler = function onChangeHandler(_e, val) {
        setState({
          open: true
        });
        var _a = inputOptions.placeholderChar,
            placeholderChar = _a === void 0 ? '_' : _a;

        if (val && !val.includes(placeholderChar)) {
          var d = translateToDate(inputFormat, val, validators);
          setState({
            date: d
          });
        }
      };

      var onFocusHandler = function onFocusHandler() {
        setState({
          init: true
        });
      };

      var onBlurHandler = function onBlurHandler(_e, val) {
        var _a = inputOptions.placeholderChar,
            placeholderChar = _a === void 0 ? '_' : _a;

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

      var showError = inputOptions.required && error && init;

      var inputValidator = function inputValidator(val) {
        return isValid(validators, val, inputFormat);
      };

      return /*#__PURE__*/React.createElement(InputMask, __assign({
        icon: "events",
        placeholder: inputFormat
      }, inputOptions, {
        error: showError,
        mask: date$1[inputFormat],
        value: date ? translateToString$1(inputFormat, date) : '',
        onChange: onChangeHandler,
        onFocus: onFocusHandler,
        onBlur: onBlurHandler,
        onClear: onClearHandler,
        caption: showError ? inputOptions.caption || 'Invalid value' : '',
        validators: [inputValidator]
      }));
    };

    var DatePicker = function (_super) {
      __extends(DatePicker, _super);

      function DatePicker(props) {
        var _this = _super.call(this, props) || this;

        _this.getError = function (date) {
          var _a = _this.props,
              disabledBefore = _a.disabledBefore,
              disabledAfter = _a.disabledAfter;

          var _b = getDateInfo(disabledBefore),
              dbYear = _b.year,
              dbMonth = _b.month,
              dbDate = _b.date;

          var _c = getDateInfo(disabledAfter),
              daYear = _c.year,
              daMonth = _c.month,
              daDate = _c.date;

          return !date ? true : compareDate(date, 'less', dbYear, dbMonth, dbDate) || compareDate(date, 'more', daYear, daMonth, daDate);
        };

        _this.onDateChangeHandler = function (d) {
          _this.setState({
            init: true,
            date: d
          });

          var closeOnSelect = _this.props.closeOnSelect;
          if (closeOnSelect) _this.setState({
            open: false
          });
        };

        _this.onToggleHandler = function (o, type) {
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
        };

        var inputFormat = props.inputFormat,
            validators = props.validators;
        var date = convertToDate(props.date, inputFormat, validators);

        var error = _this.getError(date);

        _this.state = {
          date: date,
          error: error,
          init: false,
          open: props.open || false
        };
        return _this;
      }

      DatePicker.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (prevProps.date !== this.props.date) {
          var _a = this.props,
              inputFormat = _a.inputFormat,
              validators = _a.validators;
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
          var _b = this.props,
              onDateChange = _b.onDateChange,
              outputFormat = _b.outputFormat;
          var date = this.state.date;
          var newError = this.getError(date);
          this.setState({
            error: newError
          });

          if (onDateChange) {
            if (!newError) {
              var dVal = translateToString$1(outputFormat, date);
              onDateChange(date, dVal);
            } else {
              onDateChange(undefined, '');
            }
          }
        }
      };

      DatePicker.prototype.renderCalendar = function () {
        var _a = this.props;
            _a.date;
            _a.open;
            _a.position;
            var inputFormat = _a.inputFormat;
            _a.outputFormat;
            _a.inputOptions;
            var validators = _a.validators;
            _a.withInput;
            var disabledBefore = _a.disabledBefore,
            disabledAfter = _a.disabledAfter;
            _a.onDateChange;
            _a.closeOnSelect;
            var rest = __rest(_a, ["date", "open", "position", "inputFormat", "outputFormat", "inputOptions", "validators", "withInput", "disabledBefore", "disabledAfter", "onDateChange", "closeOnSelect"]);

        var date = this.state.date;
        return /*#__PURE__*/React.createElement(Calendar, __assign({}, rest, {
          date: convertToDate(date, inputFormat, validators),
          disabledBefore: convertToDate(disabledBefore, inputFormat, validators),
          disabledAfter: convertToDate(disabledAfter, inputFormat, validators),
          onDateChange: this.onDateChangeHandler
        }));
      };

      DatePicker.prototype.render = function () {
        var _a = this.props,
            position = _a.position,
            withInput = _a.withInput,
            inputFormat = _a.inputFormat,
            inputOptions = _a.inputOptions,
            validators = _a.validators;
        var open = this.state.open;

        if (withInput) {
          return /*#__PURE__*/React.createElement(Popover, {
            trigger: /*#__PURE__*/React.createElement(Trigger, {
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
      };

      DatePicker.defaultProps = __assign(__assign({}, Calendar.defaultProps), {
        position: 'bottom-start',
        inputFormat: 'mm/dd/yyyy',
        outputFormat: 'mm/dd/yyyy',
        validators: [date],
        inputOptions: {},
        closeOnSelect: true
      });
      return DatePicker;
    }(React.Component);

    var TimePicker = function TimePicker(props) {
      var validators = props.validators,
          inputOptions = props.inputOptions,
          inputFormat = props.inputFormat,
          outputFormat = props.outputFormat,
          onTimeChange = props.onTimeChange,
          timeProp = props.time;

      var _a = React.useState(timeProp),
          time = _a[0],
          setTime = _a[1];

      React.useEffect(function () {
        setTime(timeProp);
      }, [timeProp]);

      var onChangeHandler = function onChangeHandler(_e, val) {
        var updatedTime = val === null || val === void 0 ? void 0 : val.toUpperCase();
        var _a = inputOptions.placeholderChar,
            placeholderChar = _a === void 0 ? '_' : _a;
        setTime(updatedTime);

        if (onTimeChange) {
          var outputTimeStr = updatedTime && !updatedTime.includes(placeholderChar) ? getOutputTimeString(inputFormat, outputFormat, updatedTime) : undefined;
          onTimeChange(outputTimeStr);
        }
      };

      var inputValidator = function inputValidator(val) {
        return isValid(validators, val, inputFormat);
      };

      return /*#__PURE__*/React.createElement(InputMask, __assign({
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
      var _a;

      var width = props.width,
          legendWidth = props.legendWidth,
          colors = props.colors,
          withCenterText = props.withCenterText,
          colorOfTotalCount = props.colorOfTotalCount,
          data = props.data,
          radius = props.radius,
          withLegends = props.withLegends,
          withTooltip = props.withTooltip,
          customTooltip = props.customTooltip,
          withActiveSegment = props.withActiveSegment,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var legendSize = legendWidth;
      var chartSize = 12 - legendWidth;
      var columnOptions = {
        chart: {
          size: withLegends ? chartSize : '12',
          sizeS: '12',
          sizeXS: '12'
        },
        legends: {
          size: legendSize,
          sizeS: '12',
          sizeXS: '12'
        }
      };

      var ChartTooltip = function ChartTooltip(chartProps) {
        var payload = chartProps.payload[0];

        if (payload) {
          if (customTooltip) return customTooltip(payload);
          return /*#__PURE__*/React.createElement("div", {
            className: "DonutChart-tooltip"
          }, "" + payload.name + chartProps.separator + (+payload.value).toLocaleString());
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
          fill: colorToHex$1(colorOfTotalCount)
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

      var _b = React.useState(0),
          activeIndex = _b[0],
          setActiveIndex = _b[1];

      var onPieEnter = function onPieEnter(_data, index) {
        setActiveIndex(index);
      };

      var getColor = function getColor(index, type) {
        var color = colors[index % colors.length];
        var colorHex = colorToHex$1(color);
        return type === 'hex' ? colorHex : color;
      };

      var oRadius = withActiveSegment ? radius ? .7 * radius : '70%' : radius || '100%';
      var iRadius = withActiveSegment ? radius ? (100 - width) / 100 * oRadius : (100 - width) / 100 * 70 + "%" : radius ? (100 - width) / 100 * radius : 100 - width + "%";
      var classes = classNames__default['default']((_a = {}, _a['DonutChart'] = true, _a), className);
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
    DonutChart.displayName = 'DonutChart';
    DonutChart.defaultProps = {
      width: 20,
      legendWidth: 3,
      colors: ['primary', 'secondary', 'success', 'warning', 'alert'],
      withCenterText: true,
      colorOfTotalCount: 'success'
    };

    var sizeMapping$1 = {
      tiny: 12,
      regular: 16,
      large: 20
    };
    var Input = /*#__PURE__*/React.forwardRef(function (props, forwardedRef) {
      var _a, _b, _c, _d;

      var _e = props.size,
          size = _e === void 0 ? 'regular' : _e,
          _f = props.type,
          type = _f === void 0 ? 'text' : _f,
          _g = props.minWidth,
          minWidth = _g === void 0 ? type !== 'number' ? 256 : undefined : _g,
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
          rest = __rest(props, ["size", "type", "minWidth", "readonly", "defaultValue", "name", "placeholder", "value", "icon", "inlineLabel", "required", "error", "info", "onChange", "onClick", "onClear", "onBlur", "onFocus", "actionIcon", "className", "autocomplete", "autoFocus"]);

      var ref = React.useRef(null);
      React.useImperativeHandle(forwardedRef, function () {
        return ref.current;
      });
      React.useEffect(function () {
        var _a;

        if (autoFocus) (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus({
          preventScroll: true
        });
      }, []);
      var autoComplete = props.autoComplete || autocomplete;
      var disabled = props.disabled || readonly;
      var baseProps = extractBaseProps(props);
      var classes = classNames__default['default']((_a = {}, _a['Input'] = true, _a["Input--" + size] = size, _a['Input--disabled'] = disabled, _a['Input--error'] = error, _a), className);
      var inputClass = classNames__default['default']((_b = {}, _b['Input-input'] = true, _b["Input-input--" + size] = size, _b));
      var leftIconClass = classNames__default['default']((_c = {}, _c['Input-icon'] = true, _c['Input-icon--left'] = true, _c['Input-icon--disabled'] = !value, _c));
      var rightIconClass = classNames__default['default']((_d = {}, _d['Input-icon'] = true, _d['Input-icon--right'] = true, _d));
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
      })), /*#__PURE__*/React.createElement("input", __assign({
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

    var InputMask = /*#__PURE__*/React.forwardRef(function (props, forwardRef) {
      props.mask;
          var valueProp = props.value,
          _a = props.placeholderChar,
          placeholderChar = _a === void 0 ? '_' : _a,
          _b = props.validators,
          validators = _b === void 0 ? [] : _b,
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
          rest = __rest(props, ["mask", "value", "placeholderChar", "validators", "defaultValue", "mask", "error", "caption", "required", "onChange", "onBlur", "onFocus", "onClear", "className"]);

      var getNewCursorPosition = function getNewCursorPosition(type, position) {
        if (type === 'right') {
          for (var i = position; i < mask.length; i++) {
            if (isEditable(i)) return i;
          }

          return mask.length;
        }

        if (type === 'left') {
          for (var i = position; i >= 0; i--) {
            if (isEditable(i - 1)) return i;
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

      var getPlaceholderValue = function getPlaceholderValue(start, end) {
        if (start === void 0) {
          start = 0;
        }

        if (end === void 0) {
          end = mask.length - 1;
        }

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

      var _c = React.useState(defaultValue || valueProp || ''),
          value = _c[0],
          setValue = _c[1];

      var _d = React.useState(getDefaultSelection()),
          selection = _d[0],
          setSelection = _d[1];

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

      var insertAtIndex = function insertAtIndex(currValue, index, iterator) {
        if (iterator === void 0) {
          iterator = 0;
        }

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

        for (var i = 0; i < removedLength; i++) {
          var index$1 = start + insertedStringLength + i;
          maskedVal[index$1] = getPlaceholderValue(index$1, index$1);
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
        if (onBlur) onBlur(e, inputVal);
        if (deferId.current) window.cancelAnimationFrame(deferId.current);
      };

      var onClearHandler = function onClearHandler(e) {
        setValue('');
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

      var classes = classNames__default['default']({
        'd-flex flex-column flex-grow-1': true
      }, className);
      return /*#__PURE__*/React.createElement("div", {
        className: classes
      }, /*#__PURE__*/React.createElement(Input, __assign({}, rest, {
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
    InputMask.displayName = 'InputMask';
    InputMask.utils = {
      getDefaultValue: getDefaultValue
    };

    var Label = function Label(props) {
      var _a;

      var required = props.required,
          withInput = props.withInput,
          disabled = props.disabled,
          children = props.children,
          className = props.className,
          rest = __rest(props, ["required", "withInput", "disabled", "children", "className"]);

      var baseProps = extractBaseProps(props);
      var LabelClass = classNames__default['default']((_a = {
        Label: true
      }, _a['Label--withInput'] = withInput, _a["" + className] = className, _a));
      var classes = classNames__default['default']({
        'Label-label': true,
        'Label--disabled': disabled
      });
      return /*#__PURE__*/React.createElement("div", __assign({
        "data-test": "DesignSystem-Label"
      }, baseProps, {
        className: LabelClass
      }), /*#__PURE__*/React.createElement(GenericText, __assign({
        className: classes,
        componentType: "label"
      }, rest), children), required && /*#__PURE__*/React.createElement("span", {
        className: "Label-requiredIndicator",
        "data-test": "DesignSystem-Label--RequiredIndicator"
      }));
    };
    Label.displayName = 'Label';

    var Caption = function Caption(props) {
      var _a, _b;

      var error = props.error,
          hide = props.hide,
          withInput = props.withInput,
          children = props.children,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var classes = classNames__default['default']((_a = {
        Caption: true
      }, _a['Caption--hidden'] = hide, _a['Caption--withInput'] = withInput, _a), className);
      var errorIconClass = classNames__default['default']((_b = {}, _b['Caption-icon'] = true, _b));
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
        size: "small",
        weight: "medium"
      }, "" + children));
    };
    Caption.displayName = 'Caption';

    var Legend = function Legend(props) {
      var _a;

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
      var legendClass = classNames__default['default']((_a = {}, _a['Legend'] = true, _a), className);
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
    Legend.defaultProps = {
      iconAppearance: 'inverse',
      iconSize: 16
    };

    var Editable = function Editable(props) {
      var _a;

      var className = props.className,
          onChange = props.onChange,
          editing = props.editing,
          children = props.children;
      var baseProps = extractBaseProps(props);
      var EditableClass = classNames__default['default']((_a = {}, _a['Editable'] = true, _a), className);
      return /*#__PURE__*/React.createElement("div", __assign({
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
      var _a, _b, _c;

      var placeholder = props.placeholder,
          dropdownOptions = props.dropdownOptions,
          className = props.className,
          customTriggerRenderer = props.customTriggerRenderer;

      var onDropdownChange = dropdownOptions.onChange,
          onDropdownClose = dropdownOptions.onClose,
          rest = __rest(dropdownOptions, ["onChange", "onClose"]);

      var _d = React.useState(placeholder),
          label = _d[0],
          setLabel = _d[1];

      var _e = React.useState(false),
          editing = _e[0],
          setEditing = _e[1];

      var _f = React.useState(false),
          showComponent = _f[0],
          setShowComponent = _f[1];

      var CompClass = classNames__default['default']((_a = {}, _a['EditableDropdown'] = true, _a), className);
      var DefaultCompClass = classNames__default['default']((_b = {}, _b['EditableDropdown-default'] = true, _b['d-none'] = showComponent, _b));
      var EditableDropdownClass = classNames__default['default']((_c = {}, _c['d-none'] = !showComponent, _c));
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

      return /*#__PURE__*/React.createElement("div", __assign({
        "data-test": "DesignSystem-EditableDropdown"
      }, baseProps, {
        className: CompClass
      }), /*#__PURE__*/React.createElement(Editable, {
        onChange: onChangeHandler,
        editing: editing
      }, /*#__PURE__*/React.createElement(Dropdown, __assign({
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
      var children = props.children,
          className = props.className,
          rest = __rest(props, ["children", "className"]);

      var classes = classNames__default['default']({
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

      var appearance = props.appearance,
          title = props.title,
          children = props.children,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var MessageClass = classNames__default['default']((_a = {}, _a['Message'] = true, _a["Message--" + appearance] = appearance, _a), className);
      var MessageIcon = classNames__default['default']((_b = {}, _b['Message-icon'] = true, _b["Message-icon--" + appearance] = appearance, _b['Message-icon--withTitle'] = title, _b));
      return /*#__PURE__*/React.createElement("div", __assign({
        "data-test": "DesignSystem-Message"
      }, baseProps, {
        className: MessageClass
      }), appearance !== 'default' && /*#__PURE__*/React.createElement("div", {
        className: MessageIcon,
        "data-test": "DesignSystem-Message--Icon"
      }, /*#__PURE__*/React.createElement(Icon, {
        name: IconMapping[appearance],
        appearance: appearance
      })), /*#__PURE__*/React.createElement("div", {
        "data-test": "DesignSystem-Message--Title"
      }, title && /*#__PURE__*/React.createElement("div", {
        className: "Message-title"
      }, /*#__PURE__*/React.createElement(Heading, {
        size: "s"
      }, title)), /*#__PURE__*/React.createElement("div", {
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
      var _a, _b, _c;

      var list = props.list,
          seperator = props.seperator,
          seperatorAppearance = props.seperatorAppearance,
          iconAppearance = props.iconAppearance,
          labelAppearance = props.labelAppearance,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var MetaClass = classNames__default['default']((_a = {}, _a['MetaList'] = true, _a), className);
      var SeperatorClass = classNames__default['default']((_b = {}, _b['MetaList-seperator'] = true, _b));
      var LeftSeperatorClass = classNames__default['default']((_c = {}, _c['MetaList-seperator'] = true, _c['MetaList-seperator--left'] = true, _c));
      return /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
        className: MetaClass
      }), seperator && /*#__PURE__*/React.createElement(Icon, {
        name: "fiber_manual_record",
        size: 8,
        className: LeftSeperatorClass,
        appearance: seperatorAppearance
      }), list.map(function (item, ind) {
        var _a = item.label,
            label = _a === void 0 ? '' : _a,
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
      var _a;

      var children = props.children,
          className = props.className,
          onOutsideClick = props.onOutsideClick,
          rest = __rest(props, ["children", "className", "onOutsideClick"]);

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
      var classes = classNames__default['default']((_a = {}, _a['OutsideClick'] = true, _a), className);
      return /*#__PURE__*/React.createElement("div", __assign({
        ref: innerRef
      }, rest, {
        className: classes
      }), children);
    });
    OutsideClick.displayName = 'OutsideClick';

    var Paragraph = function Paragraph(props) {
      var _a;

      var appearance = props.appearance,
          children = props.children,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var classes = classNames__default['default']((_a = {
        Text: true
      }, _a["Text--" + appearance] = appearance, _a), className);
      return /*#__PURE__*/React.createElement(GenericText, __assign({
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
        width: value > 0 ? Math.min(value, max) * 100 / max + "%" : '0'
      };
      var ProgressBarClass = classNames__default['default']({
        ProgressBar: true
      }, className);
      return /*#__PURE__*/React.createElement("div", __assign({
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
      var _a, _b, _c;

      var _d = props.size,
          size = _d === void 0 ? 'regular' : _d,
          label = props.label,
          disabled = props.disabled,
          onChange = props.onChange,
          name = props.name,
          value = props.value,
          checked = props.checked,
          defaultChecked = props.defaultChecked,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var ref = React.useRef(null);
      React.useImperativeHandle(forwardedRef, function () {
        return ref.current;
      });
      var RadioClass = classNames__default['default']((_a = {}, _a['Radio'] = true, _a['Radio--disabled'] = disabled, _a["Radio--" + size] = size, _a), className);
      var RadioWrapper = classNames__default['default']((_b = {}, _b['Radio-wrapper'] = true, _b["Radio-wrapper--" + size] = size, _b));
      var RadioOuterWrapper = classNames__default['default']((_c = {}, _c['Radio-outerWrapper'] = true, _c["Radio-outerWrapper--" + size] = size, _c));
      var id = name + "-" + label + "-" + uidGenerator();
      return /*#__PURE__*/React.createElement("div", {
        className: RadioClass
      }, /*#__PURE__*/React.createElement("div", {
        className: RadioOuterWrapper
      }, /*#__PURE__*/React.createElement("input", __assign({}, baseProps, {
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
      var _a;

      var className = props.className,
          children = props.children,
          rest = __rest(props, ["className", "children"]);

      var classes = classNames__default['default']((_a = {
        Row: true
      }, _a["" + className] = className, _a));
      return /*#__PURE__*/React.createElement("div", __assign({
        "data-test": "DesignSystem-Row",
        ref: ref
      }, rest, {
        className: classes
      }), children);
    });
    Row.displayName = 'Row';

    var StatusHint = function StatusHint(props) {
      var _a, _b;

      var appearance = props.appearance,
          children = props.children,
          _onMouseEnter = props.onMouseEnter,
          _onMouseLeave = props.onMouseLeave,
          _onClick = props.onClick,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var StatusHintClass = classNames__default['default']((_a = {}, _a['StatusHint'] = true, _a), className);
      var StatusHintIconClass = classNames__default['default']((_b = {}, _b['StatusHint-icon'] = true, _b["StatusHint--" + appearance] = appearance, _b));
      return /*#__PURE__*/React.createElement("div", __assign({
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
      var _a;

      var appearance = props.appearance,
          children = props.children,
          subtle = props.subtle,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var classes = classNames__default['default']((_a = {
        Pills: true
      }, _a["Badge--" + appearance] = appearance && !subtle, _a["Badge--subtle-" + appearance] = subtle, _a), className);
      return /*#__PURE__*/React.createElement("span", __assign({
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
      return (ratio * 100).toFixed(2) + "%";
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
        var value = values[index];
        var arg = argFn(value);

        if (arg < minArg) {
          minValue = value;
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

    var Handle = function (_super) {
      __extends(Handle, _super);

      function Handle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;

        _this.state = {
          isMoving: false
        };
        _this.handleElement = null;
        _this.refHandlers = {
          handle: function handle(el) {
            return _this.handleElement = el;
          }
        };

        _this.mouseEventClientOffset = function (event) {
          return event.clientX;
        };

        _this.clientToValue = function (clientPixel) {
          var _a = _this.props,
              stepSize = _a.stepSize,
              tickSize = _a.tickSize,
              value = _a.value;

          if (_this.handleElement == null) {
            return value;
          }

          var clientPixelNormalized = clientPixel;

          var _b = _this.getHandleMidpointAndOffset(_this.handleElement),
              handleMidpoint = _b.handleMidpoint,
              handleOffset = _b.handleOffset;

          var handleCenterPixel = handleMidpoint + handleOffset;
          var pixelDelta = clientPixelNormalized - handleCenterPixel;

          if (isNaN(pixelDelta)) {
            return value;
          }

          return value + Math.round(pixelDelta / (tickSize * stepSize)) * stepSize;
        };

        _this.changeValue = function (newValue, callback) {
          if (callback === void 0) {
            callback = _this.props.onChange;
          }

          var updatedValue = clamp(newValue, _this.props.min, _this.props.max);

          if (!isNaN(updatedValue) && _this.props.value !== updatedValue) {
            if (callback) callback(updatedValue);
          }

          return updatedValue;
        };

        _this.endHandleMovement = function (event) {
          var clientPixel = _this.mouseEventClientOffset(event);

          var onRelease = _this.props.onRelease;

          _this.removeDocumentEventListeners();

          _this.setState({
            isMoving: false
          });

          var finalValue = _this.changeValue(_this.clientToValue(clientPixel));

          if (onRelease) onRelease(finalValue);
        };

        _this.continueHandleMovement = function (event) {
          var clientPixel = _this.mouseEventClientOffset(event);

          if (_this.state.isMoving && !_this.props.disabled) {
            var value = _this.clientToValue(clientPixel);

            _this.changeValue(value);
          }
        };

        _this.beginHandleMovement = function (event) {
          if (_this.props.disabled) return;
          document.addEventListener('mousemove', _this.continueHandleMovement);
          document.addEventListener('mouseup', _this.endHandleMovement);

          _this.setState({
            isMoving: true
          });

          var value = _this.clientToValue(event.clientX);

          _this.changeValue(value);
        };

        _this.handleKeyDown = function (event) {
          if (_this.props.disabled) return;
          var _a = _this.props,
              stepSize = _a.stepSize,
              value = _a.value;
          var which = event.which;

          if (which === ARROW_LEFT) {
            _this.changeValue(value - stepSize);

            event.preventDefault();
          } else if (which === ARROW_RIGHT) {
            _this.changeValue(value + stepSize);

            event.preventDefault();
          }
        };

        _this.handleKeyUp = function (event) {
          if (_this.props.disabled) return;

          if ([ARROW_LEFT, ARROW_RIGHT].indexOf(event.which) >= 0) {
            var onRelease = _this.props.onRelease;
            if (onRelease) onRelease(_this.props.value);
          }
        };

        _this.getHandleMidpointAndOffset = function (handleElement, useOppositeDimension) {
          if (useOppositeDimension === void 0) {
            useOppositeDimension = false;
          }

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
        };

        _this.removeDocumentEventListeners = function () {
          document.removeEventListener('mousemove', _this.continueHandleMovement);
          document.removeEventListener('mouseup', _this.endHandleMovement);
        };

        return _this;
      }

      Handle.prototype.componentWillUnmount = function () {
        this.removeDocumentEventListeners();
      };

      Handle.prototype.componentDidUpdate = function (_prevProps, prevState) {
        if (prevState.isMoving !== this.state.isMoving) {
          if (this.handleElement) this.handleElement.focus();
        }
      };

      Handle.prototype.render = function () {
        var _a;

        var _b = this.props,
            min = _b.min,
            tickSizeRatio = _b.tickSizeRatio,
            value = _b.value,
            disabled = _b.disabled,
            label = _b.label;
        var handleMidpoint = this.getHandleMidpointAndOffset(this.handleElement, true).handleMidpoint;
        var offsetRatio = (value - min) * tickSizeRatio;
        var offsetCalc = "calc(" + formatPercentage(offsetRatio) + " - " + handleMidpoint + "px)";
        var style = {
          left: offsetCalc
        };
        var className = classNames__default['default']((_a = {}, _a['Slider-handle'] = true, _a['Slider-handle--disabled'] = disabled, _a['Slider-handle--active'] = this.state.isMoving, _a));
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
      };

      return Handle;
    }(React.Component);

    var MultiSliderHandle = function MultiSliderHandle() {
      return null;
    };

    var MultiSlider = function (_super) {
      __extends(MultiSlider, _super);

      function MultiSlider(props) {
        var _this = _super.call(this, props) || this;

        _this.handleElements = [];
        _this.trackElement = null;

        _this.getLabelPrecision = function (_a) {
          var labelPrecision = _a.labelPrecision,
              stepSize = _a.stepSize;
          return labelPrecision == null ? countDecimalPlaces(stepSize) : labelPrecision;
        };

        _this.getOffsetRatio = function (value) {
          return clamp((value - _this.props.min) * _this.state.tickSizeRatio, 0, 1);
        };

        _this.addHandleRef = function (ref) {
          if (ref != null) {
            _this.handleElements.push(ref);
          }
        };

        _this.getHandleValues = function (props) {
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
        };

        _this.updateTickSize = function () {
          if (_this.trackElement != null) {
            var trackSize = _this.trackElement.clientWidth;
            var tickSizeRatio = 1 / (_this.props.max - _this.props.min);
            var tickSize = trackSize * tickSizeRatio;

            _this.setState({
              tickSize: tickSize,
              tickSizeRatio: tickSizeRatio
            });
          }
        };

        _this.getTrackFill = function (start, end) {
          if (start.fillAfter !== undefined) {
            return start.fillAfter;
          }

          if (end !== undefined && end.fillBefore !== undefined) {
            return end.fillBefore;
          }

          return false;
        };

        _this.maybeHandleTrackClick = function (event) {
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
        };

        _this.getLockedHandleIndex = function (startIndex, endIndex) {
          var inc = startIndex < endIndex ? 1 : -1;

          for (var index = startIndex + inc; index !== endIndex + inc; index += inc) {
            return index;
          }

          return -1;
        };

        _this.getNewHandleValues = function (newValue, oldIndex) {
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
        };

        _this.onReleaseHandler = function (newValue, index) {
          var onRangeRelease = _this.props.onRangeRelease;

          var handleProps = _this.getHandleValues(_this.props);

          var newValues = _this.getNewHandleValues(newValue, index);

          if (onRangeRelease) {
            var range = newValues;
            onRangeRelease(range);
          }

          handleProps.forEach(function (handle, i) {
            if (handle.onRelease) handle.onRelease(newValues[i]);
          });
        };

        _this.onChangeHandler = function (newValue, index) {
          var onRangeChange = _this.props.onRangeChange;

          var handleProps = _this.getHandleValues(_this.props);

          var oldValues = handleProps.map(function (handle) {
            return handle.value;
          });

          var newValues = _this.getNewHandleValues(newValue, index);

          if (!arraysEqual(newValues, oldValues)) {
            if (onRangeChange) {
              var range = newValues;
              onRangeChange(range);
            }

            handleProps.forEach(function (handle, i) {
              if (handle.onChange) handle.onChange(newValues[i]);
            });
          }
        };

        _this.renderHandles = function () {
          var _a = _this.props,
              disabled = _a.disabled,
              max = _a.max,
              min = _a.min,
              stepSize = _a.stepSize;

          var handleProps = _this.getHandleValues(_this.props);

          if (handleProps.length === 0) {
            return null;
          }

          return handleProps.map(function (_a, index) {
            var value = _a.value;
            return /*#__PURE__*/React.createElement(Handle, {
              disabled: disabled,
              key: index + "-" + handleProps.length,
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
        };

        _this.formatLabel = function (value) {
          var labelRenderer = _this.props.labelRenderer;

          if (typeof labelRenderer === 'function') {
            return labelRenderer(value);
          }

          return value.toFixed(_this.state.labelPrecision);
        };

        _this.renderLabels = function () {
          var _a = _this.props,
              labelStepSize = _a.labelStepSize,
              max = _a.max,
              min = _a.min,
              labelRenderer = _a.labelRenderer,
              disabled = _a.disabled;
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
        };

        _this.renderTrackFill = function (index, start, end) {
          var _a;

          var _b = [_this.getOffsetRatio(start.value), _this.getOffsetRatio(end.value)].sort(function (left, right) {
            return left - right;
          }),
              startRatio = _b[0],
              endRatio = _b[1];

          var startOffset = Number((startRatio * 100).toFixed(2));
          var endOffset = Number(((1 - endRatio) * 100).toFixed(2));
          var width = 100 - endOffset - startOffset + "%";
          var orientationStyle = {
            width: width
          };

          var style = __assign({}, orientationStyle);

          var fillTrack = _this.getTrackFill(start, end);

          var classes = classNames__default['default']((_a = {}, _a['Slider-progress'] = true, _a['Slider-progress--disabled'] = _this.props.disabled, _a['Slider-progress--inRange'] = fillTrack, _a['Slider-progress--inRangeDisabled'] = fillTrack && _this.props.disabled, _a));
          return /*#__PURE__*/React.createElement("div", {
            key: "track-" + index,
            className: classes,
            style: style
          });
        };

        _this.renderTracks = function () {
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
        };

        _this.state = {
          labelPrecision: _this.getLabelPrecision(_this.props),
          tickSize: 0,
          tickSizeRatio: 0
        };
        return _this;
      }

      MultiSlider.prototype.getDerivedStateFromProps = function (props) {
        return {
          labelPrecision: this.getLabelPrecision(props)
        };
      };

      MultiSlider.prototype.getSnapshotBeforeUpdate = function (prevProps) {
        var prevHandleProps = this.getHandleValues(prevProps);
        var newHandleProps = this.getHandleValues(this.props);

        if (newHandleProps.length !== prevHandleProps.length) {
          this.handleElements = [];
        }

        return null;
      };

      MultiSlider.prototype.componentDidMount = function () {
        this.updateTickSize();
      };

      MultiSlider.prototype.nearestHandleForValue = function (handles, getOffset) {
        return argMin(handles, function (handle) {
          var offset = getOffset(handle);
          var offsetValue = handle.clientToValue(offset);
          var handleValue = handle.props.value;
          return Math.abs(offsetValue - handleValue);
        });
      };

      MultiSlider.prototype.render = function () {
        var _a, _b;

        var _this = this;

        var _c = this.props,
            label = _c.label,
            className = _c.className;
        var baseProps = extractBaseProps(this.props);
        var SliderClass = classNames__default['default']((_a = {}, _a['Slider'] = true, _a), className);
        var WrapperClass = classNames__default['default']((_b = {}, _b['Slider-wrapper'] = true, _b['Slider-wrapper--disabled'] = this.props.disabled, _b));
        return /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
          className: SliderClass
        }), label && /*#__PURE__*/React.createElement(Label, {
          withInput: true
        }, label), /*#__PURE__*/React.createElement("div", {
          className: WrapperClass,
          onMouseDown: this.maybeHandleTrackClick
        }, /*#__PURE__*/React.createElement("div", {
          className: "Slider-track",
          ref: function ref(_ref) {
            return _this.trackElement = _ref;
          }
        }, this.renderTracks()), /*#__PURE__*/React.createElement("div", {
          className: "Slider-axis'"
        }, this.renderLabels()), this.renderHandles()));
      };

      MultiSlider.defaultProps = {
        labelStepSize: 1,
        max: 10,
        min: 0,
        stepSize: 1,
        labelRenderer: true
      };
      MultiSlider.Handle = MultiSliderHandle;
      return MultiSlider;
    }(React.Component);

    var Slider = function Slider(props) {
      var valueProp = props.value,
          defaultValue = props.defaultValue,
          onRelease = props.onRelease,
          onChange = props.onChange,
          rest = __rest(props, ["value", "defaultValue", "onRelease", "onChange"]);

      var _a = React.useState(valueProp === undefined ? defaultValue : valueProp),
          value = _a[0],
          setValue = _a[1];

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

      return /*#__PURE__*/React.createElement(MultiSlider, __assign({}, rest), /*#__PURE__*/React.createElement(MultiSlider.Handle, {
        value: value,
        onChange: onChangeHandler,
        onRelease: onRelease,
        fillBefore: true
      }));
    };
    Slider.displayName = 'Slider';
    Slider.defaultProps = __assign(__assign({}, MultiSlider.defaultProps), {
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
          rest = __rest(props, ["value", "defaultValue", "onChange", "onRelease"]);

      var _a = React.useState(valueProp === undefined ? defaultValue : valueProp),
          value = _a[0],
          setValue = _a[1];

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

      return /*#__PURE__*/React.createElement(MultiSlider, __assign({
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
    RangeSlider.defaultProps = __assign(__assign({}, MultiSlider.defaultProps), {
      defaultValue: [0, 10]
    });

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
      var SwitchClass = classNames__default['default']((_a = {}, _a['Switch'] = true, _a['Switch--disabled'] = disabled, _a["Switch--" + size] = size, _a), className);
      var SwitchWrapper = classNames__default['default']((_b = {}, _b['Switch-wrapper'] = true, _b['Switch-wrapper--disabled'] = disabled, _b["Switch-wrapper--" + size] = size, _b["Switch-wrapper--" + appearance] = appearance, _b['Switch-wrapper--checked'] = checked, _b['Switch-wrapper--checkedDisabled'] = checked && disabled, _b));

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

      var _c = props.rows,
          rows = _c === void 0 ? 3 : _c,
          _d = props.resize,
          resize = _d === void 0 ? true : _d,
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
      var classes = classNames__default['default']((_a = {}, _a['Textarea'] = true, _a), className);
      var TextareaClass = classNames__default['default']((_b = {}, _b['Textarea-textarea'] = true, _b['Textarea-textarea--resize'] = resize, _b['Textarea-textarea--error'] = error, _b));
      return /*#__PURE__*/React.createElement("div", {
        className: classes
      }, /*#__PURE__*/React.createElement("textarea", __assign({
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
      var _a;

      var appearance = props.appearance,
          label = props.label,
          onClick = props.onClick;
      var buttonClass = classNames__default['default']((_a = {}, _a['Button'] = true, _a['Button--tiny'] = true, _a['Toast-actionButton'] = true, _a["Toast-actionButton--" + appearance] = appearance, _a));

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
      var _a, _b;

      var appearance = props.appearance,
          title = props.title,
          message = props.message,
          actions = props.actions,
          onClose = props.onClose,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var wrapperClass = classNames__default['default']((_a = {}, _a['Toast'] = true, _a['Toast--withMessage'] = message, _a["Toast--" + appearance] = appearance, _a), className);
      var IconMapping = {
        info: 'info',
        success: 'check_circle',
        alert: 'info',
        warning: 'info'
      };
      var icon = IconMapping[appearance];
      var titleClass = classNames__default['default']((_b = {}, _b['Toast-title'] = true, _b['Toast-title--withMessage'] = message, _b));

      var iconClass = function iconClass(align) {
        var _a;

        return classNames__default['default']((_a = {}, _a['Toast-icon'] = true, _a["Toast-icon--" + align] = align, _a));
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
    Toast.defaultProps = {
      appearance: 'default'
    };

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
          boundaryElement = props.boundaryElement,
          rest = __rest(props, ["position", "customStyle", "dark", "children", "onToggle", "className", "hideOnReferenceEscape", "boundaryElement"]);

      var _b = React.useState(!!props.open),
          open = _b[0],
          setOpen = _b[1];

      var _c = React.useState(false),
          init = _c[0],
          setInit = _c[1];

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
      var classes = classNames__default['default']((_a = {
        Popover: true
      }, _a['Popover--dark'] = dark, _a), className);
      var PopoverWrapper = /*#__PURE__*/React.createElement("div", {
        "data-test": "DesignSystem-Popover",
        className: classes,
        "data-layer": true
      }, children);
      return /*#__PURE__*/React.createElement(PopperWrapper, __assign({}, rest, {
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
      customStyle: {},
      boundaryElement: document.body
    });

    var propsList$1 = ['trigger', 'on', 'open', 'offset', 'onToggle', 'dark', 'customStyle', 'closeOnBackdropClick', 'hideOnReferenceEscape', 'closeOnScroll'];
    var Tooltip = function Tooltip(props) {
      var children = props.children,
          tooltip = props.tooltip,
          rest = __rest(props, ["children", "tooltip"]);

      var tooltipWrapper = /*#__PURE__*/React.createElement("div", {
        className: "Tooltip"
      }, /*#__PURE__*/React.createElement(Text, {
        className: "Tooltip-text",
        appearance: "white"
      }, tooltip));
      return /*#__PURE__*/React.createElement(Popover, __assign({
        trigger: children,
        on: 'hover',
        offset: 'medium'
      }, rest), tooltipWrapper);
    };
    Tooltip.defaultProps = Object.assign({}, filterProps(Popover.defaultProps, propsList$1), {
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
      return /*#__PURE__*/React.createElement(Modal, __assign({
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

    var Modal = function (_super) {
      __extends(Modal, _super);

      function Modal(props) {
        var _this = _super.call(this, props) || this;

        _this.modalRef = /*#__PURE__*/React.createRef();

        _this.getUpdatedZIndex = function () {
          if (_this.element === null) return;

          var elements = _this.element.querySelectorAll('.Modal-container--open');

          if (elements.length < 1) return;
          var siblings = Array.from(elements).filter(function (el) {
            return el !== _this.modalRef.current;
          });
          var zIndex = -1;
          siblings.forEach(function (element) {
            var prevZIndex = parseInt(window.getComputedStyle(element).zIndex || '0', 10);
            zIndex = Math.max(zIndex, prevZIndex + 10);
          });
          return zIndex > 0 ? zIndex : undefined;
        };

        var element = document.querySelector('.Modal-wrapper');

        if (element === null) {
          element = document.createElement('div');
          element.classList.add('Modal-wrapper');
          document.body.appendChild(element);
        }

        _this.element = element;
        _this.state = {
          open: props.open,
          animate: props.open
        };
        return _this;
      }

      Modal.prototype.componentDidUpdate = function (prevProps) {
        var _this = this;

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
            }, function () {
              setTimeout(function () {
                _this.setState({
                  open: false
                });
              }, 120);
            });
          }
        }
      };

      Modal.prototype.render = function () {
        var _a;

        var _b = this.state,
            animate = _b.animate,
            open = _b.open,
            zIndex = _b.zIndex;
        var _c = this.props,
            className = _c.className,
            backdropClose = _c.backdropClose,
            dimension = _c.dimension,
            children = _c.children,
            headerOptions = _c.headerOptions,
            footer = _c.footer,
            _onClose = _c.onClose;
        var classes = classNames__default['default']({
          Modal: true,
          'Modal--open': open,
          'Modal-animation--open': animate,
          'Modal-animation--close': !animate
        }, className);
        var ContainerClass = classNames__default['default']((_a = {}, _a['Row'] = true, _a['Modal-container'] = true, _a['Modal-container--open'] = open, _a));
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
        }, /*#__PURE__*/React.createElement(Column, __assign({
          "data-test": "DesignSystem-Modal"
        }, baseProps, {
          className: classes
        }, sizeMap[dimension], {
          ref: this.modalRef
        }), headerOptions && /*#__PURE__*/React.createElement(ModalHeader, __assign({
          onClose: function onClose(event, reason) {
            if (_onClose) _onClose(event, reason);
          }
        }, headerOptions)), children && /*#__PURE__*/React.createElement(React.Fragment, null, headerOptions || footer ? /*#__PURE__*/React.createElement(ModalBody, null, children) : children), footer && /*#__PURE__*/React.createElement(ModalFooter, {
          open: open
        }, footer)));

        var onOutsideClickHandler = function onOutsideClickHandler(event) {
          if (open) {
            if (_onClose) _onClose(event, 'OutsideClick');else if (typeof backdropClose === 'function') backdropClose(event, 'OutsideClick');
          }
        };

        var ModalWrapper = backdropClose ? /*#__PURE__*/React.createElement(OutsideClick, {
          "data-test": "DesignSystem-Modal--OutsideClick",
          onOutsideClick: onOutsideClickHandler
        }, ModalContainer) : ModalContainer;
        var WrapperElement = /*#__PURE__*/ReactDOM.createPortal(ModalWrapper, this.element);
        return /*#__PURE__*/React.createElement(React.Fragment, null, WrapperElement, /*#__PURE__*/React.createElement(Backdrop, {
          open: this.state.animate
        }));
      };

      Modal.defaultProps = {
        dimension: 'medium'
      };
      return Modal;
    }(React.Component);

    var sidesheetWidth = {
      regular: '6',
      large: '10'
    };

    var Sidesheet = function (_super) {
      __extends(Sidesheet, _super);

      function Sidesheet(props) {
        var _this = _super.call(this, props) || this;

        _this.sidesheetRef = /*#__PURE__*/React.createRef();

        _this.getUpdatedZIndex = function () {
          if (_this.element === null) return;

          var elements = _this.element.querySelectorAll('.Sidesheet-container--open');

          if (elements.length <= 1) return;
          var siblings = Array.from(elements).filter(function (el) {
            return el !== _this.sidesheetRef.current;
          });
          var zIndex = -1;
          siblings.forEach(function (element) {
            var prevZIndex = parseInt(window.getComputedStyle(element).zIndex || '0', 10);
            zIndex = Math.max(zIndex, prevZIndex + 10);
          });
          return zIndex > 0 ? zIndex : undefined;
        };

        var element = document.querySelector('.Sidesheet-wrapper');

        if (element === null) {
          element = document.createElement('div');
          element.classList.add('Sidesheet-wrapper');
          document.body.appendChild(element);
        }

        _this.element = element;
        _this.state = {
          open: props.open,
          animate: props.open
        };
        return _this;
      }

      Sidesheet.prototype.componentDidUpdate = function (prevProps) {
        var _this = this;

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
            }, function () {
              setTimeout(function () {
                _this.setState({
                  open: false
                });
              }, 120);
            });
          }
        }
      };

      Sidesheet.prototype.render = function () {
        var _a;

        var _b = this.state,
            animate = _b.animate,
            open = _b.open,
            zIndex = _b.zIndex;
        var _c = this.props,
            className = _c.className,
            backdropClose = _c.backdropClose,
            dimension = _c.dimension,
            footer = _c.footer,
            seperator = _c.seperator,
            stickFooter = _c.stickFooter,
            headerOptions = _c.headerOptions,
            _onClose = _c.onClose;
        var classes = classNames__default['default']({
          Sidesheet: true,
          'Sidesheet--open': open,
          'Sidesheet-animation--open': animate,
          'Sidesheet-animation--close': !animate
        }, className);
        var ContainerClass = classNames__default['default']((_a = {}, _a['Sidesheet-container'] = true, _a['Sidesheet-container--open'] = open, _a));
        var baseProps = extractBaseProps(this.props);

        var headerObj = __assign(__assign({}, headerOptions), {
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
        }, /*#__PURE__*/React.createElement(Column, __assign({
          "data-test": "DesignSystem-Sidesheet"
        }, baseProps, {
          className: classes,
          size: sidesheetWidth[dimension]
        }), /*#__PURE__*/React.createElement(ModalHeader, __assign({
          onClose: function onClose(event, reason) {
            if (_onClose) _onClose(event, reason);
          }
        }, headerObj)), /*#__PURE__*/React.createElement(ModalBody, {
          stickFooter: stickFooter
        }, this.props.children), footer && /*#__PURE__*/React.createElement(ModalFooter, {
          inSidesheet: true,
          stickToBottom: stickFooter,
          seperator: seperator
        }, footer)));

        var onOutsideClickHandler = function onOutsideClickHandler(event) {
          if (open) {
            if (_onClose) _onClose(event, 'OutsideClick');
          }
        };

        var SidesheetWrapper = backdropClose ? /*#__PURE__*/React.createElement(OutsideClick, {
          "data-test": "DesignSystem-Sidesheet--OutsideClick",
          onOutsideClick: onOutsideClickHandler
        }, SidesheetContainer) : SidesheetContainer;
        var WrapperElement = /*#__PURE__*/ReactDOM.createPortal(SidesheetWrapper, this.element);
        return /*#__PURE__*/React.createElement(React.Fragment, null, WrapperElement, /*#__PURE__*/React.createElement(Backdrop, {
          open: this.state.animate
        }));
      };

      Sidesheet.defaultProps = {
        dimension: 'regular',
        stickFooter: false,
        headerOptions: {}
      };
      return Sidesheet;
    }(React.Component);

    var Status = function Status(props) {
      var _a, _b;

      var type = props.type,
          time = props.time,
          className = props.className,
          _c = props.readText,
          readText = _c === void 0 ? 'Read' : _c,
          _d = props.failedText,
          failedText = _d === void 0 ? 'Click to retry' : _d,
          _e = props.sendingText,
          sendingText = _e === void 0 ? 'Sending..' : _e;
      var baseProps = extractBaseProps(props);
      var StatusClass = classNames__default['default']((_a = {}, _a['d-flex align-items-center mt-3'] = true, _a), className);
      var TextClass = classNames__default['default']((_b = {}, _b['ChatMessage-status'] = true, _b), className);

      var getTime = function getTime(t) {
        if (typeof t === 'number') {
          var d = new Date(t);
          var hours = d.getHours();
          var minutes = d.getMinutes();
          var AMPM = hours < 12 ? 'AM' : 'PM';
          var hrs = hours % 12 || 12;
          return hrs + ":" + minutes + " " + AMPM;
        }

        return t;
      };

      switch (type) {
        case 'failed':
          return /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
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
          return /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
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
          return /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
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
          return /*#__PURE__*/React.createElement(Text, __assign({}, baseProps, {
            appearance: "subtle",
            size: "small",
            className: TextClass
          }), sendingText);

        case 'sent':
          return /*#__PURE__*/React.createElement(React.Fragment, null, time && /*#__PURE__*/React.createElement(Text, __assign({}, baseProps, {
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
      var _a;

      var children = props.children,
          type = props.type,
          isTyping = props.isTyping,
          statusType = props.statusType,
          withStatus = props.withStatus,
          onClick = props.onClick,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var MessageClass = classNames__default['default']((_a = {}, _a['Box'] = true, _a["Box--" + type] = type, _a['Box--typing'] = isTyping, _a['Box--urgent'] = statusType === 'urgent', _a["Box-" + type + "--withStatus"] = withStatus || isTyping, _a), className);
      return /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
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
        return /*#__PURE__*/React.createElement(Text, __assign({}, baseProps, {
          appearance: 'subtle',
          size: 'small',
          className: className
        }), typingText);
      }

      return /*#__PURE__*/React.createElement(Text, __assign({}, baseProps, {
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
      var statusType = (statusOptions || {}).type;
      return /*#__PURE__*/React.createElement(Box, __assign({}, baseProps, {
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
      }), !isTyping && statusOptions && /*#__PURE__*/React.createElement(Status, __assign({}, statusOptions)));
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
      var _a, _b, _c;

      var imageSrc = props.imageSrc,
          title = props.title,
          description = props.description,
          size = props.size,
          children = props.children,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var WrapperClass = classNames__default['default']((_a = {}, _a['EmptyState'] = true, _a), className);
      var HeadingClass = classNames__default['default']((_b = {}, _b['EmptyState-title'] = true, _b["EmptyState-title--" + size] = true, _b));
      var TextClass = classNames__default['default']((_c = {}, _c['EmptyState-description'] = true, _c["EmptyState-description--" + size] = children !== undefined, _c));
      return /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
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
      var _a, _b;

      var className = props.className,
          heading = props.heading,
          subHeading = props.subHeading,
          onClose = props.onClose,
          seperator = props.seperator,
          backIcon = props.backIcon,
          backIconCallback = props.backIconCallback;
      var baseProps = extractBaseProps(props);
      var classes = classNames__default['default']((_a = {
        'Modal-header': true
      }, _a['Modal-header--backIcon'] = backIcon, _a['Modal-header--seperator'] = seperator, _a), className);
      var wrapperClass = classNames__default['default']((_b = {
        'Modal-headerWrapper': true
      }, _b['Modal-headerWrapper--backIcon'] = backIcon, _b));
      return /*#__PURE__*/React.createElement("div", __assign({
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
      var _a;

      var open = props.open,
          children = props.children,
          className = props.className,
          stickToBottom = props.stickToBottom,
          seperator = props.seperator,
          inSidesheet = props.inSidesheet;
      var baseProps = extractBaseProps(props);
      var classes = classNames__default['default']((_a = {
        'Modal-footer': true
      }, _a['Modal-footer--inModal'] = !inSidesheet, _a['Modal-footer--seperator'] = seperator, _a['Modal-footer--stickToBottom'] = stickToBottom, _a), className);
      var wrapperRef = /*#__PURE__*/React.createRef();
      React.useEffect(function () {
        var _a;

        if (open) {
          if (wrapperRef.current) {
            var secondaryBtns = (_a = wrapperRef.current) === null || _a === void 0 ? void 0 : _a.querySelectorAll('.Button--basic');
            var secondaryBtn_1 = secondaryBtns[secondaryBtns.length - 1];

            if (secondaryBtn_1) {
              window.requestAnimationFrame(function () {
                return secondaryBtn_1.focus({
                  preventScroll: true
                });
              });
            }
          }
        }
      }, [open]);
      return /*#__PURE__*/React.createElement("div", __assign({
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
      var _a;

      var children = props.children,
          className = props.className,
          stickFooter = props.stickFooter;
      var baseProps = extractBaseProps(props);
      var classes = classNames__default['default']((_a = {
        'Modal-body': true
      }, _a['Modal-body--stickFooter'] = stickFooter, _a), className);
      return /*#__PURE__*/React.createElement("div", __assign({
        "data-test": "DesignSystem-ModalBody"
      }, baseProps, {
        className: classes
      }), children);
    };
    ModalBody.defaultProps = {
      stickFooter: true
    };
    ModalBody.displayName = 'ModalBody';

    var ModalDescription = function ModalDescription(props) {
      var title = props.title,
          description = props.description,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var classes = classNames__default['default']({
        'Modal-description': true
      }, className);
      return /*#__PURE__*/React.createElement("div", __assign({
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
      var _a, _b, _c;

      var type = props.type,
          totalPages = props.totalPages,
          onPageChange = props.onPageChange,
          className = props.className;
      var baseProps = extractBaseProps(props);

      var _d = React.useState(props.page),
          page = _d[0],
          setPage = _d[1];

      var _e = React.useState(false),
          init = _e[0],
          setInit = _e[1];

      React.useEffect(function () {
        setPage(props.page);
      }, [props.page]);
      var wrapperClass = classNames__default['default']((_a = {}, _a['Pagination'] = true, _a["Pagination--" + type] = type, _a), className);
      var nextButtonWrapperClass = classNames__default['default']((_b = {}, _b['Pagination-buttonWrapper'] = true, _b['Pagination-buttonWrapper--next'] = true, _b));
      var prevButtonWrapperClass = classNames__default['default']((_c = {}, _c['Pagination-buttonWrapper'] = true, _c['Pagination-buttonWrapper--previous'] = true, _c));
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
      return /*#__PURE__*/React.createElement("div", __assign({
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
        className: __spreadArrays(['ml-4'], buttonHelper).join(' ')
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
        value: "" + (page === 0 ? '' : page),
        "data-test": "DesignSystem-Pagination--Input"
      }), /*#__PURE__*/React.createElement(Text, null, " of " + totalPages + " pages")), /*#__PURE__*/React.createElement("div", {
        className: nextButtonWrapperClass
      }, /*#__PURE__*/React.createElement("div", {
        className: __spreadArrays(['mr-4'], buttonHelper).join(' ')
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
      var _a, _b, _c, _d;

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
          rest = __rest(inputOptions, ["onChange"]);

      var _e = React.useState(value),
          inputValue = _e[0],
          setInputValue = _e[1];

      var _f = React.useState(false),
          editing = _f[0],
          setEditing = _f[1];

      var _g = React.useState(false),
          showComponent = _g[0],
          setShowComponent = _g[1];

      var inputRef = /*#__PURE__*/React.createRef();
      var baseProps = extractBaseProps(props);
      var EditableInputClass = classNames__default['default']((_a = {}, _a['EditableInput'] = true, _a), className);
      var EditableDefaultClass = classNames__default['default']((_b = {}, _b['EditableInput-default'] = true, _b["EditableInput-default--" + size] = size, _b));
      var InputClass = classNames__default['default']((_c = {}, _c['EditableInput-Input--tiny'] = size === 'tiny', _c));
      var ActionClass = classNames__default['default']((_d = {}, _d['EditableInput-actions'] = true, _d["EditableInput-actions--" + size] = size, _d));
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
        var _a;

        switch (eventType) {
          case 'edit':
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            setEditing(true);

          case 'hover':
            setShowComponent(true);
            return;

          case 'default':
            setShowComponent(false);
        }
      };

      var inputComponent = /*#__PURE__*/React.createElement(Input, __assign({
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

      return /*#__PURE__*/React.createElement("div", __assign({
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
      var _a;

      var size = props.size,
          max = props.max,
          value = props.value,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var radius = 20;
      var circumference = 2 * Math.PI * radius;
      var ProgressRingClass = classNames__default['default']((_a = {
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
      return /*#__PURE__*/React.createElement("svg", __assign({
        "data-test": "DesignSystem-ProgressRing"
      }, baseProps, {
        className: ProgressRingClass
      }, svgProps), /*#__PURE__*/React.createElement("circle", __assign({
        className: "Ring-background"
      }, circleProps)), /*#__PURE__*/React.createElement("circle", __assign({
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
      var _a;

      var label = props.label,
          value = props.value,
          disabled = props.disabled,
          active = props.active,
          completed = props.completed,
          onChange = props.onChange;
      var StepClass = classNames__default['default']((_a = {}, _a['Step'] = true, _a['Step--active'] = active, _a['Step--disabled'] = disabled, _a));

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
      var _a;

      var steps = props.steps,
          active = props.active,
          completed = props.completed,
          onChange = props.onChange,
          className = props.className;
      var baseProps = extractBaseProps(props);

      var onChangeHandler = function onChangeHandler(index, stepLabel, stepValue) {
        if (onChange) onChange(index, completed, stepLabel, stepValue);
      };

      var StepperClass = classNames__default['default']((_a = {}, _a['Stepper'] = true, _a), className);
      return /*#__PURE__*/React.createElement("div", __assign({
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

    var Trigger$1 = function Trigger(props) {
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
          var _a = getDateInfo(startDate),
              year = _a.year,
              month = _a.month;

          setState({
            yearNav: year,
            monthNav: month
          });
        }

        if (type === 'end') {
          var _b = getDateInfo(endDate),
              year = _b.year,
              month = _b.month;

          setState({
            yearNav: year,
            monthNav: month
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
                var _a = getDateInfo(endDate),
                    eYear = _a.year,
                    eMonth = _a.month,
                    eDate = _a.date;

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
          var placeholderChar = endInputOptions.placeholderChar ? endInputOptions.placeholderChar : '_';

          if (val && !val.includes(placeholderChar)) {
            var d = translateToDate(inputFormat, val, validators);
            if (d) setState({
              endDate: d
            });
          }
        }
      };

      var onFocusHandler = function onFocusHandler() {
        setState({
          init: true
        });
      };

      var onBlurHandler = function onBlurHandler(_e, val, type) {
        if (type === 'start') {
          var _a = startInputOptions.placeholderChar,
              placeholderChar = _a === void 0 ? '_' : _a;
          if (!val || val.includes(placeholderChar)) setState({
            startDate: undefined
          });
        }

        if (type === 'end') {
          var _b = endInputOptions.placeholderChar,
              placeholderChar = _b === void 0 ? '_' : _b;
          if (!val || val.includes(placeholderChar)) setState({
            endDate: undefined
          });
        }
      };

      var onClearHandler = function onClearHandler(type) {
        if (type === 'start') {
          setState({
            init: true,
            startDate: undefined
          });
          updateNav('end');
        }

        if (type === 'end') {
          setState({
            init: true,
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

      var mask = date$1[inputFormat];
      var showStartError = startInputOptions.required && startError && init;
      var showEndError = endInputOptions.required && endError && init;
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
      }, startLabel), /*#__PURE__*/React.createElement(InputMask, __assign({
        icon: "events",
        placeholder: inputFormat
      }, startInputOptions, {
        mask: mask,
        value: startDate ? translateToString$1(inputFormat, startDate) : '',
        onFocus: onFocusHandler,
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
        caption: showStartError ? startInputOptions.caption || 'Invalid value' : '',
        validators: [inputValidator]
      }))), /*#__PURE__*/React.createElement(Column, {
        size: '6',
        sizeXS: '12',
        className: "DateRangePicker-input DateRangePicker-input--endDate"
      }, endLabel && /*#__PURE__*/React.createElement(Label, {
        required: endInputOptions.required,
        withInput: true
      }, endLabel), /*#__PURE__*/React.createElement(InputMask, __assign({
        icon: "events",
        placeholder: inputFormat
      }, endInputOptions, {
        mask: mask,
        value: endDate ? translateToString$1(inputFormat, endDate) : '',
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
        caption: showEndError ? endInputOptions.caption || 'Invalid value' : '',
        validators: [inputValidator]
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
      var showError = inputOptions.required && (startError || endError) && init;
      var label = inputOptions.label;
      var _a = inputOptions.placeholderChar,
          placeholderChar = _a === void 0 ? '_' : _a;
      var defaultValue = InputMask.utils.getDefaultValue(mask, placeholderChar).split(' - ');
      var sValue = startValue || defaultValue[0];
      var eValue = endValue || defaultValue[1];

      var inputValidator = function inputValidator(val) {
        var _a = val.split(' - '),
            startVal = _a[0],
            endVal = _a[1];

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
              var _a = getDateInfo(endDate),
                  eYear = _a.year,
                  eMonth = _a.month,
                  eDate = _a.date;

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

      var onFocusHandler = function onFocusHandler() {
        setState({
          init: true
        });
      };

      var onBlurHandler = function onBlurHandler(_e, val) {
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
      }, label), /*#__PURE__*/React.createElement(InputMask, __assign({
        icon: "events",
        placeholder: inputFormat + " - " + inputFormat
      }, inputOptions, {
        mask: mask,
        value: !startDate && !endDate && !init ? undefined : sValue + " - " + eValue,
        onFocus: onFocusHandler,
        onChange: function onChange(e, val) {
          onChangeHandler(e, val || '');
        },
        onBlur: function onBlur(e, val) {
          onBlurHandler(e, val || '');
        },
        onClear: onClearHandler,
        error: showError,
        caption: showError ? inputOptions.caption || 'Invalid value' : '',
        validators: [inputValidator]
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

    var DateRangePicker = function (_super) {
      __extends(DateRangePicker, _super);

      function DateRangePicker(props) {
        var _this = _super.call(this, props) || this;

        _this.getDate = function (startDate, endDate) {
          var inputFormat = _this.props.inputFormat;
          var startVal = startDate ? translateToString$1(inputFormat, startDate) : '';
          var endVal = endDate ? translateToString$1(inputFormat, endDate) : '';
          return {
            startValue: startVal,
            endValue: endVal
          };
        };

        _this.getErrors = function (startDate, endDate) {
          var isError = function isError(date) {
            var _a = _this.props,
                disabledBefore = _a.disabledBefore,
                disabledAfter = _a.disabledAfter;

            var _b = getDateInfo(disabledBefore),
                dbYear = _b.year,
                dbMonth = _b.month,
                dbDate = _b.date;

            var _c = getDateInfo(disabledAfter),
                daYear = _c.year,
                daMonth = _c.month,
                daDate = _c.date;

            return !date ? true : compareDate(date, 'less', dbYear, dbMonth, dbDate) || compareDate(date, 'more', daYear, daMonth, daDate);
          };

          var startError = isError(startDate);
          var endError = isError(endDate);

          var _a = getDateInfo(endDate),
              eYear = _a.year,
              eMonth = _a.month,
              eDate = _a.date;

          if (compareDate(startDate, 'more', eYear, eMonth, eDate)) {
            startError = true;
            endError = true;
          }

          return {
            startError: startError,
            endError: endError
          };
        };

        _this.getInRangeError = function () {
          var rangeLimit = _this.props.rangeLimit;

          if (rangeLimit) {
            var _a = _this.state,
                startDate = _a.startDate,
                endDate = _a.endDate;

            var _b = getDateInfo(startDate),
                sYear = _b.year,
                sMonth = _b.month,
                sDate = _b.date;

            var _c = getDateInfo(endDate),
                eYear = _c.year,
                eMonth = _c.month,
                eDate = _c.date;

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

        _this.onRangeChangeHandler = function (sDate, eDate) {
          _this.setState({
            init: true,
            startDate: sDate,
            endDate: eDate,
            startValue: sDate ? translateToString$1(_this.props.inputFormat, sDate) : '',
            endValue: eDate ? translateToString$1(_this.props.inputFormat, eDate) : ''
          });
        };

        _this.onToggleHandler = function (o, type) {
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
        };

        var inputFormat = props.inputFormat,
            validators = props.validators;
        var startDate = convertToDate(props.startDate, inputFormat, validators);
        var endDate = convertToDate(props.endDate, inputFormat, validators);

        var _a = _this.getDate(startDate, endDate),
            startValue = _a.startValue,
            endValue = _a.endValue;

        var _b = _this.getErrors(startDate, endDate),
            startError = _b.startError,
            endError = _b.endError;

        _this.state = {
          startDate: startDate,
          endDate: endDate,
          startValue: startValue,
          endValue: endValue,
          startError: startError,
          endError: endError,
          init: false,
          open: props.open || false,
          yearNav: props.yearNav,
          monthNav: props.monthNav
        };
        _this.monthsInView = props.monthsInView || (props.withInput ? 2 : 1);
        return _this;
      }

      DateRangePicker.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (prevProps.startDate !== this.props.startDate) {
          var _a = this.props,
              inputFormat = _a.inputFormat,
              validators = _a.validators;
          var d = convertToDate(this.props.startDate, inputFormat, validators);
          var val = translateToString$1(inputFormat, d);
          this.setState({
            startDate: d,
            startValue: val
          });
        }

        if (prevProps.endDate !== this.props.endDate) {
          var _b = this.props,
              inputFormat = _b.inputFormat,
              validators = _b.validators;
          var d = convertToDate(this.props.endDate, inputFormat, validators);
          var val = translateToString$1(inputFormat, d);
          this.setState({
            endDate: d,
            endValue: val
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
          var _c = this.props,
              onRangeChange = _c.onRangeChange,
              outputFormat = _c.outputFormat;
          var _d = this.state,
              startDate = _d.startDate,
              endDate = _d.endDate;

          var _e = this.getErrors(startDate, endDate),
              startError = _e.startError,
              endError = _e.endError;

          this.setState({
            startError: startError,
            endError: endError
          });

          if (onRangeChange) {
            var inRangeError = this.getInRangeError();
            var sValue = translateToString$1(outputFormat, startDate);
            var eValue = translateToString$1(outputFormat, endDate);

            if (!inRangeError && !startError && !endError) {
              onRangeChange(startDate, endDate, sValue, eValue);
            } else {
              if (!startError) onRangeChange(startDate, undefined, sValue, eValue);else if (!endError) onRangeChange(undefined, endDate, sValue, eValue);else onRangeChange(undefined, undefined, sValue, eValue);
            }
          }
        }
      };

      DateRangePicker.prototype.renderCalendar = function () {
        var _a = this.props;
            _a.startDate;
            _a.endDate;
            _a.yearNav;
            _a.monthNav;
            _a.open;
            var inputFormat = _a.inputFormat;
            _a.outputFormat;
            _a.startInputOptions;
            _a.endInputOptions;
            var validators = _a.validators;
            _a.withInput;
            _a.position;
            var disabledBefore = _a.disabledBefore,
            disabledAfter = _a.disabledAfter;
            _a.onRangeChange;
            var rangeLimit = _a.rangeLimit,
            rest = __rest(_a, ["startDate", "endDate", "yearNav", "monthNav", "open", "inputFormat", "outputFormat", "startInputOptions", "endInputOptions", "validators", "withInput", "position", "disabledBefore", "disabledAfter", "onRangeChange", "rangeLimit"]);

        var _b = this.state,
            startDate = _b.startDate,
            endDate = _b.endDate,
            yearNav = _b.yearNav,
            monthNav = _b.monthNav;
        return /*#__PURE__*/React.createElement(Calendar, __assign({}, rest, {
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
      };

      DateRangePicker.prototype.render = function () {
        var _a;

        var _b = this.props,
            withInput = _b.withInput,
            startInputOptions = _b.startInputOptions,
            endInputOptions = _b.endInputOptions,
            inputOptions = _b.inputOptions,
            inputFormat = _b.inputFormat,
            position = _b.position,
            validators = _b.validators,
            singleInput = _b.singleInput,
            contentAlign = _b.contentAlign,
            children = _b.children;
        var open = this.state.open;
        var RangePickerClass = classNames__default['default']((_a = {}, _a['DateRangePicker'] = true, _a["DateRangePicker--" + contentAlign] = contentAlign, _a));

        if (withInput) {
          var trigger = singleInput ? /*#__PURE__*/React.createElement(SingleInputTrigger, {
            inputFormat: inputFormat,
            inputOptions: inputOptions,
            validators: validators,
            state: this.state,
            setState: this.setState.bind(this)
          }) : /*#__PURE__*/React.createElement(Trigger$1, {
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
      };

      DateRangePicker.defaultProps = __assign(__assign({}, Calendar.defaultProps), {
        children: /*#__PURE__*/React.createElement(React.Fragment, null),
        contentAlign: 'left',
        monthsInView: undefined,
        position: 'bottom-start',
        inputFormat: 'mm/dd/yyyy',
        outputFormat: 'mm/dd/yyyy',
        validators: [date],
        inputOptions: {
          label: 'Date'
        },
        startInputOptions: {
          label: 'Start Date'
        },
        endInputOptions: {
          label: 'End Date'
        }
      });
      return DateRangePicker;
    }(React.Component);
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
      var _a;

      var children = props.children,
          onTabChange = props.onTabChange,
          className = props.className;
      var baseProps = extractBaseProps(props);
      var tabs = Array.isArray(children) ? children : [children];
      var totalTabs = tabs.length;

      var _b = React.useState(props.active && props.active < totalTabs ? props.active : 0),
          active = _b[0],
          setActiveTab = _b[1];

      React.useEffect(function () {
        setActiveTab(props.active && props.active < totalTabs ? props.active : 0);
      }, [props.active]);
      var wrapperClass = classNames__default['default']((_a = {}, _a['TabsWrapper'] = true, _a), className);

      var tabClickHandler = function tabClickHandler(tabIndex) {
        setActiveTab(tabIndex);
        if (onTabChange) onTabChange(tabIndex);
      };

      var TabsHeader = tabs.map(function (child, index) {
        var _a;

        var _b = child.props,
            label = _b.label,
            disabled = _b.disabled;
        var tabHeaderClass = classNames__default['default']((_a = {}, _a['Tab'] = true, _a['Tab--disabled'] = disabled, _a['Tab--active'] = !disabled && active === index, _a));
        return /*#__PURE__*/React.createElement("div", {
          "data-test": "DesignSystem-Tabs--Header",
          key: index,
          className: tabHeaderClass,
          onClick: function onClick() {
            return !disabled && tabClickHandler(index);
          }
        }, label);
      });
      return /*#__PURE__*/React.createElement("div", __assign({
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
      var sortingList = __spreadArrays(this.props.sortingList);

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
    function getWidth(width) {
      if (typeof width === 'number') return width;

      if (width.charAt(width.length - 1) === '%' && this.state.init) {
        var checkboxCell = this.gridRef.querySelector('.Grid-cell--checkbox');
        var checkboxWidth = checkboxCell ? checkboxCell.clientWidth : 0;
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
      var updatedData = __spreadArrays(data);

      for (var _i = 0, rowIndexes_1 = rowIndexes; _i < rowIndexes_1.length; _i++) {
        var rowIndex = rowIndexes_1[_i];
        updatedData[rowIndex] = __assign(__assign({}, updatedData[rowIndex]), dataUpdate);
      }

      return updatedData;
    };
    function translateData(schema, data) {
      var newData = __assign({}, data);

      if (schema.translate) {
        var translatedData = schema.translate(data);
        newData[schema.name] = translatedData !== null && _typeof(translatedData) === 'object' ? __assign(__assign({}, newData[schema.name]), translatedData) : translatedData;
      }

      if (newData[schema.name] === null || _typeof(newData[schema.name]) !== 'object') {
        newData[schema.name] = {
          title: newData[schema.name]
        };
      }

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

    var HeaderCell = function HeaderCell(props) {
      var _this = props._this,
          schema = props.schema,
          draggable = props.draggable;
      var _a = _this.props,
          schemaProp = _a.schema,
          loading = _a.loading,
          showMenu = _a.showMenu,
          sortingList = _a.sortingList,
          filterList = _a.filterList,
          headCellTooltip = _a.headCellTooltip,
          showFilters = _a.showFilters;
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
      var classes = classNames__default['default']({
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
      var _a = _this.props,
          size = _a.size,
          loading = _a.loading,
          nestedRows = _a.nestedRows;
      var expanded = expandedState[0],
          setExpanded = expandedState[1];
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
      })), schema.cellRenderer ? schema.cellRenderer(cellProps) : /*#__PURE__*/React.createElement(GridCell, __assign({
        key: rowIndex + "-" + colIndex
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
      var _a = _this.props,
          separator = _a.separator,
          nestedRows = _a.nestedRows;
      var init = _this.state.init;
      var name = schema.name,
          hidden = schema.hidden,
          pinned = schema.pinned,
          _b = schema.cellType,
          cellType = _b === void 0 ? 'DEFAULT' : _b;

      var _c = getCellSize(cellType),
          width = _c.width,
          _d = _c.minWidth,
          minWidth = _d === void 0 ? 96 : _d,
          _e = _c.maxWidth,
          maxWidth = _e === void 0 ? 800 : _e;

      var cellClass = classNames__default['default']({
        'Grid-cell': true,
        'Grid-cell--head': head,
        'Grid-cell--body': !head,
        'Grid-cell--separator': !firstCell && (schema.separator !== undefined ? schema.separator : separator),
        'Grid-cell--nestedRow': !head && colIndex === 0 && nestedRows
      });
      if (hidden) return null;
      return /*#__PURE__*/React.createElement("div", {
        key: rowIndex + "-" + colIndex,
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
          var classes = classNames__default['default']((_a = {
            'Grid-cellGroup': true,
            'Grid-cellGroup--pinned': pinned
          }, _a["Grid-cellGroup--pinned-" + pinned] = pinned, _a['Grid-cellGroup--main'] = !pinned, _a));
          return /*#__PURE__*/React.createElement("div", {
            className: classes
          }, renderCheckbox(shouldRenderCheckbox), currSchema.map(function (s, index) {
            var cI = pinned === 'left' ? index : leftPinnedSchema.length + index;
            if (pinned === 'right') cI += unpinnedSchema.length;
            return /*#__PURE__*/React.createElement(Cell, {
              key: "" + cI,
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

      var rowClasses = classNames__default['default']('Grid-row', 'Grid-row--body', {
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
          var classes = classNames__default['default']((_a = {
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

      if (!loading && error) {
        return errorTemplate ? typeof errorTemplate === 'function' ? errorTemplate({}) : errorTemplate : null;
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
      return /*#__PURE__*/React.createElement("div", {
        className: "Grid-body"
      }, !loading && /*#__PURE__*/React.createElement("div", {
        className: "GridBody-padding",
        style: {
          height: topPadding
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
          height: bottomPadding
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
          error = _b.error,
          type = _b.type,
          size = _b.size,
          showHead = _b.showHead,
          draggable = _b.draggable,
          withCheckbox = _b.withCheckbox,
          data = _b.data;
      var init = _this.state.init;
      var classes = classNames__default['default']((_a = {
        Grid: 'true'
      }, _a["Grid--" + type] = type, _a["Grid--" + size] = size, _a), className);
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

      var _c = React.useState(initialState),
          state = _c[0],
          setState = _c[1];

      React.useEffect(function () {
        if (init) {
          setState({
            offset: offset,
            avgRowHeight: avgRowHeight,
            inView: _this.gridRef.scrollHeight / avgRowHeight
          });
        }
      }, [init]);
      React.useEffect(function () {
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

        _this_1.gridRef = null;

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

        _this_1.state = {
          init: false
        };
        return _this_1;
      }

      Grid.prototype.render = function () {
        var _this_1 = this;

        var baseProps = extractBaseProps(this.props);
        var schema = getSchema(this);
        return /*#__PURE__*/React.createElement("div", {
          className: "Grid-wrapper",
          ref: function ref(el) {
            _this_1.gridRef = el;

            if (el && !_this_1.state.init) {
              _this_1.setState({
                init: true
              });
            }
          }
        }, /*#__PURE__*/React.createElement(MainGrid, __assign({}, baseProps, {
          _this: this,
          schema: schema
        })));
      };

      Grid.defaultProps = {
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
      };
      return Grid;
    }(React.Component);

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
      var _a;

      var size = props.size,
          schema = props.schema,
          loading = props.loading;
      var data = !loading ? translateData(schema, props.data) : {};
      var name = schema.name,
          _b = schema.cellType,
          cellType = _b === void 0 ? 'DEFAULT' : _b,
          _c = schema.align,
          align = _c === void 0 ? 'left' : _c,
          tooltip = schema.tooltip;
      var cellData = data[name];
      var cellClass = classNames__default['default']((_a = {}, _a['GridCell'] = true, _a));

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

    var DraggableDropdown = function DraggableDropdown(props) {
      var options = props.options,
          onChange = props.onChange;

      var _a = React.useState(false),
          open = _a[0],
          setOpen = _a[1];

      var _b = React.useState(options),
          tempOptions = _b[0],
          setTempOptions = _b[1];

      var _c = React.useState('var(--spacing-8)'),
          triggerWidth = _c[0],
          setTriggerWidth = _c[1];

      React.useEffect(function () {
        setTempOptions(options);
      }, [open]);

      var handleParentChange = function handleParentChange(e) {
        setTempOptions(tempOptions.map(function (option) {
          return __assign(__assign({}, option), {
            selected: e.target.checked
          });
        }));
      };

      var handleChildChange = function handleChildChange(e, index) {
        var newOptions = __spreadArrays(tempOptions);

        newOptions[index] = __assign(__assign({}, newOptions[index]), {
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
            setTriggerWidth((el === null || el === void 0 ? void 0 : el.clientWidth) + "px");
          },
          size: "tiny",
          appearance: "transparent",
          icon: "keyboard_arrow_down_filled",
          iconAlign: "right"
        }, "Showing " + options.filter(function (option) {
          return option.selected;
        }).length + " of " + options.length + " columns"),
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
            e.dataTransfer.setData('index', "" + index);
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
          allowSelectAll = props.allowSelectAll,
          showFilters = props.showFilters;

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

      var columnOptions = schema.map(function (s) {
        return {
          label: s.displayName,
          value: s.name,
          selected: !s.hidden
        };
      });

      var onDynamicColumnUpdate = function onDynamicColumnUpdate(options) {
        var newSchema = options.map(function (option) {
          return __assign(__assign({}, schema.find(function (colSchema) {
            return colSchema.name === option.value;
          })), {
            hidden: !option.selected
          });
        });
        if (updateSchema) updateSchema(newSchema);
      };

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
      })), showFilters && filterSchema.length > 0 && /*#__PURE__*/React.createElement("div", {
        className: "Header-dropdown"
      }, /*#__PURE__*/React.createElement("div", {
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
      var _a = props.errorType,
          errorType = _a === void 0 ? 'DEFAULT' : _a;
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

    var Table = function (_super) {
      __extends(Table, _super);

      function Table(props) {
        var _this = _super.call(this, props) || this;

        _this.updateData = function (searchUpdate) {
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
        };

        _this.updateDataFn = function () {
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
        };

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
          page: props.page,
          sortingList: props.sortingList,
          filterList: props.filterList,
          totalRecords: !async ? data.length : 0,
          loading: !async ? props.loading : true,
          error: !async ? props.error : false,
          errorType: props.errorType,
          selectAll: getSelectAll$1([]),
          searchTerm: undefined
        };
        _this.debounceUpdate = debounce(props.searchDebounceDuration, _this.updateDataFn);
        return _this;
      }

      Table.prototype.componentDidMount = function () {
        this.updateData();
      };

      Table.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _this = this;

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
              errorType: this.props.errorType,
              page: 1,
              totalRecords: data.length || 0,
              selectAll: getSelectAll$1([])
            }, function () {
              _this.updateData();
            });
          }
        }

        if (prevState.page !== this.state.page) {
          var onPageChange = this.props.onPageChange;
          if (onPageChange) onPageChange(this.state.page);
        }

        if (prevState.page !== this.state.page || prevState.filterList !== this.state.filterList || prevState.sortingList !== this.state.sortingList || prevState.searchTerm !== this.state.searchTerm) {
          if (!this.props.loading) {
            var searchUpdate = prevState.searchTerm !== this.state.searchTerm;
            this.updateData(searchUpdate);
          }
        }
      };

      Table.prototype.render = function () {
        var _a = this.props,
            showHead = _a.showHead,
            type = _a.type,
            size = _a.size,
            headCellTooltip = _a.headCellTooltip,
            separator = _a.separator,
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
            className = _a.className,
            filterPosition = _a.filterPosition;
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
          withPagination: withPagination,
          showFilters: filterPosition === 'HEADER'
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
      };

      Table.defaultProps = defaultProps;
      return Table;
    }(React.Component);

    var List = function List(props) {
      return /*#__PURE__*/React.createElement(Table, __assign({}, props, {
        showHead: false,
        filterPosition: 'HEADER'
      }));
    };
    List.defaultProps = defaultProps;

    var useState$1 = React.useState;
    var Navigation = function Navigation(props) {
      var _a;

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

      var _b = useState$1({}),
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

      var getTextAppearance = function getTextAppearance(isMenuActive, disabled) {
        return disabled ? 'subtle' : isMenuActive ? 'link' : 'default';
      };

      var getIconAppearance = function getIconAppearance(isMenuActive, disabled) {
        return disabled ? 'subtle' : isMenuActive ? 'info' : 'default';
      };

      var getHorizontalMenu = function getHorizontalMenu(menuData) {
        var list = menuData.map(function (menu, index) {
          var _a;

          var isMenuActive = isActive(menu);
          var menuClasses = classNames__default['default']((_a = {
            'Navigation-menu': true
          }, _a["Navigation-menu--" + type] = type, _a['Navigation-menu--active'] = isMenuActive, _a));
          return /*#__PURE__*/React.createElement("div", {
            key: index,
            className: menuClasses,
            onClick: function onClick() {
              return onClickHandler(menu);
            }
          }, menu.icon && /*#__PURE__*/React.createElement(Icon, {
            className: "mr-3",
            name: menu.icon,
            appearance: getIconAppearance(isMenuActive, menu.disabled)
          }), /*#__PURE__*/React.createElement(Text, {
            appearance: getTextAppearance(isMenuActive, menu.disabled)
          }, menu.label));
        });
        return list;
      };

      var getVerticalMenu = function getVerticalMenu() {
        var _a;

        var list = menus.map(function (menu, index) {
          var _a;

          var activeMenu = expanded && !menuState[menu.name] && isActive(menu);
          var activeMenuIcon = !expanded && isActive(menu) || activeMenu;
          var menuClasses = classNames__default['default']((_a = {
            'Navigation-menu': true
          }, _a["Navigation-menu--" + type] = type, _a['Navigation-menu--active'] = activeMenu, _a['Navigation-menu--rounded'] = type === 'vertical' && expanded && rounded, _a));
          var menuIconClasses = classNames__default['default']({
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
            var _a;

            var isMenuActive = isActive(subMenu);
            var subMenuClasses = classNames__default['default'](menuClasses, (_a = {}, _a['Navigation-menu--subMenu'] = type, _a['Navigation-menu--active'] = isMenuActive, _a));
            return /*#__PURE__*/React.createElement("div", {
              key: ind,
              className: subMenuClasses,
              onClick: function onClick() {
                return onClickHandler(subMenu);
              }
            }, /*#__PURE__*/React.createElement(Text, {
              appearance: getTextAppearance(isMenuActive, subMenu.disabled)
            }, subMenu.label));
          })));
        });
        var footerClasses = classNames__default['default']((_a = {
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

      var classes = classNames__default['default']((_a = {}, _a['Navigation'] = true, _a["Navigation--" + type] = type, _a['justify-content-center'] = type === 'horizontal' && align === 'center', _a['justify-content-start'] = type === 'horizontal' && align === 'left', _a['Navigation--collapsed'] = !expanded, _a), className);
      return /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
        className: classes
      }), type === 'horizontal' ? getHorizontalMenu(menus) : getVerticalMenu());
    };
    Navigation.defaultProps = {
      type: 'horizontal',
      align: 'center',
      expanded: true,
      autoCollapse: true,
      rounded: false
    };

    var PageHeader = function PageHeader(props) {
      var _a;

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
      var wrapperClasses = classNames__default['default']((_a = {
        'PageHeader-wrapper': true
      }, _a['PageHeader-wrapper--separator'] = separator, _a['PageHeader-wrapper--withTabs'] = tabs, _a), className);
      var classes = classNames__default['default']({
        PageHeader: true
      });

      var renderCenter = function renderCenter() {
        return navigation ? navigation : stepper;
      };

      return /*#__PURE__*/React.createElement("div", __assign({}, baseProps, {
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

    var version = "1.6.0-1";

    exports.Avatar = Avatar;
    exports.AvatarGroup = AvatarGroup;
    exports.Backdrop = Backdrop;
    exports.Badge = Badge;
    exports.Breadcrumbs = Breadcrumbs;
    exports.Button = Button;
    exports.Caption = Caption;
    exports.Card = Card;
    exports.ChatMessage = ChatMessage;
    exports.Checkbox = Checkbox;
    exports.Chip = Chip;
    exports.ChipGroup = ChipGroup;
    exports.Column = Column;
    exports.DatePicker = DatePicker;
    exports.DateRangePicker = DateRangePicker;
    exports.Dialog = Dialog;
    exports.DonutChart = DonutChart;
    exports.Dropdown = Dropdown;
    exports.EditableDropdown = EditableDropdown;
    exports.EditableInput = EditableInput;
    exports.EmptyState = EmptyState;
    exports.Grid = Grid;
    exports.GridCell = GridCell;
    exports.Heading = Heading;
    exports.Icon = Icon;
    exports.Input = Input;
    exports.InputMask = InputMask;
    exports.Label = Label;
    exports.Legend = Legend;
    exports.Link = Link;
    exports.List = List;
    exports.Message = Message;
    exports.MetaList = MetaList;
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
    exports.RangeSlider = RangeSlider;
    exports.Row = Row;
    exports.Sidesheet = Sidesheet;
    exports.Slider = Slider;
    exports.Spinner = Spinner;
    exports.StatusHint = StatusHint;
    exports.Stepper = Stepper;
    exports.Subheading = Subheading;
    exports.Switch = Switch;
    exports.Tab = Tab;
    exports.Table = Table;
    exports.TabsWrapper = TabsWrapper;
    exports.Text = Text;
    exports.Textarea = Textarea;
    exports.TimePicker = TimePicker;
    exports.Toast = Toast;
    exports.Tooltip = Tooltip;
    exports.Utils = index;
    exports.version = version;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.js.map
