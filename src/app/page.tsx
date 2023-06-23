'use client'

import Image from 'next/image'
import PrimaryInput from './components/input/primary-input.component'
import React from 'react'

export default function Home() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <div className="bg-backgroud h-screen w-full p-4 flex justify-center items-center flex-col gap-4">
      <h1 className="text-black text-xl	">Seja Bem Vindo</h1>
      <div className="w-60 h-15 flex items-center justify-center flex-col gap-4">
        <PrimaryInput
          label="E-mail"
          type="e-mail"
          placeholder="Digite seu e-mail"
          valueInput={email}
          handleChangeInput={(event) => setEmail(event.target.value)}
        />
        <PrimaryInput
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          valueInput={password}
          handleChangeInput={(event) => setPassword(event.target.value)}
        />
      </div>
    </div>
  )
}
