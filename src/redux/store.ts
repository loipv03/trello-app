import authApi, { authReducer, authReducerPath } from '@/redux/api/auth';
import workspaceApi, { workspaceReducer, workspaceReducerPath } from '@/redux/api/workspace';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        [authReducerPath]: authReducer,
        [workspaceReducerPath]: workspaceReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware, workspaceApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;