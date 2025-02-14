"use client"
import { signOut } from "next-auth/react"
 
export function SignOut() {
  return <button onClick={() => signOut()} className="text-red-700">Sign Out</button>
}