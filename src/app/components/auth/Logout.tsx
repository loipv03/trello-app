"use client"
import { Button } from "@/components/ui/button"
import checkLogin from "@/lib/checkLogin"
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
        <div className={`w-[100px] h-[50px] space-y-5`}>
            <Button type='button' onClick={handleLogout} className="size-full bg-orange-500">Logout</Button>
            <Button type='button' onClick={() => router.push('/login')} className="size-full bg-orange-500">Login</Button>
            <Button type='button' onClick={() => router.push('/signup')} className="size-full bg-orange-500">Signup</Button>
        </div >
    )
}

export default checkLogin(Logout)