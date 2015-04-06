class Keyboard extends React.Component {
  render() {
    const id = this.props.id;
    return (
      <div id="keyboard">
        <ul className="cf" id="qwerty">
          <li><a href="#" className="key c9" id="tab"><span></span></a></li>
          <Key id={id} value="q" keycode="81"/>
          <Key id={id} value="w" keycode="87"/>
          <Key id={id} value="e" keycode="69"/>
          <Key id={id} value="r" keycode="82"/>
          <Key id={id} value="t" keycode="84"/>
          <Key id={id} value="y" keycode="89"/>
          <Key id={id} value="u" keycode="85"/>
          <Key id={id} value="i" keycode="73"/>
          <Key id={id} value="o" keycode="79"/>
          <Key id={id} value="p" keycode="80"/>
          <li><a href="#" className="key c219 alt"><b></b><span></span></a></li>
          <li><a href="#" className="key c221 alt"><b></b><span></span></a></li>
          <li><a href="#" className="key c220 alt"><b></b><span></span></a></li>
        </ul>
        <ul className="cf" id="asdfg">
          <li><a href="#" className="key c20 alt" id="caps"><b></b><span></span></a></li>
          <Key id={id} value="a" keycode="65"/>
          <Key id={id} value="s" keycode="83"/>
          <Key id={id} value="d" keycode="68"/>
          <Key id={id} value="f" keycode="70"/>
          <Key id={id} value="g" keycode="71"/>
          <Key id={id} value="h" keycode="72"/>
          <Key id={id} value="j" keycode="74"/>
          <Key id={id} value="k" keycode="75"/>
          <Key id={id} value="l" keycode="76"/>
          <li><a href="#" className="key c186 alt"><b></b><span></span></a></li>
          <li><a href="#" className="key c222 alt"><b></b><span></span></a></li>
          <li><a href="#" className="key c13 alt" id="enter"><span></span></a></li>
        </ul>
        <ul className="cf" id="zxcvb">
          <li><a href="#" className="key c16 shiftleft"><span></span></a></li>
          <Key id={id} value="z" keycode="90"/>
          <Key id={id} value="x" keycode="88"/>
          <Key id={id} value="c" keycode="67"/>
          <Key id={id} value="v" keycode="86"/>
          <Key id={id} value="b" keycode="66"/>
          <Key id={id} value="n" keycode="78"/>
          <Key id={id} value="m" keycode="77"/>
          <li><a href="#" className="key c188 alt"><b></b><span></span></a></li>
          <li><a href="#" className="key c190 alt"><b></b><span></span></a></li>
          <li><a href="#" className="key c191 alt"><b></b><span></span></a></li>
          <li><a href="#" className="key c16 shiftright"><span></span></a></li>
        </ul>
      </div>
    )
  }
}
