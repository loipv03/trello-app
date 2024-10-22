import { ILogin, ISignup } from '@/app/types/user';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/api`

interface IAuthRes {
    message: string
}

const authApi = createApi({
    reducerPath: 'user',
    tagTypes: ['User'],
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        activateUser: builder.query<{ message: string }, string>({
            query: (token) => `activate/${token}`
        }),

        signup: builder.mutation<IAuthRes, ISignup>({
            query: (user) => ({
                url: 'signup',
                method: "POST",
                body: user
            }),
            invalidatesTags: ['User']
        }),

        login: builder.mutation<IAuthRes, ILogin>({
            query: (user) => ({
                url: 'login',
                method: "POST",
                credentials: 'include',
                body: user
            }),
            invalidatesTags: ['User']
        }),

        logout: builder.mutation<IAuthRes, void>({
            query: () => ({
                url: 'logout',
                method: 'post',
                credentials: 'include',
            }),
            invalidatesTags: ['User']
        }),
    }),
});

export default authApi
export const authReducer = authApi.reducer
export const authReducerPath = authApi.reducerPath
export const { useSignupMutation, useLoginMutation, useLogoutMutation, useActivateUserQuery } = authApi;