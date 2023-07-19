import React from 'react'
import NewsItem from './programing-link/programing-links.component'
import { AiOutlineClose } from "react-icons/ai"

function ProgramingLinks({ showModal, showNews, handleShowNews }: ProgramingLinksProps) {
  return (
    <>
      {
        showNews &&
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
      <div className="flex justify-start items-center p-2">
        <AiOutlineClose
          onClick={() => handleShowNews(false)}
          className="text-lg cursor-pointer hover:text-gray duration-300"
        />
      </div>
          <NewsItem />
          <NewsItem />
          <NewsItem />
        </div>
      }
    </>
  )
};

export default ProgramingLinks;