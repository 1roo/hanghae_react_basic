import React from 'react'

function Child({age, name, children}) {
    console.log(age); //App컴포넌트에서 넘겨주는 age가 없으므로 원래는 undefined가 나와야 함.
    console.log(name);
    console.log(children);

    return (
        <div>Child</div>
    )
}

//props에 값이 안넘어 올 때를 대비해 default를 설정해놓을 수 있다.
Child.defaultProps={
    age: '기본 나이',
};


export default Child;