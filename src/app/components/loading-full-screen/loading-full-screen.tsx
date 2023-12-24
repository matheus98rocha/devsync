import React from 'react'
import Loading from '../loading/loading.component'

function LoadingFullScreen() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
    <Loading />
  </div>
  )
}

export default LoadingFullScreen