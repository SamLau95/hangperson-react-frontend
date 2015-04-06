class Hangperson extends React.Component {
  componentWillMount() {
    this.state = { word: "" };

    $.post(create_url(), (data) => {
      const game = JSON.parse(data);
      this.setState({
        id: game.id,
        word: game.word_with_guesses,
        guesses: game.guesses,
        wrong_guesses: game.wrong_guesses,
      });
    });
  }

  render() {
    const { id, word, guesses, wrong_guesses } = this.state;
    return (
      <div id="hangperson">
        <Letters word={word} />
        <div className="spacer"></div>
        <Keyboard id={id} />
      </div>
    )
  }
}

React.render(<Hangperson />, document.getElementById('hangperson-container'));
