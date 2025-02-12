"use client"

import { signIn } from "next-auth/react"
 
export default function SignIn() {
  return <button className="p-2" onClick={() => signIn("github")}>sign in</button>
}
