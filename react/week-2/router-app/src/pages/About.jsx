import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../shared/data'



function About() {
    return (
        <div>
            <h3>할 일 목록</h3>
            About
            {data.map(item => {
                return (
                    <div key={item.id}>
                        {item.id}&nbsp;
                        <Link to={`/about/${item.id}`}>{item.todo}</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default About