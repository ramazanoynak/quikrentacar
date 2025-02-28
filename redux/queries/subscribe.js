import { SubscribeTags } from "../tags";
import { injectApiEndpoints } from "../api";

const url = "/subscribe";
const appendUrl = (segment) => `${url}/${segment}`;

const subscriptionApis = injectApiEndpoints({
  endpoints: (builder) => ({
    subscribe: builder.mutation({
      query: (body) => ({
        url,
        method: "post",
        body,
      }),
      invalidatesTags: [SubscribeTags],
    }),
    unsubscribe: builder.mutation({
      query: (body) => ({
        url: appendUrl("unsubscribe"),
        method: "post",
        body,
      }),
      invalidatesTags: [SubscribeTags],
    }),
  }),
});

export const { useSubscribeMutation, useUnsubscribeMutation } =
  subscriptionApis;
