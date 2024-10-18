import { ILogin, ISignup } from '@/app/types/user';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.NEXT_PUBLIC_API_URL

const apiSlice = createApi({
    reducerPath: 'User',
    tagTypes: ['User'],
    baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/api` }),
    endpoints: (builder) => ({
        signup: builder.mutation<{ message: string }, ISignup>({
            query: (user) => ({
                url: 'signup',
                method: "POST",
                body: user
            })
        }),

        login: builder.mutation<{ message: string }, ILogin>({
            query: (user) => ({
                url: 'login',
                method: "POST",
                credentials: 'include',
                body: user
            })
        }),

        logout: builder.mutation<{ message: string }, undefined>({
            query: () => ({
                url: 'logout',
                method: 'post',
                credentials: 'include',
            })
        })
    }),
});

export default apiSlice
export const { useSignupMutation, useLoginMutation, useLogoutMutation } = apiSlice;