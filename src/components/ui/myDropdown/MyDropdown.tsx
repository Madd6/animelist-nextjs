"use client"
import React, { ReactNode, useEffect, useRef, useState} from 'react'

interface props {
  toggle?:ReactNode;
  menu?:ReactNode;
}

const MyDropdown = ({ toggle, menu }: props) => {
  const [ isOpen , setIsOpen ] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className='relative' ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer '>
        {toggle}
      </div>
      {isOpen && (
        <div
          className="absolute bg-secondary min-w-40 rounded-md p-2 
          right-0 top-full mt-2 flex opacity-100 transition-all duration-100 ease-in-out"
        >
          {menu ? menu : <h3>menu</h3>}
        </div>
      )}
    </div>
  )
}

export default MyDropdown