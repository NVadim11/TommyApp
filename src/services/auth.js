// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    twitterAuth: builder.mutation({
      query: () => ({
        url: `/twitter/request-token`,
        method: "GET",
      }),
    }),
    twitterCallback: builder.mutation({
      query: (body) => ({
        url: `/twitter/access-token`,
        method: "POST",
        body: body,
      }),
    }),
    discordCallback: builder.mutation({
      query: (body) => ({
        url: "/auth/discord/callback",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useTwitterAuthMutation,
  useTwitterCallbackMutation,
  useDiscordCallbackMutation,
} = authApi;
