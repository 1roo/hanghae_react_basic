//초기 상태값(state)
const initialState = {
    number: 0
}
//const [number, setNumber] = useState(0)



//리듀서: 'state에 변화를 일으키는' 함수
//(1) state를 action의 type에 따라 변경하는 함수

//input: state와 action을 받는다
const counter = (state = initialState, action) => {
    switch (action.type) {
        case "PLUS_ONE":
            return {
                number: state.number + 1,
            }
        case "MINUS_ONE":
            return {
                number: state.number - 1,
            }
        default:
            return state;
    }
}


export default counter;