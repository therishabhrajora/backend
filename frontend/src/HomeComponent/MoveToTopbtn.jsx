import React from 'react'
import { IoIosArrowRoundUp } from "react-icons/io";

function MoveToTopbtn({scrollToTop}) {
  return (
    <div onClick={scrollToTop} className='bg-gray-300  hover:shadow-black hover:shadow-lg fixed bottom-20 right-10 z-50 text-4xl rounded-full'>
        <IoIosArrowRoundUp />
    </div>
  )
}

export default MoveToTopbtn