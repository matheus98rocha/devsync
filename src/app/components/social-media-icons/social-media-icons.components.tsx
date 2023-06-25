import React from 'react'
import * as BS from 'react-icons/bs'

function SocialMediaIcons() {
  return (
    <div className="flex items-center justify-center gap-6">
      <div className="flex items-center justify-center gap-4 flex-col hover:animate-jump">
        <label>GitHub</label>
        <BS.BsGithub />
      </div>

      <div className="flex items-center justify-center gap-4 flex-col hover:animate-jump">
        <label>Google</label>
        <BS.BsGoogle />
      </div>

      <div className="flex items-center justify-center gap-4 flex-col hover:animate-jump">
        <label>Facebook</label>
        <BS.BsFacebook />
      </div>
    </div>
  )
}

export default SocialMediaIcons
