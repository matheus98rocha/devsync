import React from 'react'
import Auth from '../../ui/layout/auth/auth.component'

export const metadata = {
  title: 'Criar Conta',
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
        <Auth type="create-account" />
      </div>
    </>
  )
}
