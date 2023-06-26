import React from 'react'
import * as BS from 'react-icons/bs'

function SocialMediaIcons() {
  const iconsData = React.useMemo(
    () => [
      {
        label: 'Facebook',
        icon: <BS.BsFacebook />,
      },
      {
        label: 'Google',
        icon: <BS.BsGoogle />,
      },
      {
        label: 'GitHub',
        icon: <BS.BsGithub />,
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
          className="
          flex
          items-center
          justify-center
          gap-4
          flex-col
          hover:animate-jump
          hover:text-primary
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
