"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Hangperson = (function (_React$Component) {
  function Hangperson() {
    _classCallCheck(this, Hangperson);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Hangperson, _React$Component);

  _createClass(Hangperson, {
    componentWillMount: {
      value: function componentWillMount() {
        this.state = { word: "" };

        $.post(create_url(), this.updateGame.bind(this));

        $("#hangperson-container").on("game_updated", this.handleGameUpdated.bind(this));
      }
    },
    updateGame: {
      value: function updateGame(data) {
        var game = JSON.parse(data);
        this.setState({
          game_id: this.state.game_id || game.id,
          word: game.word_with_guesses,
          guesses: game.guesses,
          wrong_guesses: game.wrong_guesses,
          status: game.status
        });
      }
    },
    handleGameUpdated: {
      value: function handleGameUpdated() {
        $.get(game_url(this.state.game_id), this.updateGame.bind(this));
      }
    },
    render: {
      value: function render() {
        var _state = this.state;
        var game_id = _state.game_id;
        var word = _state.word;
        var guesses = _state.guesses;
        var wrong_guesses = _state.wrong_guesses;

        return React.createElement(
          "div",
          { id: "hangperson" },
          React.createElement(Letters, { word: word }),
          React.createElement("div", { className: "spacer" }),
          React.createElement(Keyboard, { game_id: game_id })
        );
      }
    }
  });

  return Hangperson;
})(React.Component);

React.render(React.createElement(Hangperson, null), document.getElementById("hangperson-container"));