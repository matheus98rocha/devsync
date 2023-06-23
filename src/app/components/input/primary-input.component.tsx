import React from 'react'
import { PrimaryInputProps } from './primary-input.types'

function PrimaryInput({
  valueInput,
  handleChangeInput,
  label,
  type,
  placeholder,
}: PrimaryInputProps) {
  return (
    <>
      <label
        htmlFor="UserEmail"
        className="block
        overflow-hidden
        rounded-md border
        border-primary
        px-3
        py-2
        shadow-sm
        focus-within:border-primaryFocus
        focus-within:ring-1
        focus-within:ring-primaryFocus"
      >
        <span
          className="text-xs
        font-medium
        text-gray-700"
        >
          {label}
        </span>

        <input
          type={type}
          id="primaryInput"
          placeholder={placeholder}
          className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          value={valueInput}
          onChange={handleChangeInput}
        />
      </label>
    </>
  )
}

export default PrimaryInput
