'use client'
import Link from "next/link"
import { CgTrello } from "react-icons/cg"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Settings, Users } from "lucide-react"
import { useGetAllWorkspaceQuery } from "@/redux/api/workspace"
import { IWorkspace } from "@/types/workspace"
import { usePathname } from "next/navigation"
import { Skeleton } from "@/components/ui/skeleton"
import { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"


export default function Sidebar({ className }: HTMLAttributes<HTMLDivElement>) {
    const { data, isSuccess } = useGetAllWorkspaceQuery()

    const pathName = usePathname()

    return (
        <div className={cn("w-[260px] h-full border pt-20 border-none", className)}>
            <div className="w-full">
                <div className="w-full">
                    <ul className="">
                        <li className="w-full text-sm text-slate-700 font-medium">
                            <p className="my-3 text-sm font-semibold text-slate-500 ">Các Không gian làm việc</p>
                            {
                                (data && isSuccess)
                                    ? <Accordion type="single" collapsible defaultValue={pathName === '/workspace' ? `/workspace/${data?.[0]._id}` : pathName} className="space-y-2">
                                        {
                                            data?.map((workspace: IWorkspace) =>
                                                <AccordionItem key={workspace._id} value={`/workspace/${workspace._id}`} className="border-transparent">
                                                    <AccordionTrigger className={`h-[35px] pl-2 py-[6px] pr-4 aria-expanded:bg-[#e9f2ff] aria-expanded:text-blue-600 aria-expanded:font-semibold rounded-md hover:bg-gray-300 hover:no-underline`}>
                                                        <div
                                                            className="size-full flex justify-start place-items-center gap-x-3 capitalize">
                                                            <div className="h-full aspect-square bg-gradient-to-b from-[#1f845a] to-[#4bce97] rounded-sm grid place-items-center text-white font-bold text-sm">
                                                                {
                                                                    String(workspace.name.at(0))
                                                                }
                                                            </div>
                                                            <span>{workspace.name}</span>
                                                        </div>
                                                    </AccordionTrigger>
                                                    <AccordionContent className="p-0">
                                                        <ul className="w-full mt-1 space-y-1">
                                                            <li className="w-full">
                                                                <Link href={`/workspace/${workspace._id}`} className={`size-full pl-10 pr-2 py-[6px] hover:bg-gray-300 rounded-md flex justify-start place-items-center gap-x-3 ${pathName === `/workspace/${workspace._id}` && "text-blue-600 bg-[#e9f2ff]"}`}>
                                                                    <CgTrello className="size-4" />
                                                                    <span>Bảng</span>
                                                                </Link>
                                                            </li>
                                                            <li className="w-full">
                                                                <Link href={"#"} className={`size-full pl-10 pr-2 py-[6px] hover:bg-gray-300 rounded-md flex justify-start place-items-center gap-x-3`}>
                                                                    <Users className="size-4" />
                                                                    <span>Thành viên</span>
                                                                </Link>
                                                            </li>
                                                            <li className="w-full">
                                                                <Link href={"#"} className={`size-full pl-10 pr-2 py-[6px] hover:bg-gray-300 rounded-md flex justify-start place-items-center gap-x-3`}>
                                                                    <Settings className="size-4" />
                                                                    <span>Cài đặt</span>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </AccordionContent>
                                                </AccordionItem>)
                                        }
                                    </Accordion>
                                    : <div className="space-y-2">
                                        <div className={"h-[35px] py-[6px] pr-4 rounded-md"}>
                                            <div className="size-full flex justify-start place-items-center gap-x-3">
                                                <Skeleton className="h-full aspect-square rounded-sm" />
                                                <Skeleton className="size-full" />
                                            </div>
                                        </div>
                                        <div className={"h-[35px] py-[6px] pr-4 rounded-md"}>
                                            <div className="size-full flex justify-start place-items-center gap-x-3">
                                                <Skeleton className="h-full aspect-square rounded-sm" />
                                                <Skeleton className="size-full" />
                                            </div>
                                        </div>
                                        <div className={"h-[35px] py-[6px] pr-4 rounded-md"}>
                                            <div className="size-full flex justify-start place-items-center gap-x-3">
                                                <Skeleton className="h-full aspect-square rounded-sm" />
                                                <Skeleton className="size-full" />
                                            </div>
                                        </div>
                                    </div>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
