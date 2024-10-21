"use client"
import { AiFillExclamationCircle } from "react-icons/ai";
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLoginMutation } from '@/redux/api/auth';
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
})


const LoginForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    const router = useRouter()

    const [login, { isLoading }] = useLoginMutation()
    const [showDialog, setShowDialog] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const onSubmit = async (loginRequest: z.infer<typeof formSchema>) => {
        try {
            await login(loginRequest).unwrap()
            router.push('/');
        } catch (error) {
            setShowDialog(true)
        }
    }

    return (
        <div className='w-full h-full lg:p-10 lg:rounded-lg lg:border border-slate-200'>
            <div className='lg:block hidden w-full font-semibold text-4xl mb-[30px] text-center'>Login</div>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full h-max'>
                <fieldset disabled={isLoading} className="w-full h-max grid grid-cols-1 gap-y-4">
                    <div className='w-full h-max'>
                        <Input {...register('email')} placeholder="Email" className={`w-full h-[50px] border-none bg-slate-200 placeholder:text-xs focus-visible:ring-0  ${errors.email && 'border-solid border-red-500'}`} />
                        <p className='min-h-7 text-xs text-red-500 pt-2'>{errors.email && errors.email.message}</p>
                    </div>
                    <div className='w-full h-max'>
                        <Input {...register('password')} type={showPassword ? 'text' : 'password'} placeholder="Password" className={`w-full h-[50px] border-none bg-slate-200 placeholder:text-xs focus-visible:ring-0  ${errors.password && 'border-solid border-red-500'}`} />
                        <div className="flex items-center space-x-1 py-3">
                            <Checkbox
                                id="showPassword"
                                className="size-4"
                                checked={showPassword}
                                onCheckedChange={(checked: boolean) => setShowPassword(checked)}
                            />
                            <label
                                htmlFor="showPassword "
                                className="text-xs cursor-pointer"
                            >
                                Show Password
                            </label>
                        </div>
                        <p className='min-h-7 text-xs text-red-500'>{errors.password && errors.password.message}</p>
                    </div>
                    <Button type='submit' className='w-full h-[50px] hover:bg-orange-500'>{isLoading ? "Loading..." : "Login"}</Button>
                </fieldset>
            </form>
            <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle className='mb-2 flex items-center gap-x-1 '>
                            <AiFillExclamationCircle className="fill-orange-500 size-7" />
                            Account does not exist
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            The email you entered is not associated with any account or the password is incorrect. Please try again.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel className="!text-white bg-slate-700 border-none hover:bg-orange-500 ">Cancel</AlertDialogCancel>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}

export default LoginForm