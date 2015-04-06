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
        var _this = this;

        var _props = this.props;
        var game_id = _props.game_id;
        var value = _props.value;

        var guess = JSON.stringify({ guess: value });

        $.post(guess_url(game_id), guess, function (data) {
          var game = JSON.parse(data);
          if (game.guesses.indexOf(value) === -1) {
            _this.setState({ "class": "bad" });
          } else {
            _this.setState({ "class": "good" });
          }

          $("#hangperson-container").trigger("game_updated");
        });
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