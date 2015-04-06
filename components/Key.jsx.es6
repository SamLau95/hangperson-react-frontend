class Key extends React.Component {
  constructor(props) {
    super(props);
    this.state = { class: "" };
  }

  handleClick() {
    const { game_id, value } = this.props;
    const guess = JSON.stringify({ "guess": value });

    $.post(guess_url(game_id), guess, (data) => {
      const game = JSON.parse(data);
      if (game.guesses.indexOf(value) === -1) {
        this.setState({ class: "bad" });
      } else {
        this.setState({ class: "good" });
      }

      $("#hangperson-container").trigger("game_updated");
    });
  }

  render() {
    const classString = `key c${this.props.keycode} ${this.state.class}`;
    return (
      <li onClick={this.handleClick.bind(this)}>
        <a href="#" className={classString}><span>{this.props.value}</span></a>
      </li>
    )
  }
}
