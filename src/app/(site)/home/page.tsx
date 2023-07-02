'use client'
import Sidebar from '@/app/ui/layout/sidebar/sidebar'
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
    <div className="h-full w-full">
      <Sidebar />
      <button onClick={() => signOut()}>Sair</button>
    </div>
  )
}

export default Home
