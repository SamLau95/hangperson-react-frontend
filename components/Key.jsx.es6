class Key extends React.Component {
  render() {
    const classString = `key c${this.props.keycode}`;
    return (
      <li><a href="#" className={classString}><span>{this.props.value}</span></a></li>
    )
  }
}
