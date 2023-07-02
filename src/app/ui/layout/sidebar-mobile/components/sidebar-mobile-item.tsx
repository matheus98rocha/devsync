import React from 'react'
import { SidebarMobileItemProps } from './sidebar-mobile-item-types'
import { usePathname } from 'next/navigation'

function SidebarMobileItem({
  icon: Icon,
  handleClick,
  label,
  currentRoute,
}: SidebarMobileItemProps) {

  const pathname = usePathname()

  return (
    <div
      key={currentRoute}
      onClick={handleClick}
      className={`flex
      items-center
      justify-center
      flex-col
      gap-2
      ${pathname === currentRoute && 'text-primary'}
      `}
    >
      <Icon size={23} />
      <p className="text-xs">{label}</p>
    </div>
  )
}

export default SidebarMobileItem
