import { UsersTags } from "../tags";
import { injectApiEndpoints } from "../api";
import { transformResponse } from "./helpers";

const url = "/users";
const appendUrl = (segment) => `${url}/${segment}`;

const usersApis = injectApiEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (body) => ({
        url,
        method: "post",
        body,
      }),
      invalidatesTags: [UsersTags],
    }),
    getUsers: builder.query({
      query: (filters = {}) => {
        let query = ''
        if (filters.name) query = `name=${filters.name}&`
        if (filters.role) query += `role=${filters.role}&`
        if (filters.paymentStatus) query += `eligibleForServices=${filters.paymentStatus}&`
        if (filters.domain) query += `domain=${filters.domain}&`
        if (filters.page) query += `page=${filters.page}`
        if (filters.limit) query += `limit=${filters.limit}`
        return {
          url: `${url}?${query}`,
          method: "get",
        }
      },
      transformResponse: transformResponse,
      providesTags: [UsersTags],
    }),
    getUserById: builder.query({
      query: (id) => ({
        url: `users/${id}`,
        method: "get",
      }),
      transformResponse,
    }),
    updateUser: builder.mutation({
      query: ({ id, ...body }) => ({
        url: appendUrl(id),
        method: "put",
        body,
      }),
      invalidatesTags: [UsersTags],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: appendUrl(id),
        method: "delete",
      }),
      invalidatesTags: [UsersTags],
    }),
    getUsersOptionsByOrdId: builder.query({
      query: () => ({
        url: appendUrl("org/options"),
        method: "get",
      }),
      transformResponse,
      invalidatesTags: [UsersTags],
    }),
    changePassword: builder.mutation({
      query: (body) => ({
        url: appendUrl("profile/change-password"),
        method: "patch",
        body,
      }),
    }),
    updateUser: builder.mutation({
      query: ({ id, ...body }) => ({
        url: appendUrl(id),
        method: "put",
        body,
      }),
      invalidatesTags: [UsersTags],
    }),
    adminUpdateUser: builder.mutation({
      query: ({ id, formData }) => ({
        url: appendUrl(`admin/edit/${id}`),
        method: "put",
        body: formData,
      }),
      invalidatesTags: [UsersTags],
    }),

    sendResetLink: builder.mutation({
      query: (body) => ({
        url: "/user/send-reset-link",
        method: "post",
        body,
      }),
    }),
    updatePasswordByAdmin: builder.mutation({
      query: (body) => ({
        url: "/user/admin-update-pass",
        method: "post",
        body,
      }),
    }),
    makeMemberPaid: builder.mutation({
      query: (id) => ({
        url: appendUrl(`make-member-paid/${id}`),
        method: "post",
      }),
      invalidatesTags: [UsersTags],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useGetUsersQuery,
  useUpdateUserMutation,
  useAdminUpdateUserMutation,
  useDeleteUserMutation,
  useGetUserByIdQuery,
  useUpdatePasswordByAdminMutation,
  useSendResetLinkMutation,
  useMakeMemberPaidMutation
} = usersApis;
