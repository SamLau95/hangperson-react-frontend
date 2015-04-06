class Keyboard extends React.Component {
  render() {
    const game_id = this.props.game_id;
    return (
      <div id="keyboard">
        <ul className="cf" id="qwerty">
          <li><a href="#" className="key c9" id="tab"><span></span></a></li>
          <Key game_id={game_id} value="q" keycode="81"/>
          <Key game_id={game_id} value="w" keycode="87"/>
          <Key game_id={game_id} value="e" keycode="69"/>
          <Key game_id={game_id} value="r" keycode="82"/>
          <Key game_id={game_id} value="t" keycode="84"/>
          <Key game_id={game_id} value="y" keycode="89"/>
          <Key game_id={game_id} value="u" keycode="85"/>
          <Key game_id={game_id} value="i" keycode="73"/>
          <Key game_id={game_id} value="o" keycode="79"/>
          <Key game_id={game_id} value="p" keycode="80"/>
          <li><a href="#" className="key c219 alt"><b></b><span></span></a></li>
          <li><a href="#" className="key c221 alt"><b></b><span></span></a></li>
          <li><a href="#" className="key c220 alt"><b></b><span></span></a></li>
        </ul>
        <ul className="cf" id="asdfg">
          <li><a href="#" className="key c20 alt" id="caps"><b></b><span></span></a></li>
          <Key game_id={game_id} value="a" keycode="65"/>
          <Key game_id={game_id} value="s" keycode="83"/>
          <Key game_id={game_id} value="d" keycode="68"/>
          <Key game_id={game_id} value="f" keycode="70"/>
          <Key game_id={game_id} value="g" keycode="71"/>
          <Key game_id={game_id} value="h" keycode="72"/>
          <Key game_id={game_id} value="j" keycode="74"/>
          <Key game_id={game_id} value="k" keycode="75"/>
          <Key game_id={game_id} value="l" keycode="76"/>
          <li><a href="#" className="key c186 alt"><b></b><span></span></a></li>
          <li><a href="#" className="key c222 alt"><b></b><span></span></a></li>
          <li><a href="#" className="key c13 alt" id="enter"><span></span></a></li>
        </ul>
        <ul className="cf" id="zxcvb">
          <li><a href="#" className="key c16 shiftleft"><span></span></a></li>
          <Key game_id={game_id} value="z" keycode="90"/>
          <Key game_id={game_id} value="x" keycode="88"/>
          <Key game_id={game_id} value="c" keycode="67"/>
          <Key game_id={game_id} value="v" keycode="86"/>
          <Key game_id={game_id} value="b" keycode="66"/>
          <Key game_id={game_id} value="n" keycode="78"/>
          <Key game_id={game_id} value="m" keycode="77"/>
          <li><a href="#" className="key c188 alt"><b></b><span></span></a></li>
          <li><a href="#" className="key c190 alt"><b></b><span></span></a></li>
          <li><a href="#" className="key c191 alt"><b></b><span></span></a></li>
          <li><a href="#" className="key c16 shiftright"><span></span></a></li>
        </ul>
      </div>
    )
  }
}
