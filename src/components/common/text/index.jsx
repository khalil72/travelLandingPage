import React from 'react'

const Text = ({text , className}) => {
  return (
    <>
     <p className={`text-[14px] leading-[20px] font-[400] ${className?.text}`}>{text}</p>
    </>
  )
}

export default Text 