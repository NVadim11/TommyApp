// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// Define a service using a base URL and expected endpoints
export const phpApi = createApi({
  reducerPath: "phpApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://admin.prodtest1.space/api" }),
  tagTypes: ["Php"],
  endpoints: (builder) => ({
    getUserByWalletId: builder.query({
      query: (wallet_address) => ({
        url: `/users/${wallet_address}`,
        method: "GET",
      }),
      providesTags: ["Php"],
    }),
    getUserByWalletIdInit: builder.mutation({
      query: (wallet_address) => ({
        url: `/users/${wallet_address}`,
        method: "GET",
      }),
      providesTags: ["Php"]
    }),
    checkCode: builder.mutation({
      query: (code) => ({
        url: `/check-referral-code/${code}`,
        method: "GET",
      }),
      invalidatesTags: ["Php"],
    }),
    generateCode: builder.mutation({
      query: (wallet) => ({
        url: `/generate-referral-code/${wallet}`,
        method: "GET",
      }),
    }),
    getLeaderboard: builder.mutation({ // mutation => querry
      query: (wallet) => `/liderbord/${wallet}`,
      method: "GET",
    }),
    passTask: builder.mutation({
      query: (body) => ({
        url: "/pass-task",
        method: "POST",
        body,
      }),
    }),
    updateBalance: builder.mutation({
      query: (body) => ({
        url: "/update-balance",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Php"],
    }),
    increaseBalance: builder.mutation({
      query: (body) => ({
        url: "/increase-balance",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Php"],
    }),
  }),
});

export const {
  useGetUserByWalletIdInitMutation,
  useGetUserByWalletIdQuery,
  useCheckCodeMutation,
  useGenerateCodeMutation,
  useGetLeaderboardMutation,
  usePassTaskMutation,
  useUpdateBalanceMutation,
  useIncreaseBalanceMutation,
} = phpApi;
