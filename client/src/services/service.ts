import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const CommonService = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  tagTypes: ["common", "dashboard"],
  endpoints: () => ({}),
});