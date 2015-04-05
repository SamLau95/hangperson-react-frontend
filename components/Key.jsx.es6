class Key extends React.Component {
  constructor(props) {
    super(props);
    this.state = { class: "" };
  }

  handleClick() {
    // Hardcoded for now.
    this.setState({ class: "good" });
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
