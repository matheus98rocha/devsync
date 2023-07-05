import React, { Suspense } from 'react'

import Auth from './ui/layout/auth/auth.component'
import Loading from './ui/components/loading/loading.component'

export const metadata = {
  title: 'Bem-vindo(a)',
}

export default function Home() {
  return (
    <>
      <div
        className="
      h-screen 
      w-screen 
      flex 
      items-center 
      justify-center
      md:flex-none
    "
      >
          <Auth type="login" />
      </div>
    </>
  )
}
