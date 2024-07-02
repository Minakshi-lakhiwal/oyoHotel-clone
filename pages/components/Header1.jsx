import React from 'react'
import Image from 'next/image'
import Block from './Block'
function Header1() {
    const items = [
        {id:1,title:"Item1",description:"item1 description",img:"/Images/demo2.png"},
        {id:2,title:"Item2",description:"item2 description",img:"/Images/demo2.png"},
        {id:3,title:"Item3",description:"item3 description",img:"/Images/demo2.png"},
        {id:4,title:"Item4",description:"item4 description",img:"/Images/demo2.png"},
    ];
  return (
    <div className='flex h-24 px-10  items-center justify-between border-b-2 border-gray-300'>
        <Image src={'/Images/logo.png'} alt='logo' width={200} height={200} className='w-28 h-28'/>
        <div className='h-full flex'>
            {
              items.map((item) => <Block key={item.id} title={item.title} description={item.description} img = {item.img}/>
            )
            }
        </div>
        <div className='flex items-center px-3'>
            <Image src={"/Images/demo2.png"} alt='loginlogo' className='h-10 w-10 rounded-full mr-5' width={200} height={200}/>
            <h3 className='font-bold'>Login/SignUp</h3>
        </div>
    </div>
  )
}

export default Header1