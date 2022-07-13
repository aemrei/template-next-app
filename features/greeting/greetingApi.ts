import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const greetingApi = createApi({
  reducerPath: "greetingApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    getName: builder.query<{ name: string }, string>({
      query: (name) => `/${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetNameQuery } = greetingApi;
