"use client"
import Logo from "@/app/components/auth/Logo"
import { useActivateUserQuery } from "@/redux/api/auth"
import { useParams, useRouter } from "next/navigation"
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useEffect, useState } from "react"
import { AiFillExclamationCircle } from "react-icons/ai"

const ActivateUser = () => {
    const [showDialog, setShowDialog] = useState<boolean>(false)

    const router = useRouter()

    const { token } = useParams<{ token: string }>()
    const { isLoading, isSuccess, isError } = useActivateUserQuery(token)

    useEffect(() => {
        isError && setShowDialog(isError)
        isSuccess && router.push('/')
    }, [isError, isSuccess, router])

    return (
        <div className="w-full h-screen grid lg:grid-rows-[50px_auto] grid-rows-[100px_auto] gap-y-[30px]">
            <Logo />
            <div className="w-full h-max text-center mt-[150px] space-y-2">
                <div className="text-3xl font-semibold">Activate account</div>
                <div className="text-base">{isLoading && 'Activating account...'}</div>
            </div>
            <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle className='mb-2 flex items-center gap-x-1 '>
                            <AiFillExclamationCircle className="fill-orange-500 size-7" />
                            Account activation failed
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            Account not found or has already been activated.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => router.push('/')} className="!text-white bg-slate-700 !border-none hover:bg-orange-500">Cancel</AlertDialogCancel>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}

export default ActivateUser