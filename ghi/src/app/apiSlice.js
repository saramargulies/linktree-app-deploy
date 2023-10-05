import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
        addLink: builder.mutation({
            query: ({ name, link }) => {
                const body = {
                    name: name,
                    link: link
                }
                return {
                    url: "/links",
                    method: "POST",
                    body,
                    credentials: "include"
                }
            },
            invalidatesTags: ["Links"],
        }),
        getLinksByUsername: builder.query({
            query: (username) => ({
              url: `links/${username}`,
              credentials: "include",
            }),
            providesTags: ["Links"],
          }),
    // verify argument names in updateLink are correct & correspond to models/SQL statements after merge
          updateLink: builder.mutation({
            query: ({ link_id, name, link, locked, counter }) => {
              const body = {
                name: name,
                link: link,
                locked: locked,
                counter: counter
              };
              return {
                url: `/links/${link_id}`,
                method: "PUT",
                body,
                credentials: "include",
              };
            },
            invalidatesTags: ["Links"],
          }),
          deleteLink: builder.mutation({
            query: (link_id) => ({
              url: `/links/${link_id}`,
              method: "DELETE",
              credentials: "include",
            }),
            invalidatesTags: ["Links"],
          }),
    })
})

export const {
    useSignUpMutation,
    useLoginMutation,
    useGetAccountQuery,
    useLogoutMutation,
    useAddLinkMutation,
    useGetLinksByUsernameQuery,
    useUpdateLinkMutation,
} = linktreeApi