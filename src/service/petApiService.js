import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const client_id = "DibH8zFscTGS1WCDVqCo4UH7rVsqGD22uxNTs7NeFgTovfwhGM";
const client_secret = "cn1Cm7IlnZf43Lu9uLZLRAgLKqQJtLVNzuK6bKvF";
let token = "";
// eslint-disable-next-line no-unused-vars
let tokenType = "";
let expires;
// Get OAuth token
const getOAuth = function () {
  return fetch("https://api.petfinder.com/v2/oauth2/token", {
    method: "POST",
    body:
      "grant_type=client_credentials&client_id=" +
      client_id +
      "&client_secret=" +
      client_secret,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      // Store token data
      token = data.access_token;
      tokenType = data.token_type;
      expires = new Date().getTime() + data.expires_in * 1000;
    });
};

// Make call if token expired
const makeCall = () => {
  // If current token is invalid, get a new one
  if (!expires || expires - new Date().getTime() < 1) {
    getOAuth();
  }
};
makeCall();

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
        headers: { Authorization: `Bearer ${token}` },
      }),
      transformResponse: (response) => response.breeds,
    }),
    //https://api.petfinder.com/v2/animals/{id}
    getPet: builder.query({
      query: (id) => ({
        url: `animals/${id}`,
        headers: { Authorization: `Bearer ${token}` },
      }),
      transformResponse: (response) => response.animal,
    }),
    //https://api.petfinder.com/v2/animals?type=dog&breed=pug&location=NJ
    search: builder.query({
      query: ({ animal, breed, location }) => ({
        url: `animals`,
        params: { animal, breed, location },
        headers: { Authorization: `Bearer ${token}` },
      }),
      transformResponse: (response) => response.animals,
    }),
  }),
});

export const { useGetBreedsQuery, useGetPetQuery, useSearchQuery } = petApi;
