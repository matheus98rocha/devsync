'use client'
import React from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'

import { AiOutlineArrowRight, AiOutlineArrowLeft,AiOutlineHome } from 'react-icons/ai'
import { ImExit } from 'react-icons/im'
import {MdPersonalVideo} from 'react-icons/md'
import {SiHtmlacademy} from 'react-icons/si'

import SidebarItem from './components/sidebar-item/sidebar-item.component'
function Sidebar() {
  const { data: session } = useSession()
  const [isExpanded, setIsExpanded] = React.useState(false)
  return (
    <div
      className={`
      relative
      grid
      grid-cols-1
      grid-rows-[300px_auto_100px]
      h-screen 
      py-4
      ${isExpanded ? 'w-64' : 'w-16'}
      duration-500 
      bg-backgroud
      shadow-md
      `}
    >
      {/* User container */}
      <div className="flex items-center justify-start flex-col gap-4">
        <Image
          src={session?.user?.image as string}
          width={isExpanded ? 60 : 30}
          height={isExpanded ? 60 : 30}
          priority={true}
          alt="use-profile"
          className="rounded-lg"
        />
        {isExpanded && <p className='font-semibold'>{session?.user?.name}</p>}
      </div>

      {/* Main Container */}
      <div className='flex flex-col items-center justify-start gap-4'>
        <SidebarItem
          handleClick={() => {}}
          icon={AiOutlineHome}
          isExpanded={isExpanded}
          label={'Home'}
          currentRoute='/home'
        />

        <SidebarItem
          handleClick={() => {}}
          icon={MdPersonalVideo}
          isExpanded={isExpanded}
          label={'Meu Progreso'}
        />

        <SidebarItem
          handleClick={() => {}}
          icon={SiHtmlacademy}
          isExpanded={isExpanded}
          label={'Minhas linguagens'}
        />
      </div>

      {/* Footer container */}
      <div className='flex flex-col items-center justify-end gap-4'>
        <div
          className="hover:cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {!isExpanded ? (
            <div>
              <AiOutlineArrowRight size={23} onClick={() => setIsExpanded(!isExpanded)} />
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2">
              <p className="animate-fade animate-ease-in-out font-semibold">Comprimir</p>
              <AiOutlineArrowLeft size={23} onClick={() => setIsExpanded(!isExpanded)} />
            </div>
          )}
        </div>

        <SidebarItem
          handleClick={() => signOut()}
          icon={ImExit}
          isExpanded={isExpanded}
          label={'Sair'}
        />
      </div>
    </div>
  )
}

export default Sidebar
