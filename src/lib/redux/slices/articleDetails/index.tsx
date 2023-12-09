/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiEndpoint } from '@/lib/services/ApiEndpoints';

interface Article {}

const newtoken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJzdWIiOiI1ZWZkYmYxNGZiNmJlNTAwMDFjYmMzNmMiLCJ1bmlxdWVfbmFtZSI6IjVlZmRiZjE0ZmI2YmU1MDAwMWNiYzM2YyIsImp0aSI6Ijg5MmM2OWZhLWYzNTUtNGQxMS1iOTYzLTM5YTAwMWI0YTMwZCIsImlhdCI6IjE3MDEyNTI2NTI0ODQiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjVlZmRiZjE0ZmI2YmU1MDAwMWNiYzM2YyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvaXNwZXJzaXN0ZW50IjoiZmFsc2UiLCJuYmYiOjE3MDEyNTI2NTIsImV4cCI6MTcwMTI1NjI1MiwiaXNzIjoiZmxveXgifQ.ilpuvxWXxoj7ijBYEMnR8QgAqxtM9zRuYX4PNsRGtAw';

const baseQuery = fetchBaseQuery({
  baseUrl: '/',
  prepareHeaders: (headers, { getState }) => {
    console.log('calling apis');
    headers.set('authorization', `Bearer ${newtoken}`);
    // }
    return headers;
  },
});

export const artcileDetails = createApi({
  reducerPath: 'artcileDetailsReducer',
  baseQuery: baseQuery,
  endpoints: builder => ({
    getArticleDetails: builder.query<any, any>({
      query: ({ userName, articlePuclicUrl }) =>
        `${ApiEndpoint.GetArticles}/${userName}/${articlePuclicUrl}`,
      transformResponse: (response: any) => response?.value?.data,
      providesTags: ['FollowStatus', 'LikeStatus'],
    }),
    getFollowStatus: builder.mutation<any, string>({
      query: userName => ({
        url: `${ApiEndpoint.Follow}/${userName}`,
        method: 'POST',
        body: {},
      }),
      invalidatesTags: ['FollowStatus'],
    }),
    getLikeStatus: builder.mutation<any, string>({
      query: userName => ({
        url: `${ApiEndpoint.Follow}/${userName}`,
        method: 'POST',
      }),
      invalidatesTags: ['LikeStatus'],
    }),
  }),
  tagTypes: ['FollowStatus', 'LikeStatus'],
});

export const { useGetArticleDetailsQuery, useGetFollowStatusMutation } = artcileDetails;