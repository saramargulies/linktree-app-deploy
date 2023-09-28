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
            query: ({ username, password }) => {
                const body = new FormData()
                body.append("username", username)
                body.append("password", password)
                return {
                    url: "/token",
                    method: "POST",
                    body,
                    credentials: "include",
                }
            },
            invalidatesTags: ["Account"]
        }),
        getAccount: builder.query({
            query: () => ({
                url: '/token',
                credentials: "include",
            }),
            transformResponse: (response) => (response ? response.account : null),
            providesTags: ["Account"]
        }),
        logout: builder.mutation({
            query: () => ({
              url: "/token",
              method: "DELETE",
              credentials: "include",
            }),
            invalidatesTags: ["Account"],
          }),
    })
})