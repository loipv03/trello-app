"use client"
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { IError } from '@/app/types/errResponse';
import { useSignupMutation } from '@/redux/api/auth';
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { AiFillExclamationCircle, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
    name: z.string().min(3, 'User name must be at least 3 characters').max(50, 'Username cannot exceed 50 characters'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    confirmPassword: z.string().min(6, 'Confirm password must be at least 6 characters long'),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
});

const SignupForm = () => {
    const [showDialog, setShowDialog] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [showConfirmPassword, setConfirmShowPassword] = useState<boolean>(false)

    const router = useRouter()

    const { register, handleSubmit, formState: { errors }, watch } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    const [signup, { isLoading, error }] = useSignupMutation()

    const onSubmit = async (signupRequest: z.infer<typeof formSchema>) => {
        try {
            await signup(signupRequest).unwrap()
            router.push('/activate')
        } catch (error) {
            setShowDialog(true)
        }
    }

    return (
        <div className='w-full h-max lg:p-10 lg:rounded-lg lg:border border-slate-200'>
            <div className='lg:block hidden w-full font-bold text-4xl mb-[30px] text-center'>Sign Up</div>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full h-max'>
                <fieldset disabled={isLoading} className='w-full h-max grid grid-cols-1 gap-y-4'>
                    <div className='w-full h-max'>
                        <Input
                            {...register('name')} placeholder="Name"
                            className={`w-full h-[50px] border border-none bg-slate-200 placeholder:text-xs focus-visible:ring-0  ${errors.name && 'border-solid border-red-500'}`}
                        />
                        <p className={`text-xs text-red-500 transition-all duration-500 ${errors.name ? 'max-h-max h-4 my-1' : 'h-0'}`}>
                            {errors.name && errors.name.message}
                        </p>
                    </div>
                    <div className='w-full h-max'>
                        <Input
                            {...register('email')} placeholder="Email"
                            className={`w-full h-[50px] border-none bg-slate-200 placeholder:text-xs focus-visible:ring-0  ${errors.email && 'border-solid border-red-500'}`}
                        />
                        <p className={`text-xs text-red-500 transition-all duration-500 ${errors.email ? 'max-h-max h-4 my-1' : 'h-0'}`}>
                            {errors.email && errors.email.message}
                        </p>
                    </div>
                    <div className='w-full h-max'>
                        <div className="w-full h-max relative">
                            <Input
                                {...register('password')} placeholder="Password" type={showPassword ? 'text' : 'password'}
                                className={`w-full h-[50px] pr-10 border-none bg-slate-200 placeholder:text-xs focus-visible:ring-0  ${errors.password && 'border-solid border-red-500'}`}
                            />
                            {watch('password') && (
                                <>
                                    <AiOutlineEye onClick={() => setShowPassword(!showPassword)} className={`fill-slate-500 cursor-pointer size-6 absolute top-[50%] right-3 translate-y-[-50%] ${!showPassword && 'hidden'}  `} />
                                    <AiOutlineEyeInvisible onClick={() => setShowPassword(!showPassword)} className={`fill-slate-500 cursor-pointer size-6 absolute top-[50%] right-3 translate-y-[-50%] ${showPassword && 'hidden'}  `} />
                                </>
                            )}
                        </div>
                        <p className={`text-xs text-red-500 transition-all  duration-500 ${errors.password ? 'max-h-max h-4 my-1' : 'h-0'}`}>
                            {errors.password && errors.password.message}
                        </p>
                    </div>
                    <div className='w-full h-max'>
                        <div className="w-full h-max relative">
                            <Input
                                {...register('confirmPassword')} placeholder="Confirm Password" type={showConfirmPassword ? 'text' : 'password'}
                                className={`w-full h-[50px] pr-10 border-none bg-slate-200 placeholder:text-xs focus-visible:ring-0  ${errors.password && 'border-solid border-red-500'}`}
                            />
                            {watch('confirmPassword') && (
                                <>
                                    <AiOutlineEye onClick={() => setConfirmShowPassword(!showConfirmPassword)} className={`fill-slate-500 cursor-pointer size-6 absolute top-[50%] right-3 translate-y-[-50%] ${!showConfirmPassword && 'hidden'}  `} />
                                    <AiOutlineEyeInvisible onClick={() => setConfirmShowPassword(!showConfirmPassword)} className={`fill-slate-500 cursor-pointer size-6 absolute top-[50%] right-3 translate-y-[-50%] ${showConfirmPassword && 'hidden'}  `} />
                                </>
                            )}
                        </div>
                        <p className={`text-xs text-red-500 transition-all duration-500 ${errors.confirmPassword ? 'max-h-max h-4 my-1' : 'h-0'}`}>
                            {errors.confirmPassword && errors.confirmPassword.message}
                        </p>
                    </div>
                    <Button type='submit' className='w-full h-[50px]'>{isLoading ? "Loading..." : "Sign up"}</Button>
                </fieldset>
            </form>
            <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle className='mb-2 flex items-center gap-x-1 '>
                            <AiFillExclamationCircle className="fill-orange-500 size-7" />
                            Account signup failed
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            {(error as IError)?.data.errors?.join(", ")}
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

export default SignupForm