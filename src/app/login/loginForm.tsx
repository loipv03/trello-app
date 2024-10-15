"use client"
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useLoginMutation } from '@/app/redux/apiSlice';
import { toast } from 'sonner';
import { useEffect, useState } from 'react';
import { GrFormClose } from "react-icons/gr";
import { IError } from '@/app/types/errResponse';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
})


const LoginForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    const router = useRouter()

    const [apiErr, setApiErr] = useState<IError>()

    const [login, { isLoading, isSuccess, isError }] = useLoginMutation()

    const onSubmit = async (loginRequest: z.infer<typeof formSchema>) => {
        try {
            await login(loginRequest).unwrap()
        } catch (error) {
            const apiErr = error as IError
            setApiErr(apiErr)
        }
    }

    useEffect(() => {
        apiErr && isError &&
            toast.error("Login Failed", {
                description: <span className='text-white'>{apiErr.data?.message}</span>,
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
            toast.success("Login Success", {
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
            }) && router.push('/')

        !isLoading && reset()
    }, [apiErr, isError, isSuccess, isLoading])

    return (
        <div className='w-full h-max lg:p-10 lg:rounded-lg lg:border border-slate-200'>
            <div className='lg:block hidden w-full font-semibold text-3xl mb-[30px]'>Login</div>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full h-max grid grid-rows-3 gap-y-[10px] justify-items-center'>
                <div className='w-full h-max'>
                    <Input {...register('email')} placeholder="Email" className={`w-full h-[50px] border-none bg-slate-200 placeholder:text-xs focus-visible:ring-0  ${errors.email && 'border-solid border-red-500'}`} />
                    <p className='h-7 text-xs text-red-500 pt-2'>{errors.email && errors.email.message}</p>
                </div>
                <div className='w-full h-max'>
                    <Input {...register('password')} type='password' placeholder="Password" className={`w-full h-[50px] border-none bg-slate-200 placeholder:text-xs focus-visible:ring-0  ${errors.password && 'border-solid border-red-500'}`} />
                    <p className='h-7 text-xs text-red-500 pt-2'> {errors.password && errors.password.message}</p>
                </div>
                <Button type='submit' disabled={isLoading} className='w-full h-[50px]'>{isLoading ? "Loading..." : "Sign up"}</Button>
            </form>
        </div>
    )
}

export default LoginForm