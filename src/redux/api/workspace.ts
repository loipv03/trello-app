import { IOneIWorkspace, IWorkspace } from '@/types/workspace';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/api`

const workspaceApi = createApi({
    reducerPath: 'wporkspace',
    tagTypes: ['Workspace'],
    baseQuery: fetchBaseQuery({
        baseUrl,
        credentials: 'include',
    }),
    endpoints: (builder) => ({
        getAllWorkspace: builder.query<IWorkspace[], void>({
            query: () => 'workspaces',
            providesTags: ['Workspace']
        }),

        getOneWorkspace: builder.query<IOneIWorkspace, string>({
            query: (id) => `workspace/${id}`,
            providesTags: ['Workspace']
        }),

    }),
});

export default workspaceApi
export const workspaceReducer = workspaceApi.reducer
export const workspaceReducerPath = workspaceApi.reducerPath
export const { useGetAllWorkspaceQuery, useGetOneWorkspaceQuery } = workspaceApi;
