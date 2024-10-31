import React from 'react'

const Loading = () => {
    return (
        <div className='w-full h-screen flex justify-center place-items-center gap-x-5'>
            <span className="relative flex h-10 w-10 justify-center place-items-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75 delay-300"></span>
                <span className="relative inline-flex rounded-full h-6 w-6 bg-sky-500"></span>
            </span>
            <span className="relative flex h-10 w-10 justify-center place-items-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75 delay-500"></span>
                <span className="relative inline-flex rounded-full h-6 w-6 bg-orange-500"></span>
            </span>
            <span className="relative flex h-10 w-10 justify-center place-items-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75 delay-700"></span>
                <span className="relative inline-flex rounded-full h-6 w-6 bg-green-400"></span>
            </span>
        </div>
    )
}

export default Loading