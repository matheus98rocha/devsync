import React from 'react'
import * as BS from 'react-icons/bs'

function SocialMediaIcons() {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="flex items-center justify-center gap-4 flex-col">
        <label>GitHub</label>
        <BS.BsGithub />
      </div>

      <div className="flex items-center justify-center gap-4 flex-col">
        <label>Google</label>
        <BS.BsGoogle />
      </div>

      <div className="flex items-center justify-center gap-4 flex-col">
        <label>Facebook</label>
        <BS.BsFacebook />
      </div>
    </div>
  )
}

export default SocialMediaIcons
