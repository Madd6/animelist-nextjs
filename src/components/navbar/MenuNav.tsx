import React from 'react'
import MyDropdown from '../ui/myDropdown/MyDropdown'
import ToggleDropdown from '../ui/myDropdown/ToggleDropdown'
import MenuDropdown from '../ui/myDropdown/MenuDropdown'
import Link from 'next/link'

function MenuNav() {
  return (
    <MyDropdown
      toggle={
        <ToggleDropdown><h3>test</h3></ToggleDropdown>
      }
      menu={
        <MenuDropdown>
          <Link href="/">hehe</Link>
          <Link href="/">hehe</Link>
        </MenuDropdown>
      }
    />
  )
}

export default MenuNav