import { Currency } from "../tags";
import { injectApiEndpoints } from "../api";

const url = "/currency";
const appendUrl = (segment) => `${url}/${segment}`;

const currencyApis = injectApiEndpoints({
  endpoints: (builder) => ({
    getCurrencies: builder.query({
      query: () => ({
        url,
        method: "get",
      }),
      providesTags: [Currency],
    }),
  }),
});

export const { useGetCurrenciesQuery } = currencyApis;
