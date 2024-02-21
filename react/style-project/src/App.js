import React from "react";
import './App.css';

function App() {
  // const style = {
  //   padding: "100px",
  //   display: "flex",
  //   gap: "12px",
  // }

  // const squareStyle = {
  //   width: "100px",
  //   height: "100px",
  //   border: "1px solid green",
  //   borderRadius: "10px",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  // }


  return (
    <div className = "app-style">
      <div className = "component-style">감자</div>
      <div className = "component-style">고구마</div>
      <div className = "component-style">오이</div>
      <div className = "component-style">가지</div>
      <div className = "component-style">옥수수</div>
    </div>
  );
}

export default App;
