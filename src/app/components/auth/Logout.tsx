"use client"
import { Button } from "@/components/ui/button"
import { useLogoutMutation } from "@/redux/api/auth"
import { useRouter } from "next/navigation"
import { useCallback } from "react"

const Logout = () => {
    const [logout] = useLogoutMutation()

    const router = useRouter()

    const handleLogout = useCallback(async () => {
        await logout()
    }, [logout])

    return (
        <div className={`w-[100px] h-[50px] `}>
            <Button type='button' onClick={handleLogout} className="size-full bg-orange-500">Logout</Button>
        </div >
    )
}

export default Logout