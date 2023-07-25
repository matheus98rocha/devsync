import React from 'react'
import { SidebarItemProps } from './sidebar-item-types'
import { usePathname } from 'next/navigation'

function SidebarItem({
  icon: Icon,
  isExpanded,
  label,
  handleClick,
  currentRoute,
}: SidebarItemProps) {
  const pathname = usePathname()
  return (
    <div
      key={currentRoute}
      className={`flex
      items-center
      justify-center
      gap-2
      ${pathname === currentRoute ? 'bg-primary': 'none'}
      ${pathname === currentRoute ? 'text-contrastBackground': 'text-black'}
      ${pathname === currentRoute ? 'hover:bg-primaryFocus': 'none'}
      slit-in-horizontal
      p-4
      font-semibold
      hover:cursor-pointer`}
      onClick={handleClick}
    >
      {isExpanded && (
        <p className="slit-in-horizontal">{label}</p>
      )}
      <Icon size={23} />
    </div>
  )
}

export default SidebarItem
