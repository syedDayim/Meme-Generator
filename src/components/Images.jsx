import React from 'react'

export default function Images() {

  const url = 'https://i.imgflip.com/3si4.jpg';
  return (
    <div className='w-[auto] flex justify-center items-center px-6'>
        <img src={url} alt="" />
    </div>
  )
}
