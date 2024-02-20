import { useState } from 'react';
import "./App.css";

function App() {
  
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  function clickHandler() {
    alert(`고객님이 입력하신 아이디는 ${id}이며, 비밀번호는 ${pw}입니다.`);
    setId("");
    setPw("");
  }

  return (
    <div>
      아이디: <input
        value={id}
        onChange={function (event) {
          setId(event.target.value);
        }}
      />
      <br />
      비밀번호: <input type='password'
        value={pw}
        onChange={function (event) {
          setPw(event.target.value);
        }}
      />
      <br />
      <button onClick={clickHandler}>로그인</button>
    </div>
  )

}
export default App;