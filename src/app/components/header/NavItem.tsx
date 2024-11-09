'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Skeleton } from "@/components/ui/skeleton";
import { useGetAllWorkspaceQuery } from "@/redux/api/workspace";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiChevronDown } from "react-icons/bi";

interface Iprops {
    className?: string
}

const NavItem = ({ className }: Iprops) => {
    const { data, isSuccess } = useGetAllWorkspaceQuery()

    const pathName = usePathname()

    return (
        <div className={className}>
            <DropdownMenu>
                <DropdownMenuTrigger
                    className="w-max aria-expanded:bg-[#e9f2ff] cursor-pointer aria-expanded:text-[#2168e6] h-full px-3 py-[6px] flex space-x-1 place-items-center outline-none text-sm font-medium text-slate-700 rounded hover:bg-gray-200">
                    <div>
                        Các Không gian làm việc
                    </div>
                    <BiChevronDown className="size-6" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-[300px] h-max mt-[5px] p-4 text-slate-700 space-y-2">
                    <DropdownMenuLabel className="text-xs font-medium">Các Không gian làm việc của bạn</DropdownMenuLabel>
                    {
                        (data && isSuccess)
                            ? data.map((workspace) =>
                                <DropdownMenuItem
                                    key={workspace._id}
                                    aria-expanded
                                    className={`w-full h-[50px] text-base capitalize text-slate-900
                                            hover:!bg-gray-200 rounded-lg cursor-pointer gap-x-2 ${pathName === `/workspace/${workspace._id}` && 'aria-expanded:bg-[#e9f2ff] aria-expanded:text-blue-600'}`}>
                                    <Link href={`/workspace/${workspace._id}`} className="size-full flex gap-2 items-center text-slate-700">
                                        <div className="h-full aspect-square bg-gradient-to-b from-[#1f845a] to-[#4bce97] rounded-sm grid place-items-center text-white font-bold text-lg">
                                            {
                                                String(workspace.name).at(0)
                                            }
                                        </div>
                                        <p className="font-medium">
                                            {workspace.name}
                                        </p>
                                    </Link>
                                </DropdownMenuItem>)
                            : <div className="w-full h-[50px] flex gap-x-2">
                                <div className="h-full aspect-square bg-primary/10 rounded-md" />
                                <Skeleton className="size-full" />
                            </div>
                    }
                </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
                <DropdownMenuTrigger
                    className="w-max aria-expanded:bg-[#e9f2ff] cursor-pointer aria-expanded:text-[#2168e6] h-full px-3 py-[6px] flex space-x-1 place-items-center outline-none text-sm font-medium text-slate-700 rounded hover:bg-gray-200">
                    Gần đây
                    <BiChevronDown className="size-6" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-[300px] h-max mt-[5px] p-4 text-slate-700">
                    <DropdownMenuLabel className="text-xs font-medium">Các Không gian làm việc của bạn</DropdownMenuLabel>
                    <DropdownMenuItem className="w-full h-[50px] text-base capitalize text-slate-900 hover:!bg-gray-200 rounded-lg cursor-pointer">Lập Trình Web</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
                <DropdownMenuTrigger
                    className="w-max aria-expanded:bg-[#e9f2ff] cursor-pointer aria-expanded:text-[#2168e6] h-full px-3 py-[6px] flex space-x-1 place-items-center outline-none text-sm font-medium text-slate-700 rounded hover:bg-gray-200">
                    Đã đánh dấu sao
                    <BiChevronDown className="size-6" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-[300px] h-max mt-[5px] p-4 text-slate-700">
                    <DropdownMenuLabel className="text-xs font-medium">Các Không gian làm việc của bạn</DropdownMenuLabel>
                    <DropdownMenuItem className="w-full h-[50px] text-base capitalize text-slate-900 hover:!bg-gray-200 rounded-lg cursor-pointer">Lập Trình Web</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default NavItem