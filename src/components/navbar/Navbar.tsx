"use client";
import Image from "next/image"
import { ToggleTheme } from "../ui/ToggleTheme"
import MenuNav from "./MenuNav"
import SignIn from "../ui/auth/Sign-in"
import { SignOut } from "../ui/auth/Sign-out"
import AuthBtn from "../ui/auth/AuthBtn"

function Navbar() {
  return (
    <header className="w-full flex px-4 py-4 border-b">
        <nav className="w-full flex items-center justify-between">
            <div className="w-1/3 text-center text-2xl flex items-center gap-5 font-bold ">
                <Image
                    src="/bluecat.jpeg"
                    alt="..."
                    width={35}
                    height={35}
                    className="rounded-lg drop-shadow-sm"
                />
                <span className="lg:flex md:flex sm:flex hidden">
                    AnimeDose
                </span>
            </div>
            <div className="w-1/3 flex justify-start items-center gap-4">
                <input 
                    type="text" 
                    placeholder="Search ..."
                    className="w-3/4 p-1 rounded-md "  
                />
                random
            </div>
            <div className="w-1/3 flex justify-end items-center gap-4"> 
                <MenuNav/>
                <AuthBtn />
                <ToggleTheme />
            </div>
        </nav>
    </header>
  )
}

export default Navbar