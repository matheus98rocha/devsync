import React from 'react'
import { SidebarItemProps } from './sidebar-item-types'

function SidebarItem({
  icon: Icon,
  isExpanded,
  label,
  handleClick,
}: SidebarItemProps) {
  return (
    <div
      className="flex items-center justify-center gap-2 hover:cursor-pointer"
      onClick={handleClick}
    >
      {isExpanded && (
        <p className="animate-fade animate-ease-in-out">{label}</p>
      )}
      <Icon />
    </div>
  )
}

export default SidebarItem
