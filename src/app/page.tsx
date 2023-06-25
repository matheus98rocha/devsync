'use client'

import PrimaryInput from './components/input/primary-input.component'
import React from 'react'
import SocialMediaIcons from './components/social-media-icons/social-media-icons.components'

export default function Home() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <div className="bg-backgroud h-screen w-full p-4 grid md:grid-cols-2 ">
      <div className="w-full h-full flex items-center justify-center flex-col">
        <h1 className="text-primary text-4xl font-bold">Titulo do site</h1>
        <h2 className="text-lg font-semibold">Faça seu login na plataforma</h2>
      </div>
      <div className="w-full h-full flex items-center justify-center flex-col">
        <div className="w-4/5 flex items-center justify-center flex-col gap-4">
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
          <button>Logar</button>
          <SocialMediaIcons />
        </div>
      </div>
    </div>
  )
}
