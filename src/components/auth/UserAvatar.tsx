import type { Session } from "next-auth"
import Image from "next/image"
 
export function UserAvatar({ session }: { session: Session | null }) {
  return (
    <div>
      <Image
        src={session?.user?.image ?? "https://i.pravatar.cc/300"}
        alt="User Avatar"
        width={35}
        height={35}
        className="rounded-full"
      />
    </div>
  )
}