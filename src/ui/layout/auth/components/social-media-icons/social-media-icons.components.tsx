import React from 'react'
import * as BS from 'react-icons/bs'
import { SocialMediaIconsProps } from './social-media-icons-types'

function SocialMediaIcons({
  handleClickFacebook,
  handleClickGoogle,
  handleClickGithub,
}: SocialMediaIconsProps) {
  const iconsData = React.useMemo(
    () => [
      {
        label: 'Facebook',
        icon: <BS.BsFacebook size={25} />,
        onClickIcon: handleClickFacebook,
      },
      {
        label: 'Google',
        icon: <BS.BsGoogle size={25} />,
        onClickIcon: handleClickGoogle,
      },
      {
        label: 'GitHub',
        icon: <BS.BsGithub size={25} />,
        onClickIcon: handleClickGithub,
      },
    ],
    [handleClickFacebook, handleClickGoogle, handleClickGithub],
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
