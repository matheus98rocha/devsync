import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import SidebarMobileItem from './components/sidebar-mobile-item'
import { MdPersonalVideo } from 'react-icons/md'
import { SiHtmlacademy } from 'react-icons/si'

function SidebarMobile() {
  return (
    <div className="absolute bottom-0 w-screen py-4 flex items-center justify-around gap-4">
      <SidebarMobileItem
        handleClick={() => {}}
        icon={AiOutlineHome}
        label="Home"
        currentRoute="/home"
      />
      <SidebarMobileItem
        handleClick={() => {}}
        icon={MdPersonalVideo}
        label={'Meu Progreso'}
      />

      <SidebarMobileItem
        handleClick={() => {}}
        icon={SiHtmlacademy}
        label={'Minhas linguagens'}
      />
    </div>
  )
}

export default SidebarMobile
