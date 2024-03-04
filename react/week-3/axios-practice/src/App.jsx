import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState(null);
  const [inputValue, setInputValue] = useState({
    title: '',
  })
  const [targetId, setTargetId] = useState('');
  const [contents, setContents] = useState('');

  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:4000/todos")
    // console.log('data: ', data);
    setTodos(data);
  }


  const onSubmitHandler = async () => {
    await axios.post("http://localhost:4000/todos", inputValue)
    // setTodos([...todos, inputValue])
    fetchTodos();
  }

  const onDeleteButtonHandler = async (id) => {
    axios.delete(`http://localhost:4000/todos/${id}`)
    setTodos(todos.filter((item) => {
      return item.id !== id
    })
    )
  }

  const onUpdateButtonClickHandler = async () => {
    axios.patch(`http://localhost:4000/todos/${targetId}`, {
      title: contents,
    })

    setTodos(todos.map(item => {
      if (item.id == targetId) {
        return {...item, title: contents}
      } else {
        return item;
      }
    }))
  }

  useEffect(() => {
    //마운트될 때 db로부터 값을 가져올 것이다.
    fetchTodos();
  }, [])




  return (
    <>
    <div>
      {/* 수정 영역 */}
      <input type="text" placeholder="수정할 아이디" 
      value={targetId}
      onChange={(e) => {
        setTargetId(e.target.value)
      }}/>
      <input type="text" placeholder="수정할 내용" 
      value={contents}
      onChange={(e) => {
        setContents(e.target.value)
      }}/>
      <button onClick={onUpdateButtonClickHandler}>수정</button>
      <br />
      <br />
    </div>
      <div>
        {/* input 영역 */}
        <form onSubmit={(e) => {
          e.preventDefault();

          //버튼 클릭시 input에 들어있는 값(state)을 이용해 DB에 저장(post)
          onSubmitHandler();
        }}>
          <input type="text"
            value={inputValue.title}
            onChange={(e) => {
              setInputValue({
                title: e.target.value
              })
            }} />
          <button>추가</button>
        </form>
      </div>

      <div>
        {/* 데이터 영역 */}
        {todos?.map(item => {
          return (
            <div key={item.id}>
              {item.id} : {item.title}
              <button onClick={() => onDeleteButtonHandler(item.id)}>삭제</button>
            </div>
          )
        })}
      </div>
    </>
  );
}

export default App;
