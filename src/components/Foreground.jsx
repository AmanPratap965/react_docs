import React, { useRef } from 'react'
import Card from './Card'
import { motion } from "framer-motion"
const Foreground = () => {
    const data=[
        {
        desc:"Lorem ipsum dolor amet consectetur adipisicing.",
        fileSize:"0.9mb",
        close:false,
        tag:{
            isOpen:true,
            tagTitle:"Download Now",
            tagColor:"green"
        },
    },
    {
        desc:"Lorem ipsum dolor amet consectetur adipisicing.",
        fileSize:"0.9mb",
        close:false,
        tag:{
            isOpen:true,
            tagTitle:"Upload",
            tagColor:"blue"
        },
    },
    {
        desc:"Lorem ipsum dolor amet consectetur adipisicing.",
        fileSize:"0.9mb",
        close:false,
        tag:{
            isOpen:true,
            tagTitle:"Download Now",
            tagColor:"green"
        },
    },
];
    const ref=useRef(null);
  return (
    <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full bg-sky-800/50 flex gap-5 flex-wrap p-5'>
        {data.map((item,index)=>(
                <Card data={item} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground
