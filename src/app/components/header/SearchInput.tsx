import React from 'react'
import { BiSearch } from 'react-icons/bi'

const SearchInput = ({ className }: { className?: string }) => {
    return (
        <div className={`${className}`}>
            <div className='lg:w-[40%] sm:w-[60%] h-full relative'>
                <BiSearch className="absolute top-[50%] translate-y-[-50%] left-[8px]" />
                <input
                    type="text" placeholder="Tìm kiếm"
                    className="size-full border border-[#626f86] rounded-sm placeholder:text-sm placeholder:text-[#626f96] 
                        pl-[30px] pr-3 outline-none focus:border-blue-500 "
                />
            </div>
        </div>
    )
}

export default SearchInput