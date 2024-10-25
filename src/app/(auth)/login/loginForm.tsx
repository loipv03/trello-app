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
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import checkLogin from "@/lib/hocs/checkLogin";

const formSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
})


const LoginForm = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm<z.infer<typeof formSchema>>({
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
        <div className='w-full h-max lg:p-10 lg:rounded-lg lg:border border-slate-200'>
            <div className='lg:block hidden w-full font-semibold text-4xl mb-[30px] text-center'>Login</div>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full h-max'>
                <fieldset disabled={isLoading} className="w-full h-max grid grid-cols-1 gap-y-4">
                    <div className='w-full h-max'>
                        <Input
                            {...register('email')} placeholder="Email"
                            className={`w-full h-[50px] border-none bg-slate-200 placeholder:text-xs focus-visible:ring-0  ${errors.email && 'border-solid border-red-500'}`}
                        />
                        <p className={`text-xs text-red-500  transition-all duration-500 ${errors.email ? 'max-h-max h-4 my-1' : 'h-0'}`}>{errors.email && errors.email.message}</p>
                    </div>
                    <div className='w-full h-max'>
                        <div className="w-full h-max relative">
                            <Input
                                {...register('password')} type={showPassword ? 'text' : 'password'} placeholder="Password"
                                className={`w-full h-[50px] pr-10 border-none bg-slate-200 placeholder:text-xs focus-visible:ring-0  ${errors.password && 'border-solid border-red-500'}`}
                            />
                            {watch('password') && (
                                <>
                                    <AiOutlineEye onClick={() => setShowPassword(!showPassword)} className={`fill-slate-500 cursor-pointer size-6 absolute top-[50%] right-3 translate-y-[-50%] ${!showPassword && 'hidden'}  `} />
                                    <AiOutlineEyeInvisible onClick={() => setShowPassword(!showPassword)} className={`fill-slate-500 cursor-pointer size-6 absolute top-[50%] right-3 translate-y-[-50%] ${showPassword && 'hidden'}  `} />
                                </>
                            )}
                        </div>
                        <p className={`text-xs text-red-500 transition-all duration-500 ${errors.password ? 'max-h-max h-4 my-1' : 'h-0'}`}>{errors.password && errors.password.message}</p>
                    </div>
                    <Button type='submit' className='w-full h-[50px] mb-2'>{isLoading ? "Loading..." : "Login"}</Button>
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