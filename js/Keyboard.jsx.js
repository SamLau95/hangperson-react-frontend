"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Keyboard = (function (_React$Component) {
  function Keyboard() {
    _classCallCheck(this, Keyboard);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Keyboard, _React$Component);

  _createClass(Keyboard, {
    render: {
      value: function render() {
        var id = this.props.id;
        return React.createElement(
          "div",
          { id: "keyboard" },
          React.createElement(
            "ul",
            { className: "cf", id: "qwerty" },
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", className: "key c9", id: "tab" },
                React.createElement("span", null)
              )
            ),
            React.createElement(Key, { id: id, value: "q", keycode: "81" }),
            React.createElement(Key, { id: id, value: "w", keycode: "87" }),
            React.createElement(Key, { id: id, value: "e", keycode: "69" }),
            React.createElement(Key, { id: id, value: "r", keycode: "82" }),
            React.createElement(Key, { id: id, value: "t", keycode: "84" }),
            React.createElement(Key, { id: id, value: "y", keycode: "89" }),
            React.createElement(Key, { id: id, value: "u", keycode: "85" }),
            React.createElement(Key, { id: id, value: "i", keycode: "73" }),
            React.createElement(Key, { id: id, value: "o", keycode: "79" }),
            React.createElement(Key, { id: id, value: "p", keycode: "80" }),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", className: "key c219 alt" },
                React.createElement("b", null),
                React.createElement("span", null)
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", className: "key c221 alt" },
                React.createElement("b", null),
                React.createElement("span", null)
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", className: "key c220 alt" },
                React.createElement("b", null),
                React.createElement("span", null)
              )
            )
          ),
          React.createElement(
            "ul",
            { className: "cf", id: "asdfg" },
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", className: "key c20 alt", id: "caps" },
                React.createElement("b", null),
                React.createElement("span", null)
              )
            ),
            React.createElement(Key, { id: id, value: "a", keycode: "65" }),
            React.createElement(Key, { id: id, value: "s", keycode: "83" }),
            React.createElement(Key, { id: id, value: "d", keycode: "68" }),
            React.createElement(Key, { id: id, value: "f", keycode: "70" }),
            React.createElement(Key, { id: id, value: "g", keycode: "71" }),
            React.createElement(Key, { id: id, value: "h", keycode: "72" }),
            React.createElement(Key, { id: id, value: "j", keycode: "74" }),
            React.createElement(Key, { id: id, value: "k", keycode: "75" }),
            React.createElement(Key, { id: id, value: "l", keycode: "76" }),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", className: "key c186 alt" },
                React.createElement("b", null),
                React.createElement("span", null)
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", className: "key c222 alt" },
                React.createElement("b", null),
                React.createElement("span", null)
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", className: "key c13 alt", id: "enter" },
                React.createElement("span", null)
              )
            )
          ),
          React.createElement(
            "ul",
            { className: "cf", id: "zxcvb" },
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", className: "key c16 shiftleft" },
                React.createElement("span", null)
              )
            ),
            React.createElement(Key, { id: id, value: "z", keycode: "90" }),
            React.createElement(Key, { id: id, value: "x", keycode: "88" }),
            React.createElement(Key, { id: id, value: "c", keycode: "67" }),
            React.createElement(Key, { id: id, value: "v", keycode: "86" }),
            React.createElement(Key, { id: id, value: "b", keycode: "66" }),
            React.createElement(Key, { id: id, value: "n", keycode: "78" }),
            React.createElement(Key, { id: id, value: "m", keycode: "77" }),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", className: "key c188 alt" },
                React.createElement("b", null),
                React.createElement("span", null)
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", className: "key c190 alt" },
                React.createElement("b", null),
                React.createElement("span", null)
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", className: "key c191 alt" },
                React.createElement("b", null),
                React.createElement("span", null)
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", className: "key c16 shiftright" },
                React.createElement("span", null)
              )
            )
          )
        );
      }
    }
  });

  return Keyboard;
})(React.Component);