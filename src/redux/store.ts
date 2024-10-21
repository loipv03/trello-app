import authApi, { authReducer, authReducerPath } from '@/redux/api/auth';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        [authReducerPath]: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;