import React, { useEffect, useRef, useState } from "react";
import './App.css';

function App() {
  //ref: reference
  const ref = useRef('초기값');
  console.log("ref: ", ref);

  ref.current = '변경값';
  console.log("ref2: ", ref);

  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const plusStateCountButtonHandler = () => {
    setCount(count + 1);
  }

  const plusRefCountButtonHandler = () => {
    countRef.current++;
  }


  const idRef = useRef('');
  const pwRef = useRef('');

  useEffect(() => {
    idRef.current.focus();
  }, []);

  const [id, setId] = useState('');

  useEffect(() => {
    if(id.length >= 10) {
      pwRef.current.focus();
    }
  }, [id])

  return (
    <>
      <div style = {{
        border: '1px solid black',
        margin: '10px',
        padding: '10px',
      }}>
        state 영역입니다. {count} <br />
        <button onClick={plusStateCountButtonHandler}>state 증가</button>
      </div>
      <div style = {{
        border: '1px solid black',
        margin: '10px',
        padding: '10px',
      }}>
        ref 영역입니다. {countRef.current} <br />
        <button onClick={plusRefCountButtonHandler}>ref 증가</button>
      </div>


      <div>
        아이디: <input 
        value={id}
        onChange={(event)=> {
          setId(event.target.value)

          //리액트에서 state는 배치 업데이트. 11번 클릭해야 10이 됨
          // if(id.length >= 10) {
          //   pwRef.current.focus();
          // }
        }}
        type='text' ref={idRef} />
      </div>

      <div>
        비밀번호: <input type='password' ref={pwRef} />
      </div>
    </>
  );
}

export default App;
