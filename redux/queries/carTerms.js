import { CarTags } from "../tags";
import { injectApiEndpoints } from "../api";

const url = "/carTerms";
const appendUrl = (segment) => `${url}/${segment}`;

const carTermsApi = injectApiEndpoints({
  endpoints: (builder) => ({
    getCarTermsBySupplier: builder.query({
      query: (id) => ({
        url: `${appendUrl("supplier")}/${id}`,
        method: "get",
      }),
      providesTags: [CarTags],
    }),
  }),
});

export const { useGetCarTermsBySupplierQuery } = carTermsApi;
