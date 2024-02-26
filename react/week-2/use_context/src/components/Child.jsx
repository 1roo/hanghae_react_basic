import React, { useContext } from 'react'
import { FamilyContext } from '../context/FamilyContext'

const style = {
    color: 'red',
    fontWeight: '900',
}

// function Child({ housename, pocketMoney }) {
function Child() {

    const data = useContext(FamilyContext);

    return (
        // <div>
        //     나는 이 집안의 막내<br />
        //     우리집 이름은 <span style={style}>{housename}</span><br />
        //     내 용돈은 <span style={style}>{pocketMoney}</span>
        // </div>
        <div>
        나는 이 집안의 막내<br />
        우리집 이름은 <span style={style}>{data.housename}</span><br />
        내 용돈은 <span style={style}>{data.pocketMoney}</span>
    </div>
    )
}

export default Child