// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


// Define a service using a base URL and expected endpoints
export const phpApi = createApi({
  reducerPath: "phpApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://admin.prodtest1.space/api" }),
  tagTypes: ["Php", "Php2"],
  endpoints: (builder) => ({
    getUserByWalletId: builder.mutation({
      query: (wallet_address) => ({
        url: `/users/${wallet_address}`,
        method: "GET",
      })
    }),
    checkCode: builder.mutation({
      query: (code) => ({
        url: `/check-referral-code/${code}`,
        method: "GET"
      }),
      invalidatesTags: "php"
    }),
    createUser: builder.mutation({
      query: (body) => ({
        url: "/users",
        method: "POST",
        body
      })
    }),
    generateCode: builder.mutation({
      query: (wallet) => ({
        url: `/generate-referral-code/${wallet}`,
        method: "GET"
      }),
      invalidatesTags: ["Php"]
    }),
    getLeaderboard: builder.query({
      query: (wallet) => `/liderbord/${wallet}`
    }),
    getInitialLeaderboard: builder.query({
      query: () => "/liders",
      providesTags: ["Php"]
    })
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetUserByWalletIdMutation,
  useCheckCodeMutation,
  useCreateUserMutation,
  useGenerateCodeMutation,
  useGetLeaderboardQuery,
  useGetInitialLeaderboardQuery
} = phpApi;