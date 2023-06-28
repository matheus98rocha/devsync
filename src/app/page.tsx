import React from 'react'
import Auth from './layout/auth/auth.component'

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
