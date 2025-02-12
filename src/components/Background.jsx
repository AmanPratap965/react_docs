import React from 'react'

const Background = () => {
  return (
    <>
    <div className='fixed z-[2] w-full h-screen' >
       <div className=' absolute w-full py-10 flex justify-center text-zinc-800 top-[5%]  font-semibold text-xl'>Documents.</div>
       <h1 className=' absolute top-1/2 left-1/2 text-[12vw]  leading-none tracking-tighter -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-800'>Docs.</h1>
    </div>
    </>
  )
}

export default Background
