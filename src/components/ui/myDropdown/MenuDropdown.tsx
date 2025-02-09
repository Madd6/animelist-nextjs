import {ReactNode} from 'react'

interface props {
    children?:ReactNode;
}

function MenuDropdown({children}: props) {
  return (
    <div className='
      border-b-2 w-full flex flex-col justify-center 
      items-center gap-4 '
      >{children}</div>
  )
}

export default MenuDropdown