'use client'
import React from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

function Sidebar() {
  const { data: session } = useSession()
  const [isExpanded, setIsExpanded] = React.useState(false)
  console.log(session?.user?.image)
  return (
    <div
      className={`
      flex
      flex-col
      items-center
      justify-around
      h-screen 
      ${isExpanded ? 'w-64' : 'w-16'}
      duration-500 
      bg-primary ease-in 
      `}
      
    >
      <Image
        src={session?.user?.image as string}
        width={40}
        height={40}
        priority={true}
        alt="use-profile"
      />
      <button onClick={() => setIsExpanded(!isExpanded)}>Expand</button>
    </div>
  )
}

export default Sidebar
