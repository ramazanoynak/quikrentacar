import { VendorsTags } from "../tags";
import { injectApiEndpoints } from "../api";
import { transformResponse } from "./helpers";

const url = "/vendor";
const appendUrl = (segment) => `${url}/${segment}`;

const vendorsApis = injectApiEndpoints({
  endpoints: (builder) => ({
    createVendor: builder.mutation({
      query: (body) => ({
        url,
        method: "post",
        body,
      }),
      invalidatesTags: [VendorsTags],
    }),
    getVendors: builder.query({
      query: (filters = {}) => {
        let query = new URLSearchParams(filters);
        return {
          url: `${url}?${query}`,
          method: "get",
        };
      },
      providesTags: [VendorsTags],
    }),
    getVendorById: builder.query({
      query: (id) => ({
        url: `vendor/${id}`,
        method: "get",
      }),
    }),
    updateVendor: builder.mutation({
      query: ({ id, formData }) => ({
        url: appendUrl(id),
        method: "put",
        body: formData,
      }),
      invalidatesTags: [VendorsTags],
    }),
    deleteVendor: builder.mutation({
      query: (id) => ({
        url: appendUrl(id),
        method: "delete",
      }),
      invalidatesTags: [VendorsTags],
    }),
    getVendorsOptionsByOrdId: builder.query({
      query: () => ({
        url: appendUrl("org/options"),
        method: "get",
      }),
      transformResponse,
      invalidatesTags: [VendorsTags],
    }),
  }),
});

export const {
  useCreateVendorMutation,
  useGetVendorsQuery,
  useUpdateVendorMutation,
  useDeleteVendorMutation,
  useGetVendorByIdQuery,
} = vendorsApis;
