class Keyboard extends React.Component {
  render() {
    return (
      <div id="keyboard">
        <ul className="cf" id="qwerty">
          <li><a href="#" className="key c9" id="tab"><span></span></a></li>
          <li><a href="#" className="key c81"><span>q</span></a></li>
          <li><a href="#" className="key c87"><span>w</span></a></li>
          <li><a href="#" className="key c69"><span>e</span></a></li>
          <li><a href="#" className="key c82"><span>r</span></a></li>
          <li><a href="#" className="key c84"><span>t</span></a></li>
          <li><a href="#" className="key c89"><span>y</span></a></li>
          <li><a href="#" className="key c85"><span>u</span></a></li>
          <li><a href="#" className="key c73"><span>i</span></a></li>
          <li><a href="#" className="key c79"><span>o</span></a></li>
          <li><a href="#" className="key c80"><span>p</span></a></li>
          <li><a href="#" className="key c219 alt"><b></b><span></span></a></li>
          <li><a href="#" className="key c221 alt"><b></b><span></span></a></li>
          <li><a href="#" className="key c220 alt"><b></b><span></span></a></li>
        </ul>
        <ul className="cf" id="asdfg">
          <li><a href="#" className="key c20 alt" id="caps"><b></b><span></span></a></li>
          <li><a href="#" className="key c65"><span>a</span></a></li>
          <li><a href="#" className="key c83"><span>s</span></a></li>
          <li><a href="#" className="key c68"><span>d</span></a></li>
          <li><a href="#" className="key c70"><span>f</span></a></li>
          <li><a href="#" className="key c71"><span>g</span></a></li>
          <li><a href="#" className="key c72"><span>h</span></a></li>
          <li><a href="#" className="key c74"><span>j</span></a></li>
          <li><a href="#" className="key c75"><span>k</span></a></li>
          <li><a href="#" className="key c76"><span>l</span></a></li>
          <li><a href="#" className="key c186 alt"><b></b><span></span></a></li>
          <li><a href="#" className="key c222 alt"><b></b><span></span></a></li>
          <li><a href="#" className="key c13 alt" id="enter"><span></span></a></li>
        </ul>
        <ul className="cf" id="zxcvb">
          <li><a href="#" className="key c16 shiftleft"><span></span></a></li>
          <li><a href="#" className="key c90"><span>z</span></a></li>
          <li><a href="#" className="key c88"><span>x</span></a></li>
          <li><a href="#" className="key c67"><span>c</span></a></li>
          <li><a href="#" className="key c86"><span>v</span></a></li>
          <li><a href="#" className="key c66"><span>b</span></a></li>
          <li><a href="#" className="key c78"><span>n</span></a></li>
          <li><a href="#" className="key c77"><span>m</span></a></li>
          <li><a href="#" className="key c188 alt"><b></b><span></span></a></li>
          <li><a href="#" className="key c190 alt"><b></b><span></span></a></li>
          <li><a href="#" className="key c191 alt"><b></b><span></span></a></li>
          <li><a href="#" className="key c16 shiftright"><span></span></a></li>
        </ul>
      </div>
    )
  }
}

React.render(<Keyboard/>, document.getElementById("keyboard-container"));
