import { BookingTags } from "../tags";
import { injectApiEndpoints } from "../api";

const url = "/bookings";
const appendUrl = (segment) => `${url}/${segment}`;

const bookingApis = injectApiEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (body) => ({
        url,
        method: "post",
        body,
      }),
      invalidatesTags: [BookingTags]
    }),
    respondToBooking: builder.mutation({
      query: (query) => ({
        url: `${appendUrl("respond")}?${new URLSearchParams(query).toString()}`,
        method: "post",
      }),
      invalidatesTags: [BookingTags]
    })
  }),
});

export const { useCreateBookingMutation, useRespondToBookingMutation } = bookingApis;
