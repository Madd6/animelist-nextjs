import React from 'react'
import SignIn from './Sign-in'
import { SignOut } from './Sign-out'
import { useSession } from 'next-auth/react';
import { UserAvatar } from './UserAvatar';
import MyDropdown from '../myDropdown/MyDropdown';
import ToggleDropdown from '../myDropdown/ToggleDropdown';
import MenuDropdown from '../myDropdown/MenuDropdown';

function AuthBtn() {
  const { data: session, status } = useSession();
  console.log({session})
  console.log({status})
  return (
    <div>
        {status === "unauthenticated" && (
            <SignIn />
        )}
        {status === "authenticated" && (
            // <SignOut />
            <MyDropdown
                toggle={
                    <ToggleDropdown><UserAvatar session={session}/></ToggleDropdown>
                }
                menu={
                    <MenuDropdown>
                        <SignOut />
                    </MenuDropdown>
                }
            />
        )}
    </div>
  )
}

export default AuthBtn
