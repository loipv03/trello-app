"use client"

import Header from "@/app/components/header/Header"
import { Sidebar } from "lucide-react"
import checkLogin from '@/lib/checkLogin'

const Dashboard = () => {
    return (
        <div>
            <Header />
            <Sidebar />
        </div>
    )
}

export default checkLogin(Dashboard)