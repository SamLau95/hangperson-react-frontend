"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Key = (function (_React$Component) {
  function Key(props) {
    _classCallCheck(this, Key);

    _get(Object.getPrototypeOf(Key.prototype), "constructor", this).call(this, props);
    this.state = { "class": "" };
  }

  _inherits(Key, _React$Component);

  _createClass(Key, {
    handleClick: {
      value: function handleClick() {
        // Hardcoded for now.
        this.setState({ "class": "good" });
      }
    },
    render: {
      value: function render() {
        var classString = "key c" + this.props.keycode + " " + this.state["class"];
        return React.createElement(
          "li",
          { onClick: this.handleClick.bind(this) },
          React.createElement(
            "a",
            { href: "#", className: classString },
            React.createElement(
              "span",
              null,
              this.props.value
            )
          )
        );
      }
    }
  });

  return Key;
})(React.Component);
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
            React.createElement(Key, { value: "q", keycode: "81" }),
            React.createElement(Key, { value: "w", keycode: "87" }),
            React.createElement(Key, { value: "e", keycode: "69" }),
            React.createElement(Key, { value: "r", keycode: "82" }),
            React.createElement(Key, { value: "t", keycode: "84" }),
            React.createElement(Key, { value: "y", keycode: "89" }),
            React.createElement(Key, { value: "u", keycode: "85" }),
            React.createElement(Key, { value: "i", keycode: "73" }),
            React.createElement(Key, { value: "o", keycode: "79" }),
            React.createElement(Key, { value: "p", keycode: "80" }),
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
            React.createElement(Key, { value: "a", keycode: "65" }),
            React.createElement(Key, { value: "s", keycode: "83" }),
            React.createElement(Key, { value: "d", keycode: "68" }),
            React.createElement(Key, { value: "f", keycode: "70" }),
            React.createElement(Key, { value: "g", keycode: "71" }),
            React.createElement(Key, { value: "h", keycode: "72" }),
            React.createElement(Key, { value: "j", keycode: "74" }),
            React.createElement(Key, { value: "k", keycode: "75" }),
            React.createElement(Key, { value: "l", keycode: "76" }),
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
            React.createElement(Key, { value: "z", keycode: "90" }),
            React.createElement(Key, { value: "x", keycode: "88" }),
            React.createElement(Key, { value: "c", keycode: "67" }),
            React.createElement(Key, { value: "v", keycode: "86" }),
            React.createElement(Key, { value: "b", keycode: "66" }),
            React.createElement(Key, { value: "n", keycode: "78" }),
            React.createElement(Key, { value: "m", keycode: "77" }),
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

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Letters = (function (_React$Component) {
  function Letters(props) {
    _classCallCheck(this, Letters);

    _get(Object.getPrototypeOf(Letters.prototype), "constructor", this).call(this, props);
    this.state = { word: props.word };
  }

  _inherits(Letters, _React$Component);

  _createClass(Letters, {
    splitAndReplace: {
      value: function splitAndReplace(word) {
        return word.split(" ").map(function (letter) {
          return letter == "-" ? "" : letter;
        });
      }
    },
    render: {
      value: function render() {
        var letters = this.splitAndReplace(this.state.word);
        var letterItems = letters.map(function (letter) {
          return React.createElement(
            "div",
            null,
            letter
          );
        });
        return React.createElement(
          "div",
          { id: "letters" },
          letterItems
        );
      }
    }
  });

  return Letters;
})(React.Component);

React.render(React.createElement(Letters, { word: "h e - - o" }), document.getElementById("letters-container"));
"use strict";

var BASE_URL = "http://localhost:9292";
function game_url(game_id) {
  return "" + BASE_URL + "/" + game_id;
}
function create_url() {
  return "" + BASE_URL + "/create";
}
function guess_url(game_id) {
  return "" + BASE_URL + "/" + id + "/guess";
}
