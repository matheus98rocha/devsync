'use client'
import Loading from '@/app/ui/components/loading/loading.component'
import React, { useEffect, useState } from 'react'
import SidebarMobile from './sidebar-mobile/sidebar-mobile'
import Sidebar from './sidebar/sidebar'
import { isMobile, isMobileOnly } from 'mobile-device-detect'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

interface LoaggedUserProps {
  children: React.ReactNode
}

function LoaggedUser({ children }: LoaggedUserProps) {
  const {} = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/?callbackUrl=/protected/home')
    },
  })
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <Loading />
      </div>
    )
  }
  return (
    <div className="h-full w-full flex">
      {isMobileOnly && <SidebarMobile />}
      {!isMobileOnly && <Sidebar />}
      {children}
    </div>
  )
}

export default LoaggedUser
