import './App.css';
import styled from 'styled-components';
import TestPage from './components/TestPage';
import GlobalStyle from './GlobalStyle';

const StContainer = styled.div`
  display: flex;
`

const StBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid ${(props) => props.borderColor};
  margin: 20px;
`

//박스의 색
const boxList = ['red', 'blue', 'green', 'yellow'];

//색을 넣으면 이름을 반환
const getBoxName = (color) => {
  switch (color) {
    case 'red':
      return '빨간박스';
    case 'blue':
      return '파란박스';
    case 'green':
      return '초록박스';
    case 'yellow':
      return '노란박스';
    default:
      return '검정박스';
  }
}


function App() {
  return (
    // <StContainer>
    //   {
    //     boxList.map((box)=> {
    //       return <StBox borderColor={box}>{getBoxName(box)}</StBox>
    //     })
    //   }

    //   {/* <StBox borderColor='red'>박스</StBox>
    //   <StBox borderColor='blue'>박스</StBox>
    //   <StBox borderColor='green'>박스</StBox>
    //   <StBox borderColor='yellow'>박스</StBox> */}
    // </StContainer>
    <>
      <GlobalStyle />
      <TestPage
        title='제목입니다'
        contents='내용입니다' />
    </>
  );

}

export default App;
