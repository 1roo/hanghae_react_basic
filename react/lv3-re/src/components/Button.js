import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineBell } from "react-icons/hi2";
import { Common, H1 } from '../styled/Common';
import { PrimaryButton, NegativeButton } from '../styled/Button';


const Button = () => {
    return (
        <>
            <H1>Button</H1>
            <Common>
                <PrimaryButton
                    size="large"
                    bordered
                    icon={<IoIosArrowForward />}
                    onClick={() => window.alert("버튼을 만들어보세요")}>
                    Large Primary Button
                </PrimaryButton>
                <PrimaryButton
                    size='medium'>
                    Medium
                </PrimaryButton>
                <PrimaryButton
                    size='small'>
                    Small
                </PrimaryButton>
            </Common>

            <Common>
                <NegativeButton
                    size="large"
                    bordered
                    icon={<HiOutlineBell />}
                    onClick={() => console.log(window.prompt('어렵습니까?'))}>
                    Large Primary Button
                </NegativeButton>
                <NegativeButton
                    size='medium'>
                    Medium
                </NegativeButton>
                <NegativeButton
                    size='small'>
                    Small
                </NegativeButton>
            </Common >

        </>
    )
}

export default Button