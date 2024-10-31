import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { BiChevronDown } from "react-icons/bi";

interface Iprops {
    className?: string
}

const NavItem = ({ className }: Iprops) => {
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
                <DropdownMenuContent align="start" className="w-[300px] h-max mt-[5px] p-4 text-slate-700">
                    <DropdownMenuLabel className="text-xs font-medium">Các Không gian làm việc của bạn</DropdownMenuLabel>
                    <DropdownMenuItem className="w-full h-[50px] text-base capitalize text-slate-900 hover:!bg-gray-200 rounded-lg cursor-pointer">Lập Trình Web</DropdownMenuItem>
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