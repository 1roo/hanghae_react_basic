import React, {useState, useMemo} from 'react'

function HeavyComponent() {

    const [count, setCount] = useState(0);

    const heavyWork = () => {
        for(let i = 0; i < 2000000000; i++) {}
        return 100;
    }

    const value = useMemo(() => heavyWork(), []);
    console.log(`value는 ${value}입니다.`);

    return (
        <>
            <p>엄청 무거운 컴포넌트</p>
            <button onClick={() => {
                setCount(count+1)
            }}>누르면 아래 count가 올라감</button><br />
            {count}
        </>
    )
}

export default HeavyComponent