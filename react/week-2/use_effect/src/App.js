import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [value, setValue] = useState('');

  useEffect(()=>{
    console.log(`hello ${value}`);

    return () => {
      // clean up 부분, 컴포넌트 죽을 때 실행.
      console.log('나 사라짐');
    };

  }, [value]); //value(배열)의 값이 바뀔때마다 useEffect실행

  return (
    <div>
      <input
        type = 'text'
        value = {value}
        onChange={(event) => {
          setValue(event.target.value);
        }} />

    </div>
  );
}

export default App;
