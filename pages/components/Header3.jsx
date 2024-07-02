const Header3 = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-400 h-60">
       <div className="p-5">
           <h2 className="text-4xl font-bold text-white text-center"> Over 157,000 hotels and homes across 35 countries</h2>
           <div className="grid grid-cols-5 my-5 mx-20">
             <input placeholder="Search..." type="text" className="text-lg h-16 outline-none px-3 border-r-2 border-gray-400 col-span-2"/>
             <input placeholder="Search..." type="text" className="text-lg h-16 outline-none px-3 border-r-2 border-gray-400 col-span-1"/>
             <input placeholder="Search..." type="text" className="text-lg h-16  outline-none px-3 border-r-2 border-gray-400 col-span-1"/>
             <button type="submit" className="h-16 px-3 py-2 col-span-1 bg-green-400 hover:bg-green-600 hover:cursor-pointer text-xl">Search</button>
           </div>
           <div className="flex mx-20 my-5 font-bold">
           <button type="submit" className="h-16 px-3 py-2  text-white hover:cursor-pointer ">Continue your search</button>
           <button type="submit" className="h-16 px-3 py-2  text-white hover:cursor-pointer  border-2 border-white 
            hover:bg-gray-400 rounded-2xl">Homestay in india hotels</button>

           </div>
       </div>
    </div>
  )
}
export default Header3