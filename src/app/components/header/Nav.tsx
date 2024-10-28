"use client"
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { BiChevronDown } from "react-icons/bi";
import NavItem from "@/app/components/header/NavItem";
import { Plus } from "lucide-react";
import { CgTrello } from "react-icons/cg";

const Nav = () => {
    return (
        <nav className="min-w-max w-max max-w-[1080px] flex gap-4">
            <div className="lg:hidden md:block">
                <DropdownMenu>
                    <DropdownMenuTrigger
                        className="w-max bg-gray-300 aria-expanded:bg-[#e9f2ff] cursor-pointer aria-expanded:text-[#2168e6] h-full px-3 py-[6px] flex space-x-1 place-items-center outline-none text-sm font-medium text-slate-700 rounded hover:bg-gray-200">
                        Thêm
                        <BiChevronDown className="size-6" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-[300px] h-max mt-[5px] p-4 text-slate-700">
                        <NavItem />
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <NavItem className="hidden lg:flex size-full gap-x-3 place-items-center" />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className="max-w-[32px] h-full focus-visible:ring-0 text-sm bg-[#0c66e4] aria-expanded:bg-[#519aff] rounded-sm font-medium hover:bg-[#419aff]">
                        <Plus className="!size-5" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-[300px] h-max mt-[5px] text-slate-700 py-3 px-0 ">
                    <DropdownMenuItem
                        className="flex flex-col items-start w-full text-base hover:!bg-gray-200 rounded-none cursor-pointer"
                    >
                        <div className="text-base font-normal  flex gap-1 place-items-center">
                            <CgTrello />
                            <span>Tạo bảng</span>
                        </div>
                        <p className="text-xs font-normal text-slate-500">
                            Một bảng được tạo thành từ các thẻ được sắp xếp trong danh sách. Sử dụng bảng để quản lý các dự án, theo dõi thông tin, hoặc tổ chức bất cứ việc gì.
                        </p>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </nav >
    )
}

export default Nav