import React from 'react'

function Header2() {
    const items = [
        {name:'Hyderabad'},
        {name:'Banglore'},
        {name:'Culcutta'},
        {name:'Mumbai'},
        {name:'Delhi'},
    ];
  return (
    <div>
        <div className='flex justify-between items-center  bg-gray-100 px-10'>
            {
                items.map((item)=>{
                 return(
                 <span key={item.span}>{item.name}</span>)})
            }
        </div>
    </div>
  )
}

export default Header2