import React from 'react'
import { ButtonProps } from './primary-button.types'

const PrimaryButton = ({
  buttonText,
  buttonType,
  handleOnClick,
  isDisabled,
}: ButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      className={`
      ${isDisabled && 'bg-disabled'} 
      ${buttonType === 'primary' && !isDisabled && 'bg-primary'} 
      ${buttonType === 'alert' && !isDisabled && 'bg-alert'} 
      ${buttonType === 'error' && !isDisabled && 'bg-error'} 
      ${buttonType === 'outlined' && !isDisabled && 'bg-slate-50'}
      ${buttonType === 'outlined' && !isDisabled && 'border'} 
      ${buttonType === 'outlined' && !isDisabled && 'text-slate-900 font-light'}
      
      
      ${isDisabled && 'hover:bg-disabled-hover'}
      ${buttonType === 'primary' && !isDisabled && 'hover:bg-primary-hover'} 
      ${buttonType === 'alert' && !isDisabled && 'hover:bg-alert-hover'} 
      ${buttonType === 'error' && !isDisabled && 'hover:bg-error-hover'} 
      duration-300
    text-white
    font-bold 
     ${!isDisabled  ? 'cursor-pointer' : 'cursor-not-allowed'}
      outline-none
      border-none
      rounded
      text-base
      w-full
      h-12`}
      onClick={handleOnClick}
    >
      {buttonText}
    </button>
  )
}

export default PrimaryButton
