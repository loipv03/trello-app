"use client"
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useSignupMutation } from '@/app/redux/apiSlices/auth';
import { toast } from 'sonner';
import { useEffect, useState } from 'react';
import { GrFormClose } from "react-icons/gr";
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { IError } from '@/app/types/errResponse';

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
    const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    const [signup, { isLoading, isSuccess, isError, error }] = useSignupMutation()
    const [apiErr, setApiErr] = useState<IError>()

    const onSubmit = async (signupRequest: z.infer<typeof formSchema>) => {
        await signup(signupRequest)
    }

    useEffect(() => {
        isError && setApiErr(error as IError)

        isError &&
            toast.error("Sign Up Failed", {
                description: <span className='text-white'>{apiErr?.data.message === 'Duplicate' ? 'Username or email already exists' : apiErr?.data.message}</span>,
                position: 'top-right',
                style: {
                    background: '#ff0000',
                    color: '#ffffff',
                },
                cancelButtonStyle: {
                    backgroundColor: 'transparent'
                },
                cancel: {
                    label: <GrFormClose className='size-6' />,
                    onClick: () => undefined,
                },
            })

        isSuccess &&
            toast.success("Sign Up Success", {
                description: <span className='text-white'>Please check your email to activate your account</span>,
                position: 'top-right',
                style: {
                    background: '#008000',
                    color: '#ffffff',
                },
                cancelButtonStyle: {
                    backgroundColor: 'transparent'
                },
                cancel: {
                    label: <GrFormClose className='size-6' />,
                    onClick: () => undefined,
                },
            })

        if (!isLoading) {
            reset()
        }

    }, [apiErr, isError, isSuccess, isLoading])
    return (
        <div className='w-full h-max lg:p-10 lg:rounded-lg lg:border border-slate-200'>
            <div className='lg:block hidden w-full font-semibold text-3xl mb-[30px]'>Sign Up</div>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full h-max grid grid-rows-5 gap-y-[15px] justify-items-center'>
                <div className='w-full h-max'>
                    <Input {...register('name')} placeholder="Name" className={`w-full h-[50px] border border-none bg-slate-200 placeholder:text-xs focus-visible:ring-0  ${errors.name && 'border-solid border-red-500'}`} />
                    <p className='h-7 text-xs text-red-500 pt-2'>{errors.name && errors.name.message}</p>
                </div>
                <div className='w-full h-max'>
                    <Input {...register('email')} placeholder="Email" className={`w-full h-[50px] border-none bg-slate-200 placeholder:text-xs focus-visible:ring-0  ${errors.email && 'border-solid border-red-500'}`} />
                    <p className='h-7 text-xs text-red-500 pt-2'>{errors.email && errors.email.message}</p>
                </div>
                <div className='w-full h-max'>
                    <Input {...register('password')} placeholder="Password" type='password' className={`w-full h-[50px] border-none bg-slate-200 placeholder:text-xs focus-visible:ring-0  ${errors.password && 'border-solid border-red-500'}`} />
                    <p className='h-7 text-xs text-red-500 pt-2'>{errors.password && errors.password.message}</p>
                </div>
                <div className='w-full h-max'>
                    <Input {...register('confirmPassword')} type='password' placeholder="ConfirmPassword" className={`w-full h-[50px] border-none bg-slate-200 placeholder:text-xs focus-visible:ring-0  ${errors.confirmPassword && 'border-solid border-red-500'}`} />
                    <p className='h-7 text-xs text-red-500 pt-2'>{errors.confirmPassword && errors.confirmPassword.message}</p>
                </div>
                <Button type='submit' disabled={isLoading} className='w-full h-[50px]'>{isLoading ? "Loading..." : "Sign up"}</Button>
            </form>
        </div>
    )
}

export default SignupForm