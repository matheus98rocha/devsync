import PrimaryButton from '@/app/ui/components/button/primary-button.component'
import React from 'react'

function NewsItem() {
  console.log(window.screen.height)

  return (
    <div className="
    w-full 
    h-2/4 
    flex 
    flex-col 
    items-center 
    justify-center
    border-b
    border-solid
    border-[#d0d0d0]
    gap-2
    pl-2">
      <h2 className="font-bold text-lg">
        React Labs: What Weve Been Working On – June 2022
      </h2>
      <p className='text-sm'>
        React 18 was years in the making, and with it brought valuable lessons
        for the React team. Its release was the result of many years of research
        and exploring many paths. Some of those paths were successful; many more
      </p>
      <PrimaryButton
        buttonText="Read More"
        buttonType="outlined"
        handleOnClick={() => {}}
        isDisabled={false}
      />
    </div>
  )
}

export default NewsItem