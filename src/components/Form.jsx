import React from 'react'

export default function Form() {
    return (
        <div className='h-[170px] px-6 border flex flex-col justify-center gap-[15px]'>

            <div className='flex justify-center gap-3'>
                <div className='flex flex-col flex-grow'>
                    <label htmlFor="top-text">Top Text</label>
                    <input className='border border-[#D1D5DB] rounded-[5px] h-[34.74px] pl-[10px]' type="text" name="top-text" placeholder='Enter Top Text' id="" />
                </div>


                <div className='flex flex-col flex-grow'>
                    <label htmlFor="top-text">Top Text</label>
                    <input className='border border-[#D1D5DB] rounded-[5px] h-[34.74px] pl-[10px]' type="text" name="top-text" placeholder='Enter Buttom Text' id="" />
                </div>


            </div>

            <div className='flex '>

                <button className='bg-gradient-to-r from-[#672280] to-[#A626D3] flex-grow py-[10px] font-bold text-base text-white rounded-[5px]'>Generate</button>
            </div>

        </div>
    )
}
