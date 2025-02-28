import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (<div>
    <h1>Urasimaのページ</h1>
    <p>ここはUrasimaPeachのためのGithubPagesです。</p>
    <p><Link to="https://x.com/UrasimaPeach">UrasimaPeachのTwitter</Link></p>
    <p><Link to="https://github.com/UrasimaPeach">UrasimaPeachのGithub</Link></p>
    <p><Link to="/ygo/changeling-shield">遊戯王多相シールドのルール</Link></p>
    <p><Link to="https://github.com/UrasimaPeach/UrasimaPeach.github.io/tree/main/static/js">使用ライブラリのライセンスは、こちらのmain.js.*.LICENSE.txtを参照してください。</Link></p>
    </div>
  );
}

export default App;
