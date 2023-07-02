'use client'
import Sidebar from '@/app/ui/layout/sidebar/sidebar'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React from 'react'

import { isMobile } from 'mobile-device-detect'
import SidebarMobile from '@/app/ui/layout/sidebar-mobile/sidebar-mobile'

function About() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/?callbackUrl=/protected/home')
    },
  })

  const [isMobileDevice, setIsMobileDevice] = React.useState(false)

  React.useEffect(() => {
    setIsMobileDevice(isMobile)
  }, [])

  return (
    <div className="h-full w-full flex">
      {isMobileDevice ? <SidebarMobile /> : <Sidebar />}
      <h1>Sobre</h1>
    </div>
  )
}

export default About
