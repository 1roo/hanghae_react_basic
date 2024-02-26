import React from 'react'
import Father from './Father';
import { FamilyContext } from '../context/FamilyContext';

//grandfather가 child한테 어떤 정보를 알려줘서 child가 그 내용을 출력하도록
function GrandFather() {

    const houseName = '스파르타';
    const pocketMoney = 10000;

    return (
        <FamilyContext.Provider value={{
            houseName,
            pocketMoney
        }}>
            {/* <Father houseName={houseName} pocketMoney={pocketMoney}/> */}
            <Father />
        </FamilyContext.Provider>
        
    )
}

export default GrandFather