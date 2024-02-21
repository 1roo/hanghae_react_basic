import React, { useState } from 'react';

//원시데이터(number, string, boolean 등)는 불변성이 있다.
//참조타입(배열, 객체 등)은 불변성이 없다.

function App() {
  let count = 0;
  
  const [obj, setObj] = useState({
    name: 'hanal',
    age: 23,
  });
  return (
    <div>
        <div>{obj.name}</div>
        <button onClick={() => {
          obj.name = 'hanaru'
          const obj2 = {...obj} //새로운 주소값에다 obj복사
          setObj(obj2);
          // obj.name = 'hanaru';
          // console.log(obj);
          // setObj(obj);
        }}
        >
          변경!
        </button>
        <button
        onClick={() => {
          count++;
          console.log(`count는 ${count} 입니다.`);
        }}>
          증가
        </button>
        {/* 콘솔에서는 숫자 증가하지만 화면에서는 증가X count는 불변성 => 리렌더링 안됨. */}
        {count}
    </div>
  )
}

export default App