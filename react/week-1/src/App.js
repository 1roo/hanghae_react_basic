import { useState } from 'react';
import "./App.css";

function App() {
  /*
    //hook
    // const [state, setState] = useState('initial Value');
    const [count, setCount] = useState(0);
    const [todoList, setTodoList] = useState([]);
  
    //useState, useEffect, useContext, useMemo
    //useDispatch, useSelect...
  
    return (
      <div>STATE에 대한 이야기입니다.</div>
    )
  }
  */

  /*
  const [name, setName] = useState('김할아버지');

  return (
    <div>
      {name}
      <br />
      <button onClick={function() {
        setName('박할머니');
      }}>클릭</button>
    </div>
  );
}
*/

  const [fruit, setFruit] = useState("");

  return (
    <div>
      과일: <input
        value={fruit}
        onChange={function (event) {
          console.log('event: ', event.target.value);
          setFruit(event.target.value);
        }}
      />
      <br /><br />
      {fruit}
    </div>
  )

}
export default App;