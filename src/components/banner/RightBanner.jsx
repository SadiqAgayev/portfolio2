import React from 'react'
import { bannerImg } from '../../assets'

const RightBanner = () => {
  return (
    <div className='w-1/2 flex justify-center items-center relative'>
        <img src={bannerImg} alt="bannerImg" className='w-[500px] z-10' />
        <div className='bg-white opacity-30 absolute bottom-0 w-[500px] h-[500px] flex justify-center items-center'></div>
    </div>
  )
}

export default RightBanner