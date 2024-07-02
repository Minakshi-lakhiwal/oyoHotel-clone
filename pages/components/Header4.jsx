'use client'
import Image from "next/image"
const Header4 = () => {
  return (
    <div className="flex items-center border-2 rounded-md mx-20 border-gray-300 px-5 py-2 justify-between">
        <div className="flex items-center ">
            <Image src={'/Images/fire.jpg'} width={200} height={200} className="w-32 h-32 rounded-full"/>
            <div className="text-xl">
            <h3 className="font-bold">Get access to exclusive deals
            </h3>
            <p>Only the best deals reach your inbox</p>
            </div>
        </div>
        <div className="flex">
            <input type="email"  placeholder="e.g. John@gmail.com" className="border-2 border-gray-300 outline-none px-6 py-3 mr-5 rounded-lg w-80 h-16"/>
            <button className="h-14 w-48 bg-red-500 text-white text-lg cursor-pointer rounded-lg" type="submit">Notify</button>
        </div>
    </div>
  )
}

export default Header4