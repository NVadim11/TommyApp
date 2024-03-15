// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


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
        method: "POST"
      })
    }),
    generateCode: builder.mutation({
      query: (wallet) => ({
        url: `/generate-referral-code/${wallet}`,
        method: "GET"
      }),
    }),
    getLeaderboard: builder.mutation({
      query: (wallet) => `/liderbord/${wallet}`,
      method: "GET"
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetUserByWalletIdMutation,
  useCheckCodeMutation,
  useCreateUserMutation,
  useGenerateCodeMutation,
  useGetLeaderboardMutation
} = phpApi;
