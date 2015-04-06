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
    componentWillReceiveProps: {
      value: function componentWillReceiveProps(newProps) {
        this.setState({ word: newProps.word });
      }
    },
    splitAndReplace: {
      value: function splitAndReplace(word) {
        return word.split("").map(function (letter) {
          return letter === "-" ? "" : letter;
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