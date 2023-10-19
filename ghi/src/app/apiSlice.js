import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const linktreeApi = createApi({
  reducerPath: "linktreeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (body) => ({
        url: "/accounts",
        method: "POST",
        body,
        credentials: "include",
      }),
      invalidatesTags: ["Account"],
    }),
    login: builder.mutation({
      query: ({ username, password }) => {
        const body = new FormData();
        body.append("username", username);
        body.append("password", password);
        return {
          url: "/token",
          method: "POST",
          body,
          credentials: "include",
        };
      },
      invalidatesTags: ["Account"],
    }),
    getAccount: builder.query({
      query: () => ({
        url: `/token`,
        credentials: "include",
      }),
      transformResponse: (response) => (response ? response.account : null),
      providesTags: ["Account"],
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
          link: link,
          counter: 0,
          locked: false,
        };
        console.log(body);
        return {
          url: "/links",
          method: "POST",
          body,
          credentials: "include",
        };
      },
      invalidatesTags: ["Links"],
    }),
    getLinksByUserId: builder.query({
      query: (user_id) => ({
        url: `links`,
        credentials: "include",
      }),
      providesTags: ["Links"],
    }),
    getLinksByUsername: builder.query({
      query: (username) => ({
        url: `links/${username}`,
        credentials: "include",
      }),
    }),
    updateLink: builder.mutation({
      query: ({ link_id, name, link, locked, counter }) => {
        const body = {
          name: name,
          link: link,
          counter: counter,
          locked: locked,
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
    getTreesByUsername: builder.query({
      query: (username) => ({
        url: `trees/${username}`,
        // credentials: "include",
      }),
      providesTags: ["Trees"],
    }),
    updateTree: builder.mutation({
      query: ({ username }) => {
        return {
          url: `/trees/${username}`,
          method: "PUT",
          credentials: "include",
        };
      },
      invalidatesTags: ["Trees"],
    }),
  }),
});

export const {
  useGetLinksByUsernameQuery,
  useSignupMutation,
  useLoginMutation,
  useGetAccountQuery,
  useLogoutMutation,
  useAddLinkMutation,
  useGetLinksByUserIdQuery,
  useUpdateLinkMutation,
  useGetTreesByUsernameQuery,
  useUpdateTreeMutation,
} = linktreeApi;
