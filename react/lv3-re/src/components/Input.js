import React, { useState } from 'react'
import { Common, H1, MiniSection } from '../styled/Common';
import { PrimaryButton } from '../styled/Button';
import { NameInput, PriceInput } from '../styled/Input';



const Input = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('0');
    const handleNameChange = (newName) => {
        setName(newName);
    };
    const handlePriceChange = (newPrice) => {
        setPrice(newPrice);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if(!name.trim() || !price.trim()) {
            window.alert('이름과 가격을 모두 입력하세요!');
        } else {
            window.alert(`{ 이름: ${name}, 가격: ${Number(price).toLocaleString()} }`);
        }
    }


    return (
        <>
            <H1>Input</H1>
            <Common>
                <MiniSection>
                    <label>이름</label>
                    <NameInput getName={handleNameChange} />
                </MiniSection>
                <MiniSection>
                    <label>가격</label>
                    <PriceInput getPrice={handlePriceChange} />
                </MiniSection>
                <PrimaryButton
                    size='small'
                    onClick={submitHandler}>
                    저장
                </PrimaryButton>
            </Common >

        </>
    )
}

export default Input