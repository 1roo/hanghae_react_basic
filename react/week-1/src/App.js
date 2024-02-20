import React from 'react'

export default function App() {
  const number = 1;

  const pTagStyle = {
    color: "blue",
  }

  return (
    <div className='test-class'>
      <p style={pTagStyle}>안녕하세요 리액트입니다.</p>
      {/* 삼항연산자 */}
      <p
        style={{
          color: "red",
        }}
      >
        {number > 10 ? number + '은 10보다 크다' : number + '은 10보다 작다.'}</p>
    </div>
  )
}