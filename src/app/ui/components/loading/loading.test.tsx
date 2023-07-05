import React from 'react'
import { render } from '@testing-library/react'
import Loading from './loading.component'

describe('Loading Component', () => {
  test('renders correctly', () => {
    const loadingComponente = render(<Loading />)

    expect(loadingComponente).toBeTruthy()
  })
})
