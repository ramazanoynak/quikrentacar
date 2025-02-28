import { PaymentTags } from "../tags";
import { injectApiEndpoints } from "../api";

const url = "/stripe";
const appendUrl = (segment) => `${url}/${segment}`;

const stripeApis = injectApiEndpoints({
  endpoints: (builder) => ({
    createPaymentIntent: builder.mutation({
      query: (body) => ({
        url: appendUrl("create-payment-intent"),
        method: "post",
        body,
      }),
      invalidatesTags: [PaymentTags],
    }),
    saveTransaction: builder.mutation({
      query: (body) => ({
        url: appendUrl("save-transaction"),
        method: "post",
        body,
      }),
      invalidatesTags: [PaymentTags],
    }),
  }),
});

export const { useCreatePaymentIntentMutation, useSaveTransactionMutation } = stripeApis;
