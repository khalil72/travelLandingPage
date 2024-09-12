import React from 'react'

const Button = ({text ,className }) => {
  return (
    <button className={`${className} w-full max-w-[170px] h-full min-h-[60px] max-h-[60px] bg-buttonColor text-white rounded-[10px]`} >
  
        {text}

    </button>
  )
}

export default Button