import { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    border: 1px solid black;
    height: 40px;
    width: 200px;
    border-radius: 10px;
    padding: 0 10px;

    &:focus-within {
    box-shadow: 0 0 0 1px #000;
    }
    `;

const BasicInput = ({value, ...props}) => {
    return (
        <StyledInput {...props} value={value} type="text" />
    )
}

export const NameInput = ({getName}) => {
    const [name, setName] = useState('');

    const nameChangeHandler = (event) => {
        const newName = event.target.value;
        setName(newName);
        getName(newName);
    }

    return <BasicInput onChange = {nameChangeHandler} value={name} />;
}

export const PriceInput = ({getPrice}) => {
    const [price, setPrice] = useState('0');

    const priceChangeHandler = (event) => {
        const inputPrice = event.target.value;
        const parsedPrice = parseFloat(inputPrice.replace(/[^0-9.-]/g, ''));

        if(!isNaN(parsedPrice)) {
            const formattedPrice = new Intl.NumberFormat().format(parsedPrice);

            setPrice(formattedPrice);

            if(getPrice) {
                getPrice({original: inputPrice, modified: formattedPrice})
            }
        }

    }
    return <BasicInput onChange={priceChangeHandler} value={price} />
}

