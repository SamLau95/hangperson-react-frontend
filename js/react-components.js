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
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", className: "key c81" },
                React.createElement(
                  "span",
                  null,
                  "q"
                )
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", className: "key c87" },
                React.createElement(
                  "span",
                  null,
                  "w"
                )
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", className: "key c69" },
                React.createElement(
                  "span",
                  null,
                  "e"
                )
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", className: "key c82" },
                React.createElement(
                  "span",
                  null,
                  "r"
                )
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", className: "key c84" },
                React.createElement(
                  "span",
                  null,
                  "t"
                )
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", className: "key c89" },
                React.createElement(
                  "span",
                  null,
                  "y"
                )
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", className: "key c85" },
                React.createElement(
                  "span",
                  null,
                  "u"
                )
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", className: "key c73" },
                React.createElement(
                  "span",
                  null,
                  "i"
                )
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", className: "key c79" },
                React.createElement(
                  "span",
                  null,
                  "o"
                )
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", className: "key c80" },
                React.createElement(
                  "span",
                  null,
                  "p"
                )
              )
            ),
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
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", className: "key c65" },
                React.createElement(
                  "span",
                  null,
                  "a"
                )
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", className: "key c83" },
                React.createElement(
                  "span",
                  null,
                  "s"
                )
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", className: "key c68" },
                React.createElement(
                  "span",
                  null,
                  "d"
                )
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", className: "key c70" },
                React.createElement(
                  "span",
                  null,
                  "f"
                )
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", className: "key c71" },
                React.createElement(
                  "span",
                  null,
                  "g"
                )
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", className: "key c72" },
                React.createElement(
                  "span",
                  null,
                  "h"
                )
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", className: "key c74" },
                React.createElement(
                  "span",
                  null,
                  "j"
                )
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", className: "key c75" },
                React.createElement(
                  "span",
                  null,
                  "k"
                )
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", className: "key c76" },
                React.createElement(
                  "span",
                  null,
                  "l"
                )
              )
            ),
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
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", className: "key c90" },
                React.createElement(
                  "span",
                  null,
                  "z"
                )
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", className: "key c88" },
                React.createElement(
                  "span",
                  null,
                  "x"
                )
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", className: "key c67" },
                React.createElement(
                  "span",
                  null,
                  "c"
                )
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", className: "key c86" },
                React.createElement(
                  "span",
                  null,
                  "v"
                )
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", className: "key c66" },
                React.createElement(
                  "span",
                  null,
                  "b"
                )
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", className: "key c78" },
                React.createElement(
                  "span",
                  null,
                  "n"
                )
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", className: "key c77" },
                React.createElement(
                  "span",
                  null,
                  "m"
                )
              )
            ),
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

React.render(React.createElement(Keyboard, null), document.getElementById("keyboard-container"));
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Letters = (function (_React$Component) {
  function Letters() {
    _classCallCheck(this, Letters);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Letters, _React$Component);

  _createClass(Letters, {
    render: {
      value: function render() {
        return React.createElement(
          "div",
          { id: "letters" },
          React.createElement(
            "div",
            null,
            "h"
          ),
          React.createElement(
            "div",
            null,
            "e"
          ),
          React.createElement(
            "div",
            null,
            "l"
          ),
          React.createElement(
            "div",
            null,
            "l"
          ),
          React.createElement(
            "div",
            null,
            "o"
          )
        );
      }
    }
  });

  return Letters;
})(React.Component);

React.render(React.createElement(Letters, null), document.getElementById("letters-container"));
