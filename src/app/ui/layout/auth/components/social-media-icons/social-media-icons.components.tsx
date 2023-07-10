'use client'
import React from 'react'
import * as BS from 'react-icons/bs'

import { signIn } from 'next-auth/react'

function SocialMediaIcons({ }) {
  const iconsData = React.useMemo(
    () => [
      {
        label: 'Facebook',
        icon: <BS.BsFacebook size={25} />,
        onClickIcon: () => signIn('facebook', { callbackUrl: '/home' }),
      },
      {
        label: 'Google',
        icon: <BS.BsGoogle size={25} />,
        onClickIcon: () =>
          signIn('google', {
            callbackUrl: '/home',
          }),
      },
      {
        label: 'GitHub',
        icon: <BS.BsGithub size={25} />,
        onClickIcon: () =>
          signIn('github', {
            // callbackUrl: '/home',
          }),
      },
    ],
    [],
  )

  return (
    <div
      className="
      flex
      items-center
      justify-center
      gap-6"
    >
      {iconsData.map((item, index) => (
        <div
          key={index}
          onClick={() => item.onClickIcon()}
          className="
          flex
          items-center
          justify-center
          gap-4
          flex-col
          hover:animate-jump
          hover:text-primary
          hover:cursor-pointer
          "
        >
          <p>{item.label}</p>
          {item.icon}
        </div>
      ))}
    </div>
  )
}

export default SocialMediaIcons
