'use client'
import React from 'react'
import SocialMediaIcons from './components/social-media-icons/social-media-icons.components'
import PrimaryInput from '@/app/components/input/primary-input.component'

import Link from 'next/link'
import { AuthProps } from './auth.types'
import PrimaryButton from '@/app/components/button/primary-button.component'

function Auth({ type }: AuthProps) {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  return (
    <div
      className="
  flex
  items-center
  flex-col
  md:justify-around
  justify-center
  gap-8
  bg-backgroud
  w-screen
  h-screen
  md:w-1/4
  py-9
  px-10
  rounded-md
  shadow-lg
  animate-fade-up
  md:h-5/6
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
        {type === 'login' && (
          <div className="flex items-start w-full m-0">
            <Link
              href={'/forgot-password'}
              className="text-sm text-primary hover:cursor-pointer"
            >
              Esqueceu a sua senha?
            </Link>
          </div>
        )}
        {type === 'login' ? (
          <PrimaryButton textButton="Logar" handleOnClick={() => alert("Login in development")} />
        ) : (
          <PrimaryButton textButton="Criar Conta" handleOnClick={() => alert("New account in development")} />
        )}
      </div>
      <SocialMediaIcons
        handleClickFacebook={() => alert('Login with Facebook in development')}
        handleClickGithub={() => alert('Login with Github in development')}
        handleClickGoogle={() => alert('Login with Google in development')}
      />
      <div
        className="
        w-full
        border-t
        border-solid
        border-[#d0d0d0]
        py-9
        flex
        items-center
        justify-center
        gap-2
    "
      >
        {type === 'login' ? (
          <>
            <p>Não possui uma conta?</p>
            <Link
              href={'/create-account'}
              className="text-sm text-primary hover:cursor-pointer"
            >
              <p className="text-primary hover:cursor-pointer">Criar Conta</p>
            </Link>
          </>
        ) : (
          <>
            <p>Já possui uma conta?</p>
            <Link href={'/'}>
              <p className="text-primary hover:cursor-pointer">Entrar</p>
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default Auth
