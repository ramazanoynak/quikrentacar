import { LocationTags } from "../tags";
import { injectApiEndpoints } from "../api";

const url = "/locations";
const appendUrl = (segment) => `${url}/${segment}`;

const LocationApis = injectApiEndpoints({
  endpoints: (builder) => ({
    getLocationSuggestions: builder.query({
      query: (searchTerm) => ({
        url: `${appendUrl("search")}?searchTerm=${searchTerm}`,
        method: "get",
      }),
      invalidatesTags: [LocationTags],
    }),
  }),
});

export const { useGetLocationSuggestionsQuery } = LocationApis;
