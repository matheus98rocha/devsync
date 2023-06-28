'use client'
import React from 'react'
import { PrimaryInputProps } from './primary-input.types'

import { BsEye, BsEyeSlash } from 'react-icons/bs'

function PrimaryInput({
  valueInput,
  handleChangeInput,
  label,
  type,
  placeholder,
}: PrimaryInputProps) {
  const [canShowPassword, setCanShowPassword] = React.useState(false)

  return (
    <>
      <div
        className="
        relative
        w-full
        overflow-hidden
        rounded-md border
        border-primary
        bg-backgroud
        shadow-lg
        px-3
        py-2
        focus-within:border-primaryFocus
        focus-within:ring-1
        focus-within:ring-primaryFocus
        "
      >
        <span
          className="
          text-sm
        text-gray-700
        font-bold
        "
        >
          {label}
        </span>

        <input
          type={canShowPassword ? 'text' : type}
          id="primaryInput"
          placeholder={placeholder}
          className="
          bg-backgroud 
          mt-1 
          w-full
          h-12
          border-none 
          p-0 
          text-base
          focus:border-transparent
          focus:outline-none
          focus:ring-0 
          sm:text-sm"
          value={valueInput}
          onChange={handleChangeInput}
        />
        {valueInput.length > 0 && type === 'password' && canShowPassword && (
          <BsEye
            onClick={() => setCanShowPassword(false)}
            className="absolute right-4 bottom-6"
          />
        )}

        {valueInput.length > 0 && type === 'password' && !canShowPassword && (
          <BsEyeSlash
            onClick={() => setCanShowPassword(true)}
            className="absolute right-4 bottom-6"
          />
        )}
      </div>
    </>
  )
}

export default PrimaryInput
