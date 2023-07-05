'use client'
import React from 'react'

import ClientOnly from '@/app/ui/layout/logged-user/logged-user'

function Home() {
  return (
    <ClientOnly>
      <h1>Home</h1>
    </ClientOnly>
  )
}

export default Home
