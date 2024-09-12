import React from 'react'

const Container = ({ children, className }) => {
    return (
        <div className={`w-full mx-auto max-w-[1160px] ${className} lg:px-[10px]`}>
            {children}

        </div>
    )
}

export default Container