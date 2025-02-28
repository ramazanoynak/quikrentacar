import { AuthTags } from "../tags";
import { injectApiEndpoints } from "../api";

const url = "/auth";
const appendUrl = (segment) => `${url}/${segment}`;

const authApis = injectApiEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: appendUrl("register"),
        method: "post",
        body,
      }),
      invalidatesTags: [AuthTags],
    }),
    login: builder.mutation({
      query: (body) => ({
        url: appendUrl("login"),
        method: "post",
        body,
      }),
      invalidatesTags: [AuthTags],
    }),
    forgetPassword: builder.mutation({
      query: (body) => ({
        url: appendUrl("forgot-password"),
        method: "post",
        body,
      }),
      invalidatesTags: [AuthTags],
    }),
    resetPassword: builder.mutation({
      query: ({ token, ...body }) => ({
        url: `${url}/reset-password?token=${token}`,
        method: "post",
        body,
      }),
      invalidatesTags: [AuthTags],
    }),
    verifyEmail: builder.mutation({
      query: (token) => ({
        url: `${url}/verify-email?token=${token}`,
        method: "post",
      }),
      invalidatesTags: [AuthTags],
    })
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
  useVerifyEmailMutation
} = authApis;
