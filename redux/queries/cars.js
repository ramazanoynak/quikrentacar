import { CarTags } from "../tags";
import { injectApiEndpoints } from "../api";

const url = "/cars";
const appendUrl = (segment) => `${url}/${segment}`;

const carApis = injectApiEndpoints({
  endpoints: (builder) => ({
    searchCars: builder.query({
      query: (query) => ({
        url: `${url}/search?${new URLSearchParams(query).toString()}`,
        method: "get",
      }),
      providesTags: [CarTags],
    }),
    getCar: builder.query({
      query: (id) => ({
        url: `${appendUrl(id)}`,
        method: "get",
      }),
      providesTags: [CarTags],
    }),
  }),
});

export const { useSearchCarsQuery, useGetCarQuery } = carApis;
