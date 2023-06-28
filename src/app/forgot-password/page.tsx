'use client'
import { useState } from 'react'
import PrimaryInput from '../components/input/primary-input.component'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Link from 'next/link'

export default function ForgotPassword() {
  const [emailRecoveryPassword, setEmailRecoveryPassword] = useState('')
  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col">
      <div
        className="bg-backgroud
      h-1/3
      py-3
      px-8
      flex
      items-center
      justify-center
      flex-col
      gap-4
      animate-fade-left
      "
      >
        <div className="w-full items-start">
          <Link href={"/"}>
            <AiOutlineArrowLeft size={25} className="hover:cursor-pointer" />
          </Link>
        </div>
        <h2 className="text-primary text-3xl font-bold">Recuperar senha</h2>
        <PrimaryInput
          type="email"
          label="Digite seu e-mail"
          placeholder="E-mail"
          handleChangeInput={(e) => setEmailRecoveryPassword(e.target.value)}
          valueInput={emailRecoveryPassword}
        />
        <button>Recuperar</button>
      </div>
    </div>
  )
}
