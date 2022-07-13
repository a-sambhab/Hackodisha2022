import React from 'react'
import Background from '../../assets/bg-darkened.svg' ;

const Timeline = () => {
  return (

    <div className="bg-black h-[400px] text-white pl-5 md:pl-28 sm:pl-9 pt-4 pb-4 " style={{ backgroundImage: `url(${Background})` }}>

        <div className='text-[44px]'>Timeline</div>
        <div className='text-[64px] pl-1 mt-8'>Updating soon...</div>
    </div>
  )
}

export default Timeline
