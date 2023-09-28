import { createApi } from "@reduxjs/toolkit/dist/query";

export const linktreeApi = createApi({
    reducerPath: "linktreeApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://localhost:8000",
        credentials: "include"
    })
    transformResponse: (Response)
})