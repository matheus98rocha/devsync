import React from 'react'
import { render } from '@testing-library/react'
import SidebarItem from './sidebar-item.component'
import '@testing-library/jest-dom/extend-expect'

import { ImExit } from 'react-icons/im'

describe('SidebarItem', () => {
  it('should render the label when isExpanded is true', () => {
    const label = 'Test Label'
    const ItemSidebar = render(
      <SidebarItem
        isExpanded={true}
        label={label}
        icon={ImExit}
        handleClick={() => {}}
      />,
    )

    expect(ItemSidebar).toBeTruthy()

    expect(ItemSidebar.getByText('Test Label'))
  })
})
