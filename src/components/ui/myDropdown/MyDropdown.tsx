"use client"
import React, { ReactNode, useEffect, useState} from 'react'

interface props {
  toggle?:ReactNode;
  menu?:ReactNode;
}

const MyDropdown = ({ toggle, menu }: props) => {
  const [ isOpen , setIsOpen ] = useState(false)
  useEffect(() => {
    console.log(isOpen)
  }, [isOpen])

  return (
    <div className='relative'>
      <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer p-2 border rounded-md'>
        {toggle}
      </div>
      <div 
      className={`absolute bg-secondary min-w-40 rounded-md p-2 
        right-0 top-full mt-2  ${isOpen ? "flex opacity-100" : "none opacity-0"}
        starting:open:opacity-0 transition-all transition-discrete
        duration-100 ease-in-out`}
      >
        {menu? menu : <h3>menu</h3>}
      </div>
    </div>
  )
}

export default MyDropdown