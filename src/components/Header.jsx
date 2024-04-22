import React from 'react'

export default function Header() {
  return (
    <header className='flex justify-between items-center px-6 w-[auto] h-[65px] bg-gradient-to-r from-[#672280] to-[#A626D3]' >
      <div className='flex justify-center items-center gap-[7px]'>
        <img className='w-[36.31px] h-[26.22]' src="./firebaseLogo.png" alt="" />
        <h1 className='font-bold text-xl text-white'>Shuraa Digital</h1>
      </div>
      <p className='font-medium text-xs text-white'>React Project - 3</p>
    </header>
  )
}
