import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const apiChamp = createApi({
  reducerPath: "apiChamp",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (builder) => ({
    getChampList: builder.query({
      query: () => `champions`,
    }),
  }),
});

export const { getChampList } = apiChamp.endpoints;
