import React from 'react'
import Auth from './components/auth/auth.component'

export const metadata = {
  title: 'Bem-vindo(a)',
}

export default function Home() {
  return (
    <>
      <div
        className="
      bg-contrastBackgroud 
      h-screen 
      w-screen 
      flex 
      items-center 
      justify-center
      md:flex-none
    "
      >
        <Auth />
      </div>
    </>
  )
}
