import React from 'react';

// props를 통해 부모 -> 자식 데이터가 전달됐다.
function Son(props) {
  return <div>나는 {props.grandFather}의 손자입니다</div>
}

// 부모 -> 자식  정보를 전달했다.
function Mother(props) {
  const grandFather = props.grandFather;
  return <Son grandFather={grandFather} />
}

function GrandFather() {
  const name = '할부지';
  return <Mother grandFather={name} />
}

function App() {
  return <GrandFather />
}

export default App;