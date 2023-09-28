import { createApi } from "@reduxjs/toolkit/dist/query";

export const linktreeApi = createApi({
    reducerPath: "linktreeApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://localhost:8000",
        credentials: "include"
    }),
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (body) => ({
                url: "/api/accounts",
                method: "POST",
                body,
                credentials: "include",
            }),
            invalidatesTags: ["Account"]
        }),
        login: builder.mutation({
            query: ({username, password}) => ({
                const body = new FormData()
                body.append("username", username)
            })
        })
    })
})