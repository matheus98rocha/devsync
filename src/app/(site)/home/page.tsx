'use client'
import { signOut, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React from 'react'

function Home() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/?callbackUrl=/protected/home')
    },
  })
  return (
    <div className="flex items-center justify-center h-full w-full flex-col">
      <p className="mt-4">{session?.user?.name}</p>
      Home
      <button onClick={() => signOut()}>Sair</button>
    </div>
  )
}

export default Home
