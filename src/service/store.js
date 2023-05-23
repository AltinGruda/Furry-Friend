import { configureStore } from "@reduxjs/toolkit";
import searchParams from "./slices/searchParamsSlice";
import { petApi } from "./petApiService";

const store = configureStore({
  reducer: {
    searchParams,
    [petApi.reducerPath]: petApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(petApi.middleware),
});

export default store;
