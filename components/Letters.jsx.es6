class Letters extends React.Component {
  constructor(props) {
    super(props);
    this.state = { "word": props.word }
  }

  splitAndReplace(word) {
    return word.split(" ")
               .map((letter) => letter == "-" ? "" : letter);
  }

  render() {
    const letters = this.splitAndReplace(this.state.word)
    const letterItems = letters.map((letter) => <div>{letter}</div>)
    return (
      <div id="letters">
        {letterItems}
      </div>
    )
  }
}
