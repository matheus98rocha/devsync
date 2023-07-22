'use client'
import React from 'react'
import SocialMediaIcons from './components/social-media-icons/social-media-icons.components'

import Link from 'next/link'
import { AuthProps } from './auth.types'
import PrimaryInput from '../../components/input/primary-input.component'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import PrimaryButton from '../../components/button/primary-button.component'

function Auth({ type }: AuthProps) {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const { data: session } = useSession()

  React.useEffect(() => {
    if (session) {
      redirect('/home')
    }
  }, [session])

  return (
    <div
      className="
  flex
  items-center
  flex-col
  md:justify-around
  justify-center
  gap-8
  bg-background
  w-screen
  h-screen
  lg:w-96
  lg:h-auto
  xl:h-[94%]
  py-9
  px-10
  rounded-md
  shadow-lg
  animate-fade-up
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
    xl:gap-2
    w-full
    pb-4
    xl:pb-2
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
          <PrimaryButton
            buttonText="Logar"
            buttonType={'primary'}
            handleOnClick={() => alert('Login in development')}
            isDisabled={false}
          />
        ) : (
          <PrimaryButton
            buttonText="Criar Conta"
            buttonType="primary"
            handleOnClick={() => alert('New account in development')}
            isDisabled={false}
          />
        )}
      </div>
      <SocialMediaIcons />
      <div
        className="
        w-full
        border-t
        border-solid
        border-[#d0d0d0]
        xl:py-1
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
