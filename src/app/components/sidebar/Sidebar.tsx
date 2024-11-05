'use client'

import Link from "next/link"
// import { usePathname } from "next/navigation"
import { CgTrello } from "react-icons/cg"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Settings, Users } from "lucide-react"


export default function Sidebar() {
    return (
        <div className="w-[260px] h-full border pt-20 border-none">
            <div className="size-full">
                <div className="w-full">
                    <span className="text-sm font-semibold text-slate-500 ">Các Không gian làm việc</span>
                    <ul className="my-3">
                        <li className="w-fulltext-sm text-slate-700 font-medium">
                            <Accordion type="multiple" className="space-y-2">
                                <AccordionItem value="item-1" className="border-transparent">
                                    <AccordionTrigger aria-expanded className={`h-[35px] pl-2 py-[6px] pr-4 aria-expanded:bg-[#e9f2ff] aria-expanded:text-blue-600 aria-expanded:font-semibold rounded-md hover:bg-gray-300 hover:no-underline`}>
                                        <div
                                            className={`size-full flex justify-start place-items-center 
                                                gap-x-3`}>
                                            <div className="h-full aspect-square bg-gradient-to-b from-[#1f845a] to-[#4bce97] rounded-sm grid place-items-center text-white font-bold text-sm">
                                                {
                                                    String("Lập trình web").at(0)
                                                }
                                            </div>
                                            <span>Lập trình web</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="p-0">
                                        <ul className="w-full mt-1 space-y-1">
                                            <li className="w-full">
                                                <Link href={"#"} className={`size-full pl-10 pr-2 py-[6px] hover:bg-gray-300 rounded-md flex justify-start place-items-center gap-x-3`}>
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
                                </AccordionItem>
                                <AccordionItem value="item-2" className="border-transparent">
                                    <AccordionTrigger className={`h-[35px] pl-2 py-[6px] pr-4 aria-expanded:bg-[#e9f2ff] aria-expanded:text-blue-600 aria-expanded:font-semibold rounded-md hover:bg-gray-300 hover:no-underline`}>
                                        <div
                                            className={`size-full flex justify-start place-items-center 
                                                gap-x-3`}>
                                            <div className="h-full aspect-square bg-gradient-to-b from-[#1f845a] to-[#4bce97] rounded-sm grid place-items-center text-white font-bold text-sm">
                                                {
                                                    String("Xây dựng API").at(0)
                                                }
                                            </div>
                                            <span>Xây dựng API</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="p-0">
                                        <ul className="w-full mt-1 space-y-1">
                                            <li className="w-full">
                                                <Link href={"#"} className={`size-full pl-10 pr-2 py-[6px] hover:bg-gray-300 rounded-md flex justify-start place-items-center gap-x-3`}>
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
                                </AccordionItem>
                            </Accordion>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
