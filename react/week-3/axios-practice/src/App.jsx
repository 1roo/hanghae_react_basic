import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTotos] = useState(null);

  const fetchTodos = async () => {
    const { data } = await axios.get('http://localhose:4000/todos')
    // console.log('data: ', data);
    setTotos(data);
  }

  useEffect(() => {
    //마운트될 때 db로부터 값을 가져올 것이다.
    fetchTodos();
  }, [])


  return (
    <div>
      {todos?.map(item => {
        return (
          <div key={item.id}>
            {item.id} : {item.title}
          </div>
        )
      })}
    </div>
  );
}

export default App;
