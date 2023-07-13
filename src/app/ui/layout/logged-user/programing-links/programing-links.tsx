import React from 'react'
import NewsItem from './programing-link/programing-links.component'

function ProgramingLinks() {
  return (
    <div
      className="
      fixed
      right-0
      h-screen
      w-72
      bg-background
      shadow-md
      overflow-y-hidden
  "
    >
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </div>
  )
}

export default ProgramingLinks
