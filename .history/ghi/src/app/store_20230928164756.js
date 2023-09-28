import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        [linktreeApi.reducerPath]: linktreeApi.reducer
    },
})

