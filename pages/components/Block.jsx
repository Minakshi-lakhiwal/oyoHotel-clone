import React from 'react'
import Image from 'next/image'
function Block({title,description,img}) {
  return (
    <div className='flex w-60 h-full px-3 border-r-2 border-gray-300 items-center'>
        <Image src={img} width={200} height={200} className='h-10 w-10 rounded-full mr-5'/>
        <div className=''>
            <h3 className='font-bold'>{title}</h3>
            <p className='text-gray-400  text-sm line-clamp-1'>{description}</p>
        </div>
    </div>
  )
}

export default Block