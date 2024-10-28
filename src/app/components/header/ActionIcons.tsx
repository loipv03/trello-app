import { IoIosNotificationsOutline } from "react-icons/io";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
    DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ActionIcons = () => {
    return (
        <div className="w-max flex justify-around gap-1 place-items-center">
            <DropdownMenu>
                <DropdownMenuTrigger
                    className="p-2 flex place-items-center outline-none rounded-[50%] bg-gray-200 aria-expanded:bg-gray-300 hover:bg-gray-300"
                >
                    <IoIosNotificationsOutline className="size-5 rotate-45 fill-slate-700 stroke-slate-700 stroke-[20]" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="sm:w-[420px] w-screen h-max mt-[4px] p-4 text-slate-700">
                    <DropdownMenuLabel className="text-lg font-medium py-3">Thông báo</DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-gray-200 h-[.5px]" />
                    <DropdownMenuItem className="w-full text-base capitalize text-slate-900 hover:!bg-gray-200 rounded-lg cursor-pointer"></DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
                <DropdownMenuTrigger
                    className="outline-none"
                >
                    <Avatar className="size-[35px]">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>AV</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-screen sm:w-[420px] h-max mt-[4px] p-4 text-slate-700">
                    <DropdownMenuLabel className="text-sm font-bold py-3">Tài khoản</DropdownMenuLabel>
                    <DropdownMenuItem className="w-full text-base capitalize text-slate-900 hover:!bg-gray-200 rounded-lg cursor-pointer"></DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div >
    )
}

export default ActionIcons