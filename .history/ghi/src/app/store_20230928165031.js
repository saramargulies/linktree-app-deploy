import { configureStore } from '@reduxjs/toolkit'
import { linktreeApi } from './apiSlice'

export const store = configureStore({
    reducer: {
        [linktreeApi.reducerPath]: linktreeApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(linktreeApi.middleware)
})

setupListeners(store.dispatch)
