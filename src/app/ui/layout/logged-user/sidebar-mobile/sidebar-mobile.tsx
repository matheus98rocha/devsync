'use client'
import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import SidebarMobileItem from './components/sidebar-mobile-item'
import { MdPersonalVideo } from 'react-icons/md'
import { SiHtmlacademy } from 'react-icons/si'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

import { signOut } from 'next-auth/react'
import { routes } from '@/constants/routes'
import Link from 'next/link'

function SidebarMobile() {
  const { data: session } = useSession()

  const [canShowDropdown, setCanShowDropdown] = React.useState(false)
  return (
    <>
      <div className="absolute top-4 right-5 shadow-md">
        {session?.user?.image && (
          <Image
            src={session.user.image as string}
            blurDataURL={session.user.image as string}
            placeholder="blur"
            width={40}
            height={40}
            priority={true}
            alt="use-profile"
            className="rounded-full"
            onClick={() => setCanShowDropdown(!canShowDropdown)}
          />
        )}
        {canShowDropdown && (
          <div
            className="
          right-1
          mt-2
          absolute
          p-2
          bg-contrastBackgroud
          shadow-lg
          "
          >
            <p onClick={() => signOut()}>Sair</p>
          </div>
        )}
      </div>
      <div
        className="bg-backgroud
      shadow-lg
      absolute
      bottom-0
      w-screen
      py-4
      flex
      items-center
      justify-around
      gap-4"
      >
        {routes.map((route) => (
          <Link href={route.route} key={route.route}>
            <SidebarMobileItem
              icon={route.icon}
              label={route.label}
              currentRoute={route.route}
            />
          </Link>
        ))}
      </div>
    </>
  )
}

export default SidebarMobile
