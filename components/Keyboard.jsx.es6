class Keyboard extends React.Component {
  render() {
    return (
      <div id="keyboard">
        <ul className="cf" id="qwerty">
          <li><a href="#" className="key c9" id="tab"><span></span></a></li>
          <Key value="q" keycode="81"/>
          <Key value="w" keycode="87"/>
          <Key value="e" keycode="69"/>
          <Key value="r" keycode="82"/>
          <Key value="t" keycode="84"/>
          <Key value="y" keycode="89"/>
          <Key value="u" keycode="85"/>
          <Key value="i" keycode="73"/>
          <Key value="o" keycode="79"/>
          <Key value="p" keycode="80"/>
          <li><a href="#" className="key c219 alt"><b></b><span></span></a></li>
          <li><a href="#" className="key c221 alt"><b></b><span></span></a></li>
          <li><a href="#" className="key c220 alt"><b></b><span></span></a></li>
        </ul>
        <ul className="cf" id="asdfg">
          <li><a href="#" className="key c20 alt" id="caps"><b></b><span></span></a></li>
          <Key value="a" keycode="65"/>
          <Key value="s" keycode="83"/>
          <Key value="d" keycode="68"/>
          <Key value="f" keycode="70"/>
          <Key value="g" keycode="71"/>
          <Key value="h" keycode="72"/>
          <Key value="j" keycode="74"/>
          <Key value="k" keycode="75"/>
          <Key value="l" keycode="76"/>
          <li><a href="#" className="key c186 alt"><b></b><span></span></a></li>
          <li><a href="#" className="key c222 alt"><b></b><span></span></a></li>
          <li><a href="#" className="key c13 alt" id="enter"><span></span></a></li>
        </ul>
        <ul className="cf" id="zxcvb">
          <li><a href="#" className="key c16 shiftleft"><span></span></a></li>
          <Key value="z" keycode="90"/>
          <Key value="x" keycode="88"/>
          <Key value="c" keycode="67"/>
          <Key value="v" keycode="86"/>
          <Key value="b" keycode="66"/>
          <Key value="n" keycode="78"/>
          <Key value="m" keycode="77"/>
          <li><a href="#" className="key c188 alt"><b></b><span></span></a></li>
          <li><a href="#" className="key c190 alt"><b></b><span></span></a></li>
          <li><a href="#" className="key c191 alt"><b></b><span></span></a></li>
          <li><a href="#" className="key c16 shiftright"><span></span></a></li>
        </ul>
      </div>
    )
  }
}
