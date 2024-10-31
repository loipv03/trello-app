import Header from "@/app/components/header/Header"
import Sidebar from "@/app/components/sidebar/Sidebar"
import SidebarContent from "@/app/components/sidebar/SidebarContent"
import { CgTrello } from "react-icons/cg"
import { Toggle } from "@/components/ui/toggle"

const Dashboard = () => {
    return (
        <div className="w-full h-screen grid grid-rows-[max-content_auto]">
            <Header />
            <main className="max-w-screen-lg w-full h-full flex m-auto">
                <Sidebar className="pt-20 border-none">
                    <SidebarContent className="size-full flex flex-col">
                        <Toggle className="w-full h-[35px] data-[state=on]:bg-[#e9f2ff] hover:bg-[#e9f2ff]">
                            <div
                                className="size-full m-3 text-sm text-slate-700 font-medium cursor-pointer 
                            flex justify-start place-items-center gap-x-3 hover:rounded-md"
                            >
                                <CgTrello className="" />
                                <span>Bảng</span>
                            </div>
                        </Toggle>
                        <div className="w-full h-[1px] bg-gray-300 my-3" />
                        <div className="mt-3">
                            <div className="pl-3 mb-3 text-xs font-semibold text-slate-500 ">Các Không gian làm việc</div>
                            <div className="w-full h-[50px] p-3 space-y-2 text-slate-600 text-sm font-medium cursor-pointer hover:rounded-md hover:bg-[#e9f2ff]">
                                <span>Lập trình web</span>
                            </div>
                        </div>
                    </SidebarContent>
                </Sidebar>
                <div className="size-full">

                </div>
            </main>
        </div>
    )
}

export default Dashboard