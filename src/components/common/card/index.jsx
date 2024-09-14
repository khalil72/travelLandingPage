import React from 'react'

const Card = ({children , className }) => {
  return (
    <div className={`${className} w-full  h-full lg:max-h-[415px] bg-white shadow-lg`}>
      {children}

    </div>
  )
}

export default Card