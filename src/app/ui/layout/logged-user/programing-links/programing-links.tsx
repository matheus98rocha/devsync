import React from 'react'
import NewsItem from './programing-link/programing-links.component'

function ProgramingLinks({ showModal }: { showModal: boolean }) {
  return (
    <div
      className={`
      fixed
      right-0
      h-screen
      w-72
      bg-background
      shadow-md
      overflow-y-hidden
      ${showModal ? "-z-10" : ""}`}
    >
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </div>
  )
};

export default ProgramingLinks;