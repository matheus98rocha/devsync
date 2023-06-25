'use client'

import PrimaryInput from './components/input/primary-input.component'
import React from 'react'
import SocialMediaIcons from './components/social-media-icons/social-media-icons.components'

export default function Home() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <div className="
      bg-contrastBackgroud 
      h-screen 
      w-screen 
      flex 
      items-center 
      justify-center
      md:flex-none
    ">
      <div
        className="
        flex
        items-center
        justify-center
        flex-col
        gap-8
        bg-backgroud
        w-screen
        h-screen
        md:w-1/4
        md:h-3/5
        py-9
        px-10
        rounded-md
        shadow-lg
        "
      >
        <h1 className="text-primary text-4xl font-bold">Titulo do site</h1>
        <div
          className="
          flex
          items-center
          justify-between
          flex-col
          gap-6
          w-full
          pb-4
          border-b border-solid border-[#d0d0d0]
          "
        >
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
        </div>
        <SocialMediaIcons />
      </div>
    </div>
  )
}
