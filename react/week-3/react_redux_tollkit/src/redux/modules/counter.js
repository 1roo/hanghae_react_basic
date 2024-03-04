import { createSlice } from "@reduxjs/toolkit";

//action value
// export const PLUS_ONE = 'counter/PLUS_ONE';
// export const MINUS_ONE = 'counter/MINUS_ONE';
// const PLUS_N = 'counter/PLUS_N'

//action creator: action value를 return하는 함수
// export const plusOne = () => {
//     return {
//         type: PLUS_ONE,
//     }
// };

// export const plusN = (payload) => {
//     return {
//         type: PLUS_N,
//         payload,
//     }
// }

//초기 상태값(state)
const initialState = {
    number: 0
}
//const [number, setNumber] = useState(0)



//리듀서: 'state에 변화를 일으키는' 함수
//(1) state를 action의 type에 따라 변경하는 함수

//input: state와 action을 받는다
//action객체라는 것은 action type을 payload만큼 처리하는 것이다.
// const counter = (state = initialState, action) => {
//     switch (action.type) {
//         case PLUS_ONE:
//             return {
//                 number: state.number + 1,
//             }
//         case MINUS_ONE:
//             return {
//                 number: state.number - 1,
//             }
//         case PLUS_N:
//             return {
//                 number: state.number + action.payload,
//             }
//         default:
//             return state;
//     }
// }


const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        addNumber: (state, action) => {
            state.number = state.number + action.payload;
        },
        minusNumber: (state, action) => {
            state.number = state.number - action.payload;
        },
    },
});

export default counterSlice.reducer;
export const {addNumber, minusNumber} = counterSlice.actions;