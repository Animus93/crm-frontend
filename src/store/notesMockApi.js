import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const notesMockApi = createApi({
  reducerPath: "notes",
  tagTypes: ["notesTag"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://643d0ea96afd66da6aeb38b3.mockapi.io/crm/",
  }),
  endpoints: (builder) => ({
    getNotes: builder.query({
      query: () => "/notes",
      providesTags: ["notesTag"],
    }),
    addNote: builder.mutation({
      query: (data) => ({
        url: "/notes",
        method: "Post",
        body: data,
      }),
      invalidatesTags: ["notesTag"],
    }),
    updateNote: builder.mutation({
      query: (data) => ({
        url: `/notes/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["notesTag"],
    }),
    deleteNote: builder.mutation({
      query: (id) => ({
        url: `/notes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["notesTag"],
    }),
  }),
});

export const { useGetNotesQuery, useAddNoteMutation, useUpdateNoteMutation, useDeleteNoteMutation } =
  notesMockApi;
