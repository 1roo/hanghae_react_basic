import { useState } from 'react';
import './App.css';

function App() {

  const [number, setNumber] = useState(0);

  return (
    <>
      <div>Number State : {number}</div>
      <button onClick={() => {
        //기존 업데이트
        //배치성으로 처리됨. (배치 업데이트) => 1만 오름
        // setNumber(number+1)
        // setNumber(number+1)
        // setNumber(number+1)

        //함수형 업데이트
        //순차적으로 하나씩 실행됨 => 3 오름
        setNumber((currentNumber) => currentNumber + 1);
        setNumber((currentNumber) => currentNumber + 1);
        setNumber((currentNumber) => currentNumber + 1);
      }}>누르면 UP</button>
    </>
  );
}

export default App;
