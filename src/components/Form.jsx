import React from 'react'

export default function Form({ generateImage, memes, setMemes, handleChange }) {




    return (
        <div className='h-[auto] px-6 border flex flex-col justify-center gap-[15px]'>

            <div className='flex justify-center gap-3 mt-[10px]'>
                <div className='flex flex-col flex-grow'>
                    <label htmlFor="top-text">Top Text</label>
                    <input className='border border-[#D1D5DB] rounded-[5px] h-[34.74px] pl-[10px]' type="text" name="topText" value={memes.topText} onChange={handleChange} placeholder='Enter Top Text' id="" />
                </div>

                <div className='flex flex-col flex-grow'>
                    <label htmlFor="top-text">Top Text</label>
                    <input className='border border-[#D1D5DB] rounded-[5px] h-[34.74px] pl-[10px]' type="text" name="bottomText" value={memes.bottomText} onChange={handleChange} placeholder='Enter Buttom Text' id="" />
                </div>

            </div>

            <div className='flex '>
                <button onClick={generateImage} className='bg-gradient-to-r from-[#672280] to-[#A626D3] flex-grow py-[10px] font-bold text-base text-white rounded-[5px]'>Generate</button>
            </div>

            <div className='px-6 relative'>
                <img src={memes.randomImage} alt="" />
                <h1 className='absolute top-1 right-[40%] font-extrabold text-2xl text-white stroke-black'>{memes.topText}</h1>
                <h1 className='absolute bottom-1 right-[35%] font-extrabold text-2xl text-white stroke-black'>{memes.bottomText}</h1>
            </div>


        </div>
    )
}
