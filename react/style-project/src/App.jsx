import React, { Children, useState } from "react";
import './App.css';
import Button from "./components/Button";
import User from "./components/User";

const App = () => {
  // const users = [
  //   { id: 1, age: 30, name: "송중기" },
  //   { id: 2, age: 24, name: "송강" },
  //   { id: 3, age: 21, name: "김유정" },
  //   { id: 4, age: 29, name: "구교환" },
  // ];

  const [users, setUsers] = useState([
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 29, name: "구교환" },
  ]);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  //적용할 때 인자(event, 변수 등)를 넘기는 경우 꼭 (event)로 앞에 묶어줘야 바로 실행 안 된다.
  //넘기는게 event 하나일 경우는 onChange={함수명}만 적어도 자동으로 넘어간다.
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  }


  const clickAddButtonHandler = () => {
    //1. 새로운 형태의 newUser을 만든다. newUser: { id: 1, age: 30, name: "송중기" },
    //2. newUser를 배열에 더한다.
    const newUser = {
      id: users.length + 1,
      age,
      name,
    }
    setUsers([...users, newUser])
  }

  const clickDeleteButtonHandler = (id) => {
    // const newUsers = users.filter(user => user.id !== id);
    const newUsers = users.filter(function (user) {
      return user.id !== id;
    });
    setUsers(newUsers);
  }


  return (
    <div>
      <div>
        이름: <input
          value={name}
          onChange={(event) => nameChangeHandler(event)} /> <br />
        나이: <input
          value={age}
          onChange={(event) => {
            setAge(event.target.value)
          }} />
        <br />
        <Button clickAddButtonHandler={clickAddButtonHandler}>추가</Button>
      </div>
      <div className="app-style">
        {users.map(function (item) {
          return <User key={item.id} item={item} clickDeleteButtonHandler={clickDeleteButtonHandler}/>
        })}
      </div>
    </div>
  )


  {/* <div className="component-style">{users[0].age} - {users[0].name}</div>
    <div className="component-style">{users[1].age} - {users[1].name}</div>
    <div className="component-style">{users[2].age} - {users[2].name}</div>
    <div className="component-style">{users[3].age} - {users[3].name}</div> */}
};

// const Button = ({clickAddButtonHandler, children}) => {
//   return <button onClick={clickAddButtonHandler}>{children}</button>
// };

// const User = ({item, clickDeleteButtonHandler}) => {
//   return (
//     <div key={item.id} className="component-style">
//       {item.age} - {item.name}
//       <button onClick={() => clickDeleteButtonHandler(item.id)}>X</button>
//     </div>
//   )
// };

export default App;
