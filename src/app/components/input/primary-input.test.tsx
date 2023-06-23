import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import PrimaryInput from './primary-input.component'
import { toHaveTextContent } from '@testing-library/jest-dom/matchers'

describe('PrimaryInput', () => {
  it('should render correctly', () => {
    const handleChangeInput = jest.fn()
    const label = 'Email'
    const type = 'text'
    const placeholder = 'Enter your email'
    const valueInput = 'test@example.com'

    const { getByPlaceholderText } = render(
      <PrimaryInput
        valueInput={valueInput}
        handleChangeInput={handleChangeInput}
        label={label}
        type={type}
        placeholder={placeholder}
      />,
    )

    const inputElement = getByPlaceholderText('Enter your email')
    expect(inputElement).toBeTruthy()
  })

  it('should call handleChangeInput when input value changes', () => {
    const handleChangeInput = jest.fn()
    const label = 'Email'
    const type = 'text'
    const placeholder = 'Enter your email'
    const valueInput = 'new@example.com'

    const { getByPlaceholderText } = render(
      <PrimaryInput
        valueInput={valueInput}
        handleChangeInput={handleChangeInput}
        label={label}
        type={type}
        placeholder={placeholder}
      />,
    )

    const inputElement = getByPlaceholderText('Enter your email') as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: 'new@example.com' } })

    expect(inputElement.value).toBe('new@example.com');
  })
})
