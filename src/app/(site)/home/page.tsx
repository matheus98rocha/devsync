'use client'
import React from 'react'

import ClientOnly from '@/app/ui/layout/logged-user/logged-user'

function Home() {
  return (
    <ClientOnly>
      <div className="flex items-center justify-center w-screen">
        <div className="min-h-screen w-3/5 borrder shadow-md bg-background flex-col">

        </div>
      </div>
    </ClientOnly>
  )
}

export default Home
