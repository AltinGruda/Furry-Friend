import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { bearerToken } from "../pages/SearchParams";

export const petApi = createApi({
  reducerPath: "petApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.petfinder.com/v2/",
  }),
  endpoints: (builder) => ({
    //https://api.petfinder.com/v2/types/dog/breeds
    getBreeds: builder.query({
      query: (animal) => ({
        url: `types/${animal}/breeds`,
        headers: { Authorization: localStorage.getItem("token") },
      }),
      transformResponse: (response) => response.breeds,
    }),
    //https://api.petfinder.com/v2/animals/{id}
    getPet: builder.query({
      query: (id) => ({
        url: `animals/${id}`,
        headers: { Authorization: localStorage.getItem("token") },
      }),
      transformResponse: (response) => response.animal,
    }),
    //https://api.petfinder.com/v2/animals?type=dog&breed=pug&location=NJ
    search: builder.query({
      query: ({ animal, breed, location }) => ({
        url: `animals`,
        params: { animal, breed, location },
        headers: { Authorization: localStorage.getItem("token") },
      }),
      transformResponse: (response) => response.animals,
    }),
  }),
});

export const { useGetBreedsQuery, useGetPetQuery, useSearchQuery } = petApi;
