import React from 'react'
import { render } from '@testing-library/react'
import SidebarMobileItem from './sidebar-mobile-item'
import { AiOutlineHome } from 'react-icons/ai'

// Configuração do teste
const mockProps = {
  icon: () => <AiOutlineHome/>,
  label: 'Test Label',
}

describe('SidebarMobileItem', () => {
  it('renderiza corretamente', () => {
    const { getByText } = render(
      <SidebarMobileItem {...mockProps} />
    )

    expect(getByText('Test Label')).toBeTruthy()
  })
})
