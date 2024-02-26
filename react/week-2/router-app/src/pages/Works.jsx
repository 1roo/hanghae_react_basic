import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Works() {

    const location = useLocation();


    console.log('location: ', location);

    return (
        <div>
            Works
            <br />
            <Link to='/contact'>contact로 이동하기</Link>
        </div>
        
    )
}

export default Works