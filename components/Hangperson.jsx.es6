class Hangperson extends React.Component {
  componentWillMount() {
    this.state = { word: "" };

    $.post(create_url(), this.updateGame.bind(this));

    $("#hangperson-container").on("game_updated", this.handleGameUpdated.bind(this));
  }

  updateGame(data) {
    const game = JSON.parse(data);
    this.setState({
      game_id: this.state.game_id || game.id,
      word: game.word_with_guesses,
      guesses: game.guesses,
      wrong_guesses: game.wrong_guesses,
      status: game.status
    });
  }

  handleGameUpdated() {
    $.get(game_url(this.state.game_id), this.updateGame.bind(this));
  }

  render() {
    const { game_id, word, guesses, wrong_guesses } = this.state;
    return (
      <div id="hangperson">
        <Letters word={word} />
        <div className="spacer"></div>
        <Keyboard game_id={game_id} />
      </div>
    )
  }
}

React.render(<Hangperson />, document.getElementById('hangperson-container'));
