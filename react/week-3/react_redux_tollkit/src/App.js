import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { PLUS_ONE, MINUS_ONE } from './redux/modules/counter';
import { plusOne } from './redux/modules/counter';
import { useState } from 'react';
import { plusN } from './redux/modules/counter';

function App() {

  const [number, setNumber] = useState(0);

  // 여기에서 store에 접근해서 counter의 값을 읽어오고 싶을 때
  // useSelector
  const counter = useSelector((state)=>{
    return state.counter;
  });

  //dispatch를 가져와보자
  const dispatch = useDispatch();

  console.log('counter: ', counter);

  return (
    <>
      <div>현재 카운트: {counter.number}</div>
      <div>
        <input type='number'
          value={number}
          onChange={(event) => {
            setNumber(+event.target.value)
          }} />
      </div>
      <button onClick={()=>{
        //+1 해주는 로직 작성
        // dispatch({
        //   type: PLUS_ONE,
        // })

        dispatch(plusN(number))

        // dispatch(
        //   {
        //     type: 'counter/PLUS_N',
        //     payload: payload,
        //   }
        // )
      }}>+</button>
      <button onClick={()=>{
        // dispatch({
        //   type: MINUS_ONE,
        // })
        dispatch(plusOne());
      }}>-</button>
    </>
  );
}

export default App;
