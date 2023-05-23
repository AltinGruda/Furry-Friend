import { configureStore } from "@reduxjs/toolkit";
import searchParams from "./slices/searchParamsSlice";
import { petApi } from "./petApiService";
const petFinderKey = "DibH8zFscTGS1WCDVqCo4UH7rVsqGD22uxNTs7NeFgTovfwhGM";
const petFinderSecret = "cn1Cm7IlnZf43Lu9uLZLRAgLKqQJtLVNzuK6bKvF";
import { useEffect, useState } from "react";

const Test = () => {
  const [accessToken, setAccessToken] = useState();
  useEffect(() => {
    const fetchAccessToken = async () => {
      const params = new URLSearchParams();
      params.append("grant_type", "client_credentials");
      params.append("client_id", petFinderKey);
      params.append("client_secret", petFinderSecret);
      const petFinderRes = await fetch(
        "http://api.petfinder.com/v2/oauth2/token",
        {
          method: "POST",
          body: params,
        }
      );
      const result = await petFinderRes.json();
      setAccessToken(`${result.token_type} ${result.access_token}`);
    };
    fetchAccessToken();
  }, []);

  localStorage.setItem("token", accessToken);
};
Test;

const store = configureStore({
  reducer: {
    searchParams,
    [petApi.reducerPath]: petApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(petApi.middleware),
});

export default store;
