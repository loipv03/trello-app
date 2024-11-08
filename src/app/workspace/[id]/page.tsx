'use client'
import Loading from '@/app/workspace/[id]/loading'
import { useGetOneWorkspaceQuery } from '@/redux/api/workspace'
import { PencilLine, Users } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'
import { CgTrello } from 'react-icons/cg'

const WorkspaceDetail = () => {
    const { id } = useParams<{ id: string }>()
    const { data, isSuccess } = useGetOneWorkspaceQuery(id)

    return (
        (data && isSuccess)
            ? <div className="w-full my-5 md:my-10">
                <div className="w-full h-[125px] p-8 flex gap-x-[10px] items-center">
                    <div className="h-full aspect-square text-4xl font-bold bg-gradient-to-b from-[#1f845a] to-[#4bce97] rounded-sm grid place-items-center text-white capitalize">
                        {
                            String(data?.name).at(0)
                        }
                    </div>
                    <div className="h-[80%] w-max flex flex-col">
                        <div className="h-max flex items-start gap-x-1">
                            <span className="text-[20px] font-semibold text-[#263d64]">
                                {data?.name}
                            </span>
                            <div className="p-2 hover:bg-gray-300 rounded-sm cursor-pointer">
                                <PencilLine className="size-4" />
                            </div>
                        </div>
                        <div className="flex gap-x-1 h-full items-center">
                            <Users className="size-4" />
                            <span className="text-xs font-normal text-[#263d64]">
                                {data?.members.length} thành viên
                            </span>
                        </div>
                    </div>
                </div>
                <hr className="my-4" />
                <div>
                    <div className="w-full h-max flex gap-x-2 items-center">
                        <CgTrello className="size-6 text-[#172b4d]" />
                        <h2 className="text-lg font-semibold text-[#172b4d]">Các bảng của bạn</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-3 lg:gap-10 my-5">
                        {
                            data?.boards.map((board) => (
                                <div key={board._id} className="w-full aspect-video md:h-[90px] rounded-md cursor-pointer bg-gradient-to-br from-[#1164bc] to-[#2b92a9]">
                                    <Link href={`${data._id}/${board._id}`}>
                                        <div className="size-full p-4 md:p-3 text-white font-semibold text-sm lg:text-xs text-center">
                                            {board.name}
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            : <Loading />
    )
}

export default WorkspaceDetail