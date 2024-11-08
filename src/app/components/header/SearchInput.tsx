import React from 'react'
import { BiSearch } from 'react-icons/bi'

const SearchInput = ({ className }: { className?: string }) => {
    return (
        <div className={`${className}`}>
            <div className='size-full relative flex flex-row-reverse'>
                <div className='h-full aspect-square absolute top-[50%] translate-y-[-50%] right-0 grid place-items-center'>
                    <BiSearch className="size-4" />
                </div>
                <input
                    placeholder='Search'
                    className="size-full md:w-[150px] pl-1 md:pl-3 border border-[#626f86] rounded-md placeholder:text-sm
                     placeholder:text-[#626f96] outline-none transition-all ease-in-out duration-300 focus:border-blue-500 focus:w-full md:focus:w-[70%]"
                />
            </div>
        </div>
    )
}

export default SearchInput