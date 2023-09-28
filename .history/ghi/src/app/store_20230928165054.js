import { configureStore } from '@reduxjs/toolkit'
import { linktreeApi } from './apiSlice'
import { setupListeners } from '@reduxjs/toolkit/'

export const store = configureStore({
    reducer: {
        [linktreeApi.reducerPath]: linktreeApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(linktreeApi.middleware)
})

setupListeners(store.dispatch)
