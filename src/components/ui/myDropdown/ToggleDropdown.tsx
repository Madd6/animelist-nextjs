import {ReactNode} from 'react'

interface props {
  children?:ReactNode;
}

function ToggleDropdown({children}: props) {
  return (
    <div>{children}</div>
  )
}

export default ToggleDropdown