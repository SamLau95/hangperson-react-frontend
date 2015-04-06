class Hangperson extends React.Component {
  render() {
    return (
      <div id="hangperson">
        <Letters word="h e - - o" />
        <div className="spacer"></div>
        <Keyboard />
      </div>
    )
  }
}

React.render(<Hangperson />, document.getElementById("hangperson-container"));
