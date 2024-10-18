"use client"

import { useLogoutMutation } from "@/app/redux/apiSlices/auth"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const Logout = () => {
    const [logout, { isSuccess }] = useLogoutMutation()
    const router = useRouter()

    const handleLogout = async () => {
        await logout(undefined).unwrap()
    }

    useEffect(() => {
        if (isSuccess) {
            router.push('/login')
        }
    }, [isSuccess])

    return (
        <div className={`w-[100px] h-[50px] `}>
            <Button type='button' onClick={handleLogout} className="size-full bg-orange-500">Logout</Button>
        </div >
    )
}

export default Logout