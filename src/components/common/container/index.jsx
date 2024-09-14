import React from 'react'

const Container = ({ children, className }) => {
    return (
        <div className={`w-full px-5 md:px-20 mx-auto lg:max-w-[1100px] ${className} lg:px-[10px]`}>
            {children}

        </div>
    )
}

export default Container