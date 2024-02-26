import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { PLUS_ONE, MINUS_ONE } from './redux/modules/counter';
import { plusOne } from './redux/modules/counter';

function App() {

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
      <button onClick={()=>{
        //+1 해주는 로직 작성
        dispatch({
          type: PLUS_ONE,
        })
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
