import { PencilLine, Users } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { CgTrello } from 'react-icons/cg'

const WorkspaceDetail = () => {
    return (
        <div className="w-full my-10">
            <div className="w-full h-[125px] p-8 flex gap-x-[10px] items-center">
                <div className="h-full aspect-square text-4xl font-bold bg-gradient-to-b from-[#1f845a] to-[#4bce97] rounded-sm grid place-items-center text-white">
                    {
                        String("Lập Trình Website").at(0)
                    }
                </div>
                <div className="h-[80%] w-max flex flex-col">
                    <div className="h-max flex items-start gap-x-1">
                        <span className="text-[20px] font-semibold text-[#263d64]">Lập Trình Website</span>
                        <div className="p-2 hover:bg-gray-300 rounded-sm cursor-pointer">
                            <PencilLine className="size-4" />
                        </div>
                    </div>
                    <div className="flex gap-x-1 h-full items-center">
                        <Users className="size-4" />
                        <span className="text-xs font-normal text-[#263d64]">2 Thành viên</span>
                    </div>
                </div>
            </div>
            <hr className="my-4" />
            <div>
                <div className="w-full h-max flex gap-x-2 items-center">
                    <CgTrello className="size-6 text-[#172b4d]" />
                    <h2 className="text-lg font-semibold text-[#172b4d]">Các bảng của bạn</h2>
                </div>
                <div className="grid grid-cols-4 items-end gap-10 my-5">
                    <div className="w-full h-[90px] rounded-md cursor-pointer bg-gradient-to-br from-[#1164bc] to-[#2b92a9]">
                        <Link href={'66fbf8243e240bfd4606574c/board'}>
                            <span className="block size-full p-3 text-white font-semibold text-base">Nodejs</span>
                        </Link>
                    </div>
                    <div className="w-full h-[90px] rounded-md cursor-pointer bg-gradient-to-br from-[#1164bc] to-[#2b92a9]">
                        <span className="block size-full p-3 text-white font-semibold text-base">ReactJs</span>
                    </div>
                    <div className="w-full h-[90px] rounded-md cursor-pointer bg-gradient-to-br from-[#1164bc] to-[#2b92a9]">
                        <span className="block size-full p-3 text-white font-semibold text-base">NextJs</span>
                    </div>
                    <div className="w-full h-[90px] rounded-md cursor-pointer bg-gradient-to-br from-[#1164bc] to-[#2b92a9]">
                        <span className="block size-full p-3 text-white font-semibold text-base">C++</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkspaceDetail